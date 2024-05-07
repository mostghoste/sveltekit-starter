

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.wUhdMpDx.js","_app/immutable/chunks/scheduler.LNg0iwUO.js","_app/immutable/chunks/index.BhMkRw3Q.js"];
export const stylesheets = ["_app/immutable/assets/0._gbduK3b.css"];
export const fonts = [];
