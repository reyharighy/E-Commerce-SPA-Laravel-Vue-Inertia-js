import { ref, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withKeys, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { S as SellerAuthenticatedLayout } from "./SellerAuthenticatedLayout-1GsbVnIc.js";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import emblaCarouselVue from "embla-carousel-vue";
import { D as DangerButton } from "./DangerButton-gyytDuLp.js";
import { _ as _sfc_main$2, a as _sfc_main$6 } from "./SecondaryButton-D2DFYZS-.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from "./TextInput-Db0SKJ0H.js";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, StarIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
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
  __name: "ProductShow",
  __ssrInlineRender: true,
  props: {
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
    const confirmingProductDeletion = ref(false);
    const confirmationInput = ref(null);
    const form = useForm({
      confirmation: ""
    });
    const confirmProductDeletion = () => {
      confirmingProductDeletion.value = true;
      nextTick(() => confirmationInput.value);
    };
    const deleteProduct = (productID) => {
      form.delete(route("product.destroy", productID), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => confirmationInput.value,
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingProductDeletion.value = false;
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(SellerAuthenticatedLayout, mergeProps({ title: __props.pageTitle }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-10 mt-5" data-v-c106ece0${_scopeId}><div class="flex items-center justify-between px-8" data-v-c106ece0${_scopeId}>`);
            if (__props.pageTitle == __props.rootPath[0]) {
              _push2(`<div data-v-c106ece0${_scopeId}><h2 class="font-semibold text-xl text-[#008a8e] leading-tight" data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.pageTitle)}</h2></div>`);
            } else {
              _push2(`<div class="flex" data-v-c106ece0${_scopeId}><!--[-->`);
              ssrRenderList(__props.rootPath, (page) => {
                _push2(`<div class="font-semibold text-xl text-gray-900 leading-tight" data-v-c106ece0${_scopeId}><div class="flex flex-row items-end" data-v-c106ece0${_scopeId}>`);
                if (page != __props.pageTitle) {
                  _push2(`<h1 class="mr-2 text-2xl leading-tight" data-v-c106ece0${_scopeId}>${ssrInterpolate(page)}</h1>`);
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
              _push2(`<!--]--><div class="font-semibold text-2xl text-[#008a8e] leading-tight" data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.pageTitle)}</div></div>`);
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
            _push2(`</div><div class="flex justify-around w-full h-fit px-8 gap-5" data-v-c106ece0${_scopeId}><div class="w-1/3 flex flex-col justify-start items-center gap-5 py-5 flex-shrink-0" data-v-c106ece0${_scopeId}><div class="flex justify-evenly items-center gap-3" data-v-c106ece0${_scopeId}><div class="rounded-lg hover:cursor-pointer hover:bg-gray-100" data-v-c106ece0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChevronDoubleLeftIcon), { class: "size-8 text-[#008a8e]" }, null, _parent2, _scopeId));
            _push2(`</div><div class="embla w-4/5 max-h-svh rounded-lg" data-v-c106ece0${_scopeId}><div class="embla__container" data-v-c106ece0${_scopeId}><!--[-->`);
            ssrRenderList(3, (index) => {
              _push2(`<div class="embla__slide" data-v-c106ece0${_scopeId}><img class="w-full h-96 object-center object-cover"${ssrRenderAttr("src", _ctx.asset(__props.data["imageurl"].slice(36)))} data-v-c106ece0${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div><div class="rounded-lg hover:cursor-pointer hover:bg-gray-100" data-v-c106ece0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChevronDoubleRightIcon), { class: "size-8 text-[#008a8e]" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-center gap-2 mt-4" data-v-c106ece0${_scopeId}><!--[-->`);
            ssrRenderList(3, (index) => {
              _push2(`<div class="${ssrRenderClass([{ selected: currentIndex.value.valueOf() === index - 1 }, "thumbnail max-h-20 rounded-lg hover:bg-gray-100"])}" data-v-c106ece0${_scopeId}><img class="w-full h-full object-center object-cover rounded-lg"${ssrRenderAttr("src", _ctx.asset(__props.data["imageurl"].slice(36)))} data-v-c106ece0${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div><div class="w-full flex flex-col justify-start items-center p-5 gap-5" data-v-c106ece0${_scopeId}><div class="flex w-full justify-between font-bold text-gray-900 text-2xl" data-v-c106ece0${_scopeId}><p data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.data.name)}</p>`);
            if (discounted(__props.data.discount)) {
              _push2(`<div class="flex gap-2" data-v-c106ece0${_scopeId}><p class="line-through" data-v-c106ece0${_scopeId}> $${ssrInterpolate(__props.data.price)}</p><p class="text-red-500" data-v-c106ece0${_scopeId}> $${ssrInterpolate((__props.data.price * (100 - __props.data.discount) / 100).toFixed(2))}</p></div>`);
            } else {
              _push2(`<p data-v-c106ece0${_scopeId}>$${ssrInterpolate(__props.data.price)}</p>`);
            }
            _push2(`</div><div class="flex w-full justify-between text-gray-900 text-sm font-semibold" data-v-c106ece0${_scopeId}><div class="flex" data-v-c106ece0${_scopeId}><p class="mr-2" data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.data.ratings)}</p><div class="flex mr-5" data-v-c106ece0${_scopeId}><!--[-->`);
            ssrRenderList(parseInt(__props.data.ratings), (n) => {
              _push2(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(5 - parseInt(__props.data.ratings), (n) => {
              _push2(ssrRenderComponent(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-[#008a8e]",
              href: "#"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-c106ece0${_scopeId2}>See all ${ssrInterpolate(__props.data.reviews)} reviews</p>`);
                } else {
                  return [
                    createVNode("p", null, "See all " + toDisplayString(__props.data.reviews) + " reviews", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.data.discount > 0) {
              _push2(`<div class="text-red-500" data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.data.discount)} % discount </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col text-gray-900 font-semibold gap-2 w-full" data-v-c106ece0${_scopeId}><p data-v-c106ece0${_scopeId}>Sizes/Stocks</p><div class="flex flex-row gap-2" data-v-c106ece0${_scopeId}><!--[-->`);
            ssrRenderList(__props.data.sizes, (stock, size) => {
              _push2(`<div class="flex flex-col gap-1 items-center" data-v-c106ece0${_scopeId}><div class="flex min-w-14 justify-center items-center rounded-lg bg-[#00adb5] text-white font-normal text-sm" data-v-c106ece0${_scopeId}><p class="px-5 py-2" data-v-c106ece0${_scopeId}>${ssrInterpolate(size)}</p></div><div class="h-1/2 w-1/2" data-v-c106ece0${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ChevronDownIcon), null, null, _parent2, _scopeId));
              _push2(`</div><div class="${ssrRenderClass([
                "flex min-w-14 justify-center items-center rounded-lg text-white font-normal text-sm",
                stock > 10 ? "bg-[#00adb5]" : "bg-red-500"
              ])}" data-v-c106ece0${_scopeId}><p class="px-5 py-2" data-v-c106ece0${_scopeId}>${ssrInterpolate(stock)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="flex flex-col w-full gap-2 justify-between" data-v-c106ece0${_scopeId}><p class="text-gray-900 font-semibold" data-v-c106ece0${_scopeId}>Description</p><p class="text-gray-500 font-normal text-sm leading-6" data-v-c106ece0${_scopeId}>${ssrInterpolate(__props.data.description)}</p></div><div class="flex gap-5" data-v-c106ece0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "flex flex-row gap-5 mt-5",
              href: _ctx.route("product.edit", __props.data.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, { class: "w-24 justify-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` edit `);
                      } else {
                        return [
                          createTextVNode(" edit ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, { class: "w-24 justify-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" edit ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-row gap-5 mt-5" data-v-c106ece0${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { class: "w-24 justify-center bg-red-600 text-white hover:bg-red-700" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` delete `);
                } else {
                  return [
                    createTextVNode(" delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              show: confirmingProductDeletion.value,
              onClose: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6" data-v-c106ece0${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-c106ece0${_scopeId2}> Are you sure you want to delete the product? </h2><p class="mt-1 text-sm text-gray-600" data-v-c106ece0${_scopeId2}> Once the product is deleted, all of its resources and data will be permanently deleted. Please enter your confirmation to permanently delete the product. </p><div class="mt-6" data-v-c106ece0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    for: "confirmation",
                    value: "text"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    id: "confirmation",
                    ref_key: "confirmationInput",
                    ref: confirmationInput,
                    modelValue: unref(form).confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).confirmation = $event,
                    type: "text",
                    class: "mt-1 block w-3/4 text-gray-700",
                    placeholder: "Type 'delete'",
                    onKeyup: ($event) => deleteProduct(__props.data["id"])
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.confirmation,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-6 flex justify-end" data-v-c106ece0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, { onClick: closeModal }, {
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
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: ($event) => deleteProduct(__props.data["id"])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Product `);
                      } else {
                        return [
                          createTextVNode(" Delete Product ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete the product? "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once the product is deleted, all of its resources and data will be permanently deleted. Please enter your confirmation to permanently delete the product. "),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode(_sfc_main$3, {
                          for: "confirmation",
                          value: "text"
                        }),
                        createVNode(_sfc_main$4, {
                          id: "confirmation",
                          ref_key: "confirmationInput",
                          ref: confirmationInput,
                          modelValue: unref(form).confirmation,
                          "onUpdate:modelValue": ($event) => unref(form).confirmation = $event,
                          type: "text",
                          class: "mt-1 block w-3/4 text-gray-700",
                          placeholder: "Type 'delete'",
                          onKeyup: withKeys(($event) => deleteProduct(__props.data["id"]), ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.confirmation,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$6, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: ($event) => deleteProduct(__props.data["id"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete Product ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled", "onClick"])
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
                      createVNode("p", null, toDisplayString(__props.data.name), 1),
                      discounted(__props.data.discount) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2"
                      }, [
                        createVNode("p", { class: "line-through" }, " $" + toDisplayString(__props.data.price), 1),
                        createVNode("p", { class: "text-red-500" }, " $" + toDisplayString((__props.data.price * (100 - __props.data.discount) / 100).toFixed(2)), 1)
                      ])) : (openBlock(), createBlock("p", { key: 1 }, "$" + toDisplayString(__props.data.price), 1))
                    ]),
                    createVNode("div", { class: "flex w-full justify-between text-gray-900 text-sm font-semibold" }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("p", { class: "mr-2" }, toDisplayString(__props.data.ratings), 1),
                        createVNode("div", { class: "flex mr-5" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(parseInt(__props.data.ratings), (n) => {
                            return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-yellow-500 text-transparent" });
                          }), 256)),
                          (openBlock(true), createBlock(Fragment, null, renderList(5 - parseInt(__props.data.ratings), (n) => {
                            return openBlock(), createBlock(unref(StarIcon), { class: "size-5 fill-gray-300 text-transparent" });
                          }), 256))
                        ]),
                        createVNode(unref(Link), {
                          class: "text-[#008a8e]",
                          href: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "See all " + toDisplayString(__props.data.reviews) + " reviews", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      __props.data.discount > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500"
                      }, toDisplayString(__props.data.discount) + " % discount ", 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex flex-col text-gray-900 font-semibold gap-2 w-full" }, [
                      createVNode("p", null, "Sizes/Stocks"),
                      createVNode("div", { class: "flex flex-row gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.data.sizes, (stock, size) => {
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
                      createVNode("p", { class: "text-gray-500 font-normal text-sm leading-6" }, toDisplayString(__props.data.description), 1)
                    ]),
                    createVNode("div", { class: "flex gap-5" }, [
                      createVNode(unref(Link), {
                        class: "flex flex-row gap-5 mt-5",
                        href: _ctx.route("product.edit", __props.data.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, { class: "w-24 justify-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" edit ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode("div", {
                        class: "flex flex-row gap-5 mt-5",
                        onClick: withModifiers(confirmProductDeletion, ["prevent"])
                      }, [
                        createVNode(_sfc_main$1, { class: "w-24 justify-center bg-red-600 text-white hover:bg-red-700" }, {
                          default: withCtx(() => [
                            createTextVNode(" delete ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_sfc_main$2, {
                        show: confirmingProductDeletion.value,
                        onClose: closeModal
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-6" }, [
                            createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete the product? "),
                            createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once the product is deleted, all of its resources and data will be permanently deleted. Please enter your confirmation to permanently delete the product. "),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode(_sfc_main$3, {
                                for: "confirmation",
                                value: "text"
                              }),
                              createVNode(_sfc_main$4, {
                                id: "confirmation",
                                ref_key: "confirmationInput",
                                ref: confirmationInput,
                                modelValue: unref(form).confirmation,
                                "onUpdate:modelValue": ($event) => unref(form).confirmation = $event,
                                type: "text",
                                class: "mt-1 block w-3/4 text-gray-700",
                                placeholder: "Type 'delete'",
                                onKeyup: withKeys(($event) => deleteProduct(__props.data["id"]), ["enter"])
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                              createVNode(_sfc_main$5, {
                                message: unref(form).errors.confirmation,
                                class: "mt-2"
                              }, null, 8, ["message"])
                            ]),
                            createVNode("div", { class: "mt-6 flex justify-end" }, [
                              createVNode(_sfc_main$6, { onClick: closeModal }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(DangerButton, {
                                class: ["ms-3", { "opacity-25": unref(form).processing }],
                                disabled: unref(form).processing,
                                onClick: ($event) => deleteProduct(__props.data["id"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete Product ")
                                ]),
                                _: 1
                              }, 8, ["class", "disabled", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seller/ProductShow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c106ece0"]]);
export {
  ProductShow as default
};
