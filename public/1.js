webpackJsonp([1],{

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(298)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
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

/***/ 281:
/***/ (function(module, exports) {

module.exports = "/images/img5.jpg?b16a6721a3f12f997190ea9a6f90f250";

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "/images/img4.jpg?8b16b681c6d5bbed996860506fafb8ca";

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n#area_news { width:100%; height: auto; border-top:1px solid #d9d9d9; margin: 0 auto; margin-bottom:70px;\n}\n.top_news { width: 1140px; height: 240px; margin:30px auto; margin-bottom:0px;\n}\n.hotpic_news { width:655px; height: 240px; float: left;\n}\n.font_commond { width:450px; height: 220px; float: right; position: relative; top:-10px;\n}\n.font_commond li a:link,.font_commond li a:visited { font-size: 18px; line-height: 36px;\n}\n.font_commond li a:hover { text-decoration: underline;\n}\n.hotpic_news div{ height:40px; line-height: 40px; background: #000; opacity:0.8; color:#fff; font-size: 16px; position: relative; top:-44px;\n}\n.cent_news { width: 1140px; height: auto; margin: 0 auto; overflow: hidden;\n}\n.mt_15px { margin-top:15px;\n}\n.left_list { width:690px; height: auto; float:left;\n}\n.left_list ul.nav_news { width:690px; height: 34px; border-bottom:1px solid #d9d9d9;\n}\n.left_list ul.nav_news li a:link,.left_list ul.nav_news li a:visited { color:#333333; font-size:16px; width:82px; display: block; height: 34px; line-height: 34px;\n}\n.left_list ul.nav_news li.hover a { font-weight:bold; color:#333333; font-size:16px; display: block; cursor:pointer; border-bottom:2px solid #f9c231;height: 33px;\n}\n.one_news { width:690px; height:120px; margin-top:30px; text-align: left;\n}\n.one_news .img { width:200px; height: 120px; float: left;\n}\n.font_summer { width:470px; height: 120px; float: right; font-size: 14px; color:#666666; line-height:24px;\n}\n.font_summer span { font-size:16px; color:#333333; line-height:40px;\n}\n.font_summer a:link,.font_summer a:visited { color:#333333; text-decoration: none;\n}\n.font_summer a:hover { text-decoration: underline;\n}\n.paihan { width:377px; height: auto; float: right;\n}\n.paihan ul.nav_news { width:377px; height: 34px; border-bottom:1px solid #d9d9d9; font-size:16px; font-weight: bold;\n}\n.paihan ul.nav_news li { width:82px; border-bottom:2px solid #f9c231; height: 33px;\n}\n.list_paihan li { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url(" + escape(__webpack_require__(60)) + ") 0 12px no-repeat;\n}\n.list_paihan li.top { width:377px; height: 38px; line-height: 38px; overflow: hidden;text-align: left;background: url(" + escape(__webpack_require__(60)) + ") 0 -20px no-repeat;\n}\n.list_paihan a:link,.list_paihan a:visited { height: 38px; line-height: 38px; text-decoration: none; font-size:16px; margin-left:4px;\n}\n.list_paihan a:hover { text-decoration: underline; font-size:16px;\n}\n.paihan span { margin-right:15px; font-size:13px; color:#fff; text-align: center; position: relative; left:4px;\n}\n.paihan span.pai_10 { margin-right:15px; font-size:12px; color:#fff; position: relative; left:2px;\n}\n.area_article { width:620px; height: auto; margin: 0 auto;\n}\n.titile_article { margin-top:50px; font-size:26px;\n}\n.titile_article span { font-size:14px;\n}\n.cont_article { height: auto; text-align:left; padding-top:30px;\n}\n.cont_article p { text-indent:2em; font-size:16px; line-height: 30px;\n}\n.list_hot { width:620px; height: auto; overflow: hidden;\n}\n.list_hot li { width:620px; float: left; height: 90px; margin-bottom:20px;\n}\n.img_hot { width:165px; height: 90px; float: left;\n}\n.font_hot { width:190px; height: 90px; float: left; text-align: left; margin-left:20px; font-size:14px; line-height: 26px; margin-top:15px;\n}\n.mb_10 { margin-bottom:20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 300:
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
			},
			title: '',
			update_at: '',
			read: '',
			content: '',
			zxzx: false,
			gjhy: false,
			gjmy: false,
			kjds: false,
			cgs: false,
			ghzs: false,
			hyyj: false,
			alfx: false
		};
	},


	methods: {
		greet: function greet(event) {
			alert('Hello ' + this.name + '!');
			if (event) {
				alert(event.target.tagName);
			}
		},
		getarticle: function getarticle(event) {
			alert(this.$route.query.type);
			if (this.$route.query.type == 1) {
				this.zxzx = true;
			} else if (this.$route.query.type == 2) {
				this.gjhy = true;
			} else if (this.$route.query.type == 3) {
				this.gjmy = true;
			} else if (this.$route.query.type == 4) {
				this.kjds = true;
			} else if (this.$route.query.type == 5) {
				this.cgs = true;
			} else if (this.$route.query.type == 6) {
				this.ghzs = true;
			} else if (this.$route.query.type == 7) {
				this.hyyj = true;
			} else if (this.$route.query.type == 8) {
				this.alfx = true;
			}

			return this.$http.get('http:\/\/localhost\/get_article', {
				params: {
					id: this.$route.query.id
				}
			}).then(function (response) {
				this.title = response.data.data.title;
				this.update_at = response.data.data.create_at;
				this.read = response.data.data.read;
				this.content = response.data.data.content;
			}).catch(function (error) {
				//this.fetchError = error
			});
		}

	}
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "area_news" } }, [
    _c("div", { staticClass: "cent_news mt_15px" }, [
      _c("div", { staticClass: "left_list" }, [
        _c("ul", { staticClass: "nav_news" }, [
          _c("li", { class: { hover: _vm.zxzx } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("最新资讯")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.gjhy } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("国际海运")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.gjmy } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("国际贸易")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.kjds } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("跨境电商")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.cgs } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("船公司")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.ghzs } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("干货知识")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.hyyj } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("行业预警")])
          ]),
          _vm._v(" "),
          _c("li", { class: { hover: _vm.alfx } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("案例分析")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "area_article" }, [
          _c("div", { staticClass: "titile_article" }, [
            _vm._v(_vm._s(_vm.title)),
            _c("br"),
            _c("span", [
              _vm._v(_vm._s(_vm.update_at) + "      阅读：" + _vm._s(_vm.read))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "cont_article" }, [
            _vm._v(_vm._s(_vm.content))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "paihan" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("ul", { staticClass: "list_hot" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _c("li", [
            _vm._m(8),
            _vm._v(" "),
            _c("div", { staticClass: "font_hot" }, [
              _vm._v(
                "国家能源集团与国电集团今日签署《合并协议》" +
                  _vm._s(_vm.getarticle())
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav_news mb_10" }, [
      _c("li", [_vm._v("热点推荐")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(281) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(282) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(281) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(282) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(281) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(282) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "img_hot" }, [
        _c("img", { attrs: { src: __webpack_require__(281) } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font_hot" }, [
        _vm._v("国家能源集团与国电集团今日签署《合并协议》")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "img_hot" }, [
      _c("img", { attrs: { src: __webpack_require__(282) } })
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

/***/ })

});