import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "@heroicons/vue/20/solid";
const __default__ = {
  methods: {
    asset(path) {
      return `/${path}`;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    discountedProducts: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const topCategories = [
      { name: "Jeans", id: 8, image: "jeans" },
      { name: "Casual Shirts", id: 4, image: "casual-shirts" },
      { name: "Loungewear", id: 9, image: "loungewear" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Home" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden bg-[#73c1b4] min-h-dvh"${_scopeId}><div class="pt-20 pb-40"${_scopeId}><div class="static max-w-7xl px-10"${_scopeId}><div class="max-w-lg"${_scopeId}><h1 class="text-6xl font-bold tracking-tight text-gray-900"${_scopeId}> Search and Find Your Favorites </h1><p class="mt-4 text-xl text-gray-500"${_scopeId}> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </p></div><div${_scopeId}><div class="mt-10"${_scopeId}><div class="pointer-events-none"${_scopeId}><div class="absolute transform translate-x-8 left-1/2 top-1/2 -translate-y-1/2"${_scopeId}><div class="flex items-center space-x-8"${_scopeId}><div class="grid shrink-0 grid-cols-1 gap-y-8"${_scopeId}><div class="h-64 w-44 overflow-hidden rounded-lg opacity-100"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/hoodies-sweatshirts.jpg"))} alt=""${_scopeId}></div><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/chinos.jpg"))} alt=""${_scopeId}></div></div><div class="grid shrink-0 grid-cols-1 gap-y-8"${_scopeId}><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/jackets.jpg"))} alt=""${_scopeId}></div><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/cardigans-pullovers.jpg"))} alt=""${_scopeId}></div><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/tshirts.jpg"))} alt=""${_scopeId}></div></div><div class="grid shrink-0 grid-cols-1 gap-y-8"${_scopeId}><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/shorts.jpg"))} alt=""${_scopeId}></div><div class="h-64 w-44 overflow-hidden rounded-lg"${_scopeId}><img class="size-full object-cover"${ssrRenderAttr("src", _ctx.asset("images/casual-dresses.jpg"))} alt=""${_scopeId}></div></div></div></div></div></div></div></div></div></div><div id="offers" class="relative z-10 flex flex-col items-center justify-center h-fit text-center text-white px-10 pb-5 w-full"${_scopeId}><div class="flex flex-col gap-2 w-full mt-20 mb-5"${_scopeId}><h1 class="text-6xl font-bold text-gray-900"${_scopeId}> Year-End Clearance </h1><p class="mt-4 text-xl text-gray-500"${_scopeId}> Discover exclusive deals and elevate your style with our limited-time offers. </p></div><div class="flex bg-[#73c1b4] w-full py-5 rounded-xl"${_scopeId}><div class="flex flex-col items-start justify-center w-1/2 flex-shrink-0 pl-10 pt-24"${_scopeId}><h1 class="text-5xl text-left font-bold tracking-tight text-gray-900 w-full"${_scopeId}> Last Chance. </h1><h1 class="text-5xl text-left font-bold tracking-tight text-gray-900 w-full"${_scopeId}> Save up to 70% off. </h1>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 mt-10 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]",
              href: _ctx.route("offers", 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` offers `);
                } else {
                  return [
                    createTextVNode(" offers ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-5 text-gray-700 overflow-x-scroll scrollbar-hide pr-5"${_scopeId}><!--[-->`);
            ssrRenderList(__props.discountedProducts, (product) => {
              _push2(ssrRenderComponent(unref(Link), {
                class: "flex flex-col gap-3 min-w-fit",
                key: product.id,
                href: _ctx.route("details", product.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative flex"${_scopeId2}><img${ssrRenderAttr("src", _ctx.asset(product["imageurl"].slice(36)))} alt="" class="rounded-xl h-80 w-60 object-cover"${_scopeId2}><div class="absolute bottom-0 right-0 p-5 text-xl font-semibold w-full leading-none"${_scopeId2}><div class="flex text-sm line-through text-gray-400 px-2 text-end w-full justify-end"${_scopeId2}> $ ${ssrInterpolate(product["price"])}</div><div class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"${_scopeId2}><p class="text-sm px-2 py-1 text-red-400"${_scopeId2}>${ssrInterpolate(product["discount"])}% Off </p><p class="font-normal px-2 py-1"${_scopeId2}> $ ${ssrInterpolate(product["discounted_price"])}</p></div></div></div><div class="flex flex-col items-start gap-1"${_scopeId2}><p class="font-semibold"${_scopeId2}>${ssrInterpolate(product["name"])}</p><p class="text-gray-500"${_scopeId2}>${ssrInterpolate(product["category"]["name"])}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative flex" }, [
                        createVNode("img", {
                          src: _ctx.asset(product["imageurl"].slice(36)),
                          alt: "",
                          class: "rounded-xl h-80 w-60 object-cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "absolute bottom-0 right-0 p-5 text-xl font-semibold w-full leading-none" }, [
                          createVNode("div", { class: "flex text-sm line-through text-gray-400 px-2 text-end w-full justify-end" }, " $ " + toDisplayString(product["price"]), 1),
                          createVNode("div", { class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white" }, [
                            createVNode("p", { class: "text-sm px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + "% Off ", 1),
                            createVNode("p", { class: "font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-start gap-1" }, [
                        createVNode("p", { class: "font-semibold" }, toDisplayString(product["name"]), 1),
                        createVNode("p", { class: "text-gray-500" }, toDisplayString(product["category"]["name"]), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="flex flex-col gap-2 w-full pt-20 mb-5"${_scopeId}><h1 class="text-6xl font-bold text-gray-900"${_scopeId}> Explore Our Collection </h1><p class="mt-4 text-xl text-gray-500"${_scopeId}> Find Your Perfect Style Today! </p></div><div class="relative h-1/2 w-full"${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-70 rounded-xl"${_scopeId}></div><img class="rounded-xl"${ssrRenderAttr("src", _ctx.asset("images/category-bg-1.jpg"))} alt=""${_scopeId}><div class="absolute flex flex-col items-center justify-center w-full top-1/4 gap-5 py-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]",
              href: _ctx.route("collection", 1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` collection `);
                } else {
                  return [
                    createTextVNode(" collection ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-5xl font-bold text-gray-300"${_scopeId}> Our Top Collection </p></div><div class="absolute flex mx-auto w-full h-1/2 justify-evenly top-1/2 gap-10 px-10 pb-10"${_scopeId}><!--[-->`);
            ssrRenderList(topCategories, (category) => {
              _push2(ssrRenderComponent(unref(Link), {
                class: "w-1/3 hover:cursor-pointer",
                href: _ctx.route("collection", category.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="size-full object-cover rounded-xl"${ssrRenderAttr("src", _ctx.asset("images/" + category.image + ".jpg"))}${ssrRenderAttr("alt", category.image)}${_scopeId2}><p class="relative -top-12 w-fit ml-3 px-2 py-1 opacity-50 font-semibold text-xl bg-gray-700 rounded-lg"${_scopeId2}>${ssrInterpolate(category.name)}</p>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "size-full object-cover rounded-xl",
                        src: _ctx.asset("images/" + category.image + ".jpg"),
                        alt: category.image
                      }, null, 8, ["src", "alt"]),
                      createVNode("p", { class: "relative -top-12 w-fit ml-3 px-2 py-1 opacity-50 font-semibold text-xl bg-gray-700 rounded-lg" }, toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden bg-[#73c1b4] min-h-dvh" }, [
                createVNode("div", { class: "pt-20 pb-40" }, [
                  createVNode("div", { class: "static max-w-7xl px-10" }, [
                    createVNode("div", { class: "max-w-lg" }, [
                      createVNode("h1", { class: "text-6xl font-bold tracking-tight text-gray-900" }, " Search and Find Your Favorites "),
                      createVNode("p", { class: "mt-4 text-xl text-gray-500" }, " Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. ")
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "mt-10" }, [
                        createVNode("div", { class: "pointer-events-none" }, [
                          createVNode("div", { class: "absolute transform translate-x-8 left-1/2 top-1/2 -translate-y-1/2" }, [
                            createVNode("div", { class: "flex items-center space-x-8" }, [
                              createVNode("div", { class: "grid shrink-0 grid-cols-1 gap-y-8" }, [
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg opacity-100" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/hoodies-sweatshirts.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/chinos.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode("div", { class: "grid shrink-0 grid-cols-1 gap-y-8" }, [
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/jackets.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/cardigans-pullovers.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/tshirts.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode("div", { class: "grid shrink-0 grid-cols-1 gap-y-8" }, [
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/shorts.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "h-64 w-44 overflow-hidden rounded-lg" }, [
                                  createVNode("img", {
                                    class: "size-full object-cover",
                                    src: _ctx.asset("images/casual-dresses.jpg"),
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "offers",
                class: "relative z-10 flex flex-col items-center justify-center h-fit text-center text-white px-10 pb-5 w-full"
              }, [
                createVNode("div", { class: "flex flex-col gap-2 w-full mt-20 mb-5" }, [
                  createVNode("h1", { class: "text-6xl font-bold text-gray-900" }, " Year-End Clearance "),
                  createVNode("p", { class: "mt-4 text-xl text-gray-500" }, " Discover exclusive deals and elevate your style with our limited-time offers. ")
                ]),
                createVNode("div", { class: "flex bg-[#73c1b4] w-full py-5 rounded-xl" }, [
                  createVNode("div", { class: "flex flex-col items-start justify-center w-1/2 flex-shrink-0 pl-10 pt-24" }, [
                    createVNode("h1", { class: "text-5xl text-left font-bold tracking-tight text-gray-900 w-full" }, " Last Chance. "),
                    createVNode("h1", { class: "text-5xl text-left font-bold tracking-tight text-gray-900 w-full" }, " Save up to 70% off. "),
                    createVNode(unref(Link), {
                      class: "w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 mt-10 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]",
                      href: _ctx.route("offers", 1)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" offers ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "flex items-center gap-5 text-gray-700 overflow-x-scroll scrollbar-hide pr-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.discountedProducts, (product) => {
                      return openBlock(), createBlock(unref(Link), {
                        class: "flex flex-col gap-3 min-w-fit",
                        key: product.id,
                        href: _ctx.route("details", product.id)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative flex" }, [
                            createVNode("img", {
                              src: _ctx.asset(product["imageurl"].slice(36)),
                              alt: "",
                              class: "rounded-xl h-80 w-60 object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute bottom-0 right-0 p-5 text-xl font-semibold w-full leading-none" }, [
                              createVNode("div", { class: "flex text-sm line-through text-gray-400 px-2 text-end w-full justify-end" }, " $ " + toDisplayString(product["price"]), 1),
                              createVNode("div", { class: "flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white" }, [
                                createVNode("p", { class: "text-sm px-2 py-1 text-red-400" }, toDisplayString(product["discount"]) + "% Off ", 1),
                                createVNode("p", { class: "font-normal px-2 py-1" }, " $ " + toDisplayString(product["discounted_price"]), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-col items-start gap-1" }, [
                            createVNode("p", { class: "font-semibold" }, toDisplayString(product["name"]), 1),
                            createVNode("p", { class: "text-gray-500" }, toDisplayString(product["category"]["name"]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-2 w-full pt-20 mb-5" }, [
                  createVNode("h1", { class: "text-6xl font-bold text-gray-900" }, " Explore Our Collection "),
                  createVNode("p", { class: "mt-4 text-xl text-gray-500" }, " Find Your Perfect Style Today! ")
                ]),
                createVNode("div", { class: "relative h-1/2 w-full" }, [
                  createVNode("div", { class: "absolute inset-0 bg-black bg-opacity-70 rounded-xl" }),
                  createVNode("img", {
                    class: "rounded-xl",
                    src: _ctx.asset("images/category-bg-1.jpg"),
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "absolute flex flex-col items-center justify-center w-full top-1/4 gap-5 py-10" }, [
                    createVNode(unref(Link), {
                      class: "w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]",
                      href: _ctx.route("collection", 1)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" collection ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode("p", { class: "text-5xl font-bold text-gray-300" }, " Our Top Collection ")
                  ]),
                  createVNode("div", { class: "absolute flex mx-auto w-full h-1/2 justify-evenly top-1/2 gap-10 px-10 pb-10" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(topCategories, (category) => {
                      return createVNode(unref(Link), {
                        class: "w-1/3 hover:cursor-pointer",
                        href: _ctx.route("collection", category.id)
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "size-full object-cover rounded-xl",
                            src: _ctx.asset("images/" + category.image + ".jpg"),
                            alt: category.image
                          }, null, 8, ["src", "alt"]),
                          createVNode("p", { class: "relative -top-12 w-fit ml-3 px-2 py-1 opacity-50 font-semibold text-xl bg-gray-700 rounded-lg" }, toDisplayString(category.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
