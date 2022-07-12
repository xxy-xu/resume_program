"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  onShow() {
  },
  methods: {
    telphone(phone) {
      wx.makePhoneCall({
        phoneNumber: phone
      });
    },
    copyMessage(value) {
      common_vendor.index.setClipboardData({
        data: value,
        success: function(res) {
          common_vendor.index.getClipboardData({
            success: function(res2) {
              common_vendor.index.showToast({
                title: "\u590D\u5236\u6210\u529F"
              });
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_group2 = common_vendor.resolveComponent("uni-group");
  (_easycom_uni_icons2 + _easycom_uni_group2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_group = () => "../../uni_modules/uni-group/components/uni-group/uni-group.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "weixin",
      size: "20",
      color: "#45c52a"
    }),
    b: common_vendor.o(($event) => $options.copyMessage("Sco-XXY-")),
    c: common_vendor.p({
      type: "phone",
      size: "20",
      color: "#45c52a"
    }),
    d: common_vendor.o(($event) => $options.telphone("13826289586")),
    e: common_vendor.p({
      type: "email",
      size: "20",
      color: "#45c52a"
    }),
    f: common_vendor.o(($event) => $options.copyMessage("1098302836@qq.com")),
    g: common_vendor.p({
      mode: "card"
    }),
    h: common_vendor.o(($event) => $options.copyMessage("Sco-XXY-")),
    i: common_vendor.o(($event) => $options.telphone("13826289586")),
    j: common_vendor.o(($event) => $options.copyMessage("1098302836@qq.com"))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/xxy/Desktop/resume_program/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
