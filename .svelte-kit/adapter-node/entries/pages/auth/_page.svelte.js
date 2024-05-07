import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import PocketBase from "pocketbase";
import { P as POCKETBASE_IP } from "../../../chunks/Pocketbase.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new PocketBase(POCKETBASE_IP);
  let username = "";
  let password = "";
  return `<div class="w-full h-screen flex justify-center items-center flex-col"><form method="POST" action="/auth" class="flex flex-col gap-2 w-96 m-4 bg-gray-300 p-4 rounded-md"><input name="token" type="hidden"> <label${add_attribute(
    "class",
    `flex input relative input-bordered ${""}`,
    0
  )}><input class="grow" type="text" name="username" placeholder="slapyvardis"${add_attribute("value", username, 0)}> ${`${``}`}</label> <label${add_attribute(
    "class",
    `flex input relative input-bordered ${""}`,
    0
  )}><input class="grow" type="password" name="password" placeholder="slaptažodis"${add_attribute("value", password, 0)}> ${``}</label> <div class="flex gap-2 w-full justify-end"><button type="button" class="btn btn-secondary" data-svelte-h="svelte-1c2avuk">Registruotis</button> <button type="submit" class="btn btn-primary" data-svelte-h="svelte-k4zzn">Prisijungti</button></div></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
