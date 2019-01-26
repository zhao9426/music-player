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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mobx2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: Reaction, untracked, IDerivationState, createAtom, spy, comparer, isObservableObject, isBoxedObservable, isObservableArray, ObservableMap, isObservableMap, transaction, observable, computed, isObservable, isObservableProp, isComputed, isComputedProp, extendObservable, observe, intercept, autorun, reaction, when, action, isAction, runInAction, keys, values, entries, set, remove, has, get, decorate, configure, onBecomeObserved, onBecomeUnobserved, flow, toJS, trace, getDependencyTree, getObserverTree, _resetGlobalState, _getGlobalState, getDebugName, getAtom, _getAdministration, _allowStateChanges, _allowStateChangesInsideComputed, isArrayLike, $mobx, _isComputingDerivation, onReactionError, _interceptReads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads$$1; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (d, b) {
  d.__proto__ = b;
} || function (d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);

function getNextId$$1() {
  return ++globalState$$1.mobxGuid;
}

function fail$$1(message) {
  invariant$$1(false, message);
  throw "X"; // unreachable
}

function invariant$$1(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated$$1(msg, thing) {
  if (false) {}

  if (thing) {
    return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once$$1(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop$$1 = function noop$$1() {};

function unique$$1(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function isObject$$1(value) {
  return value !== null && _typeof(value) === "object";
}

function isPlainObject$$1(value) {
  if (value === null || _typeof(value) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp$$1(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable$$1(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable$$1(object, prop) {
  if ( true && !isPropertyConfigurable$$1(object, prop)) fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate$$1(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject$$1(x) && x[propName] === true;
  };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike$$1(x) {
  return Array.isArray(x) || isObservableArray$$1(x);
}

function isES6Map$$1(thing) {
  return thing instanceof Map;
}

function getMapLikeKeys$$1(map) {
  if (isPlainObject$$1(map)) return Object.keys(map);
  if (Array.isArray(map)) return map.map(function (_a) {
    var _b = __read(_a, 1),
        key = _b[0];

    return key;
  });
  if (isES6Map$$1(map) || isObservableMap$$1(map)) return Array.from(map.keys());
  return fail$$1("Cannot get keys from '" + map + "'");
}

function toPrimitive$$1(value) {
  return value === null ? null : _typeof(value) === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");

var Atom$$1 =
/** @class */
function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom$$1(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId$$1();
    }

    this.name = name;
    this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    this.isBeingObserved = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }

  Atom$$1.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };

  Atom$$1.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */


  Atom$$1.prototype.reportObserved = function () {
    return reportObserved$$1(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */


  Atom$$1.prototype.reportChanged = function () {
    startBatch$$1();
    propagateChanged$$1(this);
    endBatch$$1();
  };

  Atom$$1.prototype.toString = function () {
    return this.name;
  };

  return Atom$$1;
}();

var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);

function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop$$1;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop$$1;
  }

  var atom = new Atom$$1(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop$$1) {
    onBecomeObserved$$1(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop$$1) {
    onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual$$1(a, b);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer$$1 = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer
};
var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};

function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function get() {
      initializeInstance$$1(this);
      return this[prop];
    },
    set: function set(value) {
      initializeInstance$$1(this);
      this[prop] = value;
    }
  });
}

function initializeInstance$$1(target) {
  if (target[mobxDidRunLazyInitializersSymbol$$1] === true) return;
  var decorators = target[mobxPendingDecorators$$1];

  if (decorators) {
    addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);

    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}

function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;

    var decorator = function decorate$$1(target, prop, descriptor, applyImmediately // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }

      if ( true && !quacksLikeADecorator$$1(arguments)) fail$$1("This function is a decorator, but it wasn't invoked like a decorator");

      if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
        var inheritedDecorators = target[mobxPendingDecorators$$1];
        addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
      }

      target[mobxPendingDecorators$$1][prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };

    if (quacksLikeADecorator$$1(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY$$1;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}

function quacksLikeADecorator$$1(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}

function deepEnhancer$$1(v, _, name) {
  // it is an observable already, done
  if (isObservable$$1(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable$$1.array(v, {
    name: name
  });
  if (isPlainObject$$1(v)) return observable$$1.object(v, undefined, {
    name: name
  });
  if (isES6Map$$1(v)) return observable$$1.map(v, {
    name: name
  });
  return v;
}

function shallowEnhancer$$1(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v)) return v;
  if (Array.isArray(v)) return observable$$1.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject$$1(v)) return observable$$1.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map$$1(v)) return observable$$1.map(v, {
    name: name,
    deep: false
  });
  return fail$$1( true && "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}

function referenceEnhancer$$1(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer$$1(v, oldValue, name) {
  if ( true && isObservable$$1(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual$$1(v, oldValue)) return oldValue;
  return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
  invariant$$1(enhancer);
  var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (true) {
      invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
    }

    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
  });
  var res = // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
} // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases


var defaultCreateObservableOptions$$1 = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);

function assertValidOption(key) {
  if (!/^(deep|name|defaultDecorator|proxy)$/.test(key)) fail$$1("invalid option for (extend)observable: " + key);
}

function asCreateObservableOptions$$1(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions$$1;
  if (typeof thing === "string") return {
    name: thing,
    deep: true,
    proxy: true
  };

  if (true) {
    if (_typeof(thing) !== "object") return fail$$1("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }

  return thing;
}

var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);

function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer$$1 : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */


function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator$$1.apply(null, arguments);
  } // it is an observable already, done


  if (isObservable$$1(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject$$1(v) ? observable$$1.object(v, arg2, arg3) : Array.isArray(v) ? observable$$1.array(v, arg2) : isES6Map$$1(v) ? observable$$1.map(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  fail$$1( true && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}

var observableFactories = {
  box: function box(value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions$$1(options);
    return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name);
  },
  array: function array(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions$$1(options);
    return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions$$1(options);
    return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions$$1(options);

    if (o.proxy === false) {
      return extendObservable$$1({}, props, decorators, o);
    } else {
      var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
      var base = extendObservable$$1({}, undefined, undefined, o);
      var proxy = createDynamicObservableObject$$1(base);
      extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
      return proxy;
    }
  },
  ref: refDecorator$$1,
  shallow: shallowDecorator,
  deep: deepDecorator$$1,
  struct: refStructDecorator
};
var observable$$1 = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

Object.keys(observableFactories).forEach(function (name) {
  return observable$$1[name] = observableFactories[name];
});

function incorrectlyUsedAsDecorator(methodName) {
  fail$$1( // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  var get$$1 = descriptor.get,
      set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:

  var options = decoratorArgs[0] || {};
  asObservableObject$$1(instance).addComputedProp(instance, propertyName, __assign({
    get: get$$1,
    set: set$$1,
    context: instance
  }, options));
});
var computedStructDecorator = computedDecorator$$1({
  equals: comparer$$1.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed$$1 = function computed$$1(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator$$1.apply(null, arguments);
  }

  if (arg1 !== null && _typeof(arg1) === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator$$1.apply(null, arguments);
  } // computed(expr, options?)


  if (true) {
    invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }

  var opts = _typeof(arg2) === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue$$1(opts);
};

computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn) {
  if (true) {
    invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail$$1("actions should have valid names, got: '" + actionName + "'");
  }

  var res = function res() {
    return executeAction$$1(actionName, fn, this, arguments);
  };

  res.isMobxAction = true;
  return res;
}

function executeAction$$1(actionName, fn, scope, args) {
  var runInfo = startAction(actionName, fn, scope, args);

  try {
    return fn.apply(scope, args);
  } finally {
    endAction(runInfo);
  }
}

function startAction(actionName, fn, scope, args) {
  var notifySpy = isSpyEnabled$$1() && !!actionName;
  var startTime = 0;

  if (notifySpy && "development" !== "production") {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }
    spyReportStart$$1({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart$$1();
  startBatch$$1();
  var prevAllowStateChanges = allowStateChangesStart$$1(true);
  return {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    notifySpy: notifySpy,
    startTime: startTime
  };
}

function endAction(runInfo) {
  allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
  endBatch$$1();
  untrackedEnd$$1(runInfo.prevDerivation);
  if (runInfo.notifySpy && "development" !== "production") spyReportEnd$$1({
    time: Date.now() - runInfo.startTime
  });
}

function allowStateChanges$$1(allowStateChanges$$1, func) {
  var prev = allowStateChangesStart$$1(allowStateChanges$$1);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd$$1(prev);
  }

  return res;
}

function allowStateChangesStart$$1(allowStateChanges$$1) {
  var prev = globalState$$1.allowStateChanges;
  globalState$$1.allowStateChanges = allowStateChanges$$1;
  return prev;
}

function allowStateChangesEnd$$1(prev) {
  globalState$$1.allowStateChanges = prev;
}

function allowStateChangesInsideComputed$$1(func) {
  var prev = globalState$$1.computationDepth;
  globalState$$1.computationDepth = 0;
  var res;

  try {
    res = func();
  } finally {
    globalState$$1.computationDepth = prev;
  }

  return res;
}

var ObservableValue$$1 =
/** @class */
function (_super) {
  __extends(ObservableValue$$1, _super);

  function ObservableValue$$1(value, enhancer, name, notifySpy) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId$$1();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled$$1() && "development" !== "production") {
      // only notify spy if this is a stand-alone observable
      spyReport$$1({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }

    return _this;
  }

  ObservableValue$$1.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue$$1.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== globalState$$1.UNCHANGED) {
      var notifySpy = isSpyEnabled$$1();

      if (notifySpy && "development" !== "production") {
        spyReportStart$$1({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy && "development" !== "production") spyReportEnd$$1();
    }
  };

  ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed$$1(this);

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState$$1.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.value !== newValue ? newValue : globalState$$1.UNCHANGED;
  };

  ObservableValue$$1.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners$$1(this)) {
      notifyListeners$$1(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue$$1.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue$$1.prototype.intercept = function (handler) {
    return registerInterceptor$$1(this, handler);
  };

  ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener$$1(this, listener);
  };

  ObservableValue$$1.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue$$1.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue$$1.prototype.valueOf = function () {
    return toPrimitive$$1(this.get());
  };

  ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue$$1;
}(Atom$$1);

var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

var ComputedValue$$1 =
/** @class */
function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue$$1(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId$$1();
    this.value = new CaughtException$$1(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode$$1.NONE;
    if ( true && !options.get) throw "[mobx] missing option for computed: get";
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId$$1();
    if (options.set) this.setter = createAction$$1(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer$$1.structural : comparer$$1.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }

  ComputedValue$$1.prototype.onBecomeStale = function () {
    propagateMaybeChanged$$1(this);
  };

  ComputedValue$$1.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };

  ComputedValue$$1.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue$$1.prototype.get = function () {
    if (this.isComputing) fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);

    if (globalState$$1.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
      if (shouldCompute$$1(this)) {
        this.warnAboutUntrackedRead();
        startBatch$$1(); // See perf test 'computed memoization'

        this.value = this.computeValue(false);
        endBatch$$1();
      }
    } else {
      reportObserved$$1(this);
      if (shouldCompute$$1(this)) if (this.trackAndCompute()) propagateChangeConfirmed$$1(this);
    }

    var result = this.value;
    if (isCaughtException$$1(result)) throw result.cause;
    return result;
  };

  ComputedValue$$1.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException$$1(res)) throw res.cause;
    return res;
  };

  ComputedValue$$1.prototype.set = function (value) {
    if (this.setter) {
      invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant$$1(false,  true && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue$$1.prototype.trackAndCompute = function () {
    if (isSpyEnabled$$1() && "development" !== "production") {
      spyReport$$1({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException$$1(oldValue) || isCaughtException$$1(newValue) || !this.equals(oldValue, newValue);

    if (changed) {
      this.value = newValue;
    }

    return changed;
  };

  ComputedValue$$1.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState$$1.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction$$1(this, this.derivation, this.scope);
    } else {
      if (globalState$$1.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException$$1(e);
        }
      }
    }

    globalState$$1.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue$$1.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving$$1(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };

  ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun$$1(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart$$1();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd$$1(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
    if (false) {}

    if (this.requiresReaction === true) {
      fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }

    if (this.isTracing !== TraceMode$$1.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState$$1.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  ComputedValue$$1.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue$$1.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue$$1.prototype.valueOf = function () {
    return toPrimitive$$1(this.get());
  };

  ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };

  return ComputedValue$$1;
}();

var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);
var IDerivationState;

(function (IDerivationState$$1) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));

var TraceMode$$1;

(function (TraceMode$$1) {
  TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
  TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
  TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));

var CaughtException$$1 =
/** @class */
function () {
  function CaughtException$$1(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException$$1;
}();

function isCaughtException$$1(e) {
  return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute$$1(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue$$1(obj)) {
            if (globalState$$1.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd$$1(prevUntracked);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd$$1(prevUntracked);
              return true;
            }
          }
        }

        changeDependenciesStateTo0$$1(derivation);
        untrackedEnd$$1(prevUntracked);
        return false;
      }
  }
} // function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }


function isComputingDerivation$$1() {
  return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed$$1(atom) {
  var hasObservers$$1 = atom.observers.size > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState$$1.computationDepth > 0 && hasObservers$$1) fail$$1( true && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict")) fail$$1( true && (globalState$$1.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction$$1(derivation, f, context) {
  // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies
  changeDependenciesStateTo0$$1(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState$$1.runId;
  var prevTracking = globalState$$1.trackingDerivation;
  globalState$$1.trackingDerivation = derivation;
  var result;

  if (globalState$$1.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException$$1(e);
    }
  }

  globalState$$1.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver$$1(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver$$1(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving$$1(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    removeObserver$$1(obs[i], derivation);
  }

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked$$1(action$$1) {
  var prev = untrackedStart$$1();

  try {
    return action$$1();
  } finally {
    untrackedEnd$$1(prev);
  }
}

function untrackedStart$$1() {
  var prev = globalState$$1.trackingDerivation;
  globalState$$1.trackingDerivation = null;
  return prev;
}

function untrackedEnd$$1(prev) {
  globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0$$1(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
}
/**
 * These values will persist if global state is reset
 */


var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId", "UNCHANGED"];

var MobXGlobals$$1 =
/** @class */
function () {
  function MobXGlobals$$1() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */

    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.enforceActions = false;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */

    this.computedRequiresReaction = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */

    this.disableErrorBoundaries = false;
  }

  return MobXGlobals$$1;
}();

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState$$1 = function () {
  var global = getGlobal$$1();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals$$1();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals$$1();
  }
}();

function isolateGlobalState$$1() {
  if (globalState$$1.pendingReactions.length || globalState$$1.inBatch || globalState$$1.isRunningReactions) fail$$1("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;

  if (canMergeGlobalState) {
    if (--getGlobal$$1().__mobxInstanceCount === 0) getGlobal$$1().__mobxGlobals = undefined;
    globalState$$1 = new MobXGlobals$$1();
  }
}

function getGlobalState$$1() {
  return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState$$1() {
  var defaultGlobals = new MobXGlobals$$1();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState$$1[key] = defaultGlobals[key];
  }

  globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}

function getGlobal$$1() {
  return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
  return observable$$1.observers && observable$$1.observers.size > 0;
}

function getObservers$$1(observable$$1) {
  return observable$$1.observers;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver$$1(observable$$1, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable$$1.observers.add(node);
  if (observable$$1.lowestObserverState > node.dependenciesState) observable$$1.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver$$1(observable$$1, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable$$1.observers.delete(node);

  if (observable$$1.observers.size === 0) {
    // deleting last observer
    queueForUnobservation$$1(observable$$1);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation$$1(observable$$1) {
  if (observable$$1.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable$$1.isPendingUnobservation = true;
    globalState$$1.pendingUnobservations.push(observable$$1);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch$$1() {
  globalState$$1.inBatch++;
}

function endBatch$$1() {
  if (--globalState$$1.inBatch === 0) {
    runReactions$$1(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState$$1.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable$$1 = list[i];
      observable$$1.isPendingUnobservation = false;

      if (observable$$1.observers.size === 0) {
        if (observable$$1.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable$$1.isBeingObserved = false;
          observable$$1.onBecomeUnobserved();
        }

        if (observable$$1 instanceof ComputedValue$$1) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable$$1.suspend();
        }
      }
    }

    globalState$$1.pendingUnobservations = [];
  }
}

function reportObserved$$1(observable$$1) {
  var derivation = globalState$$1.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable$$1.lastAccessedBy) {
      observable$$1.lastAccessedBy = derivation.runId; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;

      if (!observable$$1.isBeingObserved) {
        observable$$1.isBeingObserved = true;
        observable$$1.onBecomeObserved();
      }
    }

    return true;
  } else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
    queueForUnobservation$$1(observable$$1);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged$$1(observable$$1) {
  // invariantLOS(observable, "changed start");
  if (observable$$1.lowestObserverState === IDerivationState.STALE) return;
  observable$$1.lowestObserverState = IDerivationState.STALE; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable$$1.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode$$1.NONE) {
        logTraceInfo(d, observable$$1);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed$$1(observable$$1) {
  // invariantLOS(observable, "confirmed start");
  if (observable$$1.lowestObserverState === IDerivationState.STALE) return;
  observable$$1.lowestObserverState = IDerivationState.STALE;
  observable$$1.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged$$1(observable$$1) {
  // invariantLOS(observable, "maybe start");
  if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  observable$$1.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode$$1.NONE) {
        logTraceInfo(d, observable$$1);
      }

      d.onBecomeStale();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable$$1) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");

  if (derivation.isTracing === TraceMode$$1.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree$$1(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction$$1 =
/** @class */
function () {
  function Reaction$$1(name, onInvalidate, errorHandler) {
    if (name === void 0) {
      name = "Reaction@" + getNextId$$1();
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId$$1();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode$$1.NONE;
  }

  Reaction$$1.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction$$1.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState$$1.pendingReactions.push(this);
      runReactions$$1();
    }
  };

  Reaction$$1.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction$$1.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch$$1();
      this._isScheduled = false;

      if (shouldCompute$$1(this)) {
        this._isTrackPending = true;

        try {
          this.onInvalidate();

          if (this._isTrackPending && isSpyEnabled$$1() && "development" !== "production") {
            // onInvalidate didn't trigger track right away..
            spyReport$$1({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }

      endBatch$$1();
    }
  };

  Reaction$$1.prototype.track = function (fn) {
    startBatch$$1();
    var notify = isSpyEnabled$$1();
    var startTime;

    if (notify && "development" !== "production") {
      startTime = Date.now();
      spyReportStart$$1({
        name: this.name,
        type: "reaction"
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction$$1(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving$$1(this);
    }

    if (isCaughtException$$1(result)) this.reportExceptionInDerivation(result.cause);

    if (notify && "development" !== "production") {
      spyReportEnd$$1({
        time: Date.now() - startTime
      });
    }

    endBatch$$1();
  };

  Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    if (globalState$$1.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
    console.error(message, error);
    /** If debugging brought you here, please, read the above message :-). Tnx! */

    if (isSpyEnabled$$1()) {
      spyReport$$1({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }

    globalState$$1.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction$$1.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch$$1();
        clearObserving$$1(this);
        endBatch$$1();
      }
    }
  };

  Reaction$$1.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r[$mobx$$1] = this;
    return r;
  };

  Reaction$$1.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction$$1.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace$$1(this, enterBreakPoint);
  };

  return Reaction$$1;
}();

function onReactionError$$1(handler) {
  globalState$$1.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions$$1() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState$$1.isRunningReactions = true;
  var allReactions = globalState$$1.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }

  globalState$$1.isRunningReactions = false;
}

var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);

function setReactionScheduler$$1(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled$$1() {
  return  true && !!globalState$$1.spyListeners.length;
}

function spyReport$$1(event) {
  if (false) {} // dead code elimination can do the rest

  if (!globalState$$1.spyListeners.length) return;
  var listeners = globalState$$1.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart$$1(event) {
  if (false) {}

  var change = __assign({}, event, {
    spyReportStart: true
  });

  spyReport$$1(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd$$1(change) {
  if (false) {}
  if (change) spyReport$$1(__assign({}, change, {
    spyReportEnd: true
  }));else spyReport$$1(END_EVENT);
}

function spy$$1(listener) {
  if (false) {} else {
    globalState$$1.spyListeners.push(listener);
    return once$$1(function () {
      globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

function dontReassignFields() {
  fail$$1( true && "@action fields are not reassignable");
}

function namedActionDecorator$$1(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if ( true && descriptor.get !== undefined) {
        return fail$$1("@action cannot be used with getters");
      } // babel / typescript
      // @action method() { }


      if (descriptor.value) {
        // typescript
        return {
          value: createAction$$1(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)

        };
      } // babel only: @action method = () => {}


      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction$$1(name, initializer_1.call(this));
        }
      };
    } // bound instance methods


    return actionFieldDecorator$$1(name).apply(this, arguments);
  };
}

function actionFieldDecorator$$1(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return undefined;
      },
      set: function set(value) {
        addHiddenProp$$1(this, prop, action$$1(name, value));
      }
    });
  };
}

function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction$$1(target, propertyName, descriptor.value);
    return null;
  }

  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function get() {
        defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  } // field decorator Typescript @action.bound method = () => {}


  return {
    enumerable: false,
    configurable: true,
    set: function set(v) {
      defineBoundAction$$1(this, propertyName, v);
    },
    get: function get() {
      return undefined;
    }
  };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction$$1(arg1.name || "<unnamed action>", arg1); // action("name", fn() {})

  if (arguments.length === 2 && typeof arg2 === "function") return createAction$$1(arg1, arg2); // @action("name") fn() {}

  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator$$1(arg1); // @action fn() {}

  if (arg4 === true) {
    // apply to instance immediately
    addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value));
  } else {
    return namedActionDecorator$$1(arg2).apply(null, arguments);
  }
};

action$$1.bound = boundActionDecorator$$1;

function runInAction$$1(arg1, arg2) {
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;

  if (true) {
    invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail$$1("actions should have valid names, got: '" + actionName + "'");
  }

  return executeAction$$1(actionName, fn, this, undefined);
}

function isAction$$1(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction$$1(target, propertyName, fn) {
  addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */


function autorun$$1(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT$$1;
  }

  if (true) {
    invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
    invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId$$1();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction$$1;

  if (runSync) {
    // normal autorun
    reaction$$1 = new Reaction$$1(name, function () {
      this.track(reactionRunner);
    }, opts.onError);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled_1 = false;
    reaction$$1 = new Reaction$$1(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction$$1.isDisposed) reaction$$1.track(reactionRunner);
        });
      }
    }, opts.onError);
  }

  function reactionRunner() {
    view(reaction$$1);
  }

  reaction$$1.schedule();
  return reaction$$1.getDisposer();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction$$1(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT$$1;
  }

  if (true) {
    invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
    invariant$$1(_typeof(opts) === "object", "Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId$$1();
  var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer$$1.structural : opts.equals || comparer$$1.default;
  var r = new Reaction$$1(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError);

  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?

    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}

function onBecomeUnobserved$$1(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
  var cb = typeof arg2 === "string" ? arg3 : arg2;
  var listenersKey = hook + "Listeners";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  var orig = atom[hook];
  if (typeof orig !== "function") return fail$$1( true && "Not an atom that can be (un)observed");
  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners.delete(cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

function configure$$1(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      disableErrorBoundaries = options.disableErrorBoundaries,
      reactionScheduler = options.reactionScheduler;

  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;

    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;

      case false:
      case "never":
        ea = false;
        break;

      case "strict":
      case "always":
        ea = "strict";
        break;

      default:
        fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }

    globalState$$1.enforceActions = ea;
    globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }

  if (computedRequiresReaction !== undefined) {
    globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
  }

  if (options.isolateGlobalState === true) {
    isolateGlobalState$$1();
  }

  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
  }

  if (reactionScheduler) {
    setReactionScheduler$$1(reactionScheduler);
  }
}

function decorate$$1(thing, decorators) {
   true && invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;

  var _loop_1 = function _loop_1(prop) {
    var propertyDecorators = decorators[prop];

    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }

     true && invariant$$1(propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };

  for (var prop in decorators) {
    _loop_1(prop);
  }

  return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
  if (true) {
    invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant$$1(_typeof(target) === "object", "'extendObservable' expects an object as first argument");
    invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
  }

  options = asCreateObservableOptions$$1(options);
  var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
  initializeInstance$$1(target); // Fixes #1740

  asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props

  if (properties) extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
  return target;
}

function getDefaultDecoratorFromObjectOptions$$1(options) {
  return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}

function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
  if (true) {
    invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
    if (decorators) for (var key in decorators) {
      if (!(key in properties)) fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
  }

  startBatch$$1();

  try {
    for (var key in properties) {
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);

      if (true) {
        if (Object.getOwnPropertyDescriptor(target, key)) fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
        if (isComputed$$1(descriptor.value)) fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
      }

      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator$$1 : defaultDecorator;
      if ( true && typeof decorator !== "function") fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch$$1();
  }
}

function getDependencyTree$$1(thing, property) {
  return nodeToDependencyTree(getAtom$$1(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree$$1(thing, property) {
  return nodeToObserverTree(getAtom$$1(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers$$1(node)) result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
  return result;
}

var generatorId = 0;

function flow$$1(generator) {
  if (arguments.length !== 1) fail$$1( true && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var res_1 = gen.return(); // eat anything that promise would do, it's cancelled!

        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop$$1, noop$$1);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new Error("FLOW_CANCELLED"));
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}

function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
    target = getAdministration$$1(thing);
  } else if (isObservableObject$$1(thing)) {
    if (typeof propOrHandler !== "string") return fail$$1( true && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration$$1(thing, propOrHandler);
  } else {
    return fail$$1( true && "Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail$$1( true && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept$$1(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration$$1(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject$$1(value) === false) return false;
    if (!value[$mobx$$1].values.has(property)) return false;
    var atom = getAtom$$1(value, property);
    return isComputedValue$$1(atom);
  }

  return isComputedValue$$1(value);
}

function isComputed$$1(value) {
  if (arguments.length > 1) return fail$$1( true && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed$$1(value);
}

function isComputedProp$$1(value, propName) {
  if (typeof propName !== "string") return fail$$1( true && "isComputed expected a property name as second argument");
  return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap$$1(value) || isObservableArray$$1(value))) return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject$$1(value)) {
      return value[$mobx$$1].values.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject$$1(value) || !!value[$mobx$$1] || isAtom$$1(value) || isReaction$$1(value) || isComputedValue$$1(value);
}

function isObservable$$1(value) {
  if (arguments.length !== 1) fail$$1( true && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp$$1(value, propName) {
  if (typeof propName !== "string") return fail$$1( true && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys$$1(obj) {
  if (isObservableObject$$1(obj)) {
    return obj[$mobx$$1].getKeys();
  }

  if (isObservableMap$$1(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray$$1(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  return fail$$1( true && "'keys()' can only be used on observable objects, arrays and maps");
}

function values$$1(obj) {
  if (isObservableObject$$1(obj)) {
    return keys$$1(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap$$1(obj)) {
    return keys$$1(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableArray$$1(obj)) {
    return obj.slice();
  }

  return fail$$1( true && "'values()' can only be used on observable objects, arrays and maps");
}

function entries$$1(obj) {
  if (isObservableObject$$1(obj)) {
    return keys$$1(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap$$1(obj)) {
    return keys$$1(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableArray$$1(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  return fail$$1( true && "'entries()' can only be used on observable objects, arrays and maps");
}

function set$$1(obj, key, value) {
  if (arguments.length === 2) {
    startBatch$$1();
    var values_1 = key;

    try {
      for (var key_1 in values_1) {
        set$$1(obj, key_1, values_1[key_1]);
      }
    } finally {
      endBatch$$1();
    }

    return;
  }

  if (isObservableObject$$1(obj)) {
    var adm = obj[$mobx$$1];
    var existingObservable = adm.values.get(key);

    if (existingObservable) {
      adm.write(key, value);
    } else {
      adm.addObservableProp(key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap$$1(obj)) {
    obj.set(key, value);
  } else if (isObservableArray$$1(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
    startBatch$$1();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch$$1();
  } else {
    return fail$$1( true && "'set()' can only be used on observable objects, arrays and maps");
  }
}

function remove$$1(obj, key) {
  if (isObservableObject$$1(obj)) {
    obj[$mobx$$1].remove(key);
  } else if (isObservableMap$$1(obj)) {
    obj.delete(key);
  } else if (isObservableArray$$1(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail$$1( true && "'remove()' can only be used on observable objects, arrays and maps");
  }
}

function has$$1(obj, key) {
  if (isObservableObject$$1(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration$$1(obj);
    return adm.has(key);
  } else if (isObservableMap$$1(obj)) {
    return obj.has(key);
  } else if (isObservableArray$$1(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail$$1( true && "'has()' can only be used on observable objects, arrays and maps");
  }
}

function get$$1(obj, key) {
  if (!has$$1(obj, key)) return undefined;

  if (isObservableObject$$1(obj)) {
    return obj[key];
  } else if (isObservableMap$$1(obj)) {
    return obj.get(key);
  } else if (isObservableArray$$1(obj)) {
    return obj[key];
  } else {
    return fail$$1( true && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration$$1(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};

function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}

function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable$$1(source)) return source;
  if (_typeof(source) !== "object") return source; // Directly return null if source is null

  if (source === null) return null; // Directly return the Date object itself if contained in the observable

  if (source instanceof Date) return source;
  if (isObservableValue$$1(source)) return toJSHelper(source.get(), options, __alreadySeen); // make sure we track the keys of the object

  if (isObservable$$1(source)) keys$$1(source);
  var detectCycles = options.detectCycles === true;

  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray$$1(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;

    for (var i = 0, l = toAdd.length; i < l; i++) {
      res_1[i] = toAdd[i];
    }

    return res_1;
  }

  if (isObservableMap$$1(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_2.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_3[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_3;
    }
  } // Fallback to the situation that source is an ObservableObject or a plain object


  var res = cache(__alreadySeen, source, {}, options);

  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }

  return res;
}

function toJS$$1(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;

  var __alreadySeen;

  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail$$1( true && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode$$1.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState$$1.trackingDerivation;

    case 1:
      return getAtom$$1(args[0]);

    case 2:
      return getAtom$$1(args[0], args[1]);
  }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction$$1(action$$1, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch$$1();

  try {
    return action$$1.apply(thisArg);
  } finally {
    endBatch$$1();
  }
}

function when$$1(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && _typeof(arg1) === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx$$1].isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId$$1();
  var effectAction = createAction$$1(opts.name + "-effect", effect);
  var disposer = autorun$$1(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return fail$$1("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, __assign({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx$$1];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1) return true;
    var adm = getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
    // TODO: check performance stats!
    // if (adm.values.get(name as string)) return true

    if (typeof name === "string") return adm.has(name);
    return name in target;
  },
  get: function get(target, name) {
    if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1) return target[name];
    var adm = getAdm(target);
    var observable$$1 = adm.values.get(name);

    if (observable$$1 instanceof Atom$$1) {
      var result = observable$$1.get();

      if (result === undefined) {
        // This fixes #1796, because deleting a prop that has an
        // undefined value won't retrigger a observer (no visible effect),
        // the autorun wouldn't subscribe to future key changes (see also next comment)
        adm.has(name);
      }

      return result;
    } // make sure we start listening to future keys
    // note that we only do this here for optimization


    if (typeof name === "string") adm.has(name);
    return target[name];
  },
  set: function set(target, name, value) {
    if (typeof name !== "string") return false;
    set$$1(target, name, value);
    return true;
  },
  deleteProperty: function deleteProperty(target, name) {
    if (typeof name !== "string") return false;
    var adm = getAdm(target);
    adm.remove(name);
    return true;
  },
  ownKeys: function ownKeys(target) {
    var adm = getAdm(target);
    adm.keysAtom.reportObserved();
    return Reflect.ownKeys(target);
  },
  preventExtensions: function preventExtensions(target) {
    fail$$1("Dynamic observable objects cannot be frozen");
    return false;
  }
};

function createDynamicObservableObject$$1(base) {
  var proxy = new Proxy(base, objectProxyTraps);
  base[$mobx$$1].proxy = proxy;
  return proxy;
}

function hasInterceptors$$1(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}

function registerInterceptor$$1(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once$$1(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange$$1(interceptable, change) {
  var prevU = untrackedStart$$1();

  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd$$1(prevU);
  }
}

function hasListeners$$1(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}

function registerListener$$1(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once$$1(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners$$1(listenable, change) {
  var prevU = untrackedStart$$1();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    if (name === $mobx$$1) return target[$mobx$$1];
    if (name === "length") return target[$mobx$$1].getArrayLength();

    if (typeof name === "number") {
      return arrayExtensions.get.call(target, name);
    }

    if (typeof name === "string" && !isNaN(name)) {
      return arrayExtensions.get.call(target, parseInt(name));
    }

    if (arrayExtensions.hasOwnProperty(name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    if (name === "length") {
      target[$mobx$$1].setArrayLength(value);
      return true;
    }

    if (typeof name === "number") {
      arrayExtensions.set.call(target, name, value);
      return true;
    }

    if (!isNaN(name)) {
      arrayExtensions.set.call(target, parseInt(name), value);
      return true;
    }

    return false;
  },
  preventExtensions: function preventExtensions(target) {
    fail$$1("Observable arrays cannot be frozen");
    return false;
  }
};

function createObservableArray$$1(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray@" + getNextId$$1();
  }

  if (owned === void 0) {
    owned = false;
  }

  var adm = new ObservableArrayAdministration(name, enhancer, owned);
  addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
  var proxy = new Proxy(adm.values, arrayTraps);
  adm.proxy = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart$$1(true);
    adm.spliceWithArray(0, 0, initialValues);
    allowStateChangesEnd$$1(prev);
  }

  return proxy;
}

var ObservableArrayAdministration =
/** @class */
function () {
  function ObservableArrayAdministration(name, enhancer, owned) {
    this.owned = owned;
    this.values = [];
    this.proxy = undefined;
    this.lastKnownLength = 0;
    this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
    if (this.dehancer !== undefined && values$$1.length > 0) return values$$1.map(this.dehancer);
    return values$$1;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor$$1(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.proxy,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener$$1(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  };

  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
    this.lastKnownLength += delta;
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed$$1(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY$$1;

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        object: this.proxy,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY$$1;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });

    if (true) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;

    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled$$1();
    var notify = hasListeners$$1(this);
    var change = notify || notifySpy ? {
      object: this.proxy,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners$$1(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd$$1();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled$$1();
    var notify = hasListeners$$1(this);
    var change = notify || notifySpy ? {
      object: this.proxy,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
      name: this.atom.name
    }));
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners$$1(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd$$1();
  };

  return ObservableArrayAdministration;
}();

var arrayExtensions = {
  intercept: function intercept(handler) {
    return this[$mobx$$1].intercept(handler);
  },
  observe: function observe(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    var adm = this[$mobx$$1];
    return adm.observe(listener, fireImmediately);
  },
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx$$1];
    return adm.spliceWithArray(0, adm.values.length, newItems);
  },

  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */
  toJS: function toJS() {
    return this.slice();
  },
  toJSON: function toJSON() {
    // Used by JSON.stringify
    return this.toJS();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    var adm = this[$mobx$$1];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray(index);

      case 2:
        return adm.spliceWithArray(index, deleteCount);
    }

    return adm.spliceWithArray(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    var adm = this[$mobx$$1];
    return adm.spliceWithArray(index, deleteCount, newItems);
  },
  push: function push() {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this[$mobx$$1];
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this[$mobx$$1];
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    if (true) {
      console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
    }

    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  },
  sort: function sort(compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (true) {
      console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
    }

    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  },
  remove: function remove(value) {
    var adm = this[$mobx$$1];
    var idx = adm.dehanceValues(adm.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  },
  get: function get(index) {
    var adm = this[$mobx$$1];

    if (adm) {
      if (index < adm.values.length) {
        adm.atom.reportObserved();
        return adm.dehanceValue(adm.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  },
  set: function set(index, newValue) {
    var adm = this[$mobx$$1];
    var values$$1 = adm.values;

    if (index < values$$1.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed$$1(adm.atom);
      var oldValue = values$$1[index];

      if (hasInterceptors$$1(adm)) {
        var change = interceptChange$$1(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values$$1[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values$$1.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
    }
  }
};
["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  arrayExtensions[funcName] = function () {
    var adm = this[$mobx$$1];
    adm.atom.reportObserved();
    var res = adm.dehanceValues(adm.values);
    return res[funcName].apply(res, arguments);
  };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray$$1(thing) {
  return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;

var ObservableMapMarker = {}; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

var ObservableMap$$1 =
/** @class */
function () {
  function ObservableMap$$1(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer$$1;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId$$1();
    }

    this.enhancer = enhancer;
    this.name = name;
    this[_a] = ObservableMapMarker;
    this._keysAtom = createAtom$$1(this.name + ".keys()");
    this[Symbol.toStringTag] = "Map";

    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }

    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }

  ObservableMap$$1.prototype._has = function (key) {
    return this._data.has(key);
  };

  ObservableMap$$1.prototype.has = function (key) {
    if (this._hasMap.has(key)) return this._hasMap.get(key).get();
    return this._updateHasMapEntry(key, false).get();
  };

  ObservableMap$$1.prototype.set = function (key, value) {
    var hasKey = this._has(key);

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap$$1.prototype.delete = function (key) {
    var _this = this;

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled$$1();
      var notify = hasListeners$$1(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
        name: this.name,
        key: key
      }));
      transaction$$1(function () {
        _this._keysAtom.reportChanged();

        _this._updateHasMapEntry(key, false);

        var observable$$1 = _this._data.get(key);

        observable$$1.setNewValue(undefined);

        _this._data.delete(key);
      });
      if (notify) notifyListeners$$1(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd$$1();
      return true;
    }

    return false;
  };

  ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
    // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
    var entry = this._hasMap.get(key);

    if (entry) {
      entry.setNewValue(value);
    } else {
      entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + key + "?", false);

      this._hasMap.set(key, entry);
    }

    return entry;
  };

  ObservableMap$$1.prototype._updateValue = function (key, newValue) {
    var observable$$1 = this._data.get(key);

    newValue = observable$$1.prepareNewValue(newValue);

    if (newValue !== globalState$$1.UNCHANGED) {
      var notifySpy = isSpyEnabled$$1();
      var notify = hasListeners$$1(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable$$1.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable$$1.setNewValue(newValue);
      if (notify) notifyListeners$$1(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd$$1();
    }
  };

  ObservableMap$$1.prototype._addValue = function (key, newValue) {
    var _this = this;

    checkIfStateModificationsAreAllowed$$1(this._keysAtom);
    transaction$$1(function () {
      var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + key, false);

      _this._data.set(key, observable$$1);

      newValue = observable$$1.value; // value might have been changed

      _this._updateHasMapEntry(key, true);

      _this._keysAtom.reportChanged();
    });
    var notifySpy = isSpyEnabled$$1();
    var notify = hasListeners$$1(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners$$1(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd$$1();
  };

  ObservableMap$$1.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };

  ObservableMap$$1.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap$$1.prototype.keys = function () {
    this._keysAtom.reportObserved();

    return this._data.keys();
  };

  ObservableMap$$1.prototype.values = function () {
    var self = this;
    var nextIndex = 0;
    var keys$$1 = Array.from(this.keys());
    return makeIterable({
      next: function next() {
        return nextIndex < keys$$1.length ? {
          value: self.get(keys$$1[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableMap$$1.prototype.entries = function () {
    var self = this;
    var nextIndex = 0;
    var keys$$1 = Array.from(this.keys());
    return makeIterable({
      next: function next() {
        if (nextIndex < keys$$1.length) {
          var key = keys$$1[nextIndex++];
          return {
            value: [key, self.get(key)],
            done: false
          };
        }

        return {
          done: true
        };
      }
    });
  };

  ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
    return this.entries();
  };

  ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
    var e_1, _a;

    try {
      for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
            key = _d[0],
            value = _d[1];

        callback.call(thisArg, value, key, this);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /** Merge another object into this object, returns this. */


  ObservableMap$$1.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap$$1(other)) {
      other = other.toJS();
    }

    transaction$$1(function () {
      if (isPlainObject$$1(other)) Object.keys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];

        return _this.set(key, value);
      });else if (isES6Map$$1(other)) other.forEach(function (value, key) {
        return _this.set(key, value);
      });else if (other !== null && other !== undefined) fail$$1("Cannot initialize map from " + other);
    });
    return this;
  };

  ObservableMap$$1.prototype.clear = function () {
    var _this = this;

    transaction$$1(function () {
      untracked$$1(function () {
        var e_2, _a;

        try {
          for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;

            _this.delete(key);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      });
    });
  };

  ObservableMap$$1.prototype.replace = function (values$$1) {
    var _this = this;

    transaction$$1(function () {
      // grab all the keys that are present in the new map but not present in the current map
      // and delete them from the map, then merge the new map
      // this will cause reactions only on changed values
      var newKeys = getMapLikeKeys$$1(values$$1);
      var oldKeys = Array.from(_this.keys());
      var missingKeys = oldKeys.filter(function (k) {
        return newKeys.indexOf(k) === -1;
      });
      missingKeys.forEach(function (k) {
        return _this.delete(k);
      });

      _this.merge(values$$1);
    });
    return this;
  };

  Object.defineProperty(ObservableMap$$1.prototype, "size", {
    get: function get() {
      this._keysAtom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */

  ObservableMap$$1.prototype.toPOJO = function () {
    var e_3, _a;

    var res = {};

    try {
      for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
            key = _d[0],
            value = _d[1];

        res["" + key] = value;
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */


  ObservableMap$$1.prototype.toJS = function () {
    return new Map(this);
  };

  ObservableMap$$1.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };

  ObservableMap$$1.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + Array.from(this.keys()).map(function (key) {
      return key + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
     true && invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener$$1(this, listener);
  };

  ObservableMap$$1.prototype.intercept = function (handler) {
    return registerInterceptor$$1(this, handler);
  };

  return ObservableMap$$1;
}();
/* 'var' fixes small-build issue */


var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var ObservableObjectAdministration$$1 =
/** @class */
function () {
  function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
    if (values$$1 === void 0) {
      values$$1 = new Map();
    }

    this.target = target;
    this.values = values$$1;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.keysAtom = new Atom$$1(name + ".keys");
  }

  ObservableObjectAdministration$$1.prototype.read = function (key) {
    return this.values.get(key).get();
  };

  ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
    var instance = this.target;
    var observable$$1 = this.values.get(key);

    if (observable$$1 instanceof ComputedValue$$1) {
      observable$$1.set(newValue);
      return;
    } // intercept


    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        type: "update",
        object: this.proxy || instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable$$1.prepareNewValue(newValue); // notify spy & observers

    if (newValue !== globalState$$1.UNCHANGED) {
      var notify = hasListeners$$1(this);
      var notifySpy = isSpyEnabled$$1();
      var change = notify || notifySpy ? {
        type: "update",
        object: this.proxy || instance,
        oldValue: observable$$1.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
        name: this.name,
        key: key
      }));
      observable$$1.setNewValue(newValue);
      if (notify) notifyListeners$$1(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd$$1();
    }
  };

  ObservableObjectAdministration$$1.prototype.has = function (key) {
    var map = this.pendingKeys || (this.pendingKeys = new Map());
    var entry = map.get(key);
    if (entry) return entry.get();else {
      var exists = !!this.values.get(key); // Possible optimization: Don't have a separate map for non existing keys,
      // but store them in the values map instead, using a special symbol to denote "not existing"

      entry = new ObservableValue$$1(exists, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
      map.set(key, entry);
      return entry.get(); // read to subscribe
    }
  };

  ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
    if (enhancer === void 0) {
      enhancer = this.defaultEnhancer;
    }

    var target = this.target;
    assertPropertyConfigurable$$1(target, propName);

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        object: this.proxy || target,
        name: propName,
        type: "add",
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
    this.values.set(propName, observable$$1);
    newValue = observable$$1.value; // observableValue might have changed it

    Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
    this.notifyPropertyAddition(propName, newValue);
  };

  ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
  propName, options) {
    var target = this.target;
    options.name = options.name || this.name + "." + propName;
    this.values.set(propName, new ComputedValue$$1(options));
    if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName)) Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
  };

  ObservableObjectAdministration$$1.prototype.remove = function (key) {
    if (!this.values.has(key)) return;
    var target = this.target;

    if (hasInterceptors$$1(this)) {
      var change = interceptChange$$1(this, {
        object: this.proxy || target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }

    try {
      startBatch$$1();
      var notify = hasListeners$$1(this);
      var notifySpy = isSpyEnabled$$1();
      var oldObservable = this.values.get(key);
      var oldValue = oldObservable && oldObservable.get();
      oldObservable && oldObservable.set(undefined); // notify key and keyset listeners

      this.keysAtom.reportChanged();
      this.values.delete(key);

      if (this.pendingKeys) {
        var entry = this.pendingKeys.get(key);
        if (entry) entry.set(false);
      } // delete the prop


      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: this.proxy || target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners$$1(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd$$1();
    } finally {
      endBatch$$1();
    }
  };

  ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
     true && invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener$$1(this, callback);
  };

  ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
    return registerInterceptor$$1(this, handler);
  };

  ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
    var notify = hasListeners$$1(this);
    var notifySpy = isSpyEnabled$$1();
    var change = notify || notifySpy ? {
      type: "add",
      object: this.proxy || this.target,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart$$1(__assign({}, change, {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners$$1(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd$$1();

    if (this.pendingKeys) {
      var entry = this.pendingKeys.get(key);
      if (entry) entry.set(true);
    }

    this.keysAtom.reportChanged();
  };

  ObservableObjectAdministration$$1.prototype.getKeys = function () {
    var e_1, _a;

    this.keysAtom.reportObserved(); // return Reflect.ownKeys(this.values) as any

    var res = [];

    try {
      for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
            key = _d[0],
            value = _d[1];

        if (value instanceof ObservableValue$$1) res.push(key);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return res;
  };

  return ObservableObjectAdministration$$1;
}();

function asObservableObject$$1(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer$$1;
  }

  if (Object.prototype.hasOwnProperty.call(target, $mobx$$1)) return target[$mobx$$1];
   true && invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject$$1(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
  if (!name) name = "ObservableObject@" + getNextId$$1();
  var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
  addHiddenProp$$1(target, $mobx$$1, adm);
  return adm;
}

var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);

function generateObservablePropConfig$$1(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this[$mobx$$1].read(propName);
    },
    set: function set(v) {
      this[$mobx$$1].write(propName, v);
    }
  });
}

function getAdministrationForComputedPropOwner(owner) {
  var adm = owner[$mobx$$1];

  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance$$1(owner);
    return owner[$mobx$$1];
  }

  return adm;
}

function generateComputedPropConfig$$1(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return getAdministrationForComputedPropOwner(this).read(propName);
    },
    set: function set(v) {
      getAdministrationForComputedPropOwner(this).write(propName, v);
    }
  });
}

var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);

function isObservableObject$$1(thing) {
  if (isObject$$1(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    return isObservableObjectAdministration(thing[$mobx$$1]);
  }

  return false;
}

function getAtom$$1(thing, property) {
  if (_typeof(thing) === "object" && thing !== null) {
    if (isObservableArray$$1(thing)) {
      if (property !== undefined) fail$$1( true && "It is not possible to get index atoms from arrays");
      return thing[$mobx$$1].atom;
    }

    if (isObservableMap$$1(thing)) {
      var anyThing = thing;
      if (property === undefined) return anyThing._keysAtom;

      var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);

      if (!observable$$1) fail$$1( true && "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
      return observable$$1;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    initializeInstance$$1(thing);
    if (property && !thing[$mobx$$1]) thing[property]; // See #1072

    if (isObservableObject$$1(thing)) {
      if (!property) return fail$$1( true && "please specify a property");
      var observable$$1 = thing[$mobx$$1].values.get(property);
      if (!observable$$1) fail$$1( true && "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
      return observable$$1;
    }

    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction$$1(thing[$mobx$$1])) {
      // disposer function
      return thing[$mobx$$1];
    }
  }

  return fail$$1( true && "Cannot obtain atom from " + thing);
}

function getAdministration$$1(thing, property) {
  if (!thing) fail$$1("Expecting some object");
  if (property !== undefined) return getAdministration$$1(getAtom$$1(thing, property));
  if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) return thing;
  if (isObservableMap$$1(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  initializeInstance$$1(thing);
  if (thing[$mobx$$1]) return thing[$mobx$$1];
  fail$$1( true && "Cannot obtain administration from " + thing);
}

function getDebugName$$1(thing, property) {
  var named;
  if (property !== undefined) named = getAtom$$1(thing, property);else if (isObservableObject$$1(thing) || isObservableMap$$1(thing)) named = getAdministration$$1(thing);else named = getAtom$$1(thing); // valid for arrays as well

  return named.name;
}

var toString = Object.prototype.toString;

function deepEqual$$1(a, b) {
  return eq(a, b);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = _typeof(a);

  if (type !== "function" && type !== "object" && _typeof(b) != "object") return false;
  return deepEq(a, b, aStack, bStack);
} // Internal recursive comparison function for `isEqual`.


function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b); // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (_typeof(a) != "object" || _typeof(b) != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys$$1 = Object.keys(a),
        key;
    length = keys$$1.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys$$1[length];
      if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray$$1(a)) return a.slice();
  if (isES6Map$$1(a) || isObservableMap$$1(a)) return Array.from(a.entries());
  return a;
}

function has$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = self;
  return iterator;
}

function self() {
  return this;
}
/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
  throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}

try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  "development";
} catch (e) {
  var g = typeof window !== "undefined" ? window : global;
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}

(function () {
  function testCodeMinification() {}

  if (testCodeMinification.name !== "testCodeMinification" && "development" !== "production" && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
    console.warn( // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
    "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
  }
})(); // Devtools support


if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy$$1,
    extras: {
      getDebugName: getDebugName$$1
    },
    $mobx: $mobx$$1
  });
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/mobx2.js":
/*!**********************!*\
  !*** ./src/mobx2.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var Store = (_dec = mobx__WEBPACK_IMPORTED_MODULE_0__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "array", _descriptor, this);

    _initializerDefineProperty(this, "obj", _descriptor2, this);

    _initializerDefineProperty(this, "map", _descriptor3, this);

    _initializerDefineProperty(this, "str", _descriptor4, this);

    _initializerDefineProperty(this, "number", _descriptor5, this);

    _initializerDefineProperty(this, "b", _descriptor6, this);
  }

  _createClass(Store, [{
    key: "bar",
    value: function bar() {
      this.str = "hello";
      this.number = 40;
    }
  }, {
    key: "mixed",
    get: function get() {
      return store.str + '/' + store.number;
    }
  }]);

  return Store;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "array", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "obj", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "map", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "str", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'hello';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "number", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "b", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class.prototype, "mixed", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "mixed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bar", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "bar"), _class.prototype)), _class));
var store = new Store();
/*
var foo = computed(function(){
    return store.str + "/" + store.number
});

console.log(foo);
console.log(foo.get());
foo.observe(function(change){
    console.log(change); 
});

store.str = "world";
store.number = 23; */

store.str = "world";
/* 
autorun(()=> {
    console.log(store.mixed);
    
    //console.log(store.str + "/" + store.number);
});

store.number = 23;

when(()=> store.b, ()=> console.log("it's true")) */

store.str = "world";
Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () {
  return [store.str, store.number];
}, function (arr) {
  return console.log(arr.join("/"));
});
store.number = 23; // var bar = store.bar;
// bar();

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
  store.str = "H";
  store.number = 10;
});
Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])('modify', function () {
  store.str = "M";
  store.number = 60;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ieDIuanMiXSwibmFtZXMiOlsiZXh0ZW5kU3RhdGljcyIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJkIiwiYiIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiX192YWx1ZXMiLCJvIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dCIsInZhbHVlIiwiZG9uZSIsIl9fcmVhZCIsInIiLCJhciIsImUiLCJwdXNoIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsIk9CRlVTQ0FURURfRVJST1IkJDEiLCJFTVBUWV9BUlJBWSQkMSIsImZyZWV6ZSIsIkVNUFRZX09CSkVDVCQkMSIsImdldE5leHRJZCQkMSIsImdsb2JhbFN0YXRlJCQxIiwibW9ieEd1aWQiLCJmYWlsJCQxIiwibWVzc2FnZSIsImludmFyaWFudCQkMSIsImNoZWNrIiwiRXJyb3IiLCJkZXByZWNhdGVkTWVzc2FnZXMiLCJkZXByZWNhdGVkJCQxIiwibXNnIiwidGhpbmciLCJwcm9jZXNzIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJvbmNlJCQxIiwiZnVuYyIsImludm9rZWQiLCJhcHBseSIsIm5vb3AkJDEiLCJ1bmlxdWUkJDEiLCJsaXN0IiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJpc09iamVjdCQkMSIsImlzUGxhaW5PYmplY3QkJDEiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiYWRkSGlkZGVuUHJvcCQkMSIsIm9iamVjdCIsInByb3BOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhZGRIaWRkZW5GaW5hbFByb3AkJDEiLCJpc1Byb3BlcnR5Q29uZmlndXJhYmxlJCQxIiwicHJvcCIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZSQkMSIsInRvU3RyaW5nIiwiY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMSIsIm5hbWUiLCJjbGF6eiIsIngiLCJpc0FycmF5TGlrZSQkMSIsImlzQXJyYXkiLCJpc09ic2VydmFibGVBcnJheSQkMSIsImlzRVM2TWFwJCQxIiwiTWFwIiwiZ2V0TWFwTGlrZUtleXMkJDEiLCJtYXAiLCJrZXlzIiwiX2EiLCJfYiIsImtleSIsImlzT2JzZXJ2YWJsZU1hcCQkMSIsImZyb20iLCJ0b1ByaW1pdGl2ZSQkMSIsIiRtb2J4JCQxIiwiQXRvbSQkMSIsImlzUGVuZGluZ1Vub2JzZXJ2YXRpb24iLCJpc0JlaW5nT2JzZXJ2ZWQiLCJvYnNlcnZlcnMiLCJTZXQiLCJkaWZmVmFsdWUiLCJsYXN0QWNjZXNzZWRCeSIsImxvd2VzdE9ic2VydmVyU3RhdGUiLCJJRGVyaXZhdGlvblN0YXRlIiwiTk9UX1RSQUNLSU5HIiwib25CZWNvbWVPYnNlcnZlZCIsIm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMiLCJsaXN0ZW5lciIsIm9uQmVjb21lVW5vYnNlcnZlZCIsIm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycyIsInJlcG9ydE9ic2VydmVkIiwicmVwb3J0T2JzZXJ2ZWQkJDEiLCJyZXBvcnRDaGFuZ2VkIiwic3RhcnRCYXRjaCQkMSIsInByb3BhZ2F0ZUNoYW5nZWQkJDEiLCJlbmRCYXRjaCQkMSIsImlzQXRvbSQkMSIsImNyZWF0ZUF0b20kJDEiLCJvbkJlY29tZU9ic2VydmVkSGFuZGxlciIsIm9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIiLCJhdG9tIiwib25CZWNvbWVPYnNlcnZlZCQkMSIsIm9uQmVjb21lVW5vYnNlcnZlZCQkMSIsImlkZW50aXR5Q29tcGFyZXIiLCJhIiwic3RydWN0dXJhbENvbXBhcmVyIiwiZGVlcEVxdWFsJCQxIiwiZGVmYXVsdENvbXBhcmVyIiwiaXMiLCJjb21wYXJlciQkMSIsImlkZW50aXR5Iiwic3RydWN0dXJhbCIsImRlZmF1bHQiLCJtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCQkMSIsIm1vYnhQZW5kaW5nRGVjb3JhdG9ycyQkMSIsImVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUiLCJub25FbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlIiwiY3JlYXRlUHJvcGVydHlJbml0aWFsaXplckRlc2NyaXB0b3IiLCJjYWNoZSIsImdldCIsImluaXRpYWxpemVJbnN0YW5jZSQkMSIsInNldCIsInRhcmdldCIsImRlY29yYXRvcnMiLCJwcm9wZXJ0eUNyZWF0b3IiLCJkZWNvcmF0b3JUYXJnZXQiLCJkZWNvcmF0b3JBcmd1bWVudHMiLCJjcmVhdGVQcm9wRGVjb3JhdG9yJCQxIiwicHJvcGVydHlJbml0aWFsbHlFbnVtZXJhYmxlIiwiZGVjb3JhdG9yRmFjdG9yeSIsImRlY29yYXRvciIsImRlY29yYXRlJCQxIiwiYXBwbHlJbW1lZGlhdGVseSIsInF1YWNrc0xpa2VBRGVjb3JhdG9yJCQxIiwiaW5oZXJpdGVkRGVjb3JhdG9ycyIsInNsaWNlIiwiYXJncyIsImRlZXBFbmhhbmNlciQkMSIsInYiLCJfIiwiaXNPYnNlcnZhYmxlJCQxIiwib2JzZXJ2YWJsZSQkMSIsImFycmF5IiwidW5kZWZpbmVkIiwic2hhbGxvd0VuaGFuY2VyJCQxIiwiaXNPYnNlcnZhYmxlT2JqZWN0JCQxIiwiZGVlcCIsInJlZmVyZW5jZUVuaGFuY2VyJCQxIiwibmV3VmFsdWUiLCJyZWZTdHJ1Y3RFbmhhbmNlciQkMSIsIm9sZFZhbHVlIiwiY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIkJDEiLCJlbmhhbmNlciIsInByb3BlcnR5TmFtZSIsIl9kZWNvcmF0b3JUYXJnZXQiLCJkZWNvcmF0b3JBcmdzIiwiaW5pdGlhbFZhbHVlIiwiaW5pdGlhbGl6ZXIiLCJhc09ic2VydmFibGVPYmplY3QkJDEiLCJhZGRPYnNlcnZhYmxlUHJvcCIsImVudiIsIm9ic2VydmFibGVEZWNvcmF0b3IiLCJkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEiLCJkZWZhdWx0RGVjb3JhdG9yIiwicHJveHkiLCJhc3NlcnRWYWxpZE9wdGlvbiIsInRlc3QiLCJhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zJCQxIiwiZGVlcERlY29yYXRvciQkMSIsInNoYWxsb3dEZWNvcmF0b3IiLCJyZWZEZWNvcmF0b3IkJDEiLCJyZWZTdHJ1Y3REZWNvcmF0b3IiLCJnZXRFbmhhbmNlckZyb21PcHRpb25zIiwib3B0aW9ucyIsImNyZWF0ZU9ic2VydmFibGUiLCJhcmcyIiwiYXJnMyIsIm9ic2VydmFibGVGYWN0b3JpZXMiLCJib3giLCJpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvciIsIk9ic2VydmFibGVWYWx1ZSQkMSIsImluaXRpYWxWYWx1ZXMiLCJjcmVhdGVPYnNlcnZhYmxlQXJyYXkkJDEiLCJPYnNlcnZhYmxlTWFwJCQxIiwicHJvcHMiLCJleHRlbmRPYnNlcnZhYmxlJCQxIiwiZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zJCQxIiwiYmFzZSIsImNyZWF0ZUR5bmFtaWNPYnNlcnZhYmxlT2JqZWN0JCQxIiwiZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzJCQxIiwicmVmIiwic2hhbGxvdyIsInN0cnVjdCIsIm1ldGhvZE5hbWUiLCJjb21wdXRlZERlY29yYXRvciQkMSIsImluc3RhbmNlIiwiZ2V0JCQxIiwic2V0JCQxIiwiYWRkQ29tcHV0ZWRQcm9wIiwiY29udGV4dCIsImNvbXB1dGVkU3RydWN0RGVjb3JhdG9yIiwiZXF1YWxzIiwiY29tcHV0ZWQkJDEiLCJhcmcxIiwib3B0cyIsIkNvbXB1dGVkVmFsdWUkJDEiLCJjcmVhdGVBY3Rpb24kJDEiLCJhY3Rpb25OYW1lIiwiZm4iLCJleGVjdXRlQWN0aW9uJCQxIiwiaXNNb2J4QWN0aW9uIiwic2NvcGUiLCJydW5JbmZvIiwic3RhcnRBY3Rpb24iLCJlbmRBY3Rpb24iLCJub3RpZnlTcHkiLCJpc1NweUVuYWJsZWQkJDEiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwibCIsImZsYXR0ZW5kQXJncyIsInNweVJlcG9ydFN0YXJ0JCQxIiwidHlwZSIsInByZXZEZXJpdmF0aW9uIiwidW50cmFja2VkU3RhcnQkJDEiLCJwcmV2QWxsb3dTdGF0ZUNoYW5nZXMiLCJhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0JCQxIiwiYWxsb3dTdGF0ZUNoYW5nZXNFbmQkJDEiLCJ1bnRyYWNrZWRFbmQkJDEiLCJzcHlSZXBvcnRFbmQkJDEiLCJ0aW1lIiwiYWxsb3dTdGF0ZUNoYW5nZXMkJDEiLCJwcmV2IiwiYWxsb3dTdGF0ZUNoYW5nZXMiLCJhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkJCQxIiwiY29tcHV0YXRpb25EZXB0aCIsIl9zdXBlciIsIl90aGlzIiwiaGFzVW5yZXBvcnRlZENoYW5nZSIsInNweVJlcG9ydCQkMSIsImRlaGFuY2VWYWx1ZSIsImRlaGFuY2VyIiwicHJlcGFyZU5ld1ZhbHVlIiwiVU5DSEFOR0VEIiwic2V0TmV3VmFsdWUiLCJjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMSIsImhhc0ludGVyY2VwdG9ycyQkMSIsImNoYW5nZSIsImludGVyY2VwdENoYW5nZSQkMSIsImhhc0xpc3RlbmVycyQkMSIsIm5vdGlmeUxpc3RlbmVycyQkMSIsImludGVyY2VwdCIsImhhbmRsZXIiLCJyZWdpc3RlckludGVyY2VwdG9yJCQxIiwib2JzZXJ2ZSIsImZpcmVJbW1lZGlhdGVseSIsInJlZ2lzdGVyTGlzdGVuZXIkJDEiLCJ0b0pTT04iLCJ2YWx1ZU9mIiwidG9QcmltaXRpdmUiLCJpc09ic2VydmFibGVWYWx1ZSQkMSIsImRlcGVuZGVuY2llc1N0YXRlIiwib2JzZXJ2aW5nIiwibmV3T2JzZXJ2aW5nIiwicnVuSWQiLCJVUF9UT19EQVRFIiwidW5ib3VuZERlcHNDb3VudCIsIl9fbWFwaWQiLCJDYXVnaHRFeGNlcHRpb24kJDEiLCJpc0NvbXB1dGluZyIsImlzUnVubmluZ1NldHRlciIsImlzVHJhY2luZyIsIlRyYWNlTW9kZSQkMSIsIk5PTkUiLCJkZXJpdmF0aW9uIiwic2V0dGVyIiwiY29tcGFyZVN0cnVjdHVyYWwiLCJyZXF1aXJlc1JlYWN0aW9uIiwia2VlcEFsaXZlIiwib25CZWNvbWVTdGFsZSIsInByb3BhZ2F0ZU1heWJlQ2hhbmdlZCQkMSIsImluQmF0Y2giLCJzaXplIiwic2hvdWxkQ29tcHV0ZSQkMSIsIndhcm5BYm91dFVudHJhY2tlZFJlYWQiLCJjb21wdXRlVmFsdWUiLCJ0cmFja0FuZENvbXB1dGUiLCJwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQkJDEiLCJyZXN1bHQiLCJpc0NhdWdodEV4Y2VwdGlvbiQkMSIsImNhdXNlIiwicGVlayIsIndhc1N1c3BlbmRlZCIsImNoYW5nZWQiLCJ0cmFjayIsInRyYWNrRGVyaXZlZEZ1bmN0aW9uJCQxIiwiZGlzYWJsZUVycm9yQm91bmRhcmllcyIsInN1c3BlbmQiLCJjbGVhck9ic2VydmluZyQkMSIsImZpcnN0VGltZSIsInByZXZWYWx1ZSIsImF1dG9ydW4kJDEiLCJwcmV2VSIsImxvZyIsImNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiIsIndhcm4iLCJpc0NvbXB1dGVkVmFsdWUkJDEiLCJJRGVyaXZhdGlvblN0YXRlJCQxIiwiU1RBTEUiLCJQT1NTSUJMWV9TVEFMRSIsInByZXZVbnRyYWNrZWQiLCJvYnMiLCJvYmoiLCJjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMCQkMSIsImlzQ29tcHV0aW5nRGVyaXZhdGlvbiQkMSIsInRyYWNraW5nRGVyaXZhdGlvbiIsImhhc09ic2VydmVycyQkMSIsImVuZm9yY2VBY3Rpb25zIiwiZiIsInByZXZUcmFja2luZyIsImJpbmREZXBlbmRlbmNpZXMiLCJwcmV2T2JzZXJ2aW5nIiwibG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlIiwiaTAiLCJkZXAiLCJyZW1vdmVPYnNlcnZlciQkMSIsImFkZE9ic2VydmVyJCQxIiwidW50cmFja2VkJCQxIiwiYWN0aW9uJCQxIiwicGVyc2lzdGVudEtleXMiLCJNb2JYR2xvYmFscyQkMSIsInZlcnNpb24iLCJwZW5kaW5nVW5vYnNlcnZhdGlvbnMiLCJwZW5kaW5nUmVhY3Rpb25zIiwiaXNSdW5uaW5nUmVhY3Rpb25zIiwic3B5TGlzdGVuZXJzIiwiZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzIiwiY2FuTWVyZ2VHbG9iYWxTdGF0ZSIsImlzb2xhdGVDYWxsZWQiLCJnbG9iYWwiLCJnZXRHbG9iYWwkJDEiLCJfX21vYnhJbnN0YW5jZUNvdW50IiwiX19tb2J4R2xvYmFscyIsInNldFRpbWVvdXQiLCJpc29sYXRlR2xvYmFsU3RhdGUkJDEiLCJnZXRHbG9iYWxTdGF0ZSQkMSIsInJlc2V0R2xvYmFsU3RhdGUkJDEiLCJkZWZhdWx0R2xvYmFscyIsIndpbmRvdyIsImdldE9ic2VydmVycyQkMSIsIm5vZGUiLCJhZGQiLCJkZWxldGUiLCJxdWV1ZUZvclVub2JzZXJ2YXRpb24kJDEiLCJydW5SZWFjdGlvbnMkJDEiLCJsb2dUcmFjZUluZm8iLCJCUkVBSyIsImxpbmVzIiwicHJpbnREZXBUcmVlIiwiZ2V0RGVwZW5kZW5jeVRyZWUkJDEiLCJGdW5jdGlvbiIsImpvaW4iLCJ0cmVlIiwiZGVwdGgiLCJkZXBlbmRlbmNpZXMiLCJjaGlsZCIsIlJlYWN0aW9uJCQxIiwib25JbnZhbGlkYXRlIiwiZXJyb3JIYW5kbGVyIiwiaXNEaXNwb3NlZCIsIl9pc1NjaGVkdWxlZCIsIl9pc1RyYWNrUGVuZGluZyIsIl9pc1J1bm5pbmciLCJzY2hlZHVsZSIsImlzU2NoZWR1bGVkIiwicnVuUmVhY3Rpb24iLCJyZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24iLCJub3RpZnkiLCJkaXNwb3NlIiwiZ2V0RGlzcG9zZXIiLCJiaW5kIiwidHJhY2UiLCJlbnRlckJyZWFrUG9pbnQiLCJ0cmFjZSQkMSIsIm9uUmVhY3Rpb25FcnJvciQkMSIsImlkeCIsInNwbGljZSIsIk1BWF9SRUFDVElPTl9JVEVSQVRJT05TIiwicmVhY3Rpb25TY2hlZHVsZXIiLCJydW5SZWFjdGlvbnNIZWxwZXIiLCJhbGxSZWFjdGlvbnMiLCJpdGVyYXRpb25zIiwicmVtYWluaW5nUmVhY3Rpb25zIiwiaXNSZWFjdGlvbiQkMSIsInNldFJlYWN0aW9uU2NoZWR1bGVyJCQxIiwiYmFzZVNjaGVkdWxlciIsImV2ZW50IiwibGlzdGVuZXJzIiwic3B5UmVwb3J0U3RhcnQiLCJFTkRfRVZFTlQiLCJzcHlSZXBvcnRFbmQiLCJzcHkkJDEiLCJmaWx0ZXIiLCJkb250UmVhc3NpZ25GaWVsZHMiLCJuYW1lZEFjdGlvbkRlY29yYXRvciQkMSIsImluaXRpYWxpemVyXzEiLCJhY3Rpb25GaWVsZERlY29yYXRvciQkMSIsImJvdW5kQWN0aW9uRGVjb3JhdG9yJCQxIiwiYXBwbHlUb0luc3RhbmNlIiwiZGVmaW5lQm91bmRBY3Rpb24kJDEiLCJhcmc0IiwiYm91bmQiLCJydW5JbkFjdGlvbiQkMSIsImlzQWN0aW9uJCQxIiwidmlldyIsInJ1blN5bmMiLCJzY2hlZHVsZXIiLCJkZWxheSIsInJlYWN0aW9uJCQxIiwicmVhY3Rpb25SdW5uZXIiLCJvbkVycm9yIiwic2NoZWR1bGVyXzEiLCJjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyIsImlzU2NoZWR1bGVkXzEiLCJydW4iLCJleHByZXNzaW9uIiwiZWZmZWN0IiwiZWZmZWN0QWN0aW9uIiwid3JhcEVycm9ySGFuZGxlciIsIm5leHRWYWx1ZSIsImJhc2VGbiIsImludGVyY2VwdEhvb2siLCJob29rIiwiZ2V0QXRvbSQkMSIsImNiIiwibGlzdGVuZXJzS2V5Iiwib3JpZyIsImhvb2tMaXN0ZW5lcnMiLCJjb25maWd1cmUkJDEiLCJlYSIsImlzb2xhdGVHbG9iYWxTdGF0ZSIsIl9sb29wXzEiLCJwcm9wZXJ0eURlY29yYXRvcnMiLCJldmVyeSIsIm5ld0Rlc2NyaXB0b3IiLCJyZWR1Y2UiLCJhY2NEZXNjcmlwdG9yIiwicHJvcGVydGllcyIsImlzQ29tcHV0ZWQkJDEiLCJyZXN1bHREZXNjcmlwdG9yIiwicHJvcGVydHkiLCJub2RlVG9EZXBlbmRlbmN5VHJlZSIsImdldE9ic2VydmVyVHJlZSQkMSIsIm5vZGVUb09ic2VydmVyVHJlZSIsImdlbmVyYXRvcklkIiwiZmxvdyQkMSIsImdlbmVyYXRvciIsImN0eCIsImdlbiIsInJlamVjdG9yIiwicGVuZGluZ1Byb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0ZXBJZCIsIm9uRnVsZmlsbGVkIiwicmV0Iiwib25SZWplY3RlZCIsImVyciIsInRocm93IiwidGhlbiIsImNhbmNlbCIsImNhbmNlbFByb21pc2UiLCJyZXNfMSIsInJldHVybiIsInlpZWxkZWRQcm9taXNlIiwicHJvbWlzZSIsImludGVyY2VwdFJlYWRzJCQxIiwicHJvcE9ySGFuZGxlciIsImdldEFkbWluaXN0cmF0aW9uJCQxIiwiaW50ZXJjZXB0JCQxIiwiaW50ZXJjZXB0UHJvcGVydHkiLCJpbnRlcmNlcHRJbnRlcmNlcHRhYmxlIiwiX2lzQ29tcHV0ZWQkJDEiLCJ2YWx1ZXMiLCJoYXMiLCJpc0NvbXB1dGVkUHJvcCQkMSIsIl9pc09ic2VydmFibGUiLCJpc09ic2VydmFibGVQcm9wJCQxIiwia2V5cyQkMSIsImdldEtleXMiLCJpbmRleCIsInZhbHVlcyQkMSIsImVudHJpZXMkJDEiLCJ2YWx1ZXNfMSIsImtleV8xIiwiYWRtIiwiZXhpc3RpbmdPYnNlcnZhYmxlIiwid3JpdGUiLCJkZWZhdWx0RW5oYW5jZXIiLCJwYXJzZUludCIsInJlbW92ZSQkMSIsInJlbW92ZSIsImhhcyQkMSIsIm9ic2VydmUkJDEiLCJwcm9wT3JDYiIsImNiT3JGaXJlIiwib2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSIsIm9ic2VydmVPYnNlcnZhYmxlIiwiZGVmYXVsdE9wdGlvbnMiLCJkZXRlY3RDeWNsZXMiLCJleHBvcnRNYXBzQXNPYmplY3RzIiwicmVjdXJzZUV2ZXJ5dGhpbmciLCJ0b0pTSGVscGVyIiwic291cmNlIiwiX19hbHJlYWR5U2VlbiIsInRvQWRkIiwicmVzXzIiLCJyZXNfMyIsInRvSlMkJDEiLCJfaSIsInBvcCIsImdldEF0b21Gcm9tQXJncyIsIkxPRyIsInRyYW5zYWN0aW9uJCQxIiwidGhpc0FyZyIsIndoZW4kJDEiLCJwcmVkaWNhdGUiLCJ3aGVuUHJvbWlzZSIsIl93aGVuIiwidGltZW91dEhhbmRsZSIsInRpbWVvdXQiLCJkaXNwb3NlciIsImNsZWFyVGltZW91dCIsImdldEFkbSIsIm9iamVjdFByb3h5VHJhcHMiLCJkZWxldGVQcm9wZXJ0eSIsIm93bktleXMiLCJrZXlzQXRvbSIsIlJlZmxlY3QiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsIlByb3h5IiwiaW50ZXJjZXB0YWJsZSIsImludGVyY2VwdG9ycyIsImxpc3RlbmFibGUiLCJjaGFuZ2VMaXN0ZW5lcnMiLCJNQVhfU1BMSUNFX1NJWkUiLCJhcnJheVRyYXBzIiwiZ2V0QXJyYXlMZW5ndGgiLCJhcnJheUV4dGVuc2lvbnMiLCJpc05hTiIsInNldEFycmF5TGVuZ3RoIiwib3duZWQiLCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiIsInNwbGljZVdpdGhBcnJheSIsImxhc3RLbm93bkxlbmd0aCIsIm5ld1YiLCJvbGRWIiwiZGVoYW5jZVZhbHVlcyIsImFkZGVkIiwiYWRkZWRDb3VudCIsInJlbW92ZWQiLCJyZW1vdmVkQ291bnQiLCJuZXdMZW5ndGgiLCJjdXJyZW50TGVuZ3RoIiwibmV3SXRlbXMiLCJ1cGRhdGVBcnJheUxlbmd0aCIsIm9sZExlbmd0aCIsImRlbHRhIiwiZGVsZXRlQ291bnQiLCJNYXRoIiwibWF4IiwibWluIiwibGVuZ3RoRGVsdGEiLCJzcGxpY2VJdGVtc0ludG9WYWx1ZXMiLCJub3RpZnlBcnJheVNwbGljZSIsIm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUiLCJjbGVhciIsInJlcGxhY2UiLCJ0b0pTIiwiaXRlbXMiLCJzaGlmdCIsInVuc2hpZnQiLCJyZXZlcnNlIiwiY2xvbmUiLCJzb3J0IiwiY29tcGFyZUZuIiwiZnVuY05hbWUiLCJpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uIiwiT2JzZXJ2YWJsZU1hcE1hcmtlciIsImluaXRpYWxEYXRhIiwiX2tleXNBdG9tIiwidG9TdHJpbmdUYWciLCJfZGF0YSIsIl9oYXNNYXAiLCJtZXJnZSIsIl9oYXMiLCJfdXBkYXRlSGFzTWFwRW50cnkiLCJoYXNLZXkiLCJfdXBkYXRlVmFsdWUiLCJfYWRkVmFsdWUiLCJlbnRyeSIsInNlbGYiLCJuZXh0SW5kZXgiLCJtYWtlSXRlcmFibGUiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJlXzEiLCJfYyIsIl9kIiwiZV8xXzEiLCJvdGhlciIsImVfMiIsImVfMl8xIiwibmV3S2V5cyIsIm9sZEtleXMiLCJtaXNzaW5nS2V5cyIsImsiLCJ0b1BPSk8iLCJlXzMiLCJlXzNfMSIsIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMSIsInJlYWQiLCJwZW5kaW5nS2V5cyIsImV4aXN0cyIsImdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWckJDEiLCJub3RpZnlQcm9wZXJ0eUFkZGl0aW9uIiwicHJvcGVydHlPd25lciIsImdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnJCQxIiwib2xkT2JzZXJ2YWJsZSIsImlsbGVnYWxBY2Nlc3MiLCJvd25lciIsImlzRXh0ZW5zaWJsZSIsIm9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MiLCJjb21wdXRlZFByb3BlcnR5Q29uZmlncyIsImdldEFkbWluaXN0cmF0aW9uRm9yQ29tcHV0ZWRQcm9wT3duZXIiLCJpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiIsImFueVRoaW5nIiwiZ2V0RGVidWdOYW1lJCQxIiwibmFtZWQiLCJlcSIsImFTdGFjayIsImJTdGFjayIsImRlZXBFcSIsInVud3JhcCIsImNsYXNzTmFtZSIsImFyZUFycmF5cyIsImFDdG9yIiwiYkN0b3IiLCJoYXMkMSIsImciLCJ0ZXN0Q29kZU1pbmlmaWNhdGlvbiIsIklHTk9SRV9NT0JYX01JTklGWV9XQVJOSU5HIiwiX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJpbmplY3RNb2J4Iiwic3B5IiwiZXh0cmFzIiwiZ2V0RGVidWdOYW1lIiwiJG1vYngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsImxlbiIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIlN0b3JlIiwiYWN0aW9uIiwic3RyIiwibnVtYmVyIiwic3RvcmUiLCJvYnNlcnZhYmxlIiwiY29tcHV0ZWQiLCJyZWFjdGlvbiIsImFyciIsInJ1bkluQWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztB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ZjtBQUNILENBSFUsQ0FBWCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9ieDIuanNcIik7XG4iLCIvKiogTW9iWCAtIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAxOCAtIE1JVCBMaWNlbnNlZCAqL1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbnZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cblxudmFyIE9CRlVTQ0FURURfRVJST1IkJDEgPSBcIkFuIGludmFyaWFudCBmYWlsZWQsIGhvd2V2ZXIgdGhlIGVycm9yIGlzIG9iZnVzY2F0ZWQgYmVjYXVzZSB0aGlzIGlzIGFuIHByb2R1Y3Rpb24gYnVpbGQuXCI7XG52YXIgRU1QVFlfQVJSQVkkJDEgPSBbXTtcbk9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkkJDEpO1xudmFyIEVNUFRZX09CSkVDVCQkMSA9IHt9O1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9PQkpFQ1QkJDEpO1xuZnVuY3Rpb24gZ2V0TmV4dElkJCQxKCkge1xuICAgIHJldHVybiArK2dsb2JhbFN0YXRlJCQxLm1vYnhHdWlkO1xufVxuZnVuY3Rpb24gZmFpbCQkMShtZXNzYWdlKSB7XG4gICAgaW52YXJpYW50JCQxKGZhbHNlLCBtZXNzYWdlKTtcbiAgICB0aHJvdyBcIlhcIjsgLy8gdW5yZWFjaGFibGVcbn1cbmZ1bmN0aW9uIGludmFyaWFudCQkMShjaGVjaywgbWVzc2FnZSkge1xuICAgIGlmICghY2hlY2spXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBcIiArIChtZXNzYWdlIHx8IE9CRlVTQ0FURURfRVJST1IkJDEpKTtcbn1cbi8qKlxuICogUHJpbnRzIGEgZGVwcmVjYXRpb24gbWVzc2FnZSwgYnV0IG9ubHkgb25lIHRpbWUuXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBkZXByZWNhdGVkIG1lc3NhZ2Ugd2FzIGFscmVhZHkgcHJpbnRlZCBiZWZvcmVcbiAqL1xudmFyIGRlcHJlY2F0ZWRNZXNzYWdlcyA9IFtdO1xuZnVuY3Rpb24gZGVwcmVjYXRlZCQkMShtc2csIHRoaW5nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGluZykge1xuICAgICAgICByZXR1cm4gZGVwcmVjYXRlZCQkMShcIidcIiArIG1zZyArIFwiJywgdXNlICdcIiArIHRoaW5nICsgXCInIGluc3RlYWQuXCIpO1xuICAgIH1cbiAgICBpZiAoZGVwcmVjYXRlZE1lc3NhZ2VzLmluZGV4T2YobXNnKSAhPT0gLTEpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZXByZWNhdGVkTWVzc2FnZXMucHVzaChtc2cpO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbbW9ieF0gRGVwcmVjYXRlZDogXCIgKyBtc2cpO1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGlzIGludm9rZWQgYXQgbW9zdCBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlJCQxKGZ1bmMpIHtcbiAgICB2YXIgaW52b2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnZva2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbnZva2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxudmFyIG5vb3AkJDEgPSBmdW5jdGlvbiAoKSB7IH07XG5mdW5jdGlvbiB1bmlxdWUkJDEobGlzdCkge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKHJlcy5pbmRleE9mKGl0ZW0pID09PSAtMSlcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBpc09iamVjdCQkMSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0JCQxKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wJCQxKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkSGlkZGVuRmluYWxQcm9wJCQxKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzUHJvcGVydHlDb25maWd1cmFibGUkJDEob2JqZWN0LCBwcm9wKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgcmV0dXJuICFkZXNjcmlwdG9yIHx8IChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gZmFsc2UgJiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gZmFsc2UpO1xufVxuZnVuY3Rpb24gYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUkJDEob2JqZWN0LCBwcm9wKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZSQkMShvYmplY3QsIHByb3ApKVxuICAgICAgICBmYWlsJCQxKFwiQ2Fubm90IG1ha2UgcHJvcGVydHkgJ1wiICsgcHJvcC50b1N0cmluZygpICsgXCInIG9ic2VydmFibGUsIGl0IGlzIG5vdCBjb25maWd1cmFibGUgYW5kIHdyaXRhYmxlIGluIHRoZSB0YXJnZXQgb2JqZWN0XCIpO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMShuYW1lLCBjbGF6eikge1xuICAgIHZhciBwcm9wTmFtZSA9IFwiaXNNb2JYXCIgKyBuYW1lO1xuICAgIGNsYXp6LnByb3RvdHlwZVtwcm9wTmFtZV0gPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gaXNPYmplY3QkJDEoeCkgJiYgeFtwcm9wTmFtZV0gPT09IHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSwgZGlzcmVnYXJkaW5nIG9ic2VydmFiaWxpdHkuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlJCQxKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSB8fCBpc09ic2VydmFibGVBcnJheSQkMSh4KTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwJCQxKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gZ2V0TWFwTGlrZUtleXMkJDEobWFwKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QkJDEobWFwKSlcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwKSlcbiAgICAgICAgcmV0dXJuIG1hcC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDEpLCBrZXkgPSBfYlswXTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuICAgIGlmIChpc0VTNk1hcCQkMShtYXApIHx8IGlzT2JzZXJ2YWJsZU1hcCQkMShtYXApKVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAua2V5cygpKTtcbiAgICByZXR1cm4gZmFpbCQkMShcIkNhbm5vdCBnZXQga2V5cyBmcm9tICdcIiArIG1hcCArIFwiJ1wiKTtcbn1cbmZ1bmN0aW9uIHRvUHJpbWl0aXZlJCQxKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xufVxuXG52YXIgJG1vYngkJDEgPSBTeW1ib2woXCJtb2J4IGFkbWluaXN0cmF0aW9uXCIpO1xudmFyIEF0b20kJDEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGF0b20uIEZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgaXQgaXMgcmVjb21tZW5kZWQgdG8gZ2l2ZSBpdCBhIG5hbWUuXG4gICAgICogVGhlIG9uQmVjb21lT2JzZXJ2ZWQgYW5kIG9uQmVjb21lVW5vYnNlcnZlZCBjYWxsYmFja3MgY2FuIGJlIHVzZWQgZm9yIHJlc291cmNlIG1hbmFnZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQXRvbSQkMShuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiQXRvbUBcIiArIGdldE5leHRJZCQkMSgpOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlOyAvLyBmb3IgZWZmZWN0aXZlIHVub2JzZXJ2aW5nLiBCYXNlQXRvbSBoYXMgdHJ1ZSwgZm9yIGV4dHJhIG9wdGltaXphdGlvbiwgc28gaXRzIG9uQmVjb21lVW5vYnNlcnZlZCBuZXZlciBnZXRzIGNhbGxlZCwgYmVjYXVzZSBpdCdzIG5vdCBuZWVkZWRcbiAgICAgICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xuICAgIH1cbiAgICBBdG9tJCQxLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBdG9tJCQxLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gbm90aWZ5IG1vYnggdGhhdCB5b3VyIGF0b20gaGFzIGJlZW4gdXNlZCBzb21laG93LlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBjdXJyZW50bHkgYSByZWFjdGl2ZSBjb250ZXh0LlxuICAgICAqL1xuICAgIEF0b20kJDEucHJvdG90eXBlLnJlcG9ydE9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVwb3J0T2JzZXJ2ZWQkJDEodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgX2FmdGVyXyB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZCB0byBzaWduYWwgbW9ieCB0aGF0IGFsbCBpdHMgb2JzZXJ2ZXJzIHNob3VsZCBpbnZhbGlkYXRlLlxuICAgICAqL1xuICAgIEF0b20kJDEucHJvdG90eXBlLnJlcG9ydENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZCQkMSh0aGlzKTtcbiAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICB9O1xuICAgIEF0b20kJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEF0b20kJDE7XG59KCkpO1xudmFyIGlzQXRvbSQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJBdG9tXCIsIEF0b20kJDEpO1xuZnVuY3Rpb24gY3JlYXRlQXRvbSQkMShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcCQkMTsgfVxuICAgIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9IG5vb3AkJDE7IH1cbiAgICB2YXIgYXRvbSA9IG5ldyBBdG9tJCQxKG5hbWUpO1xuICAgIC8vIGRlZmF1bHQgYG5vb3BgIGxpc3RlbmVyIHdpbGwgbm90IGluaXRpYWxpemUgdGhlIGhvb2sgU2V0XG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wJCQxKSB7XG4gICAgICAgIG9uQmVjb21lT2JzZXJ2ZWQkJDEoYXRvbSwgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCQkMSkge1xuICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQkJDEoYXRvbSwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBhdG9tO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbCQkMShhLCBiKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn1cbnZhciBjb21wYXJlciQkMSA9IHtcbiAgICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgICBzdHJ1Y3R1cmFsOiBzdHJ1Y3R1cmFsQ29tcGFyZXIsXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbXBhcmVyXG59O1xuXG52YXIgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDEgPSBTeW1ib2woXCJtb2J4IGRpZCBydW4gbGF6eSBpbml0aWFsaXplcnNcIik7XG52YXIgbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxID0gU3ltYm9sKFwibW9ieCBwZW5kaW5nIGRlY29yYXRvcnNcIik7XG52YXIgZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xudmFyIG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5SW5pdGlhbGl6ZXJEZXNjcmlwdG9yKHByb3AsIGVudW1lcmFibGUpIHtcbiAgICB2YXIgY2FjaGUgPSBlbnVtZXJhYmxlID8gZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA6IG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGU7XG4gICAgcmV0dXJuIChjYWNoZVtwcm9wXSB8fFxuICAgICAgICAoY2FjaGVbcHJvcF0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXRbbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDFdID09PSB0cnVlKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGRlY29yYXRvcnMgPSB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxXTtcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICBhZGRIaWRkZW5Qcm9wJCQxKHRhcmdldCwgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDEsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVjb3JhdG9ycykge1xuICAgICAgICAgICAgdmFyIGQgPSBkZWNvcmF0b3JzW2tleV07XG4gICAgICAgICAgICBkLnByb3BlcnR5Q3JlYXRvcih0YXJnZXQsIGQucHJvcCwgZC5kZXNjcmlwdG9yLCBkLmRlY29yYXRvclRhcmdldCwgZC5kZWNvcmF0b3JBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvcERlY29yYXRvciQkMShwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUsIHByb3BlcnR5Q3JlYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3JGYWN0b3J5KCkge1xuICAgICAgICB2YXIgZGVjb3JhdG9yQXJndW1lbnRzO1xuICAgICAgICB2YXIgZGVjb3JhdG9yID0gZnVuY3Rpb24gZGVjb3JhdGUkJDEodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCBhcHBseUltbWVkaWF0ZWx5XG4gICAgICAgIC8vIFRoaXMgaXMgYSBzcGVjaWFsIHBhcmFtZXRlciB0byBzaWduYWwgdGhlIGRpcmVjdCBhcHBsaWNhdGlvbiBvZiBhIGRlY29yYXRvciwgYWxsb3cgZXh0ZW5kT2JzZXJ2YWJsZSB0byBza2lwIHRoZSBlbnRpcmUgdHlwZSBkZWNvcmF0aW9uIHBhcnQsXG4gICAgICAgIC8vIGFzIHRoZSBpbnN0YW5jZSB0byBhcHBseSB0aGUgZGVjb3JhdG9yIHRvIGVxdWFscyB0aGUgdGFyZ2V0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKGFwcGx5SW1tZWRpYXRlbHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCB0YXJnZXQsIGRlY29yYXRvckFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFxdWFja3NMaWtlQURlY29yYXRvciQkMShhcmd1bWVudHMpKVxuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmhlcml0ZWREZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9ycyQkMV07XG4gICAgICAgICAgICAgICAgYWRkSGlkZGVuUHJvcCQkMSh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycyQkMSwgX19hc3NpZ24oe30sIGluaGVyaXRlZERlY29yYXRvcnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnMkJDFdW3Byb3BdID0ge1xuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yOiBwcm9wZXJ0eUNyZWF0b3IsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcixcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JUYXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHM6IGRlY29yYXRvckFyZ3VtZW50c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IkJDEoYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQGRlY29yYXRvclxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gRU1QVFlfQVJSQVkkJDE7XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAZGVjb3JhdG9yKGFyZ3MpXG4gICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvciQkMShhcmdzKSB7XG4gICAgcmV0dXJuICgoKGFyZ3MubGVuZ3RoID09PSAyIHx8IGFyZ3MubGVuZ3RoID09PSAzKSAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gXCJzdHJpbmdcIikgfHxcbiAgICAgICAgKGFyZ3MubGVuZ3RoID09PSA0ICYmIGFyZ3NbM10gPT09IHRydWUpKTtcbn1cblxuZnVuY3Rpb24gZGVlcEVuaGFuY2VyJCQxKHYsIF8sIG5hbWUpIHtcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlJCQxKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5hcnJheSh2LCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm9iamVjdCh2LCB1bmRlZmluZWQsIHsgbmFtZTogbmFtZSB9KTtcbiAgICBpZiAoaXNFUzZNYXAkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm1hcCh2LCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBzaGFsbG93RW5oYW5jZXIkJDEodiwgXywgbmFtZSkge1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh2KSB8fCBpc09ic2VydmFibGVBcnJheSQkMSh2KSB8fCBpc09ic2VydmFibGVNYXAkJDEodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5hcnJheSh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIGlmIChpc1BsYWluT2JqZWN0JCQxKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIGlmIChpc0VTNk1hcCQkMSh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUkJDEubWFwKHYsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHJlZmVyZW5jZUVuaGFuY2VyJCQxKG5ld1ZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlciQkMSh2LCBvbGRWYWx1ZSwgbmFtZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNPYnNlcnZhYmxlJCQxKHYpKVxuICAgICAgICB0aHJvdyBcIm9ic2VydmFibGUuc3RydWN0IHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIG9ic2VydmFibGUgdmFsdWVzXCI7XG4gICAgaWYgKGRlZXBFcXVhbCQkMSh2LCBvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIkJDEoZW5oYW5jZXIpIHtcbiAgICBpbnZhcmlhbnQkJDEoZW5oYW5jZXIpO1xuICAgIHZhciBkZWNvcmF0b3IgPSBjcmVhdGVQcm9wRGVjb3JhdG9yJCQxKHRydWUsIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgX2RlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQkJDEoIWRlc2NyaXB0b3IgfHwgIWRlc2NyaXB0b3IuZ2V0LCBcIkBvYnNlcnZhYmxlIGNhbm5vdCBiZSB1c2VkIG9uIGdldHRlciAocHJvcGVydHkgXFxcIlwiICsgcHJvcGVydHlOYW1lICsgXCJcXFwiKSwgdXNlIEBjb21wdXRlZCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGlhbFZhbHVlID0gZGVzY3JpcHRvclxuICAgICAgICAgICAgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyXG4gICAgICAgICAgICAgICAgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGFyZ2V0KVxuICAgICAgICAgICAgICAgIDogZGVzY3JpcHRvci52YWx1ZVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGFzT2JzZXJ2YWJsZU9iamVjdCQkMSh0YXJnZXQpLmFkZE9ic2VydmFibGVQcm9wKHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBlbmhhbmNlcik7XG4gICAgfSk7XG4gICAgdmFyIHJlcyA9IFxuICAgIC8vIEV4dHJhIHByb2Nlc3MgY2hlY2tzLCBhcyB0aGlzIGhhcHBlbnMgZHVyaW5nIG1vZHVsZSBpbml0aWFsaXphdGlvblxuICAgIHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICA/IGZ1bmN0aW9uIG9ic2VydmFibGVEZWNvcmF0b3IoKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHdyYXBwZXIgZnVuY3Rpb24gaXMganVzdCB0byBkZXRlY3QgaWxsZWdhbCBkZWNvcmF0b3IgaW52b2NhdGlvbnMsIGRlcHJlY2F0ZSBpbiBhIG5leHQgdmVyc2lvblxuICAgICAgICAgICAgLy8gYW5kIHNpbXBseSByZXR1cm4gdGhlIGNyZWF0ZWQgcHJvcCBkZWNvcmF0b3JcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbCQkMShcIkluY29ycmVjdCBkZWNvcmF0b3IgaW52b2NhdGlvbi4gQG9ic2VydmFibGUgZGVjb3JhdG9yIGRvZXNuJ3QgZXhwZWN0IGFueSBhcmd1bWVudHNcIik7XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgOiBkZWNvcmF0b3I7XG4gICAgcmVzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gUHJlZGVmaW5lZCBiYWdzIG9mIGNyZWF0ZSBvYnNlcnZhYmxlIG9wdGlvbnMsIHRvIGF2b2lkIGFsbG9jYXRpbmcgdGVtcG9yYXJpbHkgb3B0aW9uIG9iamVjdHNcbi8vIGluIHRoZSBtYWpvcml0eSBvZiBjYXNlc1xudmFyIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMSA9IHtcbiAgICBkZWVwOiB0cnVlLFxuICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0RGVjb3JhdG9yOiB1bmRlZmluZWQsXG4gICAgcHJveHk6IHRydWVcbn07XG5PYmplY3QuZnJlZXplKGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMSk7XG5mdW5jdGlvbiBhc3NlcnRWYWxpZE9wdGlvbihrZXkpIHtcbiAgICBpZiAoIS9eKGRlZXB8bmFtZXxkZWZhdWx0RGVjb3JhdG9yfHByb3h5KSQvLnRlc3Qoa2V5KSlcbiAgICAgICAgZmFpbCQkMShcImludmFsaWQgb3B0aW9uIGZvciAoZXh0ZW5kKW9ic2VydmFibGU6IFwiICsga2V5KTtcbn1cbmZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEodGhpbmcpIHtcbiAgICBpZiAodGhpbmcgPT09IG51bGwgfHwgdGhpbmcgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMTtcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4geyBuYW1lOiB0aGluZywgZGVlcDogdHJ1ZSwgcHJveHk6IHRydWUgfTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gZmFpbCQkMShcImV4cGVjdGVkIG9wdGlvbnMgb2JqZWN0XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChhc3NlcnRWYWxpZE9wdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbn1cbnZhciBkZWVwRGVjb3JhdG9yJCQxID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIkJDEoZGVlcEVuaGFuY2VyJCQxKTtcbnZhciBzaGFsbG93RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIkJDEoc2hhbGxvd0VuaGFuY2VyJCQxKTtcbnZhciByZWZEZWNvcmF0b3IkJDEgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlciQkMShyZWZlcmVuY2VFbmhhbmNlciQkMSk7XG52YXIgcmVmU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIkJDEocmVmU3RydWN0RW5oYW5jZXIkJDEpO1xuZnVuY3Rpb24gZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvclxuICAgICAgICA/IG9wdGlvbnMuZGVmYXVsdERlY29yYXRvci5lbmhhbmNlclxuICAgICAgICA6IG9wdGlvbnMuZGVlcCA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gcmVmZXJlbmNlRW5oYW5jZXIkJDFcbiAgICAgICAgICAgIDogZGVlcEVuaGFuY2VyJCQxO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXG4gKiBAcGFyYW0gdiB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlY29tZSBvYnNlcnZhYmxlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYsIGFyZzIsIGFyZzMpIHtcbiAgICAvLyBAb2JzZXJ2YWJsZSBzb21lUHJvcDtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZGVlcERlY29yYXRvciQkMS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlJCQxKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIHZhciByZXMgPSBpc1BsYWluT2JqZWN0JCQxKHYpXG4gICAgICAgID8gb2JzZXJ2YWJsZSQkMS5vYmplY3QodiwgYXJnMiwgYXJnMylcbiAgICAgICAgOiBBcnJheS5pc0FycmF5KHYpXG4gICAgICAgICAgICA/IG9ic2VydmFibGUkJDEuYXJyYXkodiwgYXJnMilcbiAgICAgICAgICAgIDogaXNFUzZNYXAkJDEodilcbiAgICAgICAgICAgICAgICA/IG9ic2VydmFibGUkJDEubWFwKHYsIGFyZzIpXG4gICAgICAgICAgICAgICAgOiB2O1xuICAgIC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxuICAgIGlmIChyZXMgIT09IHYpXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCBqdXN0IGJveCBpdFxuICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHByb3ZpZGVkIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhbiBvYnNlcnZhYmxlLiBJZiB5b3Ugd2FudCBqdXN0IGNyZWF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHVzZSAnb2JzZXJ2YWJsZS5ib3godmFsdWUpJ1wiKTtcbn1cbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xuICAgIGJveDogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYm94XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlJCQxKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICAgIH0sXG4gICAgYXJyYXk6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYXJyYXlcIik7XG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU9ic2VydmFibGVBcnJheSQkMShpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm1hcFwiKTtcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zJCQxKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXAkJDEoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgICB9LFxuICAgIG9iamVjdDogZnVuY3Rpb24gKHByb3BzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJvYmplY3RcIik7XG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMShvcHRpb25zKTtcbiAgICAgICAgaWYgKG8ucHJveHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZSQkMSh7fSwgcHJvcHMsIGRlY29yYXRvcnMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHREZWNvcmF0b3IgPSBnZXREZWZhdWx0RGVjb3JhdG9yRnJvbU9iamVjdE9wdGlvbnMkJDEobyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IGV4dGVuZE9ic2VydmFibGUkJDEoe30sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvKTtcbiAgICAgICAgICAgIHZhciBwcm94eSA9IGNyZWF0ZUR5bmFtaWNPYnNlcnZhYmxlT2JqZWN0JCQxKGJhc2UpO1xuICAgICAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzJCQxKHByb3h5LCBwcm9wcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlZjogcmVmRGVjb3JhdG9yJCQxLFxuICAgIHNoYWxsb3c6IHNoYWxsb3dEZWNvcmF0b3IsXG4gICAgZGVlcDogZGVlcERlY29yYXRvciQkMSxcbiAgICBzdHJ1Y3Q6IHJlZlN0cnVjdERlY29yYXRvclxufTtcbnZhciBvYnNlcnZhYmxlJCQxID0gY3JlYXRlT2JzZXJ2YWJsZTtcbi8vIHdlaXJkIHRyaWNrIHRvIGtlZXAgb3VyIHR5cGluZ3MgbmljZWx5IHdpdGggb3VyIGZ1bmNzLCBhbmQgc3RpbGwgZXh0ZW5kIHRoZSBvYnNlcnZhYmxlIGZ1bmN0aW9uXG5PYmplY3Qua2V5cyhvYnNlcnZhYmxlRmFjdG9yaWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAob2JzZXJ2YWJsZSQkMVtuYW1lXSA9IG9ic2VydmFibGVGYWN0b3JpZXNbbmFtZV0pOyB9KTtcbmZ1bmN0aW9uIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKG1ldGhvZE5hbWUpIHtcbiAgICBmYWlsJCQxKFxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgIFwiRXhwZWN0ZWQgb25lIG9yIHR3byBhcmd1bWVudHMgdG8gb2JzZXJ2YWJsZS5cIiArIG1ldGhvZE5hbWUgKyBcIi4gRGlkIHlvdSBhY2NpZGVudGFsbHkgdHJ5IHRvIHVzZSBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiIGFzIGRlY29yYXRvcj9cIik7XG59XG5cbnZhciBjb21wdXRlZERlY29yYXRvciQkMSA9IGNyZWF0ZVByb3BEZWNvcmF0b3IkJDEoZmFsc2UsIGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLCBkZWNvcmF0b3JUYXJnZXQsIGRlY29yYXRvckFyZ3MpIHtcbiAgICB2YXIgZ2V0JCQxID0gZGVzY3JpcHRvci5nZXQsIHNldCQkMSA9IGRlc2NyaXB0b3Iuc2V0OyAvLyBpbml0aWFsVmFsdWUgaXMgdGhlIGRlc2NyaXB0b3IgZm9yIGdldCAvIHNldCBwcm9wc1xuICAgIC8vIE9wdGltaXphdGlvbjogZmFzdGVyIG9uIGRlY29yYXRvciB0YXJnZXQgb3IgaW5zdGFuY2U/IEFzc3VtaW5nIHRhcmdldFxuICAgIC8vIE9wdGltaXphdGlvbjogZmluZCBvdXQgaWYgZGVjbGFyaW5nIG9uIGluc3RhbmNlIGlzbid0IGp1c3QgZmFzdGVyLiAoYWxzbyBtYWtlcyB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciBzaW1wbGVyKS4gQnV0LCBtb3JlIG1lbW9yeSB1c2FnZS4uXG4gICAgLy8gRm9yY2luZyBpbnN0YW5jZSBub3csIGZpeGVzIGhvdCByZWxvYWRpZyBpc3N1ZXMgb24gUmVhY3QgTmF0aXZlOlxuICAgIHZhciBvcHRpb25zID0gZGVjb3JhdG9yQXJnc1swXSB8fCB7fTtcbiAgICBhc09ic2VydmFibGVPYmplY3QkJDEoaW5zdGFuY2UpLmFkZENvbXB1dGVkUHJvcChpbnN0YW5jZSwgcHJvcGVydHlOYW1lLCBfX2Fzc2lnbih7IGdldDogZ2V0JCQxLFxuICAgICAgICBzZXQ6IHNldCQkMSwgY29udGV4dDogaW5zdGFuY2UgfSwgb3B0aW9ucykpO1xufSk7XG52YXIgY29tcHV0ZWRTdHJ1Y3REZWNvcmF0b3IgPSBjb21wdXRlZERlY29yYXRvciQkMSh7IGVxdWFsczogY29tcGFyZXIkJDEuc3RydWN0dXJhbCB9KTtcbi8qKlxuICogRGVjb3JhdG9yIGZvciBjbGFzcyBwcm9wZXJ0aWVzOiBAY29tcHV0ZWQgZ2V0IHZhbHVlKCkgeyByZXR1cm4gZXhwcjsgfS5cbiAqIEZvciBsZWdhY3kgcHVycG9zZXMgYWxzbyBpbnZva2FibGUgYXMgRVM1IG9ic2VydmFibGUgY3JlYXRlZDogYGNvbXB1dGVkKCgpID0+IGV4cHIpYDtcbiAqL1xudmFyIGNvbXB1dGVkJCQxID0gZnVuY3Rpb24gY29tcHV0ZWQkJDEoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyBAY29tcHV0ZWRcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkRGVjb3JhdG9yJCQxLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmIChhcmcxICE9PSBudWxsICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gQGNvbXB1dGVkKHsgb3B0aW9ucyB9KVxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IkJDEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgLy8gY29tcHV0ZWQoZXhwciwgb3B0aW9ucz8pXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiwgXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLlwiKTtcbiAgICAgICAgaW52YXJpYW50JCQxKGFyZ3VtZW50cy5sZW5ndGggPCAzLCBcIkNvbXB1dGVkIHRha2VzIG9uZSBvciB0d28gYXJndW1lbnRzIGlmIHVzZWQgYXMgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHZhciBvcHRzID0gdHlwZW9mIGFyZzIgPT09IFwib2JqZWN0XCIgPyBhcmcyIDoge307XG4gICAgb3B0cy5nZXQgPSBhcmcxO1xuICAgIG9wdHMuc2V0ID0gdHlwZW9mIGFyZzIgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzIgOiBvcHRzLnNldDtcbiAgICBvcHRzLm5hbWUgPSBvcHRzLm5hbWUgfHwgYXJnMS5uYW1lIHx8IFwiXCI7IC8qIGZvciBnZW5lcmF0ZWQgbmFtZSAqL1xuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRWYWx1ZSQkMShvcHRzKTtcbn07XG5jb21wdXRlZCQkMS5zdHJ1Y3QgPSBjb21wdXRlZFN0cnVjdERlY29yYXRvcjtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uJCQxKGFjdGlvbk5hbWUsIGZuKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIsIFwiYGFjdGlvbmAgY2FuIG9ubHkgYmUgaW52b2tlZCBvbiBmdW5jdGlvbnNcIik7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcbiAgICAgICAgICAgIGZhaWwkJDEoXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgfVxuICAgIHZhciByZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uJCQxKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmVzLmlzTW9ieEFjdGlvbiA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24kJDEoYWN0aW9uTmFtZSwgZm4sIHNjb3BlLCBhcmdzKSB7XG4gICAgdmFyIHJ1bkluZm8gPSBzdGFydEFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgYXJncyk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBlbmRBY3Rpb24ocnVuSW5mbyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHNjb3BlLCBhcmdzKSB7XG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpICYmICEhYWN0aW9uTmFtZTtcbiAgICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSB8fCAwO1xuICAgICAgICB2YXIgZmxhdHRlbmRBcmdzID0gbmV3IEFycmF5KGwpO1xuICAgICAgICBpZiAobCA+IDApXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgICAgICBmbGF0dGVuZEFyZ3NbaV0gPSBhcmdzW2ldO1xuICAgICAgICBzcHlSZXBvcnRTdGFydCQkMSh7XG4gICAgICAgICAgICB0eXBlOiBcImFjdGlvblwiLFxuICAgICAgICAgICAgbmFtZTogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG9iamVjdDogc2NvcGUsXG4gICAgICAgICAgICBhcmd1bWVudHM6IGZsYXR0ZW5kQXJnc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHByZXZEZXJpdmF0aW9uID0gdW50cmFja2VkU3RhcnQkJDEoKTtcbiAgICBzdGFydEJhdGNoJCQxKCk7XG4gICAgdmFyIHByZXZBbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQkJDEodHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJldkRlcml2YXRpb246IHByZXZEZXJpdmF0aW9uLFxuICAgICAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXM6IHByZXZBbGxvd1N0YXRlQ2hhbmdlcyxcbiAgICAgICAgbm90aWZ5U3B5OiBub3RpZnlTcHksXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGVuZEFjdGlvbihydW5JbmZvKSB7XG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQkJDEocnVuSW5mby5wcmV2QWxsb3dTdGF0ZUNoYW5nZXMpO1xuICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgdW50cmFja2VkRW5kJCQxKHJ1bkluZm8ucHJldkRlcml2YXRpb24pO1xuICAgIGlmIChydW5JbmZvLm5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHNweVJlcG9ydEVuZCQkMSh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZSB9KTtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzJCQxKGFsbG93U3RhdGVDaGFuZ2VzJCQxLCBmdW5jKSB7XG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0JCQxKGFsbG93U3RhdGVDaGFuZ2VzJCQxKTtcbiAgICB2YXIgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGZ1bmMoKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kJCQxKHByZXYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCQkMShhbGxvd1N0YXRlQ2hhbmdlcyQkMSkge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUkJDEuYWxsb3dTdGF0ZUNoYW5nZXM7XG4gICAgZ2xvYmFsU3RhdGUkJDEuYWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlcyQkMTtcbiAgICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzRW5kJCQxKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZSQkMS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkJCQxKGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlJCQxLmNvbXB1dGF0aW9uRGVwdGg7XG4gICAgZ2xvYmFsU3RhdGUkJDEuY29tcHV0YXRpb25EZXB0aCA9IDA7XG4gICAgdmFyIHJlcztcbiAgICB0cnkge1xuICAgICAgICByZXMgPSBmdW5jKCk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5jb21wdXRhdGlvbkRlcHRoID0gcHJldjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxudmFyIE9ic2VydmFibGVWYWx1ZSQkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2JzZXJ2YWJsZVZhbHVlJCQxLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSQkMSh2YWx1ZSwgZW5oYW5jZXIsIG5hbWUsIG5vdGlmeVNweSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVWYWx1ZUBcIiArIGdldE5leHRJZCQkMSgpOyB9XG4gICAgICAgIGlmIChub3RpZnlTcHkgPT09IHZvaWQgMCkgeyBub3RpZnlTcHkgPSB0cnVlOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgICAgIF90aGlzLmhhc1VucmVwb3J0ZWRDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudmFsdWUgPSBlbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkLCBuYW1lKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBpc1NweUVuYWJsZWQkJDEoKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgbm90aWZ5IHNweSBpZiB0aGlzIGlzIGEgc3RhbmQtYWxvbmUgb2JzZXJ2YWJsZVxuICAgICAgICAgICAgc3B5UmVwb3J0JCQxKHsgdHlwZTogXCJjcmVhdGVcIiwgbmFtZTogX3RoaXMubmFtZSwgbmV3VmFsdWU6IFwiXCIgKyBfdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlJCQxLlVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUucHJlcGFyZU5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkJCQxKHRoaXMpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlJCQxLlVOQ0hBTkdFRDtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFwcGx5IG1vZGlmaWVyXG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcihuZXdWYWx1ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlID8gbmV3VmFsdWUgOiBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnNldE5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChoYXNMaXN0ZW5lcnMkJDEodGhpcykpIHtcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IkJDEodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lciQkMSh0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLnZhbHVlICsgXCJdXCI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSQkMSh0aGlzLmdldCgpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZSQkMTtcbn0oQXRvbSQkMSkpO1xudmFyIGlzT2JzZXJ2YWJsZVZhbHVlJCQxID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMShcIk9ic2VydmFibGVWYWx1ZVwiLCBPYnNlcnZhYmxlVmFsdWUkJDEpO1xuXG4vKipcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxuICpcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxuICpcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XG4gKlxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXG4gKi9cbnZhciBDb21wdXRlZFZhbHVlJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXG4gICAgICpcbiAgICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxuICAgICAqXG4gICAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXG4gICAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXG4gICAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1YWxDb21wYXJlcmAgZGVlcGx5IGNvbXBhcmVzIHRoZSBzdHJ1Y3R1cmUuXG4gICAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhIG5ldyBhZ2dyZWdhdGVkIG9iamVjdCBhbmRcbiAgICAgKiBkb24ndCB3YW50IHRvIG5vdGlmeSBvYnNlcnZlcnMgaWYgaXQgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciB3b3JraW5nIHdpdGggdmVjdG9ycywgbW91c2UgY29vcmRpbmF0ZXMgZXRjLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXB1dGVkVmFsdWUkJDEob3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IG51bGw7IC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xuICAgICAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uJCQxKG51bGwpO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7IC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyYWNpbmcgPSBUcmFjZU1vZGUkJDEuTk9ORTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhb3B0aW9ucy5nZXQpXG4gICAgICAgICAgICB0aHJvdyBcIlttb2J4XSBtaXNzaW5nIG9wdGlvbiBmb3IgY29tcHV0ZWQ6IGdldFwiO1xuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBvcHRpb25zLmdldDtcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IFwiQ29tcHV0ZWRWYWx1ZUBcIiArIGdldE5leHRJZCQkMSgpO1xuICAgICAgICBpZiAob3B0aW9ucy5zZXQpXG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IGNyZWF0ZUFjdGlvbiQkMSh0aGlzLm5hbWUgKyBcIi1zZXR0ZXJcIiwgb3B0aW9ucy5zZXQpO1xuICAgICAgICB0aGlzLmVxdWFscyA9XG4gICAgICAgICAgICBvcHRpb25zLmVxdWFscyB8fFxuICAgICAgICAgICAgICAgIChvcHRpb25zLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdGlvbnMuc3RydWN0XG4gICAgICAgICAgICAgICAgICAgID8gY29tcGFyZXIkJDEuc3RydWN0dXJhbFxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBhcmVyJCQxLmRlZmF1bHQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5jb250ZXh0O1xuICAgICAgICB0aGlzLnJlcXVpcmVzUmVhY3Rpb24gPSAhIW9wdGlvbnMucmVxdWlyZXNSZWFjdGlvbjtcbiAgICAgICAgdGhpcy5rZWVwQWxpdmUgPSAhIW9wdGlvbnMua2VlcEFsaXZlO1xuICAgIH1cbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5vbkJlY29tZVN0YWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQkJDEodGhpcyk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXG4gICAgICogV2lsbCBldmFsdWF0ZSBpdHMgY29tcHV0YXRpb24gZmlyc3QgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wdXRpbmcpXG4gICAgICAgICAgICBmYWlsJCQxKFwiQ3ljbGUgZGV0ZWN0ZWQgaW4gY29tcHV0YXRpb24gXCIgKyB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLmRlcml2YXRpb24pO1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUkJDEuaW5CYXRjaCA9PT0gMCAmJiB0aGlzLm9ic2VydmVycy5zaXplID09PSAwICYmICF0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUkJDEodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWQoKTtcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoJCQxKCk7IC8vIFNlZSBwZXJmIHRlc3QgJ2NvbXB1dGVkIG1lbW9pemF0aW9uJ1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcG9ydE9ic2VydmVkJCQxKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUkJDEodGhpcykpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpXG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCQkMSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uJCQxKHJlc3VsdCkpXG4gICAgICAgICAgICB0aHJvdyByZXN1bHQuY2F1c2U7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24kJDEocmVzKSlcbiAgICAgICAgICAgIHRocm93IHJlcy5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIGludmFyaWFudCQkMSghdGhpcy5pc1J1bm5pbmdTZXR0ZXIsIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0ZXIuY2FsbCh0aGlzLnNjb3BlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGludmFyaWFudCQkMShmYWxzZSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgXCJbQ29tcHV0ZWRWYWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIik7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQkJDEoKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydCQkMSh7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcHV0ZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHdhc1N1c3BlbmRlZCA9IFxuICAgICAgICAvKiBzZWUgIzEyMDggKi8gdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKHRydWUpO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IHdhc1N1c3BlbmRlZCB8fFxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24kJDEob2xkVmFsdWUpIHx8XG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbiQkMShuZXdWYWx1ZSkgfHxcbiAgICAgICAgICAgICF0aGlzLmVxdWFscyhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUuY29tcHV0ZVZhbHVlID0gZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSB0cnVlO1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5jb21wdXRhdGlvbkRlcHRoKys7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24kJDEodGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZSQkMS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbiQkMShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuY29tcHV0YXRpb25EZXB0aC0tO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5zdXNwZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyQkMSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7IC8vIGRvbid0IGhvbGQgb24gdG8gY29tcHV0ZWQgdmFsdWUhXG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGF1dG9ydW4kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCQkMSgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogcHJldlZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW50cmFja2VkRW5kJCQxKHByZXZVKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUud2FybkFib3V0VW50cmFja2VkUmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmFpbCQkMShcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZSArIFwiIGlzIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUkJDEuTk9ORSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgdGhpcy5uYW1lICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlJCQxKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbXB1dGVkVmFsdWUkJDE7XG59KCkpO1xudmFyIGlzQ29tcHV0ZWRWYWx1ZSQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJDb21wdXRlZFZhbHVlXCIsIENvbXB1dGVkVmFsdWUkJDEpO1xuXG52YXIgSURlcml2YXRpb25TdGF0ZTtcbihmdW5jdGlvbiAoSURlcml2YXRpb25TdGF0ZSQkMSkge1xuICAgIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgICAvLyBhdCB0aGlzIHBvaW50IGRlcml2YXRpb24gaXMgbm90IGhvbGRpbmcgYW55IGRhdGEgYWJvdXQgZGVwZW5kZW5jeSB0cmVlXG4gICAgSURlcml2YXRpb25TdGF0ZSQkMVtJRGVyaXZhdGlvblN0YXRlJCQxW1wiTk9UX1RSQUNLSU5HXCJdID0gLTFdID0gXCJOT1RfVFJBQ0tJTkdcIjtcbiAgICAvLyBubyBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uXG4gICAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcbiAgICBJRGVyaXZhdGlvblN0YXRlJCQxW0lEZXJpdmF0aW9uU3RhdGUkJDFbXCJVUF9UT19EQVRFXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVcIjtcbiAgICAvLyBzb21lIGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgZG9uJ3Qga25vdyBpZiBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZFxuICAgIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gICAgLy8gY3VycmVudGx5IG9ubHkgQ29tcHV0ZWRWYWx1ZSB3aWxsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRVxuICAgIC8vXG4gICAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gICAgLy8gZG9uJ3QgaGF2ZSB0byByZWNvbXB1dGUgb24gZXZlcnkgZGVwZW5kZW5jeSBjaGFuZ2UsIGJ1dCBvbmx5IHdoZW4gaXQncyBuZWVkZWRcbiAgICBJRGVyaXZhdGlvblN0YXRlJCQxW0lEZXJpdmF0aW9uU3RhdGUkJDFbXCJQT1NTSUJMWV9TVEFMRVwiXSA9IDFdID0gXCJQT1NTSUJMWV9TVEFMRVwiO1xuICAgIC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gICAgLy8gd2lsbCBuZWVkIHRvIHJlY29tcHV0ZSB3aGVuIGl0J3MgbmVlZGVkIG5leHQuXG4gICAgSURlcml2YXRpb25TdGF0ZSQkMVtJRGVyaXZhdGlvblN0YXRlJCQxW1wiU1RBTEVcIl0gPSAyXSA9IFwiU1RBTEVcIjtcbn0pKElEZXJpdmF0aW9uU3RhdGUgfHwgKElEZXJpdmF0aW9uU3RhdGUgPSB7fSkpO1xudmFyIFRyYWNlTW9kZSQkMTtcbihmdW5jdGlvbiAoVHJhY2VNb2RlJCQxKSB7XG4gICAgVHJhY2VNb2RlJCQxW1RyYWNlTW9kZSQkMVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIFRyYWNlTW9kZSQkMVtUcmFjZU1vZGUkJDFbXCJMT0dcIl0gPSAxXSA9IFwiTE9HXCI7XG4gICAgVHJhY2VNb2RlJCQxW1RyYWNlTW9kZSQkMVtcIkJSRUFLXCJdID0gMl0gPSBcIkJSRUFLXCI7XG59KShUcmFjZU1vZGUkJDEgfHwgKFRyYWNlTW9kZSQkMSA9IHt9KSk7XG52YXIgQ2F1Z2h0RXhjZXB0aW9uJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbiQkMShjYXVzZSkge1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIC8vIEVtcHR5XG4gICAgfVxuICAgIHJldHVybiBDYXVnaHRFeGNlcHRpb24kJDE7XG59KCkpO1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24kJDEoZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ2F1Z2h0RXhjZXB0aW9uJCQxO1xufVxuLyoqXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cbiAqIElmIGRlcGVuZGVuY2llc1N0YXRlIGlzIDEgdGhlbiBpdCB3aWxsIHJlY2FsY3VsYXRlIGRlcGVuZGVuY2llcyxcbiAqIGlmIGFueSBkZXBlbmRlbmN5IGNoYW5nZWQgaXQgd2lsbCBwcm9wYWdhdGUgaXQgYnkgY2hhbmdpbmcgZGVwZW5kZW5jaWVzU3RhdGUgdG8gMi5cbiAqXG4gKiBCeSBpdGVyYXRpbmcgb3ZlciB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSB3ZXJlIHJlcG9ydGVkIGFuZFxuICogc3RvcHBpbmcgb24gdGhlIGZpcnN0IGNoYW5nZSwgYWxsIHRoZSByZWNhbGN1bGF0aW9ucyBhcmUgb25seSBjYWxsZWQgZm9yIENvbXB1dGVkVmFsdWVzXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgZGVyaXZhdGlvbiBkb2Vzbid0IGNoYW5nZSB0aGVuIHRoZSBkZXJpdmF0aW9uIHNob3VsZCBydW4gdGhlIHNhbWUgd2F5XG4gKiB1cCB1bnRpbCBhY2Nlc3NpbmcgeC10aCBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiBzaG91bGRDb21wdXRlJCQxKGRlcml2YXRpb24pIHtcbiAgICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUpIHtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc6XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5TVEFMRTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU6IHtcbiAgICAgICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQkJDEoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nLCBsID0gb2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlJCQxKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kJCQxKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIENvbXB1dGVkVmFsdWUgYG9iamAgYWN0dWFsbHkgY2hhbmdlZCBpdCB3aWxsIGJlIGNvbXB1dGVkIGFuZCBwcm9wYWdhdGVkIHRvIGl0cyBvYnNlcnZlcnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kJCQxKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMCQkMShkZXJpdmF0aW9uKTtcbiAgICAgICAgICAgIHVudHJhY2tlZEVuZCQkMShwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcbi8vICAgICBjb25zdCBuZXdEZXBTdGF0ZSA9IChkZXJpdmF0aW9uIGFzIGFueSkuZGVwZW5kZW5jaWVzU3RhdGVcbi8vICAgICBpZiAoXG4vLyAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxuLy8gICAgICAgICAobmV3RGVwU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUgfHxcbi8vICAgICAgICAgICAgIG5ld0RlcFN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORylcbi8vICAgICApXG4vLyAgICAgICAgIGZhaWwoXCJJbGxlZ2FsIGRlcGVuZGVuY3kgc3RhdGVcIilcbi8vIH1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbiQkMSgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUkJDEudHJhY2tpbmdEZXJpdmF0aW9uICE9PSBudWxsOyAvLyBmaWx0ZXIgb3V0IGFjdGlvbnMgaW5zaWRlIGNvbXB1dGF0aW9uc1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQkJDEoYXRvbSkge1xuICAgIHZhciBoYXNPYnNlcnZlcnMkJDEgPSBhdG9tLm9ic2VydmVycy5zaXplID4gMDtcbiAgICAvLyBTaG91bGQgbmV2ZXIgYmUgcG9zc2libGUgdG8gY2hhbmdlIGFuIG9ic2VydmVkIG9ic2VydmFibGUgZnJvbSBpbnNpZGUgY29tcHV0ZWQsIHNlZSAjNzk4XG4gICAgaWYgKGdsb2JhbFN0YXRlJCQxLmNvbXB1dGF0aW9uRGVwdGggPiAwICYmIGhhc09ic2VydmVycyQkMSlcbiAgICAgICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIiArIGF0b20ubmFtZSk7XG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcbiAgICBpZiAoIWdsb2JhbFN0YXRlJCQxLmFsbG93U3RhdGVDaGFuZ2VzICYmIChoYXNPYnNlcnZlcnMkJDEgfHwgZ2xvYmFsU3RhdGUkJDEuZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpKVxuICAgICAgICBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgKGdsb2JhbFN0YXRlJCQxLmVuZm9yY2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgPyBcIlNpbmNlIHN0cmljdC1tb2RlIGlzIGVuYWJsZWQsIGNoYW5naW5nIG9ic2VydmVkIG9ic2VydmFibGUgdmFsdWVzIG91dHNpZGUgYWN0aW9ucyBpcyBub3QgYWxsb3dlZC4gUGxlYXNlIHdyYXAgdGhlIGNvZGUgaW4gYW4gYGFjdGlvbmAgaWYgdGhpcyBjaGFuZ2UgaXMgaW50ZW5kZWQuIFRyaWVkIHRvIG1vZGlmeTogXCJcbiAgICAgICAgICAgICAgICA6IFwiU2lkZSBlZmZlY3RzIGxpa2UgY2hhbmdpbmcgc3RhdGUgYXJlIG5vdCBhbGxvd2VkIGF0IHRoaXMgcG9pbnQuIEFyZSB5b3UgdHJ5aW5nIHRvIG1vZGlmeSBzdGF0ZSBmcm9tLCBmb3IgZXhhbXBsZSwgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gVHJpZWQgdG8gbW9kaWZ5OiBcIikgK1xuICAgICAgICAgICAgICAgIGF0b20ubmFtZSk7XG59XG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZmAgYW5kIHRyYWNrcyB3aGljaCBvYnNlcnZhYmxlcyBhcmUgYmVpbmcgYWNjZXNzZWQuXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXG4gKiBhcyBvYnNlcnZlciBvZiBhbnkgb2YgdGhlIGFjY2Vzc2VkIG9ic2VydmFibGVzLlxuICovXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbiQkMShkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gICAgLy8gcHJlIGFsbG9jYXRlIGFycmF5IGFsbG9jYXRpb24gKyByb29tIGZvciB2YXJpYXRpb24gaW4gZGVwc1xuICAgIC8vIGFycmF5IHdpbGwgYmUgdHJpbW1lZCBieSBiaW5kRGVwZW5kZW5jaWVzXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAkJDEoZGVyaXZhdGlvbik7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBuZXcgQXJyYXkoZGVyaXZhdGlvbi5vYnNlcnZpbmcubGVuZ3RoICsgMTAwKTtcbiAgICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlJCQxLnJ1bklkO1xuICAgIHZhciBwcmV2VHJhY2tpbmcgPSBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgZ2xvYmFsU3RhdGUkJDEudHJhY2tpbmdEZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChnbG9iYWxTdGF0ZSQkMS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24kJDEoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUkJDEudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogZGlmZnMgbmV3T2JzZXJ2aW5nIHdpdGggb2JzZXJ2aW5nLlxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxuICovXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIHZhciBwcmV2T2JzZXJ2aW5nID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nKTtcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIG5ldyBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAodGhpcyBsaXN0IGNhbiBjb250YWluIGR1cGxpY2F0ZXMpOlxuICAgIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcbiAgICB2YXIgaTAgPSAwLCBsID0gZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMTtcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcbiAgICAgICAgICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgICAgICAgaTArKztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGNhc3QgaXMgJ3NhZmUnIGhlcmUsIGJlY2F1c2UgaWYgZGVwIGlzIElPYnNlcnZhYmxlLCBgZGVwZW5kZW5jaWVzU3RhdGVgIHdpbGwgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IGRlcC5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYnNlcnZpbmcubGVuZ3RoID0gaTA7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBuZXdPYnNlcnZpbmcgc2hvdWxkbid0IGJlIG5lZWRlZCBvdXRzaWRlIHRyYWNraW5nIChzdGF0ZW1lbnQgbW92ZWQgZG93biB0byB3b3JrIGFyb3VuZCBGRiBidWcsIHNlZSAjNjE0KVxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcbiAgICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gICAgLy8gICAxOiBpdCBrZWVwcyBiZWluZyBvYnNlcnZlZCwgZG9uJ3Qgd2FudCB0byBub3RpZnkgaXQuIGNoYW5nZSB0byAwXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgdmFyIGRlcCA9IHByZXZPYnNlcnZpbmdbbF07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZlciQkMShkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xuICAgIH1cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuICAgIHdoaWxlIChpMC0tKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgICAgICBhZGRPYnNlcnZlciQkMShkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAgIC8vIHNvIHRoZXkgaGF2ZSBoYWQgbm8gY2hhbmNlIHRvIHByb3BhZ2F0ZSBzdGFsZW5lc3MgKCM5MTYpXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XG4gICAgICAgIGRlcml2YXRpb24ub25CZWNvbWVTdGFsZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyT2JzZXJ2aW5nJCQxKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBbXTtcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIkJDEob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWQkJDEoYWN0aW9uJCQxKSB7XG4gICAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCQkMSgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24kJDEoKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZCQkMShwcmV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRTdGFydCQkMSgpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlJCQxLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gdW50cmFja2VkRW5kJCQxKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2O1xufVxuLyoqXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcbiAqXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wJCQxKGRlcml2YXRpb24pIHtcbiAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxuICAgICAgICByZXR1cm47XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9ic1tpXS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xufVxuXG4vKipcbiAqIFRoZXNlIHZhbHVlcyB3aWxsIHBlcnNpc3QgaWYgZ2xvYmFsIHN0YXRlIGlzIHJlc2V0XG4gKi9cbnZhciBwZXJzaXN0ZW50S2V5cyA9IFtcbiAgICBcIm1vYnhHdWlkXCIsXG4gICAgXCJzcHlMaXN0ZW5lcnNcIixcbiAgICBcImVuZm9yY2VBY3Rpb25zXCIsXG4gICAgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIixcbiAgICBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIixcbiAgICBcInJ1bklkXCIsXG4gICAgXCJVTkNIQU5HRURcIlxuXTtcbnZhciBNb2JYR2xvYmFscyQkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2JYR2xvYmFscyQkMSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vYlhHbG9iYWxzIHZlcnNpb24uXG4gICAgICAgICAqIE1vYlggY29tcGF0aWJsaXR5IHdpdGggb3RoZXIgdmVyc2lvbnMgbG9hZGVkIGluIG1lbW9yeSBhcyBsb25nIGFzIHRoaXMgdmVyc2lvbiBtYXRjaGVzLlxuICAgICAgICAgKiBJdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIHN0aWxsIHN0b3JlcyBzaW1pbGFyIGluZm9ybWF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIE4uQjogdGhpcyB2ZXJzaW9uIGlzIHVucmVsYXRlZCB0byB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIE1vYlgsIGFuZCBpcyBvbmx5IHRoZSB2ZXJzaW9uIG9mIHRoZVxuICAgICAgICAgKiBpbnRlcm5hbCBzdGF0ZSBzdG9yYWdlIG9mIE1vYlgsIGFuZCBjYW4gYmUgdGhlIHNhbWUgYWNyb3NzIG1hbnkgZGlmZmVyZW50IHBhY2thZ2UgdmVyc2lvbnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBnbG9iYWxseSB1bmlxdWUgdG9rZW4gdG8gc2lnbmFsIHVuY2hhbmdlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnRseSBydW5uaW5nIGRlcml2YXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tpbmdEZXJpdmF0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBydW5uaW5nIGEgY29tcHV0YXRpb24gY3VycmVudGx5PyAobm90IGEgcmVhY3Rpb24pXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXB1dGF0aW9uRGVwdGggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRWFjaCB0aW1lIGEgZGVyaXZhdGlvbiBpcyB0cmFja2VkLCBpdCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBydW4taWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogJ2d1aWQnIGZvciBnZW5lcmFsIHB1cnBvc2UuIFdpbGwgYmUgcGVyc2lzdGVkIGFtb25nc3QgcmVzZXRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2J4R3VpZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgaW4gYSBiYXRjaCBibG9jaz8gKGFuZCBob3cgbWFueSBvZiB0aGVtKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbkJhdGNoID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmFibGVzIHRoYXQgZG9uJ3QgaGF2ZSBvYnNlcnZlcnMgYW55bW9yZSwgYW5kIGFyZSBhYm91dCB0byBiZVxuICAgICAgICAgKiBzdXNwZW5kZWQsIHVubGVzcyBzb21lYm9keSBlbHNlIGFjY2Vzc2VzIGl0IGluIHRoZSBzYW1lIGJhdGNoXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtJT2JzZXJ2YWJsZVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3Qgb2Ygc2NoZWR1bGVkLCBub3QgeWV0IGV4ZWN1dGVkLCByZWFjdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdSZWFjdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBjdXJyZW50bHkgcHJvY2Vzc2luZyByZWFjdGlvbnM/XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzUnVubmluZ1JlYWN0aW9ucyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgaXQgYWxsb3dlZCB0byBjaGFuZ2Ugb2JzZXJ2YWJsZXMgYXQgdGhpcyBwb2ludD9cbiAgICAgICAgICogSW4gZ2VuZXJhbCwgTW9iWCBkb2Vzbid0IGFsbG93IHRoYXQgd2hlbiBydW5uaW5nIGNvbXB1dGF0aW9ucyBhbmQgUmVhY3QucmVuZGVyLlxuICAgICAgICAgKiBUbyBlbnN1cmUgdGhhdCB0aG9zZSBmdW5jdGlvbnMgc3RheSBwdXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbGxvd1N0YXRlQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzdHJpY3QgbW9kZSBpcyBlbmFibGVkLCBzdGF0ZSBjaGFuZ2VzIGFyZSBieSBkZWZhdWx0IG5vdCBhbGxvd2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcHkgY2FsbGJhY2tzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNweUxpc3RlbmVycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsbHkgYXR0YWNoZWQgZXJyb3IgaGFuZGxlcnMgdGhhdCByZWFjdCBzcGVjaWZpY2FsbHkgdG8gZXJyb3JzIGluIHJlYWN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdhcm4gaWYgY29tcHV0ZWQgdmFsdWVzIGFyZSBhY2Nlc3NlZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgLypcbiAgICAgICAgICogRG9uJ3QgY2F0Y2ggYW5kIHJldGhyb3cgZXhjZXB0aW9ucy4gVGhpcyBpcyB1c2VmdWwgZm9yIGluc3BlY3RpbmcgdGhlIHN0YXRlIG9mXG4gICAgICAgICAqIHRoZSBzdGFjayB3aGVuIGFuIGV4Y2VwdGlvbiBvY2N1cnMgd2hpbGUgZGVidWdnaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBNb2JYR2xvYmFscyQkMTtcbn0oKSk7XG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XG52YXIgaXNvbGF0ZUNhbGxlZCA9IGZhbHNlO1xudmFyIGdsb2JhbFN0YXRlJCQxID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsJCQxKCk7XG4gICAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpXG4gICAgICAgIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgJiYgZ2xvYmFsLl9fbW9ieEdsb2JhbHMudmVyc2lvbiAhPT0gbmV3IE1vYlhHbG9iYWxzJCQxKCkudmVyc2lvbilcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xuICAgIGlmICghY2FuTWVyZ2VHbG9iYWxTdGF0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNvbGF0ZUNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJUaGVyZSBhcmUgbXVsdGlwbGUsIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBNb2JYIGFjdGl2ZS4gTWFrZSBzdXJlIE1vYlggaXMgbG9hZGVkIG9ubHkgb25jZSBvciB1c2UgYGNvbmZpZ3VyZSh7IGlzb2xhdGVHbG9iYWxTdGF0ZTogdHJ1ZSB9KWBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEpO1xuICAgICAgICByZXR1cm4gbmV3IE1vYlhHbG9iYWxzJCQxKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzKSB7XG4gICAgICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ICs9IDE7XG4gICAgICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKVxuICAgICAgICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEID0ge307IC8vIG1ha2UgbWVyZ2UgYmFja3dhcmQgY29tcGF0aWJsZVxuICAgICAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA9IDE7XG4gICAgICAgIHJldHVybiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMkJDEoKSk7XG4gICAgfVxufSkoKTtcbmZ1bmN0aW9uIGlzb2xhdGVHbG9iYWxTdGF0ZSQkMSgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1JlYWN0aW9ucy5sZW5ndGggfHxcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuaW5CYXRjaCB8fFxuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5pc1J1bm5pbmdSZWFjdGlvbnMpXG4gICAgICAgIGZhaWwkJDEoXCJpc29sYXRlR2xvYmFsU3RhdGUgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgTW9iWCBpcyBydW5uaW5nIGFueSByZWFjdGlvbnNcIik7XG4gICAgaXNvbGF0ZUNhbGxlZCA9IHRydWU7XG4gICAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICAgICAgaWYgKC0tZ2V0R2xvYmFsJCQxKCkuX19tb2J4SW5zdGFuY2VDb3VudCA9PT0gMClcbiAgICAgICAgICAgIGdldEdsb2JhbCQkMSgpLl9fbW9ieEdsb2JhbHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxID0gbmV3IE1vYlhHbG9iYWxzJCQxKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUkJDEoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlJCQxO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5OyB0aGlzIHdpbGwgYnJlYWsgdGhlIGludGVybmFsIHN0YXRlIG9mIGV4aXN0aW5nIG9ic2VydmFibGVzLFxuICogYnV0IGNhbiBiZSB1c2VkIHRvIGdldCBiYWNrIGF0IGEgc3RhYmxlIHN0YXRlIGFmdGVyIHRocm93aW5nIGVycm9yc1xuICovXG5mdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlJCQxKCkge1xuICAgIHZhciBkZWZhdWx0R2xvYmFscyA9IG5ldyBNb2JYR2xvYmFscyQkMSgpO1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscylcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSQkMVtrZXldID0gZGVmYXVsdEdsb2JhbHNba2V5XTtcbiAgICBnbG9iYWxTdGF0ZSQkMS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFnbG9iYWxTdGF0ZSQkMS5lbmZvcmNlQWN0aW9ucztcbn1cbmZ1bmN0aW9uIGdldEdsb2JhbCQkMSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IGdsb2JhbDtcbn1cblxuZnVuY3Rpb24gaGFzT2JzZXJ2ZXJzJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMgJiYgb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuc2l6ZSA+IDA7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcnMkJDEob2JzZXJ2YWJsZSQkMSkge1xuICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm9ic2VydmVycztcbn1cbi8vIGZ1bmN0aW9uIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xuLy8gICAgIGNvbnN0IGxpc3QgPSBvYnNlcnZhYmxlLm9ic2VydmVyc1xuLy8gICAgIGNvbnN0IG1hcCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzSW5kZXhlc1xuLy8gICAgIGNvbnN0IGwgPSBsaXN0Lmxlbmd0aFxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4vLyAgICAgICAgIGNvbnN0IGlkID0gbGlzdFtpXS5fX21hcGlkXG4vLyAgICAgICAgIGlmIChpKSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQobWFwW2lkXSA9PT0gaSwgXCJJTlRFUk5BTCBFUlJPUiBtYXBzIGRlcml2YXRpb24uX19tYXBpZCB0byBpbmRleCBpbiBsaXN0XCIpIC8vIGZvciBwZXJmb3JtYW5jZVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgaW52YXJpYW50KCEoaWQgaW4gbWFwKSwgXCJJTlRFUk5BTCBFUlJPUiBvYnNlcnZlciBvbiBpbmRleCAwIHNob3VsZG4ndCBiZSBoZWxkIGluIG1hcC5cIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgaW52YXJpYW50KFxuLy8gICAgICAgICBsaXN0Lmxlbmd0aCA9PT0gMCB8fCBPYmplY3Qua2V5cyhtYXApLmxlbmd0aCA9PT0gbGlzdC5sZW5ndGggLSAxLFxuLy8gICAgICAgICBcIklOVEVSTkFMIEVSUk9SIHRoZXJlIGlzIG5vIGp1bmsgaW4gbWFwXCJcbi8vICAgICApXG4vLyB9XG5mdW5jdGlvbiBhZGRPYnNlcnZlciQkMShvYnNlcnZhYmxlJCQxLCBub2RlKSB7XG4gICAgLy8gaW52YXJpYW50KG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SLCBjYW4gYWRkIG9ubHkgZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgYWRkIGFscmVhZHkgYWRkZWQgbm9kZVwiKTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuYWRkKG5vZGUpO1xuICAgIGlmIChvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPiBub2RlLmRlcGVuZGVuY2llc1N0YXRlKVxuICAgICAgICBvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBub2RlLmRlcGVuZGVuY2llc1N0YXRlO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGRpZG4ndCBhZGQgbm9kZVwiKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyJCQxKG9ic2VydmFibGUkJDEsIG5vZGUpIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IsIHJlbW92ZSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW5zaWRlIGJhdGNoXCIpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICBvYnNlcnZhYmxlJCQxLm9ic2VydmVycy5kZWxldGUobm9kZSk7XG4gICAgaWYgKG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxuICAgICAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24kJDEob2JzZXJ2YWJsZSQkMSk7XG4gICAgfVxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZTJcIik7XG59XG5mdW5jdGlvbiBxdWV1ZUZvclVub2JzZXJ2YXRpb24kJDEob2JzZXJ2YWJsZSQkMSkge1xuICAgIGlmIChvYnNlcnZhYmxlJCQxLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMubGVuZ3RoID09PSAwLCBcIklOVEVSTkFMIEVSUk9SLCBzaG91bGQgb25seSBxdWV1ZSBmb3IgdW5vYnNlcnZhdGlvbiB1bm9ic2VydmVkIG9ic2VydmFibGVzXCIpO1xuICAgICAgICBvYnNlcnZhYmxlJCQxLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSB0cnVlO1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMucHVzaChvYnNlcnZhYmxlJCQxKTtcbiAgICB9XG59XG4vKipcbiAqIEJhdGNoIHN0YXJ0cyBhIHRyYW5zYWN0aW9uLCBhdCBsZWFzdCBmb3IgcHVycG9zZXMgb2YgbWVtb2l6aW5nIENvbXB1dGVkVmFsdWVzIHdoZW4gbm90aGluZyBlbHNlIGRvZXMuXG4gKiBEdXJpbmcgYSBiYXRjaCBgb25CZWNvbWVVbm9ic2VydmVkYCB3aWxsIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UgcGVyIG9ic2VydmFibGUuXG4gKiBBdm9pZHMgdW5uZWNlc3NhcnkgcmVjYWxjdWxhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2gkJDEoKSB7XG4gICAgZ2xvYmFsU3RhdGUkJDEuaW5CYXRjaCsrO1xufVxuZnVuY3Rpb24gZW5kQmF0Y2gkJDEoKSB7XG4gICAgaWYgKC0tZ2xvYmFsU3RhdGUkJDEuaW5CYXRjaCA9PT0gMCkge1xuICAgICAgICBydW5SZWFjdGlvbnMkJDEoKTtcbiAgICAgICAgLy8gdGhlIGJhdGNoIGlzIGFjdHVhbGx5IGFib3V0IHRvIGZpbmlzaCwgYWxsIHVub2JzZXJ2aW5nIHNob3VsZCBoYXBwZW4gaGVyZS5cbiAgICAgICAgdmFyIGxpc3QgPSBnbG9iYWxTdGF0ZSQkMS5wZW5kaW5nVW5vYnNlcnZhdGlvbnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSBsaXN0W2ldO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlJCQxLmlzQmVpbmdPYnNlcnZlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIG9ic2VydmFibGUgaGFkIHJlYWN0aXZlIG9ic2VydmVycywgdHJpZ2dlciB0aGUgaG9va3NcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5vbkJlY29tZVVub2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUkJDEgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHByb2Nlc3MgaGFwcGVucyByZWN1cnNpdmVseSwgdGhpcyBjb21wdXRlZCBtaWdodCBiZSB0aGUgbGFzdCBvYnNlcnZhYmUgb2YgYW5vdGhlciwgZXRjLi5cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zdXNwZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICB2YXIgZGVyaXZhdGlvbiA9IGdsb2JhbFN0YXRlJCQxLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcbiAgICAgICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkICE9PSBvYnNlcnZhYmxlJCQxLmxhc3RBY2Nlc3NlZEJ5KSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlJCQxLmxhc3RBY2Nlc3NlZEJ5ID0gZGVyaXZhdGlvbi5ydW5JZDtcbiAgICAgICAgICAgIC8vIFRyaWVkIHN0b3JpbmcgbmV3T2JzZXJ2aW5nLCBvciBvYnNlcnZpbmcsIG9yIGJvdGggYXMgU2V0LCBidXQgcGVyZm9ybWFuY2UgZGlkbid0IGNvbWUgY2xvc2UuLi5cbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCsrXSA9IG9ic2VydmFibGUkJDE7XG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUkJDEuaXNCZWluZ09ic2VydmVkKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5pc0JlaW5nT2JzZXJ2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEub25CZWNvbWVPYnNlcnZlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYnNlcnZhYmxlJCQxLm9ic2VydmVycy5zaXplID09PSAwICYmIGdsb2JhbFN0YXRlJCQxLmluQmF0Y2ggPiAwKSB7XG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbiQkMShvYnNlcnZhYmxlJCQxKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8gZnVuY3Rpb24gaW52YXJpYW50TE9TKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBtc2c6IHN0cmluZykge1xuLy8gICAgIC8vIGl0J3MgZXhwZW5zaXZlIHNvIGJldHRlciBub3QgcnVuIGl0IGluIHByb2R1Y2l0b24uIGJ1dCB0ZW1wb3JhcmlseSBoZWxwZnVsIGZvciB0ZXN0aW5nXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXG4vLyAgICAgaWYgKG1pbiA+PSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUpIHJldHVybiAvLyA8LSB0aGUgb25seSBhc3N1bXB0aW9uIGFib3V0IGBsb3dlc3RPYnNlcnZlclN0YXRlYFxuLy8gICAgIHRocm93IG5ldyBFcnJvcihcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXG4vLyAgICAgICAgICAgICBtc2cgK1xuLy8gICAgICAgICAgICAgXCIgYmVjYXVzZSBcIiArXG4vLyAgICAgICAgICAgICBtaW4gK1xuLy8gICAgICAgICAgICAgXCIgPCBcIiArXG4vLyAgICAgICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVcbi8vICAgICApXG4vLyB9XG4vKipcbiAqIE5PVEU6IGN1cnJlbnQgcHJvcGFnYXRpb24gbWVjaGFuaXNtIHdpbGwgaW4gY2FzZSBvZiBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGJlaGF2ZSB1bmV4cGVjdGVkbHlcbiAqIEl0IHdpbGwgcHJvcGFnYXRlIGNoYW5nZXMgdG8gb2JzZXJ2ZXJzIGZyb20gcHJldmlvdXMgcnVuXG4gKiBJdCdzIGhhcmQgb3IgbWF5YmUgaW1wb3NzaWJsZSAod2l0aCByZWFzb25hYmxlIHBlcmYpIHRvIGdldCBpdCByaWdodCB3aXRoIGN1cnJlbnQgYXBwcm9hY2hcbiAqIEhvcGVmdWxseSBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGFyZW4ndCBhIGZlYXR1cmUgcGVvcGxlIHNob3VsZCBkZXBlbmQgb25cbiAqIEFsc28gbW9zdCBiYXNpYyB1c2UgY2FzZXMgc2hvdWxkIGJlIG9rXG4gKi9cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZWQkJDEob2JzZXJ2YWJsZSQkMSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUkJDEubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUkJDEubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgLy8gSWRlYWxseSB3ZSB1c2UgZm9yLi5vZiBoZXJlLCBidXQgdGhlIGRvd25jb21waWxlZCB2ZXJzaW9uIGlzIHJlYWxseSBzbG93Li4uXG4gICAgb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZSQkMS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUkJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgfSk7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBlbmRcIik7XG59XG4vLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUkJDEubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUkJDEubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSlcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgICAgICBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUgLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxuICAgICAgICApXG4gICAgICAgICAgICBvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgfSk7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIGVuZFwiKTtcbn1cbi8vIFVzZWQgYnkgY29tcHV0ZWQgd2hlbiBpdHMgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgd2UgZG9uJ3Qgd2FuJ3QgdG8gaW1tZWRpYXRlbHkgcmVjb21wdXRlLlxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZSQkMS5sb3dlc3RPYnNlcnZlclN0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFO1xuICAgIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xuICAgICAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZSQkMS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUkJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBlbmRcIik7XG59XG5mdW5jdGlvbiBsb2dUcmFjZUluZm8oZGVyaXZhdGlvbiwgb2JzZXJ2YWJsZSQkMSkge1xuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUkJDEubmFtZSArIFwiJ1wiKTtcbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZSQkMS5CUkVBSykge1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlJCQxKGRlcml2YXRpb24pLCBsaW5lcywgMSk7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBuZXcgRnVuY3Rpb24oXCJkZWJ1Z2dlcjtcXG4vKlxcblRyYWNpbmcgJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInXFxuXFxuWW91IGFyZSBlbnRlcmluZyB0aGlzIGJyZWFrIHBvaW50IGJlY2F1c2UgZGVyaXZhdGlvbiAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlJCQxLm5hbWUgKyBcIicgaXMgbm93IGZvcmNpbmcgaXQgdG8gdXBkYXRlLlxcbkp1c3QgZm9sbG93IHRoZSBzdGFja3RyYWNlIHlvdSBzaG91bGQgbm93IHNlZSBpbiB0aGUgZGV2dG9vbHMgdG8gc2VlIHByZWNpc2VseSB3aGF0IHBpZWNlIG9mIHlvdXIgY29kZSBpcyBjYXVzaW5nIHRoaXMgdXBkYXRlXFxuVGhlIHN0YWNrZnJhbWUgeW91IGFyZSBsb29raW5nIGZvciBpcyBhdCBsZWFzdCB+Ni04IHN0YWNrLWZyYW1lcyB1cC5cXG5cXG5cIiArIChkZXJpdmF0aW9uIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSQkMSA/IGRlcml2YXRpb24uZGVyaXZhdGlvbi50b1N0cmluZygpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGluZXMucHVzaChcIlwiICsgbmV3IEFycmF5KGRlcHRoKS5qb2luKFwiXFx0XCIpICsgdHJlZS5uYW1lKTsgLy8gTVdFOiBub3QgdGhlIGZhc3Rlc3QsIGJ1dCB0aGUgZWFzaWVzdCB3YXkgOilcbiAgICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpXG4gICAgICAgIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBwcmludERlcFRyZWUoY2hpbGQsIGxpbmVzLCBkZXB0aCArIDEpOyB9KTtcbn1cblxudmFyIFJlYWN0aW9uJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0aW9uJCQxKG5hbWUsIG9uSW52YWxpZGF0ZSwgZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSA9IG9uSW52YWxpZGF0ZTtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IFtdO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyYWNpbmcgPSBUcmFjZU1vZGUkJDEuTk9ORTtcbiAgICB9XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgcnVuUmVhY3Rpb25zJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgICAqL1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5ydW5SZWFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSQkMSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUcmFja1BlbmRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3B5RW5hYmxlZCQkMSgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uSW52YWxpZGF0ZSBkaWRuJ3QgdHJpZ2dlciB0cmFjayByaWdodCBhd2F5Li5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNweVJlcG9ydCQkMSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBzdGFydEJhdGNoJCQxKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcbiAgICAgICAgaWYgKG5vdGlmeSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMSh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uJCQxKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyQkMSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24kJDEocmVzdWx0KSlcbiAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKHJlc3VsdC5jYXVzZSk7XG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoe1xuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfTtcbiAgICBSZWFjdGlvbiQkMS5wcm90b3R5cGUucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZSQkMS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXM7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCQkMSgpKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnQkJDEoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIiArIGVycm9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoZikgeyByZXR1cm4gZihlcnJvciwgX3RoaXMpOyB9KTtcbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZGlzcG9zZWQgd2hpbGUgcnVubmluZywgY2xlYW4gdXAgbGF0ZXIuIE1heWJlIG5vdCBvcHRpbWFsLCBidXQgcmFyZSBjYXNlXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCQkMSgpO1xuICAgICAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgclskbW9ieCQkMV0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS50cmFjZSA9IGZ1bmN0aW9uIChlbnRlckJyZWFrUG9pbnQpIHtcbiAgICAgICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7IGVudGVyQnJlYWtQb2ludCA9IGZhbHNlOyB9XG4gICAgICAgIHRyYWNlJCQxKHRoaXMsIGVudGVyQnJlYWtQb2ludCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3Rpb24kJDE7XG59KCkpO1xuZnVuY3Rpb24gb25SZWFjdGlvbkVycm9yJCQxKGhhbmRsZXIpIHtcbiAgICBnbG9iYWxTdGF0ZSQkMS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWR4ID0gZ2xvYmFsU3RhdGUkJDEuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlJCQxLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9O1xufVxuLyoqXG4gKiBNYWdpYyBudW1iZXIgYWxlcnQhXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcbiAqIHVudGlsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGlzIGlzIGdvbm5hIGJlIGEgbmV2ZXIgZW5kaW5nIGxvb3AuLi5cbiAqL1xudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xudmFyIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcbmZ1bmN0aW9uIHJ1blJlYWN0aW9ucyQkMSgpIHtcbiAgICAvLyBUcmFtcG9saW5pbmcsIGlmIHJ1blJlYWN0aW9ucyBhcmUgYWxyZWFkeSBydW5uaW5nLCBuZXcgcmVhY3Rpb25zIHdpbGwgYmUgcGlja2VkIHVwXG4gICAgaWYgKGdsb2JhbFN0YXRlJCQxLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlJCQxLmlzUnVubmluZ1JlYWN0aW9ucylcbiAgICAgICAgcmV0dXJuO1xuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XG59XG5mdW5jdGlvbiBydW5SZWFjdGlvbnNIZWxwZXIoKSB7XG4gICAgZ2xvYmFsU3RhdGUkJDEuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcbiAgICB2YXIgYWxsUmVhY3Rpb25zID0gZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1JlYWN0aW9ucztcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxuICAgIC8vIEhlbmNlIHdlIHdvcmsgd2l0aCB0d28gdmFyaWFibGVzIGFuZCBjaGVjayB3aGV0aGVyXG4gICAgLy8gd2UgY29udmVyZ2UgdG8gbm8gcmVtYWluaW5nIHJlYWN0aW9ucyBhZnRlciBhIHdoaWxlLlxuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoKytpdGVyYXRpb25zID09PSBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlYWN0aW9uIGRvZXNuJ3QgY29udmVyZ2UgdG8gYSBzdGFibGUgc3RhdGUgYWZ0ZXIgXCIgKyBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUyArIFwiIGl0ZXJhdGlvbnMuXCIgK1xuICAgICAgICAgICAgICAgIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICByZW1haW5pbmdSZWFjdGlvbnNbaV0ucnVuUmVhY3Rpb24oKTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUkJDEuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG59XG52YXIgaXNSZWFjdGlvbiQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJSZWFjdGlvblwiLCBSZWFjdGlvbiQkMSk7XG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlciQkMShmbikge1xuICAgIHZhciBiYXNlU2NoZWR1bGVyID0gcmVhY3Rpb25TY2hlZHVsZXI7XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZm4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTsgfSk7IH07XG59XG5cbmZ1bmN0aW9uIGlzU3B5RW5hYmxlZCQkMSgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEhZ2xvYmFsU3RhdGUkJDEuc3B5TGlzdGVuZXJzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIHNweVJlcG9ydCQkMShldmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybjsgLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxuICAgIGlmICghZ2xvYmFsU3RhdGUkJDEuc3B5TGlzdGVuZXJzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZSQkMS5zcHlMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0U3RhcnQkJDEoZXZlbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGNoYW5nZSA9IF9fYXNzaWduKHt9LCBldmVudCwgeyBzcHlSZXBvcnRTdGFydDogdHJ1ZSB9KTtcbiAgICBzcHlSZXBvcnQkJDEoY2hhbmdlKTtcbn1cbnZhciBFTkRfRVZFTlQgPSB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9O1xuZnVuY3Rpb24gc3B5UmVwb3J0RW5kJCQxKGNoYW5nZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoY2hhbmdlKVxuICAgICAgICBzcHlSZXBvcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBzcHlSZXBvcnRFbmQ6IHRydWUgfSkpO1xuICAgIGVsc2VcbiAgICAgICAgc3B5UmVwb3J0JCQxKEVORF9FVkVOVCk7XG59XG5mdW5jdGlvbiBzcHkkJDEobGlzdGVuZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LnNweV0gSXMgYSBuby1vcCBpbiBwcm9kdWN0aW9uIGJ1aWxkc1wiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLnNweUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIG9uY2UkJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGUkJDEuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUkJDEuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkgeyByZXR1cm4gbCAhPT0gbGlzdGVuZXI7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRvbnRSZWFzc2lnbkZpZWxkcygpIHtcbiAgICBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIkBhY3Rpb24gZmllbGRzIGFyZSBub3QgcmVhc3NpZ25hYmxlXCIpO1xufVxuZnVuY3Rpb24gbmFtZWRBY3Rpb25EZWNvcmF0b3IkJDEobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbCQkMShcIkBhY3Rpb24gY2Fubm90IGJlIHVzZWQgd2l0aCBnZXR0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYmFiZWwgLyB0eXBlc2NyaXB0XG4gICAgICAgICAgICAvLyBAYWN0aW9uIG1ldGhvZCgpIHsgfVxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyB0eXBlc2NyaXB0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNyZWF0ZUFjdGlvbiQkMShuYW1lLCBkZXNjcmlwdG9yLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUgLy8gZm9yIHR5cGVzY3JpcHQsIHRoaXMgbXVzdCBiZSB3cml0YWJsZSwgb3RoZXJ3aXNlIGl0IGNhbm5vdCBpbmhlcml0IDovIChzZWUgaW5oZXJpdGFibGUgYWN0aW9ucyB0ZXN0KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBiYWJlbCBvbmx5OiBAYWN0aW9uIG1ldGhvZCA9ICgpID0+IHt9XG4gICAgICAgICAgICB2YXIgaW5pdGlhbGl6ZXJfMSA9IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOLkI6IHdlIGNhbid0IGltbWVkaWF0ZWx5IGludm9rZSBpbml0aWFsaXplcjsgdGhpcyB3b3VsZCBiZSB3cm9uZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uJCQxKG5hbWUsIGluaXRpYWxpemVyXzEuY2FsbCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBib3VuZCBpbnN0YW5jZSBtZXRob2RzXG4gICAgICAgIHJldHVybiBhY3Rpb25GaWVsZERlY29yYXRvciQkMShuYW1lKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhY3Rpb25GaWVsZERlY29yYXRvciQkMShuYW1lKSB7XG4gICAgLy8gU2ltcGxlIHByb3BlcnR5IHRoYXQgd3JpdGVzIG9uIGZpcnN0IGludm9jYXRpb24gdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRIaWRkZW5Qcm9wJCQxKHRoaXMsIHByb3AsIGFjdGlvbiQkMShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYm91bmRBY3Rpb25EZWNvcmF0b3IkJDEodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGFwcGx5VG9JbnN0YW5jZSkge1xuICAgIGlmIChhcHBseVRvSW5zdGFuY2UgPT09IHRydWUpIHtcbiAgICAgICAgZGVmaW5lQm91bmRBY3Rpb24kJDEodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgLy8gaWYgKGRlc2NyaXB0b3IudmFsdWUpXG4gICAgICAgIC8vIFR5cGVzY3JpcHQgLyBCYWJlbDogQGFjdGlvbi5ib3VuZCBtZXRob2QoKSB7IH1cbiAgICAgICAgLy8gYWxzbzogYmFiZWwgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbiQkMSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IudmFsdWUgfHwgZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZG9udFJlYXNzaWduRmllbGRzXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGZpZWxkIGRlY29yYXRvciBUeXBlc2NyaXB0IEBhY3Rpb24uYm91bmQgbWV0aG9kID0gKCkgPT4ge31cbiAgICByZXR1cm4ge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbiQkMSh0aGlzLCBwcm9wZXJ0eU5hbWUsIHYpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG52YXIgYWN0aW9uJCQxID0gZnVuY3Rpb24gYWN0aW9uJCQxKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICAvLyBhY3Rpb24oZm4oKSB7fSlcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uJCQxKGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIiwgYXJnMSk7XG4gICAgLy8gYWN0aW9uKFwibmFtZVwiLCBmbigpIHt9KVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBhcmcyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24kJDEoYXJnMSwgYXJnMik7XG4gICAgLy8gQGFjdGlvbihcIm5hbWVcIikgZm4oKSB7fVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IkJDEoYXJnMSk7XG4gICAgLy8gQGFjdGlvbiBmbigpIHt9XG4gICAgaWYgKGFyZzQgPT09IHRydWUpIHtcbiAgICAgICAgLy8gYXBwbHkgdG8gaW5zdGFuY2UgaW1tZWRpYXRlbHlcbiAgICAgICAgYWRkSGlkZGVuUHJvcCQkMShhcmcxLCBhcmcyLCBjcmVhdGVBY3Rpb24kJDEoYXJnMS5uYW1lIHx8IGFyZzIsIGFyZzMudmFsdWUpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuYW1lZEFjdGlvbkRlY29yYXRvciQkMShhcmcyKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbn07XG5hY3Rpb24kJDEuYm91bmQgPSBib3VuZEFjdGlvbkRlY29yYXRvciQkMTtcbmZ1bmN0aW9uIHJ1bkluQWN0aW9uJCQxKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgYWN0aW9uTmFtZSA9IHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiID8gYXJnMSA6IGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIjtcbiAgICB2YXIgZm4gPSB0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiID8gYXJnMSA6IGFyZzI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgJiYgZm4ubGVuZ3RoID09PSAwLCBcImBydW5JbkFjdGlvbmAgZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIpO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbk5hbWUgIT09IFwic3RyaW5nXCIgfHwgIWFjdGlvbk5hbWUpXG4gICAgICAgICAgICBmYWlsJCQxKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbiQkMShhY3Rpb25OYW1lLCBmbiwgdGhpcywgdW5kZWZpbmVkKTtcbn1cbmZ1bmN0aW9uIGlzQWN0aW9uJCQxKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiICYmIHRoaW5nLmlzTW9ieEFjdGlvbiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGRlZmluZUJvdW5kQWN0aW9uJCQxKHRhcmdldCwgcHJvcGVydHlOYW1lLCBmbikge1xuICAgIGFkZEhpZGRlblByb3AkJDEodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNyZWF0ZUFjdGlvbiQkMShwcm9wZXJ0eU5hbWUsIGZuLmJpbmQodGFyZ2V0KSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuYW1lZCByZWFjdGl2ZSB2aWV3IGFuZCBrZWVwcyBpdCBhbGl2ZSwgc28gdGhhdCB0aGUgdmlldyBpcyBhbHdheXNcbiAqIHVwZGF0ZWQgaWYgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgY2hhbmdlcywgZXZlbiB3aGVuIHRoZSB2aWV3IGlzIG5vdCBmdXJ0aGVyIHVzZWQgYnkgc29tZXRoaW5nIGVsc2UuXG4gKiBAcGFyYW0gdmlldyBUaGUgcmVhY3RpdmUgdmlld1xuICogQHJldHVybnMgZGlzcG9zZXIgZnVuY3Rpb24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN0b3AgdGhlIHZpZXcgZnJvbSBiZWluZyB1cGRhdGVkIGluIHRoZSBmdXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGF1dG9ydW4kJDEodmlldywgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVCQkMTsgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50JCQxKHR5cGVvZiB2aWV3ID09PSBcImZ1bmN0aW9uXCIsIFwiQXV0b3J1biBleHBlY3RzIGEgZnVuY3Rpb24gYXMgZmlyc3QgYXJndW1lbnRcIik7XG4gICAgICAgIGludmFyaWFudCQkMShpc0FjdGlvbiQkMSh2aWV3KSA9PT0gZmFsc2UsIFwiQXV0b3J1biBkb2VzIG5vdCBhY2NlcHQgYWN0aW9ucyBzaW5jZSBhY3Rpb25zIGFyZSB1bnRyYWNrYWJsZVwiKTtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSAob3B0cyAmJiBvcHRzLm5hbWUpIHx8IHZpZXcubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQkJDEoKTtcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgICB2YXIgcmVhY3Rpb24kJDE7XG4gICAgaWYgKHJ1blN5bmMpIHtcbiAgICAgICAgLy8gbm9ybWFsIGF1dG9ydW5cbiAgICAgICAgcmVhY3Rpb24kJDEgPSBuZXcgUmVhY3Rpb24kJDEobmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50cmFjayhyZWFjdGlvblJ1bm5lcik7XG4gICAgICAgIH0sIG9wdHMub25FcnJvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc2NoZWR1bGVyXzEgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcbiAgICAgICAgLy8gZGVib3VuY2VkIGF1dG9ydW5cbiAgICAgICAgdmFyIGlzU2NoZWR1bGVkXzEgPSBmYWxzZTtcbiAgICAgICAgcmVhY3Rpb24kJDEgPSBuZXcgUmVhY3Rpb24kJDEobmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc1NjaGVkdWxlZF8xKSB7XG4gICAgICAgICAgICAgICAgaXNTY2hlZHVsZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyXzEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVhY3Rpb24kJDEuaXNEaXNwb3NlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uJCQxLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0cy5vbkVycm9yKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIHZpZXcocmVhY3Rpb24kJDEpO1xuICAgIH1cbiAgICByZWFjdGlvbiQkMS5zY2hlZHVsZSgpO1xuICAgIHJldHVybiByZWFjdGlvbiQkMS5nZXREaXNwb3NlcigpO1xufVxudmFyIHJ1biA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKCk7IH07XG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKSB7XG4gICAgcmV0dXJuIG9wdHMuc2NoZWR1bGVyXG4gICAgICAgID8gb3B0cy5zY2hlZHVsZXJcbiAgICAgICAgOiBvcHRzLmRlbGF5XG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChmKSB7IHJldHVybiBzZXRUaW1lb3V0KGYsIG9wdHMuZGVsYXkpOyB9XG4gICAgICAgICAgICA6IHJ1bjtcbn1cbmZ1bmN0aW9uIHJlYWN0aW9uJCQxKGV4cHJlc3Npb24sIGVmZmVjdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVCQkMTsgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50JCQxKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIsIFwiRmlyc3QgYXJndW1lbnQgdG8gcmVhY3Rpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIGludmFyaWFudCQkMSh0eXBlb2Ygb3B0cyA9PT0gXCJvYmplY3RcIiwgXCJUaGlyZCBhcmd1bWVudCBvZiByZWFjdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSBvcHRzLm5hbWUgfHwgXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCQkMSgpO1xuICAgIHZhciBlZmZlY3RBY3Rpb24gPSBhY3Rpb24kJDEobmFtZSwgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3QpO1xuICAgIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICAgIHZhciBzY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIGVxdWFscyA9IG9wdHMuY29tcGFyZVN0cnVjdHVyYWxcbiAgICAgICAgPyBjb21wYXJlciQkMS5zdHJ1Y3R1cmFsXG4gICAgICAgIDogb3B0cy5lcXVhbHMgfHwgY29tcGFyZXIkJDEuZGVmYXVsdDtcbiAgICB2YXIgciA9IG5ldyBSZWFjdGlvbiQkMShuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaXJzdFRpbWUgfHwgcnVuU3luYykge1xuICAgICAgICAgICAgcmVhY3Rpb25SdW5uZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XG4gICAgICAgIH1cbiAgICB9LCBvcHRzLm9uRXJyb3IpO1xuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlOyAvLyBROiBtb3ZlIGludG8gcmVhY3Rpb24gcnVubmVyP1xuICAgICAgICBpZiAoci5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICByLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBleHByZXNzaW9uKHIpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCByKTtcbiAgICAgICAgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbih2YWx1ZSwgcik7XG4gICAgICAgIGlmIChmaXJzdFRpbWUpXG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICB9XG4gICAgci5zY2hlZHVsZSgpO1xuICAgIHJldHVybiByLmdldERpc3Bvc2VyKCk7XG59XG5mdW5jdGlvbiB3cmFwRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlciwgYmFzZUZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBiYXNlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBvbkJlY29tZU9ic2VydmVkJCQxKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soXCJvbkJlY29tZU9ic2VydmVkXCIsIHRoaW5nLCBhcmcyLCBhcmczKTtcbn1cbmZ1bmN0aW9uIG9uQmVjb21lVW5vYnNlcnZlZCQkMSh0aGluZywgYXJnMiwgYXJnMykge1xuICAgIHJldHVybiBpbnRlcmNlcHRIb29rKFwib25CZWNvbWVVbm9ic2VydmVkXCIsIHRoaW5nLCBhcmcyLCBhcmczKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdEhvb2soaG9vaywgdGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgYXRvbSA9IHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiID8gZ2V0QXRvbSQkMSh0aGluZywgYXJnMikgOiBnZXRBdG9tJCQxKHRoaW5nKTtcbiAgICB2YXIgY2IgPSB0eXBlb2YgYXJnMiA9PT0gXCJzdHJpbmdcIiA/IGFyZzMgOiBhcmcyO1xuICAgIHZhciBsaXN0ZW5lcnNLZXkgPSBob29rICsgXCJMaXN0ZW5lcnNcIjtcbiAgICBpZiAoYXRvbVtsaXN0ZW5lcnNLZXldKSB7XG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XS5hZGQoY2IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXRvbVtsaXN0ZW5lcnNLZXldID0gbmV3IFNldChbY2JdKTtcbiAgICB9XG4gICAgdmFyIG9yaWcgPSBhdG9tW2hvb2tdO1xuICAgIGlmICh0eXBlb2Ygb3JpZyAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJOb3QgYW4gYXRvbSB0aGF0IGNhbiBiZSAodW4pb2JzZXJ2ZWRcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvb2tMaXN0ZW5lcnMgPSBhdG9tW2xpc3RlbmVyc0tleV07XG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBob29rTGlzdGVuZXJzLmRlbGV0ZShjYik7XG4gICAgICAgICAgICBpZiAoaG9va0xpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZSQkMShvcHRpb25zKSB7XG4gICAgdmFyIGVuZm9yY2VBY3Rpb25zID0gb3B0aW9ucy5lbmZvcmNlQWN0aW9ucywgY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24sIGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBvcHRpb25zLmRpc2FibGVFcnJvckJvdW5kYXJpZXMsIHJlYWN0aW9uU2NoZWR1bGVyID0gb3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlcjtcbiAgICBpZiAoZW5mb3JjZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIGVuZm9yY2VBY3Rpb25zID09PSBcImJvb2xlYW5cIiB8fCBlbmZvcmNlQWN0aW9ucyA9PT0gXCJzdHJpY3RcIilcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQkJDEoXCJEZXByZWNhdGVkIHZhbHVlIGZvciAnZW5mb3JjZUFjdGlvbnMnLCB1c2UgJ2ZhbHNlJyA9PiAnXFxcIm5ldmVyXFxcIicsICd0cnVlJyA9PiAnXFxcIm9ic2VydmVkXFxcIicsICdcXFwic3RyaWN0XFxcIicgPT4gXFxcIidhbHdheXMnXFxcIiBpbnN0ZWFkXCIpO1xuICAgICAgICB2YXIgZWEgPSB2b2lkIDA7XG4gICAgICAgIHN3aXRjaCAoZW5mb3JjZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGNhc2UgXCJvYnNlcnZlZFwiOlxuICAgICAgICAgICAgICAgIGVhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICBjYXNlIFwibmV2ZXJcIjpcbiAgICAgICAgICAgICAgICBlYSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0cmljdFwiOlxuICAgICAgICAgICAgY2FzZSBcImFsd2F5c1wiOlxuICAgICAgICAgICAgICAgIGVhID0gXCJzdHJpY3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmFpbCQkMShcIkludmFsaWQgdmFsdWUgZm9yICdlbmZvcmNlQWN0aW9ucyc6ICdcIiArIGVuZm9yY2VBY3Rpb25zICsgXCInLCBleHBlY3RlZCAnbmV2ZXInLCAnYWx3YXlzJyBvciAnb2JzZXJ2ZWQnXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmVuZm9yY2VBY3Rpb25zID0gZWE7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmFsbG93U3RhdGVDaGFuZ2VzID0gZWEgPT09IHRydWUgfHwgZWEgPT09IFwic3RyaWN0XCIgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICAgIGlmIChjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSAhIWNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaXNvbGF0ZUdsb2JhbFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgIGlzb2xhdGVHbG9iYWxTdGF0ZSQkMSgpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZUVycm9yQm91bmRhcmllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV0FSTklORzogRGVidWcgZmVhdHVyZSBvbmx5LiBNb2JYIHdpbGwgTk9UIHJlY292ZXIgZnJvbSBlcnJvcnMgd2hlbiBgZGlzYWJsZUVycm9yQm91bmRhcmllc2AgaXMgZW5hYmxlZC5cIik7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSAhIWRpc2FibGVFcnJvckJvdW5kYXJpZXM7XG4gICAgfVxuICAgIGlmIChyZWFjdGlvblNjaGVkdWxlcikge1xuICAgICAgICBzZXRSZWFjdGlvblNjaGVkdWxlciQkMShyZWFjdGlvblNjaGVkdWxlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZSQkMSh0aGluZywgZGVjb3JhdG9ycykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICBpbnZhcmlhbnQkJDEoaXNQbGFpbk9iamVjdCQkMShkZWNvcmF0b3JzKSwgXCJEZWNvcmF0b3JzIHNob3VsZCBiZSBhIGtleSB2YWx1ZSBtYXBcIik7XG4gICAgdmFyIHRhcmdldCA9IHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiID8gdGhpbmcucHJvdG90eXBlIDogdGhpbmc7XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgcHJvcGVydHlEZWNvcmF0b3JzID0gZGVjb3JhdG9yc1twcm9wXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BlcnR5RGVjb3JhdG9ycykpIHtcbiAgICAgICAgICAgIHByb3BlcnR5RGVjb3JhdG9ycyA9IFtwcm9wZXJ0eURlY29yYXRvcnNdO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50JCQxKHByb3BlcnR5RGVjb3JhdG9ycy5ldmVyeShmdW5jdGlvbiAoZGVjb3JhdG9yKSB7IHJldHVybiB0eXBlb2YgZGVjb3JhdG9yID09PSBcImZ1bmN0aW9uXCI7IH0pLCBcIkRlY29yYXRlOiBleHBlY3RlZCBhIGRlY29yYXRvciBmdW5jdGlvbiBvciBhcnJheSBvZiBkZWNvcmF0b3IgZnVuY3Rpb25zIGZvciAnXCIgKyBwcm9wICsgXCInXCIpO1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgdmFyIG5ld0Rlc2NyaXB0b3IgPSBwcm9wZXJ0eURlY29yYXRvcnMucmVkdWNlKGZ1bmN0aW9uIChhY2NEZXNjcmlwdG9yLCBkZWNvcmF0b3IpIHsgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3AsIGFjY0Rlc2NyaXB0b3IpOyB9LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgaWYgKG5ld0Rlc2NyaXB0b3IpXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCBuZXdEZXNjcmlwdG9yKTtcbiAgICB9O1xuICAgIGZvciAodmFyIHByb3AgaW4gZGVjb3JhdG9ycykge1xuICAgICAgICBfbG9vcF8xKHByb3ApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpbmc7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUkJDEodGFyZ2V0LCBwcm9wZXJ0aWVzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEoYXJndW1lbnRzLmxlbmd0aCA+PSAyICYmIGFyZ3VtZW50cy5sZW5ndGggPD0gNCwgXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0ZWQgMi00IGFyZ3VtZW50c1wiKTtcbiAgICAgICAgaW52YXJpYW50JCQxKHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIsIFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xuICAgICAgICBpbnZhcmlhbnQkJDEoIWlzT2JzZXJ2YWJsZU1hcCQkMSh0YXJnZXQpLCBcIidleHRlbmRPYnNlcnZhYmxlJyBzaG91bGQgbm90IGJlIHVzZWQgb24gbWFwcywgdXNlIG1hcC5tZXJnZSBpbnN0ZWFkXCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMShvcHRpb25zKTtcbiAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyQkMShvcHRpb25zKTtcbiAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGFyZ2V0KTsgLy8gRml4ZXMgIzE3NDBcbiAgICBhc09ic2VydmFibGVPYmplY3QkJDEodGFyZ2V0LCBvcHRpb25zLm5hbWUsIGRlZmF1bHREZWNvcmF0b3IuZW5oYW5jZXIpOyAvLyBtYWtlIHN1cmUgb2JqZWN0IGlzIG9ic2VydmFibGUsIGV2ZW4gd2l0aG91dCBpbml0aWFsIHByb3BzXG4gICAgaWYgKHByb3BlcnRpZXMpXG4gICAgICAgIGV4dGVuZE9ic2VydmFibGVPYmplY3RXaXRoUHJvcGVydGllcyQkMSh0YXJnZXQsIHByb3BlcnRpZXMsIGRlY29yYXRvcnMsIGRlZmF1bHREZWNvcmF0b3IpO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBnZXREZWZhdWx0RGVjb3JhdG9yRnJvbU9iamVjdE9wdGlvbnMkJDEob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3IgfHwgKG9wdGlvbnMuZGVlcCA9PT0gZmFsc2UgPyByZWZEZWNvcmF0b3IkJDEgOiBkZWVwRGVjb3JhdG9yJCQxKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGVPYmplY3RXaXRoUHJvcGVydGllcyQkMSh0YXJnZXQsIHByb3BlcnRpZXMsIGRlY29yYXRvcnMsIGRlZmF1bHREZWNvcmF0b3IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCQkMSghaXNPYnNlcnZhYmxlJCQxKHByb3BlcnRpZXMpLCBcIkV4dGVuZGluZyBhbiBvYmplY3Qgd2l0aCBhbm90aGVyIG9ic2VydmFibGUgKG9iamVjdCkgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIGNvbnN0cnVjdCBhbiBleHBsaWNpdCBwcm9wZXJ0eW1hcCwgdXNpbmcgYHRvSlNgIGlmIG5lZWQuIFNlZSBpc3N1ZSAjNTQwXCIpO1xuICAgICAgICBpZiAoZGVjb3JhdG9ycylcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkZWNvcmF0b3JzKVxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBwcm9wZXJ0aWVzKSlcbiAgICAgICAgICAgICAgICAgICAgZmFpbCQkMShcIlRyeWluZyB0byBkZWNsYXJlIGEgZGVjb3JhdG9yIGZvciB1bnNwZWNpZmllZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgfVxuICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIGtleSk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpKVxuICAgICAgICAgICAgICAgICAgICBmYWlsJCQxKFwiJ2V4dGVuZE9ic2VydmFibGUnIGNhbiBvbmx5IGJlIHVzZWQgdG8gaW50cm9kdWNlIG5ldyBwcm9wZXJ0aWVzLiBVc2UgJ3NldCcgb3IgJ2RlY29yYXRlJyBpbnN0ZWFkLiBUaGUgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInIGFscmVhZHkgZXhpc3RzIG9uICdcIiArIHRhcmdldCArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZCQkMShkZXNjcmlwdG9yLnZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgZmFpbCQkMShcIlBhc3NpbmcgYSAnY29tcHV0ZWQnIGFzIGluaXRpYWwgcHJvcGVydHkgdmFsdWUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBleHRlbmRPYnNlcnZhYmxlLiBVc2UgYSBnZXR0ZXIgb3IgZGVjb3JhdG9yIGluc3RlYWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9ycyAmJiBrZXkgaW4gZGVjb3JhdG9yc1xuICAgICAgICAgICAgICAgID8gZGVjb3JhdG9yc1trZXldXG4gICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yLmdldFxuICAgICAgICAgICAgICAgICAgICA/IGNvbXB1dGVkRGVjb3JhdG9yJCQxXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdERlY29yYXRvcjtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdHlwZW9mIGRlY29yYXRvciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJOb3QgYSB2YWxpZCBkZWNvcmF0b3IgZm9yICdcIiArIGtleSArIFwiJywgZ290OiBcIiArIGRlY29yYXRvcik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0RGVzY3JpcHRvciA9IGRlY29yYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0RGVzY3JpcHRvciAvLyBvdGhlcndpc2UsIGFzc3VtZSBhbHJlYWR5IGFwcGxpZWQsIGR1ZSB0byBgYXBwbHlUb0luc3RhbmNlYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcmVzdWx0RGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSQkMSh0aGluZywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSQkMSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChub2RlLm9ic2VydmluZyAmJiBub2RlLm9ic2VydmluZy5sZW5ndGggPiAwKVxuICAgICAgICByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlJCQxKG5vZGUub2JzZXJ2aW5nKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUkJDEodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tJCQxKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChoYXNPYnNlcnZlcnMkJDEobm9kZSkpXG4gICAgICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyQkMShub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGdlbmVyYXRvcklkID0gMDtcbmZ1bmN0aW9uIGZsb3ckJDEoZ2VuZXJhdG9yKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgXCJGbG93IGV4cGVjdHMgb25lIDEgYXJndW1lbnQgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGRlY29yYXRvclwiKTtcbiAgICB2YXIgbmFtZSA9IGdlbmVyYXRvci5uYW1lIHx8IFwiPHVubmFtZWQgZmxvdz5cIjtcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdGovY28vYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHZhciBydW5JZCA9ICsrZ2VuZXJhdG9ySWQ7XG4gICAgICAgIHZhciBnZW4gPSBhY3Rpb24kJDEobmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGluaXRcIiwgZ2VuZXJhdG9yKS5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICB2YXIgcmVqZWN0b3I7XG4gICAgICAgIHZhciBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJlcyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdGVwSWQgPSAwO1xuICAgICAgICAgICAgcmVqZWN0b3IgPSByZWplY3Q7XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXMpIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbiQkMShuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLm5leHQpLmNhbGwoZ2VuLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciByZXQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uJCQxKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4udGhyb3cpLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgdHlwZW9mIHJldC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW4gYXN5bmMgaXRlcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkZ1bGZpbGxlZCh1bmRlZmluZWQpOyAvLyBraWNrIG9mZiB0aGUgcHJvY2Vzc1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmNhbmNlbCA9IGFjdGlvbiQkMShuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdQcm9taXNlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHBlbmRpbmdQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXG4gICAgICAgICAgICAgICAgdmFyIHJlc18xID0gZ2VuLnJldHVybigpO1xuICAgICAgICAgICAgICAgIC8vIGVhdCBhbnl0aGluZyB0aGF0IHByb21pc2Ugd291bGQgZG8sIGl0J3MgY2FuY2VsbGVkIVxuICAgICAgICAgICAgICAgIHZhciB5aWVsZGVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXNfMS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wJCQxLCBub29wJCQxKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKTsgLy8gbWF5YmUgaXQgY2FuIGJlIGNhbmNlbGxlZCA6KVxuICAgICAgICAgICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHJlamVjdG9yKG5ldyBFcnJvcihcIkZMT1dfQ0FOQ0VMTEVEXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0b3IoZSk7IC8vIHRoZXJlIGNvdWxkIGJlIGEgdGhyb3dpbmcgZmluYWxseSBibG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xufVxuZnVuY3Rpb24gY2FuY2VsUHJvbWlzZShwcm9taXNlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNlLmNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRSZWFkcyQkMSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xuICAgIHZhciB0YXJnZXQ7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMSh0aGluZykgfHwgaXNPYnNlcnZhYmxlQXJyYXkkJDEodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVZhbHVlJCQxKHRoaW5nKSkge1xuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh0aGluZykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wT3JIYW5kbGVyICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgXCJJbnRlcmNlcHRSZWFkcyBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBzcGVjaWZpYyBwcm9wZXJ0eSwgbm90IHdpdGggYW4gb2JqZWN0IGluIGdlbmVyYWxcIik7XG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uJCQxKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCJFeHBlY3RlZCBvYnNlcnZhYmxlIG1hcCwgb2JqZWN0IG9yIGFycmF5IGFzIGZpcnN0IGFycmF5XCIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIkFuIGludGVyY2VwdCByZWFkZXIgd2FzIGFscmVhZHkgZXN0YWJsaXNoZWRcIik7XG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdHlwZW9mIHByb3BPckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BPckhhbmRsZXIgOiBoYW5kbGVyO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRhcmdldC5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQkJDEodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24kJDEodGhpbmcpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcikge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZywgcHJvcGVydHkpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gX2lzQ29tcHV0ZWQkJDEodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKHZhbHVlKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdmFsdWVbJG1vYngkJDFdLnZhbHVlcy5oYXMocHJvcGVydHkpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYXRvbSA9IGdldEF0b20kJDEodmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZSQkMShhdG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZSQkMSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NvbXB1dGVkJCQxKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiaXNDb21wdXRlZCBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICAgIHJldHVybiBfaXNDb21wdXRlZCQkMSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NvbXB1dGVkUHJvcCQkMSh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BOYW1lICE9PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiaXNDb21wdXRlZCBleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICAgIHJldHVybiBfaXNDb21wdXRlZCQkMSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgKGlzT2JzZXJ2YWJsZU1hcCQkMSh2YWx1ZSkgfHwgaXNPYnNlcnZhYmxlQXJyYXkkJDEodmFsdWUpKSlcbiAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKFwiaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVskbW9ieCQkMV0udmFsdWVzLmhhcyhwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBGb3IgZmlyc3QgY2hlY2ssIHNlZSAjNzAxXG4gICAgcmV0dXJuIChpc09ic2VydmFibGVPYmplY3QkJDEodmFsdWUpIHx8XG4gICAgICAgICEhdmFsdWVbJG1vYngkJDFdIHx8XG4gICAgICAgIGlzQXRvbSQkMSh2YWx1ZSkgfHxcbiAgICAgICAgaXNSZWFjdGlvbiQkMSh2YWx1ZSkgfHxcbiAgICAgICAgaXNDb21wdXRlZFZhbHVlJCQxKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc09ic2VydmFibGUkJDEodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiaXNPYnNlcnZhYmxlIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNPYnNlcnZhYmxlUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlcIik7XG4gICAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlUHJvcCQkMSh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BOYW1lICE9PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGtleXMkJDEob2JqKSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpbJG1vYngkJDFdLmdldEtleXMoKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHZhbHVlcyQkMShvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqLmdldChrZXkpOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCIndmFsdWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XG59XG5mdW5jdGlvbiBlbnRyaWVzJCQxKG9iaikge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5cyQkMShvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBba2V5LCBvYmpba2V5XV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqLmdldChrZXkpXTsgfSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7IHJldHVybiBbaW5kZXgsIGtleV07IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gc2V0JCQxKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgdmFyIHZhbHVlc18xID0ga2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5XzEgaW4gdmFsdWVzXzEpXG4gICAgICAgICAgICAgICAgc2V0JCQxKG9iaiwga2V5XzEsIHZhbHVlc18xW2tleV8xXSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBlbmRCYXRjaCQkMSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMShvYmopKSB7XG4gICAgICAgIHZhciBhZG0gPSBvYmpbJG1vYngkJDFdO1xuICAgICAgICB2YXIgZXhpc3RpbmdPYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgYWRtLndyaXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRtLmFkZE9ic2VydmFibGVQcm9wKGtleSwgdmFsdWUsIGFkbS5kZWZhdWx0RW5oYW5jZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvYmopKSB7XG4gICAgICAgIG9iai5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICAgICAgaW52YXJpYW50JCQxKGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKVxuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDE7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZSQkMShvYmosIGtleSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEob2JqKSkge1xuICAgICAgICBcbiAgICAgICAgb2JqWyRtb2J4JCQxXS5yZW1vdmUoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgb2JqLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgICAgIGludmFyaWFudCQkMShrZXkgPj0gMCwgXCJOb3QgYSB2YWxpZCBpbmRleDogJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICBvYmouc3BsaWNlKGtleSwgMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3JlbW92ZSgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhcyQkMShvYmosIGtleSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEob2JqKSkge1xuICAgICAgICAvLyByZXR1cm4ga2V5cyhvYmopLmluZGV4T2Yoa2V5KSA+PSAwXG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG1pbmlzdHJhdGlvbiQkMShvYmopO1xuICAgICAgICByZXR1cm4gYWRtLmhhcyhrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLmhhcyhrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBrZXkgPj0gMCAmJiBrZXkgPCBvYmoubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcIidoYXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXQkJDEob2JqLCBrZXkpIHtcbiAgICBpZiAoIWhhcyQkMShvYmosIGtleSkpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5nZXQoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ2dldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSQkMSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAodHlwZW9mIGNiT3JGaXJlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZykub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbn1cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uJCQxKHRoaW5nLCBwcm9wZXJ0eSkub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbn1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGRldGVjdEN5Y2xlczogdHJ1ZSxcbiAgICBleHBvcnRNYXBzQXNPYmplY3RzOiB0cnVlLFxuICAgIHJlY3Vyc2VFdmVyeXRoaW5nOiBmYWxzZVxufTtcbmZ1bmN0aW9uIGNhY2hlKG1hcCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmRldGVjdEN5Y2xlcylcbiAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB0b0pTSGVscGVyKHNvdXJjZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbikge1xuICAgIGlmICghb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyAmJiAhaXNPYnNlcnZhYmxlJCQxKHNvdXJjZSkpXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgLy8gRGlyZWN0bHkgcmV0dXJuIG51bGwgaWYgc291cmNlIGlzIG51bGxcbiAgICBpZiAoc291cmNlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyBEaXJlY3RseSByZXR1cm4gdGhlIERhdGUgb2JqZWN0IGl0c2VsZiBpZiBjb250YWluZWQgaW4gdGhlIG9ic2VydmFibGVcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlVmFsdWUkJDEoc291cmNlKSlcbiAgICAgICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLmdldCgpLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJhY2sgdGhlIGtleXMgb2YgdGhlIG9iamVjdFxuICAgIGlmIChpc09ic2VydmFibGUkJDEoc291cmNlKSlcbiAgICAgICAga2V5cyQkMShzb3VyY2UpO1xuICAgIHZhciBkZXRlY3RDeWNsZXMgPSBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcbiAgICBpZiAoZGV0ZWN0Q3ljbGVzICYmIHNvdXJjZSAhPT0gbnVsbCAmJiBfX2FscmVhZHlTZWVuLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBfX2FscmVhZHlTZWVuLmdldChzb3VyY2UpO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkkJDEoc291cmNlKSB8fCBBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgdmFyIHJlc18xID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBbXSwgb3B0aW9ucyk7XG4gICAgICAgIHZhciB0b0FkZCA9IHNvdXJjZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTsgfSk7XG4gICAgICAgIHJlc18xLmxlbmd0aCA9IHRvQWRkLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b0FkZC5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICByZXNfMVtpXSA9IHRvQWRkW2ldO1xuICAgICAgICByZXR1cm4gcmVzXzE7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAkJDEoc291cmNlKSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKSA9PT0gTWFwLnByb3RvdHlwZSkge1xuICAgICAgICBpZiAob3B0aW9ucy5leHBvcnRNYXBzQXNPYmplY3RzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHJlc18yID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBuZXcgTWFwKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXNfMi5zZXQoa2V5LCB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXNfMyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXNfM1trZXldID0gdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGYWxsYmFjayB0byB0aGUgc2l0dWF0aW9uIHRoYXQgc291cmNlIGlzIGFuIE9ic2VydmFibGVPYmplY3Qgb3IgYSBwbGFpbiBvYmplY3RcbiAgICB2YXIgcmVzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICByZXNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gdG9KUyQkMShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgb3B0aW9ucyA9IHsgZGV0ZWN0Q3ljbGVzOiBvcHRpb25zIH07XG4gICAgaWYgKCFvcHRpb25zKVxuICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgb3B0aW9ucy5kZXRlY3RDeWNsZXMgPVxuICAgICAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG9wdGlvbnMucmVjdXJzZUV2ZXJ5dGhpbmcgPT09IHRydWVcbiAgICAgICAgICAgIDogb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHRydWU7XG4gICAgdmFyIF9fYWxyZWFkeVNlZW47XG4gICAgaWYgKG9wdGlvbnMuZGV0ZWN0Q3ljbGVzKVxuICAgICAgICBfX2FscmVhZHlTZWVuID0gbmV3IE1hcCgpO1xuICAgIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XG59XG5cbmZ1bmN0aW9uIHRyYWNlJCQxKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IFwiYm9vbGVhblwiKVxuICAgICAgICBlbnRlckJyZWFrUG9pbnQgPSBhcmdzLnBvcCgpO1xuICAgIHZhciBkZXJpdmF0aW9uID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpO1xuICAgIGlmICghZGVyaXZhdGlvbikge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3RyYWNlKGJyZWFrPyknIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGEgdHJhY2tlZCBjb21wdXRlZCB2YWx1ZSBvciBhIFJlYWN0aW9uLiBDb25zaWRlciBwYXNzaW5nIGluIHRoZSBjb21wdXRlZCB2YWx1ZSBvciByZWFjdGlvbiBleHBsaWNpdGx5XCIpO1xuICAgIH1cbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZSQkMS5OT05FKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyB0cmFjaW5nIGVuYWJsZWRcIik7XG4gICAgfVxuICAgIGRlcml2YXRpb24uaXNUcmFjaW5nID0gZW50ZXJCcmVha1BvaW50ID8gVHJhY2VNb2RlJCQxLkJSRUFLIDogVHJhY2VNb2RlJCQxLkxPRztcbn1cbmZ1bmN0aW9uIGdldEF0b21Gcm9tQXJncyhhcmdzKSB7XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RhdGUkJDEudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbSQkMShhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIGdldEF0b20kJDEoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgfVxufVxuXG4vKipcbiAqIER1cmluZyBhIHRyYW5zYWN0aW9uIG5vIHZpZXdzIGFyZSB1cGRhdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICogVGhlIHRyYW5zYWN0aW9uIHdpbGwgYmUgcnVuIHN5bmNocm9ub3VzbHkgbm9uZXRoZWxlc3MuXG4gKlxuICogQHBhcmFtIGFjdGlvbiBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBzb21lIHJlYWN0aXZlIHN0YXRlXG4gKiBAcmV0dXJucyBhbnkgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlICdhY3Rpb24nIHBhcmFtZXRlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNhY3Rpb24kJDEoYWN0aW9uJCQxLCB0aGlzQXJnKSB7XG4gICAgaWYgKHRoaXNBcmcgPT09IHZvaWQgMCkgeyB0aGlzQXJnID0gdW5kZWZpbmVkOyB9XG4gICAgc3RhcnRCYXRjaCQkMSgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24kJDEuYXBwbHkodGhpc0FyZyk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBlbmRCYXRjaCQkMSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2hlbiQkMShwcmVkaWNhdGUsIGFyZzEsIGFyZzIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCAoYXJnMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIikpXG4gICAgICAgIHJldHVybiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIGFyZzEpO1xuICAgIHJldHVybiBfd2hlbihwcmVkaWNhdGUsIGFyZzEsIGFyZzIgfHwge30pO1xufVxuZnVuY3Rpb24gX3doZW4ocHJlZGljYXRlLCBlZmZlY3QsIG9wdHMpIHtcbiAgICB2YXIgdGltZW91dEhhbmRsZTtcbiAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3Bvc2VyWyRtb2J4JCQxXS5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJXSEVOX1RJTUVPVVRcIik7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMub25FcnJvcilcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvcHRzLnRpbWVvdXQpO1xuICAgIH1cbiAgICBvcHRzLm5hbWUgPSBvcHRzLm5hbWUgfHwgXCJXaGVuQFwiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgdmFyIGVmZmVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbiQkMShvcHRzLm5hbWUgKyBcIi1lZmZlY3RcIiwgZWZmZWN0KTtcbiAgICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuJCQxKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoKSkge1xuICAgICAgICAgICAgci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZSlcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH0sIG9wdHMpO1xuICAgIHJldHVybiBkaXNwb3Nlcjtcbn1cbmZ1bmN0aW9uIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgb3B0cykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgb3B0cyAmJiBvcHRzLm9uRXJyb3IpXG4gICAgICAgIHJldHVybiBmYWlsJCQxKFwidGhlIG9wdGlvbnMgJ29uRXJyb3InIGFuZCAncHJvbWlzZScgY2Fubm90IGJlIGNvbWJpbmVkXCIpO1xuICAgIHZhciBjYW5jZWw7XG4gICAgdmFyIHJlcyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRpc3Bvc2VyID0gX3doZW4ocHJlZGljYXRlLCByZXNvbHZlLCBfX2Fzc2lnbih7fSwgb3B0cywgeyBvbkVycm9yOiByZWplY3QgfSkpO1xuICAgICAgICBjYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgcmVqZWN0KFwiV0hFTl9DQU5DRUxMRURcIik7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmVzLmNhbmNlbCA9IGNhbmNlbDtcbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBnZXRBZG0odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldFskbW9ieCQkMV07XG59XG4vLyBPcHRpbWl6YXRpb246IHdlIGRvbid0IG5lZWQgdGhlIGludGVybWVkaWF0ZSBvYmplY3RzIGFuZCBjb3VsZCBoYXZlIGEgY29tcGxldGVseSBjdXN0b20gYWRtaW5pc3RyYXRpb24gZm9yIER5bmFtaWNPYmplY3RzLFxuLy8gYW5kIHNraXAgZWl0aGVyIHRoZSBpbnRlcm5hbCB2YWx1ZXMgbWFwLCBvciB0aGUgYmFzZSBvYmplY3Qgd2l0aCBpdHMgcHJvcGVydHkgZGVzY3JpcHRvcnMhXG52YXIgb2JqZWN0UHJveHlUcmFwcyA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICRtb2J4JCQxIHx8IG5hbWUgPT09IFwiY29uc3RydWN0b3JcIiB8fCBuYW1lID09PSBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCQkMSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIC8vIE1XRTogc2hvdWxkIGBpbmAgb3BlcmF0b3IgYmUgcmVhY3RpdmU/IElmIG5vdCwgYmVsb3cgY29kZSBwYXRoIHdpbGwgYmUgZmFzdGVyIC8gbW9yZSBtZW1vcnkgZWZmaWNpZW50XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIHBlcmZvcm1hbmNlIHN0YXRzIVxuICAgICAgICAvLyBpZiAoYWRtLnZhbHVlcy5nZXQobmFtZSBhcyBzdHJpbmcpKSByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gYWRtLmhhcyhuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGFyZ2V0O1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCQkMSB8fCBuYW1lID09PSBcImNvbnN0cnVjdG9yXCIgfHwgbmFtZSA9PT0gbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDEpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gYWRtLnZhbHVlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlJCQxIGluc3RhbmNlb2YgQXRvbSQkMSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9ic2VydmFibGUkJDEuZ2V0KCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZpeGVzICMxNzk2LCBiZWNhdXNlIGRlbGV0aW5nIGEgcHJvcCB0aGF0IGhhcyBhblxuICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCB2YWx1ZSB3b24ndCByZXRyaWdnZXIgYSBvYnNlcnZlciAobm8gdmlzaWJsZSBlZmZlY3QpLFxuICAgICAgICAgICAgICAgIC8vIHRoZSBhdXRvcnVuIHdvdWxkbid0IHN1YnNjcmliZSB0byBmdXR1cmUga2V5IGNoYW5nZXMgKHNlZSBhbHNvIG5leHQgY29tbWVudClcbiAgICAgICAgICAgICAgICBhZG0uaGFzKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc3RhcnQgbGlzdGVuaW5nIHRvIGZ1dHVyZSBrZXlzXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBvbmx5IGRvIHRoaXMgaGVyZSBmb3Igb3B0aW1pemF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2V0JCQxKHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICBhZG0ucmVtb3ZlKG5hbWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIG93bktleXM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICBhZG0ua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpO1xuICAgIH0sXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZmFpbCQkMShcIkR5bmFtaWMgb2JzZXJ2YWJsZSBvYmplY3RzIGNhbm5vdCBiZSBmcm96ZW5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QkJDEoYmFzZSkge1xuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShiYXNlLCBvYmplY3RQcm94eVRyYXBzKTtcbiAgICBiYXNlWyRtb2J4JCQxXS5wcm94eSA9IHByb3h5O1xuICAgIHJldHVybiBwcm94eTtcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzJCQxKGludGVyY2VwdGFibGUpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgIT09IHVuZGVmaW5lZCAmJiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvciQkMShpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGludGVyY2VwdG9ycyA9IGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzIHx8IChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyA9IFtdKTtcbiAgICBpbnRlcmNlcHRvcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gb25jZSQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBpbnRlcmNlcHRvcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBpbnRlcmNlcHRvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UkJDEoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQkJDEoKTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnM7XG4gICAgICAgIGlmIChpbnRlcmNlcHRvcnMpXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGludGVyY2VwdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQkJDEoIWNoYW5nZSB8fCBjaGFuZ2UudHlwZSwgXCJJbnRlcmNlcHQgaGFuZGxlcnMgc2hvdWxkIHJldHVybiBub3RoaW5nIG9yIGEgY2hhbmdlIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2U7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB1bnRyYWNrZWRFbmQkJDEocHJldlUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzTGlzdGVuZXJzJCQxKGxpc3RlbmFibGUpIHtcbiAgICByZXR1cm4gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lciQkMShsaXN0ZW5hYmxlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyA9IFtdKTtcbiAgICBsaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gb25jZSQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMkJDEobGlzdGVuYWJsZSwgY2hhbmdlKSB7XG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQkJDEoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnM7XG4gICAgaWYgKCFsaXN0ZW5lcnMpXG4gICAgICAgIHJldHVybjtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gICAgfVxuICAgIHVudHJhY2tlZEVuZCQkMShwcmV2VSk7XG59XG5cbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcbnZhciBhcnJheVRyYXBzID0ge1xuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYngkJDEpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4JCQxXTtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4JCQxXS5nZXRBcnJheUxlbmd0aCgpO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnMuZ2V0LmNhbGwodGFyZ2V0LCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgIWlzTmFOKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zLmdldC5jYWxsKHRhcmdldCwgcGFyc2VJbnQobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJheUV4dGVuc2lvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICAgIHRhcmdldFskbW9ieCQkMV0uc2V0QXJyYXlMZW5ndGgodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKG5hbWUpKSB7XG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZmFpbCQkMShcIk9ic2VydmFibGUgYXJyYXlzIGNhbm5vdCBiZSBmcm96ZW5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5JCQxKGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkJCQxKCk7IH1cbiAgICBpZiAob3duZWQgPT09IHZvaWQgMCkgeyBvd25lZCA9IGZhbHNlOyB9XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpO1xuICAgIGFkZEhpZGRlbkZpbmFsUHJvcCQkMShhZG0udmFsdWVzLCAkbW9ieCQkMSwgYWRtKTtcbiAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoYWRtLnZhbHVlcywgYXJyYXlUcmFwcyk7XG4gICAgYWRtLnByb3h5ID0gcHJveHk7XG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0JCQxKHRydWUpO1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZCQkMShwcmV2KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3h5O1xufVxudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCkge1xuICAgICAgICB0aGlzLm93bmVkID0gb3duZWQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMucHJveHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGFzdEtub3duTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hdG9tID0gbmV3IEF0b20kJDEobmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCQkMSgpKTtcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcyQkMSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcyQkMS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcyQkMS5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgICAgIHJldHVybiB2YWx1ZXMkJDE7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IkJDEodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIkJDEodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcbiAgICAgICAgaWYgKG9sZExlbmd0aCAhPT0gdGhpcy5sYXN0S25vd25MZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9kaWZpY2F0aW9uIGV4Y2VwdGlvbjogdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiBhbiBvYnNlcnZhYmxlIGFycmF5IHdhcyBjaGFuZ2VkLlwiKTtcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQkJDEodGhpcy5hdG9tKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmV3SXRlbXMgPSBFTVBUWV9BUlJBWSQkMTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWSQkMTtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgICAgICB9XG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLmVuaGFuY2VyKHYsIHVuZGVmaW5lZCk7IH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gdGhpcy5zcGxpY2VJdGVtc0ludG9WYWx1ZXMoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFycmF5U3BsaWNlKGluZGV4LCBuZXdJdGVtcywgcmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlcyhyZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNwbGljZUl0ZW1zSW50b1ZhbHVlcyA9IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMudmFsdWVzKS5zcGxpY2UuYXBwbHkoX2EsIF9fc3ByZWFkKFtpbmRleCwgZGVsZXRlQ291bnRdLCBuZXdJdGVtcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMudmFsdWVzLnNsaWNlKGluZGV4LCBpbmRleCArIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmNvbmNhdChuZXdJdGVtcywgdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXggKyBkZWxldGVDb3VudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUgPSBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkJCQxKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0JCQxKF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5hdG9tLm5hbWUgfSkpO1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlTcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICByZW1vdmVkOiByZW1vdmVkLFxuICAgICAgICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFkZGVkQ291bnQ6IGFkZGVkLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0JCQxKF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5hdG9tLm5hbWUgfSkpO1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAvLyBjb25mb3JtOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9vYnNlcnZlXG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbjtcbn0oKSk7XG52YXIgYXJyYXlFeHRlbnNpb25zID0ge1xuICAgIGludGVyY2VwdDogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJG1vYngkJDFdLmludGVyY2VwdChoYW5kbGVyKTtcbiAgICB9LFxuICAgIG9ic2VydmU6IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIHJldHVybiBhZG0ub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgICB9LFxuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIChuZXdJdGVtcykge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIGFkbS52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGFycmF5IGJhY2sgdG8gYSAoc2hhbGxvdykgamF2YXNjcmlwdCBzdHJ1Y3R1cmUuXG4gICAgICogRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTXG4gICAgICovXG4gICAgdG9KUzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH0sXG4gICAgLypcbiAgICAgKiBmdW5jdGlvbnMgdGhhdCBkbyBhbHRlciB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgKGJhc2VkIG9uIGxpYi5lczYuZC50cylcbiAgICAgKiBzaW5jZSB0aGVzZSBmdW5jdGlvbnMgYWx0ZXIgdGhlIGlubmVyIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIHRoZSBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgKiBCZWNhdXNlIHRoZSBoYXZlIHNpZGUgZWZmZWN0cywgdGhleSBzaG91bGQgbm90IGJlIHVzZWQgaW4gY29tcHV0ZWQgZnVuY3Rpb24sXG4gICAgICogYW5kIGZvciB0aGF0IHJlYXNvbiB0aGUgZG8gbm90IGNhbGwgZGVwZW5kZW5jeVN0YXRlLm5vdGlmeU9ic2VydmVkXG4gICAgICovXG4gICAgc3BsaWNlOiBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgIHZhciBuZXdJdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3SXRlbXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICBwdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoYWRtLnZhbHVlcy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH0sXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzWyRtb2J4JCQxXS52YWx1ZXMubGVuZ3RoIC0gMSwgMCksIDEpWzBdO1xuICAgIH0sXG4gICAgc2hpZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIDEpWzBdO1xuICAgIH0sXG4gICAgdW5zaGlmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAgICAgLy8gd2hpY2ggbWFrZXMgaXQgYm90aCBhICdkZXJpdmF0aW9uJyBhbmQgYSAnbXV0YXRpb24nLlxuICAgICAgICAvLyBzbyB3ZSBkZXZpYXRlIGZyb20gdGhlIGRlZmF1bHQgYW5kIGp1c3QgbWFrZSBpdCBhbiBkZXJ2aXRhdGlvblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5yZXZlcnNlKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkucmV2ZXJzZSgpYCB0byBzdXByZXNzIHRoaXMgd2FybmluZyBhbmQgcGVyZm9ybSB0aGUgb3BlcmF0aW9uIG9uIGEgY29weSwgb3IgYG9ic2VydmFibGVBcnJheS5yZXBsYWNlKG9ic2VydmFibGVBcnJheS5zbGljZSgpLnJldmVyc2UoKSlgIHRvIHJldmVyc2UgJiB1cGRhdGUgaW4gcGxhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNvcnQ6IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5zb3J0KClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpYCB0byBzdXByZXNzIHRoaXMgd2FybmluZyBhbmQgcGVyZm9ybSB0aGUgb3BlcmF0aW9uIG9uIGEgY29weSwgb3IgYG9ic2VydmFibGVBcnJheS5yZXBsYWNlKG9ic2VydmFibGVBcnJheS5zbGljZSgpLnNvcnQoKSlgIHRvIHNvcnQgJiB1cGRhdGUgaW4gcGxhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUuc29ydC5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgdmFyIGlkeCA9IGFkbS5kZWhhbmNlVmFsdWVzKGFkbS52YWx1ZXMpLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIGlmIChhZG0pIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGFkbS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYWRtLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLmRlaGFuY2VWYWx1ZShhZG0udmFsdWVzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieC5hcnJheV0gQXR0ZW1wdCB0byByZWFkIGFuIGFycmF5IGluZGV4IChcIiArIGluZGV4ICsgXCIpIHRoYXQgaXMgb3V0IG9mIGJvdW5kcyAoXCIgKyBhZG0udmFsdWVzLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICB2YXIgdmFsdWVzJCQxID0gYWRtLnZhbHVlcztcbiAgICAgICAgaWYgKGluZGV4IDwgdmFsdWVzJCQxLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gdXBkYXRlIGF0IGluZGV4IGluIHJhbmdlXG4gICAgICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMShhZG0uYXRvbSk7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSB2YWx1ZXMkJDFbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMShhZG0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMShhZG0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGFkbS5lbmhhbmNlcihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gb2xkVmFsdWU7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyQkMVtpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBhZG0ubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZShpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzJCQxLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IGl0ZW1cbiAgICAgICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIDAsIFtuZXdWYWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnguYXJyYXldIEluZGV4IG91dCBvZiBib3VuZHMsIFwiICsgaW5kZXggKyBcIiBpcyBsYXJnZXIgdGhhbiBcIiArIHZhbHVlcyQkMS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbltcbiAgICBcImNvbmNhdFwiLFxuICAgIFwiZXZlcnlcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZm9yRWFjaFwiLFxuICAgIFwiaW5kZXhPZlwiLFxuICAgIFwiam9pblwiLFxuICAgIFwibGFzdEluZGV4T2ZcIixcbiAgICBcIm1hcFwiLFxuICAgIFwicmVkdWNlXCIsXG4gICAgXCJyZWR1Y2VSaWdodFwiLFxuICAgIFwic2xpY2VcIixcbiAgICBcInNvbWVcIixcbiAgICBcInRvU3RyaW5nXCIsXG4gICAgXCJ0b0xvY2FsZVN0cmluZ1wiXG5dLmZvckVhY2goZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgYXJyYXlFeHRlbnNpb25zW2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICB2YXIgcmVzID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiByZXNbZnVuY05hbWVdLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcbiAgICB9O1xufSk7XG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSQkMSh0aGluZykge1xuICAgIHJldHVybiBpc09iamVjdCQkMSh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieCQkMV0pO1xufVxuXG52YXIgX2E7XG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xuLy8ganVzdCBleHRlbmQgTWFwPyBTZWUgYWxzbyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9uZXN0aGFydXMvMTNiNGQ3NGYyZWY0YTJmNDM1N2RiZDNmYzIzYzFlNTRcbi8vIEJ1dDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xNTU2XG52YXIgT2JzZXJ2YWJsZU1hcCQkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlTWFwJCQxKGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlciQkMTsgfVxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXNbX2FdID0gT2JzZXJ2YWJsZU1hcE1hcmtlcjtcbiAgICAgICAgdGhpcy5fa2V5c0F0b20gPSBjcmVhdGVBdG9tJCQxKHRoaXMubmFtZSArIFwiLmtleXMoKVwiKTtcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJNYXBcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5tYXAgcmVxdWlyZXMgTWFwIHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9tYXAuanNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5faGFzTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuX2hhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKGtleSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNNYXAuaGFzKGtleSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzTWFwLmdldChrZXkpLmdldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkoa2V5LCBmYWxzZSkuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgaGFzS2V5ID0gdGhpcy5faGFzKGtleSk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnMkJDEodGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UkJDEodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IGhhc0tleSA/IFwidXBkYXRlXCIgOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgdmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0tleSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGFzKGtleSkpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB0aGlzLl9kYXRhLmdldChrZXkpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IF90aGlzLl9kYXRhLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEuc2V0TmV3VmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuX3VwZGF0ZUhhc01hcEVudHJ5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gb3B0aW1pemF0aW9uOyBkb24ndCBmaWxsIHRoZSBoYXNNYXAgaWYgd2UgYXJlIG5vdCBvYnNlcnZpbmcsIG9yIHJlbW92ZSBlbnRyeSBpZiB0aGVyZSBhcmUgbm8gb2JzZXJ2ZXJzIGFueW1vcmVcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwLmdldChrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIGVudHJ5LnNldE5ld1ZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZSQkMSh2YWx1ZSwgcmVmZXJlbmNlRW5oYW5jZXIkJDEsIHRoaXMubmFtZSArIFwiLlwiICsga2V5ICsgXCI/XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc01hcC5zZXQoa2V5LCBlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSB0aGlzLl9kYXRhLmdldChrZXkpO1xuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUkJDEucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlJCQxLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLl9hZGRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkJCQxKHRoaXMuX2tleXNBdG9tKTtcbiAgICAgICAgdHJhbnNhY3Rpb24kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlJCQxKG5ld1ZhbHVlLCBfdGhpcy5lbmhhbmNlciwgX3RoaXMubmFtZSArIFwiLlwiICsga2V5LCBmYWxzZSk7XG4gICAgICAgICAgICBfdGhpcy5fZGF0YS5zZXQoa2V5LCBvYnNlcnZhYmxlJCQxKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZSQkMS52YWx1ZTsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcbiAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIHRydWUpO1xuICAgICAgICAgICAgX3RoaXMuX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhrZXkpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMuX2RhdGEuZ2V0KGtleSkuZ2V0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyQkMSA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwga2V5cyQkMS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmdldChrZXlzJCQxW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyQkMSA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwga2V5cyQkMS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXMkJDFbbmV4dEluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtrZXksIHNlbGYuZ2V0KGtleSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlWyhfYSA9ICRtb2J4JCQxLCBTeW1ib2wuaXRlcmF0b3IpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0JCQxKG90aGVyKSlcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCBvdGhlcltrZXldKTsgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSlcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2TWFwJCQxKG90aGVyKSlcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBmYWlsJCQxKFwiQ2Fubm90IGluaXRpYWxpemUgbWFwIGZyb20gXCIgKyBvdGhlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbiQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWQkJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoX3RoaXMua2V5cygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMkJDEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gZ3JhYiBhbGwgdGhlIGtleXMgdGhhdCBhcmUgcHJlc2VudCBpbiB0aGUgbmV3IG1hcCBidXQgbm90IHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgbWFwXG4gICAgICAgICAgICAvLyBhbmQgZGVsZXRlIHRoZW0gZnJvbSB0aGUgbWFwLCB0aGVuIG1lcmdlIHRoZSBuZXcgbWFwXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgY2F1c2UgcmVhY3Rpb25zIG9ubHkgb24gY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgICAgIHZhciBuZXdLZXlzID0gZ2V0TWFwTGlrZUtleXMkJDEodmFsdWVzJCQxKTtcbiAgICAgICAgICAgIHZhciBvbGRLZXlzID0gQXJyYXkuZnJvbShfdGhpcy5rZXlzKCkpO1xuICAgICAgICAgICAgdmFyIG1pc3NpbmdLZXlzID0gb2xkS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG5ld0tleXMuaW5kZXhPZihrKSA9PT0gLTE7IH0pO1xuICAgICAgICAgICAgbWlzc2luZ0tleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyByZXR1cm4gX3RoaXMuZGVsZXRlKGspOyB9KTtcbiAgICAgICAgICAgIF90aGlzLm1lcmdlKHZhbHVlcyQkMSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhpcyBtYXAuXG4gICAgICogTm90ZSB0aGF0IGFsbCB0aGUga2V5cyBiZWluZyBzdHJpbmdpZmllZC5cbiAgICAgKiBJZiB0aGVyZSBhcmUgZHVwbGljYXRpbmcga2V5cyBhZnRlciBjb252ZXJ0aW5nIHRoZW0gdG8gc3RyaW5ncywgYmVoYXZpb3VyIGlzIHVuZGV0ZXJtaW5lZC5cbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS50b1BPSk8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgcmVzW1wiXCIgKyBrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgbm9uIG9ic2VydmFibGUgb2JqZWN0IGNsb25lIG9mIHRoaXMgbWFwLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgdmFsdWVzIG1pZ3RoIHN0aWxsIGJlIG9ic2VydmFibGUuIEZvciBhIGRlZXAgY2xvbmUgdXNlIG1vYngudG9KUy5cbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICAgICAgICByZXR1cm4gdGhpcy50b1BPSk8oKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKHRoaXMubmFtZSArXG4gICAgICAgICAgICBcIlt7IFwiICtcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5rZXlzKCkpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgKyBcIjogXCIgKyAoXCJcIiArIF90aGlzLmdldChrZXkpKTsgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpICtcbiAgICAgICAgICAgIFwiIH1dXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50JCQxKGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggbWFwcy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyJCQxKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yJCQxKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVNYXAkJDE7XG59KCkpO1xuLyogJ3ZhcicgZml4ZXMgc21hbGwtYnVpbGQgaXNzdWUgKi9cbnZhciBpc09ic2VydmFibGVNYXAkJDEgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlJCQxKFwiT2JzZXJ2YWJsZU1hcFwiLCBPYnNlcnZhYmxlTWFwJCQxKTtcblxudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEodGFyZ2V0LCB2YWx1ZXMkJDEsIG5hbWUsIGRlZmF1bHRFbmhhbmNlcikge1xuICAgICAgICBpZiAodmFsdWVzJCQxID09PSB2b2lkIDApIHsgdmFsdWVzJCQxID0gbmV3IE1hcCgpOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcyQkMTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0RW5oYW5jZXIgPSBkZWZhdWx0RW5oYW5jZXI7XG4gICAgICAgIHRoaXMua2V5c0F0b20gPSBuZXcgQXRvbSQkMShuYW1lICsgXCIua2V5c1wiKTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KGtleSkuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlJCQxIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSQkMSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXQobmV3VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGludGVyY2VwdFxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZSQkMS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAvLyBub3RpZnkgc3B5ICYgb2JzZXJ2ZXJzXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUkJDEuVU5DSEFOR0VEKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzJCQxKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZSQkMS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIG9ic2VydmFibGUkJDEuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMucGVuZGluZ0tleXMgfHwgKHRoaXMucGVuZGluZ0tleXMgPSBuZXcgTWFwKCkpO1xuICAgICAgICB2YXIgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRyeSlcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RzID0gISF0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIG9wdGltaXphdGlvbjogRG9uJ3QgaGF2ZSBhIHNlcGFyYXRlIG1hcCBmb3Igbm9uIGV4aXN0aW5nIGtleXMsXG4gICAgICAgICAgICAvLyBidXQgc3RvcmUgdGhlbSBpbiB0aGUgdmFsdWVzIG1hcCBpbnN0ZWFkLCB1c2luZyBhIHNwZWNpYWwgc3ltYm9sIHRvIGRlbm90ZSBcIm5vdCBleGlzdGluZ1wiXG4gICAgICAgICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUkJDEoZXhpc3RzLCByZWZlcmVuY2VFbmhhbmNlciQkMSwgdGhpcy5uYW1lICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpOyAvLyByZWFkIHRvIHN1YnNjcmliZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLmFkZE9ic2VydmFibGVQcm9wID0gZnVuY3Rpb24gKHByb3BOYW1lLCBuZXdWYWx1ZSwgZW5oYW5jZXIpIHtcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSB0aGlzLmRlZmF1bHRFbmhhbmNlcjsgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlJCQxKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb3BOYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gbmV3IE9ic2VydmFibGVWYWx1ZSQkMShuZXdWYWx1ZSwgZW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsgcHJvcE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KHByb3BOYW1lLCBvYnNlcnZhYmxlJCQxKTtcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlJCQxLnZhbHVlOyAvLyBvYnNlcnZhYmxlVmFsdWUgbWlnaHQgaGF2ZSBjaGFuZ2VkIGl0XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnJCQxKHByb3BOYW1lKSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlBZGRpdGlvbihwcm9wTmFtZSwgbmV3VmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5hZGRDb21wdXRlZFByb3AgPSBmdW5jdGlvbiAocHJvcGVydHlPd25lciwgLy8gd2hlcmUgaXMgdGhlIHByb3BlcnR5IGRlY2xhcmVkP1xuICAgIHByb3BOYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZSArIFwiLlwiICsgcHJvcE5hbWU7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChwcm9wTmFtZSwgbmV3IENvbXB1dGVkVmFsdWUkJDEob3B0aW9ucykpO1xuICAgICAgICBpZiAocHJvcGVydHlPd25lciA9PT0gdGFyZ2V0IHx8IGlzUHJvcGVydHlDb25maWd1cmFibGUkJDEocHJvcGVydHlPd25lciwgcHJvcE5hbWUpKVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BlcnR5T3duZXIsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyQkMShwcm9wTmFtZSkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZXMuaGFzKGtleSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkJCQxKCk7XG4gICAgICAgICAgICB2YXIgb2xkT2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzLmdldChrZXkpO1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLmdldCgpO1xuICAgICAgICAgICAgb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLnNldCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgLy8gbm90aWZ5IGtleSBhbmQga2V5c2V0IGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5cy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkpXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHByb3BcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhcmdldFtrZXldO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUuaWxsZWdhbEFjY2VzcyA9IGZ1bmN0aW9uIChvd25lciwgcHJvcE5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaGFwcGVucyBpZiBhIHByb3BlcnR5IGlzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbiwgYnV0IHRoZSBwcm9wZXJ0eSB3YXNcbiAgICAgICAgICogZGVjbGFyZWQgZGlyZWN0bHkgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBwcm90b3R5cGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEUuZy46XG4gICAgICAgICAqIGNsYXNzIEEge1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIGV4dGVuZE9ic2VydmFibGUoQS5wcm90b3R5cGUsIHsgeDogMSB9KVxuICAgICAgICAgKlxuICAgICAgICAgKiBjbGFzc0IgZXh0ZW5zIEEge1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIGNvbnNvbGUubG9nKG5ldyBCKCkueClcbiAgICAgICAgICpcbiAgICAgICAgICogSXQgaXMgdW5jbGVhciB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCAnc3RhdGljJyBvciBpbmhlcml0ZWQuXG4gICAgICAgICAqIEVpdGhlciB1c2UgYGNvbnNvbGUubG9nKEEueClgXG4gICAgICAgICAqIG9yOiBkZWNvcmF0ZShBLCB7IHg6IG9ic2VydmFibGUgfSlcbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiB1c2luZyBkZWNvcmF0ZSwgdGhlIHByb3BlcnR5IHdpbGwgYWx3YXlzIGJlIHJlZGVjbGFyZWQgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBhY3R1YWwgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIGNvbnNvbGUud2FybihcIlByb3BlcnR5ICdcIiArIHByb3BOYW1lICsgXCInIG9mICdcIiArIG93bmVyICsgXCInIHdhcyBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBwcm90b3R5cGUgY2hhaW4uIFVzZSAnZGVjb3JhdGUnIGluc3RlYWQgdG8gZGVjbGFyZSB0aGUgcHJvcCBvciBhY2Nlc3MgaXQgc3RhdGljYWxseSB0aHJvdWdoIGl0J3Mgb3duZXJcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIGludmFyaWFudCQkMShmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIkJDEodGhpcywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvciQkMSh0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUubm90aWZ5UHJvcGVydHlBZGRpdGlvbiA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRoaXMudGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgICAgIGVudHJ5LnNldCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0aGlzLnZhbHVlcykgYXMgYW55XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy52YWx1ZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlJCQxKVxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDE7XG59KCkpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0JCQxKHRhcmdldCwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxuICAgIGlmIChkZWZhdWx0RW5oYW5jZXIgPT09IHZvaWQgMCkgeyBkZWZhdWx0RW5oYW5jZXIgPSBkZWVwRW5oYW5jZXIkJDE7IH1cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgJG1vYngkJDEpKVxuICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4JCQxXTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgaW52YXJpYW50JCQxKE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KSwgXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0JCQxKHRhcmdldCkpXG4gICAgICAgIG5hbWUgPSAodGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYnNlcnZhYmxlT2JqZWN0XCIpICsgXCJAXCIgKyBnZXROZXh0SWQkJDEoKTtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQkJDEoKTtcbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMSh0YXJnZXQsIG5ldyBNYXAoKSwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKTtcbiAgICBhZGRIaWRkZW5Qcm9wJCQxKHRhcmdldCwgJG1vYngkJDEsIGFkbSk7XG4gICAgcmV0dXJuIGFkbTtcbn1cbnZhciBvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBjb21wdXRlZFByb3BlcnR5Q29uZmlncyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnJCQxKHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxuICAgICAgICAob2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbJG1vYngkJDFdLnJlYWQocHJvcE5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzWyRtb2J4JCQxXS53cml0ZShwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uRm9yQ29tcHV0ZWRQcm9wT3duZXIob3duZXIpIHtcbiAgICB2YXIgYWRtID0gb3duZXJbJG1vYngkJDFdO1xuICAgIGlmICghYWRtKSB7XG4gICAgICAgIC8vIGJlY2F1c2UgY29tcHV0ZWQgcHJvcHMgYXJlIGRlY2xhcmVkIG9uIHByb3R5LFxuICAgICAgICAvLyB0aGUgY3VycmVudCBpbnN0YW5jZSBtaWdodCBub3QgaGF2ZSBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEob3duZXIpO1xuICAgICAgICByZXR1cm4gb3duZXJbJG1vYngkJDFdO1xuICAgIH1cbiAgICByZXR1cm4gYWRtO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlZFByb3BDb25maWckJDEocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gKGNvbXB1dGVkUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxuICAgICAgICAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh0aGluZykge1xuICAgIGlmIChpc09iamVjdCQkMSh0aGluZykpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGhpbmcpO1xuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYngkJDFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tJCQxKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKHRoaW5nKSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4JCQxXS5hdG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAkJDEodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBhbnlUaGluZy5fa2V5c0F0b207XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlJCQxKVxuICAgICAgICAgICAgICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUkJDEodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGUkJDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGhpbmcpO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4JCQxXSlcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IHRoaW5nWyRtb2J4JCQxXS52YWx1ZXMuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSQkMSlcbiAgICAgICAgICAgICAgICBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIGdldERlYnVnTmFtZSQkMSh0aGluZykgKyBcIidcIik7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBdG9tJCQxKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUkJDEodGhpbmcpIHx8IGlzUmVhY3Rpb24kJDEodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24kJDEodGhpbmdbJG1vYngkJDFdKSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieCQkMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZywgcHJvcGVydHkpIHtcbiAgICBpZiAoIXRoaW5nKVxuICAgICAgICBmYWlsJCQxKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24kJDEoZ2V0QXRvbSQkMSh0aGluZywgcHJvcGVydHkpKTtcbiAgICBpZiAoaXNBdG9tJCQxKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUkJDEodGhpbmcpIHx8IGlzUmVhY3Rpb24kJDEodGhpbmcpKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMSh0aGluZykpXG4gICAgICAgIHJldHVybiB0aGluZztcbiAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXG4gICAgaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRoaW5nKTtcbiAgICBpZiAodGhpbmdbJG1vYngkJDFdKVxuICAgICAgICByZXR1cm4gdGhpbmdbJG1vYngkJDFdO1xuICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lJCQxKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHZhciBuYW1lZDtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tJCQxKHRoaW5nLCBwcm9wZXJ0eSk7XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAkJDEodGhpbmcpKVxuICAgICAgICBuYW1lZCA9IGdldEFkbWluaXN0cmF0aW9uJCQxKHRoaW5nKTtcbiAgICBlbHNlXG4gICAgICAgIG5hbWVkID0gZ2V0QXRvbSQkMSh0aGluZyk7IC8vIHZhbGlkIGZvciBhcnJheXMgYXMgd2VsbFxuICAgIHJldHVybiBuYW1lZC5uYW1lO1xufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gZGVlcEVxdWFsJCQxKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYik7XG59XG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5mdW5jdGlvbiBlcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYilcbiAgICAgICAgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICBpZiAoYSAhPT0gYSlcbiAgICAgICAgcmV0dXJuIGIgIT09IGI7XG4gICAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgIT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xufVxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbmZ1bmN0aW9uIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGEgPSB1bndyYXAoYSk7XG4gICAgYiA9IHVud3JhcChiKTtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgICAgY2FzZSBcIltvYmplY3QgUmVnRXhwXVwiOlxuICAgICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgICBjYXNlIFwiW29iamVjdCBTdHJpbmddXCI6XG4gICAgICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhID09PSBcIlwiICsgYjtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgTnVtYmVyXVwiOlxuICAgICAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxuICAgICAgICAgICAgaWYgKCthICE9PSArYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEJvb2xlYW5dXCI6XG4gICAgICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgICAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKSk7XG4gICAgfVxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmXG4gICAgICAgICAgICAhKHR5cGVvZiBhQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBiQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiZcbiAgICAgICAgICAgIChcImNvbnN0cnVjdG9yXCIgaW4gYSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpXG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICAgIHZhciBrZXlzJCQxID0gT2JqZWN0LmtleXMoYSksIGtleTtcbiAgICAgICAgbGVuZ3RoID0ga2V5cyQkMS5sZW5ndGg7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICAgICAga2V5ID0ga2V5cyQkMVtsZW5ndGhdO1xuICAgICAgICAgICAgaWYgKCEoaGFzJDEoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHVud3JhcChhKSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKGEpKVxuICAgICAgICByZXR1cm4gYS5zbGljZSgpO1xuICAgIGlmIChpc0VTNk1hcCQkMShhKSB8fCBpc09ic2VydmFibGVNYXAkJDEoYSkpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgICByZXR1cm4gYTtcbn1cbmZ1bmN0aW9uIGhhcyQxKGEsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IHNlbGY7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gc2VsZigpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcblRoZSBvbmx5IHJlYXNvbiBmb3IgdGhpcyBmaWxlIHRvIGV4aXN0IGlzIHB1cmUgaG9ycm9yOlxuV2l0aG91dCBpdCByb2xsdXAgY2FuIG1ha2UgdGhlIGJ1bmRsaW5nIGZhaWwgYXQgYW55IHBvaW50IGluIHRpbWU7IHdoZW4gaXQgcm9sbHMgdXAgdGhlIGZpbGVzIGluIHRoZSB3cm9uZyBvcmRlclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob3N0ZWQpLlxuV2l0aCB0aGlzIGZpbGUgdGhhdCB3aWxsIHN0aWxsIGhhcHBlbixcbmJ1dCBhdCBsZWFzdCBpbiB0aGlzIGZpbGUgd2UgY2FuIG1hZ2ljYWxseSByZW9yZGVyIHRoZSBpbXBvcnRzIHdpdGggdHJpYWwgYW5kIGVycm9yIHVudGlsIHRoZSBidWlsZCBzdWNjZWVkcyBhZ2Fpbi5cbiovXG5cbi8qKlxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE4XG4gKiBNSVQgTGljZW5zZWRcbiAqXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhbiBnbG9iYWwgb3ZlcnZpZXcgb2YgaG93IE1vYlggaW50ZXJuYWxseSB3b3JrcyxcbiAqIHRoaXMgaXMgYSBnb29kIHBsYWNlIHRvIHN0YXJ0OlxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxuICpcbiAqIFNvdXJjZSBmb2xkZXJzOlxuICogPT09PT09PT09PT09PT09XG4gKlxuICogLSBhcGkvICAgICBNb3N0IG9mIHRoZSBwdWJsaWMgc3RhdGljIG1ldGhvZHMgZXhwb3NlZCBieSB0aGUgbW9kdWxlIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSB0eXBlcy8gICBBbGwgdGhlIG1hZ2ljIHRoYXQgaXMgbmVlZCB0byBoYXZlIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCB2YWx1ZXMgaXMgaW4gdGhpcyBmb2xkZXIuIEluY2x1ZGluZyB0aGUgbW9kaWZpZXJzIGxpa2UgYGFzRmxhdGAuXG4gKiAtIHV0aWxzLyAgIFV0aWxpdHkgc3R1ZmYuXG4gKlxuICovXG5pZiAodHlwZW9mIFByb3h5ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9iWCA1KyByZXF1aXJlcyBQcm94eSBhbmQgU3ltYm9sIG9iamVjdHMuIElmIHlvdXIgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IFByb3h5IG9iamVjdHMsIHBsZWFzZSBkb3duZ3JhZGUgdG8gTW9iWCA0LiBGb3IgUmVhY3QgTmF0aXZlIEFuZHJvaWQsIGNvbnNpZGVyIHVwZ3JhZGluZyBKU0NvcmUuXCIpO1xufVxudHJ5IHtcbiAgICAvLyBkZWZpbmUgcHJvY2Vzcy5lbnYgaWYgbmVlZGVkXG4gICAgLy8gaWYgdGhpcyBpcyBub3QgYSBwcm9kdWN0aW9uIGJ1aWxkIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgIC8vIChpbiB3aGljaCBjYXNlIHRoZSBleHByZXNzaW9uIGJlbG93IHdvdWxkIGJlIHN1YnN0aXR1dGVkIHdpdGggJ3Byb2R1Y3Rpb24nKVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WO1xufVxuY2F0Y2ggKGUpIHtcbiAgICB2YXIgZyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICBnLnByb2Nlc3MgPSB7fTtcbiAgICBnLnByb2Nlc3MuZW52ID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdGVzdENvZGVNaW5pZmljYXRpb24oKSB7IH1cbiAgICBpZiAodGVzdENvZGVNaW5pZmljYXRpb24ubmFtZSAhPT0gXCJ0ZXN0Q29kZU1pbmlmaWNhdGlvblwiICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICBwcm9jZXNzLmVudi5JR05PUkVfTU9CWF9NSU5JRllfV0FSTklORyAhPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAvLyBUZW1wbGF0ZSBsaXRlcmFsKGJhY2t0aWNrKSBpcyB1c2VkIGZvciBmaXggaXNzdWUgd2l0aCByb2xsdXAtcGx1Z2luLWNvbW1vbmpzIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwLXBsdWdpbi1jb21tb25qcy9pc3N1ZXMvMzQ0XG4gICAgICAgIFwiW21vYnhdIHlvdSBhcmUgcnVubmluZyBhIG1pbmlmaWVkIGJ1aWxkLCBidXQgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJyB3YXMgbm90IHNldCB0byAncHJvZHVjdGlvbicgaW4geW91ciBidW5kbGVyLiBUaGlzIHJlc3VsdHMgaW4gYW4gdW5uZWNlc3NhcmlseSBsYXJnZSBhbmQgc2xvdyBidW5kbGVcIik7XG4gICAgfVxufSkoKTtcbi8vIERldnRvb2xzIHN1cHBvcnRcbmlmICh0eXBlb2YgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5a29nL21vYngtZGV2dG9vbHMvXG4gICAgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0TW9ieCh7XG4gICAgICAgIHNweTogc3B5JCQxLFxuICAgICAgICBleHRyYXM6IHtcbiAgICAgICAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lJCQxXG4gICAgICAgIH0sXG4gICAgICAgICRtb2J4OiAkbW9ieCQkMVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBSZWFjdGlvbiQkMSBhcyBSZWFjdGlvbiwgdW50cmFja2VkJCQxIGFzIHVudHJhY2tlZCwgSURlcml2YXRpb25TdGF0ZSwgY3JlYXRlQXRvbSQkMSBhcyBjcmVhdGVBdG9tLCBzcHkkJDEgYXMgc3B5LCBjb21wYXJlciQkMSBhcyBjb21wYXJlciwgaXNPYnNlcnZhYmxlT2JqZWN0JCQxIGFzIGlzT2JzZXJ2YWJsZU9iamVjdCwgaXNPYnNlcnZhYmxlVmFsdWUkJDEgYXMgaXNCb3hlZE9ic2VydmFibGUsIGlzT2JzZXJ2YWJsZUFycmF5JCQxIGFzIGlzT2JzZXJ2YWJsZUFycmF5LCBPYnNlcnZhYmxlTWFwJCQxIGFzIE9ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU1hcCQkMSBhcyBpc09ic2VydmFibGVNYXAsIHRyYW5zYWN0aW9uJCQxIGFzIHRyYW5zYWN0aW9uLCBvYnNlcnZhYmxlJCQxIGFzIG9ic2VydmFibGUsIGNvbXB1dGVkJCQxIGFzIGNvbXB1dGVkLCBpc09ic2VydmFibGUkJDEgYXMgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVQcm9wJCQxIGFzIGlzT2JzZXJ2YWJsZVByb3AsIGlzQ29tcHV0ZWQkJDEgYXMgaXNDb21wdXRlZCwgaXNDb21wdXRlZFByb3AkJDEgYXMgaXNDb21wdXRlZFByb3AsIGV4dGVuZE9ic2VydmFibGUkJDEgYXMgZXh0ZW5kT2JzZXJ2YWJsZSwgb2JzZXJ2ZSQkMSBhcyBvYnNlcnZlLCBpbnRlcmNlcHQkJDEgYXMgaW50ZXJjZXB0LCBhdXRvcnVuJCQxIGFzIGF1dG9ydW4sIHJlYWN0aW9uJCQxIGFzIHJlYWN0aW9uLCB3aGVuJCQxIGFzIHdoZW4sIGFjdGlvbiQkMSBhcyBhY3Rpb24sIGlzQWN0aW9uJCQxIGFzIGlzQWN0aW9uLCBydW5JbkFjdGlvbiQkMSBhcyBydW5JbkFjdGlvbiwga2V5cyQkMSBhcyBrZXlzLCB2YWx1ZXMkJDEgYXMgdmFsdWVzLCBlbnRyaWVzJCQxIGFzIGVudHJpZXMsIHNldCQkMSBhcyBzZXQsIHJlbW92ZSQkMSBhcyByZW1vdmUsIGhhcyQkMSBhcyBoYXMsIGdldCQkMSBhcyBnZXQsIGRlY29yYXRlJCQxIGFzIGRlY29yYXRlLCBjb25maWd1cmUkJDEgYXMgY29uZmlndXJlLCBvbkJlY29tZU9ic2VydmVkJCQxIGFzIG9uQmVjb21lT2JzZXJ2ZWQsIG9uQmVjb21lVW5vYnNlcnZlZCQkMSBhcyBvbkJlY29tZVVub2JzZXJ2ZWQsIGZsb3ckJDEgYXMgZmxvdywgdG9KUyQkMSBhcyB0b0pTLCB0cmFjZSQkMSBhcyB0cmFjZSwgZ2V0RGVwZW5kZW5jeVRyZWUkJDEgYXMgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldE9ic2VydmVyVHJlZSQkMSBhcyBnZXRPYnNlcnZlclRyZWUsIHJlc2V0R2xvYmFsU3RhdGUkJDEgYXMgX3Jlc2V0R2xvYmFsU3RhdGUsIGdldEdsb2JhbFN0YXRlJCQxIGFzIF9nZXRHbG9iYWxTdGF0ZSwgZ2V0RGVidWdOYW1lJCQxIGFzIGdldERlYnVnTmFtZSwgZ2V0QXRvbSQkMSBhcyBnZXRBdG9tLCBnZXRBZG1pbmlzdHJhdGlvbiQkMSBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGFsbG93U3RhdGVDaGFuZ2VzJCQxIGFzIF9hbGxvd1N0YXRlQ2hhbmdlcywgYWxsb3dTdGF0ZUNoYW5nZXNJbnNpZGVDb21wdXRlZCQkMSBhcyBfYWxsb3dTdGF0ZUNoYW5nZXNJbnNpZGVDb21wdXRlZCwgaXNBcnJheUxpa2UkJDEgYXMgaXNBcnJheUxpa2UsICRtb2J4JCQxIGFzICRtb2J4LCBpc0NvbXB1dGluZ0Rlcml2YXRpb24kJDEgYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgb25SZWFjdGlvbkVycm9yJCQxIGFzIG9uUmVhY3Rpb25FcnJvciwgaW50ZXJjZXB0UmVhZHMkJDEgYXMgX2ludGVyY2VwdFJlYWRzIH07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgaXNBcnJheUxpa2UsIGNvbXB1dGVkLCBhdXRvcnVuLCB3aGVuLCByZWFjdGlvbiwgYWN0aW9uLCBydW5JbkFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XG5cbmNsYXNzIFN0b3JlIHtcbiAgICBAb2JzZXJ2YWJsZSBhcnJheSA9IFtdO1xuICAgIEBvYnNlcnZhYmxlIG9iaiA9IHt9O1xuICAgIEBvYnNlcnZhYmxlIG1hcCA9IG5ldyBNYXAoKTtcblxuICAgIEBvYnNlcnZhYmxlIHN0ciA9ICdoZWxsbyc7XG4gICAgQG9ic2VydmFibGUgbnVtYmVyID0gMjA7XG4gICAgQG9ic2VydmFibGUgYiA9IHRydWU7XG4gICAgQGNvbXB1dGVkIGdldCBtaXhlZCgpe1xuICAgICAgICByZXR1cm4gc3RvcmUuc3RyICsgJy8nICsgc3RvcmUubnVtYmVyO1xuICAgIH1cbiAgICBAYWN0aW9uLmJvdW5kIGJhcigpe1xuICAgICAgICB0aGlzLnN0ciA9IFwiaGVsbG9cIjtcbiAgICAgICAgdGhpcy5udW1iZXIgPSA0MDtcbiAgICB9XG59XG5cbnZhciBzdG9yZSAgPSBuZXcgU3RvcmUoKTtcbi8qXG52YXIgZm9vID0gY29tcHV0ZWQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc3RvcmUuc3RyICsgXCIvXCIgKyBzdG9yZS5udW1iZXJcbn0pO1xuXG5jb25zb2xlLmxvZyhmb28pO1xuY29uc29sZS5sb2coZm9vLmdldCgpKTtcbmZvby5vYnNlcnZlKGZ1bmN0aW9uKGNoYW5nZSl7XG4gICAgY29uc29sZS5sb2coY2hhbmdlKTsgXG59KTtcblxuc3RvcmUuc3RyID0gXCJ3b3JsZFwiO1xuc3RvcmUubnVtYmVyID0gMjM7ICovXG5cbnN0b3JlLnN0ciA9IFwid29ybGRcIjtcbi8qIFxuYXV0b3J1bigoKT0+IHtcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5taXhlZCk7XG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyhzdG9yZS5zdHIgKyBcIi9cIiArIHN0b3JlLm51bWJlcik7XG59KTtcblxuc3RvcmUubnVtYmVyID0gMjM7XG5cbndoZW4oKCk9PiBzdG9yZS5iLCAoKT0+IGNvbnNvbGUubG9nKFwiaXQncyB0cnVlXCIpKSAqL1xuXG5zdG9yZS5zdHIgPSBcIndvcmxkXCI7XG5yZWFjdGlvbigoKT0+IFtzdG9yZS5zdHIsIHN0b3JlLm51bWJlcl0sIGFyciA9PiBjb25zb2xlLmxvZyhhcnIuam9pbihcIi9cIikpKVxuc3RvcmUubnVtYmVyID0gMjM7XG4vLyB2YXIgYmFyID0gc3RvcmUuYmFyO1xuLy8gYmFyKCk7XG5cbnJ1bkluQWN0aW9uKCgpPT4ge1xuICAgIHN0b3JlLnN0ciA9IFwiSFwiO1xuICAgIHN0b3JlLm51bWJlciA9IDEwO1xufSk7XG5cbnJ1bkluQWN0aW9uKCdtb2RpZnknLCgpID0+IHtcbiAgICBzdG9yZS5zdHIgPSBcIk1cIjtcbiAgICBzdG9yZS5udW1iZXIgPSA2MDtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==