/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
/*! jQuery Migrate v3.1.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+n[i]>+o[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.1.0",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a=s.fn.init,c=s.isNumeric,d=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,i)&&(s.find[i]=d[i]);s.fn.size=function(){return u("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},s.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},s.isNumeric=function(e){var t,r,n=c(e),o=(r=(t=e)&&t.toString(),!s.isArray(t)&&0<=r-parseFloat(r)+1);return n!==o&&u("jQuery.isNumeric() should not be called on constructed objects"),o},e("3.3.0")&&o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.2.0")&&o(s,"nodeName",s.nodeName,"jQuery.nodeName is deprecated");var f=s.ajax;s.ajax=function(){var e=f.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var y=s.fn.removeAttr,m=s.fn.toggleClass,h=/\S+/g;s.fn.removeAttr=function(e){var r=this;return s.each(e.match(h),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),y.apply(this,arguments)};var g=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))});s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in g||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o};var v=s.data;s.data=function(e,t,r){var n;if(t&&"object"==typeof t&&2===arguments.length){n=s.hasData(e)&&v.call(this,e);var o={};for(var i in t)i!==s.camelCase(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return v.call(this,e,o),t}return t&&"string"==typeof t&&t!==s.camelCase(t)&&(n=s.hasData(e)&&v.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):v.apply(this,arguments)};function j(e){return e}var Q=s.Tween.prototype.run;s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=j),Q.apply(this,arguments)};var w=s.fx.interval||13,b="jQuery.fx.interval is deprecated";n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(b),w},set:function(e){u(b),w=e}});var x=s.fn.load,k=s.event.add,A=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=A.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),k.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?x.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var S=s.fn.offset;s.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?S.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var q=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),q.call(this,e,t)};var C=s.fn.andSelf||s.fn.addBack;s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),C.apply(this,arguments)};var M=s.Deferred,R=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];return s.Deferred=function(e){var i=M(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(R,function(e,t){var r=s.isFunction(o[e])&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&s.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=M.exceptionHook,s});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||y(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=-1!==['left','right'].indexOf(e.placement),p=-1!==e.placement.indexOf('-'),s=i.width%2==n.width%2,d=1==i.width%2&&1==n.width%2,a=function(e){return e},l=t?r||p||s?$:Z:a,f=t?$:a;return{left:l(d&&!p&&t?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:l(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
"use strict";!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],b):a.GMaps=b()}(this,function(){var a=function(a,b){var c;if(a===b)return a;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a},b=function(a,b){var c,d=Array.prototype.slice.call(arguments,2),e=[],f=a.length;if(Array.prototype.map&&a.map===Array.prototype.map)e=Array.prototype.map.call(a,function(a){var c=d.slice(0);return c.splice(0,0,a),b.apply(this,c)});else for(c=0;c<f;c++)callback_params=d,callback_params.splice(0,0,a[c]),e.push(b.apply(this,callback_params));return e},c=function(a){var b,c=[];for(b=0;b<a.length;b++)c=c.concat(a[b]);return c},d=function(a,b){var c=a[0],d=a[1];return b&&(c=a[1],d=a[0]),new google.maps.LatLng(c,d)},f=function(a,b){var c;for(c=0;c<a.length;c++)a[c]instanceof google.maps.LatLng||(a[c].length>0&&"object"==typeof a[c][0]?a[c]=f(a[c],b):a[c]=d(a[c],b));return a},g=function(a,b){var c=a.replace(".","");return"jQuery"in this&&b?$("."+c,b)[0]:document.getElementsByClassName(c)[0]},h=function(a,b){var a=a.replace("#","");return"jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},i=function(a){var b=0,c=0;if(a.getBoundingClientRect){var d=a.getBoundingClientRect(),e=-(window.scrollX?window.scrollX:window.pageXOffset),f=-(window.scrollY?window.scrollY:window.pageYOffset);return[d.left-e,d.top-f]}if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},j=function(b){var c=document,d=function(b){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new d(b);b.zoom=b.zoom||15,b.mapType=b.mapType||"roadmap";var e,f=function(a,b){return void 0===a?b:a},j=this,k=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],l=["mousemove","mouseout","mouseover"],m=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],n=b.el||b.div,o=b.markerClusterer,p=google.maps.MapTypeId[b.mapType.toUpperCase()],q=new google.maps.LatLng(b.lat,b.lng),r=f(b.zoomControl,!0),s=b.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},t=s.style||"DEFAULT",u=s.position||"TOP_LEFT",v=f(b.panControl,!0),w=f(b.mapTypeControl,!0),x=f(b.scaleControl,!0),y=f(b.streetViewControl,!0),z=f(z,!0),A={},B={zoom:this.zoom,center:q,mapTypeId:p},C={panControl:v,zoomControl:r,zoomControlOptions:{style:google.maps.ZoomControlStyle[t],position:google.maps.ControlPosition[u]},mapTypeControl:w,scaleControl:x,streetViewControl:y,overviewMapControl:z};if("string"==typeof b.el||"string"==typeof b.div?n.indexOf("#")>-1?this.el=h(n,b.context):this.el=g.apply(this,[n,b.context]):this.el=n,void 0===this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[j.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=b.zoom,this.registered_events={},this.el.style.width=b.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=b.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=b.enableNewStyle,e=0;e<m.length;e++)delete b[m[e]];for(1!=b.disableDefaultUI&&(B=a(B,C)),A=a(B,b),e=0;e<k.length;e++)delete A[k[e]];for(e=0;e<l.length;e++)delete A[l[e]];this.map=new google.maps.Map(this.el,A),o&&(this.markerClusterer=o.apply(this,[this.map]));var D=function(a,b){var c="",d=window.context_menu[j.el.id][a];for(var e in d)if(d.hasOwnProperty(e)){var f=d[e];c+='<li><a id="'+a+"_"+e+'" href="#">'+f.title+"</a></li>"}if(h("gmaps_context_menu")){var g=h("gmaps_context_menu");g.innerHTML=c;var e,k=g.getElementsByTagName("a"),l=k.length;for(e=0;e<l;e++){var m=k[e],n=function(c){c.preventDefault(),d[this.id.replace(a+"_","")].action.apply(j,[b]),j.hideContextMenu()};google.maps.event.clearListeners(m,"click"),google.maps.event.addDomListenerOnce(m,"click",n,!1)}var o=i.apply(this,[j.el]),p=o[0]+b.pixel.x-15,q=o[1]+b.pixel.y-15;g.style.left=p+"px",g.style.top=q+"px"}};this.buildContextMenu=function(a,b){if("marker"===a){b.pixel={};var c=new google.maps.OverlayView;c.setMap(j.map),c.draw=function(){var d=c.getProjection(),e=b.marker.getPosition();b.pixel=d.fromLatLngToContainerPixel(e),D(a,b)}}else D(a,b);var d=h("gmaps_context_menu");setTimeout(function(){d.style.display="block"},0)},this.setContextMenu=function(a){window.context_menu[j.el.id][a.control]={};var b,d=c.createElement("ul");for(b in a.options)if(a.options.hasOwnProperty(b)){var e=a.options[b];window.context_menu[j.el.id][a.control][e.name]={title:e.title,action:e.action}}d.id="gmaps_context_menu",d.style.display="none",d.style.position="absolute",d.style.minWidth="100px",d.style.background="white",d.style.listStyle="none",d.style.padding="8px",d.style.boxShadow="2px 2px 6px #ccc",h("gmaps_context_menu")||c.body.appendChild(d);var f=h("gmaps_context_menu");google.maps.event.addDomListener(f,"mouseout",function(a){a.relatedTarget&&this.contains(a.relatedTarget)||window.setTimeout(function(){f.style.display="none"},400)},!1)},this.hideContextMenu=function(){var a=h("gmaps_context_menu");a&&(a.style.display="none")};var E=function(a,c){google.maps.event.addListener(a,c,function(a){void 0==a&&(a=this),b[c].apply(this,[a]),j.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var F=0;F<k.length;F++){var G=k[F];G in b&&E(this.map,G)}for(var F=0;F<l.length;F++){var G=l[F];G in b&&E(this.map,G)}google.maps.event.addListener(this.map,"rightclick",function(a){b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[j.el.id].map&&j.buildContextMenu("map",a)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var a,b=[],c=this.markers.length;for(a=0;a<c;a++)"boolean"==typeof this.markers[a].visible&&this.markers[a].visible&&b.push(this.markers[a].getPosition());this.fitLatLngBounds(b)},this.fitLatLngBounds=function(a){var b,c=a.length,d=new google.maps.LatLngBounds;for(b=0;b<c;b++)d.extend(a[b]);this.map.fitBounds(d)},this.setCenter=function(a,b,c){this.map.panTo(new google.maps.LatLng(a,b)),c&&c()},this.getElement=function(){return this.el},this.zoomIn=function(a){a=a||1,this.zoom=this.map.getZoom()+a,this.map.setZoom(this.zoom)},this.zoomOut=function(a){a=a||1,this.zoom=this.map.getZoom()-a,this.map.setZoom(this.zoom)};var H,I=[];for(H in this.map)"function"!=typeof this.map[H]||this[H]||I.push(H);for(e=0;e<I.length;e++)!function(a,b,c){a[c]=function(){return b[c].apply(b,arguments)}}(this,this.map,I[e])};return d}(this);j.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer",a.disableDefaultStyles!==!0&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id),a.title&&(b.title=a.title),a.classes&&(b.className=a.classes),a.content&&("string"==typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content)),a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)!function(b,c){google.maps.event.addDomListener(b,c,function(){a.events[c].apply(this,[this])})}(b,d);return b.index=1,b},j.prototype.addControl=function(a){var b=this.createControl(a);return this.controls.push(b),this.map.controls[b.position].push(b),b},j.prototype.removeControl=function(a){var b,c=null;for(b=0;b<this.controls.length;b++)this.controls[b]==a&&(c=this.controls[b].position,this.controls.splice(b,1));if(c)for(b=0;b<this.map.controls.length;b++){var d=this.map.controls[a.position];if(d.getAt(b)==a){d.removeAt(b);break}}return a},j.prototype.createMarker=function(b){if(void 0==b.lat&&void 0==b.lng&&void 0==b.position)throw"No latitude or longitude defined.";var c=this,d=b.details,e=b.fences,f=b.outside,g={position:new google.maps.LatLng(b.lat,b.lng),map:null},h=a(g,b);delete h.lat,delete h.lng,delete h.fences,delete h.outside;var i=new google.maps.Marker(h);if(i.fences=e,b.infoWindow){i.infoWindow=new google.maps.InfoWindow(b.infoWindow);for(var j=["closeclick","content_changed","domready","position_changed","zindex_changed"],k=0;k<j.length;k++)!function(a,c){b.infoWindow[c]&&google.maps.event.addListener(a,c,function(a){b.infoWindow[c].apply(this,[a])})}(i.infoWindow,j[k])}for(var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],m=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],k=0;k<l.length;k++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this,[this])})}(i,l[k]);for(var k=0;k<m.length;k++)!function(a,c,d){b[d]&&google.maps.event.addListener(c,d,function(c){c.pixel||(c.pixel=a.getProjection().fromLatLngToPoint(c.latLng)),b[d].apply(this,[c])})}(this.map,i,m[k]);return google.maps.event.addListener(i,"click",function(){this.details=d,b.click&&b.click.apply(this,[this]),i.infoWindow&&(c.hideInfoWindows(),i.infoWindow.open(c.map,i))}),google.maps.event.addListener(i,"rightclick",function(a){a.marker=this,b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[c.el.id].marker&&c.buildContextMenu("marker",a)}),i.fences&&google.maps.event.addListener(i,"dragend",function(){c.checkMarkerGeofence(i,function(a,b){f(a,b)})}),i},j.prototype.addMarker=function(a){var b;if(a.hasOwnProperty("gm_accessors_"))b=a;else{if(!(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||a.position))throw"No latitude or longitude defined.";b=this.createMarker(a)}return b.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(b),this.markers.push(b),j.fire("marker_added",b,this),b},j.prototype.addMarkers=function(a){for(var b,c=0;b=a[c];c++)this.addMarker(b);return this.markers},j.prototype.hideInfoWindows=function(){for(var a,b=0;a=this.markers[b];b++)a.infoWindow&&a.infoWindow.close()},j.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===a){this.markers[b].setMap(null),this.markers.splice(b,1),this.markerClusterer&&this.markerClusterer.removeMarker(a),j.fire("marker_removed",a,this);break}return a},j.prototype.removeMarkers=function(a){var b=[];if(void 0===a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null),j.fire("marker_removed",d,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=b}else{for(var c=0;c<a.length;c++){var e=this.markers.indexOf(a[c]);if(e>-1){var d=this.markers[e];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}}for(var c=0;c<this.markers.length;c++){var d=this.markers[c];null!=d.getMap()&&b.push(d)}this.markers=b}},j.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;return b.setMap(this.map),null!=a.auto_show&&(c=a.auto_show),b.onAdd=function(){var c=document.createElement("div");c.style.borderStyle="none",c.style.borderWidth="0px",c.style.position="absolute",c.style.zIndex=100,c.innerHTML=a.content,b.el=c,a.layer||(a.layer="overlayLayer");var d=this.getPanes(),e=d[a.layer],f=["contextmenu","DOMMouseScroll","dblclick","mousedown"];e.appendChild(c);for(var g=0;g<f.length;g++)!function(a,b){google.maps.event.addDomListener(a,b,function(a){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(a.cancelBubble=!0,a.returnValue=!1):a.stopPropagation()})}(c,f[g]);a.click&&(d.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,[b])})),google.maps.event.trigger(this,"ready")},b.draw=function(){var d=this.getProjection(),e=d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0,a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight,i=g.clientWidth;switch(a.verticalAlign){case"top":f.style.top=e.y-h+a.verticalOffset+"px";break;default:case"middle":f.style.top=e.y-h/2+a.verticalOffset+"px";break;case"bottom":f.style.top=e.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case"left":f.style.left=e.x-i+a.horizontalOffset+"px";break;default:case"center":f.style.left=e.x-i/2+a.horizontalOffset+"px";break;case"right":f.style.left=e.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none",c||a.show.apply(this,[f])},b.onRemove=function(){var c=b.el;a.remove?a.remove.apply(this,[c]):(b.el.parentNode.removeChild(b.el),b.el=null)},this.overlays.push(b),b},j.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null),this.overlays.splice(b,1);break}},j.prototype.removeOverlays=function(){for(var a,b=0;a=this.overlays[b];b++)a.setMap(null);this.overlays=[]},j.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d,e=0;d=c[e];e++)b.push(new google.maps.LatLng(d[0],d[1]));var f={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(f.clickable=a.clickable),a.hasOwnProperty("editable")&&(f.editable=a.editable),a.hasOwnProperty("icons")&&(f.icons=a.icons),a.hasOwnProperty("zIndex")&&(f.zIndex=a.zIndex);for(var g=new google.maps.Polyline(f),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(b,c){a[c]&&google.maps.event.addListener(b,c,function(b){a[c].apply(this,[b])})}(g,h[i]);return this.polylines.push(g),j.fire("polyline_added",g,this),g},j.prototype.removePolyline=function(a){for(var b=0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null),this.polylines.splice(b,1),j.fire("polyline_removed",a,this);break}},j.prototype.removePolylines=function(){for(var a,b=0;a=this.polylines[b];b++)a.setMap(null);this.polylines=[]},j.prototype.drawCircle=function(b){b=a({map:this.map,center:new google.maps.LatLng(b.lat,b.lng)},b),delete b.lat,delete b.lng;for(var c=new google.maps.Circle(b),d=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],e=0;e<d.length;e++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(c,d[e]);return this.polygons.push(c),c},j.prototype.drawRectangle=function(b){b=a({map:this.map},b);var c=new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0],b.bounds[0][1]),new google.maps.LatLng(b.bounds[1][0],b.bounds[1][1]));b.bounds=c;for(var d=new google.maps.Rectangle(b),e=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],f=0;f<e.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e[f]);return this.polygons.push(d),d},j.prototype.drawPolygon=function(d){var e=!1;d.hasOwnProperty("useGeoJSON")&&(e=d.useGeoJSON),delete d.useGeoJSON,d=a({map:this.map},d),0==e&&(d.paths=[d.paths.slice(0)]),d.paths.length>0&&d.paths[0].length>0&&(d.paths=c(b(d.paths,f,e)));for(var g=new google.maps.Polygon(d),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(a,b){d[b]&&google.maps.event.addListener(a,b,function(a){d[b].apply(this,[a])})}(g,h[i]);return this.polygons.push(g),j.fire("polygon_added",g,this),g},j.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null),this.polygons.splice(b,1),j.fire("polygon_removed",a,this);break}},j.prototype.removePolygons=function(){for(var a,b=0;a=this.polygons[b];b++)a.setMap(null);this.polygons=[]},j.prototype.getFromFusionTables=function(a){var b=a.events;delete a.events;var c=a,d=new google.maps.FusionTablesLayer(c);for(var e in b)!function(a,c){google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e);return this.layers.push(d),d},j.prototype.loadFromFusionTables=function(a){var b=this.getFromFusionTables(a);return b.setMap(this.map),b},j.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url,delete a.events;var d=a,e=new google.maps.KmlLayer(b,d);for(var f in c)!function(a,b){google.maps.event.addListener(a,b,function(a){c[b].apply(this,[a])})}(e,f);return this.layers.push(e),e},j.prototype.loadFromKML=function(a){var b=this.getFromKML(a);return b.setMap(this.map),b},j.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case"weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=c=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer,c.setTag(b.filter),delete b.filter,b.click&&google.maps.event.addListener(c,"click",function(a){b.click(a),delete b.click});break;case"places":if(this.singleLayers.places=c=new google.maps.places.PlacesService(this.map),b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch),b.search&&c.search(d,b.search),b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}if(b.textSearch){var e={bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null};c.textSearch(e,b.textSearch)}}if(void 0!==c)return"function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c},j.prototype.removeLayer=function(a){if("string"==typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null),this.layers.splice(b,1);break}};var k,l;return j.prototype.getRoutes=function(b){switch(b.travelMode){case"bicycling":k=google.maps.TravelMode.BICYCLING;break;case"transit":k=google.maps.TravelMode.TRANSIT;break;case"driving":k=google.maps.TravelMode.DRIVING;break;default:k=google.maps.TravelMode.WALKING}l="imperial"===b.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var c={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},d=a(c,b);d.origin=/string/.test(typeof b.origin)?b.origin:new google.maps.LatLng(b.origin[0],b.origin[1]),d.destination=/string/.test(typeof b.destination)?b.destination:new google.maps.LatLng(b.destination[0],b.destination[1]),d.travelMode=k,d.unitSystem=l,delete d.callback,delete d.error;var e=[];(new google.maps.DirectionsService).route(d,function(a,c){if(c===google.maps.DirectionsStatus.OK){for(var d in a.routes)a.routes.hasOwnProperty(d)&&e.push(a.routes[d]);b.callback&&b.callback(e,a,c)}else b.error&&b.error(a,c)})},j.prototype.removeRoutes=function(){this.routes.length=0},j.prototype.getElevations=function(d){d=a({locations:[],path:!1,samples:256},d),d.locations.length>0&&d.locations[0].length>0&&(d.locations=c(b([d.locations],f,!1)));var e=d.callback;delete d.callback;var g=new google.maps.ElevationService;if(d.path){var h={path:d.locations,samples:d.samples};g.getElevationAlongPath(h,function(a,b){e&&"function"==typeof e&&e(a,b)})}else delete d.path,delete d.samples,g.getElevationForLocations(d,function(a,b){e&&"function"==typeof e&&e(a,b)})},j.prototype.cleanRoute=j.prototype.removePolylines,j.prototype.renderRoute=function(b,c){var d,e="string"==typeof c.panel?document.getElementById(c.panel.replace("#","")):c.panel;c.panel=e,c=a({map:this.map},c),d=new google.maps.DirectionsRenderer(c),this.getRoutes({origin:b.origin,destination:b.destination,travelMode:b.travelMode,waypoints:b.waypoints,unitSystem:b.unitSystem,error:b.error,avoidHighways:b.avoidHighways,avoidTolls:b.avoidTolls,optimizeWaypoints:b.optimizeWaypoints,callback:function(a,b,c){c===google.maps.DirectionsStatus.OK&&d.setDirections(b)}})},j.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,callback:function(c){if(c.length>0){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons),b.drawPolyline(d),a.callback&&a.callback(c[c.length-1])}}})},j.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(b){if(b.length>0&&a.start&&a.start(b[b.length-1]),b.length>0&&a.step){var c=b[b.length-1];if(c.legs.length>0)for(var d,e=c.legs[0].steps,f=0;d=e[f];f++)d.step_number=f,a.step(d,c.legs[0].steps.length-1)}b.length>0&&a.end&&a.end(b[b.length-1])}});else if(a.route&&a.route.legs.length>0)for(var b,c=a.route.legs[0].steps,d=0;b=c[d];d++)b.step_number=d,a.step(b)},j.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,error:a.error,callback:function(c){if(c.length>0&&a.start&&a.start(c[c.length-1]),c.length>0&&a.step){var d=c[c.length-1];if(d.legs.length>0)for(var e,f=d.legs[0].steps,g=0;e=f[g];g++){e.step_number=g;var h={path:e.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(h.icons=a.icons),b.drawPolyline(h),a.step(e,d.legs[0].steps.length-1)}}c.length>0&&a.end&&a.end(c[c.length-1])}});else if(a.route&&a.route.legs.length>0)for(var c,d=a.route.legs[0].steps,e=0;c=d[e];e++){c.step_number=e;var f={path:c.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(f.icons=a.icons),b.drawPolyline(f),a.step(c)}},j.Route=function(a){this.origin=a.origin,this.destination=a.destination,this.waypoints=a.waypoints,this.map=a.map,this.route=a.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons),this.polyline=this.map.drawPolyline(b).getPath()},j.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0],a.callback&&a.callback.call(b)}})},j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.pop()}},j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}},j.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))},j.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c,d=0;c=a.fences[d];d++){var e=a.getPosition();this.checkGeofence(e.lat(),e.lng(),c)||b(a,c)}},j.prototype.toImage=function(a){var a=a||{},b={};if(b.size=a.size||[this.el.clientWidth,this.el.clientHeight],b.lat=this.getCenter().lat(),b.lng=this.getCenter().lng(),this.markers.length>0){b.markers=[];for(var c=0;c<this.markers.length;c++)b.markers.push({lat:this.markers[c].getPosition().lat(),lng:this.markers[c].getPosition().lng()})}if(this.polylines.length>0){var d=this.polylines[0];b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(d.getPath()),b.polyline.strokeColor=d.strokeColor,b.polyline.strokeOpacity=d.strokeOpacity,b.polyline.strokeWeight=d.strokeWeight}return j.staticMapURL(b)},j.staticMapURL=function(a){function b(a,b){if("#"===a[0]&&(a=a.replace("#","0x"),b)){if(b=parseFloat(b),0===(b=Math.min(1,Math.max(b,0))))return"0x00000000";b=(255*b).toString(16),1===b.length&&(b+=b),a=a.slice(0,8)+b}return a}var c,d=[],e=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(e=a.url,delete a.url),e+="?";var f=a.markers;delete a.markers,!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;if(delete a.polyline,a.center)d.push("center="+a.center),delete a.center;else if(a.address)d.push("center="+a.address),delete a.address;else if(a.lat)d.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var i=encodeURI(a.visible.join("|"));d.push("visible="+i)}var j=a.size;j?(j.join&&(j=j.join("x")),delete a.size):j="630x300",d.push("size="+j),a.zoom||a.zoom===!1||(a.zoom=15);var k=!a.hasOwnProperty("sensor")||!!a.sensor;delete a.sensor,d.push("sensor="+k);for(var l in a)a.hasOwnProperty(l)&&d.push(l+"="+a[l]);if(f)for(var m,n,o=0;c=f[o];o++){m=[],c.size&&"normal"!==c.size?(m.push("size:"+c.size),delete c.size):c.icon&&(m.push("icon:"+encodeURI(c.icon)),delete c.icon),c.color&&(m.push("color:"+c.color.replace("#","0x")),delete c.color),c.label&&(m.push("label:"+c.label[0].toUpperCase()),delete c.label),n=c.address?c.address:c.lat+","+c.lng,delete c.address,delete c.lat,delete c.lng;for(var l in c)c.hasOwnProperty(l)&&m.push(l+":"+c[l]);m.length||0===o?(m.push(n),m=m.join("|"),d.push("markers="+encodeURI(m))):(m=d.pop()+encodeURI("|"+n),d.push(m))}if(g)for(var o=0;o<g.length;o++){var p=[];g[o].featureType&&p.push("feature:"+g[o].featureType.toLowerCase()),g[o].elementType&&p.push("element:"+g[o].elementType.toLowerCase());for(var q=0;q<g[o].stylers.length;q++)for(var r in g[o].stylers[q]){var s=g[o].stylers[q][r];"hue"!=r&&"color"!=r||(s="0x"+s.substring(1)),p.push(r+":"+s)}var t=p.join("|");""!=t&&d.push("style="+t)}if(h){if(c=h,h=[],c.strokeWeight&&h.push("weight:"+parseInt(c.strokeWeight,10)),c.strokeColor){var u=b(c.strokeColor,c.strokeOpacity);h.push("color:"+u)}if(c.fillColor){var v=b(c.fillColor,c.fillOpacity);h.push("fillcolor:"+v)}var w=c.path;if(w.join)for(var x,q=0;x=w[q];q++)h.push(x.join(","));else h.push("enc:"+w);h=h.join("|"),d.push("path="+encodeURI(h))}var y=window.devicePixelRatio||1;return d.push("scale="+y),d=d.join("&"),e+d},j.prototype.addMapType=function(a,b){if(!b.hasOwnProperty("getTileUrl")||"function"!=typeof b.getTileUrl)throw"'getTileUrl' function required.";b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)},j.prototype.addOverlayMapType=function(a){if(!a.hasOwnProperty("getTile")||"function"!=typeof a.getTile)throw"'getTile' function required.";var b=a.index;delete a.index,this.map.overlayMapTypes.insertAt(b,a)},j.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)},j.prototype.addStyle=function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)},j.prototype.setStyle=function(a){this.map.setMapTypeId(a)},j.prototype.createPanorama=function(a){return a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng()),this.panorama=j.createPanorama(a),this.map.setStreetView(this.panorama),this.panorama},j.createPanorama=function(b){var c=h(b.el,b.context);b.position=new google.maps.LatLng(b.lat,b.lng),delete b.el,delete b.context,delete b.lat,delete b.lng;for(var d=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],e=a({visible:!0},b),f=0;f<d.length;f++)delete e[d[f]];for(var g=new google.maps.StreetViewPanorama(c,e),f=0;f<d.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this)})}(g,d[f]);return g},j.prototype.on=function(a,b){return j.on(a,this,b)},j.prototype.off=function(a){j.off(a,this)},j.prototype.once=function(a,b){return j.once(a,this,b)},j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],j.on=function(a,b,c){if(j.custom_events.indexOf(a)==-1)return b instanceof j&&(b=b.map),google.maps.event.addListener(b,a,c);var d={handler:c,eventName:a};return b.registered_events[a]=b.registered_events[a]||[],b.registered_events[a].push(d),d},j.off=function(a,b){j.custom_events.indexOf(a)==-1?(b instanceof j&&(b=b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]},j.once=function(a,b,c){if(j.custom_events.indexOf(a)==-1)return b instanceof j&&(b=b.map),google.maps.event.addListenerOnce(b,a,c)},j.fire=function(a,b,c){if(j.custom_events.indexOf(a)==-1)google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],e=0;e<d.length;e++)!function(a,b,c){a.apply(b,[c])}(d[e].handler,c,b)},j.geolocate=function(a){var b=a.always||a.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c),b&&b()},function(c){a.error(c),b&&b()},a.options):(a.not_supported(),b&&b())},j.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng)),delete a.lat,delete a.lng,delete a.callback,this.geocoder.geocode(a,function(a,c){b(a,c)})},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(a){for(var b,c=new google.maps.LatLngBounds,d=this.getPaths(),e=0;e<d.getLength();e++){b=d.getAt(e);for(var f=0;f<b.getLength();f++)c.extend(b.getAt(f))}return c}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;for(var c=!1,d=this.getPaths().getLength(),e=0;e<d;e++)for(var f=this.getPaths().getAt(e),g=f.getLength(),h=g-1,i=0;i<g;i++){var j=f.getAt(i),k=f.getAt(h);(j.lng()<a.lng()&&k.lng()>=a.lng()||k.lng()<a.lng()&&j.lng()>=a.lng())&&j.lat()+(a.lng()-j.lng())/(k.lng()-j.lng())*(k.lat()-j.lat())<a.lat()&&(c=!c),h=i}return c}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return!google.maps.geometry||google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius()}),google.maps.Rectangle.prototype.containsLatLng=function(a){return this.getBounds().contains(a)},google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}),j});
//# sourceMappingURL=gmaps.min.js.map
/* appear.js 1.0.3 */
appear = (function(){
  'use strict';
  var scrollLastPos = null, scrollTimer = 0, scroll = {};

  function track(){
    var newPos = window.scrollY || window.pageYOffset;  // pageYOffset for IE9
    if ( scrollLastPos != null ){
      scroll.velocity = newPos - scrollLastPos;
      scroll.delta = (scroll.velocity >= 0) ? scroll.velocity : (-1 * scroll.velocity);
      
    }
    scrollLastPos = newPos;
    if(scrollTimer){
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function(){
      scrollLastPos = null;
    }, 30);
  }
  addEventListener('scroll', track, false);

  // determine if a given element (plus an additional "bounds" area around it) is in the viewport
  function viewable(el, bounds){
    var rect = el.getBoundingClientRect();
    return (
      (rect.top + rect.height) >= 0 &&
      (rect.left + rect.width) >= 0 &&
      (rect.bottom - rect.height) <= ( (window.innerHeight || document.documentElement.clientHeight) + bounds) &&
      (rect.right - rect.width) <= ( (window.innerWidth || document.documentElement.clientWidth) + bounds)
    );
  }

  return function(obj){

    return (function(obj){
      var initd = false, elements = [], elementsLength, reappear = [],
        appeared = 0, disappeared = 0, timer, deltaSet, opts = {}, done;

      // handle debouncing a function for better performance on scroll
      function debounce(fn, delay) {
        return function () {
          var self = this, args = arguments;
          clearTimeout(timer);
          
          timer = setTimeout(function () {
            fn.apply(self, args);
          }, delay);
        };
      }

      // called on scroll and resize event, so debounce the actual function that does
      // the heavy work of determining if an item is viewable and then "appearing" it
      function checkAppear() {
        if(scroll.delta < opts.delta.speed) {
          if(!deltaSet) {
            deltaSet = true;
            doCheckAppear();
            setTimeout(function(){
              deltaSet = false;
            }, opts.delta.timeout);
          }
        }
        (debounce(function() {
          doCheckAppear();
        }, opts.debounce)());
      }

      function begin() {
        // initial appear check before any scroll or resize event
        doCheckAppear();

        // add relevant listeners
        addEventListener('scroll', checkAppear, false);
        addEventListener('resize', checkAppear, false);
      }

      function end() {
        elements = [];
        if(timer) {
          clearTimeout(timer);
        }
        removeListeners();
      }

      function removeListeners() {
        
        removeEventListener('scroll', checkAppear, false);
        removeEventListener('resize', checkAppear, false);
      }

      function doCheckAppear() {
        if(done) {
          return;
        }
        
        elements.forEach(function(n, i){
          if(n && viewable(n, opts.bounds)) {
            // only act if the element is eligible to reappear
            if(reappear[i]) {
              // mark this element as not eligible to appear
              reappear[i] = false;
              // increment the count of appeared items
              appeared++;
              
              // call the appear fn
              if(opts.appear) {
                opts.appear(n);
              }
              // if not tracking reappears or disappears, need to remove node here
              if(!opts.disappear && !opts.reappear) {
                // stop tracking this node, which is now viewable
                elements[i] = null;
              }
            }
          } else {
            if(reappear[i] === false) {
              if(opts.disappear) {
                opts.disappear(n);
              }
              // increment the dissappeared count
              disappeared++;
              
              // if not tracking reappears, need to remove node here
              if(!opts.reappear) {
                // stop tracking this node, which is now viewable
                elements[i] = null;
              }
            }
            // element is out of view and eligible to be appeared again
            reappear[i] = true;
          }
        });

        // remove listeners if all items have (re)appeared
        if(!opts.reappear && (!opts.appear || opts.appear && appeared === elementsLength) && (!opts.disappear || opts.disappear && disappeared === elementsLength)) {
          // ensure done is only called once (could be called from a trailing debounce/throttle)
          done = true;
          removeListeners();
          // all items have appeared, so call the done fn
          if(opts.done){
            opts.done();
          }
        }
      }

      function init() {
        // make sure we only init once
        if(initd) {
          return;
        }
        initd = true;

        // call the obj init fn
        if(opts.init) {
          opts.init();
        }
        // get the elements to work with
        var els;
        if(typeof opts.elements === 'function') {
          els = opts.elements();
        } else {
          els = opts.elements;
        }
        if(els) {
          //  put elements into an array object to work with
          elementsLength = els.length;
          for(var i = 0; i < elementsLength; i += 1) {
            elements.push(els[i]);
            reappear.push(true);
          }
          begin();
        }
      }

      return function(obj) {
        obj = obj || {};

        // assign the fn to execute when a node is visible
        opts = {
          // a function to be run when the dom is ready (allows for any setup work)
          init: obj.init,
          // either an array of elements or a function that will return an htmlCollection
          elements: obj.elements,
          // function to call when an element is "viewable", will be passed the element to work with
          appear: obj.appear,
          // function to call when an element is no longer "viewable", will be passed the element to work with
          disappear: obj.disappear,
          // function to call when all the elements have "appeared"
          done: obj.done,
          // keep tracking the elements
          reappear: obj.reappear,
          // the extra border around an element to make it viewable outside of the true viewport
          bounds: obj.bounds || 0,
          // the debounce timeout
          debounce: obj.debounce || 50,
          // appear.js will also check for items on continuous slow scrolling
          // you can controll how slow the scrolling should be  (deltaSpeed)
          // and when it will check again (deltaTimeout) after it has inspected the dom/viewport;
          delta: {
            speed: obj.deltaSpeed || 50,
            timeout: obj.deltaTimeout || 500
          }
        };

        // add an event listener to init when dom is ready
        addEventListener('DOMContentLoaded', init, false);

        var isIE10 = false;
        if (Function('/*@cc_on return document.documentMode===10@*/')()){
          isIE10 = true;
        }
        var completeOrLoaded = document.readyState === 'complete' || document.readyState === 'loaded';

        // call init if document is ready to be worked with and we missed the event
        if (isIE10) {
          if (completeOrLoaded) {
            init();
          }
        } else {
          if (completeOrLoaded || document.readyState === 'interactive') {
            init();
          }
        }

        return {
          // manually fire check for visibility of tracked elements
          trigger: function trigger(){
            doCheckAppear();
          },
          // pause tracking of elements
          pause: function pause(){
            removeListeners();
          },
          // resume tracking of elements after a pause
          resume: function resume(){
            begin();
          },
          // provide a means to stop monitoring all elements
          destroy: function destroy() {
            end();
          }
        };

      };
    }()(obj));
  };
}());

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
                
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*
* Cube Portfolio - Responsive jQuery Grid Plugin
*
* version: 4.4.0 (1 August, 2018)
* require: jQuery v1.8+
*
* Copyright 2013-2018, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
* Licensed under CodeCanyon License (http://codecanyon.net/licenses)
*
*/

!function(s,t,a,r){"use strict";function l(t,e,n){var i=this;if(s.data(t,"cubeportfolio"))throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");i.obj=t,i.$obj=s(t),s.data(i.obj,"cubeportfolio",i),e&&e.sortToPreventGaps!==r&&(e.sortByDimension=e.sortToPreventGaps,delete e.sortToPreventGaps),i.options=s.extend({},s.fn.cubeportfolio.options,e,i.$obj.data("cbp-options")),i.isAnimating=!0,i.defaultFilter=i.options.defaultFilter,i.registeredEvents=[],i.queue=[],i.addedWrapp=!1,s.isFunction(n)&&i.registerEvent("initFinish",n,!0);var o=i.$obj.children();i.$obj.addClass("cbp"),(0===o.length||o.first().hasClass("cbp-item"))&&(i.wrapInner(i.obj,"cbp-wrapper"),i.addedWrapp=!0),i.$ul=i.$obj.children().addClass("cbp-wrapper"),i.wrapInner(i.obj,"cbp-wrapper-outer"),i.wrapper=i.$obj.children(".cbp-wrapper-outer"),i.blocks=i.$ul.children(".cbp-item"),i.blocksOn=i.blocks,i.wrapInner(i.blocks,"cbp-item-wrapper"),i.plugins={},s.each(l.plugins,function(t,e){var n=e(i);n&&(i.plugins[t]=n)}),i.triggerEvent("afterPlugins"),i.removeAttrAfterStoreData=s.Deferred(),i.loadImages(i.$obj,i.display)}s.extend(l.prototype,{storeData:function(t,a){var r=this;a=a||0,t.each(function(t,e){var n=s(e),i=n.width(),o=n.height();n.data("cbp",{index:a+t,indexInitial:a+t,wrapper:n.children(".cbp-item-wrapper"),widthInitial:i,heightInitial:o,width:i,height:o,widthAndGap:i+r.options.gapVertical,heightAndGap:o+r.options.gapHorizontal,left:null,leftNew:null,top:null,topNew:null,pack:!1})}),this.removeAttrAfterStoreData.resolve()},wrapInner:function(t,e){var n,i,o;if(e=e||"",!(t.length&&t.length<1))for(t.length===r&&(t=[t]),i=t.length-1;0<=i;i--){for(n=t[i],(o=a.createElement("div")).setAttribute("class",e);n.childNodes.length;)o.appendChild(n.childNodes[0]);n.appendChild(o)}},removeAttrImage:function(t){this.removeAttrAfterStoreData.then(function(){t.removeAttribute("width"),t.removeAttribute("height"),t.removeAttribute("style")})},loadImages:function(e,o){var a=this;requestAnimationFrame(function(){var t=e.find("img").map(function(t,e){if(e.hasAttribute("width")&&e.hasAttribute("height")){if(e.style.width=e.getAttribute("width")+"px",e.style.height=e.getAttribute("height")+"px",e.hasAttribute("data-cbp-src"))return null;if(null===a.checkSrc(e))a.removeAttrImage(e);else{var n=s("<img>");n.on("load.cbp error.cbp",function(){s(this).off("load.cbp error.cbp"),a.removeAttrImage(e)}),e.srcset?(n.attr("sizes",e.sizes||"100vw"),n.attr("srcset",e.srcset)):n.attr("src",e.src)}return null}return a.checkSrc(e)}),i=t.length;0!==i?s.each(t,function(t,e){var n=s("<img>");n.on("load.cbp error.cbp",function(){s(this).off("load.cbp error.cbp"),0===--i&&o.call(a)}),e.srcset?(n.attr("sizes",e.sizes),n.attr("srcset",e.srcset)):n.attr("src",e.src)}):o.call(a)})},checkSrc:function(t){var e=t.srcset,n=t.src;if(""===n)return null;var i=s("<img>");e?(i.attr("sizes",t.sizes||"100vw"),i.attr("srcset",e)):i.attr("src",n);var o=i[0];return o.complete&&o.naturalWidth!==r&&0!==o.naturalWidth?null:o},display:function(){var t=this;t.width=t.$obj.outerWidth(),t.triggerEvent("initStartRead"),t.triggerEvent("initStartWrite"),0<t.width&&(t.storeData(t.blocks),t.layoutAndAdjustment()),t.triggerEvent("initEndRead"),t.triggerEvent("initEndWrite"),t.$obj.addClass("cbp-ready"),t.runQueue("delayFrame",t.delayFrame)},delayFrame:function(){var t=this;requestAnimationFrame(function(){t.resizeEvent(),t.triggerEvent("initFinish"),t.isAnimating=!1,t.$obj.trigger("initComplete.cbp")})},resizeEvent:function(){var e=this;l["private"].resize.initEvent({instance:e,fn:function(){e.triggerEvent("beforeResizeGrid");var t=e.$obj.outerWidth();t&&e.width!==t&&(e.width=t,"alignCenter"===e.options.gridAdjustment&&(e.wrapper[0].style.maxWidth=""),e.layoutAndAdjustment(),e.triggerEvent("resizeGrid")),e.triggerEvent("resizeWindow")}})},gridAdjust:function(){var r=this;"responsive"===r.options.gridAdjustment?r.responsiveLayout():(r.blocks.removeAttr("style"),r.blocks.each(function(t,e){var n=s(e).data("cbp"),i=e.getBoundingClientRect(),o=r.columnWidthTruncate(i.right-i.left),a=Math.round(i.bottom-i.top);n.height=a,n.heightAndGap=a+r.options.gapHorizontal,n.width=o,n.widthAndGap=o+r.options.gapVertical}),r.widthAvailable=r.width+r.options.gapVertical),r.triggerEvent("gridAdjust")},layoutAndAdjustment:function(t){t&&(this.width=this.$obj.outerWidth()),this.gridAdjust(),this.layout()},layout:function(){var t=this;t.computeBlocks(t.filterConcat(t.defaultFilter)),"slider"===t.options.layoutMode?(t.sliderLayoutReset(),t.sliderLayout()):(t.mosaicLayoutReset(),t.mosaicLayout()),t.blocksOff.addClass("cbp-item-off"),t.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=s(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),t.resizeMainContainer()},computeFilter:function(t){this.computeBlocks(t),this.mosaicLayoutReset(),this.mosaicLayout(),this.filterLayout()},filterLayout:function(){this.blocksOff.addClass("cbp-item-off"),this.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=s(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),this.resizeMainContainer(),this.filterFinish()},filterFinish:function(){this.isAnimating=!1,this.$obj.trigger("filterComplete.cbp"),this.triggerEvent("filterFinish")},computeBlocks:function(t){var e=this;e.blocksOnInitial=e.blocksOn,e.blocksOn=e.blocks.filter(t),e.blocksOff=e.blocks.not(t),e.triggerEvent("computeBlocksFinish",t)},responsiveLayout:function(){var a=this;a.cols=a[s.isArray(a.options.mediaQueries)?"getColumnsBreakpoints":"getColumnsAuto"](),a.columnWidth=a.columnWidthTruncate((a.width+a.options.gapVertical)/a.cols),a.widthAvailable=a.columnWidth*a.cols,"mosaic"===a.options.layoutMode&&a.getMosaicWidthReference(),a.blocks.each(function(t,e){var n,i=s(e).data("cbp"),o=1;"mosaic"===a.options.layoutMode&&(o=a.getColsMosaic(i.widthInitial)),n=a.columnWidth*o-a.options.gapVertical,e.style.width=n+"px",i.width=n,i.widthAndGap=n+a.options.gapVertical,e.style.height=""});var r=[];a.blocks.each(function(t,e){s.each(s(e).find("img").filter("[width][height]"),function(t,e){var i=0;s(e).parentsUntil(".cbp-item").each(function(t,e){var n=s(e).width();if(0<n)return i=n,!1});var n=parseInt(e.getAttribute("width"),10),o=parseInt(e.getAttribute("height"),10),a=parseFloat((n/o).toFixed(10));r.push({el:e,width:i,height:Math.round(i/a)})})}),s.each(r,function(t,e){e.el.width=e.width,e.el.height=e.height,e.el.style.width=e.width+"px",e.el.style.height=e.height+"px"}),a.blocks.each(function(t,e){var n=s(e).data("cbp"),i=e.getBoundingClientRect(),o=Math.round(i.bottom-i.top);n.height=o,n.heightAndGap=o+a.options.gapHorizontal})},getMosaicWidthReference:function(){var i=[];this.blocks.each(function(t,e){var n=s(e).data("cbp");i.push(n.widthInitial)}),i.sort(function(t,e){return t-e}),i[0]?this.mosaicWidthReference=i[0]:this.mosaicWidthReference=this.columnWidth},getColsMosaic:function(t){if(t===this.width)return this.cols;var e=t/this.mosaicWidthReference;return e=.79<=e%1?Math.ceil(e):Math.floor(e),Math.min(Math.max(e,1),this.cols)},getColumnsAuto:function(){if(0===this.blocks.length)return 1;var t=this.blocks.first().data("cbp").widthInitial+this.options.gapVertical;return Math.max(Math.round(this.width/t),1)},getColumnsBreakpoints:function(){var n,t=this,i=t.width;return s.each(t.options.mediaQueries,function(t,e){if(i>=e.width)return n=e,!1}),n||(n=t.options.mediaQueries[t.options.mediaQueries.length-1]),t.triggerEvent("onMediaQueries",n.options),n.cols},columnWidthTruncate:function(t){return Math.floor(t)},resizeMainContainer:function(){var o,t=this,e=Math.max(t.freeSpaces.slice(-1)[0].topStart-t.options.gapHorizontal,0);"alignCenter"===t.options.gridAdjustment&&(o=0,t.blocksOn.each(function(t,e){var n=s(e).data("cbp"),i=n.left+n.width;o<i&&(o=i)}),t.wrapper[0].style.maxWidth=o+"px"),e!==t.height&&(t.obj.style.height=e+"px",t.height!==r&&(l["private"].modernBrowser?t.$obj.one(l["private"].transitionend,function(){t.$obj.trigger("pluginResize.cbp")}):t.$obj.trigger("pluginResize.cbp")),t.height=e),t.triggerEvent("resizeMainContainer")},filterConcat:function(t){return t.replace(/\|/gi,"")},pushQueue:function(t,e){this.queue[t]=this.queue[t]||[],this.queue[t].push(e)},runQueue:function(t,e){var n=this.queue[t]||[];s.when.apply(s,n).then(s.proxy(e,this))},clearQueue:function(t){this.queue[t]=[]},registerEvent:function(t,e,n){this.registeredEvents[t]||(this.registeredEvents[t]=[]),this.registeredEvents[t].push({func:e,oneTime:n||!1})},triggerEvent:function(t,e){var n,i,o=this;if(o.registeredEvents[t])for(n=0,i=o.registeredEvents[t].length;n<i;n++)o.registeredEvents[t][n].func.call(o,e),o.registeredEvents[t][n].oneTime&&(o.registeredEvents[t].splice(n,1),n--,i--)},addItems:function(t,e,i){var o=this;o.wrapInner(t,"cbp-item-wrapper"),o.$ul[i](t.addClass("cbp-item-loading").css({top:"100%",left:0})),l["private"].modernBrowser?t.last().one(l["private"].animationend,function(){o.addItemsFinish(t,e)}):o.addItemsFinish(t,e),o.loadImages(t,function(){if(o.$obj.addClass("cbp-updateItems"),"append"===i)o.storeData(t,o.blocks.length),s.merge(o.blocks,t);else{o.storeData(t);var n=t.length;o.blocks.each(function(t,e){s(e).data("cbp").index=n+t}),o.blocks=s.merge(t,o.blocks)}o.triggerEvent("addItemsToDOM",t),o.triggerEvent("triggerSort"),o.layoutAndAdjustment(!0),o.elems&&l["public"].showCounter.call(o.obj,o.elems)})},addItemsFinish:function(t,e){this.isAnimating=!1,this.$obj.removeClass("cbp-updateItems"),t.removeClass("cbp-item-loading"),s.isFunction(e)&&e.call(this,t),this.$obj.trigger("onAfterLoadMore.cbp",[t])},removeItems:function(t,e){var o=this;o.$obj.addClass("cbp-updateItems"),l["private"].modernBrowser?t.last().one(l["private"].animationend,function(){o.removeItemsFinish(t,e)}):o.removeItemsFinish(t,e),t.each(function(t,i){o.blocks.each(function(t,e){if(i===e){var n=s(e);o.blocks.splice(t,1),l["private"].modernBrowser?(n.one(l["private"].animationend,function(){n.remove()}),n.addClass("cbp-removeItem")):n.remove()}})}),o.blocks.each(function(t,e){s(e).data("cbp").index=t}),o.triggerEvent("triggerSort"),o.layoutAndAdjustment(!0),o.elems&&l["public"].showCounter.call(o.obj,o.elems)},removeItemsFinish:function(t,e){this.isAnimating=!1,this.$obj.removeClass("cbp-updateItems"),s.isFunction(e)&&e.call(this,t)}}),s.fn.cubeportfolio=function(t,e,n){return this.each(function(){if("object"==typeof t||!t)return l["public"].init.call(this,t,e);if(l["public"][t])return l["public"][t].call(this,e,n);throw new Error("Method "+t+" does not exist on jquery.cubeportfolio.js")})},l.plugins={},s.fn.cubeportfolio.constructor=l}(jQuery,window,document),function(l,t,e,n){"use strict";var i=l.fn.cubeportfolio.constructor;l.extend(i.prototype,{mosaicLayoutReset:function(){var n=this;n.blocksAreSorted=!1,n.blocksOn.each(function(t,e){l(e).data("cbp").pack=!1,n.options.sortByDimension&&(e.style.height="")}),n.freeSpaces=[{leftStart:0,leftEnd:n.widthAvailable,topStart:0,topEnd:Math.pow(2,18)}]},mosaicLayout:function(){for(var t=this,e=0,n=t.blocksOn.length;e<n;e++){var i=t.getSpaceIndexAndBlock();if(null===i)return t.mosaicLayoutReset(),t.blocksAreSorted=!0,t.sortBlocks(t.blocksOn,"widthAndGap","heightAndGap",!0),void t.mosaicLayout();t.generateF1F2(i.spaceIndex,i.dataBlock),t.generateG1G2G3G4(i.dataBlock),t.cleanFreeSpaces(),t.addHeightToBlocks()}t.blocksAreSorted&&t.sortBlocks(t.blocksOn,"topNew","leftNew")},getSpaceIndexAndBlock:function(){var t=this,s=null;return l.each(t.freeSpaces,function(i,o){var a=o.leftEnd-o.leftStart,r=o.topEnd-o.topStart;return t.blocksOn.each(function(t,e){var n=l(e).data("cbp");if(!0!==n.pack)return n.widthAndGap<=a&&n.heightAndGap<=r?(n.pack=!0,s={spaceIndex:i,dataBlock:n},n.leftNew=o.leftStart,n.topNew=o.topStart,!1):void 0}),!t.blocksAreSorted&&t.options.sortByDimension&&0<i?(s=null,!1):null===s&&void 0}),s},generateF1F2:function(t,e){var n=this.freeSpaces[t],i={leftStart:n.leftStart+e.widthAndGap,leftEnd:n.leftEnd,topStart:n.topStart,topEnd:n.topEnd},o={leftStart:n.leftStart,leftEnd:n.leftEnd,topStart:n.topStart+e.heightAndGap,topEnd:n.topEnd};this.freeSpaces.splice(t,1),i.leftStart<i.leftEnd&&i.topStart<i.topEnd&&(this.freeSpaces.splice(t,0,i),t++),o.leftStart<o.leftEnd&&o.topStart<o.topEnd&&this.freeSpaces.splice(t,0,o)},generateG1G2G3G4:function(i){var o=this,a=[];l.each(o.freeSpaces,function(t,e){var n=o.intersectSpaces(e,i);null!==n?(o.generateG1(e,n,a),o.generateG2(e,n,a),o.generateG3(e,n,a),o.generateG4(e,n,a)):a.push(e)}),o.freeSpaces=a},intersectSpaces:function(t,e){var n={leftStart:e.leftNew,leftEnd:e.leftNew+e.widthAndGap,topStart:e.topNew,topEnd:e.topNew+e.heightAndGap};if(t.leftStart===n.leftStart&&t.leftEnd===n.leftEnd&&t.topStart===n.topStart&&t.topEnd===n.topEnd)return null;var i=Math.max(t.leftStart,n.leftStart),o=Math.min(t.leftEnd,n.leftEnd),a=Math.max(t.topStart,n.topStart),r=Math.min(t.topEnd,n.topEnd);return o<=i||r<=a?null:{leftStart:i,leftEnd:o,topStart:a,topEnd:r}},generateG1:function(t,e,n){t.topStart!==e.topStart&&n.push({leftStart:t.leftStart,leftEnd:t.leftEnd,topStart:t.topStart,topEnd:e.topStart})},generateG2:function(t,e,n){t.leftEnd!==e.leftEnd&&n.push({leftStart:e.leftEnd,leftEnd:t.leftEnd,topStart:t.topStart,topEnd:t.topEnd})},generateG3:function(t,e,n){t.topEnd!==e.topEnd&&n.push({leftStart:t.leftStart,leftEnd:t.leftEnd,topStart:e.topEnd,topEnd:t.topEnd})},generateG4:function(t,e,n){t.leftStart!==e.leftStart&&n.push({leftStart:t.leftStart,leftEnd:e.leftStart,topStart:t.topStart,topEnd:t.topEnd})},cleanFreeSpaces:function(){this.freeSpaces.sort(function(t,e){return t.topStart>e.topStart?1:t.topStart<e.topStart?-1:t.leftStart>e.leftStart?1:t.leftStart<e.leftStart?-1:0}),this.correctSubPixelValues(),this.removeNonMaximalFreeSpaces()},correctSubPixelValues:function(){var t,e,n,i;for(t=0,e=this.freeSpaces.length-1;t<e;t++)n=this.freeSpaces[t],(i=this.freeSpaces[t+1]).topStart-n.topStart<=1&&(i.topStart=n.topStart)},removeNonMaximalFreeSpaces:function(){var t=this;t.uniqueFreeSpaces(),t.freeSpaces=l.map(t.freeSpaces,function(n,i){return l.each(t.freeSpaces,function(t,e){if(i!==t)return e.leftStart<=n.leftStart&&e.leftEnd>=n.leftEnd&&e.topStart<=n.topStart&&e.topEnd>=n.topEnd?(n=null,!1):void 0}),n})},uniqueFreeSpaces:function(){var e=[];l.each(this.freeSpaces,function(t,n){l.each(e,function(t,e){if(e.leftStart===n.leftStart&&e.leftEnd===n.leftEnd&&e.topStart===n.topStart&&e.topEnd===n.topEnd)return n=null,!1}),null!==n&&e.push(n)}),this.freeSpaces=e},addHeightToBlocks:function(){var o=this;l.each(o.freeSpaces,function(t,i){o.blocksOn.each(function(t,e){var n=l(e).data("cbp");!0===n.pack&&(o.intersectSpaces(i,n)&&-1===i.topStart-n.topNew-n.heightAndGap&&(e.style.height=n.height-1+"px"))})})},sortBlocks:function(t,o,a,r){a=void 0===a?"leftNew":a,r=void 0===r?1:-1,t.sort(function(t,e){var n=l(t).data("cbp"),i=l(e).data("cbp");return n[o]>i[o]?r:n[o]<i[o]?-r:n[a]>i[a]?r:n[a]<i[a]?-r:n.index>i.index?r:n.index<i.index?-r:void 0})}})}(jQuery,window,document),jQuery.fn.cubeportfolio.options={filters:"",search:"",layoutMode:"grid",sortByDimension:!1,drag:!0,auto:!1,autoTimeout:5e3,autoPauseOnHover:!0,showNavigation:!0,showPagination:!0,rewindNav:!0,scrollByPage:!1,defaultFilter:"*",filterDeeplinking:!1,animationType:"fadeOut",gridAdjustment:"responsive",mediaQueries:!1,gapHorizontal:10,gapVertical:10,caption:"pushTop",displayType:"fadeIn",displayTypeSpeed:400,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageAnimation:"left",singlePageCallback:null,singlePageInlineDelegate:".cbp-singlePageInline",singlePageInlineDeeplinking:!1,singlePageInlinePosition:"top",singlePageInlineInFocus:!0,singlePageInlineCallback:null,plugins:{}},function(a,o,r,t){"use strict";var s=a.fn.cubeportfolio.constructor,l=a(o);s["private"]={publicEvents:function(e,n,i){var o=this;o.events=[],o.initEvent=function(t){0===o.events.length&&o.scrollEvent(),o.events.push(t)},o.destroyEvent=function(n){o.events=a.map(o.events,function(t,e){if(t.instance!==n)return t}),0===o.events.length&&l.off(e)},o.scrollEvent=function(){var t;l.on(e,function(){clearTimeout(t),t=setTimeout(function(){a.isFunction(i)&&i.call(o)||a.each(o.events,function(t,e){e.fn.call(e.instance)})},n)})}},checkInstance:function(t){var e=a.data(this,"cubeportfolio");if(!e)throw new Error("cubeportfolio is not initialized. Initialize it before calling "+t+" method!");return e.triggerEvent("publicMethod"),e},browserInfo:function(){var t,e,n=s["private"],i=navigator.appVersion;-1!==i.indexOf("MSIE 8.")?n.browser="ie8":-1!==i.indexOf("MSIE 9.")?n.browser="ie9":-1!==i.indexOf("MSIE 10.")?n.browser="ie10":o.ActiveXObject||"ActiveXObject"in o?n.browser="ie11":/android/gi.test(i)?n.browser="android":/iphone|ipad|ipod/gi.test(i)?n.browser="ios":/chrome/gi.test(i)?n.browser="chrome":n.browser="",void 0!==typeof n.styleSupport("perspective")&&(t=n.styleSupport("transition"),n.transitionend={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[t],e=n.styleSupport("animation"),n.animationend={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"}[e],n.animationDuration={WebkitAnimation:"webkitAnimationDuration",animation:"animationDuration"}[e],n.animationDelay={WebkitAnimation:"webkitAnimationDelay",animation:"animationDelay"}[e],n.transform=n.styleSupport("transform"),t&&e&&n.transform&&(n.modernBrowser=!0))},styleSupport:function(t){var e,n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1),i=r.createElement("div");return t in i.style?e=t:n in i.style&&(e=n),i=null,e}},s["private"].browserInfo(),s["private"].resize=new s["private"].publicEvents("resize.cbp",50,function(){if(o.innerHeight==screen.height)return!0})}(jQuery,window,document),function(a,t,e,n){"use strict";var r=a.fn.cubeportfolio.constructor;r["public"]={init:function(t,e){new r(this,t,e)},destroy:function(t){var e=r["private"].checkInstance.call(this,"destroy");e.triggerEvent("beforeDestroy"),a.removeData(this,"cubeportfolio"),e.blocks.removeData("cbp"),e.$obj.removeClass("cbp-ready").removeAttr("style"),e.$ul.removeClass("cbp-wrapper"),r["private"].resize.destroyEvent(e),e.$obj.off(".cbp"),e.blocks.removeClass("cbp-item-off").removeAttr("style"),e.blocks.find(".cbp-item-wrapper").each(function(t,e){var n=a(e),i=n.children();i.length?i.unwrap():n.remove()}),e.destroySlider&&e.destroySlider(),e.$ul.unwrap(),e.addedWrapp&&e.blocks.unwrap(),0===e.blocks.length&&e.$ul.remove(),a.each(e.plugins,function(t,e){"function"==typeof e.destroy&&e.destroy()}),a.isFunction(t)&&t.call(e),e.triggerEvent("afterDestroy")},filter:function(t,e){var n,i=r["private"].checkInstance.call(this,"filter");if(!i.isAnimating){if(i.isAnimating=!0,a.isFunction(e)&&i.registerEvent("filterFinish",e,!0),a.isFunction(t)){if(void 0===(n=t.call(i,i.blocks)))throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.")}else{if(i.options.filterDeeplinking){var o=location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi,"");location.href=o+"#cbpf="+encodeURIComponent(t),i.singlePage&&i.singlePage.url&&(i.singlePage.url=location.href)}i.defaultFilter=t,n=i.filterConcat(i.defaultFilter)}i.triggerEvent("filterStart",n),i.singlePageInline&&i.singlePageInline.isOpen?i.singlePageInline.close("promise",{callback:function(){i.computeFilter(n)}}):i.computeFilter(n)}},showCounter:function(t,e){var n=r["private"].checkInstance.call(this,"showCounter");a.isFunction(e)&&n.registerEvent("showCounterFinish",e,!0),(n.elems=t).each(function(){var t=a(this),e=n.blocks.filter(t.data("filter")).length;t.find(".cbp-filter-counter").text(e)}),n.triggerEvent("showCounterFinish",t)},appendItems:function(t,e){r["public"].append.call(this,t,e)},append:function(t,e){var n=r["private"].checkInstance.call(this,"append"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.addItems(i,e,"append")}}):n.addItems(i,e,"append"))},prepend:function(t,e){var n=r["private"].checkInstance.call(this,"prepend"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.addItems(i,e,"prepend")}}):n.addItems(i,e,"prepend"))},remove:function(t,e){var n=r["private"].checkInstance.call(this,"remove"),i=a(t).filter(".cbp-item");n.isAnimating||i.length<1?a.isFunction(e)&&e.call(n,i):(n.isAnimating=!0,n.singlePageInline&&n.singlePageInline.isOpen?n.singlePageInline.close("promise",{callback:function(){n.removeItems(i,e)}}):n.removeItems(i,e))},layout:function(t){var e=r["private"].checkInstance.call(this,"layout");e.width=e.$obj.outerWidth(),e.isAnimating||e.width<=0||("alignCenter"===e.options.gridAdjustment&&(e.wrapper[0].style.maxWidth=""),e.storeData(e.blocks),e.layoutAndAdjustment()),a.isFunction(t)&&t.call(e)}}}(jQuery,window,document),function(h,t,b,e){"use strict";var v=h.fn.cubeportfolio.constructor;h.extend(v.prototype,{updateSliderPagination:function(){var t,e,n=this;if(n.options.showPagination){for(t=Math.ceil(n.blocksOn.length/n.cols),n.navPagination.empty(),e=t-1;0<=e;e--)h("<div/>",{"class":"cbp-nav-pagination-item","data-slider-action":"jumpTo"}).appendTo(n.navPagination);n.navPaginationItems=n.navPagination.children()}n.enableDisableNavSlider()},destroySlider:function(){var t=this;"slider"===t.options.layoutMode&&(t.$obj.removeClass("cbp-mode-slider"),t.$ul.removeAttr("style"),t.$ul.off(".cbp"),h(b).off(".cbp"),t.options.auto&&t.stopSliderAuto())},nextSlider:function(t){var e=this;if(e.isEndSlider()){if(!e.isRewindNav())return;e.sliderActive=0}else e.options.scrollByPage?e.sliderActive=Math.min(e.sliderActive+e.cols,e.blocksOn.length-e.cols):e.sliderActive+=1;e.goToSlider()},prevSlider:function(t){var e=this;if(e.isStartSlider()){if(!e.isRewindNav())return;e.sliderActive=e.blocksOn.length-e.cols}else e.options.scrollByPage?e.sliderActive=Math.max(0,e.sliderActive-e.cols):e.sliderActive-=1;e.goToSlider()},jumpToSlider:function(t){var e=this,n=Math.min(t.index()*e.cols,e.blocksOn.length-e.cols);n!==e.sliderActive&&(e.sliderActive=n,e.goToSlider())},jumpDragToSlider:function(t){var e,n,i,o=this,a=0<t;o.options.scrollByPage?(e=o.cols*o.columnWidth,n=o.cols):(e=o.columnWidth,n=1),t=Math.abs(t),i=Math.floor(t/e)*n,20<t%e&&(i+=n),o.sliderActive=a?Math.min(o.sliderActive+i,o.blocksOn.length-o.cols):Math.max(0,o.sliderActive-i),o.goToSlider()},isStartSlider:function(){return 0===this.sliderActive},isEndSlider:function(){return this.sliderActive+this.cols>this.blocksOn.length-1},goToSlider:function(){this.enableDisableNavSlider(),this.updateSliderPosition()},startSliderAuto:function(){var t=this;t.isDrag?t.stopSliderAuto():t.timeout=setTimeout(function(){t.nextSlider(),t.startSliderAuto()},t.options.autoTimeout)},stopSliderAuto:function(){clearTimeout(this.timeout)},enableDisableNavSlider:function(){var t,e,n=this;n.isRewindNav()||(e=n.isStartSlider()?"addClass":"removeClass",n.navPrev[e]("cbp-nav-stop"),e=n.isEndSlider()?"addClass":"removeClass",n.navNext[e]("cbp-nav-stop")),n.options.showPagination&&(t=n.options.scrollByPage?Math.ceil(n.sliderActive/n.cols):n.isEndSlider()?n.navPaginationItems.length-1:Math.floor(n.sliderActive/n.cols),n.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(t).addClass("cbp-nav-pagination-active")),n.customPagination&&(t=n.options.scrollByPage?Math.ceil(n.sliderActive/n.cols):n.isEndSlider()?n.customPaginationItems.length-1:Math.floor(n.sliderActive/n.cols),n.customPaginationItems.removeClass(n.customPaginationClass).eq(t).addClass(n.customPaginationClass))},isRewindNav:function(){return!this.options.showNavigation||!(this.blocksOn.length<=this.cols)&&!!this.options.rewindNav},sliderItemsLength:function(){return this.blocksOn.length<=this.cols},sliderLayout:function(){var i=this;i.blocksOn.each(function(t,e){var n=h(e).data("cbp");n.leftNew=i.columnWidth*t,n.topNew=0,i.sliderFreeSpaces.push({topStart:n.heightAndGap})}),i.getFreeSpacesForSlider(),i.$ul.width(i.columnWidth*i.blocksOn.length-i.options.gapVertical)},getFreeSpacesForSlider:function(){var t=this;t.freeSpaces=t.sliderFreeSpaces.slice(t.sliderActive,t.sliderActive+t.cols),t.freeSpaces.sort(function(t,e){return t.topStart>e.topStart?1:t.topStart<e.topStart?-1:void 0})},updateSliderPosition:function(){var t=this,e=-t.sliderActive*t.columnWidth;v["private"].modernBrowser?t.$ul[0].style[v["private"].transform]="translate3d("+e+"px, 0px, 0)":t.$ul[0].style.left=e+"px",t.getFreeSpacesForSlider(),t.resizeMainContainer()},dragSlider:function(){var n,i,e,o,a,r=this,s=h(b),l=!1,p={},c=!1;function u(t){r.$obj.removeClass("cbp-mode-slider-dragStart"),l=!0,0!==i?(e.one("click.cbp",function(t){return!1}),requestAnimationFrame(function(){r.jumpDragToSlider(i),r.$ul.one(v["private"].transitionend,f)})):f.call(r),s.off(p.move),s.off(p.end)}function d(t){(8<(i=n-g(t).x)||i<-8)&&t.preventDefault(),r.isDrag=!0;var e=o-i;i<0&&i<o?e=(o-i)/5:0<i&&o-i<-a&&(e=(a+o-i)/5-a),v["private"].modernBrowser?r.$ul[0].style[v["private"].transform]="translate3d("+e+"px, 0px, 0)":r.$ul[0].style.left=e+"px"}function f(){if(l=!1,r.isDrag=!1,r.options.auto){if(r.mouseIsEntered)return;r.startSliderAuto()}}function g(t){return void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(t=t.originalEvent.touches[0]),{x:t.pageX,y:t.pageY}}r.isDrag=!1,"ontouchstart"in t||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?(p={start:"touchstart.cbp",move:"touchmove.cbp",end:"touchend.cbp"},c=!0):p={start:"mousedown.cbp",move:"mousemove.cbp",end:"mouseup.cbp"},r.$ul.on(p.start,function(t){r.sliderItemsLength()||(c?t:t.preventDefault(),r.options.auto&&r.stopSliderAuto(),l?h(e).one("click.cbp",function(){return!1}):(e=h(t.target),n=g(t).x,i=0,o=-r.sliderActive*r.columnWidth,a=r.columnWidth*(r.blocksOn.length-r.cols),s.on(p.move,d),s.on(p.end,u),r.$obj.addClass("cbp-mode-slider-dragStart")))})},sliderLayoutReset:function(){this.freeSpaces=[],this.sliderFreeSpaces=[]}})}(jQuery,window,document),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(){for(var a=0,t=["moz","webkit"],e=0;e<t.length&&!window.requestAnimationFrame;e++)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),i=Math.max(0,16-(n-a)),o=window.setTimeout(function(){t(n+i)},i);return a=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(i,t,e,n){"use strict";var o=i.fn.cubeportfolio.constructor;function a(e){(this.parent=e).filterLayout=this.filterLayout,e.registerEvent("computeBlocksFinish",function(t){e.blocksOn2On=e.blocksOnInitial.filter(t),e.blocksOn2Off=e.blocksOnInitial.not(t)})}a.prototype.filterLayout=function(){var t=this;function e(){t.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(t,e){var n=i(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px",e.style[o["private"].transform]=""}),t.blocksOff.addClass("cbp-item-off"),t.$obj.removeClass("cbp-animation-"+t.options.animationType),t.filterFinish()}t.$obj.addClass("cbp-animation-"+t.options.animationType),t.blocksOn2On.addClass("cbp-item-on2on").each(function(t,e){var n=i(e).data("cbp");e.style[o["private"].transform]="translate3d("+(n.leftNew-n.left)+"px, "+(n.topNew-n.top)+"px, 0)"}),t.blocksOn2Off.addClass("cbp-item-on2off"),t.blocksOff2On=t.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(t,e){var n=i(e).data("cbp");e.style.left=n.leftNew+"px",e.style.top=n.topNew+"px"}),t.blocksOn2Off.length?t.blocksOn2Off.last().data("cbp").wrapper.one(o["private"].animationend,e):t.blocksOff2On.length?t.blocksOff2On.last().data("cbp").wrapper.one(o["private"].animationend,e):t.blocksOn2On.length?t.blocksOn2On.last().one(o["private"].transitionend,e):e(),t.resizeMainContainer()},a.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},o.plugins.animationClassic=function(t){return!o["private"].modernBrowser||i.inArray(t.options.animationType,["boxShadow","fadeOut","flipBottom","flipOut","quicksand","scaleSides","skew"])<0?null:new a(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";var a=o.fn.cubeportfolio.constructor;function i(t){(this.parent=t).filterLayout=this.filterLayout}i.prototype.filterLayout=function(){var i=this,t=i.$ul[0].cloneNode(!0);function e(){i.wrapper[0].removeChild(t),"sequentially"===i.options.animationType&&i.blocksOn.each(function(t,e){o(e).data("cbp").wrapper[0].style[a["private"].animationDelay]=""}),i.$obj.removeClass("cbp-animation-"+i.options.animationType),i.filterFinish()}t.setAttribute("class","cbp-wrapper-helper"),i.wrapper[0].insertBefore(t,i.$ul[0]),requestAnimationFrame(function(){i.$obj.addClass("cbp-animation-"+i.options.animationType),i.blocksOff.addClass("cbp-item-off"),i.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=o(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px","sequentially"===i.options.animationType&&(n.wrapper[0].style[a["private"].animationDelay]=60*t+"ms")}),i.blocksOn.length?i.blocksOn.last().data("cbp").wrapper.one(a["private"].animationend,e):i.blocksOnInitial.length?i.blocksOnInitial.last().data("cbp").wrapper.one(a["private"].animationend,e):e(),i.resizeMainContainer()})},i.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},a.plugins.animationClone=function(t){return!a["private"].modernBrowser||o.inArray(t.options.animationType,["fadeOutTop","slideLeft","sequentially"])<0?null:new i(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var r=a.fn.cubeportfolio.constructor;function i(t){(this.parent=t).filterLayout=this.filterLayout}i.prototype.filterLayout=function(){var n=this,t=n.$ul.clone(!0,!0);t[0].setAttribute("class","cbp-wrapper-helper"),n.wrapper[0].insertBefore(t[0],n.$ul[0]);var i=t.find(".cbp-item").not(".cbp-item-off");function o(){n.wrapper[0].removeChild(t[0]),n.$obj.removeClass("cbp-animation-"+n.options.animationType),n.blocks.each(function(t,e){a(e).data("cbp").wrapper[0].style[r["private"].animationDelay]=""}),n.filterFinish()}n.blocksAreSorted&&n.sortBlocks(i,"top","left"),i.children(".cbp-item-wrapper").each(function(t,e){e.style[r["private"].animationDelay]=50*t+"ms"}),requestAnimationFrame(function(){n.$obj.addClass("cbp-animation-"+n.options.animationType),n.blocksOff.addClass("cbp-item-off"),n.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=a(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px",n.wrapper[0].style[r["private"].animationDelay]=50*t+"ms"});var t=n.blocksOn.length,e=i.length;0===t&&0===e?o():t<e?i.last().children(".cbp-item-wrapper").one(r["private"].animationend,o):n.blocksOn.last().data("cbp").wrapper.one(r["private"].animationend,o),n.resizeMainContainer()})},i.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},r.plugins.animationCloneDelay=function(t){return!r["private"].modernBrowser||a.inArray(t.options.animationType,["3dflip","flipOutDelay","foldLeft","frontRow","rotateRoom","rotateSides","scaleDown","slideDelay","unfold"])<0?null:new i(t)}}(jQuery,window,document),function(i,t,e,n){"use strict";var o=i.fn.cubeportfolio.constructor;function a(t){(this.parent=t).filterLayout=this.filterLayout}a.prototype.filterLayout=function(){var t=this,e=t.$ul[0].cloneNode(!0);function n(){t.wrapper[0].removeChild(e),t.$obj.removeClass("cbp-animation-"+t.options.animationType),t.filterFinish()}e.setAttribute("class","cbp-wrapper-helper"),t.wrapper[0].insertBefore(e,t.$ul[0]),requestAnimationFrame(function(){t.$obj.addClass("cbp-animation-"+t.options.animationType),t.blocksOff.addClass("cbp-item-off"),t.blocksOn.removeClass("cbp-item-off").each(function(t,e){var n=i(e).data("cbp");n.left=n.leftNew,n.top=n.topNew,e.style.left=n.left+"px",e.style.top=n.top+"px"}),t.blocksOn.length?t.$ul.one(o["private"].animationend,n):t.blocksOnInitial.length?i(e).one(o["private"].animationend,n):n(),t.resizeMainContainer()})},a.prototype.destroy=function(){var t=this.parent;t.$obj.removeClass("cbp-animation-"+t.options.animationType)},o.plugins.animationWrapper=function(t){return!o["private"].modernBrowser||i.inArray(t.options.animationType,["bounceBottom","bounceLeft","bounceTop","moveLeft"])<0?null:new a(t)}}(jQuery,window,document),function(t,e,n,i){"use strict";var o=t.fn.cubeportfolio.constructor;function a(t){var e=this,n=t.options;e.parent=t,e.captionOn=n.caption,t.registerEvent("onMediaQueries",function(t){t&&t.hasOwnProperty("caption")?e.captionOn!==t.caption&&(e.destroy(),e.captionOn=t.caption,e.init()):e.captionOn!==n.caption&&(e.destroy(),e.captionOn=n.caption,e.init())}),e.init()}a.prototype.init=function(){var t=this;""!=t.captionOn&&("expand"===t.captionOn||o["private"].modernBrowser||(t.parent.options.caption=t.captionOn="minimal"),t.parent.$obj.addClass("cbp-caption-active cbp-caption-"+t.captionOn))},a.prototype.destroy=function(){this.parent.$obj.removeClass("cbp-caption-active cbp-caption-"+this.captionOn)},o.plugins.caption=function(t){return new a(t)}}(jQuery,window,document),function(l,t,e,n){"use strict";var i=l.fn.cubeportfolio.constructor;function o(s){(this.parent=s).registerEvent("initFinish",function(){s.$obj.on("click.cbp",".cbp-caption-defaultWrap",function(t){if(t.preventDefault(),!s.isAnimating){s.isAnimating=!0;var e=l(this),n=e.next(),i=e.parent(),o={position:"relative",height:n.outerHeight(!0)},a={position:"relative",height:0};if(s.$obj.addClass("cbp-caption-expand-active"),i.hasClass("cbp-caption-expand-open")){var r=a;a=o,o=r,i.removeClass("cbp-caption-expand-open")}n.css(o),s.$obj.one("pluginResize.cbp",function(){s.isAnimating=!1,s.$obj.removeClass("cbp-caption-expand-active"),0===o.height&&(i.removeClass("cbp-caption-expand-open"),n.attr("style",""))}),s.layoutAndAdjustment(!0),n.css(a),requestAnimationFrame(function(){i.addClass("cbp-caption-expand-open"),n.css(o),s.triggerEvent("gridAdjust"),s.triggerEvent("resizeGrid")})}})},!0)}o.prototype.destroy=function(){this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")},i.plugins.captionExpand=function(t){return"expand"!==t.options.caption?null:new o(t)}}(jQuery,window,document),function(e,t,n,i){"use strict";var o=e.fn.cubeportfolio.constructor;function a(n){n.registerEvent("initEndWrite",function(){if(!(n.width<=0)){var t=e.Deferred();n.pushQueue("delayFrame",t),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=t*n.options.displayTypeSpeed+"ms"}),n.$obj.addClass("cbp-displayType-bottomToTop"),n.blocksOn.last().one(o["private"].animationend,function(){n.$obj.removeClass("cbp-displayType-bottomToTop"),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=""}),t.resolve()})}},!0)}o.plugins.displayBottomToTop=function(t){return o["private"].modernBrowser&&"bottomToTop"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(n,t,e,i){"use strict";var o=n.fn.cubeportfolio.constructor;function a(e){e.registerEvent("initEndWrite",function(){if(!(e.width<=0)){var t=n.Deferred();e.pushQueue("delayFrame",t),e.obj.style[o["private"].animationDuration]=e.options.displayTypeSpeed+"ms",e.$obj.addClass("cbp-displayType-fadeIn"),e.$obj.one(o["private"].animationend,function(){e.$obj.removeClass("cbp-displayType-fadeIn"),e.obj.style[o["private"].animationDuration]="",t.resolve()})}},!0)}o.plugins.displayFadeIn=function(t){return!o["private"].modernBrowser||"lazyLoading"!==t.options.displayType&&"fadeIn"!==t.options.displayType||0===t.blocksOn.length?null:new a(t)}}(jQuery,window,document),function(n,t,e,i){"use strict";var o=n.fn.cubeportfolio.constructor;function a(e){e.registerEvent("initEndWrite",function(){if(!(e.width<=0)){var t=n.Deferred();e.pushQueue("delayFrame",t),e.obj.style[o["private"].animationDuration]=e.options.displayTypeSpeed+"ms",e.$obj.addClass("cbp-displayType-fadeInToTop"),e.$obj.one(o["private"].animationend,function(){e.$obj.removeClass("cbp-displayType-fadeInToTop"),e.obj.style[o["private"].animationDuration]="",t.resolve()})}},!0)}o.plugins.displayFadeInToTop=function(t){return o["private"].modernBrowser&&"fadeInToTop"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(e,t,n,i){"use strict";var o=e.fn.cubeportfolio.constructor;function a(n){n.registerEvent("initEndWrite",function(){if(!(n.width<=0)){var t=e.Deferred();n.pushQueue("delayFrame",t),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=t*n.options.displayTypeSpeed+"ms"}),n.$obj.addClass("cbp-displayType-sequentially"),n.blocksOn.last().one(o["private"].animationend,function(){n.$obj.removeClass("cbp-displayType-sequentially"),n.blocksOn.each(function(t,e){e.style[o["private"].animationDelay]=""}),t.resolve()})}},!0)}o.plugins.displaySequentially=function(t){return o["private"].modernBrowser&&"sequentially"===t.options.displayType&&0!==t.blocksOn.length?new a(t):null}}(jQuery,window,document),function(c,t,e,n){"use strict";var i=c.fn.cubeportfolio.constructor;function o(t){var e=this;e.parent=t,e.filters=c(t.options.filters),e.filterData=[],t.registerEvent("afterPlugins",function(t){e.filterFromUrl(),e.registerFilter()}),t.registerEvent("resetFiltersVisual",function(){var o=t.options.defaultFilter.split("|");e.filters.each(function(t,e){var i=c(e).find(".cbp-filter-item");i.removeClass("cbp-filter-item-active"),c.each(o,function(t,e){var n=i.filter('[data-filter="'+e+'"]');if(n.length)return n.addClass("cbp-filter-item-active"),o.splice(t,1),!1})}),t.defaultFilter=t.options.defaultFilter})}o.prototype.registerFilter=function(){var s=this,l=s.parent,p=l.defaultFilter.split("|");s.wrap=s.filters.find(".cbp-l-filters-dropdownWrap").on({"mouseover.cbp":function(){c(this).addClass("cbp-l-filters-dropdownWrap-open")},"mouseleave.cbp":function(){c(this).removeClass("cbp-l-filters-dropdownWrap-open")}}),s.filters.each(function(t,i){var e=c(i),n="*",o=e.find(".cbp-filter-item"),a={};e.hasClass("cbp-l-filters-dropdown")&&(a.wrap=e.find(".cbp-l-filters-dropdownWrap"),a.header=e.find(".cbp-l-filters-dropdownHeader"),a.headerText=a.header.text()),l.$obj.cubeportfolio("showCounter",o),c.each(p,function(t,e){if(o.filter('[data-filter="'+e+'"]').length)return n=e,p.splice(t,1),!1}),c.data(i,"filterName",n),s.filterData.push(i),s.filtersCallback(a,o.filter('[data-filter="'+n+'"]'),o);var r=i.getAttribute("data-filter-parent");r&&(e.removeClass("cbp-l-subfilters--active"),r===s.parent.defaultFilter&&e.addClass("cbp-l-subfilters--active")),o.on("click.cbp",function(){var t=c(this);if(!t.hasClass("cbp-filter-item-active")&&!l.isAnimating){s.filtersCallback(a,t,o),c.data(i,"filterName",t.data("filter"));var e=c.map(s.filterData,function(t,e){var n=c(t),i=t.getAttribute("data-filter-parent");i&&(i===c.data(s.filterData[0],"filterName")?n.addClass("cbp-l-subfilters--active"):(n.removeClass("cbp-l-subfilters--active"),c.data(t,"filterName","*"),n.find(".cbp-filter-item").removeClass("cbp-filter-item-active")));var o=c.data(t,"filterName");return""!==o&&"*"!==o?o:null});e.length<1&&(e=["*"]);var n=e.join("|");l.defaultFilter!==n&&l.$obj.cubeportfolio("filter",n)}})})},o.prototype.filtersCallback=function(t,e,n){c.isEmptyObject(t)||(t.wrap.trigger("mouseleave.cbp"),t.headerText?t.headerText="":t.header.html(e.html())),n.removeClass("cbp-filter-item-active"),e.addClass("cbp-filter-item-active")},o.prototype.filterFromUrl=function(){var t=/#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);null!==t&&(this.parent.defaultFilter=decodeURIComponent(t[1]))},o.prototype.destroy=function(){this.filters.find(".cbp-filter-item").off(".cbp"),this.wrap.off(".cbp")},i.plugins.filters=function(t){return""===t.options.filters?null:new o(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";function i(i){var e=i.options.gapVertical,n=i.options.gapHorizontal;i.registerEvent("onMediaQueries",function(t){i.options.gapVertical=t&&t.hasOwnProperty("gapVertical")?t.gapVertical:e,i.options.gapHorizontal=t&&t.hasOwnProperty("gapHorizontal")?t.gapHorizontal:n,i.blocks.each(function(t,e){var n=o(e).data("cbp");n.widthAndGap=n.width+i.options.gapVertical,n.heightAndGap=n.height+i.options.gapHorizontal})})}o.fn.cubeportfolio.constructor.plugins.changeGapOnMediaQueries=function(t){return new i(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var i={},o=a.fn.cubeportfolio.constructor;function r(t){var e=this;e.parent=t,e.options=a.extend({},i,e.parent.options.plugins.inlineSlider),e.runInit(),t.registerEvent("addItemsToDOM",function(){e.runInit()})}function s(t){var e=this;t.hasClass("cbp-slider-inline-ready")||(t.addClass("cbp-slider-inline-ready"),e.items=t.find(".cbp-slider-wrapper").children(".cbp-slider-item"),e.active=e.items.filter(".cbp-slider-item--active").index(),e.total=e.items.length-1,e.updateLeft(),t.find(".cbp-slider-next").on("click.cbp",function(t){t.preventDefault(),e.active<e.total?(e.active++,e.updateLeft()):e.active===e.total&&(e.active=0,e.updateLeft())}),t.find(".cbp-slider-prev").on("click.cbp",function(t){t.preventDefault(),0<e.active?(e.active--,e.updateLeft()):0===e.active&&(e.active=e.total,e.updateLeft())}))}s.prototype.updateLeft=function(){var n=this;n.items.removeClass("cbp-slider-item--active"),n.items.eq(n.active).addClass("cbp-slider-item--active"),n.items.each(function(t,e){e.style.left=t-n.active+"00%"})},r.prototype.runInit=function(){var o=this;o.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(t,e){var n=a(e),i=n.find(".cbp-slider-item--active").find("img")[0];i.hasAttribute("data-cbp-src")?o.parent.$obj.on("lazyLoad.cbp",function(t,e){e.src===i.src&&new s(n)}):new s(n)})},r.prototype.destroy=function(){this.parent.$obj.find(".cbp-slider-next").off("click.cbp"),this.parent.$obj.find(".cbp-slider-prev").off("click.cbp"),this.parent.$obj.off("lazyLoad.cbp"),this.parent.$obj.find(".cbp-slider-inline").each(function(t,e){var n=a(e);n.removeClass("cbp-slider-inline-ready");var i=n.find(".cbp-slider-item");i.removeClass("cbp-slider-item--active"),i.removeAttr("style"),i.eq(0).addClass("cbp-slider-item--active")})},o.plugins.inlineSlider=function(t){return new r(t)}}(jQuery,window,document),function(a,t,e,n){"use strict";var i={loadingClass:"cbp-lazyload",threshold:400},o=a.fn.cubeportfolio.constructor,r=a(t);function s(t){var e=this;e.parent=t,e.options=a.extend({},i,e.parent.options.plugins.lazyLoad),t.registerEvent("initFinish",function(){e.loadImages(),t.registerEvent("resizeMainContainer",function(){e.loadImages()}),t.registerEvent("filterFinish",function(){e.loadImages()}),o["private"].lazyLoadScroll.initEvent({instance:e,fn:e.loadImages})},!0)}o["private"].lazyLoadScroll=new o["private"].publicEvents("scroll.cbplazyLoad",50),s.prototype.loadImages=function(){var o=this,t=o.parent.$obj.find("img").filter("[data-cbp-src]");0!==t.length&&(o.screenHeight=r.height(),t.each(function(t,e){var n=a(e.parentNode);if(o.isElementInScreen(e)){var i=e.getAttribute("data-cbp-src");null===o.parent.checkSrc(a("<img>").attr("src",i))?(o.removeLazyLoad(e,i),n.removeClass(o.options.loadingClass)):(n.addClass(o.options.loadingClass),a("<img>").on("load.cbp error.cbp",function(){o.removeLazyLoad(e,i,n)}).attr("src",i))}else n.addClass(o.options.loadingClass)}))},s.prototype.removeLazyLoad=function(t,e,n){var i=this;t.src=e,t.removeAttribute("data-cbp-src"),i.parent.removeAttrImage(t),i.parent.$obj.trigger("lazyLoad.cbp",t),n&&(o["private"].modernBrowser?a(t).one(o["private"].transitionend,function(){n.removeClass(i.options.loadingClass)}):n.removeClass(i.options.loadingClass))},s.prototype.isElementInScreen=function(t){var e=t.getBoundingClientRect(),n=e.bottom+this.options.threshold,i=this.screenHeight+n-(e.top-this.options.threshold);return 0<=n&&n<=i},s.prototype.destroy=function(){o["private"].lazyLoadScroll.destroyEvent(this)},o.plugins.lazyLoad=function(t){return new s(t)}}(jQuery,window,document),function(r,a,t,e){"use strict";var i={element:"",action:"click",loadItems:3},s=r.fn.cubeportfolio.constructor;function n(t){var n=this;n.parent=t,n.options=r.extend({},i,n.parent.options.plugins.loadMore),n.loadMore=r(n.options.element).find(".cbp-l-loadMore-link"),0!==n.loadMore.length&&(n.loadItems=n.loadMore.find(".cbp-l-loadMore-loadItems"),"0"===n.loadItems.text()&&n.loadMore.addClass("cbp-l-loadMore-stop"),t.registerEvent("filterStart",function(e){n.populateItems().then(function(){var t=n.items.filter(n.parent.filterConcat(e)).length;0<t?(n.loadMore.removeClass("cbp-l-loadMore-stop"),n.loadItems.html(t)):n.loadMore.addClass("cbp-l-loadMore-stop")})}),n[n.options.action]())}n.prototype.populateItems=function(){var n=this;return n.items?r.Deferred().resolve():(n.items=r(),r.ajax({url:n.loadMore.attr("href"),type:"GET",dataType:"HTML"}).done(function(t){var e=r.map(t.split(/\r?\n/),function(t,e){return r.trim(t)}).join("");0!==e.length&&r.each(r.parseHTML(e),function(t,e){r(e).hasClass("cbp-item")?n.items=n.items.add(e):r.each(e.children,function(t,e){r(e).hasClass("cbp-item")&&(n.items=n.items.add(e))})})}).fail(function(){n.items=null,n.loadMore.removeClass("cbp-l-loadMore-loading")}))},n.prototype.populateInsertItems=function(t){var n=this,i=[],o=n.parent.defaultFilter,a=0;n.items.each(function(t,e){if(a===n.options.loadItems)return!1;o&&"*"!==o?r(e).filter(n.parent.filterConcat(o)).length&&(i.push(e),n.items[t]=null,a++):(i.push(e),n.items[t]=null,a++)}),n.items=n.items.map(function(t,e){return e}),0!==i.length?n.parent.$obj.cubeportfolio("append",i,t):n.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop")},n.prototype.click=function(){var n=this;function e(){n.loadMore.removeClass("cbp-l-loadMore-loading");var t,e=n.parent.defaultFilter;0===(t=e&&"*"!==e?n.items.filter(n.parent.filterConcat(e)).length:n.items.length)?n.loadMore.addClass("cbp-l-loadMore-stop"):n.loadItems.html(t)}n.loadMore.on("click.cbp",function(t){t.preventDefault(),n.parent.isAnimating||n.loadMore.hasClass("cbp-l-loadMore-stop")||(n.loadMore.addClass("cbp-l-loadMore-loading"),n.populateItems().then(function(){n.populateInsertItems(e)}))})},n.prototype.auto=function(){var n=this,i=r(a),o=!1;function t(){if(!o&&!n.loadMore.hasClass("cbp-l-loadMore-stop")){var t=n.loadMore.offset().top-200;i.scrollTop()+i.height()<t||(o=!0,n.populateItems().then(function(){n.populateInsertItems(e)}).fail(function(){o=!1}))}}function e(){var t,e=n.parent.defaultFilter;0===(t=e&&"*"!==e?n.items.filter(n.parent.filterConcat(e)).length:n.items.length)?n.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop"):(n.loadItems.html(t),i.trigger("scroll.loadMore")),o=!1,0===n.items.length&&(s["private"].loadMoreScroll.destroyEvent(n),n.parent.$obj.off("filterComplete.cbp"))}s["private"].loadMoreScroll=new s["private"].publicEvents("scroll.loadMore",100),n.parent.$obj.one("initComplete.cbp",function(){n.loadMore.addClass("cbp-l-loadMore-loading").on("click.cbp",function(t){t.preventDefault()}),s["private"].loadMoreScroll.initEvent({instance:n,fn:function(){n.parent.isAnimating||t()}}),n.parent.$obj.on("filterComplete.cbp",function(){t()}),t()})},n.prototype.destroy=function(){this.loadMore.off(".cbp"),s["private"].loadMoreScroll&&s["private"].loadMoreScroll.destroyEvent(this)},s.plugins.loadMore=function(t){var e=t.options.plugins;return t.options.loadMore&&(e.loadMore||(e.loadMore={}),e.loadMore.element=t.options.loadMore),t.options.loadMoreAction&&(e.loadMore||(e.loadMore={}),e.loadMore.action=t.options.loadMoreAction),e.loadMore&&void 0!==e.loadMore.selector&&(e.loadMore.element=e.loadMore.selector,delete e.loadMore.selector),e.loadMore&&e.loadMore.element?new n(t):null}}(jQuery,window,document),function(u,d,f,t){"use strict";var l=u.fn.cubeportfolio.constructor,c={delay:0},e={init:function(t,e){var o,a=this;if(a.cubeportfolio=t,a.type=e,a.isOpen=!1,a.options=a.cubeportfolio.options,"lightbox"===e&&(a.cubeportfolio.registerEvent("resizeWindow",function(){a.resizeImage()}),a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.lightbox)),"singlePageInline"!==e){if(a.createMarkup(),"singlePage"===e){if(a.cubeportfolio.registerEvent("resizeWindow",function(){if(a.options.singlePageStickyNavigation){var t=a.contentWrap[0].clientWidth;0<t&&(a.navigationWrap.width(t),a.navigation.width(t))}}),a.options.singlePageDeeplinking){a.url=location.href,"#"===a.url.slice(-1)&&(a.url=a.url.slice(0,-1));p=(l=a.url.split("#cbp=")).shift();if(u.each(l,function(t,i){if(a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e).find(a.options.singlePageDelegate+'[href="'+i+'"]');if(n.length)return o=n,!1}),o)return!1}),o){a.url=p;var n=o,i=n.attr("data-cbp-singlePage"),r=[];i?r=n.closest(u(".cbp-item")).find('[data-cbp-singlePage="'+i+'"]'):a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(a.options.singlePageDelegate).each(function(t,e){u(e).attr("data-cbp-singlePage")||r.push(e)})}),a.openSinglePage(r,o[0])}else if(l.length){var s=f.createElement("a");s.setAttribute("href",l[0]),a.openSinglePage([s],s)}}a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.singlePage)}}else{if(a.height=0,a.createMarkupSinglePageInline(),a.cubeportfolio.registerEvent("resizeGrid",function(){a.isOpen&&a.close()}),a.options.singlePageInlineDeeplinking){a.url=location.href,"#"===a.url.slice(-1)&&(a.url=a.url.slice(0,-1));var l,p=(l=a.url.split("#cbpi=")).shift();u.each(l,function(t,i){if(a.cubeportfolio.blocksOn.each(function(t,e){var n=u(e).find(a.options.singlePageInlineDelegate+'[href="'+i+'"]');if(n.length)return o=n,!1}),o)return!1}),o&&a.cubeportfolio.registerEvent("initFinish",function(){a.openSinglePageInline(a.cubeportfolio.blocksOn,o[0])},!0)}a.localOptions=u.extend({},c,a.cubeportfolio.options.plugins.singlePageInline)}},createMarkup:function(){var r=this,t="";if("singlePage"===r.type&&"left"!==r.options.singlePageAnimation&&(t=" cbp-popup-singlePage-"+r.options.singlePageAnimation),r.wrap=u("<div/>",{"class":"cbp-popup-wrap cbp-popup-"+r.type+t,"data-action":"lightbox"===r.type?"close":""}).on("click.cbp",function(t){if(!r.stopEvents){var e=u(t.target).attr("data-action");r[e]&&(r[e](),t.preventDefault())}}),"singlePage"===r.type?(r.contentWrap=u("<div/>",{"class":"cbp-popup-content-wrap"}).appendTo(r.wrap),"ios"===l["private"].browser&&r.contentWrap.css("overflow","auto"),r.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(r.contentWrap)):r.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(r.wrap),u("<div/>",{"class":"cbp-popup-loadingBox"}).appendTo(r.wrap),"ie8"===l["private"].browser&&(r.bg=u("<div/>",{"class":"cbp-popup-ie8bg","data-action":"lightbox"===r.type?"close":""}).appendTo(r.wrap)),"singlePage"===r.type&&!1===r.options.singlePageStickyNavigation?r.navigationWrap=u("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(r.contentWrap):r.navigationWrap=u("<div/>",{"class":"cbp-popup-navigation-wrap"}).appendTo(r.wrap),r.navigation=u("<div/>",{"class":"cbp-popup-navigation"}).appendTo(r.navigationWrap),r.closeButton=u("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(r.navigation),r.nextButton=u("<div/>",{"class":"cbp-popup-next",title:"Next (Right arrow key)","data-action":"next"}).appendTo(r.navigation),r.prevButton=u("<div/>",{"class":"cbp-popup-prev",title:"Previous (Left arrow key)","data-action":"prev"}).appendTo(r.navigation),"singlePage"===r.type){r.options.singlePageCounter&&(r.counter=u(r.options.singlePageCounter).appendTo(r.navigation),r.counter.text("")),r.content.on("click.cbp",r.options.singlePageDelegate,function(t){t.preventDefault();var e,n,i=r.dataArray.length,o=this.getAttribute("href");for(e=0;e<i;e++)if(r.dataArray[e].url===o){n=e;break}if(void 0===n){var a=f.createElement("a");a.setAttribute("href",o),r.dataArray=[{url:o,element:a}],r.counterTotal=1,r.nextButton.hide(),r.prevButton.hide(),r.singlePageJumpTo(0)}else r.singlePageJumpTo(n-r.current)});var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e={passive:!0}}});d.addEventListener("testPassive",null,n),d.removeEventListener("testPassive",null,n)}catch(o){}var i="onwheel"in f.createElement("div")?"wheel":"mousewheel";r.contentWrap[0].addEventListener(i,function(t){t.stopImmediatePropagation()},e)}u(f).on("keydown.cbp",function(t){r.isOpen&&(r.stopEvents||(a&&t.stopImmediatePropagation(),37===t.keyCode?r.prev():39===t.keyCode?r.next():27===t.keyCode&&r.close()))})},createMarkupSinglePageInline:function(){var n=this;n.wrap=u("<div/>",{"class":"cbp-popup-singlePageInline"}).on("click.cbp",function(t){if(!n.stopEvents){var e=u(t.target).attr("data-action");e&&n[e]&&(n[e](),t.preventDefault())}}),n.content=u("<div/>",{"class":"cbp-popup-content"}).appendTo(n.wrap),n.navigation=u("<div/>",{"class":"cbp-popup-navigation"}).appendTo(n.wrap),n.closeButton=u("<div/>",{"class":"cbp-popup-close",title:"Close (Esc arrow key)","data-action":"close"}).appendTo(n.navigation)},destroy:function(){var t=this,e=u("body");u(f).off("keydown.cbp"),e.off("click.cbp",t.options.lightboxDelegate),e.off("click.cbp",t.options.singlePageDelegate),t.content.off("click.cbp",t.options.singlePageDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.singlePageInlineDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.lightboxDelegate),t.cubeportfolio.$obj.off("click.cbp",t.options.singlePageDelegate),t.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"),t.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),t.wrap.remove()},openLightbox:function(t,e){var s,n,l=this,p=0,c=[];if(!l.isOpen){if(a=!0,l.isOpen=!0,l.stopEvents=!1,l.dataArray=[],(l.current=null)===(s=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");u.each(t,function(t,e){var n,i=e.getAttribute("href"),o=i,a="isImage";if(-1===u.inArray(i,c)){if(s===i)l.current=p;else if(!l.options.lightboxGallery)return;if(/youtu\.?be/i.test(i)){var r=i.lastIndexOf("v=")+2;1===r&&(r=i.lastIndexOf("/")+1),n=i.substring(r),/autoplay=/i.test(n)||(n+="&autoplay=1"),o="//www.youtube.com/embed/"+(n=n.replace(/\?|&/,"?")),a="isYoutube"}else/vimeo\.com/i.test(i)?(n=i.substring(i.lastIndexOf("/")+1),/autoplay=/i.test(n)||(n+="&autoplay=1"),o="//player.vimeo.com/video/"+(n=n.replace(/\?|&/,"?")),a="isVimeo"):/www\.ted\.com/i.test(i)?(o="http://embed.ted.com/talks/"+i.substring(i.lastIndexOf("/")+1)+".html",a="isTed"):/soundcloud\.com/i.test(i)?(o=i,a="isSoundCloud"):/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(i)?(o=-1!==i.indexOf("|")?i.split("|"):i.split("%7C"),a="isSelfHostedVideo"):/\.mp3$/i.test(i)&&(o=i,a="isSelfHostedAudio");l.dataArray.push({src:o,title:e.getAttribute(l.options.lightboxTitleSrc),type:a}),p++}c.push(i)}),l.counterTotal=l.dataArray.length,1===l.counterTotal?(l.nextButton.hide(),l.prevButton.hide(),l.dataActionImg=""):(l.nextButton.show(),l.prevButton.show(),l.dataActionImg='data-action="next"'),l.wrap.appendTo(f.body),l.scrollTop=u(d).scrollTop(),l.originalStyle=u("html").attr("style"),u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),l.wrap.addClass("cbp-popup-transitionend"),l.wrap.show(),n=l.dataArray[l.current],l[n.type](n)}},openSinglePage:function(t,e){var i,o=this,a=0,r=[];if(!o.isOpen){if(o.cubeportfolio.singlePageInline&&o.cubeportfolio.singlePageInline.isOpen&&o.cubeportfolio.singlePageInline.close(),o.isOpen=!0,o.stopEvents=!1,o.dataArray=[],(o.current=null)===(i=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(u.each(t,function(t,e){var n=e.getAttribute("href");-1===u.inArray(n,r)&&(i===n&&(o.current=a),o.dataArray.push({url:n,element:e}),a++),r.push(n)}),o.counterTotal=o.dataArray.length,1===o.counterTotal?(o.nextButton.hide(),o.prevButton.hide()):(o.nextButton.show(),o.prevButton.show()),o.wrap.appendTo(f.body),o.scrollTop=u(d).scrollTop(),o.contentWrap.scrollTop(0),o.wrap.show(),o.finishOpen=2,o.navigationMobile=u(),o.wrap.one(l["private"].transitionend,function(){u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),o.wrap.addClass("cbp-popup-transitionend"),o.options.singlePageStickyNavigation&&(o.wrap.addClass("cbp-popup-singlePage-sticky"),o.navigationWrap.width(o.contentWrap[0].clientWidth)),o.finishOpen--,o.finishOpen<=0&&o.updateSinglePageIsOpen.call(o)}),"ie8"!==l["private"].browser&&"ie9"!==l["private"].browser||(u("html").css({overflow:"hidden",marginRight:d.innerWidth-u(f).width()}),o.wrap.addClass("cbp-popup-transitionend"),o.options.singlePageStickyNavigation&&(o.navigationWrap.width(o.contentWrap[0].clientWidth),setTimeout(function(){o.wrap.addClass("cbp-popup-singlePage-sticky")},1e3)),o.finishOpen--),o.wrap.addClass("cbp-popup-loading"),o.wrap.offset(),o.wrap.addClass("cbp-popup-singlePage-open"),o.options.singlePageDeeplinking&&(o.url=o.url.split("#cbp=")[0],location.href=o.url+"#cbp="+o.dataArray[o.current].url),u.isFunction(o.options.singlePageCallback)&&o.options.singlePageCallback.call(o,o.dataArray[o.current].url,o.dataArray[o.current].element),"ios"===l["private"].browser){var s=o.contentWrap[0];s.addEventListener("touchstart",function(){var t=s.scrollTop,e=s.scrollHeight,n=t+s.offsetHeight;0===t?s.scrollTop=1:n===e&&(s.scrollTop=t-1)})}}},openSinglePageInline:function(t,e,n){var i,o,a,r=this;if(n=n||!1,r.fromOpen=n,r.storeBlocks=t,r.storeCurrentBlock=e,r.isOpen)return o=r.cubeportfolio.blocksOn.index(u(e).closest(".cbp-item")),void(r.dataArray[r.current].url!==e.getAttribute("href")||r.current!==o?r.cubeportfolio.singlePageInline.close("open",{blocks:t,currentBlock:e,fromOpen:!0}):r.close());if(r.isOpen=!0,r.stopEvents=!1,r.dataArray=[],(r.current=null)===(i=e.getAttribute("href")))throw new Error("HEI! Your clicked element doesn't have a href attribute.");if(a=u(e).closest(".cbp-item")[0],t.each(function(t,e){a===e&&(r.current=t)}),r.dataArray[r.current]={url:i,element:e},u(r.dataArray[r.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"),r.counterTotal=t.length,r.wrap.insertBefore(r.cubeportfolio.wrapper),r.topDifference=0,"top"===r.options.singlePageInlinePosition)r.blocksToMove=t,r.top=0;else if("bottom"===r.options.singlePageInlinePosition)r.blocksToMove=u(),r.top=r.cubeportfolio.height;else if("above"===r.options.singlePageInlinePosition){var s=u(t[r.current]).data("cbp").top;r.top=s,t.each(function(t,e){var n=u(e).data("cbp"),i=n.top,o=i+n.heightAndGap;s<=i||o>r.top&&(r.top=o,r.topDifference=r.top-s)}),r.blocksToMove=u(),t.each(function(t,e){if(t!==r.current){var n=u(e).data("cbp");n.top+n.heightAndGap>r.top&&(r.blocksToMove=r.blocksToMove.add(e))}else r.blocksToMove=r.blocksToMove.add(e)}),r.top=Math.max(r.top-r.options.gapHorizontal,0)}else{var l=u(t[r.current]).data("cbp"),p=l.top+l.heightAndGap;r.top=p,r.blocksToMove=u(),t.each(function(t,e){var n=u(e).data("cbp"),i=n.top,o=i+n.height;o<=p||(i>=p-n.height/2?r.blocksToMove=r.blocksToMove.add(e):p<o&&i<p&&(o>r.top&&(r.top=o),o-p>r.topDifference&&(r.topDifference=o-p)))})}if(r.wrap[0].style.height=r.wrap.outerHeight(!0)+"px",r.deferredInline=u.Deferred(),r.options.singlePageInlineInFocus){r.scrollTop=u(d).scrollTop();var c=r.cubeportfolio.$obj.offset().top+r.top-100;r.scrollTop!==c?u("html,body").animate({scrollTop:c},350).promise().then(function(){r.resizeSinglePageInline(),r.deferredInline.resolve()}):(r.resizeSinglePageInline(),r.deferredInline.resolve())}else r.resizeSinglePageInline(),r.deferredInline.resolve();r.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"),r.wrap.css({top:r.top}),r.options.singlePageInlineDeeplinking&&(r.url=r.url.split("#cbpi=")[0],location.href=r.url+"#cbpi="+r.dataArray[r.current].url),u.isFunction(r.options.singlePageInlineCallback)&&r.options.singlePageInlineCallback.call(r,r.dataArray[r.current].url,r.dataArray[r.current].element)},resizeSinglePageInline:function(){var n=this;n.height=0===n.top||n.top===n.cubeportfolio.height?n.wrap.outerHeight(!0):n.wrap.outerHeight(!0)-n.options.gapHorizontal,n.height+=n.topDifference,n.storeBlocks.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="":e.style.marginTop=""}),n.blocksToMove.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="translate3d(0px, "+n.height+"px, 0)":e.style.marginTop=n.height+"px"}),n.cubeportfolio.obj.style.height=n.cubeportfolio.height+n.height+"px"},revertResizeSinglePageInline:function(){this.deferredInline=u.Deferred(),this.storeBlocks.each(function(t,e){l["private"].modernBrowser?e.style[l["private"].transform]="":e.style.marginTop=""}),this.cubeportfolio.obj.style.height=this.cubeportfolio.height+"px"},appendScriptsToWrap:function(i){var o=this,a=0,r=function(t){var e=f.createElement("script"),n=t.src;e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,i[++a]&&r(i[a]))}:e.onload=function(){i[++a]&&r(i[a])},n?e.src=n:e.text=t.text,o.content[0].appendChild(e)};r(i[0])},updateSinglePage:function(t,e,n){var i,o=this;o.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"),!1===n&&o.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"),o.counter&&(i=u(o.getCounterMarkup(o.options.singlePageCounter,o.current+1,o.counterTotal)),o.counter.text(i.text())),o.fromAJAX={html:t,scripts:e},o.finishOpen--,o.finishOpen<=0&&o.updateSinglePageIsOpen.call(o)},updateSinglePageIsOpen:function(){var t,e=this;e.wrap.addClass("cbp-popup-ready"),e.wrap.removeClass("cbp-popup-loading"),e.content.html(e.fromAJAX.html),e.fromAJAX.scripts&&e.appendScriptsToWrap(e.fromAJAX.scripts),e.fromAJAX={},e.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"),(t=e.content.find(".cbp-slider")).length?(t.find(".cbp-slider-item").addClass("cbp-item"),e.slider=t.cubeportfolio({layoutMode:"slider",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):e.slider=null,e.checkForSocialLinks(e.content),e.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")},checkForSocialLinks:function(t){this.createFacebookShare(t.find(".cbp-social-fb")),this.createTwitterShare(t.find(".cbp-social-twitter")),this.createGooglePlusShare(t.find(".cbp-social-googleplus")),this.createPinterestShare(t.find(".cbp-social-pinterest"))},createFacebookShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('http://www.facebook.com/sharer.php?u="+encodeURIComponent(d.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")},createTwitterShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('https://twitter.com/intent/tweet?source="+encodeURIComponent(d.location.href)+"&text="+encodeURIComponent(f.title)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;")},createGooglePlusShare:function(t){t.length&&!t.attr("onclick")&&t.attr("onclick","window.open('https://plus.google.com/share?url="+encodeURIComponent(d.location.href)+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;")},createPinterestShare:function(t){if(t.length&&!t.attr("onclick")){var e="",n=this.content.find("img")[0];n&&(e=n.src),t.attr("onclick","window.open('http://pinterest.com/pin/create/button/?url="+encodeURIComponent(d.location.href)+"&media="+e+"', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")}},updateSinglePageInline:function(t,e){var n=this;n.content.html(t),e&&n.appendScriptsToWrap(e),n.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"),0!==n.localOptions.delay?setTimeout(function(){n.singlePageInlineIsOpen.call(n)},n.localOptions.delay):n.singlePageInlineIsOpen.call(n)},singlePageInlineIsOpen:function(){var e=this;function n(){e.wrap.addClass("cbp-popup-singlePageInline-ready"),e.wrap[0].style.height="",e.resizeSinglePageInline(),e.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")}e.cubeportfolio.loadImages(e.wrap,function(){var t=e.content.find(".cbp-slider");t.length?(t.find(".cbp-slider-item").addClass("cbp-item"),t.one("initComplete.cbp",function(){e.deferredInline.done(n)}),t.on("pluginResize.cbp",function(){e.deferredInline.done(n)}),e.slider=t.cubeportfolio({layoutMode:"slider",displayType:"default",mediaQueries:[{width:1,cols:1}],gapHorizontal:0,gapVertical:0,caption:"",coverRatio:""})):(e.slider=null,e.deferredInline.done(n)),e.checkForSocialLinks(e.content)})},isImage:function(t){var e=this;new Image;e.tooggleLoading(!0),e.cubeportfolio.loadImages(u('<div><img src="'+t.src+'"></div>'),function(){e.updateImagesMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal)),e.tooggleLoading(!1)})},isVimeo:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isYoutube:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isTed:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSoundCloud:function(t){var e=this;e.updateVideoMarkup(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSelfHostedVideo:function(t){var e=this;e.updateSelfHostedVideo(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},isSelfHostedAudio:function(t){var e=this;e.updateSelfHostedAudio(t.src,t.title,e.getCounterMarkup(e.options.lightboxCounter,e.current+1,e.counterTotal))},getCounterMarkup:function(t,e,n){if(!t.length)return"";var i={current:e,total:n};return t.replace(/\{\{current}}|\{\{total}}/gi,function(t){return i[t.slice(2,-2)]})},updateSelfHostedVideo:function(t,e,n){var i;this.wrap.addClass("cbp-popup-lightbox-isIframe");var o='<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';for(i=0;i<t.length;i++)/(\.mp4)/i.test(t[i])?o+='<source src="'+t[i]+'" type="video/mp4">':/(\.ogg)|(\.ogv)/i.test(t[i])?o+='<source src="'+t[i]+'" type="video/ogg">':/(\.webm)/i.test(t[i])&&(o+='<source src="'+t[i]+'" type="video/webm">');o+='Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>",this.content.html(o),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateSelfHostedAudio:function(t,e,n){this.wrap.addClass("cbp-popup-lightbox-isIframe");var i='<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="'+t+'" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";this.content.html(i),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateVideoMarkup:function(t,e,n){this.wrap.addClass("cbp-popup-lightbox-isIframe");var i='<div class="cbp-popup-lightbox-iframe"><iframe src="'+t+'" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";this.content.html(i),this.wrap.addClass("cbp-popup-ready"),this.preloadNearbyImages()},updateImagesMarkup:function(t,e,n){var i=this;i.wrap.removeClass("cbp-popup-lightbox-isIframe");var o='<div class="cbp-popup-lightbox-figure"><img src="'+t+'" class="cbp-popup-lightbox-img" '+i.dataActionImg+' /><div class="cbp-popup-lightbox-bottom">'+(e?'<div class="cbp-popup-lightbox-title">'+e+"</div>":"")+n+"</div></div>";i.content.html(o),i.wrap.addClass("cbp-popup-ready"),i.resizeImage(),i.preloadNearbyImages()},next:function(){this[this.type+"JumpTo"](1)},prev:function(){this[this.type+"JumpTo"](-1)},lightboxJumpTo:function(t){var e,n=this;n.current=n.getIndex(n.current+t),n[(e=n.dataArray[n.current]).type](e)},singlePageJumpTo:function(t){var e=this;e.current=e.getIndex(e.current+t),u.isFunction(e.options.singlePageCallback)&&(e.resetWrap(),e.contentWrap.scrollTop(0),e.wrap.addClass("cbp-popup-loading"),e.slider&&l["private"].resize.destroyEvent(u.data(e.slider[0],"cubeportfolio")),e.options.singlePageCallback.call(e,e.dataArray[e.current].url,e.dataArray[e.current].element),e.options.singlePageDeeplinking&&(location.href=e.url+"#cbp="+e.dataArray[e.current].url))},resetWrap:function(){var t=this;"singlePage"===t.type&&t.options.singlePageDeeplinking&&(location.href=t.url+"#"),"singlePageInline"===t.type&&t.options.singlePageInlineDeeplinking&&(location.href=t.url+"#")},getIndex:function(t){return(t%=this.counterTotal)<0&&(t=this.counterTotal+t),t},close:function(e,t){var n=this;function i(){n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"),n.isOpen=!1,"promise"===e&&u.isFunction(t.callback)&&t.callback.call(n.cubeportfolio)}function o(){var t=u(d).scrollTop();n.resetWrap(),u(d).scrollTop(t),n.options.singlePageInlineInFocus&&"promise"!==e?u("html,body").animate({scrollTop:n.scrollTop},350).promise().then(function(){i()}):i()}"singlePageInline"===n.type?"open"===e?(n.wrap.removeClass("cbp-popup-singlePageInline-ready"),u(n.dataArray[n.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"),n.isOpen=!1,n.openSinglePageInline(t.blocks,t.currentBlock,t.fromOpen)):(n.height=0,n.revertResizeSinglePageInline(),n.wrap.removeClass("cbp-popup-singlePageInline-ready"),n.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"),n.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"),l["private"].modernBrowser?n.wrap.one(l["private"].transitionend,function(){o()}):o()):"singlePage"===n.type?(n.resetWrap(),n.stopScroll=!0,n.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend cbp-popup-singlePage-open cbp-popup-singlePage-sticky"),u("html").css({overflow:"",marginRight:"",position:""}),u(d).scrollTop(n.scrollTop),"ie8"!==l["private"].browser&&"ie9"!==l["private"].browser||(n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1),n.wrap.one(l["private"].transitionend,function(){n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1})):(a=!1,n.originalStyle?u("html").attr("style",n.originalStyle):u("html").css({overflow:"",marginRight:""}),u(d).scrollTop(n.scrollTop),n.slider&&l["private"].resize.destroyEvent(u.data(n.slider[0],"cubeportfolio")),n.content.html(""),n.wrap.detach(),n.isOpen=!1)},tooggleLoading:function(t){this.stopEvents=t,this.wrap[t?"addClass":"removeClass"]("cbp-popup-loading")},resizeImage:function(){if(this.isOpen){var t=this.content.find("img"),e=t.parent(),n=u(d).height()-(e.outerHeight(!0)-e.height())-this.content.find(".cbp-popup-lightbox-bottom").outerHeight(!0);t.css("max-height",n+"px")}},preloadNearbyImages:function(){for(var t=this,e=[t.getIndex(t.current+1),t.getIndex(t.current+2),t.getIndex(t.current+3),t.getIndex(t.current-1),t.getIndex(t.current-2),t.getIndex(t.current-3)],n=e.length-1;0<=n;n--)"isImage"===t.dataArray[e[n]].type&&t.cubeportfolio.checkSrc(t.dataArray[e[n]])}};function n(t){var e=this;!1===(e.parent=t).options.lightboxShowCounter&&(t.options.lightboxCounter=""),!1===t.options.singlePageShowCounter&&(t.options.singlePageCounter=""),t.registerEvent("initStartRead",function(){e.run()},!0)}var a=!1,i=!1,o=!1;n.prototype.run=function(){var r=this,s=r.parent,t=u(f.body);s.lightbox=null,s.options.lightboxDelegate&&!i&&(i=!0,s.lightbox=Object.create(e),s.lightbox.init(s,"lightbox"),t.on("click.cbp",s.options.lightboxDelegate,function(t){t.preventDefault();var e=u(this),i=e.attr("data-cbp-lightbox"),n=r.detectScope(e),o=n.data("cubeportfolio"),a=[];o?o.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(s.options.lightboxDelegate).each(function(t,e){i?u(e).attr("data-cbp-lightbox")===i&&a.push(e):a.push(e)})}):a=i?n.find(s.options.lightboxDelegate+"[data-cbp-lightbox="+i+"]"):n.find(s.options.lightboxDelegate),s.lightbox.openLightbox(a,e[0])})),s.singlePage=null,s.options.singlePageDelegate&&!o&&(o=!0,s.singlePage=Object.create(e),s.singlePage.init(s,"singlePage"),t.on("click.cbp",s.options.singlePageDelegate,function(t){t.preventDefault();var e=u(this),i=e.attr("data-cbp-singlePage"),n=r.detectScope(e),o=n.data("cubeportfolio"),a=[];o?o.blocksOn.each(function(t,e){var n=u(e);n.not(".cbp-item-off")&&n.find(s.options.singlePageDelegate).each(function(t,e){i?u(e).attr("data-cbp-singlePage")===i&&a.push(e):a.push(e)})}):a=i?n.find(s.options.singlePageDelegate+"[data-cbp-singlePage="+i+"]"):n.find(s.options.singlePageDelegate),s.singlePage.openSinglePage(a,e[0])})),s.singlePageInline=null,s.options.singlePageInlineDelegate&&(s.singlePageInline=Object.create(e),s.singlePageInline.init(s,"singlePageInline"),s.$obj.on("click.cbp",s.options.singlePageInlineDelegate,function(t){t.preventDefault();var e=u.data(this,"cbp-locked"),n=u.data(this,"cbp-locked",+new Date);(!e||300<n-e)&&s.singlePageInline.openSinglePageInline(s.blocksOn,this)}))},n.prototype.detectScope=function(t){var e,n,i;return(e=t.closest(".cbp-popup-singlePageInline")).length?(i=t.closest(".cbp",e[0])).length?i:e:(n=t.closest(".cbp-popup-singlePage")).length?(i=t.closest(".cbp",n[0])).length?i:n:(i=t.closest(".cbp")).length?i:u(f.body)},n.prototype.destroy=function(){var t=this.parent;u(f.body).off("click.cbp"),o=i=!1,t.lightbox&&t.lightbox.destroy(),t.singlePage&&t.singlePage.destroy(),t.singlePageInline&&t.singlePageInline.destroy()},l.plugins.popUp=function(t){return new n(t)}}(jQuery,window,document),function(s,t,e,n){"use strict";var i=s.fn.cubeportfolio.constructor;function o(t){var n=this;n.parent=t,n.searchInput=s(t.options.search),n.searchInput.each(function(t,e){var n=e.getAttribute("data-search");n||(n="*"),s.data(e,"searchData",{value:e.value,el:n})});var i=null;n.searchInput.on("keyup.cbp paste.cbp",function(t){t.preventDefault();var e=s(this);clearTimeout(i),i=setTimeout(function(){n.runEvent.call(n,e)},350)}),n.searchNothing=n.searchInput.siblings(".cbp-search-nothing").detach(),n.searchNothingHeight=null,n.searchNothingHTML=n.searchNothing.html(),n.searchInput.siblings(".cbp-search-icon").on("click.cbp",function(t){t.preventDefault(),n.runEvent.call(n,s(this).prev().val(""))})}o.prototype.runEvent=function(t){var i=this,o=t.val(),a=t.data("searchData"),r=new RegExp(o,"i");a.value===o||i.parent.isAnimating||(0<(a.value=o).length?t.attr("value",o):t.removeAttr("value"),i.parent.$obj.cubeportfolio("filter",function(t){var e=t.filter(function(t,e){if(-1<s(e).find(a.el).text().search(r))return!0});if(0===e.length&&i.searchNothing.length){var n=i.searchNothingHTML.replace("{{query}}",o);i.searchNothing.html(n),i.searchNothing.appendTo(i.parent.$obj),null===i.searchNothingHeight&&(i.searchNothingHeight=i.searchNothing.outerHeight(!0)),i.parent.registerEvent("resizeMainContainer",function(){i.parent.height=i.parent.height+i.searchNothingHeight,i.parent.obj.style.height=i.parent.height+"px"},!0)}else i.searchNothing.detach();return i.parent.triggerEvent("resetFiltersVisual"),e},function(){t.trigger("keyup.cbp")}))},o.prototype.destroy=function(){this.searchInput.off(".cbp"),this.searchInput.next(".cbp-search-icon").off(".cbp"),this.searchInput.each(function(t,e){s.removeData(e)})},i.plugins.search=function(t){return""===t.options.search?null:new o(t)}}(jQuery,window,document),function(o,t,e,n){"use strict";var i={pagination:"",paginationClass:"cbp-pagination-active"},a=o.fn.cubeportfolio.constructor;function r(t){var e=this;e.parent=t,e.options=o.extend({},i,e.parent.options.plugins.slider);var n=o(e.options.pagination);0<n.length&&(e.parent.customPagination=n,e.parent.customPaginationItems=n.children(),e.parent.customPaginationClass=e.options.paginationClass,e.parent.customPaginationItems.on("click.cbp",function(t){t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),e.parent.sliderStopEvents||e.parent.jumpToSlider(o(this))})),e.parent.registerEvent("gridAdjust",function(){e.sliderMarkup.call(e.parent),e.parent.registerEvent("gridAdjust",function(){e.updateSlider.call(e.parent)})},!0)}r.prototype.sliderMarkup=function(){var i=this;i.sliderStopEvents=!1,i.sliderActive=0,i.$obj.one("initComplete.cbp",function(){i.$obj.addClass("cbp-mode-slider")}),i.nav=o("<div/>",{"class":"cbp-nav"}),i.nav.on("click.cbp","[data-slider-action]",function(t){if(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!i.sliderStopEvents){var e=o(this),n=e.attr("data-slider-action");i[n+"Slider"]&&i[n+"Slider"](e)}}),i.options.showNavigation&&(i.controls=o("<div/>",{"class":"cbp-nav-controls"}),i.navPrev=o("<div/>",{"class":"cbp-nav-prev","data-slider-action":"prev"}).appendTo(i.controls),i.navNext=o("<div/>",{"class":"cbp-nav-next","data-slider-action":"next"}).appendTo(i.controls),i.controls.appendTo(i.nav)),i.options.showPagination&&(i.navPagination=o("<div/>",{"class":"cbp-nav-pagination"}).appendTo(i.nav)),(i.controls||i.navPagination)&&i.nav.appendTo(i.$obj),i.updateSliderPagination(),i.options.auto&&(i.options.autoPauseOnHover&&(i.mouseIsEntered=!1,i.$obj.on("mouseenter.cbp",function(t){i.mouseIsEntered=!0,i.stopSliderAuto()}).on("mouseleave.cbp",function(t){i.mouseIsEntered=!1,i.startSliderAuto()})),i.startSliderAuto()),i.options.drag&&a["private"].modernBrowser&&i.dragSlider()},r.prototype.updateSlider=function(){this.updateSliderPosition(),this.updateSliderPagination()},r.prototype.destroy=function(){var t=this;t.parent.customPaginationItems&&t.parent.customPaginationItems.off(".cbp"),(t.parent.controls||t.parent.navPagination)&&(t.parent.nav.off(".cbp"),t.parent.nav.remove())},a.plugins.slider=function(t){return"slider"!==t.options.layoutMode?null:new r(t)}}(jQuery,window,document),function(u,t,e,n){"use strict";var i={element:""},o=u.fn.cubeportfolio.constructor;function a(e){var n=this;n.parent=e,n.options=u.extend({},i,n.parent.options.plugins.sort),n.element=u(n.options.element),0!==n.element.length&&(n.sort="",n.sortBy="string:asc",n.element.on("click.cbp",".cbp-sort-item",function(t){t.preventDefault(),n.target=t.target,u(n.target).hasClass("cbp-l-dropdown-item--active")||e.isAnimating||(n.processSort(),e.$obj.cubeportfolio("filter",e.defaultFilter))}),e.registerEvent("triggerSort",function(){n.target&&(n.processSort(),e.$obj.cubeportfolio("filter",e.defaultFilter))}),n.dropdownWrap=n.element.find(".cbp-l-dropdown-wrap").on({"mouseover.cbp":function(){u(this).addClass("cbp-l-dropdown-wrap--open")},"mouseleave.cbp":function(){u(this).removeClass("cbp-l-dropdown-wrap--open")}}),n.dropdownHeader=n.element.find(".cbp-l-dropdown-header"))}a.prototype.processSort=function(){var o=this,t=o.parent,e=(p=o.target).hasAttribute("data-sort"),n=p.hasAttribute("data-sortBy");if(e&&n)o.sort=p.getAttribute("data-sort"),o.sortBy=p.getAttribute("data-sortBy");else if(e)o.sort=p.getAttribute("data-sort");else{if(!n)return;o.sortBy=p.getAttribute("data-sortBy")}var i=o.sortBy.split(":"),a="string",r=1;if("int"===i[0]?a="int":"float"===i[0]&&(a="float"),"desc"===i[1]&&(r=-1),o.sort){var s=[];t.blocks.each(function(t,e){var n=u(e),i=n.find(o.sort).text();"int"===a&&(i=parseInt(i,10)),"float"===a&&(i=parseFloat(i,10)),s.push({sortText:i,data:n.data("cbp")})}),s.sort(function(t,e){var n=t.sortText,i=e.sortText;return"string"===a&&(n=n.toUpperCase(),i=i.toUpperCase()),n<i?-r:i<n?r:0}),u.each(s,function(t,e){e.data.index=t})}else{var l=[];-1===r&&(t.blocks.each(function(t,e){l.push(u(e).data("cbp").indexInitial)}),l.sort(function(t,e){return e-t})),t.blocks.each(function(t,e){var n=u(e).data("cbp");n.index=-1===r?l[n.indexInitial]:n.indexInitial})}t.sortBlocks(t.blocks,"index"),o.dropdownWrap.trigger("mouseleave.cbp");var p=u(o.target),c=u(o.target).parent();if(c.hasClass("cbp-l-dropdown-list"))o.dropdownHeader.html(p.html()),p.addClass("cbp-l-dropdown-item--active").siblings(".cbp-l-dropdown-item").removeClass("cbp-l-dropdown-item--active");else if(c.hasClass("cbp-l-direction")){0===p.index()?c.addClass("cbp-l-direction--second").removeClass("cbp-l-direction--first"):c.addClass("cbp-l-direction--first").removeClass("cbp-l-direction--second")}},a.prototype.destroy=function(){this.element.off("click.cbp")},o.plugins.sort=function(t){return new a(t)}}(jQuery,window,document);
/**
 * HSCore -
 *
 * @author HtmlStream
 * @version 1.0
 */
;
(function ($) {

  'use strict';

  $.HSCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function () {

      $(document).ready(function (e) {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length) $.HSCore.helpers.bgImage($('[data-bg-img-src]'));

        // Extends jQuery
        $.HSCore.helpers.extendjQuery();

        // Detect Internet Explorer (IE)
        $.HSCore.helpers.detectIE();

        // Bootstrap Navigation Options
        $.HSCore.helpers.bootstrapNavOptions.init();

      });

      $(window).on('load', function (e) {

      });

    },

    /**
     *
     *
     * @var
     */
    components: {},

    /**
     *
     *
     * @var
     */
    helpers: {

        Math: {

          getRandomValueFromRange: function(startPoint, endPoint, fixed) {

            var fixedInner = fixed ? fixed : false;

            Math.random();

            return fixedInner ? (Math.random() * (endPoint - startPoint) + startPoint) : (Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint);

          }

      },

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function (collection) {

        if (!collection || !collection.length) return;

        return collection.each(function (i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

      },

      /**
       * Extends basic jQuery functionality
       *
       * @return undefined
       */
      extendjQuery: function () {

        $.fn.extend({

          /**
           * Runs specified function after loading of all images.
           *
           * @return Deferred
           */
          imagesLoaded: function () {

            var $imgs = this.find('img[src!=""]');

            if (!$imgs.length) {
              return $.Deferred().resolve().promise();
            }

            var dfds = [];

            $imgs.each(function () {
              var dfd = $.Deferred();
              dfds.push(dfd);
              var img = new Image();
              img.onload = function () {
                dfd.resolve();
              };
              img.onerror = function () {
                dfd.resolve();
              };
              img.src = this.src;
            });

            return $.when.apply($, dfds);

          }

        });

      },


      /**
       * Detect Internet Explorer (IE)
       *
       * @return version of IE or false, if browser is not Internet Explorer
       */

      detectIE: function() {

          var ua = window.navigator.userAgent;

          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
              document.querySelector('body').className += ' IE';
          }

          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
             // IE 12 (aka Edge) => return version number
             var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
              document.querySelector('body').className += ' IE';
          }

          // other browser
          return false;

      },


      /**
       * Bootstrap navigation options
       *
       */
      bootstrapNavOptions: {
        init: function () {
          this.mobileHideOnScroll();
        },

        mobileHideOnScroll: function () {
          var $collection = $('.navbar');
          if (!$collection.length) return;

          var $w = $(window),
            breakpointsMap = {
              'sm': 576,
              'md': 768,
              'lg': 992,
              'xl': 1200
            };

          $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function (e) {
            var $navbar = $(this).closest('.navbar');

            if ($navbar.length) {
              $navbar.data('mobile-menu-scroll-position', $w.scrollTop());
            }
            e.preventDefault();
          });

          $w.on('scroll.HSMobileHideOnScroll', function (e) {
            $collection.each(function (i, el) {
              var $this = $(el), $toggler, $nav, offset, $hamburgers, breakpoint;
              if ($this.hasClass('navbar-expand-xl')) breakpoint = breakpointsMap['xl'];
              else if ($this.hasClass('navbar-expand-lg')) breakpoint = breakpointsMap['lg'];
              else if ($this.hasClass('navbar-expand-md')) breakpoint = breakpointsMap['md'];
              else if ($this.hasClass('navbar-expand-xs')) breakpoint = breakpointsMap['xs'];

              if ($w.width() > breakpoint) return;

              $toggler = $this.find('.navbar-toggler');
              $nav = $this.find('.navbar-collapse');

              if (!$nav.data('mobile-scroll-hide')) return;

              if ($nav.length) {
                offset = $this.data('mobile-menu-scroll-position');

                if (Math.abs($w.scrollTop() - offset) > 40 && $nav.hasClass('show')) {
                  $toggler.trigger('click');
                  $hamburgers = $toggler.find('.is-active');
                  if ($hamburgers.length) {
                    $hamburgers.removeClass('is-active');
                  }
                }
              }
            });
          });
        }
      }

    },

    /**
     *
     *
     * @var
     */
    settings: {
      rtl: false
    }

  };

  $.HSCore.init();

})(jQuery);
/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function( element ) {

      if( !element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this,
       windowW = window.innerWidth;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference( this.element );
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers ) );

      $(window)
        .on('scroll.uHeader', function(e){

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function(e){

          if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

          self.resizeTimeOutId = setTimeout( function(){

            element
              .data('HSHeader')
              .checkViewport();

          }, 100 );

        })
        .trigger('scroll.uHeader');


      $(window).on('resize.uHeader', function () {
        if (window.innerWidth === windowW) return;

        windowW = window.innerWidth;

        if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

        self.resizeTimeOutId = setTimeout( function(){

          element
            .data('HSHeader')
            .update();

        }, 100 );

      });

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function() {

      if(!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element') ) {
          observers['xs'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top') ) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section') ) {

            observers['xs'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating') ) {

          observers['xs'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable') ) {
          observers['xs'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom') ) {

          if(this.element.hasClass('u-header--change-appearance')) {
            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen') ) {

          observers['xs'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ sm -------------------------*/

        // Sticky top

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--sm') ) {
          observers['sm'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        if( this.element.hasClass('u-header--sticky-top--sm') ) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--sm') ) {

            observers['sm'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--sm') ) {

          observers['sm'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--sm') ) {
          observers['sm'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--sm') ) {

          if(this.element.hasClass('u-header--change-appearance--sm')) {
            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--sm') || this.element.hasClass('u-header--static--sm')) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--sm') || this.element.hasClass('u-header--abs-top-2nd-screen--sm') ) {

          observers['sm'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ md -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--md') ) {
          observers['md'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--md') ) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--md') ) {

            observers['md'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--md') ) {

          observers['md'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--md') ) {
          observers['md'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--md') ) {

          if(this.element.hasClass('u-header--change-appearance--md')) {
            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--md') || this.element.hasClass('u-header--static--md')) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--md') || this.element.hasClass('u-header--abs-top-2nd-screen--md') ) {

          observers['md'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      /* ------------------------ lg -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--lg') ) {
          observers['lg'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--lg') ) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--lg') ) {

            observers['lg'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--lg') ) {

          observers['lg'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--lg') ) {
          observers['lg'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--lg') ) {

          if(this.element.hasClass('u-header--change-appearance--lg')) {
            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--lg') || this.element.hasClass('u-header--static--lg')) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--lg') || this.element.hasClass('u-header--abs-top-2nd-screen--lg') ) {

          observers['lg'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ xl -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--xl') ) {
          observers['xl'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--xl') ) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--xl') ) {

            observers['xl'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--xl') ) {

          observers['xl'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        // Sticky bottom

        if( this.element.hasClass('u-header--invulnerable--xl') ) {
          observers['xl'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--xl') ) {

          if(this.element.hasClass('u-header--change-appearance--xl')) {
            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--xl') || this.element.hasClass('u-header--static--xl')) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--xl') || this.element.hasClass('u-header--abs-top-2nd-screen--xl') ) {

          observers['xl'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function(element) {

      if(!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if(element.hasClass('u-header--side-left--xl') || element.hasClass('u-header--side-right--xl')) {

        toggleable = element.find('.navbar-expand-xl');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-xl')
            .addClass('navbar-expand-lg');
        }

      }
      else if(element.hasClass('u-header--side-left--lg') || element.hasClass('u-header--side-right--lg')) {

        toggleable = element.find('.navbar-expand-lg');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-lg')
            .addClass('navbar-expand-md');
        }

      }
      else if(element.hasClass('u-header--side-left--md') || element.hasClass('u-header--side-right--md')) {

        toggleable = element.find('.navbar-expand-md');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-md')
            .addClass('navbar-expand-sm');
        }

      }
      else if(element.hasClass('u-header--side-left--sm') || element.hasClass('u-header--side-right--sm')) {

        toggleable = element.find('.navbar-expand-sm');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-sm')
            .addClass('navbar-expand');
        }

      }

    }

  }

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader( element, config, observers ) {

    if( !element || !element.length ) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject( observers ) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function() {

    var $w = $(window);

    if( $w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length ){
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if(this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  }

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function(){

    if( this.prevViewport ) {
      this.observers[this.prevViewport].forEach(function(observer){
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function(observer){
      observer.check();
    });

    return this;

  }

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function() {

    // if( this.prevViewport ) {
    //   this.observers[this.prevViewport].forEach(function(observer){
    //     observer.destroy();
    //   });
    //   this.prevViewport = null;
    // }

    for(var viewport in this.observers) {

      this.observers[viewport].forEach(function(observer){
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function(observer){
      observer.reinit();
    });

    return this;

  }

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if( !element || !element.length ) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function() {

      this
        .destroy()
        .init()
        .check();
    }

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function() {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if(docScrolled < this.offset && !this.defaultState){
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function() {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function() {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function() {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') != 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function() {

    if( $(window).scrollTop() > this.delta ) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function() {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if( docScrolled >= this.offset && this.defaultState && this.direction == 'down' ) {
      this.changeState();
    }
    else if ( !this.defaultState && this.direction == 'up') {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function() {
    if(!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat( getComputedStyle( this.element.get(0) )['transition-duration'], 10 ) * 1000;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function() {
    if( !this.defaultState && $(window).scrollTop() > this.offset ) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function() {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', this.element.outerHeight() );

    }

    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function() {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', 0 );

    }

    if(this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function() {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function() {

    var $w = $(window);

    if( $w.scrollTop() > this.element.outerHeight() && !this.capInserted ) {
      this._insertCap();
    }
    else if($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if( $w.scrollTop() > this.offset && this.defaultState)  {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }



  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function() {

    this.element.removeClass('u-header--untransitioned');

    if( this.animationTimeoutId ) clearTimeout( this.animationTimeoutId );

    switch( this.effect ) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function() {

    var self = this;

    this.animationTimeoutId = setTimeout(function(){
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration );


    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver( element, config ) {

    if( !HSAbstractObserver.call( this, element ) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 0;
    }
    if(this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if( !this.imgs.length ) return this;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function() {

    var $w = $(window);

    if( !this.imgs.length ) return this;

    if( $w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function() {

    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function() {

    if( this.section.length ) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function() {

    if(!this.section.length) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function() {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function() {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    }

    if( this.hasFixedClass ) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function() {

    if( !this.sections.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.addClass( classes + ' js-header-change-moment');
      $this.removeClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.removeClass( classes + ' js-header-change-moment' );
      $this.addClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      animated: true
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function() {
    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function() {

    if( !this.elements.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function() {

    if(this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function() {

    if(this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  }





  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function() {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function() {

    this.element
        .addClass('js-header-fix-moment')
        .addClass( this.element.data('header-fix-moment-classes') )
        .removeClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.addClass( $section.data('header-fix-moment-classes') )
                .removeClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function() {

    this.element
        .removeClass('js-header-fix-moment')
        .removeClass( this.element.data('header-fix-moment-classes') )
        .addClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.removeClass( $section.data('header-fix-moment-classes') )
                .addClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver( element ) { if( !HSAbstractObserver.call(this, element) ) return; }

  HSHeaderWithoutBehaviorObserver.prototype.check = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.init = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function() {
    return this;
  }


})(jQuery);

/**
 * Hamburgers plugin helper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires hamburgers.min.css
 *
 */
;(function($){
	'use strict';

	$.HSCore.helpers.HSHamburgers = {

		/**
		 * Initialize 'hamburgers' plugin.
		 * 
		 * @param String selector
		 *
		 * @return undefined;
		 */
		init: function(selector) {

			if( !selector || !$(selector).length ) return;

		  var hamburgers = $(selector),
		  		timeoutid;

		  hamburgers.each(function(i, el){

		  	var $this = $(this);

		  	if($this.closest('button').length) {
		  		$this.closest('button').get(0).addEventListener('click', function(e){

		  			var $self = $(this),
		  					$hamburger = $self.find(selector);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$hamburger.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}
		  	else {
		  		$this.get(0).addEventListener('click', function(e){

		  			var $self = $(this);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$self.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}

		  });

		}
		

	};

})(jQuery);
/**
 * HSScrollNav Component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires jQuery
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSScrollNav = {

    /**
     * Base configuraion of the component.
     *
     * @private
     */
    _baseConfig: {
      duration: 400,
      easing: 'linear',
      over: $(),
      activeItemClass: 'active',
      afterShow: function(){},
      beforeShow: function(){}
    },

    /**
     * All initialized item on the page.
     *
     * @private
     */
    _pageCollection: $(),


    /**
     * Initialization of the component.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function(collection, config) {

      var self = this;

      if( !collection || !collection.length ) return $();

      collection.each(function(i, el) {

        var $this = $(el),
            itemConfig = config && $.isPlainObject(config) ?
                         $.extend(true, {}, self._baseConfig, config, $this.data()) :
                         $.extend(true, {}, self._baseConfig, $this.data());

        if( !$this.data('HSScrollNav') ) {

          $this.data('HSScrollNav', new HSScrollNav($this, itemConfig));

          self._pageCollection = self._pageCollection.add( $this );

        }

      });

      $(window).on('scroll.HSScrollNav', function(){

        self._pageCollection.each(function(i, el) {

          $(el).data('HSScrollNav').highlight();

        });

      }).trigger('scroll.HSScrollNav');

      return collection;

    }

  }


  /**
   * HSScrollNav.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSScrollNav(element, config) {

    /**
     * Current element.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuraion.
     *
     * @public
     */
    this.config = config;

    /**
     * Sections.
     *
     * @public
     */
    this._items = $();

    this._makeItems();
    this._bindEvents();
  }

  /**
   * Return collection of sections.
   *
   * @private
   * @return {jQuery}
   */
  HSScrollNav.prototype._makeItems = function() {

    var self = this;

    this.element.find('a[href^="#"]').each(function(i, el) {

      var $this = $(el);

      if( !$this.data('HSScrollNavSection') ) {

        $this.data('HSScrollNavSection', new HSScrollNavSection($this, self.config));

        self._items = self._items.add( $this );

      }

    });

  };

  /**
   * Binds necessary events.
   *
   * @private
   * @return {undefined}
   */
  HSScrollNav.prototype._bindEvents = function() {

    var self = this;

    this.element.on('click.HSScrollNav', 'a[href^="#"]', function(e) {

      var link = this;
      self._lockHightlight = true;
      if(self.current) self.current.unhighlight();
      link.blur();
      self.current = $(link).data('HSScrollNavSection');
      self.current.highlight();

      $(this).data('HSScrollNavSection').show( function(){
        self._lockHightlight = false;
      } );

      e.preventDefault();

    });

  };

  /**
   * Activates necessary menu item.
   *
   * @public
   */
  HSScrollNav.prototype.highlight = function() {

    var self = this, items, currentItem, current, scrollTop;

    if(!this._items.length || this._lockHightlight) return;

    scrollTop = $(window).scrollTop();

    if(scrollTop + $(window).height() === $(document).height()) {

      this.current = this._items.last().data('HSScrollNavSection');

      this.unhighlight();
      this.current.highlight();
      this.current.changeHash();

      return;
    }

    this._items.each(function(i, el){

      var Section = $(el).data('HSScrollNavSection'),
          $section = Section.section;

      if(scrollTop > Section.offset) {
        current = Section;
      }

    });

    if(current && this.current != current) {

      this.unhighlight();
      current.highlight();
      if(this.current) current.changeHash();

      this.current = current;

    }

  };

  /**
   * Deactivates all menu items.
   *
   * @public
   */
  HSScrollNav.prototype.unhighlight = function() {

    this._items.each(function(i, el){
      $(el).data('HSScrollNavSection').unhighlight();
    });

  };

  /**
   * HSScrollNavSection.
   *
   * @param {jQuery} element
   *
   * @constructor
   */
  function HSScrollNavSection(element, config) {

    var self = this;

    /**
     * Current section.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuration.
     *
     * @public
     */
    this.config = config;

    /**
     * Getter for acces to the section element.
     *
     * @public
     */
    Object.defineProperty(this, 'section', {
      value: $(self.element.attr('href'))
    });

    /**
     * Getter for determinate position of the section relative to document.
     *
     * @public
     */

    Object.defineProperty(this, 'offset', {
      get: function() {

        var header = $('.u-header'),
            headerStyles = getComputedStyle(header.get(0)),
            headerPosition = headerStyles.position,
            offset = self.section.offset().top;



        if(header.length && headerPosition == 'fixed' && parseInt(headerStyles.top) == 0) {
          offset = offset - header.outerHeight() - parseInt(headerStyles.marginTop);
        }

        if(self.config.over.length) {
          offset = offset - self.config.over.outerHeight();
        }

        return offset;
      }
    });


  }

  /**
   * Moves to the section.
   *
   * @public
   */
  HSScrollNavSection.prototype.show = function(callback) {

    var self = this;

    if( !this.section.length ) return;

    self.config.beforeShow.call(self.section);

    this.changeHash();

    $('html, body').stop().animate({
      scrollTop: self.offset + 3
    }, {
      duration: self.config.duration,
      easing: self.config.easing,
      complete: function() {
        $('html, body').stop().animate({
          scrollTop: self.offset + 3
        }, {
          duration: self.config.duration,
          easing: self.config.easing,
          complete: function() {
            self.config.afterShow.call(self.section);
            if($.isFunction(callback)) callback();
          }
        });
      }
    });

  };

  /**
   * Changes location's hash.
   *
   * @public
   */
  HSScrollNavSection.prototype.changeHash = function() {
    this.section.attr('id', '');
    window.location.hash = this.element.attr('href');
    this.section.attr('id', this.element.attr('href').slice(1));
  };

  /**
   * Activates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.highlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.addClass(this.config.activeItemClass);

  };

  /**
   * Deactivates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.unhighlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.removeClass(this.config.activeItemClass);

  };



})(jQuery);

/**
 * Height calculating helper-wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.helpers.HSHeightCalc = {
    /**
     * Rating.
     *
     * @return undefined
     */
    init: function () {
      var collection = $('[data-calc-target]');

      if (!collection.length) return;

      collection.each(function () {
        var $this = $(this),
          $target = $this.data('calc-target');
        $this.css({
          'height': 'calc(100vh - ' + $($target).outerHeight() + 'px)',
        });
      });
    }
  };
})(jQuery);

/**
 * Gmap wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSGMap = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      zoom: 14,
      scrollwheel: false
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Gmap wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGMap();

      return this.pageCollection;

    },

    initGMap: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          ID = $this.attr('id'),
          gMapType = $this.data('type'),
          gMapLat = $this.data('lat'),
          gMapLng = $this.data('lng'),
          gMapZoom = $this.data('zoom'),
          gMapTitle = $this.data('title'),

          gMapStyles = JSON.parse(el.getAttribute('data-styles')),
          gMapStylesArray = [],

          polygon,
          gMapPolygon = Boolean($this.data('polygon')),
          gMapPolygonCords = JSON.parse(el.getAttribute('data-polygon-cords')),
          gMapPolygonStyles = JSON.parse(el.getAttribute('data-polygon-styles')),

          polylines,
          gMapPolylines = Boolean($this.data('polylines')),
          gMapPolylinesCords = JSON.parse(el.getAttribute('data-polylines-cords')),
          gMapPolylinesStyles = JSON.parse(el.getAttribute('data-polylines-styles')),

          gMapRoutes = Boolean($this.data('routes')),
          gMapRoutesCords = JSON.parse(el.getAttribute('data-routes-cords')),
          gMapRoutesStyles = JSON.parse(el.getAttribute('data-routes-styles')),

          gMapGeolocation = Boolean($this.data('geolocation')),

          gMapGeocoding = Boolean($this.data('geocoding')),
          gMapCordsTarget = $this.data('cords-target'),

          gMapPin = Boolean($this.data('pin')),
          gMapPinIcon = $this.data('pin-icon'),

          gMapMultipleMarkers = Boolean($this.data('multiple-markers')),
          gMapMarkersLocations = JSON.parse(el.getAttribute('data-markers-locations')),

          $gMap;

        //Map Type
        if (gMapType === 'satellite') {
          $gMap = new google.maps.Map(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setCenter({
            lat: gMapLat,
            lng: gMapLng
          });

          $gMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        } else if (gMapType === 'terrain') {
          $gMap = new google.maps.Map(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setCenter({
            lat: gMapLat,
            lng: gMapLng
          });

          $gMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        } else if (gMapType === 'roadmap') {
          $gMap = new google.maps.Map(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setCenter({
            lat: gMapLat,
            lng: gMapLng
          });

          $gMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        } else if (gMapType === 'street-view') {
          $gMap = new google.maps.StreetViewPanorama(document.getElementById(ID), {
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          $gMap.setPosition({
            lat: gMapLat,
            lng: gMapLng
          });
        } else if (gMapType === 'static') {
          $(document).ready(function () {
            $gMap = GMaps.staticMapURL({
              size: [2048, 2048],
              lat: gMapLat,
              lng: gMapLng,
              zoom: gMapZoom ? gMapZoom : config['zoom']
            });

            $('#' + ID).css('background-image', 'url(' + $gMap + ')');
          });
        } else if (gMapType === 'custom') {
          var arrL = gMapStyles.length;

          for (var i = 0; i < arrL; i++) {
            var featureType = gMapStyles[i][0],
              elementType = gMapStyles[i][1],
              stylers = gMapStyles[i][2],
              obj = $.extend({}, gMapStylesArray[i]);

            if (featureType != "") {
              obj.featureType = featureType;
            }

            if (elementType != "") {
              obj.elementType = elementType;
            }

            obj.stylers = stylers;

            gMapStylesArray.push(obj);
          }

          $gMap = new GMaps({
            div: '#' + ID,
            lat: gMapLat,
            lng: gMapLng,
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel'],
            styles: gMapStylesArray
          });

          //Pin
          if (gMapPin) {
            $gMap.addMarker({
              lat: gMapLat,
              lng: gMapLng,
              title: gMapTitle,
              icon: gMapPinIcon
            });
          }
          //End Pin
        } else {
          $gMap = new GMaps({
            div: '#' + ID,
            lat: gMapLat,
            lng: gMapLng,
            zoom: gMapZoom ? gMapZoom : config['zoom'],
            scrollwheel: config['scrollwheel']
          });

          //Pin
          if (gMapPin) {
            $gMap.addMarker({
              lat: gMapLat,
              lng: gMapLng,
              title: gMapTitle,
              icon: gMapPinIcon
            });
          }
          //End Pin
        }
        //End Map Type

        //Pin
        if (gMapPin && gMapType === 'satellite' || gMapType === 'terrain' || gMapType === 'roadmap' || gMapType === 'street-view') {
          //Variables
          var $pin = new google.maps.Marker({
            position: {
              lat: gMapLat,
              lng: gMapLng
            },
            map: $gMap
          });

          if (gMapPinIcon) {
            var $pinIcon = new google.maps.MarkerImage(gMapPinIcon);
            $pin.setIcon($pinIcon);
          }

          if (gMapTitle) {
            $pin.setOptions({
              title: gMapTitle
            });
          }
        }
        //End Pin

        //Multiple markers
        if (gMapMultipleMarkers === true) {
          var infowindow = new google.maps.InfoWindow(),
            marker,
            i2;

          for (i2 = 0; i2 < gMapMarkersLocations.length; i2++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(gMapMarkersLocations[i2][1], gMapMarkersLocations[i2][2]),
              map: $gMap
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i2) {
              return function () {
                infowindow.setContent(gMapMarkersLocations[i2][0]);
                infowindow.open($gMap, marker);
              }
            })(marker, i2));
          }
        }
        //End Multiple markers

        //Auto Center markers on window resize
        if (!gMapGeolocation) {
          google.maps.event.addDomListener(window, 'resize', function () {
            setTimeout(function () {
              $gMap.setCenter({
                lat: gMapLat,
                lng: gMapLng
              });
            }, 100);
          });
        }

        //Polygon
        if (gMapPolygon) {
          $(document).ready(function () {
            polygon = $gMap.drawPolygon({
              paths: gMapPolygonCords,
              strokeColor: gMapPolygonStyles.strokeColor,
              strokeOpacity: gMapPolygonStyles.strokeOpacity,
              strokeWeight: gMapPolygonStyles.strokeWeight,
              fillColor: gMapPolygonStyles.fillColor,
              fillOpacity: gMapPolygonStyles.fillOpacity
            });
          });
        }
        //End Polygon

        //Polylines
        if (gMapPolylines) {
          $(document).ready(function () {
            $gMap.drawPolyline({
              path: gMapPolylinesCords,
              strokeColor: gMapPolylinesStyles.strokeColor,
              strokeOpacity: gMapPolylinesStyles.strokeOpacity,
              strokeWeight: gMapPolylinesStyles.strokeWeight
            });
          });
        }
        //End Polylines

        //Routes
        if (gMapRoutes) {
          $(document).ready(function () {
            $gMap.drawRoute({
              origin: gMapRoutesCords[0],
              destination: gMapRoutesCords[1],
              travelMode: gMapRoutesStyles.travelMode,
              strokeColor: gMapRoutesStyles.strokeColor,
              strokeOpacity: gMapRoutesStyles.strokeOpacity,
              strokeWeight: gMapRoutesStyles.strokeWeight
            });
          });
        }
        //End Routes

        //Geolocation
        if (gMapGeolocation) {
          GMaps.geolocate({
            success: function (position) {
              $gMap.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });

              $gMap.addMarker({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                title: gMapTitle,
                icon: gMapPinIcon
              });

              google.maps.event.addDomListener(window, 'resize', function () {
                setTimeout(function () {
                  $gMap.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  });
                }, 100);
              });
            },
            error: function (error) {
              alert('Geolocation failed: ' + error.message);
            },
            not_supported: function () {
              alert('Your browser does not support geolocation');
            }
          });
        }
        //End Geolocation

        //Geocoding
        if (gMapGeocoding) {
          $(document).ready(function () {
            var targetCordsParent = $(gMapCordsTarget).closest('form');

            $(targetCordsParent).submit(function (e) {
              e.preventDefault();

              GMaps.geocode({
                address: $(gMapCordsTarget).val().trim(),
                callback: function (results, status) {
                  if (status === 'OK') {
                    var latlng = results[0].geometry.location;

                    $gMap.setCenter(latlng.lat(), latlng.lng());
                    $gMap.addMarker({
                      lat: latlng.lat(),
                      lng: latlng.lng()
                    });

                    gMapLat = latlng.lat();
                    gMapLng = latlng.lng();
                  }
                }
              });
            });
          });
        }
        //End Geocoding

        //Actions
        collection = collection.add($this);
      });
    }
  }
})(jQuery);

/**
 * Go To wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $.HSCore.components.HSGoTo = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Go To wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGoTo();

      return this.pageCollection;
    },

    initGoTo: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $target = $this.data('target'),
          type = $this.data('type'),
          showEffect = $this.data('show-effect'),
          hideEffect = $this.data('hide-effect'),
          position = JSON.parse(el.getAttribute('data-position')),
          compensation = $($this.data('compensation')).outerHeight(),
          offsetTop = $this.data('offset-top'),
          targetOffsetTop = function () {
            if (compensation) {
              return $target ? $($target).offset().top - compensation : 0;
            } else {
              return $target ? $($target).offset().top : 0;
            }
          };

        if (type == 'static') {
          $this.css({
            'display': 'inline-block'
          });
        } else {
          $this.addClass('animated').css({
            'display': 'inline-block',
            'position': type,
            'opacity': 0
          });
        }

        if (type == 'fixed' || type == 'absolute') {
          $this.css(position);
        }

        $this.on('click', function (e) {
          e.preventDefault();

          $('html, body').stop().animate({
            'scrollTop': targetOffsetTop()
          }, 800);
        });

        if (!$this.data('offset-top') && !$this.hasClass('js-animation-was-fired') && type != 'static') {
          if ($this.offset().top <= $(window).height()) {
            $this.show();

            setTimeout(function () {
              $this.addClass('js-animation-was-fired ' + showEffect).css({
                'opacity': ''
              });
            });
          }
        }

        if (type != 'static') {
          $(window).on('scroll', function () {
            if ($this.data('offset-top')) {
              if ($(window).scrollTop() >= offsetTop && !$this.hasClass('js-animation-was-fired')) {
                $this.show();

                setTimeout(function () {
                  $this.addClass('js-animation-was-fired ' + showEffect).css({
                    'opacity': ''
                  });
                });
              } else if ($(window).scrollTop() <= offsetTop && $this.hasClass('js-animation-was-fired')) {
                $this.removeClass('js-animation-was-fired ' + showEffect);

                setTimeout(function () {
                  $this.addClass(hideEffect).css({
                    'opacity': 0
                  });
                }, 100);

                setTimeout(function () {
                  $this.removeClass(hideEffect).hide();
                }, 400);
              }
            } else {
              var thisOffsetTop = $this.offset().top;

              if (!$this.hasClass('js-animation-was-fired')) {
                if ($(window).scrollTop() >= thisOffsetTop - $(window).height()) {
                  $this.show();

                  setTimeout(function () {
                    $this.addClass('js-animation-was-fired ' + showEffect).css({
                      'opacity': ''
                    });
                  });
                }
              }
            }
          });

          $(window).trigger('scroll');
        }

        //Actions
        collection = collection.add($this);
      });
    }
  };
})(jQuery);

/**
 * Carousel wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function($) {
	'use strict';

	$.HSCore.components.HSCarousel = {
		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig: {
			autoplay: false,
			infinite: true
		},

		/**
		 *
		 *
		 * @var jQuery pageCollection
		 */
		pageCollection: $(),

		/**
		 * Initialization of Carousel wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery pageCollection - collection of initialized items.
		 */
		init: function(selector, config) {
			this.collection = selector && $(selector).length ? $(selector) : $();
			if (!$(selector).length) return;

			this.config = config && $.isPlainObject(config) ?
				$.extend({}, this._baseConfig, config) : this._baseConfig;

			this.config.itemSelector = selector;

			this.initCarousel();

			return this.pageCollection;
		},

		initCarousel: function() {
			//Variables
			var $self = this,
				config = $self.config,
				collection = $self.pageCollection;

			//Actions
			this.collection.each(function(i, el) {
				//Variables
				var $this = $(el),
					id = $this.attr('id'),

					//Markup elements
					target = $this.data('nav-for'),
					isThumb = $this.data('is-thumbs'),
					arrowsClasses = $this.data('arrows-classes'),
					arrowLeftClasses = $this.data('arrow-left-classes'),
					arrowRightClasses = $this.data('arrow-right-classes'),
					pagiClasses = $this.data('pagi-classes'),
					pagiHelper = $this.data('pagi-helper'),
					$pagiIcons = $this.data('pagi-icons'),
					$prevMarkup = '<div class="js-prev ' + arrowsClasses + ' ' + arrowLeftClasses + '"></div>',
					$nextMarkup = '<div class="js-next ' + arrowsClasses + ' ' + arrowRightClasses + '"></div>',

					//Setters
					setSlidesToShow = $this.data('slides-show'),
					setSlidesToScroll = $this.data('slides-scroll'),
					setAutoplay = $this.data('autoplay'),
					setAnimation = $this.data('animation'),
					setEasing = $this.data('easing'),
					setFade = $this.data('fade'),
					setSpeed = $this.data('speed'),
					setSlidesRows = $this.data('rows'),
					setCenterMode = $this.data('center-mode'),
					setCenterPadding = $this.data('center-padding'),
					setPauseOnHover = $this.data('pause-hover'),
					setVariableWidth = $this.data('variable-width'),
					setInitialSlide = $this.data('initial-slide'),
					setVertical = $this.data('vertical'),
					setRtl = $this.data('rtl'),
					setInEffect = $this.data('in-effect'),
					setOutEffect = $this.data('out-effect'),
					setInfinite = $this.data('infinite'),
					setDataTitlePosition = $this.data('title-pos-inside'),
					setFocusOnSelect = $this.data('focus-on-select'),
					setLazyLoad = $this.data('lazy-load'),
					isAdaptiveHeight = $this.data('adaptive-height'),
					numberedPaging = $this.data('numbered-pagination'),
					setResponsive = JSON.parse(el.getAttribute('data-responsive'));

				if ($this.find('[data-slide-type]').length) {
					$self.videoSupport($this);
				}

				$this.on('init', function(event, slick) {
					$(slick.$slides).css('height', 'auto');

					if(isThumb && setSlidesToShow >= $(slick.$slides).length) {
						 $this.addClass('slick-transform-off');
					}
				});

				if (setInEffect && setOutEffect) {
					$this.on('init', function(event, slick) {
						$(slick.$slides).addClass('single-slide');
					});
				}

				if (pagiHelper) {
					$this.on('init', function(event, slick) {
						var $pagination = $this.find('.js-pagination');

						if (!$pagination.length) return;

						$pagination.append('<span class="u-dots-helper"></span>');
					});
				}

				if (isThumb) {
					$('#' + id).on('click', '.slick-slide', function(e) {
						e.stopPropagation();

						//Variables
						var i = $(this).data('slick-index');

						if ($('#' + id).slick('slickCurrentSlide') !== i) {
							$('#' + id).slick('slickGoTo', i);
						}
					});
				}

				$this.on('init', function(event, slider) {
					var $pagination = $this.find('.js-pagination');

					if (!$pagination.length) return;

					$($pagination[0].children[0]).addClass('slick-current');
				});

				$this.on('init', function(event, slick) {
					var slide = $(slick.$slides)[0],
						animatedElements = $(slide).find('[data-scs-animation-in]');

					$(animatedElements).each(function() {
						var animationIn = $(this).data('scs-animation-in');

						$(this).addClass('animated ' + animationIn).css('opacity', 1);
					});
				});

				if (numberedPaging) {
					$this.on('init', function(event, slick) {
						$(numberedPaging).text('1' + '/' + slick.slideCount);
					});
				}

				$this.slick({
					autoplay: setAutoplay ? true : false,
					autoplaySpeed: setSpeed ? setSpeed : 3000,

					cssEase: setAnimation ? setAnimation : 'ease',
					easing: setEasing ? setEasing : 'linear',
					fade: setFade ? true : false,

					infinite: setInfinite ? true : false,
					initialSlide: setInitialSlide ? setInitialSlide - 1 : 0,
					slidesToShow: setSlidesToShow ? setSlidesToShow : 1,
					slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 1,
					centerMode: setCenterMode ? true : false,
					variableWidth: setVariableWidth ? true : false,
					pauseOnHover: setPauseOnHover ? true : false,
					rows: setSlidesRows ? setSlidesRows : 1,
					vertical: setVertical ? true : false,
					verticalSwiping: setVertical ? true : false,
					rtl: setRtl ? true : false,
					centerPadding: setCenterPadding ? setCenterPadding : 0,
					focusOnSelect: setFocusOnSelect ? true : false,
					lazyLoad: setLazyLoad ? setLazyLoad : false,

					asNavFor: target ? target : false,
					prevArrow: arrowsClasses ? $prevMarkup : false,
					nextArrow: arrowsClasses ? $nextMarkup : false,
					dots: pagiClasses ? true : false,
					dotsClass: 'js-pagination ' + pagiClasses,
					adaptiveHeight: !!isAdaptiveHeight,
					customPaging: function(slider, i) {
						var title = $(slider.$slides[i]).data('title');

						if (title && $pagiIcons) {
							return '<span>' + title + '</span>' + $pagiIcons;
						} else if ($pagiIcons) {
							return '<span></span>' + $pagiIcons;
						} else if (title && setDataTitlePosition) {
							return '<span>' + title + '</span>';
						} else if (title && !setDataTitlePosition) {
							return '<span></span>' + '<strong class="u-dot-title">' + title + '</strong>';
						} else {
							return '<span></span>';
						}
					},
					responsive: setResponsive
				});

				$this.on('beforeChange', function(event, slider, currentSlide, nextSlide) {
					var nxtSlide = $(slider.$slides)[nextSlide],
						slide = $(slider.$slides)[currentSlide],
						$pagination = $this.find('.js-pagination'),
						animatedElements = $(nxtSlide).find('[data-scs-animation-in]'),
						otherElements = $(slide).find('[data-scs-animation-in]');

					$(otherElements).each(function() {
						var animationIn = $(this).data('scs-animation-in');

						$(this).removeClass('animated ' + animationIn);
					});

					$(animatedElements).each(function() {
						$(this).css('opacity', 0);
					});

					if (!$pagination.length) return;

					if (currentSlide > nextSlide) {
						$($pagination[0].children).removeClass('slick-active-right');

						$($pagination[0].children[nextSlide]).addClass('slick-active-right');
					} else {
						$($pagination[0].children).removeClass('slick-active-right');
					}

					$($pagination[0].children).removeClass('slick-current');

					setTimeout(function() {
						$($pagination[0].children[nextSlide]).addClass('slick-current');
					}, .25);
				});

				if (numberedPaging) {
					$this.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
						var i = (nextSlide ? nextSlide : 0) + 1;

						$(numberedPaging).text(i + '/' + slick.slideCount);
					});
				}

				$this.on('afterChange', function(event, slick, currentSlide, nextSlide) {
					var slide = $(slick.$slides)[currentSlide],
						animatedElements = $(slide).find('[data-scs-animation-in]');

					$(animatedElements).each(function() {
						var animationIn = $(this).data('scs-animation-in'),
							animationDelay = $(this).data('scs-animation-delay'),
							animationDuration = $(this).data('scs-animation-duration');

							console.log(animationDuration);

						$(this).css({
							'animation-delay': animationDelay + 'ms',
							'animation-duration': animationDuration + 'ms'
						});

						$(this).addClass('animated ' + animationIn).css('opacity', 1);
					});
				});

				if (setInEffect && setOutEffect) {
					$this.on('afterChange', function(event, slick, currentSlide, nextSlide) {
						$(slick.$slides).removeClass('animated set-position ' + setInEffect + ' ' + setOutEffect);
					});

					$this.on('beforeChange', function(event, slick, currentSlide) {
						$(slick.$slides[currentSlide]).addClass('animated ' + setOutEffect);
					});

					$this.on('setPosition', function(event, slick) {
						$(slick.$slides[slick.currentSlide]).addClass('animated set-position ' + setInEffect);
					});
				}

				//Actions
				collection = collection.add($this);
			});
		},

		/**
		 * Implementation of video support.
		 *
		 * @param jQuery carousel
		 * @param String videoSupport
		 *
		 * @return undefined
		 */
		videoSupport: function(carousel) {
			if (!carousel.length) return;

			carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var slideType = $(slick.$slides[currentSlide]).data('slide-type'),
					player = $(slick.$slides[currentSlide]).find('iframe').get(0),
					command;

				if (slideType == 'vimeo') {
					command = {
						"method": "pause",
						"value": "true"
					}
				} else if (slideType == 'youtube') {
					command = {
						"event": "command",
						"func": "pauseVideo"
					}
				} else {
					return false;
				}

				if (player != undefined) {
					player.contentWindow.postMessage(JSON.stringify(command), '*');
				}
			});
		},

		/**
		 * Implementation of text animation.
		 *
		 * @param jQuery carousel
		 * @param String textAnimationSelector
		 *
		 * @requires charming.js, anime.js, textfx.js
		 *
		 * @return undefined
		 */
		initTextAnimation: function(carousel, textAnimationSelector) {
			if (!window.TextFx || !window.anime || !carousel.length) return;

			var $text = carousel.find(textAnimationSelector);

			if (!$text.length) return;

			$text.each(function(i, el) {
				var $this = $(el);

				if (!$this.data('TextFx')) {
					$this.data('TextFx', new TextFx($this.get(0)));
				}
			});


			carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var targets = slick.$slider
					.find('.slick-track')
					.children();

				var currentTarget = targets.eq(currentSlide),
					nextTarget = targets.eq(nextSlide);

				currentTarget = currentTarget.find(textAnimationSelector);
				nextTarget = nextTarget.find(textAnimationSelector);

				if (currentTarget.length) {
					currentTarget.data('TextFx').hide(currentTarget.data('effect') ? currentTarget.data('effect') : 'fx1');
				}

				if (nextTarget.length) {
					nextTarget.data('TextFx').show(nextTarget.data('effect') ? nextTarget.data('effect') : 'fx1');
				}
			});
		}
	}
})(jQuery);

/**
 * Filter wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */

;(function ($) {
  'use strict';

  $.HSCore.components.HSCubeportfolio = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Filter wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCubeportfolio();

      return this.pageCollection;

    },

    initCubeportfolio: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          setControls = $this.data('controls'),
          setLayout = $this.data('layout'),
          setXGap = $this.data('x-gap'),
          setYGap = $this.data('y-gap'),
          setLoadMoreAction = $this.data('action'),
          setLoadMoreItems = $this.data('items'),
          setAnimation = $this.data('animation'),
          setCaptionAnimation = $this.data('caption-animation'),
          setDefaultMediaQueries = [{
            width: 1500,
            cols: 3
          }, {
            width: 1100,
            cols: 3
          }, {
            width: 800,
            cols: 3
          }, {
            width: 480,
            cols: 2,
            options: {
              caption: '',
              gapHorizontal: 10,
              gapVertical: 10
            }
          }],
          setMeidaQueries = JSON.parse(el.getAttribute('data-media-queries'));

        $this.cubeportfolio({
          filters: setControls,
          layoutMode: setLayout,
          defaultFilter: '*',
          sortToPreventGaps: true,
          gapHorizontal: setXGap,
          gapVertical: setYGap,
          animationType: setAnimation,
          gridAdjustment: 'responsive',
          mediaQueries: setMeidaQueries ? setMeidaQueries : setDefaultMediaQueries,
          caption: setCaptionAnimation ? setCaptionAnimation : 'overlayBottomAlong',
          displayType: 'sequentially',
          displayTypeSpeed: 100,

          // lightbox
          lightboxDelegate: '.cbp-lightbox',
          lightboxGallery: true,
          lightboxTitleSrc: 'data-title',
          lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

          // singlePageInline
          singlePageInlineDelegate: '.cbp-singlePageInline',
          singlePageInlinePosition: 'below',
          singlePageInlineInFocus: true,
          plugins: {
              loadMore: {
                  element: '#js-cbp-loadMore',
                  action: setLoadMoreAction,
                  loadItems: setLoadMoreItems,
              }
          },
          singlePageInlineCallback: function (url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'html',
              timeout: 30000
            })
              .done(function (result) {

                t.updateSinglePageInline(result);

              })
              .fail(function () {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
              });
          },

          // singlePage popup
          singlePageDelegate: '.cbp-singlePage',
          singlePageDeeplinking: true,
          singlePageStickyNavigation: true,
          singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
          singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'html',
              timeout: 10000
            })
              .done(function (result) {
                t.updateSinglePage(result);
              })
              .fail(function () {
                t.updateSinglePage('AJAX Error! Please refresh the page!');
              });
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }
  };

})(jQuery);
