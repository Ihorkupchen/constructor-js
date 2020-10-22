// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/cotte.jpg":[function(require,module,exports) {
module.exports = "/cotte.dad56947.jpg";
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.col = col;
exports.row = row;
exports.css = css;
exports.input = input;
exports.deleteButton = deleteButton;
exports.addButton = addButton;
exports.form = form;

function col(content) {
  return "<div class = 'col-sm'>".concat(content, "</div>");
}

function row(content, style) {
  return "<div class = 'row' style='".concat(style, "'>").concat(content, "</div>");
}

function css(obj) {
  if (typeof obj === "string") return obj;

  var cbToString = function cbToString(str, key) {
    return str + "".concat(key, ":").concat(obj[key], ";");
  };

  return Object.keys(obj).reduce(cbToString, '');
}

function input(type, label) {
  return "\n              <div class=\"form-group\">\n                <label for=\"".concat(type, "\">").concat(label, "</label>\n                <textarea class=\"form-control\" id=\"").concat(type, "\" name=\"").concat(type, "\"></textarea> \n              </div>\n    ");
}

function deleteButton() {
  return "<button type=\"submit\" class=\"btn btn-danger btn-lg\">\n                \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \n                <svg width=\"1.5em\" height=\"1.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n                    <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>          \n                </svg>        \n             </button>\n           ";
}

function addButton() {
  return "<button type=\"submit\" class=\"btn btn-primary\">\n                \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                <svg width=\"1.5em\" height=\"1.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-plus\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n                </svg>\n             </button>";
}

