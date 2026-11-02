import{c as hr,b as pd,q as md,o as gd,j as po,S as nn,n as si,f as Hu,a as Vu,d as Wu,e as _d,g as xd,h as Xu,i as ln,M as xi,k as rs,l as vd,m as yd,p as Md}from"./index-BuqEFcwk.js";function Sd(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=n.length,c,l=0,u=0,d=0;for(o=0;o<a;++o)c=n[o],l+=c.x||0,u+=c.y||0,d+=c.z||0;for(l=(l/a-i)*r,u=(u/a-e)*r,d=(d/a-t)*r,o=0;o<a;++o)c=n[o],l&&(c.x-=l),u&&(c.y-=u),d&&(c.z-=d)}return s.initialize=function(o){n=o},s.x=function(o){return arguments.length?(i=+o,s):i},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function mo(i){return i.x+i.vx}function tl(i){return i.y+i.vy}function Ed(i){return i.z+i.vz}function $u(i){var e,t,n,r,s=1,o=1;typeof i!="function"&&(i=hr(i==null?1:+i));function a(){for(var u,d=e.length,h,p,x,b,g,f,S,E=0;E<o;++E)for(h=(t===1?pd(e,mo):t===2?md(e,mo,tl):t===3?gd(e,mo,tl,Ed):null).visitAfter(c),u=0;u<d;++u)p=e[u],f=n[p.index],S=f*f,x=p.x+p.vx,t>1&&(b=p.y+p.vy),t>2&&(g=p.z+p.vz),h.visit(_);function _(w,y,T,m,M,R,P){var D=[y,T,m,M,R,P],K=D[0],Z=D[1],O=D[2],H=D[t],z=D[t+1],$=D[t+2],ee=w.data,ne=w.r,re=f+ne;if(ee){if(ee.index>p.index){var le=x-ee.x-ee.vx,xe=t>1?b-ee.y-ee.vy:0,Pe=t>2?g-ee.z-ee.vz:0,te=le*le+xe*xe+Pe*Pe;te<re*re&&(le===0&&(le=po(r),te+=le*le),t>1&&xe===0&&(xe=po(r),te+=xe*xe),t>2&&Pe===0&&(Pe=po(r),te+=Pe*Pe),te=(re-(te=Math.sqrt(te)))/te*s,p.vx+=(le*=te)*(re=(ne*=ne)/(S+ne)),t>1&&(p.vy+=(xe*=te)*re),t>2&&(p.vz+=(Pe*=te)*re),ee.vx-=le*(re=1-re),t>1&&(ee.vy-=xe*re),t>2&&(ee.vz-=Pe*re))}return}return K>x+re||H<x-re||t>1&&(Z>b+re||z<b-re)||t>2&&(O>g+re||$<g-re)}}function c(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<Math.pow(2,t);++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function l(){if(e){var u,d=e.length,h;for(n=new Array(d),u=0;u<d;++u)h=e[u],n[h.index]=+i(h,u,e)}}return a.initialize=function(u,...d){e=u,r=d.find(h=>typeof h=="function")||Math.random,t=d.find(h=>[1,2,3].includes(h))||2,l()},a.iterations=function(u){return arguments.length?(o=+u,a):o},a.strength=function(u){return arguments.length?(s=+u,a):s},a.radius=function(u){return arguments.length?(i=typeof u=="function"?u:hr(+u),l(),a):i},a}function bd(i){var e=hr(.1),t,n,r;typeof i!="function"&&(i=hr(i==null?0:+i));function s(a){for(var c=0,l=t.length,u;c<l;++c)u=t[c],u.vz+=(r[c]-u.z)*n[c]*a}function o(){if(t){var a,c=t.length;for(n=new Array(c),r=new Array(c),a=0;a<c;++a)n[a]=isNaN(r[a]=+i(t[a],a,t))?0:+e(t[a],a,t)}}return s.initialize=function(a){t=a,o()},s.strength=function(a){return arguments.length?(e=typeof a=="function"?a:hr(+a),o(),s):e},s.z=function(a){return arguments.length?(i=typeof a=="function"?a:hr(+a),o(),s):i},s}const oc="185",fr={ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,nl=1,Ad=2,Gs=1,Td=2,Hr=3,Si=0,rn=1,Qn=2,ni=0,pr=1,il=2,rl=3,sl=4,Rd=5,Ui=100,Cd=101,Pd=102,Dd=103,Ld=104,Id=200,Nd=201,Ud=202,Fd=203,ha=204,da=205,Od=206,Bd=207,Gd=208,zd=209,kd=210,Hd=211,Vd=212,Wd=213,Xd=214,fa=0,pa=1,ma=2,_r=3,ga=4,_a=5,xa=6,va=7,qu=0,$d=1,qd=2,zn=0,Yu=1,Ku=2,Zu=3,Ju=4,ju=5,Qu=6,eh=7,th=300,Gi=301,xr=302,go=303,_o=304,ro=306,ya=1e3,ti=1001,Ma=1002,kt=1003,Yd=1004,ss=1005,qt=1006,xo=1007,Oi=1008,vn=1009,nh=1010,ih=1011,qr=1012,ac=1013,Hn=1014,Rn=1015,oi=1016,cc=1017,lc=1018,Yr=1020,rh=35902,sh=35899,oh=1021,ah=1022,Cn=1023,ai=1026,Bi=1027,uc=1028,hc=1029,zi=1030,dc=1031,fc=1033,zs=33776,ks=33777,Hs=33778,Vs=33779,Sa=35840,Ea=35841,ba=35842,wa=35843,Aa=36196,Ta=37492,Ra=37496,Ca=37488,Pa=37489,qs=37490,Da=37491,La=37808,Ia=37809,Na=37810,Ua=37811,Fa=37812,Oa=37813,Ba=37814,Ga=37815,za=37816,ka=37817,Ha=37818,Va=37819,Wa=37820,Xa=37821,$a=36492,qa=36494,Ya=36495,Ka=36283,Za=36284,Ys=36285,Ja=36286,Kd=3200,ol=0,Zd=1,vi="",un="srgb",Ks="srgb-linear",Zs="linear",dt="srgb",qi=7680,al=519,Jd=512,jd=513,Qd=514,pc=515,ef=516,tf=517,mc=518,nf=519,cl=35044,os=35048,ll="300 es",Gn=2e3,Js=2001;function rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=js("canvas");return i.style.display="block",i}const ul={};function hl(...i){const e="THREE."+i.shift();console.log(e,...i)}function ch(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=ch(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=ch(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mr(...i){const e=i.join(" ");e in ul||(ul[e]=!0,ze(...i))}function of(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const af={[fa]:pa,[ma]:xa,[ga]:va,[_r]:_a,[pa]:fa,[xa]:ma,[va]:ga,[_a]:_r};class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const Wr=Math.PI/180,Kr=180/Math.PI;function Mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function cf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function lf(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function uf(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function hf(i,e=1){return e-Math.abs(gc(i,e*2)-e)}function df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mf(i,e){return i+Math.random()*(e-i)}function gf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(dl=i);let e=dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xf(i){return i*Wr}function vf(i){return i*Kr}function yf(i){return(i&i-1)===0&&i!==0}function Mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*u,a*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tn={DEG2RAD:Wr,RAD2DEG:Kr,generateUUID:Mr,clamp:tt,euclideanModulo:gc,mapLinear:cf,inverseLerp:lf,lerp:Xr,damp:uf,pingpong:hf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:xf,radToDeg:vf,isPowerOfTwo:yf,ceilPowerOfTwo:Mf,floorPowerOfTwo:Sf,setQuaternionFromProperEuler:Ef,normalize:Kt,denormalize:lr},Pc=class Pc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pc.prototype.isVector2=!0;let Ve=Pc;class Vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],p=s[o+1],x=s[o+2],b=s[o+3];if(d!==b||c!==h||l!==p||u!==x){let g=c*h+l*p+u*x+d*b;g<0&&(h=-h,p=-p,x=-x,b=-b,g=-g);let f=1-a;if(g<.9995){const S=Math.acos(g),E=Math.sin(S);f=Math.sin(f*S)/E,a=Math.sin(a*S)/E,c=c*f+h*a,l=l*f+p*a,u=u*f+x*a,d=d*f+b*a}else{c=c*f+h*a,l=l*f+p*a,u=u*f+x*a,d=d*f+b*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*d+c*p-l*h,e[t+1]=c*x+u*h+l*d-a*p,e[t+2]=l*x+u*p+a*h-c*d,e[t+3]=u*x-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),p=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"YZX":this._x=h*u*d+l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d-h*p*x;break;case"XZY":this._x=h*u*d-l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d+h*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dc=class Dc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dc.prototype.isVector3=!0;let N=Dc;const vo=new N,fl=new Vn,Lc=class Lc{constructor(e,t,n,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],b=r[0],g=r[3],f=r[6],S=r[1],E=r[4],_=r[7],w=r[2],y=r[5],T=r[8];return s[0]=o*b+a*S+c*w,s[3]=o*g+a*E+c*y,s[6]=o*f+a*_+c*T,s[1]=l*b+u*S+d*w,s[4]=l*g+u*E+d*y,s[7]=l*f+u*_+d*T,s[2]=h*b+p*S+x*w,s[5]=h*g+p*E+x*y,s[8]=h*f+p*_+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,x=t*d+n*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=d*b,e[1]=(r*l-u*n)*b,e[2]=(a*n-r*o)*b,e[3]=h*b,e[4]=(u*t-r*c)*b,e[5]=(r*s-a*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yo.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;let qe=Lc;const yo=new qe,pl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const rt=bf();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=js("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class _c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mo(r[o].image)):s.push(Mo(r[o]))}else s=Mo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Tf=0;const So=new N;class Jt extends Ei{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=ti,r=ti,s=qt,o=Oi,a=Cn,c=vn,l=Jt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Mr(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=th;Jt.DEFAULT_ANISOTROPY=1;const Ic=class Ic{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],x=c[9],b=c[2],g=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(x+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,_=(p+1)/2,w=(f+1)/2,y=(u+h)/4,T=(d+b)/4,m=(x+g)/4;return E>_&&E>w?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=y/n,s=T/n):_>w?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=y/r,s=m/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=T/s,r=m/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-x)*(g-x)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(d-b)/S,this.z=(h-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;let Tt=Ic;class Rf extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Jt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _c(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const io=class io{constructor(e,t,n,r,s,o,a,c,l,u,d,h,p,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,p,x,b,g)}set(e,t,n,r,s,o,a,c,l,u,d,h,p,x,b,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,x=a*u,b=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+x*l,t[5]=h-b*l,t[9]=-a*c,t[2]=b-h*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,x=l*u,b=l*d;t[0]=h+b*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=b+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,x=l*u,b=l*d;t[0]=h-b*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,x=a*u,b=a*d;t[0]=c*u,t[4]=x*l-p,t[8]=h*l+b,t[1]=c*d,t[5]=b*l+h,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,x=a*c,b=a*l;t[0]=c*u,t[4]=b-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+x,t[10]=h-b*d}else if(e.order==="XZY"){const h=o*c,p=o*l,x=a*c,b=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+b,t[5]=o*u,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Df)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),as.crossVectors(an,hi),r[0]=hi.x,r[4]=as.x,r[8]=an.x,r[1]=hi.y,r[5]=as.y,r[9]=an.y,r[2]=hi.z,r[6]=as.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],b=n[6],g=n[10],f=n[14],S=n[3],E=n[7],_=n[11],w=n[15],y=r[0],T=r[4],m=r[8],M=r[12],R=r[1],P=r[5],D=r[9],K=r[13],Z=r[2],O=r[6],H=r[10],z=r[14],$=r[3],ee=r[7],ne=r[11],re=r[15];return s[0]=o*y+a*R+c*Z+l*$,s[4]=o*T+a*P+c*O+l*ee,s[8]=o*m+a*D+c*H+l*ne,s[12]=o*M+a*K+c*z+l*re,s[1]=u*y+d*R+h*Z+p*$,s[5]=u*T+d*P+h*O+p*ee,s[9]=u*m+d*D+h*H+p*ne,s[13]=u*M+d*K+h*z+p*re,s[2]=x*y+b*R+g*Z+f*$,s[6]=x*T+b*P+g*O+f*ee,s[10]=x*m+b*D+g*H+f*ne,s[14]=x*M+b*K+g*z+f*re,s[3]=S*y+E*R+_*Z+w*$,s[7]=S*T+E*P+_*O+w*ee,s[11]=S*m+E*D+_*H+w*ne,s[15]=S*M+E*K+_*z+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],b=e[7],g=e[11],f=e[15],S=c*p-l*h,E=a*p-l*d,_=a*h-c*d,w=o*p-l*u,y=o*h-c*u,T=o*d-a*u;return t*(b*S-g*E+f*_)-n*(x*S-g*w+f*y)+r*(x*E-b*w+f*T)-s*(x*_-b*y+g*T)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(s*u-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],b=e[13],g=e[14],f=e[15],S=t*a-n*o,E=t*c-r*o,_=t*l-s*o,w=n*c-r*a,y=n*l-s*a,T=r*l-s*c,m=u*b-d*x,M=u*g-h*x,R=u*f-p*x,P=d*g-h*b,D=d*f-p*b,K=h*f-p*g,Z=S*K-E*D+_*P+w*R-y*M+T*m;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Z;return e[0]=(a*K-c*D+l*P)*O,e[1]=(r*D-n*K-s*P)*O,e[2]=(b*T-g*y+f*w)*O,e[3]=(h*y-d*T-p*w)*O,e[4]=(c*R-o*K-l*M)*O,e[5]=(t*K-r*R+s*M)*O,e[6]=(g*_-x*T-f*E)*O,e[7]=(u*T-h*_+p*E)*O,e[8]=(o*D-a*R+l*m)*O,e[9]=(n*R-t*D-s*m)*O,e[10]=(x*y-b*_+f*S)*O,e[11]=(d*_-u*y-p*S)*O,e[12]=(a*M-o*P-c*m)*O,e[13]=(t*P-n*M+r*m)*O,e[14]=(b*E-x*w-g*S)*O,e[15]=(u*w-d*E+h*S)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,x=s*d,b=o*u,g=o*d,f=a*d,S=c*l,E=c*u,_=c*d,w=n.x,y=n.y,T=n.z;return r[0]=(1-(b+f))*w,r[1]=(p+_)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(p-_)*y,r[5]=(1-(h+f))*y,r[6]=(g+S)*y,r[7]=0,r[8]=(x+E)*T,r[9]=(g-S)*T,r[10]=(1-(h+b))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ki.set(r[0],r[1],r[2]).length();const a=Ki.set(r[4],r[5],r[6]).length(),c=Ki.set(r[8],r[9],r[10]).length();s<0&&(o=-o),En.copy(this);const l=1/o,u=1/a,d=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=Gn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let x,b;if(c)x=s/(o-s),b=o*s/(o-s);else if(a===Gn)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Js)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Gn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,b;if(c)x=1/(o-s),b=o/(o-s);else if(a===Gn)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===Js)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};io.prototype.isMatrix4=!0;let vt=io;const Ki=new N,En=new vt,Pf=new N(0,0,0),Df=new N(1,1,1),hi=new N,as=new N,an=new N,gl=new vt,_l=new Vn;class ki{constructor(e=0,t=0,n=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const xl=new N,Zi=new Vn,qn=new vt,cs=new N,Cr=new N,If=new N,Nf=new Vn,vl=new N(1,0,0),yl=new N(0,1,0),Ml=new N(0,0,1),Sl={type:"added"},Uf={type:"removed"},Ji={type:"childadded",child:null},Eo={type:"childremoved",child:null};class sn extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new N,t=new ki,n=new Vn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Cr,cs,this.up):qn.lookAt(cs,Cr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(qn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}sn.DEFAULT_UP=new N(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ls extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,n),f=this._getHandJoint(l,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},us={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=gc(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wo(o,s,e+1/3),this.g=wo(o,s,e),this.b=wo(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return rt.workingToColorSpace($t.copy(this),e),Math.round(tt($t.r*255,0,255))*65536+Math.round(tt($t.g*255,0,255))*256+Math.round(tt($t.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace($t.copy(this),t);const n=$t.r,r=$t.g,s=$t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=un){rt.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,r=$t.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(us);const n=Xr(di.h,us.h,t),r=Xr(di.s,us.s,t),s=Xr(di.l,us.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new at;at.NAMES=uh;class Of extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new N,Yn=new N,Ao=new N,Kn=new N,ji=new N,Qi=new N,El=new N,To=new N,Ro=new N,Co=new N,Po=new Tt,Do=new Tt,Lo=new Tt;class Tn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Yn.subVectors(n,t),Ao.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Yn),c=bn.dot(Ao),l=Yn.dot(Yn),u=Yn.dot(Ao),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,x=(o*u-a*c)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Po,s.x),o.addScaledVector(Do,s.y),o.addScaledVector(Lo,s.z),o}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Yn.subVectors(e,t),bn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,n),Qi.subVectors(s,n),To.subVectors(e,n);const c=ji.dot(To),l=Qi.dot(To);if(c<=0&&l<=0)return t.copy(n);Ro.subVectors(e,r);const u=ji.dot(Ro),d=Qi.dot(Ro);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ji,o);Co.subVectors(e,s);const p=ji.dot(Co),x=Qi.dot(Co);if(x>=0&&p<=x)return t.copy(s);const b=p*l-c*x;if(b<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Qi,a);const g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return El.subVectors(s,r),a=(d-u)/(d-u+(p-x)),t.copy(r).addScaledVector(El,a);const f=1/(g+b+h);return o=b*f,a=h*f,t.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ds.subVectors(this.max,Pr),er.subVectors(e.a,Pr),tr.subVectors(e.b,Pr),nr.subVectors(e.c,Pr),fi.subVectors(tr,er),pi.subVectors(nr,tr),Di.subVectors(er,nr);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!Io(t,er,tr,nr,ds)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,er,tr,nr,ds))?!1:(fs.crossVectors(fi,pi),t=[fs.x,fs.y,fs.z],Io(t,er,tr,nr,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,hs=new bi,er=new N,tr=new N,nr=new N,fi=new N,pi=new N,Di=new N,Pr=new N,ds=new N,fs=new N,Li=new N;function Io(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Li.fromArray(i,s);const a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pt=new N,ps=new Ve;let Bf=0;class Pn extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hh extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Gf=new bi,Dr=new N,No=new N;class Hi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(No)),this.expandByPoint(Dr.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zf=0;const gn=new vt,Uo=new sn,ir=new N,cn=new bi,Lr=new bi,Bt=new N;class on extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rf(e)?dh:hh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(cn.min,Lr.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,Lr.max),cn.expandByPoint(Bt)):(cn.expandByPoint(Lr.min),cn.expandByPoint(Lr.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),Bt.add(ir)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let m=0;m<n.count;m++)a[m]=new N,c[m]=new N;const l=new N,u=new N,d=new N,h=new Ve,p=new Ve,x=new Ve,b=new N,g=new N;function f(m,M,R){l.fromBufferAttribute(n,m),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,m),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,R),u.sub(l),d.sub(l),p.sub(h),x.sub(h);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),a[m].add(b),a[M].add(b),a[R].add(b),c[m].add(g),c[M].add(g),c[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let m=0,M=S.length;m<M;++m){const R=S[m],P=R.start,D=R.count;for(let K=P,Z=P+D;K<Z;K+=3)f(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const E=new N,_=new N,w=new N,y=new N;function T(m){w.fromBufferAttribute(r,m),y.copy(w);const M=a[m];E.copy(M),E.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(y,M);const P=_.dot(c[m])<0?-1:1;o.setXYZW(m,E.x,E.y,E.z,P)}for(let m=0,M=S.length;m<M;++m){const R=S[m],P=R.start,D=R.count;for(let K=P,Z=P+D;K<Z;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,x=0;for(let b=0,g=c.length;b<g;b++){a.isInterleavedBufferAttribute?p=c[b]*a.data.stride+a.offset:p=c[b]*u;for(let f=0;f<u;f++)h[x++]=l[p++]}return new Pn(h,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let kf=0;class Jr extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=pr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=da,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new N,Fo=new N,ms=new N,mi=new N,Oo=new N,gs=new N,Bo=new N;class so{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Fo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ms),a=mi.dot(this.direction),c=-mi.dot(ms),l=mi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*c-a,h=o*a-c,x=s*u,d>=0)if(h>=-x)if(h<=x){const b=1/u;d*=b,h*=b,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fo).addScaledVector(ms,h),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,s){Oo.subVectors(t,e),gs.subVectors(n,e),Bo.crossVectors(Oo,gs);let o=this.direction.dot(Bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const c=a*this.direction.dot(gs.crossVectors(mi,gs));if(c<0)return null;const l=a*this.direction.dot(Oo.cross(mi));if(l<0||c+l>o)return null;const u=-a*mi.dot(Bo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $r extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bl=new vt,Ii=new so,_s=new Hi,wl=new N,xs=new N,vs=new N,ys=new N,Go=new N,Ms=new N,Al=new N,Ss=new N;class Dn extends sn{constructor(e=new on,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Go.fromBufferAttribute(d,e),o?Ms.addScaledVector(Go,u):Ms.addScaledVector(Go.sub(t),u))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(_s.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(_s,wl)===null||Ii.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(bl.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){const g=h[x],f=o[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,w=E;_<w;_+=3){const y=a.getX(_),T=a.getX(_+1),m=a.getX(_+2);r=Es(this,f,e,n,l,u,d,y,T,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let g=x,f=b;g<f;g+=3){const S=a.getX(g),E=a.getX(g+1),_=a.getX(g+2);r=Es(this,o,e,n,l,u,d,S,E,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,b=h.length;x<b;x++){const g=h[x],f=o[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,w=E;_<w;_+=3){const y=_,T=_+1,m=_+2;r=Es(this,f,e,n,l,u,d,y,T,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let g=x,f=b;g<f;g+=3){const S=g,E=g+1,_=g+2;r=Es(this,o,e,n,l,u,d,S,E,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Hf(i,e,t,n,r,s,o,a){let c;if(e.side===rn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Si,a),c===null)return null;Ss.copy(a),Ss.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:i}}function Es(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,xs),i.getVertexPosition(c,vs),i.getVertexPosition(l,ys);const u=Hf(i,e,t,n,xs,vs,ys,Al);if(u){const d=new N;Tn.getBarycoord(Al,xs,vs,ys,d),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,c,l,d,new Ve)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,c,l,d,new Ve)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Tn.getNormal(xs,vs,ys,h.normal),u.face=h,u.barycoord=d}return u}class fh extends Jt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=kt,u=kt,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends Pn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new vt,Rl=new vt,bs=[],Cl=new bi,Vf=new vt,Ir=new Dn,Nr=new Hi;class ws extends Dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Vf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Cl.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Cl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Nr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rr),Rl.multiplyMatrices(n,rr),Ir.matrixWorld=Rl,Ir.raycast(e,bs);for(let o=0,a=bs.length;o<a;o++){const c=bs[o];c.instanceId=s,c.object=this,t.push(c)}bs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(r*this.count),r,this.count,uc,Rn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zo=new N,Wf=new N,Xf=new qe;class jn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zo.subVectors(n,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(zo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xf.getNormalMatrix(e),r=this.coplanarPoint(zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Hi,$f=new Ve(.5,.5),As=new N;class vc{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],x=s[8],b=s[9],g=s[10],f=s[11],S=s[12],E=s[13],_=s[14],w=s[15];if(r[0].setComponents(l-o,p-u,f-x,w-S).normalize(),r[1].setComponents(l+o,p+u,f+x,w+S).normalize(),r[2].setComponents(l+a,p+d,f+b,w+E).normalize(),r[3].setComponents(l-a,p-d,f-b,w-E).normalize(),n)r[4].setComponents(c,h,g,_).normalize(),r[5].setComponents(l-c,p-h,f-g,w-_).normalize();else if(r[4].setComponents(l-c,p-h,f-g,w-_).normalize(),t===Gn)r[5].setComponents(l+c,p+h,f+g,w+_).normalize();else if(t===Js)r[5].setComponents(c,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=$f.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ws extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qs=new N,eo=new N,Pl=new vt,Ur=new so,Ts=new Hi,ko=new N,Dl=new N;class qf extends sn{constructor(e=new on,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Qs.fromBufferAttribute(t,r-1),eo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Qs.distanceTo(eo);e.setAttribute("lineDistance",new Ht(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Ts.radius+=s,e.ray.intersectsSphere(Ts)===!1)return;Pl.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(Pl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let b=p,g=x-1;b<g;b+=l){const f=u.getX(b),S=u.getX(b+1),E=Rs(this,e,Ur,c,f,S,b);E&&t.push(E)}if(this.isLineLoop){const b=u.getX(x-1),g=u.getX(p),f=Rs(this,e,Ur,c,b,g,x-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let b=p,g=x-1;b<g;b+=l){const f=Rs(this,e,Ur,c,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=Rs(this,e,Ur,c,x-1,p,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rs(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Qs.fromBufferAttribute(a,r),eo.fromBufferAttribute(a,s),t.distanceSqToSegment(Qs,eo,ko,Dl)>n)return;ko.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:Dl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ll=new N,Il=new N;class Ho extends qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ll.fromBufferAttribute(t,r),Il.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ll.distanceTo(Il);e.setAttribute("lineDistance",new Ht(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ph extends Jt{constructor(e=[],t=Gi,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vr extends Jt{constructor(e,t,n=Hn,r,s,o,a=kt,c=kt,l,u=ai,d=1){if(u!==ai&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yf extends vr{constructor(e,t=Hn,n=Gi,r,s,o=kt,a=kt,c,l=ai){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mh extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(d,2));function x(b,g,f,S,E,_,w,y,T,m,M){const R=_/T,P=w/m,D=_/2,K=w/2,Z=y/2,O=T+1,H=m+1;let z=0,$=0;const ee=new N;for(let ne=0;ne<H;ne++){const re=ne*P-K;for(let le=0;le<O;le++){const xe=le*R-D;ee[b]=xe*S,ee[g]=re*E,ee[f]=Z,l.push(ee.x,ee.y,ee.z),ee[b]=0,ee[g]=0,ee[f]=y>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(le/T),d.push(1-ne/m),z+=1}}for(let ne=0;ne<m;ne++)for(let re=0;re<T;re++){const le=h+re+O*ne,xe=h+re+O*(ne+1),Pe=h+(re+1)+O*(ne+1),te=h+(re+1)+O*ne;c.push(le,xe,te),c.push(xe,Pe,te),$+=6}a.addGroup(p,$,M),p+=$,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yc extends on{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new N,_=new N,w=new N;for(let y=0;y<t.length;y+=3)p(t[y+0],E),p(t[y+1],_),p(t[y+2],w),c(E,_,w,S)}function c(S,E,_,w){const y=w+1,T=[];for(let m=0;m<=y;m++){T[m]=[];const M=S.clone().lerp(_,m/y),R=E.clone().lerp(_,m/y),P=y-m;for(let D=0;D<=P;D++)D===0&&m===y?T[m][D]=M:T[m][D]=M.clone().lerp(R,D/P)}for(let m=0;m<y;m++)for(let M=0;M<2*(y-m)-1;M++){const R=Math.floor(M/2);M%2===0?(h(T[m][R+1]),h(T[m+1][R]),h(T[m][R])):(h(T[m][R+1]),h(T[m+1][R+1]),h(T[m+1][R]))}}function l(S){const E=new N;for(let _=0;_<s.length;_+=3)E.x=s[_+0],E.y=s[_+1],E.z=s[_+2],E.normalize().multiplyScalar(S),s[_+0]=E.x,s[_+1]=E.y,s[_+2]=E.z}function u(){const S=new N;for(let E=0;E<s.length;E+=3){S.x=s[E+0],S.y=s[E+1],S.z=s[E+2];const _=g(S)/2/Math.PI+.5,w=f(S)/Math.PI+.5;o.push(_,1-w)}x(),d()}function d(){for(let S=0;S<o.length;S+=6){const E=o[S+0],_=o[S+2],w=o[S+4],y=Math.max(E,_,w),T=Math.min(E,_,w);y>.9&&T<.1&&(E<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),w<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function p(S,E){const _=S*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function x(){const S=new N,E=new N,_=new N,w=new N,y=new Ve,T=new Ve,m=new Ve;for(let M=0,R=0;M<s.length;M+=9,R+=6){S.set(s[M+0],s[M+1],s[M+2]),E.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),y.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),m.set(o[R+4],o[R+5]),w.copy(S).add(E).add(_).divideScalar(3);const P=g(w);b(y,R+0,S,P),b(T,R+2,E,P),b(m,R+4,_,P)}}function b(S,E,_,w){w<0&&S.x===1&&(o[E]=S.x-1),_.x===0&&_.z===0&&(o[E]=w/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.detail)}}class to extends yc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class oo extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],x=[],b=[],g=[];for(let f=0;f<u;f++){const S=f*h-o;for(let E=0;E<l;E++){const _=E*d-s;x.push(_,-S,0),b.push(0,0,1),g.push(E/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const E=S+l*f,_=S+l*(f+1),w=S+1+l*(f+1),y=S+1+l*f;p.push(E,_,y),p.push(_,w,y)}this.setIndex(p),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(b,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}function yr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Nl(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Nl(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=yr(i[t]);for(const r in n)e[r]=n[r]}return e}function Nl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Zf={clone:yr,merge:Zt};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qf extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ep extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cs=new N,Ps=new Vn,Fn=new N;class _h extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cs,Ps,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Ps,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cs,Ps,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Ps,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new N,Ul=new Ve,Fl=new Ve;class xn extends _h{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Fl),t.subVectors(Fl,Ul)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xh extends _h{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=-90,or=1;class np extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(sr,or,e,t);r.layers=this.layers,this.add(r);const s=new xn(sr,or,e,t);s.layers=this.layers,this.add(s);const o=new xn(sr,or,e,t);o.layers=this.layers,this.add(o);const a=new xn(sr,or,e,t);a.layers=this.layers,this.add(a);const c=new xn(sr,or,e,t);c.layers=this.layers,this.add(c);const l=new xn(sr,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ip extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ol=new vt;class rp{constructor(e,t,n=0,r=1/0){this.ray=new so(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,n=[]){return ja(e,this,n,t),n.sort(Bl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ja(e[r],this,n,t);return n.sort(Bl),n}}function Bl(i,e){return i.distance-e.distance}function ja(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)ja(s[o],e,t,!0)}}class Qa{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nc=class Nc{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Nc.prototype.isMatrix2=!0;let Gl=Nc;class sp extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zl(i,e,t,n){const r=op(n);switch(t){case oh:return i*e;case uc:return i*e/r.components*r.byteLength;case hc:return i*e/r.components*r.byteLength;case zi:return i*e*2/r.components*r.byteLength;case dc:return i*e*2/r.components*r.byteLength;case ah:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case fc:return i*e*4/r.components*r.byteLength;case zs:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ta:case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:case qs:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ys:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function op(i){switch(i){case vn:case nh:return{byteLength:1,components:1};case qr:case ih:case oi:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case Hn:case ac:case Rn:return{byteLength:4,components:1};case rh:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function vh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ap(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],b=d[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,d[h]=b)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const b=d[p];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ig=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:vp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Tp,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Dp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:Gp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:$p,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:cm,lights_fragment_end:lm,lightprobes_pars_fragment:um,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:wm,normal_fragment_begin:Am,normal_fragment_maps:Tm,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Um,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:Gm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:$m,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Km,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:rg,uv_pars_vertex:sg,uv_vertex:og,worldpos_vertex:ag,background_vert:cg,background_frag:lg,backgroundCube_vert:ug,backgroundCube_frag:hg,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:bg,meshlambert_frag:wg,meshmatcap_vert:Ag,meshmatcap_frag:Tg,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Dg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Fg,points_frag:Og,shadow_vert:Bg,shadow_frag:Gg,sprite_vert:zg,sprite_frag:kg},Se={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new at(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Zt([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Zt([Se.lights,Se.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ds={r:0,b:0,g:0},Hg=new vt,yh=new qe;yh.set(-1,0,0,0,1,0,0,0,1);function Vg(i,e,t,n,r,s){const o=new at(0);let a=r===!0?0:1,c,l,u=null,d=0,h=null;function p(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const _=S.backgroundBlurriness>0;E=e.get(E,_)}return E}function x(S){let E=!1;const _=p(S);_===null?g(o,a):_&&_.isColor&&(g(_,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,E){const _=p(E);_&&(_.isCubeTexture||_.mapping===ro)?(l===void 0&&(l=new Dn(new jr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:yr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yh),l.material.toneMapped=rt.getTransfer(_.colorSpace)!==dt,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dn(new oo(2,2),new Wn({name:"BackgroundMaterial",uniforms:yr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,E){S.getRGB(Ds,gh(i)),t.buffers.color.setClear(Ds.r,Ds.g,Ds.b,E,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:x,addToRenderList:b,dispose:f}}function Wg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(P,D,K,Z,O){let H=!1;const z=d(P,Z,K,D);s!==z&&(s=z,l(s.object)),H=p(P,Z,K,O),H&&x(P,Z,K,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(P,D,K,Z),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,D,K,Z){const O=Z.wireframe===!0;let H=n[D.id];H===void 0&&(H={},n[D.id]=H);const z=P.isInstancedMesh===!0?P.id:0;let $=H[z];$===void 0&&($={},H[z]=$);let ee=$[K.id];ee===void 0&&(ee={},$[K.id]=ee);let ne=ee[O];return ne===void 0&&(ne=h(c()),ee[O]=ne),ne}function h(P){const D=[],K=[],Z=[];for(let O=0;O<t;O++)D[O]=0,K[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:K,attributeDivisors:Z,object:P,attributes:{},index:null}}function p(P,D,K,Z){const O=s.attributes,H=D.attributes;let z=0;const $=K.getAttributes();for(const ee in $)if($[ee].location>=0){const re=O[ee];let le=H[ee];if(le===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;z++}return s.attributesNum!==z||s.index!==Z}function x(P,D,K,Z){const O={},H=D.attributes;let z=0;const $=K.getAttributes();for(const ee in $)if($[ee].location>=0){let re=H[ee];re===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),O[ee]=le,z++}s.attributes=O,s.attributesNum=z,s.index=Z}function b(){const P=s.newAttributes;for(let D=0,K=P.length;D<K;D++)P[D]=0}function g(P){f(P,0)}function f(P,D){const K=s.newAttributes,Z=s.enabledAttributes,O=s.attributeDivisors;K[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),O[P]!==D&&(i.vertexAttribDivisor(P,D),O[P]=D)}function S(){const P=s.newAttributes,D=s.enabledAttributes;for(let K=0,Z=D.length;K<Z;K++)D[K]!==P[K]&&(i.disableVertexAttribArray(K),D[K]=0)}function E(P,D,K,Z,O,H,z){z===!0?i.vertexAttribIPointer(P,D,K,O,H):i.vertexAttribPointer(P,D,K,Z,O,H)}function _(P,D,K,Z){b();const O=Z.attributes,H=K.getAttributes(),z=D.defaultAttributeValues;for(const $ in H){const ee=H[$];if(ee.location>=0){let ne=O[$];if(ne===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const re=ne.normalized,le=ne.itemSize,xe=e.get(ne);if(xe===void 0)continue;const Pe=xe.buffer,te=xe.type,X=xe.bytesPerElement,oe=te===i.INT||te===i.UNSIGNED_INT||ne.gpuType===ac;if(ne.isInterleavedBufferAttribute){const se=ne.data,Le=se.stride,Be=ne.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)f(ee.location+De,se.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<ee.locationSize;De++)g(ee.location+De);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let De=0;De<ee.locationSize;De++)E(ee.location+De,le/ee.locationSize,te,re,Le*X,(Be+le/ee.locationSize*De)*X,oe)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)f(ee.location+se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<ee.locationSize;se++)g(ee.location+se);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let se=0;se<ee.locationSize;se++)E(ee.location+se,le/ee.locationSize,te,re,le*X,le/ee.locationSize*se*X,oe)}}else if(z!==void 0){const re=z[$];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ee.location,re);break;case 3:i.vertexAttrib3fv(ee.location,re);break;case 4:i.vertexAttrib4fv(ee.location,re);break;default:i.vertexAttrib1fv(ee.location,re)}}}}S()}function w(){M();for(const P in n){const D=n[P];for(const K in D){const Z=D[K];for(const O in Z){const H=Z[O];for(const z in H)u(H[z].object),delete H[z];delete Z[O]}}delete n[P]}}function y(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const K in D){const Z=D[K];for(const O in Z){const H=Z[O];for(const z in H)u(H[z].object),delete H[z];delete Z[O]}}delete n[P.id]}function T(P){for(const D in n){const K=n[D];for(const Z in K){const O=K[Z];if(O[P.id]===void 0)continue;const H=O[P.id];for(const z in H)u(H[z].object),delete H[z];delete O[P.id]}}}function m(P){for(const D in n){const K=n[D],Z=P.isInstancedMesh===!0?P.id:0,O=K[Z];if(O!==void 0){for(const H in O){const z=O[H];for(const $ in z)u(z[$].object),delete z[$];delete O[H]}delete K[Z],Object.keys(K).length===0&&delete n[D]}}}function M(){R(),o=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:m,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:S}}function Xg(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function $g(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const m=T===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!m)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(ze("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:w,samples:y}}function qg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new jn,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!r||x===null||x.length===0||s&&!g)s?u(null):l();else{const S=s?0:n,E=S*4;let _=f.clippingState||null;c.value=_,_=u(x,h,E,p);for(let w=0;w!==E;++w)_[w]=t[w];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,x){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=c.value,x!==!0||g===null){const f=p+b*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,_=p;E!==b;++E,_+=4)o.copy(d[E]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Mi=4,kl=[.125,.215,.35,.446,.526,.582],Fi=20,Yg=256,Fr=new xh,Hl=new at;let Vo=null,Wo=0,Xo=0,$o=!1;const Kg=new N;class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Kg}=s;Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Wo,Xo),this._renderer.xr.enabled=$o,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:oi,format:Cn,colorSpace:Ks,depthBuffer:!1},r=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zg(s)),this._blurMaterial=jg(s,e,t),this._ggxMaterial=Jg(s,e,t)}return r}_compileMaterial(e){const t=new Dn(new on,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,r,s){const c=new xn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Hl),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new jr,new $r({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let f=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,f=!0):(g.color.copy(Hl),f=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));const w=this._cubeSize;ar(r,_*w,E>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(b,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gi||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:x}=this,b=this._sizeLods[n],g=3*b*(n>x-Mi?n-x+Mi:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,ar(s,g,f,3*b,2*b),r.setRenderTarget(s),r.render(a,Fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,ar(e,g,f,3*b,2*b),r.setRenderTarget(e),r.render(a,Fr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const h=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),b=s/x,g=isFinite(s)?1+Math.floor(u*b):Fi;g>Fi&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const f=[];let S=0;for(let T=0;T<Fi;++T){const m=T/b,M=Math.exp(-m*m/2);f.push(M),T===0?S+=M:T<g&&(S+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=x,h.mipInt.value=E-n;const _=this._sizeLods[r],w=3*_*(r>E-Mi?r-E+Mi:0),y=4*(this._cubeSize-_);ar(t,w,y,3*_,2*_),c.setRenderTarget(t),c.render(d,Fr)}}function Zg(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+kl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Mi?c=kl[o-i+Mi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,b=3,g=2,f=1,S=new Float32Array(b*x*p),E=new Float32Array(g*x*p),_=new Float32Array(f*x*p);for(let y=0;y<p;y++){const T=y%3*2/3-1,m=y>2?0:-1,M=[T,m,0,T+2/3,m,0,T+2/3,m+1,0,T,m,0,T+2/3,m+1,0,T,m+1,0];S.set(M,b*x*y),E.set(h,g*x*y);const R=[y,y,y,y,y,y];_.set(R,f*x*y)}const w=new on;w.setAttribute("position",new Pn(S,b)),w.setAttribute("uv",new Pn(E,g)),w.setAttribute("faceIndex",new Pn(_,f)),n.push(new Dn(w,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wl(i,e,t){const n=new kn(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jg(i,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function jg(i,e,t){const n=new Float32Array(Fi),r=new N(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Xl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $l(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mh extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ph(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jr(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ni});s.uniforms.tEquirect.value=t;const o=new Dn(r,s),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=qt),new np(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function Qg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===go||p===_o)if(e.has(h)){const x=e.get(h).texture;return a(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const b=new Mh(x.height);return b.fromEquirectangularTexture(i,h),e.set(h,b),h.addEventListener("dispose",l),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,x=p===go||p===_o,b=p===Gi||p===xr;if(x||b){let g=t.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Vl(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return x&&S&&S.height>0||b&&S&&c(S)?(n===null&&(n=new Vl(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,p){return p===go?h.mapping=Gi:p===_o&&(h.mapping=xr),h}function c(h){let p=0;const x=6;for(let b=0;b<x;b++)h[b]!==void 0&&p++;return p===x}function l(h){const p=h.target;p.removeEventListener("dispose",l);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function e_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function t_(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,x=d.attributes.position;let b=0;if(x===void 0)return;if(p!==null){const S=p.array;b=p.version;for(let E=0,_=S.length;E<_;E+=3){const w=S[E+0],y=S[E+1],T=S[E+2];h.push(w,y,y,T,T,w)}}else{const S=x.array;b=x.version;for(let E=0,_=S.length/3-1;E<_;E+=3){const w=E+0,y=E+1,T=E+2;h.push(w,y,y,T,T,w)}}const g=new(x.count>=65535?dh:hh)(h,1);g.version=b;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function n_(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*o),t.update(h,n,1)}function l(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,d*o,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let b=0;for(let g=0;g<p;g++)b+=h[g];t.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function i_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function r_(i,e,t){const n=new WeakMap,r=new Tt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),x===!0&&(E=2),b===!0&&(E=3);let _=a.attributes.position.count*E,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const y=new Float32Array(_*w*4*d),T=new lh(y,_,w,d);T.type=Rn,T.needsUpdate=!0;const m=E*4;for(let R=0;R<d;R++){const P=g[R],D=f[R],K=S[R],Z=_*w*4*R;for(let O=0;O<P.count;O++){const H=O*m;p===!0&&(r.fromBufferAttribute(P,O),y[Z+H+0]=r.x,y[Z+H+1]=r.y,y[Z+H+2]=r.z,y[Z+H+3]=0),x===!0&&(r.fromBufferAttribute(D,O),y[Z+H+4]=r.x,y[Z+H+5]=r.y,y[Z+H+6]=r.z,y[Z+H+7]=0),b===!0&&(r.fromBufferAttribute(K,O),y[Z+H+8]=r.x,y[Z+H+9]=r.y,y[Z+H+10]=r.z,y[Z+H+11]=K.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new Ve(_,w)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function s_(i,e,t,n,r){let s=new WeakMap;function o(l){const u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const o_={[Yu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function a_(i,e,t,n,r,s){const o=new kn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new vr(e,t):void 0}),a=new kn(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),c=new on;c.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const l=new Qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Dn(c,l),d=new xh(-1,1,1,-1,0,1);let h=null,p=null,x=!1,b,g=null,f=[],S=!1;this.setSize=function(E,_){o.setSize(E,_),a.setSize(E,_);for(let w=0;w<f.length;w++){const y=f[w];y.setSize&&y.setSize(E,_)}},this.setEffects=function(E){f=E,S=f.length>0&&f[0].isRenderPass===!0;const _=o.width,w=o.height;for(let y=0;y<f.length;y++){const T=f[y];T.setSize&&T.setSize(_,w)}},this.begin=function(E,_){if(x||E.toneMapping===zn&&f.length===0)return!1;if(g=_,_!==null){const w=_.width,y=_.height;(o.width!==w||o.height!==y)&&this.setSize(w,y)}return S===!1&&E.setRenderTarget(o),b=E.toneMapping,E.toneMapping=zn,!0},this.hasRenderPass=function(){return S},this.end=function(E,_){E.toneMapping=b,x=!0;let w=o,y=a;for(let T=0;T<f.length;T++){const m=f[T];if(m.enabled!==!1&&(m.render(E,y,w,_),m.needsSwap!==!1)){const M=w;w=y,y=M}}if(h!==E.outputColorSpace||p!==E.toneMapping){h=E.outputColorSpace,p=E.toneMapping,l.defines={},rt.getTransfer(h)===dt&&(l.defines.SRGB_TRANSFER="");const T=o_[p];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(g),E.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Sh=new Jt,ec=new vr(1,1),Eh=new lh,bh=new Cf,wh=new ph,ql=[],Yl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function d_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Ut(t,n)}}function f_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Ut(t,n)}}function p_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Ut(t,n)}}function m_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function v_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function E_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=t.isReversedDepthBuffer()?mc:pc,s=ec):s=Sh,t.setTexture2D(e||s,r)}function b_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bh,r)}function w_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wh,r)}function A_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Eh,r)}function T_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return u_;case 35666:return h_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){const t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function P_(i,e){const t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){const t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){const t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I_(i,e){const t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N_(i,e){const t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U_(i,e){i.uniform1iv(this.addr,e)}function F_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function B_(i,e){i.uniform4iv(this.addr,e)}function G_(i,e){i.uniform1uiv(this.addr,e)}function z_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function H_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ec:o=Sh;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function W_(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bh,s[o])}function X_(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wh,s[o])}function $_(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Eh,s[o])}function q_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return D_;case 35674:return L_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return G_;case 36294:return z_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return $_}}class Y_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function jl(i,e){i.seq.push(e),i.map[e.id]=e}function J_(i,e,t){const n=i.name,r=n.length;for(qo.lastIndex=0;;){const s=qo.exec(n),o=qo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jl(t,l===void 0?new Y_(a,i,e):new K_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Z_(a),jl(t,d)),t=d}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);J_(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j_=37297;let Q_=0;function e0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const eu=new qe;function t0(i){rt._getMatrix(eu,rt.workingColorSpace,i);const e=`mat3( ${eu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Zs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(e),a)}else return s}function n0(i,e){const t=t0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const i0={[Yu]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[Qu]:"AgX",[eh]:"Neutral",[ju]:"Custom"};function r0(i,e){const t=i0[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new N;function s0(){rt.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function a0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vr(i){return i!==""}function nu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(l0,h0)}const u0=new Map;function h0(i,e){let t=Ke[e];if(t===void 0){const n=u0.get(e);if(n!==void 0)t=Ke[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tc(t)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(d0,f0)}function f0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function su(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p0={[Gs]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function m0(i){return p0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g0={[Gi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE_UV"};function _0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":g0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const x0={[xr]:"ENVMAP_MODE_REFRACTION"};function v0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y0={[qu]:"ENVMAP_BLENDING_MULTIPLY",[$d]:"ENVMAP_BLENDING_MIX",[qd]:"ENVMAP_BLENDING_ADD"};function M0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y0[i.combine]||"ENVMAP_BLENDING_NONE"}function S0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=m0(t),l=_0(t),u=v0(t),d=M0(t),h=S0(t),p=o0(t),x=a0(s),b=r.createProgram();let g,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vr).join(`
`),f.length>0&&(f+=`
`)):(g=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),f=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==zn?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=tc(o),o=nu(o,t),o=iu(o,t),a=tc(a),a=nu(a,t),a=iu(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+g+o,_=S+f+a,w=Ql(r,r.VERTEX_SHADER,E),y=Ql(r,r.FRAGMENT_SHADER,_);r.attachShader(b,w),r.attachShader(b,y),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function T(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(b)||"",K=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(y)||"",O=D.trim(),H=K.trim(),z=Z.trim();let $=!0,ee=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,w,y);else{const ne=tu(r,w,"vertex"),re=tu(r,y,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ne+`
`+re)}else O!==""?ze("WebGLProgram: Program Info Log:",O):(H===""||z==="")&&(ee=!1);ee&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(w),r.deleteShader(y),m=new Xs(r,b),M=c0(r,b)}let m;this.getUniforms=function(){return m===void 0&&T(this),m};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(b,j_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=y,this}let b0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A0(e),t.set(e,n)),n}}class A0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function T0(i){return i===zi||i===qs||i===Ys}function R0(i,e,t,n,r,s){const o=new xc,a=new w0,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return c.add(m),m===0?"uv":`uv${m}`}function b(m,M,R,P,D,K){const Z=P.fog,O=D.geometry,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?P.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,$=e.get(m.envMap||H,z),ee=$&&$.mapping===ro?$.image.height:null,ne=p[m.type];m.precision!==null&&(h=n.getMaxPrecision(m.precision),h!==m.precision&&ze("WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=re!==void 0?re.length:0;let xe=0;O.morphAttributes.position!==void 0&&(xe=1),O.morphAttributes.normal!==void 0&&(xe=2),O.morphAttributes.color!==void 0&&(xe=3);let Pe,te,X,oe;if(ne){const Ee=Bn[ne];Pe=Ee.vertexShader,te=Ee.fragmentShader}else{Pe=m.vertexShader,te=m.fragmentShader;const Ee=a.getVertexShaderStage(m),pt=a.getFragmentShaderStage(m);a.update(m,Ee,pt),X=Ee.id,oe=pt.id}const se=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,De=D.isBatchedMesh===!0,Je=!!m.map,He=!!m.matcap,je=!!$,Qe=!!m.aoMap,nt=!!m.lightMap,Ze=!!m.bumpMap&&m.wireframe===!1,wt=!!m.normalMap,Rt=!!m.displacementMap,Mt=!!m.emissiveMap,ut=!!m.metalnessMap,ft=!!m.roughnessMap,U=m.anisotropy>0,Dt=m.clearcoat>0,et=m.dispersion>0,C=m.iridescence>0,v=m.sheen>0,k=m.transmission>0,V=U&&!!m.anisotropyMap,j=Dt&&!!m.clearcoatMap,ae=Dt&&!!m.clearcoatNormalMap,ge=Dt&&!!m.clearcoatRoughnessMap,Q=C&&!!m.iridescenceMap,ie=C&&!!m.iridescenceThicknessMap,_e=v&&!!m.sheenColorMap,Ue=v&&!!m.sheenRoughnessMap,ve=!!m.specularMap,pe=!!m.specularColorMap,Ie=!!m.specularIntensityMap,we=k&&!!m.transmissionMap,Ge=k&&!!m.thicknessMap,I=!!m.gradientMap,de=!!m.alphaMap,q=m.alphaTest>0,ue=!!m.alphaHash,ye=!!m.extensions;let J=zn;m.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(J=i.toneMapping);const fe={shaderID:ne,shaderType:m.type,shaderName:m.name,vertexShader:Pe,fragmentShader:te,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:De,batchingColor:De&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Je,matcap:He,envMap:je,envMapMode:je&&$.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:nt,bumpMap:Ze,normalMap:wt,displacementMap:Rt,emissiveMap:Mt,normalMapObjectSpace:wt&&m.normalMapType===Zd,normalMapTangentSpace:wt&&m.normalMapType===ol,packedNormalMap:wt&&m.normalMapType===ol&&T0(m.normalMap.format),metalnessMap:ut,roughnessMap:ft,anisotropy:U,anisotropyMap:V,clearcoat:Dt,clearcoatMap:j,clearcoatNormalMap:ae,clearcoatRoughnessMap:ge,dispersion:et,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:ie,sheen:v,sheenColorMap:_e,sheenRoughnessMap:Ue,specularMap:ve,specularColorMap:pe,specularIntensityMap:Ie,transmission:k,transmissionMap:we,thicknessMap:Ge,gradientMap:I,opaque:m.transparent===!1&&m.blending===pr&&m.alphaToCoverage===!1,alphaMap:de,alphaTest:q,alphaHash:ue,combine:m.combine,mapUv:Je&&x(m.map.channel),aoMapUv:Qe&&x(m.aoMap.channel),lightMapUv:nt&&x(m.lightMap.channel),bumpMapUv:Ze&&x(m.bumpMap.channel),normalMapUv:wt&&x(m.normalMap.channel),displacementMapUv:Rt&&x(m.displacementMap.channel),emissiveMapUv:Mt&&x(m.emissiveMap.channel),metalnessMapUv:ut&&x(m.metalnessMap.channel),roughnessMapUv:ft&&x(m.roughnessMap.channel),anisotropyMapUv:V&&x(m.anisotropyMap.channel),clearcoatMapUv:j&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(m.sheenRoughnessMap.channel),specularMapUv:ve&&x(m.specularMap.channel),specularColorMapUv:pe&&x(m.specularColorMap.channel),specularIntensityMapUv:Ie&&x(m.specularIntensityMap.channel),transmissionMapUv:we&&x(m.transmissionMap.channel),thicknessMapUv:Ge&&x(m.thicknessMap.channel),alphaMapUv:de&&x(m.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(wt||U),vertexNormals:!!O.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Je||de),fog:!!Z,useFog:m.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||O.attributes.normal===void 0&&wt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:Je&&m.map.isVideoTexture===!0&&rt.getTransfer(m.map.colorSpace)===dt,decodeVideoTextureEmissive:Mt&&m.emissiveMap.isVideoTexture===!0&&rt.getTransfer(m.emissiveMap.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Qn,flipSided:m.side===rn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ye&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&m.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function g(m){const M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(const R in m.defines)M.push(R),M.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(f(M,m),S(M,m),M.push(i.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function f(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapCubeUVHeight),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.morphAttributeCount),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function S(m,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function E(m){const M=p[m.type];let R;if(M){const P=Bn[M];R=Zf.clone(P.uniforms)}else R=m.uniforms;return R}function _(m,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new E0(i,M,m,r),l.push(R),u.set(M,R)),R}function w(m){if(--m.usedTimes===0){const M=l.indexOf(m);l[M]=l[l.length-1],l.pop(),u.delete(m.cacheKey),m.destroy()}}function y(m){a.remove(m)}function T(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:w,releaseShaderCache:y,programs:l,dispose:T}}function C0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function P0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function au(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,x,b,g,f){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:x,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:f},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=x,S.materialVariant=o(h),S.groupOrder=b,S.renderOrder=h.renderOrder,S.z=g,S.group=f),e++,S}function c(h,p,x,b,g,f){const S=a(h,p,x,b,g,f);x.transmission>0?n.push(S):x.transparent===!0?r.push(S):t.push(S)}function l(h,p,x,b,g,f){const S=a(h,p,x,b,g,f);x.transmission>0?n.unshift(S):x.transparent===!0?r.unshift(S):t.unshift(S)}function u(h,p,x){t.length>1&&t.sort(h||P0),n.length>1&&n.sort(p||ou),r.length>1&&r.sort(p||ou),x&&(t.reverse(),n.reverse(),r.reverse())}function d(){for(let h=e,p=i.length;h<p;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function D0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new au,i.set(n,[o])):r>=s.length?(o=new au,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new at};break;case"SpotLight":t={position:new N,direction:new N,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function I0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let N0=0;function U0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F0(i){const e=new L0,t=I0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new vt,o=new vt;function a(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,b=0,g=0,f=0,S=0,E=0,_=0,w=0,y=0,T=0;l.sort(U0);for(let M=0,R=l.length;M<R;M++){const P=l[M],D=P.color,K=P.intensity,Z=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===zi?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*K,d+=D.g*K,h+=D.b*K;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],K);T++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,$=t.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(D).multiplyScalar(K),H.distance=Z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[b]=H;const z=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[b]=z.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.spotShadow[b]=$,n.spotShadowMap[b]=O,_++}b++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(D).multiplyScalar(K),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=H,g++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const z=P.shadow,$=t.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=P.shadow.matrix,E++}n.point[x]=H,x++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(K),H.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[f]=H,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const m=n.hash;(m.directionalLength!==p||m.pointLength!==x||m.spotLength!==b||m.rectAreaLength!==g||m.hemiLength!==f||m.numDirectionalShadows!==S||m.numPointShadows!==E||m.numSpotShadows!==_||m.numSpotMaps!==w||m.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+w-y,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,m.directionalLength=p,m.pointLength=x,m.spotLength=b,m.rectAreaLength=g,m.hemiLength=f,m.numDirectionalShadows=S,m.numPointShadows=E,m.numSpotShadows=_,m.numSpotMaps=w,m.numLightProbes=T,n.version=N0++)}function c(l,u){let d=0,h=0,p=0,x=0,b=0;const g=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const E=l[f];if(E.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(E.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const _=n.rectArea[x];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:a,setupView:c,state:n}}function cu(i){const e=new F0(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function O0(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cu(i),e.set(r,[a])):s>=o.length?(a=new cu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],k0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],lu=new vt,Or=new N,Yo=new N;function H0(i,e,t){let n=new vc;const r=new Ve,s=new Ve,o=new Tt,a=new ep,c=new tp,l={},u=t.maxTextureSize,d={[Si]:rn,[rn]:Si,[Qn]:Qn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:B0,fragmentShader:G0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new on;x.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Dn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let f=this.type;this.render=function(y,T,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Td&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gs);const M=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const K=f!==this.type;K&&T.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(O=>O.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,O=y.length;Z<O;Z++){const H=y[Z],z=H.shadow;if(z===void 0){ze("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ee,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Hr){if(H.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new kn(r.x,r.y,{format:zi,type:oi,minFilter:qt,magFilter:qt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new vr(r.x,r.y,Rn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ai,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt}else H.isPointLight?(z.map=new Mh(r.x),z.map.depthTexture=new Yf(r.x,Hn)):(z.map=new kn(r.x,r.y),z.map.depthTexture=new vr(r.x,r.y,Hn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ai,this.type===Gs?(z.map.depthTexture.compareFunction=ee?mc:pc,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt);z.camera.updateProjectionMatrix()}const ne=z.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,re),i.clear();else{re===0&&(i.setRenderTarget(z.map),i.clear());const le=z.getViewport(re);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),D.viewport(o)}if(H.isPointLight){const le=z.camera,xe=z.matrix,Pe=H.distance||le.far;Pe!==le.far&&(le.far=Pe,le.updateProjectionMatrix()),Or.setFromMatrixPosition(H.matrixWorld),le.position.copy(Or),Yo.copy(le.position),Yo.add(z0[re]),le.up.copy(k0[re]),le.lookAt(Yo),le.updateMatrixWorld(),xe.makeTranslation(-Or.x,-Or.y,-Or.z),lu.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lu,le.coordinateSystem,le.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),_(T,m,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Hr&&S(z,m),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(M,R,P)};function S(y,T){const m=e.update(b);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new kn(r.x,r.y,{format:zi,type:oi})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,m,h,b,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,m,p,b,null)}function E(y,T,m,M){let R=null;const P=m.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)R=P;else if(R=m.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=R.uuid,K=T.uuid;let Z=l[D];Z===void 0&&(Z={},l[D]=Z);let O=Z[K];O===void 0&&(O=R.clone(),Z[K]=O,T.addEventListener("dispose",w)),R=O}if(R.visible=T.visible,R.wireframe=T.wireframe,M===Hr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,m.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=m}return R}function _(y,T,m,M,R){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Hr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,y.matrixWorld);const K=e.update(y),Z=y.material;if(Array.isArray(Z)){const O=K.groups;for(let H=0,z=O.length;H<z;H++){const $=O[H],ee=Z[$.materialIndex];if(ee&&ee.visible){const ne=E(y,ee,M,R);y.onBeforeShadow(i,y,T,m,K,ne,$),i.renderBufferDirect(m,null,K,ne,y,$),y.onAfterShadow(i,y,T,m,K,ne,$)}}}else if(Z.visible){const O=E(y,Z,M,R);y.onBeforeShadow(i,y,T,m,K,O,null),i.renderBufferDirect(m,null,K,O,y,null),y.onAfterShadow(i,y,T,m,K,O,null)}}const D=y.children;for(let K=0,Z=D.length;K<Z;K++)_(D[K],T,m,M,R)}function w(y){y.target.removeEventListener("dispose",w);for(const m in l){const M=l[m],R=y.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function V0(i,e){function t(){let I=!1;const de=new Tt;let q=null;const ue=new Tt(0,0,0,0);return{setMask:function(ye){q!==ye&&!I&&(i.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){I=ye},setClear:function(ye,J,fe,Ee,pt){pt===!0&&(ye*=Ee,J*=Ee,fe*=Ee),de.set(ye,J,fe,Ee),ue.equals(de)===!1&&(i.clearColor(ye,J,fe,Ee),ue.copy(de))},reset:function(){I=!1,q=null,ue.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,q=null,ue=null,ye=null;return{setReversed:function(J){if(de!==J){const fe=e.get("EXT_clip_control");J?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),de=J;const Ee=ye;ye=null,this.setClear(Ee)}},getReversed:function(){return de},setTest:function(J){J?se(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(J){q!==J&&!I&&(i.depthMask(J),q=J)},setFunc:function(J){if(de&&(J=af[J]),ue!==J){switch(J){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=J}},setLocked:function(J){I=J},setClear:function(J){ye!==J&&(ye=J,de&&(J=1-J),i.clearDepth(J))},reset:function(){I=!1,q=null,ue=null,ye=null,de=!1}}}function r(){let I=!1,de=null,q=null,ue=null,ye=null,J=null,fe=null,Ee=null,pt=null;return{setTest:function(ct){I||(ct?se(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ct){de!==ct&&!I&&(i.stencilMask(ct),de=ct)},setFunc:function(ct,Ft,Yt){(q!==ct||ue!==Ft||ye!==Yt)&&(i.stencilFunc(ct,Ft,Yt),q=ct,ue=Ft,ye=Yt)},setOp:function(ct,Ft,Yt){(J!==ct||fe!==Ft||Ee!==Yt)&&(i.stencilOp(ct,Ft,Yt),J=ct,fe=Ft,Ee=Yt)},setLocked:function(ct){I=ct},setClear:function(ct){pt!==ct&&(i.clearStencil(ct),pt=ct)},reset:function(){I=!1,de=null,q=null,ue=null,ye=null,J=null,fe=null,Ee=null,pt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,x=[],b=null,g=!1,f=null,S=null,E=null,_=null,w=null,y=null,T=null,m=new at(0,0,0),M=0,R=!1,P=null,D=null,K=null,Z=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=$>=2);let ne=null,re={};const le=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Pe=new Tt().fromArray(le),te=new Tt().fromArray(xe);function X(I,de,q,ue){const ye=new Uint8Array(4),J=i.createTexture();i.bindTexture(I,J),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<q;fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(de+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return J}const oe={};oe[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(_r),Ze(!1),wt(nl),se(i.CULL_FACE),Qe(ni);function se(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Le(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Be(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function De(I,de){let q=x,ue=!1;if(I){q=p.get(de),q===void 0&&(q=[],p.set(de,q));const ye=I.textures;if(q.length!==ye.length||q[0]!==i.COLOR_ATTACHMENT0){for(let J=0,fe=ye.length;J<fe;J++)q[J]=i.COLOR_ATTACHMENT0+J;q.length=ye.length,ue=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ue=!0);ue&&i.drawBuffers(q)}function Je(I){return b!==I?(i.useProgram(I),b=I,!0):!1}const He={[Ui]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};He[Dd]=i.MIN,He[Ld]=i.MAX;const je={[Id]:i.ZERO,[Nd]:i.ONE,[Ud]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,de,q,ue,ye,J,fe,Ee,pt,ct){if(I===ni){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),I!==Rd){if(I!==f||ct!==R){if((S!==Ui||w!==Ui)&&(i.blendEquation(i.FUNC_ADD),S=Ui,w=Ui),ct)switch(I){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",I);break}else switch(I){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",I);break}E=null,_=null,y=null,T=null,m.set(0,0,0),M=0,f=I,R=ct}return}ye=ye||de,J=J||q,fe=fe||ue,(de!==S||ye!==w)&&(i.blendEquationSeparate(He[de],He[ye]),S=de,w=ye),(q!==E||ue!==_||J!==y||fe!==T)&&(i.blendFuncSeparate(je[q],je[ue],je[J],je[fe]),E=q,_=ue,y=J,T=fe),(Ee.equals(m)===!1||pt!==M)&&(i.blendColor(Ee.r,Ee.g,Ee.b,pt),m.copy(Ee),M=pt),f=I,R=!1}function nt(I,de){I.side===Qn?Le(i.CULL_FACE):se(i.CULL_FACE);let q=I.side===rn;de&&(q=!q),Ze(q),I.blending===pr&&I.transparent===!1?Qe(ni):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ue=I.stencilWrite;a.setTest(ue),ue&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function wt(I){I!==wd?(se(i.CULL_FACE),I!==D&&(I===nl?i.cullFace(i.BACK):I===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),D=I}function Rt(I){I!==K&&(z&&i.lineWidth(I),K=I)}function Mt(I,de,q){I?(se(i.POLYGON_OFFSET_FILL),(Z!==de||O!==q)&&(Z=de,O=q,o.getReversed()&&(de=-de),i.polygonOffset(de,q))):Le(i.POLYGON_OFFSET_FILL)}function ut(I){I?se(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function ft(I){I===void 0&&(I=i.TEXTURE0+H-1),ne!==I&&(i.activeTexture(I),ne=I)}function U(I,de,q){q===void 0&&(ne===null?q=i.TEXTURE0+H-1:q=ne);let ue=re[q];ue===void 0&&(ue={type:void 0,texture:void 0},re[q]=ue),(ue.type!==I||ue.texture!==de)&&(ne!==q&&(i.activeTexture(q),ne=q),i.bindTexture(I,de||oe[I]),ue.type=I,ue.texture=de)}function Dt(){const I=re[ne];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function v(){try{i.texSubImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function k(){try{i.texSubImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function ae(){try{i.texStorage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function ge(){try{i.texStorage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function Q(){try{i.texImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function ie(){try{i.texImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function _e(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function Ue(I,de){d[I]!==de&&(i.pixelStorei(I,de),d[I]=de)}function ve(I){Pe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function pe(I){te.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function Ie(I,de){let q=l.get(de);q===void 0&&(q=new WeakMap,l.set(de,q));let ue=q.get(I);ue===void 0&&(ue=i.getUniformBlockIndex(de,I.name),q.set(I,ue))}function we(I,de){const ue=l.get(de).get(I);c.get(de)!==ue&&(i.uniformBlockBinding(de,ue,I.__bindingPointIndex),c.set(de,ue))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},h={},p=new WeakMap,x=[],b=null,g=!1,f=null,S=null,E=null,_=null,w=null,y=null,T=null,m=new at(0,0,0),M=0,R=!1,P=null,D=null,K=null,Z=null,O=null,Pe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Le,bindFramebuffer:Be,drawBuffers:De,useProgram:Je,setBlending:Qe,setMaterial:nt,setFlipSided:Ze,setCullFace:wt,setLineWidth:Rt,setPolygonOffset:Mt,setScissorTest:ut,activeTexture:ft,bindTexture:U,unbindTexture:Dt,compressedTexImage2D:et,compressedTexImage3D:C,texImage2D:Q,texImage3D:ie,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Ie,uniformBlockBinding:we,texStorage2D:ae,texStorage3D:ge,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:j,scissor:ve,viewport:pe,reset:Ge}}function W0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,v){return x?new OffscreenCanvas(C,v):js("canvas")}function g(C,v,k){let V=1;const j=et(C);if((j.width>k||j.height>k)&&(V=k/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(V*j.width),ge=Math.floor(V*j.height);h===void 0&&(h=b(ae,ge));const Q=v?b(ae,ge):h;return Q.width=ae,Q.height=ge,Q.getContext("2d").drawImage(C,0,0,ae,ge),ze("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ge+")."),Q}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function f(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,k,V,j,ae=!1){if(C!==null){if(i[C]!==void 0)return i[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;V&&(ge=e.get("EXT_texture_norm16"),ge||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8),k===i.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),k===i.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8),k===i.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),k===i.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),k===i.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){const ie=ae?Zs:rt.getTransfer(j);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=ie===dt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),k===i.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(C,v){let k;return C?v===null||v===Hn||v===Yr?k=i.DEPTH24_STENCIL8:v===Rn?k=i.DEPTH32F_STENCIL8:v===qr&&(k=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Yr?k=i.DEPTH_COMPONENT24:v===Rn?k=i.DEPTH_COMPONENT32F:v===qr&&(k=i.DEPTH_COMPONENT16),k}function y(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){const v=C.target;v.removeEventListener("dispose",T),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function m(C){const v=C.target;v.removeEventListener("dispose",m),P(v)}function M(C){const v=n.get(C);if(v.__webglInit===void 0)return;const k=C.source,V=p.get(k);if(V){const j=V[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(C),Object.keys(V).length===0&&p.delete(k)}n.remove(C)}function R(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const k=C.source,V=p.get(k);delete V[v.__cacheKey],o.memory.textures--}function P(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let j=0;j<v.__webglFramebuffer[V].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[V][j]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=C.textures;for(let V=0,j=k.length;V<j;V++){const ae=n.get(k[V]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(k[V])}n.remove(C)}let D=0;function K(){D=0}function Z(){return D}function O(C){D=C}function H(){const C=D;return C>=r.maxTextures&&ze("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function z(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function $(C,v){const k=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const V=C.image;if(V===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function ee(C,v){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Le(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function ne(C,v){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Le(k,C,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function re(C,v){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Be(k,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const le={[ya]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},xe={[kt]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},Pe={[Jd]:i.NEVER,[nf]:i.ALWAYS,[jd]:i.LESS,[pc]:i.LEQUAL,[Qd]:i.EQUAL,[mc]:i.GEQUAL,[ef]:i.GREATER,[tf]:i.NOTEQUAL};function te(C,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===xo||v.magFilter===ss||v.magFilter===Oi||v.minFilter===qt||v.minFilter===xo||v.minFilter===ss||v.minFilter===Oi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xe[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kt||v.minFilter!==ss&&v.minFilter!==Oi||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function X(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));const V=v.source;let j=p.get(V);j===void 0&&(j={},p.set(V,j));const ae=z(v);if(ae!==C.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[ae].usedTimes++;const ge=j[C.__cacheKey];ge!==void 0&&(j[C.__cacheKey].usedTimes--,ge.usedTimes===0&&R(v)),C.__cacheKey=ae,C.__webglTexture=j[ae].texture}return k}function oe(C,v,k){return Math.floor(Math.floor(C/k)/v)}function se(C,v,k,V){const ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,V,v.data);else{ae.sort((Ue,ve)=>Ue.start-ve.start);let ge=0;for(let Ue=1;Ue<ae.length;Ue++){const ve=ae[ge],pe=ae[Ue],Ie=ve.start+ve.count,we=oe(pe.start,v.width,4),Ge=oe(ve.start,v.width,4);pe.start<=Ie+1&&we===Ge&&oe(pe.start+pe.count-1,v.width,4)===we?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++ge,ae[ge]=pe)}ae.length=ge+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ue=0,ve=ae.length;Ue<ve;Ue++){const pe=ae[Ue],Ie=Math.floor(pe.start/4),we=Math.ceil(pe.count/4),Ge=Ie%v.width,I=Math.floor(Ie/v.width),de=we,q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ge,I,de,q,k,V,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Le(C,v,k){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const j=X(C,v),ae=v.source;t.bindTexture(V,C.__webglTexture,i.TEXTURE0+k);const ge=n.get(ae);if(ae.version!==ge.__version||j===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const q=rt.getPrimaries(rt.workingColorSpace),ue=v.colorSpace===vi?null:rt.getPrimaries(v.colorSpace),ye=v.colorSpace===vi||q===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=g(v.image,!1,r.maxTextureSize);ie=Dt(v,ie);const _e=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type);let ve=_(v.internalFormat,_e,Ue,v.normalized,v.colorSpace,v.isVideoTexture);te(V,v);let pe;const Ie=v.mipmaps,we=v.isVideoTexture!==!0,Ge=ge.__version===void 0||j===!0,I=ae.dataReady,de=y(v,ie);if(v.isDepthTexture)ve=w(v.format===Bi,v.type),Ge&&(we?t.texStorage2D(i.TEXTURE_2D,1,ve,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ve,ie.width,ie.height,0,_e,Ue,null));else if(v.isDataTexture)if(Ie.length>0){we&&Ge&&t.texStorage2D(i.TEXTURE_2D,de,ve,Ie[0].width,Ie[0].height);for(let q=0,ue=Ie.length;q<ue;q++)pe=Ie[q],we?I&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,_e,Ue,pe.data):t.texImage2D(i.TEXTURE_2D,q,ve,pe.width,pe.height,0,_e,Ue,pe.data);v.generateMipmaps=!1}else we?(Ge&&t.texStorage2D(i.TEXTURE_2D,de,ve,ie.width,ie.height),I&&se(v,ie,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,ve,ie.width,ie.height,0,_e,Ue,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){we&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Ie[0].width,Ie[0].height,ie.depth);for(let q=0,ue=Ie.length;q<ue;q++)if(pe=Ie[q],v.format!==Cn)if(_e!==null)if(we){if(I)if(v.layerUpdates.size>0){const ye=zl(pe.width,pe.height,v.format,v.type);for(const J of v.layerUpdates){const fe=pe.data.subarray(J*ye/pe.data.BYTES_PER_ELEMENT,(J+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,J,pe.width,pe.height,1,_e,fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,ie.depth,_e,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ve,pe.width,pe.height,ie.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,ie.depth,_e,Ue,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,ve,pe.width,pe.height,ie.depth,0,_e,Ue,pe.data)}else{we&&Ge&&t.texStorage2D(i.TEXTURE_2D,de,ve,Ie[0].width,Ie[0].height);for(let q=0,ue=Ie.length;q<ue;q++)pe=Ie[q],v.format!==Cn?_e!==null?we?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,q,ve,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?I&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe.width,pe.height,_e,Ue,pe.data):t.texImage2D(i.TEXTURE_2D,q,ve,pe.width,pe.height,0,_e,Ue,pe.data)}else if(v.isDataArrayTexture)if(we){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,ie.width,ie.height,ie.depth),I)if(v.layerUpdates.size>0){const q=zl(ie.width,ie.height,v.format,v.type);for(const ue of v.layerUpdates){const ye=ie.data.subarray(ue*q/ie.data.BYTES_PER_ELEMENT,(ue+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ie.width,ie.height,1,_e,Ue,ye)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ue,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,_e,Ue,ie.data);else if(v.isData3DTexture)we?(Ge&&t.texStorage3D(i.TEXTURE_3D,de,ve,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ue,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,_e,Ue,ie.data);else if(v.isFramebufferTexture){if(Ge)if(we)t.texStorage2D(i.TEXTURE_2D,de,ve,ie.width,ie.height);else{let q=ie.width,ue=ie.height;for(let ye=0;ye<de;ye++)t.texImage2D(i.TEXTURE_2D,ye,ve,q,ue,0,_e,Ue,null),q>>=1,ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),ie.parentNode!==q){q.appendChild(ie),d.add(v),q.onpaint=ue=>{const ye=ue.changedElements;for(const J of d)ye.includes(J.image)&&(J.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const ye=i.RGBA,J=i.RGBA,fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,J,fe,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(we&&Ge){const q=et(Ie[0]);t.texStorage2D(i.TEXTURE_2D,de,ve,q.width,q.height)}for(let q=0,ue=Ie.length;q<ue;q++)pe=Ie[q],we?I&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e,Ue,pe):t.texImage2D(i.TEXTURE_2D,q,ve,_e,Ue,pe);v.generateMipmaps=!1}else if(we){if(Ge){const q=et(ie);t.texStorage2D(i.TEXTURE_2D,de,ve,q.width,q.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,ie)}else t.texImage2D(i.TEXTURE_2D,0,ve,_e,Ue,ie);f(v)&&S(V),ge.__version=ae.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Be(C,v,k){if(v.image.length!==6)return;const V=X(C,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const ae=n.get(j);if(j.version!==ae.__version||V===!0){t.activeTexture(i.TEXTURE0+k);const ge=rt.getPrimaries(rt.workingColorSpace),Q=v.colorSpace===vi?null:rt.getPrimaries(v.colorSpace),ie=v.colorSpace===vi||ge===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!_e&&!Ue?ve[J]=g(v.image[J],!0,r.maxCubemapSize):ve[J]=Ue?v.image[J].image:v.image[J],ve[J]=Dt(v,ve[J]);const pe=ve[0],Ie=s.convert(v.format,v.colorSpace),we=s.convert(v.type),Ge=_(v.internalFormat,Ie,we,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,de=ae.__version===void 0||V===!0,q=j.dataReady;let ue=y(v,pe);te(i.TEXTURE_CUBE_MAP,v);let ye;if(_e){I&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,pe.width,pe.height);for(let J=0;J<6;J++){ye=ve[J].mipmaps;for(let fe=0;fe<ye.length;fe++){const Ee=ye[fe];v.format!==Cn?Ie!==null?I?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ge,Ee.width,Ee.height,0,Ee.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Ee.width,Ee.height,Ie,we,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ge,Ee.width,Ee.height,0,Ie,we,Ee.data)}}}else{if(ye=v.mipmaps,I&&de){ye.length>0&&ue++;const J=et(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(Ue){I?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ie,we,ve[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,ve[J].width,ve[J].height,0,Ie,we,ve[J].data);for(let fe=0;fe<ye.length;fe++){const pt=ye[fe].image[J].image;I?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,pt.width,pt.height,Ie,we,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ge,pt.width,pt.height,0,Ie,we,pt.data)}}else{I?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,we,ve[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Ie,we,ve[J]);for(let fe=0;fe<ye.length;fe++){const Ee=ye[fe];I?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ie,we,Ee.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ge,Ie,we,Ee.image[J])}}}f(v)&&S(i.TEXTURE_CUBE_MAP),ae.__version=j.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function De(C,v,k,V,j,ae){const ge=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),ie=_(k.internalFormat,ge,Q,k.normalized,k.colorSpace),_e=n.get(v),Ue=n.get(k);if(Ue.__renderTarget=v,!_e.__hasExternalTextures){const ve=Math.max(1,v.width>>ae),pe=Math.max(1,v.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,ie,ve,pe,v.depth,0,ge,Q,null):t.texImage2D(j,ae,ie,ve,pe,0,ge,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,j,Ue.__webglTexture,0,ut(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,j,Ue.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(C,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const V=v.depthTexture,j=V&&V.isDepthTexture?V.type:null,ae=w(v.stencilBuffer,j),ge=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(v),ae,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(v),ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,C)}else{const V=v.textures;for(let j=0;j<V.length;j++){const ae=V[j],ge=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),ie=_(ae.internalFormat,ge,Q,ae.normalized,ae.colorSpace);ft(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(v),ie,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(C,v,k){const V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),te(i.TEXTURE_CUBE_MAP,v.depthTexture);const _e=s.convert(v.depthTexture.format),Ue=s.convert(v.depthTexture.type);let ve;v.depthTexture.format===ai?ve=i.DEPTH_COMPONENT24:v.depthTexture.format===Bi&&(ve=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,v.width,v.height,0,_e,Ue,null)}}else $(v.depthTexture,0);const ae=j.__webglTexture,ge=ut(v),Q=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ie=v.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ai)ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,ae,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,ae,0);else if(v.depthTexture.format===Bi)ft(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,ae,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){const v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=V}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)He(v.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?He(v.__webglFramebuffer[0],C,0):He(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),Je(v.__webglDepthbuffer[V],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Je(v.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(C,v,k){const V=n.get(C);v!==void 0&&De(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&je(C)}function nt(C){const v=C.texture,k=n.get(C),V=n.get(v);C.addEventListener("dispose",m);const j=C.textures,ae=C.isWebGLCubeRenderTarget===!0,ge=j.length>1;if(ge||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++),ae){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let ie=0;ie<v.mipmaps.length;ie++)k.__webglFramebuffer[Q][ie]=i.createFramebuffer()}else k.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Q]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ge)for(let Q=0,ie=j.length;Q<ie;Q++){const _e=n.get(j[Q]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ft(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){const ie=j[Q];k.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const _e=s.convert(ie.format,ie.colorSpace),Ue=s.convert(ie.type),ve=_(ie.internalFormat,_e,Ue,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),pe=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),te(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)De(k.__webglFramebuffer[Q][ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else De(k.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let Q=0,ie=j.length;Q<ie;Q++){const _e=j[Q],Ue=n.get(_e);let ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ue.__webglTexture),te(ve,_e),De(k.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+Q,ve,0),f(_e)&&S(ve)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,V.__webglTexture),te(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)De(k.__webglFramebuffer[ie],C,v,i.COLOR_ATTACHMENT0,Q,ie);else De(k.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,Q,0);f(v)&&S(Q),t.unbindTexture()}C.depthBuffer&&je(C)}function Ze(C){const v=C.textures;for(let k=0,V=v.length;k<V;k++){const j=v[k];if(f(j)){const ae=E(C),ge=n.get(j).__webglTexture;t.bindTexture(ae,ge),S(ae),t.unbindTexture()}}}const wt=[],Rt=[];function Mt(C){if(C.samples>0){if(ft(C)===!1){const v=C.textures,k=C.width,V=C.height;let j=i.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(C),Q=v.length>1;if(Q)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Ue=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,k,V,0,0,k,V,j,i.NEAREST),c===!0&&(wt.length=0,Rt.length=0,wt.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(wt.push(ae),Rt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Ue=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(C){return Math.min(r.maxSamples,C.samples)}function ft(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Dt(C,v){const k=C.colorSpace,V=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ks&&k!==vi&&(rt.getTransfer(k)===dt?(V!==Cn||j!==vn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",k)),v}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.getTextureUnits=Z,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X0(i,e){function t(n,r=vi){let s;const o=rt.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===Cn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===zs||n===ks||n===Hs||n===Vs)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===ba||n===wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ta||n===Ra||n===Ca||n===Pa||n===qs||n===Da)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ta)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ca)return s.COMPRESSED_R11_EAC;if(n===Pa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===Da)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===Ga||n===za||n===ka||n===Ha||n===Va||n===Wa||n===Xa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===La)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===qa||n===Ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$a)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Za||n===Ys||n===Ja)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:$0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends Ei{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,x=null;const b=typeof XRWebGLBinding<"u",g=new Y0,f={},S=t.getContextAttributes();let E=null,_=null;const w=[],y=[],T=new Ve;let m=null;const M=new xn;M.viewport=new Tt;const R=new xn;R.viewport=new Tt;const P=[M,R],D=new ip;let K=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=w[X];return oe===void 0&&(oe=new bo,w[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=w[X];return oe===void 0&&(oe=new bo,w[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=w[X];return oe===void 0&&(oe=new bo,w[X]=oe),oe.getHandSpace()};function O(X){const oe=y.indexOf(X.inputSource);if(oe===-1)return;const se=w[oe];se!==void 0&&(se.update(X.inputSource,X.frame,l||o),se.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let X=0;X<w.length;X++){const oe=y[X];oe!==null&&(y[X]=null,w[X].disconnect(oe))}K=null,Z=null,g.reset();for(const X in f)delete f[X];e.setRenderTarget(E),p=null,h=null,d=null,r=null,_=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Le=null,Be=null;S.depth&&(Be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?Bi:ai,Le=S.stencil?Yr:Hn);const De={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new kn(h.textureWidth,h.textureHeight,{format:Cn,type:vn,depthTexture:new vr(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new kn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(X){for(let oe=0;oe<X.removed.length;oe++){const se=X.removed[oe],Le=y.indexOf(se);Le>=0&&(y[Le]=null,w[Le].disconnect(se))}for(let oe=0;oe<X.added.length;oe++){const se=X.added[oe];let Le=y.indexOf(se);if(Le===-1){for(let De=0;De<w.length;De++)if(De>=y.length){y.push(se),Le=De;break}else if(y[De]===null){y[De]=se,Le=De;break}if(Le===-1)break}const Be=w[Le];Be&&Be.connect(se)}}const $=new N,ee=new N;function ne(X,oe,se){$.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);const Le=$.distanceTo(ee),Be=oe.projectionMatrix.elements,De=se.projectionMatrix.elements,Je=Be[14]/(Be[10]-1),He=Be[14]/(Be[10]+1),je=(Be[9]+1)/Be[5],Qe=(Be[9]-1)/Be[5],nt=(Be[8]-1)/Be[0],Ze=(De[8]+1)/De[0],wt=Je*nt,Rt=Je*Ze,Mt=Le/(-nt+Ze),ut=Mt*-nt;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ut),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Be[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ft=Je+Mt,U=He+Mt,Dt=wt-ut,et=Rt+(Le-ut),C=je*He/U*ft,v=Qe*He/U*ft;X.projectionMatrix.makePerspective(Dt,et,C,v,ft,U),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let oe=X.near,se=X.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(se=g.depthFar)),D.near=R.near=M.near=oe,D.far=R.far=M.far=se,(K!==D.near||Z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),K=D.near,Z=D.far),D.layers.mask=X.layers.mask|6,M.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Le=X.parent,Be=D.cameras;re(D,Le);for(let De=0;De<Be.length;De++)re(Be[De],Le);Be.length===2?ne(D,M,R):D.projectionMatrix.copy(M.projectionMatrix),le(X,D,Le)};function le(X,oe,se){se===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Kr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(X){return f[X]};let xe=null;function Pe(X,oe){if(u=oe.getViewerPose(l||o),x=oe,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Le=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let He=0;He<se.length;He++){const je=se[He];let Qe=null;if(p!==null)Qe=p.getViewport(je);else{const Ze=d.getViewSubImage(h,je);Qe=Ze.viewport,He===0&&(e.setRenderTargetTextures(_,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(_))}let nt=P[He];nt===void 0&&(nt=new xn,nt.layers.enable(He),nt.viewport=new Tt,P[He]=nt),nt.matrix.fromArray(je.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(je.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(D.matrix.copy(nt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push(nt)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const He=d.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Be&&Be.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<se.length;He++){const je=se[He].camera;if(je){let Qe=f[je];Qe||(Qe=new mh,f[je]=Qe);const nt=d.getCameraImage(je);Qe.sourceTexture=nt}}}}for(let se=0;se<w.length;se++){const Le=y[se],Be=w[se];Le!==null&&Be!==void 0&&Be.update(Le,oe,l||o)}xe&&xe(X,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),x=null}const te=new vh;te.setAnimationLoop(Pe),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const Z0=new vt,Ah=new qe;Ah.set(-1,0,0,0,1,0,0,0,1);function J0(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,gh(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,S,E,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),b(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,S,E):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===rn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===rn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,_=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ah),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,S,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=E*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,S){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){const S=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function j0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){const y=w.program;n.uniformBlockBinding(_,y)}function l(_,w){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",S));const T=w.program;n.updateUBOMapping(_,T);const m=e.render.frame;s[_.id]!==m&&(h(_),s[_.id]=m)}function u(_){const w=d();_.__bindingPointIndex=w;const y=i.createBuffer(),T=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=r[_.id],y=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let m=0,M=y.length;m<M;m++){const R=y[m];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)p(R[P],m,P,T);else p(R,m,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,w,y,T){if(b(_,w,y,T)===!0){const m=_.__offset,M=_.value;if(Array.isArray(M)){let R=0;for(let P=0;P<M.length;P++){const D=M[P],K=f(D);x(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,_.__data)}}function x(_,w,y){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,y)}function b(_,w,y,T){const m=_.value,M=w+"_"+y;if(T[M]===void 0)return typeof m=="number"||typeof m=="boolean"?T[M]=m:ArrayBuffer.isView(m)?T[M]=m.slice():T[M]=m.clone(),!0;{const R=T[M];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return T[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function g(_){const w=_.uniforms;let y=0;const T=16;for(let M=0,R=w.length;M<R;M++){const P=Array.isArray(w[M])?w[M]:[w[M]];for(let D=0,K=P.length;D<K;D++){const Z=P[D],O=Array.isArray(Z.value)?Z.value:[Z.value];for(let H=0,z=O.length;H<z;H++){const $=O[H],ee=f($),ne=y%T,re=ne%ee.boundary,le=ne+re;y+=re,le!==0&&T-le<ee.storage&&(y+=T-le),Z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=ee.storage}}}const m=y%T;return m>0&&(y+=T-m),_.__size=y,_.__cache={},this}function f(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",_),w}function S(_){const w=_.target;w.removeEventListener("dispose",S);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function E(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:E}}const Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function ex(){return On===null&&(On=new fh(Q0,16,16,zi,oi),On.name="DFG_LUT",On.minFilter=qt,On.magFilter=qt,On.wrapS=ti,On.wrapT=ti,On.generateMipmaps=!1,On.needsUpdate=!0),On}class tx{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const b=p,g=new Set([fc,dc,hc]),f=new Set([vn,Hn,qr,Yr,cc,lc]),S=new Uint32Array(4),E=new Int32Array(4),_=new N;let w=null,y=null;const T=[],m=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,K=null,Z=null,O=null;this._outputColorSpace=un;let H=0,z=0,$=null,ee=-1,ne=null;const re=new Tt,le=new Tt;let xe=null;const Pe=new at(0);let te=0,X=t.width,oe=t.height,se=1,Le=null,Be=null;const De=new Tt(0,0,X,oe),Je=new Tt(0,0,X,oe);let He=!1;const je=new vc;let Qe=!1,nt=!1;const Ze=new vt,wt=new N,Rt=new Tt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ft(){return $===null?se:1}let U=n;function Dt(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Ft,!1),U===null){const F="webgl2";if(U=Dt(F,A),U===null)throw Dt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw ot("WebGLRenderer: "+A.message),A}let et,C,v,k,V,j,ae,ge,Q,ie,_e,Ue,ve,pe,Ie,we,Ge,I,de,q,ue,ye,J;function fe(){et=new e_(U),et.init(),ue=new X0(U,et),C=new $g(U,et,e,ue),v=new V0(U,et),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),K=U.createFramebuffer(),Z=U.createFramebuffer(),O=U.createFramebuffer(),k=new i_(U),V=new C0,j=new W0(U,et,v,V,C,ue,k),ae=new Qg(R),ge=new ap(U),ye=new Wg(U,ge),Q=new t_(U,ge,k,ye),ie=new s_(U,Q,ge,ye,k),I=new r_(U,C,j),Ie=new qg(V),_e=new R0(R,ae,et,C,ye,Ie),Ue=new J0(R,V),ve=new D0,pe=new O0(et),Ge=new Vg(R,ae,v,ie,x,c),we=new H0(R,ie,C),J=new j0(U,k,C,v),de=new Xg(U,et,k),q=new n_(U,et,k),k.programs=_e.programs,R.capabilities=C,R.extensions=et,R.properties=V,R.renderLists=ve,R.shadowMap=we,R.state=v,R.info=k}fe(),b!==vn&&(M=new a_(b,t.width,t.height,a,r,s));const Ee=new K0(R,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(X,oe,!1))},this.getSize=function(A){return A.set(X,oe)},this.setSize=function(A,F,Y=!0){if(Ee.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,oe=F,t.width=Math.floor(A*se),t.height=Math.floor(F*se),Y===!0&&(t.style.width=A+"px",t.style.height=F+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*se,oe*se).floor()},this.setDrawingBufferSize=function(A,F,Y){X=A,oe=F,se=Y,t.width=Math.floor(A*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(b===vn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(re)},this.getViewport=function(A){return A.copy(De)},this.setViewport=function(A,F,Y,W){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,F,Y,W),v.viewport(re.copy(De).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(Je)},this.setScissor=function(A,F,Y,W){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,F,Y,W),v.scissor(le.copy(Je).multiplyScalar(se).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){v.setScissorTest(He=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Y=!0){let W=0;if(A){let B=!1;if($!==null){const Me=$.texture.format;B=g.has(Me)}if(B){const Me=$.texture.type,Te=f.has(Me),he=Ge.getClearColor(),Ne=Ge.getClearAlpha(),Fe=he.r,We=he.g,Ye=he.b;Te?(S[0]=Fe,S[1]=We,S[2]=Ye,S[3]=Ne,U.clearBufferuiv(U.COLOR,0,S)):(E[0]=Fe,E[1]=We,E[2]=Ye,E[3]=Ne,U.clearBufferiv(U.COLOR,0,E))}else W|=U.COLOR_BUFFER_BIT}F&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Ft,!1),Ge.dispose(),ve.dispose(),pe.dispose(),V.dispose(),ae.dispose(),ie.dispose(),ye.dispose(),J.dispose(),_e.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ri),Ee.removeEventListener("sessionend",dn),fn.stop()};function pt(A){A.preventDefault(),hl("WebGLRenderer: Context Lost."),P=!0}function ct(){hl("WebGLRenderer: Context Restored."),P=!1;const A=k.autoReset,F=we.enabled,Y=we.autoUpdate,W=we.needsUpdate,B=we.type;fe(),k.autoReset=A,we.enabled=F,we.autoUpdate=Y,we.needsUpdate=W,we.type=B}function Ft(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const F=A.target;F.removeEventListener("dispose",Yt),Vi(F)}function Vi(A){wi(A),V.remove(A)}function wi(A){const F=V.get(A).programs;F!==void 0&&(F.forEach(function(Y){_e.releaseProgram(Y)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,W,B,Me){F===null&&(F=Mt);const Te=B.isMesh&&B.matrixWorld.determinantAffine()<0,he=Qr(A,F,Y,W,B);v.setMaterial(W,Te);let Ne=Y.index,Fe=1;if(W.wireframe===!0){if(Ne=Q.getWireframeAttribute(Y),Ne===void 0)return;Fe=2}const We=Y.drawRange,Ye=Y.attributes.position;let Oe=We.start*Fe,lt=(We.start+We.count)*Fe;Me!==null&&(Oe=Math.max(Oe,Me.start*Fe),lt=Math.min(lt,(Me.start+Me.count)*Fe)),Ne!==null?(Oe=Math.max(Oe,0),lt=Math.min(lt,Ne.count)):Ye!=null&&(Oe=Math.max(Oe,0),lt=Math.min(lt,Ye.count));const Et=lt-Oe;if(Et<0||Et===1/0)return;ye.setup(B,W,he,Y,Ne);let St,ht=de;if(Ne!==null&&(St=ge.get(Ne),ht=q,ht.setIndex(St)),B.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*ft()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(B.isLine){let At=W.linewidth;At===void 0&&(At=1),v.setLineWidth(At*ft()),B.isLineSegments?ht.setMode(U.LINES):B.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else B.isPoints?ht.setMode(U.POINTS):B.isSprite&&ht.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(et.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,Ae=B._multiDrawCounts,Vt=B._multiDrawCount,it=Ne?ge.get(Ne).bytesPerElement:1,jt=V.get(W).currentProgram.getUniforms();for(let mn=0;mn<Vt;mn++)jt.setValue(U,"_gl_DrawID",mn),ht.render(At[mn]/it,Ae[mn])}else if(B.isInstancedMesh)ht.renderInstances(Oe,Et,B.count);else if(Y.isInstancedBufferGeometry){const At=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ae=Math.min(Y.instanceCount,At);ht.renderInstances(Oe,Et,Ae)}else ht.render(Oe,Et)};function Ai(A,F,Y){A.transparent===!0&&A.side===Qn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Ln(A,F,Y),A.side=Si,A.needsUpdate=!0,Ln(A,F,Y),A.side=Qn):Ln(A,F,Y)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),y=pe.get(Y),y.init(F),m.push(y),Y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),A!==Y&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights();const W=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Me=B.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const he=Me[Te];Ai(he,Y,B),W.add(he)}else Ai(Me,Y,B),W.add(Me)}),y=m.pop(),W},this.compileAsync=function(A,F,Y=null){const W=this.compile(A,F,Y);return new Promise(B=>{function Me(){if(W.forEach(function(Te){V.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){B(A);return}setTimeout(Me,10)}et.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ti=null;function hn(A){Ti&&Ti(A)}function Ri(){fn.stop()}function dn(){fn.start()}const fn=new vh;fn.setAnimationLoop(hn),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(A){Ti=A,Ee.setAnimationLoop(A),A===null?fn.stop():fn.start()},Ee.addEventListener("sessionstart",Ri),Ee.addEventListener("sessionend",dn),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,F);const Y=Ee.enabled===!0&&Ee.isPresenting===!0,W=M!==null&&($===null||Y)&&M.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(F),F=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,F,$),y=pe.get(A,m.length),y.init(F),y.state.textureUnits=j.getTextureUnits(),m.push(y),Ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(Ze,Gn,F.reversedDepth),nt=this.localClippingEnabled,Qe=Ie.init(this.clippingPlanes,nt),w=ve.get(A,T.length),w.init(),T.push(w),Ee.enabled===!0&&Ee.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&li(Te,F,-1/0,R.sortObjects)}li(A,F,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(Le,Be,F.reversedDepth),ut=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ut&&Ge.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ie.beginShadows();const B=y.state.shadowsArray;if(we.render(B,A,F),Qe===!0&&Ie.endShadows(),(W&&M.hasRenderPass())===!1){const Te=w.opaque,he=w.transmissive;if(y.setupLights(),F.isArrayCamera){const Ne=F.cameras;if(he.length>0)for(let Fe=0,We=Ne.length;Fe<We;Fe++){const Ye=Ne[Fe];pn(Te,he,A,Ye)}ut&&Ge.render(A);for(let Fe=0,We=Ne.length;Fe<We;Fe++){const Ye=Ne[Fe];Ci(w,A,Ye,Ye.viewport)}}else he.length>0&&pn(Te,he,A,F),ut&&Ge.render(A),Ci(w,A,F)}$!==null&&z===0&&(j.updateMultisampleRenderTarget($),j.updateRenderTargetMipmap($)),W&&M.end(R),A.isScene===!0&&A.onAfterRender(R,A,F),ye.resetDefaultState(),ee=-1,ne=null,m.pop(),m.length>0?(y=m[m.length-1],j.setTextureUnits(y.state.textureUnits),Qe===!0&&Ie.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,D!==null&&D.renderEnd()};function li(A,F,Y,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)y.pushLightProbeGrid(A);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||je.intersectsSprite(A)){W&&Rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ze);const Te=ie.update(A),he=A.material;he.visible&&w.push(A,Te,he,Y,Rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||je.intersectsObject(A))){const Te=ie.update(A),he=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Rt.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Rt.copy(Te.boundingSphere.center)),Rt.applyMatrix4(A.matrixWorld).applyMatrix4(Ze)),Array.isArray(he)){const Ne=Te.groups;for(let Fe=0,We=Ne.length;Fe<We;Fe++){const Ye=Ne[Fe],Oe=he[Ye.materialIndex];Oe&&Oe.visible&&w.push(A,Te,Oe,Y,Rt.z,Ye)}}else he.visible&&w.push(A,Te,he,Y,Rt.z,null)}}const Me=A.children;for(let Te=0,he=Me.length;Te<he;Te++)li(Me[Te],F,Y,W)}function Ci(A,F,Y,W){const{opaque:B,transmissive:Me,transparent:Te}=A;y.setupLightsView(Y),Qe===!0&&Ie.setGlobalState(R.clippingPlanes,Y),W&&v.viewport(re.copy(W)),B.length>0&&Mn(B,F,Y),Me.length>0&&Mn(Me,F,Y),Te.length>0&&Mn(Te,F,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pn(A,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[W.id]===void 0){const Oe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:Oe?oi:vn,minFilter:Oi,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Me=y.state.transmissionRenderTarget[W.id],Te=W.viewport||re;Me.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const he=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(Pe),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),ut&&Ge.render(Y);const We=R.toneMapping;R.toneMapping=zn;const Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),Qe===!0&&Ie.setGlobalState(R.clippingPlanes,W),Mn(A,Y,W),j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me),et.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let lt=0,Et=F.length;lt<Et;lt++){const St=F[lt],{object:ht,geometry:At,material:Ae,group:Vt}=St;if(Ae.side===Qn&&ht.layers.test(W.layers)){const it=Ae.side;Ae.side=rn,Ae.needsUpdate=!0,Xn(ht,Y,W,At,Ae,Vt),Ae.side=it,Ae.needsUpdate=!0,Oe=!0}}Oe===!0&&(j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me))}R.setRenderTarget(he,Ne,Fe),R.setClearColor(Pe,te),Ye!==void 0&&(W.viewport=Ye),R.toneMapping=We}function Mn(A,F,Y){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,Me=A.length;B<Me;B++){const Te=A[B],{object:he,geometry:Ne,group:Fe}=Te;let We=Te.material;We.allowOverride===!0&&W!==null&&(We=W),he.layers.test(Y.layers)&&Xn(he,F,Y,Ne,We,Fe)}}function Xn(A,F,Y,W,B,Me){A.onBeforeRender(R,F,Y,W,B,Me),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(R,F,Y,W,A,Me),B.transparent===!0&&B.side===Qn&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,R.renderBufferDirect(Y,F,W,B,A,Me),B.side=Si,B.needsUpdate=!0,R.renderBufferDirect(Y,F,W,B,A,Me),B.side=Qn):R.renderBufferDirect(Y,F,W,B,A,Me),A.onAfterRender(R,F,Y,W,B,Me)}function Ln(A,F,Y){F.isScene!==!0&&(F=Mt);const W=V.get(A),B=y.state.lights,Me=y.state.shadowsArray,Te=B.state.version,he=_e.getParameters(A,B.state,Me,F,Y,y.state.lightProbeGridArray),Ne=_e.getProgramCacheKey(he);let Fe=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const We=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=ae.get(A.envMap||W.environment,We),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Yt),Fe=new Map,W.programs=Fe);let Ye=Fe.get(Ne);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Te)return Gt(A,he),Ye}else he.uniforms=_e.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Y,he),A.onBeforeCompile(he,R),Ye=_e.acquireProgram(he,Ne),Fe.set(Ne,Ye),W.uniforms=he.uniforms;const Oe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=Ie.uniform),Gt(A,he),W.needsLights=ts(A),W.lightsStateVersion=Te,W.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.lightProbeGrid=y.state.lightProbeGridArray.length>0,W.currentProgram=Ye,W.uniformsList=null,Ye}function Wi(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Gt(A,F){const Y=V.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function uo(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let Y=0,W=A.length;Y<W;Y++){const B=A[Y];if(B.texture!==null&&B.boundingBox.containsPoint(_))return B}return null}function Qr(A,F,Y,W,B){F.isScene!==!0&&(F=Mt),j.resetTextureUnits();const Me=F.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,he=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rt.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=ae.get(W.envMap||Te,Ne),We=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color;let St=zn;W.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(St=R.toneMapping);const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=ht!==void 0?ht.length:0,Ae=V.get(W),Vt=y.state.lights;if(Qe===!0&&(nt===!0||A!==ne)){const mt=A===ne&&W.id===ee;Ie.setState(W,A,mt)}let it=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Vt.state.version||Ae.outputColorSpace!==he||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Fe||W.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ie.numPlanes||Ae.numIntersection!==Ie.numIntersection)||Ae.vertexAlphas!==We||Ae.vertexTangents!==Ye||Ae.morphTargets!==Oe||Ae.morphNormals!==lt||Ae.morphColors!==Et||Ae.toneMapping!==St||Ae.morphTargetsCount!==At||!!Ae.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Ae.__version=W.version);let jt=Ae.currentProgram;it===!0&&(jt=Ln(W,F,B),D&&W.isNodeMaterial&&D.onUpdateProgram(W,jt,Ae));let mn=!1,In=!1,Nn=!1;const st=jt.getUniforms(),bt=Ae.uniforms;if(v.useProgram(jt.program)&&(mn=!0,In=!0,Nn=!0),W.id!==ee&&(ee=W.id,In=!0),Ae.needsLights){const mt=uo(y.state.lightProbeGridArray,B);Ae.lightProbeGrid!==mt&&(Ae.lightProbeGrid=mt,In=!0)}if(mn||ne!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),st.setValue(U,"projectionMatrix",A.projectionMatrix),st.setValue(U,"viewMatrix",A.matrixWorldInverse);const Qt=st.map.cameraPosition;Qt!==void 0&&Qt.setValue(U,wt.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&st.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,In=!0,Nn=!0)}if(Ae.needsLights&&(Vt.state.directionalShadowMap.length>0&&st.setValue(U,"directionalShadowMap",Vt.state.directionalShadowMap,j),Vt.state.spotShadowMap.length>0&&st.setValue(U,"spotShadowMap",Vt.state.spotShadowMap,j),Vt.state.pointShadowMap.length>0&&st.setValue(U,"pointShadowMap",Vt.state.pointShadowMap,j)),B.isSkinnedMesh){st.setOptional(U,B,"bindMatrix"),st.setOptional(U,B,"bindMatrixInverse");const mt=B.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),st.setValue(U,"boneTexture",mt.boneTexture,j))}B.isBatchedMesh&&(st.setOptional(U,B,"batchingTexture"),st.setValue(U,"batchingTexture",B._matricesTexture,j),st.setOptional(U,B,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",B._indirectTexture,j),st.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",B._colorsTexture,j));const Sn=Y.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&I.update(B,Y,jt),(In||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,st.setValue(U,"receiveShadow",B.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(bt.envMapIntensity.value=F.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=ex()),In){if(st.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&es(bt,Nn),Me&&W.fog===!0&&Ue.refreshFogUniforms(bt,Me),Ue.refreshMaterialUniforms(bt,W,se,oe,y.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){const mt=Ae.lightProbeGrid;bt.probesSH.value=mt.texture,bt.probesMin.value.copy(mt.boundingBox.min),bt.probesMax.value.copy(mt.boundingBox.max),bt.probesResolution.value.copy(mt.resolution)}Xs.upload(U,Wi(Ae),bt,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xs.upload(U,Wi(Ae),bt,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&st.setValue(U,"center",B.center),st.setValue(U,"modelViewMatrix",B.modelViewMatrix),st.setValue(U,"normalMatrix",B.normalMatrix),st.setValue(U,"modelMatrix",B.matrixWorld),W.uniformsGroups!==void 0){const mt=W.uniformsGroups;for(let Qt=0,$n=mt.length;Qt<$n;Qt++){const Ar=mt[Qt];J.update(Ar,jt),J.bind(Ar,jt)}}return jt}function es(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ts(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,F,Y){const W=V.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),V.get(A.texture).__webglTexture=F,V.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const Y=V.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){$=A,H=F,z=Y;let W=null,B=!1,Me=!1;if(A){const he=V.get(A);if(he.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),re.copy(A.viewport),le.copy(A.scissor),xe=A.scissorTest,v.viewport(re),v.scissor(le),v.setScissorTest(xe),ee=-1;return}else if(he.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(he.__hasExternalTextures)j.rebindTextures(A,V.get(A.texture).__webglTexture,V.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(he.__boundDepthTexture!==We){if(We!==null&&V.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Fe=V.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?W=Fe[F][Y]:W=Fe[F],B=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?W=V.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[Y]:W=Fe,re.copy(A.viewport),le.copy(A.scissor),xe=A.scissorTest}else re.copy(De).multiplyScalar(se).floor(),le.copy(Je).multiplyScalar(se).floor(),xe=He;if(Y!==0&&(W=K),v.bindFramebuffer(U.FRAMEBUFFER,W)&&v.drawBuffers(A,W),v.viewport(re),v.scissor(le),v.setScissorTest(xe),B){const he=V.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,Y)}else if(Me){const he=F;for(let Ne=0;Ne<A.textures.length;Ne++){const Fe=V.get(A.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,Y,he)}}else if(A!==null&&Y!==0){const he=V.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,Y)}ee=-1},this.readRenderTargetPixels=function(A,F,Y,W,B,Me,Te,he=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){v.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const Fe=A.textures[he],We=Fe.format,Ye=Fe.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!C.textureFormatReadable(We)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ye)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&Y>=0&&Y<=A.height-B&&U.readPixels(F,Y,W,B,ue.convert(We),ue.convert(Ye),Me)}finally{const Fe=$!==null?V.get($).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,W,B,Me,Te,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(F>=0&&F<=A.width-W&&Y>=0&&Y<=A.height-B){v.bindFramebuffer(U.FRAMEBUFFER,Ne);const Fe=A.textures[he],We=Fe.format,Ye=Fe.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!C.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(F,Y,W,B,ue.convert(We),ue.convert(Ye),0);const lt=$!==null?V.get($).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,lt);const Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await of(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.deleteBuffer(Oe),U.deleteSync(Et),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Y=0){const W=Math.pow(2,-Y),B=Math.floor(A.image.width*W),Me=Math.floor(A.image.height*W),Te=F!==null?F.x:0,he=F!==null?F.y:0;j.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Te,he,B,Me),v.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,W=null,B=0,Me=0){let Te,he,Ne,Fe,We,Ye,Oe,lt,Et;const St=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(Y!==null)Te=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,Ne=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,We=Y.min.y,Ye=Y.isBox3?Y.min.z:0;else{const bt=Math.pow(2,-B);Te=Math.floor(St.width*bt),he=Math.floor(St.height*bt),A.isDataArrayTexture?Ne=St.depth:A.isData3DTexture?Ne=Math.floor(St.depth*bt):Ne=1,Fe=0,We=0,Ye=0}W!==null?(Oe=W.x,lt=W.y,Et=W.z):(Oe=0,lt=0,Et=0);const ht=ue.convert(F.format),At=ue.convert(F.type);let Ae;F.isData3DTexture?(j.setTexture3D(F,0),Ae=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),Ae=U.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),Ae=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Vt=v.getParameter(U.UNPACK_ROW_LENGTH),it=v.getParameter(U.UNPACK_IMAGE_HEIGHT),jt=v.getParameter(U.UNPACK_SKIP_PIXELS),mn=v.getParameter(U.UNPACK_SKIP_ROWS),In=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(U.UNPACK_SKIP_ROWS,We),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const Nn=A.isDataArrayTexture||A.isData3DTexture,st=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const bt=V.get(A),Sn=V.get(F),mt=V.get(bt.__renderTarget),Qt=V.get(Sn.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let $n=0;$n<Ne;$n++)Nn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(A).__webglTexture,B,Ye+$n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(F).__webglTexture,Me,Et+$n)),U.blitFramebuffer(Fe,We,Te,he,Oe,lt,Te,he,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||V.has(A)){const bt=V.get(A),Sn=V.get(F);v.bindFramebuffer(U.READ_FRAMEBUFFER,Z),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let mt=0;mt<Ne;mt++)Nn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,B,Ye+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,B),st?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Sn.__webglTexture,Me,Et+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Sn.__webglTexture,Me),B!==0?U.blitFramebuffer(Fe,We,Te,he,Oe,lt,Te,he,U.COLOR_BUFFER_BIT,U.NEAREST):st?U.copyTexSubImage3D(Ae,Me,Oe,lt,Et+mt,Fe,We,Te,he):U.copyTexSubImage2D(Ae,Me,Oe,lt,Fe,We,Te,he);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else st?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ae,Me,Oe,lt,Et,Te,he,Ne,ht,At,St.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,Me,Oe,lt,Et,Te,he,Ne,ht,St.data):U.texSubImage3D(Ae,Me,Oe,lt,Et,Te,he,Ne,ht,At,St):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,Oe,lt,Te,he,ht,At,St.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,Oe,lt,St.width,St.height,ht,St.data):U.texSubImage2D(U.TEXTURE_2D,Me,Oe,lt,Te,he,ht,At,St);v.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),v.pixelStorei(U.UNPACK_SKIP_PIXELS,jt),v.pixelStorei(U.UNPACK_SKIP_ROWS,mn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,In),Me===0&&F.generateMipmaps&&U.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(A){V.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){H=0,z=0,$=null,v.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const uu={type:"change"},Mc={type:"start"},Th={type:"end"},Is=new so,hu=new jn,nx=Math.cos(70*tn.DEG2RAD),Lt=new N,en=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class ix extends sp{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Vn,this._lastTargetPosition=new N,this._quat=new Vn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qa,this._sphericalDelta=new Qa,this._scale=1,this._panOffset=new N,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new N,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sx.bind(this),this._onPointerDown=rx.bind(this),this._onPointerUp=ox.bind(this),this._onContextMenu=fx.bind(this),this._onMouseWheel=lx.bind(this),this._onKeyDown=ux.bind(this),this._onTouchStart=hx.bind(this),this._onTouchMove=dx.bind(this),this._onMouseDown=ax.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=px.bind(this),this._interceptControlUp=mx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<nx?this.object.lookAt(this.target):(hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(hu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ox(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Th),this.state=gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ax(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=gt.DOLLY;break;case fr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}break;case fr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Mc)}function cx(i){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lx(i){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(i.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Th))}function ux(i){this.enabled!==!1&&this._handleKeyDown(i)}function hx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case dr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=gt.TOUCH_ROTATE;break;case dr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case dr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=gt.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Mc)}function dx(i){switch(this._trackPointer(i),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=gt.NONE}}function fx(i){this.enabled!==!1&&i.preventDefault()}function px(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ns={exports:{}},du;function _x(){if(du)return Ns.exports;du=1;var i=typeof Reflect=="object"?Reflect:null,e=i&&typeof i.apply=="function"?i.apply:function(w,y,T){return Function.prototype.apply.call(w,y,T)},t;i&&typeof i.ownKeys=="function"?t=i.ownKeys:Object.getOwnPropertySymbols?t=function(w){return Object.getOwnPropertyNames(w).concat(Object.getOwnPropertySymbols(w))}:t=function(w){return Object.getOwnPropertyNames(w)};function n(_){console&&console.warn&&console.warn(_)}var r=Number.isNaN||function(w){return w!==w};function s(){s.init.call(this)}Ns.exports=s,Ns.exports.once=f,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(_){if(typeof _!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof _)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(_){if(typeof _!="number"||_<0||r(_))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+_+".");o=_}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(w){if(typeof w!="number"||w<0||r(w))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+w+".");return this._maxListeners=w,this};function c(_){return _._maxListeners===void 0?s.defaultMaxListeners:_._maxListeners}s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(w){for(var y=[],T=1;T<arguments.length;T++)y.push(arguments[T]);var m=w==="error",M=this._events;if(M!==void 0)m=m&&M.error===void 0;else if(!m)return!1;if(m){var R;if(y.length>0&&(R=y[0]),R instanceof Error)throw R;var P=new Error("Unhandled error."+(R?" ("+R.message+")":""));throw P.context=R,P}var D=M[w];if(D===void 0)return!1;if(typeof D=="function")e(D,this,y);else for(var K=D.length,Z=x(D,K),T=0;T<K;++T)e(Z[T],this,y);return!0};function l(_,w,y,T){var m,M,R;if(a(y),M=_._events,M===void 0?(M=_._events=Object.create(null),_._eventsCount=0):(M.newListener!==void 0&&(_.emit("newListener",w,y.listener?y.listener:y),M=_._events),R=M[w]),R===void 0)R=M[w]=y,++_._eventsCount;else if(typeof R=="function"?R=M[w]=T?[y,R]:[R,y]:T?R.unshift(y):R.push(y),m=c(_),m>0&&R.length>m&&!R.warned){R.warned=!0;var P=new Error("Possible EventEmitter memory leak detected. "+R.length+" "+String(w)+" listeners added. Use emitter.setMaxListeners() to increase limit");P.name="MaxListenersExceededWarning",P.emitter=_,P.type=w,P.count=R.length,n(P)}return _}s.prototype.addListener=function(w,y){return l(this,w,y,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(w,y){return l(this,w,y,!0)};function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(_,w,y){var T={fired:!1,wrapFn:void 0,target:_,type:w,listener:y},m=u.bind(T);return m.listener=y,T.wrapFn=m,m}s.prototype.once=function(w,y){return a(y),this.on(w,d(this,w,y)),this},s.prototype.prependOnceListener=function(w,y){return a(y),this.prependListener(w,d(this,w,y)),this},s.prototype.removeListener=function(w,y){var T,m,M,R,P;if(a(y),m=this._events,m===void 0)return this;if(T=m[w],T===void 0)return this;if(T===y||T.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete m[w],m.removeListener&&this.emit("removeListener",w,T.listener||y));else if(typeof T!="function"){for(M=-1,R=T.length-1;R>=0;R--)if(T[R]===y||T[R].listener===y){P=T[R].listener,M=R;break}if(M<0)return this;M===0?T.shift():b(T,M),T.length===1&&(m[w]=T[0]),m.removeListener!==void 0&&this.emit("removeListener",w,P||y)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(w){var y,T,m;if(T=this._events,T===void 0)return this;if(T.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):T[w]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete T[w]),this;if(arguments.length===0){var M=Object.keys(T),R;for(m=0;m<M.length;++m)R=M[m],R!=="removeListener"&&this.removeAllListeners(R);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=T[w],typeof y=="function")this.removeListener(w,y);else if(y!==void 0)for(m=y.length-1;m>=0;m--)this.removeListener(w,y[m]);return this};function h(_,w,y){var T=_._events;if(T===void 0)return[];var m=T[w];return m===void 0?[]:typeof m=="function"?y?[m.listener||m]:[m]:y?g(m):x(m,m.length)}s.prototype.listeners=function(w){return h(this,w,!0)},s.prototype.rawListeners=function(w){return h(this,w,!1)},s.listenerCount=function(_,w){return typeof _.listenerCount=="function"?_.listenerCount(w):p.call(_,w)},s.prototype.listenerCount=p;function p(_){var w=this._events;if(w!==void 0){var y=w[_];if(typeof y=="function")return 1;if(y!==void 0)return y.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function x(_,w){for(var y=new Array(w),T=0;T<w;++T)y[T]=_[T];return y}function b(_,w){for(;w+1<_.length;w++)_[w]=_[w+1];_.pop()}function g(_){for(var w=new Array(_.length),y=0;y<w.length;++y)w[y]=_[y].listener||_[y];return w}function f(_,w){return new Promise(function(y,T){function m(R){_.removeListener(w,M),T(R)}function M(){typeof _.removeListener=="function"&&_.removeListener("error",m),y([].slice.call(arguments))}E(_,w,M,{once:!0}),w!=="error"&&S(_,m,{once:!0})})}function S(_,w,y){typeof _.on=="function"&&E(_,"error",w,y)}function E(_,w,y,T){if(typeof _.on=="function")T.once?_.once(w,y):_.on(w,y);else if(typeof _.addEventListener=="function")_.addEventListener(w,function m(M){T.once&&_.removeEventListener(w,m),y(M)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof _)}return Ns.exports}var xx=_x();function vx(){const i=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])i[n]=arguments[e][n];return i}let It=vx;typeof Object.assign=="function"&&(It=Object.assign);function yn(i,e,t,n){const r=i._nodes.get(e);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[t]||r.undirected&&r.undirected[t]:n==="directed"?s=r.out&&r.out[t]:s=r.undirected&&r.undirected[t]),s}function zt(i){return typeof i=="object"&&i!==null}function Rh(i){let e;for(e in i)return!1;return!0}function _n(i,e,t){Object.defineProperty(i,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function An(i,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(i,e,n)}function fu(i){return!(!zt(i)||i.attributes&&!Array.isArray(i.attributes))}function yx(){let i=Math.floor(Math.random()*256)&255;return()=>i++}function ri(){const i=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=i.length)return{done:!0};e=i[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function Er(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class Sc extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class be extends Sc{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,be.prototype.constructor)}}class me extends Sc{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,me.prototype.constructor)}}class ke extends Sc{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ke.prototype.constructor)}}function Ch(i,e){this.key=i,this.attributes=e,this.clear()}Ch.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function Ph(i,e){this.key=i,this.attributes=e,this.clear()}Ph.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function Dh(i,e){this.key=i,this.attributes=e,this.clear()}Dh.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function br(i,e,t,n,r){this.key=e,this.attributes=r,this.undirected=i,this.source=t,this.target=n}br.prototype.attach=function(){let i="out",e="in";this.undirected&&(i=e="undirected");const t=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};br.prototype.attachMulti=function(){let i="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(i=e="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[e][t]=this};br.prototype.detach=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][i]};br.prototype.detachMulti=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][i]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const Lh=0,Ih=1,Mx=2,Nh=3;function ci(i,e,t,n,r,s,o){let a,c,l,u;if(n=""+n,t===Lh){if(a=i._nodes.get(n),!a)throw new me(`Graph.${e}: could not find the "${n}" node in the graph.`);l=r,u=s}else if(t===Nh){if(r=""+r,c=i._edges.get(r),!c)throw new me(`Graph.${e}: could not find the "${r}" edge in the graph.`);const d=c.source.key,h=c.target.key;if(n===d)a=c.target;else if(n===h)a=c.source;else throw new me(`Graph.${e}: the "${n}" node is not attached to the "${r}" edge (${d}, ${h}).`);l=s,u=o}else{if(c=i._edges.get(n),!c)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===Ih?a=c.source:a=c.target,l=r,u=s}return[a,l,u]}function Sx(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);return o.attributes[a]}}function Ex(i,e,t){i.prototype[e]=function(n,r){const[s]=ci(this,e,t,n,r);return s.attributes}}function bx(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);return o.attributes.hasOwnProperty(a)}}function wx(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,c,l]=ci(this,e,t,n,r,s,o);return a.attributes[c]=l,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:c}),this}}function Ax(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,c,l]=ci(this,e,t,n,r,s,o);if(typeof l!="function")throw new be(`Graph.${e}: updater should be a function.`);const u=a.attributes,d=l(u[c]);return u[c]=d,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:c}),this}}function Tx(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function Rx(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);if(!zt(a))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function Cx(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);if(!zt(a))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return It(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function Px(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=ci(this,e,t,n,r,s);if(typeof a!="function")throw new be(`Graph.${e}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const Dx=[{name:i=>`get${i}Attribute`,attacher:Sx},{name:i=>`get${i}Attributes`,attacher:Ex},{name:i=>`has${i}Attribute`,attacher:bx},{name:i=>`set${i}Attribute`,attacher:wx},{name:i=>`update${i}Attribute`,attacher:Ax},{name:i=>`remove${i}Attribute`,attacher:Tx},{name:i=>`replace${i}Attributes`,attacher:Rx},{name:i=>`merge${i}Attributes`,attacher:Cx},{name:i=>`update${i}Attributes`,attacher:Px}];function Lx(i){Dx.forEach(function({name:e,attacher:t}){t(i,e("Node"),Lh),t(i,e("Source"),Ih),t(i,e("Target"),Mx),t(i,e("Opposite"),Nh)})}function Ix(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function Nx(i,e,t){i.prototype[e]=function(n){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,o=""+arguments[1];if(r=yn(this,s,o,t),!r)throw new me(`Graph.${e}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function Ux(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function Fx(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,c=""+r;if(r=arguments[2],s=arguments[3],o=yn(this,a,c,t),!o)throw new me(`Graph.${e}: could not find an edge for the given path ("${a}" - "${c}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function Ox(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,c=""+r;if(r=arguments[2],s=arguments[3],o=yn(this,a,c,t),!o)throw new me(`Graph.${e}: could not find an edge for the given path ("${a}" - "${c}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new be(`Graph.${e}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function Bx(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function Gx(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!zt(r))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function zx(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!zt(r))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return It(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function kx(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ke(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ke(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=yn(this,o,a,t),!s)throw new me(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ke(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new me(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new be(`Graph.${e}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const Hx=[{name:i=>`get${i}Attribute`,attacher:Ix},{name:i=>`get${i}Attributes`,attacher:Nx},{name:i=>`has${i}Attribute`,attacher:Ux},{name:i=>`set${i}Attribute`,attacher:Fx},{name:i=>`update${i}Attribute`,attacher:Ox},{name:i=>`remove${i}Attribute`,attacher:Bx},{name:i=>`replace${i}Attributes`,attacher:Gx},{name:i=>`merge${i}Attributes`,attacher:zx},{name:i=>`update${i}Attributes`,attacher:kx}];function Vx(i){Hx.forEach(function({name:e,attacher:t}){t(i,e("Edge"),"mixed"),t(i,e("DirectedEdge"),"directed"),t(i,e("UndirectedEdge"),"undirected")})}const Wx=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function Xx(i,e,t,n){let r=!1;for(const s in e){if(s===n)continue;const o=e[s];if(r=t(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),i&&r)return o.key}}function $x(i,e,t,n){let r,s,o,a=!1;for(const c in e)if(c!==n){r=e[c];do{if(s=r.source,o=r.target,a=t(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),i&&a)return r.key;r=r.next}while(r!==void 0)}}function Zo(i,e){const t=Object.keys(i),n=t.length;let r,s=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const o=t[s++];if(o===e){r=void 0;continue}r=i[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function qx(i,e,t,n){const r=e[t];if(!r)return;const s=r.source,o=r.target;if(n(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&i)return r.key}function Yx(i,e,t,n){let r=e[t];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function Jo(i,e){let t=i[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const r={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:r}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function Kx(i,e){if(i.size===0)return[];if(e==="mixed"||e===i.type)return Array.from(i._edges.keys());const t=e==="undirected"?i.undirectedSize:i.directedSize,n=new Array(t),r=e==="undirected",s=i._edges.values();let o=0,a,c;for(;a=s.next(),a.done!==!0;)c=a.value,c.undirected===r&&(n[o++]=c.key);return n}function Uh(i,e,t,n){if(e.size===0)return;const r=t!=="mixed"&&t!==e.type,s=t==="undirected";let o,a,c=!1;const l=e._edges.values();for(;o=l.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:u,attributes:d,source:h,target:p}=a;if(c=n(u,d,h.key,p.key,h.attributes,p.attributes,a.undirected),i&&c)return u}}function Zx(i,e){if(i.size===0)return Er();const t=e!=="mixed"&&e!==i.type,n=e==="undirected",r=i._edges.values();return{[Symbol.iterator](){return this},next(){let s,o;for(;;){if(s=r.next(),s.done)return s;if(o=s.value,!(t&&o.undirected!==n))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function Ec(i,e,t,n,r,s){const o=e?$x:Xx;let a;if(t!=="undirected"&&(n!=="out"&&(a=o(i,r.in,s),i&&a)||n!=="in"&&(a=o(i,r.out,s,n?void 0:r.key),i&&a))||t!=="directed"&&(a=o(i,r.undirected,s),i&&a))return a}function Jx(i,e,t,n){const r=[];return Ec(!1,i,e,t,n,function(s){r.push(s)}),r}function jx(i,e,t){let n=Er();return i!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=ri(n,Zo(t.in))),e!=="in"&&typeof t.out<"u"&&(n=ri(n,Zo(t.out,e?void 0:t.key)))),i!=="directed"&&typeof t.undirected<"u"&&(n=ri(n,Zo(t.undirected))),n}function bc(i,e,t,n,r,s,o){const a=t?Yx:qx;let c;if(e!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(c=a(i,r.in,s,o),i&&c)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(c=a(i,r.out,s,o),i&&c))||e!=="directed"&&typeof r.undirected<"u"&&(c=a(i,r.undirected,s,o),i&&c))return c}function Qx(i,e,t,n,r){const s=[];return bc(!1,i,e,t,n,r,function(o){s.push(o)}),s}function ev(i,e,t,n){let r=Er();return i!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(r=ri(r,Jo(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(r=ri(r,Jo(t.out,n)))),i!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(r=ri(r,Jo(t.undirected,n))),r}function tv(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return Kx(this,n);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new me(`Graph.${t}: could not find the "${s}" node in the graph.`);return Jx(this.multi,n==="mixed"?this.type:n,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new me(`Graph.${t}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new me(`Graph.${t}:  could not find the "${o}" target node in the graph.`);return Qx(n,this.multi,r,a,o)}throw new be(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function nv(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,u,d){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return d=l,Uh(!1,this,n,d);if(arguments.length===2){l=""+l,d=u;const h=this._nodes.get(l);if(typeof h>"u")throw new me(`Graph.${s}: could not find the "${l}" node in the graph.`);return Ec(!1,this.multi,n==="mixed"?this.type:n,r,h,d)}if(arguments.length===3){l=""+l,u=""+u;const h=this._nodes.get(l);if(!h)throw new me(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(u))throw new me(`Graph.${s}:  could not find the "${u}" target node in the graph.`);return bc(!1,n,this.multi,r,h,u,d)}throw new be(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop();let d;if(l.length===0){let h=0;n!=="directed"&&(h+=this.undirectedSize),n!=="undirected"&&(h+=this.directedSize),d=new Array(h);let p=0;l.push((x,b,g,f,S,E,_)=>{d[p++]=u(x,b,g,f,S,E,_)})}else d=[],l.push((h,p,x,b,g,f,S)=>{d.push(u(h,p,x,b,g,f,S))});return this[s].apply(this,l),d};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop(),d=[];return l.push((h,p,x,b,g,f,S)=>{u(h,p,x,b,g,f,S)&&d.push(h)}),this[s].apply(this,l),d};const c="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[c]=function(){let l=Array.prototype.slice.call(arguments);if(l.length<2||l.length>4)throw new be(`Graph.${c}: invalid number of arguments (expecting 2, 3 or 4 and got ${l.length}).`);if(typeof l[l.length-1]=="function"&&typeof l[l.length-2]!="function")throw new be(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,d;l.length===2?(u=l[0],d=l[1],l=[]):l.length===3?(u=l[1],d=l[2],l=[l[0]]):l.length===4&&(u=l[2],d=l[3],l=[l[0],l[1]]);let h=d;return l.push((p,x,b,g,f,S,E)=>{h=u(h,p,x,b,g,f,S,E)}),this[s].apply(this,l),h}}function iv(i,e){const{name:t,type:n,direction:r}=e,s="find"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,l,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return u=c,Uh(!0,this,n,u);if(arguments.length===2){c=""+c,u=l;const d=this._nodes.get(c);if(typeof d>"u")throw new me(`Graph.${s}: could not find the "${c}" node in the graph.`);return Ec(!0,this.multi,n==="mixed"?this.type:n,r,d,u)}if(arguments.length===3){c=""+c,l=""+l;const d=this._nodes.get(c);if(!d)throw new me(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(l))throw new me(`Graph.${s}:  could not find the "${l}" target node in the graph.`);return bc(!0,n,this.multi,r,d,l,u)}throw new be(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),l=c.pop();return c.push((d,h,p,x,b,g,f)=>l(d,h,p,x,b,g,f)),!!this[s].apply(this,c)};const a="every"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),l=c.pop();return c.push((d,h,p,x,b,g,f)=>!l(d,h,p,x,b,g,f)),!this[s].apply(this,c)}}function rv(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Er();if(!arguments.length)return Zx(this,n);if(arguments.length===1){o=""+o;const c=this._nodes.get(o);if(!c)throw new me(`Graph.${s}: could not find the "${o}" node in the graph.`);return jx(n,r,c)}if(arguments.length===2){o=""+o,a=""+a;const c=this._nodes.get(o);if(!c)throw new me(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new me(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return ev(n,r,c,a)}throw new be(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function sv(i){Wx.forEach(e=>{tv(i,e),nv(i,e),iv(i,e),rv(i,e)})}const ov=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function lo(){this.A=null,this.B=null}lo.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};lo.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function Br(i,e,t,n,r){for(const s in n){const o=n[s],a=o.source,c=o.target,l=a===t?c:a;if(e&&e.has(l.key))continue;const u=r(l.key,l.attributes);if(i&&u)return l.key}}function wc(i,e,t,n,r){if(e!=="mixed"){if(e==="undirected")return Br(i,null,n,n.undirected,r);if(typeof t=="string")return Br(i,null,n,n[t],r)}const s=new lo;let o;if(e!=="undirected"){if(t!=="out"){if(o=Br(i,null,n,n.in,r),i&&o)return o;s.wrap(n.in)}if(t!=="in"){if(o=Br(i,s,n,n.out,r),i&&o)return o;s.wrap(n.out)}}if(e!=="directed"&&(o=Br(i,s,n,n.undirected,r),i&&o))return o}function av(i,e,t){if(i!=="mixed"){if(i==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return wc(!1,i,e,t,function(r){n.push(r)}),n}function Gr(i,e,t){const n=Object.keys(t),r=n.length;let s=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(s>=r)return i&&i.wrap(t),{done:!0};const a=t[n[s++]],c=a.source,l=a.target;if(o=c===e?l:c,i&&i.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function cv(i,e,t){if(i!=="mixed"){if(i==="undirected")return Gr(null,t,t.undirected);if(typeof e=="string")return Gr(null,t,t[e])}let n=Er();const r=new lo;return i!=="undirected"&&(e!=="out"&&(n=ri(n,Gr(r,t,t.in))),e!=="in"&&(n=ri(n,Gr(r,t,t.out)))),i!=="directed"&&(n=ri(n,Gr(r,t,t.undirected))),n}function lv(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new me(`Graph.${t}: could not find the "${s}" node in the graph.`);return av(n==="mixed"?this.type:n,r,o)}}function uv(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;l=""+l;const d=this._nodes.get(l);if(typeof d>"u")throw new me(`Graph.${s}: could not find the "${l}" node in the graph.`);wc(!1,n==="mixed"?this.type:n,r,d,u)};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(l,u){const d=[];return this[s](l,(h,p)=>{d.push(u(h,p))}),d};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(l,u){const d=[];return this[s](l,(h,p)=>{u(h,p)&&d.push(h)}),d};const c="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[c]=function(l,u,d){if(arguments.length<3)throw new be(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let h=d;return this[s](l,(p,x)=>{h=u(h,p,x)}),h}}function hv(i,e){const{name:t,type:n,direction:r}=e,s=t[0].toUpperCase()+t.slice(1,-1),o="find"+s;i.prototype[o]=function(l,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;l=""+l;const d=this._nodes.get(l);if(typeof d>"u")throw new me(`Graph.${o}: could not find the "${l}" node in the graph.`);return wc(!0,n==="mixed"?this.type:n,r,d,u)};const a="some"+s;i.prototype[a]=function(l,u){return!!this[o](l,u)};const c="every"+s;i.prototype[c]=function(l,u){return!this[o](l,(h,p)=>!u(h,p))}}function dv(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Er();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new me(`Graph.${s}: could not find the "${o}" node in the graph.`);return cv(n==="mixed"?this.type:n,r,a)}}function fv(i){ov.forEach(e=>{lv(i,e),uv(i,e),hv(i,e),dv(i,e)})}function Us(i,e,t,n,r){const s=n._nodes.values(),o=n.type;let a,c,l,u,d,h;for(;a=s.next(),a.done!==!0;){let p=!1;if(c=a.value,o!=="undirected"){u=c.out;for(l in u){d=u[l];do h=d.target,p=!0,r(c.key,h.key,c.attributes,h.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}if(o!=="directed"){u=c.undirected;for(l in u)if(!(e&&c.key>l)){d=u[l];do h=d.target,h.key!==l&&(h=d.source),p=!0,r(c.key,h.key,c.attributes,h.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}t&&!p&&r(c.key,null,c.attributes,null,null,null,null)}}function pv(i,e){const t={key:i};return Rh(e.attributes)||(t.attributes=It({},e.attributes)),t}function mv(i,e,t){const n={key:e,source:t.source.key,target:t.target.key};return Rh(t.attributes)||(n.attributes=It({},t.attributes)),i==="mixed"&&t.undirected&&(n.undirected=!0),n}function gv(i){if(!zt(i))throw new be('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new be("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!zt(i.attributes)||i.attributes===null))throw new be("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function _v(i){if(!zt(i))throw new be('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new be("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new be("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!zt(i.attributes)||i.attributes===null))throw new be("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new be("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const xv=yx(),vv=new Set(["directed","undirected","mixed"]),pu=new Set(["domain","_events","_eventsCount","_maxListeners"]),yv=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],Mv={allowSelfLoops:!0,multi:!1,type:"mixed"};function Sv(i,e,t){if(t&&!zt(t))throw new be(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},i._nodes.has(e))throw new ke(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function mu(i,e,t){const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Fh(i,e,t,n,r,s,o,a){if(!n&&i.type==="undirected")throw new ke(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ke(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!zt(a))throw new be(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!i.allowSelfLoops&&s===o)throw new ke(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const c=i._nodes.get(s),l=i._nodes.get(o);if(!c)throw new me(`Graph.${e}: source node "${s}" not found.`);if(!l)throw new me(`Graph.${e}: target node "${o}" not found.`);const u={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ke(`Graph.${e}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof c.undirected[o]<"u":typeof c.out[o]<"u"))throw new ke(`Graph.${e}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const d=new br(n,r,c,l,a);i._edges.set(r,d);const h=s===o;return n?(c.undirectedDegree++,l.undirectedDegree++,h&&(c.undirectedLoops++,i._undirectedSelfLoopCount++)):(c.outDegree++,l.inDegree++,h&&(c.directedLoops++,i._directedSelfLoopCount++)),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,u.key=r,i.emit("edgeAdded",u),r}function Ev(i,e,t,n,r,s,o,a,c){if(!n&&i.type==="undirected")throw new ke(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ke(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(c){if(typeof a!="function")throw new be(`Graph.${e}: invalid updater function. Expecting a function but got "${a}"`)}else if(!zt(a))throw new be(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let l;if(c&&(l=a,a=void 0),!i.allowSelfLoops&&s===o)throw new ke(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=i._nodes.get(s),d=i._nodes.get(o),h,p;if(!t&&(h=i._edges.get(r),h)){if((h.source.key!==s||h.target.key!==o)&&(!n||h.source.key!==o||h.target.key!==s))throw new ke(`Graph.${e}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${h.source.key}", "${h.target.key}").`);p=h}if(!p&&!i.multi&&u&&(p=n?u.undirected[o]:u.out[o]),p){const S=[p.key,!1,!1,!1];if(c?!l:!a)return S;if(c){const E=p.attributes;p.attributes=l(E),i.emit("edgeAttributesUpdated",{type:"replace",key:p.key,attributes:p.attributes})}else It(p.attributes,a),i.emit("edgeAttributesUpdated",{type:"merge",key:p.key,attributes:p.attributes,data:a});return S}a=a||{},c&&l&&(a=l(a));const x={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ke(`Graph.${e}: the "${r}" edge already exists in the graph.`);let b=!1,g=!1;u||(u=mu(i,s,{}),b=!0,s===o&&(d=u,g=!0)),d||(d=mu(i,o,{}),g=!0),h=new br(n,r,u,d,a),i._edges.set(r,h);const f=s===o;return n?(u.undirectedDegree++,d.undirectedDegree++,f&&(u.undirectedLoops++,i._undirectedSelfLoopCount++)):(u.outDegree++,d.inDegree++,f&&(u.directedLoops++,i._directedSelfLoopCount++)),i.multi?h.attachMulti():h.attach(),n?i._undirectedSize++:i._directedSize++,x.key=r,i.emit("edgeAdded",x),[r,!0,b,g]}function cr(i,e){i._edges.delete(e.key);const{source:t,target:n,attributes:r}=e,s=e.undirected,o=t===n;s?(t.undirectedDegree--,n.undirectedDegree--,o&&(t.undirectedLoops--,i._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,o&&(t.directedLoops--,i._directedSelfLoopCount--)),i.multi?e.detachMulti():e.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:e.key,attributes:r,source:t.key,target:n.key,undirected:s})}class yt extends xx.EventEmitter{constructor(e){if(super(),e=It({},Mv,e),typeof e.multi!="boolean")throw new be(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!vv.has(e.type))throw new be(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new be(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?Ch:e.type==="directed"?Ph:Dh;_n(this,"NodeDataClass",t);const n="geid_"+xv()+"_";let r=0;const s=()=>{let o;do o=n+r++;while(this._edges.has(o));return o};_n(this,"_attributes",{}),_n(this,"_nodes",new Map),_n(this,"_edges",new Map),_n(this,"_directedSize",0),_n(this,"_undirectedSize",0),_n(this,"_directedSelfLoopCount",0),_n(this,"_undirectedSelfLoopCount",0),_n(this,"_edgeKeyGenerator",s),_n(this,"_options",e),pu.forEach(o=>_n(this,o,this[o])),An(this,"order",()=>this._nodes.size),An(this,"size",()=>this._edges.size),An(this,"directedSize",()=>this._directedSize),An(this,"undirectedSize",()=>this._undirectedSize),An(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),An(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),An(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),An(this,"multi",this._options.multi),An(this,"type",this._options.type),An(this,"allowSelfLoops",this._options.allowSelfLoops),An(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new be(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new be(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new be(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ke("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new me(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new me(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ke("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new me(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new me(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new ke("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new me(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new me(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,r+=t.directedLoops),n-r}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,r+=t.directedLoops),n-r}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,r+=t.directedLoops*2),n-r}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new me(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(e===r)return s;if(e===s)return r;throw new me(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${s}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new me(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new me(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Sv(this,e,t).key}mergeNode(e,t){if(t&&!zt(t))throw new be(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(It(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new be(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const s=n.attributes;n.attributes=t(s),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:r}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new me(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in t.out){n=t.out[r];do cr(this,n),n=n.next;while(n)}for(const r in t.in){n=t.in[r];do cr(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in t.undirected){n=t.undirected[r];do cr(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(t=yn(this,n,r,this.type),!t)throw new me(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new me(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return cr(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ke("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ke("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=yn(this,e,t,"directed");if(!n)throw new me(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return cr(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ke("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ke("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=yn(this,e,t,"undirected");if(!n)throw new me(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return cr(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new be("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!zt(e))throw new be("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!zt(e))throw new be("Graph.mergeAttributes: provided attributes are not a plain object.");return It(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new be("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new be("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!fu(t))throw new be("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=e(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new be("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!fu(t))throw new be("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,o,a;for(;r=n.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=e(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new be("Graph.forEachAdjacencyEntry: expecting a callback.");Us(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new be("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Us(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new be("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Us(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new be("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Us(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new be("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!="function")throw new be("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!="function")throw new be("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,r;const s=new Array(this.order);let o=0;for(;n=t.next(),n.done!==!0;)r=n.value,s[o++]=e(r.key,r.attributes);return s}someNode(e){if(typeof e!="function")throw new be("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new be("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new be("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,r;const s=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(e,t){if(typeof e!="function")throw new be("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new be("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,n=e(n,o.key,o.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,s)=>{e[t++]=pv(s,r)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((r,s)=>{n[t++]=mv(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof yt)return e.forEachNode((c,l)=>{t?this.mergeNode(c,l):this.addNode(c,l)}),e.forEachEdge((c,l,u,d,h,p,x)=>{t?x?this.mergeUndirectedEdgeWithKey(c,u,d,l):this.mergeDirectedEdgeWithKey(c,u,d,l):x?this.addUndirectedEdgeWithKey(c,u,d,l):this.addDirectedEdgeWithKey(c,u,d,l)}),this;if(!zt(e))throw new be("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!zt(e.attributes))throw new be("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,r,s,o,a;if(e.nodes){if(s=e.nodes,!Array.isArray(s))throw new be("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],gv(o);const{key:c,attributes:l}=o;t?this.mergeNode(c,l):this.addNode(c,l)}}if(e.edges){let c=!1;if(this.type==="undirected"&&(c=!0),s=e.edges,!Array.isArray(s))throw new be("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],_v(a);const{source:l,target:u,attributes:d,undirected:h=c}=a;let p;"key"in a?(p=t?h?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:h?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,p.call(this,a.key,l,u,d)):(p=t?h?this.mergeUndirectedEdge:this.mergeDirectedEdge:h?this.addUndirectedEdge:this.addDirectedEdge,p.call(this,l,u,d))}}return this}nullCopy(e){const t=new yt(It({},this._options,e));return t.replaceAttributes(It({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,r)=>{const s=It({},n.attributes);n=new t.NodeDataClass(r,s),t._nodes.set(r,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ke(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ke("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ke("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,Fh(t,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,It({},s.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((s,o)=>{e[o]=s.attributes});const t={},n={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let c="",l=s.source.key,u=s.target.key,d;s.undirected&&l>u&&(d=l,l=u,u=d);const h=`(${l})${a}(${u})`;o.startsWith("geid_")?this.multi&&(typeof n[h]>"u"?n[h]=0:n[h]++,c+=`${n[h]}. `):c+=`[${o}]: `,c+=h,t[c]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!pu.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,_n(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(yt.prototype[Symbol.for("nodejs.util.inspect.custom")]=yt.prototype.inspect);yv.forEach(i=>{["add","merge","update"].forEach(e=>{const t=i.name(e),n=e==="add"?Fh:Ev;i.generateKey?yt.prototype[t]=function(r,s,o){return n(this,t,!0,(i.type||this.type)==="undirected",null,r,s,o,e==="update")}:yt.prototype[t]=function(r,s,o,a){return n(this,t,!1,(i.type||this.type)==="undirected",r,s,o,a,e==="update")}})});Lx(yt);Vx(yt);sv(yt);fv(yt);class Oh extends yt{constructor(e){const t=It({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new be("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new be('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Ac extends yt{constructor(e){const t=It({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new be("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new be('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Bh extends yt{constructor(e){const t=It({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class Gh extends yt{constructor(e){const t=It({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new be('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class zh extends yt{constructor(e){const t=It({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new be('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function wr(i){i.from=function(e,t){const n=It({},e.options,t),r=new i(n);return r.import(e),r}}wr(yt);wr(Oh);wr(Ac);wr(Bh);wr(Gh);wr(zh);yt.Graph=yt;yt.DirectedGraph=Oh;yt.UndirectedGraph=Ac;yt.MultiGraph=Bh;yt.MultiDirectedGraph=Gh;yt.MultiUndirectedGraph=zh;yt.InvalidArgumentsGraphError=be;yt.NotFoundGraphError=me;yt.UsageGraphError=ke;var jo,gu;function kh(){if(gu)return jo;gu=1;function i(t){return!t||typeof t!="object"||typeof t=="function"||Array.isArray(t)||t instanceof Set||t instanceof Map||t instanceof RegExp||t instanceof Date}function e(t,n){t=t||{};var r={};for(var s in n){var o=t[s],a=n[s];if(!i(a)){r[s]=e(o,a);continue}o===void 0?r[s]=a:r[s]=o}return r}return jo=e,jo}var Qo,_u;function Hh(){return _u||(_u=1,Qo=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),Qo}var ea,xu;function bv(){if(xu)return ea;xu=1;var i=Hh();return ea=function(t){if(!i(t))throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");var n=t.type;return n!=="mixed"?n:t.directedSize===0&&t.undirectedSize===0||t.directedSize>0&&t.undirectedSize>0?"mixed":t.directedSize>0?"directed":"undirected"},ea}var ta,vu;function Vh(){if(vu)return ta;vu=1;function i(e){if(typeof e!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=e}return typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=function(){return this}),i.of=function(){var e=arguments,t=e.length,n=0;return new i(function(){return n>=t?{done:!0}:{done:!1,value:e[n++]}})},i.empty=function(){var e=new i(function(){return{done:!0}});return e},i.fromSequence=function(e){var t=0,n=e.length;return new i(function(){return t>=n?{done:!0}:{done:!1,value:e[t++]}})},i.is=function(e){return e instanceof i?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"},ta=i,ta}var na={},yu;function Tc(){return yu||(yu=1,(function(i){var e=Math.pow(2,8)-1,t=Math.pow(2,16)-1,n=Math.pow(2,32)-1,r=Math.pow(2,7)-1,s=Math.pow(2,15)-1,o=Math.pow(2,31)-1;i.getPointerArray=function(c){var l=c-1;if(l<=e)return Uint8Array;if(l<=t)return Uint16Array;if(l<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},i.getSignedPointerArray=function(c){var l=c-1;return l<=r?Int8Array:l<=s?Int16Array:l<=o?Int32Array:Float64Array},i.getNumberType=function(c){return c===(c|0)?Math.sign(c)===-1?c<=127&&c>=-128?Int8Array:c<=32767&&c>=-32768?Int16Array:Int32Array:c<=255?Uint8Array:c<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};i.getMinimalRepresentation=function(c,l){var u=null,d=0,h,p,x,b,g;for(b=0,g=c.length;b<g;b++)x=l?l(c[b]):c[b],p=i.getNumberType(x),h=a[p.name],h>d&&(d=h,u=p);return u},i.isTypedArray=function(c){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(c)},i.concat=function(){var c=0,l,u,d;for(l=0,d=arguments.length;l<d;l++)c+=arguments[l].length;var h=new arguments[0].constructor(c);for(l=0,u=0;l<d;l++)h.set(arguments[l],u),u+=arguments[l].length;return h},i.indices=function(c){for(var l=i.getPointerArray(c),u=new l(c),d=0;d<c;d++)u[d]=d;return u}})(na)),na}var ia,Mu;function wv(){if(Mu)return ia;Mu=1;var i=Vh(),e=Tc().getPointerArray;function t(n,r){arguments.length<2&&(r=n,n=Array);var s=e(r);this.size=0,this.length=r,this.dense=new s(r),this.sparse=new s(r),this.vals=new n(r)}return t.prototype.clear=function(){this.size=0},t.prototype.has=function(n){var r=this.sparse[n];return r<this.size&&this.dense[r]===n},t.prototype.get=function(n){var r=this.sparse[n];if(r<this.size&&this.dense[r]===n)return this.vals[r]},t.prototype.set=function(n,r){var s=this.sparse[n];return s<this.size&&this.dense[s]===n?(this.vals[s]=r,this):(this.dense[this.size]=n,this.sparse[n]=this.size,this.vals[this.size]=r,this.size++,this)},t.prototype.delete=function(n){var r=this.sparse[n];return r>=this.size||this.dense[r]!==n?!1:(r=this.dense[this.size-1],this.dense[this.sparse[n]]=r,this.sparse[r]=this.sparse[n],this.size--,!0)},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=0;s<this.size;s++)n.call(r,this.vals[s],this.dense[s])},t.prototype.keys=function(){var n=this.size,r=this.dense,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},t.prototype.values=function(){var n=this.size,r=this.vals,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},t.prototype.entries=function(){var n=this.size,r=this.dense,s=this.vals,o=0;return new i(function(){if(o<n){var a=[r[o],s[o]];return o++,{value:a}}return{done:!0}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.entries),t.prototype.inspect=function(){for(var n=new Map,r=0;r<this.size;r++)n.set(this.dense[r],this.vals[r]);return Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.length=this.length,this.vals.constructor!==Array&&(n.type=this.vals.constructor.name),n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),ia=t,ia}var ra,Su;function Av(){if(Su)return ra;Su=1;var i=Vh(),e=Tc().getPointerArray;function t(n){var r=e(n);this.start=0,this.size=0,this.capacity=n,this.dense=new r(n),this.sparse=new r(n)}return t.prototype.clear=function(){this.start=0,this.size=0},t.prototype.has=function(n){if(this.size===0)return!1;var r=this.sparse[n],s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;return s&&this.dense[r]===n},t.prototype.enqueue=function(n){var r=this.sparse[n];if(this.size!==0){var s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;if(s&&this.dense[r]===n)return this}return r=(this.start+this.size)%this.capacity,this.dense[r]=n,this.sparse[n]=r,this.size++,this},t.prototype.dequeue=function(){if(this.size!==0){var n=this.start;this.size--,this.start++,this.start===this.capacity&&(this.start=0);var r=this.dense[n];return this.sparse[r]=this.capacity,r}},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=this.capacity,o=this.size,a=this.start,c=0;c<o;)n.call(r,this.dense[a],c,this),a++,c++,a===s&&(a=0)},t.prototype.values=function(){var n=this.dense,r=this.capacity,s=this.size,o=this.start,a=0;return new i(function(){if(a>=s)return{done:!0};var c=n[o];return o++,a++,o===r&&(o=0),{value:c,done:!1}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.values),t.prototype.inspect=function(){var n=[];return this.forEach(function(r){n.push(r)}),Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.capacity=this.capacity,n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),ra=t,ra}var sa,Eu;function Tv(){if(Eu)return sa;Eu=1;function i(t){return function(n){return typeof n!="number"&&(n=n.length),Math.floor(t()*n)}}var e=i(Math.random);return e.createRandomIndex=i,sa=e,sa}var Fs={},zr={},bu;function Rv(){if(bu)return zr;bu=1;function i(n){return typeof n!="number"||isNaN(n)?1:n}function e(n,r){var s={},o=function(l){return typeof l>"u"?r:l};typeof r=="function"&&(o=r);var a=function(l){return o(l[n])},c=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(l,u){return a(l.getNodeAttributes(u))},s.fromEntry=function(l,u){return a(u)}):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},s.fromGraph=function(l,u){return o(n(u,l.getNodeAttributes(u)))},s.fromEntry=function(l,u){return o(n(l,u))}):(s.fromAttributes=c,s.fromGraph=c,s.fromEntry=c),s}function t(n,r){var s={},o=function(l){return typeof l>"u"?r:l};typeof r=="function"&&(o=r);var a=function(l){return o(l[n])},c=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(l,u){return a(l.getEdgeAttributes(u))},s.fromEntry=function(l,u){return a(u)},s.fromPartialEntry=s.fromEntry,s.fromMinimalEntry=s.fromEntry):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},s.fromGraph=function(l,u){var d=l.extremities(u);return o(n(u,l.getEdgeAttributes(u),d[0],d[1],l.getNodeAttributes(d[0]),l.getNodeAttributes(d[1]),l.isUndirected(u)))},s.fromEntry=function(l,u,d,h,p,x,b){return o(n(l,u,d,h,p,x,b))},s.fromPartialEntry=function(l,u,d,h){return o(n(l,u,d,h))},s.fromMinimalEntry=function(l,u){return o(n(l,u))}):(s.fromAttributes=c,s.fromGraph=c,s.fromEntry=c,s.fromMinimalEntry=c),s}return zr.createNodeValueGetter=e,zr.createEdgeValueGetter=t,zr.createEdgeWeightGetter=function(n){return t(n,i)},zr}var wu;function Cv(){if(wu)return Fs;wu=1;var i=Tc(),e=kh(),t=Rv().createEdgeWeightGetter,n=Symbol.for("nodejs.util.inspect.custom"),r={getEdgeWeight:"weight",keepDendrogram:!1,resolution:1};function s(a,c){c=e(c,r);var l=c.resolution,u=t(c.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,h=i.getPointerArray(d),p=i.getPointerArray(a.order+1),x=c.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=l,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=c.keepDendrogram,this.neighborhood=new p(d),this.weights=new x(d),this.loops=new x(a.order),this.starts=new h(a.order+1),this.belongings=new p(a.order),this.dendrogram=[],this.mapping=null,this.counts=new p(a.order),this.unused=new p(a.order),this.totalWeights=new x(a.order);var b={},g,f=0,S=0,E=this;a.forEachNode(function(_){E.nodes[f]=_,b[_]=f,S+=a.undirectedDegreeWithoutSelfLoops(_),E.starts[f]=S,E.belongings[f]=f,E.counts[f]=1,f++}),a.forEachEdge(function(_,w,y,T,m,M,R){if(g=u(_,w,y,T,m,M,R),y=b[y],T=b[T],E.M+=g,y===T)E.totalWeights[y]+=g*2,E.loops[y]=g*2;else{E.totalWeights[y]+=g,E.totalWeights[T]+=g;var P=--E.starts[y],D=--E.starts[T];E.neighborhood[P]=T,E.neighborhood[D]=y,E.weights[P]=g,E.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}s.prototype.isolate=function(a,c){var l=this.belongings[a];if(this.counts[l]===1)return l;var u=this.unused[--this.U],d=this.loops[a];return this.totalWeights[l]-=c+d,this.totalWeights[u]+=c+d,this.belongings[a]=u,this.counts[l]--,this.counts[u]++,u},s.prototype.move=function(a,c,l){var u=this.belongings[a],d=this.loops[a];this.totalWeights[u]-=c+d,this.totalWeights[l]+=c+d,this.belongings[a]=l;var h=this.counts[u]--===1;this.counts[l]++,h&&(this.unused[this.U++]=u)},s.prototype.computeNodeDegree=function(a){var c,l,u,d=0;for(c=this.starts[a],l=this.starts[a+1];c<l;c++)u=this.weights[c],d+=u;return d},s.prototype.expensiveIsolate=function(a){var c=this.computeNodeDegree(a);return this.isolate(a,c)},s.prototype.expensiveMove=function(a,c){var l=this.computeNodeDegree(a);this.move(a,l,c)},s.prototype.zoomOut=function(){var a=new Array(this.C-this.U),c={},l=this.nodes.length,u=0,d=0,h,p,x,b,g,f,S,E,_;for(h=0,x=this.C;h<x;h++)f=this.belongings[h],f in c||(c[f]=u,a[u]={adj:{},totalWeights:this.totalWeights[f],internalWeights:0},u++),this.belongings[h]=c[f];var w,y;if(this.keepDendrogram){for(w=this.dendrogram[this.level],y=new(i.getPointerArray(u))(l),h=0;h<l;h++)y[h]=this.belongings[w[h]];this.dendrogram.push(y)}else for(h=0;h<l;h++)this.mapping[h]=this.belongings[this.mapping[h]];for(h=0,x=this.C;h<x;h++)for(f=this.belongings[h],E=a[f],_=E.adj,E.internalWeights+=this.loops[h],p=this.starts[h],b=this.starts[h+1];p<b;p++){if(g=this.neighborhood[p],S=this.belongings[g],f===S){E.internalWeights+=this.weights[p];continue}S in _||(_[S]=0),_[S]+=this.weights[p]}for(this.C=u,g=0,f=0;f<u;f++){E=a[f],_=E.adj,f=+f,this.totalWeights[f]=E.totalWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(S in _)this.neighborhood[g]=+S,this.weights[g]=_[S],d++,g++}return this.starts[u]=d,this.E=d,this.U=0,this.level++,c},s.prototype.modularity=function(){var a,c,l,u,d,h=0,p=this.M*2,x=new Float64Array(this.C);for(l=0;l<this.C;l++)for(a=this.belongings[l],x[a]+=this.loops[l],u=this.starts[l],d=this.starts[l+1];u<d;u++)c=this.belongings[this.neighborhood[u]],a===c&&(x[a]+=this.weights[u]);for(l=0;l<this.C;l++)h+=x[l]/p-Math.pow(this.totalWeights[l]/p,2)*this.resolution;return h},s.prototype.delta=function(a,c,l,u){var d=this.M,h=this.totalWeights[u];return c+=this.loops[a],l/d-h*c*this.resolution/(2*d*d)},s.prototype.deltaWithOwnCommunity=function(a,c,l,u){var d=this.M,h=this.totalWeights[u];return c+=this.loops[a],l/d-(h-c)*c*this.resolution/(2*d*d)},s.prototype.fastDelta=function(a,c,l,u){var d=this.M,h=this.totalWeights[u];return c+=this.loops[a],l-c*h*this.resolution/(2*d)},s.prototype.fastDeltaWithOwnCommunity=function(a,c,l,u){var d=this.M,h=this.totalWeights[u];return c+=this.loops[a],l-c*(h-c)*this.resolution/(2*d)},s.prototype.bounds=function(a){return[this.starts[a],this.starts[a+1]]},s.prototype.project=function(){var a=this,c={};return a.nodes.slice(0,this.C).forEach(function(l,u){c[l]=Array.from(a.neighborhood.slice(a.starts[u],a.starts[u+1])).map(function(d){return a.nodes[d]})}),c},s.prototype.collect=function(a){arguments.length<1&&(a=this.level);var c={},l=this.keepDendrogram?this.dendrogram[a]:this.mapping,u,d;for(u=0,d=l.length;u<d;u++)c[this.nodes[u]]=l[u];return c},s.prototype.assign=function(a,c){arguments.length<2&&(c=this.level);var l=this.keepDendrogram?this.dendrogram[c]:this.mapping,u,d;for(u=0,d=l.length;u<d;u++)this.graph.setNodeAttribute(this.nodes[u],a,l[u])},s.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:s,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var c=["neighborhood","weights"],l=["counts","loops","belongings","totalWeights"],u=this;return c.forEach(function(d){a[d]=u[d].slice(0,a.E)}),l.forEach(function(d){a[d]=u[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a};function o(a,c){c=e(c,r);var l=c.resolution,u=t(c.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,h=i.getPointerArray(d),p=i.getPointerArray(a.order+1),x=c.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=l,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=c.keepDendrogram,this.neighborhood=new p(d),this.weights=new x(d),this.loops=new x(a.order),this.starts=new h(a.order+1),this.offsets=new h(a.order),this.belongings=new p(a.order),this.dendrogram=[],this.counts=new p(a.order),this.unused=new p(a.order),this.totalInWeights=new x(a.order),this.totalOutWeights=new x(a.order);var b={},g,f=0,S=0,E=this;a.forEachNode(function(_){E.nodes[f]=_,b[_]=f,S+=a.outDegreeWithoutSelfLoops(_),E.starts[f]=S,S+=a.inDegreeWithoutSelfLoops(_),E.offsets[f]=S,E.belongings[f]=f,E.counts[f]=1,f++}),a.forEachEdge(function(_,w,y,T,m,M,R){if(g=u(_,w,y,T,m,M,R),y=b[y],T=b[T],E.M+=g,y===T)E.loops[y]+=g,E.totalInWeights[y]+=g,E.totalOutWeights[y]+=g;else{E.totalOutWeights[y]+=g,E.totalInWeights[T]+=g;var P=--E.starts[y],D=--E.offsets[T];E.neighborhood[P]=T,E.neighborhood[D]=y,E.weights[P]=g,E.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}return o.prototype.bounds=s.prototype.bounds,o.prototype.inBounds=function(a){return[this.offsets[a],this.starts[a+1]]},o.prototype.outBounds=function(a){return[this.starts[a],this.offsets[a]]},o.prototype.project=s.prototype.project,o.prototype.projectIn=function(){var a=this,c={};return a.nodes.slice(0,this.C).forEach(function(l,u){c[l]=Array.from(a.neighborhood.slice(a.offsets[u],a.starts[u+1])).map(function(d){return a.nodes[d]})}),c},o.prototype.projectOut=function(){var a=this,c={};return a.nodes.slice(0,this.C).forEach(function(l,u){c[l]=Array.from(a.neighborhood.slice(a.starts[u],a.offsets[u])).map(function(d){return a.nodes[d]})}),c},o.prototype.isolate=function(a,c,l){var u=this.belongings[a];if(this.counts[u]===1)return u;var d=this.unused[--this.U],h=this.loops[a];return this.totalInWeights[u]-=c+h,this.totalInWeights[d]+=c+h,this.totalOutWeights[u]-=l+h,this.totalOutWeights[d]+=l+h,this.belongings[a]=d,this.counts[u]--,this.counts[d]++,d},o.prototype.move=function(a,c,l,u){var d=this.belongings[a],h=this.loops[a];this.totalInWeights[d]-=c+h,this.totalInWeights[u]+=c+h,this.totalOutWeights[d]-=l+h,this.totalOutWeights[u]+=l+h,this.belongings[a]=u;var p=this.counts[d]--===1;this.counts[u]++,p&&(this.unused[this.U++]=d)},o.prototype.computeNodeInDegree=function(a){var c,l,u,d=0;for(c=this.offsets[a],l=this.starts[a+1];c<l;c++)u=this.weights[c],d+=u;return d},o.prototype.computeNodeOutDegree=function(a){var c,l,u,d=0;for(c=this.starts[a],l=this.offsets[a];c<l;c++)u=this.weights[c],d+=u;return d},o.prototype.expensiveMove=function(a,c){var l=this.computeNodeInDegree(a),u=this.computeNodeOutDegree(a);this.move(a,l,u,c)},o.prototype.zoomOut=function(){var a=new Array(this.C-this.U),c={},l=this.nodes.length,u=0,d=0,h,p,x,b,g,f,S,E,_,w,y,T,m;for(h=0,x=this.C;h<x;h++)f=this.belongings[h],f in c||(c[f]=u,a[u]={inAdj:{},outAdj:{},totalInWeights:this.totalInWeights[f],totalOutWeights:this.totalOutWeights[f],internalWeights:0},u++),this.belongings[h]=c[f];var M,R;if(this.keepDendrogram){for(M=this.dendrogram[this.level],R=new(i.getPointerArray(u))(l),h=0;h<l;h++)R[h]=this.belongings[M[h]];this.dendrogram.push(R)}else for(h=0;h<l;h++)this.mapping[h]=this.belongings[this.mapping[h]];for(h=0,x=this.C;h<x;h++)for(f=this.belongings[h],_=this.offsets[h],E=a[f],T=E.inAdj,m=E.outAdj,E.internalWeights+=this.loops[h],p=this.starts[h],b=this.starts[h+1];p<b;p++){if(g=this.neighborhood[p],S=this.belongings[g],w=p<_,y=w?m:T,f===S){w&&(E.internalWeights+=this.weights[p]);continue}S in y||(y[S]=0),y[S]+=this.weights[p]}for(this.C=u,g=0,f=0;f<u;f++){E=a[f],T=E.inAdj,m=E.outAdj,f=+f,this.totalInWeights[f]=E.totalInWeights,this.totalOutWeights[f]=E.totalOutWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(S in m)this.neighborhood[g]=+S,this.weights[g]=m[S],d++,g++;this.offsets[f]=g;for(S in T)this.neighborhood[g]=+S,this.weights[g]=T[S],d++,g++}return this.starts[u]=d,this.E=d,this.U=0,this.level++,c},o.prototype.modularity=function(){var a,c,l,u,d,h=0,p=this.M,x=new Float64Array(this.C);for(l=0;l<this.C;l++)for(a=this.belongings[l],x[a]+=this.loops[l],u=this.starts[l],d=this.offsets[l];u<d;u++)c=this.belongings[this.neighborhood[u]],a===c&&(x[a]+=this.weights[u]);for(l=0;l<this.C;l++)h+=x[l]/p-this.totalInWeights[l]*this.totalOutWeights[l]/Math.pow(p,2)*this.resolution;return h},o.prototype.delta=function(a,c,l,u,d){var h=this.M,p=this.totalInWeights[d],x=this.totalOutWeights[d],b=this.loops[a];return c+=b,l+=b,u/h-(l*p+c*x)*this.resolution/(h*h)},o.prototype.deltaWithOwnCommunity=function(a,c,l,u,d){var h=this.M,p=this.totalInWeights[d],x=this.totalOutWeights[d],b=this.loops[a];return c+=b,l+=b,u/h-(l*(p-c)+c*(x-l))*this.resolution/(h*h)},o.prototype.collect=s.prototype.collect,o.prototype.assign=s.prototype.assign,o.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:o,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var c=["neighborhood","weights"],l=["counts","offsets","loops","belongings","totalInWeights","totalOutWeights"],u=this;return c.forEach(function(d){a[d]=u[d].slice(0,a.E)}),l.forEach(function(d){a[d]=u[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a},Fs.UndirectedLouvainIndex=s,Fs.DirectedLouvainIndex=o,Fs}var oa,Au;function Pv(){if(Au)return oa;Au=1;var i=kh(),e=Hh(),t=bv(),n=wv(),r=Av(),s=Tv().createRandomIndex,o=Cv(),a=o.UndirectedLouvainIndex,c=o.DirectedLouvainIndex,l={nodeCommunityAttribute:"community",getEdgeWeight:"weight",fastLocalMoves:!0,randomWalk:!0,resolution:1,rng:Math.random};function u(f,S,E){var _=f.get(S);typeof _>"u"&&(_=0),_+=E,f.set(S,_)}var d=1e-10;function h(f,S,E,_,w){return Math.abs(_-w)<d?f===S?!1:E>f:_>w}function p(f,S,E){var _=new a(S,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),w=s(E.rng),y=!0,T=!0,m,M,R=new n(Float64Array,_.C),P,D,K,Z,O,H,z,$,ee,ne,re,le,xe,Pe,te,X,oe=0,se=0,Le=[],Be,De;for(E.fastLocalMoves&&(P=new r(_.C));y;){if(ne=_.C,y=!1,T=!0,E.fastLocalMoves){for(De=0,H=E.randomWalk?w(ne):0,z=0;z<ne;z++,H++)$=H%ne,P.enqueue($);for(;P.size!==0;){for($=P.dequeue(),se++,re=0,R.clear(),m=_.belongings[$],D=_.starts[$],K=_.starts[$+1];D<K;D++)ee=_.neighborhood[D],Z=_.weights[D],M=_.belongings[ee],re+=Z,u(R,M,Z);for(Pe=_.fastDeltaWithOwnCommunity($,re,R.get(m)||0,m),xe=m,O=0;O<R.size;O++)M=R.dense[O],M!==m&&(le=R.vals[O],oe++,X=_.fastDelta($,re,le,M),te=h(xe,m,M,X,Pe),te&&(Pe=X,xe=M));if(Pe<0){if(xe=_.isolate($,re),xe===m)continue}else{if(xe===m)continue;_.move($,re,xe)}for(y=!0,De++,D=_.starts[$],K=_.starts[$+1];D<K;D++)ee=_.neighborhood[D],M=_.belongings[ee],M!==xe&&P.enqueue(ee)}Le.push(De)}else for(Be=[],Le.push(Be);T;){for(T=!1,De=0,H=E.randomWalk?w(ne):0,z=0;z<ne;z++,H++){for($=H%ne,se++,re=0,R.clear(),m=_.belongings[$],D=_.starts[$],K=_.starts[$+1];D<K;D++)ee=_.neighborhood[D],Z=_.weights[D],M=_.belongings[ee],re+=Z,u(R,M,Z);for(Pe=_.fastDeltaWithOwnCommunity($,re,R.get(m)||0,m),xe=m,O=0;O<R.size;O++)M=R.dense[O],M!==m&&(le=R.vals[O],oe++,X=_.fastDelta($,re,le,M),te=h(xe,m,M,X,Pe),te&&(Pe=X,xe=M));if(Pe<0){if(xe=_.isolate($,re),xe===m)continue}else{if(xe===m)continue;_.move($,re,xe)}T=!0,De++}Be.push(De),y=T||y}y&&_.zoomOut()}var Je={index:_,deltaComputations:oe,nodesVisited:se,moves:Le};return Je}function x(f,S,E){var _=new c(S,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),w=s(E.rng),y=!0,T=!0,m,M,R=new n(Float64Array,_.C),P,D,K,Z,O,H,z,$,ee,ne,re,le,xe,Pe,te,X,oe,se,Le,Be=0,De=0,Je=[],He,je;for(E.fastLocalMoves&&(P=new r(_.C));y;){if(le=_.C,y=!1,T=!0,E.fastLocalMoves){for(je=0,$=E.randomWalk?w(le):0,ee=0;ee<le;ee++,$++)ne=$%le,P.enqueue(ne);for(;P.size!==0;){for(ne=P.dequeue(),De++,xe=0,Pe=0,R.clear(),m=_.belongings[ne],D=_.starts[ne],K=_.starts[ne+1],Z=_.offsets[ne];D<K;D++)O=D<Z,re=_.neighborhood[D],H=_.weights[D],M=_.belongings[re],O?Pe+=H:xe+=H,u(R,M,H);for(oe=_.deltaWithOwnCommunity(ne,xe,Pe,R.get(m)||0,m),X=m,z=0;z<R.size;z++)M=R.dense[z],M!==m&&(te=R.vals[z],Be++,Le=_.delta(ne,xe,Pe,te,M),se=h(X,m,M,Le,oe),se&&(oe=Le,X=M));if(oe<0){if(X=_.isolate(ne,xe,Pe),X===m)continue}else{if(X===m)continue;_.move(ne,xe,Pe,X)}for(y=!0,je++,D=_.starts[ne],K=_.starts[ne+1];D<K;D++)re=_.neighborhood[D],M=_.belongings[re],M!==X&&P.enqueue(re)}Je.push(je)}else for(He=[],Je.push(He);T;){for(T=!1,je=0,$=E.randomWalk?w(le):0,ee=0;ee<le;ee++,$++){for(ne=$%le,De++,xe=0,Pe=0,R.clear(),m=_.belongings[ne],D=_.starts[ne],K=_.starts[ne+1],Z=_.offsets[ne];D<K;D++)O=D<Z,re=_.neighborhood[D],H=_.weights[D],M=_.belongings[re],O?Pe+=H:xe+=H,u(R,M,H);for(oe=_.deltaWithOwnCommunity(ne,xe,Pe,R.get(m)||0,m),X=m,z=0;z<R.size;z++)M=R.dense[z],M!==m&&(te=R.vals[z],Be++,Le=_.delta(ne,xe,Pe,te,M),se=h(X,m,M,Le,oe),se&&(oe=Le,X=M));if(oe<0){if(X=_.isolate(ne,xe,Pe),X===m)continue}else{if(X===m)continue;_.move(ne,xe,Pe,X)}T=!0,je++}He.push(je),y=T||y}y&&_.zoomOut()}var Qe={index:_,deltaComputations:Be,nodesVisited:De,moves:Je};return Qe}function b(f,S,E,_){if(!e(E))throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");var w=t(E);if(w==="mixed")throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");_=i(_,l);var y=0;if(E.size===0){if(f){E.forEachNode(function(D){E.setNodeAttribute(D,_.nodeCommunityAttribute,y++)});return}var T={};return E.forEachNode(function(D){T[D]=y++}),S?{communities:T,count:E.order,deltaComputations:0,dendrogram:null,level:0,modularity:NaN,moves:null,nodesVisited:0,resolution:_.resolution}:T}var m=w==="undirected"?p:x,M=m(S,E,_),R=M.index;if(!S){if(f){R.assign(_.nodeCommunityAttribute);return}return R.collect()}var P={count:R.C,deltaComputations:M.deltaComputations,dendrogram:R.dendrogram,level:R.level,modularity:R.modularity(),moves:M.moves,nodesVisited:M.nodesVisited,resolution:_.resolution};return f?(R.assign(_.nodeCommunityAttribute),P):(P.communities=R.collect(),P)}var g=b.bind(null,!1,!1);return g.assign=b.bind(null,!0,!1),g.detailed=b.bind(null,!1,!0),g.defaults=l,oa=g,oa}var Dv=Pv();const Lv=gx(Dv),nc=180,Iv=1.12,Nv=220,Uv=Object.freeze({question:-360,thought:-120,observation:-120,hypothesis:120,excerpt:180,quote:260,link:320,research_result:380});function Zr(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Fv(i){let e=Zr(i)||1;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}function Rc(i){return!!(i&&typeof i.id=="string"&&i.id)}function Cc(i,e){return i<e?`${i}:${e}`:`${e}:${i}`}function $s(i){return 120+Math.sqrt(Math.max(1,i))*42}function Ov(i,e,t){const n=Zr(`${i}:longitude`)/4294967295,r=Zr(`${i}:latitude`)/4294967295,s=360+Math.sqrt(t+1)*180+Math.sqrt(e+1)*54,o=n*Math.PI*2,a=Math.acos(2*r-1);return{x:Math.sin(a)*Math.cos(o)*s,y:Math.cos(a)*s,z:Math.sin(a)*Math.sin(o)*s}}function Bv(i,e){const t=Zr(`${i}:${e}:x`)/4294967295,n=Zr(`${i}:${e}:y`)/4294967295,r=t*Math.PI*2,s=Math.acos(2*n-1);return{x:Math.sin(s)*Math.cos(r),y:Math.cos(s),z:Math.sin(s)*Math.sin(r)}}function Gv(i){for(let n=0;n<16;n+=1){let r=!1;for(let s=0;s<i.length;s+=1){const o=i[s];for(let a=s+1;a<i.length;a+=1){const c=i[a];let l=c.x-o.x,u=c.y-o.y,d=c.z-o.z,h=Math.hypot(l,u,d);const p=o.radius+c.radius+nc;if(h>=p)continue;if(h<.001){const g=Bv(o.id,c.id);l=g.x,u=g.y,d=g.z,h=1}const b=(p-h)/2/h;o.x-=l*b,o.y-=u*b,o.z-=d*b,c.x+=l*b,c.y+=u*b,c.z+=d*b,r=!0}}if(!r)break}const e=i.reduce((n,r)=>({x:n.x+r.x,y:n.y+r.y,z:n.z+r.z}),{x:0,y:0,z:0}),t=Math.max(1,i.length);i.forEach(n=>{n.x-=e.x/t,n.y-=e.y/t,n.z-=e.z/t})}function zv(i,e){const t=i.map((a,c)=>({id:a.id,radius:a.radius,...Ov(a.id,c,i.length)}));if(t.length<2)return t;const n=new Map(t.map(a=>[a.id,a])),r=e.map(a=>({...a})),s=Hu(r).id(a=>a.id).distance(a=>a.source.radius+a.target.radius+nc*1.7).strength(a=>Math.min(.18,.06+a.weight*.025));return Vu(t,3).randomSource(Fv(i.map(({id:a})=>a).join("|"))).force("links",s).force("charge",Wu().strength(-1150).distanceMax(5e3)).force("collision",$u().radius(a=>a.radius+nc).strength(1).iterations(2)).force("center",Sd(0,0,0).strength(.1)).velocityDecay(.48).stop().tick(Nv),Gv(t),i.map(({id:a})=>n.get(a))}function kv(i,e){const t=new Ac;i.forEach(r=>t.addNode(r));const n=new Set;return e.forEach(({sourceId:r,targetId:s})=>{if(r===s)return;const o=Cc(r,s);n.has(o)||(n.add(o),t.addEdge(r,s,{weight:1}))}),t}function Hv(i,e){const t=e.filter(o=>i.degree(o)===0),n=Lv(i,{randomWalk:!1,resolution:Iv}),r=new Map;e.forEach(o=>{if(i.degree(o)===0)return;const a=String(n[o]),c=r.get(a)||[];c.push(o),r.set(a,c)});const s=[...r.values()].map(o=>o.sort()).map(o=>({id:`cluster:${o[0]}`,nodeIds:o}));return t.length&&s.push({id:"cluster:unlinked",nodeIds:t.sort()}),s.sort((o,a)=>o.id.localeCompare(a.id))}function Vv(i,e){const t=new Map;return i.forEach(({sourceId:n,targetId:r})=>{const s=e.get(n)?.id,o=e.get(r)?.id;if(!s||!o||s===o)return;const a=Cc(s,o),c=t.get(a);if(c){c.weight+=1;return}t.set(a,{source:s,target:o,weight:1})}),[...t.values()]}function ic(i,e,t){return t!==nn.KNOWLEDGE_LAYERS?{...e.anchor}:{x:e.anchor.x,y:e.anchor.y,z:Uv[i.kind]||0}}function Wv(i=[],e=[],t=nn.CONSTELLATIONS){const n=si(t),r=new Map(i.filter(Rc).map(({id:c,kind:l})=>[c,l||"thought"])),s=[...r.entries()].map(([c,l])=>`${c}:${l}`).sort(),o=new Set(r.keys()),a=e.filter(({sourceId:c,targetId:l})=>typeof c=="string"&&typeof l=="string"&&c!==l&&o.has(c)&&o.has(l)).map(({sourceId:c,targetId:l})=>Cc(c,l)).sort();return`${n}|${s.join(",")}|${a.join(",")}`}function Wh(i=[],e=[],t=nn.CONSTELLATIONS){const n=si(t),r=i.filter(Rc),s=[...new Set(r.map(({id:g})=>g))].sort(),o=new Set(s),a=e.filter(({sourceId:g,targetId:f})=>typeof g=="string"&&typeof f=="string"&&g!==f&&o.has(g)&&o.has(f));if(!s.length)return{clusters:[],clusterByNodeId:new Map,interClusterLinks:[],nodeLayoutById:new Map};const c=kv(s,a),l=Hv(c,s).map(g=>({...g,radius:$s(g.nodeIds.length)})),u=new Map;l.forEach(g=>{g.nodeIds.forEach(f=>u.set(f,g))});const d=Vv(a,u),h=zv(l,d),p=new Map(h.map(g=>[g.id,g]));l.forEach(g=>{g.anchor=p.get(g.id)||{x:0,y:0,z:0}});const x=new Map(r.map(g=>[g.id,g])),b=new Map(s.map(g=>{const f=u.get(g),S=x.get(g);return[g,{clusterId:f.id,clusterAnchor:ic(S,f,n)}]}));return{clusters:l,clusterByNodeId:u,interClusterLinks:d,nodeLayoutById:b}}function Xv(i,{node:e,anchorNodeId:t,mode:n=nn.CONSTELLATIONS}={}){const r=i?.clusterByNodeId?.get(t),s=i?.nodeLayoutById?.get(t);if(!r||!s||!Rc(e))return null;const o=si(n);if(r.id==="cluster:unlinked"){const h=r.nodeIds.filter(E=>E!==t),p=[t,e.id].sort(),x={...r,id:`cluster:${p[0]}`,nodeIds:p,radius:$s(p.length),anchor:{...r.anchor}},b=h.length?{...r,nodeIds:h,radius:$s(h.length)}:null,g=i.clusters.filter(E=>E.id!==r.id).concat(b?[b,x]:[x]).sort((E,_)=>E.id.localeCompare(_.id)),f=new Map(i.clusterByNodeId);h.forEach(E=>f.set(E,b)),p.forEach(E=>f.set(E,x));const S=new Map(i.nodeLayoutById);return S.set(t,{...s,clusterId:x.id}),S.set(e.id,{clusterId:x.id,clusterAnchor:ic(e,x,o)}),{...i,clusters:g,clusterByNodeId:f,nodeLayoutById:S}}const a=[...new Set([...r.nodeIds,e.id])].sort(),c={...r,nodeIds:a,radius:$s(a.length)},l=i.clusters.map(h=>h.id===c.id?c:h),u=new Map(i.clusterByNodeId);a.forEach(h=>u.set(h,c));const d=new Map(i.nodeLayoutById);return d.set(e.id,{clusterId:c.id,clusterAnchor:ic(e,c,o)}),{...i,clusters:l,clusterByNodeId:u,nodeLayoutById:d}}const Xh=220,$v=170,aa=900,qv=58,rc=Object.freeze({x:.055,y:.18,z:.055}),Yv=Object.freeze({internalLinkStrength:.2,externalLinkStrength:.07,externalLinkDistance:220});function $h(i){const e=new Map;return(Array.isArray(i)?i:[]).forEach(t=>{typeof t?.id=="string"&&t.id&&!e.has(t.id)&&e.set(t.id,t)}),[...e.values()].sort((t,n)=>t.id.localeCompare(n.id))}function qh(i,e){const t=new Set;return(Array.isArray(i)?i:[]).filter(({sourceId:n,targetId:r}={})=>n!==r&&e.has(n)&&e.has(r)).filter(({sourceId:n,targetId:r})=>{const s=`${n}\0${r}`;return t.has(s)?!1:(t.add(s),!0)}).sort((n,r)=>n.sourceId.localeCompare(r.sourceId)||n.targetId.localeCompare(r.targetId))}function Tu(i,e,t=!1){const n=new Map(i.map(r=>[r,new Set]));return e.forEach(({sourceId:r,targetId:s})=>{n.get(t?s:r).add(t?r:s)}),new Map([...n].map(([r,s])=>[r,[...s].sort()]))}function Kv(i,e,t){const n=new Set,r=[];i.forEach(a=>{if(n.has(a))return;n.add(a);const c=[{id:a,nextIndex:0}];for(;c.length;){const l=c[c.length-1],u=e.get(l.id)||[];if(l.nextIndex<u.length){const d=u[l.nextIndex];if(l.nextIndex+=1,n.has(d))continue;n.add(d),c.push({id:d,nextIndex:0});continue}r.push(l.id),c.pop()}});const s=new Set,o=[];return r.reverse().forEach(a=>{if(s.has(a))return;s.add(a);const c=[],l=[a];for(;l.length;){const u=l.pop();c.push(u),(t.get(u)||[]).forEach(d=>{s.has(d)||(s.add(d),l.push(d))})}c.sort(),o.push({id:`hierarchy:${c[0]}`,nodeIds:c})}),o.sort((a,c)=>a.id.localeCompare(c.id))}function Zv(i,e,t,n){const r=new Map;i.forEach(o=>{const a=n.get(o)||0,c=r.get(a)||[];c.push(o),r.set(a,c)}),r.forEach(o=>o.sort());const s=[...r.keys()].sort((o,a)=>o-a);for(let o=0;o<4;o+=1){const a=new Map;s.forEach(l=>{r.get(l).forEach((u,d)=>a.set(u,d))}),(o%2===0?s:[...s].reverse()).forEach(l=>{const u=r.get(l),d=o%2===0?t:e;u.sort((h,p)=>{const x=b=>{const g=[...d.get(b)||[]].map(f=>a.get(f)).filter(Number.isFinite);return g.length?g.reduce((f,S)=>f+S,0)/g.length:a.get(b)||0};return x(h)-x(p)||h.localeCompare(p)})})}return r}function Jv(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)/4294967295}function jv(i=[],e=[]){const t=$h(i),n=new Set(t.map(({id:s})=>s)),r=qh(e,n);return`hierarchy|${t.map(({id:s})=>s).join(",")}|${r.map(({sourceId:s,targetId:o})=>`${s}>${o}`).join(",")}`}function Qv(i=[],e=[]){const n=$h(i).map(({id:T})=>T),r=new Set(n),s=qh(e,r),o=Tu(n,s),a=Tu(n,s,!0),c=Kv(n,o,a),l=new Map(c.map(T=>[T.id,T])),u=new Map;c.forEach(T=>{T.nodeIds.forEach(m=>u.set(m,T))});const d=new Map(c.map(({id:T})=>[T,new Set])),h=new Map(c.map(({id:T})=>[T,new Set]));s.forEach(({sourceId:T,targetId:m})=>{const M=u.get(T).id,R=u.get(m).id;M!==R&&(d.get(M).add(R),h.get(R).add(M))});const p=n.filter(T=>!o.get(T)?.length&&!a.get(T)?.length),x=new Set(p.map(T=>u.get(T).id)),b=c.map(({id:T})=>T).filter(T=>!x.has(T)),g=new Map(b.map(T=>[T,new Set]));b.forEach(T=>{d.get(T).forEach(m=>{g.get(T).add(m),g.get(m).add(T)})});const f=new Set,S=[];b.sort().forEach(T=>{if(f.has(T))return;f.add(T);const m=[],M=[T];for(let R=0;R<M.length;R+=1){const P=M[R];m.push(P),[...g.get(P)].sort().forEach(D=>{f.has(D)||(f.add(D),M.push(D))})}m.sort(),S.push({id:`graph:${m[0]}`,componentIds:m})});const E=new Map,_=new Map,w=new Map,y=Math.max(1,Math.ceil(Math.sqrt(S.length||1)));if(S.forEach((T,m)=>{const M=new Set(T.componentIds),R=new Map(T.componentIds.map(H=>[H,[...h.get(H)].filter(z=>M.has(z)).length])),P=new Map(T.componentIds.map(H=>[H,0])),D=T.componentIds.filter(H=>R.get(H)===0).sort();for(let H=0;H<D.length;H+=1){const z=D[H];[...d.get(z)].sort().forEach($=>{M.has($)&&(P.set($,Math.max(P.get($),P.get(z)+1)),R.set($,R.get($)-1),R.get($)===0&&D.push($))})}const K=Zv(T.componentIds,d,h,P),Z=m%y*aa,O=Math.floor(m/y)*aa;K.forEach((H,z)=>{H.forEach(($,ee)=>{const ne=l.get($),re=Z+(ee-(H.length-1)/2)*$v,le=z===0?0:-z*Xh;ne.nodeIds.forEach((xe,Pe)=>{const te=ne.nodeIds.length>1?Pe/ne.nodeIds.length*Math.PI*2:0,X=ne.nodeIds.length>1?qv:0;E.set(xe,{groupId:ne.id,layoutAnchor:{x:re+Math.cos(te)*X,y:le,z:O+Math.sin(te)*X},layoutStrength:{...rc}}),_.set(xe,z),w.set(xe,ne.id)})})})}),p.length){const T=Math.max(1,Math.ceil(Math.sqrt(p.length))),m=Math.ceil(S.length/y),M=S.length?m*aa:0;p.forEach((R,P)=>{const D=P%T,K=Math.floor(P/T);E.set(R,{groupId:"hierarchy:unlinked",layoutAnchor:{x:(D-(T-1)/2)*105,y:0,z:M+K*105},layoutStrength:{...rc}}),_.set(R,0),w.set(R,"hierarchy:unlinked")})}return{groups:[...c.filter(({id:T})=>!x.has(T)).map(({id:T,nodeIds:m})=>({id:T,nodeIds:m})),...p.length?[{id:"hierarchy:unlinked",nodeIds:p}]:[]],nodeLayoutById:E,physics:{...Yv},strategyState:{rankByNodeId:_,groupByNodeId:w}}}function ey(i,{node:e,anchorNodeId:t}={}){const n=i?.nodeLayoutById?.get(t);if(!n||typeof e?.id!="string"||!e.id)return null;const r=Jv(`${t}:${e.id}`)*Math.PI*2,s=(i.strategyState?.rankByNodeId?.get(t)||0)+1,o=`hierarchy:${e.id}`,a=new Map(i.nodeLayoutById);a.set(e.id,{groupId:o,layoutAnchor:{x:n.layoutAnchor.x+Math.cos(r)*70,y:n.layoutAnchor.y-Xh,z:n.layoutAnchor.z+Math.sin(r)*70},layoutStrength:{...rc}});const c=new Map(i.strategyState?.rankByNodeId||[]);c.set(e.id,s);const l=new Map(i.strategyState?.groupByNodeId||[]);return l.set(e.id,o),{...i,groups:[...i.groups||[],{id:o,nodeIds:[e.id]}],nodeLayoutById:a,strategyState:{...i.strategyState,rankByNodeId:c,groupByNodeId:l}}}const ei=1440*60*1e3,ty=[ei,7*ei,30*ei,90*ei,365*ei],Ru=24,sc=260,Yh=Object.freeze({x:.2,y:.035,z:.035}),ny=Object.freeze({internalLinkStrength:.08,externalLinkStrength:.025,externalLinkDistance:340});function Kh(i){const e=new Map;return(Array.isArray(i)?i:[]).forEach(t=>{typeof t?.id=="string"&&t.id&&!e.has(t.id)&&e.set(t.id,t)}),[...e.values()].sort((t,n)=>t.id.localeCompare(n.id))}function no(i){return Number.isFinite(i?.createdAt)&&i.createdAt>0?i.createdAt:null}function iy(i,e){return i<e?`${i}\0${e}`:`${e}\0${i}`}function ry(i){const e=ty.find(t=>Math.ceil(i/t)<=Ru);return e||Math.max(ei,Math.ceil(i/Ru/ei)*ei)}function sy(i=[],e=[]){const t=Kh(i),n=new Set(t.map(({id:s})=>s)),r=[...new Set((Array.isArray(e)?e:[]).filter(({sourceId:s,targetId:o}={})=>s!==o&&n.has(s)&&n.has(o)).map(({sourceId:s,targetId:o})=>iy(s,o)))].sort();return`timeline|${t.map(s=>`${s.id}:${no(s)??"unknown"}`).join(",")}|${r.join(",")}`}function oy(i=[],e=[]){const t=Kh(i),n=t.map(no).filter(Number.isFinite),r=n.length?Math.min(...n):null,s=n.length?Math.max(...n):null,o=n.length?ry(Math.max(0,s-r)):ei,a=n.length?Math.floor((s-r)/o):0,c=a/2,l=-(c+1.5)*sc,u=Wh(t,e,nn.CONSTELLATIONS),d=new Map,h=new Map;return t.forEach(p=>{const x=no(p),b=x===null?null:Math.floor((x-r)/o),g=u.nodeLayoutById.get(p.id),f=g?.clusterAnchor||{y:0,z:0};d.set(p.id,{groupId:g?.clusterId||"timeline:unlinked",layoutAnchor:{x:b===null?l:(b-c)*sc,y:f.y,z:f.z},layoutStrength:{...Yh}}),h.set(p.id,b)}),{groups:u.clusters,nodeLayoutById:d,physics:{...ny},strategyState:{minCreatedAt:r,bucketSize:o,maxBucket:a,originBucket:c,unknownX:l,bucketByNodeId:h}}}function ay(i,{node:e,anchorNodeId:t}={}){const n=i?.strategyState;if(!n||typeof e?.id!="string"||!e.id)return null;const r=no(e),s=r===null||n.minCreatedAt===null?null:Math.floor((r-n.minCreatedAt)/n.bucketSize),o=i.nodeLayoutById.get(t),a=new Map(i.nodeLayoutById);a.set(e.id,{groupId:o?.groupId||"timeline:unlinked",layoutAnchor:{x:s===null?n.unknownX:(s-n.originBucket)*sc,y:o?.layoutAnchor.y||0,z:o?.layoutAnchor.z||0},layoutStrength:{...Yh}});const c=new Map(n.bucketByNodeId||[]);return c.set(e.id,s),{...i,nodeLayoutById:a,strategyState:{...n,maxBucket:s===null?n.maxBucket:Math.max(n.maxBucket,s),bucketByNodeId:c}}}const cy=Object.freeze({x:.026,y:.026,z:.026}),Zh=Object.freeze({internalLinkStrength:.56,externalLinkStrength:.1,externalLinkDistance:460});function Jh(i){return{groups:i.clusters,nodeLayoutById:new Map([...i.nodeLayoutById].map(([e,t])=>[e,{groupId:t.clusterId,layoutAnchor:{x:t.clusterAnchor.x,y:t.clusterAnchor.y,z:t.clusterAnchor.z},layoutStrength:{...cy}}])),physics:{...Zh},strategyPlan:i}}function ly(i=[],e=[],t){const n=si(t);return n===nn.HIERARCHY?jv(i,e):n===nn.TIMELINE?sy(i,e):Wv(i,e,n)}function uy(i=[],e=[],t){const n=si(t);return n===nn.HIERARCHY?Qv(i,e):n===nn.TIMELINE?oy(i,e):Jh(Wh(i,e,n))}function hy(i,e,t){const n=si(t);if(n===nn.HIERARCHY)return ey(i,e);if(n===nn.TIMELINE)return ay(i,e);const r=Xv(i?.strategyPlan,{...e,mode:n});return r?Jh(r):null}const Cu=Zh,Pu=Object.freeze({tight:72,normal:118,loose:190}),dy=460,ca=Object.freeze({x:72,y:-36,z:48}),fy=.22,py=.9;function kr(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function Du(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function my(i,e=0){const t=Du(`${i}:x`)/4294967295,n=Du(`${i}:y`)/4294967295,r=42+Math.sqrt(e+1)*18,s=t*Math.PI*2,o=Math.acos(2*n-1);return{x:Math.sin(o)*Math.cos(s)*r,y:Math.cos(o)*r,z:Math.sin(o)*Math.sin(s)*r}}function gy({onTick:i=()=>{},onStable:e=()=>{}}={}){let t=[],n=[],r=null,s=null,o={...Cu},a=null;const c=new Set;let l=!1;const u=Hu([]).id(m=>m.id).distance(m=>m.internal?Pu[m.spacing]||Pu.normal:o.externalLinkDistance||dy).strength(m=>m.internal?o.internalLinkStrength:o.externalLinkStrength),d=Vu([],3).force("links",u).force("charge",Wu().strength(-58).distanceMax(620)).force("collision",$u().radius(m=>m.radius+8).strength(.86)).force("layout-x",_d(m=>m.layoutAnchor.x).strength(m=>m.layoutStrength.x)).force("layout-y",xd(m=>m.layoutAnchor.y).strength(m=>m.layoutStrength.y)).force("layout-z",bd(m=>m.layoutAnchor.z).strength(m=>m.layoutStrength.z)).alphaDecay(.035).velocityDecay(.42).on("tick",()=>i(t,n)).on("end",()=>{const m=p();e(t,{transition:m})});function h(){c.forEach(m=>{const M=t.find(R=>R.id===m);!M||M.pinned||(M.fx=null,M.fy=null,M.fz=null,M.vx=0,M.vy=0,M.vz=0)}),c.clear()}function p(){const m=a;return h(),a=null,m}function x(m={},M={}){if(l)return;p();const R=new Map(t.map(te=>[te.id,te])),P=Array.isArray(m.nodes)?m.nodes:[],D=Array.isArray(m.links)?m.links:[],K=new Set(P.map(te=>te.id)),Z=si(m.layoutMode),O=Xu(M.transition),H=P.find(te=>te.id===O.nodeId),z=R.get(O.anchorId),$=[...R.keys()].every(te=>K.has(te)),ee=D.some(({sourceId:te,targetId:X})=>te===O.anchorId&&X===O.nodeId||X===O.anchorId&&te===O.nodeId);a=O.kind===ln.INSERT_LINKED_NODE&&H&&z&&!R.has(H.id)&&P.length===R.size+1&&$&&ee?O:{kind:O.kind===ln.REBUILD?ln.REBUILD:ln.RECONCILE};const re=ly(P,D,Z);if(a.kind===ln.INSERT_LINKED_NODE&&r){const te=hy(r,{node:H,anchorNodeId:a.anchorId},Z);te?(r=te,s=re):a={kind:ln.RECONCILE}}(a.kind===ln.REBUILD||re!==s)&&(r=uy(P,D,Z),s=re),o={...Cu,...r?.physics||{}},t=P.map((te,X)=>{const oe=R.get(te.id),se=r.nodeLayoutById.get(te.id),Le=kr(te.pinnedPosition)?te.pinnedPosition:null,Be=a.kind===ln.INSERT_LINKED_NODE&&te.id===a.nodeId&&z?{x:z.x+ca.x,y:z.y+ca.y,z:z.z+ca.z}:null,De=a.kind===ln.INSERT_LINKED_NODE&&kr(oe)?oe:null,Je=Le||Be||De||(kr(te)?te:null)||(kr(oe)?oe:null)||my(te.id,X),He=Le?.pinned===!0;return{...te,groupId:se?.groupId||"group:unlinked",layoutAnchor:se?.layoutAnchor||{x:0,y:0,z:0},layoutStrength:se?.layoutStrength||{x:.026,y:.026,z:.026},x:Je.x,y:Je.y,z:Je.z,vx:Number.isFinite(oe?.vx)?oe.vx:0,vy:Number.isFinite(oe?.vy)?oe.vy:0,vz:Number.isFinite(oe?.vz)?oe.vz:0,pinned:He,fx:He?Je.x:null,fy:He?Je.y:null,fz:He?Je.z:null}}),a.kind===ln.INSERT_LINKED_NODE&&t.forEach(te=>{te.id===a.nodeId||te.pinned||!R.has(te.id)||(te.fx=te.x,te.fy=te.y,te.fz=te.z,c.add(te.id))});const le=new Set(t.map(te=>te.id)),xe=new Map(t.map(te=>[te.id,te]));if(n=D.filter(te=>le.has(te.sourceId)&&le.has(te.targetId)&&te.sourceId!==te.targetId).map(te=>({...te,internal:xe.get(te.sourceId).groupId===xe.get(te.targetId).groupId,source:te.sourceId,target:te.targetId})),d.nodes(t),u.links(n),!t.length){d.stop(),i(t,n);const te=p();e(t,{transition:te});return}const Pe=a.kind===ln.INSERT_LINKED_NODE?fy:py;d.alpha(Pe).alphaTarget(0).restart()}function b(m){return t.find(M=>M.id===m)||null}function g(){return r?.strategyPlan||null}function f(m){const M=b(m);return!M||l?null:(M.fx=M.x,M.fy=M.y,M.fz=M.z,d.alphaTarget(.16).restart(),M)}function S(m,M){const R=b(m);return!R||!kr(M)?null:(R.fx=M.x,R.fy=M.y,R.fz=M.z,R.x=M.x,R.y=M.y,R.z=M.z,i(t,n),R)}function E(m,{pinned:M}={}){const R=b(m);return!R||l?null:(R.pinned=M??R.pinned,R.pinned?(R.fx=R.x,R.fy=R.y,R.fz=R.z):(R.fx=null,R.fy=null,R.fz=null),d.alphaTarget(0).alpha(.24).restart(),R)}function _(m,M){const R=b(m);return!R||l?null:(R.pinned=!!M,R.pinned?(R.fx=R.x,R.fy=R.y,R.fz=R.z):(R.fx=null,R.fy=null,R.fz=null),d.alpha(.28).restart(),R)}function w(m=.32){!l&&t.length&&d.alpha(m).restart()}function y(){d.stop(),p()}function T(){l=!0,d.stop(),p(),d.on("tick",null).on("end",null),t=[],n=[]}return{beginDrag:f,dispose:T,dragNode:S,endDrag:E,getLinks:()=>n,getNode:b,getNodes:()=>t,getPresentationPlan:g,reheat:w,setGraph:x,setPinned:_,stop:y}}const _i=Object.freeze({SELECT:0,BACK:1,FOCUS:2,FIT_ALL:3,LEFT_BUMPER:4,RIGHT_BUMPER:5,LEFT_TRIGGER:6,RIGHT_TRIGGER:7}),_y=.14,la=.05;function Lu(i){return Number.isFinite(i)?i:0}function ua(i){return i?Number.isFinite(i.value)?i.value:i.pressed?1:0:0}function xy(i){const e=Math.abs(i);return e<=la?0:Math.sign(i)*((e-la)/(1-la))}function Iu(i,e,t=_y){const n=Lu(i),r=Lu(e),s=Math.hypot(n,r);if(s<=t)return{x:0,y:0};const o=Math.min(1,(s-t)/Math.max(1e-4,1-t));return{x:n/s*o,y:r/s*o}}function vy(i,e=[]){const t=Array.from(i||[]).find(s=>s?.connected&&s.mapping==="standard");if(!t)return null;const n=Array.from(t.buttons||[]).map(s=>!!(s?.pressed||ua(s)>.5)),r=s=>!!(n[s]&&!e[s]);return{index:t.index,leftStick:Iu(t.axes?.[0],t.axes?.[1]),rightStick:Iu(t.axes?.[2],t.axes?.[3]),roll:Number(n[_i.LEFT_BUMPER])-Number(n[_i.RIGHT_BUMPER]),thrust:xy(ua(t.buttons?.[_i.RIGHT_TRIGGER])-ua(t.buttons?.[_i.LEFT_TRIGGER])),selectPressed:r(_i.SELECT),backPressed:r(_i.BACK),focusPressed:r(_i.FOCUS),fitAllPressed:r(_i.FIT_ALL),buttons:n}}const Nu=Math.sin(tn.degToRad(5)),yy=Math.sin(tn.degToRad(18)),My=1e-6;function Sy(){const i=new Vn,e=new N,t=new N;return function(r,s){i.copy(r.quaternion).invert(),e.set(0,1,0).applyQuaternion(i);const o=Math.hypot(e.x,e.y)<yy?e.z<0?"up":"down":null;let a="empty",c=null;if(s)if(t.copy(s).sub(r.position),t.lengthSq()<My**2)a="at-center";else{t.applyQuaternion(i).normalize();const l=Math.hypot(t.x,t.y);a=t.z>=0?"behind":l<Nu?"ahead":"direction",l>=Nu&&(c=tn.radToDeg(Math.atan2(t.x,t.y)))}return{upX:e.x,upY:e.y,pole:o,equatorScale:Math.abs(e.z),equatorRotation:tn.radToDeg(Math.atan2(e.x,e.y)),centerState:a,bearing:c}}}const Uu=Object.freeze({empty:"No thoughts","at-center":"At center",ahead:"Ahead",behind:"Behind",direction:"Turn to center"});function Ey({container:i,onLevel:e,onCenter:t}){const n=Sy(),r=document.createElement("div");r.className="spatial-orientation",r.setAttribute("role","group"),r.setAttribute("aria-label","Spatial orientation"),r.innerHTML=`
    <button class="spatial-orientation-level" type="button"
      aria-label="Level view" title="Level view without moving the camera">
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle class="orientation-globe" cx="40" cy="40" r="28" />
        <ellipse class="orientation-equator" cx="40" cy="40" rx="28" ry="1" />
        <line class="orientation-axis" x1="40" y1="15" x2="40" y2="65" />
        <g class="orientation-pole orientation-up">
          <rect x="-15" y="-8" width="30" height="16" rx="8" />
          <text y="3.5">Up</text>
        </g>
        <g class="orientation-pole orientation-down">
          <rect x="-17" y="-8" width="34" height="16" rx="8" />
          <text y="3.5">Down</text>
        </g>
        <text class="orientation-pole-view" x="40" y="38" hidden>
          <tspan x="40">Looking</tspan><tspan x="40" dy="13"></tspan>
        </text>
      </svg>
    </button>
    <button class="spatial-orientation-center" type="button" disabled
      aria-label="Show entire graph" title="Show entire graph">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g class="orientation-center-arrow" hidden>
          <path d="M12 20V4M6 10l6-6 6 6" />
        </g>
        <g class="orientation-center-target">
          <circle cx="12" cy="12" r="6" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        </g>
        <path class="orientation-center-behind" d="M7 18V9a5 5 0 0 1 10 0v9m-4-4 4 4 4-4" hidden />
      </svg>
      <span class="orientation-center-copy">
        <span>Center</span><span class="orientation-center-status">No thoughts</span>
      </span>
    </button>
  `;const s=r.querySelector(".spatial-orientation-level"),o=r.querySelector(".spatial-orientation-center"),a=r.querySelector(".orientation-equator"),c=r.querySelector(".orientation-axis"),l=r.querySelector(".orientation-up"),u=r.querySelector(".orientation-down"),d=r.querySelector(".orientation-pole-view"),h=r.querySelector(".orientation-center-arrow"),p=r.querySelector(".orientation-center-target"),x=r.querySelector(".orientation-center-behind"),b=r.querySelector(".orientation-center-status");function g(f){(f.key==="Enter"||f.key===" ")&&f.stopPropagation()}return s.addEventListener("click",e),o.addEventListener("click",t),r.addEventListener("keydown",g),i.append(r),{update({camera:f,graphCenter:S}){const E=n(f,S),_=E.upX*25,w=-E.upY*25;a.setAttribute("ry",Math.max(.1,E.equatorScale*28)),a.setAttribute("transform",`rotate(${E.equatorRotation} 40 40)`),l.setAttribute("transform",`translate(${40+_} ${40+w})`),u.setAttribute("transform",`translate(${40-_} ${40-w})`),c.setAttribute("x1",40+_),c.setAttribute("y1",40+w),c.setAttribute("x2",40-_),c.setAttribute("y2",40-w),l.toggleAttribute("hidden",!!E.pole),u.toggleAttribute("hidden",!!E.pole),c.toggleAttribute("hidden",!!E.pole),d.toggleAttribute("hidden",!E.pole),E.pole&&(d.lastElementChild.textContent=E.pole);const y=E.bearing!==null;h.toggleAttribute("hidden",!y),y&&h.setAttribute("transform",`rotate(${E.bearing} 12 12)`),x.toggleAttribute("hidden",E.centerState!=="behind"||y),p.toggleAttribute("hidden",y||E.centerState==="behind"),r.dataset.centerState!==E.centerState&&(r.dataset.centerState=E.centerState,o.disabled=E.centerState==="empty",b.textContent=Uu[E.centerState],o.setAttribute("aria-label",`Show entire graph. ${Uu[E.centerState]}.`))},dispose(){s.removeEventListener("click",e),o.removeEventListener("click",t),r.removeEventListener("keydown",g),r.remove()}}}const jh=60,by=8e3,Fu=8,wy=5,Os=280,Ay=.05,Ty=1.15,Ry=90,Cy=1600,Py=.05,Ou=1.8,Dy=1.6,Ly=2200,Iy=7361989,Ny=2394864,Bu=7889112,Uy=10129361,Fy=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),Gu=Object.freeze({thought:7361989,observation:2389930,excerpt:5860764,question:10512906,hypothesis:8014784,quote:10702700,link:2522486,research_result:3569754}),zu=Object.freeze({thought:"#7055c5",observation:"#2477aa",excerpt:"#596d9c",question:"#a06a0a",hypothesis:"#7a4bc0",quote:"#a34f6c",link:"#267d76",research_result:"#36785a"});function yi(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function ur(i){return Number.isFinite(i)?Math.atan2(Math.sin(i),Math.cos(i)):0}function Qh(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function Oy(i){const e=Qh(i);return!yi(e?.position)||!yi(e?.target)?null:{...e,roll:ur(e.roll)}}function ku(i){const e=Qh(i);return e?.version!==1||typeof e.positions!="object"?{}:Object.fromEntries(Object.entries(e.positions).filter(([,t])=>yi(t)).slice(0,xi))}function By(i){return Array.from({length:jh},()=>{const e=document.createElement("span");return e.className="spatial-label",e.hidden=!0,i.append(e),e})}function Bs(i,e){return typeof i=="object"&&i?i.id:e}function zy({container:i,theme:e="light",storageKey:t,layoutStorageKey:n,layoutMode:r=nn.CONSTELLATIONS,onThoughtSelect:s=()=>{},onClusterOpen:o=()=>{},onConnectionTargetToggle:a=()=>{},onThoughtActivate:c=()=>{},onThoughtMove:l=()=>{},onDismissRequest:u=()=>{},onError:d=()=>{}}){const h=new Of,p=new xn(48,1,1,1e4);p.up.set(0,1,0);const x=new tx({alpha:!0,antialias:!0,powerPreference:"high-performance"});x.outputColorSpace=un,x.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),x.domElement.className="spatial-canvas",x.domElement.setAttribute("aria-hidden","true");const b=document.createElement("div");b.className="spatial-label-layer";const g=By(b),f=document.createElement("span");f.className="spatial-gamepad-reticle",f.setAttribute("aria-hidden","true"),i.prepend(x.domElement,b,f);const S=new ix(p,x.domElement);S.enableDamping=!0,S.dampingFactor=.075,S.minDistance=90,S.maxDistance=5e3,S.minPolarAngle=tn.degToRad(10),S.maxPolarAngle=tn.degToRad(170),S.screenSpacePanning=!0;const E=Oy(t);E?(p.position.set(E.position.x,E.position.y,E.position.z),S.target.set(E.target.x,E.target.y,E.target.z)):(p.position.set(0,160,720),S.target.set(0,0,0)),S.update();const _=new to(1,2),w=new $r({color:16777215}),y=new ws(_,w,xi);y.instanceMatrix.setUsage(os),y.frustumCulled=!1,y.count=0,h.add(y);const T=new $r({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),m=new ws(_,T,xi);m.instanceMatrix.setUsage(os),m.frustumCulled=!1,m.count=0,h.add(m);const M=new to(1,3),R=new $r({color:Bu,transparent:!0,opacity:.78}),P=new ws(M,R,xi);P.instanceMatrix.setUsage(os),P.frustumCulled=!1,P.count=0,h.add(P);const D=new ws(M,T,xi);D.instanceMatrix.setUsage(os),D.frustumCulled=!1,D.count=0,h.add(D);const K=new on,Z=new Ws({color:e==="dark"?11183293:9277866,transparent:!0,opacity:e==="dark"?.5:.42}),O=new Ho(K,Z);O.frustumCulled=!1,h.add(O);const H=new on,z=new Ws({color:e==="dark"?10323183:7361989,transparent:!0,opacity:.9}),$=new Ho(H,z);$.frustumCulled=!1,h.add($);const ee=new on,ne=new Ws({color:e==="dark"?7827597:10064557,transparent:!0,opacity:e==="dark"?.3:.24}),re=new Ho(ee,ne);re.frustumCulled=!1,h.add(re);const le=new rp,xe=new Ve,Pe=new vt,te=new N,X=new N(1,1,1),oe=new Vn,se=new at,Le=new at(e==="dark"?1512735:14605290),Be=new at(16777215),De=new vt,Je=new vc,He=new N,je=new jn,Qe=new N,nt=new N,Ze=new N,wt=new N,Rt=new N,Mt=new N,ut=new Qa,ft=new bi,U=new Hi,Dt=new N;let et=[],C=[],v=[],k=[],V=[],j=[],ae=new Map,ge=[],Q=new Map,ie=[],_e=new Map,Ue=new Map,ve=new Map,pe=rs(),Ie=null,we=null,Ge=null,I=null,de=new Set,q=null,ue=!1,ye=null,J=null,fe=null,Ee=null,pt=null,ct=!1,Ft=null,Yt=[],Vi=null,wi=!1,Ai=0,Ti=null,hn=E?.roll??0,Ri=!1,dn=si(r),fn=ku(`${n}${dn}`),li=!E,Ci=!1,pn=!0,Mn=!0,Xn=!0,Ln=!0,Wi=null;const Gt=new Set,uo=window.matchMedia("(prefers-reduced-motion: reduce)"),Qr=Ey({container:i,onLevel:ld,onCenter:Rr});function es(){if(!Ln)return Wi;Ln=!1,ft.makeEmpty();for(const L of v){if(!yi(L))continue;const G=Math.max(5,L.radius||7);ft.expandByPoint(Dt.set(L.x-G,L.y-G,L.z-G)),ft.expandByPoint(Dt.set(L.x+G,L.y+G,L.z+G))}if(pe.level!==Md.CLUSTER||!v.length)for(const L of V){const G=Math.max(12,L.radius||24);ft.expandByPoint(Dt.set(L.x-G,L.y-G,L.z-G)),ft.expandByPoint(Dt.set(L.x+G,L.y+G,L.z+G))}return Wi=ft.isEmpty()?null:ft.getBoundingSphere(U),Wi}function ts({settled:L=!1}={}){const G=L&&fe?fe.toPosition:p.position,ce=L&&fe?fe.toTarget:S.target;return{position:{x:G.x,y:G.y,z:G.z},target:{x:ce.x,y:ce.y,z:ce.z},roll:L&&fe?fe.toRoll:hn}}function A(){try{localStorage.setItem(t,JSON.stringify(ts()))}catch{}}function F(L=et){fn=Object.fromEntries(L.slice(0,xi).map(G=>[G.id,{x:Math.round(G.x*100)/100,y:Math.round(G.y*100)/100,z:Math.round(G.z*100)/100}]));try{localStorage.setItem(`${n}${dn}`,JSON.stringify({version:1,positions:fn}))}catch{}}function Y(){de=new Set,we&&C.forEach(L=>{const G=Bs(L.source,L.sourceId),ce=Bs(L.target,L.targetId);G===we&&de.add(ce),ce===we&&de.add(G)})}function W(){const L=q?[q.sourceId,...q.targetIds]:[];return Ie=yd({nodes:et,links:C,clusterPlan:he.getPresentationPlan(),sceneState:dn===nn.CONSTELLATIONS?pe:rs(),forcedThoughtIds:L}),pe=Ie.state,v=et.filter(({id:G})=>Ie.thoughtIds.has(G)),k=Ie.thoughtLinks,V=Ie.clusters.slice(0,xi),j=Ie.clusterLinks,ge=v.map(({id:G})=>G),Q=new Map(ge.map((G,ce)=>[G,ce])),ie=V.map(({id:G})=>G),_e=new Map(ie.map((G,ce)=>[G,ce])),Ue=new Map(V.map(G=>[G.id,G])),ve=new Map(Ie.clusterAnchors.map(G=>[G.id,G])),y.count=v.length,m.count=v.length,P.count=V.length,D.count=V.length,Ln=!0,pn=!0,Mn=!0,Xn=!0,{state:structuredClone(pe),summary:Ie.summary?{...Ie.summary}:null}}function B(){!ue||ye!==null||(ye=requestAnimationFrame(ed))}function Me(L){e=L==="dark"?"dark":"light";const G=e==="dark";Le.set(G?1512735:14605290),Z.color.set(G?11183293:9277866),Z.opacity=G?.5:.42,z.color.set(G?10323183:7361989),ne.color.set(G?7827597:10064557),Z.needsUpdate=!0,z.needsUpdate=!0,ne.needsUpdate=!0,pn=!0,Mn=!0,Xn=!0,B()}function Te(){if(Ee?.kind!==ln.INSERT_LINKED_NODE)return;const L=ae.get(Ee.anchorId);if(!L)return;const G=new N(L.x,L.y,L.z),ce=G.clone().sub(Ee.previousPosition);ce.lengthSq()>1e-6&&(p.position.add(ce),S.target.add(ce)),Ee.previousPosition.copy(G)}const he=gy({onTick(L,G){et=L,C=G,Ln=!0,ae=new Map(et.map(ce=>[ce.id,ce])),Te(),Y(),pn=!0,Xn=!0,B()},onStable(L,{transition:G}={}){if(F(L),(li||Ci)&&L.length&&(li=!1,Ci=!1,Rr()),Ee){const ce=G?.nodeId===Ee.nodeId;Ee=null,ce&&A()}B()}});function Ne(L,G){xe.set(L,G),p.updateMatrixWorld(),le.setFromCamera(xe,p)}function Fe(L,G){Ne(L,G);const[ce]=le.intersectObject(m);if(ce?.instanceId!==void 0)return{type:"thought",id:ge[ce.instanceId]};const[Re]=le.intersectObject(D);return Re?.instanceId!==void 0?{type:"cluster",id:ie[Re.instanceId]}:null}function We(L){const G=x.domElement.getBoundingClientRect();Ne((L.clientX-G.left)/Math.max(1,G.width)*2-1,-((L.clientY-G.top)/Math.max(1,G.height))*2+1)}function Ye(L){We(L);const[G]=le.intersectObject(m);if(G?.instanceId!==void 0)return{type:"thought",id:ge[G.instanceId]};const[ce]=le.intersectObject(D);return ce?.instanceId!==void 0?{type:"cluster",id:ie[ce.instanceId]}:null}function Oe(){pn&&(v.forEach(L=>{const G=Q.get(L.id);if(G===void 0)return;const ce=L.id===we,Re=L.id===Ge,Xe=L.id===q?.sourceId,$e=q?.targetIds.has(L.id)===!0,Ct=!!(q&&!Xe&&!$e),Ce=!!(we&&!ce&&!de.has(L.id)),_t=Ct||!q&&Ce,Ot=Xe?1.38:$e?1.23:ce?1.34:Re?1.17:_t?.76:1,Wt=Math.max(5,L.radius||7);te.set(L.x,L.y,L.z),X.setScalar(Wt*Ot),Pe.compose(te,oe,X),y.setMatrixAt(G,Pe),X.setScalar(Wt*Ot+Fu),Pe.compose(te,oe,X),m.setMatrixAt(G,Pe),se.setHex(Xe?Iy:$e?Ny:Gu[L.kind]||Gu.thought),_t?se.lerp(Le,.68):ce?se.lerp(Be,.2):Re&&se.lerp(Be,.1),y.setColorAt(G,se)}),y.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0,m.computeBoundingSphere(),y.instanceColor&&(y.instanceColor.needsUpdate=!0),pn=!1)}function lt(){Mn&&(V.forEach(L=>{const G=_e.get(L.id);if(G===void 0)return;const ce=L.id===I,Re=ce?1.1:1,Xe=Math.max(12,L.radius||24)*Re;te.set(L.x,L.y,L.z),X.setScalar(Xe),Pe.compose(te,oe,X),P.setMatrixAt(G,Pe),X.setScalar(Xe+Fu),Pe.compose(te,oe,X),D.setMatrixAt(G,Pe),se.setHex(L.opacity<.5?Uy:Bu),ce?se.lerp(Be,.18):L.opacity<.5&&se.lerp(Le,.5),P.setColorAt(G,se)}),P.instanceMatrix.needsUpdate=!0,D.instanceMatrix.needsUpdate=!0,D.computeBoundingSphere(),P.instanceColor&&(P.instanceColor.needsUpdate=!0),Mn=!1)}function Et(){if(!Xn)return;const L=[],G=[];if(k.slice(0,by).forEach(Re=>{const Xe=typeof Re.source=="object"?Re.source:ae.get(Re.sourceId),$e=typeof Re.target=="object"?Re.target:ae.get(Re.targetId);if(!Xe||!$e)return;const Ct=Xe.id===q?.sourceId,Ce=q?.targetIds.has($e.id)===!0;if(Ct&&!Ce)return;(!!(Ct&&Ce)||!!(we&&(Xe.id===we||$e.id===we))?G:L).push(Xe.x,Xe.y,Xe.z,$e.x,$e.y,$e.z)}),q){const Re=ae.get(q.sourceId),Xe=new Set(C.filter($e=>Bs($e.source,$e.sourceId)===q.sourceId).map($e=>Bs($e.target,$e.targetId)));Re&&q.targetIds.forEach($e=>{if(Xe.has($e))return;const Ct=ae.get($e);Ct&&G.push(Re.x,Re.y,Re.z,Ct.x,Ct.y,Ct.z)})}K.setAttribute("position",new Ht(L,3)),H.setAttribute("position",new Ht(G,3));const ce=[];j.forEach(Re=>{const Xe=ve.get(Re.source),$e=ve.get(Re.target);!Xe||!$e||ce.push(Xe.x,Xe.y,Xe.z,$e.x,$e.y,$e.z)}),ee.setAttribute("position",new Ht(ce,3)),Z.opacity=we||q?.1:.42,Xn=!1}function St(){De.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),Je.setFromProjectionMatrix(De);const L=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight),ce=V.filter(Ce=>(te.set(Ce.x,Ce.y,Ce.z),Je.containsPoint(te))).map(Ce=>({entityType:"cluster",entity:Ce,text:`${Ce.label} · ${Ce.count}`,priority:Ce.id===I?0:1})),Re=v.filter(Ce=>(te.set(Ce.x,Ce.y,Ce.z),Je.containsPoint(te))).filter(Ce=>q||!we||Ce.id===we||de.has(Ce.id)||Ce.id===Ge).map(Ce=>{const _t=Ce.id===q?.sourceId?0:q?.targetIds.has(Ce.id)?1:Ce.id===we?0:de.has(Ce.id)?2:Ce.id===Ge?3:4;return{entityType:"thought",entity:Ce,text:Ce.text,priority:_t}}),Xe=[...ce,...Re].sort((Ce,_t)=>{const Ot=Ce.priority-_t.priority;if(Ot)return Ot;const Wt=(_t.entity.connectionCount||_t.entity.count||0)-(Ce.entity.connectionCount||Ce.entity.count||0);return Wt||p.position.distanceToSquared(Ce.entity)-p.position.distanceToSquared(_t.entity)}).map(Ce=>{const{entity:_t}=Ce;He.set(_t.x,_t.y,_t.z).project(p);const Ot=p.position.distanceTo(_t),Wt=Ce.entityType==="cluster"?1.08:1,xt=tn.clamp(760/Math.max(520,Ot)*Wt,.72,Ce.entityType==="cluster"?1.15:1);return{...Ce,x:(He.x*.5+.5)*L,y:(-He.y*.5+.5)*G,labelScale:xt}}),$e=[],Ct=[];Xe.some(Ce=>{if(Ct.length>=jh)return!0;const{entity:_t,text:Ot,x:Wt,y:xt,labelScale:ui}=Ce,ns=tn.clamp(Ot.length*6.4,42,240)*ui,Pi={left:Wt-ns/2-7,right:Wt+ns/2+7,top:xt-34*ui,bottom:xt-8*ui},fo=$e.some(is=>!(Pi.right<is.left||Pi.left>is.right||Pi.bottom<is.top||Pi.top>is.bottom)),Un=Ce.entityType==="cluster"||_t.id===q?.sourceId||q?.targetIds.has(_t.id)||_t.id===we||_t.id===Ge;return(!fo||Un)&&(Ct.push(Ce),$e.push(Pi)),!1}),g.forEach((Ce,_t)=>{const Ot=Ct[_t];if(!Ot){Ce.hidden=!0;return}const{entityType:Wt,entity:xt,text:ui,x:ns,y:Pi,labelScale:fo}=Ot,Un=Wt==="cluster";Ce.hidden=!1,Ce.textContent=ui,Ce.classList.toggle("is-cluster",Un),Ce.classList.toggle("is-cluster-neighbour",Un&&xt.opacity<.5),Ce.classList.toggle("is-selected",!Un&&xt.id===we),Ce.classList.toggle("is-neighbour",!Un&&de.has(xt.id)),Ce.classList.toggle("is-connection-source",!Un&&xt.id===q?.sourceId),Ce.classList.toggle("is-connection-target",!Un&&q?.targetIds.has(xt.id)===!0),Un?(delete Ce.dataset.thoughtId,Ce.dataset.clusterId=xt.id):(delete Ce.dataset.clusterId,Ce.dataset.thoughtId=xt.id),Ce.style.setProperty("--spatial-kind-color",Un?"#7860d8":zu[xt.kind]||zu.thought),Ce.style.transform=`translate(-50%, calc(-100% - 12px)) translate3d(${ns}px, ${Pi}px, 0) scale(${fo})`})}function ht(L){if(!fe)return!1;const G=fe.duration<=0?1:Math.min(1,(L-fe.startedAt)/fe.duration),ce=1-(1-G)**3;return p.position.lerpVectors(fe.fromPosition,fe.toPosition,ce),S.target.lerpVectors(fe.fromTarget,fe.toTarget,ce),hn=ur(fe.fromRoll+ur(fe.toRoll-fe.fromRoll)*ce),G<1?!0:(hn=fe.toRoll,fe=null,S.enabled=ue&&!J,S.update(),A(),!1)}function At({persist:L=!0}={}){const G=L&&ct;Gt.clear(),pt=null,ct=!1,G&&A()}function Ae(){const L=Number(Gt.has("KeyD")||Gt.has("ArrowRight"))-Number(Gt.has("KeyA")||Gt.has("ArrowLeft")),G=Number(Gt.has("KeyW")||Gt.has("ArrowUp"))-Number(Gt.has("KeyS")||Gt.has("ArrowDown"));return{horizontal:L,vertical:G}}function Vt(L,G,ce,Re){if(!L&&!G&&!ce)return!1;p.getWorldDirection(Ze).normalize(),wt.set(1,0,0).applyQuaternion(p.quaternion).normalize(),Rt.set(0,1,0).applyQuaternion(p.quaternion).normalize(),Mt.copy(wt).multiplyScalar(L).addScaledVector(Rt,G).addScaledVector(Ze,ce);const Xe=Mt.length();if(Xe<1e-4)return!1;Xe>1&&Mt.divideScalar(Xe);const $e=tn.clamp(p.position.distanceTo(S.target)*Ty,Ry,Cy);return Mt.multiplyScalar($e*Re),p.position.add(Mt),S.target.add(Mt),!0}function it(L){if(!ue||J||fe||!Gt.size)return pt=L,!1;const G=pt??L;pt=L;const ce=Math.min(Ay,Math.max(0,(L-G)/1e3));if(!ce)return!0;const{horizontal:Re,vertical:Xe}=Ae(),$e=Vt(Re,Xe,0,ce);return $e&&(ct=!0),$e}function jt(L,G,ce){if(!L&&!G)return!1;const Re=p.position.distanceTo(S.target);if(Re<.001)return!1;const Xe=Math.cos(hn),$e=Math.sin(hn),Ct=L*Xe+G*$e,Ce=G*Xe-L*$e;return p.getWorldDirection(Ze).normalize(),ut.setFromVector3(Ze),ut.theta-=Ct*Ou*ce,ut.phi+=Ce*Ou*ce,ut.phi=tn.clamp(ut.phi,S.minPolarAngle,S.maxPolarAngle),Ze.setFromSpherical(ut),S.target.copy(p.position).addScaledVector(Ze,Re),!0}function mn(L,G){return L?(hn=ur(hn+L*Dy*G),!0):!1}function In(){p.lookAt(S.target),p.rotateZ(hn)}function Nn(L){L!==Ti&&(Ge===Ti&&(Ge=null),Ti=L,L&&(Ge=L),pn=!0,B())}function st(){i.classList.remove("is-gamepad-active"),Ai=0,Nn(null)}function bt(L){Ai=L,i.classList.add("is-gamepad-active")}function Sn(){const L=Fe(0,0);Nn(L?.type==="thought"?L.id:null)}function mt(){const L=Fe(0,0);if(L?.type==="cluster"){const ce=Ue.get(L.id);return o(L.id,ce?{label:ce.label,count:ce.count}:null),!0}const G=L?.type==="thought"?L.id:null;return Nn(G),G?q?(G!==q.sourceId&&a(G),!0):kc(G):!1}function Qt({persist:L=!0}={}){Ft!==null&&cancelAnimationFrame(Ft),Ft=null,Yt=[],Vi=null,L&&wi&&A(),wi=!1,st()}function $n(L=[]){try{return vy(navigator.getGamepads?.()||[],L)}catch{return null}}function Ar(L){if(Ft=null,!ue||document.hidden)return;const G=$n(Yt);if(!G){Qt();return}Yt=G.buttons;const ce=Vi??L;Vi=L;const Re=Math.min(Py,Math.max(0,(L-ce)/1e3)),Xe=!!(G.leftStick.x||G.leftStick.y||G.rightStick.x||G.rightStick.y||G.thrust||G.roll),$e=!!(G.selectPressed||G.backPressed||G.focusPressed||G.fitAllPressed);(Xe||$e)&&bt(L),Ai&&L-Ai>Ly&&st(),Xe&&fe&&$i();let Ce=!1;if(!J&&!Ri&&!Gt.size&&Re){const _t=Vt(G.leftStick.x,-G.leftStick.y,G.thrust,Re),Ot=jt(G.rightStick.x,G.rightStick.y,Re),Wt=mn(G.roll,Re);Ce=_t||Ot||Wt}!J&&!Ri&&(G.fitAllPressed&&Rr(),G.focusPressed&&we&&Hc(we),G.selectPressed&&mt(),G.backPressed&&u()),Ce?(wi=!0,Sn(),B()):wi?(wi=!1,A()):i.classList.contains("is-gamepad-active")&&Sn(),Ft=requestAnimationFrame(Ar)}function Xi(){if(!ue||document.hidden||Ft!==null||typeof navigator.getGamepads!="function")return;const L=$n();L&&(Yt=L.buttons,Vi=null,Ft=requestAnimationFrame(Ar))}function Uc(L){L.gamepad?.mapping==="standard"&&Xi()}function Fc(){Qt(),Xi()}function Oc(){st(),i.focus({preventScroll:!0})}function Bc(L){!ue||J||q||L.target!==i||!Fy.has(L.code)||(L.preventDefault(),L.stopPropagation(),st(),fe&&$i(),Gt.add(L.code),pt=null,B())}function Gc(L){Gt.delete(L.code)&&!Gt.size&&ct&&(ct=!1,A())}function ed(L){if(ye=null,!ue||document.hidden)return;const G=ht(L),ce=it(L),Re=S.update();In(),p.updateMatrixWorld(),Qr.update({camera:p,graphCenter:es()?.center??null}),Oe(),lt(),Et(),St(),x.render(h,p),(G||ce||Re)&&B()}function td({nodes:L=[],links:G=[],layoutMode:ce=dn,fitAfterLayout:Re=!1},{transition:Xe=null}={}){const $e=Xu(Xe),Ct=$e.kind===ln.INSERT_LINKED_NODE?ae.get($e.anchorId):null;Ee=Ct?{...$e,previousPosition:new N(Ct.x,Ct.y,Ct.z)}:null;const Ce=si(ce);Ce!==dn&&(dn=Ce,fn=ku(`${n}${dn}`)),Ci||=Re;const _t=L.slice(0,xi).map(xt=>{const ui=fn[xt.id];return{...xt,...!yi(xt.pinnedPosition)&&yi(ui)?ui:{},radius:Math.max(5,Number.isFinite(xt.radius)?xt.radius:7)}}),Ot=new Set(_t.map(xt=>xt.id)),Wt=G.filter(xt=>Ot.has(xt.sourceId)&&Ot.has(xt.targetId));he.setGraph({nodes:_t,links:Wt,layoutMode:dn},{transition:$e}),et=he.getNodes(),C=he.getLinks(),Ln=!0,ae=new Map(et.map(xt=>[xt.id,xt])),ae.has(we)||(we=null),Y(),W(),li&&et.length&&Rr(),B()}function zc(L){pe=L||rs();const G=W();return B(),G}function nd(){return structuredClone(pe)}function id(L){if(!ae.has(L))return null;const ce=he.getPresentationPlan()?.clusterByNodeId?.get(L);return zc(dn===nn.CONSTELLATIONS&&ce?vd(ce.id):rs())}function rd(L){we=ae.has(L)?L:null,Y(),pn=!0,Xn=!0,B()}function kc(L){return ae.has(L)?(s(L),!0):!1}function sd(L){q=L&&typeof L.sourceId=="string"?{sourceId:L.sourceId,targetIds:new Set(L.targetIds||[])}:null,x.domElement.classList.toggle("is-connection-selecting",!!q),W(),B()}function od(){const L=p.position.clone(),G=S.target.clone(),ce=S.enableDamping;fe=null,Ee=null,li=!1,Ci=!1,At({persist:!1}),S.enableDamping=!1,S.update(),p.position.copy(L),S.target.copy(G),S.update(),S.enableDamping=ce}function $i(){fe&&(fe=null,S.enabled=ue&&!J,B())}function Tr(L,G,ce=Os,{roll:Re=hn}={}){od(),fe={fromPosition:p.position.clone(),fromTarget:S.target.clone(),toPosition:L.clone(),toTarget:G.clone(),fromRoll:hn,toRoll:ur(Re),duration:uo.matches?0:ce,startedAt:performance.now()},S.enabled=!1,B()}function ad(L){if(J||!yi(L?.position)||!yi(L?.target))return!1;const G=new N().copy(L.position),ce=new N().copy(L.target);return G.distanceToSquared(ce)<1e-6?!1:(Tr(G,ce,Os,{roll:ur(L.roll)}),!0)}function Hc(L){const G=ae.get(L);if(!G)return!1;Ze.copy(p.position).sub(S.target),Ze.lengthSq()<.001&&Ze.set(0,0,1),Ze.normalize();const ce=new N(G.x,G.y,G.z),Re=tn.clamp(p.position.distanceTo(S.target),240,520),Xe=ce.clone().addScaledVector(Ze,Re);return Tr(Xe,ce),!0}function Rr(){if(J)return!1;const L=es();if(!L)return!1;Ze.copy(p.position).sub(S.target),Ze.lengthSq()<.001&&Ze.set(0,0,1),Ze.normalize();const G=tn.degToRad(p.fov*.5),ce=tn.clamp(L.radius/Math.max(.2,Math.sin(G))*1.18,220,4200),Re=L.center.clone().addScaledVector(Ze,ce);return Tr(Re,L.center),!0}function cd(){Tr(new N(0,160,720),new N(0,0,0),Os,{roll:0})}function ld(){return!ue||J?!1:(Tr(p.position,S.target,Os,{roll:0}),!0)}function ud(L){const G=ae.get(L);return G?{x:G.x,y:G.y,z:G.z}:null}function hd(L,G){const ce=he.setPinned(L,G);return ce?(B(),{x:ce.x,y:ce.y,z:ce.z,pinned:ce.pinned}):null}function Vc(){const L=Math.max(1,i.clientWidth),G=Math.max(1,i.clientHeight);x.setSize(L,G,!1),p.aspect=L/G,p.updateProjectionMatrix(),B()}function dd(){ue=!0,S.enabled=!J&&!fe,Vc(),he.reheat(.22),Xi()}function Wc(){Qt(),At(),ue=!1,S.enabled=!1,he.stop(),J=null,x.domElement.classList.remove("is-node-dragging"),ye!==null&&cancelAnimationFrame(ye),ye=null}function ho(L,{cancelled:G=!1}={}){if(!J||L.pointerId!==J.pointerId)return;L.preventDefault(),L.stopImmediatePropagation();const ce=J;J=null,x.domElement.classList.remove("is-node-dragging"),x.domElement.hasPointerCapture(L.pointerId)&&x.domElement.releasePointerCapture(L.pointerId);let Re=he.getNode(ce.thoughtId);ce.started&&(G&&he.dragNode(ce.thoughtId,ce.origin),Re=he.endDrag(ce.thoughtId,{pinned:G?ce.wasPinned:void 0})),S.enabled=ue&&!fe,!G&&ce.moved&&Re?.pinned&&l(Re.id,{x:Re.x,y:Re.y,z:Re.z,pinned:!0}),B()}function Xc(L){if(!ue||L.button!==0)return;const G=Ye(L);if(!G)return;if(G.type==="cluster"){if(q)return;L.preventDefault(),L.stopImmediatePropagation();const Xe=Ue.get(G.id);o(G.id,Xe?{label:Xe.label,count:Xe.count}:null);return}const ce=G.id;if(q){L.preventDefault(),L.stopImmediatePropagation(),ce!==q.sourceId&&a(ce);return}const Re=he.getNode(ce);Re&&(L.preventDefault(),L.stopImmediatePropagation(),kc(ce),S.enabled=!1,x.domElement.setPointerCapture(L.pointerId),x.domElement.classList.add("is-node-dragging"),te.set(Re.x,Re.y,Re.z),p.getWorldDirection(Ze).normalize(),je.setFromNormalAndCoplanarPoint(Ze,te),le.ray.intersectPlane(je,Qe)?nt.copy(Qe).sub(te):nt.set(0,0,0),J={pointerId:L.pointerId,thoughtId:ce,startX:L.clientX,startY:L.clientY,moved:!1,started:!1,wasPinned:Re.pinned,origin:{x:Re.x,y:Re.y,z:Re.z}},B())}function $c(L){if(st(),!J){const Re=ue?Ye(L):null,Xe=Re?.type==="thought"?Re.id:null,$e=Re?.type==="cluster"?Re.id:null;Xe!==Ge&&(Ge=Xe,pn=!0),$e!==I&&(I=$e,Mn=!0),x.domElement.classList.toggle("is-node-hovered",!!(Ge||I)),B();return}if(L.pointerId!==J.pointerId||(L.preventDefault(),L.stopImmediatePropagation(),We(L),!le.ray.intersectPlane(je,Qe)))return;const G=Math.hypot(L.clientX-J.startX,L.clientY-J.startY);if(!J.started&&G<wy)return;J.started||(he.beginDrag(J.thoughtId),J.started=!0);const ce=Qe.sub(nt);he.dragNode(J.thoughtId,{x:ce.x,y:ce.y,z:ce.z}),J.moved=!0}function qc(L){if(q)return;const G=Ye(L);G?.type==="thought"&&(L.preventDefault(),L.stopImmediatePropagation(),c(G.id))}function Yc(){J||!Ge&&!I||(Ge=null,I=null,pn=!0,Mn=!0,x.domElement.classList.remove("is-node-hovered"),B())}function Kc(L){ho(L,{cancelled:!0})}function Zc(){Ri=!0,st()}function Jc(){Ri=!1,A()}function jc(){At(),Qt()}function Qc(){if(document.hidden){At(),Qt();return}Xi(),B()}function el(L){L.preventDefault(),d("3D rendering is unavailable. Reload the page to try again.")}function fd(){Wc(),Qr.dispose(),At({persist:!1}),he.dispose(),S.removeEventListener("change",B),S.removeEventListener("start",Zc),S.removeEventListener("end",Jc),S.dispose(),_.dispose(),w.dispose(),T.dispose(),M.dispose(),R.dispose(),K.dispose(),Z.dispose(),H.dispose(),z.dispose(),ee.dispose(),ne.dispose(),x.dispose(),x.domElement.removeEventListener("pointerdown",$i,!0),x.domElement.removeEventListener("wheel",$i,!0),x.domElement.removeEventListener("pointerdown",Oc,!0),x.domElement.removeEventListener("pointerdown",Xc,!0),x.domElement.removeEventListener("pointermove",$c,!0),x.domElement.removeEventListener("pointerup",ho,!0),x.domElement.removeEventListener("pointercancel",Kc,!0),x.domElement.removeEventListener("pointerleave",Yc),x.domElement.removeEventListener("dblclick",qc,!0),x.domElement.removeEventListener("webglcontextlost",el),document.removeEventListener("visibilitychange",Qc),i.removeEventListener("keydown",Bc),window.removeEventListener("keyup",Gc),window.removeEventListener("blur",jc),window.removeEventListener("focus",Xi),window.removeEventListener("gamepadconnected",Uc),window.removeEventListener("gamepaddisconnected",Fc),x.domElement.remove(),b.remove(),f.remove()}return S.addEventListener("change",B),S.addEventListener("start",Zc),S.addEventListener("end",Jc),x.domElement.addEventListener("pointerdown",$i,!0),x.domElement.addEventListener("wheel",$i,{capture:!0,passive:!0}),x.domElement.addEventListener("pointerdown",Oc,!0),x.domElement.addEventListener("pointerdown",Xc,!0),x.domElement.addEventListener("pointermove",$c,!0),x.domElement.addEventListener("pointerup",ho,!0),x.domElement.addEventListener("pointercancel",Kc,!0),x.domElement.addEventListener("pointerleave",Yc),x.domElement.addEventListener("dblclick",qc,!0),x.domElement.addEventListener("webglcontextlost",el),document.addEventListener("visibilitychange",Qc),i.addEventListener("keydown",Bc),window.addEventListener("keyup",Gc),window.addEventListener("blur",jc),window.addEventListener("focus",Xi),window.addEventListener("gamepadconnected",Uc),window.addEventListener("gamepaddisconnected",Fc),{activate:dd,deactivate:Wc,dispose:fd,fitAll:Rr,focusThought:Hc,getCameraState:ts,getSceneState:nd,getThoughtPosition:ud,revealThought:id,resetView:cd,restoreCameraState:ad,resize:Vc,setGraph:td,setConnectionSelection:sd,setSelectedThought:rd,setSceneState:zc,setTheme:Me,setThoughtPinned:hd}}export{zy as createSpatialView};
