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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bulma_container_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulma-container/block.js */ "./src/bulma-container/block.js");
/* harmony import */ var _bulma_section_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulma-section/block.js */ "./src/bulma-section/block.js");
/* harmony import */ var _bulma_hero_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulma-hero/block.js */ "./src/bulma-hero/block.js");
/* harmony import */ var _bulma_box_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bulma-box/block.js */ "./src/bulma-box/block.js");
/* harmony import */ var _bulma_icon_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bulma-icon/block.js */ "./src/bulma-icon/block.js");
/* harmony import */ var _bulma_image_block_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulma-image/block.js */ "./src/bulma-image/block.js");
/* harmony import */ var _bulma_columns_block_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bulma-columns/block.js */ "./src/bulma-columns/block.js");
/* harmony import */ var _bulma_columns_bulma_column_block_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bulma-columns/bulma-column/block.js */ "./src/bulma-columns/bulma-column/block.js");
/* harmony import */ var _link_card_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./link-card/block.js */ "./src/link-card/block.js");


/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */









var updateCategory = wp.blocks.updateCategory;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;

(function () {
  updateCategory('bulma-blocks', {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
      fill: "#00c4a7",
      d: "M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z"
    }))
  });
})();

/***/ }),

/***/ "./src/bulma-box/block.js":
/*!********************************!*\
  !*** ./src/bulma-box/block.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss'
// import './style.scss'
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/box', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Box'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "box-open",
    className: "svg-inline--fa fa-box-open fa-w-20",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Component.
  */
  attributes: {
    option: {
      type: 'string'
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Add a Box layout element that can contain any content and has rounded corners and a drop shadow.'),
  edit: function edit(props) {
    var select = wp.data.select('core/block-editor');
    var innerBlocks = select.getBlock(props.clientId).innerBlocks;
    var hasChildBlocks = innerBlocks.length > 0;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-box".concat(props.isSelected || hasSelectedInnerBlock(props) ? ' bulma-blocks-editor-box--selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasChildBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },

  /**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Frontend HTML.
  */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'box'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

function hasSelectedInnerBlock(props) {
  var select = wp.data.select('core/block-editor');
  var selected = select.getBlockSelectionStart();
  var inner = select.getBlock(props.clientId).innerBlocks;

  for (var i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/bulma-columns/block.js":
/*!************************************!*\
  !*** ./src/bulma-columns/block.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import "./editor.scss";
// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("bulma-blocks/columns", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Bulma - Columns"),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "columns",
    className: "svg-inline--fa fa-columns fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "bulma-blocks",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  attributes: {
    numColumns: {
      type: "number",
      default: 1
    },
    isCentered: {
      type: "boolean"
    },
    dividers: {
      type: "boolean",
      default: false
    },
    collapse: {
      type: "string",
      default: ""
    },
    bgColor: {
      type: "string",
      default: ""
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __("Add the columns container element that uses individual column elements to layout content on the page."),
  edit: function edit(props) {
    if (props.attributes.numColumns === 1) {
      updateColumns(props, 1, 1);
    }

    if (!props.attributes.isCentered) {
      props.setAttributes({
        isCentered: false
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      className: "bulma-columns-range-control",
      label: "Number of Columns",
      value: props.attributes.numColumns || 1,
      min: 1,
      max: 6,
      onChange: function onChange(numColumns) {
        updateColumns(props, props.attributes.numColumns, numColumns);
        props.setAttributes({
          numColumns: numColumns
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Center Columns?",
      checked: props.attributes.isCentered,
      onChange: function onChange(checked) {
        return props.setAttributes({
          isCentered: checked
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Include dividers between columns?",
      checked: props.attributes.dividers,
      onChange: function onChange(checked) {
        return props.setAttributes({
          dividers: checked
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Columns Collapse",
      help: "Choose at which screen size the columns collapse to a single column.",
      value: props.attributes.collapse,
      options: [{
        value: "is-mobile",
        label: "Never Collapse"
      }, {
        value: "",
        label: "Tablet (768px and down)"
      }, {
        value: "is-desktop",
        label: "Desktop (1024px and down)"
      }],
      onChange: function onChange(collapse) {
        props.setAttributes({
          collapse: collapse
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      options: [{
        value: "",
        label: "None"
      }, {
        value: "has-background-black",
        label: "Black"
      }, {
        value: "has-background-grey-lighter",
        label: "Light Gray"
      }, {
        value: "has-background-black-ter",
        label: "Dark Gray"
      }],
      onChange: function onChange(bgColor) {
        props.setAttributes({
          bgColor: bgColor
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-columns"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      templateLock: "all"
    }))];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "columns".concat(props.attributes.isCentered ? " is-centered" : "", " is-multiline ").concat(props.attributes.collapse || "", " ").concat(props.attributes.bgColor !== "" ? props.attributes.bgColor : "", " ").concat(props.attributes.dividers ? "has-dividers" : "")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

var updateColumns = function updateColumns(props, oldNum, newNum) {
  var select = wp.data.select("core/block-editor");
  var innerBlocks = select.getBlock(props.clientId).innerBlocks;
  var adding = newNum > oldNum;
  var triedZero = newNum === 0;

  if (oldNum === 1 && oldNum === newNum) {
    var firstBlock = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])("bulma-blocks/column");
    innerBlocks = [firstBlock];
    wp.data.dispatch("core/block-editor").replaceInnerBlocks(props.clientId, innerBlocks, false);
  } else if (adding && !triedZero) {
    var newToAdd = newNum - oldNum;

    for (var i = 0; i < newToAdd; i++) {
      var newColumn = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('bulma-blocks/column');
      innerBlocks.push(newColumn);
    }

    wp.data.dispatch("core/block-editor").replaceInnerBlocks(props.clientId, innerBlocks, false);
  } else if (!adding && !triedZero) {
    var removingNum = oldNum - newNum;

    for (var _i = 0; _i < removingNum; _i++) {
      innerBlocks.pop();
    }

    wp.data.dispatch("core/block-editor").replaceInnerBlocks(props.clientId, innerBlocks, false);
  }
};

/***/ }),

/***/ "./src/bulma-columns/bulma-column/block.js":
/*!*************************************************!*\
  !*** ./src/bulma-columns/bulma-column/block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss';
// import './style.scss';
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/column', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Column'),
  // Block title.
  icon: 'welcome-add-page',
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],
  parent: ['bulma-blocks/columns'],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  attributes: {
    sizeWide: {
      type: 'string',
      default: ''
    },
    sizeDesk: {
      type: 'string',
      default: ''
    },
    sizeTab: {
      type: 'string',
      default: ''
    },
    sizeMo: {
      type: 'string',
      default: ''
    },
    size: {
      type: 'string',
      default: ''
    },
    useExact: {
      type: 'boolean',
      default: 'false'
    },
    bgColor: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Edit an individual column that contain any content.'),
  edit: function edit(props) {
    var setChecked = function setChecked() {
      if (props.attributes.useExact) {
        props.setAttributes({
          useExact: false
        });
      } else {
        props.setAttributes({
          useExact: true
        });
      }
    }; // if (!props.attributes.size) {
    //   props.setAttributes({ size: "" });
    // }


    var select = wp.data.select('core/block-editor');
    var innerBlocks = select.getBlock(props.clientId).innerBlocks;
    var hasChildBlocks = innerBlocks.length > 0;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CheckboxControl, {
      label: "Advanced Size Settings",
      help: "Select the size for this column at each individual screen size.",
      checked: props.attributes.useExact,
      onChange: setChecked
    }))), props.attributes.useExact ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Widescreen Column Size",
      value: props.attributes.sizeWide,
      help: "Screen width of 1216px and up.",
      options: [{
        value: '',
        label: 'Auto'
      }, {
        value: 'is-half-widescreen',
        label: 'Half'
      }, {
        value: 'is-one-third-widescreen',
        label: 'One Third (1/3)'
      }, {
        value: 'is-two-thirds-widescreen',
        label: 'Two Thirds (2/3)'
      }, {
        value: 'is-one-quarter-widescreen',
        label: 'One Quarter (1/4)'
      }, {
        value: 'is-three-quarters-widescreen',
        label: 'Three Quarters (3/4)'
      }, {
        value: 'is-one-fifth-widescreen',
        label: 'One Fifth (1/5)'
      }, {
        value: 'is-two-fifths-widescreen',
        label: 'Two Fifths (2/5)'
      }, {
        value: 'is-three-fifths-widescreen',
        label: 'Three Fifths (3/5)'
      }, {
        value: 'is-four-fifths-widescreen',
        label: 'Four Fifths (4/5)'
      }],
      onChange: function onChange(sizeWide) {
        props.setAttributes({
          sizeWide: sizeWide
        });
        wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Desktop Column Size",
      value: props.attributes.sizeDesk,
      help: "Screen width between 1024px to 1215px.",
      options: [{
        value: '',
        label: 'Auto'
      }, {
        value: 'is-half-desktop',
        label: 'Half'
      }, {
        value: 'is-one-third-desktop',
        label: 'One Third (1/3)'
      }, {
        value: 'is-two-thirds-desktop',
        label: 'Two Thirds (2/3)'
      }, {
        value: 'is-one-quarter-desktop',
        label: 'One Quarter (1/4)'
      }, {
        value: 'is-three-quarters-desktop',
        label: 'Three Quarters (3/4)'
      }, {
        value: 'is-one-fifth-desktop',
        label: 'One Fifth (1/5)'
      }, {
        value: 'is-two-fifths-desktop',
        label: 'Two Fifths (2/5)'
      }, {
        value: 'is-three-fifths-desktop',
        label: 'Three Fifths (3/5)'
      }, {
        value: 'is-four-fifths-desktop',
        label: 'Four Fifths (4/5)'
      }],
      onChange: function onChange(sizeDesk) {
        props.setAttributes({
          sizeDesk: sizeDesk
        });
        wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Tablet Column Size",
      value: props.attributes.sizeTab,
      help: "Screen width between 768px to 1023px.",
      options: [{
        value: '',
        label: 'Auto'
      }, {
        value: 'is-half-tablet',
        label: 'Half'
      }, {
        value: 'is-one-third-tablet',
        label: 'One Third (1/3)'
      }, {
        value: 'is-two-thirds-tablet',
        label: 'Two Thirds (2/3)'
      }, {
        value: 'is-one-quarter-tablet',
        label: 'One Quarter (1/4)'
      }, {
        value: 'is-three-quarters-tablet',
        label: 'Three Quarters (3/4)'
      }, {
        value: 'is-one-fifth-tablet',
        label: 'One Fifth (1/5)'
      }, {
        value: 'is-two-fifths-tablet',
        label: 'Two Fifths (2/5)'
      }, {
        value: 'is-three-fifths-tablet',
        label: 'Three Fifths (3/5)'
      }, {
        value: 'is-four-fifths-tablet',
        label: 'Four Fifths (4/5)'
      }],
      onChange: function onChange(sizeTab) {
        props.setAttributes({
          sizeTab: sizeTab
        });
        wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Mobile Column Size",
      value: props.attributes.sizeMo,
      options: [{
        value: '',
        label: 'Auto'
      }, {
        value: 'is-half-mobile',
        label: 'Half'
      }, {
        value: 'is-one-third-mobile',
        label: 'One Third (1/3)'
      }, {
        value: 'is-two-thirds-mobile',
        label: 'Two Thirds (2/3)'
      }, {
        value: 'is-one-quarter-mobile',
        label: 'One Quarter (1/4)'
      }, {
        value: 'is-three-quarters-mobile',
        label: 'Three Quarters (3/4)'
      }, {
        value: 'is-one-fifth-mobile',
        label: 'One Fifth (1/5)'
      }, {
        value: 'is-two-fifths-mobile',
        label: 'Two Fifths (2/5)'
      }, {
        value: 'is-three-fifths-mobile',
        label: 'Three Fifths (3/5)'
      }, {
        value: 'is-four-fifths-mobile',
        label: 'Four Fifths (4/5)'
      }],
      onChange: function onChange(sizeMo) {
        props.setAttributes({
          sizeMo: sizeMo
        });
        wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "editor-extra-note"
    }, "Note: Columns with chosen size of auto will automatically split the remaining space of the container evenly.")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Column Size",
      value: props.attributes.size,
      options: [{
        value: '',
        label: 'Auto'
      }, {
        value: 'is-half',
        label: 'Half'
      }, {
        value: 'is-one-third',
        label: 'One Third (1/3)'
      }, {
        value: 'is-two-thirds',
        label: 'Two Thirds (2/3)'
      }, {
        value: 'is-one-quarter',
        label: 'One Quarter (1/4)'
      }, {
        value: 'is-three-quarters',
        label: 'Three Quarters (3/4)'
      }, {
        value: 'is-one-fifth',
        label: 'One Fifth (1/5)'
      }, {
        value: 'is-two-fifths',
        label: 'Two Fifths (2/5)'
      }, {
        value: 'is-three-fifths',
        label: 'Three Fifths (3/5)'
      }, {
        value: 'is-four-fifths',
        label: 'Four Fifths (4/5)'
      }],
      onChange: function onChange(size) {
        props.setAttributes({
          size: size
        });
        wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "editor-extra-note"
    }, "Note: Columns with chosen size of auto will automatically split the remaining space of the container evenly.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'has-background-black',
        label: 'Black'
      }, {
        value: 'has-background-grey-lighter',
        label: 'Light Gray'
      }, {
        value: 'has-background-black-ter',
        label: 'Dark Gray'
      }],
      onChange: function onChange(bgColor) {
        props.setAttributes({
          bgColor: bgColor
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bulma-blocks-editor-column".concat(props.isSelected || hasSelectedInnerBlock(props) ? ' bulma-blocks-editor-column--selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      templateLock: false,
      renderAppender: hasChildBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "column ".concat(props.attributes.useExact ? [props.attributes.sizeMo, props.attributes.sizeTab, props.attributes.sizeDesk, props.attributes.sizeWide].join(' ') : props.attributes.size, " ").concat(props.attributes.bgColor !== '' ? props.attributes.bgColor : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

function hasSelectedInnerBlock(props) {
  var select = wp.data.select('core/block-editor');
  var selected = select.getBlockSelectionStart();
  var inner = select.getBlock(props.clientId).innerBlocks;

  for (var i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }

  return false;
}

var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var modifyBlockListBlockColumn = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    var classnames;

    if (props.block.name === 'bulma-blocks/column') {
      classnames = [props.block.attributes.className, 'column', "".concat(props.attributes.useExact ? [props.attributes.sizeMo, props.attributes.sizeTab, props.attributes.sizeDesk, props.attributes.sizeWide].join(' ') : props.attributes.size)].join(' ');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      wrapperProps: {
        'className': classnames
      }
    }));
  };
}, 'modifyBlockListBlockColumn');
wp.hooks.addFilter('editor.BlockListBlock', 'bulma-blocks/column/modify-element-edit', modifyBlockListBlockColumn);

/***/ }),

/***/ "./src/bulma-container/block.js":
/*!**************************************!*\
  !*** ./src/bulma-container/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss'
// import './style.scss'
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls; // implement the bulma blocks category.

var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    select = _wp$data.select;
var category = {
  slug: 'bulma-blocks',
  title: __('Bulma Blocks')
};
var currentCategories = select('core/blocks').getCategories().filter(function (item) {
  return item.slug !== category.slug;
});
dispatch('core/blocks').setCategories([category].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(currentCategories)));
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/container', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Container'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand",
    className: "svg-inline--fa fa-expand fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Component.
  */
  attributes: {
    fluidChecked: {
      type: 'boolean'
    },
    bgColor: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    className: false
  },
  description: __('Add a Container layout element that can contain any content. The Container aligns content in the center of the page on screens above tablet size.'),
  edit: function edit(props) {
    var setChecked = function setChecked() {
      if (props.attributes.fluidChecked) {
        props.setAttributes({
          fluidChecked: false
        });
      } else {
        props.setAttributes({
          fluidChecked: true
        });
      }
    };

    var innerBlocks = select('core/block-editor').getBlock(props.clientId).innerBlocks;
    var hasChildBlocks = innerBlocks.length > 0;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CheckboxControl, {
      label: "Fluid Full-width",
      help: "Would you like the container to be full-width at all screen sizes with gutters?",
      checked: props.attributes.fluidChecked,
      onChange: setChecked
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'has-background-black',
        label: 'Black'
      }, {
        value: 'has-background-grey-lighter',
        label: 'Light Gray'
      }, {
        value: 'has-background-black-ter',
        label: 'Dark Gray'
      }],
      onChange: function onChange(bgColor) {
        props.setAttributes({
          bgColor: bgColor
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "bulma-blocks-editor-container".concat(props.isSelected || hasSelectedInnerBlock(props) ? ' bulma-blocks-editor-container--selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      renderAppender: hasChildBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },

  /**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Frontend HTML.
  */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "container ".concat(props.attributes.fluidChecked ? ' is-fluid' : '', " ").concat(props.attributes.bgColor !== '' ? props.attributes.bgColor : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

function hasSelectedInnerBlock(props) {
  var selected = select('core/editor').getBlockSelectionStart();
  var inner = select('core/editor').getBlock(props.clientId).innerBlocks;

  for (var i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/bulma-hero/block.js":
/*!*********************************!*\
  !*** ./src/bulma-hero/block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss'
// import './style.scss'
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/hero', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Hero'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "pager",
    className: "svg-inline--fa fa-pager fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zM160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Component.
  */
  attributes: {
    option: {
      type: 'string'
    },
    bgColor: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Add a Hero layout element that can contain any content.'),
  edit: function edit(props) {
    if (!props.attributes.option) {
      props.setAttributes({
        option: 'sm'
      });
    }

    var select = wp.data.select('core/block-editor');
    var innerBlocks = select.getBlock(props.clientId).innerBlocks;
    var hasChildBlocks = innerBlocks.length > 0;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Padding Size",
      help: "Select the amount of spacing around the edges of the hero body.",
      selected: props.attributes.option,
      options: [{
        label: 'Small',
        value: 'sm'
      }, {
        label: 'Medium',
        value: 'is-medium'
      }, {
        label: 'Large',
        value: 'is-large'
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          option: option
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'has-background-black',
        label: 'Black'
      }, {
        value: 'has-background-grey-lighter',
        label: 'Light Gray'
      }, {
        value: 'has-background-black-ter',
        label: 'Dark Gray'
      }],
      onChange: function onChange(bgColor) {
        props.setAttributes({
          bgColor: bgColor
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-section".concat(props.isSelected || hasSelectedInnerBlock(props) ? ' bulma-blocks-editor-hero--selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasChildBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },

  /**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Frontend HTML.
  */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero ".concat(props.attributes.selectedOption === 'sm' ? '' : "".concat(props.attributes.option), " ").concat(props.attributes.bgColor !== '' ? props.attributes.bgColor : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'hero-body'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
});

function hasSelectedInnerBlock(props) {
  var select = wp.data.select('core/block-editor');
  var selected = select.getBlockSelectionStart();
  var inner = select.getBlock(props.clientId).innerBlocks;

  for (var i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/bulma-icon/block.js":
/*!*********************************!*\
  !*** ./src/bulma-icon/block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss'
// import './style.scss'
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    TextControl = _wp$components.TextControl;
var InspectorControls = wp.blockEditor.InspectorControls;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/icon', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Icon'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "icons",
    className: "svg-inline--fa fa-icons fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Component.
  */
  attributes: {
    icon: {
      type: 'string'
    },
    container: {
      type: 'string'
    },
    faClass: {
      type: 'string'
    },
    link: {
      type: 'string'
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Add a Font Awesome Icon.'),
  edit: function edit(props) {
    if (!props.attributes.container) {
      props.setAttributes({
        container: 'sm'
      });
    }

    if (!props.attributes.icon) {
      props.setAttributes({
        icon: 'sm'
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Icon Container Size",
      help: "Select the size of the icon container.",
      selected: props.attributes.container,
      options: [{
        label: 'Small 16px',
        value: 'is-small'
      }, {
        label: 'Regular 24px',
        value: 'sm'
      }, {
        label: 'Medium 32px',
        value: 'is-medium'
      }, {
        label: 'Large 48px',
        value: 'is-large'
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          container: option
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Icon Size",
      help: "Select the size of the icon.",
      selected: props.attributes.icon,
      options: [{
        label: 'Small 16px',
        value: 'sm'
      }, {
        label: 'Regular 24px',
        value: 'fa-lg'
      }, {
        label: 'Medium 32px',
        value: 'fa-2x'
      }, {
        label: 'Large 48px',
        value: 'fa-3x'
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          icon: option
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "editor-extra-note"
    }, "Note: The chosen icon size should not be larger than the chosen container size."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Font Awesome Icon Name",
      value: props.attributes.faClass,
      onChange: function onChange(className) {
        return props.setAttributes({
          faClass: className
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Link (Optional)",
      value: props.attributes.link,
      onChange: function onChange(link) {
        return props.setAttributes({
          link: link
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-".concat(props.attributes.faClass !== '' ? 'icon' : 'text')
    }, props.attributes.faClass !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "icon".concat(props.attributes.container === 'sm' ? '' : " ".concat(props.attributes.container))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      className: "fas".concat(props.attributes.icon === 'sm' ? '' : " ".concat(props.attributes.icon), " fa-").concat(props.attributes.faClass),
      "aria-hidden": "true"
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Select your icon settings in the side panel!"))];
  },

  /**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Frontend HTML.
  */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "icon".concat(props.attributes.container === 'sm' ? '' : " ".concat(props.attributes.container))
    }, props.attributes.link === '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      className: "fas".concat(props.attributes.icon === 'sm' ? '' : " ".concat(props.attributes.icon), " fa-").concat(props.attributes.faClass),
      "aria-hidden": "true"
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.link
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      className: "fas".concat(props.attributes.icon === 'sm' ? '' : " ".concat(props.attributes.icon), " fa-").concat(props.attributes.faClass),
      "aria-hidden": "true"
    })));
  }
}); // function hasSelectedInnerBlock( props ) {
//   const select = wp.data.select( 'core/block-editor' )
//   const selected = select.getBlockSelectionStart()
//   const inner = select.getBlock( props.clientId ).innerBlocks
//   for ( let i = 0; i < inner.length; i++ ) {
//     if (
//       inner[ i ].clientId === selected ||
// 			( inner[ i ].innerBlocks.length && hasSelectedInnerBlock( inner[ i ] ) )
//     ) {
//       return true
//     }
//   }
//   return false
// }

/***/ }),

/***/ "./src/bulma-image/block.js":
/*!**********************************!*\
  !*** ./src/bulma-image/block.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss';
// import './style.scss';
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    MediaUpload = _wp$blockEditor.MediaUpload;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/image', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Image'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "file-image",
    className: "svg-inline--fa fa-file-image fa-w-12",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  attributes: {
    size: {
      type: 'string'
    },
    imgUrl: {
      type: 'string'
    },
    imgW: {
      type: 'number'
    },
    imgH: {
      type: 'number'
    },
    altText: {
      type: 'string'
    },
    caption: {
      type: 'string'
    },
    captionCredit: {
      type: 'string'
    },
    align: {
      type: 'string'
    },
    fullWidthMo: {
      type: 'boolean',
      default: false
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Add an image that uses a container with a specific aspect ratio to preserve space in order to avoid the content from shifting while the page is loading.'),
  edit: function edit(props) {
    var setChecked = function setChecked() {
      if (props.attributes.fullWidthMo) {
        props.setAttributes({
          fullWidthMo: false
        });
      } else {
        props.setAttributes({
          fullWidthMo: true
        });
      }
    };

    if (!props.attributes.size) {
      props.setAttributes({
        size: ''
      });
    }

    if (!props.attributes.align) {
      props.setAttributes({
        align: ''
      });
    }

    if (!props.attributes.imgUrl) {
      props.setAttributes({
        imgUrl: ''
      });
    }

    if (!props.attributes.imgW) {
      props.setAttributes({
        imgW: ''
      });
    }

    if (!props.attributes.imgH) {
      props.setAttributes({
        imgH: ''
      });
    }

    if (!props.attributes.altText) {
      props.setAttributes({
        altText: ''
      });
    }

    if (!props.attributes.caption) {
      props.setAttributes({
        caption: ''
      });
    }

    if (!props.attributes.captionCredit) {
      props.setAttributes({
        captionCredit: ''
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Image Aspect Ratio",
      help: "'Auto' will use the original pixel dimensions of the image. Use 'Auto' when adding your image into main content. Picking an aspect ratio will make the image fill it's container.",
      value: props.attributes.size,
      options: [{
        label: 'Auto',
        value: ''
      }, {
        label: 'Square (1:1)',
        value: 'is-square'
      }, {
        label: '5:4',
        value: 'is-5by4'
      }, {
        label: '4:3',
        value: 'is-4by3'
      }, {
        label: '3:2',
        value: 'is-3by2'
      }, {
        label: '5:3',
        value: 'is-5by3'
      }, {
        label: '16:9',
        value: 'is-16by9'
      }, {
        label: '2:1',
        value: 'is-2by1'
      }, {
        label: '3:1',
        value: 'is-3by1'
      }, {
        label: '4:5',
        value: 'is-4by5'
      }, {
        label: '3:4',
        value: 'is-3by4'
      }, {
        label: '2:3',
        value: 'is-2by3'
      }, {
        label: '3:5',
        value: 'is-3by5'
      }, {
        label: '9:16',
        value: 'is-9by16'
      }, {
        label: '1:2',
        value: 'is-1by2'
      }, {
        label: '1:3',
        value: 'is-1by3'
      }],
      onChange: function onChange(size) {
        props.setAttributes({
          size: size
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Alignment",
      help: "Choose how the image should be aligned. Left and right will have text wrap.",
      value: props.attributes.align,
      options: [{
        label: 'Full',
        value: ''
      }, {
        label: 'Center',
        value: 'center'
      }, {
        label: 'Left',
        value: 'left'
      }, {
        label: 'Right',
        value: 'right'
      }],
      onChange: function onChange(align) {
        props.setAttributes({
          align: align
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Full Width on Mobile?",
      help: "Should the image stretch the full width of the page on mobile screen size (767px and lower screen width).",
      checked: props.attributes.fullWidthMo,
      onChange: setChecked
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, "Set the width and height of the image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      id: "imgWidth",
      label: "Width",
      type: "number",
      value: props.attributes.imgW,
      onChange: function onChange(imgW) {
        return props.setAttributes({
          imgW: imgW
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      id: "imgHeight",
      label: "Height",
      type: "number",
      value: props.attributes.imgH,
      onChange: function onChange(imgH) {
        return props.setAttributes({
          imgH: imgH
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
      label: "Alt Text",
      value: props.attributes.altText,
      onChange: function onChange(altText) {
        return props.setAttributes({
          altText: altText
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
      label: "Image Caption",
      value: props.attributes.caption,
      onChange: function onChange(caption) {
        return props.setAttributes({
          caption: caption
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Caption - Photo Credit",
      value: props.attributes.captionCredit,
      onChange: function onChange(captionCredit) {
        return props.setAttributes({
          captionCredit: captionCredit
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'bulma-blocks-editor-image'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(img) {
        props.setAttributes({
          imgUrl: img.url,
          imgW: props.attributes.imgW !== '' ? props.attributes.imgW : img.width,
          imgH: props.attributes.imgH !== '' ? props.attributes.imgH : img.height,
          altText: props.attributes.altText !== '' ? props.attributes.altText : img.alt
        });
      },
      render: function render(_ref) {
        var open = _ref.open;
        return props.attributes.imgUrl !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: 'bulma-blocks-editor-image__preview'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
          className: "image ".concat(props.attributes.size)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          alt: props.attributes.altText,
          src: props.attributes.imgUrl
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: 'bulma-blocks-editor-site-hero__button',
          onClick: open
        }, "Select a New Image")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: 'bulma-blocks-editor-image__container'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
          className: 'bulma-blocks-editor-image__heading'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
          className: "dashicons dashicons-format-image"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Upload Image")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
          className: 'bulma-blocks-editor-image__description'
        }, "Pick an image from the media library."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: 'bulma-blocks-editor-image__button',
          onClick: open
        }, "Open Media Library"));
      }
    })))];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: function save(props) {
    var returned = props.attributes.size !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "image ".concat(props.attributes.size, " ").concat(props.attributes.align === '' ? 'full' : '', " ").concat(props.attributes.fullWidthMo ? 'full-width-mo' : ''),
      style: props.attributes.caption === '' ? {
        marginBottom: '3rem !important'
      } : {}
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      alt: props.attributes.altText,
      src: props.attributes.imgUrl,
      className: props.attributes.fullWidthMo ? 'full-width-mo' : ''
    })), props.attributes.align !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'clearfix'
    }) : '', props.attributes.caption !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'bulma-blocks-image__caption'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, props.attributes.caption, props.attributes.captionCredit !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, props.attributes.captionCredit) : '')) : '') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "image ".concat(props.attributes.size, " ").concat(props.attributes.align, " ").concat(props.attributes.align === '' ? 'full' : '', " ").concat(props.attributes.fullWidthMo ? 'full-width-mo' : ''),
      style: props.attributes.align !== '' ? {
        marginBottom: '0.5rem !important'
      } : {
        marginBottom: '3rem !important'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      alt: props.attributes.altText,
      src: props.attributes.imgUrl,
      style: props.attributes.align !== '' ? props.attributes.imgH ? {
        maxWidth: "".concat(props.attributes.imgW, "px"),
        maxHeight: "".concat(props.attributes.imgH, "px")
      } : {
        maxWidth: "".concat(props.attributes.imgW, "px")
      } : {},
      className: props.attributes.fullWidthMo ? 'full-width-mo' : ''
    }), props.attributes.caption !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'bulma-blocks-image__caption',
      style: props.attributes.align !== '' && props.attributes.imgW ? {
        maxWidth: "".concat(props.attributes.imgW, "px")
      } : {}
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, props.attributes.caption, props.attributes.captionCredit !== '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, props.attributes.captionCredit) : '')) : '');
    return returned;
  }
});

/***/ }),

/***/ "./src/bulma-section/block.js":
/*!************************************!*\
  !*** ./src/bulma-section/block.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss'
// import './style.scss'
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('bulma-blocks/section', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Bulma - Section'),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "list-alt",
    className: "svg-inline--fa fa-list-alt fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'bulma-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Component.
  */
  attributes: {
    option: {
      type: 'string'
    },
    bgColor: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __('Add a Section layout element that can contain any content.'),
  edit: function edit(props) {
    if (!props.attributes.option) {
      props.setAttributes({
        option: 'sm'
      });
    }

    var select = wp.data.select('core/block-editor');
    var innerBlocks = select.getBlock(props.clientId).innerBlocks;
    var hasChildBlocks = innerBlocks.length > 0;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Padding Size",
      help: "Select the amount of spacing around the edges of the section.",
      selected: props.attributes.option,
      options: [{
        label: 'Small',
        value: 'sm'
      }, {
        label: 'Medium',
        value: 'is-medium'
      }, {
        label: 'Large',
        value: 'is-large'
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          option: option
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'has-background-black',
        label: 'Black'
      }, {
        value: 'has-background-grey-lighter',
        label: 'Light Gray'
      }, {
        value: 'has-background-black-ter',
        label: 'Dark Gray'
      }, {
        value: 'has-background-boiler-gold',
        label: 'Boilermaker Gold'
      }],
      onChange: function onChange(bgColor) {
        props.setAttributes({
          bgColor: bgColor
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-section".concat(props.isSelected || hasSelectedInnerBlock(props) ? ' bulma-blocks-editor-section--selected' : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: hasChildBlocks ? undefined : function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))];
  },

  /**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  *
  * @param {Object} props Props.
  * @returns {Mixed} JSX Frontend HTML.
  */
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "section ".concat(props.attributes.selectedOption === 'sm' ? '' : "".concat(props.attributes.option), "  ").concat(props.attributes.bgColor !== '' ? props.attributes.bgColor : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

function hasSelectedInnerBlock(props) {
  var select = wp.data.select('core/block-editor');
  var selected = select.getBlockSelectionStart();
  var inner = select.getBlock(props.clientId).innerBlocks;

  for (var i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/link-card/block.js":
/*!********************************!*\
  !*** ./src/link-card/block.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable react/jsx-key */

/* eslint-disable no-nested-ternary */

/**
 * BLOCK: Bulma Container
 *
 * Bulma container block: https://bulma.io/documentation/layout/container/.
 */
//  Import CSS.
// import './editor.scss';
// import './style.scss';
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    CheckboxControl = _wp$components.CheckboxControl,
    TextareaControl = _wp$components.TextareaControl,
    Button = _wp$components.Button,
    RadioControl = _wp$components.RadioControl,
    TextControl = _wp$components.TextControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    MediaUpload = _wp$blockEditor.MediaUpload;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("bulma-blocks/link-card", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Link Card"),
  // Block title.
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "external-link-square-alt",
    className: "svg-inline--fa fa-external-link-square-alt fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#00c4a7",
    d: "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"
  })),
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "bulma-blocks",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  attributes: {
    layout: {
      type: "string",
      default: "horizontal"
    },
    subText: {
      type: "string",
      default: ""
    },
    link: {
      type: "string",
      default: ""
    },
    linkText: {
      type: "string",
      default: ""
    },
    imgUrl: {
      type: "string",
      default: ""
    },
    altText: {
      type: "string",
      default: ""
    },
    external: {
      type: "boolean",
      default: false
    },
    optionalLink: {
      type: "boolean",
      default: false
    },
    squareTitle: {
      type: "string",
      default: ""
    },
    squareSubText: {
      type: "string",
      default: ""
    },
    verticalContent: {
      type: "string",
      default: ""
    },
    height: {
      type: "string",
      default: "100"
    }
  },
  supports: {
    className: false
  },
  // Block description in side panel
  description: __("Create a card that serves as a link with an image and text."),
  edit: function edit(props) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Layout of the card",
      help: "Horizontal: image on the left and text on the right; Vertical: image on the top and text on the bottom.",
      selected: props.attributes.layout,
      options: [{
        label: "Horizontal",
        value: "horizontal"
      }, {
        label: "Vertical",
        value: "vertical"
      }, {
        label: "Square",
        value: "square"
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          layout: option
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Height of the card",
      help: "100%: the height of the link card will be 100% height of its parent container; Auto: the height of the link card will depend upon the height of its children.",
      selected: props.attributes.height,
      options: [{
        label: "100%",
        value: "100"
      }, {
        label: "Auto",
        value: "auto"
      }],
      onChange: function onChange(option) {
        props.setAttributes({
          height: option
        });
      }
    })), props.attributes.layout === "square" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Add a link to this card?",
      checked: props.attributes.optionalLink,
      onChange: function onChange() {
        return props.setAttributes({
          optionalLink: !props.attributes.optionalLink
        });
      }
    })) : "", props.attributes.optionalLink ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      id: "linkAddress",
      label: "Link Address",
      type: "string",
      value: props.attributes.link,
      onChange: function onChange(link) {
        return props.setAttributes({
          link: link
        });
      }
    })) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
      label: "Image Alt Text",
      value: props.attributes.altText,
      onChange: function onChange(altText) {
        return props.setAttributes({
          altText: altText
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Open link in new tab?",
      checked: props.attributes.external,
      onChange: function onChange() {
        return props.setAttributes({
          external: !props.attributes.external
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bulma-blocks-editor-link-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Choose an image."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(img) {
        props.setAttributes({
          imgUrl: img.url,
          altText: props.attributes.altText !== "" ? props.attributes.altText : img.alt
        });
      },
      render: function render(_ref) {
        var open = _ref.open;
        return props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "bulma-blocks-editor-link-card__preview"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
          className: "image"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          alt: props.attributes.altText,
          src: props.attributes.imgUrl
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "bulma-blocks-editor-link-card__button",
          onClick: open
        }, "Select a New Image")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "bulma-blocks-editor-link-card__container"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
          className: "bulma-blocks-editor-link-card__description"
        }, "Pick an image from the media library."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "bulma-blocks-editor-link-card__button",
          onClick: open
        }, "Open Media Library"));
      }
    }))), props.attributes.layout !== "square" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Add Link Card text."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "footnote"
    }, "*32 character limit"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: props.attributes.subText !== "" ? props.attributes.subText : "",
      className: "input",
      type: "text",
      placeholder: "Card text...",
      onChange: function onChange(e) {
        props.setAttributes({
          subText: e.target.value
        });
      }
    })))), props.attributes.layout === "vertical" && props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Add Link Card subtext."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
      value: props.attributes.verticalContent !== "" ? props.attributes.verticalContent : "",
      className: "textarea",
      type: "text",
      placeholder: "Subtext text...",
      onChange: function onChange(e) {
        props.setAttributes({
          verticalContent: e.target.value
        });
      }
    })))) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Add the link address", props.attributes.layout === "horizontal" ? " and link text" : "", "."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: props.attributes.link !== "" ? props.attributes.link : "",
      className: "input",
      type: "text",
      placeholder: "Paste permalink or url...",
      onChange: function onChange(e) {
        props.setAttributes({
          link: e.target.value
        });
      }
    }))), props.attributes.layout === "horizontal" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: props.attributes.linkText !== "" ? props.attributes.linkText : "",
      className: "input",
      type: "text",
      placeholder: "Link text...",
      onChange: function onChange(e) {
        props.setAttributes({
          linkText: e.target.value
        });
      }
    }))) : "")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Add card title."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: props.attributes.squareTitle !== "" ? props.attributes.squareTitle : "",
      className: "input",
      type: "text",
      placeholder: "Card title...",
      onChange: function onChange(e) {
        props.setAttributes({
          squareTitle: e.target.value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Add card subtext."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: props.attributes.squareSubText !== "" ? props.attributes.squareSubText : "",
      className: "input",
      type: "text",
      placeholder: "Card subtext...",
      onChange: function onChange(e) {
        props.setAttributes({
          squareSubText: e.target.value
        });
      }
    })))))];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */
  save: function save(props) {
    var returned = props.attributes.layout === "horizontal" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.link,
      target: props.attributes.external ? "_blank" : "_self",
      className: "card media link-card-horizontal".concat(props.attributes.height === "auto" ? " link-card__height-auto" : ""),
      rel: "noopener noreferrer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media-left"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: props.attributes.imgUrl,
      alt: props.attributes.altText
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "title is-4"
    }, props.attributes.subText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "read-more-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, props.attributes.linkText !== "" ? props.attributes.linkText : "Read More")))) : props.attributes.layout === "vertical" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.link,
      target: props.attributes.external ? "_blank" : "_self",
      className: "card media link-card".concat(props.attributes.height === "auto" ? " link-card__height-auto" : ""),
      rel: "noopener noreferrer"
    }, props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image is-2by1 background-image",
      role: "img",
      style: {
        backgroundImage: "url(".concat(props.attributes.imgUrl, ")")
      },
      "aria-label": props.attributes.altText
    }) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media-content".concat(props.attributes.verticalContent ? " media-content__vertical-top" : "")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "title is-4"
    }, props.attributes.subText), props.attributes.verticalContent !== "" && props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "vertical-subtext"
    }, props.attributes.verticalContent) : "")) : props.attributes.optionalLink ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.link,
      target: props.attributes.external ? "_blank" : "_self",
      className: "card media link-card link-card--square".concat(props.attributes.height === "auto" ? " link-card__height-auto" : ""),
      rel: "noopener noreferrer"
    }, props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image is-square background-image",
      role: "img",
      style: {
        backgroundImage: "url(".concat(props.attributes.imgUrl, ")")
      },
      "aria-label": props.attributes.altText
    }) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media-content".concat(props.attributes.squareSubText ? "" : " media-content__vertical-center")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "title is-4"
    }, props.attributes.squareTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, props.attributes.squareSubText))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card media link-card link-card--square".concat(props.attributes.height === "auto" ? " link-card__height-auto" : "")
    }, props.attributes.imgUrl !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image is-square background-image",
      role: "img",
      style: {
        backgroundImage: "url(".concat(props.attributes.imgUrl, ")")
      },
      "aria-label": props.attributes.altText
    }) : "", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "media-content".concat(props.attributes.squareSubText ? "" : "media-content__vertical-center")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "title is-4"
    }, props.attributes.squareTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, props.attributes.squareSubText)));
    return returned;
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });