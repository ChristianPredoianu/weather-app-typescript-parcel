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
})({"ts/openWeather.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenWeather = void 0; //openWeatcher class

var OpenWeather =
/** @class */
function () {
  function OpenWeather() {
    this.apiKey = "4e48f6fdaa7023128d41a5f7f472d396";
  }

  OpenWeather.prototype.getData = function (location) {
    return __awaiter(this, void 0, void 0, function () {
      var response, data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + this.apiKey)];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            data = _a.sent();
            return [2
            /*return*/
            , data];
        }
      });
    });
  };

  return OpenWeather;
}();

exports.OpenWeather = OpenWeather;
},{}],"ts/ui.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = void 0;

var openWeather_1 = require("./openWeather"); //UI Class


var UI =
/** @class */
function (_super) {
  __extends(UI, _super);

  function UI() {
    var _this = _super.call(this) || this;

    _this.defaultContainer = document.getElementById('container-default');
    _this.london = document.getElementById('default-1');
    _this.newYork = document.getElementById('default-2');
    _this.tokyo = document.getElementById('default-3');
    _this.location = document.getElementById('location');
    _this.invalidCityAlert = document.getElementById('invalidCityAlert');
    _this.container = document.getElementById('container');
    _this.dateParagraph = document.getElementById('date');
    _this.temperature = document.getElementById('temp');
    _this.weatherImage = document.getElementById('weather');
    _this.weatherDesc = document.getElementById('weather-desc');
    _this.maxTemp = document.getElementById('max-temp');
    _this.minTemp = document.getElementById('min-temp');
    _this.wind = document.getElementById('wind');
    _this.sunrise = document.getElementById('sunrise');
    _this.sunset = document.getElementById('sunset');
    _this.humidity = document.getElementById('humidity');
    _this.maxTemp = document.getElementById('max-temp');
    _this.date = new Date();
    return _this;
  } //Display the default cities temperature


  UI.prototype.displayDefaultCities = function () {
    var _this = this;

    this.getData('London').then(function (data) {
      _this.populateDefaultCitiesInfo(data, _this.london);
    });
    this.getData('New York').then(function (data) {
      _this.populateDefaultCitiesInfo(data, _this.newYork);
    });
    this.getData('Tokyo').then(function (data) {
      _this.populateDefaultCitiesInfo(data, _this.tokyo);
    });
  }; //Populate default cities with temp info


  UI.prototype.populateDefaultCitiesInfo = function (data, city) {
    city.innerHTML = Math.floor(data.main.temp) + " &#8451;";
    city.classList.add('lg:text-2xl');
  }; //Display weather data to DOM


  UI.prototype.displayWeather = function (data) {
    this.location.innerHTML = data.name;
    this.dateParagraph.innerHTML = "<p>" + this.formatDate(this.date) + "</p>";
    this.temperature.innerHTML = "<p>" + Math.floor(data.main.temp) + "&#8451</p>";
    this.checkWeatherDesc(data.weather[0].main);
    this.weatherDesc.innerHTML = " <p>" + data.weather[0].main + "</p>";
    this.maxTemp.innerHTML = " <p>" + Math.floor(data.main.temp_max) + "&#8451;</p>";
    this.minTemp.innerHTML = " <p>" + Math.floor(data.main.temp_min) + "&#8451;</p>";
    this.wind.innerHTML = "<p>" + data.wind.speed + "m/sec</p>";
    this.sunrise.innerHTML = "\n      <p>" + this.formatTimestamp(data.sys.sunrise) + "</p>";
    this.sunset.innerHTML = "<p>" + this.formatTimestamp(data.sys.sunset) + "</p>";
    this.humidity.innerHTML = " <p>" + data.main.humidity + " %</p>";
  }; //Add different weather icon depending on weatherDesc (data from API)


  UI.prototype.checkWeatherDesc = function (weatherDesc) {
    if (weatherDesc === 'Clouds') {
      this.weatherImage.innerHTML = "<i class=\"fas fa-cloud text-6xl\" id=\"weather\"></i>";
    } else if (weatherDesc === 'Thunderstorm') {
      this.weatherImage.innerHTML = "<i class=\"fas fa-bolt text-6xl\"></i>";
    } else if (weatherDesc === 'Drizzle' || weatherDesc === 'Rain') {
      this.weatherImage.innerHTML = "<i class=\"fas fa-umbrella text-6xl\"></i>";
    } else if (weatherDesc === 'Snow') {
      this.weatherImage.innerHTML = "<i class=\"fas fa-snowflake text-6xl\"></i>";
    } else if (weatherDesc === 'Clear') {
      this.weatherImage.innerHTML = "<i class=\"far fa-sun text-6xl\"></i>";
    } else {
      this.weatherImage.innerHTML = "<i class=\"fas fa-temperature-low text-6xl\"></i>";
    }
  }; //Format date


  UI.prototype.formatDate = function (date) {
    var months = [];
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'Mars';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';
    var weekdays = [];
    weekdays[0] = 'Sunday';
    weekdays[1] = 'Monday';
    weekdays[2] = 'Tuesday';
    weekdays[3] = 'Wednesday';
    weekdays[4] = 'Thursday';
    weekdays[5] = 'Friday';
    weekdays[6] = 'Saturday';
    var d = date,
        month = " " + months[d.getMonth()],
        day = " " + d.getDate(),
        dayString = " " + weekdays[d.getDay()],
        year = d.getFullYear();
    return [dayString, day, month, year].join(' ');
  }; //Format the timestamp to 00:00:00 format


  UI.prototype.formatTimestamp = function (time) {
    var timeStamp = time; // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.

    var date = new Date(timeStamp * 1000); // Hours part from the timestamp

    var hours = "" + (date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours()); // Minutes part from the timestamp

    var minutes = "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes()); // Seconds part from the timestamp

    var seconds = "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds()); // Will display time in 10:30:23 format

    var sun = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return sun;
  };

  return UI;
}(openWeather_1.OpenWeather);

exports.UI = UI;
},{"./openWeather":"ts/openWeather.ts"}],"ts/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var openWeather_1 = require("./openWeather");

var ui_1 = require("./ui");

var openWeather = new openWeather_1.OpenWeather();
var ui = new ui_1.UI();
ui.displayDefaultCities(); //Input Event Listener

var input = document.getElementById('input');
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (input.value !== '') {
      ui.defaultContainer.classList.add('hidden');
      ui.container.classList.remove('hidden');
      openWeather.getData(input.value).then(function (data) {
        ui.defaultContainer.classList.add('hidden');
        ui.container.classList.remove('hidden');

        if (data.message === 'city not found') {
          ui.invalidCityAlert.classList.remove('invisible');
          setTimeout(function () {
            ui.invalidCityAlert.classList.add('invisible');
          }, 2000);
          ui.container.classList.add('hidden');
          ui.defaultContainer.classList.remove('hidden');
          input.value = '';
        } else {
          ui.displayWeather(data);
          input.value = '';
        }
      });
    }
  }
});
},{"./openWeather":"ts/openWeather.ts","./ui":"ts/ui.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54593" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/main.ts"], null)
//# sourceMappingURL=/main.0e24b174.js.map