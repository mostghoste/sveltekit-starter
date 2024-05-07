import "../../chunks/index.js";
const load = async (event) => {
  let user = null;
  if (event.locals.pb.authStore.isValid) {
    user = { ...event.locals.pb.authStore.model };
  }
  return {
    user
  };
};
export {
  load
};
