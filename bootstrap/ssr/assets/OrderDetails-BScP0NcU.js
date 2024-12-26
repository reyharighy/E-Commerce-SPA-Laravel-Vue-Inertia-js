import { mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import { ShieldCheckIcon, ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
const __default__ = {
  methods: {
    asset(path) {
      return `/${path}`;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "OrderDetails",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    },
    order: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const statusList = {
      "pending": 1,
      "accepted": 2,
      "confirmed": 3,
      "shipped": 4,
      "delivered": 5
    };
    const currentStatus = statusList[props.order["status"]];
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Order Details" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page"${_scopeId}><div class="relative flex gap-5 h-full w-full"${_scopeId}><div class="relative w-full flex mx-10"${_scopeId}><div class="relative flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list max-h-screen"${_scopeId}><div class="sticky top-0 flex flex-col bg-white gap-5 pb-5 shadow-sm"${_scopeId}><div class="flex w-full items-center justify-between mt-10"${_scopeId}><p class="text-5xl font-semibold"${_scopeId}> Order Details </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("order.index")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "ms-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` back `);
                      } else {
                        return [
                          createTextVNode(" back ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, { class: "ms-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" back ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><hr${_scopeId}><p class="text-3xl font-semibold text-gray-700"${_scopeId}> Status Timeline </p><div class="flex mx-14"${_scopeId}><!--[-->`);
            ssrRenderList(statusList, (step, status) => {
              _push2(`<div class="flex w-full justify-evenly items-center border border-gray-500 px-5 py-2 rounded-lg"${_scopeId}><div class="flex w-full items-center gap-2 ml-5"${_scopeId}>`);
              if (unref(currentStatus) >= step) {
                _push2(`<p class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(capitalize(status))}</p>`);
              } else if (unref(currentStatus) + 1 === step) {
                _push2(`<p class="text-xl font-bold"${_scopeId}>${ssrInterpolate(capitalize(status.slice(0, -2)))}ing </p>`);
              } else {
                _push2(`<p class="text-xl font-semibold text-gray-500"${_scopeId}>${ssrInterpolate(capitalize(status))}</p>`);
              }
              if (unref(currentStatus) >= step) {
                _push2(ssrRenderComponent(unref(ShieldCheckIcon), { class: "size-7 text-green-500" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (status != Object.keys(statusList).slice(-1)) {
                _push2(ssrRenderComponent(unref(ChevronDoubleRightIcon), { class: "size-7 text-gray-400" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><!--[-->`);
            ssrRenderList(props.data, (product, _2) => {
              _push2(`<div class="max-w-5xl flex justify-center ml-20 mr-10"${_scopeId}><div class="${ssrRenderClass([
                "w-full flex gap-5",
                product != props.data[0] ? "mb-5" : "",
                props.data.length === 1 ? "mb-5" : ""
              ])}"${_scopeId}><img class="w-1/6 rounded-xl"${ssrRenderAttr("src", _ctx.asset(product["imageurl"].slice(36)))} alt=""${_scopeId}><div class="w-full flex flex-col gap-2 text-lg justify-between"${_scopeId}><div class="flex flex-col gap-3 max-w-3xl"${_scopeId}><div class="flex justify-between items-center h-fit"${_scopeId}><p class="font-semibold text-xl"${_scopeId}>${ssrInterpolate(product["name"])}</p></div><div class="text-gray-500 flex gap-2 items-center leading-none"${_scopeId}><p class="flex-shrink-0 text-xl"${_scopeId}>${ssrInterpolate(product["category"])}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(product["size"])}</p></div><div class="text-xl"${_scopeId}><p class="font-bold"${_scopeId}> $ ${ssrInterpolate(product["price"])}</p></div><div${_scopeId}><p class="text-xl"${_scopeId}>${ssrInterpolate(product["quantity"])} `);
              if (product["quantity"] > 1) {
                _push2(`<span${_scopeId}> items </span>`);
              } else {
                _push2(`<span${_scopeId}> item </span>`);
              }
              _push2(`</p></div></div></div></div><hr class="mt-5"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page" }, [
                createVNode("div", { class: "relative flex gap-5 h-full w-full" }, [
                  createVNode("div", { class: "relative w-full flex mx-10" }, [
                    createVNode("div", { class: "relative flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list max-h-screen" }, [
                      createVNode("div", { class: "sticky top-0 flex flex-col bg-white gap-5 pb-5 shadow-sm" }, [
                        createVNode("div", { class: "flex w-full items-center justify-between mt-10" }, [
                          createVNode("p", { class: "text-5xl font-semibold" }, " Order Details "),
                          createVNode(unref(Link), {
                            href: _ctx.route("order.index")
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, { class: "ms-4" }, {
                                default: withCtx(() => [
                                  createTextVNode(" back ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode("hr"),
                        createVNode("p", { class: "text-3xl font-semibold text-gray-700" }, " Status Timeline "),
                        createVNode("div", { class: "flex mx-14" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(statusList, (step, status) => {
                            return createVNode("div", { class: "flex w-full justify-evenly items-center border border-gray-500 px-5 py-2 rounded-lg" }, [
                              createVNode("div", { class: "flex w-full items-center gap-2 ml-5" }, [
                                unref(currentStatus) >= step ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-xl font-semibold"
                                }, toDisplayString(capitalize(status)), 1)) : unref(currentStatus) + 1 === step ? (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-xl font-bold"
                                }, toDisplayString(capitalize(status.slice(0, -2))) + "ing ", 1)) : (openBlock(), createBlock("p", {
                                  key: 2,
                                  class: "text-xl font-semibold text-gray-500"
                                }, toDisplayString(capitalize(status)), 1)),
                                unref(currentStatus) >= step ? (openBlock(), createBlock(unref(ShieldCheckIcon), {
                                  key: 3,
                                  class: "size-7 text-green-500"
                                })) : createCommentVNode("", true)
                              ]),
                              status != Object.keys(statusList).slice(-1) ? (openBlock(), createBlock(unref(ChevronDoubleRightIcon), {
                                key: 0,
                                class: "size-7 text-gray-400"
                              })) : createCommentVNode("", true)
                            ]);
                          }), 64))
                        ])
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data, (product, _2) => {
                        return openBlock(), createBlock("div", {
                          class: "max-w-5xl flex justify-center ml-20 mr-10",
                          key: product.id
                        }, [
                          createVNode("div", {
                            class: [
                              "w-full flex gap-5",
                              product != props.data[0] ? "mb-5" : "",
                              props.data.length === 1 ? "mb-5" : ""
                            ]
                          }, [
                            createVNode("img", {
                              class: "w-1/6 rounded-xl",
                              src: _ctx.asset(product["imageurl"].slice(36)),
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-full flex flex-col gap-2 text-lg justify-between" }, [
                              createVNode("div", { class: "flex flex-col gap-3 max-w-3xl" }, [
                                createVNode("div", { class: "flex justify-between items-center h-fit" }, [
                                  createVNode("p", { class: "font-semibold text-xl" }, toDisplayString(product["name"]), 1)
                                ]),
                                createVNode("div", { class: "text-gray-500 flex gap-2 items-center leading-none" }, [
                                  createVNode("p", { class: "flex-shrink-0 text-xl" }, toDisplayString(product["category"]), 1),
                                  createVNode("p", null, "|"),
                                  createVNode("p", null, toDisplayString(product["size"]), 1)
                                ]),
                                createVNode("div", { class: "text-xl" }, [
                                  createVNode("p", { class: "font-bold" }, " $ " + toDisplayString(product["price"]), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xl" }, [
                                    createTextVNode(toDisplayString(product["quantity"]) + " ", 1),
                                    product["quantity"] > 1 ? (openBlock(), createBlock("span", { key: 0 }, " items ")) : (openBlock(), createBlock("span", { key: 1 }, " item "))
                                  ])
                                ])
                              ])
                            ])
                          ], 2),
                          createVNode("hr", { class: "mt-5" })
                        ]);
                      }), 128))
                    ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/OrderDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
