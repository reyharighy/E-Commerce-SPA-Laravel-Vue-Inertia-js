import { mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { Link } from "@inertiajs/vue3";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "@heroicons/vue/20/solid";
const _sfc_main = {
  __name: "UserOrder",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const table_head_list = [
      "No",
      "Total Amount",
      "Created At",
      "Status",
      "Updated At",
      "Action"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Order" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page"${_scopeId}><div class="relative flex gap-5 h-full w-full"${_scopeId}>`);
            if (props.data.length == 0) {
              _push2(`<div class="flex flex-col w-full justify-between gap-5"${_scopeId}><div class="flex flex-col justify-between gap-5 mx-10"${_scopeId}><p class="text-5xl font-semibold my-10"${_scopeId}> Order History </p><p class="text-center text-xl h-full font-normal my-10"${_scopeId}> You haven&#39;t made any orders yet. </p></div></div>`);
            } else {
              _push2(`<div class="w-full flex mx-10"${_scopeId}><div class="flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list"${_scopeId}><div class="sticky top-0 flex flex-col bg-white"${_scopeId}><p class="text-5xl font-semibold py-10"${_scopeId}> Order History </p><hr${_scopeId}></div><div class="mx-auto w-full pt-5"${_scopeId}><table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b"${_scopeId}><tr${_scopeId}><!--[-->`);
              ssrRenderList(table_head_list, (head) => {
                _push2(`<th class="px-6 py-3" scope="col"${_scopeId}>${ssrInterpolate(head)}</th>`);
              });
              _push2(`<!--]--></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(__props.data, (order, index) => {
                _push2(`<tr class="bg-white border-b hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="px-6 py-4 font-semibold"${_scopeId}>${ssrInterpolate(order["total_amount"])}</td><td class="px-6 py-4 flex gap-2 items-center flex-shrink-0"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(order["created_at"].slice(2, 10))}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(order["created_at"].slice(11, 16))}</p></td><td class="${ssrRenderClass([
                  "px-6 py-4 font-bold",
                  order["status"] === "accepted" ? "text-green-500" : ""
                ])}"${_scopeId}>${ssrInterpolate(order["status"].toUpperCase())}</td><td class="px-6 py-4 flex gap-2 items-center"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(order["updated_at"].slice(2, 10))}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(order["updated_at"].slice(11, 16))}</p></td><td class="px-6 py-4 space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  class: "font-medium hover:underline text-[#00adb5]",
                  href: _ctx.route("order.show", order)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` See Details `);
                    } else {
                      return [
                        createTextVNode(" See Details ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page" }, [
                createVNode("div", { class: "relative flex gap-5 h-full w-full" }, [
                  props.data.length == 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col w-full justify-between gap-5"
                  }, [
                    createVNode("div", { class: "flex flex-col justify-between gap-5 mx-10" }, [
                      createVNode("p", { class: "text-5xl font-semibold my-10" }, " Order History "),
                      createVNode("p", { class: "text-center text-xl h-full font-normal my-10" }, " You haven't made any orders yet. ")
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full flex mx-10"
                  }, [
                    createVNode("div", { class: "flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list" }, [
                      createVNode("div", { class: "sticky top-0 flex flex-col bg-white" }, [
                        createVNode("p", { class: "text-5xl font-semibold py-10" }, " Order History "),
                        createVNode("hr")
                      ]),
                      createVNode("div", { class: "mx-auto w-full pt-5" }, [
                        createVNode("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden" }, [
                          createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-100 border-b" }, [
                            createVNode("tr", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(table_head_list, (head) => {
                                return createVNode("th", {
                                  class: "px-6 py-3",
                                  scope: "col"
                                }, toDisplayString(head), 1);
                              }), 64))
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (order, index) => {
                              return openBlock(), createBlock("tr", {
                                class: "bg-white border-b hover:bg-gray-50",
                                key: order.id
                              }, [
                                createVNode("td", { class: "px-6 py-4" }, toDisplayString(index + 1), 1),
                                createVNode("td", { class: "px-6 py-4 font-semibold" }, toDisplayString(order["total_amount"]), 1),
                                createVNode("td", { class: "px-6 py-4 flex gap-2 items-center flex-shrink-0" }, [
                                  createVNode("p", { class: "font-semibold" }, toDisplayString(order["created_at"].slice(2, 10)), 1),
                                  createVNode("p", null, "|"),
                                  createVNode("p", null, toDisplayString(order["created_at"].slice(11, 16)), 1)
                                ]),
                                createVNode("td", {
                                  class: [
                                    "px-6 py-4 font-bold",
                                    order["status"] === "accepted" ? "text-green-500" : ""
                                  ]
                                }, toDisplayString(order["status"].toUpperCase()), 3),
                                createVNode("td", { class: "px-6 py-4 flex gap-2 items-center" }, [
                                  createVNode("p", { class: "font-semibold" }, toDisplayString(order["updated_at"].slice(2, 10)), 1),
                                  createVNode("p", null, "|"),
                                  createVNode("p", null, toDisplayString(order["updated_at"].slice(11, 16)), 1)
                                ]),
                                createVNode("td", { class: "px-6 py-4 space-x-2" }, [
                                  createVNode(unref(Link), {
                                    class: "font-medium hover:underline text-[#00adb5]",
                                    href: _ctx.route("order.show", order)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" See Details ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ])
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/UserOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
