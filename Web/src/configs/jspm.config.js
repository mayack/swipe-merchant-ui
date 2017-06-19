SystemJS.config({
  paths: {
    "npm:": "libs/npm/",
    "github:": "libs/github/",
    "@app/": "app/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "": {
      "meta": {
        "*.css": {
          "loader": "css"
        }
      }
    }
  },
  map: {
    "npm:@types/*": "@empty"
  },
  buildCSS: false,
  productionConfig: {}
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "moment-range": "npm:moment-range@3.0.3",
    "classnames": "npm:classnames@2.2.5",
    "flux": "npm:flux@3.1.2",
    "action-emitter": "npm:action-emitter@0.2.1",
    "immutable": "npm:immutable@3.8.1",
    "moment": "npm:moment@2.18.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "history": "npm:history@4.6.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "css": "npm:systemjs-plugin-css@0.1.35",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "prop-types": "npm:prop-types@15.5.10",
    "react": "npm:react@15.6.1",
    "react-day-picker": "npm:react-day-picker@5.5.3",
    "react-dom": "npm:react-dom@15.6.1",
    "react-router": "npm:react-router@4.1.1",
    "react-router-dom": "npm:react-router-dom@4.1.1",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "simplr-dropdown": "npm:simplr-dropdown@2.2.3",
    "simplr-flux": "npm:simplr-flux@2.0.1",
    "simplr-forms": "npm:simplr-forms@4.0.1-beta.4",
    "simplr-forms-dom": "npm:simplr-forms-dom@4.0.1-beta.4",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tslib": "npm:tslib@1.7.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:prop-types@15.5.10": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:fbjs@0.8.12": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "promise": "npm:promise@7.3.0",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.7.1",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.11"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.18"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.11",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.0",
        "create-hash": "npm:create-hash@1.1.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "create-hash": "npm:create-hash@1.1.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "sha.js": "npm:sha.js@2.4.8",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.0",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react-router@4.1.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.5.10",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "history": "npm:history@4.6.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:history@4.6.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0",
        "value-equal": "npm:value-equal@0.2.1",
        "resolve-pathname": "npm:resolve-pathname@2.1.0"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:react-router-dom@4.1.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "react-router": "npm:react-router@4.1.1",
        "prop-types": "npm:prop-types@15.5.10",
        "history": "npm:history@4.6.1"
      }
    },
    "npm:node-fetch@1.7.1": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:simplr-flux@2.0.1": {
      "map": {
        "immutable": "npm:immutable@3.8.1",
        "flux": "npm:flux@3.1.2",
        "action-emitter": "npm:action-emitter@0.2.1",
        "@types/flux": "npm:@types/flux@3.1.0"
      }
    },
    "npm:flux@3.1.2": {
      "map": {
        "fbemitter": "npm:fbemitter@2.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:action-emitter@0.2.1": {
      "map": {
        "fbemitter": "npm:fbemitter@2.1.1",
        "@types/fbemitter": "npm:@types/fbemitter@2.0.32"
      }
    },
    "npm:@types/flux@3.1.0": {
      "map": {
        "@types/react": "npm:@types/react@15.0.29",
        "@types/fbemitter": "npm:@types/fbemitter@2.0.32"
      }
    },
    "npm:fbemitter@2.1.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:readable-stream@2.2.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@1.0.2"
      }
    },
    "npm:string_decoder@1.0.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.0"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.11",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:simplr-dropdown@2.2.3": {
      "map": {
        "react-dom": "npm:react-dom@15.6.1",
        "react": "npm:react@15.6.1",
        "prop-types": "npm:prop-types@15.5.10",
        "@types/prop-types": "npm:@types/prop-types@15.5.1",
        "@types/react-dom": "npm:@types/react-dom@15.5.0",
        "@types/react": "npm:@types/react@15.0.28"
      }
    },
    "npm:@types/react-dom@15.5.0": {
      "map": {
        "@types/react": "npm:@types/react@15.0.29"
      }
    },
    "npm:react-day-picker@5.5.3": {
      "map": {
        "prop-types": "npm:prop-types@15.5.10"
      }
    },
    "npm:moment-range@3.0.3": {
      "map": {
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.23"
      }
    },
    "npm:es5-ext@0.10.23": {
      "map": {
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es6-iterator": "npm:es6-iterator@2.0.1"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.23",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:react-dom@15.6.1": {
      "map": {
        "prop-types": "npm:prop-types@15.5.10",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:react@15.6.1": {
      "map": {
        "prop-types": "npm:prop-types@15.5.10",
        "loose-envify": "npm:loose-envify@1.3.1",
        "create-react-class": "npm:create-react-class@15.6.0",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:create-react-class@15.6.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:promise@7.3.0": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:simplr-forms-dom@4.0.1-beta.4": {
      "map": {
        "@types/prop-types": "npm:@types/prop-types@15.5.1",
        "react-dom": "npm:react-dom@15.6.1",
        "tslib": "npm:tslib@1.7.1",
        "prop-types": "npm:prop-types@15.5.10",
        "react": "npm:react@15.6.1",
        "immutable": "npm:immutable@3.8.1",
        "@types/react": "npm:@types/react@15.0.29",
        "simplr-forms": "npm:simplr-forms@4.0.1-beta.4",
        "typed-immutable-record": "npm:typed-immutable-record@0.0.6"
      }
    },
    "npm:simplr-forms@4.0.1-beta.4": {
      "map": {
        "@types/prop-types": "npm:@types/prop-types@15.5.1",
        "@types/react": "npm:@types/react@15.0.29",
        "immutable": "npm:immutable@3.8.1",
        "prop-types": "npm:prop-types@15.5.10",
        "react": "npm:react@15.6.1",
        "react-dom": "npm:react-dom@15.6.1",
        "tslib": "npm:tslib@1.7.1",
        "typed-immutable-record": "npm:typed-immutable-record@0.0.6",
        "@types/react-dom": "npm:@types/react-dom@15.5.0",
        "@types/flux": "npm:@types/flux@3.1.0",
        "action-emitter": "npm:action-emitter@0.2.1",
        "@types/fbemitter": "npm:@types/fbemitter@2.0.32"
      }
    }
  }
});
