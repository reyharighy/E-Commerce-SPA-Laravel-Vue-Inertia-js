import { mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { S as SellerAuthenticatedLayout } from "./SellerAuthenticatedLayout-1GsbVnIc.js";
import { Link } from "@inertiajs/vue3";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
const _sfc_main = {
  __name: "Order",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
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
    const table_head_list = [
      "No",
      "Name",
      "Total Amount",
      "Created At",
      "Status",
      "Updated At",
      "Action"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SellerAuthenticatedLayout, mergeProps({
        title: props.pageTitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col my-5"${_scopeId}><div class="flex items-center justify-between px-8"${_scopeId}>`);
            if (__props.pageTitle == __props.rootPath[0]) {
              _push2(`<div${_scopeId}><h2 class="font-semibold text-xl text-[#008a8e] leading-tight"${_scopeId}>${ssrInterpolate(__props.pageTitle)}</h2></div>`);
            } else {
              _push2(`<div class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(props.rootPath, (page) => {
                _push2(`<div class="font-semibold text-xl text-gray-900 leading-tight"${_scopeId}><div class="flex flex-row items-end"${_scopeId}>`);
                if (page != __props.pageTitle) {
                  _push2(`<h1 class="mr-2 text-2xl leading-tight"${_scopeId}>${ssrInterpolate(page)}</h1>`);
                } else {
                  _push2(`<!---->`);
                }
                if (page != __props.pageTitle) {
                  _push2(ssrRenderComponent(unref(ChevronDoubleRightIcon), { class: "mr-2 size-7 text-gray-400" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--><div class="font-semibold text-2xl text-[#008a8e] leading-tight"${_scopeId}>${ssrInterpolate(__props.pageTitle)}</div></div>`);
            }
            _push2(`</div><div class="mx-auto w-full px-8 pt-5"${_scopeId}><table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b"${_scopeId}><tr${_scopeId}><!--[-->`);
            ssrRenderList(table_head_list, (head) => {
              _push2(`<th class="px-6 py-3" scope="col"${_scopeId}>${ssrInterpolate(head)}</th>`);
            });
            _push2(`<!--]--></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(props.data, (order, index) => {
              _push2(`<tr class="bg-white border-b hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="px-6 py-4 font-semibold"${_scopeId}>${ssrInterpolate(order["user_name"])}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(order["total_amount"])}</td><td class="px-6 py-4 flex gap-2 items-center flex-shrink-0"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(order["created_at"].slice(2, 10))}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(order["created_at"].slice(11, 16))}</p></td><td class="px-6 py-4 font-bold text-gray-700"${_scopeId}>${ssrInterpolate(order["status"].toUpperCase())}</td><td class="px-6 py-4 flex gap-2 items-center flex-shrink-0"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(order["updated_at"].slice(2, 10))}</p><p${_scopeId}>|</p><p${_scopeId}>${ssrInterpolate(order["updated_at"].slice(11, 16))}</p></td><td class="px-6 py-4 space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "font-medium hover:underline text-[#00adb5]",
                href: _ctx.route("order-details", order)
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
            _push2(`<!--]--></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col my-5" }, [
                createVNode("div", { class: "flex items-center justify-between px-8" }, [
                  __props.pageTitle == __props.rootPath[0] ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("h2", { class: "font-semibold text-xl text-[#008a8e] leading-tight" }, toDisplayString(__props.pageTitle), 1)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.rootPath, (page) => {
                      return openBlock(), createBlock("div", { class: "font-semibold text-xl text-gray-900 leading-tight" }, [
                        createVNode("div", { class: "flex flex-row items-end" }, [
                          page != __props.pageTitle ? (openBlock(), createBlock("h1", {
                            key: 0,
                            class: "mr-2 text-2xl leading-tight"
                          }, toDisplayString(page), 1)) : createCommentVNode("", true),
                          page != __props.pageTitle ? (openBlock(), createBlock(unref(ChevronDoubleRightIcon), {
                            key: 1,
                            class: "mr-2 size-7 text-gray-400"
                          })) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 256)),
                    createVNode("div", { class: "font-semibold text-2xl text-[#008a8e] leading-tight" }, toDisplayString(__props.pageTitle), 1)
                  ]))
                ]),
                createVNode("div", { class: "mx-auto w-full px-8 pt-5" }, [
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
                      (openBlock(true), createBlock(Fragment, null, renderList(props.data, (order, index) => {
                        return openBlock(), createBlock("tr", {
                          class: "bg-white border-b hover:bg-gray-50",
                          key: order.id
                        }, [
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(index + 1), 1),
                          createVNode("td", { class: "px-6 py-4 font-semibold" }, toDisplayString(order["user_name"]), 1),
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(order["total_amount"]), 1),
                          createVNode("td", { class: "px-6 py-4 flex gap-2 items-center flex-shrink-0" }, [
                            createVNode("p", { class: "font-semibold" }, toDisplayString(order["created_at"].slice(2, 10)), 1),
                            createVNode("p", null, "|"),
                            createVNode("p", null, toDisplayString(order["created_at"].slice(11, 16)), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 font-bold text-gray-700" }, toDisplayString(order["status"].toUpperCase()), 1),
                          createVNode("td", { class: "px-6 py-4 flex gap-2 items-center flex-shrink-0" }, [
                            createVNode("p", { class: "font-semibold" }, toDisplayString(order["updated_at"].slice(2, 10)), 1),
                            createVNode("p", null, "|"),
                            createVNode("p", null, toDisplayString(order["updated_at"].slice(11, 16)), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 space-x-2" }, [
                            createVNode(unref(Link), {
                              class: "font-medium hover:underline text-[#00adb5]",
                              href: _ctx.route("order-details", order)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seller/Order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
