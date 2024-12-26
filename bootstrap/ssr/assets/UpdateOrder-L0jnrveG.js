import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { S as SellerAuthenticatedLayout } from "./SellerAuthenticatedLayout-1GsbVnIc.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./SecondaryButton-D2DFYZS-.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import "./DangerButton-gyytDuLp.js";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
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
  __name: "UpdateOrder",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    },
    order: {
      type: Object,
      required: true
    },
    pageTitle: {
      type: String,
      required: true
    },
    rootPath: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const updateOrderStatusModal = ref(false);
    const selectedStatus = ref(null);
    const statusList = [
      "accepted",
      "confirmed",
      "shipped"
    ];
    const updateStatusForm = useForm({
      order: props.order,
      status: props.order.status
    });
    const confirmUpdateOrderStatus = () => {
      updateOrderStatusModal.value = true;
      nextTick(() => selectedStatus.value);
    };
    const updateOrderStatus = () => {
      updateStatusForm.patch(route("update-order", updateStatusForm.order), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => selectedStatus.value,
        onFinish: () => updateStatusForm.reset(),
        data: {
          status: updateStatusForm.status
        }
      });
    };
    const closeModal = () => {
      updateOrderStatusModal.value = false;
      updateStatusForm.clearErrors();
      updateStatusForm.reset({
        status: null
      });
    };
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SellerAuthenticatedLayout, mergeProps({
        title: props.pageTitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex flex-col my-5 max-h-screen overflow-scroll scrollbar-hide"${_scopeId}><div class="sticky top-0 flex flex-col items-center justify-between px-8 bg-white shadow-sm"${_scopeId}><div class="flex w-full"${_scopeId}>`);
            if (__props.pageTitle == props.rootPath[0]) {
              _push2(`<div${_scopeId}><h2 class="font-semibold text-xl text-[#008a8e] leading-tight"${_scopeId}>${ssrInterpolate(__props.pageTitle)}</h2></div>`);
            } else {
              _push2(`<div class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(props.rootPath, (page) => {
                _push2(`<div class="font-semibold text-xl text-gray-900 leading-tight"${_scopeId}><div class="flex flex-row items-end"${_scopeId}>`);
                if (page != props.pageTitle) {
                  _push2(`<h1 class="mr-2 text-2xl leading-tight"${_scopeId}>${ssrInterpolate(page)}</h1>`);
                } else {
                  _push2(`<!---->`);
                }
                if (page != props.pageTitle) {
                  _push2(ssrRenderComponent(unref(ChevronDoubleRightIcon), { class: "mr-2 size-7 text-gray-400" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--><div class="font-semibold text-2xl text-[#008a8e] leading-tight"${_scopeId}>${ssrInterpolate(props.pageTitle)}</div></div>`);
            }
            _push2(`</div><div class="flex justify-end items-center w-full px-10 mt-5"${_scopeId}><div class="w-1/2"${_scopeId}><p class="leading-none text-xl font-semibold"${_scopeId}> Order Status: ${ssrInterpolate(capitalize(unref(updateStatusForm).status))}</p></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "p-2",
              onClick: confirmUpdateOrderStatus
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><!--[-->`);
            ssrRenderList(props.data, (product, _2) => {
              _push2(`<div class="max-w-5xl flex justify-center ml-20 mr-10 my-5"${_scopeId}><div class="w-full flex gap-5"${_scopeId}><img class="w-1/6 rounded-xl"${ssrRenderAttr("src", _ctx.asset(product["imageurl"].slice(36)))} alt=""${_scopeId}><div class="w-full flex flex-col gap-2 text-lg justify-between"${_scopeId}><div class="flex flex-col gap-3 max-w-3xl"${_scopeId}><div class="flex justify-between items-center h-fit"${_scopeId}><p class="font-semibold text-xl"${_scopeId}>${ssrInterpolate(product["name"])}</p></div><div class="text-gray-500 flex gap-2 items-center leading-none"${_scopeId}><p class="flex-shrink-0 text-xl"${_scopeId}>${ssrInterpolate(product["category"])}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(product["size"])}</p></div><div class="text-xl"${_scopeId}><p class="font-bold"${_scopeId}> $ ${ssrInterpolate(product["price"])}</p></div><div${_scopeId}><p class="text-xl"${_scopeId}>${ssrInterpolate(product["quantity"])} `);
              if (product["quantity"] > 1) {
                _push2(`<span${_scopeId}> items </span>`);
              } else {
                _push2(`<span${_scopeId}> item </span>`);
              }
              _push2(`</p></div></div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "max-width": "sm",
              show: updateOrderStatusModal.value,
              onClose: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900"${_scopeId2}><h2 class="text-lg font-medium text-gray-900 mb-5"${_scopeId2}> Please specify the status </h2><select class="${ssrRenderClass([
                    "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                    "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                  ])}"${_scopeId2}><!--[-->`);
                  ssrRenderList(statusList, (status) => {
                    _push3(`<option${ssrRenderAttr("value", status)}${ssrIncludeBooleanAttr(Array.isArray(unref(updateStatusForm).status) ? ssrLooseContain(unref(updateStatusForm).status, status) : ssrLooseEqual(unref(updateStatusForm).status, status)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(capitalize(status))}</option>`);
                  });
                  _push3(`<!--]--></select><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    class: ["ms-3", { "opacity-25": unref(updateStatusForm).processing }],
                    disabled: unref(updateStatusForm).processing,
                    onClick: updateOrderStatus
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` update `);
                      } else {
                        return [
                          createTextVNode(" update ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-5" }, " Please specify the status "),
                      withDirectives(createVNode("select", {
                        class: [
                          "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                          "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                        ],
                        "onUpdate:modelValue": ($event) => unref(updateStatusForm).status = $event
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(statusList, (status) => {
                          return createVNode("option", {
                            value: status,
                            key: status
                          }, toDisplayString(capitalize(status)), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(updateStatusForm).status]
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(updateStatusForm).processing }],
                          disabled: unref(updateStatusForm).processing,
                          onClick: updateOrderStatus
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" update ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "relative flex flex-col my-5 max-h-screen overflow-scroll scrollbar-hide" }, [
                createVNode("div", { class: "sticky top-0 flex flex-col items-center justify-between px-8 bg-white shadow-sm" }, [
                  createVNode("div", { class: "flex w-full" }, [
                    __props.pageTitle == props.rootPath[0] ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("h2", { class: "font-semibold text-xl text-[#008a8e] leading-tight" }, toDisplayString(__props.pageTitle), 1)
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.rootPath, (page) => {
                        return openBlock(), createBlock("div", { class: "font-semibold text-xl text-gray-900 leading-tight" }, [
                          createVNode("div", { class: "flex flex-row items-end" }, [
                            page != props.pageTitle ? (openBlock(), createBlock("h1", {
                              key: 0,
                              class: "mr-2 text-2xl leading-tight"
                            }, toDisplayString(page), 1)) : createCommentVNode("", true),
                            page != props.pageTitle ? (openBlock(), createBlock(unref(ChevronDoubleRightIcon), {
                              key: 1,
                              class: "mr-2 size-7 text-gray-400"
                            })) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 256)),
                      createVNode("div", { class: "font-semibold text-2xl text-[#008a8e] leading-tight" }, toDisplayString(props.pageTitle), 1)
                    ]))
                  ]),
                  createVNode("div", { class: "flex justify-end items-center w-full px-10 mt-5" }, [
                    createVNode("div", { class: "w-1/2" }, [
                      createVNode("p", { class: "leading-none text-xl font-semibold" }, " Order Status: " + toDisplayString(capitalize(unref(updateStatusForm).status)), 1)
                    ]),
                    createVNode(_sfc_main$1, {
                      class: "p-2",
                      onClick: withModifiers(confirmUpdateOrderStatus, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(props.data, (product, _2) => {
                  return openBlock(), createBlock("div", {
                    class: "max-w-5xl flex justify-center ml-20 mr-10 my-5",
                    key: product.id
                  }, [
                    createVNode("div", { class: "w-full flex gap-5" }, [
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
                    ])
                  ]);
                }), 128))
              ]),
              createVNode(_sfc_main$2, {
                "max-width": "sm",
                show: updateOrderStatusModal.value,
                onClose: closeModal
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-5 text-gray-900" }, [
                    createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-5" }, " Please specify the status "),
                    withDirectives(createVNode("select", {
                      class: [
                        "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                        "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                      ],
                      "onUpdate:modelValue": ($event) => unref(updateStatusForm).status = $event
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(statusList, (status) => {
                        return createVNode("option", {
                          value: status,
                          key: status
                        }, toDisplayString(capitalize(status)), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(updateStatusForm).status]
                    ]),
                    createVNode("div", { class: "mt-6 flex justify-end" }, [
                      createVNode(_sfc_main$3, { onClick: closeModal }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, {
                        class: ["ms-3", { "opacity-25": unref(updateStatusForm).processing }],
                        disabled: unref(updateStatusForm).processing,
                        onClick: updateOrderStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" update ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seller/UpdateOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
