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

var precacheConfig = [["D:/blog/Hexo/public/2020/04/13/Git/index.html","5229927dc13b0735ed03fb3765119872"],["D:/blog/Hexo/public/2020/04/13/Mockito使用教程/index.html","f3eb74062654927999461151c13d426b"],["D:/blog/Hexo/public/2020/04/13/第一天/index.html","af2d89cd3ef415b3b04df6028e60559f"],["D:/blog/Hexo/public/2020/07/09/CAS原理/index.html","408668ce9f13862945fbc3ced141df93"],["D:/blog/Hexo/public/2020/07/09/Innodb/index.html","6fef4f385898e65f24eab6e9a1e431a8"],["D:/blog/Hexo/public/2020/07/09/Redis学习/index.html","f08a6f10853c2a4fb397d57daead0320"],["D:/blog/Hexo/public/2020/07/09/SpringSecurity/index.html","90291a732ff2996b18534f3f5a2a3a26"],["D:/blog/Hexo/public/2020/07/09/docker教程/index.html","673a5b0a02fa16308ffb511ce1c53211"],["D:/blog/Hexo/public/2020/07/09/java内存模型/index.html","4b362174fb987b14db175f9857f6c8f6"],["D:/blog/Hexo/public/2020/10/18/阻塞队列/index.html","5da65c7633cfcfdbd826a4423da9606e"],["D:/blog/Hexo/public/2020/11/27/hexo搭建/index.html","18807bcc4f9cdfa91d0f0f748898e34e"],["D:/blog/Hexo/public/2021/01/07/开发必备linux命令/index.html","6c2aec0c71abd5d3ae86aabfe6b3e75f"],["D:/blog/Hexo/public/2021/01/08/开发必备idea操作/index.html","efb1904f936363f76557322c2c927ccf"],["D:/blog/Hexo/public/2021/01/11/深入理解java虚拟机/index.html","5915b67900b468b0ff218dd67f81e4f1"],["D:/blog/Hexo/public/2021/01/12/docker部署springboot/index.html","c78a41df2a385a0d7d989d9c75f46e81"],["D:/blog/Hexo/public/2021/01/15/Netty学习/index.html","3024b91a9eca8260a5abccd8e4de725c"],["D:/blog/Hexo/public/2021/01/18/ELK日志系统/index.html","4fb6be0165ba0d53a52b8f6dadbfb13f"],["D:/blog/Hexo/public/2021/01/26/微信小程序/index.html","16737ad0135eeff1845011d75cedcf5a"],["D:/blog/Hexo/public/2021/01/31/Java性能优化/index.html","7fc02be933c462e4c973eed5fa27ecbd"],["D:/blog/Hexo/public/2021/02/19/Java并发编程/index.html","c8cac64204e9e7767849c73fee76b67b"],["D:/blog/Hexo/public/2021/02/25/JVM问题/index.html","29e4dee581b22951aa50a46fa3a917ec"],["D:/blog/Hexo/public/2021/02/28/数据结构与算法/index.html","d68ccc5bc3d33369d5d6103fe1ff457a"],["D:/blog/Hexo/public/2021/03/03/Github骚操作/index.html","c095b16f7333af6fb08acb8fd2d7c07a"],["D:/blog/Hexo/public/2021/03/06/什么是AQS-源码分析/index.html","a053f2a3c915dfee51af8a00eeaf8641"],["D:/blog/Hexo/public/404.html","4162384c04f29e02ae12c6f347a2d3c1"],["D:/blog/Hexo/public/archives/2020/04/index.html","7f023fff53c03301ae97e15df309e2a0"],["D:/blog/Hexo/public/archives/2020/07/index.html","d48240797c42890d8c597d33973d1d36"],["D:/blog/Hexo/public/archives/2020/10/index.html","06798e1be3282bc9e673a8d177019232"],["D:/blog/Hexo/public/archives/2020/11/index.html","f89f5a1084b04228edc8b465e6a1029d"],["D:/blog/Hexo/public/archives/2020/index.html","693f96da9a6d8377a6ed89d264d7fe1b"],["D:/blog/Hexo/public/archives/2020/page/2/index.html","4bd9a30813f861e2fbcaaf838738a03b"],["D:/blog/Hexo/public/archives/2021/01/index.html","69b1e9b3f17eb09643b1dd5c72e232e0"],["D:/blog/Hexo/public/archives/2021/02/index.html","b8def930afd6dd2535a876ef0a4496c9"],["D:/blog/Hexo/public/archives/2021/03/index.html","967476e421aa09e0ed9525fbf21d3852"],["D:/blog/Hexo/public/archives/2021/index.html","154d1524f50ad8d20d4cefcbf9aa19c0"],["D:/blog/Hexo/public/archives/2021/page/2/index.html","93598e05e5a1df81d4437fbf9dfb0c28"],["D:/blog/Hexo/public/archives/index.html","b45326df40c56469150c16e65ab3188c"],["D:/blog/Hexo/public/archives/page/2/index.html","4fe0927b5b6f6c2044b2c018b3b21c42"],["D:/blog/Hexo/public/archives/page/3/index.html","d3af318eabbdc242d8a093962dccbd27"],["D:/blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/Hexo/public/categories/index.html","abdf0daaf122411d76b85b79dc4c5953"],["D:/blog/Hexo/public/css/index.css","ac205c358f7e41af1f2efa3d8e78d954"],["D:/blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/Hexo/public/img/777.jpg","b5875657841a4173b4c68bc7cfacde02"],["D:/blog/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/Hexo/public/img/ali.jpg","fcbe3b54ca95ea79ef131048f268cc73"],["D:/blog/Hexo/public/img/favicon.png","faf124856fdfc78ba151ec6e83cbaf13"],["D:/blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/Hexo/public/img/kele.png","8bfcc816379d98f512f8600df9c99787"],["D:/blog/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/Hexo/public/img/tx.jpg","f2b0942d5f75b8fd0d808b3e95c09552"],["D:/blog/Hexo/public/img/v2-2494ad977ba85d38bb86bc859bbd410d_720w.jpg","377ad7ab6095e8775d8305b3f1d91014"],["D:/blog/Hexo/public/img/v2-5bfe7a4a8c35a2dcbfc9dfd356dc42a9_720w.jpg","5bfe7a4a8c35a2dcbfc9dfd356dc42a9"],["D:/blog/Hexo/public/img/v2-6fc16b4c88142df2095c22b8b3784bde_r.jpg","6fc16b4c88142df2095c22b8b3784bde"],["D:/blog/Hexo/public/img/wx.jpg","6eecdd27d96ac76af4867b92007374d6"],["D:/blog/Hexo/public/index.html","746a6480ea3081827e3cb4995e26e1c3"],["D:/blog/Hexo/public/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["D:/blog/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/blog/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/blog/Hexo/public/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["D:/blog/Hexo/public/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["D:/blog/Hexo/public/link/index.html","834f99333711209c63e07b0b3fdbce4a"],["D:/blog/Hexo/public/page/2/index.html","a7d92b7e15f3f6f6a8e7c3266750dae0"],["D:/blog/Hexo/public/page/3/index.html","f8fc3933d3cf6fbe330be3613358fd3b"],["D:/blog/Hexo/public/tags/index.html","b29a6ef35264bc5faa44531cb2c745c4"]];
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







