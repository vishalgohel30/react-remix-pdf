import {
  require_react_dom
} from "/build/_shared/chunk-RYQ7GX7C.js";
import {
  __commonJS
} from "/build/_shared/chunk-NGWUSV3G.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

export {
  require_client
};
//# sourceMappingURL=/build/_shared/chunk-R3SHD6ON.js.map
