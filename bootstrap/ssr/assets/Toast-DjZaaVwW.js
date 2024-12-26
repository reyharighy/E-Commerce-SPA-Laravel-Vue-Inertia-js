import { useSSRContext, mergeProps, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "-m-1.5 p-1.5" }, _attrs))}><div class="text-[30px] font-integralcf-extrabold"> SHOP<span class="text-[#00adb5]">.CO</span></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-x-lg",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast/IconError.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconError = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-exclamation-lg",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast/IconWarning.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconWarning = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-check-lg",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast/IconSuccess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  emits: ["hide"],
  data: () => ({
    timeout: null
  }),
  watch: {
    show() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.$emit("hide");
      }, 3e3);
    }
  },
  props: {
    message: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "Success",
      validator: function(value) {
        return ["Success", "Warning", "Error"].indexOf(value) !== -1;
      }
    },
    position: {
      type: String,
      default: "bottom-right"
    }
  },
  computed: {
    transitionName() {
      const transitions = {
        "top-left": "ltr",
        "bottom-left": "ltr",
        "top-right": "rtl",
        "bottom-right": "rtl"
      };
      return transitions[this.getPosition];
    },
    toastType() {
      return `toast-${this.getType}`;
    },
    toastIcon() {
      return `Icon${this.getType}`;
    },
    getType() {
      return ["Success", "Warning", "Error"].indexOf(this.type) === -1 ? "Success" : this.type;
    },
    getPosition() {
      return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(
        this.position
      ) === -1 ? "bottom-right" : this.position;
    },
    toastClasses() {
      return [this.toastType, this.getPosition];
    },
    toastTitle() {
      return this.title ? this.title : this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
  },
  components: {
    IconError,
    IconWarning,
    IconSuccess
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["toast flex flex-row w-fit absolute z-50", $options.toastClasses],
    style: $props.show ? null : { display: "none" }
  }, _attrs))} data-v-b8d048f2><div class="toast-icon" data-v-b8d048f2>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.toastIcon), null, null), _parent);
  _push(`</div><div class="toast-content" data-v-b8d048f2><div class="toast-title" data-v-b8d048f2>${ssrInterpolate($options.toastTitle)}</div><div class="toast-message" data-v-b8d048f2>${ssrInterpolate($props.message)}</div></div><button class="toast-button" data-v-b8d048f2>×</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast/Toast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b8d048f2"]]);
export {
  Logo as L,
  Toast as T
};
