import { mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./Checkbox-8GMolGi3.js";
import { _ as _sfc_main$1 } from "./GuestLayout-Cg5Xxdpg.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-Db0SKJ0H.js";
import { _ as _sfc_main$6 } from "./PrimaryButton-BLKm_jDc.js";
import { useForm, Link } from "@inertiajs/vue3";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const input_list = [
      { label: "Email", name: "email", type: "email" },
      { label: "Password", name: "password", type: "password" }
    ];
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password"),
        onSuccess: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Login" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><!--[-->`);
            ssrRenderList(input_list, (input) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "mt-4 mb-2",
                for: input.name,
                value: input.label
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-1 block w-full text-gray-900",
                id: input.name,
                type: input.type,
                modelValue: unref(form)[input.name],
                "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                required: ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                class: "mt-2",
                message: unref(form).errors[input.name]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><div class="mt-4 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}> Remember me </span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
              href: _ctx.route("password.request")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Forgot your password? `);
                } else {
                  return [
                    createTextVNode(" Forgot your password? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-row justify-center items-center gap-1 pt-5"${_scopeId}><p class="rounded-md text-sm text-gray-600"${_scopeId}> Don&#39;t have an account? </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
              href: _ctx.route("register")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(input_list, (input) => {
                  return createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      class: "mt-4 mb-2",
                      for: input.name,
                      value: input.label
                    }, null, 8, ["for", "value"]),
                    createVNode(_sfc_main$3, {
                      class: "mt-1 block w-full text-gray-900",
                      id: input.name,
                      type: input.type,
                      modelValue: unref(form)[input.name],
                      "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                      required: ""
                    }, null, 8, ["id", "type", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors[input.name]
                    }, null, 8, ["message"])
                  ]);
                }), 64)),
                createVNode("div", { class: "mt-4 block" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$5, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600" }, " Remember me ")
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(unref(Link), {
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
                    href: _ctx.route("password.request")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$6, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                createVNode("div", { class: "flex flex-row justify-center items-center gap-1 pt-5" }, [
                  createVNode("p", { class: "rounded-md text-sm text-gray-600" }, " Don't have an account? "),
                  createVNode(unref(Link), {
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
                    href: _ctx.route("register")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
