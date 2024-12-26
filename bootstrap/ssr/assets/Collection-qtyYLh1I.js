import { ref, computed, watch, mergeProps, withCtx, unref, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, createVNode, withDirectives, vModelText, Transition, resolveDynamicComponent, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { _ as _sfc_main$2 } from "./PrimaryButton-BLKm_jDc.js";
import { _ as _sfc_main$1 } from "./Checkbox-8GMolGi3.js";
import { Link } from "@inertiajs/vue3";
import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Listbox, ListboxButton, ListboxOptions, ListboxOption, TabGroup, TabList, Tab } from "@headlessui/vue";
import { ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon, CheckIcon, StarIcon } from "@heroicons/vue/20/solid";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@heroicons/vue/24/outline";
const __default__ = {
  methods: {
    asset(path) {
      return `/${path}`;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Collection",
  __ssrInlineRender: true,
  props: {
    allCategories: {
      type: Array,
      required: true
    },
    allProducts: {
      type: Array,
      required: true
    },
    defaultCategoryID: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const allCategories = props.allCategories.map(
      (category) => ({
        id: category["id"],
        name: category["name"]
      })
    );
    const selectedCategory = ref(props.defaultCategoryID["id"]);
    const filteredProducts = computed(() => {
      if (selectedCategory.value > 1) {
        return props.allProducts.filter(
          (product) => product["category"]["id"] === selectedCategory.value
        );
      } else {
        return props.allProducts;
      }
    });
    const selectCategory = (id) => {
      selectedCategory.value = id;
    };
    const selectAllCategories = () => {
      selectedCategory.value = 1;
    };
    const parameters = [
      { name: "Price" },
      { name: "Ratings" },
      { name: "Reviews" }
    ];
    const selectedParameter = ref(parameters[0]);
    const isDescending = ref(false);
    const toggle = () => {
      isDescending.value = !isDescending.value;
    };
    const minPrice = ref(0);
    const maxPrice = ref(0.01);
    const onRange = ref(false);
    const isSearchDisabled = ref(false);
    const query = ref("");
    const toggleOnRange = () => {
      onRange.value = !onRange.value;
      isSearchDisabled.value = !isSearchDisabled.value;
      if (onRange.value) {
        query.value = "";
      }
    };
    watch(minPrice, (newMinPrice) => {
      if (maxPrice.value < newMinPrice) {
        maxPrice.value = newMinPrice;
      }
    });
    const productsInRange = computed(() => {
      if (onRange.value) {
        return filteredProducts.value.filter(
          (product) => product["discounted_price"] >= minPrice.value && product["discounted_price"] <= maxPrice.value
        );
      }
      return filteredProducts.value.filter(
        (product) => product["name"].toLowerCase().includes(query.value.toLowerCase())
      );
    });
    const sortProducts = computed(() => {
      const products = [...productsInRange.value];
      if (selectedParameter.value.name === "Price") {
        return products.sort(
          (a, b) => isDescending.value ? b.discounted_price - a.discounted_price : a.discounted_price - b.discounted_price
        );
      } else if (selectedParameter.value.name === "Ratings") {
        return products.sort(
          (a, b) => isDescending.value ? b.ratings - a.ratings : a.ratings - b.ratings
        );
      } else {
        return products.sort(
          (a, b) => isDescending.value ? b.reviews - a.reviews : a.reviews - b.reviews
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Collection" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center w-full min-h-dvh"${_scopeId}><div class="relative max-h-svh overflow-y-hidden"${_scopeId}><div class="absolute max-w-lg min-h-svh pt-20 ml-10"${_scopeId}><h1 class="text-6xl font-bold tracking-tight text-gray-900"${_scopeId}> Explore Our Casual Collection </h1><p class="mt-4 text-xl text-gray-700"${_scopeId}> Uncover a curated selection of stylish and comfortable casual wear, designed to fit your everyday vibe and express your unique style effortlessly. </p></div><img${ssrRenderAttr("src", _ctx.asset("images/collection-banner.jpg"))} alt=""${_scopeId}></div><div class="sticky top-0 flex justify-between w-full px-10 py-5 shadow-md items-center bg-white overflow-y-visible z-20"${_scopeId}><div class="w-full flex justify-start"${_scopeId}>`);
            if (isSearchDisabled.value) {
              _push2(`<input${ssrRenderAttr("value", query.value)} type="text" class="${ssrRenderClass([
                "w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                "bg-gray-300"
              ])}" placeholder="Search is disabled" disabled${_scopeId}>`);
            } else {
              _push2(`<input${ssrRenderAttr("value", query.value)} type="text" class="${ssrRenderClass([
                "w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm"
              ])}" placeholder="Search by name"${_scopeId}>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "h-5 w-5 mr-2 border border-gray-500",
              checked: onRange.value,
              onChange: toggleOnRange
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative w-full justify-start flex-grow box-border"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PopoverGroup), { class: "relative h-full w-full shadow-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Popover), { class: "relative h-full w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PopoverButton), {
                          class: [
                            "relative flex items-center justify-between w-full gap-2 cursor-default rounded-lg py-2 px-2 text-right shadow-sm border border-gray-300",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                            onRange.value === false ? "bg-gray-200" : "bg-white"
                          ],
                          id: "price_range",
                          "aria-disabled": onRange.value === false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (onRange.value) {
                                _push5(`<p class="flex justify-between w-full text-gray-700"${_scopeId4}> Price Range : $${ssrInterpolate(minPrice.value)} - $${ssrInterpolate(maxPrice.value)} `);
                                if (maxPrice.value <= minPrice.value) {
                                  _push5(`<span class="text-red-400"${_scopeId4}> Invalid </span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</p>`);
                              } else {
                                _push5(`<p class="text-gray-700"${_scopeId4}> Check the box on the left to set price range </p>`);
                              }
                            } else {
                              return [
                                onRange.value ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "flex justify-between w-full text-gray-700"
                                }, [
                                  createTextVNode(" Price Range : $" + toDisplayString(minPrice.value) + " - $" + toDisplayString(maxPrice.value) + " ", 1),
                                  maxPrice.value <= minPrice.value ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-red-400"
                                  }, " Invalid ")) : createCommentVNode("", true)
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-gray-700"
                                }, " Check the box on the left to set price range "))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(PopoverPanel), { class: "absolute z-50 w-full overflow-hidden rounded-lg bg-white shadow-lg h-fit flex flex-col py-2 px-2 border border-gray-300" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-2 items-center h-fit w-full justify-start"${_scopeId4}><div class="flex items-center justify-start w-full"${_scopeId4}><label class="flex items-center justify-between flex-shrink-0 w-1/3"${_scopeId4}><span class="w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0"${_scopeId4}> Minimum Price </span><p class="pr-1"${_scopeId4}>:</p></label><input class="text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]" id="min_price" type="number" step="0.01" min="0"${ssrRenderAttr("value", minPrice.value)}${_scopeId4}></div><div class="flex items-center justify-start w-full"${_scopeId4}><label class="flex items-center justify-between flex-shrink-0 w-1/3"${_scopeId4}><span class="w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0"${_scopeId4}> Maximum Price </span><p class="pr-1"${_scopeId4}>:</p></label><input class="text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]" id="max_price" type="number" step="0.01"${ssrRenderAttr("value", maxPrice.value)}${_scopeId4}></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-2 items-center h-fit w-full justify-start" }, [
                                  createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                    createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                      createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Minimum Price "),
                                      createVNode("p", { class: "pr-1" }, ":")
                                    ]),
                                    withDirectives(createVNode("input", {
                                      class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                      id: "min_price",
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      "onUpdate:modelValue": ($event) => minPrice.value = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, minPrice.value]
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                    createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                      createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Maximum Price "),
                                      createVNode("p", { class: "pr-1" }, ":")
                                    ]),
                                    withDirectives(createVNode("input", {
                                      class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                      id: "max_price",
                                      type: "number",
                                      step: "0.01",
                                      "onUpdate:modelValue": ($event) => maxPrice.value = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, maxPrice.value]
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(PopoverButton), {
                              class: [
                                "relative flex items-center justify-between w-full gap-2 cursor-default rounded-lg py-2 px-2 text-right shadow-sm border border-gray-300",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                                onRange.value === false ? "bg-gray-200" : "bg-white"
                              ],
                              id: "price_range",
                              "aria-disabled": onRange.value === false
                            }, {
                              default: withCtx(() => [
                                onRange.value ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "flex justify-between w-full text-gray-700"
                                }, [
                                  createTextVNode(" Price Range : $" + toDisplayString(minPrice.value) + " - $" + toDisplayString(maxPrice.value) + " ", 1),
                                  maxPrice.value <= minPrice.value ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-red-400"
                                  }, " Invalid ")) : createCommentVNode("", true)
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-gray-700"
                                }, " Check the box on the left to set price range "))
                              ]),
                              _: 1
                            }, 8, ["class", "aria-disabled"])
                          ]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute z-50 w-full overflow-hidden rounded-lg bg-white shadow-lg h-fit flex flex-col py-2 px-2 border border-gray-300" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-2 items-center h-fit w-full justify-start" }, [
                                    createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                      createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                        createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Minimum Price "),
                                        createVNode("p", { class: "pr-1" }, ":")
                                      ]),
                                      withDirectives(createVNode("input", {
                                        class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                        id: "min_price",
                                        type: "number",
                                        step: "0.01",
                                        min: "0",
                                        "onUpdate:modelValue": ($event) => minPrice.value = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, minPrice.value]
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                      createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                        createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Maximum Price "),
                                        createVNode("p", { class: "pr-1" }, ":")
                                      ]),
                                      withDirectives(createVNode("input", {
                                        class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                        id: "max_price",
                                        type: "number",
                                        step: "0.01",
                                        "onUpdate:modelValue": ($event) => maxPrice.value = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, maxPrice.value]
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Popover), { class: "relative h-full w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(unref(PopoverButton), {
                            class: [
                              "relative flex items-center justify-between w-full gap-2 cursor-default rounded-lg py-2 px-2 text-right shadow-sm border border-gray-300",
                              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                              onRange.value === false ? "bg-gray-200" : "bg-white"
                            ],
                            id: "price_range",
                            "aria-disabled": onRange.value === false
                          }, {
                            default: withCtx(() => [
                              onRange.value ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "flex justify-between w-full text-gray-700"
                              }, [
                                createTextVNode(" Price Range : $" + toDisplayString(minPrice.value) + " - $" + toDisplayString(maxPrice.value) + " ", 1),
                                maxPrice.value <= minPrice.value ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-red-400"
                                }, " Invalid ")) : createCommentVNode("", true)
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-gray-700"
                              }, " Check the box on the left to set price range "))
                            ]),
                            _: 1
                          }, 8, ["class", "aria-disabled"])
                        ]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute z-50 w-full overflow-hidden rounded-lg bg-white shadow-lg h-fit flex flex-col py-2 px-2 border border-gray-300" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-2 items-center h-fit w-full justify-start" }, [
                                  createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                    createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                      createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Minimum Price "),
                                      createVNode("p", { class: "pr-1" }, ":")
                                    ]),
                                    withDirectives(createVNode("input", {
                                      class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                      id: "min_price",
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      "onUpdate:modelValue": ($event) => minPrice.value = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, minPrice.value]
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                    createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                      createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Maximum Price "),
                                      createVNode("p", { class: "pr-1" }, ":")
                                    ]),
                                    withDirectives(createVNode("input", {
                                      class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                      id: "max_price",
                                      type: "number",
                                      step: "0.01",
                                      "onUpdate:modelValue": ($event) => maxPrice.value = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, maxPrice.value]
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full flex justify-end box-border"${_scopeId}><button class="flex items-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008a8e] mr-2"${_scopeId}><span${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(isDescending.value === false ? unref(ChevronUpIcon) : unref(ChevronDownIcon)), { class: "h-5 w-5 text-gray-700" }, null), _parent2, _scopeId);
            _push2(`</span></button>`);
            _push2(ssrRenderComponent(unref(Listbox), {
              modelValue: selectedParameter.value,
              "onUpdate:modelValue": ($event) => selectedParameter.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative w-1/2 h-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ListboxButton), { class: [
                    "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:ring-2",
                    "focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm border border-gray-300"
                  ] }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="block truncate text-left text-gray-700"${_scopeId3}> Sort By: ${ssrInterpolate(selectedParameter.value.name)}</span><span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ChevronUpDownIcon), {
                          class: "h-5 w-5 text-gray-400",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "block truncate text-left text-gray-700" }, " Sort By: " + toDisplayString(selectedParameter.value.name), 1),
                          createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                            createVNode(unref(ChevronUpDownIcon), {
                              class: "h-5 w-5 text-gray-400",
                              "aria-hidden": "true"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ListboxOptions), { class: [
                    "absolute max-h-60 w-full rounded-md bg-white text-gray-700",
                    "shadow-lg ring-1 ring-black/5 focus:outline-none text-sm"
                  ] }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(parameters, (parameter) => {
                          _push4(ssrRenderComponent(unref(ListboxOption), {
                            key: parameter.name,
                            value: parameter,
                            as: "template",
                            onChange: sortProducts.value
                          }, {
                            default: withCtx(({ active, selected }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<li class="${ssrRenderClass([
                                  active ? " text-[#008a8e]" : "text-gray-700",
                                  "relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700"
                                ])}"${_scopeId4}><span class="${ssrRenderClass([
                                  selected ? "font-medium text-[#008a8e]" : "font-normal",
                                  "block truncate"
                                ])}"${_scopeId4}>${ssrInterpolate(parameter.name)}</span>`);
                                if (selected) {
                                  _push5(`<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(unref(CheckIcon), {
                                    class: "h-5 w-5",
                                    "aria-hidden": "true"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</li>`);
                              } else {
                                return [
                                  createVNode("li", {
                                    class: [
                                      active ? " text-[#008a8e]" : "text-gray-700",
                                      "relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700"
                                    ]
                                  }, [
                                    createVNode("span", {
                                      class: [
                                        selected ? "font-medium text-[#008a8e]" : "font-normal",
                                        "block truncate"
                                      ]
                                    }, toDisplayString(parameter.name), 3),
                                    selected ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"
                                    }, [
                                      createVNode(unref(CheckIcon), {
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      })
                                    ])) : createCommentVNode("", true)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(parameters, (parameter) => {
                            return createVNode(unref(ListboxOption), {
                              key: parameter.name,
                              value: parameter,
                              as: "template",
                              onChange: sortProducts.value
                            }, {
                              default: withCtx(({ active, selected }) => [
                                createVNode("li", {
                                  class: [
                                    active ? " text-[#008a8e]" : "text-gray-700",
                                    "relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700"
                                  ]
                                }, [
                                  createVNode("span", {
                                    class: [
                                      selected ? "font-medium text-[#008a8e]" : "font-normal",
                                      "block truncate"
                                    ]
                                  }, toDisplayString(parameter.name), 3),
                                  selected ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"
                                  }, [
                                    createVNode(unref(CheckIcon), {
                                      class: "h-5 w-5",
                                      "aria-hidden": "true"
                                    })
                                  ])) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value", "onChange"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative w-1/2 h-full" }, [
                      createVNode(unref(ListboxButton), { class: [
                        "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:ring-2",
                        "focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm border border-gray-300"
                      ] }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "block truncate text-left text-gray-700" }, " Sort By: " + toDisplayString(selectedParameter.value.name), 1),
                          createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                            createVNode(unref(ChevronUpDownIcon), {
                              class: "h-5 w-5 text-gray-400",
                              "aria-hidden": "true"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(Transition, {
                        "leave-active-class": "transition duration-100 ease-in",
                        "leave-from-class": "opacity-100",
                        "leave-to-class": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ListboxOptions), { class: [
                            "absolute max-h-60 w-full rounded-md bg-white text-gray-700",
                            "shadow-lg ring-1 ring-black/5 focus:outline-none text-sm"
                          ] }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(parameters, (parameter) => {
                                return createVNode(unref(ListboxOption), {
                                  key: parameter.name,
                                  value: parameter,
                                  as: "template",
                                  onChange: sortProducts.value
                                }, {
                                  default: withCtx(({ active, selected }) => [
                                    createVNode("li", {
                                      class: [
                                        active ? " text-[#008a8e]" : "text-gray-700",
                                        "relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700"
                                      ]
                                    }, [
                                      createVNode("span", {
                                        class: [
                                          selected ? "font-medium text-[#008a8e]" : "font-normal",
                                          "block truncate"
                                        ]
                                      }, toDisplayString(parameter.name), 3),
                                      selected ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"
                                      }, [
                                        createVNode(unref(CheckIcon), {
                                          class: "h-5 w-5",
                                          "aria-hidden": "true"
                                        })
                                      ])) : createCommentVNode("", true)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onChange"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div id="explore" class="flex flex-col items-center gap-5 w-full mx-10"${_scopeId}><div class="relative flex flex-col w-full"${_scopeId}><div class="w-full flex justify-center items-start px-10 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabGroup), {
              "default-index": selectedCategory.value - 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-1/5 flex-shrink-0 h-screen"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TabList), { class: "w-full flex flex-col h-full px-5 justify-evenly items-center border-r border-l border-gray-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Tab), {
                          class: "relative w-full",
                          as: "button",
                          key: 1
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, {
                                class: "w-full justify-center h-full",
                                py: "py-3",
                                onClick: selectAllCategories,
                                as: "button"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` all categories `);
                                  } else {
                                    return [
                                      createTextVNode(" all categories ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2, {
                                  class: "w-full justify-center h-full",
                                  py: "py-3",
                                  onClick: selectAllCategories,
                                  as: "button"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" all categories ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(allCategories).slice(1, -1), (category) => {
                          _push4(ssrRenderComponent(unref(Tab), {
                            class: "relative w-full",
                            as: "button",
                            key: category["id"]
                          }, {
                            default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (category["id"] > 1) {
                                  _push5(`<button class="${ssrRenderClass([
                                    "w-full rounded-lg text-sm font-semibold transition-all duration-200",
                                    "focus:border focus:border-[#008a8e] py-2",
                                    selected ? "bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none" : "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none",
                                    selectedCategory.value === 1 ? "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none" : ""
                                  ])}"${_scopeId4}>${ssrInterpolate(category["name"])}</button>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  category["id"] > 1 ? (openBlock(), createBlock("button", {
                                    key: 0,
                                    class: [
                                      "w-full rounded-lg text-sm font-semibold transition-all duration-200",
                                      "focus:border focus:border-[#008a8e] py-2",
                                      selected ? "bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none" : "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none",
                                      selectedCategory.value === 1 ? "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none" : ""
                                    ],
                                    onClick: ($event) => selectCategory(category["id"])
                                  }, toDisplayString(category["name"]), 11, ["onClick"])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(unref(Tab), {
                            class: "relative w-full",
                            as: "button",
                            key: 1
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                class: "w-full justify-center h-full",
                                py: "py-3",
                                onClick: selectAllCategories,
                                as: "button"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" all categories ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(allCategories).slice(1, -1), (category) => {
                            return openBlock(), createBlock(unref(Tab), {
                              class: "relative w-full",
                              as: "button",
                              key: category["id"]
                            }, {
                              default: withCtx(({ selected }) => [
                                category["id"] > 1 ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  class: [
                                    "w-full rounded-lg text-sm font-semibold transition-all duration-200",
                                    "focus:border focus:border-[#008a8e] py-2",
                                    selected ? "bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none" : "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none",
                                    selectedCategory.value === 1 ? "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none" : ""
                                  ],
                                  onClick: ($event) => selectCategory(category["id"])
                                }, toDisplayString(category["name"]), 11, ["onClick"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-1/5 flex-shrink-0 h-screen" }, [
                      createVNode(unref(TabList), { class: "w-full flex flex-col h-full px-5 justify-evenly items-center border-r border-l border-gray-100" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(unref(Tab), {
                            class: "relative w-full",
                            as: "button",
                            key: 1
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                class: "w-full justify-center h-full",
                                py: "py-3",
                                onClick: selectAllCategories,
                                as: "button"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" all categories ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(allCategories).slice(1, -1), (category) => {
                            return openBlock(), createBlock(unref(Tab), {
                              class: "relative w-full",
                              as: "button",
                              key: category["id"]
                            }, {
                              default: withCtx(({ selected }) => [
                                category["id"] > 1 ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  class: [
                                    "w-full rounded-lg text-sm font-semibold transition-all duration-200",
                                    "focus:border focus:border-[#008a8e] py-2",
                                    selected ? "bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none" : "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none",
                                    selectedCategory.value === 1 ? "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none" : ""
                                  ],
                                  onClick: ($event) => selectCategory(category["id"])
                                }, toDisplayString(category["name"]), 11, ["onClick"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (sortProducts.value.length === 0) {
              _push2(`<div class="relative flex justify-center items-center h-screen w-full"${_scopeId}><p class="font-semibold w-full text-center"${_scopeId}> No items exists in the range specified </p></div>`);
            } else {
              _push2(`<div class="grid grid-cols-4 max-h-screen w-full overflow-y-scroll scrollbar-hide"${_scopeId}><!--[-->`);
              ssrRenderList(sortProducts.value, (product) => {
                _push2(ssrRenderComponent(unref(Link), {
                  class: "col-span-1 p-5 border border-gray-100",
                  href: _ctx.route("details", product["id"])
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div class="relative flex rounded-lg h-1/2"${_scopeId2}><img${ssrRenderAttr("src", _ctx.asset(product["imageurl"].slice(36)))} alt="" class="rounded-xl"${_scopeId2}>`);
                      if (product["discount"] != 0) {
                        _push3(`<div class="absolute bottom-0 right-0 text-xl p-2 font-semibold w-full leading-none"${_scopeId2}>`);
                        if (product["discount"] != 0) {
                          _push3(`<div class="flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"${_scopeId2}> $ ${ssrInterpolate(product["price"])}</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (product["discount"] != 0) {
                          _push3(`<div class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"${_scopeId2}><p class="text-xs px-2 py-1 text-red-400"${_scopeId2}>${ssrInterpolate(product["discount"])} % Off </p><p class="text-xs font-normal px-2 py-1"${_scopeId2}> $ ${ssrInterpolate(product["discounted_price"])}</p></div>`);
                        } else {
                          _push3(`<div class="flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"${_scopeId2}><p class="text-xs font-normal px-2 py-1"${_scopeId2}> $ ${ssrInterpolate(product["discounted_price"])}</p></div>`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<div class="absolute bottom-0 right-0 text-xl p-2 font-semibold w-fit leading-none"${_scopeId2}>`);
                        if (product["discount"] != 0) {
                          _push3(`<div class="flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"${_scopeId2}> $ ${ssrInterpolate(product["price"])}</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (product["discount"] != 0) {
                          _push3(`<div class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"${_scopeId2}><p class="text-xs px-2 py-1 text-red-400"${_scopeId2}>${ssrInterpolate(product["discount"])} % Off </p><p class="text-xs font-normal px-2 py-1"${_scopeId2}> $ ${ssrInterpolate(product["discounted_price"])}</p></div>`);
                        } else {
                          _push3(`<div class="flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"${_scopeId2}><p class="text-xs font-normal px-2 py-1"${_scopeId2}> $ ${ssrInterpolate(product["discounted_price"])}</p></div>`);
                        }
                        _push3(`</div>`);
                      }
                      _push3(`</div><div class="flex flex-col items-center gap-1"${_scopeId2}><p class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(product["name"])}</p><p class="text-gray-500"${_scopeId2}>${ssrInterpolate(product["category"]["name"])}</p><div class="flex w-full items-center justify-center"${_scopeId2}><p class="leading-none mr-1 text-sm"${_scopeId2}>${ssrInterpolate(product["ratings"])}</p><div class="flex mr-1"${_scopeId2}><!--[-->`);
                      ssrRenderList(parseInt(product["ratings"]), (n) => {
                        _push3(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--><!--[-->`);
                      ssrRenderList(5 - parseInt(product["ratings"]), (n) => {
                        _push3(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div><p class="leading-none text-sm"${_scopeId2}> (${ssrInterpolate(product["reviews"])}) </p></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col gap-3" }, [
                          createVNode("div", { class: "relative flex rounded-lg h-1/2" }, [
                            createVNode("img", {
                              src: _ctx.asset(product["imageurl"].slice(36)),
                              alt: "",
                              class: "rounded-xl"
                            }, null, 8, ["src"]),
                            product["discount"] != 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute bottom-0 right-0 text-xl p-2 font-semibold w-full leading-none"
                            }, [
                              product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                              }, " $ " + toDisplayString(product["price"]), 1)) : createCommentVNode("", true),
                              product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                              }, [
                                createVNode("p", { class: "text-xs px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + " % Off ", 1),
                                createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                              }, [
                                createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                              ]))
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "absolute bottom-0 right-0 text-xl p-2 font-semibold w-fit leading-none"
                            }, [
                              product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                              }, " $ " + toDisplayString(product["price"]), 1)) : createCommentVNode("", true),
                              product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                              }, [
                                createVNode("p", { class: "text-xs px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + " % Off ", 1),
                                createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                              }, [
                                createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                              ]))
                            ]))
                          ]),
                          createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                            createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(product["name"]), 1),
                            createVNode("p", { class: "text-gray-500" }, toDisplayString(product["category"]["name"]), 1),
                            createVNode("div", { class: "flex w-full items-center justify-center" }, [
                              createVNode("p", { class: "leading-none mr-1 text-sm" }, toDisplayString(product["ratings"]), 1),
                              createVNode("div", { class: "flex mr-1" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(parseInt(product["ratings"]), (n) => {
                                  return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" });
                                }), 256)),
                                (openBlock(true), createBlock(Fragment, null, renderList(5 - parseInt(product["ratings"]), (n) => {
                                  return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" });
                                }), 256))
                              ]),
                              createVNode("p", { class: "leading-none text-sm" }, " (" + toDisplayString(product["reviews"]) + ") ", 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center w-full min-h-dvh" }, [
                createVNode("div", { class: "relative max-h-svh overflow-y-hidden" }, [
                  createVNode("div", { class: "absolute max-w-lg min-h-svh pt-20 ml-10" }, [
                    createVNode("h1", { class: "text-6xl font-bold tracking-tight text-gray-900" }, " Explore Our Casual Collection "),
                    createVNode("p", { class: "mt-4 text-xl text-gray-700" }, " Uncover a curated selection of stylish and comfortable casual wear, designed to fit your everyday vibe and express your unique style effortlessly. ")
                  ]),
                  createVNode("img", {
                    src: _ctx.asset("images/collection-banner.jpg"),
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "sticky top-0 flex justify-between w-full px-10 py-5 shadow-md items-center bg-white overflow-y-visible z-20" }, [
                  createVNode("div", { class: "w-full flex justify-start" }, [
                    isSearchDisabled.value ? withDirectives((openBlock(), createBlock("input", {
                      key: 0,
                      "onUpdate:modelValue": ($event) => query.value = $event,
                      type: "text",
                      class: [
                        "w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                        "bg-gray-300"
                      ],
                      placeholder: "Search is disabled",
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, query.value]
                    ]) : withDirectives((openBlock(), createBlock("input", {
                      key: 1,
                      "onUpdate:modelValue": ($event) => query.value = $event,
                      type: "text",
                      class: [
                        "w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm"
                      ],
                      placeholder: "Search by name"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, query.value]
                    ])
                  ]),
                  createVNode(_sfc_main$1, {
                    class: "h-5 w-5 mr-2 border border-gray-500",
                    checked: onRange.value,
                    onChange: toggleOnRange
                  }, null, 8, ["checked"]),
                  createVNode("div", { class: "relative w-full justify-start flex-grow box-border" }, [
                    createVNode(unref(PopoverGroup), { class: "relative h-full w-full shadow-sm" }, {
                      default: withCtx(() => [
                        createVNode(unref(Popover), { class: "relative h-full w-full" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(unref(PopoverButton), {
                                class: [
                                  "relative flex items-center justify-between w-full gap-2 cursor-default rounded-lg py-2 px-2 text-right shadow-sm border border-gray-300",
                                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm",
                                  onRange.value === false ? "bg-gray-200" : "bg-white"
                                ],
                                id: "price_range",
                                "aria-disabled": onRange.value === false
                              }, {
                                default: withCtx(() => [
                                  onRange.value ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "flex justify-between w-full text-gray-700"
                                  }, [
                                    createTextVNode(" Price Range : $" + toDisplayString(minPrice.value) + " - $" + toDisplayString(maxPrice.value) + " ", 1),
                                    maxPrice.value <= minPrice.value ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-red-400"
                                    }, " Invalid ")) : createCommentVNode("", true)
                                  ])) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "text-gray-700"
                                  }, " Check the box on the left to set price range "))
                                ]),
                                _: 1
                              }, 8, ["class", "aria-disabled"])
                            ]),
                            createVNode(Transition, {
                              "enter-active-class": "transition ease-out duration-200",
                              "enter-from-class": "opacity-0 translate-y-1",
                              "enter-to-class": "opacity-100 translate-y-0",
                              "leave-active-class": "transition ease-in duration-150",
                              "leave-from-class": "opacity-100 translate-y-0",
                              "leave-to-class": "opacity-0 translate-y-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(PopoverPanel), { class: "absolute z-50 w-full overflow-hidden rounded-lg bg-white shadow-lg h-fit flex flex-col py-2 px-2 border border-gray-300" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col gap-2 items-center h-fit w-full justify-start" }, [
                                      createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                        createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                          createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Minimum Price "),
                                          createVNode("p", { class: "pr-1" }, ":")
                                        ]),
                                        withDirectives(createVNode("input", {
                                          class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                          id: "min_price",
                                          type: "number",
                                          step: "0.01",
                                          min: "0",
                                          "onUpdate:modelValue": ($event) => minPrice.value = $event
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, minPrice.value]
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex items-center justify-start w-full" }, [
                                        createVNode("label", { class: "flex items-center justify-between flex-shrink-0 w-1/3" }, [
                                          createVNode("span", { class: "w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0" }, " Maximum Price "),
                                          createVNode("p", { class: "pr-1" }, ":")
                                        ]),
                                        withDirectives(createVNode("input", {
                                          class: "text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]",
                                          id: "max_price",
                                          type: "number",
                                          step: "0.01",
                                          "onUpdate:modelValue": ($event) => maxPrice.value = $event
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, maxPrice.value]
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "w-full flex justify-end box-border" }, [
                    createVNode("button", {
                      onClick: toggle,
                      class: "flex items-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008a8e] mr-2"
                    }, [
                      createVNode("span", null, [
                        (openBlock(), createBlock(resolveDynamicComponent(isDescending.value === false ? unref(ChevronUpIcon) : unref(ChevronDownIcon)), { class: "h-5 w-5 text-gray-700" }))
                      ])
                    ]),
                    createVNode(unref(Listbox), {
                      modelValue: selectedParameter.value,
                      "onUpdate:modelValue": ($event) => selectedParameter.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative w-1/2 h-full" }, [
                          createVNode(unref(ListboxButton), { class: [
                            "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:ring-2",
                            "focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm border border-gray-300"
                          ] }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "block truncate text-left text-gray-700" }, " Sort By: " + toDisplayString(selectedParameter.value.name), 1),
                              createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                                createVNode(unref(ChevronUpDownIcon), {
                                  class: "h-5 w-5 text-gray-400",
                                  "aria-hidden": "true"
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(Transition, {
                            "leave-active-class": "transition duration-100 ease-in",
                            "leave-from-class": "opacity-100",
                            "leave-to-class": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ListboxOptions), { class: [
                                "absolute max-h-60 w-full rounded-md bg-white text-gray-700",
                                "shadow-lg ring-1 ring-black/5 focus:outline-none text-sm"
                              ] }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(parameters, (parameter) => {
                                    return createVNode(unref(ListboxOption), {
                                      key: parameter.name,
                                      value: parameter,
                                      as: "template",
                                      onChange: sortProducts.value
                                    }, {
                                      default: withCtx(({ active, selected }) => [
                                        createVNode("li", {
                                          class: [
                                            active ? " text-[#008a8e]" : "text-gray-700",
                                            "relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700"
                                          ]
                                        }, [
                                          createVNode("span", {
                                            class: [
                                              selected ? "font-medium text-[#008a8e]" : "font-normal",
                                              "block truncate"
                                            ]
                                          }, toDisplayString(parameter.name), 3),
                                          selected ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"
                                          }, [
                                            createVNode(unref(CheckIcon), {
                                              class: "h-5 w-5",
                                              "aria-hidden": "true"
                                            })
                                          ])) : createCommentVNode("", true)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onChange"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", {
                  id: "explore",
                  class: "flex flex-col items-center gap-5 w-full mx-10"
                }, [
                  createVNode("div", { class: "relative flex flex-col w-full" }, [
                    createVNode("div", { class: "w-full flex justify-center items-start px-10 gap-5" }, [
                      createVNode(unref(TabGroup), {
                        "default-index": selectedCategory.value - 1
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-1/5 flex-shrink-0 h-screen" }, [
                            createVNode(unref(TabList), { class: "w-full flex flex-col h-full px-5 justify-evenly items-center border-r border-l border-gray-100" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(unref(Tab), {
                                  class: "relative w-full",
                                  as: "button",
                                  key: 1
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, {
                                      class: "w-full justify-center h-full",
                                      py: "py-3",
                                      onClick: selectAllCategories,
                                      as: "button"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" all categories ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(allCategories).slice(1, -1), (category) => {
                                  return openBlock(), createBlock(unref(Tab), {
                                    class: "relative w-full",
                                    as: "button",
                                    key: category["id"]
                                  }, {
                                    default: withCtx(({ selected }) => [
                                      category["id"] > 1 ? (openBlock(), createBlock("button", {
                                        key: 0,
                                        class: [
                                          "w-full rounded-lg text-sm font-semibold transition-all duration-200",
                                          "focus:border focus:border-[#008a8e] py-2",
                                          selected ? "bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none" : "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none",
                                          selectedCategory.value === 1 ? "text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none" : ""
                                        ],
                                        onClick: ($event) => selectCategory(category["id"])
                                      }, toDisplayString(category["name"]), 11, ["onClick"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["default-index"]),
                      sortProducts.value.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative flex justify-center items-center h-screen w-full"
                      }, [
                        createVNode("p", { class: "font-semibold w-full text-center" }, " No items exists in the range specified ")
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "grid grid-cols-4 max-h-screen w-full overflow-y-scroll scrollbar-hide"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(sortProducts.value, (product) => {
                          return openBlock(), createBlock(unref(Link), {
                            class: "col-span-1 p-5 border border-gray-100",
                            href: _ctx.route("details", product["id"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-3" }, [
                                createVNode("div", { class: "relative flex rounded-lg h-1/2" }, [
                                  createVNode("img", {
                                    src: _ctx.asset(product["imageurl"].slice(36)),
                                    alt: "",
                                    class: "rounded-xl"
                                  }, null, 8, ["src"]),
                                  product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "absolute bottom-0 right-0 text-xl p-2 font-semibold w-full leading-none"
                                  }, [
                                    product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                                    }, " $ " + toDisplayString(product["price"]), 1)) : createCommentVNode("", true),
                                    product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                                    }, [
                                      createVNode("p", { class: "text-xs px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + " % Off ", 1),
                                      createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                                    }, [
                                      createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                                    ]))
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "absolute bottom-0 right-0 text-xl p-2 font-semibold w-fit leading-none"
                                  }, [
                                    product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                                    }, " $ " + toDisplayString(product["price"]), 1)) : createCommentVNode("", true),
                                    product["discount"] != 0 ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                                    }, [
                                      createVNode("p", { class: "text-xs px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + " % Off ", 1),
                                      createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                                    }, [
                                      createVNode("p", { class: "text-xs font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                                    ]))
                                  ]))
                                ]),
                                createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                                  createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(product["name"]), 1),
                                  createVNode("p", { class: "text-gray-500" }, toDisplayString(product["category"]["name"]), 1),
                                  createVNode("div", { class: "flex w-full items-center justify-center" }, [
                                    createVNode("p", { class: "leading-none mr-1 text-sm" }, toDisplayString(product["ratings"]), 1),
                                    createVNode("div", { class: "flex mr-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(parseInt(product["ratings"]), (n) => {
                                        return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" });
                                      }), 256)),
                                      (openBlock(true), createBlock(Fragment, null, renderList(5 - parseInt(product["ratings"]), (n) => {
                                        return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" });
                                      }), 256))
                                    ]),
                                    createVNode("p", { class: "leading-none text-sm" }, " (" + toDisplayString(product["reviews"]) + ") ", 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 256))
                      ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Collection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
