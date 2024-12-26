import { computed, ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { usePage, router, Head, Link } from "@inertiajs/vue3";
import { L as Logo, T as Toast } from "./Toast-DjZaaVwW.js";
import { PopoverGroup, Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ShoppingBagIcon, ArchiveBoxIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "UserAuthenticatedLayout",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const parentMenuList = computed(() => {
      const user = usePage().props.auth.user;
      return [
        { name: "Home", id: "home", href: "home" },
        { name: "Offers", id: "offers", href: "offers" },
        { name: "Collection", id: "collection", href: "collection" },
        ...user ? [{ name: user.name, id: "user" }] : []
      ];
    });
    const subMenuList = computed(() => {
      const user = usePage().props.auth.user;
      return {
        "Shop": [
          { name: "Shop-1", id: "shop-1", description: "Description of Shop-1", href: "/", icon: ShoppingBagIcon },
          { name: "Shop-2", id: "shop-2", description: "Description of Shop-2", href: "/", icon: ShoppingBagIcon }
        ],
        ...user ? {
          [user.name]: [
            { name: "Profile", id: "profile", href: "/profile", method: "get", as: "a" },
            { name: "Log Out", id: "logout", href: "/logout", method: "post", as: "button" }
          ]
        } : {}
      };
    });
    const showingToast = ref(false);
    router.on("finish", () => {
      showingToast.value = !!usePage().props.toast.message;
    });
    const showingToastWarning = ref(false);
    router.on("finish", () => {
      showingToastWarning.value = !!usePage().props.toast.warning;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(`<div class="flex flex-col h-screen" data-v-29bf9242><div class="sticky" data-v-29bf9242><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" data-v-29bf9242><div class="flex lg:flex-1" data-v-29bf9242>`);
      _push(ssrRenderComponent(Logo, null, null, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.auth.user) {
        _push(ssrRenderComponent(unref(PopoverGroup), { class: "items-center justify-around flex gap-x-12" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(parentMenuList.value.slice(0, -1), (parentMenu) => {
                _push2(ssrRenderComponent(unref(Popover), {
                  class: "relative",
                  key: parentMenu.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (subMenuList.value[parentMenu.name]) {
                        _push3(ssrRenderComponent(unref(PopoverButton), { class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(parentMenu.name)} `);
                              _push4(ssrRenderComponent(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                                createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<div data-v-29bf9242${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Link), {
                          class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                          href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                          key: parentMenu.id,
                          as: "a"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(parentMenu.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(parentMenu.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(``);
                      _push3(ssrRenderComponent(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-29bf9242${_scopeId3}><!--[-->`);
                            ssrRenderList(subMenuList.value[parentMenu.name], (subMenu) => {
                              _push4(ssrRenderComponent(unref(Link), {
                                class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                key: subMenu.name,
                                href: subMenu.href,
                                as: "a"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" data-v-29bf9242${_scopeId4}>`);
                                    ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }, null), _parent5, _scopeId4);
                                    _push5(`</div><div class="flex-auto" data-v-29bf9242${_scopeId4}><p class="block text-gray-900" data-v-29bf9242${_scopeId4}>${ssrInterpolate(subMenu.name)}</p><p class="mt-1 text-gray-600" data-v-29bf9242${_scopeId4}>${ssrInterpolate(subMenu.description)}</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            return [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    as: "a"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        subMenuList.value[parentMenu.name] ? (openBlock(), createBlock(unref(PopoverButton), {
                          key: 0,
                          class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                            createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                          (openBlock(), createBlock(unref(Link), {
                            class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                            href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                            key: parentMenu.id,
                            as: "a"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(parentMenu.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]))
                        ])),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                    return openBlock(), createBlock(unref(Link), {
                                      class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                      key: subMenu.name,
                                      href: subMenu.href,
                                      as: "a"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                        ]),
                                        createVNode("div", { class: "flex-auto" }, [
                                          createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                          createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 128))
                                ])
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
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(parentMenuList.value.slice(0, -1), (parentMenu) => {
                  return openBlock(), createBlock(unref(Popover), {
                    class: "relative",
                    key: parentMenu.id
                  }, {
                    default: withCtx(() => [
                      subMenuList.value[parentMenu.name] ? (openBlock(), createBlock(unref(PopoverButton), {
                        key: 0,
                        class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                          createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                        (openBlock(), createBlock(unref(Link), {
                          class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                          href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                          key: parentMenu.id,
                          as: "a"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parentMenu.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]))
                      ])),
                      createVNode(Transition, {
                        "enter-active-class": "transition ease-out duration-200",
                        "enter-from-class": "opacity-0 translate-y-1",
                        "enter-to-class": "opacity-100 translate-y-0",
                        "leave-active-class": "transition ease-in duration-150",
                        "leave-from-class": "opacity-100 translate-y-0",
                        "leave-to-class": "opacity-0 translate-y-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    as: "a"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(PopoverGroup), { class: "items-center justify-around flex gap-x-12" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(parentMenuList.value, (parentMenu) => {
                _push2(ssrRenderComponent(unref(Popover), {
                  class: "relative",
                  key: parentMenu.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (subMenuList.value[parentMenu.name]) {
                        _push3(ssrRenderComponent(unref(PopoverButton), { class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(parentMenu.name)} `);
                              _push4(ssrRenderComponent(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                                createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<div data-v-29bf9242${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Link), {
                          class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                          href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                          key: parentMenu.id,
                          as: "a"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(parentMenu.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(parentMenu.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(``);
                      _push3(ssrRenderComponent(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-29bf9242${_scopeId3}><!--[-->`);
                            ssrRenderList(subMenuList.value[parentMenu.name], (subMenu) => {
                              _push4(ssrRenderComponent(unref(Link), {
                                class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                key: subMenu.name,
                                href: subMenu.href,
                                as: "a"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" data-v-29bf9242${_scopeId4}>`);
                                    ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }, null), _parent5, _scopeId4);
                                    _push5(`</div><div class="flex-auto" data-v-29bf9242${_scopeId4}><p class="block text-gray-900" data-v-29bf9242${_scopeId4}>${ssrInterpolate(subMenu.name)}</p><p class="mt-1 text-gray-600" data-v-29bf9242${_scopeId4}>${ssrInterpolate(subMenu.description)}</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            return [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    as: "a"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        subMenuList.value[parentMenu.name] ? (openBlock(), createBlock(unref(PopoverButton), {
                          key: 0,
                          class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                            createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                          (openBlock(), createBlock(unref(Link), {
                            class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                            href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                            key: parentMenu.id,
                            as: "a"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(parentMenu.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]))
                        ])),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                    return openBlock(), createBlock(unref(Link), {
                                      class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                      key: subMenu.name,
                                      href: subMenu.href,
                                      as: "a"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                          (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                        ]),
                                        createVNode("div", { class: "flex-auto" }, [
                                          createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                          createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 128))
                                ])
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
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(parentMenuList.value, (parentMenu) => {
                  return openBlock(), createBlock(unref(Popover), {
                    class: "relative",
                    key: parentMenu.id
                  }, {
                    default: withCtx(() => [
                      subMenuList.value[parentMenu.name] ? (openBlock(), createBlock(unref(PopoverButton), {
                        key: 0,
                        class: "flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                          createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                        (openBlock(), createBlock(unref(Link), {
                          class: "block text-sm/1 text-gray-900 space-y-2 py-3",
                          href: parentMenu.href === "collection" || parentMenu.href === "offers" ? _ctx.route(parentMenu.href, 1) : _ctx.route(parentMenu.href),
                          key: parentMenu.id,
                          as: "a"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parentMenu.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]))
                      ])),
                      createVNode(Transition, {
                        "enter-active-class": "transition ease-out duration-200",
                        "enter-from-class": "opacity-0 translate-y-1",
                        "enter-to-class": "opacity-100 translate-y-0",
                        "leave-active-class": "transition ease-in duration-150",
                        "leave-from-class": "opacity-100 translate-y-0",
                        "leave-to-class": "opacity-0 translate-y-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(PopoverPanel), { class: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    as: "a"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white" }, [
                                        (openBlock(), createBlock(resolveDynamicComponent(subMenu.icon), { class: "size-6 text-gray-900 group-hover:text-[#00adb5]" }))
                                      ]),
                                      createVNode("div", { class: "flex-auto" }, [
                                        createVNode("p", { class: "block text-gray-900" }, toDisplayString(subMenu.name), 1),
                                        createVNode("p", { class: "mt-1 text-gray-600" }, toDisplayString(subMenu.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      if (_ctx.$page.props.canLogin) {
        _push(`<div class="flex flex-1 justify-end" data-v-29bf9242>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="flex justify-around items-center flex-row gap-5" data-v-29bf9242>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("order.index"),
            as: "a"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ArchiveBoxIcon)), { class: "size-6 text-gray-900" }, null), _parent2, _scopeId);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(ArchiveBoxIcon)), { class: "size-6 text-gray-900" }))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("wishlist.index"),
            as: "a"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(HeartIcon)), { class: "size-6 border-none ring-0 stroke-none fill-red-400" }, null), _parent2, _scopeId);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(HeartIcon)), { class: "size-6 border-none ring-0 stroke-none fill-red-400" }))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("cart.index"),
            as: "a"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ShoppingCartIcon)), { class: "size-6 text-gray-900" }, null), _parent2, _scopeId);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(ShoppingCartIcon)), { class: "size-6 text-gray-900" }))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(PopoverGroup), { class: "items-center justify-around flex gap-x-12" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(parentMenuList.value.slice(-1), (parentMenu) => {
                  _push2(ssrRenderComponent(unref(Popover), {
                    class: "relative",
                    key: parentMenu.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(PopoverButton), { class: "flex flex-row items-center w-max gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(parentMenu.name)} `);
                              _push4(ssrRenderComponent(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                                createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(``);
                        _push3(ssrRenderComponent(unref(PopoverPanel), { class: "absolute over-width w-full top-full z-10 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<!--[-->`);
                              ssrRenderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                _push4(ssrRenderComponent(unref(Link), {
                                  class: "flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50",
                                  key: subMenu.name,
                                  href: subMenu.href,
                                  method: subMenu.method,
                                  as: subMenu.as
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(subMenu.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(subMenu.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              });
                              _push4(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    method: subMenu.method,
                                    as: subMenu.as
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subMenu.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "method", "as"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(PopoverButton), { class: "flex flex-row items-center w-max gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                              createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-200",
                            "enter-from-class": "opacity-0 translate-y-1",
                            "enter-to-class": "opacity-100 translate-y-0",
                            "leave-active-class": "transition ease-in duration-150",
                            "leave-from-class": "opacity-100 translate-y-0",
                            "leave-to-class": "opacity-0 translate-y-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PopoverPanel), { class: "absolute over-width w-full top-full z-10 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                    return openBlock(), createBlock(unref(Link), {
                                      class: "flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50",
                                      key: subMenu.name,
                                      href: subMenu.href,
                                      method: subMenu.method,
                                      as: subMenu.as
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(subMenu.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "method", "as"]);
                                  }), 128))
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
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(parentMenuList.value.slice(-1), (parentMenu) => {
                    return openBlock(), createBlock(unref(Popover), {
                      class: "relative",
                      key: parentMenu.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PopoverButton), { class: "flex flex-row items-center w-max gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(parentMenu.name) + " ", 1),
                            createVNode(unref(ChevronDownIcon), { class: "size-5 flex-none text-gray-400" })
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-200",
                          "enter-from-class": "opacity-0 translate-y-1",
                          "enter-to-class": "opacity-100 translate-y-0",
                          "leave-active-class": "transition ease-in duration-150",
                          "leave-from-class": "opacity-100 translate-y-0",
                          "leave-to-class": "opacity-0 translate-y-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PopoverPanel), { class: "absolute over-width w-full top-full z-10 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(subMenuList.value[parentMenu.name], (subMenu) => {
                                  return openBlock(), createBlock(unref(Link), {
                                    class: "flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50",
                                    key: subMenu.name,
                                    href: subMenu.href,
                                    method: subMenu.method,
                                    as: subMenu.as
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subMenu.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "method", "as"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(ssrRenderComponent(unref(Link), {
            class: "text-sm/1 pl-5 text-gray-900",
            href: _ctx.route("login"),
            as: "a"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in → `);
              } else {
                return [
                  createTextVNode(" Log in → ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div>`);
      _push(ssrRenderComponent(Toast, {
        message: _ctx.$page.props.toast.message || "",
        position: "bottom-right",
        show: showingToast.value,
        onHide: ($event) => showingToast.value = false,
        type: "Success"
      }, null, _parent));
      _push(ssrRenderComponent(Toast, {
        message: _ctx.$page.props.toast.warning || "",
        position: "bottom-right",
        show: showingToastWarning.value,
        onHide: ($event) => showingToastWarning.value = false,
        type: "Warning"
      }, null, _parent));
      _push(`<div class="h-full overflow-auto scrollbar-hide" data-v-29bf9242>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserAuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserAuthenticatedLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29bf9242"]]);
export {
  UserAuthenticatedLayout as U
};
