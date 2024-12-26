import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  methods: {
    asset(path) {
      return `/${path}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserAuthenticatedLayout = resolveComponent("UserAuthenticatedLayout");
  _push(ssrRenderComponent(_component_UserAuthenticatedLayout, mergeProps({ title: "Placeholder" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<header class="flex justify-between border-b py-3 px-10 bg-white sticky top-0"${_scopeId}><a href="#" class="flex items-center cursor-pointer"${_scopeId}><div class="size-6"${_scopeId}><img src=""${_scopeId}></div><p class="font-bold text-teal-400 ml-1"${_scopeId}>BACK</p></a></header><div class="container mx-auto p-6"${_scopeId}><div class="bg-white shadow rounded-lg p-6 mb-6"${_scopeId}><h1 class="font-extrabold text-teal-500 text-3xl my-8"${_scopeId}>Order Status</h1><p class="text-gray-600 mt-2"${_scopeId}>Order ID: <span class="font-medium"${_scopeId}>#1</span></p><p class="text-gray-600"${_scopeId}>Placed on: <span class="font-medium"${_scopeId}>Aug 17, 1945</span></p></div><div class="bg-white shadow rounded-lg p-6 mb-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-700 mb-4"${_scopeId}>Status Timeline</h2><ol class="relative border-l border-gray-200"${_scopeId}><li class="mb-10 ml-4"${_scopeId}><div class="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white"${_scopeId}></div><h3 class="text-sm font-semibold text-gray-900"${_scopeId}>Order Confirmed</h3><p class="text-sm text-gray-600"${_scopeId}>Jan 10, 2024, 10:00 AM</p></li><li class="mb-10 ml-4"${_scopeId}><div class="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white"${_scopeId}></div><h3 class="text-sm font-semibold text-gray-900"${_scopeId}>Order Shipped</h3><p class="text-sm text-gray-600"${_scopeId}>Jan 11, 2024, 2:30 PM</p></li><li class="ml-4"${_scopeId}><div class="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white"${_scopeId}></div><h3 class="text-sm font-semibold text-gray-900"${_scopeId}>Out for Delivery</h3><p class="text-sm text-gray-600"${_scopeId}>Expected: Jan 12, 2024, 9:00 AM</p></li></ol></div><div class="bg-white shadow rounded-lg p-6 mb-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-700 mb-4"${_scopeId}>Shipping Information</h2><p class="text-gray-600"${_scopeId}><strong${_scopeId}>Carrier:</strong> UPS</p><p class="text-gray-600"${_scopeId}><strong${_scopeId}>Tracking Number:</strong> 1Z12345E1512345678</p><a href="#" class="text-teal-500 hover:underline"${_scopeId}>Track Package</a></div><div class="bg-white shadow rounded-lg p-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-700 mb-4"${_scopeId}>Order Summary</h2><table class="w-full text-left table-auto border-collapse border border-gray-200"${_scopeId}><thead${_scopeId}><tr class="bg-gray-100"${_scopeId}><th class="border px-4 py-2 text-gray-700"${_scopeId}>Item</th><th class="border px-4 py-2 text-gray-700"${_scopeId}>Quantity</th><th class="border px-4 py-2 text-gray-700"${_scopeId}>Price</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td class="border px-4 py-2"${_scopeId}>Product A</td><td class="border px-4 py-2"${_scopeId}>2</td><td class="border px-4 py-2"${_scopeId}>$50</td></tr><tr${_scopeId}><td class="border px-4 py-2"${_scopeId}>Product B</td><td class="border px-4 py-2"${_scopeId}>1</td><td class="border px-4 py-2"${_scopeId}>$30</td></tr></tbody><tfoot${_scopeId}><tr${_scopeId}><td colspan="2" class="border px-4 py-2 font-semibold text-right"${_scopeId}>Total</td><td class="border px-4 py-2 font-semibold"${_scopeId}>$130</td></tr></tfoot></table></div></div>`);
      } else {
        return [
          createVNode("header", { class: "flex justify-between border-b py-3 px-10 bg-white sticky top-0" }, [
            createVNode("a", {
              href: "#",
              class: "flex items-center cursor-pointer"
            }, [
              createVNode("div", { class: "size-6" }, [
                createVNode("img", { src: "" })
              ]),
              createVNode("p", { class: "font-bold text-teal-400 ml-1" }, "BACK")
            ])
          ]),
          createVNode("div", { class: "container mx-auto p-6" }, [
            createVNode("div", { class: "bg-white shadow rounded-lg p-6 mb-6" }, [
              createVNode("h1", { class: "font-extrabold text-teal-500 text-3xl my-8" }, "Order Status"),
              createVNode("p", { class: "text-gray-600 mt-2" }, [
                createTextVNode("Order ID: "),
                createVNode("span", { class: "font-medium" }, "#1")
              ]),
              createVNode("p", { class: "text-gray-600" }, [
                createTextVNode("Placed on: "),
                createVNode("span", { class: "font-medium" }, "Aug 17, 1945")
              ])
            ]),
            createVNode("div", { class: "bg-white shadow rounded-lg p-6 mb-6" }, [
              createVNode("h2", { class: "text-lg font-semibold text-gray-700 mb-4" }, "Status Timeline"),
              createVNode("ol", { class: "relative border-l border-gray-200" }, [
                createVNode("li", { class: "mb-10 ml-4" }, [
                  createVNode("div", { class: "absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white" }),
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900" }, "Order Confirmed"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Jan 10, 2024, 10:00 AM")
                ]),
                createVNode("li", { class: "mb-10 ml-4" }, [
                  createVNode("div", { class: "absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white" }),
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900" }, "Order Shipped"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Jan 11, 2024, 2:30 PM")
                ]),
                createVNode("li", { class: "ml-4" }, [
                  createVNode("div", { class: "absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white" }),
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900" }, "Out for Delivery"),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Expected: Jan 12, 2024, 9:00 AM")
                ])
              ])
            ]),
            createVNode("div", { class: "bg-white shadow rounded-lg p-6 mb-6" }, [
              createVNode("h2", { class: "text-lg font-semibold text-gray-700 mb-4" }, "Shipping Information"),
              createVNode("p", { class: "text-gray-600" }, [
                createVNode("strong", null, "Carrier:"),
                createTextVNode(" UPS")
              ]),
              createVNode("p", { class: "text-gray-600" }, [
                createVNode("strong", null, "Tracking Number:"),
                createTextVNode(" 1Z12345E1512345678")
              ]),
              createVNode("a", {
                href: "#",
                class: "text-teal-500 hover:underline"
              }, "Track Package")
            ]),
            createVNode("div", { class: "bg-white shadow rounded-lg p-6" }, [
              createVNode("h2", { class: "text-lg font-semibold text-gray-700 mb-4" }, "Order Summary"),
              createVNode("table", { class: "w-full text-left table-auto border-collapse border border-gray-200" }, [
                createVNode("thead", null, [
                  createVNode("tr", { class: "bg-gray-100" }, [
                    createVNode("th", { class: "border px-4 py-2 text-gray-700" }, "Item"),
                    createVNode("th", { class: "border px-4 py-2 text-gray-700" }, "Quantity"),
                    createVNode("th", { class: "border px-4 py-2 text-gray-700" }, "Price")
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border px-4 py-2" }, "Product A"),
                    createVNode("td", { class: "border px-4 py-2" }, "2"),
                    createVNode("td", { class: "border px-4 py-2" }, "$50")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "border px-4 py-2" }, "Product B"),
                    createVNode("td", { class: "border px-4 py-2" }, "1"),
                    createVNode("td", { class: "border px-4 py-2" }, "$30")
                  ])
                ]),
                createVNode("tfoot", null, [
                  createVNode("tr", null, [
                    createVNode("td", {
                      colspan: "2",
                      class: "border px-4 py-2 font-semibold text-right"
                    }, "Total"),
                    createVNode("td", { class: "border px-4 py-2 font-semibold" }, "$130")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Buyer/Placeholder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Placeholder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Placeholder as default
};
