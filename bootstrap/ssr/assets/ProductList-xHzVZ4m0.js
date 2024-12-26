import { mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { S as SellerAuthenticatedLayout } from "./SellerAuthenticatedLayout-1GsbVnIc.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
const _sfc_main = {
  __name: "ProductList",
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
    },
    actionName: {
      type: String,
      required: true
    },
    actionPage: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const table_head_list = [
      "No",
      "Name",
      "Category",
      "Price",
      "SKU",
      "Action"
    ];
    const discounted = (val) => val > 0;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SellerAuthenticatedLayout, mergeProps({ title: __props.pageTitle }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col my-5"${_scopeId}><div class="flex items-center justify-between px-8"${_scopeId}>`);
            if (__props.pageTitle == __props.rootPath[0]) {
              _push2(`<div${_scopeId}><h2 class="font-semibold text-xl text-[#008a8e] leading-tight"${_scopeId}>${ssrInterpolate(__props.pageTitle)}</h2></div>`);
            } else {
              _push2(`<div class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(__props.rootPath, (page) => {
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
            _push2(ssrRenderComponent(unref(Link), { href: __props.actionPage }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "ms-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.actionName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.actionName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, { class: "ms-4" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.actionName), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mx-auto w-full px-8 pt-5"${_scopeId}><p class="mb-2 text-red-400"${_scopeId}> * means discounted price </p><table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b"${_scopeId}><tr${_scopeId}><!--[-->`);
            ssrRenderList(table_head_list, (head) => {
              _push2(`<th class="px-6 py-3" scope="col"${_scopeId}>${ssrInterpolate(head)}</th>`);
            });
            _push2(`<!--]--></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.data, (product, index) => {
              _push2(`<tr class="bg-white border-b hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="px-6 py-4 font-semibold"${_scopeId}>${ssrInterpolate(product.name)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(product.category.name)}</td><td class="px-6 py-4"${_scopeId}> $${ssrInterpolate(product.discounted_price.toFixed(2))} <span class="text-red-400 font-extrabold"${_scopeId}>${ssrInterpolate(discounted(product.discount) ? "*" : "")}</span></td><td${_scopeId}><!--[-->`);
              ssrRenderList(product.sizes, (stock, size) => {
                _push2(`<div class="flex flex-col my-1 w-fit"${_scopeId}>`);
                if (stock < 10 && stock > 0) {
                  _push2(`<div class="flex gap-1"${_scopeId}><p class="text-red-400 font-semibold h-full"${_scopeId}> Size ${ssrInterpolate(size)} is ${ssrInterpolate(stock)} items left! </p></div>`);
                } else if (stock == 0) {
                  _push2(`<div class="flex gap-1"${_scopeId}><p class="text-red-400 font-semibold h-full"${_scopeId}> Size ${ssrInterpolate(size)} is out of stock! </p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></td><td class="px-6 py-4 space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "font-medium hover:underline text-[#00adb5]",
                href: _ctx.route("product.show", product.id)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.rootPath, (page) => {
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
                  ])),
                  createVNode(unref(Link), { href: __props.actionPage }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, { class: "ms-4" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.actionName), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "mx-auto w-full px-8 pt-5" }, [
                  createVNode("p", { class: "mb-2 text-red-400" }, " * means discounted price "),
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
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (product, index) => {
                        return openBlock(), createBlock("tr", {
                          class: "bg-white border-b hover:bg-gray-50",
                          key: product.id
                        }, [
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(index + 1), 1),
                          createVNode("td", { class: "px-6 py-4 font-semibold" }, toDisplayString(product.name), 1),
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(product.category.name), 1),
                          createVNode("td", { class: "px-6 py-4" }, [
                            createTextVNode(" $" + toDisplayString(product.discounted_price.toFixed(2)) + " ", 1),
                            createVNode("span", { class: "text-red-400 font-extrabold" }, toDisplayString(discounted(product.discount) ? "*" : ""), 1)
                          ]),
                          createVNode("td", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(product.sizes, (stock, size) => {
                              return openBlock(), createBlock("div", { class: "flex flex-col my-1 w-fit" }, [
                                stock < 10 && stock > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex gap-1"
                                }, [
                                  createVNode("p", { class: "text-red-400 font-semibold h-full" }, " Size " + toDisplayString(size) + " is " + toDisplayString(stock) + " items left! ", 1)
                                ])) : stock == 0 ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex gap-1"
                                }, [
                                  createVNode("p", { class: "text-red-400 font-semibold h-full" }, " Size " + toDisplayString(size) + " is out of stock! ", 1)
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 256))
                          ]),
                          createVNode("td", { class: "px-6 py-4 space-x-2" }, [
                            createVNode(unref(Link), {
                              class: "font-medium hover:underline text-[#00adb5]",
                              href: _ctx.route("product.show", product.id)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seller/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
