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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/app.module.ts":
/*!***********************************!*\
  !*** ./src/backend/app.module.ts ***!
  \***********************************/
/*! exports provided: ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationModule", function() { return ApplicationModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/backend/config/index.ts");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./src/backend/database/index.ts");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing */ "./src/backend/landing/index.ts");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource */ "./src/backend/resource/index.ts");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security */ "./src/backend/security/index.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/backend/user/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        imports: [
            _config__WEBPACK_IMPORTED_MODULE_1__["ConfigModule"],
            _database__WEBPACK_IMPORTED_MODULE_2__["DatabaseModule"],
            _landing__WEBPACK_IMPORTED_MODULE_3__["LandingModule"],
            _security__WEBPACK_IMPORTED_MODULE_5__["SecurityModule"],
            _user__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
            _resource__WEBPACK_IMPORTED_MODULE_4__["ResourceModule"].forRoot({
                isUserResource: false,
                resourceName: "test-static",
            }),
        ],
    })
], ApplicationModule);



/***/ }),

/***/ "./src/backend/config/ConfigModule.ts":
/*!********************************************!*\
  !*** ./src/backend/config/ConfigModule.ts ***!
  \********************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigService */ "./src/backend/config/ConfigService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Exposes the server configuration which was loaded from environment variables.
 */
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        providers: [_ConfigService__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]],
        exports: [_ConfigService__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]],
    })
], ConfigModule);



/***/ }),

