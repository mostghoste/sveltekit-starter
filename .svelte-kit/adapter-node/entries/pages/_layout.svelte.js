import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".backgroundgradient.svelte-wxk1u{background:repeating-linear-gradient(\n            120deg,\n            #052e16,\n            #14532d 6rem,\n            #052e16 6.1rem,\n            #14532d 8rem,\n            #14532d 8.5rem,\n            #14532d 8.9rem\n        )}.shadowgradient.svelte-wxk1u{background:radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));filter:blur(200px)}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n    import \\"../app.pcss\\";\\n<\/script>\\n\\n<div\\n    class=\\"w-screen h-screen fixed top-0 left-0 rounded-full shadowgradient z-0\\"\\n></div>\\n\\n<div\\n    class=\\"flex flex-col w-screen h-screen justify-start items-center backgroundgradient\\"\\n>\\n    <div class=\\"z-20\\">\\n        <slot></slot>\\n    </div>\\n</div>\\n\\n<style>\\n    .backgroundgradient {\\n        background: repeating-linear-gradient(\\n            120deg,\\n            #052e16,\\n            #14532d 6rem,\\n            #052e16 6.1rem,\\n            #14532d 8rem,\\n            #14532d 8.5rem,\\n            #14532d 8.9rem\\n        );\\n    }\\n\\n    .shadowgradient {\\n        background: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));\\n        filter: blur(200px);\\n    }\\n</style>\\n"],"names":[],"mappings":"AAiBI,gCAAoB,CAChB,UAAU,CAAE;AACpB,YAAY,MAAM,CAAC;AACnB,YAAY,OAAO,CAAC;AACpB,YAAY,OAAO,CAAC,IAAI,CAAC;AACzB,YAAY,OAAO,CAAC,MAAM,CAAC;AAC3B,YAAY,OAAO,CAAC,IAAI,CAAC;AACzB,YAAY,OAAO,CAAC,MAAM,CAAC;AAC3B,YAAY,OAAO,CAAC,MAAM;AAC1B,SACI,CAEA,4BAAgB,CACZ,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjE,MAAM,CAAE,KAAK,KAAK,CACtB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-screen h-screen fixed top-0 left-0 rounded-full shadowgradient z-0 svelte-wxk1u"></div> <div class="flex flex-col w-screen h-screen justify-start items-center backgroundgradient svelte-wxk1u"><div class="z-20">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
