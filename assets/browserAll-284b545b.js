import{P as m,r as q,E as w,b as L,C as V,c as J,w as y}from"./CanvasTest-18dd6528.js";import{T as S,U as Q}from"./init-42b00ba9.js";import"./index-5b7226a9.js";import"./_commonjsHelpers-725317a4.js";import"./CanvasSource-e2ba726f.js";class M{constructor(e){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=M.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new m,this.page=new m,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=e}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(e,t,s){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(e,t,s,i,o){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}var k=/iPhone/i,U=/iPod/i,H=/iPad/i,X=/\biOS-universal(?:.+)Mac\b/i,x=/\bAndroid(?:.+)Mobile\b/i,R=/Android/i,b=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,A=/Silk/i,g=/Windows Phone/i,Y=/\bWindows(?:.+)ARM\b/i,F=/BlackBerry/i,K=/BB10/i,$=/Opera Mini/i,G=/\b(CriOS|Chrome)(?:.+)Mobile/i,W=/Mobile(?:.+)Firefox\b/i,N=function(n){return typeof n<"u"&&n.platform==="MacIntel"&&typeof n.maxTouchPoints=="number"&&n.maxTouchPoints>1&&typeof MSStream>"u"};function ee(n){return function(e){return e.test(n)}}function j(n){var e={userAgent:"",platform:"",maxTouchPoints:0};!n&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof n=="string"?e.userAgent=n:n&&n.userAgent&&(e={userAgent:n.userAgent,platform:n.platform,maxTouchPoints:n.maxTouchPoints||0});var t=e.userAgent,s=t.split("[FBAN");typeof s[1]<"u"&&(t=s[0]),s=t.split("Twitter"),typeof s[1]<"u"&&(t=s[0]);var i=ee(t),o={apple:{phone:i(k)&&!i(g),ipod:i(U),tablet:!i(k)&&(i(H)||N(e))&&!i(g),universal:i(X),device:(i(k)||i(U)||i(H)||i(X)||N(e))&&!i(g)},amazon:{phone:i(b),tablet:!i(b)&&i(A),device:i(b)||i(A)},android:{phone:!i(g)&&i(b)||!i(g)&&i(x),tablet:!i(g)&&!i(b)&&!i(x)&&(i(A)||i(R)),device:!i(g)&&(i(b)||i(A)||i(x)||i(R))||i(/\bokhttp\b/i)},windows:{phone:i(g),tablet:i(Y),device:i(g)||i(Y)},other:{blackberry:i(F),blackberry10:i(K),opera:i($),firefox:i(W),chrome:i(G),device:i(F)||i(K)||i($)||i(W)||i(G)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}const te=j.default??j,ie=te(globalThis.navigator),ne=9,I=100,se=0,oe=0,z=2,Z=1,re=-1e3,ae=-1e3,he=2;class C{constructor(e,t=ie){this._mobileInfo=t,this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(t.tablet||t.phone)&&this._createTouchHook();const s=document.createElement("div");s.style.width=`${I}px`,s.style.height=`${I}px`,s.style.position="absolute",s.style.top=`${se}px`,s.style.left=`${oe}px`,s.style.zIndex=z.toString(),this._div=s,this._renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const e=document.createElement("button");e.style.width=`${Z}px`,e.style.height=`${Z}px`,e.style.position="absolute",e.style.top=`${re}px`,e.style.left=`${ae}px`,e.style.zIndex=he.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}_activate(){this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.add(this),this._renderer.view.canvas.parentNode?.appendChild(this._div))}_deactivate(){!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this),this._div.parentNode?.removeChild(this._div))}_updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&(e._accessibleActive||this._addChild(e),e._renderId=this._renderId);const t=e.children;if(t)for(let s=0;s<t.length;s++)this._updateAccessibleObjects(t[s])}init(e){this.debug=e?.debug??this.debug,this._renderer.runners.postrender.remove(this)}postrender(){const e=performance.now();if(this._mobileInfo.android.device&&e<this._androidUpdateCount||(this._androidUpdateCount=e+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas))return;this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered);const{x:t,y:s,width:i,height:o}=this._renderer.view.canvas.getBoundingClientRect(),{width:r,height:a,resolution:c}=this._renderer,p=i/r*c,h=o/a*c;let l=this._div;l.style.left=`${t}px`,l.style.top=`${s}px`,l.style.width=`${r}px`,l.style.height=`${a}px`;for(let d=0;d<this._children.length;d++){const u=this._children[d];if(u._renderId!==this._renderId)u._accessibleActive=!1,q(this._children,d,1),this._div.removeChild(u._accessibleDiv),this._pool.push(u._accessibleDiv),u._accessibleDiv=null,d--;else{l=u._accessibleDiv;let v=u.hitArea;const _=u.worldTransform;u.hitArea?(l.style.left=`${(_.tx+v.x*_.a)*p}px`,l.style.top=`${(_.ty+v.y*_.d)*h}px`,l.style.width=`${v.width*_.a*p}px`,l.style.height=`${v.height*_.d*h}px`):(v=u.getBounds(),this._capHitArea(v),l.style.left=`${v.x*p}px`,l.style.top=`${v.y*h}px`,l.style.width=`${v.width*p}px`,l.style.height=`${v.height*h}px`,l.title!==u.accessibleTitle&&u.accessibleTitle!==null&&(l.title=u.accessibleTitle),l.getAttribute("aria-label")!==u.accessibleHint&&u.accessibleHint!==null&&l.setAttribute("aria-label",u.accessibleHint)),(u.accessibleTitle!==l.title||u.tabIndex!==l.tabIndex)&&(l.title=u.accessibleTitle,l.tabIndex=u.tabIndex,this.debug&&this._updateDebugHTML(l))}}this._renderId++}_updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}_capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);const{width:t,height:s}=this._renderer;e.x+e.width>t&&(e.width=t-e.x),e.y+e.height>s&&(e.height=s-e.y)}_addChild(e){let t=this._pool.pop();t||(t=document.createElement("button"),t.style.width=`${I}px`,t.style.height=`${I}px`,t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=z.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title=`container ${e.tabIndex}`),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this._updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.container=e,this._children.push(e),this._div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex}_dispatchEvent(e,t){const{container:s}=e.target,i=this._renderer.events.rootBoundary,o=Object.assign(new M(i),{target:s});i.rootTarget=this._renderer.lastObjectRendered,t.forEach(r=>i.dispatchEvent(o,r))}_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}_onFocus(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,["mouseover"])}_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite"),this._dispatchEvent(e,["mouseout"])}_onKeyDown(e){e.keyCode===ne&&this._activate()}_onMouseMove(e){e.movementX===0&&e.movementY===0||this._deactivate()}destroy(){this._destroyTouchHook(),this._div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this._pool=null,this._children=null,this._renderer=null}}C.extension={type:[w.WebGLSystem,w.WebGPUSystem],name:"accessibility"};L.add(C);const le={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1};L.add(C);V.mixin(le);class ue{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}init(e){this.removeTickerListener(),this.events=e,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(e){this._pauseUpdate=e}addTickerListener(){this._tickerAdded||!this.domElement||(S.system.add(this._tickerUpdate,this,Q.INTERACTION),this._tickerAdded=!0)}removeTickerListener(){this._tickerAdded&&(S.system.remove(this._tickerUpdate,this),this._tickerAdded=!1)}pointerMoved(){this._didMove=!0}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const e=this.events._rootPointerEvent;this.events.supportsTouchEvents&&e.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:e.clientX,clientY:e.clientY}))}_tickerUpdate(e){this._deltaTime+=e.deltaTime,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this._update())}}const E=new ue;class D extends M{constructor(){super(...arguments),this.client=new m,this.movement=new m,this.offset=new m,this.global=new m,this.screen=new m}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(e,t,s){return e.worldTransform.applyInverse(s||this.global,t)}getModifierState(e){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(e)}initMouseEvent(e,t,s,i,o,r,a,c,p,h,l,d,u,v,_){throw new Error("Method not implemented.")}}class f extends D{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class T extends D{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}T.DOM_DELTA_PIXEL=0;T.DOM_DELTA_LINE=1;T.DOM_DELTA_PAGE=2;const de=2048,ce=new m,P=new m;class pe{constructor(e){this.dispatch=new J,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=e,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(e,t){this.mappingTable[e]||(this.mappingTable[e]=[]),this.mappingTable[e].push({fn:t,priority:0}),this.mappingTable[e].sort((s,i)=>s.priority-i.priority)}dispatchEvent(e,t){e.propagationStopped=!1,e.propagationImmediatelyStopped=!1,this.propagate(e,t),this.dispatch.emit(t||e.type,e)}mapEvent(e){if(!this.rootTarget)return;const t=this.mappingTable[e.type];if(t)for(let s=0,i=t.length;s<i;s++)t[s].fn(e);else y(`[EventBoundary]: Event mapping not defined for ${e.type}`)}hitTest(e,t){E.pauseUpdate=!0;const i=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",o=this[i](this.rootTarget,this.rootTarget.eventMode,ce.set(e,t),this.hitTestFn,this.hitPruneFn);return o&&o[0]}propagate(e,t){if(!e.target)return;const s=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;for(let i=0,o=s.length-1;i<o;i++)if(e.currentTarget=s[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return;if(e.eventPhase=e.AT_TARGET,e.currentTarget=e.target,this.notifyTarget(e,t),!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let i=s.length-2;i>=0;i--)if(e.currentTarget=s[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return}}all(e,t,s=this._allInteractiveElements){if(s.length===0)return;e.eventPhase=e.BUBBLING_PHASE;const i=Array.isArray(t)?t:[t];for(let o=s.length-1;o>=0;o--)i.forEach(r=>{e.currentTarget=s[o],this.notifyTarget(e,r)})}propagationPath(e){const t=[e];for(let s=0;s<de&&e!==this.rootTarget&&e.parent;s++){if(!e.parent)throw new Error("Cannot find propagation path to disconnected target");t.push(e.parent),e=e.parent}return t.reverse(),t}hitTestMoveRecursive(e,t,s,i,o,r=!1){let a=!1;if(this._interactivePrune(e))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(E.pauseUpdate=!1),e.interactiveChildren&&e.children){const h=e.children;for(let l=h.length-1;l>=0;l--){const d=h[l],u=this.hitTestMoveRecursive(d,this._isInteractive(t)?t:d.eventMode,s,i,o,r||o(e,s));if(u){if(u.length>0&&!u[u.length-1].parent)continue;const v=e.isInteractive();(u.length>0||v)&&(v&&this._allInteractiveElements.push(e),u.push(e)),this._hitElements.length===0&&(this._hitElements=u),a=!0}}}const c=this._isInteractive(t),p=e.isInteractive();return p&&p&&this._allInteractiveElements.push(e),r||this._hitElements.length>0?null:a?this._hitElements:c&&!o(e,s)&&i(e,s)?p?[e]:[]:null}hitTestRecursive(e,t,s,i,o){if(this._interactivePrune(e)||o(e,s))return null;if((e.eventMode==="dynamic"||t==="dynamic")&&(E.pauseUpdate=!1),e.interactiveChildren&&e.children){const c=e.children,p=s;for(let h=c.length-1;h>=0;h--){const l=c[h],d=this.hitTestRecursive(l,this._isInteractive(t)?t:l.eventMode,p,i,o);if(d){if(d.length>0&&!d[d.length-1].parent)continue;const u=e.isInteractive();return(d.length>0||u)&&d.push(e),d}}}const r=this._isInteractive(t),a=e.isInteractive();return r&&i(e,s)?a?[e]:[]:null}_isInteractive(e){return e==="static"||e==="dynamic"}_interactivePrune(e){return!e||!e.visible||!e.renderable||e.eventMode==="none"||e.eventMode==="passive"&&!e.interactiveChildren}hitPruneFn(e,t){if(e.hitArea&&(e.worldTransform.applyInverse(t,P),!e.hitArea.contains(P.x,P.y)))return!0;if(e.effects&&e.effects.length)for(let s=0;s<e.effects.length;s++){const i=e.effects[s];if(i.containsPoint&&!i.containsPoint(t,this.hitTestFn))return!0}return!1}hitTestFn(e,t){return e.hitArea?!0:e.view?.containsPoint?(e.worldTransform.applyInverse(t,P),e.view.containsPoint(P)):!1}notifyTarget(e,t){t=t??e.type;const s=`on${t}`;e.currentTarget[s]?.(e);const i=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${t}capture`:t;this._notifyListeners(e,i),e.eventPhase===e.AT_TARGET&&this._notifyListeners(e,t)}mapPointerDown(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.createPointerEvent(e);if(this.dispatchEvent(t,"pointerdown"),t.pointerType==="touch")this.dispatchEvent(t,"touchstart");else if(t.pointerType==="mouse"||t.pointerType==="pen"){const i=t.button===2;this.dispatchEvent(t,i?"rightdown":"mousedown")}const s=this.trackingData(e.pointerId);s.pressTargetsByButton[e.button]=t.composedPath(),this.freeEvent(t)}mapPointerMove(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const t=this.createPointerEvent(e);this._isPointerMoveEvent=!1;const s=t.pointerType==="mouse"||t.pointerType==="pen",i=this.trackingData(e.pointerId),o=this.findMountedTarget(i.overTargets);if(i.overTargets?.length>0&&o!==t.target){const c=e.type==="mousemove"?"mouseout":"pointerout",p=this.createPointerEvent(e,c,o);if(this.dispatchEvent(p,"pointerout"),s&&this.dispatchEvent(p,"mouseout"),!t.composedPath().includes(o)){const h=this.createPointerEvent(e,"pointerleave",o);for(h.eventPhase=h.AT_TARGET;h.target&&!t.composedPath().includes(h.target);)h.currentTarget=h.target,this.notifyTarget(h),s&&this.notifyTarget(h,"mouseleave"),h.target=h.target.parent;this.freeEvent(h)}this.freeEvent(p)}if(o!==t.target){const c=e.type==="mousemove"?"mouseover":"pointerover",p=this.clonePointerEvent(t,c);this.dispatchEvent(p,"pointerover"),s&&this.dispatchEvent(p,"mouseover");let h=o?.parent;for(;h&&h!==this.rootTarget.parent&&h!==t.target;)h=h.parent;if(!h||h===this.rootTarget.parent){const d=this.clonePointerEvent(t,"pointerenter");for(d.eventPhase=d.AT_TARGET;d.target&&d.target!==o&&d.target!==this.rootTarget.parent;)d.currentTarget=d.target,this.notifyTarget(d),s&&this.notifyTarget(d,"mouseenter"),d.target=d.target.parent;this.freeEvent(d)}this.freeEvent(p)}const r=[],a=this.enableGlobalMoveEvents??!0;this.moveOnAll?r.push("pointermove"):this.dispatchEvent(t,"pointermove"),a&&r.push("globalpointermove"),t.pointerType==="touch"&&(this.moveOnAll?r.splice(1,0,"touchmove"):this.dispatchEvent(t,"touchmove"),a&&r.push("globaltouchmove")),s&&(this.moveOnAll?r.splice(1,0,"mousemove"):this.dispatchEvent(t,"mousemove"),a&&r.push("globalmousemove"),this.cursor=t.target?.cursor),r.length>0&&this.all(t,r),this._allInteractiveElements.length=0,this._hitElements.length=0,i.overTargets=t.composedPath(),this.freeEvent(t)}mapPointerOver(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),s=this.createPointerEvent(e),i=s.pointerType==="mouse"||s.pointerType==="pen";this.dispatchEvent(s,"pointerover"),i&&this.dispatchEvent(s,"mouseover"),s.pointerType==="mouse"&&(this.cursor=s.target?.cursor);const o=this.clonePointerEvent(s,"pointerenter");for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),i&&this.notifyTarget(o,"mouseenter"),o.target=o.target.parent;t.overTargets=s.composedPath(),this.freeEvent(s),this.freeEvent(o)}mapPointerOut(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId);if(t.overTargets){const s=e.pointerType==="mouse"||e.pointerType==="pen",i=this.findMountedTarget(t.overTargets),o=this.createPointerEvent(e,"pointerout",i);this.dispatchEvent(o),s&&this.dispatchEvent(o,"mouseout");const r=this.createPointerEvent(e,"pointerleave",i);for(r.eventPhase=r.AT_TARGET;r.target&&r.target!==this.rootTarget.parent;)r.currentTarget=r.target,this.notifyTarget(r),s&&this.notifyTarget(r,"mouseleave"),r.target=r.target.parent;t.overTargets=null,this.freeEvent(o),this.freeEvent(r)}this.cursor=null}mapPointerUp(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=performance.now(),s=this.createPointerEvent(e);if(this.dispatchEvent(s,"pointerup"),s.pointerType==="touch")this.dispatchEvent(s,"touchend");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const a=s.button===2;this.dispatchEvent(s,a?"rightup":"mouseup")}const i=this.trackingData(e.pointerId),o=this.findMountedTarget(i.pressTargetsByButton[e.button]);let r=o;if(o&&!s.composedPath().includes(o)){let a=o;for(;a&&!s.composedPath().includes(a);){if(s.currentTarget=a,this.notifyTarget(s,"pointerupoutside"),s.pointerType==="touch")this.notifyTarget(s,"touchendoutside");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const c=s.button===2;this.notifyTarget(s,c?"rightupoutside":"mouseupoutside")}a=a.parent}delete i.pressTargetsByButton[e.button],r=a}if(r){const a=this.clonePointerEvent(s,"click");a.target=r,a.path=null,i.clicksByButton[e.button]||(i.clicksByButton[e.button]={clickCount:0,target:a.target,timeStamp:t});const c=i.clicksByButton[e.button];if(c.target===a.target&&t-c.timeStamp<200?++c.clickCount:c.clickCount=1,c.target=a.target,c.timeStamp=t,a.detail=c.clickCount,a.pointerType==="mouse"){const p=a.button===2;this.dispatchEvent(a,p?"rightclick":"click")}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a)}this.freeEvent(s)}mapPointerUpOutside(e){if(!(e instanceof f)){y("EventBoundary cannot map a non-pointer event as a pointer event");return}const t=this.trackingData(e.pointerId),s=this.findMountedTarget(t.pressTargetsByButton[e.button]),i=this.createPointerEvent(e);if(s){let o=s;for(;o;)i.currentTarget=o,this.notifyTarget(i,"pointerupoutside"),i.pointerType==="touch"?this.notifyTarget(i,"touchendoutside"):(i.pointerType==="mouse"||i.pointerType==="pen")&&this.notifyTarget(i,i.button===2?"rightupoutside":"mouseupoutside"),o=o.parent;delete t.pressTargetsByButton[e.button]}this.freeEvent(i)}mapWheel(e){if(!(e instanceof T)){y("EventBoundary cannot map a non-wheel event as a wheel event");return}const t=this.createWheelEvent(e);this.dispatchEvent(t),this.freeEvent(t)}findMountedTarget(e){if(!e)return null;let t=e[0];for(let s=1;s<e.length&&e[s].parent===t;s++)t=e[s];return t}createPointerEvent(e,t,s){const i=this.allocateEvent(f);return this.copyPointerData(e,i),this.copyMouseData(e,i),this.copyData(e,i),i.nativeEvent=e.nativeEvent,i.originalEvent=e,i.target=s??this.hitTest(i.global.x,i.global.y)??this._hitElements[0],typeof t=="string"&&(i.type=t),i}createWheelEvent(e){const t=this.allocateEvent(T);return this.copyWheelData(e,t),this.copyMouseData(e,t),this.copyData(e,t),t.nativeEvent=e.nativeEvent,t.originalEvent=e,t.target=this.hitTest(t.global.x,t.global.y),t}clonePointerEvent(e,t){const s=this.allocateEvent(f);return s.nativeEvent=e.nativeEvent,s.originalEvent=e.originalEvent,this.copyPointerData(e,s),this.copyMouseData(e,s),this.copyData(e,s),s.target=e.target,s.path=e.composedPath().slice(),s.type=t??s.type,s}copyWheelData(e,t){t.deltaMode=e.deltaMode,t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ}copyPointerData(e,t){e instanceof f&&t instanceof f&&(t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist)}copyMouseData(e,t){e instanceof D&&t instanceof D&&(t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.copyFrom(e.client),t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.copyFrom(e.movement),t.screen.copyFrom(e.screen),t.shiftKey=e.shiftKey,t.global.copyFrom(e.global))}copyData(e,t){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.detail=e.detail,t.view=e.view,t.which=e.which,t.layer.copyFrom(e.layer),t.page.copyFrom(e.page)}trackingData(e){return this.mappingState.trackingData[e]||(this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[e]}allocateEvent(e){this.eventPool.has(e)||this.eventPool.set(e,[]);const t=this.eventPool.get(e).pop()||new e(this);return t.eventPhase=t.NONE,t.currentTarget=null,t.path=null,t.target=null,t}freeEvent(e){if(e.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const t=e.constructor;this.eventPool.has(t)||this.eventPool.set(t,[]),this.eventPool.get(t).push(e)}_notifyListeners(e,t){const s=e.currentTarget._events[t];if(s&&e.currentTarget.isInteractive())if("fn"in s)s.once&&e.currentTarget.removeListener(t,s.fn,void 0,!0),s.fn.call(s.context,e);else for(let i=0,o=s.length;i<o&&!e.propagationImmediatelyStopped;i++)s[i].once&&e.currentTarget.removeListener(t,s[i].fn,void 0,!0),s[i].fn.call(s[i].context,e)}}const ve=1,fe={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},B=class{constructor(n){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=n,this.rootBoundary=new pe(null),E.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new f(null),this._rootWheelEvent=new T(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...B.defaultEventFeatures},{set:(e,t,s)=>(t==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=s),e[t]=s,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(n){const{canvas:e,resolution:t}=this.renderer;this.setTargetElement(e),this.resolution=t,B._defaultEventMode=n.eventMode??"passive",Object.assign(this.features,n.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(n){this.resolution=n}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null}setCursor(n){n=n||"default";let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this._currentCursor===n)return;this._currentCursor=n;const t=this.cursorStyles[n];if(t)switch(typeof t){case"string":e&&(this.domElement.style.cursor=t);break;case"function":t(n);break;case"object":e&&Object.assign(this.domElement.style,t);break}else e&&typeof n=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,n)&&(this.domElement.style.cursor=n)}get pointer(){return this._rootPointerEvent}_onPointerDown(n){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(n);this.autoPreventDefault&&e[0].isNormalized&&(n.cancelable||!("cancelable"in n))&&n.preventDefault();for(let t=0,s=e.length;t<s;t++){const i=e[t],o=this._bootstrapEvent(this._rootPointerEvent,i);this.rootBoundary.mapEvent(o)}this.setCursor(this.rootBoundary.cursor)}_onPointerMove(n){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,E.pointerMoved();const e=this._normalizeToPointerData(n);for(let t=0,s=e.length;t<s;t++){const i=this._bootstrapEvent(this._rootPointerEvent,e[t]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}_onPointerUp(n){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let e=n.target;n.composedPath&&n.composedPath().length>0&&(e=n.composedPath()[0]);const t=e!==this.domElement?"outside":"",s=this._normalizeToPointerData(n);for(let i=0,o=s.length;i<o;i++){const r=this._bootstrapEvent(this._rootPointerEvent,s[i]);r.type+=t,this.rootBoundary.mapEvent(r)}this.setCursor(this.rootBoundary.cursor)}_onPointerOverOut(n){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(n);for(let t=0,s=e.length;t<s;t++){const i=this._bootstrapEvent(this._rootPointerEvent,e[t]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onWheel(n){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(n);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e)}setTargetElement(n){this._removeEvents(),this.domElement=n,E.domElement=n,this._addEvents()}_addEvents(){if(this._eventsAdded||!this.domElement)return;E.addTickerListener();const n=this.domElement.style;n&&(globalThis.navigator.msPointerEnabled?(n.msContentZooming="none",n.msTouchAction="none"):this.supportsPointerEvents&&(n.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;E.removeTickerListener();const n=this.domElement.style;n&&(globalThis.navigator.msPointerEnabled?(n.msContentZooming="",n.msTouchAction=""):this.supportsPointerEvents&&(n.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1}mapPositionToPoint(n,e,t){const s=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},i=1/this.resolution;n.x=(e-s.left)*(this.domElement.width/s.width)*i,n.y=(t-s.top)*(this.domElement.height/s.height)*i}_normalizeToPointerData(n){const e=[];if(this.supportsTouchEvents&&n instanceof TouchEvent)for(let t=0,s=n.changedTouches.length;t<s;t++){const i=n.changedTouches[t];typeof i.button>"u"&&(i.button=0),typeof i.buttons>"u"&&(i.buttons=1),typeof i.isPrimary>"u"&&(i.isPrimary=n.touches.length===1&&n.type==="touchstart"),typeof i.width>"u"&&(i.width=i.radiusX||1),typeof i.height>"u"&&(i.height=i.radiusY||1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="touch"),typeof i.pointerId>"u"&&(i.pointerId=i.identifier||0),typeof i.pressure>"u"&&(i.pressure=i.force||.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),typeof i.layerX>"u"&&(i.layerX=i.offsetX=i.clientX),typeof i.layerY>"u"&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,i.type=n.type,e.push(i)}else if(!globalThis.MouseEvent||n instanceof MouseEvent&&(!this.supportsPointerEvents||!(n instanceof globalThis.PointerEvent))){const t=n;typeof t.isPrimary>"u"&&(t.isPrimary=!0),typeof t.width>"u"&&(t.width=1),typeof t.height>"u"&&(t.height=1),typeof t.tiltX>"u"&&(t.tiltX=0),typeof t.tiltY>"u"&&(t.tiltY=0),typeof t.pointerType>"u"&&(t.pointerType="mouse"),typeof t.pointerId>"u"&&(t.pointerId=ve),typeof t.pressure>"u"&&(t.pressure=.5),typeof t.twist>"u"&&(t.twist=0),typeof t.tangentialPressure>"u"&&(t.tangentialPressure=0),t.isNormalized=!0,e.push(t)}else e.push(n);return e}normalizeWheelEvent(n){const e=this._rootWheelEvent;return this._transferMouseData(e,n),e.deltaX=n.deltaX,e.deltaY=n.deltaY,e.deltaZ=n.deltaZ,e.deltaMode=n.deltaMode,this.mapPositionToPoint(e.screen,n.clientX,n.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=n,e.type=n.type,e}_bootstrapEvent(n,e){return n.originalEvent=null,n.nativeEvent=e,n.pointerId=e.pointerId,n.width=e.width,n.height=e.height,n.isPrimary=e.isPrimary,n.pointerType=e.pointerType,n.pressure=e.pressure,n.tangentialPressure=e.tangentialPressure,n.tiltX=e.tiltX,n.tiltY=e.tiltY,n.twist=e.twist,this._transferMouseData(n,e),this.mapPositionToPoint(n.screen,e.clientX,e.clientY),n.global.copyFrom(n.screen),n.offset.copyFrom(n.screen),n.isTrusted=e.isTrusted,n.type==="pointerleave"&&(n.type="pointerout"),n.type.startsWith("mouse")&&(n.type=n.type.replace("mouse","pointer")),n.type.startsWith("touch")&&(n.type=fe[n.type]||n.type),n}_transferMouseData(n,e){n.isTrusted=e.isTrusted,n.srcElement=e.srcElement,n.timeStamp=performance.now(),n.type=e.type,n.altKey=e.altKey,n.button=e.button,n.buttons=e.buttons,n.client.x=e.clientX,n.client.y=e.clientY,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.movement.x=e.movementX,n.movement.y=e.movementY,n.page.x=e.pageX,n.page.y=e.pageY,n.relatedTarget=null,n.shiftKey=e.shiftKey}};let O=B;O.extension={name:"events",type:[w.WebGLSystem,w.CanvasSystem,w.WebGPUSystem],priority:-1};O.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};const ge={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return this.eventMode==="dynamic"||this.eventMode==="static"},set interactive(n){this.eventMode=n?"static":"passive"},_internalEventMode:void 0,get eventMode(){return this._internalEventMode??O.defaultEventMode},set eventMode(n){this._internalEventMode=n},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(n,e,t){const s=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,i=typeof e=="function"?void 0:e;n=s?`${n}capture`:n,e=typeof e=="function"?e:e.handleEvent,this.on(n,e,i)},removeEventListener(n,e,t){const s=typeof t=="boolean"&&t||typeof t=="object"&&t.capture,i=typeof e=="function"?void 0:e;n=s?`${n}capture`:n,e=typeof e=="function"?e:e.handleEvent,this.off(n,e,i)},dispatchEvent(n){if(!(n instanceof M))throw new Error("Container cannot propagate events outside of the Federated Events API");return n.defaultPrevented=!1,n.path=null,n.target=this,n.manager.dispatchEvent(n),!n.defaultPrevented}};L.add(O);V.mixin(ge);
