if(!self.define){let s,o={};const e=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let n={};const a=s=>e(s,i),f={module:{uri:i},exports:n,require:a};o[i]=Promise.all(l.map((s=>f[s]||a(s)))).then((s=>(r(...s),n)))}}define(["./workbox-df6cf72b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/ar-3dc7c802.js",revision:null},{url:"assets/codicon-79f233d0.ttf",revision:null},{url:"assets/cs-4c301779.js",revision:null},{url:"assets/css-0e1563d3.js",revision:null},{url:"assets/cssMode-d3820ddb.js",revision:null},{url:"assets/de-28635812.js",revision:null},{url:"assets/es-32524b37.js",revision:null},{url:"assets/fr-d4fae00f.js",revision:null},{url:"assets/gcode.tmLanguage-77339e1a.js",revision:null},{url:"assets/hls-e28b5a76.js",revision:null},{url:"assets/hu-cd33a505.js",revision:null},{url:"assets/index-313a344a.css",revision:null},{url:"assets/index-c23338f5.js",revision:null},{url:"assets/it-da42f06e.js",revision:null},{url:"assets/ja-afc3cc52.js",revision:null},{url:"assets/jsonMode-6b8d68dd.js",revision:null},{url:"assets/klipper-config.tmLanguage-0d8bcbf0.js",revision:null},{url:"assets/ko-b8cc376a.js",revision:null},{url:"assets/log.tmLanguage-968a2c3d.js",revision:null},{url:"assets/markdown-ffcf1aad.js",revision:null},{url:"assets/nl-4275fb29.js",revision:null},{url:"assets/onigasm-b63d2d2d.wasm",revision:null},{url:"assets/parseGcode.worker-689790ce.js",revision:null},{url:"assets/pl-cfaaba7a.js",revision:null},{url:"assets/pt-fe267b4e.js",revision:null},{url:"assets/raleway-cyrillic-400-normal-679eb908.woff2",revision:null},{url:"assets/raleway-cyrillic-400-normal-7a6b4e1c.woff",revision:null},{url:"assets/raleway-cyrillic-ext-400-normal-1a60d844.woff2",revision:null},{url:"assets/raleway-cyrillic-ext-400-normal-e53f3389.woff",revision:null},{url:"assets/raleway-latin-400-normal-7b39693e.woff",revision:null},{url:"assets/raleway-latin-400-normal-c78a1da5.woff2",revision:null},{url:"assets/raleway-latin-ext-400-normal-293dc7f5.woff2",revision:null},{url:"assets/raleway-latin-ext-400-normal-2b8b326b.woff",revision:null},{url:"assets/raleway-vietnamese-400-normal-6e6a2642.woff",revision:null},{url:"assets/raleway-vietnamese-400-normal-917d91f1.woff2",revision:null},{url:"assets/roboto-cyrillic-300-normal-47aa3bfa.woff2",revision:null},{url:"assets/roboto-cyrillic-300-normal-c07952fe.woff",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-adba67d2.woff",revision:null},{url:"assets/roboto-cyrillic-500-normal-3728fbdd.woff2",revision:null},{url:"assets/roboto-cyrillic-500-normal-4bc088e9.woff",revision:null},{url:"assets/roboto-cyrillic-700-normal-6a84eeee.woff2",revision:null},{url:"assets/roboto-cyrillic-700-normal-6f82c5e2.woff",revision:null},{url:"assets/roboto-cyrillic-ext-300-normal-435e4b7f.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-300-normal-5e06c977.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-0a32035a.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-500-normal-57138788.woff",revision:null},{url:"assets/roboto-cyrillic-ext-500-normal-aeed0e51.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-700-normal-3c505383.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-700-normal-8ea7934f.woff",revision:null},{url:"assets/roboto-greek-300-normal-455c2c1a.woff2",revision:null},{url:"assets/roboto-greek-300-normal-6bb1ef10.woff",revision:null},{url:"assets/roboto-greek-400-normal-076b9dc1.woff",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-greek-500-normal-713780d8.woff2",revision:null},{url:"assets/roboto-greek-500-normal-93181eb7.woff",revision:null},{url:"assets/roboto-greek-700-normal-1c9cc76f.woff2",revision:null},{url:"assets/roboto-greek-700-normal-3f1a5012.woff",revision:null},{url:"assets/roboto-latin-300-normal-ddb5c61d.woff",revision:null},{url:"assets/roboto-latin-300-normal-f7591131.woff2",revision:null},{url:"assets/roboto-latin-400-normal-a9fdbefa.woff",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-500-normal-3ac31048.woff",revision:null},{url:"assets/roboto-latin-500-normal-b0195382.woff2",revision:null},{url:"assets/roboto-latin-700-normal-d89bc0fc.woff",revision:null},{url:"assets/roboto-latin-700-normal-f5aebdfe.woff2",revision:null},{url:"assets/roboto-latin-ext-300-normal-35da7ccd.woff",revision:null},{url:"assets/roboto-latin-ext-300-normal-b076e863.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-c2b94086.woff",revision:null},{url:"assets/roboto-latin-ext-500-normal-7f1c829b.woff2",revision:null},{url:"assets/roboto-latin-ext-500-normal-a303676a.woff",revision:null},{url:"assets/roboto-latin-ext-700-normal-3d1cbacf.woff",revision:null},{url:"assets/roboto-latin-ext-700-normal-fc66f942.woff2",revision:null},{url:"assets/roboto-vietnamese-300-normal-51f3f418.woff2",revision:null},{url:"assets/roboto-vietnamese-300-normal-7747ef64.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-d2390f1a.woff",revision:null},{url:"assets/roboto-vietnamese-500-normal-0948409a.woff2",revision:null},{url:"assets/roboto-vietnamese-500-normal-7899e6a5.woff",revision:null},{url:"assets/roboto-vietnamese-700-normal-4ec57f2a.woff2",revision:null},{url:"assets/roboto-vietnamese-700-normal-d986b503.woff",revision:null},{url:"assets/ru-a46968d6.js",revision:null},{url:"assets/setupMonaco-0374c77f.css",revision:null},{url:"assets/setupMonaco-7fee7b46.js",revision:null},{url:"assets/setupMonaco.features-cb2fe192.js",revision:null},{url:"assets/setupMonaco.features-dc4b5f73.css",revision:null},{url:"assets/sl-92d3ba08.js",revision:null},{url:"assets/uk-85824356.js",revision:null},{url:"assets/virtual_pwa-register-7e77e3d4.js",revision:null},{url:"assets/vue-echarts-chunk-a552b607.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-f5655660.js",revision:null},{url:"assets/zh-HK-9f46aee5.js",revision:null},{url:"index.html",revision:"977d6109ad58de2d6b728d7b8993af3c"},{url:"monacoeditorwork/css.worker.bundle.js",revision:"a37dce621558eda9c7053826e06a0829"},{url:"monacoeditorwork/editor.worker.bundle.js",revision:"79ca9c280deac2dc0155bb98fcaee8ef"},{url:"monacoeditorwork/json.worker.bundle.js",revision:"314915bca32ca94488f8f0cee07a17cb"},{url:"img/icons/android-chrome-192x192.png",revision:"6ea1e9fde2682dd8d0d1ea08f6624e9f"},{url:"img/icons/android-chrome-512x512.png",revision:"db3b74c0e8a1fec2025f202d28f612f9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"b355fe6957e72037f1bc6fb3bad3a78d"},{url:"color_picker.svg",revision:"d2baddbf28176cc2117a541f8589b630"},{url:"config.json",revision:"4a09eea8f392eb58a096603d0f8272d1"},{url:"editor.theme.json",revision:"3bb20e2e2531f1d718ff39721bb93034"},{url:"favicon.ico",revision:"80ae0fbdf558c18f367ffcc02e3d8347"},{url:"logo_annex.svg",revision:"9ed2cd09399ff61c70944f4ad2998492"},{url:"logo_btt.svg",revision:"3557f71de02b2290b7dfb69ffb6f2cd8"},{url:"logo_eva.svg",revision:"70df5a78fd6343acee8e3ce5f7d78f5a"},{url:"logo_fluidd.svg",revision:"6326f261ccb2415981f44647e0ac572e"},{url:"logo_hevort.svg",revision:"ac4d7fab2aa81c69b7582c27b067b87d"},{url:"logo_kingroon.svg",revision:"c0e1c31b668079bf935e661b09b79ca4"},{url:"logo_klipper.svg",revision:"11ac395b9be62f6511f6b82620625526"},{url:"logo_ratrig.svg",revision:"fcd714ac4a0ec2057b5cc91e49702045"},{url:"logo_snakeoil.svg",revision:"eeb8f536aa53fe0f94b756341771e7bd"},{url:"logo_voron.svg",revision:"f191b62e2f605146cdfa2cb189d4c263"},{url:"logo_vzbot.svg",revision:"b28316b91fca0858a196fb587ff6b21a"},{url:"logo_zerog.svg",revision:"d9b0439764091025a3a8692b9ef59353"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"a351c8d619180fe28d1b9ae02b3d9066"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"ec48f367f52f03862cee7cec3d01ad07"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"bc8f75876a747950735260adc634a81b"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"23e6410e45ff58896d23b4f4ef4514bd"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"27ab6d467f78011d71362fb060a98cf9"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"4af08cd1f1e8ad8b510a8b79847d1b5a"},{url:"img/icons/apple-touch-icon.png",revision:"23e6410e45ff58896d23b4f4ef4514bd"},{url:"img/icons/favicon-16x16.png",revision:"d5ad46f18f3207b4073c1f8e734302d7"},{url:"img/icons/favicon-32x32.png",revision:"3de1cf2d2204e73c6c5a622749f0f2f4"},{url:"img/icons/favicon.ico",revision:"80ae0fbdf558c18f367ffcc02e3d8347"},{url:"img/icons/msapplication-icon-144x144.png",revision:"4cc0223d744bd99a649837825b82c06e"},{url:"img/icons/mstile-150x150.png",revision:"98c08c8393ca7732e4916440e52ae08f"},{url:"img/icons/safari-pinned-tab.svg",revision:"46e22970a62e18a71bc1039cdeab1d59"},{url:"img/icons/shortcut-configuration-96x96.png",revision:"603dcda2c2942700dcec8b8e9aad766c"},{url:"img/icons/shortcut-settings-96x96.png",revision:"808c09c0275277dbc4d9dc43429221ac"},{url:"manifest.webmanifest",revision:"848fe47f351b63d46552ad0f48712b77"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/websocket/,/^\/(printer|api|access|machine|server)\//,/^\/webcam[2-4]?\//]})),s.registerRoute((s=>s.sameOrigin&&s.url.pathname.startsWith("/config.json")),new s.StaleWhileRevalidate({cacheName:"config",matchOptions:{ignoreSearch:!0},plugins:[new s.PrecacheFallbackPlugin({fallbackURL:"config.json"})]}),"GET")}));
