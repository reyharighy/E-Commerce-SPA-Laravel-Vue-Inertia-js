import { ref, computed, watch, unref, withCtx, isRef, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./TextInput-Db0SKJ0H.js";
import { _ as _sfc_main$4 } from "./PrimaryButton-BLKm_jDc.js";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import { Combobox, ComboboxInput, TransitionRoot, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    emailVerifiedAt: {
      type: String
    },
    message: {
      type: String
    },
    postalList: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const allPostalCodes = props.postalList.map(
      (postal) => ({
        id: postal["postal_id"],
        postalCode: postal["postal_code"],
        city: postal["city"],
        province: postal["province"]
      })
    );
    const user = usePage().props.auth.user;
    const selected = ref("");
    const city = ref("");
    const province = ref("");
    const form = useForm({
      name: user.name,
      address_line: user.address_line,
      phone_number: user.phone_number,
      postal_id: user.postal_id
    });
    if (user.postal_id) {
      const initialPostal = allPostalCodes.find((postal) => postal.id === user.postal_id);
      if (initialPostal) {
        selected.value = initialPostal;
        city.value = initialPostal.city;
        province.value = initialPostal.province;
      }
    }
    const formFields = [
      { label: "Name", name: "name", type: "text", span: "col-span-5" },
      { label: "Email", name: "email", type: "email", span: "col-span-5" },
      { name: "verify_email", span: "col-span-10" },
      { label: "Address Line", name: "address_line", type: "text", span: "col-span-10" },
      { label: "Phone Number", name: "phone_number", type: "text", span: "col-span-5" },
      { label: "Postal Code", name: "postal_id", span: "col-span-5" },
      { label: "City", name: "city", type: "text", span: "col-span-5" },
      { label: "Province", name: "province", type: "text", span: "col-span-5" }
    ];
    let query = ref("");
    let filteredPostal = computed(
      () => query.value === "" ? allPostalCodes : allPostalCodes.filter(
        (postal) => postal.postalCode.replace(/\s+/g, "").includes(query.value.replace(/\s+/g, ""))
      )
    );
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
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Profile Information </h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information. </p></header><form class="mt-6 space-y-6"><div class="grid grid-cols-10 gap-x-5"><!--[-->`);
      ssrRenderList(formFields, (field) => {
        _push(`<div class="${ssrRenderClass(field["span"])}">`);
        if (field["name"] != "verify_email") {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$1, {
            for: field["name"],
            value: field["label"]
          }, null, _parent));
          if (field["name"] != "city" && field["name"] != "province" && field["name"] != "email") {
            _push(`<div>`);
            if (field.name == "postal_id") {
              _push(ssrRenderComponent(unref(Combobox), {
                modelValue: selected.value,
                "onUpdate:modelValue": ($event) => selected.value = $event
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="relative mt-1"${_scopeId}><div class="relative w-full cursor-default overflow-hidden border-none box-border"${_scopeId}>`);
                    _push2(ssrRenderComponent(unref(ComboboxInput), {
                      class: "w-full focus:ring-0 border rounded-md border-gray-300 shadow-sm leading-normal focus:border-[#00adb5] focus:ring-[#00adb5] focus:border-2 focus:leading-none",
                      displayValue: (postal) => postal.postalCode,
                      onChange: ($event) => isRef(query) ? query.value = $event.target.value : query = $event.target.value
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                    _push2(ssrRenderComponent(unref(TransitionRoot), {
                      leave: "transition ease-in duration-100",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      onAfterLeave: ($event) => isRef(query) ? query.value = "" : query = ""
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide" }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                if (unref(filteredPostal).length === 0 && unref(query) !== "") {
                                  _push4(`<div class="relative cursor-default select-none px-4 py-2 text-gray-700"${_scopeId3}> Nothing found. </div>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`<!--[-->`);
                                ssrRenderList(unref(filteredPostal), (postal) => {
                                  _push4(ssrRenderComponent(unref(ComboboxOption), {
                                    as: "template",
                                    key: postal.id,
                                    value: postal
                                  }, {
                                    default: withCtx(({ selected: selected2, active }, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<li class="${ssrRenderClass([{
                                          "bg-teal-600 text-white": active,
                                          "text-gray-900": !active
                                        }, "relative cursor-default select-none py-2 pl-10 pr-4"])}"${_scopeId4}><span class="${ssrRenderClass([{
                                          "font-medium": selected2,
                                          "font-normal": !selected2
                                        }, "block truncate"])}"${_scopeId4}>${ssrInterpolate(postal.postalCode)}</span>`);
                                        if (selected2) {
                                          _push5(`<span class="${ssrRenderClass([{
                                            "text-white": active,
                                            "text-teal-600": !active
                                          }, "absolute inset-y-0 left-0 flex items-center pl-3"])}"${_scopeId4}>`);
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
                                  }, _parent4, _scopeId3));
                                });
                                _push4(`<!--]-->`);
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
                          }, _parent3, _scopeId2));
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
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
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
              }, _parent));
            } else {
              _push(ssrRenderComponent(_sfc_main$2, {
                id: field["name"],
                type: field["type"],
                class: ["mt-1 block w-full", field["name"] != formFields.slice(-1)[0]["name"] ? "mb-5" : ""],
                modelValue: unref(form)[field["name"]],
                "onUpdate:modelValue": ($event) => unref(form)[field["name"]] = $event,
                required: ""
              }, null, _parent));
            }
            _push(`</div>`);
          } else {
            _push(`<div><input${ssrRenderAttr("id", field["name"])}${ssrRenderAttr("type", field["type"])} class="mt-1 block w-full bg-gray-200 rounded-md shadow-sm border border-gray-300"${ssrRenderAttr("value", field["name"] == "city" ? city.value : field["name"] == "province" ? province.value : unref(user).email)} disabled></div>`);
          }
          _push(ssrRenderComponent(_sfc_main$3, {
            class: "mt-2",
            message: unref(form).errors[field["name"]]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div>`);
          if (__props.emailVerifiedAt === null) {
            _push(`<div><p class="text-sm text-gray-800 mb-5 -mt-2"> Your email address is unverified. `);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("verification.send"),
              method: "post",
              as: "button",
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Click here to send the verification email. `);
                } else {
                  return [
                    createTextVNode(" Click here to send the verification email. ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
