(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend-bootstrap/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend":
/*!****************************!*\
  !*** external "./backend" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./backend");

/***/ }),

/***/ "./src/backend-bootstrap/decorateHandlerWithMiddleware.ts":
/*!****************************************************************!*\
  !*** ./src/backend-bootstrap/decorateHandlerWithMiddleware.ts ***!
  \****************************************************************/
/*! exports provided: decorateHandlerWithMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorateHandlerWithMiddleware", function() { return decorateHandlerWithMiddleware; });
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-session */ "cookie-session");
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleError */ "./src/backend-bootstrap/handleError.ts");



// This should be false in the Firebase emulator but true in production.
const isFirebaseFunction = !!process.env.FIREBASE_CONFIG;
/**
 * Wraps the provided request handler in an Express app to attach middlewares
 * (session-cookie, etc).
 *
 * @param handler
 * Request handler to call.
 *
 * @param apiHandler
 * Whether or not to attach the `/api` route to the Express server. This is used
 * during development because the wrapping Express app contains both the Next.js
 * and api routes.
 */
function decorateHandlerWithMiddleware(handler, apiHandler) {
    let expressApp = null;
    return wrappedHandler;
    function wrappedHandler(req, res) {
        getExpressApp()(req, res);
    }
    function getExpressApp() {
        if (expressApp)
            return expressApp;
        expressApp = express__WEBPACK_IMPORTED_MODULE_1___default()();
        // Api request handling:
        if (apiHandler)
            expressApp.all("/api/*", apiHandler);
        // Session handling:
        expressApp.use(cookieCacheControlMiddleware);
        expressApp.use(createCookieSessionMiddleware());
        // Handle path url missing slash in Firebase emulator:
        expressApp.use(urlSlashFixMiddleware);
        // Next.js rendering or page function handler:
        expressApp.get("*", handlerWithPromiseHandler);
        return expressApp;
    }
    // Next.js returns a promise from its web request handler.
    function handlerWithPromiseHandler(req, res) {
        const result = handler(req, res);
        if (result instanceof Promise) {
            result.catch(_handleError__WEBPACK_IMPORTED_MODULE_2__["handleError"]);
        }
    }
}
/**
 * Set the cache header, otherwise the cookie is discarded.
 * https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
 */
function cookieCacheControlMiddleware(_req, res, next) {
    res.setHeader("Cache-Control", "private");
    next();
}
/**
 * The root url during Firebase requests may be passed as `""` instead of `"/"`.
 * Add the lash so routing works properly in Express.
 */
function urlSlashFixMiddleware(req, _res, next) {
    if (req.url === "")
        req.url = "/";
    next();
}
function createCookieSessionMiddleware() {
    const cookieSessionMiddleware = cookie_session__WEBPACK_IMPORTED_MODULE_0___default()({
        // This is the only cookie name supported by Firebase.
        // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
        name: "__session",
        maxAge: 1209600000,
        // TODO: Enable this once there is a mechanism for detecting whether or not
        // the cloud function is executing on the staging or production Firebase
        // project.
        // domain: isFirebaseFunction ? "joinuniform.com" : undefined,
        secure: isFirebaseFunction,
        httpOnly: true,
        // Firebase only supports a single cookie so an encrypted JWT will be used
        // for data encoding.
        signed: false,
        overwrite: true,
    });
    return cookieSessionMiddleware;
}


/***/ }),

/***/ "./src/backend-bootstrap/handleError.ts":
/*!**********************************************!*\
  !*** ./src/backend-bootstrap/handleError.ts ***!
  \**********************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
function handleError(err) {
    if (err) {
        /* tslint:disable-next-line:no-console */
        console.error(err);
        process.exit(1);
    }
}


/***/ }),

/***/ "./src/backend-bootstrap/index.ts":
/*!****************************************!*\
  !*** ./src/backend-bootstrap/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file's role is to wire up the http request handlers for both the Nest.js
 * api (backend) and the Next.js server side rendering (frontend).
 *
 * During development, the server listens on a port and serves all routes using
 * a single Express app. The Webpack watch process will execute the server
 * automatically.
 *
 * In production, this module exports the functions for each serverless route.
 * It wraps each route handler in its own Express app to provide middleware.
 */
/* tslint:disable:no-var-requires */
// Suppress TypeScript error:
// `Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)`
/* tslint:disable:no-empty */
// @ts-ignore
if (true) {
}
/* tslint:enable:no-empty */
// Backend api bundle is imported from location relative to final location in
// "dist" folder. Webpack is configured to not bundle this file or the Next.js
// pages.
const { handleApiRequest, } = __webpack_require__(/*! ./backend */ "./backend");
if (false) {}
if (true) {
    const startDevelopmentServer = __webpack_require__(/*! ./main.development */ "./src/backend-bootstrap/main.development.ts")
        .startDevelopmentServer;
    startDevelopmentServer(handleApiRequest);
}


/***/ }),

/***/ "./src/backend-bootstrap/main.development.ts":
/*!***************************************************!*\
  !*** ./src/backend-bootstrap/main.development.ts ***!
  \***************************************************/
/*! exports provided: startDevelopmentServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDevelopmentServer", function() { return startDevelopmentServer; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _decorateHandlerWithMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorateHandlerWithMiddleware */ "./src/backend-bootstrap/decorateHandlerWithMiddleware.ts");
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleError */ "./src/backend-bootstrap/handleError.ts");





function startDevelopmentServer(apiHandler) {
    const nextJsApp = next__WEBPACK_IMPORTED_MODULE_1___default()({
        dev: true,
        // Path relative to the "dist" directory:
        dir: path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, "../src/frontend"),
    });
    const nextJsHandler = Object(_decorateHandlerWithMiddleware__WEBPACK_IMPORTED_MODULE_3__["decorateHandlerWithMiddleware"])(nextJsApp.getRequestHandler(), apiHandler);
    const nextJsPreparationStatus = nextJsApp.prepare();
    Object(http__WEBPACK_IMPORTED_MODULE_0__["createServer"])(handleRequest).listen(3000, _handleError__WEBPACK_IMPORTED_MODULE_4__["handleError"]);
    function handleRequest(req, res) {
        nextJsPreparationStatus
            .then(() => {
            nextJsHandler(req, res);
        })
            .catch(_handleError__WEBPACK_IMPORTED_MODULE_4__["handleError"]);
    }
}


/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));