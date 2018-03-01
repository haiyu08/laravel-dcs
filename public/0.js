webpackJsonp([0],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(289)
/* template */
var __vue_template__ = __webpack_require__(290)
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
Component.options.__file = "resources\\assets\\js\\components\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-384052eb", Component.options)
  } else {
    hotAPI.reload("data-v-384052eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "/images/icon_tool.png?8165c297a9db8f42a9cd281c441643d8";

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "/images/hotpic1.jpg?8e004c3d92c9f575922329023548e25e";

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "/images/icon_product.png?5255468ae707b298e821dd8a860d442e";

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "/images/news1.jpg?f3e012b2c42a32e8009ae78fbc355c62";

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5d7ecbd2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-384052eb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-384052eb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.hotpic { width: 100%; height: 740px; margin: 0 auto;\n}\n.main_hotpic { width: 1140px; height: 740px;\n}\n.area_tool { width:1140px; height: 235px; margin:0 auto; overflow: hidden;\n}\n.title_tool { width:280px; height: 50px;  margin-top:50px; text-align: left;\n}\n.title_cn { font-size: 22px; color:#333333; font-weight: normal;\n}\n.title_en { font-size: 13px; color:#cccccc;\n}\n.cont_tool { width: 1140px; height: 45px; margin-top:40px;\n}\nul.cont_tool li { width:175px; height: 47px; font-size: 16px; color:#999999; line-height: 43px; margin-right:15px;text-align: left;\n}\nul.cont_tool li a:link,ul.cont_tool li a:visited { width:171px; height: 43px; display: block; color:#999999; text-decoration: none; border:2px solid #d9d9d9;\n}\nul.cont_tool li a:hover { width:171px; height: 43px; display: block; cursor:pointer; background:#f9c231; color:#fff; border:2px solid #f9c231;\n}\nul.cont_tool li span { margin-right:11px;\n}\n.tool_ryfj span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") 0 0 no-repeat; margin-left:15px; margin-top:8px;\n}\nul.cont_tool li.tool_ryfj a:hover  span { background:url(" + escape(__webpack_require__(275)) + ") 0 -22px no-repeat;\n}\n.tool_hkgs span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") -25px 0 no-repeat; margin-left:15px; margin-top:10px;\n}\nul.cont_tool li.tool_hkgs a:hover span { background:url(" + escape(__webpack_require__(275)) + ") -25px -22px no-repeat;\n}\n.tool_qqjc span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") -50px 0 no-repeat; margin-left:15px; margin-top:10px;\n}\nul.cont_tool li.tool_qqjc a:hover span { background:url(" + escape(__webpack_require__(275)) + ") -50px -22px no-repeat;\n}\n.tool_pycx span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") -75px 0 no-repeat; margin-left:15px; margin-top:10px;\n}\nul.cont_tool li.tool_pycx a:hover span { background:url(" + escape(__webpack_require__(275)) + ") -75px -22px no-repeat;\n}\n.tool_fhzn span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") -100px 0 no-repeat; margin-left:15px; margin-top:10px;\n}\nul.cont_tool li.tool_fhzn a:hover span { background:url(" + escape(__webpack_require__(275)) + ") -100px -22px no-repeat;\n}\n.tool_cjwt span{ width:21px; height:22px; display:block; float: left; background:url(" + escape(__webpack_require__(275)) + ") -125px 0 no-repeat; margin-left:15px; margin-top:10px;\n}\nul.cont_tool li.tool_cjwt a:hover span { background:url(" + escape(__webpack_require__(275)) + ") -125px -22px no-repeat;\n}\n.product { width:100%; height: 395px; background: #eeeeee; padding-top:55px;\n}\n.area_product { width:1140px; height: auto; overflow:hidden; margin: 0 auto;\n}\n.title_en_big { font-size: 24px; color:#bdbdbd;\n}\n.title_cn_big { width:243px; height: 40px; font-size: 26px; color:#333333; margin: 0 auto; margin-bottom:10px; background: url(" + escape(__webpack_require__(283)) + ") 0 20px no-repeat; position: relative; top:5px;\n}\n.font_product { width:960px; height: auto; line-height: 26px; margin: 20px auto; text-indent:2em;\n}\n.cont_product { width:1180px; height: 143px; margin: 0 auto; margin-top:50px;\n}\nul.cont_product li { width:365px; height: 143px; background: #fff; border:1px solid #d9d9d9; margin-right:23px;\n}\n.icon_product { width:58px; height: 55px; float:left; background: url(" + escape(__webpack_require__(279)) + ") 0 0 no-repeat; margin-left:25px; margin-top:40px;\n}\n.bg_ping { background: url(" + escape(__webpack_require__(279)) + ") -60px 0 no-repeat;\n}\n.bg_sea { background: url(" + escape(__webpack_require__(279)) + ") -120px 0 no-repeat;\n}\n.font_oneproduct { width:225px; height: 94px; float:left; text-align: left; font-size: 14px; color:#4d4d4d; line-height: 24px; margin-left:30px; margin-top:18px;\n}\n.font_oneproduct span { font-size: 16px; font-weight: bold; margin-bottom:-15px; display: block;\n}\n.advantage { width:1140px; height: 900px; margin: 0 auto; padding-top:60px;\n}\n.advantage_top{ width:1140px; height: 320px;\n}\n.image_advantage { width:540px; height: 320px; float:left; margin-right:30px; margin-left:20px; margin-top:20px;\n}\n.font_advantage{ width:510px; height: 320px; float:left;\n}\n.bg_line { width:100px; height: 1px; background: #cecece; display: block; position: relative; top:20px;\n}\n.cont_air { width:510px; height: 80px; font-size: 14px; color:#666666; margin-top:25px; line-height: 26px; text-align:left;\n}\n.btn_advantage { width:210px; height: 40px; background: #f9c231; text-align: center; color:#333333; font-size: 14px; line-height: 40px;\n}\n.btn_advantage a:link,.btn_advantage a:visited { width:210px; height: 40px; display:block; color:#535353;\n}\n.btn_advantage a:hover { width:210px; height: 40px; display:block; cursor:pointer; color:#535353; text-decoration: none;\n}\n.height_80 { height:80px;\n}\n.bg_dot { width:510px; height: 1px; margin: 20px auto; background: url(" + escape(__webpack_require__(284)) + ") 0 0 repeat-x; margin-top:50px;\n}\n.left_40 { margin-left:40px;\n}\n.area_company { width:100%; height: 380px; background: #eeeeee;\n}\n.left_company { width:50%; height: 380px; float:left; background: url(" + escape(__webpack_require__(285)) + ") 0 0 no-repeat;\n}\n.right_company { width:50%; height: 380px; float: right;\n}\n.ps_company { position: relative; left:60px;\n}\n.mrtop_30 { margin-top:30px;\n}\n.btm_news { width:100%; height: 425px;\n}\n.area_news { width:1140px; height: 425px; margin: 0 auto;\n}\n.left_news { width:690px; height: 340px; float:left;\n}\n.list_industry { width:690px; height: 250px;\n}\n.img_industry { width:305px; height: 250px; float:left; line-height: 26px;\n}\nul.font_industry { width:350px; height: 220px; float:left; margin-left:26px;\n}\nul.font_industry li { line-height: 30px;\n}\nul.font_industry li a:link,ul.font_industry li a:visited { color:#333333;\n}\nul.font_industry li a:hover { color:#000; text-decoration:underline;\n}\n.right_news { width:410px; height: 340px; float:right;\n}\n.one_zixun { width:390px; height: 100px; text-align: left; float:left; margin-bottom:30px;\n}\n.one_zixun a:link,.one_zixun a:visited { color:#535353;\n}\n.one_zixun a:hover { color:#535353; text-decoration: underline;\n}\n.font_zixun { padding-left:15px; float: left; width:220px; line-height: 24px; padding-top:20px;\n}\n.swiper-button-next { right:20%; width:40px; height: 75px; background-size:40px 75px; opacity:0.6;\n}\n.swiper-button-prev { left:20%; width:40px; height: 75px; background-size:40px 75px; opacity:0.6;\n}\n.hotpic_trail { width:100%; height: 184px; padding-top:66px;  background:url(" + escape(__webpack_require__(100)) + ") 0 0 no-repeat; background-size:100%; overflow: hidden;\n}\n.area_trail { width:550px; height: 88px; float:left; text-align: left; background: url(" + escape(__webpack_require__(286)) + ") 0 0 no-repeat; margin-top:20px; margin-left:40px;\n}\n.area_trail .title { font-size: 16px; font-weight:normal; color:#333333; position: relative; top:9px; left:17px; float: left;\n}\n.text_city input{ width:250px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:23px; left:55px; border:2px; background: #fff;\n}\n.area_trail .font_text {  position: relative; top:52px; left:-10px;\n}\n.btn_trail { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; position: relative; left:10px; top:37px; overflow:hidden;\n}\n.btn_trail a:link,.btn_trail a:visited { width:115px; height: 51px; display: block; line-height: 51px; text-decoration: none;color:#333333;\n}\n.btn_trail a:hover { cursor:pointer; text-decoration: none;\n}\n.el-input__inner:hover,.el-input__inner:active,.el-input__inner:focus { border:0px;\n}\n.area_cont { width:1140px; height: auto; margin: 0px auto; padding:50px 0px;\n}\n.tab_trail { border-collapse:collapse;\n}\n.tab_trail tr { height: 50px; text-align: left;\n}\n.tab_trail td { width:25%; border:1px solid #d9d9d9; height: 50px; height: 50px; padding-left:20px; font-size: 16px; color:#666666;\n}\n.tab_trail td span { color:#e7a800; font-weight: bold;\n}\n.tab_trail img { position:relative; top:6px;\n}\n.text_city .el-input__inner { color:#e7a800; font-size: 16px;\n}\n.area_quan { width:1010px; height: 100px; margin: 40px auto; margin-bottom:0px; position: relative; top:30px; border-top:1px solid #d9d9d9;\n}\n.area_quan li { width: 80px; height: 50px; float: left; margin-right:152px; background: url(" + escape(__webpack_require__(12)) + ") 10px 0 no-repeat; position: relative; top:-25px; left:6px; font-size:16px; text-align: center;\n}\n.area_quan li.active { background: url(" + escape(__webpack_require__(12)) + ") 10px -50px no-repeat; color:#e7a800;\n}\n.area_quan li.noactive { background: url(" + escape(__webpack_require__(12)) + ") 10px -100px no-repeat;\n}\nli.last_quan { margin-right:0px;\n}\n.area_quan li span { position: relative; top:40px;\n}\n.area_info { width:1140px; height:auto; margin: 15px auto; position: relative; left:0px;\n}\n.one_info { width:180px; height: 96px; float:left; margin-bottom:10px;\n}\n.one_info .title { width:180px; height:40px; line-height: 40px; background: #999999; text-align: center; color:#fff; font-size: 16px;\n}\n.one_info .cont { width:168px; height:50px; border:1px solid #d9d9d9; border-top:0px; padding-left:10px; padding-top:6px; line-height: 22px; color:#666666; text-align: left;\n}\n.area_info ul { width:180px; height: auto; float: left; margin: 0 24px;\n}\n.one_info .active { background: #e7a800; color:#fff;\n}\r\n/*\r\n.el-input__prefix, .el-input__suffix { height: 36px; }\r\n*/\nspan.el-input__suffix-inner { position: relative; top:-10px; display: none;\n}\n#price .el-form-item { width:260px; position: relative; left:-15px; top:42px;\n}\n#price .el-scrollbar { width:290px; position: relative; left:50px; top:80px;\n} \r\n/*#price .el-input--suffix .el-input__inner { float:left; border:1px; font-size: 16px; }*/\n#price .el-input--suffix .el-input__inner { border:0px; font-size: 16px; width:160px; margin-right:20px; padding-right: 0px;\n}\n#price .el-form { width:180px; float: left; margin-right:0px; padding-right: 0px;\n}\n.th_price { width:1138px; height: 68px; border:1px solid #d9d9d9; font-size: 16px; text-align: center;\n}\n.th_price span { font-size: 13px; color:#e7a800;\n}\n.one_price { font-size: 14px; width:1140px; height: 96px; text-align: center;\n}\n.one_price tr { height: 96px;\n}\n.one_price tr.bg_f6f6f6 { height: 96px; background: #f6f6f6;\n}\n.one_price td { line-height: 26px; padding:0 20px;\n}\n.font_fy { font-size: 16px; color:#e7a800;\n}\n.one_price .btn_price a:link,.one_price .btn_price a:visited { width:90px; height: 35px; background:#f9c231; color:#333333; display: block; text-align: center; line-height: 35px; text-decoration: none; margin: 0 auto;\n}\n.one_price img { position: relative; top:5px;\n}\n.type_price { text-align: left; position: relative; left:20px;\n}\n.el-select-dropdown { z-index: 9999;\n}\n.check_price { width:1140px; height:180px; background:url(" + escape(__webpack_require__(287)) + ") 0 0 no-repeat;margin:0 auto; position:relative; top:-230px; z-index: 99; border-radius: 4px; overflow: display;\n}\n.area_trail_index { width:470px; height: 88px; float:left; text-align: left; background: url(" + escape(__webpack_require__(288)) + ") 0 0 no-repeat; margin-top:20px; margin-left:40px;\n}\n.text_number input{ width:200px; height: 36px;font-size: 16px; color:#999999; padding-left:10px; position: relative; top:45px; left:-10px; border:2px; background: #fff;\n}\n.btn_trail_index { width:115px; height: 51px; display: block; background: #f9c231; text-align: center; font-size: 16px; position: relative; left:110px; top:37px; overflow:hidden;\n} \r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "/images/bg_title_cn.png?b2d56b5a5e9a7180fa975f38b03615bb";

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "/images/bg_dot.png?1f7834af5d197cc032320fa1b058d008";

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "/images/bg_company.jpg?60c029a6164e8b1386e194734b006813";

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "/images/bg_price_index.png?fced2f33e4b4c33ba6e6d9181c594d7e";

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "/images/bg_chaxun_index.png?c74fc92500540c335c5c2a4111a12f73";

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "/images/bg_trail_index.png?6f48b1e7678f5a725e366074610f1db2";

/***/ }),

/***/ 289:
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
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  }
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "price" } },
    [
      _c(
        "swiper",
        { attrs: { options: _vm.swiperOption } },
        [
          _c("swiper-slide", [
            _c("img", {
              attrs: { src: __webpack_require__(276), width: "100%" }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              attrs: { src: __webpack_require__(276), width: "100%" }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              attrs: { src: __webpack_require__(276), width: "100%" }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              attrs: { src: __webpack_require__(276), width: "100%" }
            })
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-pagination",
            attrs: { slot: "pagination" },
            slot: "pagination"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-button-prev",
            attrs: { slot: "button-prev" },
            slot: "button-prev"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-button-next",
            attrs: { slot: "button-next" },
            slot: "button-next"
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "check_price" }, [
        _c(
          "div",
          { staticClass: "area_trail" },
          [
            _c("span", { staticClass: "title" }, [_vm._v("运价查询")]),
            _vm._v(" "),
            _c(
              "el-form",
              { attrs: { model: _vm.form } },
              [
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-select",
                      {
                        attrs: { placeholder: "请输入起运城市" },
                        model: {
                          value: _vm.form.region1,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "region1", $$v)
                          },
                          expression: "form.region1"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: { label: "广州", value: "1" }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: { label: "深圳", value: "2" }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: { label: "福州", value: "3" }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: { label: "厦门", value: "4" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form",
              { attrs: { model: _vm.form } },
              [
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-select",
                      {
                        attrs: { placeholder: "请选择目的地国家" },
                        model: {
                          value: _vm.form.region2,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "region2", $$v)
                          },
                          expression: "form.region2"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: { label: "日本", value: "1" }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: { label: "澳洲", value: "2" }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: { label: "美国", value: "3" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "area_trail area_trail_index" },
          [
            _c("span", { staticClass: "title" }, [_vm._v("轨迹查询")]),
            _vm._v(" "),
            _c(
              "el-form",
              {
                ref: "form",
                attrs: { model: _vm.form, "label-width": "80px" }
              },
              [
                _c("el-input", {
                  staticClass: "text_number",
                  attrs: { placeholder: "请输入运单号码" },
                  model: {
                    value: _vm.form.name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "name", $$v)
                    },
                    expression: "form.name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(2)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn_trail" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("查询运价")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn_trail btn_trail_index" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("查询轨迹")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { position: "relative", top: "-160px" } }, [
      _c("div", { staticClass: "area_tool" }, [
        _c("div", { staticClass: "title_tool" }, [
          _c("span", { staticClass: "title_cn" }, [_vm._v("查询工具")]),
          _c("br"),
          _c("span", { staticClass: "title_en" }, [_vm._v("QUERY TOOL")])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "cont_tool" }, [
          _c("li", { staticClass: "tool_ryfj" }, [
            _c("a", { attrs: { href: "" } }, [
              _c("span"),
              _vm._v("燃油附加费查询")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tool_hkgs" }, [
            _c("a", { attrs: { href: "" } }, [
              _c("span"),
              _vm._v("航空公司查询")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tool_qqjc" }, [
            _c("a", { attrs: { href: "" } }, [
              _c("span"),
              _vm._v("全球机场查询")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tool_pycx" }, [
            _c("a", { attrs: { href: "" } }, [_c("span"), _vm._v("偏远查询")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tool_fhzn" }, [
            _c("a", { attrs: { href: "" } }, [_c("span"), _vm._v("发货指南")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tool_cjwt" }, [
            _c("a", { attrs: { href: "" } }, [_c("span"), _vm._v("常见问题")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "product" }, [
        _c("div", { staticClass: "area_product" }, [
          _c("div", { staticClass: "title_en_big" }, [
            _vm._v("PRODUCT INTRODUCTION")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "title_cn_big" }, [_vm._v("产品介绍")]),
          _vm._v(" "),
          _c("div", { staticClass: "font_product" }, [
            _vm._v(
              "大常生物流隶属于深圳大常生控股集团重金打造的综合国际物流服务平台，大常生物流可为您提供在线查询国际物流价格、在线订舱、在线对单、在线支付等功能。涵盖进出口国际海运整箱、海运拼箱、国际空运、国际快递等业务范围。还针对不同行业、不同目的地、不同业务类别做出细分解决方案......"
            )
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "cont_product" }, [
            _c("li", [
              _c("div", { staticClass: "icon_product" }),
              _vm._v(" "),
              _c("div", { staticClass: "font_oneproduct" }, [
                _c("span", [_vm._v("国际空运")]),
                _c("br"),
                _vm._v(
                  "大常生海空运服务覆盖全球1062个国际机场、177个国家，整合联盟航空公司65家。让您的货物通达全球!"
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", { staticClass: "icon_product bg_ping" }),
              _vm._v(" "),
              _c("div", { staticClass: "font_oneproduct" }, [
                _c("span", [_vm._v("海运拼箱")]),
                _c("br"),
                _vm._v(
                  "大常生海运拼箱直接拼全球60多个港口，覆盖全球200多个国家。目的港收费公正、透明、船期稳定!"
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", { staticClass: "icon_product bg_sea" }),
              _vm._v(" "),
              _c("div", { staticClass: "font_oneproduct" }, [
                _c("span", [_vm._v("海运双清")]),
                _c("br"),
                _vm._v(
                  "大常生海运双清关服务开创DDU/DDP服务新纪元。解决中小企业清关派送难题。"
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "advantage" }, [
        _c("div", { staticClass: "title_en_big" }, [
          _vm._v("ADVANTAGE INTRODUCTION")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "title_cn_big" }, [_vm._v("优势介绍")]),
        _vm._v(" "),
        _c("div", { staticClass: "advantage_top" }, [
          _c("div", { staticClass: "image_advantage" }, [
            _c("img", {
              attrs: { src: __webpack_require__(291) }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "font_advantage" }, [
            _c("div", { staticClass: "title_tool height_80" }, [
              _c("span", { staticClass: "title_cn" }, [_vm._v("空派优势")]),
              _c("br"),
              _c("span", { staticClass: "title_en" }, [
                _vm._v("AIR DELIVERY ADVANTAGE")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "bg_line" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cont_air" }, [
              _vm._v(
                "空派指货件从大陆或香港出发，到达目的地机场后，由合作代理处理相关清关事宜，合作商从机场提取货件，再由当地联邦或UPS提取货件并安排转运和派送。"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btn_advantage" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("查看更多")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bg_dot" }),
        _vm._v(" "),
        _c("div", { staticClass: "advantage_top left_40" }, [
          _c("div", { staticClass: "font_advantage" }, [
            _c("div", { staticClass: "title_tool height_80" }, [
              _c("span", { staticClass: "title_cn" }, [_vm._v("海派优势")]),
              _c("br"),
              _c("span", { staticClass: "title_en" }, [
                _vm._v("MARITIME TRANSPORT ADVANTAGE")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "bg_line" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cont_air" }, [
              _vm._v(
                "空派指货件从大陆或香港出发，到达目的地机场后，由合作代理处理相关清关事宜，合作商从机场提取货件，再由当地联邦或UPS提取货件并安排转运和派送。"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btn_advantage" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("查看更多")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "image_advantage" }, [
            _c("img", {
              attrs: { src: __webpack_require__(292) }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "area_company" }, [
        _c("div", { staticClass: "left_company" }),
        _vm._v(" "),
        _c("div", { staticClass: "right_company" }, [
          _c("div", { staticClass: "font_advantage ps_company" }, [
            _c("div", { staticClass: "title_tool height_80" }, [
              _c("span", { staticClass: "title_cn" }, [_vm._v("公司介绍")]),
              _c("br"),
              _c("span", { staticClass: "title_en" }, [
                _vm._v("COMPANY INTRODUCTION")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "bg_line" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cont_air" }, [
              _vm._v(
                "大常生物流还是国家物流电子商务试点单位、O2O示范企业。大常生物流以互联网思维解决传统物流行业的信息不对称与服务无标准的难点。大常生物流组建专业的电商客服队伍，为您提供透明、公正、方便、快捷的O2O服务。"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btn_advantage mrtop_30" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("查看更多")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btm_news" }, [
        _c("div", { staticClass: "area_news" }, [
          _c("div", { staticClass: "left_news" }, [
            _c("div", { staticClass: "title_tool height_80" }, [
              _c("span", { staticClass: "title_cn" }, [_vm._v("行业热点")]),
              _c("br"),
              _c("span", { staticClass: "title_en" }, [
                _vm._v("INDUSTRY HOT SPOT")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list_industry" }, [
              _c("div", { staticClass: "img_industry" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(293),
                      width: "305",
                      height: "215"
                    }
                  })
                ]),
                _c("br"),
                _vm._v("美国冬季风暴入侵，航班取消，港口关闭\n\t\t\t\t\t\t")
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "font_industry" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "美国冬季风暴入侵，航班取消，港口关闭，美国东海岸..."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("美国佛罗里达州一列运输危险化学物品的火车脱轨")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("货代行业的新秀，物流巴士运价平台初体验")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("一听到“海关查验”就紧张？淡定！")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("但斌再唱多：茅台存活一千年概率大 需求端非常大")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("联邦快递发布2018年春节假期服务安排")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right_news" }, [
            _c("div", { staticClass: "title_tool height_80" }, [
              _c("span", { staticClass: "title_cn" }, [_vm._v("最新资讯")]),
              _c("br"),
              _c("span", { staticClass: "title_en" }, [
                _vm._v("LATEST INFORMATION")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "one_zixun" }, [
              _c("div", { staticClass: "fl" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("img", { attrs: { src: __webpack_require__(280) } })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font_zixun" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("1月人民币对美元创24年来最大单月涨幅，中国出口商头疼")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "one_zixun" }, [
              _c("div", { staticClass: "fl" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("img", { attrs: { src: __webpack_require__(280) } })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font_zixun" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("1月人民币对美元创24年来最大单月涨幅，中国出口商头疼")
                ])
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-384052eb", module.exports)
  }
}

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "/images/advantage_left.jpg?72bd582870663a61f137c1d6d39e90f5";

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "/images/advantage_right.jpg?b8e7beac9849066bed59b8f794b3852b";

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "/images/news.jpg?a1ba556667efccf6398f4883ea2134a7";

/***/ })

});