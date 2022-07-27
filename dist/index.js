'use strict';
function n(n) {
  if (!n) return;
  if ('undefined' == typeof window) return;
  const a = document.createElement('style');
  return (
    a.setAttribute('type', 'text/css'),
    (a.innerHTML = n),
    document.head.appendChild(a),
    n
  );
}
var a = require('react/jsx-runtime'),
  o = require('classnames'),
  e = require('react'),
  r = require('react-lottie-player');
function t(n) {
  return n && 'object' == typeof n && 'default' in n ? n : {default: n};
}
var i,
  l,
  s,
  c,
  f,
  d,
  p = t(o),
  g = t(e),
  u = t(r),
  b = function () {
    return (
      (b =
        Object.assign ||
        function (n) {
          for (var a, o = 1, e = arguments.length; o < e; o++)
            for (var r in (a = arguments[o]))
              Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
          return n;
        }),
      b.apply(this, arguments)
    );
  };
function m(n, a, o, e) {
  return new (o || (o = Promise))(function (r, t) {
    function i(n) {
      try {
        s(e.next(n));
      } catch (n) {
        t(n);
      }
    }
    function l(n) {
      try {
        s(e.throw(n));
      } catch (n) {
        t(n);
      }
    }
    function s(n) {
      var a;
      n.done
        ? r(n.value)
        : ((a = n.value),
          a instanceof o
            ? a
            : new o(function (n) {
                n(a);
              })).then(i, l);
    }
    s((e = e.apply(n, a || [])).next());
  });
}
function y(n, a) {
  var o,
    e,
    r,
    t,
    i = {
      label: 0,
      sent: function () {
        if (1 & r[0]) throw r[1];
        return r[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (t = {next: l(0), throw: l(1), return: l(2)}),
    'function' == typeof Symbol &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function l(t) {
    return function (l) {
      return (function (t) {
        if (o) throw new TypeError('Generator is already executing.');
        for (; i; )
          try {
            if (
              ((o = 1),
              e &&
                (r =
                  2 & t[0]
                    ? e.return
                    : t[0]
                    ? e.throw || ((r = e.return) && r.call(e), 0)
                    : e.next) &&
                !(r = r.call(e, t[1])).done)
            )
              return r;
            switch (((e = 0), r && (t = [2 & t[0], r.value]), t[0])) {
              case 0:
              case 1:
                r = t;
                break;
              case 4:
                return i.label++, {value: t[1], done: !1};
              case 5:
                i.label++, (e = t[1]), (t = [0]);
                continue;
              case 7:
                (t = i.ops.pop()), i.trys.pop();
                continue;
              default:
                if (
                  !((r = i.trys),
                  (r = r.length > 0 && r[r.length - 1]) ||
                    (6 !== t[0] && 2 !== t[0]))
                ) {
                  i = 0;
                  continue;
                }
                if (3 === t[0] && (!r || (t[1] > r[0] && t[1] < r[3]))) {
                  i.label = t[1];
                  break;
                }
                if (6 === t[0] && i.label < r[1]) {
                  (i.label = r[1]), (r = t);
                  break;
                }
                if (r && i.label < r[2]) {
                  (i.label = r[2]), i.ops.push(t);
                  break;
                }
                r[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            t = a.call(n, i);
          } catch (n) {
            (t = [6, n]), (e = 0);
          } finally {
            o = r = 0;
          }
        if (5 & t[0]) throw t[1];
        return {value: t[0] ? t[1] : void 0, done: !0};
      })([t, l]);
    };
  }
}
function x(n, a, o) {
  if (o || 2 === arguments.length)
    for (var e, r = 0, t = a.length; r < t; r++)
      (!e && r in a) ||
        (e || (e = Array.prototype.slice.call(a, 0, r)), (e[r] = a[r]));
  return n.concat(e || Array.prototype.slice.call(a));
}
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.InviteToSign__container {\n  width: 100%;\n  min-height: 100vh;\n  background: var(--bananasign-color-soft-white);\n  top: 0;\n  left: 0;\n  z-index: -1;\n  position: absolute;\n  opacity: 0;\n  display: none;\n  visibility: hidden;\n  transition: visibility 0s linear 0.33s, opacity 0.4s linear;\n}\n\n.InviteToSign__container.open {\n  z-index: 1;\n  opacity: 1;\n  display: block;\n  visibility: visible;\n  transition-delay: 0s;\n}',
),
  n(
    ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.animate__animated {\n  animation: opt-animation 0.4s;\n  -moz-animation-fill-mode: initial;\n  -webkit-animation-fill-mode: initial;\n  animation-fill-mode: initial;\n}\n\n@-webkit-keyframes opt-animation {\n  0% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes opt-animation {\n  0% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes opt-animation {\n  0% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes opt-animation {\n  0% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.ModalBackdrop__container {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  position: fixed;\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.5);\n  animation: opt-animation-backdrop 1s;\n  -moz-animation-fill-mode: initial;\n  -webkit-animation-fill-mode: initial;\n  animation-fill-mode: initial;\n}\n\n@-webkit-keyframes opt-animation-backdrop {\n  0% {\n    opacity: 0.75;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes opt-animation-backdrop {\n  0% {\n    opacity: 0.75;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes opt-animation-backdrop {\n  0% {\n    opacity: 0.75;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opt-animation-backdrop {\n  0% {\n    opacity: 0.75;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.ModalWrapper__container {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  display: flex;\n  overflow: auto;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  /* width */\n  /* Handle */\n}\n.ModalWrapper__container ::-webkit-scrollbar {\n  width: 16px;\n}\n.ModalWrapper__container ::-webkit-scrollbar-thumb {\n  background-color: gray;\n  border: 5px solid transparent;\n  border-radius: 8px;\n  background-clip: padding-box;\n}',
  ),
  (function (n) {
    (n.FADE_IN = 'fadeIn'),
      (n.FADE_IN_UP = 'fadeInUp'),
      (n.FLASH = 'flash'),
      (n.HEART_BEAT = 'heartBeat'),
      (n.SLIDE_IN_LEFT = 'slideInLeft'),
      (n.SLIDE_IN_RIGHT = 'slideInRight'),
      (n.SLIDE_IN_UP = 'slideInUp'),
      (n.SWING = 'swing'),
      (n.ZOOM_IN = 'zoomIn');
  })(i || (i = {})),
  (function (n) {
    (n.FADE_OUT = 'fadeOut'),
      (n.SLIDE_OUT_LEFT = 'slideOutLeft'),
      (n.SLIDE_OUT_RIGHT = 'slideOutRight'),
      (n.SLIDE_OUT_UP = 'slideOutUp'),
      (n.ZOOM_OUT = 'zoomOut');
  })(l || (l = {})),
  (function (n) {
    (n.WARNING = 'warning'),
      (n.INFO = 'info'),
      (n.DANGER = 'danger'),
      (n.SUCCESS = 'success'),
      (n.CUSTOM = 'custom');
  })(s || (s = {})),
  (function (n) {
    (n.WARNING = 'WARNING'), (n.ADD_VIEWERS_SIGNERS = 'ADD_VIEWERS_SIGNERS');
  })(c || (c = {})),
  (function (n) {
    (n.OPEN = 'OPEN'), (n.CLOSE = 'CLOSE');
  })(f || (f = {})),
  (function (n) {
    (n.ONLY_ONE_SIGNER_IS_OWNER = 'ONLY_ONE_SIGNER_IS_OWNER'),
      (n.CANCEL_PROGRESS = 'CANCEL_PROGRESS');
  })(d || (d = {}));
var h = function (n, a) {
    switch (a.type) {
      case f.OPEN:
        return b(b({}, n), {
          componentProps: b(b({}, n.componentProps), a.payload),
        });
      case f.CLOSE:
        return b(b({}, n), {
          componentProps: b(b({}, n.componentProps), {modalName: void 0}),
        });
      default:
        return b({}, n);
    }
  },
  w = e.createContext([
    {
      showModal: function (n) {
        return null;
      },
      hideModal: function () {
        return null;
      },
    },
    function () {
      return {};
    },
  ]),
  v = w.Provider;
w.Consumer;
var _ = function (n) {
    var o = n.children,
      r = {
        componentProps: {
          type: s.CUSTOM,
          outAnimationType: l.FADE_OUT,
          animationType: i.FADE_IN,
        },
        showModal: function (n) {
          p(f.OPEN, b({}, n));
        },
        hideModal: function () {
          p(f.CLOSE);
        },
      },
      t = e.useReducer(h, r),
      c = t[0],
      d = t[1],
      p = e.useCallback(function (n) {
        for (var a = [], o = 1; o < arguments.length; o++)
          a[o - 1] = arguments[o];
        d({type: n, payload: a[0]});
      }, []);
    return a.jsx(v, b({value: [c, p]}, {children: o}));
  },
  C = function () {
    return e.useContext(w);
  };
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.BananasignIframe__container {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--bananasign-color-soft-white);\n}',
);
var k = 'SIGNER',
  D = 'VIEWER',
  I = 'GUEST',
  E = 'primary-yellow',
  M = 'tertiary',
  A = 'ONLY_ONE_SIGNER_IS_OWNER',
  N = 'CANCEL_PROGRESS',
  F = {
    loading: !1,
    isOpenAddAssignerModal: !1,
    signers: [],
    viewers: [],
    type: k,
    keyWordSearchContact: '',
    searchContacts: [],
    cancelAddAssigners: !1,
    openBananasignIframe: !1,
    onClose: function () {},
    bananasignUrl: '',
    bananasignBaseUrl: '',
    flowId: '',
    uploadDocumentUrl: '',
    isOpen: !1,
  },
  P = g.default.createContext({state: F, dispatch: function () {}}),
  j = 'SET_LOADING',
  B = 'SET_OPEN_ADD_ASSIGNER_MODAL',
  R = 'SET_SIGNERS',
  S = 'SET_VIEWERS',
  L = 'REMOVE_SIGNER',
  O = 'REMOVE_VIEWER',
  T = 'ADD_VIEWER',
  U = 'ADD_SIGNER',
  V = 'SET_WORD_SEARCH_CONTACT',
  H = 'SET_SEARCH_CONTACTS',
  z = 'SET_REQUEST_TYPE',
  G = 'CANCEL_ADD_ASSIGNERS',
  Z = 'CLOSE_AND_RESET_MODAL_SEARCH',
  W = 'OPEN_BANANASIGN_IFRAME',
  Y = 'SET_DOCUMENT_SIGNING',
  q = 'SET_OPENED_WIDGET',
  J = function (n) {
    return {type: q, payload: n};
  },
  Q = function (n) {
    return {type: j, payload: n};
  },
  X = function (n) {
    return {type: B, payload: n};
  },
  $ = function (n) {
    return {type: L, payload: n};
  },
  K = function (n) {
    return {type: O, payload: n};
  },
  nn = function (n) {
    return {type: V, payload: n};
  },
  an = function (n) {
    return {type: H, payload: n};
  },
  on = function (n) {
    return {type: T, payload: n};
  },
  en = function (n) {
    return {type: U, payload: n};
  },
  rn = function (n) {
    return {type: z, payload: n};
  },
  tn = function (n) {
    return {type: G, payload: n};
  },
  ln = function (n) {
    return {type: R, payload: n};
  },
  sn = function (n) {
    return {type: S, payload: n};
  },
  cn = function () {
    return {type: Z, payload: {}};
  },
  fn = function (n) {
    return {type: W, payload: n};
  },
  dn = function (n) {
    return {type: Y, payload: n};
  },
  pn = function () {
    var n = e.useContext(P),
      o = n.state,
      r = o.openBananasignIframe,
      t = o.onClose,
      i = o.bananasignUrl,
      l = o.flowId,
      s = n.dispatch,
      c = function (n) {
        if (n.origin === i)
          switch (n.data.type) {
            case 'close_task':
              s(fn(!1)), t();
              break;
            case 'back_step':
              s(fn(!1));
          }
      };
    return (
      e.useEffect(function () {
        return (
          window.addEventListener('message', c, !1),
          function () {
            window.removeEventListener('message', c);
          }
        );
      }, []),
      r && l
        ? a.jsx(
            'div',
            b(
              {className: 'BananasignIframe__container'},
              {
                children: a.jsx('iframe', {
                  width: '100%',
                  height: '100%',
                  src: ''.concat(i, '/embed/').concat(l),
                  title: 'Iframe Upload',
                  frameBorder: '0',
                  allow:
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                  id: 'bananaSignIframe',
                  onLoad: function () {
                    var n = document.getElementById('bananaSignIframe');
                    n && (n.style.visibility = 'visible'), s(Q(!1));
                  },
                  style: {visibility: 'hidden'},
                  allowFullScreen: !0,
                }),
              },
            ),
          )
        : null
    );
  },
  gn = e.memo(pn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.Footer__container {\n  display: inline-flex;\n  height: auto;\n  width: auto;\n  position: fixed;\n  bottom: 32px;\n  right: 36px;\n}\n.Footer__container h6 {\n  font-family: var(--bananasign-font-primary);\n  color: var(--bananasign-color-neutral-100);\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  margin: 0;\n}',
);
var un =
    'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.25151%205.46409C4.88581%205.93441%204.91906%206.61445%205.35124%207.04663L10.3049%2012L5.35114%2016.9533C4.88295%2017.4215%204.88295%2018.1806%205.35115%2018.6488L5.46409%2018.7485C5.93441%2019.1142%206.61444%2019.0809%207.04663%2018.6488L12%2013.695L16.9534%2018.6488C17.4216%2019.1169%2018.1807%2019.1169%2018.6489%2018.6488L18.7486%2018.5358C19.1143%2018.0655%2019.081%2017.3855%2018.6489%2016.9533L13.695%2012L18.6488%207.04663C19.1169%206.57843%2019.1169%205.81935%2018.6488%205.35115L18.5358%205.25141C18.0655%204.88572%2017.3855%204.91897%2016.9533%205.35115L12%2010.3037L7.04672%205.35114C6.57853%204.88295%205.81943%204.88295%205.35124%205.35114L5.25151%205.46409Z%22%20fill%3D%22%230C395B%22%2F%3E%3C%2Fsvg%3E',
  bn =
    'data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cpath%20d%3D%22M20.444%2017.111A5.556%205.556%200%200%201%2026%2022.667v2.222a2.222%202.222%200%200%201-2.222%202.222H8.222A2.222%202.222%200%200%201%206%2024.89v-2.222a5.556%205.556%200%200%201%205.556-5.556zM16%204.89a5%205%200%201%201%200%2010%205%205%200%200%201%200-10z%22%20fill%3D%22%23F7F6EC%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E',
  mn = {
    v: '5.7.2',
    fr: 29.9700012207031,
    ip: 0,
    op: 32.0000013033867,
    w: 600,
    h: 600,
    nm: 'Loading',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: 'Layer 1 Outlines',
        sr: 1,
        ks: {
          o: {a: 0, k: 100, ix: 11},
          r: {a: 0, k: 0, ix: 10},
          p: {a: 0, k: [300, 300, 0], ix: 2},
          a: {a: 0, k: [300, 300, 0], ix: 1},
          s: {a: 0, k: [100, 100, 100], ix: 6},
        },
        ao: 0,
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ind: 0,
                ty: 'sh',
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-4.418, 0],
                      [0, 0],
                      [0, -4.418],
                      [4.418, 0],
                      [0, 0],
                      [0, 4.419],
                    ],
                    o: [
                      [0, 0],
                      [4.418, 0],
                      [0, 4.419],
                      [0, 0],
                      [-4.418, 0],
                      [0, -4.418],
                    ],
                    v: [
                      [-37, -8],
                      [37, -8],
                      [45, 0],
                      [37, 8],
                      [-37, 8],
                      [-45, 0],
                    ],
                    c: !0,
                  },
                  ix: 2,
                },
                nm: 'Path 1',
                mn: 'ADBE Vector Shape - Group',
                hd: !1,
              },
              {
                ty: 'fl',
                c: {a: 0, k: [0.980000035903, 0.885999971278, 0, 1], ix: 4},
                o: {a: 0, k: 100, ix: 5},
                r: 1,
                bm: 0,
                nm: 'Fill 1',
                mn: 'ADBE Vector Graphic - Fill',
                hd: !1,
              },
              {
                ty: 'tr',
                p: {
                  a: 1,
                  k: [
                    {
                      i: {x: 0.833, y: 0.833},
                      o: {x: 0.167, y: 0.167},
                      t: 0,
                      s: [210, 389.796],
                      to: [30, 0],
                      ti: [0, 0],
                    },
                    {
                      i: {x: 0.833, y: 0.833},
                      o: {x: 0.167, y: 0.167},
                      t: 8,
                      s: [390, 389.796],
                      to: [0, 0],
                      ti: [0, 0],
                    },
                    {
                      i: {x: 0.833, y: 0.833},
                      o: {x: 0.167, y: 0.167},
                      t: 16,
                      s: [210, 389.796],
                      to: [0, 0],
                      ti: [0, 0],
                    },
                    {
                      i: {x: 0.833, y: 0.833},
                      o: {x: 0.167, y: 0.167},
                      t: 24,
                      s: [390, 389.796],
                      to: [0, 0],
                      ti: [0, 0],
                    },
                    {
                      i: {x: 0.833, y: 0.833},
                      o: {x: 0.167, y: 0.167},
                      t: 32,
                      s: [210, 389.796],
                      to: [0, 0],
                      ti: [-30, 0],
                    },
                    {t: 40.0000016292334, s: [390, 389.796]},
                  ],
                  ix: 2,
                },
                a: {a: 0, k: [0, 0], ix: 1},
                s: {a: 0, k: [100, 100], ix: 3},
                r: {a: 0, k: 0, ix: 6},
                o: {a: 0, k: 100, ix: 7},
                sk: {a: 0, k: 0, ix: 4},
                sa: {a: 0, k: 0, ix: 5},
                nm: 'Transform',
              },
            ],
            nm: 'Group 1',
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: 'ADBE Vector Group',
            hd: !1,
          },
          {
            ty: 'gr',
            it: [
              {
                ind: 0,
                ty: 'sh',
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-4.418, 0],
                      [0, 0],
                      [0, -4.418],
                      [4.418, 0],
                      [0, 0],
                      [0, 4.419],
                    ],
                    o: [
                      [0, 0],
                      [4.418, 0],
                      [0, 4.419],
                      [0, 0],
                      [-4.418, 0],
                      [0, -4.418],
                    ],
                    v: [
                      [-127, -8],
                      [127, -8],
                      [135, 0],
                      [127, 8],
                      [-127, 8],
                      [-135, 0],
                    ],
                    c: !0,
                  },
                  ix: 2,
                },
                nm: 'Path 1',
                mn: 'ADBE Vector Shape - Group',
                hd: !1,
              },
              {
                ty: 'fl',
                c: {
                  a: 0,
                  k: [0.894000004787, 0.894000004787, 0.898000021542, 1],
                  ix: 4,
                },
                o: {a: 0, k: 100, ix: 5},
                r: 1,
                bm: 0,
                nm: 'Fill 1',
                mn: 'ADBE Vector Graphic - Fill',
                hd: !1,
              },
              {
                ty: 'tr',
                p: {a: 0, k: [300, 389.796], ix: 2},
                a: {a: 0, k: [0, 0], ix: 1},
                s: {a: 0, k: [100, 100], ix: 3},
                r: {a: 0, k: 0, ix: 6},
                o: {a: 0, k: 100, ix: 7},
                sk: {a: 0, k: 0, ix: 4},
                sa: {a: 0, k: 0, ix: 5},
                nm: 'Transform',
              },
            ],
            nm: 'Group 2',
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: 'ADBE Vector Group',
            hd: !1,
          },
          {
            ty: 'gr',
            it: [
              {
                ind: 0,
                ty: 'sh',
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [-18.095, -4.389],
                      [-18.272, -2.992],
                      [-36.967, 0.644],
                      [-36.395, 6.388],
                      [-17.882, 4.882],
                      [-17.699, 5.95],
                      [0, 0],
                      [40.061, -13.393],
                      [42.391, -0.267],
                      [40.41, 12.6],
                      [32.398, 27.696],
                    ],
                    o: [
                      [17.794, 5.847],
                      [17.95, 4.773],
                      [36.497, 6.135],
                      [36.961, 0.377],
                      [18.216, -3.116],
                      [18.006, -4.499],
                      [0, 0],
                      [-32.023, 28.087],
                      [-40.219, 13.071],
                      [-42.391, 0.24],
                      [-40.268, -12.913],
                      [0, 0],
                    ],
                    v: [
                      [-217.783, -60.077],
                      [-164.148, -44.143],
                      [-109.783, -32.414],
                      [0.58, -23.355],
                      [110.794, -33.18],
                      [164.974, -45.259],
                      [218.336, -61.514],
                      [236, -19.185],
                      [125.63, 41.329],
                      [0.58, 61.275],
                      [-124.762, 42.807],
                      [-236, -16.391],
                    ],
                    c: !0,
                  },
                  ix: 2,
                },
                nm: 'Path 1',
                mn: 'ADBE Vector Shape - Group',
                hd: !1,
              },
              {
                ty: 'fl',
                c: {a: 0, k: [0.980000035903, 0.885999971278, 0, 1], ix: 4},
                o: {a: 0, k: 100, ix: 5},
                r: 1,
                bm: 0,
                nm: 'Fill 1',
                mn: 'ADBE Vector Graphic - Fill',
                hd: !1,
              },
              {
                ty: 'tr',
                p: {a: 0, k: [300, 264.514], ix: 2},
                a: {a: 0, k: [0, 0], ix: 1},
                s: {a: 0, k: [100, 100], ix: 3},
                r: {
                  a: 1,
                  k: [
                    {
                      i: {x: [0.833], y: [0.833]},
                      o: {x: [0.167], y: [0.167]},
                      t: 0,
                      s: [10],
                    },
                    {
                      i: {x: [0.833], y: [0.833]},
                      o: {x: [0.167], y: [0.167]},
                      t: 8,
                      s: [-10],
                    },
                    {
                      i: {x: [0.833], y: [0.833]},
                      o: {x: [0.167], y: [0.167]},
                      t: 16,
                      s: [10],
                    },
                    {
                      i: {x: [0.833], y: [0.833]},
                      o: {x: [0.167], y: [0.167]},
                      t: 24,
                      s: [-10],
                    },
                    {
                      i: {x: [0.833], y: [0.833]},
                      o: {x: [0.167], y: [0.167]},
                      t: 32,
                      s: [10],
                    },
                    {t: 40.0000016292334, s: [-10]},
                  ],
                  ix: 6,
                },
                o: {a: 0, k: 100, ix: 7},
                sk: {a: 0, k: 0, ix: 4},
                sa: {a: 0, k: 0, ix: 5},
                nm: 'Transform',
              },
            ],
            nm: 'Group 3',
            np: 2,
            cix: 2,
            bm: 0,
            ix: 3,
            mn: 'ADBE Vector Group',
            hd: !1,
          },
        ],
        ip: 0,
        op: 32.0000013033867,
        st: 0,
        bm: 0,
      },
    ],
    markers: [],
  },
  yn = 'undefined' != typeof window;
