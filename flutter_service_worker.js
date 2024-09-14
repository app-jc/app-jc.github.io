'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f3163d47494d0a313bc9435b0f28ef82",
"version.json": "639e977fb28ef9c5b377470334b8ebf1",
"index.html": "29a50ddb544189a1e83b4a3c231d162c",
"/": "29a50ddb544189a1e83b4a3c231d162c",
"main.dart.js": "5240a7463ad4f0ae67116b0b6eff69b3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "8c6b81ccaae4150d1b068a20acb0726c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f2ea1db5f16b250396da9acec172a0c",
".git/ORIG_HEAD": "972c9ee433d7f6410b3d7fd0b787a3a2",
".git/config": "3525cb7fd674de1d82a8c580b0946427",
".git/objects/61/ebd23ae9a6a846edab8da4cea0037f85d3e93c": "62efde02021c72709ac0f9423e5ebd0e",
".git/objects/0d/8249ae16796d1417e0542e0e1926fb6500cef4": "d44727403fe3b4f17248d661fe2d9987",
".git/objects/0d/58b90ba3e2271b552780ec14c87c8cf54c7c29": "8a14d29dd4a59bc77a79a4904ca259a4",
".git/objects/92/b65dc3fccd76f70aa011a40a5169a19a772a12": "867b99de8c1774dff7edea6dd2080637",
".git/objects/66/83e39b2d16cede76ff8d58be71d8e3bdeea754": "4042d13dbfb7d5bbff1ab70e0dcea277",
".git/objects/66/65ba28798eb24ab755c3b8948c72d789f93c71": "3ce2e4badcdbe7c77cc8e672ccc6ce13",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/57/fd17f2e6243c29d545a63e946cb6e5c67af466": "e380f48d1910e97d5c6938ab060ef303",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/53d51f581e18efce67201cb0798b97fb7ac145": "6f8ed0911fd6e7a1ccf3283322bed3d2",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/07c3c4f1ae85bbef66c9d47ca557946cc6123b": "12cd6fbe10735cc546ea4526ad1da683",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/a0f687d62d480ebc92e6da1dbff2d8397a2ad1": "3e017c1edde58d78353365ad72c40e30",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/6a81104561fbcbde11d13791a75599e726db7b": "1d1593fe8a3cb1ac1d664aaec6215d7f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/c9076a9738a5caf3f5cd40f94ceff37c5aebd2": "27e7d742ccc44c6eaed9a8ab355cf810",
".git/objects/9c/18678247a0e77bdf03873921e35f741e013683": "7358bffc2ef908849472c67d00887945",
".git/objects/9c/600a7aada17c7c4d7f09e88d4604652d5695b4": "d88fc0fb3a9bdf3aea4834c44db8b9ad",
".git/objects/02/75fa53b2c9a02966c5f92b0fbf959ff921fc7d": "2a3401729c0a120e7a5900acd4bcdf2e",
".git/objects/02/85255e16771a197f69181cb7feeb0fa7629648": "0b3567e18e655fd05f888a31ebccb460",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/a3/6834863b1d087d5dc28ae0e1ab27dd5996749a": "e8943c08e9b2d93ab4cafd22f06b4efa",
".git/objects/b5/c14d550a573b68cf8badbcb600e77dc7ad8054": "10c9f536df1497441dbbc9c354dab486",
".git/objects/ac/bc30a831ad50c44c15f140857b3d959bd4a294": "1ff148100308d615f87009966e423325",
".git/objects/bb/5d38ea76e45d42d07c947145cb90a629fca846": "6df365b3d04571bed8754b7670abb8d4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dd2c95eb4dee4c466ddd8fcd957f4da4b21270": "3bb8a60f3ff3ef87f0557f228a59630a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4d64e4f659028ca13f24f737269a36303ab54f": "7ea0ced59c725188e0790bf0eb5ed644",
".git/objects/c7/a946c99f867f0633fb2dd2419b8c803487896e": "1ef647bcc37b8fa8b4533ad72ea008b2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/cf/ee32e947cc38132f30995cdad060628f69b618": "879bb908e9fa977dec89a397f4bf7301",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/89132075482859a7dee56b5691d94f5ac52062": "e1fc5e4ab191a5c92bb526cbb47edce8",
".git/objects/fb/52ee4fcc9c182c74dd9e191ec116a322b1d87f": "5248b568b909c9619be49b124e1e01ce",
".git/objects/4e/074f38bbcc52f95ff22268d290c0028898ff2f": "58da2409128bb8c2b37a3cf0cbb9f60b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/68e23c849685c97fc0d42a91957101a9a227a3": "f736eccffda8bd15401dc4ef1b2921b7",
".git/objects/42/8964fcbeac10ae6403bd6c40a1ceeac8b8c25d": "bf587e3a93c69c65e198213a81af9476",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/dff0f4a8a1412653dbed8abcd89930bd9162c5": "1a9baac1c25839aefd96826646076abc",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/5630bc867892fbeb6301e262b1ea1f5e709c93": "6b83af5aaf73344e89d470c86c6d5c12",
".git/objects/4c/984e862283e906f6b4946d131c6183581526cf": "05afd680a7ac80f3a380e3eef708174a",
".git/objects/21/9ca8782a9377e8a5e2ac435ec1fe78ab4b64e7": "8ed4728161549f750838dd81d928163b",
".git/objects/21/acf5ebf46310a16bd34b51528736f3cc8f1920": "b0ae4341d9853863303722fd4125fc4a",
".git/objects/75/f2c0b7a7f54fb8f79fd95e9a3f38c584c44784": "be2b8f41264058c8a8eda5c78f83c665",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/81/d07466ab40a224b771f646a2a766d8e7346c38": "cf56f978392ac2a8feffccbb313d4893",
".git/objects/2f/5640ebce4c480cf74bafe16cea935b1dc834f2": "9f8e4aeaf5cc31a69466332445342c4f",
".git/objects/43/ae4e92ffec6b2f61a480261f4886e361e61d30": "24d1c4708af7123304a0baeeb2003741",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/2ca36ff1d8f72f618eee01cba875432dccf0c5": "d968899a45de7ed2c1110fce05412d35",
".git/objects/6e/637db26a17e05fdf652c1b0c20a39822620e16": "1e2335eed463c30499ba3bb91e236324",
".git/objects/6e/fb5fa85e891ba1ef677bcc3bd1b5f4d6375766": "527574f9ed9852eaa8e0ee853d54dd86",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/9e702d93ff76561094be163964c6e9928c684b": "1bfc51f56d669e2caf9526d547655d27",
".git/objects/5e/1b3fd9d2a58d8af03177e62ba47bf049780bac": "d22cd12babcb38987017af49e9108317",
".git/objects/5b/9f251b8bc9db69966562430e86b5bcf98db893": "87c7acce8b476f1f90690497098d1056",
".git/objects/6d/6e4b6e56250d922990779e45993fa0b33c760e": "c9a48a65cd3d20b35bae426af4abae46",
".git/objects/06/9f3949b3565bc33b2b89549a7eaea920f7ff37": "85d4af2a6f3a613dd4d5b452479d6a27",
".git/objects/39/9c8ed6ce64c0059e5eca8f76159b5df967cc03": "553ecd67bee12671f8cde0a593fcd4be",
".git/objects/90/b1b113f806670c03384d0c35c66d6f4b51ddc4": "f84ccbeb536a444905a6bf4b912f978b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a2ec9dfd5ea2cf72edf087153af668f26139f2": "afbf4407a6808d9e165177d88df3ea87",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/a4adec14157e3e6693812d3f333d6a1f79d4db": "734f80ccf2a347d828a0ea778a59b11e",
".git/objects/a0/1d88187f7c155fdefd80ee26377b5d72ae1e65": "5e6c8e1dfbf0671e1610d04b110e4a13",
".git/objects/a7/30f4e938ec9e255b35e31e029fb61cb72078aa": "bce8b43056925de2c6aabd2e024bfd1e",
".git/objects/a9/a31e32bed75686adda557e4c7185ae6b12f774": "e8f7a724302d974a6dac7be16d48f118",
".git/objects/d5/582b16e83cfc880cdd9f012931d94ac78bc7be": "364ab9e128dc07fdc8845312c03410ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/36992dd498f96d2855d0e1b015aafbdf9eccc8": "41d46863dcb005a76383722e71b3d987",
".git/objects/ef/c84a3a2efdb42eb9e775e6bf65904607efdf22": "13f426c20c39a39353bbb414f957f635",
".git/objects/cd/bf4e303d63764c927e876ba4cc5cd2ace3e893": "2e435be5964de2e9ce0f3bc8d57b47a9",
".git/objects/f9/92dcbf9146a9aac732955204d8f30e69c7169a": "8eae8c19df6e49bb6279e6bf1ab02ea9",
".git/objects/f0/2cc3a552478a6aa306f8ad9ca2c3ccb5229b74": "fc122f4d3d682cdbf7594e6d62c7983b",
".git/objects/e8/1e140f588ae1965f674eb6ea9ed8c367942fa8": "44f018df0bc09c74662a0a2574d28f83",
".git/objects/e8/d569559637e9e96c68a63c3f5a6af9f4b58be8": "6bfad8d8a1a0a95eef4f298fe5d69fa1",
".git/objects/cb/328100583ec3d13f34048ba9f12093d0c6e476": "44a561148e9585c9cf4803dd32937813",
".git/objects/46/52a428f15913953b7001dff85ff0cfeaf4ab08": "775feada7aa8049ee59f7d6205665ad5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/a9abd757411283835e1c90cfeac22b72090790": "2a5f036bf6789aef4a2de6b5535bb240",
".git/objects/83/60babc9d3dacbca46e700bc8133f90c102c251": "f4d665ec008cbe184405ca3c16f3cb83",
".git/objects/48/0bbe45057acd96daf0775224193164125bebb5": "c09dc7bd88d7483060e359d07e8d766e",
".git/objects/4a/f315abf5c7e5b68468b94e944d79834122f57b": "2c5b6500c2209db488dbbfa8b5201c71",
".git/objects/24/ebf9d371a886f9828703093031193e829e4979": "de317ded2e980bff98d2e2dff86aa6ce",
".git/objects/23/e42f286fdfa48cf374102a445354ef4eefa5e2": "b5047913696cc463ad8df7fd1766fa74",
".git/objects/4f/8ae7beeba0ebd6ca16129d2f7402e7fde61ec1": "a2690c81a419f3c3570be83783f66749",
".git/objects/8c/26645c790db565babb3d15bae8d8024adefd72": "4e8840621e80c91efd6b9af00136436d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/71/fc6ca1abde607252c025ee2a97bcb0f5831e56": "0eb68211851cdab8df8808ec2bb8addd",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/381842c10c361a84a26c6923da6650be54f6de": "a3364bd7159af5945bb4df9475dc24ce",
".git/objects/2b/8f417c87b338880e72771b1792dffdb2e47ec4": "88cd9b2b32e5b64c08bce78e50842a53",
".git/objects/7f/ea7c2f3005d8c5620d3e089483ad68d26f658a": "c78e5c29f79a125ef96716cb5249f787",
".git/objects/14/37efc61bf6d4af5196384ddf5cfd09e1dc794b": "73e7ad3bb04a1a9e6c844d73d7c38ba6",
".git/objects/25/4d0327c07b25d282cef8daaabb8d9104b5be92": "a19fdc5433ce3df7277bf33c491fdc1b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7db51b8bb87e2daaa92a961cbc0f8dd8",
".git/logs/refs/heads/master": "43d15bb9c2c964e39951c89126a5676e",
".git/logs/refs/heads/main": "ff76b0f32cf81a7ea94f5fa1f5b6379b",
".git/logs/refs/remotes/origin/master": "b54338b148f846e80ddf076fd0844984",
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
".git/refs/heads/master": "73a4ee379d5979ed214a582f0714c0b5",
".git/refs/heads/main": "ce9c3b01fe75ae8af0a71e508f5dd753",
".git/refs/remotes/origin/master": "73a4ee379d5979ed214a582f0714c0b5",
".git/index": "0e7f3c5c5ef3668c7d3d6d39f90546fc",
".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/FETCH_HEAD": "49414b919fcdba285eb73c11946d4bff",
"assets/AssetManifest.json": "4db135dcd3f2e7b2db759e9f01ac3b79",
"assets/NOTICES": "a709818b403871bfef4a7d41c621c310",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "783e537e8d7464309cf6bc707d0b8958",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ee4e7229079132bfd54dc81026a6d9fb",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/Group%25204.png": "633f817b513cb263022dd75d4b6c9b55",
"assets/assets/images/dashatar.png": "4e074b1c8523714d239653464f56c676",
"assets/assets/images/london_bus.jpg": "93e1dfcb0d0b03c7bd4cc3b189e948bb",
"assets/assets/images/Group%25203.png": "09fa11895a07311c4ebe0d35192d4dec",
"assets/assets/images/Group.png": "06206b2444c777ee1da4b96a372bc0d1",
"assets/assets/images/Path%25204.png": "b8e680d144787a702a3cbc8cabd1199c",
"assets/assets/images/Group.svg": "dbd545a25f3558e8b547b54439289487",
"assets/assets/images/Rectangle.png": "b883f7281039d5b53326eb0ec5eebb8c",
"assets/assets/images/Arrow.png": "d968ce64848b56f4b380801dea54c6d1",
"assets/assets/images/arrow_backward.png": "3d136b26bbb01a99c6f9bdfca806fdfb",
"assets/assets/images/Screenshot%25202024-09-13%2520at%252013.50.44.png": "6790dd9cabec376ca5c9ccf7acccaca9",
"assets/assets/images/arrow_forward.png": "0381888533aec9865a697533145bb75b",
"assets/assets/images/icons/github.png": "6077b0cac9ee0020e7a4d16c0a4558e7",
"assets/assets/images/icons/upwork.png": "f0c2d5877094b5b7b28cdcca9dc502df",
"assets/assets/images/icons/linkedin.png": "80c719891a97e0df79b05a0d4e3b3419",
"assets/assets/images/icons/icon-menu.png": "562f4bb6e19a9fca1c74413eecaf1a21",
"assets/assets/images/bible_ios.png": "b096ac4a33bf5da8e52798412247f296",
"assets/assets/images/bible.png": "3639b09ca9e627ce03ce35d615396cdc",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
