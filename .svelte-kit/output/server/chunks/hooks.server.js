import "./index.js";
import PocketBase from "pocketbase";
import { i as building } from "./internal.js";
import { P as POCKETBASE_IP } from "./Pocketbase.js";
const handle = async ({ event, resolve }) => {
  event.locals.id = "";
  event.locals.email = "";
  event.locals.pb = new PocketBase(POCKETBASE_IP);
  const isAuth = event.url.pathname === "/auth";
  if (isAuth || building) {
    event.cookies.set("pb_auth", "", { path: "/" });
    return await resolve(event);
  }
  const pb_auth = event.request.headers.get("cookie") ?? "";
  event.locals.pb.authStore.loadFromCookie(pb_auth);
  try {
    const auth = await event.locals.pb.collection("users").authRefresh();
    event.locals.id = auth.record.id;
    event.locals.email = auth.record.email;
  } catch (_) {
    console.log("Couldn't reauthenticate");
  }
  const response = await resolve(event);
  const cookie = event.locals.pb.authStore.exportToCookie({ sameSite: "lax", path: "/" });
  response.headers.append("set-cookie", cookie);
  return response;
};
export {
  handle
};