var xn = {
    isClientSide: yn,
    isMobile: function () {
      return yn && window.innerWidth < 640;
    },
    getAvatarName: function (n) {
      var a = '';
      n &&
        n.split(' ').length > 0 &&
        ((n.split(' ').length = 2),
        (a = (a = n.split(' ')[0].charAt(0)).toUpperCase()));
      return a;
    },
    capitalizeLetter: function (n) {
      return n
        .toLowerCase()
        .replace('_', ' ')
        .replace(/\b[a-z]/g, function (n) {
          return n.toUpperCase();
        });
    },
    validateEmail: function (n) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(n).toLowerCase(),
      );
    },
    debounce: function (n, a) {
      var o = null;
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        null !== o && (clearTimeout(o), (o = null)),
          (o = setTimeout(function () {
            return n.apply(void 0, e);
          }, a));
      };
    },
    serializeAssigners: function (n, a) {
      return n.map(function (n, o) {
        return b(b({}, n), {
          name: (null == n ? void 0 : n.name) || 'Guest User',
          isOwner: a === k && 0 === o,
          id: (null == n ? void 0 : n.id) || '',
          requestType: a,
          dueTimeExpired: 0,
        });
      });
    },
    compareArrayByElement: function (n, a, o) {
      return (
        n.length === a.length &&
        (o
          ? n.every(function (n) {
              return (
                a.findIndex(function (a) {
                  return n.email === a.email;
                }) > -1
              );
            })
          : n.every(function (n, o) {
              return n === a[o];
            }))
      );
    },
  },
  hn = function () {
    return xn.isMobile()
      ? null
      : a.jsxs(
          'div',
          b(
            {className: 'Footer__container'},
            {
              children: [
                a.jsx('h6', {children: 'Powered by '}),
                a.jsx('img', {
                  src: 'data:image/svg+xml,%3Csvg%20width%3D%2281%22%20height%3D%2216%22%20viewBox%3D%220%200%2081%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M58.2075%2012.9118H60.0942V5.90759H58.2075V12.9118Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cmask%20id%3D%22mask0_61_16895%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%222%22%20width%3D%229%22%20height%3D%2211%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%202.81726H8.18972V12.9369H0V2.81726Z%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask0_61_16895%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.01668%208.73005V11.1589L4.27921%2011.1661C5.39222%2011.1661%206.09352%2010.9058%206.09352%209.93704C6.09352%208.99033%205.39222%208.73005%204.27921%208.73005H2.01668ZM2.01668%204.59551V6.95923H4.08406C5.08868%206.95923%205.86952%206.74943%205.86952%205.76644C5.86952%204.8123%205.07425%204.59551%204.07685%204.59551H2.01668ZM4.13453%202.81726C6.49104%202.81726%207.97296%203.69185%207.97296%205.62199C7.97296%206.64103%207.35121%207.45794%206.50546%207.7687C7.43076%208.07946%208.18974%208.94684%208.18974%2010.0384C8.18974%2011.9828%206.80924%2012.9369%204.38039%2012.9369H0V2.81726H4.13453Z%22%20fill%3D%22%233180F1%22%2F%3E%3C%2Fg%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.0848%209.43118C11.0848%2010.5009%2011.7858%2011.3611%2012.8919%2011.3611C13.9688%2011.3611%2014.699%2010.5372%2014.699%209.43118C14.699%208.32515%2013.9688%207.50127%2012.8919%207.50127C11.7858%207.50127%2011.0848%208.36143%2011.0848%209.43118ZM16.4842%2012.937H14.641V12.1636C14.1858%2012.7272%2013.5062%2013.1177%2012.5448%2013.1177C10.6149%2013.1177%209.15485%2011.5346%209.15485%209.43118C9.15485%207.32775%2010.6149%205.74487%2012.5448%205.74487C13.5062%205.74487%2014.1786%206.13518%2014.641%206.706V5.93282H16.4842V12.937Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M24.4829%208.47715V12.9371H22.5962V9.08424C22.5962%208.07241%2022.0901%207.51579%2021.2299%207.51579C20.4204%207.51579%2019.7482%208.04334%2019.7482%209.09867V12.9371H17.8616V5.93269H19.6975V6.75681C20.1964%206.01224%2020.9624%205.74475%2021.7577%205.74475C23.3478%205.74475%2024.4829%206.85078%2024.4829%208.47715Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M27.6578%209.43118C27.6578%2010.5009%2028.3589%2011.3611%2029.4649%2011.3611C30.5419%2011.3611%2031.272%2010.5372%2031.272%209.43118C31.272%208.32515%2030.5419%207.50127%2029.4649%207.50127C28.3589%207.50127%2027.6578%208.36143%2027.6578%209.43118ZM33.0573%2012.937H31.2141V12.1636C30.7589%2012.7272%2030.0792%2013.1177%2029.1179%2013.1177C27.188%2013.1177%2025.7279%2011.5346%2025.7279%209.43118C25.7279%207.32775%2027.188%205.74487%2029.1179%205.74487C30.0792%205.74487%2030.7517%206.13518%2031.2141%206.706V5.93282H33.0573V12.937Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M41.1069%208.47715V12.9371H39.2202V9.08424C39.2202%208.07241%2038.7143%207.51579%2037.8539%207.51579C37.0445%207.51579%2036.3722%208.04334%2036.3722%209.09867V12.9371H34.4856V5.93269H36.3215V6.75681C36.8205%206.01224%2037.5864%205.74475%2038.3817%205.74475C39.972%205.74475%2041.1069%206.85078%2041.1069%208.47715Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M44.3086%209.43118C44.3086%2010.5009%2045.0097%2011.3611%2046.1157%2011.3611C47.1926%2011.3611%2047.9228%2010.5372%2047.9228%209.43118C47.9228%208.32515%2047.1926%207.50127%2046.1157%207.50127C45.0097%207.50127%2044.3086%208.36143%2044.3086%209.43118ZM49.708%2012.937H47.8649V12.1636C47.4094%2012.7272%2046.73%2013.1177%2045.7686%2013.1177C43.8387%2013.1177%2042.3787%2011.5346%2042.3787%209.43118C42.3787%207.32775%2043.8387%205.74487%2045.7686%205.74487C46.73%205.74487%2047.4024%206.13518%2047.8649%206.706V5.93282H49.708V12.937Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M56.3411%207.88448C55.7845%207.60977%2054.8954%207.32065%2054.1076%207.31321C53.3919%207.31321%2053.0304%207.56628%2053.0304%207.94938C53.0304%208.35411%2053.5363%208.45552%2054.1725%208.54949L54.7943%208.64347C56.3122%208.87468%2057.158%209.55411%2057.158%2010.7395C57.158%2012.1853%2055.9724%2013.1178%2053.9413%2013.1178C52.9869%2013.1178%2051.7365%2012.9369%2050.8258%2012.2937L51.5704%2010.8625C52.1703%2011.26%2052.9004%2011.5492%2053.9557%2011.5492C54.8303%2011.5492%2055.2495%2011.3035%2055.2495%2010.8914C55.2495%2010.5515%2054.8954%2010.3636%2054.0857%2010.248L53.5147%2010.1684C51.8956%209.94442%2051.0933%209.23614%2051.0933%208.04335C51.0933%206.60493%2052.2065%205.7522%2054.0497%205.7522C55.1701%205.7522%2056.0447%205.96155%2056.977%206.41699L56.3411%207.88448Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M63.2964%209.32279C63.2964%2010.3348%2063.9833%2011.1587%2065.06%2011.1587C66.1083%2011.1587%2066.8166%2010.3637%2066.8166%209.32279C66.8166%208.27468%2066.1083%207.47941%2065.06%207.47941C63.9833%207.47941%2063.2964%208.30375%2063.2964%209.32279ZM66.7517%206.71321V5.93282H68.6021V12.3587C68.6021%2014.6066%2067.1346%2015.9655%2064.8218%2015.9655C63.7155%2015.9655%2062.5446%2015.6764%2061.7568%2015.12L62.429%2013.5804C63.1301%2014.0428%2063.9035%2014.2959%2064.742%2014.2959C65.9129%2014.2959%2066.737%2013.6453%2066.737%2012.4381V11.9468C66.26%2012.532%2065.5517%2012.8935%2064.5831%2012.8935C62.8772%2012.8935%2061.359%2011.4695%2061.359%209.32279C61.359%207.16865%2062.8772%205.74487%2064.5831%205.74487C65.5589%205.74487%2066.2744%206.12076%2066.7517%206.71321Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M76.4645%208.47715V12.9371H74.5778V9.08424C74.5778%208.07241%2074.0719%207.51579%2073.2115%207.51579C72.4023%207.51579%2071.7298%208.04334%2071.7298%209.09867V12.9371H69.8432V5.93269H71.6794V6.75681C72.1781%206.01224%2072.9443%205.74475%2073.7393%205.74475C75.3296%205.74475%2076.4645%206.85078%2076.4645%208.47715Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cmask%20id%3D%22mask1_61_16895%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2277%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%224%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M77.5484%2010.3131H80.3531V13.1176H77.5484V10.3131Z%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask1_61_16895%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M80.3531%2011.708C80.3531%2012.4673%2079.7025%2013.1176%2078.9582%2013.1176C78.2062%2013.1176%2077.5484%2012.4673%2077.5484%2011.708C77.5484%2010.9565%2078.2062%2010.3131%2078.9582%2010.3131C79.7025%2010.3131%2080.3531%2010.9565%2080.3531%2011.708Z%22%20fill%3D%22%233180F1%22%2F%3E%3C%2Fg%3E%3Cmask%20id%3D%22mask2_61_16895%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2251%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%225%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M51.3651%200H66.937V4.04142H51.3651V0Z%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask2_61_16895%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M51.9661%200.0473239C52.5532%200.239775%2053.1386%200.427268%2053.7356%200.571718C54.3278%200.728789%2054.9264%200.859268%2055.5292%200.957747C56.7332%201.15966%2057.9506%201.27707%2059.1702%201.25589C60.3896%201.26828%2061.6056%201.14276%2062.8062%200.932507C63.4073%200.829972%2064.0038%200.695662%2064.5937%200.534986C65.1878%200.38693%2065.7703%200.195831%2066.3542%200L66.937%201.39313C65.8805%202.31752%2064.6174%202.944%2063.2957%203.38479C61.9688%203.81499%2060.5687%204.03245%2059.1702%204.04124C57.7717%204.04913%2056.3682%203.84811%2055.035%203.43347C53.7065%203.00845%2052.434%202.39662%2051.3651%201.48507L51.9661%200.0473239Z%22%20fill%3D%22%23FAE200%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                  alt: 'logo bananasign',
                }),
              ],
            },
          ),
        );
  },
  wn = e.memo(hn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.Header__container {\n  position: relative;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  height: 72px;\n  background-color: white;\n}\n@media (max-width: 639px) {\n  .Header__container {\n    justify-content: flex-start;\n  }\n}\n.Header__left {\n  margin-left: 24px;\n  cursor: pointer;\n}\n.Header__right {\n  display: flex;\n  align-items: center;\n  margin-right: 22px;\n}\n.Header__progressBar-container {\n  width: 60%;\n  z-index: 15;\n}\n.Header__progressBar-list {\n  margin: 0;\n}\n.Header__progressBar-list li {\n  list-style-type: none;\n  float: left;\n  width: 25%;\n  position: relative;\n  text-align: center;\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 16px;\n  color: var(--bananasign-color-other-11);\n}\n.Header__progressBar-list li::before {\n  content: " ";\n  line-height: 30px;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px;\n  background: var(--bananasign-color-blue);\n}\n.Header__progressBar-list li::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: var(--bananasign-color-primary-160);\n  top: 4px;\n  left: -50%;\n  z-index: -1;\n}\n.Header__progressBar-list li:first-child::after {\n  content: none;\n}\n.Header__progressBar-list li.active {\n  color: var(--bananasign-color-neutral-100);\n}\n.Header__progressBar-list li.active span {\n  position: absolute;\n  top: 25px;\n  left: 0;\n  right: 0;\n}\n.Header__progressBar-list li:not(:first-child) span {\n  position: absolute;\n  top: 25px;\n  text-align: center;\n  left: 0;\n  right: 0;\n}\n.Header__progressBar-list li.active::before {\n  border: 9px solid var(--bananasign-color-blue);\n  background: var(--bananasign-color-neutral-0);\n  margin-top: -10px;\n  transform: scale(1);\n  animation: ani-bounce 2s infinite;\n  box-shadow: 0 0 0 0 var(--bananasign-color-blue);\n  animation-delay: 0s, 1.5s;\n}\n.Header__progressBar-list li.active::after {\n  background: var(--bananasign-color-primary-160);\n}\n.Header__title-mobile {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--bananasign-color-neutral-100);\n  margin: 0;\n  margin-left: 16px;\n}\n\n@keyframes ani-bounce {\n  0% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(49, 128, 241, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 8px rgba(49, 128, 241, 0);\n  }\n  100% {\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(49, 128, 241, 0);\n  }\n}',
);
var vn = [
    {value: 'INVITE TO SIGN', className: 'active'},
    {value: 'ADD DUE DATE', className: ''},
    {value: 'PREPARE', className: ''},
    {value: 'REVIEW', className: ''},
  ],
  _n = function () {
    var n = e.useContext(P),
      o = xn.isMobile(),
      r = n.state.onClose,
      t = C()[0].showModal;
    return a.jsxs(
      'div',
      b(
        {
          onClick: function () {
            var n = {
              modalName: c.WARNING,
              settings: {type: d.CANCEL_PROGRESS, onConfirm: r},
            };
            t(n);
          },
          className: 'Header__container',
        },
        {
          children: [
            a.jsx(
              'div',
              b(
                {className: 'Header__left'},
                {
                  children: a.jsx('img', {
                    src: 'data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22%23F7F6EC%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.3761%2014.5534C14.0713%2014.9453%2014.099%2015.512%2014.4592%2015.8722L18.5872%2019.9999L14.4591%2024.1277C14.069%2024.5179%2014.069%2025.1505%2014.4591%2025.5406L14.5532%2025.6237C14.9452%2025.9284%2015.5119%2025.9007%2015.872%2025.5406L19.9998%2021.4125L24.1277%2025.5406C24.5178%2025.9307%2025.1504%2025.9307%2025.5406%2025.5406L25.6237%2025.4465C25.9284%2025.0546%2025.9007%2024.4878%2025.5406%2024.1277L21.4124%2019.9999L25.5405%2015.8722C25.9306%2015.482%2025.9306%2014.8494%2025.5405%2014.4593L25.4464%2014.3761C25.0545%2014.0714%2024.4877%2014.0991%2024.1276%2014.4592L19.9998%2018.5864L15.8721%2014.4592C15.4819%2014.0691%2014.8494%2014.0691%2014.4592%2014.4592L14.3761%2014.5534Z%22%20fill%3D%22%2350677A%22%2F%3E%3C%2Fsvg%3E',
                  }),
                },
              ),
            ),
            o &&
              a.jsx(
                'h2',
                b(
                  {className: 'Header__title-mobile'},
                  {children: 'Invite to sign'},
                ),
              ),
            o
              ? null
              : a.jsx(
                  'div',
                  b(
                    {className: 'Header__progressBar-container'},
                    {
                      children: a.jsx(
                        'ul',
                        b(
                          {className: 'Header__progressBar-list'},
                          {
                            children: vn.map(function (n) {
                              return a.jsx(
                                'li',
                                b(
                                  {className: ''.concat(n.className)},
                                  {
                                    children: a.jsx('span', {
                                      children: n.value,
                                    }),
                                  },
                                ),
                                n.value,
                              );
                            }),
                          },
                        ),
                      ),
                    },
                  ),
                ),
            o
              ? null
              : a.jsx(
                  'div',
                  b(
                    {className: 'Header__right'},
                    {
                      children: a.jsx('img', {
                        src: 'data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2232%22%20viewBox%3D%220%200%2060%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.9496%2025.8173H18.7674V11.7059H14.9496V25.8173Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.1601%2015.6883C10.0337%2015.1349%208.23482%2014.5525%206.64046%2014.5379C5.19223%2014.5379%204.46095%2015.0474%204.46095%2015.8192C4.46095%2016.635%205.4848%2016.8386%206.77211%2017.0281L8.03002%2017.2174C11.1013%2017.6832%2012.813%2019.0523%2012.813%2021.4405C12.813%2024.3532%2010.414%2026.2318%206.304%2026.2318C4.37318%2026.2318%201.84259%2025.8676%200%2024.5715L1.50629%2021.688C2.72046%2022.4893%204.19794%2023.0717%206.33295%2023.0717C8.10301%2023.0717%208.95131%2022.5767%208.95131%2021.7466C8.95131%2021.0618%208.23482%2020.6833%206.59642%2020.4502L5.44107%2020.2902C2.16472%2019.8385%200.541105%2018.4115%200.541105%2016.0085C0.541105%2013.1107%202.79375%2011.3922%206.52312%2011.3922C8.79055%2011.3922%2010.5603%2011.8143%2012.4471%2012.7321L11.1601%2015.6883Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M25.2468%2018.5863C25.2468%2020.6251%2026.6364%2022.2854%2028.8156%2022.2854C30.9366%2022.2854%2032.37%2020.6832%2032.37%2018.5863C32.37%2016.4746%2030.9366%2014.8727%2028.8156%2014.8727C26.6364%2014.8727%2025.2468%2016.533%2025.2468%2018.5863ZM32.2384%2013.3291V11.7564H35.9828V24.7031C35.9828%2029.2318%2033.0135%2031.9696%2028.333%2031.9696C26.095%2031.9696%2023.7257%2031.3872%2022.1314%2030.2658L23.4914%2027.1638C24.9104%2028.0958%2026.4755%2028.6056%2028.1719%2028.6056C30.5414%2028.6056%2032.2088%2027.2949%2032.2088%2024.8628V23.873C31.2436%2025.0524%2029.8102%2025.7805%2027.8504%2025.7805C24.3985%2025.7805%2021.3267%2022.9114%2021.3267%2018.5864C21.3267%2014.2464%2024.3985%2011.3779%2027.8504%2011.3779C29.8249%2011.3779%2031.2729%2012.1351%2032.2384%2013.3291Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M51.98%2016.8826V25.8678H48.1621V18.1058C48.1621%2016.0671%2047.1386%2014.9459%2045.3978%2014.9459C43.7598%2014.9459%2042.3994%2016.0085%2042.3994%2018.1349V25.8678H38.5816V11.7564H42.297V13.4164C43.3062%2011.9166%2044.8565%2011.3779%2046.4656%2011.3779C49.6835%2011.3779%2051.98%2013.6057%2051.98%2016.8826Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M59.3445%2023.1611C59.3445%2024.5913%2058.1134%2025.8172%2056.7042%2025.8172C55.2815%2025.8172%2054.0367%2024.5913%2054.0367%2023.1611C54.0367%2021.7449%2055.2815%2020.5326%2056.7042%2020.5326C58.1134%2020.5326%2059.3445%2021.7449%2059.3445%2023.1611Z%22%20fill%3D%22%233180F1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.69208%200.0930649C3.8514%200.471863%205.00751%200.840169%206.18587%201.12408C7.3557%201.43323%208.53742%201.68931%209.72797%201.88304C12.1056%202.28009%2014.5098%202.51062%2016.9179%202.46941C19.3258%202.49374%2021.7269%202.24679%2024.0981%201.83362C25.2853%201.63198%2026.4626%201.36799%2027.6279%201.05185C28.801%200.760638%2029.9518%200.385185%2031.1044%200L32.2551%202.73933C30.1685%204.55668%2027.6748%205.78812%2025.0644%206.65475C22.4445%207.50069%2019.6797%207.92846%2016.9179%207.94564C14.156%207.961%2011.3847%207.56578%208.75227%206.75085C6.12888%205.91479%203.61597%204.71194%201.50488%202.91983L2.69208%200.0930649Z%22%20fill%3D%22%23FAE200%22%2F%3E%3C%2Fsvg%3E',
                      }),
                    },
                  ),
                ),
          ],
        },
      ),
    );
  },
  Cn = e.memo(_n);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.InviteUser__container {\n  display: flex;\n  flex-direction: column;\n  width: 65%;\n  height: auto;\n  border-radius: 8px;\n  padding: 40px 24px;\n  margin: 0 auto;\n}\n@media (min-width: 640px) and (max-width: 1023px) {\n  .InviteUser__container {\n    width: 91.7%;\n    min-height: 453px;\n    padding-bottom: 100px;\n    margin-top: 24px 0;\n    padding-left: 16px;\n  }\n}\n@media (max-width: 639px) {\n  .InviteUser__container {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 0;\n  }\n}\n.InviteUser__container .InviteUser__wrapper-add-button {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  text-transform: none;\n  color: var(--bananasign-color-neutral-100);\n  border-radius: 8px;\n  border: 1.5px solid var(--bananasign-color-neutral-100);\n  background: var(--bananasign-color-neutral-0);\n  padding: 5px 30px;\n}\n.InviteUser__container .InviteUser__wrapper-add-button span {\n  margin-left: 8px;\n}\n@media (max-width: 639px) {\n  .InviteUser__container .InviteUser__wrapper-add-button {\n    width: calc(100% - 32px);\n    margin: 10px 16px;\n  }\n}\n.InviteUser__title {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  color: var(--bananasign-color-neutral-100);\n  margin: 0;\n}\n.InviteUser__wrapper {\n  background: white;\n  display: grid;\n  grid-template-columns: auto 2fr;\n  gap: 32px 24px;\n  height: auto;\n  border-radius: 8px;\n  padding: 24px 24px 24px 80px;\n  margin-top: 16px;\n  animation: zoom-out 0.5s ease;\n}\n@media (min-width: 640px) and (max-width: 1023px) {\n  .InviteUser__wrapper {\n    padding: 24px 24px 24px 53px;\n  }\n}\n@media (max-width: 639px) {\n  .InviteUser__wrapper {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    border-radius: unset;\n    gap: unset;\n    padding-bottom: 48px;\n  }\n}\n@keyframes zoom-out {\n  0% {\n    transform: scale(0, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n.InviteUser__wrapper-title {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  color: var(--bananasign-color-neutral-100);\n  font-size: 16px;\n  margin: 0;\n}\n.InviteUser__wrapper-title span {\n  color: red;\n}\n@media (max-width: 639px) {\n  .InviteUser__wrapper-title {\n    padding: 4px 16px;\n    background-color: var(--bananasign-color-soft-white);\n    font-size: 16px;\n  }\n}\n.InviteUser__wrapper-add-user {\n  width: 80%;\n}\n@media (min-width: 640px) and (max-width: 1023px) {\n  .InviteUser__wrapper-add-user {\n    width: 100%;\n  }\n}\n@media (max-width: 639px) {\n  .InviteUser__wrapper-add-user {\n    width: 100%;\n  }\n}\n.InviteUser__wrapper-user-list {\n  overflow: overlay;\n  max-height: 250px;\n  border-bottom: solid 1px var(--bananasign-color-primary-230);\n  margin-bottom: 12px;\n}\n.InviteUser__wrapper-user-list.hide_border {\n  border-bottom: none;\n}\n.InviteUser__next-button {\n  font-size: 16px;\n  line-height: 24px;\n  text-transform: none;\n  color: var(--bananasign-color-neutral-100);\n  border-radius: 8px;\n  background: var(--bananasign-color-warning-40);\n  text-align: center;\n  height: 48px;\n  width: 200px;\n  grid-column: 2;\n  margin-left: auto;\n  float: right;\n  right: 5px;\n}\n.InviteUser__next-button:hover {\n  background: var(--bananasign-color-warning-40);\n  opacity: 0.8;\n}\n@media (max-width: 639px) {\n  .InviteUser__container .InviteUser__next-button {\n    width: calc(100% - 32px);\n    left: 16px;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: auto;\n    margin-left: 0;\n    min-height: 44px;\n    margin-bottom: 24px;\n  }\n}',
),
  n(
    ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.Button__Container {\n  box-sizing: border-box;\n  appearance: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  font-family: var(--bananasign-font-primary-bold);\n  color: var(--bananasign-color-neutral-100);\n  line-height: 1.5;\n  padding: 12px 24px;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  display: flex;\n  justify-content: center;\n}\n.Button__Container.button-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.Button__Container.primary-blue {\n  background: var(--bananasign-color-blue);\n  color: white;\n}\n.Button__Container.primary-blue:hover {\n  background: var(--bananasign-color-blue-160);\n}\n.Button__Container.primary-blue.button-disabled {\n  background: var(--bananasign-color-blue-120);\n}\n.Button__Container.primary-yellow {\n  background: var(--bananasign-color-yellow);\n}\n.Button__Container.primary-yellow:hover {\n  background: var(--bananasign-color-yellow-60);\n}\n.Button__Container.primary-yellow.button-disabled {\n  background: var(--bananasign-color-yellow-10);\n  color: var(--bananasign-color-primary-260);\n}\n.Button__Container.secondary {\n  background: white;\n  border: 1.5px solid var(--bananasign-color-neutral-100);\n}\n.Button__Container.secondary:hover {\n  background: var(--bananasign-color-primary-350);\n}\n.Button__Container.secondary.button-disabled {\n  border: 1.5px solid var(--bananasign-color-primary-240);\n  color: var(--bananasign-color-primary-240);\n}\n.Button__Container.tertiary {\n  background: var(--bananasign-color-primary-220);\n}\n.Button__Container.tertiary:hover {\n  background: var(--bananasign-color-primary-230);\n}\n.Button__Container.tertiary.button-disabled {\n  color: var(--bananasign-color-primary-240);\n}\n\n.Button__Icon {\n  height: 24px;\n  width: 24px;\n  margin-right: 8px;\n}\n.Button__Icon img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.Button__ripple {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  background: #ffff;\n  opacity: 0.1;\n  display: block;\n  content: "";\n  border-radius: 9999px;\n  opacity: 1;\n  animation: 0.9s ease 1 forwards ripple-effect;\n}\n\n@keyframes ripple-effect {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(10);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(35);\n    opacity: 0;\n  }\n}',
  );
var kn = function (n) {
    var o = n.className,
      e = n.title,
      r = n.children,
      t = n.icon,
      i = n.disabled,
      l = n.onClick,
      s = n.style,
      c = n.isRippleEffect,
      f = n.buttonType,
      d = (function (n) {
        if (n) {
          var a = g.default.useState({x: -1, y: -1}),
            o = a[0],
            e = a[1],
            r = g.default.useState(!1),
            t = r[0],
            i = r[1];
          return (
            g.default.useEffect(
              function () {
                -1 !== o.x && -1 !== o.y
                  ? (i(!0),
                    setTimeout(function () {
                      return i(!1);
                    }, 300))
                  : i(!1);
              },
              [o],
            ),
            g.default.useEffect(
              function () {
                t || e({x: -1, y: -1});
              },
              [t],
            ),
            {setCoords: e, coords: o, isRippling: t}
          );
        }
      })(c || !0);
    return a.jsxs(
      'button',
      b(
        {
          className: p.default(''.concat(o, ' Button__Container ').concat(f), {
            'button-disabled': i,
          }),
          onClick: function (n) {
            if (c) {
              var a = n.target.getBoundingClientRect();
              null == d ||
                d.setCoords({x: n.clientX - a.left, y: n.clientY - a.top});
            }
            l && l();
          },
          style: s,
          disabled: i,
        },
        {
          children: [
            c &&
              (null == d ? void 0 : d.isRippling) &&
              a.jsx('span', {
                className: 'Button__ripple',
                style: {
                  left: null == d ? void 0 : d.coords.x,
                  top: null == d ? void 0 : d.coords.y,
                },
              }),
            t &&
              a.jsx(
                'div',
                b(
                  {className: 'Button__Icon'},
                  {children: a.jsx('img', {src: t, alt: 'icon button'})},
                ),
              ),
            e,
            r,
          ],
        },
      ),
    );
  },
  Dn = e.memo(kn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.AssignerItem__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 12px;\n}\n.AssignerItem__container.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.AssignerItem__wrapper {\n  display: flex;\n  align-items: center;\n}\n.AssignerItem__wrapper .Avatar__wrapper .AssignerItem__wrapper-avatar {\n  width: 32px;\n  height: 32px;\n  border: 1.6px solid var(--bananasign-color-primary-350);\n}\n.AssignerItem__wrapper-name {\n  font-family: var(--bananasign-font-primary);\n  color: var(--bananasign-color-neutral-100);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  align-items: center;\n  margin-left: 4px;\n}\n.AssignerItem__wrapper-name p {\n  margin: 0;\n}\n.AssignerItem__wrapper-name :nth-child(2) {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--bananasign-color-other-1);\n}\n.AssignerItem__delete-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n}\n.AssignerItem__delete-button:hover {\n  cursor: pointer;\n  background: var(--bananasign-color-primary-350);\n}\n.AssignerItem__delete-button .AssignerItem__tooltip {\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bananasign-color-neutral-100);\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 500;\n  font-family: var(--bananasign-font-primary);\n  color: white;\n  border: none;\n  display: inline-block;\n  left: -999em;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n  position: absolute;\n}\n@media (max-width: 639px) {\n  .AssignerItem__delete-button .AssignerItem__tooltip {\n    display: none;\n  }\n}\n.AssignerItem__delete-button:hover .AssignerItem__tooltip.place-bottom {\n  opacity: 1;\n  margin-left: 0;\n  visibility: visible;\n}\n.AssignerItem__delete-button .AssignerItem__tooltip.place-bottom {\n  margin-top: 10px;\n}\n.AssignerItem__delete-button .AssignerItem__tooltip::after,\n.AssignerItem__delete-button .AssignerItem__tooltip::before {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.AssignerItem__delete-button .AssignerItem__tooltip.place-bottom::before {\n  border-bottom: 8px solid transparent;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.AssignerItem__delete-button .AssignerItem__tooltip.place-bottom::after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  top: -6px;\n  left: 50%;\n  margin-left: -8px;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.AssignerItem__user-info-text--added {\n  font-family: var(--bananasign-font-primary);\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: 500;\n  color: var(--bananasign-color-secondary-50);\n}',
),
  n(
    ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.Avatar__container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--bananasign-color-neutral-100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--bananasign-color-primary-350);\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n.Avatar__container img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.Avatar__container .Avatar__default-user {\n  width: 26px;\n  height: 26px;\n}\n\n.Avatar__name {\n  font-size: 16px;\n  line-height: 24px;\n  font-family: var(--bananasign-font-primary);\n  font-weight: bold;\n  font-style: normal;\n  color: white;\n}\n\n.Avatar__wrapper {\n  position: relative;\n  margin-right: 8px;\n}',
  );