function form(type, name, inputs) {
  return "\n        <form name=".concat(type, ">\n            <h4>").concat(name, "</h4>\n            ").concat(inputs.join(''), "\n        </form>\n        <hr/>   \n    ");
}
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsBlock = exports.ImageBlock = exports.TextBlock = exports.TitleBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реализован ');
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 'h1' : _this$options$tag,
          style = _this$options.style;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(style));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var TextBlock = /*#__PURE__*/function (_Block2) {
  _inherits(TextBlock, _Block2);

  var _super2 = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super2.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var style = this.options.style;
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(style));
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var ImageBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ImageBlock, _Block3);

  var _super3 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          style = _this$options2.style,
          is = _this$options2.imageStyle,
          alt = _this$options2.alt;
      return (0, _utils.row)("<img src=".concat(this.value, " alt='").concat(alt, "' style= '").concat((0, _utils.css)(is), "'>"), (0, _utils.css)(style));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block4) {
  _inherits(ColumnsBlock, _Block4);

  var _super4 = _createSuper(ColumnsBlock);

  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super4.call(this, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var style = this.options.style;

      var toString = function toString(i) {
        return (0, _utils.col)("<p>".concat(i, "</p>"));
      };

      var html = this.value.map(toString).join('');
      return (0, _utils.row)(html, (0, _utils.css)(style));
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;
},{"../utils":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _cotte = _interopRequireDefault(require("./assets/cotte.jpg"));

var _blocks = require("./classes/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = [new _blocks.TitleBlock('Здесь может быть ваш заголовок :)', {
  tag: 'h2',
  style: {
    'border-radius': '10px',
    margin: ' 10px',
    color: 'white',
    background: 'linear-gradient(45deg, red, blue)',
    padding: '2rem',
    'text-align': 'center'
  }
}), new _blocks.TextBlock("\u042D\u0442\u043E \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u043E\u0432. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0431\u043E\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438, \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438,\n                         \u0430\u0431\u0437\u0430\u0446\u0438 \u0438 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 c \u0442\u0435\u043A\u0441\u0442\u043E\u043C. \u0414\u043B\u044F \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u043B\u043E\u043A\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 css-\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u043F\u0440\u0438\u043C\u0435\u0440: padding: 1rem; color: green . \n                         \u0414\u043B\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435\".", {
  style: {
    'border-radius': '10px',
    border: '2px solid blue',
    margin: ' 10px',
    'font-size': '1.2rem',
    padding: '2rem',
    color: ' blue',
    'font-weight': 'bold'
  }
}), new _blocks.ImageBlock(_cotte.default, {
  style: {
    background: 'linear-gradient(#fff, green, 80%, #4a00e0)',
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyle: {
    'border-radius': '10px',
    width: '500px',
    height: 'auto'
  },
  alt: 'Это картинка'
}), new _blocks.TitleBlock('Скороговорки', {
  tag: 'h3',
  style: {
    'text-decoration': 'underline',
    color: 'white',
    background: '#4a00e0',
    padding: '1rem',
    'text-align': 'center'
  }
}), new _blocks.ColumnsBlock(['Карл у Клары украл рекламу, а Клара у Карла украла бюджет.', 'Брейншторм: гам, гром, ор ртов, пир рифм, вдруг — бум! Блеск!', 'Регулировщик лигуриец регулировал в Лигурии.'], {
  style: {
    background: 'linear-gradient(#4a00e0,#9d00e0)',
    padding: '2rem',
    color: '#fff',
    'font-weight': 'bold'
  }
})];
exports.model = model;
},{"./assets/cotte.jpg":"assets/cotte.jpg","./classes/blocks":"classes/blocks.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      this.$el.innerHTML = '';
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML('beforeend', block.toHTML());
      });
      window.localStorage.setItem('model', this.$el.innerHTML);
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, reRender, deleteAll) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.init();
    this.reRender = reRender;
    this.deleteAll = deleteAll;
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.addEventListener('submit', this.submit.bind(this));
    }
  }, {
    key: "submit",
    value: function submit(event) {
      event.preventDefault();

      if (event.target.name === 'delete') {
        this.deleteAll();
      } else {
        if (this.getValueInputs(event.target) === undefined) {
          return;
        }

        var _this$getValueInputs = this.getValueInputs(event.target),
            type = _this$getValueInputs.type,
            value = _this$getValueInputs.value,
            imageStyle = _this$getValueInputs.imageStyle,
            style = _this$getValueInputs.style;

        this.clearInputs(event.target);
        this.model.forEach(function (form) {
          if (form.$addedInputs) form.$addedInputs.innerHTML = '';
        });
        var newBlock = '';
        this.model.forEach(function (form) {
          if (form.type === type) {
            newBlock = form.newBlock(value, {
              style: style,
              imageStyle: imageStyle
            });
            return;
          }
        });
        this.reRender(newBlock);
      }
    }
  }, {
    key: "clearInputs",
    value: function clearInputs(eventTarget) {
      for (var i = 1; eventTarget['value' + i]; i++) {
        eventTarget['value' + i].value = '';
      }

      if (eventTarget.value) eventTarget.value.value = '';
      if (eventTarget.style) eventTarget.style.value = '';
      if (eventTarget.imageStyle) eventTarget.imageStyle.value = '';
    }
  }, {
    key: "getValueInputs",
    value: function getValueInputs(eventTarget) {
      var _eventTarget$style, _eventTarget$imageSty;

      var value = [];
      var emptyItems = 0;

      if (eventTarget.value) {
        if (!eventTarget.value.value.trim()) {
          return;
        }

        value = eventTarget.value.value;
      } else {
        for (var i = 1; eventTarget['value' + i]; i++) {
          value.push(eventTarget['value' + i].value);
          emptyItems = !eventTarget['value' + i].value.trim() && emptyItems + 1;
        }

        if (emptyItems === value.length) {
          return;
        }
      }

      return {
        type: eventTarget.name,
        value: value,
        style: (_eventTarget$style = eventTarget.style) === null || _eventTarget$style === void 0 ? void 0 : _eventTarget$style.value,
        imageStyle: (_eventTarget$imageSty = eventTarget.imageStyle) === null || _eventTarget$imageSty === void 0 ? void 0 : _eventTarget$imageSty.value
      };
    }
  }, {
    key: "render",
    value: function render(sidebarModel) {
      var _this = this;

      this.model = sidebarModel;
      this.$el.innerHTML = '';
      this.model.forEach(function (form) {
        form.render(_this.$el);
      });
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{}],"classes/forms.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteForm = exports.ColumnsForm = exports.ImageForm = exports.TextForm = exports.TitleForm = void 0;

var _utils = require("../utils");

var _blocks = require("./blocks");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(type, Block) {
    _classCallCheck(this, Form);

    this.type = type;
    this.Block = Block;
  }

  _createClass(Form, [{
    key: "newBlock",
    value: function newBlock(value, options) {
      return new this.Block(value, options);
    }
  }, {
    key: "render",
    value: function render(el) {
      el.insertAdjacentHTML('beforeend', this.toHTML());
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реализован ');
    }
  }]);

  return Form;
}();

var TitleForm = /*#__PURE__*/function (_Form) {
  _inherits(TitleForm, _Form);

  var _super = _createSuper(TitleForm);

  function TitleForm() {
    _classCallCheck(this, TitleForm);

    return _super.call(this, 'title', _blocks.TitleBlock);
  }

  _createClass(TitleForm, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.form)(this.type, 'Заголовок', [(0, _utils.input)('value', 'Текст заголовка'), (0, _utils.input)('style', 'Стили для блока'), (0, _utils.addButton)()]);
    }
  }]);

  return TitleForm;
}(Form);

exports.TitleForm = TitleForm;

