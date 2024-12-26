import { computed, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, withModifiers, createCommentVNode, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { U as UserAuthenticatedLayout } from "./UserAuthenticatedLayout-BLbGki18.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-BLKm_jDc.js";
import { useForm } from "@inertiajs/vue3";
import { XMarkIcon } from "@heroicons/vue/24/outline";
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
  __name: "Cart",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      cart: props.data.map((product) => ({
        id: product.id,
        product: product.product,
        size: product.size,
        quantity: product.quantity
      }))
    });
    const subTotal = computed(() => {
      return form.cart.reduce((sum, item) => {
        return sum + item["product"]["discounted_price"] * item["quantity"];
      }, 0);
    });
    const shippingEstimate = ref(5);
    const taxEstimate = computed(() => {
      return subTotal.value * 0.12;
    });
    const orderSummary = computed(() => {
      return subTotal.value + shippingEstimate.value + taxEstimate.value;
    });
    const updateQuantity = (index, newQuantity) => {
      form.cart[index].quantity = newQuantity;
      form.cart = [...form.cart];
    };
    const productRemoval = ref(false);
    const confirmRemoval = ref(null);
    const deleteForm = useForm({
      productID: null
    });
    const confirmProductRemoval = (product) => {
      productRemoval.value = true;
      deleteForm.productID = product;
      nextTick(() => confirmRemoval.value);
    };
    const closeModal = () => {
      productRemoval.value = false;
      deleteForm.clearErrors();
      deleteForm.reset();
    };
    const removeProduct = () => {
      deleteForm.delete(route("cart.destroy", deleteForm.productID), {
        preserveScroll: true,
        onSuccess: () => {
          form.cart = form.cart.filter(
            (item) => item.id !== deleteForm.productID.id
          );
          closeModal();
        },
        onError: () => confirmRemoval.value,
        onFinish: () => deleteForm.reset()
      });
    };
    const productCheckout = ref(false);
    const confirmCheckout = ref(null);
    const orderForm = useForm({
      details: computed(() => form.cart),
      total_amount: computed(() => orderSummary.value.toFixed(2))
    });
    const confirmProductCheckout = () => {
      productCheckout.value = true;
      nextTick(() => confirmCheckout.value);
    };
    const closeModalCheckout = () => {
      productCheckout.value = false;
      orderForm.clearErrors();
      orderForm.reset();
    };
    const checkoutProduct = () => {
      orderForm.post(route("order.store"), {
        preserveScroll: true,
        onSuccess: () => closeModalCheckout(),
        onError: () => confirmCheckout.value,
        onFinish: () => deleteForm.reset()
      });
    };
    const invalidStock = () => {
      for (let i = 0; i < form.cart.length; i++) {
        const quantity = form.cart[i]["quantity"];
        const stock = form.cart[i]["product"]["sizes"][form.cart[i]["size"]];
        if (quantity > stock) {
          return true;
        }
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAuthenticatedLayout, mergeProps({ title: "Cart" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page" data-v-f37d6ca7${_scopeId}><div class="relative flex gap-5 h-full w-full" data-v-f37d6ca7${_scopeId}>`);
            if (props.data.length == 0) {
              _push2(`<div class="flex flex-col w-full justify-between gap-5" data-v-f37d6ca7${_scopeId}><div class="flex flex-col justify-between gap-5 mx-10" data-v-f37d6ca7${_scopeId}><p class="text-5xl font-semibold my-10" data-v-f37d6ca7${_scopeId}> Shopping Cart </p><p class="text-center text-xl h-full font-normal my-10" data-v-f37d6ca7${_scopeId}> Your cart is empty </p></div></div>`);
            } else {
              _push2(`<div class="w-full flex" data-v-f37d6ca7${_scopeId}><div class="flex flex-col w-2/3 justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list" data-v-f37d6ca7${_scopeId}><div class="sticky top-0 flex flex-col bg-white" data-v-f37d6ca7${_scopeId}><p class="text-5xl font-semibold py-10" data-v-f37d6ca7${_scopeId}> Shopping Cart </p><hr data-v-f37d6ca7${_scopeId}></div><!--[-->`);
              ssrRenderList(unref(form).cart, (product, index) => {
                _push2(`<div class="w-full" data-v-f37d6ca7${_scopeId}><div class="${ssrRenderClass([
                  "flex gap-5",
                  product != unref(form).cart[0] ? "mb-5" : "",
                  unref(form).cart.length === 1 ? "mb-5" : ""
                ])}" data-v-f37d6ca7${_scopeId}><img class="w-1/3 rounded-xl"${ssrRenderAttr("src", _ctx.asset(product["product"]["imageurl"].slice(36)))} alt="" data-v-f37d6ca7${_scopeId}><div class="w-full flex flex-col gap-2 text-lg justify-between" data-v-f37d6ca7${_scopeId}><div class="flex flex-col gap-3" data-v-f37d6ca7${_scopeId}><div class="flex justify-between" data-v-f37d6ca7${_scopeId}><p class="font-semibold mt-1" data-v-f37d6ca7${_scopeId}>${ssrInterpolate(product["product"]["name"])}</p><div class="w-1/2 h-fit flex items-center justify-between" data-v-f37d6ca7${_scopeId}><p class="leading-none" data-v-f37d6ca7${_scopeId}> Quantity: </p><input class="w-1/3 rounded-md h-7" step="1" min="0" type="number"${ssrRenderAttr("name", product["id"])}${ssrRenderAttr("id", product["id"])}${ssrRenderAttr("value", product["quantity"])} data-v-f37d6ca7${_scopeId}><button class="p-2" data-v-f37d6ca7${_scopeId}>`);
                _push2(ssrRenderComponent(unref(XMarkIcon), { class: "size-5" }, null, _parent2, _scopeId));
                _push2(`</button></div></div><div class="text-gray-500 flex gap-2 items-center leading-none" data-v-f37d6ca7${_scopeId}><p class="flex-shrink-0" data-v-f37d6ca7${_scopeId}>${ssrInterpolate(product["product"]["category"]["name"])}</p><p data-v-f37d6ca7${_scopeId}>|</p><p data-v-f37d6ca7${_scopeId}>${ssrInterpolate(product["size"])}</p></div><div class="flex gap-2" data-v-f37d6ca7${_scopeId}><p class="font-bold" data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(product["product"]["discounted_price"])}</p>`);
                if (product["product"]["discount"] != 0) {
                  _push2(`<div class="flex gap-2" data-v-f37d6ca7${_scopeId}><p class="line-through text-gray-400 h-full" data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(product["product"]["price"])}</p><p class="text-red-500 font-bold" data-v-f37d6ca7${_scopeId}>${ssrInterpolate(product["product"]["discount"])} % off </p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex w-full font-semibold gap-2" data-v-f37d6ca7${_scopeId}>`);
                if (product["product"]["sizes"].hasOwnProperty(product["size"]) && product["product"]["sizes"][product["size"]] >= product["quantity"]) {
                  _push2(`<p class="text-green-400" data-v-f37d6ca7${_scopeId}> In Stock </p>`);
                } else {
                  _push2(`<p class="text-red-400" data-v-f37d6ca7${_scopeId}> Out of Stock </p>`);
                }
                _push2(`<p data-v-f37d6ca7${_scopeId}>|</p><p data-v-f37d6ca7${_scopeId}>${ssrInterpolate(product["product"]["sizes"][product["size"]])} items left! </p></div></div></div><hr class="mt-5" data-v-f37d6ca7${_scopeId}></div>`);
              });
              _push2(`<!--]--></div><div class="border-l border-gray-300 ml-5" data-v-f37d6ca7${_scopeId}></div><div class="relative w-1/3 flex-col m-auto flex flec-col gap-5 ml-5" data-v-f37d6ca7${_scopeId}><p class="text-xl font-semibold" data-v-f37d6ca7${_scopeId}> Order Summary </p><div class="flex w-full justify-between" data-v-f37d6ca7${_scopeId}><p data-v-f37d6ca7${_scopeId}> Subtotal </p><p data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(subTotal.value.toFixed(2))}</p></div><hr data-v-f37d6ca7${_scopeId}><div class="flex w-full justify-between" data-v-f37d6ca7${_scopeId}><p data-v-f37d6ca7${_scopeId}> Shipping Estimate </p><p data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(shippingEstimate.value.toFixed(2))}</p></div><hr data-v-f37d6ca7${_scopeId}><div class="flex w-full justify-between" data-v-f37d6ca7${_scopeId}><p data-v-f37d6ca7${_scopeId}> Tax Estimate </p><p data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(taxEstimate.value.toFixed(2))}</p></div><hr data-v-f37d6ca7${_scopeId}><div class="flex w-full justify-between" data-v-f37d6ca7${_scopeId}><p class="text-xl font-semibold" data-v-f37d6ca7${_scopeId}> Order Summary </p><p data-v-f37d6ca7${_scopeId}> $ ${ssrInterpolate(orderSummary.value.toFixed(2))}</p></div>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                class: ["w-full justify-center", { "opacity-50 cursor-not-allowed": invalidStock() }],
                onClick: confirmProductCheckout,
                disabled: invalidStock()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="py-1 px-2" data-v-f37d6ca7${_scopeId2}> Checkout </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "py-1 px-2" }, " Checkout ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (invalidStock()) {
                _push2(`<p class="text-red-500 text-sm mt-2" data-v-f37d6ca7${_scopeId}> One or more items exceed available stock. Please adjust your cart. </p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "max-width": "sm",
              show: productRemoval.value,
              onClose: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-f37d6ca7${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-f37d6ca7${_scopeId2}> Are you sure want to remove the product from your cart? </h2><div class="mt-6 flex justify-end" data-v-f37d6ca7${_scopeId2}>`);
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
                  _push3(ssrRenderComponent(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
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
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to remove the product from your cart? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
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
              show: productCheckout.value,
              onClose: closeModalCheckout
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 text-gray-900" data-v-f37d6ca7${_scopeId2}><h2 class="text-lg font-medium text-gray-900" data-v-f37d6ca7${_scopeId2}> Imagine this is the payment process. </h2><p data-v-f37d6ca7${_scopeId2}> This can be payment option. </p><p data-v-f37d6ca7${_scopeId2}> The adress of the customer where the product will be delivered. </p><p data-v-f37d6ca7${_scopeId2}> When proceeding, the payment is regarded as successfull. Thus, it&#39;ll skip the pending status. </p><div class="mt-6 flex justify-end" data-v-f37d6ca7${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { onClick: closeModalCheckout }, {
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
                    class: ["ms-3", { "opacity-25": unref(orderForm).processing }],
                    disabled: unref(orderForm).processing,
                    onClick: checkoutProduct
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` proceed `);
                      } else {
                        return [
                          createTextVNode(" proceed ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Imagine this is the payment process. "),
                      createVNode("p", null, " This can be payment option. "),
                      createVNode("p", null, " The adress of the customer where the product will be delivered. "),
                      createVNode("p", null, " When proceeding, the payment is regarded as successfull. Thus, it'll skip the pending status. "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalCheckout }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(orderForm).processing }],
                          disabled: unref(orderForm).processing,
                          onClick: checkoutProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" proceed ")
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
              createVNode("div", { class: "flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page" }, [
                createVNode("div", { class: "relative flex gap-5 h-full w-full" }, [
                  props.data.length == 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col w-full justify-between gap-5"
                  }, [
                    createVNode("div", { class: "flex flex-col justify-between gap-5 mx-10" }, [
                      createVNode("p", { class: "text-5xl font-semibold my-10" }, " Shopping Cart "),
                      createVNode("p", { class: "text-center text-xl h-full font-normal my-10" }, " Your cart is empty ")
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full flex"
                  }, [
                    createVNode("div", { class: "flex flex-col w-2/3 justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list" }, [
                      createVNode("div", { class: "sticky top-0 flex flex-col bg-white" }, [
                        createVNode("p", { class: "text-5xl font-semibold py-10" }, " Shopping Cart "),
                        createVNode("hr")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).cart, (product, index) => {
                        return openBlock(), createBlock("div", {
                          class: "w-full",
                          key: product.id
                        }, [
                          createVNode("div", {
                            class: [
                              "flex gap-5",
                              product != unref(form).cart[0] ? "mb-5" : "",
                              unref(form).cart.length === 1 ? "mb-5" : ""
                            ]
                          }, [
                            createVNode("img", {
                              class: "w-1/3 rounded-xl",
                              src: _ctx.asset(product["product"]["imageurl"].slice(36)),
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-full flex flex-col gap-2 text-lg justify-between" }, [
                              createVNode("div", { class: "flex flex-col gap-3" }, [
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("p", { class: "font-semibold mt-1" }, toDisplayString(product["product"]["name"]), 1),
                                  createVNode("div", { class: "w-1/2 h-fit flex items-center justify-between" }, [
                                    createVNode("p", { class: "leading-none" }, " Quantity: "),
                                    withDirectives(createVNode("input", {
                                      class: "w-1/3 rounded-md h-7",
                                      step: "1",
                                      min: "0",
                                      type: "number",
                                      name: product["id"],
                                      id: product["id"],
                                      "onUpdate:modelValue": ($event) => product["quantity"] = $event,
                                      onInput: ($event) => updateQuantity(index, product["quantity"])
                                    }, null, 40, ["name", "id", "onUpdate:modelValue", "onInput"]), [
                                      [vModelText, product["quantity"]]
                                    ]),
                                    createVNode("button", {
                                      class: "p-2",
                                      onClick: withModifiers(($event) => confirmProductRemoval(product), ["prevent"])
                                    }, [
                                      createVNode(unref(XMarkIcon), { class: "size-5" })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("div", { class: "text-gray-500 flex gap-2 items-center leading-none" }, [
                                  createVNode("p", { class: "flex-shrink-0" }, toDisplayString(product["product"]["category"]["name"]), 1),
                                  createVNode("p", null, "|"),
                                  createVNode("p", null, toDisplayString(product["size"]), 1)
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("p", { class: "font-bold" }, " $ " + toDisplayString(product["product"]["discounted_price"]), 1),
                                  product["product"]["discount"] != 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex gap-2"
                                  }, [
                                    createVNode("p", { class: "line-through text-gray-400 h-full" }, " $ " + toDisplayString(product["product"]["price"]), 1),
                                    createVNode("p", { class: "text-red-500 font-bold" }, toDisplayString(product["product"]["discount"]) + " % off ", 1)
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "flex w-full font-semibold gap-2" }, [
                                product["product"]["sizes"].hasOwnProperty(product["size"]) && product["product"]["sizes"][product["size"]] >= product["quantity"] ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-green-400"
                                }, " In Stock ")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "text-red-400"
                                }, " Out of Stock ")),
                                createVNode("p", null, "|"),
                                createVNode("p", null, toDisplayString(product["product"]["sizes"][product["size"]]) + " items left! ", 1)
                              ])
                            ])
                          ], 2),
                          createVNode("hr", { class: "mt-5" })
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "border-l border-gray-300 ml-5" }),
                    createVNode("div", { class: "relative w-1/3 flex-col m-auto flex flec-col gap-5 ml-5" }, [
                      createVNode("p", { class: "text-xl font-semibold" }, " Order Summary "),
                      createVNode("div", { class: "flex w-full justify-between" }, [
                        createVNode("p", null, " Subtotal "),
                        createVNode("p", null, " $ " + toDisplayString(subTotal.value.toFixed(2)), 1)
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "flex w-full justify-between" }, [
                        createVNode("p", null, " Shipping Estimate "),
                        createVNode("p", null, " $ " + toDisplayString(shippingEstimate.value.toFixed(2)), 1)
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "flex w-full justify-between" }, [
                        createVNode("p", null, " Tax Estimate "),
                        createVNode("p", null, " $ " + toDisplayString(taxEstimate.value.toFixed(2)), 1)
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "flex w-full justify-between" }, [
                        createVNode("p", { class: "text-xl font-semibold" }, " Order Summary "),
                        createVNode("p", null, " $ " + toDisplayString(orderSummary.value.toFixed(2)), 1)
                      ]),
                      createVNode(_sfc_main$1, {
                        class: ["w-full justify-center", { "opacity-50 cursor-not-allowed": invalidStock() }],
                        onClick: withModifiers(confirmProductCheckout, ["prevent"]),
                        disabled: invalidStock()
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "py-1 px-2" }, " Checkout ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"]),
                      invalidStock() ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500 text-sm mt-2"
                      }, " One or more items exceed available stock. Please adjust your cart. ")) : createCommentVNode("", true)
                    ])
                  ]))
                ]),
                createVNode(_sfc_main$2, {
                  "max-width": "sm",
                  show: productRemoval.value,
                  onClose: closeModal
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure want to remove the product from your cart? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
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
                  show: productCheckout.value,
                  onClose: closeModalCheckout
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-5 text-gray-900" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Imagine this is the payment process. "),
                      createVNode("p", null, " This can be payment option. "),
                      createVNode("p", null, " The adress of the customer where the product will be delivered. "),
                      createVNode("p", null, " When proceeding, the payment is regarded as successfull. Thus, it'll skip the pending status. "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$3, { onClick: closeModalCheckout }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          class: ["ms-3", { "opacity-25": unref(orderForm).processing }],
                          disabled: unref(orderForm).processing,
                          onClick: checkoutProduct
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" proceed ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f37d6ca7"]]);
export {
  Cart as default
};
