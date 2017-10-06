/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_js__ = __webpack_require__(6);




let game = new __WEBPACK_IMPORTED_MODULE_1__game_js__["a" /* Game */](document, window, "onclick", "getElementById", "className", "innerHTML", "confirm");

game.init("newgame", "won", "color", "restart", "p1", "p2");
game.start();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#messages {\n    display:none;\n}\n\ni {\n    border-radius: 21px;\n    padding: 9px;\n    transition: 0.2s ease-out;\n    width: 80px;\n    display: inline-block\n}\n\ntable {\n    width: 100%;\n}\n\n#game {\n    font-family: Helvetica, Arial, \"Lucida Grande\", sans-serif; \n    width: 340px;\n    text-align: center\n}\n\n.leg {\n    box-shadow: 7px 7px 28px 0px rgba(50, 50, 50, 0.6);\n    height: 55px;\n    width: 12px;\n    border-radius: 0 0 8px 8px;\n    float: left\n}\n\n.right {\n    border: 0px solid #00f;\n    float: right\n}\n\ntable {\n    border: 0px solid #00f;\n    box-shadow: 7px 7px 28px 0px rgba(50, 50, 50, 0.6);\n    padding: 7px;\n    border-spacing: 4px;\n    border-radius: 8px 8px 0 0\n}\n\ntd {\n    border: 0px solid #00f;\n    border-radius: 2000px;\n    box-shadow: inset 7px 7px 20px 0px rgba(50, 50, 50, 0.4);\n    opacity: 1;\n    height: 40px;\n    background: #fff\n}\n\nbutton {\n    margin: 20px auto 0\n}\n\n#game,\ntable {\n    margin: 30px auto 0\n}\n.leg,\ntable {\n    background: #00f\n}\n\ntd:hover {\n    opacity: 0.6\n}\n\ntd.Red,\ntd.Yellow {\n    box-shadow: inset 0 0 25px rgba(99, 99, 99, 0.7)\n}\n\n.Red:hover,\n.Yellow:hover {\n    opacity: 1\n}\n\n.Yellow {\n    background: #ff0\n}\n\n.Red {\n    background: #f00;\n    color: #fff\n}\n\n@media (min-width: 500px) {\n    #game {\n        width: 405px;\n    }\n    \n    td {\n        height: 47px;\n        border-width: 1px\n    }\n    \n    .leg {\n        width: 13px;\n        height: 60px\n    }\n}\n\n@media (min-width: 600px) {\n    #game {\n        width: 503px;\n    }\n    \n    td {\n        height: 59px;\n        border-width: 2px\n    }\n    \n    .leg {\n        width: 14px;\n        height: 80px\n    }\n    \n    button {\n        margin: 30px auto 0;\n        padding: 4px 10px\n    }\n}\n\n@media (min-width: 700px) {\n    #game {\n        width: 601px;\n    }\n    \n    td {\n        height: 71px;\n        border-width: 3px\n    }\n    \n    .leg {\n        width: 16px;\n        height: 90px\n    }\n    \n    button {\n        padding: 5px 20px\n    }\n    \n    td {\n        box-shadow: inset 15px 15px 15px 0px rgba(50, 50, 50, 0.25)\n    }\n    \n    td.Red,\n    td.Yellow {\n        box-shadow: inset 0 0 20px rgba(99, 99, 99, 0.8)\n    }\n    \n    .leg,\n    table {\n        box-shadow: 15px 15px 15px 0px rgba(50, 50, 50, 0.3)\n    }\n}\n\n@media (max-width: 370px) {\n    #game {\n        width: 249px;\n    }\n    \n    td {\n        height: 29px;\n        border-width: 0\n    }\n    \n    .leg {\n        width: 8px;\n        height: 40px\n    }\n    button {\n        margin: 10px auto 0\n    }\n    \n    td {\n        box-shadow: inset 3px 3px 10px 0px rgba(50, 50, 50, 0.4)\n    }\n    \n    td.Red,\n    td.Yellow {\n        box-shadow: inset 0 0 10px rgba(99, 99, 99, 0.7)\n    }\n    \n    .leg,\n    table {\n        box-shadow: 3px 3px 10px 0px rgba(50, 50, 50, 0.6)\n    }\n}\n\n@media (max-width: 280px) {\n    #game {\n        width: 200px;\n    }\n    \n    td {\n        height: 22px;\n    }\n    \n    * {\n        box-shadow: none!important\n    }\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Game {

    constructor(doc, win, onclick, gid, classname, content, showMessage) {
        this.doc = doc;
        this.win = win;
        this.onclick = onclick;
        this.gid = gid;
        this.classname = classname;
        this.content = content;
        this.showMessage = showMessage;
    }

    init(newGameLabel, wonLabel, colorId, hook, p1, p2) {
        // Init basic vars (for ui)
        this.newgameLabel = newGameLabel;
        this.wonLabel = wonLabel;
        this.cid = colorId;
        this.colorLabel = this.doc[this.gid](colorId);
        this.players = [this.doc[this.gid](p1)[this.content], this.doc[this.gid](p2)[this.content]];
        this.laststart = 0;

        // Hook the onclick-event to each cell in the grid
        for (var row = 1; row < 7; row++)
        for (var col = 1; col < 8; col++)
            this.cellAt(row, col)[onclick] = function (col) {
                return function () {
                    if (!finished)
                        // Loop through the cells in this column from bottom to top to find the first unoccupied cell
                        for (var row = 6; row > 0; row--)
                            if (!this.cellAt(row, col)[classname]) { // Check if empty
                                this.makeMove(row, col, 0);
                                break; // Found one, so exit the for-loop
                            }
                };
            }(col); // Pass col as argument to onclick-event
        ;

        // Hook restart-button onclick-event
        this.doc[this.gid](hook)[this.onclick] = function () {
            this.win[this.showMessage](this.doc[this.gid](this.newgameLabel)[this.content]) && this.start() // When confirmed, run start() to restart the game
        };
    }

    // Returns the cell (TD) that represents this position in the grid
    cellAt (row, col) {
        return this.doc[this.gid](this.cid + row + col); // "color" + "<row>" + "<col>", eg: "color16" for top row, 6th column
    }
        
    // Returns true if the cell is occupied by current player (ref: current)
    isCurrentColor (row, col) {
        return this.cellAt(row, col)[this.classname] === this.players[this.current];
    }
        
    // Initializes a new game by resetting vars and clearing the grid
    start () {
        // Determine who gets to start the game
        this.current = this.laststart = (this.laststart + 1) % 2;
        this.finished = 0; // Nope, just startin'
        // Initialize the 'Who's turn' indicator
        this.colorLabel[this.content] = this.colorLabel[this.classname] = this.players[this.current = (this.current + 1) % 2];
        // Clear the grid
        for (var row = 1; row < 7; row++)
            for (var col = 1; col < 8; col++)
                this.cellAt(row, col)[this.classname] = '';
    }
        
    // Move the stone through the grid column from top (s=0) till the last empty space (s=targetRow+1)
    makeMove (targetRow, col, s) {
        // Clear cell above current row (= s+1) (we're moving down, so leaving that row, thus need to remove our footprint)
        s > 0 && (this.cellAt(s, col)[this.classname] = '');
        // Occupy cell at row s+1
        this.cellAt(s + 1, col)[this.classname] = this.players[this.current];

        // If we reached our targetrow, now check if we got a 4-in-a-row (= game finished, we are winner) 
        s === targetRow - 1 ? function (targetRow, col) {
            // Find vertical 4-in-a-row
            return function (targetRow, col) {
                for (var a = col - 1; 0 < a && this.isCurrentColor(targetRow, a); a--) { // Most left col
                }
                for (var b = col + 1; 8 > b && this.isCurrentColor(targetRow, b); b++) { // Most right col
                }
                return 4 < b - a;
            }(targetRow, col)
            // Find horizontal 4-in-a-row from the targetRow down (nothing can be above it :-))
            || function (targetRow, col) {
                for (var c = targetRow + 1; 7 > c && this.isCurrentColor(c, col); c++) {
                }
                return 3 < c - targetRow;
            }(targetRow, col)
            // Find diagonal 4-in-a-row from bottom left to top right
            || function (targetRow, col) {
                for (var a = targetRow - 1, b = col - 1; 0 < a && !(1 > b) && this.isCurrentColor(a, b); a--)
                    b--;
                for (var c = targetRow + 1, b = col + 1; 7 > c && !(7 < b) && this.isCurrentColor(c, b); c++)
                    b++;
                return 4 < c - a
            }(targetRow, col)
            // Find diagonal 4-in-a-row from top left to bottom right
            || function (targetRow, col) {
                for (var a = targetRow - 1, b = col + 1; 0 < a && !(7 < b) && this.isCurrentColor(a, b); a--)
                    b++;
                for (var c = targetRow + 1, b = col - 1; 7 > c && !(1 > b) && this.isCurrentColor(c, b); c++)
                    b--;
                return 4 < c - a;
            }(targetRow, col);
        }(targetRow, col)
                // Set game as finished, show that we are winner and as if newgame is desired, when answer=yes then restart game
                ? this.finished = 1 && this.win[this.showMessage](this.doc[this.gid](this.wonLabel)[this.content].replace("%s", this.players[this.current].toLowerCase())) && this.start() // Sadly the 'confirm' will show before css-rendering was done (just like described here: https://stackoverflow.com/questions/19188191/is-it-possible-to-make-sure-addclass-is-rendered-before-showing-confirm-box)
                // Update the 'Who's turn'-indicator
                : this.colorLabel[this.content] = this.colorLabel[this.classname] = this.players[this.current = (this.current + 1) % 2] 
                // We haven't reached the targetRow yet, so drop to next (lower) row (after waiting 20ms)
                : setTimeout(function () {
                    this.makeMove(targetRow, col, s + 1)
                }, 20);

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map