"use strict";
var common_vendor = require("../../common/vendor.js");
const skillList = [
  { "name": "PHP", "type": "danger", "size": "large" }
];
const _sfc_main = {
  data() {
    return {
      skillList: [{ "name": "PHP", "type": "danger", "size": "large" }]
    };
  },
  onLoad() {
  },
  onShow() {
  },
  methods: {
    vanMax: function(event) {
      console.log("v");
      let id = event.target.dataset.id;
      let data = skillList;
      data.forEach((Element) => {
        console.log(Element);
        Element.size = "medium";
      });
      data[id].size = "large";
      this.setData({
        skillList: data
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.item.name)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/resume_program/pages/skill/skill.vue"]]);
wx.createPage(MiniProgramPage);
