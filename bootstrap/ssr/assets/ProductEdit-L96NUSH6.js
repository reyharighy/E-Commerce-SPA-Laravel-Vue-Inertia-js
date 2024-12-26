import { ref, watch, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createCommentVNode, Transition, withModifiers, vModelSelect, vModelDynamic, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderDynamicModel } from "vue/server-renderer";
import { S as SellerAuthenticatedLayout } from "./SellerAuthenticatedLayout-1GsbVnIc.js";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$4, b as _sfc_main$5 } from "./TextInput-Db0SKJ0H.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { _ as _sfc_main$3 } from "./Checkbox-8GMolGi3.js";
import { PopoverGroup, Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ProductEdit",
  __ssrInlineRender: true,
  props: {
    categoryList: {
      type: Object,
      required: true
    },
    data: {
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
    const props = __props;
    const input_list = [
      { label: "Name", name: "name", type: "text", span: "col-span-8" },
      { label: "Category", name: "category_id", span: "col-span-4" },
      { label: "Price ($)", name: "price", type: "number", span: "col-span-4" },
      { label: "Discount (%)", name: "discount", type: "number", span: "col-span-4" },
      { label: "Discounted Price ($)", name: "discounted_price", type: "number", span: "col-span-4" },
      { label: "Sizes: Qty", name: "sizes", span: "col-span-8" },
      { label: "Description", name: "description", type: "text", span: "col-span-8" }
    ];
    const sizes = ref(props.data.sizes || {});
    const sizeList = ["XS", "S", "M", "L", "XL"];
    const currentPrice = ref(props["data"]["price"]);
    const currentDiscount = ref(props["data"]["discount"]);
    const form = useForm({
      user_id: 1,
      name: props["data"]["name"],
      category_id: props["data"]["category"]["id"],
      price: currentPrice.value,
      discount: currentDiscount.value,
      discounted_price: props["data"]["discounted_price"],
      ratings: props["data"]["ratings"],
      reviews: props["data"]["reviews"],
      sizes: sizes.value,
      description: props["data"]["description"]
    });
    watch([() => form.price, () => form.discount], () => {
      form.discounted_price = (form.price * (100 - form.discount) / 100).toFixed(2);
    });
    const displaySizes = computed(() => {
      const sortedEntries = Object.entries(form.sizes).sort((a, b) => {
        const indexA = sizeList.indexOf(a[0]);
        const indexB = sizeList.indexOf(b[0]);
        return indexA - indexB;
      });
      return sortedEntries.length ? sortedEntries.map(([size, qty]) => `${size}: ${qty}`).join(", ") : "None";
    });
    const toggleSelection = (sizeObj, value, initialList) => {
      if (sizeObj.hasOwnProperty(value)) {
        delete sizeObj[value];
      } else {
        if (initialList.includes(value)) {
          sizeObj[value] = 0;
        }
      }
    };
    const submit = () => {
      form.put(route("product.update", props["data"]["id"]), {
        onSuccess: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SellerAuthenticatedLayout, mergeProps({ title: __props.pageTitle }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-10 mt-5"${_scopeId}><div class="flex items-center justify-between px-8"${_scopeId}>`);
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
            _push2(ssrRenderComponent(unref(Link), {
              class: "w-24",
              href: __props.actionPage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "w-full justify-center" }, {
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
                    createVNode(_sfc_main$1, { class: "w-full justify-center" }, {
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
            _push2(`</div><form class="w-full max-w-xl m-auto px-6 py-6 mb-6 bg-white rounded-lg border border-t-gray-200"${_scopeId}><div class="grid grid-cols-8 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(input_list, (input) => {
              _push2(`<div class="${ssrRenderClass(input.span)}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "mb-2",
                for: input.name,
                value: input.label
              }, null, _parent2, _scopeId));
              if (input.name == "category_id") {
                _push2(`<select class="w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"${ssrRenderAttr("name", input.name)}${ssrRenderAttr("id", input.name)} required${_scopeId}><!--[-->`);
                ssrRenderList(__props.categoryList, (category) => {
                  _push2(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form)[input.name]) ? ssrLooseContain(unref(form)[input.name], category.id) : ssrLooseEqual(unref(form)[input.name], category.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
                });
                _push2(`<!--]--></select>`);
              } else if (input.name == "price" || input.name == "discount") {
                _push2(`<input class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]"${ssrRenderAttr("id", input.name)}${ssrRenderAttr("type", input.type)} step="0.01"${ssrRenderDynamicModel(input.type, unref(form)[input.name], null)} required${_scopeId}>`);
              } else if (input.name == "discounted_price") {
                _push2(`<input class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] bg-gray-200"${ssrRenderAttr("id", input.name)}${ssrRenderAttr("type", input.type)} step="0.01"${ssrRenderDynamicModel(input.type, unref(form)[input.name], null)} disabled${_scopeId}>`);
              } else if (input.name == "description") {
                _push2(`<textarea class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] scrollbar-hide" rows="3"${ssrRenderAttr("id", input.name)}${ssrRenderAttr("type", input.type)} required${_scopeId}>${ssrInterpolate(unref(form)[input.name])}</textarea>`);
              } else if (input.name == "sizes") {
                _push2(`<div class="sticky flex flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(PopoverGroup), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Popover), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(PopoverButton), {
                              tabindex: "1",
                              class: "h-10 pl-2 flex justify-between items-center w-full rounded-md border text-gray-900 border-gray-300 shadow-sm box-border overflow-hidden text-ellipsis whitespace-nowrap focus:border-2 focus:border-[#00adb5]",
                              id: input.name
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(displaySizes.value)} `);
                                  _push5(ssrRenderComponent(unref(ChevronDownIcon), { class: "size-7/12 w-7 mr-1 text-gray-500" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(displaySizes.value) + " ", 1),
                                    createVNode(unref(ChevronDownIcon), { class: "size-7/12 w-7 mr-1 text-gray-500" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(``);
                            _push4(ssrRenderComponent(unref(PopoverPanel), { class: "absolute z-50 overflow-hidden rounded-lg bg-white shadow-lg h-fit w-full flex flex-col px-5 py-2 border border-gray-300" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(sizeList, (option) => {
                                    _push5(`<div class="flex items-center h-10"${ssrRenderAttr("id", option)}${_scopeId4}><div class="flex items-center w-1/12 flex-shrink-0 mr-2"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_sfc_main$3, {
                                      value: option,
                                      id: option,
                                      checked: unref(form)[input.name][option] !== void 0,
                                      onChange: ($event) => toggleSelection(unref(form)[input.name], option, sizeList)
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<span class="ms-2 text-sm text-gray-900 leading-none"${_scopeId4}>${ssrInterpolate(option)}</span></div>`);
                                    if (unref(form)[input.name][option] !== void 0) {
                                      _push5(`<div${_scopeId4}> : <input class="text-xs p-1 leading-none rounded-sm" type="number" min="0"${ssrRenderAttr("value", unref(form)[input.name][option])}${_scopeId4}></div>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</div>`);
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(), createBlock(Fragment, null, renderList(sizeList, (option) => {
                                      return createVNode("div", {
                                        class: "flex items-center h-10",
                                        key: option,
                                        id: option
                                      }, [
                                        createVNode("div", { class: "flex items-center w-1/12 flex-shrink-0 mr-2" }, [
                                          createVNode(_sfc_main$3, {
                                            value: option,
                                            id: option,
                                            checked: unref(form)[input.name][option] !== void 0,
                                            onChange: ($event) => toggleSelection(unref(form)[input.name], option, sizeList)
                                          }, null, 8, ["value", "id", "checked", "onChange"]),
                                          createVNode("span", { class: "ms-2 text-sm text-gray-900 leading-none" }, toDisplayString(option), 1)
                                        ]),
                                        unref(form)[input.name][option] !== void 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createTextVNode(" : "),
                                          withDirectives(createVNode("input", {
                                            class: "text-xs p-1 leading-none rounded-sm",
                                            type: "number",
                                            min: "0",
                                            "onUpdate:modelValue": ($event) => unref(form)[input.name][option] = $event
                                          }, null, 8, ["onUpdate:modelValue"]), [
                                            [
                                              vModelText,
                                              unref(form)[input.name][option],
                                              void 0,
                                              { number: true }
                                            ]
                                          ])
                                        ])) : createCommentVNode("", true)
                                      ], 8, ["id"]);
                                    }), 64))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(PopoverButton), {
                                tabindex: "1",
                                class: "h-10 pl-2 flex justify-between items-center w-full rounded-md border text-gray-900 border-gray-300 shadow-sm box-border overflow-hidden text-ellipsis whitespace-nowrap focus:border-2 focus:border-[#00adb5]",
                                id: input.name
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(displaySizes.value) + " ", 1),
                                  createVNode(unref(ChevronDownIcon), { class: "size-7/12 w-7 mr-1 text-gray-500" })
                                ]),
                                _: 2
                              }, 1032, ["id"]),
                              createVNode(Transition, {
                                "enter-active-class": "transition ease-out duration-200",
                                "enter-from-class": "opacity-0 translate-y-1",
                                "enter-to-class": "opacity-100 translate-y-0",
                                "leave-active-class": "transition ease-in duration-150",
                                "leave-from-class": "opacity-100 translate-y-0",
                                "leave-to-class": "opacity-0 translate-y-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(PopoverPanel), { class: "absolute z-50 overflow-hidden rounded-lg bg-white shadow-lg h-fit w-full flex flex-col px-5 py-2 border border-gray-300" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(sizeList, (option) => {
                                        return createVNode("div", {
                                          class: "flex items-center h-10",
                                          key: option,
                                          id: option
                                        }, [
                                          createVNode("div", { class: "flex items-center w-1/12 flex-shrink-0 mr-2" }, [
                                            createVNode(_sfc_main$3, {
                                              value: option,
                                              id: option,
                                              checked: unref(form)[input.name][option] !== void 0,
                                              onChange: ($event) => toggleSelection(unref(form)[input.name], option, sizeList)
                                            }, null, 8, ["value", "id", "checked", "onChange"]),
                                            createVNode("span", { class: "ms-2 text-sm text-gray-900 leading-none" }, toDisplayString(option), 1)
                                          ]),
                                          unref(form)[input.name][option] !== void 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createTextVNode(" : "),
                                            withDirectives(createVNode("input", {
                                              class: "text-xs p-1 leading-none rounded-sm",
                                              type: "number",
                                              min: "0",
                                              "onUpdate:modelValue": ($event) => unref(form)[input.name][option] = $event
                                            }, null, 8, ["onUpdate:modelValue"]), [
                                              [
                                                vModelText,
                                                unref(form)[input.name][option],
                                                void 0,
                                                { number: true }
                                              ]
                                            ])
                                          ])) : createCommentVNode("", true)
                                        ], 8, ["id"]);
                                      }), 64))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(Popover), null, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverButton), {
                              tabindex: "1",
                              class: "h-10 pl-2 flex justify-between items-center w-full rounded-md border text-gray-900 border-gray-300 shadow-sm box-border overflow-hidden text-ellipsis whitespace-nowrap focus:border-2 focus:border-[#00adb5]",
                              id: input.name
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(displaySizes.value) + " ", 1),
                                createVNode(unref(ChevronDownIcon), { class: "size-7/12 w-7 mr-1 text-gray-500" })
                              ]),
                              _: 2
                            }, 1032, ["id"]),
                            createVNode(Transition, {
                              "enter-active-class": "transition ease-out duration-200",
                              "enter-from-class": "opacity-0 translate-y-1",
                              "enter-to-class": "opacity-100 translate-y-0",
                              "leave-active-class": "transition ease-in duration-150",
                              "leave-from-class": "opacity-100 translate-y-0",
                              "leave-to-class": "opacity-0 translate-y-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(PopoverPanel), { class: "absolute z-50 overflow-hidden rounded-lg bg-white shadow-lg h-fit w-full flex flex-col px-5 py-2 border border-gray-300" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(sizeList, (option) => {
                                      return createVNode("div", {
                                        class: "flex items-center h-10",
                                        key: option,
                                        id: option
                                      }, [
                                        createVNode("div", { class: "flex items-center w-1/12 flex-shrink-0 mr-2" }, [
                                          createVNode(_sfc_main$3, {
                                            value: option,
                                            id: option,
                                            checked: unref(form)[input.name][option] !== void 0,
                                            onChange: ($event) => toggleSelection(unref(form)[input.name], option, sizeList)
                                          }, null, 8, ["value", "id", "checked", "onChange"]),
                                          createVNode("span", { class: "ms-2 text-sm text-gray-900 leading-none" }, toDisplayString(option), 1)
                                        ]),
                                        unref(form)[input.name][option] !== void 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createTextVNode(" : "),
                                          withDirectives(createVNode("input", {
                                            class: "text-xs p-1 leading-none rounded-sm",
                                            type: "number",
                                            min: "0",
                                            "onUpdate:modelValue": ($event) => unref(form)[input.name][option] = $event
                                          }, null, 8, ["onUpdate:modelValue"]), [
                                            [
                                              vModelText,
                                              unref(form)[input.name][option],
                                              void 0,
                                              { number: true }
                                            ]
                                          ])
                                        ])) : createCommentVNode("", true)
                                      ], 8, ["id"]);
                                    }), 64))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  class: "w-full text-gray-900",
                  id: input.name,
                  type: input.type,
                  modelValue: unref(form)[input.name],
                  "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                  required: ""
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "mt-2",
                message: unref(form).errors[input.name]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-row gap-5 mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "w-24 justify-center",
              type: "submit",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` update `);
                } else {
                  return [
                    createTextVNode(" update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "w-24",
              href: _ctx.route("product.show", props["data"]["id"]),
              as: "a"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "w-full justify-center bg-red-600 text-white hover:bg-red-700" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` cancel `);
                      } else {
                        return [
                          createTextVNode(" cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, { class: "w-full justify-center bg-red-600 text-white hover:bg-red-700" }, {
                      default: withCtx(() => [
                        createTextVNode(" cancel ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-10 mt-5" }, [
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
                  createVNode(unref(Link), {
                    class: "w-24",
                    href: __props.actionPage
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, { class: "w-full justify-center" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.actionName), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("form", {
                  class: "w-full max-w-xl m-auto px-6 py-6 mb-6 bg-white rounded-lg border border-t-gray-200",
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", { class: "grid grid-cols-8 gap-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(input_list, (input) => {
                      return createVNode("div", {
                        class: input.span
                      }, [
                        createVNode(_sfc_main$2, {
                          class: "mb-2",
                          for: input.name,
                          value: input.label
                        }, null, 8, ["for", "value"]),
                        input.name == "category_id" ? withDirectives((openBlock(), createBlock("select", {
                          key: 0,
                          class: "w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer",
                          name: input.name,
                          id: input.name,
                          "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                          required: ""
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categoryList, (category) => {
                            return openBlock(), createBlock("option", {
                              key: category.id,
                              value: category.id
                            }, toDisplayString(category.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["name", "id", "onUpdate:modelValue"])), [
                          [vModelSelect, unref(form)[input.name]]
                        ]) : input.name == "price" || input.name == "discount" ? withDirectives((openBlock(), createBlock("input", {
                          key: 1,
                          class: "w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]",
                          id: input.name,
                          type: input.type,
                          step: "0.01",
                          "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                          required: ""
                        }, null, 8, ["id", "type", "onUpdate:modelValue"])), [
                          [vModelDynamic, unref(form)[input.name]]
                        ]) : input.name == "discounted_price" ? withDirectives((openBlock(), createBlock("input", {
                          key: 2,
                          class: "w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] bg-gray-200",
                          id: input.name,
                          type: input.type,
                          step: "0.01",
                          "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                          disabled: ""
                        }, null, 8, ["id", "type", "onUpdate:modelValue"])), [
                          [vModelDynamic, unref(form)[input.name]]
                        ]) : input.name == "description" ? withDirectives((openBlock(), createBlock("textarea", {
                          key: 3,
                          class: "w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] scrollbar-hide",
                          rows: "3",
                          id: input.name,
                          type: input.type,
                          "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                          required: ""
                        }, null, 8, ["id", "type", "onUpdate:modelValue"])), [
                          [vModelText, unref(form)[input.name]]
                        ]) : input.name == "sizes" ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "sticky flex flex-col"
                        }, [
                          createVNode(unref(PopoverGroup), null, {
                            default: withCtx(() => [
                              createVNode(unref(Popover), null, {
                                default: withCtx(() => [
                                  createVNode(unref(PopoverButton), {
                                    tabindex: "1",
                                    class: "h-10 pl-2 flex justify-between items-center w-full rounded-md border text-gray-900 border-gray-300 shadow-sm box-border overflow-hidden text-ellipsis whitespace-nowrap focus:border-2 focus:border-[#00adb5]",
                                    id: input.name
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(displaySizes.value) + " ", 1),
                                      createVNode(unref(ChevronDownIcon), { class: "size-7/12 w-7 mr-1 text-gray-500" })
                                    ]),
                                    _: 2
                                  }, 1032, ["id"]),
                                  createVNode(Transition, {
                                    "enter-active-class": "transition ease-out duration-200",
                                    "enter-from-class": "opacity-0 translate-y-1",
                                    "enter-to-class": "opacity-100 translate-y-0",
                                    "leave-active-class": "transition ease-in duration-150",
                                    "leave-from-class": "opacity-100 translate-y-0",
                                    "leave-to-class": "opacity-0 translate-y-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PopoverPanel), { class: "absolute z-50 overflow-hidden rounded-lg bg-white shadow-lg h-fit w-full flex flex-col px-5 py-2 border border-gray-300" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(sizeList, (option) => {
                                            return createVNode("div", {
                                              class: "flex items-center h-10",
                                              key: option,
                                              id: option
                                            }, [
                                              createVNode("div", { class: "flex items-center w-1/12 flex-shrink-0 mr-2" }, [
                                                createVNode(_sfc_main$3, {
                                                  value: option,
                                                  id: option,
                                                  checked: unref(form)[input.name][option] !== void 0,
                                                  onChange: ($event) => toggleSelection(unref(form)[input.name], option, sizeList)
                                                }, null, 8, ["value", "id", "checked", "onChange"]),
                                                createVNode("span", { class: "ms-2 text-sm text-gray-900 leading-none" }, toDisplayString(option), 1)
                                              ]),
                                              unref(form)[input.name][option] !== void 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createTextVNode(" : "),
                                                withDirectives(createVNode("input", {
                                                  class: "text-xs p-1 leading-none rounded-sm",
                                                  type: "number",
                                                  min: "0",
                                                  "onUpdate:modelValue": ($event) => unref(form)[input.name][option] = $event
                                                }, null, 8, ["onUpdate:modelValue"]), [
                                                  [
                                                    vModelText,
                                                    unref(form)[input.name][option],
                                                    void 0,
                                                    { number: true }
                                                  ]
                                                ])
                                              ])) : createCommentVNode("", true)
                                            ], 8, ["id"]);
                                          }), 64))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ])) : (openBlock(), createBlock(_sfc_main$4, {
                          key: 5,
                          class: "w-full text-gray-900",
                          id: input.name,
                          type: input.type,
                          modelValue: unref(form)[input.name],
                          "onUpdate:modelValue": ($event) => unref(form)[input.name] = $event,
                          required: ""
                        }, null, 8, ["id", "type", "modelValue", "onUpdate:modelValue"])),
                        createVNode(_sfc_main$5, {
                          class: "mt-2",
                          message: unref(form).errors[input.name]
                        }, null, 8, ["message"])
                      ], 2);
                    }), 64))
                  ]),
                  createVNode("div", { class: "flex flex-row gap-5 mt-5" }, [
                    createVNode(_sfc_main$1, {
                      class: "w-24 justify-center",
                      type: "submit",
                      as: "button"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" update ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "w-24",
                      href: _ctx.route("product.show", props["data"]["id"]),
                      as: "a"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { class: "w-full justify-center bg-red-600 text-white hover:bg-red-700" }, {
                          default: withCtx(() => [
                            createTextVNode(" cancel ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seller/ProductEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
