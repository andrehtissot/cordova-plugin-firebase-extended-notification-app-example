'use strict';

Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0===n)return !1;for(var i=0|e,o=Math.max(i>=0?i:n-Math.abs(i),0);o<n;){if(function(r,e){return r===e||"number"==typeof r&&"number"==typeof e&&isNaN(r)&&isNaN(e)}(t[o],r))return !0;o++;}return !1}});

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

if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }
        return resArray;
    };
}

var setContentOnElement = function (elementId, content) {
    var tokenElement = document.getElementById(elementId);
    if (tokenElement) {
        tokenElement.innerHTML = content;
    }
};
var presentToken = function () {
    var tries = 100;
    var interval = setInterval(function () {
        if (--tries < 0) {
            clearInterval(interval);
            setContentOnElement('token', 'Firebase Token could not be acquired!');
        }
        if (!window.FCMPlugin) {
            return;
        }
        window.FCMPlugin.getToken(function (tokenFound) {
            if (tokenFound !== null && tokenFound !== '') {
                setContentOnElement('token', "Firebase Token: " + tokenFound);
                setContentOnElement('tokenFound', tokenFound);
                clearInterval(interval);
            }
        }, function (e) {
            setContentOnElement('token', JSON.stringify(e));
        });
    }, 100);
};

var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		( defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') ; else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type]( e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

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
    onlineSoundOption: 'http://tindeck.com/download/pro/yjuow/Not_That_Guy.mp3',
    resourceSoundOption: 'res://raw/lost_european_the_beginning_of_the_end_mp3',
    soundOption: 'true',
    vibrationOption: 'true',
};
var getDeepClone = function () { return (__assign({}, BodyContentDefaultState, { data: __assign({}, BodyContentDefaultState.data) })); };

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
    else if (type === 'number') {
        return function (event) { return onChange(event.target.valueAsNumber); };
    }
    else {
        return function (event) { return onChange(event.target.value); };
    }
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
            h("option", { value: "true", selected: props.selected === 'true' }, "Default"),
            h("option", { value: "false", selected: props.selected === 'false' }, "Disabled"),
            h("option", { value: "resource", selected: props.selected === 'resource' }, "Local Resource"),
            h("option", { value: "online", selected: props.selected === 'online' }, "From the Web"))));
};

var ToggleDisableButton = function (props) {
    var onClick = function (event) {
        event.preventDefault();
        props.onClick();
    };
    return (h("button", { class: "nullify", onClick: onClick }, props.isDisabled ? 'Give an\nArgument' : 'Use default'));
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
var BodyContent = (function (_super) {
    __extends(BodyContent, _super);
    function BodyContent() {
        var _this = _super.call(this) || this;
        _this.state = getDeepClone();
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
        _this.renderVibrateFields = function () { return [
            h("div", null,
                h(ToggleDisableButton, { isDisabled: _this.state.disabledFields.includes('vibrate'), onClick: function () { return _this.onToggleDisableField('vibrate'); } }),
                h(VibrationOptionField, { selected: _this.state.vibrationOption, onChange: _this.onVibrationOptionChange, isDisabled: _this.state.disabledFields.includes('vibrate') })),
            _this.state.vibrationOption === 'custom' && (h("div", null,
                h("button", { class: "nullify hidden" }),
                h(InputField, { label: 'Vibrate As', value: _this.state.customVibration, onChange: _this.onCustomVibrationChange, isDisabled: _this.state.disabledFields.includes('vibrate') }))),
        ]; };
        _this.renderSoundFields = function () { return [
            h("div", null,
                h(ToggleDisableButton, { isDisabled: _this.state.disabledFields.includes('sound'), onClick: function () { return _this.onToggleDisableField('sound'); } }),
                h(SoundOptionField, { selected: _this.state.soundOption, onChange: _this.onSoundOptionChange, isDisabled: _this.state.disabledFields.includes('sound') })),
            _this.state.soundOption === 'resource' && (h("div", null,
                h("button", { class: "nullify hidden" }),
                h(InputField, { label: 'Local Sound', value: _this.state.resourceSoundOption, onChange: _this.onResourceSoundChange, isDisabled: _this.state.disabledFields.includes('sound') }))),
            _this.state.soundOption === 'online' && (h("div", null,
                h("button", { class: "nullify hidden" }),
                h(InputField, { label: 'Online Sound', value: _this.state.onlineSoundOption, onChange: _this.onOnlineSoundChange, isDisabled: _this.state.disabledFields.includes('sound') }))),
        ]; };
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
            _this.setState({ data: __assign$4({}, _this.state.data, (_a = {}, _a[fieldName] = value, _a)) });
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
                data: __assign$4({}, _this.state.data, { vibrate: vibrate }),
                vibrationOption: vibrationOption,
            });
        };
        _this.onCustomVibrationChange = function (value) {
            _this.setState({
                customVibration: value,
                data: __assign$4({}, _this.state.data, { vibrate: JSON.parse(value) }),
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
                data: __assign$4({}, _this.state.data, { sound: sound }),
                soundOption: soundOption,
            });
        };
        _this.onResourceSoundChange = function (value) {
            _this.setState({
                data: __assign$4({}, _this.state.data, { sound: value }),
                resourceSoundOption: value,
            });
        };
        _this.onOnlineSoundChange = function (value) {
            _this.setState({
                data: __assign$4({}, _this.state.data, { sound: value }),
                onlineSoundOption: value,
            });
        };
        _this.saveOptionsLocally = function () {
            window.localStorage.setItem('state', JSON.stringify(_this.state));
            alert('Saved! Now the options will be recovered when restart.');
        };
        _this.loadSavedOptions = function () {
            var savedState = window.localStorage.getItem('state');
            if (savedState) {
                _this.setState(JSON.parse(savedState));
            }
        };
        _this.resetFieldValues = function () {
            if (confirm('Are you sure you want to lose your changes?')) {
                _this.setState(getDeepClone());
            }
        };
        _this.getPresentableData = function () {
            var notificationOptions = {};
            var skipKeys = _this.state.disabledFields.slice();
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
        _this.renderGeneratedCode = function () {
            var tokenFoundElement = document.getElementById('tokenFound');
            var token = (tokenFoundElement && tokenFoundElement.innerHTML) || 'bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...';
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
    BodyContent.prototype.render = function () {
        return (h("div", null,
            h("h2", null, "Firebase Extended Notification App Example"),
            h("div", { id: "token" }),
            h("span", { id: "tokenFound", style: "display:none" }),
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
}(Component));

var initialize = function () {
    render(h(BodyContent, null), document.getElementById('bodyContent') || document.body);
};

document.addEventListener('deviceready', function () {
    presentToken();
    alertOnNotification();
}, false);
initialize();
