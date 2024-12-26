import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import _sfc_main$3 from "./DeleteUserForm-OnRDmz5r.js";
import _sfc_main$2 from "./UpdatePasswordForm-DWMymiMt.js";
import _sfc_main$1 from "./UpdateProfileInformationForm-g9Gk5aio.js";
import "@inertiajs/vue3";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "@heroicons/vue/20/solid";
import "./DangerButton-gyytDuLp.js";
import "./TextInput-Db0SKJ0H.js";
import "./SecondaryButton-D2DFYZS-.js";
import "./PrimaryButton-BLKm_jDc.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    emailVerifiedAt: {
      type: String
    },
    message: {
      type: String
    },
    postalList: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Profile" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              "email-verified-at": __props.emailVerifiedAt,
              message: __props.message,
              "postal-list": __props.postalList,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$1, {
                      "email-verified-at": __props.emailVerifiedAt,
                      message: __props.message,
                      "postal-list": __props.postalList,
                      class: "max-w-xl"
                    }, null, 8, ["email-verified-at", "message", "postal-list"])
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$2, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$3, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