/***/ "./src/backend/config/ConfigService.ts":
/*!*********************************************!*\
  !*** ./src/backend/config/ConfigService.ts ***!
  \*********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isStaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isStaging */ "./src/backend/config/isStaging.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ConfigService = class ConfigService {
    /**
     * Returns the server and application configuration. The values returned
     * contain sensitive server information and should not be exposed directly.
     */
    getServerConfig() {
        return {
            // spell-checker:disable
            recaptcha: {
                secret_key: "6LfE44wUAAAAACXTTT_FhLXDoRk4sZxbF3tPqLal",
            },
            session: {
                expire_milliseconds: 1209600000,
                key: "Nus9NV50s5Am",
            },
            serviceAccount: _isStaging__WEBPACK_IMPORTED_MODULE_1__["isStaging"]
                ? {
                    type: "service_account",
                    project_id: "joinuniformindia-test",
                    private_key_id: "386f4954025e3418e0f1a80e8ac615d9e9b17fbd",
                    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCiKeghOxO15wpR\nzhuQzZUXSXOnb1Q0fZECXqR96tyvOiCHbmiw4D/j75RCxX93MjWD7dPSaiQTsSRG\nvR3xE41MIlFLcjz6+Kt8XjF5Hdu4Wv3ePrUi0Ouzq3MyKWco9TJc+RZAsIu7fWf2\n0eqXY6GxcLfZ08oNtWcoRk7tt10stdCCIv1kVRXVQ2wtq34Ipu4Sg2hRv9zqUlEF\nRsYWmo/0sSCCZ+Fb68T85w8P0LvxQeQr+zEYAcz3+vpM048U4QsI7IRROyqeV1Tr\nUCw29qqGDueBuPeyADhk8ceYe7/Oq54r62KgUC12JLwWIs5MpjuEsa7q3mponELJ\nhYNU5LjtAgMBAAECggEABZ0XKytTekBDJ0ppjuCaN1unrfvYubANGIlnmIpMVTtZ\nMlPPbcWqWiNXI3aY/B3YJDbticLhEj0Kgr5iO0NQTvqzJYr3WT+WSon4nKo8pHJv\nh/i6WYTk9YVkyZXZ7qnwskij86pVs/0nEuOSabPQizpAZKe3WDRXtVlPVMOJU+Mk\n29hC5IiX5RnWiRzHiNikHXLnqGni0kN7XXA2VvJH+XDtP6m4IdIs6igpBdL6v+T/\nVaa+2rDSaSQHvATSwh2MF5SaRYr76AZKlxahfONFWfUn3VCoOJfI83i87e4hC8bP\nrOpA1LS+ptCbT9R4lbnZKhS+EjwmpVMFCB7Har19CwKBgQDSWBxMna5IQXW3Rr35\njhx2oO00EYbcxo8B1lHpcDUJNhGWH2OGxdk1yM09giVuK3rGELxWVZmjZ2WEV6ZL\nPpKrLhGYTVV9vdLhOHOS1SsI1EZANQnOJFufecFZO08FJhWnO1dAOvnZ/2wNK+ow\ncGy8G2PpUE3coVj2+DMcKZxBLwKBgQDFXJ8N2NIEfGWVyVEglwB6nZp1GQ/vI/Fv\nX9dhGy7/7qXTsFPITqe9tmZk4QYWJTlMDKKPLNQ02l2BmOasxh/Q2YY1BH0rLYUG\nmJQ0JrSv1ID8gh9vGilwWKrw+tP+lml/8nLUgcxWvZy38B/nLDaNvRv4P7b3enTk\n793QBI5IowKBgB1BSfZR+/pquE+cVDHQVR8etL8ILQSpzRwJTe00wPud/IYvqW0G\nOXakjf8fCcuv2myPyVIMp8i1ScZFVoiilE2go6vWHazWaO0QJ+rlIQ4iT/8AIXP9\nVIzypzSc7hmeOWa/9xuk2Dk8sC+IyxKfoE/tU1EQ7TNhcXkv/hPNqcDbAoGAaR+4\nqMuAslsAURR2XgGQg79G8nBzCFIA2+4U7uhn1HLtaSBWwC8FMgvh5oHlmA4jwtpI\nDDM4pR5bCBjFZenyMHBtB/hoI4OPg7/p0Q182Ns8CUPWMnug7vKLuugf20+Kylf9\nyiuJB/rfaypAFAZ82GqOZ2CouJFFilwprg9/KjkCfwgopmmPd9H/8fZ1WSqoa5gl\nOfAd6GwNsEhxe5W4HmJH3qm5ZxFTJF8pM/WuWIOcZxnVrI80W6fsLCi0T+KwAv8t\njgiOE3cJMXLfTLO4CW+BsmuR5UstO1AsdhsMgNQXJwqfxaj8FTekrs71m888sYza\nDL5sFmyZXwqDivaY5yM=\n-----END PRIVATE KEY-----\n",
                    client_email: "firebase-adminsdk-b4wzs@joinuniformindia-test.iam.gserviceaccount.com",
                    client_id: "107975582017726878691",
                    auth_uri: "https://accounts.google.com/o/oauth2/auth",
                    token_uri: "https://oauth2.googleapis.com/token",
                    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b4wzs%40joinuniformindia-test.iam.gserviceaccount.com",
                }
                : {
                    type: "service_account",
                    project_id: "joinuniformindia",
                    private_key_id: "4ac45679b20b6a61f33605b41783b77c0ae3cd6a",
                    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAaet3TEGhzawk\n9hyRxG/e0GHGgO7NS6tXNBeHBF1M8yFeFxVrn9mmT83t2v6wzTh83UNyv1Rgtu6m\nod3Ew5kKRFn4NgFOgtu9SRMgvqnz+yq+/+8knHtm1T2ZengUOHvnJhd3HCwZWwRP\nWMpgUOoBw8RI3BuOm/98RfgxFWvxja6Gz+m6GrvzhQpa8T9eq/FV2SF4nx9NVPnz\nlohoqJzNAwojuXav1vUYO53n5N45V1Po3daZVC8xwsm4VaJkAfIXimz4TJLr1sTH\nZe7Ok/oT1oqoaNS8awV/B6OfLLcUexNY/HzDrvpSmjNMbWjGPwlRMU09u9drqkkJ\nmdmLrSOrAgMBAAECggEAVyxFqSVLwN4ZBR/ZfrL0Cgr3mULVrf3/0QDBPgLcsF2g\neuvTYRCpP199iSsD457+XheylJyZQj3urmC8RAZn4g5ognsZKXRA0Kd4OogXIHnk\n+maidkBM6iBnCY9CMssKW4VW8Tg6xHwHXll4Sp2t/wGt/mJ2O6xyWd+rW7V8U5FX\naXl84XyytvBDgU5HvWwg8vwU9H6QvzNqKTfSDbb3ir4Wj0o3of0Q7w0WRlCFMpxt\nULfuHgcCQ7z1FFCFUwvQbbgA4ypV0u8xAedHSNGgGtN1Ufglr04zzkXC1vBM5qDh\nBA/ORJMe09bkBea+PNWSsS390K0wfnNiQg7k8eBzLQKBgQDf+L4DwGAo/jzKHg8q\niAkSLsXxSb8Jht8d2/PUAphOS0D8xwlghgmhcUwHqBEuUiRqmY1XOke4eUr1s2I2\n+rJIL39CLmu7yDT/b1irYWPWXRXE+7Q/HxdXioMxrCF41iIKwAY4QJ5r7pNxb7by\nMrs/hmmD3cQ067P56TG1uT+qhwKBgQDb7eQuc8SmxBgLu8vkbbC+3vOh2by8svgO\nsHpUcJu0c5hjWsaSyt9GLMZjYWGURvDVQPlUoMts7rc8ZjF0IccQzRDkJ956YaU+\n/I+0NcMnYO71fRCZ8pCdUJ3we+zvE7Woj9meQmV3avKuoNbdCy5dl646DMuSEcYq\nl2SyBstSvQKBgF81KvkHRxlF8ettWb8Xstty3JwUYEwZdDEKNh0yuTHXFZoeteK9\nN8zUD6DVlfAd5PMXsRiaYrCNhwrpJV//s9exsSQd/ZgGpFjNKWE49irCySVCZj3K\n5q5E6D4uUNBAHpp5RGuXNIDnGvBGr/tHC4gWiDYRCH4CkDA1K/d29xRzAoGAVoXN\nqnTDHfSxnRQhz9lTmpPt93PI69fg/S5ywfuXVjPP9O6GhsOneV0uI3TxRbtvDgbE\n0IV94no7vlhaBl0viq2SgqAox67YquIDyxsHjtt0x0GPoXErcaiAqlamzRvM8Oa+\n76MhdgyuMwN15Hp8oDeHRLE5+VpiwujSpbNElGUCgYBh20vnCZqzIpv+ZRxrP46F\nub0pJ4eibcv27ZGUQAaB5mrwsqcvMUuIvNaGd/D0yLYaIKEYzqJdw36DzLus5S9P\no4d3eV64Z8YifzaP0NVobd8SLg7EkHzY+j9T1ZR4J3R1bELp26Yhgps/Ov+hYtph\n0Y1P6ZkTEKe0J9m2hTCRwQ==\n-----END PRIVATE KEY-----\n",
                    client_email: "firebase-adminsdk-a5g58@joinuniformindia.iam.gserviceaccount.com",
                    client_id: "105098343987528636412",
                    auth_uri: "https://accounts.google.com/o/oauth2/auth",
                    token_uri: "https://oauth2.googleapis.com/token",
                    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a5g58%40joinuniformindia.iam.gserviceaccount.com",
                },
            databaseURL: _isStaging__WEBPACK_IMPORTED_MODULE_1__["isStaging"]
                ? "https://joinuniformindia-test.firebaseio.com"
                : "https://joinuniformindia.firebaseio.com",
        };
    }
};
ConfigService = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], ConfigService);