var TextForm = /*#__PURE__*/function (_Form2) {
  _inherits(TextForm, _Form2);

  var _super2 = _createSuper(TextForm);

  function TextForm() {
    _classCallCheck(this, TextForm);

    return _super2.call(this, 'text', _blocks.TextBlock);
  }

  _createClass(TextForm, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.form)(this.type, 'Aбзац', [(0, _utils.input)('value', 'Текст'), (0, _utils.input)('style', 'Стили для блока'), (0, _utils.addButton)()]);
    }
  }]);

  return TextForm;
}(Form);

exports.TextForm = TextForm;

var ImageForm = /*#__PURE__*/function (_Form3) {
  _inherits(ImageForm, _Form3);

  var _super3 = _createSuper(ImageForm);

  function ImageForm() {
    _classCallCheck(this, ImageForm);

    return _super3.call(this, 'image', _blocks.ImageBlock);
  }

  _createClass(ImageForm, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.form)(this.type, 'Картинка', [(0, _utils.input)('value', 'Вставте ссылку на картинку'), (0, _utils.input)('style', 'Стили для блока'), (0, _utils.input)('imageStyle', 'Стили для картинки'), (0, _utils.addButton)()]);
    }
  }]);

  return ImageForm;
}(Form);

exports.ImageForm = ImageForm;

var ColumnsForm = /*#__PURE__*/function (_Form4) {
  _inherits(ColumnsForm, _Form4);

  var _super4 = _createSuper(ColumnsForm);

  function ColumnsForm() {
    var _this;

    _classCallCheck(this, ColumnsForm);

    _this = _super4.call(this, 'columns', _blocks.ColumnsBlock);
    _this.numCol = 2;
    return _this;
  }

  _createClass(ColumnsForm, [{
    key: "render",
    value: function render(el) {
      _get(_getPrototypeOf(ColumnsForm.prototype), "render", this).call(this, el);

      this.$addedInputs = document.querySelector('#addedInputs');
      this.$addInputBtn = document.querySelector('#addInputBtn');
      this.$addInputBtn.addEventListener('click', this.addInput.bind(this));
    }
  }, {
    key: "addInput",
    value: function addInput(e) {
      e.preventDefault();
      this.numCol++;
      this.$addedInputs.insertAdjacentHTML('beforeend', (0, _utils.input)("value".concat(this.numCol), "\u0422\u0435\u043A\u0441\u0442 ".concat(this.numCol)));
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.form)(this.type, 'Колонки', [(0, _utils.input)('value1', 'Текст 1'), (0, _utils.input)('value2', 'Текст 2'), "<div id ='addedInputs'></div>", "<button id=\"addInputBtn\" class=\"btn btn-success\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443</button>", (0, _utils.input)('style', 'Стили для блока'), (0, _utils.addButton)()]);
    }
  }]);

  return ColumnsForm;
}(Form);

exports.ColumnsForm = ColumnsForm;

var DeleteForm = /*#__PURE__*/function (_Form5) {
  _inherits(DeleteForm, _Form5);

  var _super5 = _createSuper(DeleteForm);

  function DeleteForm() {
    _classCallCheck(this, DeleteForm);

    return _super5.call(this, 'delete');
  }

  _createClass(DeleteForm, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.form)(this.type, '', [(0, _utils.deleteButton)()]);
    }
  }]);

  return DeleteForm;
}(Form);

exports.DeleteForm = DeleteForm;
},{"../utils":"utils.js","./blocks":"classes/blocks.js"}],"sidebarModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarModel = void 0;

var _forms = require("./classes/forms");

var sidebarModel = [new _forms.DeleteForm(), new _forms.TitleForm(), new _forms.TextForm(), new _forms.ImageForm(), new _forms.ColumnsForm(), new _forms.DeleteForm()];
exports.sidebarModel = sidebarModel;
},{"./classes/forms":"classes/forms.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

var _sidebarModel = require("../sidebarModel");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site('#site');
      var modelLocalStorage = window.localStorage.getItem('model');

      if (modelLocalStorage) {
        this.model.length = 0;
        this.model.push({
          toHTML: function toHTML() {
            return modelLocalStorage;
          }
        });
      }

      site.render(this.model);

      var reRender = function reRender(newBlock) {
        _this.model.push(newBlock);

        site.render(_this.model);
      };

      var deleteAll = function deleteAll() {
        _this.model.length = 0;
        site.render(_this.model);
      };

      var sidebar = new _sidebar.Sidebar('#panel', reRender, deleteAll.bind(this));
      sidebar.render(_sidebarModel.sidebarModel);
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"classes/site.js","./sidebar":"classes/sidebar.js","../sidebarModel":"sidebarModel.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

require("./styles/main.css");

var _app = require("./classes/app");

new _app.App(_model.model).init();
},{"./model":"model.js","./styles/main.css":"styles/main.css","./classes/app":"classes/app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33891" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map