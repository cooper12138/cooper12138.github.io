/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/Hexo/public/2020/04/13/Git/index.html","7b9bc1ed6f0e19170a3c25562242bb43"],["D:/blog/Hexo/public/2020/04/13/Mockito使用教程/index.html","66b73e4168007630b157005d1ed1f77d"],["D:/blog/Hexo/public/2020/04/13/第一天/index.html","d9d7d374f4fb29f35849db157790579a"],["D:/blog/Hexo/public/2020/07/09/CAS原理/index.html","d5cabd5974fc77985860f355c97b12de"],["D:/blog/Hexo/public/2020/07/09/Innodb/index.html","5bbc1ca8dd0e6cc521dde79f013be58e"],["D:/blog/Hexo/public/2020/07/09/Redis学习/index.html","e6a4df8960f7847965dc03fb29314c16"],["D:/blog/Hexo/public/2020/07/09/SpringSecurity/index.html","ac0781f8dfc5c5e38bfcff47dce4174d"],["D:/blog/Hexo/public/2020/07/09/docker教程/index.html","84a8229438a103bcd52ed14307823518"],["D:/blog/Hexo/public/2020/07/09/java内存模型/index.html","8c7595013e0ef21465d067428ee4dded"],["D:/blog/Hexo/public/2020/10/18/阻塞队列/index.html","14e4bb9fb329184c94b43334fc1805a7"],["D:/blog/Hexo/public/2020/11/27/hexo搭建/index.html","581f0d35ac60e267d60070d4d718f9dc"],["D:/blog/Hexo/public/2021/01/07/开发必备linux命令/index.html","cce1bdbea5589e689ad552fcfaef8ffe"],["D:/blog/Hexo/public/2021/01/08/开发必备idea操作/index.html","17f748b350fd565c7edbc228416eaf61"],["D:/blog/Hexo/public/2021/01/11/深入理解java虚拟机/index.html","c4600972c36cafd4d1cdae2d496bdff5"],["D:/blog/Hexo/public/2021/01/12/docker部署springboot/index.html","57d31c185bf67494414a36527f1aaf2a"],["D:/blog/Hexo/public/2021/01/15/Netty学习/index.html","fb19d497a3d05e56d8f05804ccd5191c"],["D:/blog/Hexo/public/2021/01/18/ELK日志系统/index.html","1a17db2de7e6028acc161069bc9555c1"],["D:/blog/Hexo/public/2021/01/26/微信小程序/index.html","ce956e56a9da69ada8d0e2a471ddbbbb"],["D:/blog/Hexo/public/2021/01/31/Java性能优化/index.html","5bee9a21b3adb6256bbd4f33fa405c76"],["D:/blog/Hexo/public/2021/02/19/Java并发编程/index.html","0233f1f48259572ab67dd5b7e7514fca"],["D:/blog/Hexo/public/2021/02/25/JVM问题/index.html","56d67cad0a4e47f776859a9cef093860"],["D:/blog/Hexo/public/2021/02/28/数据结构与算法/index.html","96043c2b19f76cfc31fef0bff56823fb"],["D:/blog/Hexo/public/2021/03/03/Github骚操作/index.html","0ecabf1e3baaece387cf93d5356f059f"],["D:/blog/Hexo/public/404.html","d1daf2e0a591957141286c1a7b8dbcac"],["D:/blog/Hexo/public/archives/2020/04/index.html","5a163093edb2874a39255f3438274e34"],["D:/blog/Hexo/public/archives/2020/07/index.html","ea2b42dda14ad0011fd5a80c72e1f5af"],["D:/blog/Hexo/public/archives/2020/10/index.html","d11d8d751ff02268301414830933a191"],["D:/blog/Hexo/public/archives/2020/11/index.html","3cd845bdfbcdfef96a321b6566bffab8"],["D:/blog/Hexo/public/archives/2020/index.html","98d3f9ecc0cb38321144123bcbd1fe8f"],["D:/blog/Hexo/public/archives/2020/page/2/index.html","77c9ba5d1420768e800d069658d282da"],["D:/blog/Hexo/public/archives/2021/01/index.html","e726575b40bc9b1cd2f16342a1f56f59"],["D:/blog/Hexo/public/archives/2021/02/index.html","1901cf9d22e2a3495429d6766a84f282"],["D:/blog/Hexo/public/archives/2021/03/index.html","13beb9cd5c636c4a4ad3bfb09549cec3"],["D:/blog/Hexo/public/archives/2021/index.html","185a2dc013b94b419c69f6720d5d187e"],["D:/blog/Hexo/public/archives/2021/page/2/index.html","d84c9265c2524063d6a142a58a820d11"],["D:/blog/Hexo/public/archives/index.html","6606d923202f72a74c449655fb4dced3"],["D:/blog/Hexo/public/archives/page/2/index.html","c583a5daa1a911e78b70cbbecd404104"],["D:/blog/Hexo/public/archives/page/3/index.html","29df12f808141ea56ee157fd9a909182"],["D:/blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/Hexo/public/categories/index.html","b5686b6732c5d081fdb1d0b0192d3ab9"],["D:/blog/Hexo/public/css/index.css","ac205c358f7e41af1f2efa3d8e78d954"],["D:/blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/Hexo/public/img/777.jpg","b5875657841a4173b4c68bc7cfacde02"],["D:/blog/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/Hexo/public/img/ali.jpg","fcbe3b54ca95ea79ef131048f268cc73"],["D:/blog/Hexo/public/img/favicon.png","faf124856fdfc78ba151ec6e83cbaf13"],["D:/blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/Hexo/public/img/kele.png","8bfcc816379d98f512f8600df9c99787"],["D:/blog/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/Hexo/public/img/tx.jpg","f2b0942d5f75b8fd0d808b3e95c09552"],["D:/blog/Hexo/public/img/v2-2494ad977ba85d38bb86bc859bbd410d_720w.jpg","377ad7ab6095e8775d8305b3f1d91014"],["D:/blog/Hexo/public/img/v2-5bfe7a4a8c35a2dcbfc9dfd356dc42a9_720w.jpg","5bfe7a4a8c35a2dcbfc9dfd356dc42a9"],["D:/blog/Hexo/public/img/v2-6fc16b4c88142df2095c22b8b3784bde_r.jpg","6fc16b4c88142df2095c22b8b3784bde"],["D:/blog/Hexo/public/img/wx.jpg","6eecdd27d96ac76af4867b92007374d6"],["D:/blog/Hexo/public/index.html","fb2d0cd4cd72f2fb21b8d9a670a7b209"],["D:/blog/Hexo/public/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["D:/blog/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/Hexo/public/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["D:/blog/Hexo/public/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["D:/blog/Hexo/public/link/index.html","562bc94add4352a5580d4accabf360fa"],["D:/blog/Hexo/public/page/2/index.html","70ba9cbde95b2ea8717a688494f62778"],["D:/blog/Hexo/public/page/3/index.html","077d4cc32612a9508aac29f03e4f7261"],["D:/blog/Hexo/public/tags/index.html","19cb47199bd5e7b235d74993fdf1955f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







