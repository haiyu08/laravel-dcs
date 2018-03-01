webpackJsonp([1],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(294)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(296)
/* template */
var __vue_template__ = __webpack_require__(297)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-491d28cf", Component.options)
  } else {
    hotAPI.reload("data-v-491d28cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "/images/img5.jpg?b16a6721a3f12f997190ea9a6f90f250";

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "/images/img4.jpg?8b16b681c6d5bbed996860506fafb8ca";

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1f8b4fb8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-491d28cf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Article.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-491d28cf\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n#area_news { width:100%; height: auto; border-top:1px solid #d9d9d9; margin: 0 auto; margin-bottom:70px;\n}\n.top_news { width: 1140px; height: 240px; margin:30px auto; margin-bottom:0px;\n}\n.hotpic_news { width:655px; height: 240px; float: left;\n}\n.font_commond { width:450px; height: 220px; float: right; position: relative; top:-10px;\n}\n.font_commond li a:link,.font_commond li a:visited { font-size: 18px; line-height: 36px;\n}\n.font_commond li a:hover { text-decoration: underline;\n}\n.hotpic_news div{ height:40px; line-height: 40px; background: #000; opacity:0.8; color:#fff; font-size: 16px; position: relative; top:-44px;\n}\n.cent_news { width: 1140px; height: auto; margin: 0 auto; overflow: hidden;\n}\n.mt_15px { margin-top:15px;\n}\n.left_list { width:690px; height: auto; float:left;\n}\n.left_list ul.nav_news { width:690px; height: 34px; border-bottom:1px solid #d9d9d9;\n}\n.left_list ul.nav_news li a:link,.left_list ul.nav_news li a:visited { color:#333333; font-size:16px; width:82px; display: block; height: 34px; line-height: 34px;\n}\n.left_list ul.nav_news li.hover a { font-weight:bold; color:#333333; font-size:16px; display: block; cursor:pointer; border-bottom:2px solid #f9c231;height: 33px;\n}\n.one_news { width:690px; height:120px; margin-top:30px; text-align: left;\n}\n.one_news .img { width:200px; height: 120px; float: left;\n}\n.font_summer { width:470px; height: 120px; float: right; font-size: 14px; color:#666666; line-height:24px;\n}\n.font_summer span { font-size:16px; color:#333333; line-height:40px;\n}\n.font_summer a:link,.font_summer a:visited { color:#333333; text-decoration: none;\n}\n.font_summer a:hover { text-decoration: underline;\n}\n.paihan { width:377px; height: auto; float: right;\n}\n.paihan ul.nav_news { width:377px; height: 34px; border-bottom:1px solid #d9d9d9; font-size:16px; font-weight: bold;\n}\n.paihan ul.nav_news li { width:82px; border-bottom:2px solid #f9c231; height: 33px;\n}\n.list_paihan li { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url(" + escape(__webpack_require__(57)) + ") 0 12px no-repeat;\n}\n.list_paihan li.top { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url(" + escape(__webpack_require__(57)) + ") 0 -20px no-repeat;\n}\n.list_paihan a:link,.list_paihan a:visited { height: 38px; line-height: 38px; text-decoration: none; font-size:16px; margin-left:4px;\n}\n.list_paihan a:hover { text-decoration: underline; font-size:16px;\n}\n.paihan span { margin-right:15px; font-size:13px; color:#fff; text-align: center; position: relative; left:4px;\n}\n.paihan span.pai_10 { margin-right:15px; font-size:12px; color:#fff; position: relative; left:2px;\n}\n.area_article { width:620px; height: auto; margin: 0 auto;\n}\n.titile_article { margin-top:50px; font-size:26px;\n}\n.titile_article span { font-size:14px;\n}\n.cont_article { height: auto; text-align:left; padding-top:30px;\n}\n.cont_article p { text-indent:2em; font-size:16px; line-height: 30px;\n}\n.list_hot { width:620px; height: auto; overflow: hidden;\n}\n.list_hot li { width:620px; float: left; height: 90px; margin-bottom:20px;\n}\n.img_hot { width:165px; height: 90px; float: left;\n}\n.font_hot { width:190px; height: 90px; float: left; text-align: left; margin-left:20px; font-size:14px; line-height: 26px; margin-top:15px;\n}\n.mb_10 { margin-bottom:20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  }
});

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "area_news" } }, [
    _c("div", { staticClass: "cent_news mt_15px" }, [
      _c("div", { staticClass: "left_list" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "area_article" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "cont_article" }, [
            _c(
              "p",
              [
                _c("img", { attrs: { src: __webpack_require__(298) } }),
                _c("br"),
                _c("center", [_vm._v("这是图片说明")])
              ],
              1
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "乌拉圭是南美洲东南部的一个国家，与巴西、阿根廷接壤，东南临大西洋。乌拉圭首都为蒙得维的亚，官方语言为西班牙语。"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "乌拉圭经济水平在拉美国家中处于中等发展水平，主要经济以出口农业为主。主要生产并出口肉类、羊毛、水产品、皮革和稻米等。主要进口产品为汽车、汽车配件和电话等。主要进口来源地为中国、阿根廷、巴西和美国。"
              )
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("进口关税")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "乌拉圭政府自1975年起采取了较为开放的自由进口及低关税的外贸政策。鼓励进口原材料、中间产品和制成品。以前的进口关税为300%，须预付200%，并且要有进口许可证。现在的进口关税平均为14%，最高为22.5%。"
              )
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("限制进口措施")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "1、禁止进口二手交通工具，该法令由现政府指定并且每180天重申一次。"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "2、原油及其制成品、液化、半液化及气态碳氢燃料的进口须获得政府许可。"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "3、禁止进口含砷和锑物质的用于牛、羊、猪、马和家禽的促生长和催肥的产品。"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "4、禁止进口用于牛、羊、猪、马和家禽的促生长和催肥的兽医药品，因为这些药品含转基因激素或有去甲状腺素作用、含有合成的或自然的代谢激素。"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "5、纺织品方面，乌拉圭列出了布匹和服装清单并制定了特别关税。任何纺织品的进口都需要事先得到许可证，但其关税不能超过到岸价格的35%。"
              )
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("6、有特殊附加条件的进口商品。")]),
            _vm._v(" "),
            _c("p", [_vm._v("7、民用、军用和警用汽车等交通工具。")]),
            _vm._v(" "),
            _c("p", [_vm._v("反倾销规定")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "乌拉圭第142/966法令规定，当进口的商品属于倾销性质并损害了本国工业的生产时，将对该商品实行反倾销措施。已被实行反倾销措施的商品有：阿根廷的食用油、意大利的热水器、澳大利亚的电镀板材等。"
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav_news" }, [
      _c("li", { staticClass: "hover" }, [
        _c("a", { attrs: { href: "#" } }, [_vm._v("最新资讯")])
      ]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("国际海运")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("国际贸易")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("跨境电商")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("船公司")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("干货知识")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("行业预警")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("案例分析")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "titile_article" }, [
      _vm._v("寄快递到乌拉圭可走什么快递？"),
      _c("br"),
      _c("span", [_vm._v("2018-02-05 19:20      阅读：206")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "paihan" }, [
      _c("ul", { staticClass: "nav_news mb_10" }, [
        _c("li", [_vm._v("热点推荐")])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "list_hot" }, [
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(277) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(278) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(277) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(278) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(277) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(278) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(277) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("div", { staticClass: "img_hot" }, [
            _c("img", { attrs: { src: __webpack_require__(278) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_hot" }, [
            _vm._v("国家能源集团与国电集团今日签署《合并协议》")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-491d28cf", module.exports)
  }
}

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "/images/img3.jpg?10a820d164191f41fe61d8d2c2b0164c";

/***/ })

});