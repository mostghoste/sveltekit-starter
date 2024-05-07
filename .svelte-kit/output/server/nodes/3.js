import * as server from '../entries/pages/auth/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Bu1H7kOc.js","_app/immutable/chunks/scheduler.LNg0iwUO.js","_app/immutable/chunks/index.BhMkRw3Q.js","_app/immutable/chunks/spread.CN4WR7uZ.js"];
export const stylesheets = [];
export const fonts = [];
