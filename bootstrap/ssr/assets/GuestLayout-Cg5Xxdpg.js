import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { router, usePage, Head } from "@inertiajs/vue3";
import { L as Logo, T as Toast } from "./Toast-DjZaaVwW.js";
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const showingToast = ref(false);
    router.on("finish", () => {
      showingToast.value = !!usePage().props.toast.message;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(`<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100"><div class="mt-5">`);
      _push(ssrRenderComponent(Logo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Toast, {
        message: _ctx.$page.props.toast.message || "",
        position: "bottom-right",
        show: showingToast.value,
        onHide: ($event) => showingToast.value = false,
        type: "Success"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([
        "mt-6 px-6 py-4 w-full bg-white shadow-md rounded-lg overflow-scroll scrollbar-hide",
        __props.width ? __props.width : "max-w-md"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
