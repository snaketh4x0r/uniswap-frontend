(window.webpackJsonpuniswap=window.webpackJsonpuniswap||[]).push([[1],{977:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(3),a=t(0),i=t.n(a),o=t(4);function u(){var e=Object(r.a)(["\n  position: absolute;\n  top: 80%;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  width: calc(100% - 1rem);\n  margin: 0 auto;\n  border-radius: 0.625rem;\n"]);return l=function(){return e},e}var s=o.d.div(l(),function(e){return e.theme.concreteGray}),d=o.d.div(c(),function(e){return e.theme.concreteGray}),p=o.d.div(u(),function(e){return e.theme.concreteGray});function f(e){var n=e.hideTop,t=e.hideBottom,r=e.children;return i.a.createElement(s,null,n||i.a.createElement(d,null),r,t||i.a.createElement(p,null))}},978:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(0),a=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#2F80ED"}),c=function(e){var n=e.svgRef,t=e.title,r=o(e,["svgRef","title"]);return a.a.createElement("svg",i({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),a.a.createElement("title",null,t),u)},l=a.a.forwardRef(function(e,n){return a.a.createElement(c,i({svgRef:n},e))});t.p},979:function(e,n,t){"use strict";t.d(n,"a",function(){return S});var r=t(7),a=t(3),i=t(0),o=t.n(i),u=t(4),c=t(61),l=t(10),s=t(14),d=t(5),p=t(72);function f(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",";\n\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return m=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return b=function(){return e},e}function h(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return h=function(){return e},e}function g(){var e=Object(a.a)(["\n  flex: 1;\n"]);return g=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n"]);return v=function(){return e},e}function E(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return E=function(){return e},e}var y=u.d.div(E(),function(e){return e.theme.flexColumnNoWrap},function(e){var n=e.theme;return Object(s.c)(.95,n.shadowColor)},function(e){return e.theme.inputBackground}),O=u.d.div(v(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray},function(e){return e.theme.inputBackground}),j=u.d.div(g()),w=u.d.div(h(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),k=u.d.div(b()),T=u.d.div(m(),function(e){return e.theme.flexRowNoWrap}),x=u.d.input(f(),function(e){return e.theme.inputBackground},function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue},function(e){return e.theme.placeholderGray});function S(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,u=e.onChange,s=void 0===u?function(){}:u,f=e.onError,m=void 0===f?function(){}:f,b=Object(c.b)().t,h=Object(l.useWeb3Context)().library,g=Object(i.useState)(a),v=Object(r.a)(g,2),E=v[0],S=v[1],N=Object(p.c)(E,150),D=Object(i.useState)({address:void 0,name:void 0}),C=Object(r.a)(D,2),P=C[0],I=C[1],R=Object(i.useState)(!1),A=Object(r.a)(R,2),B=A[0],W=A[1];return Object(i.useEffect)(function(){s({address:P.address,name:P.name})},[s,P.address,P.name]),Object(i.useEffect)(function(){m(B)},[m,B]),Object(i.useEffect)(function(){var e=!1;if(Object(d.q)(N))try{h.lookupAddress(N).then(function(n){e||(n?S(n):(I({address:N,name:""}),W(null)))}).catch(function(){e||(I({address:N,name:""}),W(null))})}catch(n){I({address:N,name:""}),W(null)}else if(""!==N)try{h.resolveName(N).then(function(n){e||(n?(I({address:n,name:N}),W(null)):W(!0))}).catch(function(){e||W(!0)})}catch(t){W(!0)}return function(){e=!0}},[N,h,s,m]),o.a.createElement(y,null,o.a.createElement(O,{error:""!==E&&B},o.a.createElement(j,null,o.a.createElement(w,null,o.a.createElement(k,null,o.a.createElement("span",null,n||b("recipientAddress")))),o.a.createElement(T,null,o.a.createElement(x,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==E&&B,onChange:function(e){void 0===P.address&&void 0===P.name||I({address:void 0,name:void 0}),void 0!==B&&W();var n=e.target.value,t=Object(d.q)(n);S(t||n)},value:E})))))}},981:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 9 10",fill:"currentColor"},e),a.a.createElement("path",{d:"M5.298 0H4.24v7.911h-.075L1.256 4.932l-.717.735L4.769 10 9 5.667l-.718-.735-2.908 2.979h-.076V0z",fill:"currentColor"}))}},984:function(e,n,t){"use strict";var r=t(15),a=t.n(r),i=t(109),o=t(27),u=t(7),c=t(1),l=t(127),s=t(3),d=t(0),p=t.n(d),f=t(128),m=t(61),b=t(10),h=t(12),g=t(4),v=t(18),E=t(983),y=t(979),O=t(977),j=t(14),w=t(5),k=t(72),T=t(989),x=t.n(T),S=t(980),N=t(978);function D(){var e=Object(s.a)(["\n        stroke: ",";\n      "]);return D=function(){return e},e}function C(){var e=Object(s.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return C=function(){return e},e}function P(){var e=Object(s.a)(["\n        stroke: ",";\n      "]);return P=function(){return e},e}function I(){var e=Object(s.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(s.a)(["\n          background-color: ",";\n          font-weight: 600;\n          padding: 0.25rem;\n        "]);return R=function(){return e},e}function A(){var e=Object(s.a)(["\n          color: ",";\n          font-weight: 600;\n        "]);return A=function(){return e},e}function B(){var e=Object(s.a)(["\n  margin-right: 12px;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n\n  color: ",";\n  ","\n"]);return B=function(){return e},e}function W(){var e=Object(s.a)(["\n  background-color: ",";\n  /* padding: 1.25rem 1.25rem 1rem 1.25rem; */\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin: 1rem 0.5rem 0 0.5rem;\n"]);return W=function(){return e},e}function V(){var e=Object(s.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return V=function(){return e},e}function M(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return M=function(){return e},e}var U=g.d.div(M(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.doveGray}),L=g.d.div(V(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.royalBlue}),F=g.d.div(W(),function(e){return e.theme.concreteGray}),G=g.d.span(B(),function(e){var n=e.isError,t=e.theme;return n&&t.salmonRed},function(e){var n=e.slippageWarning,t=e.highSlippageWarning,r=e.theme;return t?Object(g.c)(A(),r.salmonRed):n&&Object(g.c)(R(),Object(j.c)(.6,r.warningYellow))}),H=Object(g.d)(function(e){e.isError,e.highSlippageWarning;var n=Object(l.a)(e,["isError","highSlippageWarning"]);return p.a.createElement(S.a,n)})(I(),function(e){var n=e.isError,t=e.theme;return n?t.salmonRed:t.royalBlue},function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(g.c)(P(),t.salmonRed)}),_=Object(g.d)(function(e){e.isError,e.highSlippageWarning;var n=Object(l.a)(e,["isError","highSlippageWarning"]);return p.a.createElement(N.a,n)})(C(),function(e){var n=e.isError,t=e.theme;return n?t.salmonRed:t.royalBlue},function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(g.c)(D(),t.salmonRed)});function z(e){var n=e.openDetailsText,t=void 0===n?"Advanced Details":n,r=e.closeDetailsText,a=void 0===r?"Hide Advanced":r,i=e.contextualInfo,o=void 0===i?"":i,c=e.allowExpand,l=void 0!==c&&c,s=e.isError,f=void 0!==s&&s,m=e.slippageWarning,b=e.highSlippageWarning,h=e.dropDownContent,g=Object(d.useState)(!1),v=Object(u.a)(g,2),E=v[0],y=v[1];return l?p.a.createElement(p.a.Fragment,null,p.a.createElement(L,{onClick:function(){return y(function(e){return!e})}},p.a.createElement(p.a.Fragment,null,p.a.createElement(G,{isError:f,slippageWarning:m,highSlippageWarning:b},(m||b)&&p.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),o||(E?a:t)),E?p.a.createElement(H,{isError:f,highSlippageWarning:b}):p.a.createElement(_,{isError:f,highSlippageWarning:b}))),E&&p.a.createElement(F,null,h())):p.a.createElement(U,null,o)}function Z(){var e=Object(s.a)(["\n  padding: 0.125rem 0.3rem 0.1rem 0.3rem;\n  background-color: ",";\n  border-radius: 12px;\n  font-variant: tabular-nums;\n"]);return Z=function(){return e},e}function q(){var e=Object(s.a)(["\n  padding: 1.25rem 1.25rem 1rem 1.25rem;\n"]);return q=function(){return e},e}function Y(){var e=Object(s.a)(["\n  opacity: 0.7;\n"]);return Y=function(){return e},e}function $(){var e=Object(s.a)(["\n        color: ",";\n      "]);return $=function(){return e},e}function J(){var e=Object(s.a)(["\n        color: ",";\n      "]);return J=function(){return e},e}function K(){var e=Object(s.a)(["\n  color: inherit;\n  font-size: 0, 8rem;\n  flex-grow: 0;\n\n  ",";\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n  background-color: ",";\n  padding: 1rem 1.25rem 1rem 1.25rem;\n  border-radius: 12px;\n"]);return Q=function(){return e},e}function X(){var e=Object(s.a)(["\n  padding-top: 0.5rem;\n"]);return X=function(){return e},e}function ee(){var e=Object(s.a)(["\n  font-weight: 500;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n      border: 1px solid ",";\n    "]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n      border: 1px solid ",";\n      :hover {\n        border: 1px solid ",";\n      }\n    "]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  height: 2rem;\n  position: relative;\n  width: 120px;\n  margin-top: 6px;\n  padding: 0 0.75rem;\n\n  ","\n\n  ","\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n      color: ",";\n    "]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n      padding-top: 12px;\n    "]);return ie=function(){return e},e}function oe(){var e=Object(s.a)(["\n  ","\n  color: ",";\n  ","\n"]);return oe=function(){return e},e}function ue(){var e=Object(s.a)(["\n      color: ",";\n    "]);return ue=function(){return e},e}function ce(){var e=Object(s.a)(["\n      text-align: right;\n      color: ",";\n    "]);return ce=function(){return e},e}function le(){var e=Object(s.a)(["\n      color: initial;\n      cursor: initial;\n      text-align: right;\n    "]);return le=function(){return e},e}function se(){var e=Object(s.a)(["\n  background: ",";\n  flex-grow: 1;\n  font-size: 12px;\n\n  outline: none;\n  box-sizing: border-box;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  cursor: inherit;\n\n  color: ",";\n  text-align: left;\n  ","\n\n  ","\n\n  ","\n"]);return se=function(){return e},e}function de(){var e=Object(s.a)(["\n  width: 120px;\n"]);return de=function(){return e},e}function pe(){var e=Object(s.a)(["\n      background-color: ",";\n      color: ",";\n      border: none;\n\n      :hover {\n        border: none;\n        box-shadow: none;\n        background-color: ",";\n      }\n\n      :focus {\n        border: none;\n        box-shadow: none;\n        background-color: ",";\n      }\n\n      :active {\n        background-color: ",";\n      }\n\n      :hover:focus {\n        background-color: ",";\n      }\n      :hover:focus:active {\n        background-color: ",";\n      }\n    "]);return pe=function(){return e},e}function fe(){var e=Object(s.a)(["\n  margin-right: 8px;\n  margin-top: 6px;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  ","\n"]);return fe=function(){return e},e}function me(){var e=Object(s.a)(["\n  color: ",";\n  align-items: center;\n  min-width: 55px;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 12px;\n  border: 1px solid ",";\n  outline: none;\n  background: ",";\n\n  :hover {\n    cursor: inherit;\n    border: 1px solid ",";\n  }\n  :focus {\n    border: 1px solid ",";\n  }\n"]);return me=function(){return e},e}function be(){var e=Object(s.a)(["\n    left: -20px;\n  "]);return be=function(){return e},e}function he(){var e=Object(s.a)(["\n  position: absolute;\n  width: 228px;\n  left: -78px;\n  top: -124px;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  background: ",";\n  border: 1px solid ",";\n\n  border-radius: 8px;\n\n  animation: "," 0.15s linear;\n\n  color: ",";\n  font-style: italic;\n\n  ","\n"]);return he=function(){return e},e}function ge(){var e=Object(s.a)(["\n  from {\n    opacity : 0;\n  }\n\n  to {\n    opacity : 1;\n  }\n"]);return ge=function(){return e},e}function ve(){var e=Object(s.a)(["\n  height: 18px;\n  width: 18px;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);return Ee=function(){return e},e}function ye(){var e=Object(s.a)(["\n  position: relative;\n  flex-wrap: ",";\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  padding-top: ",";\n"]);return ye=function(){return e},e}function Oe(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n"]);return Oe=function(){return e},e}function je(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return je=function(){return e},e}var we=Object.freeze({none:"none",emptyInput:"emptyInput",invalidEntryBound:"invalidEntryBound",riskyEntryHigh:"riskyEntryHigh",riskyEntryLow:"riskyEntryLow"}),ke=g.d.div(je()),Te=g.d.div(Oe()),xe=Object(g.d)(function(e){e.wrap;var n=Object(l.a)(e,["wrap"]);return p.a.createElement(ke,n)})(ye(),function(e){return e.wrap&&"wrap"},function(e){return e.wrap&&"0.25rem"}),Se=g.d.button(Ee()),Ne=g.d.img(ve()),De=Object(g.e)(ge()),Ce=Object(g.d)(ke)(he(),function(e){return e.theme.inputBackground},function(e){return e.theme.mercuryGray},De,function(e){return e.theme.textColor},function(e){return e.theme.mediaWidth.upToSmall(be())}),Pe=g.d.button(me(),function(e){return e.theme.textColor},function(e){return e.theme.mercuryGray},function(e){return e.theme.inputBackground},function(e){return e.theme.chaliceGray},function(e){return e.theme.royalBlue}),Ie=Object(g.d)(Pe)(fe(),function(e){var n=e.active;e.theme;return n&&Object(g.c)(pe(),function(e){return e.theme.royalBlue},function(e){return e.theme.white},function(e){var n=e.theme;return Object(j.a)(.05,n.royalBlue)},function(e){var n=e.theme;return Object(j.b)(.05,n.royalBlue)},function(e){var n=e.theme;return Object(j.a)(.05,n.royalBlue)},function(e){return e.theme.royalBlue},function(e){var n=e.theme;return Object(j.a)(.05,n.royalBlue)})}),Re=Object(g.d)(Ie)(de()),Ae=g.d.input(se(),function(e){return e.theme.inputBackground},function(e){return e.theme.doveGray},function(e){return e.active&&Object(g.c)(le())},function(e){return"Custom"!==e.placeholder&&Object(g.c)(ce(),function(e){return e.theme.textColor})},function(e){return"red"===e.color&&Object(g.c)(ue(),function(e){return e.theme.salmonRed})}),Be=g.d.div(oe(),function(e){return e.show&&Object(g.c)(ie())},function(e){return e.theme.doveGray},function(e){return"red"===e.color&&Object(g.c)(ae(),function(e){return e.theme.salmonRed})}),We=Object(g.d)(Pe)(re(),function(e){return e.active&&Object(g.c)(te(),function(e){return e.theme.royalBlue},function(e){var n=e.theme;return Object(j.a)(.1,n.royalBlue)})},function(e){return"red"===e.color&&Object(g.c)(ne(),function(e){return e.theme.salmonRed})}),Ve=g.d.span(ee()),Me=g.d.div(X()),Ue=g.d.div(Q(),function(e){var n=e.theme;return Object(j.a)(.04,n.concreteGray)}),Le=g.d.div(K(),function(e){var n=e.color,t=e.theme;return"faded"===n&&Object(g.c)(J(),t.doveGray)||"red"===n&&Object(g.c)($(),t.salmonRed)}),Fe=g.d.span(Y()),Ge=g.d.div(q()),He=g.d.span(Z(),function(e){var n=e.theme;return Object(j.a)(.04,n.concreteGray)});function _e(e){var n=Object(m.b)().t,t=Object(d.useState)(3),r=Object(u.a)(t,2),a=r[0],i=r[1],o=Object(d.useState)(we.none),c=Object(u.a)(o,2),l=c[0],s=c[1],b=Object(d.useRef)(),h=Object(d.useState)(!1),g=Object(u.a)(h,2),v=g[0],E=g[1],y=Object(d.useState)(""),O=Object(u.a)(y,2),j=O[0],T=O[1],S=Object(k.c)(j,150);Object(d.useEffect)(function(){4===a&&P(S)});var N=function(){return p.a.createElement(p.a.Fragment,null,B(),p.a.createElement(Ue,null,p.a.createElement(xe,null,"Limit additional price slippage",p.a.createElement(Se,{onClick:function(){E(!v)},onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},p.a.createElement(Ne,{src:x.a,alt:"popup"})),v?p.a.createElement(Ce,null,"Lowering this limit decreases your risk of frontrunning. However, this makes it more likely that your transaction will fail due to normal price movements."):""),p.a.createElement(xe,{wrap:!0},p.a.createElement(Ie,{onClick:function(){C(1,.1)},active:1===a},"0.1%"),p.a.createElement(Ie,{onClick:function(){C(2,.5)},active:2===a},"0.5%"),p.a.createElement(Re,{onClick:function(){C(3,1)},active:3===a},"1% ",p.a.createElement(Fe,null,"(suggested)")),p.a.createElement(We,{active:4===a,color:l===we.emptyInput?"":l!==we.none&&l!==we.riskyEntryLow?"red":"",onClick:function(){D()}},p.a.createElement(Te,null,!(l===we.none||l===we.emptyInput)&&p.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),p.a.createElement(Ae,{tabIndex:-1,ref:b,active:4===a,placeholder:4===a?j?"":"0":4!==a&&""!==j?j:"Custom",value:4===a?j:"",onChange:I,color:l===we.emptyInput?"":l!==we.none&&l!==we.riskyEntryLow?"red":""}),p.a.createElement(Le,{color:4!==a?"faded":l===we.riskyEntryHigh||l===we.invalidEntryBound?"red":""},"%")))),p.a.createElement(xe,null,p.a.createElement(Be,{show:4===a,color:l===we.emptyInput?"":l!==we.none&&l!==we.riskyEntryLow?"red":""},4===a&&"none"===l.toString()&&"Custom slippage value",l===we.emptyInput&&"Enter a slippage percentage",l===we.invalidEntryBound&&"Please select a value no greater than 50%",l===we.riskyEntryHigh&&"Your transaction may be frontrun",l===we.riskyEntryLow&&"Your transaction may fail"))))},D=function(){i(4),b.current.focus(),P(S)},C=function(n,t){R(t),s(we.none),i(n),e.setcustomSlippageError("valid`")},P=function(n){return s(we.none),e.setcustomSlippageError("valid"),""===n||"."===n?(e.setcustomSlippageError("invalid"),s(we.emptyInput)):Number(n)<0||Number(n)>50?(e.setcustomSlippageError("invalid"),s(we.invalidEntryBound)):(Number(n)>=0&&Number(n)<.1&&(e.setcustomSlippageError("valid"),s(we.riskyEntryLow)),Number(n)>5&&(e.setcustomSlippageError("warning"),s(we.riskyEntryHigh)),void R(Number(n)))},I=function(e){var n=e.target.value;[/^$/,/^\d{1,2}$/,/^\d{0,2}\.\d{0,2}$/].some(function(e){return e.test(n)})&&T(n)},R=function(n){var t=parseInt(100*n);e.setRawSlippage(t),e.setRawTokenSlippage(t)},A=function(e){return p.a.createElement(Ve,null,e)},B=function(){return f.a.event({category:"TransactionDetail",action:"Open"}),e.independentField===e.INPUT?e.sending?p.a.createElement(Ge,null,p.a.createElement("div",null,n("youAreSelling")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.inputSymbol)))),p.a.createElement(Me,null,A(e.recipientAddress)," ",n("willReceive")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.dependentValueMinumum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.outputSymbol)))," "),p.a.createElement(Me,null,n("priceChange")," ",p.a.createElement(He,null,A("".concat(e.percentSlippageFormatted,"%"))))):p.a.createElement(Ge,null,p.a.createElement("div",null,n("youAreSelling")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.inputSymbol)))," ",n("forAtLeast"),p.a.createElement(He,null,A("".concat(Object(w.a)(e.dependentValueMinumum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.outputSymbol)))),p.a.createElement(Me,null,n("priceChange")," ",p.a.createElement(He,null,A("".concat(e.percentSlippageFormatted,"%"))))):e.sending?p.a.createElement(Ge,null,p.a.createElement("div",null,n("youAreSending")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.outputSymbol)))," ",n("to")," ",A(e.recipientAddress)," ",n("forAtMost")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.dependentValueMaximum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.inputSymbol)))," "),p.a.createElement(Me,null,n("priceChange")," ",p.a.createElement(He,null,A("".concat(e.percentSlippageFormatted,"%"))))):p.a.createElement(Ge,null,n("youAreBuying")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.outputSymbol)))," ",n("forAtMost")," ",p.a.createElement(He,null,A("".concat(Object(w.a)(e.dependentValueMaximum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.inputSymbol)))," ",p.a.createElement(Me,null,n("priceChange")," ",p.a.createElement(He,null,A("".concat(e.percentSlippageFormatted,"%")))))};return p.a.createElement(p.a.Fragment,null,function(){var t="",r=!1;e.inputError||e.independentError?(t=e.inputError||e.independentError,r=!0):e.inputCurrency&&e.outputCurrency?e.independentValue?e.sending&&!e.recipientAddress?t=n("noRecipient"):e.sending&&!Object(w.q)(e.recipientAddress)?t=n("invalidRecipient"):e.account||(t=n("noWallet"),r=!0):t=n("enterValueCont"):t=n("selectTokenCont");var a=e.highSlippageWarning?n("highSlippageWarning"):e.slippageWarning?n("slippageWarning"):"";return p.a.createElement(z,{openDetailsText:n("transactionDetails"),closeDetailsText:n("hideDetails"),contextualInfo:t||a,allowExpand:!(!(e.inputCurrency&&e.outputCurrency&&e.inputValueParsed&&e.outputValueParsed)||e.sending&&!e.recipientAddress),isError:r,slippageWarning:e.slippageWarning&&!t,highSlippageWarning:e.highSlippageWarning&&!t,renderTransactionDetails:B,dropDownContent:N})}())}var ze=t(981),Ze=t(82),qe=t(90),Ye=t(180),$e=t(181),Je=t(182);function Ke(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Qe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ke(t,!0).forEach(function(n){Object(c.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ke(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Xe(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return Xe=function(){return e},e}function en(){var e=Object(s.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return en=function(){return e},e}function nn(){var e=Object(s.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n"]);return nn=function(){return e},e}function tn(){var e=Object(s.a)(["\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n  cursor: ",";\n"]);return tn=function(){return e},e}function rn(){var e=Object(s.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return rn=function(){return e},e}t.d(n,"a",function(){return kn});var an=0,on=1,un=0,cn=1,ln=2,sn=100,dn=100,pn=900,fn=h.ethers.utils.bigNumberify(1e3),mn=g.d.div(rn(),function(e){return e.theme.flexRowNoWrap}),bn=Object(g.d)(function(e){e.clickable,e.active;var n=Object(l.a)(e,["clickable","active"]);return p.a.createElement(ze.a,n)})(tn(),function(e){var n=e.theme;return e.active?n.royalBlue:n.chaliceGray},function(e){return e.clickable&&"pointer"}),hn=g.d.div(nn(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),gn=g.d.span(en(),function(e){return e.theme.doveGray}),vn=g.d.div(Xe());function En(e,n,t){var r=e.mul(h.ethers.utils.bigNumberify(997)),a=r.mul(t),i=n.mul(h.ethers.utils.bigNumberify(1e3)).add(r);return a.div(i)}function yn(e,n,t){var r=n.mul(e).mul(h.ethers.utils.bigNumberify(1e3)),a=t.sub(e).mul(h.ethers.utils.bigNumberify(997));return r.div(a).add(h.ethers.constants.One)}function On(e){return{independentValue:"",dependentValue:"",independentField:an,inputCurrency:"ETH",outputCurrency:e||""}}function jn(e,n){switch(n.type){case"FLIP_INDEPENDENT":var t=e.independentField,r=e.inputCurrency,a=e.outputCurrency;return Qe({},e,{dependentValue:"",independentField:t===an?on:an,inputCurrency:a,outputCurrency:r});case"SELECT_CURRENCY":var i=e.inputCurrency,o=e.outputCurrency,u=n.payload,c=u.field,l=u.currency,s=c===an?l:i,d=c===on?l:o;return Qe({},e,s===d?{inputCurrency:c===an?l:"",outputCurrency:c===on?l:""}:{inputCurrency:s,outputCurrency:d});case"UPDATE_INDEPENDENT":var p=n.payload,f=p.field,m=p.value,b=e.dependentValue;return Qe({},e,{independentValue:m,dependentValue:m===e.independentValue?b:"",independentField:f});case"UPDATE_DEPENDENT":return Qe({},e,{dependentValue:n.payload});default:return On()}}function wn(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(n||0===n)&&t&&(r||0===r)){var i=h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18));return a?e.mul(i).div(t).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(r))).div(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(n))):t.mul(i).div(e).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(n))).div(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(r)))}}catch(o){}}function kn(e){var n=e.initialCurrency,t=e.sending,r=Object(m.b)().t,c=Object(b.useWeb3Context)().account,l=Object(qe.e)(),s=Object(d.useState)(sn),g=Object(u.a)(s,2),j=g[0],T=g[1],x=Object(d.useState)(dn),S=Object(u.a)(x,2),N=S[0],D=S[1],C=h.ethers.utils.bigNumberify(j),P=h.ethers.utils.bigNumberify(N);Object(d.useEffect)(function(){f.a.pageview(window.location.pathname+window.location.search)},[]);var I=Object(d.useReducer)(jn,n,On),R=Object(u.a)(I,2),A=R[0],B=R[1],W=A.independentValue,V=A.dependentValue,M=A.independentField,U=A.inputCurrency,L=A.outputCurrency,F=Object(d.useState)({address:"",name:""}),G=Object(u.a)(F,2),H=G[0],_=G[1],z=Object(d.useState)(),Z=Object(u.a)(z,2),q=Z[0],Y=Z[1],$=function(e,n){return e&&n?"ETH"===e?un:"ETH"===n?cn:ln:null}(U,L),J=Object(Ze.c)(U),K=J.symbol,Q=J.decimals,X=J.exchangeAddress,ee=Object(Ze.c)(L),ne=ee.symbol,te=ee.decimals,re=ee.exchangeAddress,ae=Object(k.e)(X),ie=Object(k.e)(re),oe=$===un?ie:ae,ue=Object(Je.b)(c,U,X),ce=Object(Ye.c)(U),le=ce.reserveETH,se=ce.reserveToken,de=Object(Ye.c)(L),pe=de.reserveETH,fe=de.reserveToken,me=Object(Ye.b)(c,U),be=Object(Ye.b)(c,L),he=me&&Number.isInteger(Q)?Object(w.a)(me,Q,Math.min(4,Q)):"",ge=be&&Number.isInteger(te)?Object(w.a)(be,te,Math.min(4,te)):"",ve=M===an?Q:te,Ee=M===on?Q:te,ye=Object(d.useState)(),Oe=Object(u.a)(ye,2),je=Oe[0],we=Oe[1],ke=V&&(Ee||0===Ee)?Object(w.a)(V,Ee,Math.min(4,Ee),!1):"",Te=M===an?je:V,xe=M===an?W:ke,Se=M===on?je:V,Ne=M===on?W:ke,De=Object(d.useState)(),Ce=Object(u.a)(De,2),Pe=Ce[0],Ie=Ce[1];Object(d.useEffect)(function(){if(W&&(ve||0===ve)){try{var e=h.ethers.utils.parseUnits(W,ve);if(e.lte(h.ethers.constants.Zero)||e.gte(h.ethers.constants.MaxUint256))throw Error();we(e),Ie(null)}catch(n){Ie(r("inputNotValid"))}return function(){we(),Ie()}}},[W,ve,r]);var Re=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(e){var a=e.mul(n?t:r).div(h.ethers.utils.bigNumberify(1e4)),i=e.sub(a),o=e.add(a);return{minimum:i.lt(h.ethers.constants.Zero)?h.ethers.constants.Zero:i,maximum:o.gt(h.ethers.constants.MaxUint256)?h.ethers.constants.MaxUint256:o}}return{}}(V,$===ln,P,C),Ae=Re.minimum,Be=Re.maximum,We=Object(d.useState)(),Ve=Object(u.a)(We,2),Me=Ve[0],Ue=Ve[1],Le=Object(d.useState)(!1),Fe=Object(u.a)(Le,2),Ge=Fe[0],He=Fe[1];Object(d.useEffect)(function(){var e=M===an?je:Be;if(me&&(ue||"ETH"===U)&&e)return me.lt(e)?Ue(r("insufficientBalance")):"ETH"!==U&&ue.lt(e)?(Ue(r("unlockTokenCont")),He(!0)):(Ue(null),He(!1)),function(){Ue(),He(!1)}},[M,je,Be,me,U,ue,r]),Object(d.useEffect)(function(){var e=je;if($===un){var n=pe,t=fe;if(e&&n&&t){try{var a=M===an?En(e,n,t):yn(e,n,t);if(a.lte(h.ethers.constants.Zero))throw Error();B({type:"UPDATE_DEPENDENT",payload:a})}catch(g){Ie(r("insufficientLiquidity"))}return function(){B({type:"UPDATE_DEPENDENT",payload:""})}}}else if($===cn){var i=le,o=se;if(e&&i&&o){try{var u=M===an?En(e,o,i):yn(e,o,i);if(u.lte(h.ethers.constants.Zero))throw Error();B({type:"UPDATE_DEPENDENT",payload:u})}catch(v){Ie(r("insufficientLiquidity"))}return function(){B({type:"UPDATE_DEPENDENT",payload:""})}}}else if($===ln){var c=le,l=se,s=pe,d=fe;if(e&&c&&l&&s&&d){try{if(M===an){var p=En(e,l,c);if(p.lte(h.ethers.constants.Zero))throw Error();var f=En(p,s,d);if(f.lte(h.ethers.constants.Zero))throw Error();B({type:"UPDATE_DEPENDENT",payload:f})}else{var m=yn(e,s,d);if(m.lte(h.ethers.constants.Zero))throw Error();var b=yn(m,l,c);if(b.lte(h.ethers.constants.Zero))throw Error();B({type:"UPDATE_DEPENDENT",payload:b})}}catch(E){Ie(r("insufficientLiquidity"))}return function(){B({type:"UPDATE_DEPENDENT",payload:""})}}}},[je,$,pe,fe,le,se,M,r]);var ze=Object(d.useState)(!1),Ke=Object(u.a)(ze,2),Qe=Ke[0],Xe=Ke[1],en=wn(Te,Q,Se,te),nn=wn(Te,Q,Se,te,!0),tn=function(e,n,t,r,a,i,o){var u=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(e===un)return wn(a,18,i,o,u);if(e===cn)return wn(t,r,n,18,u);if(e===ln){var c=h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18)),l=wn(t,r,n,18),s=wn(a,18,i,o);try{return l&&s?l.mul(s).div(c):void 0}catch(d){}}}($,le,se,Q,pe,fe,te),rn=en&&tn?en.sub(tn).abs().mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(18))).div(tn).sub(h.ethers.utils.bigNumberify(3).mul(h.ethers.utils.bigNumberify(10).pow(h.ethers.utils.bigNumberify(15)))):void 0,kn=rn&&Object(w.a)(rn,16,2),Tn=rn&&rn.gte(h.ethers.utils.parseEther(".05"))&&rn.lt(h.ethers.utils.parseEther(".2")),xn=rn&&rn.gte(h.ethers.utils.parseEther(".2")),Sn=t?en&&null===Me&&null===Pe&&null===q:en&&null===Me&&null===Pe,Nn="(".concat(r("estimated"),")");function Dn(e){return"Balance: ".concat(e)}function Cn(){return(Cn=Object(o.a)(a.a.mark(function e(){var n,r,o,u,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.ceil(Date.now()/1e3)+pn,M===an?(f.a.event({category:"".concat($),action:t?"TransferInput":"SwapInput"}),$===un?(r=t?oe.estimate.ethToTokenTransferInput:oe.estimate.ethToTokenSwapInput,o=t?oe.ethToTokenTransferInput:oe.ethToTokenSwapInput,u=t?[Ae,n,H.address]:[Ae,n],c=je):$===cn?(r=t?oe.estimate.tokenToEthTransferInput:oe.estimate.tokenToEthSwapInput,o=t?oe.tokenToEthTransferInput:oe.tokenToEthSwapInput,u=t?[je,Ae,n,H.address]:[je,Ae,n],c=h.ethers.constants.Zero):$===ln&&(r=t?oe.estimate.tokenToTokenTransferInput:oe.estimate.tokenToTokenSwapInput,o=t?oe.tokenToTokenTransferInput:oe.tokenToTokenSwapInput,u=t?[je,Ae,h.ethers.constants.One,n,H.address,L]:[je,Ae,h.ethers.constants.One,n,L],c=h.ethers.constants.Zero)):M===on&&(f.a.event({category:"".concat($),action:t?"TransferOutput":"SwapOutput"}),$===un?(r=t?oe.estimate.ethToTokenTransferOutput:oe.estimate.ethToTokenSwapOutput,o=t?oe.ethToTokenTransferOutput:oe.ethToTokenSwapOutput,u=t?[je,n,H.address]:[je,n],c=Be):$===cn?(r=t?oe.estimate.tokenToEthTransferOutput:oe.estimate.tokenToEthSwapOutput,o=t?oe.tokenToEthTransferOutput:oe.tokenToEthSwapOutput,u=t?[je,Be,n,H.address]:[je,Be,n],c=h.ethers.constants.Zero):$===ln&&(r=t?oe.estimate.tokenToTokenTransferOutput:oe.estimate.tokenToTokenSwapOutput,o=t?oe.tokenToTokenTransferOutput:oe.tokenToTokenSwapOutput,u=t?[je,Be,h.ethers.constants.MaxUint256,n,H.address,L]:[je,Be,h.ethers.constants.MaxUint256,n,L],c=h.ethers.constants.Zero)),e.next=4,r.apply(void 0,Object(i.a)(u).concat([{value:c}]));case 4:s=e.sent,o.apply(void 0,Object(i.a)(u).concat([{value:c,gasLimit:Object(w.b)(s,fn)}])).then(function(e){l(e)});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Pn=Object(d.useState)(""),In=Object(u.a)(Pn,2),Rn=In[0],An=In[1],Bn=Object($e.b)();return p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{title:r("input"),allBalances:Bn,description:xe&&M===on?Nn:"",extraText:he&&Dn(he),extraTextClickHander:function(){if(me&&Q){var e="ETH"===U?me.sub(h.ethers.utils.parseEther(".1")):me;e.gt(h.ethers.constants.Zero)&&B({type:"UPDATE_INDEPENDENT",payload:{value:Object(w.a)(e,Q,Q,!1),field:an}})}},onCurrencySelected:function(e){B({type:"SELECT_CURRENCY",payload:{currency:e,field:an}})},onValueChange:function(e){B({type:"UPDATE_INDEPENDENT",payload:{value:e,field:an}})},showUnlock:Ge,selectedTokens:[U,L],selectedTokenAddress:U,value:xe,errorMessage:Me||(M===an?Pe:"")}),p.a.createElement(O.a,null,p.a.createElement(mn,null,p.a.createElement(bn,{onClick:function(){B({type:"FLIP_INDEPENDENT"})},clickable:!0,alt:"swap",active:Sn}))),p.a.createElement(E.a,{title:r("output"),allBalances:Bn,description:Ne&&M===an?Nn:"",extraText:ge&&Dn(ge),onCurrencySelected:function(e){B({type:"SELECT_CURRENCY",payload:{currency:e,field:on}})},onValueChange:function(e){B({type:"UPDATE_INDEPENDENT",payload:{value:e,field:on}})},selectedTokens:[U,L],selectedTokenAddress:L,value:Ne,errorMessage:M===on?Pe:"",disableUnlock:!0}),t?p.a.createElement(p.a.Fragment,null,p.a.createElement(O.a,null,p.a.createElement(mn,null,p.a.createElement(bn,{active:Sn,alt:"arrow"}))),p.a.createElement(y.a,{onChange:_,onError:Y})):"",p.a.createElement(O.a,{hideBottom:!0},p.a.createElement(hn,{onClick:function(){Xe(function(e){return!e})}},p.a.createElement(gn,null,r("exchangeRate")),Qe?p.a.createElement("span",null,en?"1 ".concat(K," = ").concat(Object(w.a)(en,18,4,!1)," ").concat(ne):" - "):p.a.createElement("span",null,en?"1 ".concat(ne," = ").concat(Object(w.a)(nn,18,4,!1)," ").concat(K):" - "))),p.a.createElement(_e,{account:c,setRawSlippage:T,setRawTokenSlippage:D,rawSlippage:j,slippageWarning:Tn,highSlippageWarning:xn,inputError:Me,independentError:Pe,inputCurrency:U,outputCurrency:L,independentValue:W,independentValueParsed:je,independentField:M,INPUT:an,inputValueParsed:Te,outputValueParsed:Se,inputSymbol:K,outputSymbol:ne,dependentValueMinumum:Ae,dependentValueMaximum:Be,dependentDecimals:Ee,independentDecimals:ve,percentSlippageFormatted:kn,setcustomSlippageError:An,recipientAddress:H.address,sending:t}),p.a.createElement(vn,null,p.a.createElement(v.b,{disabled:!Sn||"invalid"===Rn,onClick:function(){return Cn.apply(this,arguments)},warning:xn||"warning"===Rn},r(t?xn||"warning"===Rn?"sendAnyway":"send":xn||"warning"===Rn?"swapAnyway":"swap"))))}},989:function(e,n,t){e.exports=t.p+"static/media/question.d293f467.svg"}}]);
//# sourceMappingURL=1.9ae2ff36.chunk.js.map