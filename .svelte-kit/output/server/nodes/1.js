

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DW2ND8Pc.js","_app/immutable/chunks/scheduler.LNg0iwUO.js","_app/immutable/chunks/index.BhMkRw3Q.js","_app/immutable/chunks/entry.DigKWdaT.js"];
export const stylesheets = [];
export const fonts = [];
