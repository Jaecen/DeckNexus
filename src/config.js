System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "js": {
      "defaultJSExtensions": false,
      "defaultExtension": false
    }
  },

  map: {
    "allong.es": "npm:allong.es@0.14.0",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "classnames": "npm:classnames@2.2.0",
    "core-js": "npm:core-js@1.2.2",
    "history": "npm:history@1.12.5",
    "jquery": "github:components/jquery@2.1.4",
    "react": "npm:react@0.14.0",
    "react-bootstrap": "npm:react-bootstrap@0.27.2",
    "react-dom": "npm:react-dom@0.14.0",
    "react-redux": "npm:react-redux@4.0.0",
    "react-router": "npm:react-router@1.0.0-rc3",
    "react-router-bootstrap": "npm:react-router-bootstrap@0.19.2",
    "redux": "npm:redux@3.0.3",
    "redux-actions": "npm:redux-actions@0.8.0",
    "redux-devtools": "npm:redux-devtools@2.1.5",
    "redux-promise": "npm:redux-promise@0.5.0",
    "redux-router": "npm:redux-router@1.0.0-beta3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:allong.es@0.14.0": {
      "promise": "npm:promise@7.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:classnames@2.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.2",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:flux-standard-action@0.6.0": {
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0"
    },
    "npm:history@1.12.3": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.1.1",
      "qs": "npm:qs@4.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:history@1.12.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.1.1",
      "qs": "npm:qs@4.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.1.1": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash-compat@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isplainobject@3.2.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-bootstrap@0.27.2": {
      "babel-runtime": "npm:babel-runtime@5.8.25",
      "classnames": "npm:classnames@2.2.0",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "keycode": "npm:keycode@2.1.0",
      "lodash-compat": "npm:lodash-compat@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.0",
      "react-dom": "npm:react-dom@0.14.0",
      "react-overlays": "npm:react-overlays@0.5.0",
      "react-prop-types": "npm:react-prop-types@0.3.0",
      "uncontrollable": "npm:uncontrollable@3.1.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.0": {
      "react": "npm:react@0.14.0"
    },
    "npm:react-json-tree@0.1.9": {
      "babel-runtime": "npm:babel-runtime@5.8.25",
      "react": "npm:react@0.14.0",
      "react-mixin": "npm:react-mixin@1.7.0"
    },
    "npm:react-mixin@1.7.0": {
      "object-assign": "npm:object-assign@2.1.1",
      "smart-mixin": "npm:smart-mixin@1.2.1"
    },
    "npm:react-overlays@0.5.0": {
      "classnames": "npm:classnames@2.2.0",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.0",
      "react-dom": "npm:react-dom@0.14.0",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.3.0": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-redux@3.1.0": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.3",
      "invariant": "npm:invariant@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "redux": "npm:redux@3.0.3"
    },
    "npm:react-redux@4.0.0": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.3",
      "invariant": "npm:invariant@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.0",
      "redux": "npm:redux@3.0.3"
    },
    "npm:react-router-bootstrap@0.19.2": {
      "react": "npm:react@0.14.0",
      "react-router": "npm:react-router@1.0.0-rc3"
    },
    "npm:react-router@1.0.0-rc3": {
      "history": "npm:history@1.12.3",
      "invariant": "npm:invariant@2.1.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.0": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux-actions@0.8.0": {
      "flux-standard-action": "npm:flux-standard-action@0.6.0",
      "reduce-reducers": "npm:reduce-reducers@0.1.1"
    },
    "npm:redux-devtools@2.1.5": {
      "react-json-tree": "npm:react-json-tree@0.1.9",
      "react-mixin": "npm:react-mixin@1.7.0",
      "react-redux": "npm:react-redux@3.1.0",
      "redux": "npm:redux@3.0.3"
    },
    "npm:redux-promise@0.5.0": {
      "flux-standard-action": "npm:flux-standard-action@0.6.0"
    },
    "npm:redux-router@1.0.0-beta3": {
      "deep-equal": "npm:deep-equal@1.0.1"
    },
    "npm:redux@3.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uncontrollable@3.1.3": {
      "invariant": "npm:invariant@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
