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
    setTimeout(function() {
      common_vendor.index.switchTab({
        url: "../personal/personal"
      });
    }, 5e3);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/xxy/Desktop/resume_program/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
