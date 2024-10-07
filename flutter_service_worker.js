'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/app.dill": "c36d6a029613b6705f1b0f45ca2d1f41",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/app.dill.deps": "b2a9a4efb14ff9be3e09a44090dd41e3",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/dart2js.d": "d739b178530ed2dc0ce6541146298dee",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/dart2js.stamp": "868be2b6574541dd1ba73d05aae7f965",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/flutter_assets.d": "a0578c5d2ddb53c81bf8c9316d4aaa55",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/main.dart": "77b16cd2cd4ec19b555ed55088e49b1f",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/main.dart.js": "037563f87995595fa4f8a56874bc6d8a",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/main.dart.js.deps": "c1aa31ec3d29aeffa347bd2a35bab75e",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/outputs.json": "d54a60a884855209409877b5febf6141",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/service_worker.d": "325bd8d5c842da56de4666578e9a97af",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_entrypoint.stamp": "5920bd2d25234a1f92fd2b700c8c85f3",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_release_bundle.stamp": "0c23fe354e5912650d3e4b2168b4b261",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_resources.d": "856d75a3bb52273cf3d19790fb91e67f",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_service_worker.stamp": "6e9ec9516af9f67a8fbeaad5cbe62adc",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_static_assets.stamp": "4e52a1a37585768068f4a7acb2d47f4d",
".dart_tool/flutter_build/719f6e5fad87f5ce1998cf0e23ca21e8/web_templated_files.stamp": "f2edb756c027a7e2986b0fd237af9e1e",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/app.dill": "ca7eb16de8617b9e2347751ff702525c",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/app.dill.deps": "93f8f0d3b8454a3e3c3ac779bce08ac1",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/dart2js.d": "bbcd95320e8a8a13408eb8e9398a04ed",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/dart2js.stamp": "567dddb0cdcddfa110e507488a58cf94",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/flutter_assets.d": "a0578c5d2ddb53c81bf8c9316d4aaa55",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/main.dart": "77b16cd2cd4ec19b555ed55088e49b1f",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/main.dart.js": "037563f87995595fa4f8a56874bc6d8a",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/main.dart.js.deps": "0d6522b9bef8db7b27dbd33be38f715d",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/outputs.json": "d54a60a884855209409877b5febf6141",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/service_worker.d": "325bd8d5c842da56de4666578e9a97af",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_entrypoint.stamp": "6105a7b7912b0cd6965642a90496d6f5",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_release_bundle.stamp": "6f4a81813555bcdecebcebc9ae8d0675",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_resources.d": "856d75a3bb52273cf3d19790fb91e67f",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_service_worker.stamp": "6e9ec9516af9f67a8fbeaad5cbe62adc",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_static_assets.stamp": "c6df14631b412e7d431423879b24f2e9",
".dart_tool/flutter_build/9adfddaa6bc9a78dc85c5dfcdfc10cce/web_templated_files.stamp": "f2edb756c027a7e2986b0fd237af9e1e",
".dart_tool/package_config.json": "6fe6c9ba3a0c46060853b8a2f867a573",
".dart_tool/package_config_subset": "e18bbd8cdadc031ad8f8727c93a64f0d",
".dart_tool/version": "2243244e18849bcded8667a44a91b9df",
".idea/libraries/Dart_SDK.xml": "63fb29e807c14a2e70df4a4e0462e084",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "455b1049a352bb0e9e0e57d5e9772231",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"build/web/assets/NOTICES": "b2af8f45970e79fb36c5fda10286c641",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"build/web/canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"build/web/canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"build/web/canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"build/web/canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"build/web/canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"build/web/canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"build/web/canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"build/web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"build/web/flutter_bootstrap.js": "a2a0a80765fa15cc96eec63bb2d78159",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/index.html": "8b408c841af94fe97d27a3fd837aefd5",
"build/web/main.dart.js": "037563f87995595fa4f8a56874bc6d8a",
"build/web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9de86ae31cfcb89392a32883403c0dbb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "daf93b5ac07649b70c1831971560005c",
"/": "daf93b5ac07649b70c1831971560005c",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"main.dart.js": "47e0ba6936d77387897892f762e83521",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"pubspec.lock": "a7fd40d053350fb5c449136885599198",
"pubspec.yaml": "5f5087f5946ec2e9a2ae8a9f5232798a",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "a3322b2f035e5345663b567001345585",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "d3fe4b84691ca7d14d2c5d69ce9eaba5",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
