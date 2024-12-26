import { ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, vModelSelect, createCommentVNode, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { usePage, useForm, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import emblaCarouselVue from "embla-carousel-vue";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, StarIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./SecondaryButton-D2DFYZS-.js";
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
  __name: "Details",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const user = usePage().props.auth.user;
    const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });
    const currentIndex = ref(0);
    const setIndex = computed({
      set: (newIndex) => currentIndex.value = newIndex
    });
    const increaseIndex = computed({
      set: (val) => {
        if (currentIndex.value + val > 2) {
          currentIndex.value = 0;
        } else {
          currentIndex.value++;
        }
      }
    });
    const decreaseIndex = computed({
      set: (val) => {
        if (currentIndex.value - val < 0) {
          currentIndex.value = 2;
        } else {
          currentIndex.value--;
        }
      }
    });
    const scrollTo = (index) => {
      if (emblaApi.value) {
        emblaApi.value.scrollTo(index);
        setIndex.value = index;
      }
    };
    const scrollPrev = () => {
      if (emblaApi.value) {
        emblaApi.value.scrollPrev();
        decreaseIndex.value = 1;
      }
    };
    const scrollNext = () => {
      if (emblaApi.value) {
        emblaApi.value.scrollNext();
        increaseIndex.value = 1;
      }
    };
    const discounted = (val) => val > 0;
    const productAdditionToWishlist = ref(false);
    const selectedSizeToWishlist = ref(null);
    const wishlistForm = useForm({
      size: "",
      productID: props.data["id"]
    });
    const confirmProductAdditionToWishlist = () => {
      user ? productAdditionToWishlist.value = true : router.get(route("login"));
      nextTick(() => selectedSizeToWishlist.value);
    };
    const addProductToWishlist = () => {
      wishlistForm.post(route("wishlist.store"), {
        preserveScroll: true,
        onSuccess: () => closeModalToWishlist(),
        onError: () => selectedSizeToWishlist.value,
        onFinish: () => wishlistForm.reset()
      });
    };
    const closeModalToWishlist = () => {
      productAdditionToWishlist.value = false;
      wishlistForm.clearErrors();
      wishlistForm.reset();
    };
    const productAdditionToCart = ref(false);
    const selectedSizeToCart = ref(null);
    const cartForm = useForm({
      size: "",
      productID: props.data["id"]
    });
    const confirmProductAdditionToCart = () => {
      user ? productAdditionToCart.value = true : router.get(route("login"));
      nextTick(() => selectedSizeToCart.value);
    };
    const addProductToCart = () => {
      cartForm.post(route("cart.store"), {
        preserveScroll: true,
        onSuccess: () => closeModalToCart(),
        onError: () => selectedSizeToCart.value,
        onFinish: () => cartForm.reset()
      });
    };
    const closeModalToCart = () => {
      productAdditionToCart.value = false;
      cartForm.clearErrors();
      cartForm.reset();
    };
    const availableSizes = Object.fromEntries(
      Object.entries(props.data.sizes).filter(([_, value]) => value > 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Details" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-10 mt-5" data-v-ad489b71${_scopeId}><div class="flex justify-around w-full h-fit px-8 gap-5" data-v-ad489b71${_scopeId}><div class="w-1/3 flex flex-col justify-start items-center gap-5 py-5 flex-shrink-0" data-v-ad489b71${_scopeId}><div class="flex justify-evenly items-center gap-3" data-v-ad489b71${_scopeId}><div class="rounded-lg hover:cursor-pointer hover:bg-gray-100" data-v-ad489b71${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChevronDoubleLeftIcon), { class: "size-8 text-[#008a8e]" }, null, _parent2, _scopeId));
            _push2(`</div><div class="embla w-4/5 max-h-svh rounded-lg" data-v-ad489b71${_scopeId}><div class="embla__container" data-v-ad489b71${_scopeId}><!--[-->`);
            ssrRenderList(3, (index) => {
              _push2(`<div class="embla__slide" data-v-ad489b71${_scopeId}><img class="w-full h-96 object-center object-cover"${ssrRenderAttr("src", _ctx.asset(__props.data["imageurl"].slice(36)))} data-v-ad489b71${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div><div class="rounded-lg hover:cursor-pointer hover:bg-gray-100" data-v-ad489b71${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChevronDoubleRightIcon), { class: "size-8 text-[#008a8e]" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-center gap-2 mt-4" data-v-ad489b71${_scopeId}><!--[-->`);
            ssrRenderList(3, (index) => {
              _push2(`<div class="${ssrRenderClass([{ selected: currentIndex.value.valueOf() === index - 1 }, "thumbnail max-h-20 rounded-lg hover:bg-gray-100"])}" data-v-ad489b71${_scopeId}><img class="w-full h-full object-center object-cover rounded-lg"${ssrRenderAttr("src", _ctx.asset(__props.data["imageurl"].slice(36)))} data-v-ad489b71${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div><div class="w-full flex flex-col justify-start items-center p-5 gap-5" data-v-ad489b71${_scopeId}><div class="flex w-full justify-between font-bold text-gray-900 text-2xl" data-v-ad489b71${_scopeId}><p data-v-ad489b71${_scopeId}>${ssrInterpolate(props.data.name)}</p>`);
            if (discounted(__props.data.discount)) {
              _push2(`<div class="flex gap-2" data-v-ad489b71${_scopeId}><p class="line-through" data-v-ad489b71${_scopeId}> $${ssrInterpolate(props.data.price)}</p><p class="text-red-500" data-v-ad489b71${_scopeId}> $${ssrInterpolate((props.data.price * (100 - props.data.discount) / 100).toFixed(2))}</p></div>`);
            } else {
              _push2(`<p data-v-ad489b71${_scopeId}>$${ssrInterpolate(props.data.price)}</p>`);
            }
            _push2(`</div><div class="flex w-full justify-between text-gray-900 text-sm font-semibold" data-v-ad489b71${_scopeId}><div class="flex" data-v-ad489b71${_scopeId}><p class="mr-2" data-v-ad489b71${_scopeId}>${ssrInterpolate(props.data.ratings)}</p><div class="flex mr-5" data-v-ad489b71${_scopeId}><!--[-->`);
            ssrRenderList(parseInt(props.data.ratings), (n) => {
              _push2(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(5 - parseInt(props.data.ratings), (n) => {
              _push2(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-[#008a8e]",
              href: "#"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-ad489b71${_scopeId2}>See all ${ssrInterpolate(props.data.reviews)} reviews</p>`);
                } else {
                  return [
                    createVNode("p", null, "See all " + toDisplayString(props.data.reviews) + " reviews", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (props.data.discount > 0) {
              _push2(`<div class="text-red-500" data-v-ad489b71${_scopeId}>${ssrInterpolate(props.data.discount)} % discount </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col text-gray-900 font-semibold gap-2 w-full" data-v-ad489b71${_scopeId}><p data-v-ad489b71${_scopeId}>Sizes/Stocks</p><div class="flex flex-row gap-2" data-v-ad489b71${_scopeId}><!--[-->`);
            ssrRenderList(props.data.sizes, (stock, size) => {
              _push2(`<div class="flex flex-col gap-1 items-center" data-v-ad489b71${_scopeId}><div class="flex min-w-14 justify-center items-center rounded-lg bg-[#00adb5] text-white font-normal text-sm" data-v-ad489b71${_scopeId}><p class="px-5 py-2" data-v-ad489b71${_scopeId}>${ssrInterpolate(size)}</p></div><div class="h-1/2 w-1/2" data-v-ad489b71${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ChevronDownIcon), null, null, _parent2, _scopeId));
              _push2(`</div><div class="${ssrRenderClass([
                "flex min-w-14 justify-center items-center rounded-lg text-white font-normal text-sm",
                stock > 10 ? "bg-[#00adb5]" : "bg-red-500"
              ])}" data-v-ad489b71${_scopeId}><p class="px-5 py-2" data-v-ad489b71${_scopeId}>${ssrInterpolate(stock)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="flex flex-col w-full gap-2 justify-between" data-v-ad489b71${_scopeId}><p class="text-gray-900 font-semibold" data-v-ad489b71${_scopeId}>Description</p><p class="text-gray-500 font-normal text-sm leading-6" data-v-ad489b71${_scopeId}>${ssrInterpolate(props.data.description)}</p></div><div class="flex gap-5 mt-5 w-1/3" data-v-ad489b71${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "mt-5 w-full",
              href: "#"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    class: "hover:bg-blue-500 w-full justify-center",
                    "bg-color": "bg-blue-400",
                    onClick: confirmProductAdditionToWishlist
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` wishlist `);
                      } else {
                        return [
                          createTextVNode(" wishlist ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      class: "hover:bg-blue-500 w-full justify-center",
                      "bg-color": "bg-blue-400",
                      onClick: withModifiers(confirmProductAdditionToWishlist, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" wishlist ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-5 w-1/2" data-v-ad489b71${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { class: "text-nowrap justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` add to cart `);
                } else {
                  return [
                    createTextVNode(" add to cart ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "max-width": "sm",
              show: productAdditionToWishlist.value,
              onClose: closeModalToWishlist
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-ad489b71${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-ad489b71${_scopeId2}> Please specify the size </h2><p class="mt-1 text-sm text-gray-600 mb-5" data-v-ad489b71${_scopeId2}> You can only select the product size in stock. </p><select class="${ssrRenderClass([
                    "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                    "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                  ])}" data-v-ad489b71${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(availableSizes), (_3, size) => {
                    _push3(`<option${ssrRenderAttr("value", size)} data-v-ad489b71${ssrIncludeBooleanAttr(Array.isArray(unref(wishlistForm).size) ? ssrLooseContain(unref(wishlistForm).size, size) : ssrLooseEqual(unref(wishlistForm).size, size)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(size)}</option>`);
                  });
                  _push3(`<!--]--></select><div class="mt-6 flex justify-end" data-v-ad489b71${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModalToWishlist }, {
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
                    class: ["ms-3 hover:bg-blue-500 justify-center", { "opacity-25": unref(wishlistForm).processing }],
                    "bg-color": "bg-blue-400",
                    disabled: unref(wishlistForm).processing,
                    onClick: addProductToWishlist
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` add to wishlist `);
                      } else {
                        return [
                          createTextVNode(" add to wishlist ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Please specify the size "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600 mb-5" }, " You can only select the product size in stock. "),
                      withDirectives(createVNode("select", {
                        class: [
                          "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                          "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                        ],
                        "onUpdate:modelValue": ($event) => unref(wishlistForm).size = $event
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(availableSizes), (_3, size) => {
                          return openBlock(), createBlock("option", {
                            value: size,
                            key: size
                          }, toDisplayString(size), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(wishlistForm).size]
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalToWishlist }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3 hover:bg-blue-500 justify-center", { "opacity-25": unref(wishlistForm).processing }],
                          "bg-color": "bg-blue-400",
                          disabled: unref(wishlistForm).processing,
                          onClick: addProductToWishlist
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" add to wishlist ")
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
              show: productAdditionToCart.value,
              onClose: closeModalToCart
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-ad489b71${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-ad489b71${_scopeId2}> Please specify the size </h2><p class="mt-1 text-sm text-gray-600 mb-5" data-v-ad489b71${_scopeId2}> You can only select the product size in stock. For selected size added to your cart, the quantity will be automatically set to 1 item. You can furtherly edit it in your cart. </p><select class="${ssrRenderClass([
                    "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                    "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                  ])}" data-v-ad489b71${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(availableSizes), (_3, size) => {
                    _push3(`<option${ssrRenderAttr("value", size)} data-v-ad489b71${ssrIncludeBooleanAttr(Array.isArray(unref(cartForm).size) ? ssrLooseContain(unref(cartForm).size, size) : ssrLooseEqual(unref(cartForm).size, size)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(size)}</option>`);
                  });
                  _push3(`<!--]--></select><div class="mt-6 flex justify-end" data-v-ad489b71${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModalToCart }, {
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
                    class: ["ms-3", { "opacity-25": unref(cartForm).processing }],
                    disabled: unref(cartForm).processing,
                    onClick: addProductToCart
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
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Please specify the size "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600 mb-5" }, " You can only select the product size in stock. For selected size added to your cart, the quantity will be automatically set to 1 item. You can furtherly edit it in your cart. "),
                      withDirectives(createVNode("select", {
                        class: [
                          "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                          "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                        ],
                        "onUpdate:modelValue": ($event) => unref(cartForm).size = $event
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(availableSizes), (_3, size) => {
                          return openBlock(), createBlock("option", {
                            value: size,
                            key: size
                          }, toDisplayString(size), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(cartForm).size]
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalToCart }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(cartForm).processing }],
                          disabled: unref(cartForm).processing,
                          onClick: addProductToCart
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
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-10 mt-5" }, [
                createVNode("div", { class: "flex justify-around w-full h-fit px-8 gap-5" }, [
                  createVNode("div", { class: "w-1/3 flex flex-col justify-start items-center gap-5 py-5 flex-shrink-0" }, [
                    createVNode("div", { class: "flex justify-evenly items-center gap-3" }, [
                      createVNode("div", {
                        class: "rounded-lg hover:cursor-pointer hover:bg-gray-100",
                        onClick: scrollPrev
                      }, [
                        createVNode(unref(ChevronDoubleLeftIcon), { class: "size-8 text-[#008a8e]" })
                      ]),
                      createVNode("div", {
                        class: "embla w-4/5 max-h-svh rounded-lg",
                        ref_key: "emblaRef",
                        ref: emblaRef
                      }, [
                        createVNode("div", { class: "embla__container" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(3, (index) => {
                            return createVNode("div", {
                              class: "embla__slide",
                              key: index
                            }, [
                              createVNode("img", {
                                class: "w-full h-96 object-center object-cover",
                                src: _ctx.asset(__props.data["imageurl"].slice(36))
                              }, null, 8, ["src"])
                            ]);
                          }), 64))
                        ])
                      ], 512),
                      createVNode("div", {
                        class: "rounded-lg hover:cursor-pointer hover:bg-gray-100",
                        onClick: scrollNext
                      }, [
                        createVNode(unref(ChevronDoubleRightIcon), { class: "size-8 text-[#008a8e]" })
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center gap-2 mt-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (index) => {
                        return createVNode("div", {
                          key: index,
                          class: ["thumbnail max-h-20 rounded-lg hover:bg-gray-100", { selected: currentIndex.value.valueOf() === index - 1 }],
                          onClick: ($event) => scrollTo(index - 1)
                        }, [
                          (openBlock(), createBlock("img", {
                            class: "w-full h-full object-center object-cover rounded-lg",
                            key: index,
                            src: _ctx.asset(__props.data["imageurl"].slice(36))
                          }, null, 8, ["src"]))
                        ], 10, ["onClick"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "w-full flex flex-col justify-start items-center p-5 gap-5" }, [
                    createVNode("div", { class: "flex w-full justify-between font-bold text-gray-900 text-2xl" }, [
                      createVNode("p", null, toDisplayString(props.data.name), 1),
                      discounted(__props.data.discount) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2"
                      }, [
                        createVNode("p", { class: "line-through" }, " $" + toDisplayString(props.data.price), 1),
                        createVNode("p", { class: "text-red-500" }, " $" + toDisplayString((props.data.price * (100 - props.data.discount) / 100).toFixed(2)), 1)
                      ])) : (openBlock(), createBlock("p", { key: 1 }, "$" + toDisplayString(props.data.price), 1))
                    ]),
                    createVNode("div", { class: "flex w-full justify-between text-gray-900 text-sm font-semibold" }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("p", { class: "mr-2" }, toDisplayString(props.data.ratings), 1),
                        createVNode("div", { class: "flex mr-5" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(parseInt(props.data.ratings), (n) => {
                            return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" });
                          }), 256)),
                          (openBlock(true), createBlock(Fragment, null, renderList(5 - parseInt(props.data.ratings), (n) => {
                            return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" });
                          }), 256))
                        ]),
                        createVNode(unref(Link), {
                          class: "text-[#008a8e]",
                          href: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "See all " + toDisplayString(props.data.reviews) + " reviews", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      props.data.discount > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500"
                      }, toDisplayString(props.data.discount) + " % discount ", 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex flex-col text-gray-900 font-semibold gap-2 w-full" }, [
                      createVNode("p", null, "Sizes/Stocks"),
                      createVNode("div", { class: "flex flex-row gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.data.sizes, (stock, size) => {
                          return openBlock(), createBlock("div", { class: "flex flex-col gap-1 items-center" }, [
                            createVNode("div", { class: "flex min-w-14 justify-center items-center rounded-lg bg-[#00adb5] text-white font-normal text-sm" }, [
                              createVNode("p", { class: "px-5 py-2" }, toDisplayString(size), 1)
                            ]),
                            createVNode("div", { class: "h-1/2 w-1/2" }, [
                              createVNode(unref(ChevronDownIcon))
                            ]),
                            createVNode("div", {
                              class: [
                                "flex min-w-14 justify-center items-center rounded-lg text-white font-normal text-sm",
                                stock > 10 ? "bg-[#00adb5]" : "bg-red-500"
                              ]
                            }, [
                              createVNode("p", { class: "px-5 py-2" }, toDisplayString(stock), 1)
                            ], 2)
                          ]);
                        }), 256))
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col w-full gap-2 justify-between" }, [
                      createVNode("p", { class: "text-gray-900 font-semibold" }, "Description"),
                      createVNode("p", { class: "text-gray-500 font-normal text-sm leading-6" }, toDisplayString(props.data.description), 1)
                    ]),
                    createVNode("div", { class: "flex gap-5 mt-5 w-1/3" }, [
                      createVNode(unref(Link), {
                        class: "mt-5 w-full",
                        href: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            class: "hover:bg-blue-500 w-full justify-center",
                            "bg-color": "bg-blue-400",
                            onClick: withModifiers(confirmProductAdditionToWishlist, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" wishlist ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "mt-5 w-1/2",
                        onClick: withModifiers(confirmProductAdditionToCart, ["prevent"])
                      }, [
                        createVNode(_sfc_main$1, { class: "text-nowrap justify-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" add to cart ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_sfc_main$2, {
                        "max-width": "sm",
                        show: productAdditionToWishlist.value,
                        onClose: closeModalToWishlist
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-5 text-gray-900" }, [
                            createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Please specify the size "),
                            createVNode("p", { class: "mt-1 text-sm text-gray-600 mb-5" }, " You can only select the product size in stock. "),
                            withDirectives(createVNode("select", {
                              class: [
                                "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                                "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                              ],
                              "onUpdate:modelValue": ($event) => unref(wishlistForm).size = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(availableSizes), (_2, size) => {
                                return openBlock(), createBlock("option", {
                                  value: size,
                                  key: size
                                }, toDisplayString(size), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(wishlistForm).size]
                            ]),
                            createVNode("div", { class: "mt-6 flex justify-end" }, [
                              createVNode(_sfc_main$3, { onClick: closeModalToWishlist }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                class: ["ms-3 hover:bg-blue-500 justify-center", { "opacity-25": unref(wishlistForm).processing }],
                                "bg-color": "bg-blue-400",
                                disabled: unref(wishlistForm).processing,
                                onClick: addProductToWishlist
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" add to wishlist ")
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
                        show: productAdditionToCart.value,
                        onClose: closeModalToCart
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-5 text-gray-900" }, [
                            createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Please specify the size "),
                            createVNode("p", { class: "mt-1 text-sm text-gray-600 mb-5" }, " You can only select the product size in stock. For selected size added to your cart, the quantity will be automatically set to 1 item. You can furtherly edit it in your cart. "),
                            withDirectives(createVNode("select", {
                              class: [
                                "rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full",
                                "focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                              ],
                              "onUpdate:modelValue": ($event) => unref(cartForm).size = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(availableSizes), (_2, size) => {
                                return openBlock(), createBlock("option", {
                                  value: size,
                                  key: size
                                }, toDisplayString(size), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(cartForm).size]
                            ]),
                            createVNode("div", { class: "mt-6 flex justify-end" }, [
                              createVNode(_sfc_main$3, { onClick: closeModalToCart }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                class: ["ms-3", { "opacity-25": unref(cartForm).processing }],
                                disabled: unref(cartForm).processing,
                                onClick: addProductToCart
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad489b71"]]);
export {
  Details as default
};