var In = function (n) {
  var o = n.className,
    r = n.user,
    t = n.style,
    i = 'Guest User' === r.name,
    l = 'Deleted' === r.name,
    s = e.useMemo(
      function () {
        return i || l
          ? a.jsx('img', {
              className: 'Avatar__default-user',
              src: bn,
              alt: 'user default',
            })
          : a.jsx(
              'span',
              b(
                {className: 'Avatar__name'},
                {
                  children: xn.getAvatarName(
                    (null == r ? void 0 : r.name) || '',
                  ),
                },
              ),
            );
      },
      [null == r ? void 0 : r.name],
    ),
    c = e.useMemo(
      function () {
        return a.jsx('img', {
          src: r.avatarRemoteId,
          alt: 'user avatar',
          onError: function (n) {
            var a = n.currentTarget;
            (a.onerror = null), (a.src = bn), (a.style.padding = '4px');
          },
        });
      },
      [null == r ? void 0 : r.avatarRemoteId],
    );
  return a.jsx(
    'div',
    b(
      {className: 'Avatar__wrapper'},
      {
        children: a.jsx(
          'div',
          b(
            {style: t, className: p.default('Avatar__container '.concat(o))},
            {
              children:
                ((null == r ? void 0 : r.avatarRemoteId) && c) ||
                ((null == r ? void 0 : r.name) && s) ||
                null,
            },
          ),
        ),
      },
    ),
  );
};
In.defaultProps = {classNames: '', style: {}};
var En = e.memo(In),
  Mn = {signer: 'Change my role to viewer', viewer: 'Change my role to signer'},
  An = function (n) {
    var o = xn.isMobile(),
      r = n.user,
      t = n.className,
      i = n.showIconTrash,
      l = n.onClick,
      s = n.onRemoveUser,
      c = n.role,
      f = n.disabled,
      d = e.useContext(P).state.isOpen,
      g = 'Guest User' === (null == r ? void 0 : r.name),
      u = null == r ? void 0 : r.isOwner,
      m = u ? Mn[c] || 'signer' : 'Remove '.concat(c),
      y = e.useState({top: 0, left: 0}),
      x = y[0],
      h = y[1],
      w = e.useRef(null),
      v = document.querySelector('.signers-list'),
      _ = {viewer: document.querySelector('.viewers-list'), signer: v};
    return (
      e.useEffect(
        function () {
          var n = _[c || 'viewer'],
            a = function () {
              var a,
                o =
                  null === (a = null == w ? void 0 : w.current) || void 0 === a
                    ? void 0
                    : a.getBoundingClientRect(),
                e = null == o ? void 0 : o.x,
                r = n.getBoundingClientRect(),
                t = (null == o ? void 0 : o.bottom) || 0,
                i = Math.min(r.bottom, t);
              h({left: e - (u ? 75 : 35), top: i});
            };
          return (
            null == n || n.addEventListener('scroll', a),
            null == n || n.addEventListener('transitionstart', a),
            function () {
              null == n || n.removeEventListener('scroll', a),
                null == n || n.removeEventListener('transitionstart', a);
            }
          );
        },
        [w, c, d],
      ),
      a.jsxs(
        'div',
        b(
          {
            onClick: function () {
              l && 'function' == typeof l && l(r);
            },
            className: p.default('AssignerItem__container '.concat(t), {
              disabled: f,
            }),
          },
          {
            children: [
              a.jsxs(
                'div',
                b(
                  {className: 'AssignerItem__wrapper'},
                  {
                    children: [
                      a.jsx(En, {
                        user: r,
                        className: 'AssignerItem__wrapper-avatar',
                      }),
                      a.jsxs(
                        'div',
                        b(
                          {className: 'AssignerItem__wrapper-name'},
                          {
                            children: [
                              a.jsxs('p', {
                                children: [
                                  g ? 'Guest User' : r.name,
                                  ' ',
                                  u && '(Owner)',
                                ],
                              }),
                              a.jsx('p', {children: r.email}),
                            ],
                          },
                        ),
                      ),
                    ],
                  },
                ),
              ),
              i &&
                a.jsxs(
                  'div',
                  b(
                    {
                      ref: w,
                      onClick: function () {
                        s && 'function' == typeof s && s(r);
                      },
                      'data-tip': m,
                      className: 'AssignerItem__delete-button',
                    },
                    {
                      children: [
                        a.jsx('img', {
                          src: u
                            ? 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%204C0%201.79086%201.79086%200%204%200H20C22.2091%200%2024%201.79086%2024%204V20C24%2022.2091%2022.2091%2024%2020%2024H4C1.79086%2024%200%2022.2091%200%2020V4Z%22%2F%3E%3Cpath%20d%3D%22M15.5059%204.32746C15.1805%204.00201%2014.6528%204.00201%2014.3274%204.32745C14.002%204.65288%2014.002%205.18052%2014.3274%205.50596L14.9849%206.16351H10.3333C7.11168%206.16351%204.5%208.77517%204.5%2011.9968V12.8302C4.5%2013.2904%204.8731%2013.6635%205.33333%2013.6635C5.79357%2013.6635%206.16667%2013.2904%206.16667%2012.8302V11.9968C6.16667%209.69565%208.03215%207.83017%2010.3333%207.83017H14.9888L14.3274%208.49164C14.002%208.81708%2014.002%209.34472%2014.3274%209.67016C14.6528%209.99559%2015.1805%209.99558%2015.5059%209.67015L17.2933%207.88267C17.7815%207.39451%2017.7815%206.60306%2017.2933%206.11491L15.5059%204.32746Z%22%20fill%3D%22%2350677A%22%2F%3E%3Cpath%20d%3D%22M13.6655%2017.8334C16.8871%2017.8334%2019.4988%2015.2217%2019.4988%2012V11.1667C19.4988%2010.7065%2019.1257%2010.3334%2018.6655%2010.3334C18.2053%2010.3334%2017.8321%2010.7065%2017.8321%2011.1667V12C17.8321%2014.3012%2015.9667%2016.1667%2013.6655%2016.1667H9.00992L9.67143%2015.5052C9.99686%2015.1797%209.99686%2014.6521%209.67142%2014.3267C9.34598%2014.0012%208.81834%2014.0012%208.4929%2014.3267L6.70547%2016.1141C6.21732%2016.6023%206.21732%2017.3938%206.70547%2017.8819L8.49291%2019.6694C8.81834%2019.9948%209.34598%2019.9948%209.67142%2019.6694C9.99686%2019.344%209.99686%2018.8163%209.67143%2018.4909L9.01394%2017.8334H13.6655Z%22%20fill%3D%22%2350677A%22%2F%3E%3C%2Fsvg%3E'
                            : 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5%206.16666C4.5%206.62689%204.8731%206.99999%205.33333%206.99999H18.6667C19.1269%206.99999%2019.5%206.62689%2019.5%206.16666C19.5%205.70642%2019.1269%205.33332%2018.6667%205.33332H16.0244C15.6813%204.36233%2014.7552%203.66666%2013.6667%203.66666H10.3333C9.24482%203.66666%208.31878%204.36233%207.97559%205.33332H5.33333C4.8731%205.33332%204.5%205.70642%204.5%206.16666ZM5.33333%209.49999C5.33333%209.03976%205.70643%208.66666%206.16667%208.66666H17.8333C18.2936%208.66666%2018.6667%209.03976%2018.6667%209.49999V17.8333C18.6667%2019.2141%2017.5474%2020.3333%2016.1667%2020.3333H7.83333C6.45263%2020.3333%205.33333%2019.2141%205.33333%2017.8333V9.49999ZM10.3333%2012C10.3333%2011.5397%209.96023%2011.1667%209.5%2011.1667C9.03977%2011.1667%208.66667%2011.5397%208.66667%2012V17C8.66667%2017.4602%209.03977%2017.8333%209.5%2017.8333C9.96023%2017.8333%2010.3333%2017.4602%2010.3333%2017V12ZM15.3333%2012C15.3333%2011.5397%2014.9602%2011.1667%2014.5%2011.1667C14.0397%2011.1667%2013.6667%2011.5397%2013.6667%2012V17C13.6667%2017.4602%2014.0397%2017.8333%2014.5%2017.8333C14.9602%2017.8333%2015.3333%2017.4602%2015.3333%2017V12Z%22%20fill%3D%22%2350677A%22%2F%3E%3C%2Fsvg%3E',
                          alt: 'delete icon',
                        }),
                        !o &&
                          a.jsx(
                            'div',
                            b(
                              {
                                className: 'AssignerItem__tooltip place-bottom',
                                style: {
                                  top: ''.concat(x.top, 'px'),
                                  left: ''.concat(x.left, 'px'),
                                },
                              },
                              {children: m},
                            ),
                          ),
                      ],
                    },
                  ),
                ),
              f &&
                a.jsx(
                  'span',
                  b(
                    {className: 'AssignerItem__user-info-text--added'},
                    {children: 'Added'},
                  ),
                ),
            ],
          },
        ),
      )
    );
  };