/***/ }),

/***/ "./src/backend/config/index.ts":
/*!*************************************!*\
  !*** ./src/backend/config/index.ts ***!
  \*************************************/
/*! exports provided: ConfigModule, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigModule */ "./src/backend/config/ConfigModule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return _ConfigModule__WEBPACK_IMPORTED_MODULE_0__["ConfigModule"]; });

/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigService */ "./src/backend/config/ConfigService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _ConfigService__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]; });





/***/ }),

/***/ "./src/backend/config/isStaging.ts":
/*!*****************************************!*\
  !*** ./src/backend/config/isStaging.ts ***!
  \*****************************************/
/*! exports provided: isStaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStaging", function() { return isStaging; });
// TODO: Add method to determine if we're running against staging or production
// account/servers.
/**
 * Whether or not server is running in staging or production environment.
 */
const isStaging = true;


/***/ }),

/***/ "./src/backend/database/DatabaseModule.ts":
/*!************************************************!*\
  !*** ./src/backend/database/DatabaseModule.ts ***!
  \************************************************/
/*! exports provided: DatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return DatabaseModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/backend/config/index.ts");
/* harmony import */ var _DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatabaseService */ "./src/backend/database/DatabaseService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Provides access to the Firebase database (Firestore).
 */
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        imports: [_config__WEBPACK_IMPORTED_MODULE_1__["ConfigModule"]],
        providers: [_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]],
        exports: [_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]],
    })
], DatabaseModule);



