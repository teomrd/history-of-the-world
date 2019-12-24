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
})({"index.js":[function(require,module,exports) {
(function () {
  var timeline_json = {
    "title": {
      "media": {
        "url": "//www.flickr.com/photos/tm_10001/2310475988/",
        "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
        "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
      },
      "text": {
        "headline": "Whitney Houston<br/> 1963 - 2012",
        "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
      }
    },
    "events": [{
      "media": {
        "url": "{{ static_url }}/img/examples/houston/family.jpg",
        "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
        "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
      },
      "start_date": {
        "month": "8",
        "day": "9",
        "year": "1963"
      },
      "text": {
        "headline": "A Musical Heritage",
        "text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
      }
    }, {
      "media": {
        "url": "https://youtu.be/fSrO91XO1Ck",
        "caption": "",
        "credit": "<a href=\"http://unidiscmusic.com\">Unidisc Music</a>"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "First Recording",
        "text": "At the age of 15 Houston was featured on Michael Zager's song, Life's a Party."
      }
    }, {
      "media": {
        "url": "https://youtu.be/_gvJCCZzmro",
        "caption": "A young poised Whitney Houston in an interview with EbonyJet.",
        "credit": "EbonyJet"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "The Early Years",
        "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
      }
    }, {
      "media": {
        "url": "https://youtu.be/H7_sqdkaAfo",
        "caption": "I'm Every Women as performed by Whitney Houston.",
        "credit": "Arista Records"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "Early Album Credits",
        "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
      }
    }, {
      "media": {
        "url": "https://youtu.be/A4jGzNm2yPI",
        "caption": "Whitney Houston and Clive Davis discussing her discovery and her eponymous first album.",
        "credit": "Sony Music Entertainment"
      },
      "start_date": {
        "year": "1983"
      },
      "text": {
        "headline": "Signed",
        "text": "Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York."
      }
    }, {
      "media": {
        "url": "https://youtu.be/m3-hY-hlhBg",
        "caption": "The 'How Will I Know' video showcases the youthful energy that boosted Houston to stardom.",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1985"
      },
      "text": {
        "headline": "Debut",
        "text": "Whitney Houston's self titled first release sold over 12 million copies in the U.S. and included the hit singles 'How Will I Know,' 'You Give Good Love,' 'Saving All My Love For You' and 'Greatest Love of All.'"
      }
    }, {
      "media": {
        "url": "https://youtu.be/v0XuiMX1XHg",
        "caption": "Dionne Warwick gleefully announces cousin, Whitney Houston, the winner of the Best Female Pop Vocal Performance for the song Saving All My Love.",
        "credit": "<a href='http://grammy.org'>The Recording Academy</a>"
      },
      "start_date": {
        "year": "1986"
      },
      "text": {
        "headline": "'The Grammys'",
        "text": "In 1986 Houston won her first Grammy for the song Saving All My Love. In total she has won six Grammys, the last of which she won in 1999 for It's Not Right But It's Okay."
      }
    }, {
      "media": {
        "url": "https://youtu.be/eH3giaIzONA",
        "caption": "I Wanna Dance With Somebody",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1987"
      },
      "text": {
        "headline": "'Whitney'",
        "text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
      }
    }, {
      "media": {
        "url": "https://youtu.be/96aAx0kxVSA",
        "caption": "\"One Moment In Time\" - Theme song to the 1988 Seoul Olympics",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1988"
      },
      "text": {
        "headline": "\"One Moment In Time\"",
        "text": "The artist's fame continues to skyrocket as she records the theme song for the Seoul Olympics, 'One Moment In Time.'"
      }
    }, {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "1989"
      },
      "text": {
        "headline": "Bobby Brown",
        "text": "Houston and Brown first meet at the Soul Train Music Awards. In an interview with Rolling Stone Magazine, Houston admitted that it was not love at first sight. She turned down Brown's first marriage proposal but eventually fell in love with him."
      }
    }, {
      "media": {
        "url": "https://youtu.be/5Fa09teeaqs",
        "caption": "CNN looks back at Houston's iconic performance of the national anthem at Superbowl XXV.",
        "credit": "CNN"
      },
      "start_date": {
        "year": "1991"
      },
      "text": {
        "headline": "Super Bowl",
        "text": "Houston's national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War."
      }
    }, {
      "media": {
        "url": "https://youtu.be/h9rCobRl-ng",
        "caption": "\"Run To You\" from the 1992 \"Bodyguard\" soundtrack..",
        "credit": "Arista Records"
      },
      "start_date": {
        "year": "1992"
      },
      "text": {
        "headline": "\"The Bodyguard\"",
        "text": "Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy's for the artist."
      }
    }, {
      "media": {
        "url": "https://youtu.be/5cDLZqe735k",
        "caption": "Bobby Brown performing \"My Prerogrative,\" from his \"Don't be Cruel\" solo album. Bobby Brown first became famous with the R&B group, New Edition.",
        "credit": ""
      },
      "start_date": {
        "year": "1992"
      },
      "text": {
        "headline": "Married Life",
        "text": "<p>After three years of courtship, Houston marries New Edition singer Bobby Brown. Their only child Bobbi Kristina Brown was born in 1993.</p><p>In 2003 Brown was charged with domestic violence after police responded to a domestic violence call. Houston and Brown were featured in the reality show, \"Being bobby Brown,\" and divorced in 2007.</p>"
      }
    }, {
      "media": {
        "url": "//upload.wikimedia.org/wikipedia/commons/d/dd/ABC_-_Good_Morning_America_-_Diane_Sawyer.jpg",
        "caption": "Diane Sawyer ",
        "credit": "flickr/<a href='http://www.flickr.com/photos/23843757@N00/194521206/'>Amanda Benham</a>"
      },
      "start_date": {
        "year": "2002"
      },
      "text": {
        "headline": "Crack is Whack",
        "text": "<p>Houston first publicly admitted to drug use in an interview with Diane Sawyer. The singer coined the term \"Crack is Whack,\" saying that she only used more expensive drugs.</p>"
      }
    }, {
      "media": {
        "url": "https://youtu.be/KLk6mt8FMR0",
        "caption": "Addiction expert, Dr. Drew, talks about Whitney's death and her struggle with addiction.",
        "credit": "CNN"
      },
      "start_date": {
        "year": "2004"
      },
      "text": {
        "headline": "Rehab",
        "text": "<p>Houston entered rehab several times beginning in 2004. She declared herself drug free in an interview with Oprah Winfrey in 2009 but returned to rehab in 2011.</p>"
      }
    }, {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "2005"
      },
      "text": {
        "headline": "Being Bobby Brown",
        "text": "<p>Being Bobby Brown was a reality show starring Brown and wife Whitney Houston. Houston refused to sign for a second season. A clip of her telling Brown to \"Kiss my ass,\" became a running gag on The Soup.</p>"
      }
    }, {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "2010"
      },
      "text": {
        "headline": "A Rocky Comeback",
        "text": "<p>Houston's comeback tour is cut short due to a diminished voice damaged by years of smoking. She was reportedly devastated at her inability to perform like her old self.</p>"
      }
    }, {
      "media": {
        "url": "//twitter.com/Blavity/status/851872780949889024",
        "caption": "Houston, performing on Good Morning America in 2009.",
        "credit": "<a href='http://commons.wikimedia.org/wiki/File%3AFlickr_Whitney_Houston_performing_on_GMA_2009_4.jpg'>Asterio Tecson</a> via Wikimedia"
      },
      "start_date": {
        "month": "2",
        "day": "11",
        "year": "2012"
      },
      "text": {
        "headline": "Whitney Houston<br/> 1963-2012",
        "text": "<p>Houston, 48, was discovered dead at the Beverly Hilton Hotel on  on Feb. 11, 2012. She is survived by her daughter, Bobbi Kristina Brown, and mother, Cissy Houston.</p>"
      }
    }]
  };
  window.timeline = new TL.Timeline('timeline-embed', timeline_json);
})();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57581" + '/');

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
      } else {
        window.location.reload();
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