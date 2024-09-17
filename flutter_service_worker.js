'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e042aefb1ca81d58897c6ee6a51eecb",
"version.json": "525fa45945b785f6c91f1e8f71a34a49",
"index.html": "f6bde69763c6b8332500fbbdc64f5ebc",
"/": "f6bde69763c6b8332500fbbdc64f5ebc",
"main.dart.js": "fe57deb5200d7dcead4841a1670ba0ea",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c07321bccdd310c64cdd707bc6fb2769",
".git/config": "c4d5c2c571dcd51d7fe0e2e7be0a8072",
".git/objects/95/b216ef8fd387a7d29eff3ddf10701d6bfe34e0": "bfe93da6ff24b3d63eabbc1b48f32466",
".git/objects/92/493800ab00de205e7fe3ca8d483d3f0a58d5a8": "7dd7d37e38bddd85876ee5b426c2e56e",
".git/objects/50/d1fe2bdbe395e0dd825567478ef96ce462cd2e": "cd03325d4388d83d357dd3e7c2d85778",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/2257c902c88b211f85b5850a90c824ab9798d9": "ca496b0cc5eaa2b41a680a90c7b63fdd",
".git/objects/9e/670d6660e86a6c8040a640c91190c47f6eac04": "b7224f768c0db970bd1da2ce8b85c5e6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/56/cc837abd8d2343b9a6d6bd23dc632c3722c143": "116967550da97fc563ed150b7fc7d9cb",
".git/objects/51/8a3c5fa267d9d6c3bc8c3dde7d9b6a7e2c2464": "8d899cfc16d92fd4f2ff5e1e05cdf3ca",
".git/objects/93/c180a3f880716f259b726465f08b4afc925a20": "62377ad7f548a242dd5a1a79f8a1ce9d",
".git/objects/60/708fe76a6aa3d517f4c6ac5fdf18722cd60517": "8a5509d044f97c8e3d744fe5c7e29b05",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/8ce0c3be017cc46d4ad0a57006777220597938": "4ceb1d1998b6ea2d3fda53faadc34242",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/97e8984aae85ecf1b72dc31552c953a3d0063f": "25436cfb85449b47e17939b5e0390dbd",
".git/objects/b4/b7b927fe5eee10f8c67d2e7d3efa2b33ee6d3a": "4e251a7c8edb9e7a01c784b3aaafc6b3",
".git/objects/d1/dcc1384d6eada9d401e80232f7f65586039dc2": "48cceef9ba7c3a371bfb0da7905a698a",
".git/objects/d1/1569f575808c1049069242a05402ca3c57d38b": "0a84e064b8329c1d54e2d609e1dc9ec0",
".git/objects/d1/8c57ba56494dc39a0bbb842d20556ae2e2d7de": "2dda2782098a1cf971056de8fc1b8b4c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/0c289c3e8d4e541e88161e07c8c2e3ecd6b232": "bcaaa6c45232252c602f853b2e8c01c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b0a7089a897b81257a688dba0886d3f46da0cf": "6d4ef55a76ee1aedf4477ea01c48b6b1",
".git/objects/c9/41531652c3f146310c37064703c87af2476759": "da22624c8182567b89ea734e7954bde0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/eb0aa1034ccb1e431150e784f4a091a298103e": "566ed92307a0ef5b55292f5c2a050901",
".git/objects/4e/962ee86f79b0075010c1a7a18cbe3c50b781d4": "58e4bfbdb9f17efa2dd298de68fe6a78",
".git/objects/11/e6670ced6f65741c7a07e4647533b5920139d2": "9a63611671cd9ccdfef4299b511b7973",
".git/objects/11/b0430a0f52f68c4cffbf2804504b58d9e72f6b": "c928135ab3ecdc756469440680ef9be9",
".git/objects/7d/6c89d6b6832c74131aff1e1700e53888ade048": "f13117f1c0499973a505f4f7700d7325",
".git/objects/7d/3670ff5c142b4b99c7afd28ed641e172d840c0": "7b92c241fde0f7ef337c416c51f6918f",
".git/objects/16/c6ae8028e3651c6246e0277d2abd9ce7b69e05": "b5055f587d4febb82ca90480d76cd355",
".git/objects/42/1b6507e83a948b75bf4684ac68e3ab55a2b29b": "67c09fdf45da145b14dc283ca6bc415f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/11fc78a115d70f4bcf1e42c532ddc24da6ff62": "427738b4ddd640225ae5e94b730aa90e",
".git/objects/28/b493d36b1ef26ea43d7befd34d2abf9b8e5816": "94b32baf391370c86148d07cd0b9b37d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/69dced9ac07bf94f5abff6c1c9898d6edf4018": "d894b8a884e229ddc953449c1d55f1da",
".git/objects/4c/fb7da30d9caf83f3fbe6d23e0dfab50c8be818": "19f0e0a9c400d1379d0b115caff67241",
".git/objects/4c/15e9f7807fba61510e46aa10db52c1d8a3476a": "5772858bc18af593d3ddee29fe18d30a",
".git/objects/75/9037fd47496c99347da92f962365cc510ae805": "b9526a367010d274f5daef89d3bcc954",
".git/objects/81/1e8a5f2c97bbdb4b17bbf34744f914136a9efd": "fcb111a994eb89e18ec96564a75db4a3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/4c339608466dfd688e129bcc8e668691d1753e": "ff95421e8d47e895d0b18f5bd40866b8",
".git/objects/2f/a1866ec831fe84927a028e1b6f5aff77c2a353": "4792e5935ee12dfb4edaac3945def594",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/2d29bb39e1496f968cee8f23df206451fd96aa": "92a29e0cc93e985690e6ec1734d0f0a6",
".git/objects/9a/e4e77ceaf834e7acac059a346fca1b140e51cc": "37cfd74c4ff8d12d1992dfffdac90e64",
".git/objects/9a/d447e83ab516e0174e88d717be8c711b0573a0": "488e7e14eb342b184f505796eaf52742",
".git/objects/36/7709d93b445e0a1bef588f20e4dca9ff532d20": "70a19d57fbe8e23c427ca9c030e22994",
".git/objects/09/6f2adab8d2cba7076bc90691e8b0a8a77fc984": "8eeef6284f3ea14a81b676d572e220f4",
".git/objects/65/073108a91a2973b14025e698e3c3ba00379982": "767523a5274d62850f2095ba5c648f72",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/21ffe0cd8c5d8cd1b1e38073264343715c78a1": "c87d5030674ddf174929ee8f4e6675d3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/e807c6b84a2fcb4c723b7c72e40cbc7c8b81c5": "4c8ae81675dde695673fa429d49cb3ae",
".git/objects/5e/d4816ed5af6700c92f9e78a7670ffb43577a66": "8d1c23a19736021a2bdef87521a10666",
".git/objects/37/270e653f3a4ac5aaf85e1b91f900aa38586d7e": "d47d4142380e4ca8c13465f049c70fc1",
".git/objects/08/a6b381941868e0067850fd60b8b0b576bc1296": "96a301b2b53dde018811d0c856ed5882",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/448f3ad6a956ecc59ab4721799139b6d959fa5": "293055f8a9f7c97758abf39d614081a3",
".git/objects/6c/27a79535cb7020309c7cc7efd52fcd9fbae876": "7389eb29972c3d091b8b642f750040bc",
".git/objects/39/023f53e82e4e26a52ac467adb371d225c0423b": "627191916aa5f705423fad0913099a65",
".git/objects/0f/830b56dbaf56261193de91ca348220252acf73": "89cfb036088fa916b6a13a18b9696a1e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/5cdaab27d9eb8e302301b2e660858abb837815": "7e33a245ea0d88c82412b199c3e8aba4",
".git/objects/d2/239944bae84604f39b8b7f9967cd6fdd697023": "52e546552eb1e5ac949894dc96096f83",
".git/objects/aa/ba3c2481c8f2c6419d7196bcedfb8214ed3d4a": "9d72896c2568505c3163b34a075aca6a",
".git/objects/aa/8af3d4613b6e2faefc28fedd5544a5099abfe1": "34ef14188eb2822edbabacc7ee1c0df2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/14349e30db77acc210612cf3c684054bd1d93f": "5ce9378e880f32f55106d2b795779ea1",
".git/objects/b0/2dff956b81a94cccfa3d0762bb92a762272e5a": "20b62b67b734b1ce92ed5ddc4d01b63c",
".git/objects/a6/71f6d1875f8d2ae370a4ff5efbcbf49639e408": "74a04f8507250355ba0a94f355209ab6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/2d4b57c217e302a4537a09eaebeadb9f0fbdd9": "2d4c6def98e16759b6eb24e4d4bc2377",
".git/objects/fa/d807ce625ec53b966e83472b27489ca3ed6772": "2aa1824bfec84154478f8579280bd3ca",
".git/objects/f6/a1fdee90f8628e23aaf1f80aaaf585a39b4177": "b05be1178d0ae9e3dd4bb8b2e4bc1ecc",
".git/objects/cb/16828ed5031813812f992e27c73fcced7e47de": "3e6840332714a6f48cb90aec4c7603ab",
".git/objects/83/c8625edbb558c391a9f754d56e49a0c1e34d6e": "55f83d8a78afebad855dcbc95e3450a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/6c5bb86fb438893b96f6c26b5776337b180291": "171c8d4a185d252a096a1a09cb70ad1e",
".git/objects/24/c239963a04957089b8009da1d399b10e399bba": "7b72865d3a65748da3185d886f2ce9cd",
".git/objects/23/99589c3baa2c1fa9fabd602e01d62febc05291": "6f44034b3135608a5aecb8fefec2bfca",
".git/objects/23/2e341e4925488ee66f8005ab6d2f06768da7ed": "85c96244d9b18dfaadd86fa8da0e9078",
".git/objects/8c/4bcbc035ee331a89f07571da114929fc489e40": "cd43f44e4ad056e05d4a2e973e7008a4",
".git/objects/8c/34847338e7ecad42c90ae470ae5b7d3b395353": "5fdd9fd361e0cbf3aaa54faeb7915016",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/f294452cc0c26153c1712494ae0d9cb0dea209": "b9358a6771d9b963c49199eb33bf3646",
".git/objects/40/6a42e40a0b67a5c268d930df38137f8cbf8209": "0aaf55a7b1c58fd88382619d2460be48",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/eb2f2d6f18f3a91bea918c55027533cc160ffe": "24971b6975b1cc576c2eaf6859b5b5ac",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/13/94d215bfea4e01a1faf63112fa8c9d2b7ef693": "86c231b6f4a634342411ea2dca232dc2",
".git/objects/7f/11416ce85367dbd90b6201e4669350357b7d99": "5196984cd4680ca061e510c1023bd90d",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9a5c542389b28377530775e7a3a08b9",
".git/logs/refs/heads/main": "ae177d129880cc7fcaf10bb973453424",
".git/logs/refs/remotes/origin/main": "c6f0ce374fbeb5ad69466ce387274f9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "aa0aeb8f16f80174e47b903ce03cf812",
".git/refs/remotes/origin/main": "aa0aeb8f16f80174e47b903ce03cf812",
".git/index": "3eb07e7b9c316076499a7a438425ddc8",
".git/COMMIT_EDITMSG": "c84e9b3c55009880f84754f336722cb7",
"assets/AssetManifest.json": "a4b510bfd0011bbb8689b3d0a66355e9",
"assets/NOTICES": "fdc041f4d2d9ab61786c673d3aa4daf1",
"assets/FontManifest.json": "5fe53a2f324cd010d3db2b4c1f3951b4",
"assets/AssetManifest.bin.json": "3ee8d7a8bd690dbc6a754456e6ebdcfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b2d1bd57c1b678428f392a901b2155e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "13b491c33c0467d2dfb9f2993121deb5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4a0fd4f6a1b807dd19221d19b28a05b3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9fb952b94e97c03b4657a95a1ff58c78",
"assets/fonts/MaterialIcons-Regular.otf": "78cc4949b0726980387b00216ba5e732",
"assets/assets/file/Curriculum%2520Vitae%2520Charles%2520(3).pdf": "850d8f547f967d75cf5495748bc23f6a",
"assets/assets/images/Dart-logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/Screenshot_1722328803.png": "71b1a4e1d706ed82882523bfa42aacdd",
"assets/assets/images/Screenshot_1722328807.png": "385dbae82139966071430ce65b843c68",
"assets/assets/images/Screenshot_1722328781.png": "1ac4a373a155b174b6c38db06e503b62",
"assets/assets/images/Green%2520minimalist%2520professional%2520Business%2520Proposal%2520Presentation%2520(2).jpg": "604468811d405e41433031f442603e5f",
"assets/assets/images/pngwing.com%2520(6).png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/Logomark_Full%2520Color.png": "0e8789d152ed2744d7f7265dc3f1457e",
"assets/assets/images/pngwing.com%2520(5).png": "02711c2cf037c786ebb844af1328f809",
"assets/assets/images/MyImage.PNG": "96aa34320189eeb7d5a3179d0f86683e",
"assets/assets/images/Green%2520minimalist%2520professional%2520Business%2520Proposal%2520Presentation%2520(1).jpg": "af4b5062ef4bfb98f1cc713488ede1d5",
"assets/assets/images/Screenshot%25202024-09-17%2520at%252022.06.46.png": "ae28d45060e67df549568edae6d7686b",
"assets/assets/images/homepage_screenshot.png": "dc0b3d03e3203e6790467d91382d115b",
"assets/assets/images/pngwing.com%2520(4).png": "22eeecf99b8d92726b4f3735be5473c0",
"assets/assets/images/Screenshot_1722328771.png": "63129609a74d9af356e5bb5c4f899206",
"assets/assets/images/Screenshot%25202024-09-17%2520at%252022.06.19.png": "9b888d8202b3c0951742953cb50cc527",
"assets/assets/images/Screenshot%25202024-09-17%2520at%252022.06.33.png": "cf0bf2532260afc6d71cc59c490f3d05",
"assets/assets/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf": "e0a392b12c2557a8a6c6d14a5d93c5ba",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