/***/ }),

/***/ "./src/backend/database/DatabaseService.ts":
/*!*************************************************!*\
  !*** ./src/backend/database/DatabaseService.ts ***!
  \*************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/backend/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Initializes and provides access to Firebase Firestore.
 */
let DatabaseService = class DatabaseService {
    constructor(configService) {
        this.configService = configService;
    }
    onModuleInit() {
        const serviceAccount = this.configService.getServerConfig().serviceAccount;
        const databaseURL = this.configService.getServerConfig().databaseURL;
        firebase_admin__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__["credential"].cert(serviceAccount),
            databaseURL,
        });
        this.db = firebase_admin__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
    }
    /**
     * Returns the initialized Firestore database instance.
     */
    getInstance() {
        return this.db;
    }
};
DatabaseService = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
], DatabaseService);



/***/ }),

/***/ "./src/backend/database/index.ts":
/*!***************************************!*\
  !*** ./src/backend/database/index.ts ***!
  \***************************************/
/*! exports provided: DatabaseModule, DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatabaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatabaseModule */ "./src/backend/database/DatabaseModule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return _DatabaseModule__WEBPACK_IMPORTED_MODULE_0__["DatabaseModule"]; });

/* harmony import */ var _DatabaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatabaseService */ "./src/backend/database/DatabaseService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return _DatabaseService__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]; });





/***/ }),

/***/ "./src/backend/landing/index.ts":
/*!**************************************!*\
  !*** ./src/backend/landing/index.ts ***!
  \**************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.module */ "./src/backend/landing/landing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return _landing_module__WEBPACK_IMPORTED_MODULE_0__["LandingModule"]; });




/***/ }),

/***/ "./src/backend/landing/landing.controller.ts":
/*!***************************************************!*\
  !*** ./src/backend/landing/landing.controller.ts ***!
  \***************************************************/
/*! exports provided: LandingController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingController", function() { return LandingController; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LandingController = class LandingController {
    getLandingPageConfig() {
        return {
            stickyFooterText: {
                en: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
            },
        };
    }
};
__decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Get"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], LandingController.prototype, "getLandingPageConfig", null);
LandingController = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Controller"])("landing")
], LandingController);



/***/ }),

/***/ "./src/backend/landing/landing.module.ts":
/*!***********************************************!*\
  !*** ./src/backend/landing/landing.module.ts ***!
  \***********************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landing_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.controller */ "./src/backend/landing/landing.controller.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let LandingModule = class LandingModule {
};
LandingModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        controllers: [_landing_controller__WEBPACK_IMPORTED_MODULE_1__["LandingController"]],
    })
], LandingModule);



/***/ }),

/***/ "./src/backend/main.ts":
/*!*****************************!*\
  !*** ./src/backend/main.ts ***!
  \*****************************/
/*! exports provided: handleApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleApiRequest", function() { return handleApiRequest; });
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module */ "./src/backend/app.module.ts");






const expressServer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(express__WEBPACK_IMPORTED_MODULE_2___default()()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(expressServer => {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_nestjs_core__WEBPACK_IMPORTED_MODULE_0__["NestFactory"].create(_app_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationModule"], new _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_1__["ExpressAdapter"](expressServer))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(nestApp => nestApp.setGlobalPrefix("/api")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(nestApp => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nestApp.init())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(expressServer)));
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])());
let wasInitialized = false;
function handleApiRequest(req, res) {
    if (!wasInitialized) {
        wasInitialized = true;
        expressServer$.connect();
    }
    expressServer$.subscribe({
        next: expressServer => {
            expressServer(req, res);
        },
        error: error => {
            /* tslint:disable-next-line:no-console */
            console.error({ error });
            throw error;
        },
    });
}


/***/ }),

/***/ "./src/backend/resource/RESOURCE_OPTIONS_PROVIDER.ts":
/*!***********************************************************!*\
  !*** ./src/backend/resource/RESOURCE_OPTIONS_PROVIDER.ts ***!
  \***********************************************************/
