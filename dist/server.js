module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _redux = __webpack_require__(4);

	var _reactRedux = __webpack_require__(5);

	var _modules = __webpack_require__(6);

	var _modules2 = _interopRequireDefault(_modules);

	var _device = __webpack_require__(7);

	var _app = __webpack_require__(8);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(9);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
	  var store = (0, _redux.createStore)(_modules2.default);

	  store.dispatch((0, _device.enableMobile)());
	  var state = store.getState();

	  var appString = (0, _server.renderToString)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_app2.default, null)
	  ));

	  res.send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(state)
	  }));
	});

	server.listen(8080);
	console.log('listening');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(4);

	var _device = __webpack_require__(7);

	var _device2 = _interopRequireDefault(_device);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  device: _device2.default
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	var ENABLE_MOBILE_DEVICE = 'ENABLE_MOBILE_DEVICE';

	var INITIAL_STATE = {
	  isMobile: false
	};

	function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];

	  switch (action.type) {
	    case ENABLE_MOBILE_DEVICE:
	      return Object.assign({}, state, {
	        isMobile: action.enable
	      });

	    default:
	      return state;
	  }
	}

	var enableMobile = exports.enableMobile = function enableMobile() {
	  return {
	    type: ENABLE_MOBILE_DEVICE,
	    enable: true
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(props) {
	  var isMobile = props.device.isMobile;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'hello world ',
	      isMobile ? 'mobile' : 'desktop'
	    )
	  );
	};

	App.propTypes = {
	  device: _react.PropTypes.object.isRequired
	};

	var mapStateToProps = function mapStateToProps(_ref) {
	  var device = _ref.device;
	  return { device: device };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ })
/******/ ]);