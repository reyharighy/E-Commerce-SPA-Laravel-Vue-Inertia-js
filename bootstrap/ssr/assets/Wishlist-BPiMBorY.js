import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import { useForm } from "@inertiajs/vue3";
import { XMarkIcon, StarIcon } from "@heroicons/vue/24/outline";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./SecondaryButton-D2DFYZS-.js";
import { D as DangerButton } from "./DangerButton-gyytDuLp.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Toast-DjZaaVwW.js";
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
  __name: "Wishlist",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = ref(
      useForm({
        wishlist: props.data.map((product) => ({
          id: product["id"],
          product: product["product"],
          sizes: product["size"],
          imageurl: product["imageurl"]
        }))
      })
    );
    const productRemoval = ref(false);
    const confirmRemoval = ref(null);
    const deleteForm = useForm({
      productID: ""
    });
    const confirmProductRemoval = (product) => {
      productRemoval.value = true;
      deleteForm.productID = product;
      nextTick(() => confirmRemoval.value);
    };
    const closeModalDeletion = () => {
      productRemoval.value = false;
      deleteForm.clearErrors();
      deleteForm.reset();
    };
    const removeProduct = () => {
      deleteForm.delete(route("wishlist.destroy", deleteForm.productID), {
        preserveScroll: true,
        onSuccess: () => {
          form.value.wishlist = form.value.wishlist.filter(
            (item) => item.id !== deleteForm.productID.id
          );
          closeModalDeletion();
        },
        onError: () => confirmRemoval.value,
        onFinish: () => deleteForm.reset()
      });
    };
    const productAddition = ref(false);
    const confirmAddition = ref(false);
    const addForm = useForm({
      size: "",
      productID: props.data["id"]
    });
    const confirmProductAddition = (product) => {
      productAddition.value = true;
      addForm.size = product["sizes"];
      addForm.productID = product["product"]["id"];
      nextTick(() => confirmAddition.value);
    };
    const closeModalAddition = () => {
      productAddition.value = false;
      addForm.clearErrors();
      addForm.reset();
    };
    const addProduct = () => {
      addForm.post(route("cart.store"), {
        preserveScroll: true,
        onSuccess: () => closeModalAddition(),
        onError: () => confirmAddition.value,
        onFinish: () => addForm.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Wishlist" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full items-start text-gray-700 px-10 box-border wishlist-page" data-v-0cfec488${_scopeId}><div class="relative flex gap-5 h-full w-full" data-v-0cfec488${_scopeId}>`);
            if (props.data.length == 0) {
              _push2(`<div class="flex flex-col w-full justify-between gap-5" data-v-0cfec488${_scopeId}><div class="flex flex-col justify-between gap-5 mx-10" data-v-0cfec488${_scopeId}><p class="text-5xl font-semibold my-10" data-v-0cfec488${_scopeId}> My Wishlist </p><p class="text-center text-xl h-full font-normal my-10" data-v-0cfec488${_scopeId}> Your wishlist is empty </p></div></div>`);
            } else {
              _push2(`<div class="w-full flex" data-v-0cfec488${_scopeId}><div class="flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide wishlist-list" data-v-0cfec488${_scopeId}><div class="sticky top-0 flex flex-col bg-white" data-v-0cfec488${_scopeId}><p class="text-5xl font-semibold py-10 mx-10" data-v-0cfec488${_scopeId}> My Wishlist </p><hr data-v-0cfec488${_scopeId}></div><!--[-->`);
              ssrRenderList(form.value.wishlist, (product, _2) => {
                _push2(`<div class="max-w-5xl flex justify-center ml-20 mr-10" data-v-0cfec488${_scopeId}><div class="${ssrRenderClass([
                  "w-full flex gap-5",
                  product != form.value.wishlist[0] ? "mb-5" : "",
                  form.value.wishlist.length === 1 ? "mb-5" : ""
                ])}" data-v-0cfec488${_scopeId}><img class="w-1/6 rounded-xl"${ssrRenderAttr("src", _ctx.asset(product["product"]["imageurl"].slice(36)))} alt="" data-v-0cfec488${_scopeId}><div class="w-full flex flex-col gap-2 text-lg justify-between" data-v-0cfec488${_scopeId}><div class="flex flex-col gap-3 max-w-3xl" data-v-0cfec488${_scopeId}><div class="flex justify-between items-center h-fit" data-v-0cfec488${_scopeId}><p class="font-semibold text-xl" data-v-0cfec488${_scopeId}>${ssrInterpolate(product["product"]["name"])}</p><div class="w-1/2 h-fit flex items-center justify-end" data-v-0cfec488${_scopeId}><div class="w-1/2 text-end" data-v-0cfec488${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1, { class: "text-nowrap justify-center" }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` add to cart `);
                    } else {
                      return [
                        createTextVNode(" add to cart ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><button class="p-2" data-v-0cfec488${_scopeId}>`);
                _push2(ssrRenderComponent(unref(XMarkIcon), { class: "size-5" }, null, _parent2, _scopeId));
                _push2(`</button></div></div><div class="text-gray-500 flex gap-2 items-center leading-none" data-v-0cfec488${_scopeId}><p class="flex-shrink-0 text-xl" data-v-0cfec488${_scopeId}>${ssrInterpolate(product["product"]["category"]["name"])}</p><p data-v-0cfec488${_scopeId}>|</p><p data-v-0cfec488${_scopeId}>${ssrInterpolate(product["sizes"])}</p></div><div class="flex gap-2 text-xl" data-v-0cfec488${_scopeId}><p class="font-bold" data-v-0cfec488${_scopeId}> $ ${ssrInterpolate(product["product"]["discounted_price"])}</p>`);
                if (product["product"]["discount"] != 0) {
                  _push2(`<div class="flex gap-2" data-v-0cfec488${_scopeId}><p class="line-through text-gray-400 h-full" data-v-0cfec488${_scopeId}> $ ${ssrInterpolate(product["product"]["price"])}</p><p class="text-red-500 font-bold" data-v-0cfec488${_scopeId}>${ssrInterpolate(product["product"]["discount"])} % off </p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center" data-v-0cfec488${_scopeId}><p class="mr-2" data-v-0cfec488${_scopeId}>${ssrInterpolate(product["product"]["ratings"])}</p><div class="flex mr-5" data-v-0cfec488${_scopeId}><!--[-->`);
                ssrRenderList(parseInt(product["product"]["ratings"]), (n) => {
                  _push2(ssrRenderComponent(unref(StarIcon), { class: "size-6 fill-yellow-500 text-transparent" }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--><!--[-->`);
                ssrRenderList(5 - parseInt(product["product"]["ratings"]), (n) => {
                  _push2(ssrRenderComponent(unref(StarIcon), { class: "size-6 fill-gray-300 text-transparent" }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div><div data-v-0cfec488${_scopeId}>${ssrInterpolate(product["product"]["reviews"])} reviews </div></div></div></div><hr class="mt-5" data-v-0cfec488${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "max-width": "sm",
              show: productRemoval.value,
              onClose: closeModalDeletion
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-0cfec488${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-0cfec488${_scopeId2}> Are you sure want to remove the product from your wishlist? </h2><div class="mt-6 flex justify-end" data-v-0cfec488${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModalDeletion }, {
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
                  _push3(ssrRenderComponent(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(deleteForm).processing }],
                    disabled: unref(deleteForm).processing,
                    onClick: removeProduct
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` remove `);
                      } else {
                        return [
                          createTextVNode(" remove ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to remove the product from your wishlist? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalDeletion }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3", { "opacity-25": unref(deleteForm).processing }],
                          disabled: unref(deleteForm).processing,
                          onClick: removeProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" remove ")
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
            _push2(ssrRenderComponent(_sfc_main$2, {
              "max-width": "sm",
              show: productAddition.value,
              onClose: closeModalAddition
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-0cfec488${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-0cfec488${_scopeId2}> Are you sure want to store the product to your cart? </h2><div class="mt-6 flex justify-end" data-v-0cfec488${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModalAddition }, {
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
                    class: ["ms-3", { "opacity-25": unref(addForm).processing }],
                    disabled: unref(addForm).processing,
                    onClick: addProduct
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` add to cart `);
                      } else {
                        return [
                          createTextVNode(" add to cart ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to store the product to your cart? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalAddition }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(addForm).processing }],
                          disabled: unref(addForm).processing,
                          onClick: addProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" add to cart ")
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full items-start text-gray-700 px-10 box-border wishlist-page" }, [
                createVNode("div", { class: "relative flex gap-5 h-full w-full" }, [
                  props.data.length == 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col w-full justify-between gap-5"
                  }, [
                    createVNode("div", { class: "flex flex-col justify-between gap-5 mx-10" }, [
                      createVNode("p", { class: "text-5xl font-semibold my-10" }, " My Wishlist "),
                      createVNode("p", { class: "text-center text-xl h-full font-normal my-10" }, " Your wishlist is empty ")
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full flex"
                  }, [
                    createVNode("div", { class: "flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide wishlist-list" }, [
                      createVNode("div", { class: "sticky top-0 flex flex-col bg-white" }, [
                        createVNode("p", { class: "text-5xl font-semibold py-10 mx-10" }, " My Wishlist "),
                        createVNode("hr")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(form.value.wishlist, (product, _2) => {
                        return openBlock(), createBlock("div", {
                          class: "max-w-5xl flex justify-center ml-20 mr-10",
                          key: product.id
                        }, [
                          createVNode("div", {
                            class: [
                              "w-full flex gap-5",
                              product != form.value.wishlist[0] ? "mb-5" : "",
                              form.value.wishlist.length === 1 ? "mb-5" : ""
                            ]
                          }, [
                            createVNode("img", {
                              class: "w-1/6 rounded-xl",
                              src: _ctx.asset(product["product"]["imageurl"].slice(36)),
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-full flex flex-col gap-2 text-lg justify-between" }, [
                              createVNode("div", { class: "flex flex-col gap-3 max-w-3xl" }, [
                                createVNode("div", { class: "flex justify-between items-center h-fit" }, [
                                  createVNode("p", { class: "font-semibold text-xl" }, toDisplayString(product["product"]["name"]), 1),
                                  createVNode("div", { class: "w-1/2 h-fit flex items-center justify-end" }, [
                                    createVNode("div", {
                                      class: "w-1/2 text-end",
                                      onClick: withModifiers(($event) => confirmProductAddition(product), ["prevent"])
                                    }, [
                                      createVNode(_sfc_main$1, { class: "text-nowrap justify-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" add to cart ")
                                        ]),
                                        _: 1
                                      })
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      class: "p-2",
                                      onClick: withModifiers(($event) => confirmProductRemoval(product), ["prevent"])
                                    }, [
                                      createVNode(unref(XMarkIcon), { class: "size-5" })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("div", { class: "text-gray-500 flex gap-2 items-center leading-none" }, [
                                  createVNode("p", { class: "flex-shrink-0 text-xl" }, toDisplayString(product["product"]["category"]["name"]), 1),
                                  createVNode("p", null, "|"),
                                  createVNode("p", null, toDisplayString(product["sizes"]), 1)
                                ]),
                                createVNode("div", { class: "flex gap-2 text-xl" }, [
                                  createVNode("p", { class: "font-bold" }, " $ " + toDisplayString(product["product"]["discounted_price"]), 1),
                                  product["product"]["discount"] != 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex gap-2"
                                  }, [
                                    createVNode("p", { class: "line-through text-gray-400 h-full" }, " $ " + toDisplayString(product["product"]["price"]), 1),
                                    createVNode("p", { class: "text-red-500 font-bold" }, toDisplayString(product["product"]["discount"]) + " % off ", 1)
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("p", { class: "mr-2" }, toDisplayString(product["product"]["ratings"]), 1),
                                  createVNode("div", { class: "flex mr-5" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(parseInt(product["product"]["ratings"]), (n) => {
                                      return openBlock(), createBlock(unref(StarIcon), { class: "size-6 fill-yellow-500 text-transparent" });
                                    }), 256)),
                                    (openBlock(true), createBlock(Fragment, null, renderList(5 - parseInt(product["product"]["ratings"]), (n) => {
                                      return openBlock(), createBlock(unref(StarIcon), { class: "size-6 fill-gray-300 text-transparent" });
                                    }), 256))
                                  ])
                                ]),
                                createVNode("div", null, toDisplayString(product["product"]["reviews"]) + " reviews ", 1)
                              ])
                            ])
                          ], 2),
                          createVNode("hr", { class: "mt-5" })
                        ]);
                      }), 128))
                    ])
                  ]))
                ]),
                createVNode(_sfc_main$2, {
                  "max-width": "sm",
                  show: productRemoval.value,
                  onClose: closeModalDeletion
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to remove the product from your wishlist? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalDeletion }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3", { "opacity-25": unref(deleteForm).processing }],
                          disabled: unref(deleteForm).processing,
                          onClick: removeProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" remove ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode(_sfc_main$2, {
                  "max-width": "sm",
                  show: productAddition.value,
                  onClose: closeModalAddition
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to store the product to your cart? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalAddition }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(addForm).processing }],
                          disabled: unref(addForm).processing,
                          onClick: addProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" add to cart ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Wishlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Wishlist = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cfec488"]]);
export {
  Wishlist as default
};
