import { ref, computed, watch, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-Cg5Xxdpg.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-Db0SKJ0H.js";
import { _ as _sfc_main$5 } from "./PrimaryButton-BLKm_jDc.js";
import { useForm, Link } from "@inertiajs/vue3";
import { Combobox, ComboboxInput, TransitionRoot, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
import "./Toast-DjZaaVwW.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    postalList: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      address_line: "",
      phone_number: "",
      postal_id: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset()
      });
    };
    const formFields = [
      { label: "Name", name: "name", type: "text", span: "col-span-6" },
      { label: "Email", name: "email", type: "email", span: "col-span-6" },
      { label: "Password", name: "password", type: "password", span: "col-span-6" },
      { label: "Password Confirmation", name: "password_confirmation", type: "password", span: "col-span-6" },
      { label: "Address Line", name: "address_line", type: "text", span: "col-span-12" },
      { label: "Phone Number", name: "phone_number", type: "text", span: "col-span-6" },
      { label: "Postal Code", name: "postal_id", span: "col-span-6" },
      { label: "City", name: "city", type: "text", span: "col-span-6" },
      { label: "Province", name: "province", type: "text", span: "col-span-6" }
    ];
    const allPostalCodes = props.postalList.map(
      (postal) => ({
        id: postal["postal_id"],
        postalCode: postal["postal_code"],
        city: postal["city"],
        province: postal["province"]
      })
    );
    let selected = ref("");
    let query = ref("");
    let filteredPostal = computed(
      () => query.value === "" ? allPostalCodes : allPostalCodes.filter(
        (postal) => postal.postalCode.replace(/\s+/g, "").includes(query.value.replace(/\s+/g, ""))
      )
    );
    let city = ref("");
    let province = ref("");
    watch(selected, (newValue) => {
      if (newValue) {
        city.value = newValue.city;
        province.value = newValue.province;
        form.postal_id = newValue.id;
      } else {
        city.value = "";
        province.value = "";
        form.postal_id = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Register",
        width: "max-w-2xl"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="text-gray-700 px-1 overflow-scroll scrollbar-hide"${_scopeId}><div class="grid grid-cols-12 gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(formFields, (field) => {
              _push2(`<div class="${ssrRenderClass(field.span)}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: field.name,
                value: field.label
              }, null, _parent2, _scopeId));
              if (field.name == "postal_id") {
                _push2(ssrRenderComponent(unref(Combobox), {
                  modelValue: unref(selected),
                  "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : selected = $event
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative mt-1"${_scopeId2}><div class="relative w-full cursor-default overflow-hidden border-none box-border"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ComboboxInput), {
                        class: "w-full focus:ring-0 border rounded-md border-gray-300 shadow-sm leading-normal focus:border-[#00adb5] focus:ring-[#00adb5] focus:border-2 focus:leading-none",
                        displayValue: (postal) => postal.postalCode,
                        onChange: ($event) => isRef(query) ? query.value = $event.target.value : query = $event.target.value
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(unref(TransitionRoot), {
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        onAfterLeave: ($event) => isRef(query) ? query.value = "" : query = ""
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (unref(filteredPostal).length === 0 && unref(query) !== "") {
                                    _push5(`<div class="relative cursor-default select-none px-4 py-2 text-gray-700"${_scopeId4}> Nothing found. </div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--[-->`);
                                  ssrRenderList(unref(filteredPostal), (postal) => {
                                    _push5(ssrRenderComponent(unref(ComboboxOption), {
                                      as: "template",
                                      key: postal.id,
                                      value: postal
                                    }, {
                                      default: withCtx(({ selected: selected2, active }, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<li class="${ssrRenderClass([{
                                            "bg-teal-600 text-white": active,
                                            "text-gray-900": !active
                                          }, "relative cursor-default select-none py-2 pl-10 pr-4"])}"${_scopeId5}><span class="${ssrRenderClass([{
                                            "font-medium": selected2,
                                            "font-normal": !selected2
                                          }, "block truncate"])}"${_scopeId5}>${ssrInterpolate(postal.postalCode)}</span>`);
                                          if (selected2) {
                                            _push6(`<span class="${ssrRenderClass([{
                                              "text-white": active,
                                              "text-teal-600": !active
                                            }, "absolute inset-y-0 left-0 flex items-center pl-3"])}"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(unref(CheckIcon), {
                                              class: "h-5 w-5",
                                              "aria-hidden": "true"
                                            }, null, _parent6, _scopeId5));
                                            _push6(`</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          _push6(`</li>`);
                                        } else {
                                          return [
                                            createVNode("li", {
                                              class: ["relative cursor-default select-none py-2 pl-10 pr-4", {
                                                "bg-teal-600 text-white": active,
                                                "text-gray-900": !active
                                              }]
                                            }, [
                                              createVNode("span", {
                                                class: ["block truncate", {
                                                  "font-medium": selected2,
                                                  "font-normal": !selected2
                                                }]
                                              }, toDisplayString(postal.postalCode), 3),
                                              selected2 ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: ["absolute inset-y-0 left-0 flex items-center pl-3", {
                                                  "text-white": active,
                                                  "text-teal-600": !active
                                                }]
                                              }, [
                                                createVNode(unref(CheckIcon), {
                                                  class: "h-5 w-5",
                                                  "aria-hidden": "true"
                                                })
                                              ], 2)) : createCommentVNode("", true)
                                            ], 2)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    unref(filteredPostal).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "relative cursor-default select-none px-4 py-2 text-gray-700"
                                    }, " Nothing found. ")) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPostal), (postal) => {
                                      return openBlock(), createBlock(unref(ComboboxOption), {
                                        as: "template",
                                        key: postal.id,
                                        value: postal
                                      }, {
                                        default: withCtx(({ selected: selected2, active }) => [
                                          createVNode("li", {
                                            class: ["relative cursor-default select-none py-2 pl-10 pr-4", {
                                              "bg-teal-600 text-white": active,
                                              "text-gray-900": !active
                                            }]
                                          }, [
                                            createVNode("span", {
                                              class: ["block truncate", {
                                                "font-medium": selected2,
                                                "font-normal": !selected2
                                              }]
                                            }, toDisplayString(postal.postalCode), 3),
                                            selected2 ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: ["absolute inset-y-0 left-0 flex items-center pl-3", {
                                                "text-white": active,
                                                "text-teal-600": !active
                                              }]
                                            }, [
                                              createVNode(unref(CheckIcon), {
                                                class: "h-5 w-5",
                                                "aria-hidden": "true"
                                              })
                                            ], 2)) : createCommentVNode("", true)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(ComboboxOptions), { class: "absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide" }, {
                                default: withCtx(() => [
                                  unref(filteredPostal).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative cursor-default select-none px-4 py-2 text-gray-700"
                                  }, " Nothing found. ")) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPostal), (postal) => {
                                    return openBlock(), createBlock(unref(ComboboxOption), {
                                      as: "template",
                                      key: postal.id,
                                      value: postal
                                    }, {
                                      default: withCtx(({ selected: selected2, active }) => [
                                        createVNode("li", {
                                          class: ["relative cursor-default select-none py-2 pl-10 pr-4", {
                                            "bg-teal-600 text-white": active,
                                            "text-gray-900": !active
                                          }]
                                        }, [
                                          createVNode("span", {
                                            class: ["block truncate", {
                                              "font-medium": selected2,
                                              "font-normal": !selected2
                                            }]
                                          }, toDisplayString(postal.postalCode), 3),
                                          selected2 ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: ["absolute inset-y-0 left-0 flex items-center pl-3", {
                                              "text-white": active,
                                              "text-teal-600": !active
                                            }]
                                          }, [
                                            createVNode(unref(CheckIcon), {
                                              class: "h-5 w-5",
                                              "aria-hidden": "true"
                                            })
                                          ], 2)) : createCommentVNode("", true)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative mt-1" }, [
                          createVNode("div", { class: "relative w-full cursor-default overflow-hidden border-none box-border" }, [
                            createVNode(unref(ComboboxInput), {
                              class: "w-full focus:ring-0 border rounded-md border-gray-300 shadow-sm leading-normal focus:border-[#00adb5] focus:ring-[#00adb5] focus:border-2 focus:leading-none",
                              displayValue: (postal) => postal.postalCode,
                              onChange: ($event) => isRef(query) ? query.value = $event.target.value : query = $event.target.value
                            }, null, 8, ["displayValue", "onChange"])
                          ]),
                          createVNode(unref(TransitionRoot), {
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            onAfterLeave: ($event) => isRef(query) ? query.value = "" : query = ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ComboboxOptions), { class: "absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide" }, {
                                default: withCtx(() => [
                                  unref(filteredPostal).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative cursor-default select-none px-4 py-2 text-gray-700"
                                  }, " Nothing found. ")) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPostal), (postal) => {
                                    return openBlock(), createBlock(unref(ComboboxOption), {
                                      as: "template",
                                      key: postal.id,
                                      value: postal
                                    }, {
                                      default: withCtx(({ selected: selected2, active }) => [
                                        createVNode("li", {
                                          class: ["relative cursor-default select-none py-2 pl-10 pr-4", {
                                            "bg-teal-600 text-white": active,
                                            "text-gray-900": !active
                                          }]
                                        }, [
                                          createVNode("span", {
                                            class: ["block truncate", {
                                              "font-medium": selected2,
                                              "font-normal": !selected2
                                            }]
                                          }, toDisplayString(postal.postalCode), 3),
                                          selected2 ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: ["absolute inset-y-0 left-0 flex items-center pl-3", {
                                              "text-white": active,
                                              "text-teal-600": !active
                                            }]
                                          }, [
                                            createVNode(unref(CheckIcon), {
                                              class: "h-5 w-5",
                                              "aria-hidden": "true"
                                            })
                                          ], 2)) : createCommentVNode("", true)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onAfterLeave"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (field.name == "city" || field.name == "province") {
                _push2(`<input${ssrRenderAttr("id", field.name)}${ssrRenderAttr("type", field.type)} class="mt-1 block w-full bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]"${ssrRenderAttr("value", field.name == "city" ? unref(city) : unref(province))} required disabled${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  id: field.name,
                  type: field.type,
                  class: "mt-1 block w-full",
                  modelValue: unref(form)[field.name],
                  "onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
                  required: ""
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_sfc_main$4, {
                class: "mt-2",
                message: unref(form).errors[field.name]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="mt-5 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-row justify-center items-center gap-1 pt-5"${_scopeId}><p class="rounded-md text-sm text-gray-600"${_scopeId}> Already Registered? </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
              href: _ctx.route("login")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log In `);
                } else {
                  return [
                    createTextVNode(" Log In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "text-gray-700 px-1 overflow-scroll scrollbar-hide"
              }, [
                createVNode("div", { class: "grid grid-cols-12 gap-5" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(formFields, (field) => {
                    return createVNode("div", {
                      key: field.name,
                      class: field.span
                    }, [
                      createVNode(_sfc_main$2, {
                        for: field.name,
                        value: field.label
                      }, null, 8, ["for", "value"]),
                      field.name == "postal_id" ? (openBlock(), createBlock(unref(Combobox), {
                        key: 0,
                        modelValue: unref(selected),
                        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : selected = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative mt-1" }, [
                            createVNode("div", { class: "relative w-full cursor-default overflow-hidden border-none box-border" }, [
                              createVNode(unref(ComboboxInput), {
                                class: "w-full focus:ring-0 border rounded-md border-gray-300 shadow-sm leading-normal focus:border-[#00adb5] focus:ring-[#00adb5] focus:border-2 focus:leading-none",
                                displayValue: (postal) => postal.postalCode,
                                onChange: ($event) => isRef(query) ? query.value = $event.target.value : query = $event.target.value
                              }, null, 8, ["displayValue", "onChange"])
                            ]),
                            createVNode(unref(TransitionRoot), {
                              leave: "transition ease-in duration-100",
                              leaveFrom: "opacity-100",
                              leaveTo: "opacity-0",
                              onAfterLeave: ($event) => isRef(query) ? query.value = "" : query = ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ComboboxOptions), { class: "absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide" }, {
                                  default: withCtx(() => [
                                    unref(filteredPostal).length === 0 && unref(query) !== "" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "relative cursor-default select-none px-4 py-2 text-gray-700"
                                    }, " Nothing found. ")) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPostal), (postal) => {
                                      return openBlock(), createBlock(unref(ComboboxOption), {
                                        as: "template",
                                        key: postal.id,
                                        value: postal
                                      }, {
                                        default: withCtx(({ selected: selected2, active }) => [
                                          createVNode("li", {
                                            class: ["relative cursor-default select-none py-2 pl-10 pr-4", {
                                              "bg-teal-600 text-white": active,
                                              "text-gray-900": !active
                                            }]
                                          }, [
                                            createVNode("span", {
                                              class: ["block truncate", {
                                                "font-medium": selected2,
                                                "font-normal": !selected2
                                              }]
                                            }, toDisplayString(postal.postalCode), 3),
                                            selected2 ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: ["absolute inset-y-0 left-0 flex items-center pl-3", {
                                                "text-white": active,
                                                "text-teal-600": !active
                                              }]
                                            }, [
                                              createVNode(unref(CheckIcon), {
                                                class: "h-5 w-5",
                                                "aria-hidden": "true"
                                              })
                                            ], 2)) : createCommentVNode("", true)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onAfterLeave"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])) : field.name == "city" || field.name == "province" ? (openBlock(), createBlock("input", {
                        key: 1,
                        id: field.name,
                        type: field.type,
                        class: "mt-1 block w-full bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]",
                        value: field.name == "city" ? unref(city) : unref(province),
                        required: "",
                        disabled: ""
                      }, null, 8, ["id", "type", "value"])) : (openBlock(), createBlock(_sfc_main$3, {
                        key: 2,
                        id: field.name,
                        type: field.type,
                        class: "mt-1 block w-full",
                        modelValue: unref(form)[field.name],
                        "onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
                        required: ""
                      }, null, 8, ["id", "type", "modelValue", "onUpdate:modelValue"])),
                      createVNode(_sfc_main$4, {
                        class: "mt-2",
                        message: unref(form).errors[field.name]
                      }, null, 8, ["message"])
                    ], 2);
                  }), 64))
                ]),
                createVNode("div", { class: "mt-5 flex items-center justify-end" }, [
                  createVNode(_sfc_main$5, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                createVNode("div", { class: "flex flex-row justify-center items-center gap-1 pt-5" }, [
                  createVNode("p", { class: "rounded-md text-sm text-gray-600" }, " Already Registered? "),
                  createVNode(unref(Link), {
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900",
                    href: _ctx.route("login")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log In ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
