'use strict';

Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0===n)return !1;for(var i=0|e,o=Math.max(i>=0?i:n-Math.abs(i),0);o<n;){if(function(r,e){return r===e||"number"==typeof r&&"number"==typeof e&&isNaN(r)&&isNaN(e)}(t[o],r))return !0;o++;}return !1}});

var n,u,t,i,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i,r,o,f=arguments;if(l=s({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(f[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return o=l.key,null!=(r=l.ref)&&delete l.ref,null!=o&&delete l.key,v(n,l,o,r)}function v(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function d(n){return n.children}function y(n){if(null==n||"boolean"==typeof n)return null;if("string"==typeof n||"number"==typeof n)return v(null,n,null,null);if(null!=n.__e||null!=n.__c){var l=v(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__p?w(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&(i=n.debounceRendering,(n.debounceRendering||t)(_));}function _(){var n,l,t,i,r,o,f,e;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,o=(r=(l=n).__v).__e,f=l.__P,e=l.u,l.u=!1,f&&(t=[],i=$(f,r,s({},r),l.__n,void 0!==f.ownerSVGElement,null,t,e,null==o?w(r):o),j(t,r),i!=o&&g(r)));}function b(n,l,u,t,i,r,o,c,s){var h,v,p,d,y,m,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=r?r[0]:_?w(u,0):null),h=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;}if(d=$(n,u,p=p||f,t,i,r,o,null,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==m&&(m=d),null!=u.l)d=u.l,u.l=null;else if(r==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.l=d);}}return h++,u}),l.__e=m,null!=r&&"function"!=typeof l.type)for(h=r.length;h--;)null!=r[h]&&a(r[h]);for(h=_;h--;)null!=k[h]&&D(k[h],k[h]);if(g)for(h=0;h<g.length;h++)A(g[h],g[++h],g[++h]);}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)x(n[t],l,u);else u.push(l?l(y(n)):n);return u}function C(n,l,u,t,i){var r;for(r in u)r in l||N(n,r,null,u[r],t);for(r in l)i&&"function"!=typeof l[r]||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],t);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function N(n,l,u,t,i){var r,o,f,e,c;if("key"===(l=i?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l)if(r=n.style,"string"==typeof u)r.cssText=u;else{if("string"==typeof t&&(r.cssText="",t=null),t)for(o in t)u&&o in u||P(r,o,"");if(u)for(f in u)t&&u[f]===t[f]||P(r,f,u[f]);}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,T,e),(n.t||(n.t={}))[l]=u):n.removeEventListener(l,T,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u));}function T(l){return this.t[l.type](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,c,a){var h,v,p,y,w,g,k,_,C,P,N=u.type;if(void 0!==u.constructor)return null;(h=n.__b)&&h(u);try{n:if("function"==typeof N){if(_=u.props,C=(h=N.contextType)&&i[h.__c],P=h?C?C.props.value:h.__p:i,t.__c?k=(v=u.__c=t.__c).__p=v.__E:("prototype"in N&&N.prototype.render?u.__c=v=new N(_,P):(u.__c=v=new m(_,P),v.constructor=N,v.render=H),C&&C.sub(v),v.props=_,v.state||(v.state={}),v.context=P,v.__n=i,p=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=N.getDerivedStateFromProps&&s(v.__s==v.state?v.__s=s({},v.__s):v.__s,N.getDerivedStateFromProps(_,v.__s)),p)null==N.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&f.push(v);else{if(null==N.getDerivedStateFromProps&&null==e&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(_,P),!e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(_,v.__s,P)){for(v.props=_,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=null!=c?c!==t.__e?c:t.__e:null,u.__k=t.__k,h=0;h<u.__k.length;h++)u.__k[h]&&(u.__k[h].__p=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(_,v.__s,P);}for(y=v.props,w=v.state,v.context=P,v.props=_,v.state=v.__s,(h=n.__r)&&h(u),v.__d=!1,v.__v=u,v.__P=l,h=v.render(v.props,v.state,v.context),u.__k=x(null!=h&&h.type==d&&null==h.key?h.props.children:h),null!=v.getChildContext&&(i=s(s({},i),v.getChildContext())),p||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(y,w)),b(l,u,t,i,r,o,f,c,a),v.base=u.__e;h=v.__h.pop();)v.__s&&(v.state=v.__s),h.call(v);p||null==y||null==v.componentDidUpdate||v.componentDidUpdate(y,w,g),k&&(v.__E=v.__p=null);}else u.__e=z(t.__e,u,t,i,r,o,f,a);(h=n.diffed)&&h(u);}catch(l){n.__e(l,u,t);}return u.__e}function j(l,u){for(var t;t=l.pop();)try{t.componentDidMount();}catch(l){n.__e(l,t.__v);}n.__c&&n.__c(u);}function z(n,l,u,t,i,r,o,c){var s,a,h,v,p=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),r=null;}return null===l.type?p!==d&&(null!=r&&(r[r.indexOf(n)]=null),n.data=d):l!==u&&(null!=r&&(r=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,c||(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||"")),C(n,d,p,i,c),l.__k=l.props.children,v||b(n,l,u,t,"foreignObject"!==l.type&&i,r,o,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))),n}function A(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function D(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&A(i,null,u),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(l){n.__e(l,u);}i.base=i.__P=null;}if(i=l.__k)for(o=0;o<i.length;o++)i[o]&&D(i[o],u,t);null!=r&&a(r);}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,o,c;n.__p&&n.__p(l,u),o=(i=t===r)?null:t&&t.__k||u.__k,l=h(d,null,[l]),c=[],$(u,i?u.__k=l:(t||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:e.slice.call(u.childNodes),c,!1,t||f,i),j(c,l);}n={},m.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.u=!1,l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(n&&this.__h.push(n),this.u=!0,k(this));},m.prototype.render=d,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=n.debounceRendering,n.__e=function(n,l,u){for(var t;l=l.__p;)if((t=l.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(n));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(n);}return k(t.__E=t)}catch(l){n=l;}throw n},r=f,o=0;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var polyfill_min = createCommonjsModule(function (module, exports) {
!function(e,n){n();}(0,function(){function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return !(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this);}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value);}catch(r){return void f(n.promise,r)}i(n.promise,o);}else(1===e._state?i:f)(n.promise,e._value);})):e._deferreds.push(n);}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments);}}(t,n),e)}e._state=1,e._value=n,u(e);}catch(r){f(e,r);}}function f(e,n){e._state=2,e._value=n,u(e);}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value);});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null;}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e));},function(e){t||(t=!0,f(n,e));});}catch(o){if(t)return;t=!0,f(n,o);}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t;}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n);},o)}i[e]=n,0==--f&&t(i);}catch(c){o(c);}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u]);})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e);})},o.reject=function(e){return new o(function(n,t){t(e);})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r);})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e);}||function(e){a(e,0);},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e);};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof commonjsGlobal)return commonjsGlobal;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o;});
});