/*! exports provided: RESOURCE_OPTIONS_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_OPTIONS_PROVIDER", function() { return RESOURCE_OPTIONS_PROVIDER; });
/**
 * `ResourceOptionsProvider` dependency injection key.
 */
const RESOURCE_OPTIONS_PROVIDER = "RESOURCE_OPTIONS_PROVIDER";


/***/ }),

/***/ "./src/backend/resource/ResourceControllerBase.ts":
/*!********************************************************!*\
  !*** ./src/backend/resource/ResourceControllerBase.ts ***!
  \********************************************************/
/*! exports provided: ResourceControllerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControllerBase", function() { return ResourceControllerBase; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/backend/user/index.ts");
/* harmony import */ var _RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RESOURCE_OPTIONS_PROVIDER */ "./src/backend/resource/RESOURCE_OPTIONS_PROVIDER.ts");
/* harmony import */ var _ResourceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceService */ "./src/backend/resource/ResourceService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Web server controller providing access to a database resource.
 */
let ResourceControllerBase = class ResourceControllerBase {
    constructor(resourceService, options) {
        this.resourceService = resourceService;
        this.options = options;
    }
    getResource(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = null;
            if (this.options.isUserResource) {
                if (userEntity)
                    userId = userEntity.id;
            }
            return this.resourceService.getResource(userId);
        });
    }
};
__decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Get"])(),
    __param(0, Object(_user__WEBPACK_IMPORTED_MODULE_1__["UserFromRequestDecorator"])()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResourceControllerBase.prototype, "getResource", null);
ResourceControllerBase = __decorate([
    __param(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_OPTIONS_PROVIDER"])),
    __metadata("design:paramtypes", [_ResourceService__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], Object])
], ResourceControllerBase);



/***/ }),

/***/ "./src/backend/resource/ResourceModule.ts":
/*!************************************************!*\
  !*** ./src/backend/resource/ResourceModule.ts ***!
  \************************************************/
/*! exports provided: ResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return ResourceModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./src/backend/database/index.ts");
/* harmony import */ var _createResourceProviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createResourceProviders */ "./src/backend/resource/createResourceProviders.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResourceModule_1;



/**
 * Provides a controller for a static public resource or a dynamic user state
 * resource.
 */
let ResourceModule = ResourceModule_1 = class ResourceModule {
    static forRoot(options) {
        const [providers, ResourceController] = Object(_createResourceProviders__WEBPACK_IMPORTED_MODULE_2__["createResourceProviders"])(options);
        return {
            module: ResourceModule_1,
            providers,
            controllers: [ResourceController],
        };
    }
};
ResourceModule = ResourceModule_1 = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        imports: [_database__WEBPACK_IMPORTED_MODULE_1__["DatabaseModule"]],
    })
], ResourceModule);



/***/ }),

/***/ "./src/backend/resource/ResourceService.ts":
/*!*************************************************!*\
  !*** ./src/backend/resource/ResourceService.ts ***!
  \*************************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./src/backend/database/index.ts");
/* harmony import */ var _RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RESOURCE_OPTIONS_PROVIDER */ "./src/backend/resource/RESOURCE_OPTIONS_PROVIDER.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Gets and sets database entities for the specified resource.
 */
let ResourceService = class ResourceService {
    constructor(databaseService, options) {
        this.databaseService = databaseService;
        this.options = options;
    }
    /**
     * Returns the requested resource.
     *
     * @param userId
     * Authenticated user (required if the resource is user restricted).
     */
    getResource(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = this.databaseService.getInstance();
            const collectionReference = db.collection(this.options.resourceName);
            // If the resource is a per-user resource, require an authenticated user.
            if (userId === null && this.options.isUserResource) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["ForbiddenException"]("Resource requires authentication.");
            }
            // Retrieve the entity for the authenticated user or return the public
            // entity.
            let resourceSnapshot;
            if (userId) {
                const resourceQuery = collectionReference.where("userId", "==", userId);
                resourceSnapshot = yield resourceQuery.get();
            }
            else {
                resourceSnapshot = yield collectionReference.get();
            }
            if (resourceSnapshot.empty)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["NotFoundException"]();
            const resourceEntity = resourceSnapshot.docs[0].data();
            const resourceGetResponseDto = {
                version: resourceEntity.version,
                data: resourceEntity.data,
                lastUpdateTime: resourceSnapshot.docs[0].updateTime.toMillis(),
            };
            // Sanity check.
            if (true) {
                const expectedFields = [
                    "version",
                    "data",
                    "lastUpdateTime",
                ];
                expectedFields.forEach(key => {
                    if (resourceGetResponseDto[key] == null) {
                        throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["InternalServerErrorException"](`Entity is missing key: ${key}`);
                    }
                });
            }
            return resourceGetResponseDto;
        });
    }
};
ResourceService = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_OPTIONS_PROVIDER"])),
    __metadata("design:paramtypes", [_database__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], Object])
], ResourceService);



