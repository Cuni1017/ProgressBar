/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/main.jsx":
/*!**********************!*\
  !*** ./jsx/main.jsx ***!
  \**********************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// 第13堂 defaultChecked跟Checked, Inline Style使用介紹，ClassName隨著State改變\n// 使用defaultChecked，HTML的元素:checked才會跟著更改\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n  var _super = _createSuper(App);\n  function App(props) {\n    var _this;\n    _classCallCheck(this, App);\n    _this = _super.call(this, props);\n    _defineProperty(_assertThisInitialized(_this), \"handler\", function (e) {\n      var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value,\n        type = _e$target.type;\n      // console.log(name);\n      // console.log(value);\n      if (type == \"checkbox\" && _this.state[name] == value) {\n        value = null;\n      }\n      _this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this.state);\n      });\n    });\n    _this.state = {\n      option: 1,\n      checkBox: 0\n    };\n    return _this;\n  }\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n      // let style = { background: \"red\", color: \"#fff\" };\n      // let radioStyle = { background: \"blue\", color: \"#fff\" };\n      var radioButtonValues = [1, 2, 3];\n      var ischeckBoxChecked = this.state.checkBox == \"1\";\n      var className = ischeckBoxChecked ? \"active\" : \"\";\n      return /*#__PURE__*/React.createElement(\"form\", null, /*#__PURE__*/React.createElement(\"label\", {\n        //   style={({ background: \"red\", color: \"#fff\" }, radioStyle, style)}\n        className: className\n      }, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"checkbox\",\n        name: \"checkBox\",\n        value: \"1\",\n        id: \"\",\n        defaultChecked: ischeckBoxChecked,\n        onChange: this.handler\n      }), \"CheckBoxValue\"), /*#__PURE__*/React.createElement(\"div\", null, radioButtonValues.map(function (value) {\n        var checked = value == _this2.state.option;\n        var className = checked ? \"active\" : \"\";\n        return /*#__PURE__*/React.createElement(\"label\", {\n          className: className\n        }, /*#__PURE__*/React.createElement(\"input\", {\n          type: \"radio\",\n          name: \"option\",\n          id: \"\",\n          value: value,\n          onChange: _this2.handler,\n          defaultChecked: checked\n        }), \"\\u9078\\u9805\", value);\n      })), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"submit\",\n        value: \"submit\"\n      }));\n    }\n  }]);\n  return App;\n}(React.Component);\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n\n// // 第8堂 輸入即改變的網頁Input實作\n// class InputTextWithPreview extends React.Component {\n//   constructor(props) {\n//     super(props);\n//     // this.handler = this.handler.bind(this); //使用箭頭函式就不用了，因為它會自己綁定this\n//     this.state = {\n//       title: \"進度條JS\",\n//     };\n//   }\n\n//   handler = (e) => {\n//     // console.log(e);\n//     const { id, value } = e.target; //解構e.target 拿name, value\n//     // console.log(name); //比較像抓HTML裡的節點?\n//     // console.log([name]); //變成virable:title => this.state.title\n//     // console.log(value);\n//     // console.log([value]);\n//     // #\n//     // console.log(this.state);\n//     // ##錯誤 等於說新增一個key叫name的，值是value在this.state上\n//     // this.setState({ name: value });\n//     // ##正確 直接寫 { name: value }的話變成name是key；[name]才會抓state裡的variable:['title']\n//     this.setState({ [id]: value }, () => {\n//       //因為setState是非同步 所以需要給函式來取得更新完的state\n//       console.log(this.state);\n//     });\n//   };\n//   render() {\n//     return (\n//       <div>\n//         <h1>{this.state.title}</h1>\n//         <input\n//           type=\"text\"\n//           name=\"title\"\n//           id=\"title\"\n//           value={this.state.title}\n//           onChange={this.handler}\n//         />\n//       </div>\n//     );\n//   }\n// }\n// ReactDOM.render(<InputTextWithPreview />, document.getElementById(\"root\"));\n\n// 第7堂 state與props用途，常見的ES6參數傳遞\n// import Result from \"./Result.jsx\";\n// class Counter extends React.Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {\n//       count: 0,\n//     };\n//   }\n//   countPlusOneHandler(e) {\n//     // console.log(e);\n//     // let count = this.state.count + 1;\n//     // count++;\n//     // this.setState({ count: this.state.count + 1 }); //key;variable\n\n//     let { count } = this.state; //直接拿key\n//     this.setState({ count: count + 1 });\n//   }\n//   render() {\n//     return (\n//       <div>\n//         {/* 第一種寫法 */}\n//         {/* <Result\n//           count={this.state.count}\n//           handler={this.countPlusOneHandler.bind(this)} //如果想要讓Result也有plusone功能\n//         /> */}\n//         {/* 第二種寫法 將this(Counter)的state全部傳進去 但好像不會傳Function:countPlusOneHandler，Result不能用plusOne*/}\n//         <Result {...this.state} />\n//         {/* 傳count, handler進Result.props */}\n//         <button type=\"button\" onClick={this.countPlusOneHandler.bind(this)}>\n//           Click me!!\n//         </button>\n//       </div>\n//     );\n//   }\n// }\n\n// ReactDOM.render(<Counter />, document.getElementById(\"root\"));\n\n// 第6堂 初探State\n// class Test extends React.Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {\n//       //   name: \"12345\",\n//       value: \"12345\",\n//     };\n//   }\n//   inputHandler(e) {\n//     //此為一般函式宣告方式，this不是指向Test，所以使用inputHandler時需要bind(this)\n//     console.log(e.target.value);\n//     // this.state.value = \"5432\"; //錯誤方式\n//     this.setState({ value: e.target.value });\n//   }\n//   render() {\n//     return (\n//       <div>\n//         input <br />\n//         <input\n//           type=\"text\"\n//           value={this.state.value}\n//           onChange={this.inputHandler.bind(this)} //此onChange為React模擬出來的\n//         ></input>\n//       </div>\n//     );\n//   }\n// }\n\n// ReactDOM.render(<Test value=\"0\" />, document.getElementById(\"root\"));\n\n// 第5堂 初探props\n// import Title from \"./Title.jsx\";\n\n// class ShoppingList extends React.Component {\n//   constructor(props) {\n//     console.log(props);\n//     super(props);\n//   }\n\n//   render() {\n//     return (\n//       <div className=\"shopping-list\">\n//         {/* <Title/> 不能直接Return jsx語法 一定要包起來-> <div><Title/></div> */}\n//         {/* className:React的關鍵字 表class */}\n\n//         <Title />\n//         <h1>Shopping List for {this.props.name}</h1>\n//         {/*  {this.props.name} */}\n//         <ul>\n//           <li>Instagram</li>\n//           <li>WhatsApp</li>\n//           <li>Oculus</li>\n//           <li>{this.props.phone}</li>\n//         </ul>\n//       </div>\n//     );\n//   }\n// }\n\n// let pbname = \"ProgressBar\";\n// let pbPhone = \"0912345678\";\n// ReactDOM.render(\n//   <ShoppingList name={pbname} phone={pbPhone} />,\n//   document.getElementById(\"root\")\n// );\n// // ReactDOM.render(<Title />, document.getElementById(\"root\"));\n\n//# sourceURL=webpack://react/./jsx/main.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./jsx/main.jsx"]();
/******/ 	
/******/ })()
;