var alertOnNotification = function () {
    if (!window.FCMPlugin) {
        return;
    }
    window.FCMPlugin.onNotification(function (data) {
        if (data.wasTapped) {
            alert(JSON.stringify(data));
        }
    });
};

var BodyContentDefaultState = {
    customVibration: '[200, 300, 200, 300]',
    data: {
        autoCancel: true,
        bigPicture: 'https://cloud.githubusercontent.com/assets/7321362/24875178/1e58d2ec-1ddc-11e7-96ed-ed8bf011146c.png',
        bigText: 'Big text line 1\nBig text line 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Mauris mollis urna sed nisl venenatis, a tincidunt orci iaculis. In hac habitasse platea' +
            'dictumst. Nulla quis hendrerit risus. Morbi neque lectus, laoreet quis dui quis, luctus' +
            'blandit mauris. Sed ullamcorper risus et lorem facilisis, sit amet tristique nulla' +
            'rutrum. Vivamus auctor pulvinar ligula, tempor lacinia arcu commodo in. Ut condimentum' +
            'dolor ac felis venenatis, sit amet cursus erat accumsan. Aliquam a justo elit. Maecenas' +
            'dignissim suscipit ipsum, nec laoreet velit.',
        channelDescription: 'Default notification',
        channelId: 'notification',
        channelName: 'Notification',
        color: '#0000ff',
        headsUp: false,
        id: 999,
        largeIcon: 'https://avatars2.githubusercontent.com/u/1174345?v=3&s=96',
        openApp: false,
        smallIcon: 'mipmap/icon',
        sound: true,
        summary: 'Summary test',
        text: 'Message text',
        textLines: 'Text line 1\nText line 2\nText line 3\nText line 4\nText line 5',
        title: 'App Example Title',
        vibrate: true,
    },
    disabledFields: [],
    notificationStyle: 'simple',
    onlineSoundOption: 'https://freemusicarchive.org/file/music/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3',
    resourceSoundOption: 'res://raw/lost_european_the_beginning_of_the_end_mp3',
    soundOption: 'true',
    token: undefined,
    vibrationOption: 'true',
};

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var deepCloneBodyContent = function (bodyContentState) { return (__assign(__assign({}, bodyContentState), { data: __assign({}, bodyContentState.data) })); };

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var generateOnChange = function (type, onChange) {
    if (type === 'checkbox') {
        return function (event) { return onChange(event.target.checked); };
    }
    if (type === 'number') {
        return function (event) { return onChange(event.target.valueAsNumber); };
    }
    return function (event) { return onChange(event.target.value); };
};
var InputField = function (props) {
    var _a = __assign$1({ isDisabled: false, type: 'text' }, props), isDisabled = _a.isDisabled, value = _a.value, type = _a.type, onChange = _a.onChange;
    var inputProps = {
        disabled: isDisabled,
        onChange: generateOnChange(type, onChange),
    };
    return (h("label", { style: isDisabled ? { textDecoration: 'line-through' } : {} },
        props.label,
        ['text', 'number', 'color', 'url'].includes(type) && (h("input", __assign$1({ type: type, value: value }, inputProps))),
        type === 'checkbox' && h("input", __assign$1({ type: type, checked: !!value }, inputProps)),
        type === 'textarea' && h("textarea", __assign$1({ children: value }, inputProps))));
};