/***/ }),

/***/ "./src/backend/resource/createResourceProviders.ts":
/*!*********************************************************!*\
  !*** ./src/backend/resource/createResourceProviders.ts ***!
  \*********************************************************/
/*! exports provided: createResourceProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceProviders", function() { return createResourceProviders; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESOURCE_OPTIONS_PROVIDER */ "./src/backend/resource/RESOURCE_OPTIONS_PROVIDER.ts");
/* harmony import */ var _ResourceControllerBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceControllerBase */ "./src/backend/resource/ResourceControllerBase.ts");
/* harmony import */ var _ResourceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceService */ "./src/backend/resource/ResourceService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Create the module providers dynamically using the provided `options`.
 */
function createResourceProviders(options) {
    let ResourceController = class ResourceController extends _ResourceControllerBase__WEBPACK_IMPORTED_MODULE_2__["ResourceControllerBase"] {
    };
    ResourceController = __decorate([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Controller"])(options.resourceName)
    ], ResourceController);
    const providers = [
        {
            provide: _RESOURCE_OPTIONS_PROVIDER__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_OPTIONS_PROVIDER"],
            useValue: options,
        },
        {
            provide: _ResourceService__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
            useClass: _ResourceService__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
        },
    ];
    return [providers, ResourceController];
}


/***/ }),

/***/ "./src/backend/resource/index.ts":
/*!***************************************!*\
  !*** ./src/backend/resource/index.ts ***!
  \***************************************/
/*! exports provided: ResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceModule */ "./src/backend/resource/ResourceModule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return _ResourceModule__WEBPACK_IMPORTED_MODULE_0__["ResourceModule"]; });




/***/ }),

/***/ "./src/backend/security/SecurityModule.ts":
/*!************************************************!*\
  !*** ./src/backend/security/SecurityModule.ts ***!
  \************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/backend/config/index.ts");
/* harmony import */ var _SecurityService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecurityService */ "./src/backend/security/SecurityService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Provides services relating to the verification of client side requests. It
 * validates Recaptcha response tokens.
 */
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        imports: [_config__WEBPACK_IMPORTED_MODULE_1__["ConfigModule"]],
        providers: [_SecurityService__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]],
        exports: [_SecurityService__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]],
    })
], SecurityModule);



/***/ }),

/***/ "./src/backend/security/SecurityService.ts":
/*!*************************************************!*\
  !*** ./src/backend/security/SecurityService.ts ***!
  \*************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-rxjs-ajax */ "universal-rxjs-ajax");
/* harmony import */ var universal_rxjs_ajax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/backend/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Provides methods to verify client side requests.
 */
let SecurityService = class SecurityService {
    constructor(configService) {
        this.configService = configService;
    }
    // spell-checker:ignore siteverify
    /**
     * Validates Recaptcha response tokens using the Recaptcha's `siteverify`
     * endpoint. It ensures the Recaptcha action name matches on both the client
     * and the server. Failures throw a `ForbiddenException`.
     *
     * @param verifyRecaptchaResponseRequest Recaptcha request to verify.
     */
    verifyRecaptchaResponse(verifyRecaptchaResponseRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const recaptchaSiteVerifyRequestDto = {
                secret: this.configService.getServerConfig().recaptcha.secret_key,
                response: verifyRecaptchaResponseRequest.response,
            };
            return Object(universal_rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["request"])({
                url: "https://www.google.com/recaptcha/api/siteverify",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recaptchaSiteVerifyRequestDto),
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ response }) => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(recaptchaSiteVerifyResponseDto => {
                if (!recaptchaSiteVerifyResponseDto.success ||
                    recaptchaSiteVerifyResponseDto.action !==
                        verifyRecaptchaResponseRequest.action) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["ForbiddenException"]("Recaptcha verification failed.");
                }
            }))
                .toPromise();
        });
    }
};
SecurityService = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], SecurityService);



