import{S as g,i as m,s as b,e as _,a as G,b as i,n as u,d as r,c as k,q as T,t as y,f as M,l as f,r as S}from"./index-5b7226a9.js";import{g as q,M as p,T as A,a as E,b as h}from"./MqttPayload-01e89892.js";function v(l){let e;return{c(){e=y("Loading...")},m(o,t){i(o,e,t)},p:u,d(o){o&&r(e)}}}function C(l){let e,o,t,n,s;return{c(){e=_("button"),e.textContent="Action 1",o=M(),t=_("button"),t.textContent="Action 2"},m(a,c){i(a,e,c),i(a,o,c),i(a,t,c),n||(s=[f(e,"click",l[1]),f(t,"click",l[2])],n=!0)},p:u,d(a){a&&(r(e),r(o),r(t)),n=!1,S(s)}}}function L(l){let e;function o(s,a){return s[0]?C:v}let t=o(l),n=t(l);return{c(){e=_("div"),n.c(),G(e,"class","handheld")},m(s,a){i(s,e,a),n.m(e,null)},p(s,[a]){t===(t=o(s))&&n?n.p(s,a):(n.d(1),n=t(s),n&&(n.c(),n.m(e,null)))},i:u,o:u,d(s){s&&r(e),n.d()}}}function w(l,e,o){let t;k(l,T,d=>o(3,t=d));const s=new URLSearchParams(t).get("id")??"test123",a=h(s);let c;return q().then(d=>{o(0,c=d)}),[c,()=>{c.json_send(a,new p(A).toJson())},()=>{c.json_send(a,new p(E).toJson())}]}class x extends g{constructor(e){super(),m(this,e,w,L,b,{})}}export{x as default};