An.defaultProps = {
  className: '',
  showIconTrash: !0,
  onClick: function () {},
  role: 'viewer',
  disabled: !1,
};
var Nn = e.memo(An),
  Fn = function () {
    var n = xn.isMobile(),
      o = e.useContext(P),
      r = o.state,
      t = r.signers,
      i = r.viewers,
      l = r.isOpenAddAssignerModal,
      s = r.cancelAddAssigners,
      f = r.loading,
      d = r.flowId,
      g = r.bananasignBaseUrl,
      u = o.dispatch,
      h = e.useState([]),
      w = h[0],
      v = h[1],
      _ = e.useState([]),
      I = _[0],
      E = _[1],
      M = C()[0].showModal;
    e.useEffect(
      function () {
        l || (s ? (u(ln(w)), u(sn(I)), u(tn(!1))) : (v(t), E(i)));
      },
      [l, t, i],
    );
    var A = function (n) {
        var a = {modalName: c.ADD_VIEWERS_SIGNERS};
        M(a), u(rn(n)), u(X(!0));
      },
      N = function (n) {
        u($(n)), (null == n ? void 0 : n.isOwner) && u(sn(x([n], i, !0)));
      },
      F = function (n) {
        u(K(n)), (null == n ? void 0 : n.isOwner) && u(ln(x([n], t, !0)));
      };
    return a.jsxs(
      'div',
      b(
        {className: 'InviteUser__container'},
        {
          children: [
            !n &&
              a.jsx(
                'h1',
                b(
                  {className: 'InviteUser__title'},
                  {children: 'Invite people'},
                ),
              ),
            a.jsxs(
              'div',
              b(
                {className: 'InviteUser__wrapper'},
                {
                  children: [
                    a.jsxs(
                      'h2',
                      b(
                        {className: 'InviteUser__wrapper-title'},
                        {
                          children: [
                            'Who needs to Sign?',
                            a.jsx('span', {children: ' *'}),
                          ],
                        },
                      ),
                    ),
                    a.jsxs(
                      'div',
                      b(
                        {className: 'InviteUser__wrapper-add-user'},
                        {
                          children: [
                            a.jsx(
                              'div',
                              b(
                                {
                                  className: p.default(
                                    'InviteUser__wrapper-user-list signers-list',
                                    {hide_border: !w.length},
                                  ),
                                },
                                {
                                  children: w.map(function (n, o) {
                                    return a.jsx(
                                      Nn,
                                      {
                                        user: n,
                                        onRemoveUser: N,
                                        role: 'signer',
                                      },
                                      (null == n ? void 0 : n.email) + '' + o,
                                    );
                                  }),
                                },
                              ),
                            ),
                            a.jsx(Dn, {
                              onClick: function () {
                                return A(k);
                              },
                              className: 'InviteUser__wrapper-add-button',
                              isRippleEffect: !0,
                              title: 'Add Signer',
                              icon: 'data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M19.0029%204.91075L17.8244%203.73223C16.8481%202.75592%2015.2652%202.75592%2014.2888%203.73223L13.4678%204.55331C13.1423%204.87874%2013.1423%205.40638%2013.4678%205.73181L17.0033%209.26731C17.3287%209.59281%2017.8564%209.59281%2018.1818%209.26731L19.0029%208.44628C19.9792%207.46997%2019.9792%205.88706%2019.0029%204.91075ZM5.49723%2018.2185L9.91665%2017.3346C10.078%2017.3023%2010.2261%2017.2231%2010.3425%2017.1067L15.884%2011.5651C16.2094%2011.2397%2016.2094%2010.7121%2015.884%2010.3866L12.3484%206.85112C12.023%206.52569%2011.4953%206.52569%2011.1699%206.85113L5.62843%2012.3926C5.5121%2012.509%205.4328%2012.6571%205.40053%2012.8185L4.51665%2017.2379C4.40003%2017.821%204.91413%2018.3351%205.49723%2018.2185ZM5.25%2019.5C4.83579%2019.5%204.5%2019.8358%204.5%2020.25C4.5%2020.6642%204.83579%2021%205.25%2021H19.75C20.1642%2021%2020.5%2020.6642%2020.5%2020.25C20.5%2019.8358%2020.1642%2019.5%2019.75%2019.5H5.25Z%22%20fill%3D%22%230C395B%22%2F%3E%3C%2Fsvg%3E',
                            }),
                          ],
                        },
                      ),
                    ),
                    a.jsx(
                      'h2',
                      b(
                        {className: 'InviteUser__wrapper-title'},
                        {children: 'Who needs to View?'},
                      ),
                    ),
                    a.jsxs(
                      'div',
                      b(
                        {className: 'InviteUser__wrapper-add-user'},
                        {
                          children: [
                            a.jsx(
                              'div',
                              b(
                                {
                                  className: p.default(
                                    'InviteUser__wrapper-user-list viewers-list',
                                    {hide_border: !I.length},
                                  ),
                                },
                                {
                                  children: I.map(function (n, o) {
                                    return a.jsx(
                                      Nn,
                                      {
                                        user: n,
                                        onRemoveUser: F,
                                        role: 'viewer',
                                      },
                                      (null == n ? void 0 : n.email) + '' + o,
                                    );
                                  }),
                                },
                              ),
                            ),
                            a.jsx(Dn, {
                              onClick: function () {
                                return A(D);
                              },
                              className: 'InviteUser__wrapper-add-button',
                              isRippleEffect: !0,
                              title: 'Add Viewer',
                              icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.0001%2017.8327C16.3459%2017.8327%2018.8417%2014.595%2019.8319%2012.9438C20.1838%2012.357%2020.1838%2011.6417%2019.8319%2011.0548C18.8417%209.40369%2016.3459%206.16602%2012.0001%206.16602C7.6542%206.16602%205.15845%209.40369%204.16822%2011.0548C3.81632%2011.6417%203.81632%2012.357%204.16822%2012.9438C5.15845%2014.595%207.6542%2017.8327%2012.0001%2017.8327ZM14.5001%2011.9993C14.5001%2013.3801%2013.3807%2014.4993%2012.0001%2014.4993C10.6193%2014.4993%209.50006%2013.3801%209.50006%2011.9993C9.50006%2010.6186%2010.6193%209.49935%2012.0001%209.49935C13.3807%209.49935%2014.5001%2010.6186%2014.5001%2011.9993Z%22%20fill%3D%22%230C395B%22%2F%3E%3C%2Fsvg%3E',
                            }),
                          ],
                        },
                      ),
                    ),
                    a.jsx(Dn, {
                      className: 'InviteUser__next-button',
                      isRippleEffect: !0,
                      title: 'Next',
                      onClick: function () {
                        return m(void 0, void 0, void 0, function () {
                          var n;
                          return y(this, function (a) {
                            if (f) return [2];
                            u(Q(!0));
                            try {
                              (n = {
                                method: 'PUT',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                  signers: t,
                                  viewers: i,
                                  flowId: d,
                                }),
                              }),
                                fetch(''.concat(g, '/v1/document-signing'), n)
                                  .then(function (n) {
                                    return n.json();
                                  })
                                  .then(function (n) {
                                    u(fn(!0));
                                  })
                                  .catch(function (n) {
                                    return console.log(
                                      'Information cannot be saved',
                                    );
                                  });
                            } catch (n) {
                              console.warn('Cannot load bananasign service');
                            }
                            return [2];
                          });
                        });
                      },
                    }),
                  ],
                },
              ),
            ),
          ],
        },
      ),
    );
  },
  Pn = e.memo(Fn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.Loading__container {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--bananasign-color-soft-white);\n}',
);
var jn = function () {
    return e.useContext(P).state.loading
      ? a.jsx(
          'div',
          b(
            {className: 'Loading__container'},
            {
              children: a.jsx(u.default, {
                loop: !0,
                animationData: mn,
                play: !0,
                style: {width: 209, height: 209},
                rendererSettings: {preserveAspectRatio: 'xMidYMid slice'},
              }),
            },
          ),
        )
      : null;
  },
  Bn = e.memo(jn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.AssignModal__custom-modal {\n  max-width: 496px;\n  min-width: 496px;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n  background: white;\n  box-shadow: var(--bananasign-container-shadow);\n  border-radius: 8px;\n  padding: 24px 16px 24px 16px;\n  border: none;\n  outline: none;\n  position: absolute;\n  top: 16%;\n}\n@media (max-width: 639px) {\n  .AssignModal__custom-modal {\n    min-width: 296px;\n    width: 82.3%;\n    padding: 16px;\n    top: 5%;\n  }\n}\n.AssignModal__header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.AssignModal__title {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 36px;\n  color: var(--bananasign-color-neutral-100);\n  margin: 0;\n  margin-bottom: 16px;\n}\n@media (max-width: 639px) {\n  .AssignModal__title {\n    font-size: 16px;\n    margin-bottom: 0px;\n  }\n}\n.AssignModal__body {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-bottom: 1px solid var(--bananasign-color-primary-230);\n  padding-top: 16px;\n  position: relative;\n}\n.AssignModal__contact-list {\n  width: 100%;\n  max-height: 224px;\n  min-height: 224px;\n  height: 224px;\n  overflow: auto;\n  margin-top: 8px;\n}\n.AssignModal__contact-component {\n  display: none;\n  height: 100%;\n  width: 100%;\n  transform: translateY(100%);\n  overflow: overlay;\n}\n.AssignModal__contact-component.active {\n  display: block;\n  transform: translateY(0);\n  animation: change-tab 0.4s cubic-bezier(0.17, 0.67, 0.5, 0.95);\n}\n.AssignModal__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  margin-top: 16px;\n}\n\n@keyframes change-tab {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.ImportGoogleContact__container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.ImportGoogleContact__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  background-color: white;\n  border-radius: 3px;\n}\n\n.ImportGoogleContact__logo {\n  width: 38px;\n  height: 38px;\n  border-radius: 2px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1px;\n}\n\n.ImportGoogleContact__title {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--bananasign-color-blue);\n  margin: 0;\n  margin: 8px 16px 8px 12px;\n  cursor: pointer;\n}\n\n.ImportGoogleContact__List {\n  height: 100%;\n  width: 100%;\n}\n\n.ImportGoogleContact__List-contacts .UserItem__container {\n  padding: 0px 0px 0px 8px;\n}\n\n.ImportGoogleContact__no-contacts {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.ImportGoogleContact__no-contacts img {\n  height: 100px;\n}\n.ImportGoogleContact__no-contacts span {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--bananasign-color-blue);\n  margin-top: 16px;\n}',
);
var Rn = function (n) {
  var o = n.children,
    r = n.className,
    t = C()[0].componentProps,
    i = e.useState({in: '', out: ''}),
    l = i[0],
    s = i[1],
    c = t,
    f = c.animationType,
    d = c.outAnimationType,
    p = c.modalName,
    g = e.useCallback(
      function () {
        s({
          out: 'animate__animated animate__'.concat(d, ' animate__faster'),
          in: '',
        });
      },
      [d],
    ),
    u = e.useCallback(
      function () {
        s({
          out: '',
          in: 'animate__animated animate__'.concat(f, ' animate__faster'),
        });
      },
      [f],
    );
  return (
    e.useEffect(
      function () {
        return p ? u() : g();
      },
      [p],
    ),
    a.jsx(
      'div',
      b({className: ''.concat(r, ' ').concat(l.in || l.out)}, {children: o}),
    )
  );
};
(Rn.propTypes = {}),
  n(
    ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.ReactModalCoupleButton__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.ReactModal__Button {\n  font-family: var(--bananasign-font-primary-bold);\n  font-size: 16px;\n  min-width: 127px;\n  background: var(--bananasign-color-primary-220);\n  line-height: 1.5;\n  color: var(--bananasign-color-neutral-100);\n  outline: none;\n  align-items: center;\n  justify-content: center;\n  width: calc(50% - 8px);\n}',
  );