/***/ }),

/***/ "./src/backend/security/index.ts":
/*!***************************************!*\
  !*** ./src/backend/security/index.ts ***!
  \***************************************/
/*! exports provided: SecurityModule, SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecurityModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityModule */ "./src/backend/security/SecurityModule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return _SecurityModule__WEBPACK_IMPORTED_MODULE_0__["SecurityModule"]; });

/* harmony import */ var _SecurityService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecurityService */ "./src/backend/security/SecurityService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _SecurityService__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]; });





/***/ }),

/***/ "./src/backend/user/UserController.ts":
/*!********************************************!*\
  !*** ./src/backend/user/UserController.ts ***!
  \********************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserService */ "./src/backend/user/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.createUser(createUserDto);
        });
    }
};
__decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Post"])(),
    __param(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Body"])()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Controller"])("user"),
    __metadata("design:paramtypes", [_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
], UserController);



/***/ }),

/***/ "./src/backend/user/UserEntity.ts":
/*!****************************************!*\
  !*** ./src/backend/user/UserEntity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/backend/user/UserFromRequestDecorator.ts":
/*!******************************************************!*\
  !*** ./src/backend/user/UserFromRequestDecorator.ts ***!
  \******************************************************/
/*! exports provided: UserFromRequestDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFromRequestDecorator", function() { return UserFromRequestDecorator; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);

// TODO: Tie into session/authentication.
/**
 * Returns the currently authenticated user from the server request.
 */
const UserFromRequestDecorator = Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["createParamDecorator"])((_data, _req) => {
    return null;
});


/***/ }),

/***/ "./src/backend/user/UserModule.ts":
/*!****************************************!*\
  !*** ./src/backend/user/UserModule.ts ***!
  \****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security */ "./src/backend/security/index.ts");
/* harmony import */ var _UserController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserController */ "./src/backend/user/UserController.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserService */ "./src/backend/user/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let UserModule = class UserModule {
};
UserModule = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Module"])({
        imports: [_security__WEBPACK_IMPORTED_MODULE_1__["SecurityModule"]],
        providers: [_UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        controllers: [_UserController__WEBPACK_IMPORTED_MODULE_2__["UserController"]],
    })
], UserModule);



/***/ }),

/***/ "./src/backend/user/UserService.ts":
/*!*****************************************!*\
  !*** ./src/backend/user/UserService.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security */ "./src/backend/security/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let UserService = class UserService {
    constructor(securityService) {
        this.securityService = securityService;
    }
    createUser(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.securityService.verifyRecaptchaResponse({
                action: "create-user",
                response: createUserDto.recaptchaToken,
            });
            /* tslint:disable-next-line:no-console */
            console.log({ createUserDto });
            return "success";
        });
    }
};
UserService = __decorate([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_security__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
], UserService);



/***/ }),

/***/ "./src/backend/user/index.ts":
/*!***********************************!*\
  !*** ./src/backend/user/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEntity */ "./src/backend/user/UserEntity.ts");
/* harmony import */ var _UserEntity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_UserEntity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _UserEntity__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _UserEntity__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _UserFromRequestDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserFromRequestDecorator */ "./src/backend/user/UserFromRequestDecorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserFromRequestDecorator", function() { return _UserFromRequestDecorator__WEBPACK_IMPORTED_MODULE_1__["UserFromRequestDecorator"]; });

/* harmony import */ var _UserModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserModule */ "./src/backend/user/UserModule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return _UserModule__WEBPACK_IMPORTED_MODULE_2__["UserModule"]; });






/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "universal-rxjs-ajax":
/*!**************************************!*\
  !*** external "universal-rxjs-ajax" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-rxjs-ajax");

/***/ })

/******/ })));