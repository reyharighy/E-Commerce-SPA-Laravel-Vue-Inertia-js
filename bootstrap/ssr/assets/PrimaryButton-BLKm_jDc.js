import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    bgColor: {
      type: String,
      required: false
    },
    py: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center rounded-md border border-transparent px-4 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out text-[#dfecea] hover:bg-[#008a8e] hover:text-[#ffffff]",
          __props.bgColor ? __props.bgColor : "bg-[#00adb5]",
          __props.py ? __props.py : "py-2"
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