var NotificationStyleField = function (props) {
    var onChange = function (event) {
        if (props.onChange) {
            var select = event.target;
            props.onChange(select.value);
        }
    };
    return (h("label", null,
        "Notification Style",
        h("select", { onChange: onChange },
            h("option", { value: "simple", selected: props.selected === 'simple' }, "Simple"),
            h("option", { value: "multipleLines", selected: props.selected === 'multipleLines' }, "Multiple Lines"),
            h("option", { value: "bigText", selected: props.selected === 'bigText' }, "Big Text"),
            h("option", { value: "bigPicture", selected: props.selected === 'bigPicture' }, "Big Picture"))));
};

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var SoundOptionField = function (props) {
    var _a = __assign$2({ isDisabled: false }, props), isDisabled = _a.isDisabled, selected = _a.selected;
    var onChange = function (event) {
        if (props.onChange) {
            var select = event.target;
            props.onChange(select.value);
        }
    };
    return (h("label", { style: isDisabled ? { textDecoration: 'line-through' } : {} },
        "Sound",
        h("select", { onChange: onChange, disabled: isDisabled },
            h("option", { value: "true", selected: selected === 'true' }, "Default"),
            h("option", { value: "false", selected: selected === 'false' }, "Disabled"),
            h("option", { value: "resource", selected: selected === 'resource' }, "Local Resource"),
            h("option", { value: "online", selected: selected === 'online' }, "From the Web"))));
};

var ToggleDisableButton = function (props) {
    var onClick = function (event) {
        event.preventDefault();
        props.onClick();
    };
    return (h("button", { class: "nullify", onClick: onClick }, props.isDisabled ? 'Give an\nArgument' : 'Use default'));
};

var SoundFields = function (props) {
    var isDisabled = props.isDisabled, onDisableClick = props.onDisableClick, soundOption = props.soundOption, onResourceSoundChange = props.onResourceSoundChange, onOnlineSoundChange = props.onOnlineSoundChange, onSoundOptionChange = props.onSoundOptionChange, resourceSoundOption = props.resourceSoundOption, onlineSoundOption = props.onlineSoundOption;
    var fields = [
        h("div", null,
            h(ToggleDisableButton, { isDisabled: isDisabled, onClick: onDisableClick }),
            h(SoundOptionField, { selected: soundOption, onChange: onSoundOptionChange, isDisabled: isDisabled })),
    ];
    if (soundOption === 'resource') {
        fields.push(h("div", null,
            h("button", { class: "nullify hidden" }),
            h(InputField, { label: 'Local Sound', value: resourceSoundOption, onChange: onResourceSoundChange, isDisabled: isDisabled })));
    }
    if (soundOption === 'online') {
        fields.push(h("div", null,
            h("button", { class: "nullify hidden" }),
            h(InputField, { label: 'Online Sound', value: onlineSoundOption, onChange: onOnlineSoundChange, isDisabled: isDisabled })));
    }
    return fields;
};