var Sn = function (n) {
  var o = n.onCancel,
    e = n.onConfirm,
    r = n.primaryTitle,
    t = n.secondaryTitle,
    i = n.disabledConfirmButton,
    l = n.className;
  return a.jsxs(
    'div',
    b(
      {className: 'ReactModalCoupleButton__container '.concat(l)},
      {
        children: [
          a.jsx(Dn, {
            className: 'ReactModal__Button',
            isRippleEffect: !0,
            title: t,
            onClick: o,
            buttonType: M,
          }),
          a.jsx(Dn, {
            className: 'ReactModal__Button',
            isRippleEffect: !0,
            title: r,
            onClick: e,
            disabled: i,
            buttonType: E,
          }),
        ],
      },
    ),
  );
};
Sn.defaultProps = {
  disabledConfirmButton: !1,
  primaryTitle: 'Done',
  secondaryTitle: 'Cancel',
  className: '',
};
var Ln = e.memo(Sn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n:root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.InputAssigner__container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  border: 2px solid var(--bananasign-color-neutral-40);\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n.InputAssigner__container.EmptyAssignUsers .AssignerListInput__container {\n  padding: 0;\n}\n.InputAssigner__container.isOpenSearch {\n  border: 2px solid var(--bananasign-color-neutral-100);\n}\n\n.InputAssigner__wrapper--input .CustomInput__wrapper {\n  margin-top: 0;\n}\n\n.InputAssigner__input {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border: unset;\n}\n.InputAssigner__input.CustomInput__input {\n  border: unset;\n}\n.InputAssigner__input.CustomInput__input--focus:focus {\n  border: unset;\n}\n\n.InputAssigner__divider {\n  width: 100%;\n  height: 1px;\n  background-color: var(--bananasign-color-primary-230);\n  margin-top: 2px;\n}',
),
  n(
    ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.CustomInput-container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.CustomInput-container.fullWidth {\n  width: 100%;\n}\n\n.CustomInput__label {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--bananasign-color-neutral-100);\n}\n\n.CustomInput__wrapper {\n  height: 44px;\n  width: 100%;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  position: relative;\n  margin-top: 4px;\n}\n\n.CustomInput__input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  display: block;\n  background-color: white;\n  box-shadow: none;\n  border: 2px solid var(--bananasign-color-neutral-40);\n  box-sizing: border-box;\n  border-radius: 8px;\n  height: 44px;\n  padding: 0 18px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  font-family: var(--bananasign-font-primary);\n  letter-spacing: 0.34px;\n  color: var(--bananasign-color-neutral-100);\n}\n.CustomInput__input::placeholder {\n  color: var(--bananasign-color-neutral-40);\n  font-family: var(--bananasign-font-primary);\n}\n.CustomInput__input:focus {\n  border: 2px solid var(--bananasign-color-neutral-100);\n}\n.CustomInput__input--error {\n  border-color: red !important;\n}\n.CustomInput__input--hasIcon {\n  padding-right: 48px;\n}\n.CustomInput__input--hasLeftIcon {\n  padding-left: 36px;\n}\n.CustomInput__input--focus {\n  border-color: var(--bananasign-color-neutral-100);\n}\n\n.CustomInput__error-message {\n  font-size: 12px;\n  color: var(--bananasign-color-red);\n  font-weight: 600;\n  margin-top: 4px;\n  margin-bottom: 0px;\n  font-family: var(--bananasign-font-primary);\n}\n\n.CustomInput__icon {\n  position: absolute;\n  top: 50%;\n  right: 18px;\n  transform: translateY(-50%);\n}\n\n.CustomInput__icon--clickable {\n  cursor: pointer;\n}\n\n.CustomInput__left-icon {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  color: var(--bananasign-color-secondary);\n  pointer-events: none;\n}\n\n.CustomInput__addon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  max-width: 200px;\n}\n\n.CustomInput__input--disable {\n  color: var(--bananasign-color-other-1);\n}',
  );
