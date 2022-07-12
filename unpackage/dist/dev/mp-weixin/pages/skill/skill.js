"use strict";
var common_vendor = require("../../common/vendor.js");
const skillList = [
  { name: "HTML,CSS3", type: "primary", size: "normal" },
  { name: "JavaScript", type: "success", size: "small" },
  { name: "JQuery", type: "warning", size: "small" },
  { name: "Vue", type: "error", size: "small" },
  { name: "Element UI", type: "", size: "small" },
  { name: "UNI-APP", type: "error", size: "small" },
  { name: "Angular", type: "success", size: "mini" },
  { name: "BootStrap", type: "primary", size: "mini" },
  { name: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F", type: "success", size: "mini" },
  { name: "MUI", type: "primary", size: "mini" },
  { name: "GIT,SVN", type: "", size: "mini" },
  { name: "Echars", type: "warning", size: "mini" }
];
const _sfc_main = {
  components: {},
  data() {
    return {
      skillList,
      pgList: [
        90,
        70,
        70,
        80,
        60,
        80,
        60,
        70,
        80,
        60,
        80,
        60,
        60,
        80,
        80,
        70
      ]
    };
  },
  onLoad() {
  },
  onShow() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_tag2 + _easycom_uni_section2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_section = () => "../../components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.skillList, (item, index, i0) => {
      return {
        a: "22fa19d5-1-" + i0 + ",22fa19d5-0",
        b: common_vendor.p({
          text: item.name,
          type: item.type,
          size: item.size
        }),
        c: index
      };
    }),
    b: common_vendor.p({
      title: "",
      padding: true
    }),
    c: $data.pgList[0],
    d: $data.pgList[1],
    e: $data.pgList[2],
    f: $data.pgList[3],
    g: $data.pgList[4],
    h: $data.pgList[5],
    i: $data.pgList[6],
    j: $data.pgList[7],
    k: $data.pgList[8],
    l: $data.pgList[9],
    m: $data.pgList[10],
    n: $data.pgList[11],
    o: $data.pgList[12],
    p: $data.pgList[13],
    q: $data.pgList[14],
    r: $data.pgList[15]
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/xxy/Desktop/resume_program/pages/skill/skill.vue"]]);
wx.createPage(MiniProgramPage);