var __assign$3 = (undefined && undefined.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var VibrationOptionField = function (props) {
    var _a = __assign$3({ isDisabled: false }, props), isDisabled = _a.isDisabled, selected = _a.selected;
    var onChange = function (event) {
        if (props.onChange) {
            var select = event.target;
            props.onChange(select.value);
        }
    };
    return (h("label", { style: isDisabled ? { textDecoration: 'line-through' } : {} },
        "Vibration",
        h("select", { onChange: onChange, disabled: isDisabled },
            h("option", { value: "true", selected: selected === 'true' }, "Default"),
            h("option", { value: "false", selected: selected === 'false' }, "Disabled"),
            h("option", { value: "custom", selected: selected === 'custom' }, "Custom"))));
};

var VibrationFields = function (props) {
    var isDisabled = props.isDisabled, onDisableClick = props.onDisableClick, vibrationOption = props.vibrationOption, onCustomVibrationChange = props.onCustomVibrationChange, customVibration = props.customVibration, onVibrationOptionChange = props.onVibrationOptionChange;
    var fields = [
        h("div", null,
            h(ToggleDisableButton, { isDisabled: isDisabled, onClick: onDisableClick }),
            h(VibrationOptionField, { selected: vibrationOption, onChange: onVibrationOptionChange, isDisabled: isDisabled })),
    ];
    if (vibrationOption === 'custom') {
        fields.push(h("div", null,
            h("button", { class: "nullify hidden" }),
            h(InputField, { label: 'Vibrate As', value: customVibration, onChange: onCustomVibrationChange, isDisabled: isDisabled })));
    }
    return fields;
};

var getToken = function () {
    return new Promise(function (resolve, reject) {
        var tries = 100;
        var interval = setInterval(function () {
            if (--tries < 0) {
                clearInterval(interval);
                reject(new Error('Firebase Token could not be acquired!'));
            }
            if (!window.FCMPlugin) {
                if (window.cordova) {
                    document.addEventListener('deviceready', function () {
                        if (!window.FCMPlugin) {
                            reject(new Error('FCMPlugin not available'));
                            return;
                        }
                        getToken()
                            .then(resolve)
                            .catch(reject);
                    }, false);
                    return;
                }
                resolve();
                return;
            }
            window.FCMPlugin.getToken(function (tokenFound) {
                if (tokenFound !== null && tokenFound !== '') {
                    clearInterval(interval);
                    resolve(tokenFound);
                }
            }, function (e) {
                reject(e);
            });
        }, 100);
    });
};

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$4 = (undefined && undefined.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var BodyContent = (function (_super) {
    __extends(BodyContent, _super);
    function BodyContent() {
        var _this = _super.call(this) || this;
        _this.state = deepCloneBodyContent(BodyContentDefaultState);
        _this.onSubmit = function (event) {
            event.preventDefault();
            if (window.FirebaseExtendedNotification) {
                window.FirebaseExtendedNotification.showNotification({ dataValuesToGetWhenClickedOn: 111 }, _this.getPresentableData());
            }
            else {
                alert('This functionality only runs over cordova!');
            }
        };
        _this.renderNotificationStyleField = function () { return (h("div", null,
            h("button", { class: "nullify hidden" }),
            h(NotificationStyleField, { selected: _this.state.notificationStyle, onChange: _this.onNotificationStyleChange }))); };
        _this.renderField = function (fieldName, label, type) {
            if (type === void 0) { type = 'text'; }
            return (h("div", null,
                h(ToggleDisableButton, { isDisabled: _this.state.disabledFields.includes(fieldName), onClick: function () { return _this.onToggleDisableField(fieldName); } }),
                h(InputField, { label: label, type: type, value: _this.state.data[fieldName] ? '' + _this.state.data[fieldName] : '', isDisabled: _this.state.disabledFields.includes(fieldName), onChange: function (value) { return _this.onChangeDataValue(fieldName, value); } })));
        };
        _this.renderVibrateFields = function () {
            return VibrationFields({
                customVibration: _this.state.customVibration,
                isDisabled: _this.state.disabledFields.includes('vibrate'),
                onCustomVibrationChange: _this.onCustomVibrationChange,
                onDisableClick: function () { return _this.onToggleDisableField('vibrate'); },
                onVibrationOptionChange: _this.onVibrationOptionChange,
                vibrationOption: _this.state.vibrationOption,
            });
        };
        _this.renderSoundFields = function () {
            return SoundFields({
                isDisabled: _this.state.disabledFields.includes('sound'),
                onDisableClick: function () { return _this.onToggleDisableField('sound'); },
                onOnlineSoundChange: _this.onOnlineSoundChange,
                onResourceSoundChange: _this.onResourceSoundChange,
                onSoundOptionChange: _this.onSoundOptionChange,
                onlineSoundOption: _this.state.onlineSoundOption,
                resourceSoundOption: _this.state.resourceSoundOption,
                soundOption: _this.state.soundOption,
            });
        };
        _this.onNotificationStyleChange = function (notificationStyle) {
            _this.setState({
                notificationStyle: notificationStyle,
            });
        };
        _this.onToggleDisableField = function (fieldName) {
            if (_this.state.disabledFields.includes(fieldName)) {
                _this.state.disabledFields = _this.state.disabledFields.filter(function (field) { return field !== fieldName; });
            }
            else {
                _this.state.disabledFields.push(fieldName);
            }
            _this.setState({
                disabledFields: _this.state.disabledFields,
            });
        };
        _this.onChangeDataValue = function (fieldName, value) {
            var _a;
            _this.setState({ data: __assign$4(__assign$4({}, _this.state.data), (_a = {}, _a[fieldName] = value, _a)) });
        };
        _this.onVibrationOptionChange = function (vibrationOption) {
            var vibrate;
            if (vibrationOption === 'true') {
                vibrate = true;
            }
            else if (vibrationOption === 'false') {
                vibrate = false;
            }
            else {
                vibrate = JSON.parse(_this.state.customVibration);
            }
            _this.setState({
                data: __assign$4(__assign$4({}, _this.state.data), { vibrate: vibrate }),
                vibrationOption: vibrationOption,
            });
        };
        _this.onCustomVibrationChange = function (value) {
            _this.setState({
                customVibration: value,
                data: __assign$4(__assign$4({}, _this.state.data), { vibrate: JSON.parse(value) }),
            });
        };
        _this.onSoundOptionChange = function (soundOption) {
            var sound;
            if (soundOption === 'true') {
                sound = true;
            }
            else if (soundOption === 'false') {
                sound = false;
            }
            else if (soundOption === 'resource') {
                sound = _this.state.resourceSoundOption;
            }
            else {
                sound = _this.state.onlineSoundOption;
            }
            _this.setState({
                data: __assign$4(__assign$4({}, _this.state.data), { sound: sound }),
                soundOption: soundOption,
            });
        };
        _this.onResourceSoundChange = function (value) {
            _this.setState({
                data: __assign$4(__assign$4({}, _this.state.data), { sound: value }),
                resourceSoundOption: value,
            });
        };
        _this.onOnlineSoundChange = function (value) {
            _this.setState({
                data: __assign$4(__assign$4({}, _this.state.data), { sound: value }),
                onlineSoundOption: value,
            });
        };
        _this.saveOptionsLocally = function () {
            var stateToSave = deepCloneBodyContent(_this.state);
            stateToSave.token = undefined;
            window.localStorage.setItem('state', JSON.stringify(stateToSave));
            alert('Saved! Now the options will be recovered when restart.');
        };
        _this.loadSavedOptions = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, savedState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getToken()];
                    case 1:
                        token = _a.sent();
                        savedState = window.localStorage.getItem('state');
                        if (savedState) {
                            this.setState(__assign$4(__assign$4({}, JSON.parse(savedState)), { token: token }));
                        }
                        return [2];
                }
            });
        }); };
        _this.resetFieldValues = function () { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm('Are you sure you want to lose your changes?')) return [3, 2];
                        return [4, getToken()];
                    case 1:
                        token = _a.sent();
                        this.setState(__assign$4(__assign$4({}, deepCloneBodyContent(BodyContentDefaultState)), { token: token }));
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        }); };
        _this.getPresentableData = function () {
            var notificationOptions = {};
            var skipKeys = __spreadArrays(_this.state.disabledFields);
            if (_this.state.notificationStyle === 'simple') {
                skipKeys.push('bigPicture', 'bigText', 'summary', 'textLines');
            }
            else if (_this.state.notificationStyle === 'multipleLines') {
                skipKeys.push('bigPicture', 'bigText', 'text');
            }
            else if (_this.state.notificationStyle === 'bigText') {
                skipKeys.push('bigPicture', 'textLines', 'text');
            }
            else if (_this.state.notificationStyle === 'bigPicture') {
                skipKeys.push('bigText', 'textLines', 'text');
            }
            for (var _i = 0, _a = Object.entries(_this.state.data); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (!skipKeys.includes(key)) {
                    notificationOptions[key] = value;
                }
            }
            return notificationOptions;
        };
        _this.renderTokenField = function () {
            return (h("div", null,
                h("h3", null, "Firebase Token:"),
                h("textarea", { id: 'tokenTextArea', readOnly: true, children: _this.state.token || 'Still loading...' })));
        };
        _this.renderGeneratedCode = function () {
            var token = _this.state.token || 'bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...';
            return (h("pre", { id: "generatedCode" }, JSON.stringify({
                data: {
                    dataValuesToGetWhenClickedOn: 111,
                    notificationOptions: _this.getPresentableData(),
                },
                to: token,
            }, null, 4)));
        };
        _this.loadSavedOptions();
        return _this;
    }
    BodyContent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.token) {
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, getToken()];
                    case 2:
                        token = _a.sent();
                        this.setState({ token: token });
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        alert(e_1.message);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    BodyContent.prototype.render = function () {
        return (h("div", null,
            h("h2", null, "Firebase Extended Notification App Example"),
            this.renderTokenField(),
            h("h3", null, "Try locally to simulate notifications"),
            h("form", { id: "notificationOptionsForm", onSubmit: this.onSubmit },
                this.renderNotificationStyleField(),
                this.renderField('id', 'Id', 'number'),
                this.renderField('title', 'Title'),
                this.state.notificationStyle === 'simple' && this.renderField('text', 'Text'),
                this.state.notificationStyle === 'multipleLines' &&
                    this.renderField('textLines', 'Text Lines', 'textarea'),
                this.state.notificationStyle === 'bigText' && this.renderField('bigText', 'Big Text', 'textarea'),
                this.state.notificationStyle === 'bigPicture' &&
                    this.renderField('bigPicture', 'Big Picture', 'url'),
                this.state.notificationStyle !== 'simple' && this.renderField('summary', 'Summary'),
                this.renderField('smallIcon', 'Small Icon'),
                this.renderField('largeIcon', 'Large Icon', 'url'),
                this.renderField('autoCancel', 'Auto Cancel', 'checkbox'),
                this.renderVibrateFields(),
                this.renderField('color', 'Color', 'color'),
                this.renderSoundFields(),
                this.renderField('headsUp', 'Heads-up', 'checkbox'),
                this.renderField('openApp', 'Open app', 'checkbox'),
                this.renderField('channelId', 'Channel Id'),
                this.renderField('channelName', 'Channel Name'),
                this.renderField('channelDescription', 'Channel Description'),
                h("button", { type: "submit" }, "Show Notification"),
                h("button", { type: "button", onClick: this.saveOptionsLocally }, "Save Options Locally"),
                h("button", { type: "button", onClick: this.loadSavedOptions }, "Load Saved Options"),
                h("button", { type: "button", onClick: this.resetFieldValues }, "Reset Field Values")),
            this.renderGeneratedCode()));
    };
    return BodyContent;
}(m));

if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }
        return resArray;
    };
}

I(h(BodyContent, null), document.getElementById('bodyContent') || document.body);
alertOnNotification();
