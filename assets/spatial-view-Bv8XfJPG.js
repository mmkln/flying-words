import{c as Ji,b as Mh,q as Sh,o as Eh,j as Qs,S as Or,n as ir,f as pu,a as mu,d as gu,e as bh,g as wh,h as _u,i as cn,M as Rr}from"./index-B0Ew6ZSX.js";function Ah(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=n.length,l,c=0,h=0,d=0;for(o=0;o<a;++o)l=n[o],c+=l.x||0,h+=l.y||0,d+=l.z||0;for(c=(c/a-i)*r,h=(h/a-e)*r,d=(d/a-t)*r,o=0;o<a;++o)l=n[o],c&&(l.x-=c),h&&(l.y-=h),d&&(l.z-=d)}return s.initialize=function(o){n=o},s.x=function(o){return arguments.length?(i=+o,s):i},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function js(i){return i.x+i.vx}function Cl(i){return i.y+i.vy}function Th(i){return i.z+i.vz}function xu(i){var e,t,n,r,s=1,o=1;typeof i!="function"&&(i=Ji(i==null?1:+i));function a(){for(var h,d=e.length,u,p,v,A,g,f,T,M=0;M<o;++M)for(u=(t===1?Mh(e,js):t===2?Sh(e,js,Cl):t===3?Eh(e,js,Cl,Th):null).visitAfter(l),h=0;h<d;++h)p=e[h],f=n[p.index],T=f*f,v=p.x+p.vx,t>1&&(A=p.y+p.vy),t>2&&(g=p.z+p.vz),u.visit(_);function _(S,y,w,m,b,C,P){var D=[y,w,m,b,C,P],H=D[0],Y=D[1],G=D[2],X=D[t],z=D[t+1],q=D[t+2],j=S.data,ne=S.r,ie=f+ne;if(j){if(j.index>p.index){var ce=v-j.x-j.vx,Q=t>1?A-j.y-j.vy:0,Le=t>2?g-j.z-j.vz:0,Ae=ce*ce+Q*Q+Le*Le;Ae<ie*ie&&(ce===0&&(ce=Qs(r),Ae+=ce*ce),t>1&&Q===0&&(Q=Qs(r),Ae+=Q*Q),t>2&&Le===0&&(Le=Qs(r),Ae+=Le*Le),Ae=(ie-(Ae=Math.sqrt(Ae)))/Ae*s,p.vx+=(ce*=Ae)*(ie=(ne*=ne)/(T+ne)),t>1&&(p.vy+=(Q*=Ae)*ie),t>2&&(p.vz+=(Le*=Ae)*ie),j.vx-=ce*(ie=1-ie),t>1&&(j.vy-=Q*ie),t>2&&(j.vz-=Le*ie))}return}return H>v+ie||X<v-ie||t>1&&(Y>A+ie||z<A-ie)||t>2&&(G>g+ie||q<g-ie)}}function l(h){if(h.data)return h.r=n[h.data.index];for(var d=h.r=0;d<Math.pow(2,t);++d)h[d]&&h[d].r>h.r&&(h.r=h[d].r)}function c(){if(e){var h,d=e.length,u;for(n=new Array(d),h=0;h<d;++h)u=e[h],n[u.index]=+i(u,h,e)}}return a.initialize=function(h,...d){e=h,r=d.find(u=>typeof u=="function")||Math.random,t=d.find(u=>[1,2,3].includes(u))||2,c()},a.iterations=function(h){return arguments.length?(o=+h,a):o},a.strength=function(h){return arguments.length?(s=+h,a):s},a.radius=function(h){return arguments.length?(i=typeof h=="function"?h:Ji(+h),c(),a):i},a}function Rh(i){var e=Ji(.1),t,n,r;typeof i!="function"&&(i=Ji(i==null?0:+i));function s(a){for(var l=0,c=t.length,h;l<c;++l)h=t[l],h.vz+=(r[l]-h.z)*n[l]*a}function o(){if(t){var a,l=t.length;for(n=new Array(l),r=new Array(l),a=0;a<l;++a)n[a]=isNaN(r[a]=+i(t[a],a,t))?0:+e(t[a],a,t)}}return s.initialize=function(a){t=a,o()},s.strength=function(a){return arguments.length?(e=typeof a=="function"?a:Ji(+a),o(),s):e},s.z=function(a){return arguments.length?(i=typeof a=="function"?a:Ji(+a),o(),s):i},s}const Va="185",ji={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,Pl=1,Ph=2,Es=1,Dh=2,Cr=3,di=0,nn=1,Xn=2,qn=0,er=1,Dl=2,Ll=3,Il=4,Lh=5,vi=100,Ih=101,Nh=102,Uh=103,Fh=104,Oh=200,Bh=201,Gh=202,zh=203,Yo=204,Ko=205,kh=206,Vh=207,Hh=208,Wh=209,Xh=210,$h=211,qh=212,Yh=213,Kh=214,Zo=0,Jo=1,Qo=2,rr=3,jo=4,ea=5,ta=6,na=7,vu=0,Zh=1,Jh=2,In=0,yu=1,Mu=2,Su=3,Eu=4,bu=5,wu=6,Au=7,Tu=300,Ei=301,sr=302,eo=303,to=304,zs=306,ia=1e3,$n=1001,ra=1002,kt=1003,Qh=1004,Xr=1005,qt=1006,no=1007,Mi=1008,mn=1009,Ru=1010,Cu=1011,Ir=1012,Ha=1013,Un=1014,Sn=1015,Zn=1016,Wa=1017,Xa=1018,Nr=1020,Pu=35902,Du=35899,Lu=1021,Iu=1022,En=1023,Jn=1026,Si=1027,$a=1028,qa=1029,bi=1030,Ya=1031,Ka=1033,bs=33776,ws=33777,As=33778,Ts=33779,sa=35840,oa=35841,aa=35842,la=35843,ca=36196,ua=37492,ha=37496,da=37488,fa=37489,Ps=37490,pa=37491,ma=37808,ga=37809,_a=37810,xa=37811,va=37812,ya=37813,Ma=37814,Sa=37815,Ea=37816,ba=37817,wa=37818,Aa=37819,Ta=37820,Ra=37821,Ca=36492,Pa=36494,Da=36495,La=36283,Ia=36284,Ds=36285,Na=36286,jh=3200,Nl=0,ed=1,ci="",un="srgb",Ls="srgb-linear",Is="linear",dt="srgb",Ii=7680,Ul=519,td=512,nd=513,id=514,Za=515,rd=516,sd=517,Ja=518,od=519,Fl=35044,Ol=35048,Bl="300 es",Ln=2e3,Ns=2001;function ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){const i=Us("canvas");return i.style.display="block",i}const Gl={};function zl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Nu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Nu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=Nu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){const e=i.join(" ");e in Gl||(Gl[e]=!0,Ge(...i))}function cd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ud={[Zo]:Jo,[Qo]:ta,[jo]:na,[rr]:ea,[Jo]:Zo,[ta]:Qo,[na]:jo,[ea]:rr};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Dr=Math.PI/180,Ur=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Qa(i,e){return(i%e+e)%e}function hd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function dd(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function fd(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function pd(i,e=1){return e-Math.abs(Qa(i,e*2)-e)}function md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xd(i,e){return i+Math.random()*(e-i)}function vd(i){return i*(.5-Math.random())}function yd(i){i!==void 0&&(kl=i);let e=kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Md(i){return i*Dr}function Sd(i){return i*Ur}function Ed(i){return(i&i-1)===0&&i!==0}function bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),p=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*h,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tn={DEG2RAD:Dr,RAD2DEG:Ur,generateUUID:lr,clamp:Qe,euclideanModulo:Qa,mapLinear:hd,inverseLerp:dd,lerp:Lr,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:vd,seededRandom:yd,degToRad:Md,radToDeg:Sd,isPowerOfTwo:Ed,ceilPowerOfTwo:bd,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Ad,normalize:Kt,denormalize:Ki},fl=class fl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fl.prototype.isVector2=!0;let Xe=fl;class Fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[o+0],p=s[o+1],v=s[o+2],A=s[o+3];if(d!==A||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*A;g<0&&(u=-u,p=-p,v=-v,A=-A,g=-g);let f=1-a;if(g<.9995){const T=Math.acos(g),M=Math.sin(T);f=Math.sin(f*T)/M,a=Math.sin(a*T)/M,l=l*f+u*a,c=c*f+p*a,h=h*f+v*a,d=d*f+A*a}else{l=l*f+u*a,c=c*f+p*a,h=h*f+v*a,d=d*f+A*a;const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+h*d+l*p-c*u,e[t+1]=l*v+h*u+c*d-a*p,e[t+2]=c*v+h*p+a*u-l*d,e[t+3]=h*v-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),u=l(n/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pl=class pl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pl.prototype.isVector3=!0;let U=pl;const io=new U,Vl=new Fn,ml=class ml{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],v=n[8],A=r[0],g=r[3],f=r[6],T=r[1],M=r[4],_=r[7],S=r[2],y=r[5],w=r[8];return s[0]=o*A+a*T+l*S,s[3]=o*g+a*M+l*y,s[6]=o*f+a*_+l*w,s[1]=c*A+h*T+d*S,s[4]=c*g+h*M+d*y,s[7]=c*f+h*_+d*w,s[2]=u*A+p*T+v*S,s[5]=u*g+p*M+v*y,s[8]=u*f+p*_+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,p=c*s-o*l,v=t*d+n*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=d*A,e[1]=(r*c-h*n)*A,e[2]=(a*n-r*o)*A,e[3]=u*A,e[4]=(h*t-r*l)*A,e[5]=(r*s-a*t)*A,e[6]=p*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ml.prototype.isMatrix3=!0;let $e=ml;const ro=new $e,Hl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:e,whitePoint:n,transfer:Is,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const nt=Td();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Us("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cd=0;class ja{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(so(r[o].image)):s.push(so(r[o]))}else s=so(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Pd=0;const oo=new U;class Jt extends fi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=$n,r=$n,s=qt,o=Mi,a=En,l=mn,c=Jt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=lr(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Tu;Jt.DEFAULT_ANISOTROPY=1;const gl=class gl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],A=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(p+1)/2,S=(f+1)/2,y=(h+u)/4,w=(d+A)/4,m=(v+g)/4;return M>_&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=y/n,s=w/n):_>S?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=y/r,s=m/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=m/s),this.set(n,r,s,t),this}let T=Math.sqrt((g-v)*(g-v)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(d-A)/T,this.z=(u-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gl.prototype.isVector4=!0;let Ct=gl;class Dd extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Jt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ja(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uu extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gs=class Gs{constructor(e,t,n,r,s,o,a,l,c,h,d,u,p,v,A,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,u,p,v,A,g)}set(e,t,n,r,s,o,a,l,c,h,d,u,p,v,A,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=A,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*d,v=a*h,A=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=u-A*c,t[9]=-a*l,t[2]=A-u*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,v=c*h,A=c*d;t[0]=u+A*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=A+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,v=c*h,A=c*d;t[0]=u-A*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=A-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,p=o*d,v=a*h,A=a*d;t[0]=l*h,t[4]=v*c-p,t[8]=u*c+A,t[1]=l*d,t[5]=A*c+u,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,v=a*l,A=a*c;t[0]=l*h,t[4]=A-u*d,t[8]=v*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+v,t[10]=u-A*d}else if(e.order==="XZY"){const u=o*l,p=o*c,v=a*l,A=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+A,t[5]=o*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*h,t[10]=A*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Nd)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ni.crossVectors(n,an),ni.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ni.crossVectors(n,an)),ni.normalize(),$r.crossVectors(an,ni),r[0]=ni.x,r[4]=$r.x,r[8]=an.x,r[1]=ni.y,r[5]=$r.y,r[9]=an.y,r[2]=ni.z,r[6]=$r.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],v=n[2],A=n[6],g=n[10],f=n[14],T=n[3],M=n[7],_=n[11],S=n[15],y=r[0],w=r[4],m=r[8],b=r[12],C=r[1],P=r[5],D=r[9],H=r[13],Y=r[2],G=r[6],X=r[10],z=r[14],q=r[3],j=r[7],ne=r[11],ie=r[15];return s[0]=o*y+a*C+l*Y+c*q,s[4]=o*w+a*P+l*G+c*j,s[8]=o*m+a*D+l*X+c*ne,s[12]=o*b+a*H+l*z+c*ie,s[1]=h*y+d*C+u*Y+p*q,s[5]=h*w+d*P+u*G+p*j,s[9]=h*m+d*D+u*X+p*ne,s[13]=h*b+d*H+u*z+p*ie,s[2]=v*y+A*C+g*Y+f*q,s[6]=v*w+A*P+g*G+f*j,s[10]=v*m+A*D+g*X+f*ne,s[14]=v*b+A*H+g*z+f*ie,s[3]=T*y+M*C+_*Y+S*q,s[7]=T*w+M*P+_*G+S*j,s[11]=T*m+M*D+_*X+S*ne,s[15]=T*b+M*H+_*z+S*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],v=e[3],A=e[7],g=e[11],f=e[15],T=l*p-c*u,M=a*p-c*d,_=a*u-l*d,S=o*p-c*h,y=o*u-l*h,w=o*d-a*h;return t*(A*T-g*M+f*_)-n*(v*T-g*S+f*y)+r*(v*M-A*S+f*w)-s*(v*_-A*y+g*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],v=e[12],A=e[13],g=e[14],f=e[15],T=t*a-n*o,M=t*l-r*o,_=t*c-s*o,S=n*l-r*a,y=n*c-s*a,w=r*c-s*l,m=h*A-d*v,b=h*g-u*v,C=h*f-p*v,P=d*g-u*A,D=d*f-p*A,H=u*f-p*g,Y=T*H-M*D+_*P+S*C-y*b+w*m;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/Y;return e[0]=(a*H-l*D+c*P)*G,e[1]=(r*D-n*H-s*P)*G,e[2]=(A*w-g*y+f*S)*G,e[3]=(u*y-d*w-p*S)*G,e[4]=(l*C-o*H-c*b)*G,e[5]=(t*H-r*C+s*b)*G,e[6]=(g*_-v*w-f*M)*G,e[7]=(h*w-u*_+p*M)*G,e[8]=(o*D-a*C+c*m)*G,e[9]=(n*C-t*D-s*m)*G,e[10]=(v*y-A*_+f*T)*G,e[11]=(d*_-h*y-p*T)*G,e[12]=(a*b-o*P-l*m)*G,e[13]=(t*P-n*b+r*m)*G,e[14]=(A*M-v*S-g*T)*G,e[15]=(h*S-d*M+u*T)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,p=s*h,v=s*d,A=o*h,g=o*d,f=a*d,T=l*c,M=l*h,_=l*d,S=n.x,y=n.y,w=n.z;return r[0]=(1-(A+f))*S,r[1]=(p+_)*S,r[2]=(v-M)*S,r[3]=0,r[4]=(p-_)*y,r[5]=(1-(u+f))*y,r[6]=(g+T)*y,r[7]=0,r[8]=(v+M)*w,r[9]=(g-T)*w,r[10]=(1-(u+A))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),l=Ui.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_n.copy(this);const c=1/o,h=1/a,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Ln,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let v,A;if(l)v=s/(o-s),A=o*s/(o-s);else if(a===Ln)v=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(a===Ns)v=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ln,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,A;if(l)v=1/(o-s),A=o/(o-s);else if(a===Ln)v=-2/(o-s),A=-(o+s)/(o-s);else if(a===Ns)v=-1/(o-s),A=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gs.prototype.isMatrix4=!0;let gt=Gs;const Ui=new U,_n=new gt,Id=new U(0,0,0),Nd=new U(1,1,1),ni=new U,$r=new U,an=new U,Xl=new gt,$l=new Fn;class wi{constructor(e=0,t=0,n=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ud=0;const ql=new U,Fi=new Fn,Gn=new gt,qr=new U,mr=new U,Fd=new U,Od=new Fn,Yl=new U(1,0,0),Kl=new U(0,1,0),Zl=new U(0,0,1),Jl={type:"added"},Bd={type:"removed"},Oi={type:"childadded",child:null},ao={type:"childremoved",child:null};class rn extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new U,t=new wi,n=new Fn,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new $e}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(mr,qr,this.up):Gn.lookAt(qr,mr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bd),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new U(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const g=t.getJointPose(A,n),f=this._getHandJoint(c,A);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Qa(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=co(o,s,e+1/3),this.g=co(o,s,e),this.b=co(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return nt.workingToColorSpace($t.copy(this),e),Math.round(Qe($t.r*255,0,255))*65536+Math.round(Qe($t.g*255,0,255))*256+Math.round(Qe($t.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace($t.copy(this),t);const n=$t.r,r=$t.g,s=$t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=un){nt.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,r=$t.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Kr);const n=Lr(ii.h,Kr.h,t),r=Lr(ii.s,Kr.s,t),s=Lr(ii.l,Kr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new st;st.NAMES=Fu;class zd extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new U,zn=new U,uo=new U,kn=new U,Bi=new U,Gi=new U,Ql=new U,ho=new U,fo=new U,po=new U,mo=new Ct,go=new Ct,_o=new Ct;class Mn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),zn.subVectors(n,t),uo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(zn),l=xn.dot(uo),c=zn.dot(zn),h=zn.dot(uo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,v=(o*h-a*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mo,s.x),o.addScaledVector(go,s.y),o.addScaledVector(_o,s.z),o}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Bi.subVectors(r,n),Gi.subVectors(s,n),ho.subVectors(e,n);const l=Bi.dot(ho),c=Gi.dot(ho);if(l<=0&&c<=0)return t.copy(n);fo.subVectors(e,r);const h=Bi.dot(fo),d=Gi.dot(fo);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Bi,o);po.subVectors(e,s);const p=Bi.dot(po),v=Gi.dot(po);if(v>=0&&p<=v)return t.copy(s);const A=p*c-l*v;if(A<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Gi,a);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return Ql.subVectors(s,r),a=(d-h)/(d-h+(p-v)),t.copy(r).addScaledVector(Ql,a);const f=1/(g+A+u);return o=A*f,a=u*f,t.copy(n).addScaledVector(Bi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Jr.subVectors(this.max,gr),zi.subVectors(e.a,gr),ki.subVectors(e.b,gr),Vi.subVectors(e.c,gr),ri.subVectors(ki,zi),si.subVectors(Vi,ki),mi.subVectors(zi,Vi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-mi.z,mi.y,ri.z,0,-ri.x,si.z,0,-si.x,mi.z,0,-mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-mi.y,mi.x,0];return!xo(t,zi,ki,Vi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,zi,ki,Vi,Jr))?!1:(Qr.crossVectors(ri,si),t=[Qr.x,Qr.y,Qr.z],xo(t,zi,ki,Vi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,Zr=new pi,zi=new U,ki=new U,Vi=new U,ri=new U,si=new U,mi=new U,gr=new U,Jr=new U,Qr=new U,gi=new U;function xo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gi.fromArray(i,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dt=new U,jr=new Xe;let kd=0;class bn extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ou extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vd=new pi,_r=new U,vo=new U;class Ai{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vo)),this.expandByPoint(_r.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hd=0;const dn=new gt,yo=new rn,Hi=new U,ln=new pi,xr=new pi,Ot=new U;class hn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?Bu:Ou)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(ln.min,xr.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,xr.max),ln.expandByPoint(Ot)):(ln.expandByPoint(xr.min),ln.expandByPoint(xr.max))}ln.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Ot.add(Hi)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let m=0;m<n.count;m++)a[m]=new U,l[m]=new U;const c=new U,h=new U,d=new U,u=new Xe,p=new Xe,v=new Xe,A=new U,g=new U;function f(m,b,C){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,m),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,C),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(A.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),a[m].add(A),a[b].add(A),a[C].add(A),l[m].add(g),l[b].add(g),l[C].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let m=0,b=T.length;m<b;++m){const C=T[m],P=C.start,D=C.count;for(let H=P,Y=P+D;H<Y;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new U,_=new U,S=new U,y=new U;function w(m){S.fromBufferAttribute(r,m),y.copy(S);const b=a[m];M.copy(b),M.sub(S.multiplyScalar(S.dot(b))).normalize(),_.crossVectors(y,b);const P=_.dot(l[m])<0?-1:1;o.setXYZW(m,M.x,M.y,M.z,P)}for(let m=0,b=T.length;m<b;++m){const C=T[m],P=C.start,D=C.count;for(let H=P,Y=P+D;H<Y;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),A=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,g),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let A=0,g=l.length;A<g;A++){a.isInterleavedBufferAttribute?p=l[A]*a.data.stride+a.offset:p=l[A]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new bn(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Wd=0;class Br extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=er,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Ko,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new U,Mo=new U,es=new U,oi=new U,So=new U,ts=new U,Eo=new U;class ks{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mo.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Mo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(es),a=oi.dot(this.direction),l=-oi.dot(es),c=oi.lengthSq(),h=Math.abs(1-o*o);let d,u,p,v;if(h>0)if(d=o*l-a,u=o*a-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const A=1/h;d*=A,u*=A,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mo).addScaledVector(es,u),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){So.subVectors(t,e),ts.subVectors(n,e),Eo.crossVectors(So,ts);let o=this.direction.dot(Eo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(ts.crossVectors(oi,ts));if(l<0)return null;const c=a*this.direction.dot(So.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(Eo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fs extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jl=new gt,_i=new ks,ns=new Ai,ec=new U,is=new U,rs=new U,ss=new U,bo=new U,os=new U,tc=new U,as=new U;class wn extends rn{constructor(e=new hn,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(bo.fromBufferAttribute(d,e),o?os.addScaledVector(bo,h):os.addScaledVector(bo.sub(t),h))}t.add(os)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(ns.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ns,ec)===null||_i.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(jl.copy(s).invert(),_i.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,A=u.length;v<A;v++){const g=u[v],f=o[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=T,S=M;_<S;_+=3){const y=a.getX(_),w=a.getX(_+1),m=a.getX(_+2);r=ls(this,f,e,n,c,h,d,y,w,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let g=v,f=A;g<f;g+=3){const T=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);r=ls(this,o,e,n,c,h,d,T,M,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,A=u.length;v<A;v++){const g=u[v],f=o[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=T,S=M;_<S;_+=3){const y=_,w=_+1,m=_+2;r=ls(this,f,e,n,c,h,d,y,w,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=v,f=A;g<f;g+=3){const T=g,M=g+1,_=g+2;r=ls(this,o,e,n,c,h,d,T,M,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Xd(i,e,t,n,r,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===di,a),l===null)return null;as.copy(a),as.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:i}}function ls(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,is),i.getVertexPosition(l,rs),i.getVertexPosition(c,ss);const h=Xd(i,e,t,n,is,rs,ss,tc);if(h){const d=new U;Mn.getBarycoord(tc,is,rs,ss,d),r&&(h.uv=Mn.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Mn.getNormal(is,rs,ss,u.normal),h.face=u,h.barycoord=d}return h}class Gu extends Jt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=kt,h=kt,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends bn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new gt,ic=new gt,cs=[],rc=new pi,$d=new gt,vr=new wn,yr=new Ai;class sc extends wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,$d)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),rc.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),yr.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wi),ic.multiplyMatrices(n,Wi),vr.matrixWorld=ic,vr.raycast(e,cs);for(let o=0,a=cs.length;o<a;o++){const l=cs[o];l.instanceId=s,l.object=this,t.push(l)}cs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gu(new Float32Array(r*this.count),r,this.count,$a,Sn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new U,qd=new U,Yd=new $e;class Wn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wo.subVectors(n,t).cross(qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(wo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yd.getNormalMatrix(e),r=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ai,Kd=new Xe(.5,.5),us=new U;class tl{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],v=s[8],A=s[9],g=s[10],f=s[11],T=s[12],M=s[13],_=s[14],S=s[15];if(r[0].setComponents(c-o,p-h,f-v,S-T).normalize(),r[1].setComponents(c+o,p+h,f+v,S+T).normalize(),r[2].setComponents(c+a,p+d,f+A,S+M).normalize(),r[3].setComponents(c-a,p-d,f-A,S-M).normalize(),n)r[4].setComponents(l,u,g,_).normalize(),r[5].setComponents(c-l,p-u,f-g,S-_).normalize();else if(r[4].setComponents(c-l,p-u,f-g,S-_).normalize(),t===Ln)r[5].setComponents(c+l,p+u,f+g,S+_).normalize();else if(t===Ns)r[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=Kd.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ua extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Os=new U,Bs=new U,oc=new gt,Mr=new ks,hs=new Ai,Ao=new U,ac=new U;class Zd extends rn{constructor(e=new hn,t=new Ua){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Os.fromBufferAttribute(t,r-1),Bs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Os.distanceTo(Bs);e.setAttribute("lineDistance",new Yt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,e.ray.intersectsSphere(hs)===!1)return;oc.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let A=p,g=v-1;A<g;A+=c){const f=h.getX(A),T=h.getX(A+1),M=ds(this,e,Mr,l,f,T,A);M&&t.push(M)}if(this.isLineLoop){const A=h.getX(v-1),g=h.getX(p),f=ds(this,e,Mr,l,A,g,v-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let A=p,g=v-1;A<g;A+=c){const f=ds(this,e,Mr,l,A,A+1,A);f&&t.push(f)}if(this.isLineLoop){const A=ds(this,e,Mr,l,v-1,p,v-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ds(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Os.fromBufferAttribute(a,r),Bs.fromBufferAttribute(a,s),t.distanceSqToSegment(Os,Bs,Ao,ac)>n)return;Ao.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ao);if(!(c<e.near||c>e.far))return{distance:c,point:ac.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const lc=new U,cc=new U;class uc extends Zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)lc.fromBufferAttribute(t,r),cc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+lc.distanceTo(cc);e.setAttribute("lineDistance",new Yt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zu extends Jt{constructor(e=[],t=Ei,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class or extends Jt{constructor(e,t,n=Un,r,s,o,a=kt,l=kt,c,h=Jn,d=1){if(h!==Jn&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jd extends or{constructor(e,t=Un,n=Ei,r,s,o=kt,a=kt,l,c=Jn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ku extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gr extends hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function v(A,g,f,T,M,_,S,y,w,m,b){const C=_/w,P=S/m,D=_/2,H=S/2,Y=y/2,G=w+1,X=m+1;let z=0,q=0;const j=new U;for(let ne=0;ne<X;ne++){const ie=ne*P-H;for(let ce=0;ce<G;ce++){const Q=ce*C-D;j[A]=Q*T,j[g]=ie*M,j[f]=Y,c.push(j.x,j.y,j.z),j[A]=0,j[g]=0,j[f]=y>0?1:-1,h.push(j.x,j.y,j.z),d.push(ce/w),d.push(1-ne/m),z+=1}}for(let ne=0;ne<m;ne++)for(let ie=0;ie<w;ie++){const ce=u+ie+G*ne,Q=u+ie+G*(ne+1),Le=u+(ie+1)+G*(ne+1),Ae=u+(ie+1)+G*ne;l.push(ce,Q,Ae),l.push(Q,Le,Ae),q+=6}a.addGroup(p,q,b),p+=q,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nl extends hn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const M=new U,_=new U,S=new U;for(let y=0;y<t.length;y+=3)p(t[y+0],M),p(t[y+1],_),p(t[y+2],S),l(M,_,S,T)}function l(T,M,_,S){const y=S+1,w=[];for(let m=0;m<=y;m++){w[m]=[];const b=T.clone().lerp(_,m/y),C=M.clone().lerp(_,m/y),P=y-m;for(let D=0;D<=P;D++)D===0&&m===y?w[m][D]=b:w[m][D]=b.clone().lerp(C,D/P)}for(let m=0;m<y;m++)for(let b=0;b<2*(y-m)-1;b++){const C=Math.floor(b/2);b%2===0?(u(w[m][C+1]),u(w[m+1][C]),u(w[m][C])):(u(w[m][C+1]),u(w[m+1][C+1]),u(w[m+1][C]))}}function c(T){const M=new U;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(T),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const T=new U;for(let M=0;M<s.length;M+=3){T.x=s[M+0],T.y=s[M+1],T.z=s[M+2];const _=g(T)/2/Math.PI+.5,S=f(T)/Math.PI+.5;o.push(_,1-S)}v(),d()}function d(){for(let T=0;T<o.length;T+=6){const M=o[T+0],_=o[T+2],S=o[T+4],y=Math.max(M,_,S),w=Math.min(M,_,S);y>.9&&w<.1&&(M<.2&&(o[T+0]+=1),_<.2&&(o[T+2]+=1),S<.2&&(o[T+4]+=1))}}function u(T){s.push(T.x,T.y,T.z)}function p(T,M){const _=T*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function v(){const T=new U,M=new U,_=new U,S=new U,y=new Xe,w=new Xe,m=new Xe;for(let b=0,C=0;b<s.length;b+=9,C+=6){T.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),y.set(o[C+0],o[C+1]),w.set(o[C+2],o[C+3]),m.set(o[C+4],o[C+5]),S.copy(T).add(M).add(_).divideScalar(3);const P=g(S);A(y,C+0,T,P),A(w,C+2,M,P),A(m,C+4,_,P)}}function A(T,M,_,S){S<0&&T.x===1&&(o[M]=T.x-1),_.x===0&&_.z===0&&(o[M]=S/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.vertices,e.indices,e.radius,e.detail)}}class il extends nl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new il(e.radius,e.detail)}}class Vs extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,p=[],v=[],A=[],g=[];for(let f=0;f<h;f++){const T=f*u-o;for(let M=0;M<c;M++){const _=M*d-s;v.push(_,-T,0),A.push(0,0,1),g.push(M/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const M=T+c*f,_=T+c*(f+1),S=T+1+c*(f+1),y=T+1+c*f;p.push(M,_,y),p.push(_,S,y)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(A,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(hc(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(hc(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const jd={clone:ar,merge:Zt};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(r.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nf extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rf extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sf extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fs=new U,ps=new Fn,Cn=new U;class Hu extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fs,ps,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fs,ps,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new U,dc=new Xe,fc=new Xe;class pn extends Hu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,dc,fc),t.subVectors(fc,dc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wu extends Hu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=-90,$i=1;class of extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Xi,$i,e,t);r.layers=this.layers,this.add(r);const s=new pn(Xi,$i,e,t);s.layers=this.layers,this.add(s);const o=new pn(Xi,$i,e,t);o.layers=this.layers,this.add(o);const a=new pn(Xi,$i,e,t);a.layers=this.layers,this.add(a);const l=new pn(Xi,$i,e,t);l.layers=this.layers,this.add(l);const c=new pn(Xi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class af extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pc=new gt;class lf{constructor(e,t,n=0,r=1/0){this.ray=new ks(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(e,t=!0,n=[]){return Fa(e,this,n,t),n.sort(mc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fa(e[r],this,n,t);return n.sort(mc),n}}function mc(i,e){return i.distance-e.distance}function Fa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Fa(s[o],e,t,!0)}}class Oa{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _l=class _l{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};_l.prototype.isMatrix2=!0;let gc=_l;class cf extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ge("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _c(i,e,t,n){const r=uf(n);switch(t){case Lu:return i*e;case $a:return i*e/r.components*r.byteLength;case qa:return i*e/r.components*r.byteLength;case bi:return i*e*2/r.components*r.byteLength;case Ya:return i*e*2/r.components*r.byteLength;case Iu:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case Ka:return i*e*4/r.components*r.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case la:return Math.max(i,16)*Math.max(e,8)/4;case sa:case aa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case ua:case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case Ps:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case La:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ds:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uf(i){switch(i){case mn:case Ru:return{byteLength:1,components:1};case Ir:case Cu:case Zn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Un:case Ha:case Sn:return{byteLength:4,components:1};case Pu:case Du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);function Xu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function hf(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],A=d[p];A.start<=v.start+v.count+1?v.count=Math.max(v.count,A.start+A.count-v.start):(++u,d[u]=A)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const A=d[p];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rp=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,up=`uniform sampler2D dfgLUT;
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
}`,hp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:yf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Nf,common:Uf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:Gf,emissivemap_fragment:zf,emissivemap_pars_fragment:kf,colorspace_fragment:Vf,colorspace_pars_fragment:Hf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:$f,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rp,envmap_vertex:Yf,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:up,lights_fragment_begin:hp,lights_fragment_maps:dp,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:bp,morphinstance_vertex:wp,morphcolor_vertex:Ap,morphnormal_vertex:Tp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Dp,normal_pars_fragment:Lp,normal_pars_vertex:Ip,normal_vertex:Np,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Gp,opaque_fragment:zp,packing:kp,premultiplied_alpha_fragment:Vp,project_vertex:Hp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:jp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:hm,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:xm,depth_frag:vm,distance_vert:ym,distance_frag:Mm,equirect_vert:Sm,equirect_frag:Em,linedashed_vert:bm,linedashed_frag:wm,meshbasic_vert:Am,meshbasic_frag:Tm,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Dm,meshnormal_vert:Lm,meshnormal_frag:Im,meshphong_vert:Nm,meshphong_frag:Um,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:Gm,points_vert:zm,points_frag:km,shadow_vert:Vm,shadow_frag:Hm,sprite_vert:Wm,sprite_frag:Xm},Se={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Dn={basic:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Zt([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Zt([Se.lights,Se.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Dn.physical={uniforms:Zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ms={r:0,b:0,g:0},$m=new gt,$u=new $e;$u.set(-1,0,0,0,1,0,0,0,1);function qm(i,e,t,n,r,s){const o=new st(0);let a=r===!0?0:1,l,c,h=null,d=0,u=null;function p(T){let M=T.isScene===!0?T.background:null;if(M&&M.isTexture){const _=T.backgroundBlurriness>0;M=e.get(M,_)}return M}function v(T){let M=!1;const _=p(T);_===null?g(o,a):_&&_.isColor&&(g(_,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(T,M){const _=p(M);_&&(_.isCubeTexture||_.mapping===zs)?(c===void 0&&(c=new wn(new Gr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ar(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($u),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==dt,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new wn(new Vs(2,2),new On({name:"BackgroundMaterial",uniforms:ar(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,M){T.getRGB(ms,Vu(i)),t.buffers.color.setClear(ms.r,ms.g,ms.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:v,addToRenderList:A,dispose:f}}function Ym(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,o=!1;function a(P,D,H,Y,G){let X=!1;const z=d(P,Y,H,D);s!==z&&(s=z,c(s.object)),X=p(P,Y,H,G),X&&v(P,Y,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(P,D,H,Y),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,D,H,Y){const G=Y.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const z=P.isInstancedMesh===!0?P.id:0;let q=X[z];q===void 0&&(q={},X[z]=q);let j=q[H.id];j===void 0&&(j={},q[H.id]=j);let ne=j[G];return ne===void 0&&(ne=u(l()),j[G]=ne),ne}function u(P){const D=[],H=[],Y=[];for(let G=0;G<t;G++)D[G]=0,H[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,D,H,Y){const G=s.attributes,X=D.attributes;let z=0;const q=H.getAttributes();for(const j in q)if(q[j].location>=0){const ie=G[j];let ce=X[j];if(ce===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;z++}return s.attributesNum!==z||s.index!==Y}function v(P,D,H,Y){const G={},X=D.attributes;let z=0;const q=H.getAttributes();for(const j in q)if(q[j].location>=0){let ie=X[j];ie===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),G[j]=ce,z++}s.attributes=G,s.attributesNum=z,s.index=Y}function A(){const P=s.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function g(P){f(P,0)}function f(P,D){const H=s.newAttributes,Y=s.enabledAttributes,G=s.attributeDivisors;H[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),G[P]!==D&&(i.vertexAttribDivisor(P,D),G[P]=D)}function T(){const P=s.newAttributes,D=s.enabledAttributes;for(let H=0,Y=D.length;H<Y;H++)D[H]!==P[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function M(P,D,H,Y,G,X,z){z===!0?i.vertexAttribIPointer(P,D,H,G,X):i.vertexAttribPointer(P,D,H,Y,G,X)}function _(P,D,H,Y){A();const G=Y.attributes,X=H.getAttributes(),z=D.defaultAttributeValues;for(const q in X){const j=X[q];if(j.location>=0){let ne=G[q];if(ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ie=ne.normalized,ce=ne.itemSize,Q=e.get(ne);if(Q===void 0)continue;const Le=Q.buffer,Ae=Q.type,$=Q.bytesPerElement,oe=Ae===i.INT||Ae===i.UNSIGNED_INT||ne.gpuType===Ha;if(ne.isInterleavedBufferAttribute){const se=ne.data,ve=se.stride,Ie=ne.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<j.locationSize;be++)f(j.location+be,se.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<j.locationSize;be++)g(j.location+be);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let be=0;be<j.locationSize;be++)M(j.location+be,ce/j.locationSize,Ae,ie,ve*$,(Ie+ce/j.locationSize*be)*$,oe)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)f(j.location+se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<j.locationSize;se++)g(j.location+se);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let se=0;se<j.locationSize;se++)M(j.location+se,ce/j.locationSize,Ae,ie,ce*$,ce/j.locationSize*se*$,oe)}}else if(z!==void 0){const ie=z[q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(j.location,ie);break;case 3:i.vertexAttrib3fv(j.location,ie);break;case 4:i.vertexAttrib4fv(j.location,ie);break;default:i.vertexAttrib1fv(j.location,ie)}}}}T()}function S(){b();for(const P in n){const D=n[P];for(const H in D){const Y=D[H];for(const G in Y){const X=Y[G];for(const z in X)h(X[z].object),delete X[z];delete Y[G]}}delete n[P]}}function y(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const H in D){const Y=D[H];for(const G in Y){const X=Y[G];for(const z in X)h(X[z].object),delete X[z];delete Y[G]}}delete n[P.id]}function w(P){for(const D in n){const H=n[D];for(const Y in H){const G=H[Y];if(G[P.id]===void 0)continue;const X=G[P.id];for(const z in X)h(X[z].object),delete X[z];delete G[P.id]}}}function m(P){for(const D in n){const H=n[D],Y=P.isInstancedMesh===!0?P.id:0,G=H[Y];if(G!==void 0){for(const X in G){const z=G[X];for(const q in z)h(z[q].object),delete z[q];delete G[X]}delete H[Y],Object.keys(H).length===0&&delete n[D]}}}function b(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:m,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:T}}function Km(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Zm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==En&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const m=w===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!m)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:A,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:y}}function Jm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Wn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,A=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const T=s?0:n,M=T*4;let _=f.clippingState||null;l.value=_,_=h(v,u,M,p);for(let S=0;S!==M;++S)_[S]=t[S];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,v){const A=d!==null?d.length:0;let g=null;if(A!==0){if(g=l.value,v!==!0||g===null){const f=p+A*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,_=p;M!==A;++M,_+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}const hi=4,xc=[.125,.215,.35,.446,.526,.582],yi=20,Qm=256,Sr=new Wu,vc=new st;let To=null,Ro=0,Co=0,Po=!1;const jm=new U;class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=jm}=s;To=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Zn,format:En,colorSpace:Ls,depthBuffer:!1},r=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eg(s)),this._blurMaterial=ng(s,e,t),this._ggxMaterial=tg(s,e,t)}return r}_compileMaterial(e){const t=new wn(new hn,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,r,s){const l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(vc),d.toneMapping=In,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Gr,new Fs({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,g=A.material;let f=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,f=!0):(g.color.copy(vc),f=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const S=this._cubeSize;qi(r,_*S,M>2?S:0,S,S),d.setRenderTarget(r),f&&d.render(A,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:v}=this,A=this._sizeLods[n],g=3*A*(n>v-hi?n-v+hi:0),f=4*(this._cubeSize-A);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,qi(s,g,f,3*A,2*A),r.setRenderTarget(s),r.render(a,Sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,qi(e,g,f,3*A,2*A),r.setRenderTarget(e),r.render(a,Sr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yi-1),A=s/v,g=isFinite(s)?1+Math.floor(h*A):yi;g>yi&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const f=[];let T=0;for(let w=0;w<yi;++w){const m=w/A,b=Math.exp(-m*m/2);f.push(b),w===0?T+=b:w<g&&(T+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-n;const _=this._sizeLods[r],S=3*_*(r>M-hi?r-M+hi:0),y=4*(this._cubeSize-_);qi(t,S,y,3*_,2*_),l.setRenderTarget(t),l.render(d,Sr)}}function eg(i){const e=[],t=[],n=[];let r=i;const s=i-hi+1+xc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-hi?l=xc[o-i+hi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,A=3,g=2,f=1,T=new Float32Array(A*v*p),M=new Float32Array(g*v*p),_=new Float32Array(f*v*p);for(let y=0;y<p;y++){const w=y%3*2/3-1,m=y>2?0:-1,b=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];T.set(b,A*v*y),M.set(u,g*v*y);const C=[y,y,y,y,y,y];_.set(C,f*v*y)}const S=new hn;S.setAttribute("position",new bn(T,A)),S.setAttribute("uv",new bn(M,g)),S.setAttribute("faceIndex",new bn(_,f)),n.push(new wn(S,null)),r>hi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Mc(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function tg(i,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ng(i,e,t){const n=new Float32Array(yi),r=new U(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Sc(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ec(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Hs(){return`

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
	`}class qu extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gr(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:qn});s.uniforms.tEquirect.value=t;const o=new wn(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=qt),new of(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function ig(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===eo||p===to)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const A=new qu(v.height);return A.fromEquirectangularTexture(i,u),e.set(u,A),u.addEventListener("dispose",c),a(A.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,v=p===eo||p===to,A=p===Ei||p===sr;if(v||A){let g=t.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new yc(i)),g=v?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const T=u.image;return v&&T&&T.height>0||A&&T&&l(T)?(n===null&&(n=new yc(i)),g=v?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,p){return p===eo?u.mapping=Ei:p===to&&(u.mapping=sr),u}function l(u){let p=0;const v=6;for(let A=0;A<v;A++)u[A]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function rg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&tr("WebGLRenderer: "+n+" extension not supported."),r}}}function sg(i,e,t,n){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let A=0;if(v===void 0)return;if(p!==null){const T=p.array;A=p.version;for(let M=0,_=T.length;M<_;M+=3){const S=T[M+0],y=T[M+1],w=T[M+2];u.push(S,y,y,w,w,S)}}else{const T=v.array;A=v.version;for(let M=0,_=T.length/3-1;M<_;M+=3){const S=M+0,y=M+1,w=M+2;u.push(S,y,y,w,w,S)}}const g=new(v.count>=65535?Bu:Ou)(u,1);g.version=A;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function og(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,s,d*o,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,p);let A=0;for(let g=0;g<p;g++)A+=u[g];t.update(A,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lg(i,e,t){const n=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),v===!0&&(M=2),A===!0&&(M=3);let _=a.attributes.position.count*M,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const y=new Float32Array(_*S*4*d),w=new Uu(y,_,S,d);w.type=Sn,w.needsUpdate=!0;const m=M*4;for(let C=0;C<d;C++){const P=g[C],D=f[C],H=T[C],Y=_*S*4*C;for(let G=0;G<P.count;G++){const X=G*m;p===!0&&(r.fromBufferAttribute(P,G),y[Y+X+0]=r.x,y[Y+X+1]=r.y,y[Y+X+2]=r.z,y[Y+X+3]=0),v===!0&&(r.fromBufferAttribute(D,G),y[Y+X+4]=r.x,y[Y+X+5]=r.y,y[Y+X+6]=r.z,y[Y+X+7]=0),A===!0&&(r.fromBufferAttribute(H,G),y[Y+X+8]=r.x,y[Y+X+9]=r.y,y[Y+X+10]=r.z,y[Y+X+11]=H.itemSize===4?r.w:1)}}u={count:d,texture:w,size:new Xe(_,S)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function cg(i,e,t,n,r){let s=new WeakMap;function o(c){const h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const ug={[yu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[Su]:"CINEON_TONE_MAPPING",[Eu]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Au]:"NEUTRAL_TONE_MAPPING",[bu]:"CUSTOM_TONE_MAPPING"};function hg(i,e,t,n,r,s){const o=new Nn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new or(e,t):void 0}),a=new Nn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new hn;l.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const c=new nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new wn(l,c),d=new Wu(-1,1,1,-1,0,1);let u=null,p=null,v=!1,A,g=null,f=[],T=!1;this.setSize=function(M,_){o.setSize(M,_),a.setSize(M,_);for(let S=0;S<f.length;S++){const y=f[S];y.setSize&&y.setSize(M,_)}},this.setEffects=function(M){f=M,T=f.length>0&&f[0].isRenderPass===!0;const _=o.width,S=o.height;for(let y=0;y<f.length;y++){const w=f[y];w.setSize&&w.setSize(_,S)}},this.begin=function(M,_){if(v||M.toneMapping===In&&f.length===0)return!1;if(g=_,_!==null){const S=_.width,y=_.height;(o.width!==S||o.height!==y)&&this.setSize(S,y)}return T===!1&&M.setRenderTarget(o),A=M.toneMapping,M.toneMapping=In,!0},this.hasRenderPass=function(){return T},this.end=function(M,_){M.toneMapping=A,v=!0;let S=o,y=a;for(let w=0;w<f.length;w++){const m=f[w];if(m.enabled!==!1&&(m.render(M,y,S,_),m.needsSwap!==!1)){const b=S;S=y,y=b}}if(u!==M.outputColorSpace||p!==M.toneMapping){u=M.outputColorSpace,p=M.toneMapping,c.defines={},nt.getTransfer(u)===dt&&(c.defines.SRGB_TRANSFER="");const w=ug[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(g),M.render(h,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const Yu=new Jt,Ba=new or(1,1),Ku=new Uu,Zu=new Ld,Ju=new zu,bc=[],wc=[],Ac=new Float32Array(16),Tc=new Float32Array(9),Rc=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Ut(t,n)}}function _g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Ut(t,n)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),Ut(t,n)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=t.isReversedDepthBuffer()?Ja:Za,s=Ba):s=Yu,t.setTexture2D(e||s,r)}function Rg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zu,r)}function Cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ju,r)}function Pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ku,r)}function Dg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return bg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ng(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ug(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Fg(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Og(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bg(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function kg(i,e){i.uniform3iv(this.addr,e)}function Vg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function Xg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function qg(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ba:o=Yu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Yg(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zu,s[o])}function Kg(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ju,s[o])}function Zg(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ku,s[o])}function Jg(i){switch(i){case 5126:return Lg;case 35664:return Ig;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return Gg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class e_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function Cc(i,e){i.seq.push(e),i.map[e.id]=e}function t_(i,e,t){const n=i.name,r=n.length;for(Do.lastIndex=0;;){const s=Do.exec(n),o=Do.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cc(t,c===void 0?new Qg(a,i,e):new jg(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new e_(a),Cc(t,d)),t=d}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);t_(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const n_=37297;let i_=0;function r_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Dc=new $e;function s_(i){nt._getMatrix(Dc,nt.workingColorSpace,i);const e=`mat3( ${Dc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Is:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+r_(i.getShaderSource(e),a)}else return s}function o_(i,e){const t=s_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const a_={[yu]:"Linear",[Mu]:"Reinhard",[Su]:"Cineon",[Eu]:"ACESFilmic",[wu]:"AgX",[Au]:"Neutral",[bu]:"Custom"};function l_(i,e){const t=a_[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gs=new U;function c_(){nt.getLuminanceCoefficients(gs);const i=gs.x.toFixed(4),e=gs.y.toFixed(4),t=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function h_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pr(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(f_,m_)}const p_=new Map;function m_(i,e){let t=Ze[e];if(t===void 0){const n=p_.get(e);if(n!==void 0)t=Ze[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ga(t)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(g_,__)}function __(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const x_={[Es]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function v_(i){return x_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y_={[Ei]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function M_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":y_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const S_={[sr]:"ENVMAP_MODE_REFRACTION"};function E_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b_={[vu]:"ENVMAP_BLENDING_MULTIPLY",[Zh]:"ENVMAP_BLENDING_MIX",[Jh]:"ENVMAP_BLENDING_ADD"};function w_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=v_(t),c=M_(t),h=E_(t),d=w_(t),u=A_(t),p=u_(t),v=h_(s),A=r.createProgram();let g,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),f.length>0&&(f+=`
`)):(g=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),f=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ze.tonemapping_pars_fragment:"",t.toneMapping!==In?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,o_("linearToOutputTexel",t.outputColorSpace),c_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Ga(o),o=Ic(o,t),o=Nc(o,t),a=Ga(a),a=Ic(a,t),a=Nc(a,t),o=Uc(o),a=Uc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=T+g+o,_=T+f+a,S=Pc(r,r.VERTEX_SHADER,M),y=Pc(r,r.FRAGMENT_SHADER,_);r.attachShader(A,S),r.attachShader(A,y),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function w(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(A)||"",H=r.getShaderInfoLog(S)||"",Y=r.getShaderInfoLog(y)||"",G=D.trim(),X=H.trim(),z=Y.trim();let q=!0,j=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,S,y);else{const ne=Lc(r,S,"vertex"),ie=Lc(r,y,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ne+`
`+ie)}else G!==""?Ge("WebGLProgram: Program Info Log:",G):(X===""||z==="")&&(j=!1);j&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:X,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(S),r.deleteShader(y),m=new Rs(r,A),b=d_(r,A)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(A,n_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i_++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=S,this.fragmentShader=y,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P_(e),t.set(e,n)),n}}class P_{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}}function D_(i){return i===bi||i===Ps||i===Ds}function L_(i,e,t,n,r,s){const o=new el,a=new C_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function A(m,b,C,P,D,H){const Y=P.fog,G=D.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?P.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,q=e.get(m.envMap||X,z),j=q&&q.mapping===zs?q.image.height:null,ne=p[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&Ge("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=ie!==void 0?ie.length:0;let Q=0;G.morphAttributes.position!==void 0&&(Q=1),G.morphAttributes.normal!==void 0&&(Q=2),G.morphAttributes.color!==void 0&&(Q=3);let Le,Ae,$,oe;if(ne){const ye=Dn[ne];Le=ye.vertexShader,Ae=ye.fragmentShader}else{Le=m.vertexShader,Ae=m.fragmentShader;const ye=a.getVertexShaderStage(m),wt=a.getFragmentShaderStage(m);a.update(m,ye,wt),$=ye.id,oe=wt.id}const se=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,it=!!m.map,He=!!m.matcap,Ye=!!q,et=!!m.aoMap,je=!!m.lightMap,lt=!!m.bumpMap&&m.wireframe===!1,vt=!!m.normalMap,ot=!!m.displacementMap,Tt=!!m.emissiveMap,yt=!!m.metalnessMap,Ke=!!m.roughnessMap,L=m.anisotropy>0,Rt=m.clearcoat>0,Oe=m.dispersion>0,R=m.iridescence>0,x=m.sheen>0,I=m.transmission>0,B=L&&!!m.anisotropyMap,K=Rt&&!!m.clearcoatMap,le=Rt&&!!m.clearcoatNormalMap,he=Rt&&!!m.clearcoatRoughnessMap,J=R&&!!m.iridescenceMap,te=R&&!!m.iridescenceThicknessMap,pe=x&&!!m.sheenColorMap,Ce=x&&!!m.sheenRoughnessMap,ge=!!m.specularMap,me=!!m.specularColorMap,Re=!!m.specularIntensityMap,Be=I&&!!m.transmissionMap,ke=I&&!!m.thicknessMap,N=!!m.gradientMap,de=!!m.alphaMap,ee=m.alphaTest>0,ue=!!m.alphaHash,_e=!!m.extensions;let re=In;m.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(re=i.toneMapping);const De={shaderID:ne,shaderType:m.type,shaderName:m.name,vertexShader:Le,fragmentShader:Ae,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:it,matcap:He,envMap:Ye,envMapMode:Ye&&q.mapping,envMapCubeUVHeight:j,aoMap:et,lightMap:je,bumpMap:lt,normalMap:vt,displacementMap:ot,emissiveMap:Tt,normalMapObjectSpace:vt&&m.normalMapType===ed,normalMapTangentSpace:vt&&m.normalMapType===Nl,packedNormalMap:vt&&m.normalMapType===Nl&&D_(m.normalMap.format),metalnessMap:yt,roughnessMap:Ke,anisotropy:L,anisotropyMap:B,clearcoat:Rt,clearcoatMap:K,clearcoatNormalMap:le,clearcoatRoughnessMap:he,dispersion:Oe,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:te,sheen:x,sheenColorMap:pe,sheenRoughnessMap:Ce,specularMap:ge,specularColorMap:me,specularIntensityMap:Re,transmission:I,transmissionMap:Be,thicknessMap:ke,gradientMap:N,opaque:m.transparent===!1&&m.blending===er&&m.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:ue,combine:m.combine,mapUv:it&&v(m.map.channel),aoMapUv:et&&v(m.aoMap.channel),lightMapUv:je&&v(m.lightMap.channel),bumpMapUv:lt&&v(m.bumpMap.channel),normalMapUv:vt&&v(m.normalMap.channel),displacementMapUv:ot&&v(m.displacementMap.channel),emissiveMapUv:Tt&&v(m.emissiveMap.channel),metalnessMapUv:yt&&v(m.metalnessMap.channel),roughnessMapUv:Ke&&v(m.roughnessMap.channel),anisotropyMapUv:B&&v(m.anisotropyMap.channel),clearcoatMapUv:K&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(m.sheenRoughnessMap.channel),specularMapUv:ge&&v(m.specularMap.channel),specularColorMapUv:me&&v(m.specularColorMap.channel),specularIntensityMapUv:Re&&v(m.specularIntensityMap.channel),transmissionMapUv:Be&&v(m.transmissionMap.channel),thicknessMapUv:ke&&v(m.thicknessMap.channel),alphaMapUv:de&&v(m.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(vt||L),vertexNormals:!!G.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(it||de),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||G.attributes.normal===void 0&&vt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:it&&m.map.isVideoTexture===!0&&nt.getTransfer(m.map.colorSpace)===dt,decodeVideoTextureEmissive:Tt&&m.emissiveMap.isVideoTexture===!0&&nt.getTransfer(m.emissiveMap.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Xn,flipSided:m.side===nn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_e&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&m.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(m){const b=[];if(m.shaderID?b.push(m.shaderID):(b.push(m.customVertexShaderID),b.push(m.customFragmentShaderID)),m.defines!==void 0)for(const C in m.defines)b.push(C),b.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(f(b,m),T(b,m),b.push(i.outputColorSpace)),b.push(m.customProgramCacheKey),b.join()}function f(m,b){m.push(b.precision),m.push(b.outputColorSpace),m.push(b.envMapMode),m.push(b.envMapCubeUVHeight),m.push(b.mapUv),m.push(b.alphaMapUv),m.push(b.lightMapUv),m.push(b.aoMapUv),m.push(b.bumpMapUv),m.push(b.normalMapUv),m.push(b.displacementMapUv),m.push(b.emissiveMapUv),m.push(b.metalnessMapUv),m.push(b.roughnessMapUv),m.push(b.anisotropyMapUv),m.push(b.clearcoatMapUv),m.push(b.clearcoatNormalMapUv),m.push(b.clearcoatRoughnessMapUv),m.push(b.iridescenceMapUv),m.push(b.iridescenceThicknessMapUv),m.push(b.sheenColorMapUv),m.push(b.sheenRoughnessMapUv),m.push(b.specularMapUv),m.push(b.specularColorMapUv),m.push(b.specularIntensityMapUv),m.push(b.transmissionMapUv),m.push(b.thicknessMapUv),m.push(b.combine),m.push(b.fogExp2),m.push(b.sizeAttenuation),m.push(b.morphTargetsCount),m.push(b.morphAttributeCount),m.push(b.numDirLights),m.push(b.numPointLights),m.push(b.numSpotLights),m.push(b.numSpotLightMaps),m.push(b.numHemiLights),m.push(b.numRectAreaLights),m.push(b.numDirLightShadows),m.push(b.numPointLightShadows),m.push(b.numSpotLightShadows),m.push(b.numSpotLightShadowsWithMaps),m.push(b.numLightProbes),m.push(b.shadowMapType),m.push(b.toneMapping),m.push(b.numClippingPlanes),m.push(b.numClipIntersection),m.push(b.depthPacking)}function T(m,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function M(m){const b=p[m.type];let C;if(b){const P=Dn[b];C=jd.clone(P.uniforms)}else C=m.uniforms;return C}function _(m,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new T_(i,b,m,r),c.push(C),h.set(b,C)),C}function S(m){if(--m.usedTimes===0){const b=c.indexOf(m);c[b]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function y(m){a.remove(m)}function w(){a.dispose()}return{getParameters:A,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:w}}function I_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function N_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,v,A,g,f){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:A,renderOrder:u.renderOrder,z:g,group:f},i[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=v,T.materialVariant=o(u),T.groupOrder=A,T.renderOrder=u.renderOrder,T.z=g,T.group=f),e++,T}function l(u,p,v,A,g,f){const T=a(u,p,v,A,g,f);v.transmission>0?n.push(T):v.transparent===!0?r.push(T):t.push(T)}function c(u,p,v,A,g,f){const T=a(u,p,v,A,g,f);v.transmission>0?n.unshift(T):v.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,v){t.length>1&&t.sort(u||N_),n.length>1&&n.sort(p||Oc),r.length>1&&r.sort(p||Oc),v&&(t.reverse(),n.reverse(),r.reverse())}function d(){for(let u=e,p=i.length;u<p;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function U_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Bc,i.set(n,[o])):r>=s.length?(o=new Bc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new st};break;case"SpotLight":t={position:new U,direction:new U,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function O_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let B_=0;function G_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z_(i){const e=new F_,t=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new gt,o=new gt;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,v=0,A=0,g=0,f=0,T=0,M=0,_=0,S=0,y=0,w=0;c.sort(G_);for(let b=0,C=c.length;b<C;b++){const P=c[b],D=P.color,H=P.intensity,Y=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bi?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*H,d+=D.g*H,u+=D.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(D).multiplyScalar(H),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[A]=X;const z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,z.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[A]=z.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=G,_++}A++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(D).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=G,n.pointShadowMatrix[v]=P.shadow.matrix,M++}n.point[v]=X,v++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[f]=X,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const m=n.hash;(m.directionalLength!==p||m.pointLength!==v||m.spotLength!==A||m.rectAreaLength!==g||m.hemiLength!==f||m.numDirectionalShadows!==T||m.numPointShadows!==M||m.numSpotShadows!==_||m.numSpotMaps!==S||m.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+S-y,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,m.directionalLength=p,m.pointLength=v,m.spotLength=A,m.rectAreaLength=g,m.hemiLength=f,m.numDirectionalShadows=T,m.numPointShadows=M,m.numSpotShadows=_,m.numSpotMaps=S,m.numLightProbes=w,n.version=B_++)}function l(c,h){let d=0,u=0,p=0,v=0,A=0;const g=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const M=c[f];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const _=n.hemi[A];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),A++}}}return{setup:a,setupView:l,state:n}}function Gc(i){const e=new z_(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function k_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gc(i),e.set(r,[a])):s>=o.length?(a=new Gc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`,W_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],X_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],zc=new gt,Er=new U,Lo=new U;function $_(i,e,t){let n=new tl;const r=new Xe,s=new Xe,o=new Ct,a=new rf,l=new sf,c={},h=t.maxTextureSize,d={[di]:nn,[nn]:di,[Xn]:Xn},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:V_,fragmentShader:H_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let f=this.type;this.render=function(y,w,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Dh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=f!==this.type;H&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(G=>G.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,G=y.length;Y<G;Y++){const X=y[Y],z=X.shadow;if(z===void 0){Ge("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const q=z.getFrameExtents();r.multiply(q),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,z.mapSize.y=s.y));const j=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cr){if(X.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Nn(r.x,r.y,{format:bi,type:Zn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new or(r.x,r.y,Sn),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=Jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt}else X.isPointLight?(z.map=new qu(r.x),z.map.depthTexture=new Jd(r.x,Un)):(z.map=new Nn(r.x,r.y),z.map.depthTexture=new or(r.x,r.y,Un)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=Jn,this.type===Es?(z.map.depthTexture.compareFunction=j?Ja:Za,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt);z.camera.updateProjectionMatrix()}const ne=z.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ne;ie++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(z.map),i.clear());const ce=z.getViewport(ie);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),D.viewport(o)}if(X.isPointLight){const ce=z.camera,Q=z.matrix,Le=X.distance||ce.far;Le!==ce.far&&(ce.far=Le,ce.updateProjectionMatrix()),Er.setFromMatrixPosition(X.matrixWorld),ce.position.copy(Er),Lo.copy(ce.position),Lo.add(W_[ie]),ce.up.copy(X_[ie]),ce.lookAt(Lo),ce.updateMatrixWorld(),Q.makeTranslation(-Er.x,-Er.y,-Er.z),zc.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),z._frustum.setFromProjectionMatrix(zc,ce.coordinateSystem,ce.reversedDepth)}else z.updateMatrices(X);n=z.getFrustum(),_(w,m,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Cr&&T(z,m),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,P)};function T(y,w){const m=e.update(A);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(r.x,r.y,{format:bi,type:Zn})),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,m,u,A,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,m,p,A,null)}function M(y,w,m,b){let C=null;const P=m.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)C=P;else if(C=m.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=C.uuid,H=w.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let G=Y[H];G===void 0&&(G=C.clone(),Y[H]=G,w.addEventListener("dispose",S)),C=G}if(C.visible=w.visible,C.wireframe=w.wireframe,b===Cr?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,m.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=m}return C}function _(y,w,m,b,C){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Cr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,y.matrixWorld);const H=e.update(y),Y=y.material;if(Array.isArray(Y)){const G=H.groups;for(let X=0,z=G.length;X<z;X++){const q=G[X],j=Y[q.materialIndex];if(j&&j.visible){const ne=M(y,j,b,C);y.onBeforeShadow(i,y,w,m,H,ne,q),i.renderBufferDirect(m,null,H,ne,y,q),y.onAfterShadow(i,y,w,m,H,ne,q)}}}else if(Y.visible){const G=M(y,Y,b,C);y.onBeforeShadow(i,y,w,m,H,G,null),i.renderBufferDirect(m,null,H,G,y,null),y.onAfterShadow(i,y,w,m,H,G,null)}}const D=y.children;for(let H=0,Y=D.length;H<Y;H++)_(D[H],w,m,b,C)}function S(y){y.target.removeEventListener("dispose",S);for(const m in c){const b=c[m],C=y.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function q_(i,e){function t(){let N=!1;const de=new Ct;let ee=null;const ue=new Ct(0,0,0,0);return{setMask:function(_e){ee!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){N=_e},setClear:function(_e,re,De,ye,wt){wt===!0&&(_e*=ye,re*=ye,De*=ye),de.set(_e,re,De,ye),ue.equals(de)===!1&&(i.clearColor(_e,re,De,ye),ue.copy(de))},reset:function(){N=!1,ee=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,ee=null,ue=null,_e=null;return{setReversed:function(re){if(de!==re){const De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),de=re;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return de},setTest:function(re){re?se(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){ee!==re&&!N&&(i.depthMask(re),ee=re)},setFunc:function(re){if(de&&(re=ud[re]),ue!==re){switch(re){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=re}},setLocked:function(re){N=re},setClear:function(re){_e!==re&&(_e=re,de&&(re=1-re),i.clearDepth(re))},reset:function(){N=!1,ee=null,ue=null,_e=null,de=!1}}}function r(){let N=!1,de=null,ee=null,ue=null,_e=null,re=null,De=null,ye=null,wt=null;return{setTest:function(ut){N||(ut?se(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(ut){de!==ut&&!N&&(i.stencilMask(ut),de=ut)},setFunc:function(ut,sn,on){(ee!==ut||ue!==sn||_e!==on)&&(i.stencilFunc(ut,sn,on),ee=ut,ue=sn,_e=on)},setOp:function(ut,sn,on){(re!==ut||De!==sn||ye!==on)&&(i.stencilOp(ut,sn,on),re=ut,De=sn,ye=on)},setLocked:function(ut){N=ut},setClear:function(ut){wt!==ut&&(i.clearStencil(ut),wt=ut)},reset:function(){N=!1,de=null,ee=null,ue=null,_e=null,re=null,De=null,ye=null,wt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],A=null,g=!1,f=null,T=null,M=null,_=null,S=null,y=null,w=null,m=new st(0,0,0),b=0,C=!1,P=null,D=null,H=null,Y=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=q>=2);let ne=null,ie={};const ce=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),Le=new Ct().fromArray(ce),Ae=new Ct().fromArray(Q);function $(N,de,ee,ue){const _e=new Uint8Array(4),re=i.createTexture();i.bindTexture(N,re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(de+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return re}const oe={};oe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(rr),lt(!1),vt(Pl),se(i.CULL_FACE),et(qn);function se(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ve(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ie(N,de){return u[N]!==de?(i.bindFramebuffer(N,de),u[N]=de,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function be(N,de){let ee=v,ue=!1;if(N){ee=p.get(de),ee===void 0&&(ee=[],p.set(de,ee));const _e=N.textures;if(ee.length!==_e.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let re=0,De=_e.length;re<De;re++)ee[re]=i.COLOR_ATTACHMENT0+re;ee.length=_e.length,ue=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ee)}function it(N){return A!==N?(i.useProgram(N),A=N,!0):!1}const He={[vi]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};He[Uh]=i.MIN,He[Fh]=i.MAX;const Ye={[Oh]:i.ZERO,[Bh]:i.ONE,[Gh]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[Xh]:i.SRC_ALPHA_SATURATE,[Hh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function et(N,de,ee,ue,_e,re,De,ye,wt,ut){if(N===qn){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),N!==Lh){if(N!==f||ut!==C){if((T!==vi||S!==vi)&&(i.blendEquation(i.FUNC_ADD),T=vi,S=vi),ut)switch(N){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",N);break}else switch(N){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ll:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",N);break}M=null,_=null,y=null,w=null,m.set(0,0,0),b=0,f=N,C=ut}return}_e=_e||de,re=re||ee,De=De||ue,(de!==T||_e!==S)&&(i.blendEquationSeparate(He[de],He[_e]),T=de,S=_e),(ee!==M||ue!==_||re!==y||De!==w)&&(i.blendFuncSeparate(Ye[ee],Ye[ue],Ye[re],Ye[De]),M=ee,_=ue,y=re,w=De),(ye.equals(m)===!1||wt!==b)&&(i.blendColor(ye.r,ye.g,ye.b,wt),m.copy(ye),b=wt),f=N,C=!1}function je(N,de){N.side===Xn?ve(i.CULL_FACE):se(i.CULL_FACE);let ee=N.side===nn;de&&(ee=!ee),lt(ee),N.blending===er&&N.transparent===!1?et(qn):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ue=N.stencilWrite;a.setTest(ue),ue&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function vt(N){N!==Ch?(se(i.CULL_FACE),N!==D&&(N===Pl?i.cullFace(i.BACK):N===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),D=N}function ot(N){N!==H&&(z&&i.lineWidth(N),H=N)}function Tt(N,de,ee){N?(se(i.POLYGON_OFFSET_FILL),(Y!==de||G!==ee)&&(Y=de,G=ee,o.getReversed()&&(de=-de),i.polygonOffset(de,ee))):ve(i.POLYGON_OFFSET_FILL)}function yt(N){N?se(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Ke(N){N===void 0&&(N=i.TEXTURE0+X-1),ne!==N&&(i.activeTexture(N),ne=N)}function L(N,de,ee){ee===void 0&&(ne===null?ee=i.TEXTURE0+X-1:ee=ne);let ue=ie[ee];ue===void 0&&(ue={type:void 0,texture:void 0},ie[ee]=ue),(ue.type!==N||ue.texture!==de)&&(ne!==ee&&(i.activeTexture(ee),ne=ee),i.bindTexture(N,de||oe[N]),ue.type=N,ue.texture=de)}function Rt(){const N=ie[ne];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function I(){try{i.texSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function he(){try{i.texStorage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function te(){try{i.texImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Ce(N,de){d[N]!==de&&(i.pixelStorei(N,de),d[N]=de)}function ge(N){Le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function me(N){Ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ae.copy(N))}function Re(N,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let ue=ee.get(N);ue===void 0&&(ue=i.getUniformBlockIndex(de,N.name),ee.set(N,ue))}function Be(N,de){const ue=c.get(de).get(N);l.get(de)!==ue&&(i.uniformBlockBinding(de,ue,N.__bindingPointIndex),l.set(de,ue))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ie={},u={},p=new WeakMap,v=[],A=null,g=!1,f=null,T=null,M=null,_=null,S=null,y=null,w=null,m=new st(0,0,0),b=0,C=!1,P=null,D=null,H=null,Y=null,G=null,Le.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:ve,bindFramebuffer:Ie,drawBuffers:be,useProgram:it,setBlending:et,setMaterial:je,setFlipSided:lt,setCullFace:vt,setLineWidth:ot,setPolygonOffset:Tt,setScissorTest:yt,activeTexture:Ke,bindTexture:L,unbindTexture:Rt,compressedTexImage2D:Oe,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:pe,updateUBOMapping:Re,uniformBlockBinding:Be,texStorage2D:le,texStorage3D:he,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:B,compressedTexSubImage3D:K,scissor:ge,viewport:me,reset:ke}}function Y_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,x){return v?new OffscreenCanvas(R,x):Us("canvas")}function g(R,x,I){let B=1;const K=Oe(R);if((K.width>I||K.height>I)&&(B=I/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(B*K.width),he=Math.floor(B*K.height);u===void 0&&(u=A(le,he));const J=x?A(le,he):u;return J.width=le,J.height=he,J.getContext("2d").drawImage(R,0,0,le,he),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+he+")."),J}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function T(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,x,I,B,K,le=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;B&&(he=e.get("EXT_texture_norm16"),he||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(I===i.FLOAT&&(J=i.R32F),I===i.HALF_FLOAT&&(J=i.R16F),I===i.UNSIGNED_BYTE&&(J=i.R8),I===i.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),I===i.SHORT&&he&&(J=he.R16_SNORM_EXT)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.R8UI),I===i.UNSIGNED_SHORT&&(J=i.R16UI),I===i.UNSIGNED_INT&&(J=i.R32UI),I===i.BYTE&&(J=i.R8I),I===i.SHORT&&(J=i.R16I),I===i.INT&&(J=i.R32I)),x===i.RG&&(I===i.FLOAT&&(J=i.RG32F),I===i.HALF_FLOAT&&(J=i.RG16F),I===i.UNSIGNED_BYTE&&(J=i.RG8),I===i.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),I===i.SHORT&&he&&(J=he.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.RG8UI),I===i.UNSIGNED_SHORT&&(J=i.RG16UI),I===i.UNSIGNED_INT&&(J=i.RG32UI),I===i.BYTE&&(J=i.RG8I),I===i.SHORT&&(J=i.RG16I),I===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.RGB8UI),I===i.UNSIGNED_SHORT&&(J=i.RGB16UI),I===i.UNSIGNED_INT&&(J=i.RGB32UI),I===i.BYTE&&(J=i.RGB8I),I===i.SHORT&&(J=i.RGB16I),I===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),I===i.UNSIGNED_INT&&(J=i.RGBA32UI),I===i.BYTE&&(J=i.RGBA8I),I===i.SHORT&&(J=i.RGBA16I),I===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(I===i.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),I===i.SHORT&&he&&(J=he.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const te=le?Is:nt.getTransfer(K);I===i.FLOAT&&(J=i.RGBA32F),I===i.HALF_FLOAT&&(J=i.RGBA16F),I===i.UNSIGNED_BYTE&&(J=te===dt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),I===i.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,x){let I;return R?x===null||x===Un||x===Nr?I=i.DEPTH24_STENCIL8:x===Sn?I=i.DEPTH32F_STENCIL8:x===Ir&&(I=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===Nr?I=i.DEPTH_COMPONENT24:x===Sn?I=i.DEPTH_COMPONENT32F:x===Ir&&(I=i.DEPTH_COMPONENT16),I}function y(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),b(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function m(R){const x=R.target;x.removeEventListener("dispose",m),P(x)}function b(R){const x=n.get(R);if(x.__webglInit===void 0)return;const I=R.source,B=p.get(I);if(B){const K=B[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(B).length===0&&p.delete(I)}n.remove(R)}function C(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const I=R.source,B=p.get(I);delete B[x.__cacheKey],o.memory.textures--}function P(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(x.__webglFramebuffer[B]))for(let K=0;K<x.__webglFramebuffer[B].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[B][K]);else i.deleteFramebuffer(x.__webglFramebuffer[B]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[B])}else{if(Array.isArray(x.__webglFramebuffer))for(let B=0;B<x.__webglFramebuffer.length;B++)i.deleteFramebuffer(x.__webglFramebuffer[B]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let B=0;B<x.__webglColorRenderbuffer.length;B++)x.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[B]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=R.textures;for(let B=0,K=I.length;B<K;B++){const le=n.get(I[B]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(I[B])}n.remove(R)}let D=0;function H(){D=0}function Y(){return D}function G(R){D=R}function X(){const R=D;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function z(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function q(R,x){const I=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const B=R.image;if(B===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(I,R,x);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function j(R,x){const I=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ve(I,R,x);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function ne(R,x){const I=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ve(I,R,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function ie(R,x){const I=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){Ie(I,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const ce={[ia]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},Q={[kt]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Le={[td]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[Za]:i.LEQUAL,[id]:i.EQUAL,[Ja]:i.GEQUAL,[rd]:i.GREATER,[sd]:i.NOTEQUAL};function Ae(R,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===no||x.magFilter===Xr||x.magFilter===Mi||x.minFilter===qt||x.minFilter===no||x.minFilter===Xr||x.minFilter===Mi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Xr&&x.minFilter!==Mi||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $(R,x){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const B=x.source;let K=p.get(B);K===void 0&&(K={},p.set(B,K));const le=z(x);if(le!==R.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[le].usedTimes++;const he=K[R.__cacheKey];he!==void 0&&(K[R.__cacheKey].usedTimes--,he.usedTimes===0&&C(x)),R.__cacheKey=le,R.__webglTexture=K[le].texture}return I}function oe(R,x,I){return Math.floor(Math.floor(R/I)/x)}function se(R,x,I,B){const le=R.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,I,B,x.data);else{le.sort((Ce,ge)=>Ce.start-ge.start);let he=0;for(let Ce=1;Ce<le.length;Ce++){const ge=le[he],me=le[Ce],Re=ge.start+ge.count,Be=oe(me.start,x.width,4),ke=oe(ge.start,x.width,4);me.start<=Re+1&&Be===ke&&oe(me.start+me.count-1,x.width,4)===Be?ge.count=Math.max(ge.count,me.start+me.count-ge.start):(++he,le[he]=me)}le.length=he+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ce=0,ge=le.length;Ce<ge;Ce++){const me=le[Ce],Re=Math.floor(me.start/4),Be=Math.ceil(me.count/4),ke=Re%x.width,N=Math.floor(Re/x.width),de=Be,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ke,N,de,ee,I,B,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ve(R,x,I){let B=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=i.TEXTURE_3D);const K=$(R,x),le=x.source;t.bindTexture(B,R.__webglTexture,i.TEXTURE0+I);const he=n.get(le);if(le.version!==he.__version||K===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=nt.getPrimaries(nt.workingColorSpace),ue=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),_e=x.colorSpace===ci||ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=g(x.image,!1,r.maxTextureSize);te=Rt(x,te);const pe=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let ge=_(x.internalFormat,pe,Ce,x.normalized,x.colorSpace,x.isVideoTexture);Ae(B,x);let me;const Re=x.mipmaps,Be=x.isVideoTexture!==!0,ke=he.__version===void 0||K===!0,N=le.dataReady,de=y(x,te);if(x.isDepthTexture)ge=S(x.format===Si,x.type),ke&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,pe,Ce,null));else if(x.isDataTexture)if(Re.length>0){Be&&ke&&t.texStorage2D(i.TEXTURE_2D,de,ge,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)me=Re[ee],Be?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,ee,ge,me.width,me.height,0,pe,Ce,me.data);x.generateMipmaps=!1}else Be?(ke&&t.texStorage2D(i.TEXTURE_2D,de,ge,te.width,te.height),N&&se(x,te,pe,Ce)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,pe,Ce,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ge,Re[0].width,Re[0].height,te.depth);for(let ee=0,ue=Re.length;ee<ue;ee++)if(me=Re[ee],x.format!==En)if(pe!==null)if(Be){if(N)if(x.layerUpdates.size>0){const _e=_c(me.width,me.height,x.format,x.type);for(const re of x.layerUpdates){const De=me.data.subarray(re*_e/me.data.BYTES_PER_ELEMENT,(re+1)*_e/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,re,me.width,me.height,1,pe,De)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ge,me.width,me.height,te.depth,0,me.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,te.depth,pe,Ce,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ge,me.width,me.height,te.depth,0,pe,Ce,me.data)}else{Be&&ke&&t.texStorage2D(i.TEXTURE_2D,de,ge,Re[0].width,Re[0].height);for(let ee=0,ue=Re.length;ee<ue;ee++)me=Re[ee],x.format!==En?pe!==null?Be?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ge,me.width,me.height,0,me.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,ee,ge,me.width,me.height,0,pe,Ce,me.data)}else if(x.isDataArrayTexture)if(Be){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ge,te.width,te.height,te.depth),N)if(x.layerUpdates.size>0){const ee=_c(te.width,te.height,x.format,x.type);for(const ue of x.layerUpdates){const _e=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,pe,Ce,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,pe,Ce,te.data);else if(x.isData3DTexture)Be?(ke&&t.texStorage3D(i.TEXTURE_3D,de,ge,te.width,te.height,te.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,pe,Ce,te.data);else if(x.isFramebufferTexture){if(ke)if(Be)t.texStorage2D(i.TEXTURE_2D,de,ge,te.width,te.height);else{let ee=te.width,ue=te.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,ge,ee,ue,0,pe,Ce,null),ee>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(x),ee.onpaint=ue=>{const _e=ue.changedElements;for(const re of d)_e.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const _e=i.RGBA,re=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,re,De,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Be&&ke){const ee=Oe(Re[0]);t.texStorage2D(i.TEXTURE_2D,de,ge,ee.width,ee.height)}for(let ee=0,ue=Re.length;ee<ue;ee++)me=Re[ee],Be?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe,Ce,me):t.texImage2D(i.TEXTURE_2D,ee,ge,pe,Ce,me);x.generateMipmaps=!1}else if(Be){if(ke){const ee=Oe(te);t.texStorage2D(i.TEXTURE_2D,de,ge,ee.width,ee.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,pe,Ce,te);f(x)&&T(B),he.__version=le.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ie(R,x,I){if(x.image.length!==6)return;const B=$(R,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+I);const le=n.get(K);if(K.version!==le.__version||B===!0){t.activeTexture(i.TEXTURE0+I);const he=nt.getPrimaries(nt.workingColorSpace),J=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),te=x.colorSpace===ci||he===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!pe&&!Ce?ge[re]=g(x.image[re],!0,r.maxCubemapSize):ge[re]=Ce?x.image[re].image:x.image[re],ge[re]=Rt(x,ge[re]);const me=ge[0],Re=s.convert(x.format,x.colorSpace),Be=s.convert(x.type),ke=_(x.internalFormat,Re,Be,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,de=le.__version===void 0||B===!0,ee=K.dataReady;let ue=y(x,me);Ae(i.TEXTURE_CUBE_MAP,x);let _e;if(pe){N&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ke,me.width,me.height);for(let re=0;re<6;re++){_e=ge[re].mipmaps;for(let De=0;De<_e.length;De++){const ye=_e[De];x.format!==En?Re!==null?N?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,ke,ye.width,ye.height,0,ye.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,ye.width,ye.height,Re,Be,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,ke,ye.width,ye.height,0,Re,Be,ye.data)}}}else{if(_e=x.mipmaps,N&&de){_e.length>0&&ue++;const re=Oe(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ke,re.width,re.height)}for(let re=0;re<6;re++)if(Ce){N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Re,Be,ge[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,ge[re].width,ge[re].height,0,Re,Be,ge[re].data);for(let De=0;De<_e.length;De++){const wt=_e[De].image[re].image;N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,wt.width,wt.height,Re,Be,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,ke,wt.width,wt.height,0,Re,Be,wt.data)}}else{N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Be,ge[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Re,Be,ge[re]);for(let De=0;De<_e.length;De++){const ye=_e[De];N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,Re,Be,ye.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,ke,Re,Be,ye.image[re])}}}f(x)&&T(i.TEXTURE_CUBE_MAP),le.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function be(R,x,I,B,K,le){const he=s.convert(I.format,I.colorSpace),J=s.convert(I.type),te=_(I.internalFormat,he,J,I.normalized,I.colorSpace),pe=n.get(x),Ce=n.get(I);if(Ce.__renderTarget=x,!pe.__hasExternalTextures){const ge=Math.max(1,x.width>>le),me=Math.max(1,x.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,te,ge,me,x.depth,0,he,J,null):t.texImage2D(K,le,te,ge,me,0,he,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,K,Ce.__webglTexture,0,yt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,K,Ce.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const B=x.depthTexture,K=B&&B.isDepthTexture?B.type:null,le=S(x.stencilBuffer,K),he=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(x),le,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(x),le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,R)}else{const B=x.textures;for(let K=0;K<B.length;K++){const le=B[K],he=s.convert(le.format,le.colorSpace),J=s.convert(le.type),te=_(le.internalFormat,he,J,le.normalized,le.colorSpace);Ke(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(x),te,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(R,x,I){const B=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,x.depthTexture);const pe=s.convert(x.depthTexture.format),Ce=s.convert(x.depthTexture.type);let ge;x.depthTexture.format===Jn?ge=i.DEPTH_COMPONENT24:x.depthTexture.format===Si&&(ge=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ge,x.width,x.height,0,pe,Ce,null)}}else q(x.depthTexture,0);const le=K.__webglTexture,he=yt(x),J=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,te=x.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Jn)Ke(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else if(x.depthTexture.format===Si)Ke(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(R){const x=n.get(R),I=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const B=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),B){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=B}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let B=0;B<6;B++)He(x.__webglFramebuffer[B],R,B);else{const B=R.texture.mipmaps;B&&B.length>0?He(x.__webglFramebuffer[0],R,0):He(x.__webglFramebuffer,R,0)}else if(I){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]===void 0)x.__webglDepthbuffer[B]=i.createRenderbuffer(),it(x.__webglDepthbuffer[B],R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{const B=R.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),it(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,x,I){const B=n.get(R);x!==void 0&&be(B.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ye(R)}function je(R){const x=R.texture,I=n.get(R),B=n.get(x);R.addEventListener("dispose",m);const K=R.textures,le=R.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,o.memory.textures++),le){I.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[J]=[];for(let te=0;te<x.mipmaps.length;te++)I.__webglFramebuffer[J][te]=i.createFramebuffer()}else I.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)I.__webglFramebuffer[J]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(he)for(let J=0,te=K.length;J<te;J++){const pe=n.get(K[J]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const te=K[J];I.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[J]);const pe=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),ge=_(te.internalFormat,pe,Ce,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),me=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,I.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),it(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)be(I.__webglFramebuffer[J][te],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else be(I.__webglFramebuffer[J],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(x)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let J=0,te=K.length;J<te;J++){const pe=K[J],Ce=n.get(pe);let ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ce.__webglTexture),Ae(ge,pe),be(I.__webglFramebuffer,R,pe,i.COLOR_ATTACHMENT0+J,ge,0),f(pe)&&T(ge)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,B.__webglTexture),Ae(J,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)be(I.__webglFramebuffer[te],R,x,i.COLOR_ATTACHMENT0,J,te);else be(I.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,J,0);f(x)&&T(J),t.unbindTexture()}R.depthBuffer&&Ye(R)}function lt(R){const x=R.textures;for(let I=0,B=x.length;I<B;I++){const K=x[I];if(f(K)){const le=M(R),he=n.get(K).__webglTexture;t.bindTexture(le,he),T(le),t.unbindTexture()}}}const vt=[],ot=[];function Tt(R){if(R.samples>0){if(Ke(R)===!1){const x=R.textures,I=R.width,B=R.height;let K=i.COLOR_BUFFER_BIT;const le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(R),J=x.length>1;if(J)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ce=n.get(x[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,I,B,0,0,I,B,K,i.NEAREST),l===!0&&(vt.length=0,ot.length=0,vt.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(le),ot.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ce=n.get(x[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Ke(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){const x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Rt(R,x){const I=R.colorSpace,B=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Ls&&I!==ci&&(nt.getTransfer(I)===dt?(B!==En||K!==mn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",I)),x}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.getTextureUnits=Y,this.setTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=et,this.setupRenderTarget=je,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function K_(i,e){function t(n,r=ci){let s;const o=nt.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return i.BYTE;if(n===Cu)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===En)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===bs||n===ws||n===As||n===Ts)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===oa||n===aa||n===la)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ua||n===ha||n===da||n===fa||n===Ps||n===pa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ca||n===ua)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ha)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===da)return s.COMPRESSED_R11_EAC;if(n===fa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return s.COMPRESSED_RG11_EAC;if(n===pa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===Ea||n===ba||n===wa||n===Aa||n===Ta||n===Ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ma)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Pa||n===Da)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ca)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ia||n===Ds||n===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`;class Q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:Z_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends fi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const A=typeof XRWebGLBinding<"u",g=new Q_,f={},T=t.getContextAttributes();let M=null,_=null;const S=[],y=[],w=new Xe;let m=null;const b=new pn;b.viewport=new Ct;const C=new pn;C.viewport=new Ct;const P=[b,C],D=new af;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=S[$];return oe===void 0&&(oe=new lo,S[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=S[$];return oe===void 0&&(oe=new lo,S[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=S[$];return oe===void 0&&(oe=new lo,S[$]=oe),oe.getHandSpace()};function G($){const oe=y.indexOf($.inputSource);if(oe===-1)return;const se=S[oe];se!==void 0&&(se.update($.inputSource,$.frame,c||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",z);for(let $=0;$<S.length;$++){const oe=y[$];oe!==null&&(y[$]=null,S[$].disconnect(oe))}H=null,Y=null,g.reset();for(const $ in f)delete f[$];e.setRenderTarget(M),p=null,u=null,d=null,r=null,_=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&A&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(w),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ve=null,Ie=null;T.depth&&(Ie=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=T.stencil?Si:Jn,ve=T.stencil?Nr:Un);const be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Nn(u.textureWidth,u.textureHeight,{format:En,type:mn,depthTexture:new or(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Nn(p.framebufferWidth,p.framebufferHeight,{format:En,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z($){for(let oe=0;oe<$.removed.length;oe++){const se=$.removed[oe],ve=y.indexOf(se);ve>=0&&(y[ve]=null,S[ve].disconnect(se))}for(let oe=0;oe<$.added.length;oe++){const se=$.added[oe];let ve=y.indexOf(se);if(ve===-1){for(let be=0;be<S.length;be++)if(be>=y.length){y.push(se),ve=be;break}else if(y[be]===null){y[be]=se,ve=be;break}if(ve===-1)break}const Ie=S[ve];Ie&&Ie.connect(se)}}const q=new U,j=new U;function ne($,oe,se){q.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const ve=q.distanceTo(j),Ie=oe.projectionMatrix.elements,be=se.projectionMatrix.elements,it=Ie[14]/(Ie[10]-1),He=Ie[14]/(Ie[10]+1),Ye=(Ie[9]+1)/Ie[5],et=(Ie[9]-1)/Ie[5],je=(Ie[8]-1)/Ie[0],lt=(be[8]+1)/be[0],vt=it*je,ot=it*lt,Tt=ve/(-je+lt),yt=Tt*-je;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(yt),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ke=it+Tt,L=He+Tt,Rt=vt-yt,Oe=ot+(ve-yt),R=Ye*He/L*Ke,x=et*He/L*Ke;$.projectionMatrix.makePerspective(Rt,Oe,R,x,Ke,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,se=$.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(se=g.depthFar)),D.near=C.near=b.near=oe,D.far=C.far=b.far=se,(H!==D.near||Y!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,Y=D.far),D.layers.mask=$.layers.mask|6,b.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;const ve=$.parent,Ie=D.cameras;ie(D,ve);for(let be=0;be<Ie.length;be++)ie(Ie[be],ve);Ie.length===2?ne(D,b,C):D.projectionMatrix.copy(b.projectionMatrix),ce($,D,ve)};function ce($,oe,se){se===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function($){return f[$]};let Q=null;function Le($,oe){if(h=oe.getViewerPose(c||o),v=oe,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ve=!1;se.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let He=0;He<se.length;He++){const Ye=se[He];let et=null;if(p!==null)et=p.getViewport(Ye);else{const lt=d.getViewSubImage(u,Ye);et=lt.viewport,He===0&&(e.setRenderTargetTextures(_,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(_))}let je=P[He];je===void 0&&(je=new pn,je.layers.enable(He),je.viewport=new Ct,P[He]=je),je.matrix.fromArray(Ye.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ye.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(et.x,et.y,et.width,et.height),He===0&&(D.matrix.copy(je.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(je)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){d=n.getBinding();const He=d.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Ie&&Ie.includes("camera-access")&&A){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<se.length;He++){const Ye=se[He].camera;if(Ye){let et=f[Ye];et||(et=new ku,f[Ye]=et);const je=d.getCameraImage(Ye);et.sourceTexture=je}}}}for(let se=0;se<S.length;se++){const ve=y[se],Ie=S[se];ve!==null&&Ie!==void 0&&Ie.update(ve,oe,c||o)}Q&&Q($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Ae=new Xu;Ae.setAnimationLoop(Le),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}const e0=new gt,Qu=new $e;Qu.set(-1,0,0,0,1,0,0,0,1);function t0(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Vu(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,T,M,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),A(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,T,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===nn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===nn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const T=e.get(f),M=T.envMap,_=T.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(e0.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Qu),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,T,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=M*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function A(g,f){const T=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function n0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const y=S.program;n.uniformBlockBinding(_,y)}function c(_,S){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",T));const w=S.program;n.updateUBOMapping(_,w);const m=e.render.frame;s[_.id]!==m&&(u(_),s[_.id]=m)}function h(_){const S=d();_.__bindingPointIndex=S;const y=i.createBuffer(),w=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const S=r[_.id],y=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let m=0,b=y.length;m<b;m++){const C=y[m];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)p(C[P],m,P,w);else p(C,m,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,S,y,w){if(A(_,S,y,w)===!0){const m=_.__offset,b=_.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){const D=b[P],H=f(D);v(D,_.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,_.__data)}}function v(_,S,y){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,y)}function A(_,S,y,w){const m=_.value,b=S+"_"+y;if(w[b]===void 0)return typeof m=="number"||typeof m=="boolean"?w[b]=m:ArrayBuffer.isView(m)?w[b]=m.slice():w[b]=m.clone(),!0;{const C=w[b];if(typeof m=="number"||typeof m=="boolean"){if(C!==m)return w[b]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(C.equals(m)===!1)return C.copy(m),!0}}return!1}function g(_){const S=_.uniforms;let y=0;const w=16;for(let b=0,C=S.length;b<C;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let D=0,H=P.length;D<H;D++){const Y=P[D],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,z=G.length;X<z;X++){const q=G[X],j=f(q),ne=y%w,ie=ne%j.boundary,ce=ne+ie;y+=ie,ce!==0&&w-ce<j.storage&&(y+=w-ce),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=j.storage}}}const m=y%w;return m>0&&(y+=w-m),_.__size=y,_.__cache={},this}function f(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",_),S}function T(_){const S=_.target;S.removeEventListener("dispose",T);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const i0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function r0(){return Pn===null&&(Pn=new Gu(i0,16,16,bi,Zn),Pn.name="DFG_LUT",Pn.minFilter=qt,Pn.magFilter=qt,Pn.wrapS=$n,Pn.wrapT=$n,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class s0{constructor(e={}){const{canvas:t=ld(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=mn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const A=p,g=new Set([Ka,Ya,qa]),f=new Set([mn,Un,Ir,Nr,Wa,Xa]),T=new Uint32Array(4),M=new Int32Array(4),_=new U;let S=null,y=null;const w=[],m=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,D=null,H=null,Y=null,G=null;this._outputColorSpace=un;let X=0,z=0,q=null,j=-1,ne=null;const ie=new Ct,ce=new Ct;let Q=null;const Le=new st(0);let Ae=0,$=t.width,oe=t.height,se=1,ve=null,Ie=null;const be=new Ct(0,0,$,oe),it=new Ct(0,0,$,oe);let He=!1;const Ye=new tl;let et=!1,je=!1;const lt=new gt,vt=new U,ot=new Ct,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ke(){return q===null?se:1}let L=n;function Rt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",sn,!1),L===null){const O="webgl2";if(L=Rt(O,E),L===null)throw Rt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw rt("WebGLRenderer: "+E.message),E}let Oe,R,x,I,B,K,le,he,J,te,pe,Ce,ge,me,Re,Be,ke,N,de,ee,ue,_e,re;function De(){Oe=new rg(L),Oe.init(),ue=new K_(L,Oe),R=new Zm(L,Oe,e,ue),x=new q_(L,Oe),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=L.createFramebuffer(),Y=L.createFramebuffer(),G=L.createFramebuffer(),I=new ag(L),B=new I_,K=new Y_(L,Oe,x,B,R,ue,I),le=new ig(C),he=new hf(L),_e=new Ym(L,he),J=new sg(L,he,I,_e),te=new cg(L,J,he,_e,I),N=new lg(L,R,K),Re=new Jm(B),pe=new L_(C,le,Oe,R,_e,Re),Ce=new t0(C,B),ge=new U_,me=new k_(Oe),ke=new qm(C,le,x,te,v,l),Be=new $_(C,te,R),re=new n0(L,I,R,x),de=new Km(L,Oe,I),ee=new og(L,Oe,I),I.programs=pe.programs,C.capabilities=R,C.extensions=Oe,C.properties=B,C.renderLists=ge,C.shadowMap=Be,C.state=x,C.info=I}De(),A!==mn&&(b=new hg(A,t.width,t.height,a,r,s));const ye=new j_(C,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize($,oe,!1))},this.getSize=function(E){return E.set($,oe)},this.setSize=function(E,O,W=!0){if(ye.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,oe=O,t.width=Math.floor(E*se),t.height=Math.floor(O*se),W===!0&&(t.style.width=E+"px",t.style.height=O+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set($*se,oe*se).floor()},this.setDrawingBufferSize=function(E,O,W){$=E,oe=O,se=W,t.width=Math.floor(E*W),t.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(A===mn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ie)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,O,W,k){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,O,W,k),x.viewport(ie.copy(be).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,O,W,k){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,W,k),x.scissor(ce.copy(it).multiplyScalar(se).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(E){x.setScissorTest(He=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){Ie=E},this.getClearColor=function(E){return E.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let k=0;if(E){let V=!1;if(q!==null){const Me=q.texture.format;V=g.has(Me)}if(V){const Me=q.texture.type,Te=f.has(Me),xe=ke.getClearColor(),Pe=ke.getClearAlpha(),Ne=xe.r,Ve=xe.g,qe=xe.b;Te?(T[0]=Ne,T[1]=Ve,T[2]=qe,T[3]=Pe,L.clearBufferuiv(L.COLOR,0,T)):(M[0]=Ne,M[1]=Ve,M[2]=qe,M[3]=Pe,L.clearBufferiv(L.COLOR,0,M))}else k|=L.COLOR_BUFFER_BIT}O&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),ke.dispose(),ge.dispose(),me.dispose(),B.dispose(),le.dispose(),te.dispose(),_e.dispose(),re.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",zr),ye.removeEventListener("sessionend",Vt),An.stop()};function wt(E){E.preventDefault(),zl("WebGLRenderer: Context Lost."),P=!0}function ut(){zl("WebGLRenderer: Context Restored."),P=!1;const E=I.autoReset,O=Be.enabled,W=Be.autoUpdate,k=Be.needsUpdate,V=Be.type;De(),I.autoReset=E,Be.enabled=O,Be.autoUpdate=W,Be.needsUpdate=k,Be.type=V}function sn(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function on(E){const O=E.target;O.removeEventListener("dispose",on),Bn(O)}function Bn(E){$s(E),B.remove(E)}function $s(E){const O=B.get(E).programs;O!==void 0&&(O.forEach(function(W){pe.releaseProgram(W)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,k,V,Me){O===null&&(O=Tt);const Te=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=Hr(E,O,W,k,V);x.setMaterial(k,Te);let Pe=W.index,Ne=1;if(k.wireframe===!0){if(Pe=J.getWireframeAttribute(W),Pe===void 0)return;Ne=2}const Ve=W.drawRange,qe=W.attributes.position;let Ue=Ve.start*Ne,at=(Ve.start+Ve.count)*Ne;Me!==null&&(Ue=Math.max(Ue,Me.start*Ne),at=Math.min(at,(Me.start+Me.count)*Ne)),Pe!==null?(Ue=Math.max(Ue,0),at=Math.min(at,Pe.count)):qe!=null&&(Ue=Math.max(Ue,0),at=Math.min(at,qe.count));const At=at-Ue;if(At<0||At===1/0)return;_e.setup(V,k,xe,W,Pe);let St,ht=de;if(Pe!==null&&(St=he.get(Pe),ht=ee,ht.setIndex(St)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Ke()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(V.isLine){let Ft=k.linewidth;Ft===void 0&&(Ft=1),x.setLineWidth(Ft*Ke()),V.isLineSegments?ht.setMode(L.LINES):V.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else V.isPoints?ht.setMode(L.POINTS):V.isSprite&&ht.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,we=V._multiDrawCounts,Ht=V._multiDrawCount,tt=Pe?he.get(Pe).bytesPerElement:1,Qt=B.get(k).currentProgram.getUniforms();for(let Bt=0;Bt<Ht;Bt++)Qt.setValue(L,"_gl_DrawID",Bt),ht.render(Ft[Bt]/tt,we[Bt])}else if(V.isInstancedMesh)ht.renderInstances(Ue,At,V.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Ft);ht.renderInstances(Ue,At,we)}else ht.render(Ue,At)};function Ti(E,O,W){E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Di(E,O,W),E.side=di,E.needsUpdate=!0,Di(E,O,W),E.side=Xn):Di(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),y=me.get(W),y.init(O),m.push(y),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();const k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const xe=Me[Te];Ti(xe,W,V),k.add(xe)}else Ti(Me,W,V),k.add(Me)}),y=m.pop(),k},this.compileAsync=function(E,O,W=null){const k=this.compile(E,O,W);return new Promise(V=>{function Me(){if(k.forEach(function(Te){B.get(Te).currentProgram.isReady()&&k.delete(Te)}),k.size===0){V(E);return}setTimeout(Me,10)}Oe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Mt=null;function qs(E){Mt&&Mt(E)}function zr(){An.stop()}function Vt(){An.start()}const An=new Xu;An.setAnimationLoop(qs),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(E){Mt=E,ye.setAnimationLoop(E),E===null?An.stop():An.start()},ye.addEventListener("sessionstart",zr),ye.addEventListener("sessionend",Vt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,O);const W=ye.enabled===!0&&ye.isPresenting===!0,k=b!==null&&(q===null||W)&&b.begin(C,q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,O,q),y=me.get(E,m.length),y.init(O),y.state.textureUnits=K.getTextureUnits(),m.push(y),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(lt,Ln,O.reversedDepth),je=this.localClippingEnabled,et=Re.init(this.clippingPlanes,je),S=ge.get(E,w.length),S.init(),w.push(S),ye.enabled===!0&&ye.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&Ri(Te,O,-1/0,C.sortObjects)}Ri(E,O,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ve,Ie,O.reversedDepth),yt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,yt&&ke.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const V=y.state.shadowsArray;if(Be.render(V,E,O),et===!0&&Re.endShadows(),(k&&b.hasRenderPass())===!1){const Te=S.opaque,xe=S.transmissive;if(y.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(xe.length>0)for(let Ne=0,Ve=Pe.length;Ne<Ve;Ne++){const qe=Pe[Ne];Ci(Te,xe,E,qe)}yt&&ke.render(E);for(let Ne=0,Ve=Pe.length;Ne<Ve;Ne++){const qe=Pe[Ne];fr(S,E,qe,qe.viewport)}}else xe.length>0&&Ci(Te,xe,E,O),yt&&ke.render(E),fr(S,E,O)}q!==null&&z===0&&(K.updateMultisampleRenderTarget(q),K.updateRenderTargetMipmap(q)),k&&b.end(C),E.isScene===!0&&E.onAfterRender(C,E,O),_e.resetDefaultState(),j=-1,ne=null,m.pop(),m.length>0?(y=m[m.length-1],K.setTextureUnits(y.state.textureUnits),et===!0&&Re.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,D!==null&&D.renderEnd()};function Ri(E,O,W,k){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)y.pushLightProbeGrid(E);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ye.intersectsSprite(E)){k&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const Te=te.update(E),xe=E.material;xe.visible&&S.push(E,Te,xe,W,ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ye.intersectsObject(E))){const Te=te.update(E),xe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ot.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ot.copy(Te.boundingSphere.center)),ot.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(xe)){const Pe=Te.groups;for(let Ne=0,Ve=Pe.length;Ne<Ve;Ne++){const qe=Pe[Ne],Ue=xe[qe.materialIndex];Ue&&Ue.visible&&S.push(E,Te,Ue,W,ot.z,qe)}}else xe.visible&&S.push(E,Te,xe,W,ot.z,null)}}const Me=E.children;for(let Te=0,xe=Me.length;Te<xe;Te++)Ri(Me[Te],O,W,k)}function fr(E,O,W,k){const{opaque:V,transmissive:Me,transparent:Te}=E;y.setupLightsView(W),et===!0&&Re.setGlobalState(C.clippingPlanes,W),k&&x.viewport(ie.copy(k)),V.length>0&&Pi(V,O,W),Me.length>0&&Pi(Me,O,W),Te.length>0&&Pi(Te,O,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ci(E,O,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){const Ue=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new Nn(1,1,{generateMipmaps:!0,type:Ue?Zn:mn,minFilter:Mi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Me=y.state.transmissionRenderTarget[k.id],Te=k.viewport||ie;Me.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);const xe=C.getRenderTarget(),Pe=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(Le),Ae=C.getClearAlpha(),Ae<1&&C.setClearColor(16777215,.5),C.clear(),yt&&ke.render(W);const Ve=C.toneMapping;C.toneMapping=In;const qe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),et===!0&&Re.setGlobalState(C.clippingPlanes,k),Pi(E,W,k),K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let at=0,At=O.length;at<At;at++){const St=O[at],{object:ht,geometry:Ft,material:we,group:Ht}=St;if(we.side===Xn&&ht.layers.test(k.layers)){const tt=we.side;we.side=nn,we.needsUpdate=!0,kr(ht,W,k,Ft,we,Ht),we.side=tt,we.needsUpdate=!0,Ue=!0}}Ue===!0&&(K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me))}C.setRenderTarget(xe,Pe,Ne),C.setClearColor(Le,Ae),qe!==void 0&&(k.viewport=qe),C.toneMapping=Ve}function Pi(E,O,W){const k=O.isScene===!0?O.overrideMaterial:null;for(let V=0,Me=E.length;V<Me;V++){const Te=E[V],{object:xe,geometry:Pe,group:Ne}=Te;let Ve=Te.material;Ve.allowOverride===!0&&k!==null&&(Ve=k),xe.layers.test(W.layers)&&kr(xe,O,W,Pe,Ve,Ne)}}function kr(E,O,W,k,V,Me){E.onBeforeRender(C,O,W,k,V,Me),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(C,O,W,k,E,Me),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,C.renderBufferDirect(W,O,k,V,E,Me),V.side=di,V.needsUpdate=!0,C.renderBufferDirect(W,O,k,V,E,Me),V.side=Xn):C.renderBufferDirect(W,O,k,V,E,Me),E.onAfterRender(C,O,W,k,V,Me)}function Di(E,O,W){O.isScene!==!0&&(O=Tt);const k=B.get(E),V=y.state.lights,Me=y.state.shadowsArray,Te=V.state.version,xe=pe.getParameters(E,V.state,Me,O,W,y.state.lightProbeGridArray),Pe=pe.getProgramCacheKey(xe);let Ne=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=le.get(E.envMap||k.environment,Ve),k.envMapRotation=k.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",on),Ne=new Map,k.programs=Ne);let qe=Ne.get(Pe);if(qe!==void 0){if(k.currentProgram===qe&&k.lightsStateVersion===Te)return jn(E,xe),qe}else xe.uniforms=pe.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,W,xe),E.onBeforeCompile(xe,C),qe=pe.acquireProgram(xe,Pe),Ne.set(Pe,qe),k.uniforms=xe.uniforms;const Ue=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Re.uniform),jn(E,xe),k.needsLights=Zs(E),k.lightsStateVersion=Te,k.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=qe,k.uniformsList=null,qe}function Vr(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Rs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function jn(E,O){const W=B.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Ys(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let W=0,k=E.length;W<k;W++){const V=E[W];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function Hr(E,O,W,k,V){O.isScene!==!0&&(O=Tt),K.resetTextureUnits();const Me=O.fog,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,xe=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:nt.workingColorSpace,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=le.get(k.envMap||Te,Pe),Ve=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let St=In;k.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(St=C.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=ht!==void 0?ht.length:0,we=B.get(k),Ht=y.state.lights;if(et===!0&&(je===!0||E!==ne)){const ft=E===ne&&k.id===j;Re.setState(k,E,ft)}let tt=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ht.state.version||we.outputColorSpace!==xe||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ne||k.fog===!0&&we.fog!==Me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Re.numPlanes||we.numIntersection!==Re.numIntersection)||we.vertexAlphas!==Ve||we.vertexTangents!==qe||we.morphTargets!==Ue||we.morphNormals!==at||we.morphColors!==At||we.toneMapping!==St||we.morphTargetsCount!==Ft||!!we.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,we.__version=k.version);let Qt=we.currentProgram;tt===!0&&(Qt=Di(k,O,V),D&&k.isNodeMaterial&&D.onUpdateProgram(k,Qt,we));let Bt=!1,jt=!1,ei=!1;const ct=Qt.getUniforms(),mt=we.uniforms;if(x.useProgram(Qt.program)&&(Bt=!0,jt=!0,ei=!0),k.id!==j&&(j=k.id,jt=!0),we.needsLights){const ft=Ys(y.state.lightProbeGridArray,V);we.lightProbeGrid!==ft&&(we.lightProbeGrid=ft,jt=!0)}if(Bt||ne!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",E.projectionMatrix),ct.setValue(L,"viewMatrix",E.matrixWorldInverse);const Rn=ct.map.cameraPosition;Rn!==void 0&&Rn.setValue(L,vt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),ne!==E&&(ne=E,jt=!0,ei=!0)}if(we.needsLights&&(Ht.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",Ht.state.directionalShadowMap,K),Ht.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",Ht.state.spotShadowMap,K),Ht.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",Ht.state.pointShadowMap,K)),V.isSkinnedMesh){ct.setOptional(L,V,"bindMatrix"),ct.setOptional(L,V,"bindMatrixInverse");const ft=V.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(L,"boneTexture",ft.boneTexture,K))}V.isBatchedMesh&&(ct.setOptional(L,V,"batchingTexture"),ct.setValue(L,"batchingTexture",V._matricesTexture,K),ct.setOptional(L,V,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",V._indirectTexture,K),ct.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",V._colorsTexture,K));const Tn=W.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&N.update(V,W,Qt),(jt||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,ct.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(mt.envMapIntensity.value=O.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=r0()),jt){if(ct.setValue(L,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&Ks(mt,ei),Me&&k.fog===!0&&Ce.refreshFogUniforms(mt,Me),Ce.refreshMaterialUniforms(mt,k,se,oe,y.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const ft=we.lightProbeGrid;mt.probesSH.value=ft.texture,mt.probesMin.value.copy(ft.boundingBox.min),mt.probesMax.value.copy(ft.boundingBox.max),mt.probesResolution.value.copy(ft.resolution)}Rs.upload(L,Vr(we),mt,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Rs.upload(L,Vr(we),mt,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(L,"center",V.center),ct.setValue(L,"modelViewMatrix",V.modelViewMatrix),ct.setValue(L,"normalMatrix",V.normalMatrix),ct.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ft=k.uniformsGroups;for(let Rn=0,ti=ft.length;Rn<ti;Rn++){const pr=ft[Rn];re.update(pr,Qt),re.bind(pr,Qt)}}return Qt}function Ks(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Zs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(E,O,W){const k=B.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=O,B.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const W=B.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){q=E,X=O,z=W;let k=null,V=!1,Me=!1;if(E){const xe=B.get(E);if(xe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),ie.copy(E.viewport),ce.copy(E.scissor),Q=E.scissorTest,x.viewport(ie),x.scissor(ce),x.setScissorTest(Q),j=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(xe.__hasExternalTextures)K.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(xe.__boundDepthTexture!==Ve){if(Ve!==null&&B.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);const Ne=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?k=Ne[O][W]:k=Ne[O],V=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?k=B.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[W]:k=Ne,ie.copy(E.viewport),ce.copy(E.scissor),Q=E.scissorTest}else ie.copy(be).multiplyScalar(se).floor(),ce.copy(it).multiplyScalar(se).floor(),Q=He;if(W!==0&&(k=H),x.bindFramebuffer(L.FRAMEBUFFER,k)&&x.drawBuffers(E,k),x.viewport(ie),x.scissor(ce),x.setScissorTest(Q),V){const xe=B.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,W)}else if(Me){const xe=O;for(let Pe=0;Pe<E.textures.length;Pe++){const Ne=B.get(E.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,xe)}}else if(E!==null&&W!==0){const xe=B.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,W)}j=-1},this.readRenderTargetPixels=function(E,O,W,k,V,Me,Te,xe=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){x.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Ne=E.textures[xe],Ve=Ne.format,qe=Ne.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Ve)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(qe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-k&&W>=0&&W<=E.height-V&&L.readPixels(O,W,k,V,ue.convert(Ve),ue.convert(qe),Me)}finally{const Ne=q!==null?B.get(q).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,k,V,Me,Te,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(O>=0&&O<=E.width-k&&W>=0&&W<=E.height-V){x.bindFramebuffer(L.FRAMEBUFFER,Pe);const Ne=E.textures[xe],Ve=Ne.format,qe=Ne.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),L.readPixels(O,W,k,V,ue.convert(Ve),ue.convert(qe),0);const at=q!==null?B.get(q).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,at);const At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await cd(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Ue),L.deleteSync(At),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,W=0){const k=Math.pow(2,-W),V=Math.floor(E.image.width*k),Me=Math.floor(E.image.height*k),Te=O!==null?O.x:0,xe=O!==null?O.y:0;K.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Te,xe,V,Me),x.unbindTexture()},this.copyTextureToTexture=function(E,O,W=null,k=null,V=0,Me=0){let Te,xe,Pe,Ne,Ve,qe,Ue,at,At;const St=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(W!==null)Te=W.max.x-W.min.x,xe=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ve=W.min.y,qe=W.isBox3?W.min.z:0;else{const mt=Math.pow(2,-V);Te=Math.floor(St.width*mt),xe=Math.floor(St.height*mt),E.isDataArrayTexture?Pe=St.depth:E.isData3DTexture?Pe=Math.floor(St.depth*mt):Pe=1,Ne=0,Ve=0,qe=0}k!==null?(Ue=k.x,at=k.y,At=k.z):(Ue=0,at=0,At=0);const ht=ue.convert(O.format),Ft=ue.convert(O.type);let we;O.isData3DTexture?(K.setTexture3D(O,0),we=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),we=L.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),we=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ht=x.getParameter(L.UNPACK_ROW_LENGTH),tt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Qt=x.getParameter(L.UNPACK_SKIP_PIXELS),Bt=x.getParameter(L.UNPACK_SKIP_ROWS),jt=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),x.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const ei=E.isDataArrayTexture||E.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const mt=B.get(E),Tn=B.get(O),ft=B.get(mt.__renderTarget),Rn=B.get(Tn.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let ti=0;ti<Pe;ti++)ei&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(E).__webglTexture,V,qe+ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(O).__webglTexture,Me,At+ti)),L.blitFramebuffer(Ne,Ve,Te,xe,Ue,at,Te,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||B.has(E)){const mt=B.get(E),Tn=B.get(O);x.bindFramebuffer(L.READ_FRAMEBUFFER,Y),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let ft=0;ft<Pe;ft++)ei?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,V,qe+ft):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,V),ct?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,Me,At+ft):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,Me),V!==0?L.blitFramebuffer(Ne,Ve,Te,xe,Ue,at,Te,xe,L.COLOR_BUFFER_BIT,L.NEAREST):ct?L.copyTexSubImage3D(we,Me,Ue,at,At+ft,Ne,Ve,Te,xe):L.copyTexSubImage2D(we,Me,Ue,at,Ne,Ve,Te,xe);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,Me,Ue,at,At,Te,xe,Pe,ht,Ft,St.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(we,Me,Ue,at,At,Te,xe,Pe,ht,St.data):L.texSubImage3D(we,Me,Ue,at,At,Te,xe,Pe,ht,Ft,St):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Ue,at,Te,xe,ht,Ft,St.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Ue,at,St.width,St.height,ht,St.data):L.texSubImage2D(L.TEXTURE_2D,Me,Ue,at,Te,xe,ht,Ft,St);x.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),x.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,jt),Me===0&&O.generateMipmaps&&L.generateMipmap(we),x.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){X=0,z=0,q=null,x.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const kc={type:"change"},rl={type:"start"},ju={type:"end"},_s=new ks,Vc=new Wn,o0=Math.cos(70*tn.DEG2RAD),Lt=new U,en=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Io=1e-6;class a0 extends cf{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Fn,this._lastTargetPosition=new U,this._quat=new Fn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oa,this._sphericalDelta=new Oa,this._scale=1,this._panOffset=new U,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new U,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c0.bind(this),this._onPointerDown=l0.bind(this),this._onPointerUp=u0.bind(this),this._onContextMenu=_0.bind(this),this._onMouseWheel=f0.bind(this),this._onKeyDown=p0.bind(this),this._onTouchStart=m0.bind(this),this._onTouchMove=g0.bind(this),this._onMouseDown=h0.bind(this),this._onMouseMove=d0.bind(this),this._interceptControlDown=x0.bind(this),this._interceptControlUp=v0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kc),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<o0?this.object.lookAt(this.target):(Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(Vc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Io||this._lastTargetPosition.distanceToSquared(this.target)>Io?(this.dispatchEvent(kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function c0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function u0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function h0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(rl)}function d0(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f0(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ju))}function p0(i){this.enabled!==!1&&this._handleKeyDown(i)}function m0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(rl)}function g0(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function _0(i){this.enabled!==!1&&i.preventDefault()}function x0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xs={exports:{}},Hc;function M0(){if(Hc)return xs.exports;Hc=1;var i=typeof Reflect=="object"?Reflect:null,e=i&&typeof i.apply=="function"?i.apply:function(S,y,w){return Function.prototype.apply.call(S,y,w)},t;i&&typeof i.ownKeys=="function"?t=i.ownKeys:Object.getOwnPropertySymbols?t=function(S){return Object.getOwnPropertyNames(S).concat(Object.getOwnPropertySymbols(S))}:t=function(S){return Object.getOwnPropertyNames(S)};function n(_){console&&console.warn&&console.warn(_)}var r=Number.isNaN||function(S){return S!==S};function s(){s.init.call(this)}xs.exports=s,xs.exports.once=f,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(_){if(typeof _!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof _)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(_){if(typeof _!="number"||_<0||r(_))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+_+".");o=_}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(S){if(typeof S!="number"||S<0||r(S))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+S+".");return this._maxListeners=S,this};function l(_){return _._maxListeners===void 0?s.defaultMaxListeners:_._maxListeners}s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(S){for(var y=[],w=1;w<arguments.length;w++)y.push(arguments[w]);var m=S==="error",b=this._events;if(b!==void 0)m=m&&b.error===void 0;else if(!m)return!1;if(m){var C;if(y.length>0&&(C=y[0]),C instanceof Error)throw C;var P=new Error("Unhandled error."+(C?" ("+C.message+")":""));throw P.context=C,P}var D=b[S];if(D===void 0)return!1;if(typeof D=="function")e(D,this,y);else for(var H=D.length,Y=v(D,H),w=0;w<H;++w)e(Y[w],this,y);return!0};function c(_,S,y,w){var m,b,C;if(a(y),b=_._events,b===void 0?(b=_._events=Object.create(null),_._eventsCount=0):(b.newListener!==void 0&&(_.emit("newListener",S,y.listener?y.listener:y),b=_._events),C=b[S]),C===void 0)C=b[S]=y,++_._eventsCount;else if(typeof C=="function"?C=b[S]=w?[y,C]:[C,y]:w?C.unshift(y):C.push(y),m=l(_),m>0&&C.length>m&&!C.warned){C.warned=!0;var P=new Error("Possible EventEmitter memory leak detected. "+C.length+" "+String(S)+" listeners added. Use emitter.setMaxListeners() to increase limit");P.name="MaxListenersExceededWarning",P.emitter=_,P.type=S,P.count=C.length,n(P)}return _}s.prototype.addListener=function(S,y){return c(this,S,y,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(S,y){return c(this,S,y,!0)};function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(_,S,y){var w={fired:!1,wrapFn:void 0,target:_,type:S,listener:y},m=h.bind(w);return m.listener=y,w.wrapFn=m,m}s.prototype.once=function(S,y){return a(y),this.on(S,d(this,S,y)),this},s.prototype.prependOnceListener=function(S,y){return a(y),this.prependListener(S,d(this,S,y)),this},s.prototype.removeListener=function(S,y){var w,m,b,C,P;if(a(y),m=this._events,m===void 0)return this;if(w=m[S],w===void 0)return this;if(w===y||w.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete m[S],m.removeListener&&this.emit("removeListener",S,w.listener||y));else if(typeof w!="function"){for(b=-1,C=w.length-1;C>=0;C--)if(w[C]===y||w[C].listener===y){P=w[C].listener,b=C;break}if(b<0)return this;b===0?w.shift():A(w,b),w.length===1&&(m[S]=w[0]),m.removeListener!==void 0&&this.emit("removeListener",S,P||y)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(S){var y,w,m;if(w=this._events,w===void 0)return this;if(w.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):w[S]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete w[S]),this;if(arguments.length===0){var b=Object.keys(w),C;for(m=0;m<b.length;++m)C=b[m],C!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=w[S],typeof y=="function")this.removeListener(S,y);else if(y!==void 0)for(m=y.length-1;m>=0;m--)this.removeListener(S,y[m]);return this};function u(_,S,y){var w=_._events;if(w===void 0)return[];var m=w[S];return m===void 0?[]:typeof m=="function"?y?[m.listener||m]:[m]:y?g(m):v(m,m.length)}s.prototype.listeners=function(S){return u(this,S,!0)},s.prototype.rawListeners=function(S){return u(this,S,!1)},s.listenerCount=function(_,S){return typeof _.listenerCount=="function"?_.listenerCount(S):p.call(_,S)},s.prototype.listenerCount=p;function p(_){var S=this._events;if(S!==void 0){var y=S[_];if(typeof y=="function")return 1;if(y!==void 0)return y.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function v(_,S){for(var y=new Array(S),w=0;w<S;++w)y[w]=_[w];return y}function A(_,S){for(;S+1<_.length;S++)_[S]=_[S+1];_.pop()}function g(_){for(var S=new Array(_.length),y=0;y<S.length;++y)S[y]=_[y].listener||_[y];return S}function f(_,S){return new Promise(function(y,w){function m(C){_.removeListener(S,b),w(C)}function b(){typeof _.removeListener=="function"&&_.removeListener("error",m),y([].slice.call(arguments))}M(_,S,b,{once:!0}),S!=="error"&&T(_,m,{once:!0})})}function T(_,S,y){typeof _.on=="function"&&M(_,"error",S,y)}function M(_,S,y,w){if(typeof _.on=="function")w.once?_.once(S,y):_.on(S,y);else if(typeof _.addEventListener=="function")_.addEventListener(S,function m(b){w.once&&_.removeEventListener(S,m),y(b)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof _)}return xs.exports}var S0=M0();function E0(){const i=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])i[n]=arguments[e][n];return i}let It=E0;typeof Object.assign=="function"&&(It=Object.assign);function gn(i,e,t,n){const r=i._nodes.get(e);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[t]||r.undirected&&r.undirected[t]:n==="directed"?s=r.out&&r.out[t]:s=r.undirected&&r.undirected[t]),s}function zt(i){return typeof i=="object"&&i!==null}function eh(i){let e;for(e in i)return!1;return!0}function fn(i,e,t){Object.defineProperty(i,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function yn(i,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(i,e,n)}function Wc(i){return!(!zt(i)||i.attributes&&!Array.isArray(i.attributes))}function b0(){let i=Math.floor(Math.random()*256)&255;return()=>i++}function Kn(){const i=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=i.length)return{done:!0};e=i[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function ur(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class sl extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Ee extends sl{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ee.prototype.constructor)}}class fe extends sl{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,fe.prototype.constructor)}}class ze extends sl{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ze.prototype.constructor)}}function th(i,e){this.key=i,this.attributes=e,this.clear()}th.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function nh(i,e){this.key=i,this.attributes=e,this.clear()}nh.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function ih(i,e){this.key=i,this.attributes=e,this.clear()}ih.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function hr(i,e,t,n,r){this.key=e,this.attributes=r,this.undirected=i,this.source=t,this.target=n}hr.prototype.attach=function(){let i="out",e="in";this.undirected&&(i=e="undirected");const t=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};hr.prototype.attachMulti=function(){let i="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(i=e="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[e][t]=this};hr.prototype.detach=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][i]};hr.prototype.detachMulti=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][i]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const rh=0,sh=1,w0=2,oh=3;function Qn(i,e,t,n,r,s,o){let a,l,c,h;if(n=""+n,t===rh){if(a=i._nodes.get(n),!a)throw new fe(`Graph.${e}: could not find the "${n}" node in the graph.`);c=r,h=s}else if(t===oh){if(r=""+r,l=i._edges.get(r),!l)throw new fe(`Graph.${e}: could not find the "${r}" edge in the graph.`);const d=l.source.key,u=l.target.key;if(n===d)a=l.target;else if(n===u)a=l.source;else throw new fe(`Graph.${e}: the "${n}" node is not attached to the "${r}" edge (${d}, ${u}).`);c=s,h=o}else{if(l=i._edges.get(n),!l)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===sh?a=l.source:a=l.target,c=r,h=s}return[a,c,h]}function A0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);return o.attributes[a]}}function T0(i,e,t){i.prototype[e]=function(n,r){const[s]=Qn(this,e,t,n,r);return s.attributes}}function R0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);return o.attributes.hasOwnProperty(a)}}function C0(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,l,c]=Qn(this,e,t,n,r,s,o);return a.attributes[l]=c,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function P0(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,l,c]=Qn(this,e,t,n,r,s,o);if(typeof c!="function")throw new Ee(`Graph.${e}: updater should be a function.`);const h=a.attributes,d=c(h[l]);return h[l]=d,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function D0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function L0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);if(!zt(a))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function I0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);if(!zt(a))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return It(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function N0(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=Qn(this,e,t,n,r,s);if(typeof a!="function")throw new Ee(`Graph.${e}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const U0=[{name:i=>`get${i}Attribute`,attacher:A0},{name:i=>`get${i}Attributes`,attacher:T0},{name:i=>`has${i}Attribute`,attacher:R0},{name:i=>`set${i}Attribute`,attacher:C0},{name:i=>`update${i}Attribute`,attacher:P0},{name:i=>`remove${i}Attribute`,attacher:D0},{name:i=>`replace${i}Attributes`,attacher:L0},{name:i=>`merge${i}Attributes`,attacher:I0},{name:i=>`update${i}Attributes`,attacher:N0}];function F0(i){U0.forEach(function({name:e,attacher:t}){t(i,e("Node"),rh),t(i,e("Source"),sh),t(i,e("Target"),w0),t(i,e("Opposite"),oh)})}function O0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function B0(i,e,t){i.prototype[e]=function(n){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,o=""+arguments[1];if(r=gn(this,s,o,t),!r)throw new fe(`Graph.${e}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function G0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function z0(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=gn(this,a,l,t),!o)throw new fe(`Graph.${e}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function k0(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=gn(this,a,l,t),!o)throw new fe(`Graph.${e}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new Ee(`Graph.${e}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function V0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function H0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!zt(r))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function W0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!zt(r))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return It(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function X0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new fe(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new fe(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new Ee(`Graph.${e}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const $0=[{name:i=>`get${i}Attribute`,attacher:O0},{name:i=>`get${i}Attributes`,attacher:B0},{name:i=>`has${i}Attribute`,attacher:G0},{name:i=>`set${i}Attribute`,attacher:z0},{name:i=>`update${i}Attribute`,attacher:k0},{name:i=>`remove${i}Attribute`,attacher:V0},{name:i=>`replace${i}Attributes`,attacher:H0},{name:i=>`merge${i}Attributes`,attacher:W0},{name:i=>`update${i}Attributes`,attacher:X0}];function q0(i){$0.forEach(function({name:e,attacher:t}){t(i,e("Edge"),"mixed"),t(i,e("DirectedEdge"),"directed"),t(i,e("UndirectedEdge"),"undirected")})}const Y0=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function K0(i,e,t,n){let r=!1;for(const s in e){if(s===n)continue;const o=e[s];if(r=t(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),i&&r)return o.key}}function Z0(i,e,t,n){let r,s,o,a=!1;for(const l in e)if(l!==n){r=e[l];do{if(s=r.source,o=r.target,a=t(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),i&&a)return r.key;r=r.next}while(r!==void 0)}}function No(i,e){const t=Object.keys(i),n=t.length;let r,s=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const o=t[s++];if(o===e){r=void 0;continue}r=i[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function J0(i,e,t,n){const r=e[t];if(!r)return;const s=r.source,o=r.target;if(n(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&i)return r.key}function Q0(i,e,t,n){let r=e[t];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function Uo(i,e){let t=i[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const r={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:r}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function j0(i,e){if(i.size===0)return[];if(e==="mixed"||e===i.type)return Array.from(i._edges.keys());const t=e==="undirected"?i.undirectedSize:i.directedSize,n=new Array(t),r=e==="undirected",s=i._edges.values();let o=0,a,l;for(;a=s.next(),a.done!==!0;)l=a.value,l.undirected===r&&(n[o++]=l.key);return n}function ah(i,e,t,n){if(e.size===0)return;const r=t!=="mixed"&&t!==e.type,s=t==="undirected";let o,a,l=!1;const c=e._edges.values();for(;o=c.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:h,attributes:d,source:u,target:p}=a;if(l=n(h,d,u.key,p.key,u.attributes,p.attributes,a.undirected),i&&l)return h}}function ex(i,e){if(i.size===0)return ur();const t=e!=="mixed"&&e!==i.type,n=e==="undirected",r=i._edges.values();return{[Symbol.iterator](){return this},next(){let s,o;for(;;){if(s=r.next(),s.done)return s;if(o=s.value,!(t&&o.undirected!==n))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function ol(i,e,t,n,r,s){const o=e?Z0:K0;let a;if(t!=="undirected"&&(n!=="out"&&(a=o(i,r.in,s),i&&a)||n!=="in"&&(a=o(i,r.out,s,n?void 0:r.key),i&&a))||t!=="directed"&&(a=o(i,r.undirected,s),i&&a))return a}function tx(i,e,t,n){const r=[];return ol(!1,i,e,t,n,function(s){r.push(s)}),r}function nx(i,e,t){let n=ur();return i!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=Kn(n,No(t.in))),e!=="in"&&typeof t.out<"u"&&(n=Kn(n,No(t.out,e?void 0:t.key)))),i!=="directed"&&typeof t.undirected<"u"&&(n=Kn(n,No(t.undirected))),n}function al(i,e,t,n,r,s,o){const a=t?Q0:J0;let l;if(e!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(l=a(i,r.in,s,o),i&&l)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(l=a(i,r.out,s,o),i&&l))||e!=="directed"&&typeof r.undirected<"u"&&(l=a(i,r.undirected,s,o),i&&l))return l}function ix(i,e,t,n,r){const s=[];return al(!1,i,e,t,n,r,function(o){s.push(o)}),s}function rx(i,e,t,n){let r=ur();return i!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(r=Kn(r,Uo(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(r=Kn(r,Uo(t.out,n)))),i!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(r=Kn(r,Uo(t.undirected,n))),r}function sx(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return j0(this,n);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new fe(`Graph.${t}: could not find the "${s}" node in the graph.`);return tx(this.multi,n==="mixed"?this.type:n,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new fe(`Graph.${t}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new fe(`Graph.${t}:  could not find the "${o}" target node in the graph.`);return ix(n,this.multi,r,a,o)}throw new Ee(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function ox(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,h,d){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return d=c,ah(!1,this,n,d);if(arguments.length===2){c=""+c,d=h;const u=this._nodes.get(c);if(typeof u>"u")throw new fe(`Graph.${s}: could not find the "${c}" node in the graph.`);return ol(!1,this.multi,n==="mixed"?this.type:n,r,u,d)}if(arguments.length===3){c=""+c,h=""+h;const u=this._nodes.get(c);if(!u)throw new fe(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(h))throw new fe(`Graph.${s}:  could not find the "${h}" target node in the graph.`);return al(!1,n,this.multi,r,u,h,d)}throw new Ee(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),h=c.pop();let d;if(c.length===0){let u=0;n!=="directed"&&(u+=this.undirectedSize),n!=="undirected"&&(u+=this.directedSize),d=new Array(u);let p=0;c.push((v,A,g,f,T,M,_)=>{d[p++]=h(v,A,g,f,T,M,_)})}else d=[],c.push((u,p,v,A,g,f,T)=>{d.push(h(u,p,v,A,g,f,T))});return this[s].apply(this,c),d};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),h=c.pop(),d=[];return c.push((u,p,v,A,g,f,T)=>{h(u,p,v,A,g,f,T)&&d.push(u)}),this[s].apply(this,c),d};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(){let c=Array.prototype.slice.call(arguments);if(c.length<2||c.length>4)throw new Ee(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${c.length}).`);if(typeof c[c.length-1]=="function"&&typeof c[c.length-2]!="function")throw new Ee(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let h,d;c.length===2?(h=c[0],d=c[1],c=[]):c.length===3?(h=c[1],d=c[2],c=[c[0]]):c.length===4&&(h=c[2],d=c[3],c=[c[0],c[1]]);let u=d;return c.push((p,v,A,g,f,T,M)=>{u=h(u,p,v,A,g,f,T,M)}),this[s].apply(this,c),u}}function ax(i,e){const{name:t,type:n,direction:r}=e,s="find"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return h=l,ah(!0,this,n,h);if(arguments.length===2){l=""+l,h=c;const d=this._nodes.get(l);if(typeof d>"u")throw new fe(`Graph.${s}: could not find the "${l}" node in the graph.`);return ol(!0,this.multi,n==="mixed"?this.type:n,r,d,h)}if(arguments.length===3){l=""+l,c=""+c;const d=this._nodes.get(l);if(!d)throw new fe(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new fe(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return al(!0,n,this.multi,r,d,c,h)}throw new Ee(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,u,p,v,A,g,f)=>c(d,u,p,v,A,g,f)),!!this[s].apply(this,l)};const a="every"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,u,p,v,A,g,f)=>!c(d,u,p,v,A,g,f)),!this[s].apply(this,l)}}function lx(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return ur();if(!arguments.length)return ex(this,n);if(arguments.length===1){o=""+o;const l=this._nodes.get(o);if(!l)throw new fe(`Graph.${s}: could not find the "${o}" node in the graph.`);return nx(n,r,l)}if(arguments.length===2){o=""+o,a=""+a;const l=this._nodes.get(o);if(!l)throw new fe(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new fe(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return rx(n,r,l,a)}throw new Ee(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function cx(i){Y0.forEach(e=>{sx(i,e),ox(i,e),ax(i,e),lx(i,e)})}const ux=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Xs(){this.A=null,this.B=null}Xs.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};Xs.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function br(i,e,t,n,r){for(const s in n){const o=n[s],a=o.source,l=o.target,c=a===t?l:a;if(e&&e.has(c.key))continue;const h=r(c.key,c.attributes);if(i&&h)return c.key}}function ll(i,e,t,n,r){if(e!=="mixed"){if(e==="undirected")return br(i,null,n,n.undirected,r);if(typeof t=="string")return br(i,null,n,n[t],r)}const s=new Xs;let o;if(e!=="undirected"){if(t!=="out"){if(o=br(i,null,n,n.in,r),i&&o)return o;s.wrap(n.in)}if(t!=="in"){if(o=br(i,s,n,n.out,r),i&&o)return o;s.wrap(n.out)}}if(e!=="directed"&&(o=br(i,s,n,n.undirected,r),i&&o))return o}function hx(i,e,t){if(i!=="mixed"){if(i==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return ll(!1,i,e,t,function(r){n.push(r)}),n}function wr(i,e,t){const n=Object.keys(t),r=n.length;let s=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(s>=r)return i&&i.wrap(t),{done:!0};const a=t[n[s++]],l=a.source,c=a.target;if(o=l===e?c:l,i&&i.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function dx(i,e,t){if(i!=="mixed"){if(i==="undirected")return wr(null,t,t.undirected);if(typeof e=="string")return wr(null,t,t[e])}let n=ur();const r=new Xs;return i!=="undirected"&&(e!=="out"&&(n=Kn(n,wr(r,t,t.in))),e!=="in"&&(n=Kn(n,wr(r,t,t.out)))),i!=="directed"&&(n=Kn(n,wr(r,t,t.undirected))),n}function fx(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new fe(`Graph.${t}: could not find the "${s}" node in the graph.`);return hx(n==="mixed"?this.type:n,r,o)}}function px(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new fe(`Graph.${s}: could not find the "${c}" node in the graph.`);ll(!1,n==="mixed"?this.type:n,r,d,h)};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(c,h){const d=[];return this[s](c,(u,p)=>{d.push(h(u,p))}),d};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(c,h){const d=[];return this[s](c,(u,p)=>{h(u,p)&&d.push(u)}),d};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(c,h,d){if(arguments.length<3)throw new Ee(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u=d;return this[s](c,(p,v)=>{u=h(u,p,v)}),u}}function mx(i,e){const{name:t,type:n,direction:r}=e,s=t[0].toUpperCase()+t.slice(1,-1),o="find"+s;i.prototype[o]=function(c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new fe(`Graph.${o}: could not find the "${c}" node in the graph.`);return ll(!0,n==="mixed"?this.type:n,r,d,h)};const a="some"+s;i.prototype[a]=function(c,h){return!!this[o](c,h)};const l="every"+s;i.prototype[l]=function(c,h){return!this[o](c,(u,p)=>!h(u,p))}}function gx(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return ur();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new fe(`Graph.${s}: could not find the "${o}" node in the graph.`);return dx(n==="mixed"?this.type:n,r,a)}}function _x(i){ux.forEach(e=>{fx(i,e),px(i,e),mx(i,e),gx(i,e)})}function vs(i,e,t,n,r){const s=n._nodes.values(),o=n.type;let a,l,c,h,d,u;for(;a=s.next(),a.done!==!0;){let p=!1;if(l=a.value,o!=="undirected"){h=l.out;for(c in h){d=h[c];do u=d.target,p=!0,r(l.key,u.key,l.attributes,u.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}if(o!=="directed"){h=l.undirected;for(c in h)if(!(e&&l.key>c)){d=h[c];do u=d.target,u.key!==c&&(u=d.source),p=!0,r(l.key,u.key,l.attributes,u.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}t&&!p&&r(l.key,null,l.attributes,null,null,null,null)}}function xx(i,e){const t={key:i};return eh(e.attributes)||(t.attributes=It({},e.attributes)),t}function vx(i,e,t){const n={key:e,source:t.source.key,target:t.target.key};return eh(t.attributes)||(n.attributes=It({},t.attributes)),i==="mixed"&&t.undirected&&(n.undirected=!0),n}function yx(i){if(!zt(i))throw new Ee('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new Ee("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!zt(i.attributes)||i.attributes===null))throw new Ee("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Mx(i){if(!zt(i))throw new Ee('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new Ee("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new Ee("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!zt(i.attributes)||i.attributes===null))throw new Ee("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new Ee("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const Sx=b0(),Ex=new Set(["directed","undirected","mixed"]),Xc=new Set(["domain","_events","_eventsCount","_maxListeners"]),bx=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],wx={allowSelfLoops:!0,multi:!1,type:"mixed"};function Ax(i,e,t){if(t&&!zt(t))throw new Ee(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},i._nodes.has(e))throw new ze(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function $c(i,e,t){const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function lh(i,e,t,n,r,s,o,a){if(!n&&i.type==="undirected")throw new ze(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ze(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!zt(a))throw new Ee(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!i.allowSelfLoops&&s===o)throw new ze(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=i._nodes.get(s),c=i._nodes.get(o);if(!l)throw new fe(`Graph.${e}: source node "${s}" not found.`);if(!c)throw new fe(`Graph.${e}: target node "${o}" not found.`);const h={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ze(`Graph.${e}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new ze(`Graph.${e}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const d=new hr(n,r,l,c,a);i._edges.set(r,d);const u=s===o;return n?(l.undirectedDegree++,c.undirectedDegree++,u&&(l.undirectedLoops++,i._undirectedSelfLoopCount++)):(l.outDegree++,c.inDegree++,u&&(l.directedLoops++,i._directedSelfLoopCount++)),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,h.key=r,i.emit("edgeAdded",h),r}function Tx(i,e,t,n,r,s,o,a,l){if(!n&&i.type==="undirected")throw new ze(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ze(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(l){if(typeof a!="function")throw new Ee(`Graph.${e}: invalid updater function. Expecting a function but got "${a}"`)}else if(!zt(a))throw new Ee(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let c;if(l&&(c=a,a=void 0),!i.allowSelfLoops&&s===o)throw new ze(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let h=i._nodes.get(s),d=i._nodes.get(o),u,p;if(!t&&(u=i._edges.get(r),u)){if((u.source.key!==s||u.target.key!==o)&&(!n||u.source.key!==o||u.target.key!==s))throw new ze(`Graph.${e}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${u.source.key}", "${u.target.key}").`);p=u}if(!p&&!i.multi&&h&&(p=n?h.undirected[o]:h.out[o]),p){const T=[p.key,!1,!1,!1];if(l?!c:!a)return T;if(l){const M=p.attributes;p.attributes=c(M),i.emit("edgeAttributesUpdated",{type:"replace",key:p.key,attributes:p.attributes})}else It(p.attributes,a),i.emit("edgeAttributesUpdated",{type:"merge",key:p.key,attributes:p.attributes,data:a});return T}a=a||{},l&&c&&(a=c(a));const v={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ze(`Graph.${e}: the "${r}" edge already exists in the graph.`);let A=!1,g=!1;h||(h=$c(i,s,{}),A=!0,s===o&&(d=h,g=!0)),d||(d=$c(i,o,{}),g=!0),u=new hr(n,r,h,d,a),i._edges.set(r,u);const f=s===o;return n?(h.undirectedDegree++,d.undirectedDegree++,f&&(h.undirectedLoops++,i._undirectedSelfLoopCount++)):(h.outDegree++,d.inDegree++,f&&(h.directedLoops++,i._directedSelfLoopCount++)),i.multi?u.attachMulti():u.attach(),n?i._undirectedSize++:i._directedSize++,v.key=r,i.emit("edgeAdded",v),[r,!0,A,g]}function Yi(i,e){i._edges.delete(e.key);const{source:t,target:n,attributes:r}=e,s=e.undirected,o=t===n;s?(t.undirectedDegree--,n.undirectedDegree--,o&&(t.undirectedLoops--,i._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,o&&(t.directedLoops--,i._directedSelfLoopCount--)),i.multi?e.detachMulti():e.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:e.key,attributes:r,source:t.key,target:n.key,undirected:s})}class _t extends S0.EventEmitter{constructor(e){if(super(),e=It({},wx,e),typeof e.multi!="boolean")throw new Ee(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!Ex.has(e.type))throw new Ee(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Ee(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?th:e.type==="directed"?nh:ih;fn(this,"NodeDataClass",t);const n="geid_"+Sx()+"_";let r=0;const s=()=>{let o;do o=n+r++;while(this._edges.has(o));return o};fn(this,"_attributes",{}),fn(this,"_nodes",new Map),fn(this,"_edges",new Map),fn(this,"_directedSize",0),fn(this,"_undirectedSize",0),fn(this,"_directedSelfLoopCount",0),fn(this,"_undirectedSelfLoopCount",0),fn(this,"_edgeKeyGenerator",s),fn(this,"_options",e),Xc.forEach(o=>fn(this,o,this[o])),yn(this,"order",()=>this._nodes.size),yn(this,"size",()=>this._edges.size),yn(this,"directedSize",()=>this._directedSize),yn(this,"undirectedSize",()=>this._undirectedSize),yn(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),yn(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),yn(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),yn(this,"multi",this._options.multi),yn(this,"type",this._options.type),yn(this,"allowSelfLoops",this._options.allowSelfLoops),yn(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Ee(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Ee(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Ee(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ze("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new fe(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new fe(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ze("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new fe(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new fe(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new ze("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new fe(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new fe(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,r+=t.directedLoops),n-r}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,r+=t.directedLoops),n-r}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,r+=t.directedLoops*2),n-r}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new fe(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(e===r)return s;if(e===s)return r;throw new fe(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${s}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new fe(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new fe(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Ax(this,e,t).key}mergeNode(e,t){if(t&&!zt(t))throw new Ee(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(It(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Ee(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const s=n.attributes;n.attributes=t(s),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:r}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new fe(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in t.out){n=t.out[r];do Yi(this,n),n=n.next;while(n)}for(const r in t.in){n=t.in[r];do Yi(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in t.undirected){n=t.undirected[r];do Yi(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(t=gn(this,n,r,this.type),!t)throw new fe(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new fe(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return Yi(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ze("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ze("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=gn(this,e,t,"directed");if(!n)throw new fe(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Yi(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ze("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ze("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=gn(this,e,t,"undirected");if(!n)throw new fe(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Yi(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Ee("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!zt(e))throw new Ee("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!zt(e))throw new Ee("Graph.mergeAttributes: provided attributes are not a plain object.");return It(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Ee("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Ee("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!Wc(t))throw new Ee("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=e(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Ee("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!Wc(t))throw new Ee("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,o,a;for(;r=n.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=e(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Ee("Graph.forEachAdjacencyEntry: expecting a callback.");vs(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ee("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");vs(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Ee("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");vs(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ee("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");vs(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Ee("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!="function")throw new Ee("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!="function")throw new Ee("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,r;const s=new Array(this.order);let o=0;for(;n=t.next(),n.done!==!0;)r=n.value,s[o++]=e(r.key,r.attributes);return s}someNode(e){if(typeof e!="function")throw new Ee("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Ee("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Ee("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,r;const s=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(e,t){if(typeof e!="function")throw new Ee("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Ee("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,n=e(n,o.key,o.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,s)=>{e[t++]=xx(s,r)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((r,s)=>{n[t++]=vx(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof _t)return e.forEachNode((l,c)=>{t?this.mergeNode(l,c):this.addNode(l,c)}),e.forEachEdge((l,c,h,d,u,p,v)=>{t?v?this.mergeUndirectedEdgeWithKey(l,h,d,c):this.mergeDirectedEdgeWithKey(l,h,d,c):v?this.addUndirectedEdgeWithKey(l,h,d,c):this.addDirectedEdgeWithKey(l,h,d,c)}),this;if(!zt(e))throw new Ee("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!zt(e.attributes))throw new Ee("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,r,s,o,a;if(e.nodes){if(s=e.nodes,!Array.isArray(s))throw new Ee("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],yx(o);const{key:l,attributes:c}=o;t?this.mergeNode(l,c):this.addNode(l,c)}}if(e.edges){let l=!1;if(this.type==="undirected"&&(l=!0),s=e.edges,!Array.isArray(s))throw new Ee("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],Mx(a);const{source:c,target:h,attributes:d,undirected:u=l}=a;let p;"key"in a?(p=t?u?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:u?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,p.call(this,a.key,c,h,d)):(p=t?u?this.mergeUndirectedEdge:this.mergeDirectedEdge:u?this.addUndirectedEdge:this.addDirectedEdge,p.call(this,c,h,d))}}return this}nullCopy(e){const t=new _t(It({},this._options,e));return t.replaceAttributes(It({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,r)=>{const s=It({},n.attributes);n=new t.NodeDataClass(r,s),t._nodes.set(r,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ze(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ze("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ze("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,lh(t,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,It({},s.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((s,o)=>{e[o]=s.attributes});const t={},n={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let l="",c=s.source.key,h=s.target.key,d;s.undirected&&c>h&&(d=c,c=h,h=d);const u=`(${c})${a}(${h})`;o.startsWith("geid_")?this.multi&&(typeof n[u]>"u"?n[u]=0:n[u]++,l+=`${n[u]}. `):l+=`[${o}]: `,l+=u,t[l]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!Xc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,fn(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(_t.prototype[Symbol.for("nodejs.util.inspect.custom")]=_t.prototype.inspect);bx.forEach(i=>{["add","merge","update"].forEach(e=>{const t=i.name(e),n=e==="add"?lh:Tx;i.generateKey?_t.prototype[t]=function(r,s,o){return n(this,t,!0,(i.type||this.type)==="undirected",null,r,s,o,e==="update")}:_t.prototype[t]=function(r,s,o,a){return n(this,t,!1,(i.type||this.type)==="undirected",r,s,o,a,e==="update")}})});F0(_t);q0(_t);cx(_t);_x(_t);class ch extends _t{constructor(e){const t=It({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Ee("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Ee('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class cl extends _t{constructor(e){const t=It({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Ee("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Ee('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class uh extends _t{constructor(e){const t=It({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class hh extends _t{constructor(e){const t=It({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Ee('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class dh extends _t{constructor(e){const t=It({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Ee('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function dr(i){i.from=function(e,t){const n=It({},e.options,t),r=new i(n);return r.import(e),r}}dr(_t);dr(ch);dr(cl);dr(uh);dr(hh);dr(dh);_t.Graph=_t;_t.DirectedGraph=ch;_t.UndirectedGraph=cl;_t.MultiGraph=uh;_t.MultiDirectedGraph=hh;_t.MultiUndirectedGraph=dh;_t.InvalidArgumentsGraphError=Ee;_t.NotFoundGraphError=fe;_t.UsageGraphError=ze;var Fo,qc;function fh(){if(qc)return Fo;qc=1;function i(t){return!t||typeof t!="object"||typeof t=="function"||Array.isArray(t)||t instanceof Set||t instanceof Map||t instanceof RegExp||t instanceof Date}function e(t,n){t=t||{};var r={};for(var s in n){var o=t[s],a=n[s];if(!i(a)){r[s]=e(o,a);continue}o===void 0?r[s]=a:r[s]=o}return r}return Fo=e,Fo}var Oo,Yc;function ph(){return Yc||(Yc=1,Oo=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),Oo}var Bo,Kc;function Rx(){if(Kc)return Bo;Kc=1;var i=ph();return Bo=function(t){if(!i(t))throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");var n=t.type;return n!=="mixed"?n:t.directedSize===0&&t.undirectedSize===0||t.directedSize>0&&t.undirectedSize>0?"mixed":t.directedSize>0?"directed":"undirected"},Bo}var Go,Zc;function mh(){if(Zc)return Go;Zc=1;function i(e){if(typeof e!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=e}return typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=function(){return this}),i.of=function(){var e=arguments,t=e.length,n=0;return new i(function(){return n>=t?{done:!0}:{done:!1,value:e[n++]}})},i.empty=function(){var e=new i(function(){return{done:!0}});return e},i.fromSequence=function(e){var t=0,n=e.length;return new i(function(){return t>=n?{done:!0}:{done:!1,value:e[t++]}})},i.is=function(e){return e instanceof i?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"},Go=i,Go}var zo={},Jc;function ul(){return Jc||(Jc=1,(function(i){var e=Math.pow(2,8)-1,t=Math.pow(2,16)-1,n=Math.pow(2,32)-1,r=Math.pow(2,7)-1,s=Math.pow(2,15)-1,o=Math.pow(2,31)-1;i.getPointerArray=function(l){var c=l-1;if(c<=e)return Uint8Array;if(c<=t)return Uint16Array;if(c<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},i.getSignedPointerArray=function(l){var c=l-1;return c<=r?Int8Array:c<=s?Int16Array:c<=o?Int32Array:Float64Array},i.getNumberType=function(l){return l===(l|0)?Math.sign(l)===-1?l<=127&&l>=-128?Int8Array:l<=32767&&l>=-32768?Int16Array:Int32Array:l<=255?Uint8Array:l<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};i.getMinimalRepresentation=function(l,c){var h=null,d=0,u,p,v,A,g;for(A=0,g=l.length;A<g;A++)v=c?c(l[A]):l[A],p=i.getNumberType(v),u=a[p.name],u>d&&(d=u,h=p);return h},i.isTypedArray=function(l){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(l)},i.concat=function(){var l=0,c,h,d;for(c=0,d=arguments.length;c<d;c++)l+=arguments[c].length;var u=new arguments[0].constructor(l);for(c=0,h=0;c<d;c++)u.set(arguments[c],h),h+=arguments[c].length;return u},i.indices=function(l){for(var c=i.getPointerArray(l),h=new c(l),d=0;d<l;d++)h[d]=d;return h}})(zo)),zo}var ko,Qc;function Cx(){if(Qc)return ko;Qc=1;var i=mh(),e=ul().getPointerArray;function t(n,r){arguments.length<2&&(r=n,n=Array);var s=e(r);this.size=0,this.length=r,this.dense=new s(r),this.sparse=new s(r),this.vals=new n(r)}return t.prototype.clear=function(){this.size=0},t.prototype.has=function(n){var r=this.sparse[n];return r<this.size&&this.dense[r]===n},t.prototype.get=function(n){var r=this.sparse[n];if(r<this.size&&this.dense[r]===n)return this.vals[r]},t.prototype.set=function(n,r){var s=this.sparse[n];return s<this.size&&this.dense[s]===n?(this.vals[s]=r,this):(this.dense[this.size]=n,this.sparse[n]=this.size,this.vals[this.size]=r,this.size++,this)},t.prototype.delete=function(n){var r=this.sparse[n];return r>=this.size||this.dense[r]!==n?!1:(r=this.dense[this.size-1],this.dense[this.sparse[n]]=r,this.sparse[r]=this.sparse[n],this.size--,!0)},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=0;s<this.size;s++)n.call(r,this.vals[s],this.dense[s])},t.prototype.keys=function(){var n=this.size,r=this.dense,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},t.prototype.values=function(){var n=this.size,r=this.vals,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},t.prototype.entries=function(){var n=this.size,r=this.dense,s=this.vals,o=0;return new i(function(){if(o<n){var a=[r[o],s[o]];return o++,{value:a}}return{done:!0}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.entries),t.prototype.inspect=function(){for(var n=new Map,r=0;r<this.size;r++)n.set(this.dense[r],this.vals[r]);return Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.length=this.length,this.vals.constructor!==Array&&(n.type=this.vals.constructor.name),n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),ko=t,ko}var Vo,jc;function Px(){if(jc)return Vo;jc=1;var i=mh(),e=ul().getPointerArray;function t(n){var r=e(n);this.start=0,this.size=0,this.capacity=n,this.dense=new r(n),this.sparse=new r(n)}return t.prototype.clear=function(){this.start=0,this.size=0},t.prototype.has=function(n){if(this.size===0)return!1;var r=this.sparse[n],s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;return s&&this.dense[r]===n},t.prototype.enqueue=function(n){var r=this.sparse[n];if(this.size!==0){var s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;if(s&&this.dense[r]===n)return this}return r=(this.start+this.size)%this.capacity,this.dense[r]=n,this.sparse[n]=r,this.size++,this},t.prototype.dequeue=function(){if(this.size!==0){var n=this.start;this.size--,this.start++,this.start===this.capacity&&(this.start=0);var r=this.dense[n];return this.sparse[r]=this.capacity,r}},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=this.capacity,o=this.size,a=this.start,l=0;l<o;)n.call(r,this.dense[a],l,this),a++,l++,a===s&&(a=0)},t.prototype.values=function(){var n=this.dense,r=this.capacity,s=this.size,o=this.start,a=0;return new i(function(){if(a>=s)return{done:!0};var l=n[o];return o++,a++,o===r&&(o=0),{value:l,done:!1}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.values),t.prototype.inspect=function(){var n=[];return this.forEach(function(r){n.push(r)}),Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.capacity=this.capacity,n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),Vo=t,Vo}var Ho,eu;function Dx(){if(eu)return Ho;eu=1;function i(t){return function(n){return typeof n!="number"&&(n=n.length),Math.floor(t()*n)}}var e=i(Math.random);return e.createRandomIndex=i,Ho=e,Ho}var ys={},Ar={},tu;function Lx(){if(tu)return Ar;tu=1;function i(n){return typeof n!="number"||isNaN(n)?1:n}function e(n,r){var s={},o=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(o=r);var a=function(c){return o(c[n])},l=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(c,h){return a(c.getNodeAttributes(h))},s.fromEntry=function(c,h){return a(h)}):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},s.fromGraph=function(c,h){return o(n(h,c.getNodeAttributes(h)))},s.fromEntry=function(c,h){return o(n(c,h))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l),s}function t(n,r){var s={},o=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(o=r);var a=function(c){return o(c[n])},l=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(c,h){return a(c.getEdgeAttributes(h))},s.fromEntry=function(c,h){return a(h)},s.fromPartialEntry=s.fromEntry,s.fromMinimalEntry=s.fromEntry):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},s.fromGraph=function(c,h){var d=c.extremities(h);return o(n(h,c.getEdgeAttributes(h),d[0],d[1],c.getNodeAttributes(d[0]),c.getNodeAttributes(d[1]),c.isUndirected(h)))},s.fromEntry=function(c,h,d,u,p,v,A){return o(n(c,h,d,u,p,v,A))},s.fromPartialEntry=function(c,h,d,u){return o(n(c,h,d,u))},s.fromMinimalEntry=function(c,h){return o(n(c,h))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l,s.fromMinimalEntry=l),s}return Ar.createNodeValueGetter=e,Ar.createEdgeValueGetter=t,Ar.createEdgeWeightGetter=function(n){return t(n,i)},Ar}var nu;function Ix(){if(nu)return ys;nu=1;var i=ul(),e=fh(),t=Lx().createEdgeWeightGetter,n=Symbol.for("nodejs.util.inspect.custom"),r={getEdgeWeight:"weight",keepDendrogram:!1,resolution:1};function s(a,l){l=e(l,r);var c=l.resolution,h=t(l.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,u=i.getPointerArray(d),p=i.getPointerArray(a.order+1),v=l.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new v(d),this.loops=new v(a.order),this.starts=new u(a.order+1),this.belongings=new p(a.order),this.dendrogram=[],this.mapping=null,this.counts=new p(a.order),this.unused=new p(a.order),this.totalWeights=new v(a.order);var A={},g,f=0,T=0,M=this;a.forEachNode(function(_){M.nodes[f]=_,A[_]=f,T+=a.undirectedDegreeWithoutSelfLoops(_),M.starts[f]=T,M.belongings[f]=f,M.counts[f]=1,f++}),a.forEachEdge(function(_,S,y,w,m,b,C){if(g=h(_,S,y,w,m,b,C),y=A[y],w=A[w],M.M+=g,y===w)M.totalWeights[y]+=g*2,M.loops[y]=g*2;else{M.totalWeights[y]+=g,M.totalWeights[w]+=g;var P=--M.starts[y],D=--M.starts[w];M.neighborhood[P]=w,M.neighborhood[D]=y,M.weights[P]=g,M.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}s.prototype.isolate=function(a,l){var c=this.belongings[a];if(this.counts[c]===1)return c;var h=this.unused[--this.U],d=this.loops[a];return this.totalWeights[c]-=l+d,this.totalWeights[h]+=l+d,this.belongings[a]=h,this.counts[c]--,this.counts[h]++,h},s.prototype.move=function(a,l,c){var h=this.belongings[a],d=this.loops[a];this.totalWeights[h]-=l+d,this.totalWeights[c]+=l+d,this.belongings[a]=c;var u=this.counts[h]--===1;this.counts[c]++,u&&(this.unused[this.U++]=h)},s.prototype.computeNodeDegree=function(a){var l,c,h,d=0;for(l=this.starts[a],c=this.starts[a+1];l<c;l++)h=this.weights[l],d+=h;return d},s.prototype.expensiveIsolate=function(a){var l=this.computeNodeDegree(a);return this.isolate(a,l)},s.prototype.expensiveMove=function(a,l){var c=this.computeNodeDegree(a);this.move(a,c,l)},s.prototype.zoomOut=function(){var a=new Array(this.C-this.U),l={},c=this.nodes.length,h=0,d=0,u,p,v,A,g,f,T,M,_;for(u=0,v=this.C;u<v;u++)f=this.belongings[u],f in l||(l[f]=h,a[h]={adj:{},totalWeights:this.totalWeights[f],internalWeights:0},h++),this.belongings[u]=l[f];var S,y;if(this.keepDendrogram){for(S=this.dendrogram[this.level],y=new(i.getPointerArray(h))(c),u=0;u<c;u++)y[u]=this.belongings[S[u]];this.dendrogram.push(y)}else for(u=0;u<c;u++)this.mapping[u]=this.belongings[this.mapping[u]];for(u=0,v=this.C;u<v;u++)for(f=this.belongings[u],M=a[f],_=M.adj,M.internalWeights+=this.loops[u],p=this.starts[u],A=this.starts[u+1];p<A;p++){if(g=this.neighborhood[p],T=this.belongings[g],f===T){M.internalWeights+=this.weights[p];continue}T in _||(_[T]=0),_[T]+=this.weights[p]}for(this.C=h,g=0,f=0;f<h;f++){M=a[f],_=M.adj,f=+f,this.totalWeights[f]=M.totalWeights,this.loops[f]=M.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(T in _)this.neighborhood[g]=+T,this.weights[g]=_[T],d++,g++}return this.starts[h]=d,this.E=d,this.U=0,this.level++,l},s.prototype.modularity=function(){var a,l,c,h,d,u=0,p=this.M*2,v=new Float64Array(this.C);for(c=0;c<this.C;c++)for(a=this.belongings[c],v[a]+=this.loops[c],h=this.starts[c],d=this.starts[c+1];h<d;h++)l=this.belongings[this.neighborhood[h]],a===l&&(v[a]+=this.weights[h]);for(c=0;c<this.C;c++)u+=v[c]/p-Math.pow(this.totalWeights[c]/p,2)*this.resolution;return u},s.prototype.delta=function(a,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[a],c/d-u*l*this.resolution/(2*d*d)},s.prototype.deltaWithOwnCommunity=function(a,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[a],c/d-(u-l)*l*this.resolution/(2*d*d)},s.prototype.fastDelta=function(a,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[a],c-l*u*this.resolution/(2*d)},s.prototype.fastDeltaWithOwnCommunity=function(a,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[a],c-l*(u-l)*this.resolution/(2*d)},s.prototype.bounds=function(a){return[this.starts[a],this.starts[a+1]]},s.prototype.project=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(a.neighborhood.slice(a.starts[h],a.starts[h+1])).map(function(d){return a.nodes[d]})}),l},s.prototype.collect=function(a){arguments.length<1&&(a=this.level);var l={},c=this.keepDendrogram?this.dendrogram[a]:this.mapping,h,d;for(h=0,d=c.length;h<d;h++)l[this.nodes[h]]=c[h];return l},s.prototype.assign=function(a,l){arguments.length<2&&(l=this.level);var c=this.keepDendrogram?this.dendrogram[l]:this.mapping,h,d;for(h=0,d=c.length;h<d;h++)this.graph.setNodeAttribute(this.nodes[h],a,c[h])},s.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:s,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var l=["neighborhood","weights"],c=["counts","loops","belongings","totalWeights"],h=this;return l.forEach(function(d){a[d]=h[d].slice(0,a.E)}),c.forEach(function(d){a[d]=h[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a};function o(a,l){l=e(l,r);var c=l.resolution,h=t(l.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,u=i.getPointerArray(d),p=i.getPointerArray(a.order+1),v=l.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new v(d),this.loops=new v(a.order),this.starts=new u(a.order+1),this.offsets=new u(a.order),this.belongings=new p(a.order),this.dendrogram=[],this.counts=new p(a.order),this.unused=new p(a.order),this.totalInWeights=new v(a.order),this.totalOutWeights=new v(a.order);var A={},g,f=0,T=0,M=this;a.forEachNode(function(_){M.nodes[f]=_,A[_]=f,T+=a.outDegreeWithoutSelfLoops(_),M.starts[f]=T,T+=a.inDegreeWithoutSelfLoops(_),M.offsets[f]=T,M.belongings[f]=f,M.counts[f]=1,f++}),a.forEachEdge(function(_,S,y,w,m,b,C){if(g=h(_,S,y,w,m,b,C),y=A[y],w=A[w],M.M+=g,y===w)M.loops[y]+=g,M.totalInWeights[y]+=g,M.totalOutWeights[y]+=g;else{M.totalOutWeights[y]+=g,M.totalInWeights[w]+=g;var P=--M.starts[y],D=--M.offsets[w];M.neighborhood[P]=w,M.neighborhood[D]=y,M.weights[P]=g,M.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}return o.prototype.bounds=s.prototype.bounds,o.prototype.inBounds=function(a){return[this.offsets[a],this.starts[a+1]]},o.prototype.outBounds=function(a){return[this.starts[a],this.offsets[a]]},o.prototype.project=s.prototype.project,o.prototype.projectIn=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(a.neighborhood.slice(a.offsets[h],a.starts[h+1])).map(function(d){return a.nodes[d]})}),l},o.prototype.projectOut=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(a.neighborhood.slice(a.starts[h],a.offsets[h])).map(function(d){return a.nodes[d]})}),l},o.prototype.isolate=function(a,l,c){var h=this.belongings[a];if(this.counts[h]===1)return h;var d=this.unused[--this.U],u=this.loops[a];return this.totalInWeights[h]-=l+u,this.totalInWeights[d]+=l+u,this.totalOutWeights[h]-=c+u,this.totalOutWeights[d]+=c+u,this.belongings[a]=d,this.counts[h]--,this.counts[d]++,d},o.prototype.move=function(a,l,c,h){var d=this.belongings[a],u=this.loops[a];this.totalInWeights[d]-=l+u,this.totalInWeights[h]+=l+u,this.totalOutWeights[d]-=c+u,this.totalOutWeights[h]+=c+u,this.belongings[a]=h;var p=this.counts[d]--===1;this.counts[h]++,p&&(this.unused[this.U++]=d)},o.prototype.computeNodeInDegree=function(a){var l,c,h,d=0;for(l=this.offsets[a],c=this.starts[a+1];l<c;l++)h=this.weights[l],d+=h;return d},o.prototype.computeNodeOutDegree=function(a){var l,c,h,d=0;for(l=this.starts[a],c=this.offsets[a];l<c;l++)h=this.weights[l],d+=h;return d},o.prototype.expensiveMove=function(a,l){var c=this.computeNodeInDegree(a),h=this.computeNodeOutDegree(a);this.move(a,c,h,l)},o.prototype.zoomOut=function(){var a=new Array(this.C-this.U),l={},c=this.nodes.length,h=0,d=0,u,p,v,A,g,f,T,M,_,S,y,w,m;for(u=0,v=this.C;u<v;u++)f=this.belongings[u],f in l||(l[f]=h,a[h]={inAdj:{},outAdj:{},totalInWeights:this.totalInWeights[f],totalOutWeights:this.totalOutWeights[f],internalWeights:0},h++),this.belongings[u]=l[f];var b,C;if(this.keepDendrogram){for(b=this.dendrogram[this.level],C=new(i.getPointerArray(h))(c),u=0;u<c;u++)C[u]=this.belongings[b[u]];this.dendrogram.push(C)}else for(u=0;u<c;u++)this.mapping[u]=this.belongings[this.mapping[u]];for(u=0,v=this.C;u<v;u++)for(f=this.belongings[u],_=this.offsets[u],M=a[f],w=M.inAdj,m=M.outAdj,M.internalWeights+=this.loops[u],p=this.starts[u],A=this.starts[u+1];p<A;p++){if(g=this.neighborhood[p],T=this.belongings[g],S=p<_,y=S?m:w,f===T){S&&(M.internalWeights+=this.weights[p]);continue}T in y||(y[T]=0),y[T]+=this.weights[p]}for(this.C=h,g=0,f=0;f<h;f++){M=a[f],w=M.inAdj,m=M.outAdj,f=+f,this.totalInWeights[f]=M.totalInWeights,this.totalOutWeights[f]=M.totalOutWeights,this.loops[f]=M.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(T in m)this.neighborhood[g]=+T,this.weights[g]=m[T],d++,g++;this.offsets[f]=g;for(T in w)this.neighborhood[g]=+T,this.weights[g]=w[T],d++,g++}return this.starts[h]=d,this.E=d,this.U=0,this.level++,l},o.prototype.modularity=function(){var a,l,c,h,d,u=0,p=this.M,v=new Float64Array(this.C);for(c=0;c<this.C;c++)for(a=this.belongings[c],v[a]+=this.loops[c],h=this.starts[c],d=this.offsets[c];h<d;h++)l=this.belongings[this.neighborhood[h]],a===l&&(v[a]+=this.weights[h]);for(c=0;c<this.C;c++)u+=v[c]/p-this.totalInWeights[c]*this.totalOutWeights[c]/Math.pow(p,2)*this.resolution;return u},o.prototype.delta=function(a,l,c,h,d){var u=this.M,p=this.totalInWeights[d],v=this.totalOutWeights[d],A=this.loops[a];return l+=A,c+=A,h/u-(c*p+l*v)*this.resolution/(u*u)},o.prototype.deltaWithOwnCommunity=function(a,l,c,h,d){var u=this.M,p=this.totalInWeights[d],v=this.totalOutWeights[d],A=this.loops[a];return l+=A,c+=A,h/u-(c*(p-l)+l*(v-c))*this.resolution/(u*u)},o.prototype.collect=s.prototype.collect,o.prototype.assign=s.prototype.assign,o.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:o,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var l=["neighborhood","weights"],c=["counts","offsets","loops","belongings","totalInWeights","totalOutWeights"],h=this;return l.forEach(function(d){a[d]=h[d].slice(0,a.E)}),c.forEach(function(d){a[d]=h[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a},ys.UndirectedLouvainIndex=s,ys.DirectedLouvainIndex=o,ys}var Wo,iu;function Nx(){if(iu)return Wo;iu=1;var i=fh(),e=ph(),t=Rx(),n=Cx(),r=Px(),s=Dx().createRandomIndex,o=Ix(),a=o.UndirectedLouvainIndex,l=o.DirectedLouvainIndex,c={nodeCommunityAttribute:"community",getEdgeWeight:"weight",fastLocalMoves:!0,randomWalk:!0,resolution:1,rng:Math.random};function h(f,T,M){var _=f.get(T);typeof _>"u"&&(_=0),_+=M,f.set(T,_)}var d=1e-10;function u(f,T,M,_,S){return Math.abs(_-S)<d?f===T?!1:M>f:_>S}function p(f,T,M){var _=new a(T,{getEdgeWeight:M.getEdgeWeight,keepDendrogram:f,resolution:M.resolution}),S=s(M.rng),y=!0,w=!0,m,b,C=new n(Float64Array,_.C),P,D,H,Y,G,X,z,q,j,ne,ie,ce,Q,Le,Ae,$,oe=0,se=0,ve=[],Ie,be;for(M.fastLocalMoves&&(P=new r(_.C));y;){if(ne=_.C,y=!1,w=!0,M.fastLocalMoves){for(be=0,X=M.randomWalk?S(ne):0,z=0;z<ne;z++,X++)q=X%ne,P.enqueue(q);for(;P.size!==0;){for(q=P.dequeue(),se++,ie=0,C.clear(),m=_.belongings[q],D=_.starts[q],H=_.starts[q+1];D<H;D++)j=_.neighborhood[D],Y=_.weights[D],b=_.belongings[j],ie+=Y,h(C,b,Y);for(Le=_.fastDeltaWithOwnCommunity(q,ie,C.get(m)||0,m),Q=m,G=0;G<C.size;G++)b=C.dense[G],b!==m&&(ce=C.vals[G],oe++,$=_.fastDelta(q,ie,ce,b),Ae=u(Q,m,b,$,Le),Ae&&(Le=$,Q=b));if(Le<0){if(Q=_.isolate(q,ie),Q===m)continue}else{if(Q===m)continue;_.move(q,ie,Q)}for(y=!0,be++,D=_.starts[q],H=_.starts[q+1];D<H;D++)j=_.neighborhood[D],b=_.belongings[j],b!==Q&&P.enqueue(j)}ve.push(be)}else for(Ie=[],ve.push(Ie);w;){for(w=!1,be=0,X=M.randomWalk?S(ne):0,z=0;z<ne;z++,X++){for(q=X%ne,se++,ie=0,C.clear(),m=_.belongings[q],D=_.starts[q],H=_.starts[q+1];D<H;D++)j=_.neighborhood[D],Y=_.weights[D],b=_.belongings[j],ie+=Y,h(C,b,Y);for(Le=_.fastDeltaWithOwnCommunity(q,ie,C.get(m)||0,m),Q=m,G=0;G<C.size;G++)b=C.dense[G],b!==m&&(ce=C.vals[G],oe++,$=_.fastDelta(q,ie,ce,b),Ae=u(Q,m,b,$,Le),Ae&&(Le=$,Q=b));if(Le<0){if(Q=_.isolate(q,ie),Q===m)continue}else{if(Q===m)continue;_.move(q,ie,Q)}w=!0,be++}Ie.push(be),y=w||y}y&&_.zoomOut()}var it={index:_,deltaComputations:oe,nodesVisited:se,moves:ve};return it}function v(f,T,M){var _=new l(T,{getEdgeWeight:M.getEdgeWeight,keepDendrogram:f,resolution:M.resolution}),S=s(M.rng),y=!0,w=!0,m,b,C=new n(Float64Array,_.C),P,D,H,Y,G,X,z,q,j,ne,ie,ce,Q,Le,Ae,$,oe,se,ve,Ie=0,be=0,it=[],He,Ye;for(M.fastLocalMoves&&(P=new r(_.C));y;){if(ce=_.C,y=!1,w=!0,M.fastLocalMoves){for(Ye=0,q=M.randomWalk?S(ce):0,j=0;j<ce;j++,q++)ne=q%ce,P.enqueue(ne);for(;P.size!==0;){for(ne=P.dequeue(),be++,Q=0,Le=0,C.clear(),m=_.belongings[ne],D=_.starts[ne],H=_.starts[ne+1],Y=_.offsets[ne];D<H;D++)G=D<Y,ie=_.neighborhood[D],X=_.weights[D],b=_.belongings[ie],G?Le+=X:Q+=X,h(C,b,X);for(oe=_.deltaWithOwnCommunity(ne,Q,Le,C.get(m)||0,m),$=m,z=0;z<C.size;z++)b=C.dense[z],b!==m&&(Ae=C.vals[z],Ie++,ve=_.delta(ne,Q,Le,Ae,b),se=u($,m,b,ve,oe),se&&(oe=ve,$=b));if(oe<0){if($=_.isolate(ne,Q,Le),$===m)continue}else{if($===m)continue;_.move(ne,Q,Le,$)}for(y=!0,Ye++,D=_.starts[ne],H=_.starts[ne+1];D<H;D++)ie=_.neighborhood[D],b=_.belongings[ie],b!==$&&P.enqueue(ie)}it.push(Ye)}else for(He=[],it.push(He);w;){for(w=!1,Ye=0,q=M.randomWalk?S(ce):0,j=0;j<ce;j++,q++){for(ne=q%ce,be++,Q=0,Le=0,C.clear(),m=_.belongings[ne],D=_.starts[ne],H=_.starts[ne+1],Y=_.offsets[ne];D<H;D++)G=D<Y,ie=_.neighborhood[D],X=_.weights[D],b=_.belongings[ie],G?Le+=X:Q+=X,h(C,b,X);for(oe=_.deltaWithOwnCommunity(ne,Q,Le,C.get(m)||0,m),$=m,z=0;z<C.size;z++)b=C.dense[z],b!==m&&(Ae=C.vals[z],Ie++,ve=_.delta(ne,Q,Le,Ae,b),se=u($,m,b,ve,oe),se&&(oe=ve,$=b));if(oe<0){if($=_.isolate(ne,Q,Le),$===m)continue}else{if($===m)continue;_.move(ne,Q,Le,$)}w=!0,Ye++}He.push(Ye),y=w||y}y&&_.zoomOut()}var et={index:_,deltaComputations:Ie,nodesVisited:be,moves:it};return et}function A(f,T,M,_){if(!e(M))throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");var S=t(M);if(S==="mixed")throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");_=i(_,c);var y=0;if(M.size===0){if(f){M.forEachNode(function(D){M.setNodeAttribute(D,_.nodeCommunityAttribute,y++)});return}var w={};return M.forEachNode(function(D){w[D]=y++}),T?{communities:w,count:M.order,deltaComputations:0,dendrogram:null,level:0,modularity:NaN,moves:null,nodesVisited:0,resolution:_.resolution}:w}var m=S==="undirected"?p:v,b=m(T,M,_),C=b.index;if(!T){if(f){C.assign(_.nodeCommunityAttribute);return}return C.collect()}var P={count:C.C,deltaComputations:b.deltaComputations,dendrogram:C.dendrogram,level:C.level,modularity:C.modularity(),moves:b.moves,nodesVisited:b.nodesVisited,resolution:_.resolution};return f?(C.assign(_.nodeCommunityAttribute),P):(P.communities=C.collect(),P)}var g=A.bind(null,!1,!1);return g.assign=A.bind(null,!0,!1),g.detailed=A.bind(null,!1,!0),g.defaults=c,Wo=g,Wo}var Ux=Nx();const Fx=y0(Ux),za=180,Ox=1.12,Bx=220,Gx=Object.freeze({question:-360,thought:-120,observation:-120,hypothesis:120,excerpt:180,quote:260,link:320,research_result:380});function Fr(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function zx(i){let e=Fr(i)||1;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}function hl(i){return!!(i&&typeof i.id=="string"&&i.id)}function dl(i,e){return i<e?`${i}:${e}`:`${e}:${i}`}function Cs(i){return 120+Math.sqrt(Math.max(1,i))*42}function kx(i,e,t){const n=Fr(`${i}:longitude`)/4294967295,r=Fr(`${i}:latitude`)/4294967295,s=360+Math.sqrt(t+1)*180+Math.sqrt(e+1)*54,o=n*Math.PI*2,a=Math.acos(2*r-1);return{x:Math.sin(a)*Math.cos(o)*s,y:Math.cos(a)*s,z:Math.sin(a)*Math.sin(o)*s}}function Vx(i,e){const t=Fr(`${i}:${e}:x`)/4294967295,n=Fr(`${i}:${e}:y`)/4294967295,r=t*Math.PI*2,s=Math.acos(2*n-1);return{x:Math.sin(s)*Math.cos(r),y:Math.cos(s),z:Math.sin(s)*Math.sin(r)}}function Hx(i){for(let n=0;n<16;n+=1){let r=!1;for(let s=0;s<i.length;s+=1){const o=i[s];for(let a=s+1;a<i.length;a+=1){const l=i[a];let c=l.x-o.x,h=l.y-o.y,d=l.z-o.z,u=Math.hypot(c,h,d);const p=o.radius+l.radius+za;if(u>=p)continue;if(u<.001){const g=Vx(o.id,l.id);c=g.x,h=g.y,d=g.z,u=1}const A=(p-u)/2/u;o.x-=c*A,o.y-=h*A,o.z-=d*A,l.x+=c*A,l.y+=h*A,l.z+=d*A,r=!0}}if(!r)break}const e=i.reduce((n,r)=>({x:n.x+r.x,y:n.y+r.y,z:n.z+r.z}),{x:0,y:0,z:0}),t=Math.max(1,i.length);i.forEach(n=>{n.x-=e.x/t,n.y-=e.y/t,n.z-=e.z/t})}function Wx(i,e){const t=i.map((a,l)=>({id:a.id,radius:a.radius,...kx(a.id,l,i.length)}));if(t.length<2)return t;const n=new Map(t.map(a=>[a.id,a])),r=e.map(a=>({...a})),s=pu(r).id(a=>a.id).distance(a=>a.source.radius+a.target.radius+za*1.7).strength(a=>Math.min(.18,.06+a.weight*.025));return mu(t,3).randomSource(zx(i.map(({id:a})=>a).join("|"))).force("links",s).force("charge",gu().strength(-1150).distanceMax(5e3)).force("collision",xu().radius(a=>a.radius+za).strength(1).iterations(2)).force("center",Ah(0,0,0).strength(.1)).velocityDecay(.48).stop().tick(Bx),Hx(t),i.map(({id:a})=>n.get(a))}function Xx(i,e){const t=new cl;i.forEach(r=>t.addNode(r));const n=new Set;return e.forEach(({sourceId:r,targetId:s})=>{if(r===s)return;const o=dl(r,s);n.has(o)||(n.add(o),t.addEdge(r,s,{weight:1}))}),t}function $x(i,e){const t=e.filter(o=>i.degree(o)===0),n=Fx(i,{randomWalk:!1,resolution:Ox}),r=new Map;e.forEach(o=>{if(i.degree(o)===0)return;const a=String(n[o]),l=r.get(a)||[];l.push(o),r.set(a,l)});const s=[...r.values()].map(o=>o.sort()).map(o=>({id:`cluster:${o[0]}`,nodeIds:o}));return t.length&&s.push({id:"cluster:unlinked",nodeIds:t.sort()}),s.sort((o,a)=>o.id.localeCompare(a.id))}function qx(i,e){const t=new Map;return i.forEach(({sourceId:n,targetId:r})=>{const s=e.get(n)?.id,o=e.get(r)?.id;if(!s||!o||s===o)return;const a=dl(s,o),l=t.get(a);if(l){l.weight+=1;return}t.set(a,{source:s,target:o,weight:1})}),[...t.values()]}function ka(i,e,t){return t!==Or.KNOWLEDGE_LAYERS?{...e.anchor}:{x:e.anchor.x,y:e.anchor.y,z:Gx[i.kind]||0}}function Yx(i=[],e=[],t=Or.CONSTELLATIONS){const n=ir(t),r=new Map(i.filter(hl).map(({id:l,kind:c})=>[l,c||"thought"])),s=[...r.entries()].map(([l,c])=>`${l}:${c}`).sort(),o=new Set(r.keys()),a=e.filter(({sourceId:l,targetId:c})=>typeof l=="string"&&typeof c=="string"&&l!==c&&o.has(l)&&o.has(c)).map(({sourceId:l,targetId:c})=>dl(l,c)).sort();return`${n}|${s.join(",")}|${a.join(",")}`}function Kx(i=[],e=[],t=Or.CONSTELLATIONS){const n=ir(t),r=i.filter(hl),s=[...new Set(r.map(({id:g})=>g))].sort(),o=new Set(s),a=e.filter(({sourceId:g,targetId:f})=>typeof g=="string"&&typeof f=="string"&&g!==f&&o.has(g)&&o.has(f));if(!s.length)return{clusters:[],clusterByNodeId:new Map,interClusterLinks:[],nodeLayoutById:new Map};const l=Xx(s,a),c=$x(l,s).map(g=>({...g,radius:Cs(g.nodeIds.length)})),h=new Map;c.forEach(g=>{g.nodeIds.forEach(f=>h.set(f,g))});const d=qx(a,h),u=Wx(c,d),p=new Map(u.map(g=>[g.id,g]));c.forEach(g=>{g.anchor=p.get(g.id)||{x:0,y:0,z:0}});const v=new Map(r.map(g=>[g.id,g])),A=new Map(s.map(g=>{const f=h.get(g),T=v.get(g);return[g,{clusterId:f.id,clusterAnchor:ka(T,f,n)}]}));return{clusters:c,clusterByNodeId:h,interClusterLinks:d,nodeLayoutById:A}}function Zx(i,{node:e,anchorNodeId:t,mode:n=Or.CONSTELLATIONS}={}){const r=i?.clusterByNodeId?.get(t),s=i?.nodeLayoutById?.get(t);if(!r||!s||!hl(e))return null;const o=ir(n);if(r.id==="cluster:unlinked"){const u=r.nodeIds.filter(M=>M!==t),p=[t,e.id].sort(),v={...r,id:`cluster:${p[0]}`,nodeIds:p,radius:Cs(p.length),anchor:{...r.anchor}},A=u.length?{...r,nodeIds:u,radius:Cs(u.length)}:null,g=i.clusters.filter(M=>M.id!==r.id).concat(A?[A,v]:[v]).sort((M,_)=>M.id.localeCompare(_.id)),f=new Map(i.clusterByNodeId);u.forEach(M=>f.set(M,A)),p.forEach(M=>f.set(M,v));const T=new Map(i.nodeLayoutById);return T.set(t,{...s,clusterId:v.id}),T.set(e.id,{clusterId:v.id,clusterAnchor:ka(e,v,o)}),{...i,clusters:g,clusterByNodeId:f,nodeLayoutById:T}}const a=[...new Set([...r.nodeIds,e.id])].sort(),l={...r,nodeIds:a,radius:Cs(a.length)},c=i.clusters.map(u=>u.id===l.id?l:u),h=new Map(i.clusterByNodeId);a.forEach(u=>h.set(u,l));const d=new Map(i.nodeLayoutById);return d.set(e.id,{clusterId:l.id,clusterAnchor:ka(e,l,o)}),{...i,clusters:c,clusterByNodeId:h,nodeLayoutById:d}}const ru=Object.freeze({tight:72,normal:118,loose:190}),Jx=460,Xo=Object.freeze({x:72,y:-36,z:48}),Qx=.22,jx=.9;function Tr(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function su(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function ev(i,e=0){const t=su(`${i}:x`)/4294967295,n=su(`${i}:y`)/4294967295,r=42+Math.sqrt(e+1)*18,s=t*Math.PI*2,o=Math.acos(2*n-1);return{x:Math.sin(o)*Math.cos(s)*r,y:Math.cos(o)*r,z:Math.sin(o)*Math.sin(s)*r}}function tv({onTick:i=()=>{},onStable:e=()=>{}}={}){let t=[],n=[],r=null,s=null,o=null;const a=new Set;let l=!1;const c=pu([]).id(y=>y.id).distance(y=>y.internal?ru[y.spacing]||ru.normal:Jx).strength(y=>y.internal?.56:.1),h=mu([],3).force("links",c).force("charge",gu().strength(-58).distanceMax(620)).force("collision",xu().radius(y=>y.radius+8).strength(.86)).force("cluster-x",bh(y=>y.clusterAnchor.x).strength(.026)).force("cluster-y",wh(y=>y.clusterAnchor.y).strength(.026)).force("cluster-z",Rh(y=>y.clusterAnchor.z).strength(.026)).alphaDecay(.035).velocityDecay(.42).on("tick",()=>i(t,n)).on("end",()=>{const y=u();e(t,{transition:y})});function d(){a.forEach(y=>{const w=t.find(m=>m.id===y);!w||w.pinned||(w.fx=null,w.fy=null,w.fz=null,w.vx=0,w.vy=0,w.vz=0)}),a.clear()}function u(){const y=o;return d(),o=null,y}function p(y={},w={}){if(l)return;u();const m=new Map(t.map(Q=>[Q.id,Q])),b=Array.isArray(y.nodes)?y.nodes:[],C=Array.isArray(y.links)?y.links:[],P=new Set(b.map(Q=>Q.id)),D=ir(y.layoutMode),H=_u(w.transition),Y=b.find(Q=>Q.id===H.nodeId),G=m.get(H.anchorId),X=[...m.keys()].every(Q=>P.has(Q)),z=C.some(({sourceId:Q,targetId:Le})=>Q===H.anchorId&&Le===H.nodeId||Le===H.anchorId&&Q===H.nodeId);o=H.kind===cn.INSERT_LINKED_NODE&&Y&&G&&!m.has(Y.id)&&b.length===m.size+1&&X&&z?H:{kind:H.kind===cn.REBUILD?cn.REBUILD:cn.RECONCILE};const j=Yx(b,C,D);if(o.kind===cn.INSERT_LINKED_NODE&&r){const Q=Zx(r,{node:Y,anchorNodeId:o.anchorId,mode:D});Q?(r=Q,s=j):o={kind:cn.RECONCILE}}(o.kind===cn.REBUILD||j!==s)&&(r=Kx(b,C,D),s=j),t=b.map((Q,Le)=>{const Ae=m.get(Q.id),$=r.nodeLayoutById.get(Q.id),oe=Tr(Q.pinnedPosition)?Q.pinnedPosition:null,se=o.kind===cn.INSERT_LINKED_NODE&&Q.id===o.nodeId&&G?{x:G.x+Xo.x,y:G.y+Xo.y,z:G.z+Xo.z}:null,ve=o.kind===cn.INSERT_LINKED_NODE&&Tr(Ae)?Ae:null,Ie=oe||se||ve||(Tr(Q)?Q:null)||(Tr(Ae)?Ae:null)||ev(Q.id,Le),be=oe?.pinned===!0;return{...Q,clusterId:$?.clusterId||"cluster:unlinked",clusterAnchor:$?.clusterAnchor||{x:0,y:0,z:0},x:Ie.x,y:Ie.y,z:Ie.z,vx:Number.isFinite(Ae?.vx)?Ae.vx:0,vy:Number.isFinite(Ae?.vy)?Ae.vy:0,vz:Number.isFinite(Ae?.vz)?Ae.vz:0,pinned:be,fx:be?Ie.x:null,fy:be?Ie.y:null,fz:be?Ie.z:null}}),o.kind===cn.INSERT_LINKED_NODE&&t.forEach(Q=>{Q.id===o.nodeId||Q.pinned||!m.has(Q.id)||(Q.fx=Q.x,Q.fy=Q.y,Q.fz=Q.z,a.add(Q.id))});const ne=new Set(t.map(Q=>Q.id)),ie=new Map(t.map(Q=>[Q.id,Q]));if(n=C.filter(Q=>ne.has(Q.sourceId)&&ne.has(Q.targetId)&&Q.sourceId!==Q.targetId).map(Q=>({...Q,internal:ie.get(Q.sourceId).clusterId===ie.get(Q.targetId).clusterId,source:Q.sourceId,target:Q.targetId})),h.nodes(t),c.links(n),!t.length){h.stop(),i(t,n);const Q=u();e(t,{transition:Q});return}const ce=o.kind===cn.INSERT_LINKED_NODE?Qx:jx;h.alpha(ce).alphaTarget(0).restart()}function v(y){return t.find(w=>w.id===y)||null}function A(y){const w=v(y);return!w||l?null:(w.fx=w.x,w.fy=w.y,w.fz=w.z,h.alphaTarget(.16).restart(),w)}function g(y,w){const m=v(y);return!m||!Tr(w)?null:(m.fx=w.x,m.fy=w.y,m.fz=w.z,m.x=w.x,m.y=w.y,m.z=w.z,i(t,n),m)}function f(y,{pinned:w}={}){const m=v(y);return!m||l?null:(m.pinned=w??m.pinned,m.pinned?(m.fx=m.x,m.fy=m.y,m.fz=m.z):(m.fx=null,m.fy=null,m.fz=null),h.alphaTarget(0).alpha(.24).restart(),m)}function T(y,w){const m=v(y);return!m||l?null:(m.pinned=!!w,m.pinned?(m.fx=m.x,m.fy=m.y,m.fz=m.z):(m.fx=null,m.fy=null,m.fz=null),h.alpha(.28).restart(),m)}function M(y=.32){!l&&t.length&&h.alpha(y).restart()}function _(){h.stop(),u()}function S(){l=!0,h.stop(),u(),h.on("tick",null).on("end",null),t=[],n=[]}return{beginDrag:A,dispose:S,dragNode:g,endDrag:f,getLinks:()=>n,getNode:v,getNodes:()=>t,reheat:M,setGraph:p,setPinned:T,stop:_}}const li=Object.freeze({SELECT:0,BACK:1,FOCUS:2,FIT_ALL:3,LEFT_BUMPER:4,RIGHT_BUMPER:5,LEFT_TRIGGER:6,RIGHT_TRIGGER:7}),nv=.14,$o=.05;function ou(i){return Number.isFinite(i)?i:0}function qo(i){return i?Number.isFinite(i.value)?i.value:i.pressed?1:0:0}function iv(i){const e=Math.abs(i);return e<=$o?0:Math.sign(i)*((e-$o)/(1-$o))}function au(i,e,t=nv){const n=ou(i),r=ou(e),s=Math.hypot(n,r);if(s<=t)return{x:0,y:0};const o=Math.min(1,(s-t)/Math.max(1e-4,1-t));return{x:n/s*o,y:r/s*o}}function rv(i,e=[]){const t=Array.from(i||[]).find(s=>s?.connected&&s.mapping==="standard");if(!t)return null;const n=Array.from(t.buttons||[]).map(s=>!!(s?.pressed||qo(s)>.5)),r=s=>!!(n[s]&&!e[s]);return{index:t.index,leftStick:au(t.axes?.[0],t.axes?.[1]),rightStick:au(t.axes?.[2],t.axes?.[3]),roll:Number(n[li.LEFT_BUMPER])-Number(n[li.RIGHT_BUMPER]),thrust:iv(qo(t.buttons?.[li.RIGHT_TRIGGER])-qo(t.buttons?.[li.LEFT_TRIGGER])),selectPressed:r(li.SELECT),backPressed:r(li.BACK),focusPressed:r(li.FOCUS),fitAllPressed:r(li.FIT_ALL),buttons:n}}const lu=Math.sin(tn.degToRad(5)),sv=Math.sin(tn.degToRad(18)),ov=1e-6;function av(){const i=new Fn,e=new U,t=new U;return function(r,s){i.copy(r.quaternion).invert(),e.set(0,1,0).applyQuaternion(i);const o=Math.hypot(e.x,e.y)<sv?e.z<0?"up":"down":null;let a="empty",l=null;if(s)if(t.copy(s).sub(r.position),t.lengthSq()<ov**2)a="at-center";else{t.applyQuaternion(i).normalize();const c=Math.hypot(t.x,t.y);a=t.z>=0?"behind":c<lu?"ahead":"direction",c>=lu&&(l=tn.radToDeg(Math.atan2(t.x,t.y)))}return{upX:e.x,upY:e.y,pole:o,equatorScale:Math.abs(e.z),equatorRotation:tn.radToDeg(Math.atan2(e.x,e.y)),centerState:a,bearing:l}}}const cu=Object.freeze({empty:"No thoughts","at-center":"At center",ahead:"Ahead",behind:"Behind",direction:"Turn to center"});function lv({container:i,onLevel:e,onCenter:t}){const n=av(),r=document.createElement("div");r.className="spatial-orientation",r.setAttribute("role","group"),r.setAttribute("aria-label","Spatial orientation"),r.innerHTML=`
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
  `;const s=r.querySelector(".spatial-orientation-level"),o=r.querySelector(".spatial-orientation-center"),a=r.querySelector(".orientation-equator"),l=r.querySelector(".orientation-axis"),c=r.querySelector(".orientation-up"),h=r.querySelector(".orientation-down"),d=r.querySelector(".orientation-pole-view"),u=r.querySelector(".orientation-center-arrow"),p=r.querySelector(".orientation-center-target"),v=r.querySelector(".orientation-center-behind"),A=r.querySelector(".orientation-center-status");function g(f){(f.key==="Enter"||f.key===" ")&&f.stopPropagation()}return s.addEventListener("click",e),o.addEventListener("click",t),r.addEventListener("keydown",g),i.append(r),{update({camera:f,graphCenter:T}){const M=n(f,T),_=M.upX*25,S=-M.upY*25;a.setAttribute("ry",Math.max(.1,M.equatorScale*28)),a.setAttribute("transform",`rotate(${M.equatorRotation} 40 40)`),c.setAttribute("transform",`translate(${40+_} ${40+S})`),h.setAttribute("transform",`translate(${40-_} ${40-S})`),l.setAttribute("x1",40+_),l.setAttribute("y1",40+S),l.setAttribute("x2",40-_),l.setAttribute("y2",40-S),c.toggleAttribute("hidden",!!M.pole),h.toggleAttribute("hidden",!!M.pole),l.toggleAttribute("hidden",!!M.pole),d.toggleAttribute("hidden",!M.pole),M.pole&&(d.lastElementChild.textContent=M.pole);const y=M.bearing!==null;u.toggleAttribute("hidden",!y),y&&u.setAttribute("transform",`rotate(${M.bearing} 12 12)`),v.toggleAttribute("hidden",M.centerState!=="behind"||y),p.toggleAttribute("hidden",y||M.centerState==="behind"),r.dataset.centerState!==M.centerState&&(r.dataset.centerState=M.centerState,o.disabled=M.centerState==="empty",A.textContent=cu[M.centerState],o.setAttribute("aria-label",`Show entire graph. ${cu[M.centerState]}.`))},dispose(){s.removeEventListener("click",e),o.removeEventListener("click",t),r.removeEventListener("keydown",g),r.remove()}}}const gh=60,cv=8e3,uv=8,hv=5,Ms=280,dv=.05,fv=1.15,pv=90,mv=1600,gv=.05,uu=1.8,_v=1.6,xv=2200,vv=7361989,yv=2394864,Mv=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),hu=Object.freeze({thought:7361989,observation:2389930,excerpt:5860764,question:10512906,hypothesis:8014784,quote:10702700,link:2522486,research_result:3569754}),du=Object.freeze({thought:"#7055c5",observation:"#2477aa",excerpt:"#596d9c",question:"#a06a0a",hypothesis:"#7a4bc0",quote:"#a34f6c",link:"#267d76",research_result:"#36785a"});function ui(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function Zi(i){return Number.isFinite(i)?Math.atan2(Math.sin(i),Math.cos(i)):0}function _h(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function Sv(i){const e=_h(i);return!ui(e?.position)||!ui(e?.target)?null:{...e,roll:Zi(e.roll)}}function fu(i){const e=_h(i);return e?.version!==1||typeof e.positions!="object"?{}:Object.fromEntries(Object.entries(e.positions).filter(([,t])=>ui(t)).slice(0,Rr))}function Ev(i){return Array.from({length:gh},()=>{const e=document.createElement("span");return e.className="spatial-label",e.hidden=!0,i.append(e),e})}function Ss(i,e){return typeof i=="object"&&i?i.id:e}function wv({container:i,theme:e="light",storageKey:t,layoutStorageKey:n,layoutMode:r=Or.CONSTELLATIONS,onThoughtSelect:s=()=>{},onConnectionTargetToggle:o=()=>{},onThoughtActivate:a=()=>{},onThoughtMove:l=()=>{},onDismissRequest:c=()=>{},onError:h=()=>{}}){const d=new zd,u=new pn(48,1,1,1e4);u.up.set(0,1,0);const p=new s0({alpha:!0,antialias:!0,powerPreference:"high-performance"});p.outputColorSpace=un,p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.domElement.className="spatial-canvas",p.domElement.setAttribute("aria-hidden","true");const v=document.createElement("div");v.className="spatial-label-layer";const A=Ev(v),g=document.createElement("span");g.className="spatial-gamepad-reticle",g.setAttribute("aria-hidden","true"),i.prepend(p.domElement,v,g);const f=new a0(u,p.domElement);f.enableDamping=!0,f.dampingFactor=.075,f.minDistance=90,f.maxDistance=5e3,f.minPolarAngle=tn.degToRad(10),f.maxPolarAngle=tn.degToRad(170),f.screenSpacePanning=!0;const T=Sv(t);T?(u.position.set(T.position.x,T.position.y,T.position.z),f.target.set(T.target.x,T.target.y,T.target.z)):(u.position.set(0,160,720),f.target.set(0,0,0)),f.update();const M=new il(1,2),_=new Fs({color:16777215}),S=new sc(M,_,Rr);S.instanceMatrix.setUsage(Ol),S.frustumCulled=!1,S.count=0,d.add(S);const y=new Fs({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),w=new sc(M,y,Rr);w.instanceMatrix.setUsage(Ol),w.frustumCulled=!1,w.count=0,d.add(w);const m=new hn,b=new Ua({color:e==="dark"?11183293:9277866,transparent:!0,opacity:e==="dark"?.5:.42}),C=new uc(m,b);C.frustumCulled=!1,d.add(C);const P=new hn,D=new Ua({color:e==="dark"?10323183:7361989,transparent:!0,opacity:.9}),H=new uc(P,D);H.frustumCulled=!1,d.add(H);const Y=new lf,G=new Xe,X=new gt,z=new U,q=new U(1,1,1),j=new Fn,ne=new st,ie=new st(e==="dark"?1512735:14605290),ce=new st(16777215),Q=new gt,Le=new tl,Ae=new U,$=new Wn,oe=new U,se=new U,ve=new U,Ie=new U,be=new U,it=new U,He=new Oa,Ye=new pi,et=new Ai,je=new U;let lt=[],vt=[],ot=new Map,Tt=[],yt=new Map,Ke=null,L=null,Rt=new Set,Oe=null,R=!1,x=null,I=null,B=null,K=null,le=null,he=!1,J=null,te=[],pe=null,Ce=!1,ge=0,me=null,Re=T?.roll??0,Be=!1,ke=ir(r),N=fu(`${n}${ke}`),de=!T,ee=!1,ue=!0,_e=!0,re=!0,De=null;const ye=new Set,wt=window.matchMedia("(prefers-reduced-motion: reduce)"),ut=lv({container:i,onLevel:ft,onCenter:mt});function sn(){if(!re)return De;re=!1,Ye.makeEmpty();for(const F of lt){if(!ui(F))continue;const Z=Math.max(5,F.radius||7);Ye.expandByPoint(je.set(F.x-Z,F.y-Z,F.z-Z)),Ye.expandByPoint(je.set(F.x+Z,F.y+Z,F.z+Z))}return De=Ye.isEmpty()?null:Ye.getBoundingSphere(et),De}function on({settled:F=!1}={}){const Z=F&&B?B.toPosition:u.position,ae=F&&B?B.toTarget:f.target;return{position:{x:Z.x,y:Z.y,z:Z.z},target:{x:ae.x,y:ae.y,z:ae.z},roll:F&&B?B.toRoll:Re}}function Bn(){try{localStorage.setItem(t,JSON.stringify(on()))}catch{}}function $s(F=lt){N=Object.fromEntries(F.slice(0,Rr).map(Z=>[Z.id,{x:Math.round(Z.x*100)/100,y:Math.round(Z.y*100)/100,z:Math.round(Z.z*100)/100}]));try{localStorage.setItem(`${n}${ke}`,JSON.stringify({version:1,positions:N}))}catch{}}function Ti(){Rt=new Set,Ke&&vt.forEach(F=>{const Z=Ss(F.source,F.sourceId),ae=Ss(F.target,F.targetId);Z===Ke&&Rt.add(ae),ae===Ke&&Rt.add(Z)})}function Mt(){!R||x!==null||(x=requestAnimationFrame(ht))}function qs(F){e=F==="dark"?"dark":"light";const Z=e==="dark";ie.set(Z?1512735:14605290),b.color.set(Z?11183293:9277866),b.opacity=Z?.5:.42,D.color.set(Z?10323183:7361989),b.needsUpdate=!0,D.needsUpdate=!0,ue=!0,_e=!0,Mt()}function zr(){if(K?.kind!==cn.INSERT_LINKED_NODE)return;const F=ot.get(K.anchorId);if(!F)return;const Z=new U(F.x,F.y,F.z),ae=Z.clone().sub(K.previousPosition);ae.lengthSq()>1e-6&&(u.position.add(ae),f.target.add(ae)),K.previousPosition.copy(Z)}const Vt=tv({onTick(F,Z){lt=F,vt=Z,re=!0,ot=new Map(lt.map(ae=>[ae.id,ae])),zr(),Ti(),ue=!0,_e=!0,Mt()},onStable(F,{transition:Z}={}){if($s(F),(de||ee)&&F.length&&(de=!1,ee=!1,mt()),K){const ae=Z?.nodeId===K.nodeId;K=null,ae&&Bn()}Mt()}});function An(F,Z){G.set(F,Z),u.updateMatrixWorld(),Y.setFromCamera(G,u)}function Ri(F,Z){An(F,Z);const[ae]=Y.intersectObject(w);return ae?.instanceId===void 0?null:Tt[ae.instanceId]||null}function fr(F){const Z=p.domElement.getBoundingClientRect();An((F.clientX-Z.left)/Math.max(1,Z.width)*2-1,-((F.clientY-Z.top)/Math.max(1,Z.height))*2+1)}function Ci(F){fr(F);const[Z]=Y.intersectObject(w);return Z?.instanceId===void 0?null:Tt[Z.instanceId]||null}function Pi(){ue&&(lt.forEach(F=>{const Z=yt.get(F.id);if(Z===void 0)return;const ae=F.id===Ke,We=F.id===L,Je=F.id===Oe?.sourceId,Fe=Oe?.targetIds.has(F.id)===!0,xt=!!(Oe&&!Je&&!Fe),Pt=!!(Ke&&!ae&&!Rt.has(F.id)),Et=xt||!Oe&&Pt,Wt=Je?1.38:Fe?1.23:ae?1.34:We?1.17:Et?.76:1,Gt=Math.max(5,F.radius||7);z.set(F.x,F.y,F.z),q.setScalar(Gt*Wt),X.compose(z,j,q),S.setMatrixAt(Z,X),q.setScalar(Gt*Wt+uv),X.compose(z,j,q),w.setMatrixAt(Z,X),ne.setHex(Je?vv:Fe?yv:hu[F.kind]||hu.thought),Et?ne.lerp(ie,.68):ae?ne.lerp(ce,.2):We&&ne.lerp(ce,.1),S.setColorAt(Z,ne)}),S.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere(),S.instanceColor&&(S.instanceColor.needsUpdate=!0),ue=!1)}function kr(){if(!_e)return;const F=[],Z=[];if(vt.slice(0,cv).forEach(ae=>{const We=typeof ae.source=="object"?ae.source:ot.get(ae.sourceId),Je=typeof ae.target=="object"?ae.target:ot.get(ae.targetId);if(!We||!Je)return;const Fe=We.id===Oe?.sourceId,xt=Oe?.targetIds.has(Je.id)===!0;if(Fe&&!xt)return;(!!(Fe&&xt)||!!(Ke&&(We.id===Ke||Je.id===Ke))?Z:F).push(We.x,We.y,We.z,Je.x,Je.y,Je.z)}),Oe){const ae=ot.get(Oe.sourceId),We=new Set(vt.filter(Je=>Ss(Je.source,Je.sourceId)===Oe.sourceId).map(Je=>Ss(Je.target,Je.targetId)));ae&&Oe.targetIds.forEach(Je=>{if(We.has(Je))return;const Fe=ot.get(Je);Fe&&Z.push(ae.x,ae.y,ae.z,Fe.x,Fe.y,Fe.z)})}m.setAttribute("position",new Yt(F,3)),P.setAttribute("position",new Yt(Z,3)),b.opacity=Ke||Oe?.1:.42,_e=!1}function Di(){Q.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),Le.setFromProjectionMatrix(Q);const F=Math.max(1,i.clientWidth),Z=Math.max(1,i.clientHeight),ae=lt.filter(Fe=>(z.set(Fe.x,Fe.y,Fe.z),Le.containsPoint(z))).sort((Fe,xt)=>{const Pt=Gt=>Gt.id===Oe?.sourceId?0:Oe?.targetIds.has(Gt.id)?1:Gt.id===Ke?0:Rt.has(Gt.id)?2:Gt.id===L?3:4,Et=Pt(Fe)-Pt(xt);if(Et)return Et;const Wt=(xt.connectionCount||0)-(Fe.connectionCount||0);return Wt||u.position.distanceToSquared(Fe)-u.position.distanceToSquared(xt)}).filter(Fe=>Oe||!Ke||Fe.id===Ke||Rt.has(Fe.id)||Fe.id===L).map(Fe=>{Ae.set(Fe.x,Fe.y,Fe.z).project(u);const xt=u.position.distanceTo(Fe),Pt=tn.clamp(760/Math.max(520,xt),.72,1);return{node:Fe,x:(Ae.x*.5+.5)*F,y:(-Ae.y*.5+.5)*Z,labelScale:Pt}}),We=[],Je=[];ae.some(Fe=>{if(Je.length>=gh)return!0;const{node:xt,x:Pt,y:Et,labelScale:Wt}=Fe,Gt=tn.clamp(xt.text.length*6.4,42,220)*Wt,bt={left:Pt-Gt/2-7,right:Pt+Gt/2+7,top:Et-34*Wt,bottom:Et-8*Wt},Li=We.some(Wr=>!(bt.right<Wr.left||bt.left>Wr.right||bt.bottom<Wr.top||bt.top>Wr.bottom)),yh=xt.id===Oe?.sourceId||Oe?.targetIds.has(xt.id)||xt.id===Ke||xt.id===L;return(!Li||yh)&&(Je.push(Fe),We.push(bt)),!1}),A.forEach((Fe,xt)=>{const Pt=Je[xt];if(!Pt){Fe.hidden=!0;return}const{node:Et,x:Wt,y:Gt,labelScale:bt}=Pt;Fe.hidden=!1,Fe.textContent=Et.text,Fe.dataset.thoughtId=Et.id,Fe.classList.toggle("is-selected",Et.id===Ke),Fe.classList.toggle("is-neighbour",Rt.has(Et.id)),Fe.classList.toggle("is-connection-source",Et.id===Oe?.sourceId),Fe.classList.toggle("is-connection-target",Oe?.targetIds.has(Et.id)===!0),Fe.style.setProperty("--spatial-kind-color",du[Et.kind]||du.thought),Fe.style.transform=`translate(-50%, calc(-100% - 12px)) translate3d(${Wt}px, ${Gt}px, 0) scale(${bt})`})}function Vr(F){if(!B)return!1;const Z=B.duration<=0?1:Math.min(1,(F-B.startedAt)/B.duration),ae=1-(1-Z)**3;return u.position.lerpVectors(B.fromPosition,B.toPosition,ae),f.target.lerpVectors(B.fromTarget,B.toTarget,ae),Re=Zi(B.fromRoll+Zi(B.toRoll-B.fromRoll)*ae),Z<1?!0:(Re=B.toRoll,B=null,f.enabled=R&&!I,f.update(),Bn(),!1)}function jn({persist:F=!0}={}){const Z=F&&he;ye.clear(),le=null,he=!1,Z&&Bn()}function Ys(){const F=Number(ye.has("KeyD")||ye.has("ArrowRight"))-Number(ye.has("KeyA")||ye.has("ArrowLeft")),Z=Number(ye.has("KeyW")||ye.has("ArrowUp"))-Number(ye.has("KeyS")||ye.has("ArrowDown"));return{horizontal:F,vertical:Z}}function Hr(F,Z,ae,We){if(!F&&!Z&&!ae)return!1;u.getWorldDirection(ve).normalize(),Ie.set(1,0,0).applyQuaternion(u.quaternion).normalize(),be.set(0,1,0).applyQuaternion(u.quaternion).normalize(),it.copy(Ie).multiplyScalar(F).addScaledVector(be,Z).addScaledVector(ve,ae);const Je=it.length();if(Je<1e-4)return!1;Je>1&&it.divideScalar(Je);const Fe=tn.clamp(u.position.distanceTo(f.target)*fv,pv,mv);return it.multiplyScalar(Fe*We),u.position.add(it),f.target.add(it),!0}function Ks(F){if(!R||I||B||!ye.size)return le=F,!1;const Z=le??F;le=F;const ae=Math.min(dv,Math.max(0,(F-Z)/1e3));if(!ae)return!0;const{horizontal:We,vertical:Je}=Ys(),Fe=Hr(We,Je,0,ae);return Fe&&(he=!0),Fe}function Zs(F,Z,ae){if(!F&&!Z)return!1;const We=u.position.distanceTo(f.target);if(We<.001)return!1;const Je=Math.cos(Re),Fe=Math.sin(Re),xt=F*Je+Z*Fe,Pt=Z*Je-F*Fe;return u.getWorldDirection(ve).normalize(),He.setFromVector3(ve),He.theta-=xt*uu*ae,He.phi+=Pt*uu*ae,He.phi=tn.clamp(He.phi,f.minPolarAngle,f.maxPolarAngle),ve.setFromSpherical(He),f.target.copy(u.position).addScaledVector(ve,We),!0}function E(F,Z){return F?(Re=Zi(Re+F*_v*Z),!0):!1}function O(){u.lookAt(f.target),u.rotateZ(Re)}function W(F){F!==me&&(L===me&&(L=null),me=F,F&&(L=F),ue=!0,Mt())}function k(){i.classList.remove("is-gamepad-active"),ge=0,W(null)}function V(F){ge=F,i.classList.add("is-gamepad-active")}function Me(){W(Ri(0,0))}function Te(){const F=Ri(0,0);return W(F),F?Oe?(F!==Oe.sourceId&&o(F),!0):Ht(F):!1}function xe({persist:F=!0}={}){J!==null&&cancelAnimationFrame(J),J=null,te=[],pe=null,F&&Ce&&Bn(),Ce=!1,k()}function Pe(F=[]){try{return rv(navigator.getGamepads?.()||[],F)}catch{return null}}function Ne(F){if(J=null,!R||document.hidden)return;const Z=Pe(te);if(!Z){xe();return}te=Z.buttons;const ae=pe??F;pe=F;const We=Math.min(gv,Math.max(0,(F-ae)/1e3)),Je=!!(Z.leftStick.x||Z.leftStick.y||Z.rightStick.x||Z.rightStick.y||Z.thrust||Z.roll),Fe=!!(Z.selectPressed||Z.backPressed||Z.focusPressed||Z.fitAllPressed);(Je||Fe)&&V(F),ge&&F-ge>xv&&k(),Je&&B&&Bt();let Pt=!1;if(!I&&!Be&&!ye.size&&We){const Et=Hr(Z.leftStick.x,-Z.leftStick.y,Z.thrust,We),Wt=Zs(Z.rightStick.x,Z.rightStick.y,We),Gt=E(Z.roll,We);Pt=Et||Wt||Gt}!I&&!Be&&(Z.fitAllPressed&&mt(),Z.focusPressed&&Ke&&ct(Ke),Z.selectPressed&&Te(),Z.backPressed&&c()),Pt?(Ce=!0,Me(),Mt()):Ce?(Ce=!1,Bn()):i.classList.contains("is-gamepad-active")&&Me(),J=requestAnimationFrame(Ne)}function Ve(){if(!R||document.hidden||J!==null||typeof navigator.getGamepads!="function")return;const F=Pe();F&&(te=F.buttons,pe=null,J=requestAnimationFrame(Ne))}function qe(F){F.gamepad?.mapping==="standard"&&Ve()}function Ue(){xe(),Ve()}function at(){k(),i.focus({preventScroll:!0})}function At(F){!R||I||Oe||F.target!==i||!Mv.has(F.code)||(F.preventDefault(),F.stopPropagation(),k(),B&&Bt(),ye.add(F.code),le=null,Mt())}function St(F){ye.delete(F.code)&&!ye.size&&he&&(he=!1,Bn())}function ht(F){if(x=null,!R||document.hidden)return;const Z=Vr(F),ae=Ks(F),We=f.update();O(),u.updateMatrixWorld(),ut.update({camera:u,graphCenter:sn()?.center??null}),Pi(),kr(),Di(),p.render(d,u),(Z||ae||We)&&Mt()}function Ft({nodes:F=[],links:Z=[],layoutMode:ae=ke,fitAfterLayout:We=!1},{transition:Je=null}={}){const Fe=_u(Je),xt=Fe.kind===cn.INSERT_LINKED_NODE?ot.get(Fe.anchorId):null;K=xt?{...Fe,previousPosition:new U(xt.x,xt.y,xt.z)}:null;const Pt=ir(ae);Pt!==ke&&(ke=Pt,N=fu(`${n}${ke}`)),ee||=We;const Et=F.slice(0,Rr).map(bt=>{const Li=N[bt.id];return{...bt,...!ui(bt.pinnedPosition)&&ui(Li)?Li:{},radius:Math.max(5,Number.isFinite(bt.radius)?bt.radius:7)}}),Wt=new Set(Et.map(bt=>bt.id)),Gt=Z.filter(bt=>Wt.has(bt.sourceId)&&Wt.has(bt.targetId));Tt=Et.map(bt=>bt.id),yt=new Map(Tt.map((bt,Li)=>[bt,Li])),S.count=Et.length,w.count=Et.length,Vt.setGraph({nodes:Et,links:Gt,layoutMode:ke},{transition:Fe}),lt=Vt.getNodes(),vt=Vt.getLinks(),re=!0,ot=new Map(lt.map(bt=>[bt.id,bt])),ot.has(Ke)||(Ke=null),Ti(),ue=!0,_e=!0,de&&lt.length&&mt(),Mt()}function we(F){Ke=ot.has(F)?F:null,Ti(),ue=!0,_e=!0,Mt()}function Ht(F){return ot.has(F)?(s(F),!0):!1}function tt(F){Oe=F&&typeof F.sourceId=="string"?{sourceId:F.sourceId,targetIds:new Set(F.targetIds||[])}:null,p.domElement.classList.toggle("is-connection-selecting",!!Oe),ue=!0,_e=!0,Mt()}function Qt(){const F=u.position.clone(),Z=f.target.clone(),ae=f.enableDamping;B=null,K=null,de=!1,ee=!1,jn({persist:!1}),f.enableDamping=!1,f.update(),u.position.copy(F),f.target.copy(Z),f.update(),f.enableDamping=ae}function Bt(){B&&(B=null,f.enabled=R&&!I,Mt())}function jt(F,Z,ae=Ms,{roll:We=Re}={}){Qt(),B={fromPosition:u.position.clone(),fromTarget:f.target.clone(),toPosition:F.clone(),toTarget:Z.clone(),fromRoll:Re,toRoll:Zi(We),duration:wt.matches?0:ae,startedAt:performance.now()},f.enabled=!1,Mt()}function ei(F){if(I||!ui(F?.position)||!ui(F?.target))return!1;const Z=new U().copy(F.position),ae=new U().copy(F.target);return Z.distanceToSquared(ae)<1e-6?!1:(jt(Z,ae,Ms,{roll:Zi(F.roll)}),!0)}function ct(F){const Z=ot.get(F);if(!Z)return!1;ve.copy(u.position).sub(f.target),ve.lengthSq()<.001&&ve.set(0,0,1),ve.normalize();const ae=new U(Z.x,Z.y,Z.z),We=tn.clamp(u.position.distanceTo(f.target),240,520),Je=ae.clone().addScaledVector(ve,We);return jt(Je,ae),!0}function mt(){if(I)return!1;const F=sn();if(!F)return!1;ve.copy(u.position).sub(f.target),ve.lengthSq()<.001&&ve.set(0,0,1),ve.normalize();const Z=tn.degToRad(u.fov*.5),ae=tn.clamp(F.radius/Math.max(.2,Math.sin(Z))*1.18,220,4200),We=F.center.clone().addScaledVector(ve,ae);return jt(We,F.center),!0}function Tn(){jt(new U(0,160,720),new U(0,0,0),Ms,{roll:0})}function ft(){return!R||I?!1:(jt(u.position,f.target,Ms,{roll:0}),!0)}function Rn(F){const Z=ot.get(F);return Z?{x:Z.x,y:Z.y,z:Z.z}:null}function ti(F,Z){const ae=Vt.setPinned(F,Z);return ae?(Mt(),{x:ae.x,y:ae.y,z:ae.z,pinned:ae.pinned}):null}function pr(){const F=Math.max(1,i.clientWidth),Z=Math.max(1,i.clientHeight);p.setSize(F,Z,!1),u.aspect=F/Z,u.updateProjectionMatrix(),Mt()}function xh(){R=!0,f.enabled=!I&&!B,pr(),Vt.reheat(.22),Ve()}function xl(){xe(),jn(),R=!1,f.enabled=!1,Vt.stop(),I=null,p.domElement.classList.remove("is-node-dragging"),x!==null&&cancelAnimationFrame(x),x=null}function Js(F,{cancelled:Z=!1}={}){if(!I||F.pointerId!==I.pointerId)return;F.preventDefault(),F.stopImmediatePropagation();const ae=I;I=null,p.domElement.classList.remove("is-node-dragging"),p.domElement.hasPointerCapture(F.pointerId)&&p.domElement.releasePointerCapture(F.pointerId);let We=Vt.getNode(ae.thoughtId);ae.started&&(Z&&Vt.dragNode(ae.thoughtId,ae.origin),We=Vt.endDrag(ae.thoughtId,{pinned:Z?ae.wasPinned:void 0})),f.enabled=R&&!B,!Z&&ae.moved&&We?.pinned&&l(We.id,{x:We.x,y:We.y,z:We.z,pinned:!0}),Mt()}function vl(F){if(!R||F.button!==0)return;const Z=Ci(F);if(!Z)return;if(Oe){F.preventDefault(),F.stopImmediatePropagation(),Z!==Oe.sourceId&&o(Z);return}const ae=Vt.getNode(Z);ae&&(F.preventDefault(),F.stopImmediatePropagation(),Ht(Z),f.enabled=!1,p.domElement.setPointerCapture(F.pointerId),p.domElement.classList.add("is-node-dragging"),z.set(ae.x,ae.y,ae.z),u.getWorldDirection(ve).normalize(),$.setFromNormalAndCoplanarPoint(ve,z),Y.ray.intersectPlane($,oe)?se.copy(oe).sub(z):se.set(0,0,0),I={pointerId:F.pointerId,thoughtId:Z,startX:F.clientX,startY:F.clientY,moved:!1,started:!1,wasPinned:ae.pinned,origin:{x:ae.x,y:ae.y,z:ae.z}},Mt())}function yl(F){if(k(),!I){const We=R?Ci(F):null;We!==L&&(L=We,ue=!0,p.domElement.classList.toggle("is-node-hovered",!!L),Mt());return}if(F.pointerId!==I.pointerId||(F.preventDefault(),F.stopImmediatePropagation(),fr(F),!Y.ray.intersectPlane($,oe)))return;const Z=Math.hypot(F.clientX-I.startX,F.clientY-I.startY);if(!I.started&&Z<hv)return;I.started||(Vt.beginDrag(I.thoughtId),I.started=!0);const ae=oe.sub(se);Vt.dragNode(I.thoughtId,{x:ae.x,y:ae.y,z:ae.z}),I.moved=!0}function Ml(F){if(Oe)return;const Z=Ci(F);Z&&(F.preventDefault(),F.stopImmediatePropagation(),a(Z))}function Sl(){I||!L||(L=null,ue=!0,p.domElement.classList.remove("is-node-hovered"),Mt())}function El(F){Js(F,{cancelled:!0})}function bl(){Be=!0,k()}function wl(){Be=!1,Bn()}function Al(){jn(),xe()}function Tl(){if(document.hidden){jn(),xe();return}Ve(),Mt()}function Rl(F){F.preventDefault(),h("3D rendering is unavailable. Reload the page to try again.")}function vh(){xl(),ut.dispose(),jn({persist:!1}),Vt.dispose(),f.removeEventListener("change",Mt),f.removeEventListener("start",bl),f.removeEventListener("end",wl),f.dispose(),M.dispose(),_.dispose(),y.dispose(),m.dispose(),b.dispose(),P.dispose(),D.dispose(),p.dispose(),p.domElement.removeEventListener("pointerdown",Bt,!0),p.domElement.removeEventListener("wheel",Bt,!0),p.domElement.removeEventListener("pointerdown",at,!0),p.domElement.removeEventListener("pointerdown",vl,!0),p.domElement.removeEventListener("pointermove",yl,!0),p.domElement.removeEventListener("pointerup",Js,!0),p.domElement.removeEventListener("pointercancel",El,!0),p.domElement.removeEventListener("pointerleave",Sl),p.domElement.removeEventListener("dblclick",Ml,!0),p.domElement.removeEventListener("webglcontextlost",Rl),document.removeEventListener("visibilitychange",Tl),i.removeEventListener("keydown",At),window.removeEventListener("keyup",St),window.removeEventListener("blur",Al),window.removeEventListener("focus",Ve),window.removeEventListener("gamepadconnected",qe),window.removeEventListener("gamepaddisconnected",Ue),p.domElement.remove(),v.remove(),g.remove()}return f.addEventListener("change",Mt),f.addEventListener("start",bl),f.addEventListener("end",wl),p.domElement.addEventListener("pointerdown",Bt,!0),p.domElement.addEventListener("wheel",Bt,{capture:!0,passive:!0}),p.domElement.addEventListener("pointerdown",at,!0),p.domElement.addEventListener("pointerdown",vl,!0),p.domElement.addEventListener("pointermove",yl,!0),p.domElement.addEventListener("pointerup",Js,!0),p.domElement.addEventListener("pointercancel",El,!0),p.domElement.addEventListener("pointerleave",Sl),p.domElement.addEventListener("dblclick",Ml,!0),p.domElement.addEventListener("webglcontextlost",Rl),document.addEventListener("visibilitychange",Tl),i.addEventListener("keydown",At),window.addEventListener("keyup",St),window.addEventListener("blur",Al),window.addEventListener("focus",Ve),window.addEventListener("gamepadconnected",qe),window.addEventListener("gamepaddisconnected",Ue),{activate:xh,deactivate:xl,dispose:vh,fitAll:mt,focusThought:ct,getCameraState:on,getThoughtPosition:Rn,resetView:Tn,restoreCameraState:ei,resize:pr,setGraph:Ft,setConnectionSelection:tt,setSelectedThought:we,setTheme:qs,setThoughtPinned:ti}}export{wv as createSpatialView};
