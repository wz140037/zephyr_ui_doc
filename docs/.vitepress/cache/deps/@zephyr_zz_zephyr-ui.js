import {
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-QAXAIFA7.js";

// node_modules/.pnpm/@zephyr_zz+zephyr-ui@0.0.16/node_modules/@zephyr_zz/zephyr-ui/dist/zephyr-ui.es.js
import "D:/ZephyrProject/ZephyrUI/zephyr_ui_doc/node_modules/.pnpm/@zephyr_zz+zephyr-ui@0.0.16/node_modules/@zephyr_zz/zephyr-ui/dist/index.css";
var _ = {
  name: "ZzButton"
};
var m = defineComponent({
  ..._,
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(t) {
    return (o, n) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["zz-button", `zz-button--${t.type}`])
    }, [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var d = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, a] of o)
    n[s] = a;
  return n;
};
var e = d(m, [["__scopeId", "data-v-7c55743a"]]);
e.install = (t) => {
  t.component("ZzButton", e);
};
var f = [e];
var z = {
  install(t) {
    f.forEach((o) => t.component(o.name || "ZzButton", o));
  }
};
export {
  e as ZzButton,
  z as default
};
//# sourceMappingURL=@zephyr_zz_zephyr-ui.js.map