var On = g.default.forwardRef(function (n, o) {
  var r = n.classWrapper,
    t = n.className,
    i = n.onFocus,
    l = n.onBlur,
    s = n.label,
    c = n.name,
    f = n.errorMessage,
    d = n.labelClassName,
    g = n.fullWidth,
    u = n.hideValidationIcon,
    m = n.showClearButton,
    y = n.type,
    x = n.value,
    h = n.readOnly,
    w = n.disabled,
    v = n.icon,
    _ = n.onChange,
    C = n.isErrorBorder,
    k = n.showErrorMessageOnFocus,
    D = (function (n, a) {
      var o = {};
      for (var e in n)
        Object.prototype.hasOwnProperty.call(n, e) &&
          a.indexOf(e) < 0 &&
          (o[e] = n[e]);
      if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (e = Object.getOwnPropertySymbols(n); r < e.length; r++)
          a.indexOf(e[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(n, e[r]) &&
            (o[e[r]] = n[e[r]]);
      }
      return o;
    })(n, [
      'classWrapper',
      'className',
      'onFocus',
      'onBlur',
      'label',
      'name',
      'errorMessage',
      'labelClassName',
      'fullWidth',
      'hideValidationIcon',
      'showClearButton',
      'type',
      'value',
      'readOnly',
      'disabled',
      'icon',
      'onChange',
      'isErrorBorder',
      'showErrorMessageOnFocus',
    ]),
    I = e.useState(!1),
    E = I[0],
    M = I[1],
    A = Boolean(f),
    N = !h && !w,
    F = e.useRef(null),
    P = A && !E && !u && N,
    j = m && N && Boolean(null == x ? void 0 : x.length),
    B = E || (!A && Boolean(x && !C)),
    R = !B || k;
  return (
    e.useImperativeHandle(o, function () {
      return {
        focus: function () {
          var n;
          return null === (n = null == F ? void 0 : F.current) || void 0 === n
            ? void 0
            : n.focus();
        },
        unFocus: function () {
          var n;
          return null === (n = null == F ? void 0 : F.current) || void 0 === n
            ? void 0
            : n.blur();
        },
        reset: function () {
          F.current && (F.current.value = '');
        },
      };
    }),
    a.jsxs(
      'div',
      b(
        {
          className: p.default('CustomInput-container '.concat(r), {
            fullWidth: g,
          }),
        },
        {
          children: [
            s &&
              a.jsx(
                'label',
                b(
                  {
                    className: 'CustomInput__label '.concat(d),
                    htmlFor: 'input',
                  },
                  {children: s},
                ),
              ),
            a.jsxs(
              'div',
              b(
                {className: 'CustomInput__wrapper'},
                {
                  children: [
                    v &&
                      a.jsx('img', {
                        src: v,
                        alt: 'icon input',
                        className: p.default('CustomInput__left-icon', {
                          'CustomInput__left-icon__focused': B,
                        }),
                      }),
                    a.jsx(
                      'input',
                      b(
                        {
                          id: 'input',
                          className: p.default(
                            'CustomInput__input '.concat(t),
                            {
                              'CustomInput__input--focus': B,
                              'CustomInput__input--error': (R && A) || C,
                              'CustomInput__input--hasIcon': P || j,
                              'CustomInput__input--hasLeftIcon': Boolean(v),
                              'CustomInput__input--disable': w,
                            },
                          ),
                          ref: F,
                          onFocus: function (n) {
                            M(!0), i && i(n);
                          },
                          onBlur: function (n) {
                            M(!1), l && l(n);
                          },
                          onChange: function (n) {
                            _ && _(n);
                          },
                          value: x,
                          type: y,
                          disabled: w,
                          readOnly: h,
                          name: c,
                        },
                        D,
                      ),
                    ),
                    j &&
                      a.jsx(
                        'div',
                        b(
                          {
                            onClick: function (n) {
                              var a;
                              null === (a = null == F ? void 0 : F.current) ||
                                void 0 === a ||
                                a.focus(),
                                _ && _(n);
                            },
                          },
                          {
                            children: a.jsx('img', {
                              src: un,
                              alt: 'icon input',
                              className:
                                'CustomInput__icon CustomInput__icon--clickable',
                            }),
                          },
                        ),
                      ),
                  ],
                },
              ),
            ),
            R &&
              f &&
              a.jsx(
                'p',
                b({className: 'CustomInput__error-message'}, {children: f}),
              ),
          ],
        },
      ),
    )
  );
});
(On.defaultProps = {
  className: '',
  labelClassName: '',
  errorMessage: '',
  label: '',
  name: '',
  onBlur: function () {},
  onFocus: function () {},
  onChange: function () {},
  fullWidth: !1,
  hideValidationIcon: !1,
  showClearButton: !1,
  type: 'text',
  disabled: !1,
  readOnly: !1,
  classWrapper: '',
  icon: '',
  isErrorBorder: !1,
  showErrorMessageOnFocus: !1,
}),
  (On.displayName = 'CustomInput');
var Tn = e.memo(On);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.AssignerListInput__container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  max-height: 150px;\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow: overlay;\n  padding-top: 8px;\n}\n.AssignerListInput__container::-webkit-scrollbar {\n  border-radius: 36px;\n  height: 10px;\n  width: 4px;\n}\n.AssignerListInput__container::-webkit-scrollbar-thumb {\n  background: var(--bananasign-color-primary-230);\n  border-radius: 36px;\n}\n.AssignerListInput__container::-webkit-scrollbar-track {\n  border-radius: 36px;\n}\n.AssignerListInput__container.scroll::before {\n  content: "";\n  background: white;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6601015406) 0%, rgba(255, 255, 255, 0) 100%);\n  height: 15px;\n  position: fixed;\n  width: 489px;\n}\n\n.AssignerListInput__row-email {\n  display: flex;\n  align-items: center;\n  padding: 2px 4px 2px 8px;\n  background: var(--bananasign-color-primary-160);\n  margin: 0px 0px 8px 8px;\n  border-radius: 4px;\n}\n.AssignerListInput__row-email.disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n\n.AssignerListInput__email {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--bananasign-color-blue);\n  text-align: center;\n  align-items: center;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 430px;\n}\n.AssignerListInput__email.disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n\n.AssignerListInput__icon-right {\n  padding: 3px;\n  margin-left: 5px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.AssignerListInput__icon-right img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n}\n.AssignerListInput__icon-right:hover {\n  background-color: var(--bananasign-color-primary-230);\n}\n\n.AssignerListInput__icon-right.hidden {\n  display: none;\n  z-index: -1;\n}',
);
var Un = function () {
    var n = e.useRef(null),
      o = e.useRef(0),
      r = e.useContext(P),
      t = r.state,
      i = t.signers,
      l = t.viewers,
      s = t.type,
      c = r.dispatch,
      f = (s === k ? i : l).filter(function (n) {
        return !n.isOwner;
      });
    e.useEffect(
      function () {
        n.current &&
          (o.current < f.length &&
            n.current.scrollIntoView({behavior: 'smooth'}),
          (o.current = f.length));
      },
      [f],
    );
    var d = function (n) {
      !(function (n) {
        c(s === k ? $(n) : K(n));
      })(n);
    };
    return a.jsxs(
      'div',
      b(
        {className: 'AssignerListInput__container'},
        {
          children: [
            f.map(function (n, o) {
              return (function (n) {
                var o = n.item,
                  e = n.index,
                  r = null == o ? void 0 : o.isOwner;
                return a.jsxs(
                  'div',
                  b(
                    {className: 'AssignerListInput__row-email'},
                    {
                      children: [
                        a.jsx(
                          'span',
                          b(
                            {
                              className: p.default('AssignerListInput__email', {
                                disabled: r,
                              }),
                            },
                            {children: o.email},
                          ),
                        ),
                        a.jsx(
                          'div',
                          b(
                            {
                              onClick: function () {
                                return d(o);
                              },
                              className: p.default(
                                'AssignerListInput__icon-right',
                                {hidden: r},
                              ),
                            },
                            {
                              children: a.jsx('img', {
                                src: un,
                                alt: 'icon remove',
                              }),
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                  e,
                );
              })({item: n, index: o});
            }),
            a.jsx('div', {ref: n}),
          ],
        },
      ),
    );
  },
  Vn = g.default.forwardRef(function (n, o) {
    var r = e.useContext(P),
      t = r.state,
      i = t.searchContacts,
      l = t.signers,
      s = t.viewers,
      c = t.type,
      f = r.dispatch,
      d = n.onFocus,
      g = n.onBlur,
      u = n.isOpenSearch,
      m = e.useState(''),
      y = m[0],
      x = m[1],
      h = e.useRef(null),
      w = (c === k ? l : s).filter(function (n) {
        return !n.isOwner;
      });
    e.useImperativeHandle(o, function () {
      return {
        unFocusInput: function () {
          var n;
          return null === (n = null == h ? void 0 : h.current) || void 0 === n
            ? void 0
            : n.unFocus();
        },
        resetInput: function () {
          var n;
          null === (n = null == h ? void 0 : h.current) ||
            void 0 === n ||
            n.reset(),
            x(''),
            f(an([])),
            f(nn(''));
        },
      };
    });
    var v = xn.debounce(function (n) {
        return (
          !!xn.validateEmail(n) &&
          (f(
            an([
              {
                name: 'Guest User',
                avatarRemoteId: '',
                email: n,
                type: I,
                userId: '',
              },
            ]),
          ),
          f(nn(n)),
          !0)
        );
      }, 300),
      _ = Array.isArray(w) && 0 === w.length;
    return a.jsxs(
      'div',
      b(
        {
          className: p.default('InputAssigner__container', {
            isOpenSearch: u,
            EmptyAssignUsers: _,
          }),
        },
        {
          children: [
            !_ &&
              a.jsxs(a.Fragment, {
                children: [
                  a.jsx(Un, {}),
                  a.jsx('div', {className: 'InputAssigner__divider'}),
                ],
              }),
            a.jsx(Tn, {
              ref: h,
              name: 'name',
              fullWidth: !0,
              value: y,
              icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18.6666%2011.1666C18.6666%2012.9375%2018.0529%2014.565%2017.0265%2015.848L19.2559%2018.0774C19.5813%2018.4028%2019.5813%2018.9305%2019.2559%2019.2559C18.9305%2019.5813%2018.4028%2019.5813%2018.0774%2019.2559L15.848%2017.0265C14.565%2018.0529%2012.9375%2018.6666%2011.1666%2018.6666C7.02449%2018.6666%203.66663%2015.3088%203.66663%2011.1666C3.66663%207.02449%207.02449%203.66663%2011.1666%203.66663C15.3088%203.66663%2018.6666%207.02449%2018.6666%2011.1666ZM11.1666%2017C14.3883%2017%2017%2014.3883%2017%2011.1666C17%207.94497%2014.3883%205.33329%2011.1666%205.33329C7.94497%205.33329%205.33329%207.94497%205.33329%2011.1666C5.33329%2014.3883%207.94497%2017%2011.1666%2017Z%22%20fill%3D%22%230C395B%22%2F%3E%3C%2Fsvg%3E',
              type: 'email',
              onChange: function (n) {
                var a;
                x(n.target.value || ''),
                  (a = n.target.value || ''),
                  f(nn(a)),
                  v(a),
                  i.length > 0 && f(an([]));
              },
              placeholder: 'Enter email address',
              minLength: 1,
              maxLength: 254,
              onFocus: d,
              onBlur: g,
              classWrapper: 'InputAssigner__wrapper--input',
              className: 'InputAssigner__input',
              showClearButton: !0,
            }),
          ],
        },
      ),
    );
  });
(Vn.displayName = 'InputAssigner'),
  (Vn.defaultProps = {
    onFocus: function () {},
    onBlur: function () {},
    isOpenSearch: !1,
  });
var Hn = e.memo(Vn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.SearchContact__container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: white;\n  border: 1px solid var(--bananasign-color-primary-230);\n  box-sizing: border-box;\n  box-shadow: var(--bananasign-container-shadow);\n  border-radius: 4px;\n  align-items: center;\n  justify-content: flex-start;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(10px) scale(0.8);\n  z-index: -1;\n  transition: scale 0.3s ease, visibility 0s linear 0.33s, opacity 0.3s linear, transform 0.3s ease;\n}\n.SearchContact__container.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 1;\n  transform: translateY(0) scale(1);\n  transition-delay: 0s;\n}\n\n.SearchContact__list {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding-top: 8px;\n}\n.SearchContact__list .SearchContact__item {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 9px 16px 9px 16px;\n  cursor: pointer;\n}',
);
var zn = g.default.forwardRef(function (n, o) {
  var r = n.active,
    t = n.resetInput,
    i = e.useContext(P),
    l = i.state,
    s = l.searchContacts,
    c = l.signers,
    f = l.viewers,
    d = l.type,
    g = i.dispatch,
    u = e.useCallback(
      function (n) {
        return (
          x(x([], c, !0), f, !0).findIndex(function (a) {
            return a.email === n.email;
          }) > -1
        );
      },
      [c, f],
    ),
    m = function (n) {
      if (u(n)) return !1;
      var a = {newAssignUser: !0};
      return (
        d === D
          ? g(
              on(
                b(b(b({}, n), a), {
                  name: (null == n ? void 0 : n.name) || 'Guest User',
                  id: '',
                  requestType: 'VIEWER',
                  dueTimeExpired: 0,
                }),
              ),
            )
          : d === k &&
            g(
              en(
                b(b(b({}, n), a), {
                  name: (null == n ? void 0 : n.name) || 'Guest User',
                  id: '',
                  requestType: 'SIGNER',
                  dueTimeExpired: 0,
                }),
              ),
            ),
        t && 'function' == typeof t && t(),
        !0
      );
    };
  return a.jsx(
    'div',
    b(
      {className: p.default('SearchContact__container', {active: r}), ref: o},
      {
        children:
          s.length > 0
            ? a.jsx(
                'div',
                b(
                  {className: 'SearchContact__list'},
                  {
                    children: s.map(function (n, o) {
                      return a.jsx(
                        Nn,
                        {
                          onClick: m,
                          user: n,
                          showIconTrash: !1,
                          className: 'SearchContact__item',
                          disabled: u(n),
                        },
                        o,
                      );
                    }),
                  },
                ),
              )
            : null,
      },
    ),
  );
});
(zn.displayName = 'SearchContact'),
  (zn.defaultProps = {active: !1, resetInput: function () {}});
var Gn,
  Zn,
  Wn = e.memo(zn),
  Yn = (((Gn = {})[k] = 'Add Signer'), (Gn[D] = 'Add Viewer'), Gn),
  qn = function () {
    var n,
      o,
      r = e.useContext(P),
      t = r.state,
      i = t.type,
      l = t.signers,
      s = t.viewers,
      c = r.dispatch,
      f = e.useMemo(function () {
        return {SIGNER: l, VIEWER: s};
      }, []),
      d = e.useState(!1),
      p = d[0],
      g = d[1],
      u = e.useRef(null),
      m = e.useRef(null),
      y = C()[0].hideModal;
    (n = u),
      (o = function () {
        var n;
        null === (n = null == m ? void 0 : m.current) ||
          void 0 === n ||
          n.unFocusInput(),
          g(!1);
      }),
      e.useEffect(
        function () {
          var a = function (a) {
            n.current &&
              !n.current.contains((null == a ? void 0 : a.target) || null) &&
              o(a);
          };
          return (
            document.addEventListener('mousedown', a),
            document.addEventListener('touchstart', a),
            function () {
              document.removeEventListener('mousedown', a),
                document.removeEventListener('touchstart', a);
            }
          );
        },
        [n, o],
      );
    var x = e.useMemo(
      function () {
        var n,
          a = (((n = {})[k] = l), (n[D] = s), n);
        return !xn.compareArrayByElement(a[i], f[i], 'email');
      },
      [i, l, s],
    );
    return a.jsx(
      Rn,
      b(
        {className: 'AssignModal AssignModal__custom-modal'},
        {
          children: a.jsxs(
            'div',
            b(
              {className: 'AssignModal__container'},
              {
                children: [
                  a.jsxs(
                    'div',
                    b(
                      {className: 'AssignModal__header'},
                      {
                        children: [
                          a.jsx(
                            'h4',
                            b(
                              {className: 'AssignModal__title'},
                              {children: Yn[i]},
                            ),
                          ),
                          a.jsx(Hn, {
                            ref: m,
                            onFocus: function () {
                              return g(!0);
                            },
                            isOpenSearch: p,
                          }),
                        ],
                      },
                    ),
                  ),
                  a.jsxs(
                    'div',
                    b(
                      {className: 'AssignModal__body'},
                      {
                        children: [
                          a.jsx(Wn, {
                            ref: u,
                            resetInput: function () {
                              var n;
                              null === (n = null == m ? void 0 : m.current) ||
                                void 0 === n ||
                                n.resetInput();
                            },
                            active: p,
                          }),
                          a.jsx(
                            'div',
                            b(
                              {className: 'AssignModal__contact-list'},
                              {
                                children: a.jsx('div', {
                                  className:
                                    'AssignModal__contact-component active',
                                }),
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                  a.jsx(
                    'div',
                    b(
                      {className: 'AssignModal__footer'},
                      {
                        children: a.jsx(Ln, {
                          onCancel: function () {
                            c(tn(!0)), c(cn()), y();
                          },
                          onConfirm: function () {
                            c(cn()), y();
                          },
                          primaryTitle: 'Done',
                          disabledConfirmButton: !x,
                        }),
                      },
                    ),
                  ),
                ],
              },
            ),
          ),
        },
      ),
    );
  },
  Jn = e.memo(qn);
n(
  ':root {\n  --bananasign-font-primary: "MarkPro", arial, sans-serif;\n  --bananasign-font-primary-regular: "MarkPro-Regular", arial, sans-serif;\n  --bananasign-font-primary-bold: "MarkPro-Bold", arial, sans-serif;\n  --bananasign-color-blue: #3180f1;\n  --bananasign-color-blue-120: #bdd8ff;\n  --bananasign-color-blue-160: #1f67cf;\n  --bananasign-color-blue-170: #1051ad;\n  --bananasign-color-red: #f04a4a;\n  --bananasign-color-neutral-0: #fff;\n  --bananasign-color-neutral-40: #d2d6d9;\n  --bananasign-color-neutral-70: rgba(12, 57, 91, 0.7);\n  --bananasign-color-neutral-100: #0c395b;\n  --bananasign-color-other-1: #50677a;\n  --bananasign-color-other-11: #8e979f;\n  --bananasign-color-soft-white: #f7f6ec;\n  --bananasign-color-warning-40: #fae200;\n  --bananasign-color-yellow: #fae200;\n  --bananasign-color-yellow-10: #fff8b7;\n  --bananasign-color-yellow-60: #e6d000;\n  --bananasign-color-yellow-70: #d0bd07;\n  --bananasign-color-primary-160: #eaf3ff;\n  --bananasign-color-primary-220: #f4f4f4;\n  --bananasign-color-primary-230: #e1e1e1;\n  --bananasign-color-primary-240: #c6c8c9;\n  --bananasign-color-primary-260: #8e979f;\n  --bananasign-color-primary-350: #f7f6ec;\n  --bananasign-color-secondary: #8093a7;\n  --bananasign-color-secondary-50: #f2385a;\n  --bananasign-container-shadow: 0 5px 5px -3px rgba(128, 147, 167, 0.2),\n    0 3px 14px 2px rgba(128, 147, 167, 0.12),\n    0 8px 10px 1px rgba(128, 147, 167, 0.14);\n}\n\n@font-face {\n  font-family: "MarkPro";\n  src: url("//db.onlinewebfonts.com/t/9d18fe9288338af4d47207a94320a88c.ttf") format("truetype");\n  font-weight: "normal";\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Regular";\n  src: url("//db.onlinewebfonts.com/t/c7e919b8358daafbec26cde70a5237f9.ttf") format("truetype");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: "MarkPro-Bold";\n  src: url("//db.onlinewebfonts.com/t/a9f560eff7544c341f8c6f520fda2d07.ttf") format("truetype");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n.WarningModal__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 368px;\n  min-width: 368px;\n}\n@media (max-width: 639px) {\n  .WarningModal__container {\n    min-width: 296px;\n  }\n}\n.WarningModal__container img {\n  width: 64px;\n}\n.WarningModal__container p {\n  font-family: var(--bananasign-font-primary);\n  font-style: normal;\n  line-height: 24px;\n}\n.WarningModal__container-title {\n  font-weight: 700;\n  font-size: 18px;\n  color: var(--bananasign-color-neutral-100);\n  margin: 16px 0 0 0;\n}\n.WarningModal__container-content {\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  color: var(--bananasign-color-other-1);\n  margin: 16px 0;\n}',
);
var Qn =
    (((Zn = {})[A] = {
      TITLE: 'Only you will be able to sign',
      CONTENT: '',
      FIRST_BTN: 'Cancel',
      SECOND_BTN: 'Continue',
      ICON: 'data:image/svg+xml,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M64%2032C64%2049.673%2049.673%2064%2032%2064C14.3269%2064%200%2049.673%200%2032C0%2014.3269%2014.3269%200%2032%200C49.673%200%2064%2014.3269%2064%2032ZM32.0003%2028.8003C33.7677%2028.8003%2035.2003%2030.233%2035.2003%2032.0003V48.0032C35.2003%2049.7706%2033.7677%2051.2032%2032.0003%2051.2032C30.233%2051.2032%2028.8003%2049.7706%2028.8003%2048.0032V32.0003C28.8003%2030.233%2030.233%2028.8003%2032.0003%2028.8003ZM32.0003%2022.4C33.7677%2022.4%2035.2003%2020.9673%2035.2003%2019.2C35.2003%2017.4327%2033.7677%2016%2032.0003%2016C30.233%2016%2028.8003%2017.4327%2028.8003%2019.2C28.8003%2020.9673%2030.233%2022.4%2032.0003%2022.4Z%22%20fill%3D%22%233180F1%22%2F%3E%3C%2Fsvg%3E',
    }),
    (Zn[N] = {
      TITLE: 'Discard Changes',
      CONTENT:
        'Do you want to cancel this progress? This will clear data you input before.',
      FIRST_BTN: 'No, Thanks',
      SECOND_BTN: 'Discard',
      ICON: 'data:image/svg+xml,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M64%2032C64%2049.673%2049.673%2064%2032%2064C14.3269%2064%200%2049.673%200%2032C0%2014.3269%2014.3269%200%2032%200C49.673%200%2064%2014.3269%2064%2032Z%22%20fill%3D%22%23FAE200%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M35.2005%2035.2C35.2005%2036.9673%2033.7679%2038.4%2032.0005%2038.4C30.2332%2038.4%2028.8005%2036.9673%2028.8005%2035.2V19.2C28.8005%2017.4327%2030.2332%2016%2032.0005%2016C33.7679%2016%2035.2005%2017.4327%2035.2005%2019.2V35.2ZM35.2005%2048.0005C35.2005%2049.7678%2033.7678%2051.2005%2032.0005%2051.2005C30.2331%2051.2005%2028.8005%2049.7678%2028.8005%2048.0005C28.8005%2046.2331%2030.2331%2044.8005%2032.0005%2044.8005C33.7678%2044.8005%2035.2005%2046.2331%2035.2005%2048.0005Z%22%20fill%3D%22%230C395B%22%2F%3E%3C%2Fsvg%3E',
    }),
    Zn),
  Xn = function () {
    var n,
      o = C()[0],
      e = o.hideModal,
      r = o.componentProps,
      t =
        null === (n = null == r ? void 0 : r.settings) || void 0 === n
          ? void 0
          : n.type;
    if (!t) return null;
    var i = Qn[t];
    return a.jsxs(
      Rn,
      b(
        {className: 'WarningModal__container AssignModal__custom-modal'},
        {
          children: [
            a.jsx('img', {src: i.ICON, alt: 'icon modal'}),
            a.jsx(
              'p',
              b(
                {className: 'WarningModal__container-title'},
                {children: i.TITLE},
              ),
            ),
            a.jsx(
              'p',
              b(
                {className: 'WarningModal__container-content'},
                {children: i.CONTENT},
              ),
            ),
            a.jsx(Ln, {
              onCancel: function () {
                var n, a;
                e(),
                  null ===
                    (a =
                      null === (n = null == r ? void 0 : r.settings) ||
                      void 0 === n
                        ? void 0
                        : n.onCancel) ||
                    void 0 === a ||
                    a.call(n);
              },
              onConfirm: function () {
                var n, a;
                e(),
                  null ===
                    (a =
                      null === (n = null == r ? void 0 : r.settings) ||
                      void 0 === n
                        ? void 0
                        : n.onConfirm) ||
                    void 0 === a ||
                    a.call(n);
              },
              secondaryTitle: i.FIRST_BTN,
              primaryTitle: i.SECOND_BTN,
            }),
          ],
        },
      ),
    );
  },
  $n = e.memo(Xn),
  Kn = function (n) {
    var o = n.children;
    return a.jsx(
      'div',
      b({className: 'ModalWrapper__container'}, {children: o}),
    );
  },
  na = function () {
    return (
      e.useEffect(function () {
        return (
          document.body.classList.add('react-custom-modal-open'),
          function () {
            document.body.classList.remove('react-custom-modal-open');
          }
        );
      }, []),
      a.jsx('div', {className: 'ModalBackdrop__container'})
    );
  },
  aa = function (n) {
    var o = n.componentProps.modalName;
    if (!o) return null;
    var r = e.useMemo(
      function () {
        switch (o) {
          case c.ADD_VIEWERS_SIGNERS:
            return a.jsx(Jn, {});
          case c.WARNING:
            return a.jsx($n, {});
          default:
            return null;
        }
      },
      [o],
    );
    return a.jsxs(Kn, {children: [a.jsx(na, {}), r]});
  },
  oa = function () {
    var n = C()[0].componentProps;
    return a.jsx(aa, {componentProps: n});
  },
  ea = function (n, a) {
    switch (a.type) {
      case q:
        return b(b({}, n), {isOpen: a.payload});
      case j:
        return b(b({}, n), {loading: a.payload});
      case B:
        return b(b({}, n), {isOpenAddAssignerModal: a.payload});
      case L:
        var o = x([], n.signers, !0).filter(function (n) {
          return n.email !== a.payload.email;
        });
        return b(b({}, n), {signers: o});
      case O:
        var e = x([], n.viewers, !0).filter(function (n) {
          return n.email !== a.payload.email;
        });
        return b(b({}, n), {viewers: e});
      case V:
        return b(b({}, n), {keyWordSearchContact: a.payload});
      case H:
        return b(b({}, n), {searchContacts: a.payload});
      case T:
        return n.viewers.findIndex(function (n) {
          return n.email === a.payload.email;
        }) > -1
          ? b({}, n)
          : b(b({}, n), {viewers: x(x([], n.viewers, !0), [a.payload], !1)});
      case U:
        return n.signers.findIndex(function (n) {
          return n.email === a.payload.email;
        }) > -1
          ? b({}, n)
          : b(b({}, n), {signers: x(x([], n.signers, !0), [a.payload], !1)});
      case z:
        return b(b({}, n), {type: a.payload});
      case G:
        return b(b({}, n), {cancelAddAssigners: a.payload});
      case R:
        return b(b({}, n), {signers: a.payload});
      case S:
        return b(b({}, n), {viewers: a.payload});
      case Z:
        return b(b({}, n), {
          searchContacts: [],
          keyWordSearchContact: '',
          isOpenAddAssignerModal: !1,
        });
      case W:
        return b(b({}, n), {openBananasignIframe: a.payload});
      case Y:
        return b(b({}, n), a.payload);
      default:
        return;
    }
  },
  ra = function (n) {
    var o = n.children,
      r = n.onClose,
      t = n.signers,
      i = n.viewers,
      l = n.bananasignUrl,
      s = void 0 === l ? 'https://app.bananasign.co' : l,
      c = n.bananasignBaseUrl,
      f = void 0 === c ? 'https://api.bananasign.co' : c,
      d = n.fileName,
      p = n.onUploadDocument,
      g = n.isOpen,
      u = {
        signers: xn.serializeAssigners(t, k),
        viewers: xn.serializeAssigners(i, D),
        onClose: r,
        bananasignUrl: s,
        bananasignBaseUrl: f,
        fileName: d,
        isOpen: g,
      },
      m = e.useReducer(ea, b(b({}, F), u)),
      y = m[0],
      x = m[1];
    return (
      e.useEffect(
        function () {
          var n = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fileName: d}),
          };
          g &&
            (x(J(g)),
            fetch(''.concat(f, '/v1/document-signing'), n)
              .then(function (n) {
                return n.json();
              })
              .then(function (n) {
                p({uploadUrl: n.uploadDocumentUrl}), x(dn(n));
              })
              .catch(function (n) {
                return console.log(n);
              }));
        },
        [g],
      ),
      a.jsx(P.Provider, b({value: {state: y, dispatch: x}}, {children: o}))
    );
  };
ra.defaultProps = {children: null};
module.exports = function (n) {
  var o = n.isOpen,
    e = n.onClose,
    r = n.signers,
    t = n.viewers,
    i = n.bananasignUrl,
    l = n.bananasignBaseUrl,
    s = n.fileName,
    c = n.onUploadDocument;
  return a.jsx(
    ra,
    b(
      {
        onClose: e,
        signers: r,
        viewers: t,
        bananasignUrl: i,
        bananasignBaseUrl: l,
        fileName: s,
        onUploadDocument: c,
        isOpen: o,
      },
      {
        children: a.jsx(_, {
          children: a.jsxs(
            'div',
            b(
              {className: p.default('InviteToSign__container', {open: o})},
              {
                children: [
                  a.jsx(Cn, {}),
                  a.jsx(Pn, {}),
                  a.jsx(wn, {}),
                  a.jsx(Bn, {}),
                  a.jsx(gn, {}),
                  a.jsx(oa, {}),
                ],
              },
            ),
          ),
        }),
      },
    ),
  );
};
//# sourceMappingURL=index.js.map
