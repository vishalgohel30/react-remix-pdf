import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VP6AN7CR.js";
import {
  createHotContext
} from "/build/_shared/chunk-5ZXSXVQH.js";
import "/build/_shared/chunk-6Q656ALH.js";
import {
  require_react
} from "/build/_shared/chunk-3CQVQBGT.js";
import {
  __async,
  __toESM
} from "/build/_shared/chunk-NGWUSV3G.js";

// app/component/Pdf.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/Pdf.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/Pdf.tsx"
  );
  import.meta.hot.lastModified = "1706729463000";
}
function Index({
  document
}) {
  _s();
  const containerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (document) {
      const container = containerRef.current;
      let instance, PSPDFKit;
      (function() {
        return __async(this, null, function* () {
          PSPDFKit = (yield import("/build/_shared/pspdfkit-7236BRWM.js")).default;
          instance = yield PSPDFKit.load({
            container,
            document,
            baseUrl: `${window.location.protocol}//${window.location.host}/`
            // licenseKey: 'YOUR_LICENSE_KEY_GOES_HERE',
          });
        });
      })();
      return () => PSPDFKit && PSPDFKit.unload(container);
    }
  }, [document]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: containerRef, style: {
    height: "100vh"
  } }, void 0, false, {
    fileName: "app/component/Pdf.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(Index, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = Index;
var PdfList = [{
  name: "pdf1",
  document: "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
}, {
  name: "pdf2",
  document: "https://www.africau.edu/images/default/sample.pdf"
}, {
  name: "pdf3",
  document: "https://www.clickdimensions.com/links/TestPDFfile.pdf"
}, {
  name: "pdf4",
  document: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
}, {
  name: "pdf5",
  document: "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf"
}];
var PdfView = () => {
  _s2();
  const [document, setDocument] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: PdfList.map(({
      name,
      document: document2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseDown: () => setDocument(""), onClick: () => {
      setTimeout(() => {
        setDocument(document2);
      }, 1e3);
    }, children: name }, name, false, {
      fileName: "app/component/Pdf.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/component/Pdf.tsx",
      lineNumber: 98,
      columnNumber: 2
    }, this),
    document && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Index, { document }, void 0, false, {
      fileName: "app/component/Pdf.tsx",
      lineNumber: 106,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/Pdf.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
};
_s2(PdfView, "h+1VcpYzBnTwvtajiCqKllsm1GQ=");
_c2 = PdfView;
var Pdf_default = PdfView;
var _c;
var _c2;
$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "PdfView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1706727793000";
}
function _index({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    "Hello ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pdf_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 70,
      columnNumber: 3
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 67,
    columnNumber: 2
  }, this);
}
export {
  _index as default
};
//# sourceMappingURL=/build/routes/_index-M2WMACMU.js.map
