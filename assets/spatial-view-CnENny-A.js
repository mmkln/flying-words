import{c as qi,b as lh,q as ch,o as uh,j as Ks,S as Ur,n as ji,f as nu,a as iu,d as ru,e as hh,g as dh,h as su,i as sn,M as Tr}from"./index-DM87hbIb.js";function fh(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function s(){var a,o=n.length,l,c=0,h=0,d=0;for(a=0;a<o;++a)l=n[a],c+=l.x||0,h+=l.y||0,d+=l.z||0;for(c=(c/o-i)*r,h=(h/o-e)*r,d=(d/o-t)*r,a=0;a<o;++a)l=n[a],c&&(l.x-=c),h&&(l.y-=h),d&&(l.z-=d)}return s.initialize=function(a){n=a},s.x=function(a){return arguments.length?(i=+a,s):i},s.y=function(a){return arguments.length?(e=+a,s):e},s.z=function(a){return arguments.length?(t=+a,s):t},s.strength=function(a){return arguments.length?(r=+a,s):r},s}function Zs(i){return i.x+i.vx}function vl(i){return i.y+i.vy}function ph(i){return i.z+i.vz}function au(i){var e,t,n,r,s=1,a=1;typeof i!="function"&&(i=qi(i==null?1:+i));function o(){for(var h,d=e.length,u,p,v,T,g,f,A,E=0;E<a;++E)for(u=(t===1?lh(e,Zs):t===2?ch(e,Zs,vl):t===3?uh(e,Zs,vl,ph):null).visitAfter(l),h=0;h<d;++h)p=e[h],f=n[p.index],A=f*f,v=p.x+p.vx,t>1&&(T=p.y+p.vy),t>2&&(g=p.z+p.vz),u.visit(_);function _(M,y,w,m,b,C,P){var D=[y,w,m,b,C,P],W=D[0],Y=D[1],B=D[2],X=D[t],G=D[t+1],q=D[t+2],ee=M.data,ne=M.r,ie=f+ne;if(ee){if(ee.index>p.index){var le=v-ee.x-ee.vx,j=t>1?T-ee.y-ee.vy:0,Le=t>2?g-ee.z-ee.vz:0,Ae=le*le+j*j+Le*Le;Ae<ie*ie&&(le===0&&(le=Ks(r),Ae+=le*le),t>1&&j===0&&(j=Ks(r),Ae+=j*j),t>2&&Le===0&&(Le=Ks(r),Ae+=Le*Le),Ae=(ie-(Ae=Math.sqrt(Ae)))/Ae*s,p.vx+=(le*=Ae)*(ie=(ne*=ne)/(A+ne)),t>1&&(p.vy+=(j*=Ae)*ie),t>2&&(p.vz+=(Le*=Ae)*ie),ee.vx-=le*(ie=1-ie),t>1&&(ee.vy-=j*ie),t>2&&(ee.vz-=Le*ie))}return}return W>v+ie||X<v-ie||t>1&&(Y>T+ie||G<T-ie)||t>2&&(B>g+ie||q<g-ie)}}function l(h){if(h.data)return h.r=n[h.data.index];for(var d=h.r=0;d<Math.pow(2,t);++d)h[d]&&h[d].r>h.r&&(h.r=h[d].r)}function c(){if(e){var h,d=e.length,u;for(n=new Array(d),h=0;h<d;++h)u=e[h],n[u.index]=+i(u,h,e)}}return o.initialize=function(h,...d){e=h,r=d.find(u=>typeof u=="function")||Math.random,t=d.find(u=>[1,2,3].includes(u))||2,c()},o.iterations=function(h){return arguments.length?(a=+h,o):a},o.strength=function(h){return arguments.length?(s=+h,o):s},o.radius=function(h){return arguments.length?(i=typeof h=="function"?h:qi(+h),c(),o):i},o}function mh(i){var e=qi(.1),t,n,r;typeof i!="function"&&(i=qi(i==null?0:+i));function s(o){for(var l=0,c=t.length,h;l<c;++l)h=t[l],h.vz+=(r[l]-h.z)*n[l]*o}function a(){if(t){var o,l=t.length;for(n=new Array(l),r=new Array(l),o=0;o<l;++o)n[o]=isNaN(r[o]=+i(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:qi(+o),a(),s):e},s.z=function(o){return arguments.length?(i=typeof o=="function"?o:qi(+o),a(),s):i},s}const zo="185",Ki={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,yl=1,_h=2,Es=1,xh=2,Ar=3,li=0,Qt=1,Wn=2,$n=0,Zi=1,Ml=2,Sl=3,El=4,vh=5,gi=100,yh=101,Mh=102,Sh=103,Eh=104,bh=200,wh=201,Th=202,Ah=203,Wa=204,Xa=205,Rh=206,Ch=207,Ph=208,Dh=209,Lh=210,Ih=211,Nh=212,Uh=213,Fh=214,$a=0,qa=1,Ya=2,er=3,Ka=4,Za=5,Ja=6,Qa=7,ou=0,Oh=1,Bh=2,Ln=0,lu=1,cu=2,uu=3,hu=4,du=5,fu=6,pu=7,mu=300,Mi=301,tr=302,Js=303,Qs=304,zs=306,ja=1e3,Xn=1001,eo=1002,zt=1003,Gh=1004,$r=1005,Wt=1006,js=1007,xi=1008,dn=1009,gu=1010,_u=1011,Dr=1012,ko=1013,Nn=1014,Sn=1015,Kn=1016,Vo=1017,Ho=1018,Lr=1020,xu=35902,vu=35899,yu=1021,Mu=1022,En=1023,Zn=1026,vi=1027,Wo=1028,Xo=1029,Si=1030,$o=1031,qo=1033,bs=33776,ws=33777,Ts=33778,As=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,lo=37488,co=37489,Ps=37490,uo=37491,ho=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,yo=37816,Mo=37817,So=37818,Eo=37819,bo=37820,wo=37821,To=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,Ds=36285,Do=36286,zh=3200,bl=0,kh=1,ai="",an="srgb",Ls="srgb-linear",Is="linear",pt="srgb",Pi=7680,wl=519,Vh=512,Hh=513,Wh=514,Yo=515,Xh=516,$h=517,Ko=518,qh=519,Tl=35044,Al=35048,Rl="300 es",Dn=2e3,Ns=2001;function Yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){const i=Us("canvas");return i.style.display="block",i}const Cl={};function Pl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Su(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Su(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Su(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){const e=i.join(" ");e in Cl||(Cl[e]=!0,Ge(...i))}function Zh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Jh={[$a]:qa,[Ya]:Ja,[Ka]:Qa,[er]:Za,[qa]:$a,[Ja]:Ya,[Qa]:Ka,[Za]:er};class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Cr=Math.PI/180,Ir=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Zo(i,e){return(i%e+e)%e}function Qh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function jh(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function ed(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function td(i,e=1){return e-Math.abs(Zo(i,e*2)-e)}function nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sd(i,e){return i+Math.random()*(e-i)}function ad(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Dl=i);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ld(i){return i*Cr}function cd(i){return i*Ir}function ud(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fd(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Cn={DEG2RAD:Cr,RAD2DEG:Ir,generateUUID:rr,clamp:tt,euclideanModulo:Zo,mapLinear:Qh,inverseLerp:jh,lerp:Pr,damp:ed,pingpong:td,smoothstep:nd,smootherstep:id,randInt:rd,randFloat:sd,randFloatSpread:ad,seededRandom:od,degToRad:ld,radToDeg:cd,isPowerOfTwo:ud,ceilPowerOfTwo:hd,floorPowerOfTwo:dd,setQuaternionFromProperEuler:fd,normalize:Yt,denormalize:$i},hl=class hl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hl.prototype.isVector2=!0;let Xe=hl;class Jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],v=s[a+2],T=s[a+3];if(d!==T||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*T;g<0&&(u=-u,p=-p,v=-v,T=-T,g=-g);let f=1-o;if(g<.9995){const A=Math.acos(g),E=Math.sin(A);f=Math.sin(f*A)/E,o=Math.sin(o*A)/E,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+T*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+T*o;const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+h*d+l*p-c*u,e[t+1]=l*v+h*u+c*d-o*p,e[t+2]=c*v+h*p+o*u-l*d,e[t+3]=h*v-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dl=class dl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;let N=dl;const ea=new N,Ll=new Jn,fl=class fl{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],v=n[8],T=r[0],g=r[3],f=r[6],A=r[1],E=r[4],_=r[7],M=r[2],y=r[5],w=r[8];return s[0]=a*T+o*A+l*M,s[3]=a*g+o*E+l*y,s[6]=a*f+o*_+l*w,s[1]=c*T+h*A+d*M,s[4]=c*g+h*E+d*y,s[7]=c*f+h*_+d*w,s[2]=u*T+p*A+v*M,s[5]=u*g+p*E+v*y,s[8]=u*f+p*_+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,v=t*d+n*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/v;return e[0]=d*T,e[1]=(r*c-h*n)*T,e[2]=(o*n-r*a)*T,e[3]=u*T,e[4]=(h*t-r*l)*T,e[5]=(r*s-o*t)*T,e[6]=p*T,e[7]=(n*l-c*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;let Ke=fl;const ta=new Ke,Il=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:e,whitePoint:n,transfer:Is,toXYZ:Il,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Il,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}const it=pd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class md{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Us("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gd=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let _d=0;const ia=new N;class Zt extends ci{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Xn,r=Xn,s=Wt,a=xi,o=En,l=dn,c=Zt.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=rr(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=mu;Zt.DEFAULT_ANISOTROPY=1;const pl=class pl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],T=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-T)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+T)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(p+1)/2,M=(f+1)/2,y=(h+u)/4,w=(d+T)/4,m=(v+g)/4;return E>_&&E>M?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=y/n,s=w/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=y/r,s=m/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=w/s,r=m/s),this.set(n,r,s,t),this}let A=Math.sqrt((g-v)*(g-v)+(d-T)*(d-T)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(d-T)/A,this.z=(u-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;let Rt=pl;class xd extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Zt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends xd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gs=class Gs{constructor(e,t,n,r,s,a,o,l,c,h,d,u,p,v,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,p,v,T,g)}set(e,t,n,r,s,a,o,l,c,h,d,u,p,v,T,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=T,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,v=o*h,T=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=u-T*c,t[9]=-o*l,t[2]=T-u*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,v=c*h,T=c*d;t[0]=u+T*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=T+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,v=c*h,T=c*d;t[0]=u-T*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=T-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,v=o*h,T=o*d;t[0]=l*h,t[4]=v*c-p,t[8]=u*c+T,t[1]=l*d,t[5]=T*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,v=o*l,T=o*c;t[0]=l*h,t[4]=T-u*d,t[8]=v*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+v,t[10]=u-T*d}else if(e.order==="XZY"){const u=a*l,p=a*c,v=o*l,T=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+T,t[5]=a*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*h,t[10]=T*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,Md)}lookAt(e,t,n){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),jn.crossVectors(n,nn),jn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),jn.crossVectors(n,nn)),jn.normalize(),qr.crossVectors(nn,jn),r[0]=jn.x,r[4]=qr.x,r[8]=nn.x,r[1]=jn.y,r[5]=qr.y,r[9]=nn.y,r[2]=jn.z,r[6]=qr.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],v=n[2],T=n[6],g=n[10],f=n[14],A=n[3],E=n[7],_=n[11],M=n[15],y=r[0],w=r[4],m=r[8],b=r[12],C=r[1],P=r[5],D=r[9],W=r[13],Y=r[2],B=r[6],X=r[10],G=r[14],q=r[3],ee=r[7],ne=r[11],ie=r[15];return s[0]=a*y+o*C+l*Y+c*q,s[4]=a*w+o*P+l*B+c*ee,s[8]=a*m+o*D+l*X+c*ne,s[12]=a*b+o*W+l*G+c*ie,s[1]=h*y+d*C+u*Y+p*q,s[5]=h*w+d*P+u*B+p*ee,s[9]=h*m+d*D+u*X+p*ne,s[13]=h*b+d*W+u*G+p*ie,s[2]=v*y+T*C+g*Y+f*q,s[6]=v*w+T*P+g*B+f*ee,s[10]=v*m+T*D+g*X+f*ne,s[14]=v*b+T*W+g*G+f*ie,s[3]=A*y+E*C+_*Y+M*q,s[7]=A*w+E*P+_*B+M*ee,s[11]=A*m+E*D+_*X+M*ne,s[15]=A*b+E*W+_*G+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],v=e[3],T=e[7],g=e[11],f=e[15],A=l*p-c*u,E=o*p-c*d,_=o*u-l*d,M=a*p-c*h,y=a*u-l*h,w=a*d-o*h;return t*(T*A-g*E+f*_)-n*(v*A-g*M+f*y)+r*(v*E-T*M+f*w)-s*(v*_-T*y+g*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],v=e[12],T=e[13],g=e[14],f=e[15],A=t*o-n*a,E=t*l-r*a,_=t*c-s*a,M=n*l-r*o,y=n*c-s*o,w=r*c-s*l,m=h*T-d*v,b=h*g-u*v,C=h*f-p*v,P=d*g-u*T,D=d*f-p*T,W=u*f-p*g,Y=A*W-E*D+_*P+M*C-y*b+w*m;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Y;return e[0]=(o*W-l*D+c*P)*B,e[1]=(r*D-n*W-s*P)*B,e[2]=(T*w-g*y+f*M)*B,e[3]=(u*y-d*w-p*M)*B,e[4]=(l*C-a*W-c*b)*B,e[5]=(t*W-r*C+s*b)*B,e[6]=(g*_-v*w-f*E)*B,e[7]=(h*w-u*_+p*E)*B,e[8]=(a*D-o*C+c*m)*B,e[9]=(n*C-t*D-s*m)*B,e[10]=(v*y-T*_+f*A)*B,e[11]=(d*_-h*y-p*A)*B,e[12]=(o*b-a*P-l*m)*B,e[13]=(t*P-n*b+r*m)*B,e[14]=(T*E-v*M-g*A)*B,e[15]=(h*M-d*E+u*A)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,v=s*d,T=a*h,g=a*d,f=o*d,A=l*c,E=l*h,_=l*d,M=n.x,y=n.y,w=n.z;return r[0]=(1-(T+f))*M,r[1]=(p+_)*M,r[2]=(v-E)*M,r[3]=0,r[4]=(p-_)*y,r[5]=(1-(u+f))*y,r[6]=(g+A)*y,r[7]=0,r[8]=(v+E)*w,r[9]=(g-A)*w,r[10]=(1-(u+T))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),l=Li.set(r[8],r[9],r[10]).length();s<0&&(a=-a),_n.copy(this);const c=1/a,h=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Dn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let v,T;if(l)v=s/(a-s),T=a*s/(a-s);else if(o===Dn)v=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===Ns)v=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Dn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,T;if(l)v=1/(a-s),T=a/(a-s);else if(o===Dn)v=-2/(a-s),T=-(a+s)/(a-s);else if(o===Ns)v=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gs.prototype.isMatrix4=!0;let _t=Gs;const Li=new N,_n=new _t,yd=new N(0,0,0),Md=new N(1,1,1),jn=new N,qr=new N,nn=new N,Ul=new _t,Fl=new Jn;class Ei{constructor(e=0,t=0,n=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const Ol=new N,Ii=new Jn,Bn=new _t,Yr=new N,fr=new N,Ed=new N,bd=new Jn,Bl=new N(1,0,0),Gl=new N(0,1,0),zl=new N(0,0,1),kl={type:"added"},wd={type:"removed"},Ni={type:"childadded",child:null},ra={type:"childremoved",child:null};class jt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new N,t=new Ei,n=new Jn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(fr,Yr,this.up):Bn.lookAt(Yr,fr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new N(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kr extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const T of e.hand.values()){const g=t.getJointPose(T,n),f=this._getHandJoint(c,T);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Zo(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return it.workingToColorSpace(Ht.copy(this),e),Math.round(tt(Ht.r*255,0,255))*65536+Math.round(tt(Ht.g*255,0,255))*256+Math.round(tt(Ht.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=an){it.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Zr);const n=Pr(ei.h,Zr.h,t),r=Pr(ei.s,Zr.s,t),s=Pr(ei.l,Zr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new at;at.NAMES=bu;class Ad extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new N,Gn=new N,oa=new N,zn=new N,Ui=new N,Fi=new N,Vl=new N,la=new N,ca=new N,ua=new N,ha=new Rt,da=new Rt,fa=new Rt;class Mn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),Gn.subVectors(n,t),oa.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Gn),l=xn.dot(oa),c=Gn.dot(Gn),h=Gn.dot(oa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,v=(a*h-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ha.setScalar(0),da.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(da,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Gn.subVectors(e,t),xn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ui.subVectors(r,n),Fi.subVectors(s,n),la.subVectors(e,n);const l=Ui.dot(la),c=Fi.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,r);const h=Ui.dot(ca),d=Fi.dot(ca);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ui,a);ua.subVectors(e,s);const p=Ui.dot(ua),v=Fi.dot(ua);if(v>=0&&p<=v)return t.copy(s);const T=p*c-l*v;if(T<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Fi,o);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return Vl.subVectors(s,r),o=(d-h)/(d-h+(p-v)),t.copy(r).addScaledVector(Vl,o);const f=1/(g+T+u);return a=T*f,o=u*f,t.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Qr.subVectors(this.max,pr),Oi.subVectors(e.a,pr),Bi.subVectors(e.b,pr),Gi.subVectors(e.c,pr),ti.subVectors(Bi,Oi),ni.subVectors(Gi,Bi),di.subVectors(Oi,Gi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-di.z,di.y,ti.z,0,-ti.x,ni.z,0,-ni.x,di.z,0,-di.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-di.y,di.x,0];return!pa(t,Oi,Bi,Gi,Qr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Oi,Bi,Gi,Qr))?!1:(jr.crossVectors(ti,ni),t=[jr.x,jr.y,jr.z],pa(t,Oi,Bi,Gi,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new N,new N,new N,new N,new N,new N,new N,new N],vn=new N,Jr=new ui,Oi=new N,Bi=new N,Gi=new N,ti=new N,ni=new N,di=new N,pr=new N,Qr=new N,jr=new N,fi=new N;function pa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fi.fromArray(i,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lt=new N,es=new Xe;let Rd=0;class bn extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wu extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Cd=new ui,mr=new N,ma=new N;class bi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ma)),this.expandByPoint(mr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Pd=0;const cn=new _t,ga=new jt,zi=new N,rn=new ui,gr=new ui,Ot=new N;class on extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Tu:wu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(rn.min,gr.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,gr.max),rn.expandByPoint(Ot)):(rn.expandByPoint(gr.min),rn.expandByPoint(gr.max))}rn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Ot.add(zi)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let m=0;m<n.count;m++)o[m]=new N,l[m]=new N;const c=new N,h=new N,d=new N,u=new Xe,p=new Xe,v=new Xe,T=new N,g=new N;function f(m,b,C){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,m),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,C),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(T.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),o[m].add(T),o[b].add(T),o[C].add(T),l[m].add(g),l[b].add(g),l[C].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let m=0,b=A.length;m<b;++m){const C=A[m],P=C.start,D=C.count;for(let W=P,Y=P+D;W<Y;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new N,_=new N,M=new N,y=new N;function w(m){M.fromBufferAttribute(r,m),y.copy(M);const b=o[m];E.copy(b),E.sub(M.multiplyScalar(M.dot(b))).normalize(),_.crossVectors(y,b);const P=_.dot(l[m])<0?-1:1;a.setXYZW(m,E.x,E.y,E.z,P)}for(let m=0,b=A.length;m<b;++m){const C=A[m],P=C.start,D=C.count;for(let W=P,Y=P+D;W<Y;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),T=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?p=l[T]*o.data.stride+o.offset:p=l[T]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new bn(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dd=0;class Fr extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Zi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new N,_a=new N,ts=new N,ii=new N,xa=new N,ns=new N,va=new N;class ks{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_a.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(_a);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=ii.dot(this.direction),l=-ii.dot(ts),c=ii.lengthSq(),h=Math.abs(1-a*a);let d,u,p,v;if(h>0)if(d=a*l-o,u=a*o-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const T=1/h;d*=T,u*=T,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_a).addScaledVector(ts,u),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,r,s){xa.subVectors(t,e),ns.subVectors(n,e),va.crossVectors(xa,ns);let a=this.direction.dot(va),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(ns.crossVectors(ii,ns));if(l<0)return null;const c=o*this.direction.dot(xa.cross(ii));if(c<0||l+c>a)return null;const h=-o*ii.dot(va);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fs extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hl=new _t,pi=new ks,is=new bi,Wl=new N,rs=new N,ss=new N,as=new N,ya=new N,os=new N,Xl=new N,ls=new N;class wn extends jt{constructor(e=new on,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ya.fromBufferAttribute(d,e),a?os.addScaledVector(ya,h):os.addScaledVector(ya.sub(t),h))}t.add(os)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(is.containsPoint(pi.origin)===!1&&(pi.intersectSphere(is,Wl)===null||pi.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,T=u.length;v<T;v++){const g=u[v],f=a[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=A,M=E;_<M;_+=3){const y=o.getX(_),w=o.getX(_+1),m=o.getX(_+2);r=cs(this,f,e,n,c,h,d,y,w,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),T=Math.min(o.count,p.start+p.count);for(let g=v,f=T;g<f;g+=3){const A=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);r=cs(this,a,e,n,c,h,d,A,E,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,T=u.length;v<T;v++){const g=u[v],f=a[g.materialIndex],A=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=A,M=E;_<M;_+=3){const y=_,w=_+1,m=_+2;r=cs(this,f,e,n,c,h,d,y,w,m),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let g=v,f=T;g<f;g+=3){const A=g,E=g+1,_=g+2;r=cs(this,a,e,n,c,h,d,A,E,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Ld(i,e,t,n,r,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===li,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,ss),i.getVertexPosition(c,as);const h=Ld(i,e,t,n,rs,ss,as,Xl);if(h){const d=new N;Mn.getBarycoord(Xl,rs,ss,as,d),r&&(h.uv=Mn.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};Mn.getNormal(rs,ss,as,u.normal),h.face=u,h.barycoord=d}return h}class Au extends Zt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=zt,h=zt,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends bn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new _t,ql=new _t,us=[],Yl=new ui,Id=new _t,_r=new wn,xr=new bi;class Kl extends wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Id)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Yl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),xr.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ki),ql.multiplyMatrices(n,ki),_r.matrixWorld=ql,_r.raycast(e,us);for(let a=0,o=us.length;a<o;a++){const l=us[a];l.instanceId=s,l.object=this,t.push(l)}us.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Au(new Float32Array(r*this.count),r,this.count,Wo,Sn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new N,Nd=new N,Ud=new Ke;class Hn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ma.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ma),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ud.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new bi,Fd=new Xe(.5,.5),hs=new N;class jo{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],v=s[8],T=s[9],g=s[10],f=s[11],A=s[12],E=s[13],_=s[14],M=s[15];if(r[0].setComponents(c-a,p-h,f-v,M-A).normalize(),r[1].setComponents(c+a,p+h,f+v,M+A).normalize(),r[2].setComponents(c+o,p+d,f+T,M+E).normalize(),r[3].setComponents(c-o,p-d,f-T,M-E).normalize(),n)r[4].setComponents(l,u,g,_).normalize(),r[5].setComponents(c-l,p-u,f-g,M-_).normalize();else if(r[4].setComponents(c-l,p-u,f-g,M-_).normalize(),t===Dn)r[5].setComponents(c+l,p+u,f+g,M+_).normalize();else if(t===Ns)r[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Fd.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lo extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Os=new N,Bs=new N,Zl=new _t,vr=new ks,ds=new bi,Sa=new N,Jl=new N;class Od extends jt{constructor(e=new on,t=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Os.fromBufferAttribute(t,r-1),Bs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Os.distanceTo(Bs);e.setAttribute("lineDistance",new Xt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),ds.radius+=s,e.ray.intersectsSphere(ds)===!1)return;Zl.copy(r).invert(),vr.copy(e.ray).applyMatrix4(Zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let T=p,g=v-1;T<g;T+=c){const f=h.getX(T),A=h.getX(T+1),E=fs(this,e,vr,l,f,A,T);E&&t.push(E)}if(this.isLineLoop){const T=h.getX(v-1),g=h.getX(p),f=fs(this,e,vr,l,T,g,v-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let T=p,g=v-1;T<g;T+=c){const f=fs(this,e,vr,l,T,T+1,T);f&&t.push(f)}if(this.isLineLoop){const T=fs(this,e,vr,l,v-1,p,v-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fs(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Os.fromBufferAttribute(o,r),Bs.fromBufferAttribute(o,s),t.distanceSqToSegment(Os,Bs,Sa,Jl)>n)return;Sa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Sa);if(!(c<e.near||c>e.far))return{distance:c,point:Jl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ql=new N,jl=new N;class ec extends Od{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ql.fromBufferAttribute(t,r),jl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ql.distanceTo(jl);e.setAttribute("lineDistance",new Xt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ru extends Zt{constructor(e=[],t=Mi,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nr extends Zt{constructor(e,t,n=Nn,r,s,a,o=zt,l=zt,c,h=Zn,d=1){if(h!==Zn&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bd extends nr{constructor(e,t=Nn,n=Mi,r,s,a=zt,o=zt,l,c=Zn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cu extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends on{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function v(T,g,f,A,E,_,M,y,w,m,b){const C=_/w,P=M/m,D=_/2,W=M/2,Y=y/2,B=w+1,X=m+1;let G=0,q=0;const ee=new N;for(let ne=0;ne<X;ne++){const ie=ne*P-W;for(let le=0;le<B;le++){const j=le*C-D;ee[T]=j*A,ee[g]=ie*E,ee[f]=Y,c.push(ee.x,ee.y,ee.z),ee[T]=0,ee[g]=0,ee[f]=y>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(le/w),d.push(1-ne/m),G+=1}}for(let ne=0;ne<m;ne++)for(let ie=0;ie<w;ie++){const le=u+ie+B*ne,j=u+ie+B*(ne+1),Le=u+(ie+1)+B*(ne+1),Ae=u+(ie+1)+B*ne;l.push(le,j,Ae),l.push(j,Le,Ae),q+=6}o.addGroup(p,q,b),p+=q,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class el extends on{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(s.slice(),3)),this.setAttribute("uv",new Xt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const E=new N,_=new N,M=new N;for(let y=0;y<t.length;y+=3)p(t[y+0],E),p(t[y+1],_),p(t[y+2],M),l(E,_,M,A)}function l(A,E,_,M){const y=M+1,w=[];for(let m=0;m<=y;m++){w[m]=[];const b=A.clone().lerp(_,m/y),C=E.clone().lerp(_,m/y),P=y-m;for(let D=0;D<=P;D++)D===0&&m===y?w[m][D]=b:w[m][D]=b.clone().lerp(C,D/P)}for(let m=0;m<y;m++)for(let b=0;b<2*(y-m)-1;b++){const C=Math.floor(b/2);b%2===0?(u(w[m][C+1]),u(w[m+1][C]),u(w[m][C])):(u(w[m][C+1]),u(w[m+1][C+1]),u(w[m+1][C]))}}function c(A){const E=new N;for(let _=0;_<s.length;_+=3)E.x=s[_+0],E.y=s[_+1],E.z=s[_+2],E.normalize().multiplyScalar(A),s[_+0]=E.x,s[_+1]=E.y,s[_+2]=E.z}function h(){const A=new N;for(let E=0;E<s.length;E+=3){A.x=s[E+0],A.y=s[E+1],A.z=s[E+2];const _=g(A)/2/Math.PI+.5,M=f(A)/Math.PI+.5;a.push(_,1-M)}v(),d()}function d(){for(let A=0;A<a.length;A+=6){const E=a[A+0],_=a[A+2],M=a[A+4],y=Math.max(E,_,M),w=Math.min(E,_,M);y>.9&&w<.1&&(E<.2&&(a[A+0]+=1),_<.2&&(a[A+2]+=1),M<.2&&(a[A+4]+=1))}}function u(A){s.push(A.x,A.y,A.z)}function p(A,E){const _=A*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function v(){const A=new N,E=new N,_=new N,M=new N,y=new Xe,w=new Xe,m=new Xe;for(let b=0,C=0;b<s.length;b+=9,C+=6){A.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),y.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),m.set(a[C+4],a[C+5]),M.copy(A).add(E).add(_).divideScalar(3);const P=g(M);T(y,C+0,A,P),T(w,C+2,E,P),T(m,C+4,_,P)}}function T(A,E,_,M){M<0&&A.x===1&&(a[E]=A.x-1),_.x===0&&_.z===0&&(a[E]=M/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function f(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.vertices,e.indices,e.radius,e.detail)}}class tl extends el{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tl(e.radius,e.detail)}}class Vs extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],v=[],T=[],g=[];for(let f=0;f<h;f++){const A=f*u-a;for(let E=0;E<c;E++){const _=E*d-s;v.push(_,-A,0),T.push(0,0,1),g.push(E/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const E=A+c*f,_=A+c*(f+1),M=A+1+c*(f+1),y=A+1+c*f;p.push(E,_,y),p.push(_,M,y)}this.setIndex(p),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}function ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(tc(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(tc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ir(i[t]);for(const r in n)e[r]=n[r]}return e}function tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const zd={clone:ir,merge:Kt};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hd extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wd extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ps=new N,ms=new Jn,An=new N;class Du extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ps,ms,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ps,ms,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,nc=new Xe,ic=new Xe;class hn extends Du{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lu extends Du{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=-90,Hi=1;class $d extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Vi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new hn(Vi,Hi,e,t);s.layers=this.layers,this.add(s);const a=new hn(Vi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new hn(Vi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new hn(Vi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new hn(Vi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class qd extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rc=new _t;class Yd{constructor(e,t,n=0,r=1/0){this.ray=new ks(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rc),this}intersectObject(e,t=!0,n=[]){return Io(e,this,n,t),n.sort(sc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Io(e[r],this,n,t);return n.sort(sc),n}}function sc(i,e){return i.distance-e.distance}function Io(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Io(s[a],e,t,!0)}}class No{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ml=class ml{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};ml.prototype.isMatrix2=!0;let ac=ml;class Kd extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ge("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oc(i,e,t,n){const r=Zd(n);switch(t){case yu:return i*e;case Wo:return i*e/r.components*r.byteLength;case Xo:return i*e/r.components*r.byteLength;case Si:return i*e*2/r.components*r.byteLength;case $o:return i*e*2/r.components*r.byteLength;case Mu:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case qo:return i*e*4/r.components*r.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case so:case ao:case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case Ps:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ds:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(i){switch(i){case dn:case gu:return{byteLength:1,components:1};case Dr:case _u:case Kn:return{byteLength:2,components:1};case Vo:case Ho:return{byteLength:2,components:4};case Nn:case ko:case Sn:return{byteLength:4,components:1};case xu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);function Iu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],T=d[p];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++u,d[u]=T)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const T=d[p];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
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
#endif`,Jf=`uniform sampler2D dfgLUT;
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
}`,Qf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Qd,alphahash_pars_fragment:jd,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:rf,aomap_fragment:sf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:hf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:xf,color_pars_fragment:vf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:bf,displacementmap_pars_vertex:wf,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Df,envmap_common_pars_fragment:Lf,envmap_pars_fragment:If,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:Gf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Wf,lights_toon_fragment:$f,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:jf,lights_fragment_end:ep,lightprobes_pars_fragment:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:sp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:up,metalnessmap_pars_fragment:hp,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:xp,normal_pars_fragment:vp,normal_pars_vertex:yp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Dp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:Gp,skinning_pars_vertex:zp,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Hp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:$p,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Kp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:jp,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:rm,depth_vert:sm,depth_frag:am,distance_vert:om,distance_frag:lm,equirect_vert:cm,equirect_frag:um,linedashed_vert:hm,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:xm,meshnormal_vert:vm,meshnormal_frag:ym,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:Em,meshphysical_frag:bm,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Dm,sprite_frag:Lm},Se={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Pn={basic:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new at(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kt([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kt([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kt([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Kt([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Kt([Se.lights,Se.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Pn.physical={uniforms:Kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const gs={r:0,b:0,g:0},Im=new _t,Nu=new Ke;Nu.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e,t,n,r,s){const a=new at(0);let o=r===!0?0:1,l,c,h=null,d=0,u=null;function p(A){let E=A.isScene===!0?A.background:null;if(E&&E.isTexture){const _=A.backgroundBlurriness>0;E=e.get(E,_)}return E}function v(A){let E=!1;const _=p(A);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(A,E){const _=p(E);_&&(_.isCubeTexture||_.mapping===zs)?(c===void 0&&(c=new wn(new Or(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ir(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nu),c.material.toneMapped=it.getTransfer(_.colorSpace)!==pt,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new wn(new Vs(2,2),new Un({name:"BackgroundMaterial",uniforms:ir(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,E){A.getRGB(gs,Pu(i)),t.buffers.color.setClear(gs.r,gs.g,gs.b,E,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(a,o)},render:v,addToRenderList:T,dispose:f}}function Um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(P,D,W,Y,B){let X=!1;const G=d(P,Y,W,D);s!==G&&(s=G,c(s.object)),X=p(P,Y,W,B),X&&v(P,Y,W,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(P,D,W,Y),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,D,W,Y){const B=Y.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const G=P.isInstancedMesh===!0?P.id:0;let q=X[G];q===void 0&&(q={},X[G]=q);let ee=q[W.id];ee===void 0&&(ee={},q[W.id]=ee);let ne=ee[B];return ne===void 0&&(ne=u(l()),ee[B]=ne),ne}function u(P){const D=[],W=[],Y=[];for(let B=0;B<t;B++)D[B]=0,W[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,D,W,Y){const B=s.attributes,X=D.attributes;let G=0;const q=W.getAttributes();for(const ee in q)if(q[ee].location>=0){const ie=B[ee];let le=X[ee];if(le===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;G++}return s.attributesNum!==G||s.index!==Y}function v(P,D,W,Y){const B={},X=D.attributes;let G=0;const q=W.getAttributes();for(const ee in q)if(q[ee].location>=0){let ie=X[ee];ie===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),B[ee]=le,G++}s.attributes=B,s.attributesNum=G,s.index=Y}function T(){const P=s.newAttributes;for(let D=0,W=P.length;D<W;D++)P[D]=0}function g(P){f(P,0)}function f(P,D){const W=s.newAttributes,Y=s.enabledAttributes,B=s.attributeDivisors;W[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),B[P]!==D&&(i.vertexAttribDivisor(P,D),B[P]=D)}function A(){const P=s.newAttributes,D=s.enabledAttributes;for(let W=0,Y=D.length;W<Y;W++)D[W]!==P[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function E(P,D,W,Y,B,X,G){G===!0?i.vertexAttribIPointer(P,D,W,B,X):i.vertexAttribPointer(P,D,W,Y,B,X)}function _(P,D,W,Y){T();const B=Y.attributes,X=W.getAttributes(),G=D.defaultAttributeValues;for(const q in X){const ee=X[q];if(ee.location>=0){let ne=B[q];if(ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ie=ne.normalized,le=ne.itemSize,j=e.get(ne);if(j===void 0)continue;const Le=j.buffer,Ae=j.type,$=j.bytesPerElement,ae=Ae===i.INT||Ae===i.UNSIGNED_INT||ne.gpuType===ko;if(ne.isInterleavedBufferAttribute){const se=ne.data,ve=se.stride,Ie=ne.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<ee.locationSize;be++)f(ee.location+be,se.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<ee.locationSize;be++)g(ee.location+be);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let be=0;be<ee.locationSize;be++)E(ee.location+be,le/ee.locationSize,Ae,ie,ve*$,(Ie+le/ee.locationSize*be)*$,ae)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)f(ee.location+se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<ee.locationSize;se++)g(ee.location+se);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let se=0;se<ee.locationSize;se++)E(ee.location+se,le/ee.locationSize,Ae,ie,le*$,le/ee.locationSize*se*$,ae)}}else if(G!==void 0){const ie=G[q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(ee.location,ie);break;case 3:i.vertexAttrib3fv(ee.location,ie);break;case 4:i.vertexAttrib4fv(ee.location,ie);break;default:i.vertexAttrib1fv(ee.location,ie)}}}}A()}function M(){b();for(const P in n){const D=n[P];for(const W in D){const Y=D[W];for(const B in Y){const X=Y[B];for(const G in X)h(X[G].object),delete X[G];delete Y[B]}}delete n[P]}}function y(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const W in D){const Y=D[W];for(const B in Y){const X=Y[B];for(const G in X)h(X[G].object),delete X[G];delete Y[B]}}delete n[P.id]}function w(P){for(const D in n){const W=n[D];for(const Y in W){const B=W[Y];if(B[P.id]===void 0)continue;const X=B[P.id];for(const G in X)h(X[G].object),delete X[G];delete B[P.id]}}}function m(P){for(const D in n){const W=n[D],Y=P.isInstancedMesh===!0?P.id:0,B=W[Y];if(B!==void 0){for(const X in B){const G=B[X];for(const q in G)h(G[q].object),delete G[q];delete B[X]}delete W[Y],Object.keys(W).length===0&&delete n[D]}}}function b(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfObject:m,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:g,disableUnusedAttributes:A}}function Fm(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Om(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==En&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const m=w===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!m)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:_,maxSamples:M,samples:y}}function Bm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,T=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const A=s?0:n,E=A*4;let _=f.clippingState||null;l.value=_,_=h(v,u,E,p);for(let M=0;M!==E;++M)_[M]=t[M];f.clippingState=_,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,v){const T=d!==null?d.length:0;let g=null;if(T!==0){if(g=l.value,v!==!0||g===null){const f=p+T*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,_=p;E!==T;++E,_+=4)a.copy(d[E]).applyMatrix4(A,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}const oi=4,lc=[.125,.215,.35,.446,.526,.582],_i=20,Gm=256,yr=new Lu,cc=new at;let Ea=null,ba=0,wa=0,Ta=!1;const zm=new N;class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=zm}=s;Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,ba,wa),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Kn,format:En,colorSpace:Ls,depthBuffer:!1},r=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=km(s)),this._blurMaterial=Hm(s,e,t),this._ggxMaterial=Vm(s,e,t)}return r}_compileMaterial(e){const t=new wn(new on,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,r,s){const l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(cc),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Or,new Fs({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let f=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,f=!0):(g.color.copy(cc),f=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const M=this._cubeSize;Wi(r,_*M,E>2?M:0,M,M),d.setRenderTarget(r),f&&d.render(T,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:v}=this,T=this._sizeLods[n],g=3*T*(n>v-oi?n-v+oi:0),f=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Wi(s,g,f,3*T,2*T),r.setRenderTarget(s),r.render(o,yr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Wi(e,g,f,3*T,2*T),r.setRenderTarget(e),r.render(o,yr)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_i-1),T=s/v,g=isFinite(s)?1+Math.floor(h*T):_i;g>_i&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_i}`);const f=[];let A=0;for(let w=0;w<_i;++w){const m=w/T,b=Math.exp(-m*m/2);f.push(b),w===0?A+=b:w<g&&(A+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/A;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=v,u.mipInt.value=E-n;const _=this._sizeLods[r],M=3*_*(r>E-oi?r-E+oi:0),y=4*(this._cubeSize-_);Wi(t,M,y,3*_,2*_),l.setRenderTarget(t),l.render(d,yr)}}function km(i){const e=[],t=[],n=[];let r=i;const s=i-oi+1+lc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-oi?l=lc[a-i+oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,T=3,g=2,f=1,A=new Float32Array(T*v*p),E=new Float32Array(g*v*p),_=new Float32Array(f*v*p);for(let y=0;y<p;y++){const w=y%3*2/3-1,m=y>2?0:-1,b=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];A.set(b,T*v*y),E.set(u,g*v*y);const C=[y,y,y,y,y,y];_.set(C,f*v*y)}const M=new on;M.setAttribute("position",new bn(A,T)),M.setAttribute("uv",new bn(E,g)),M.setAttribute("faceIndex",new bn(_,f)),n.push(new wn(M,null)),r>oi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function hc(i,e,t){const n=new In(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vm(i,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Hm(i,e,t){const n=new Float32Array(_i),r=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function dc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function fc(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Hs(){return`

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
	`}class Uu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ru(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:$n});s.uniforms.tEquirect.value=t;const a=new wn(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Wt),new $d(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Wm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Js||p===Qs)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const T=new Uu(v.height);return T.fromEquirectangularTexture(i,u),e.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,v=p===Js||p===Qs,T=p===Mi||p===tr;if(v||T){let g=t.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new uc(i)),g=v?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const A=u.image;return v&&A&&A.height>0||T&&A&&l(A)?(n===null&&(n=new uc(i)),g=v?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Js?u.mapping=Mi:p===Qs&&(u.mapping=tr),u}function l(u){let p=0;const v=6;for(let T=0;T<v;T++)u[T]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ji("WebGLRenderer: "+n+" extension not supported."),r}}}function $m(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let T=0;if(v===void 0)return;if(p!==null){const A=p.array;T=p.version;for(let E=0,_=A.length;E<_;E+=3){const M=A[E+0],y=A[E+1],w=A[E+2];u.push(M,y,y,w,w,M)}}else{const A=v.array;T=v.version;for(let E=0,_=A.length/3-1;E<_;E+=3){const M=E+0,y=E+1,w=E+2;u.push(M,y,y,w,w,M)}}const g=new(v.count>=65535?Tu:wu)(u,1);g.version=T;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function qm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,s,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,p);let T=0;for(let g=0;g<p;g++)T+=u[g];t.update(T,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Km(i,e,t){const n=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),v===!0&&(E=2),T===!0&&(E=3);let _=o.attributes.position.count*E,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const y=new Float32Array(_*M*4*d),w=new Eu(y,_,M,d);w.type=Sn,w.needsUpdate=!0;const m=E*4;for(let C=0;C<d;C++){const P=g[C],D=f[C],W=A[C],Y=_*M*4*C;for(let B=0;B<P.count;B++){const X=B*m;p===!0&&(r.fromBufferAttribute(P,B),y[Y+X+0]=r.x,y[Y+X+1]=r.y,y[Y+X+2]=r.z,y[Y+X+3]=0),v===!0&&(r.fromBufferAttribute(D,B),y[Y+X+4]=r.x,y[Y+X+5]=r.y,y[Y+X+6]=r.z,y[Y+X+7]=0),T===!0&&(r.fromBufferAttribute(W,B),y[Y+X+8]=r.x,y[Y+X+9]=r.y,y[Y+X+10]=r.z,y[Y+X+11]=W.itemSize===4?r.w:1)}}u={count:d,texture:w,size:new Xe(_,M)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let T=0;T<c.length;T++)p+=c[T];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Zm(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Jm={[lu]:"LINEAR_TONE_MAPPING",[cu]:"REINHARD_TONE_MAPPING",[uu]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function Qm(i,e,t,n,r,s){const a=new In(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new nr(e,t):void 0}),o=new In(e,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new on;l.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const c=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new wn(l,c),d=new Lu(-1,1,1,-1,0,1);let u=null,p=null,v=!1,T,g=null,f=[],A=!1;this.setSize=function(E,_){a.setSize(E,_),o.setSize(E,_);for(let M=0;M<f.length;M++){const y=f[M];y.setSize&&y.setSize(E,_)}},this.setEffects=function(E){f=E,A=f.length>0&&f[0].isRenderPass===!0;const _=a.width,M=a.height;for(let y=0;y<f.length;y++){const w=f[y];w.setSize&&w.setSize(_,M)}},this.begin=function(E,_){if(v||E.toneMapping===Ln&&f.length===0)return!1;if(g=_,_!==null){const M=_.width,y=_.height;(a.width!==M||a.height!==y)&&this.setSize(M,y)}return A===!1&&E.setRenderTarget(a),T=E.toneMapping,E.toneMapping=Ln,!0},this.hasRenderPass=function(){return A},this.end=function(E,_){E.toneMapping=T,v=!0;let M=a,y=o;for(let w=0;w<f.length;w++){const m=f[w];if(m.enabled!==!1&&(m.render(E,y,M,_),m.needsSwap!==!1)){const b=M;M=y,y=b}}if(u!==E.outputColorSpace||p!==E.toneMapping){u=E.outputColorSpace,p=E.toneMapping,c.defines={},it.getTransfer(u)===pt&&(c.defines.SRGB_TRANSFER="");const w=Jm[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(g),E.render(h,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Fu=new Zt,Uo=new nr(1,1),Ou=new Eu,Bu=new vd,Gu=new Ru,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),xc=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=pc[r];if(s===void 0&&(s=new Float32Array(r),pc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Ft(t,n)}}function rg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Ft(t,n)}}function sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Ft(t,n)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?Ko:Yo,s=Uo):s=Fu,t.setTexture2D(e||s,r)}function mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bu,r)}function gg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gu,r)}function _g(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ou,r)}function xg(i){switch(i){case 5126:return jm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return hg;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(i,e){i.uniform1fv(this.addr,e)}function yg(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Mg(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Sg(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Eg(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bg(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wg(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tg(i,e){i.uniform1iv(this.addr,e)}function Ag(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Dg(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Ig(i,e){i.uniform4uiv(this.addr,e)}function Ng(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uo:a=Fu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ug(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bu,s[a])}function Fg(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gu,s[a])}function Og(i,e,t){const n=this.cache,r=e.length,s=Ws(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ou,s[a])}function Bg(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Dg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function vc(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){const n=i.name,r=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),a=Aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vc(t,c===void 0?new Gg(o,i,e):new zg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new kg(o),vc(t,d)),t=d}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hg=37297;let Wg=0;function Xg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Mc=new Ke;function $g(i){it._getMatrix(Mc,it.workingColorSpace,i);const e=`mat3( ${Mc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Is:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xg(i.getShaderSource(e),o)}else return s}function qg(i,e){const t=$g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yg={[lu]:"Linear",[cu]:"Reinhard",[uu]:"Cineon",[hu]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function Kg(i,e){const t=Yg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new N;function Zg(){it.getLuminanceCoefficients(_s);const i=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Qg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Rr(i){return i!==""}function Ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(e_,n_)}const t_=new Map;function n_(i,e){let t=Qe[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=Qe[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fo(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(i_,r_)}function r_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const s_={[Es]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function a_(i){return s_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o_={[Mi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function l_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const c_={[tr]:"ENVMAP_MODE_REFRACTION"};function u_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h_={[ou]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function d_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h_[i.combine]||"ENVMAP_BLENDING_NONE"}function f_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=a_(t),c=l_(t),h=u_(t),d=d_(t),u=f_(t),p=Jg(t),v=Qg(s),T=r.createProgram();let g,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(g=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Fo(a),a=Ec(a,t),a=bc(a,t),o=Fo(o),o=Ec(o,t),o=bc(o,t),a=wc(a),o=wc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=A+g+a,_=A+f+o,M=yc(r,r.VERTEX_SHADER,E),y=yc(r,r.FRAGMENT_SHADER,_);r.attachShader(T,M),r.attachShader(T,y),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(T)||"",W=r.getShaderInfoLog(M)||"",Y=r.getShaderInfoLog(y)||"",B=D.trim(),X=W.trim(),G=Y.trim();let q=!0,ee=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,M,y);else{const ne=Sc(r,M,"vertex"),ie=Sc(r,y,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+ne+`
`+ie)}else B!==""?Ge("WebGLProgram: Program Info Log:",B):(X===""||G==="")&&(ee=!1);ee&&(P.diagnostics={runnable:q,programLog:B,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:f}})}r.deleteShader(M),r.deleteShader(y),m=new Rs(r,T),b=jg(r,T)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(T,Hg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=M,this.fragmentShader=y,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function x_(i){return i===Si||i===Ps||i===Ds}function v_(i,e,t,n,r,s){const a=new Qo,o=new g_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function T(m,b,C,P,D,W){const Y=P.fog,B=D.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?P.environment:null,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,q=e.get(m.envMap||X,G),ee=q&&q.mapping===zs?q.image.height:null,ne=p[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&Ge("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=ie!==void 0?ie.length:0;let j=0;B.morphAttributes.position!==void 0&&(j=1),B.morphAttributes.normal!==void 0&&(j=2),B.morphAttributes.color!==void 0&&(j=3);let Le,Ae,$,ae;if(ne){const pe=Pn[ne];Le=pe.vertexShader,Ae=pe.fragmentShader}else{Le=m.vertexShader,Ae=m.fragmentShader;const pe=o.getVertexShaderStage(m),Et=o.getFragmentShaderStage(m);o.update(m,pe,Et),$=pe.id,ae=Et.id}const se=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,rt=!!m.map,ke=!!m.matcap,$e=!!q,je=!!m.aoMap,Ve=!!m.lightMap,yt=!!m.bumpMap&&m.wireframe===!1,At=!!m.normalMap,et=!!m.displacementMap,lt=!!m.emissiveMap,ct=!!m.metalnessMap,He=!!m.roughnessMap,I=m.anisotropy>0,Ct=m.clearcoat>0,Oe=m.dispersion>0,R=m.iridescence>0,x=m.sheen>0,O=m.transmission>0,V=I&&!!m.anisotropyMap,K=Ct&&!!m.clearcoatMap,ce=Ct&&!!m.clearcoatNormalMap,fe=Ct&&!!m.clearcoatRoughnessMap,Z=R&&!!m.iridescenceMap,te=R&&!!m.iridescenceThicknessMap,me=x&&!!m.sheenColorMap,Re=x&&!!m.sheenRoughnessMap,ge=!!m.specularMap,he=!!m.specularColorMap,Ne=!!m.specularIntensityMap,Be=O&&!!m.transmissionMap,We=O&&!!m.thicknessMap,L=!!m.gradientMap,ue=!!m.alphaMap,J=m.alphaTest>0,_e=!!m.alphaHash,xe=!!m.extensions;let re=Ln;m.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(re=i.toneMapping);const Pe={shaderID:ne,shaderType:m.type,shaderName:m.name,vertexShader:Le,fragmentShader:Ae,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:rt,matcap:ke,envMap:$e,envMapMode:$e&&q.mapping,envMapCubeUVHeight:ee,aoMap:je,lightMap:Ve,bumpMap:yt,normalMap:At,displacementMap:et,emissiveMap:lt,normalMapObjectSpace:At&&m.normalMapType===kh,normalMapTangentSpace:At&&m.normalMapType===bl,packedNormalMap:At&&m.normalMapType===bl&&x_(m.normalMap.format),metalnessMap:ct,roughnessMap:He,anisotropy:I,anisotropyMap:V,clearcoat:Ct,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,dispersion:Oe,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:x,sheenColorMap:me,sheenRoughnessMap:Re,specularMap:ge,specularColorMap:he,specularIntensityMap:Ne,transmission:O,transmissionMap:Be,thicknessMap:We,gradientMap:L,opaque:m.transparent===!1&&m.blending===Zi&&m.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:_e,combine:m.combine,mapUv:rt&&v(m.map.channel),aoMapUv:je&&v(m.aoMap.channel),lightMapUv:Ve&&v(m.lightMap.channel),bumpMapUv:yt&&v(m.bumpMap.channel),normalMapUv:At&&v(m.normalMap.channel),displacementMapUv:et&&v(m.displacementMap.channel),emissiveMapUv:lt&&v(m.emissiveMap.channel),metalnessMapUv:ct&&v(m.metalnessMap.channel),roughnessMapUv:He&&v(m.roughnessMap.channel),anisotropyMapUv:V&&v(m.anisotropyMap.channel),clearcoatMapUv:K&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(m.sheenRoughnessMap.channel),specularMapUv:ge&&v(m.specularMap.channel),specularColorMapUv:he&&v(m.specularColorMap.channel),specularIntensityMapUv:Ne&&v(m.specularIntensityMap.channel),transmissionMapUv:Be&&v(m.transmissionMap.channel),thicknessMapUv:We&&v(m.thicknessMap.channel),alphaMapUv:ue&&v(m.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(At||I),vertexNormals:!!B.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(rt||ue),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||B.attributes.normal===void 0&&At===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:j,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:rt&&m.map.isVideoTexture===!0&&it.getTransfer(m.map.colorSpace)===pt,decodeVideoTextureEmissive:lt&&m.emissiveMap.isVideoTexture===!0&&it.getTransfer(m.emissiveMap.colorSpace)===pt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Wn,flipSided:m.side===Qt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:xe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&m.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(m){const b=[];if(m.shaderID?b.push(m.shaderID):(b.push(m.customVertexShaderID),b.push(m.customFragmentShaderID)),m.defines!==void 0)for(const C in m.defines)b.push(C),b.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(f(b,m),A(b,m),b.push(i.outputColorSpace)),b.push(m.customProgramCacheKey),b.join()}function f(m,b){m.push(b.precision),m.push(b.outputColorSpace),m.push(b.envMapMode),m.push(b.envMapCubeUVHeight),m.push(b.mapUv),m.push(b.alphaMapUv),m.push(b.lightMapUv),m.push(b.aoMapUv),m.push(b.bumpMapUv),m.push(b.normalMapUv),m.push(b.displacementMapUv),m.push(b.emissiveMapUv),m.push(b.metalnessMapUv),m.push(b.roughnessMapUv),m.push(b.anisotropyMapUv),m.push(b.clearcoatMapUv),m.push(b.clearcoatNormalMapUv),m.push(b.clearcoatRoughnessMapUv),m.push(b.iridescenceMapUv),m.push(b.iridescenceThicknessMapUv),m.push(b.sheenColorMapUv),m.push(b.sheenRoughnessMapUv),m.push(b.specularMapUv),m.push(b.specularColorMapUv),m.push(b.specularIntensityMapUv),m.push(b.transmissionMapUv),m.push(b.thicknessMapUv),m.push(b.combine),m.push(b.fogExp2),m.push(b.sizeAttenuation),m.push(b.morphTargetsCount),m.push(b.morphAttributeCount),m.push(b.numDirLights),m.push(b.numPointLights),m.push(b.numSpotLights),m.push(b.numSpotLightMaps),m.push(b.numHemiLights),m.push(b.numRectAreaLights),m.push(b.numDirLightShadows),m.push(b.numPointLightShadows),m.push(b.numSpotLightShadows),m.push(b.numSpotLightShadowsWithMaps),m.push(b.numLightProbes),m.push(b.shadowMapType),m.push(b.toneMapping),m.push(b.numClippingPlanes),m.push(b.numClipIntersection),m.push(b.depthPacking)}function A(m,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function E(m){const b=p[m.type];let C;if(b){const P=Pn[b];C=zd.clone(P.uniforms)}else C=m.uniforms;return C}function _(m,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new p_(i,b,m,r),c.push(C),h.set(b,C)),C}function M(m){if(--m.usedTimes===0){const b=c.indexOf(m);c[b]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function y(m){o.remove(m)}function w(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:M,releaseShaderCache:y,programs:c,dispose:w}}function y_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function M_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ac(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,T,g,f){let A=i[e];return A===void 0?(A={id:u.id,object:u,geometry:p,material:v,materialVariant:a(u),groupOrder:T,renderOrder:u.renderOrder,z:g,group:f},i[e]=A):(A.id=u.id,A.object=u,A.geometry=p,A.material=v,A.materialVariant=a(u),A.groupOrder=T,A.renderOrder=u.renderOrder,A.z=g,A.group=f),e++,A}function l(u,p,v,T,g,f){const A=o(u,p,v,T,g,f);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function c(u,p,v,T,g,f){const A=o(u,p,v,T,g,f);v.transmission>0?n.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function h(u,p,v){t.length>1&&t.sort(u||M_),n.length>1&&n.sort(p||Ac),r.length>1&&r.sort(p||Ac),v&&(t.reverse(),n.reverse(),r.reverse())}function d(){for(let u=e,p=i.length;u<p;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function S_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Rc,i.set(n,[a])):r>=s.length?(a=new Rc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new at};break;case"SpotLight":t={position:new N,direction:new N,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function b_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let w_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){const e=new E_,t=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new _t,a=new _t;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,v=0,T=0,g=0,f=0,A=0,E=0,_=0,M=0,y=0,w=0;c.sort(T_);for(let b=0,C=c.length;b<C;b++){const P=c[b],D=P.color,W=P.intensity,Y=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*W,d+=D.g*W,u+=D.b*W;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],W);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(D).multiplyScalar(W),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[T]=X;const G=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,G.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[T]=G.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[T]=q,n.spotShadowMap[T]=B,_++}T++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(D).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const G=P.shadow,q=t.get(P);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=P.shadow.matrix,E++}n.point[v]=X,v++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(W),X.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[f]=X,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const m=n.hash;(m.directionalLength!==p||m.pointLength!==v||m.spotLength!==T||m.rectAreaLength!==g||m.hemiLength!==f||m.numDirectionalShadows!==A||m.numPointShadows!==E||m.numSpotShadows!==_||m.numSpotMaps!==M||m.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=T,n.rectArea.length=g,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+M-y,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,m.directionalLength=p,m.pointLength=v,m.spotLength=T,m.rectAreaLength=g,m.hemiLength=f,m.numDirectionalShadows=A,m.numPointShadows=E,m.numSpotShadows=_,m.numSpotMaps=M,m.numLightProbes=w,n.version=w_++)}function l(c,h){let d=0,u=0,p=0,v=0,T=0;const g=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const E=c[f];if(E.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(E.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const _=n.hemi[T];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:n}}function Cc(i){const e=new A_(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function R_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cc(i),e.set(r,[o])):s>=a.length?(o=new Cc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`,D_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],L_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Pc=new _t,Mr=new N,Ra=new N;function I_(i,e,t){let n=new jo;const r=new Xe,s=new Xe,a=new Rt,o=new Wd,l=new Xd,c={},h=t.maxTextureSize,d={[li]:Qt,[Qt]:li,[Wn]:Wn},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new on;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let f=this.type;this.render=function(y,w,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===xh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending($n),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const W=f!==this.type;W&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=y.length;Y<B;Y++){const X=y[Y],G=X.shadow;if(G===void 0){Ge("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const q=G.getFrameExtents();r.multiply(q),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,G.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ee,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ar){if(X.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new In(r.x,r.y,{format:Si,type:Kn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new nr(r.x,r.y,Sn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Zn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else X.isPointLight?(G.map=new Uu(r.x),G.map.depthTexture=new Bd(r.x,Nn)):(G.map=new In(r.x,r.y),G.map.depthTexture=new nr(r.x,r.y,Nn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Zn,this.type===Es?(G.map.depthTexture.compareFunction=ee?Ko:Yo,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}const ne=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ne;ie++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(G.map),i.clear());const le=G.getViewport(ie);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),D.viewport(a)}if(X.isPointLight){const le=G.camera,j=G.matrix,Le=X.distance||le.far;Le!==le.far&&(le.far=Le,le.updateProjectionMatrix()),Mr.setFromMatrixPosition(X.matrixWorld),le.position.copy(Mr),Ra.copy(le.position),Ra.add(D_[ie]),le.up.copy(L_[ie]),le.lookAt(Ra),le.updateMatrixWorld(),j.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Pc.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pc,le.coordinateSystem,le.reversedDepth)}else G.updateMatrices(X);n=G.getFrustum(),_(w,m,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ar&&A(G,m),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,P)};function A(y,w){const m=e.update(T);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new In(r.x,r.y,{format:Si,type:Kn})),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,m,u,T,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,m,p,T,null)}function E(y,w,m,b){let C=null;const P=m.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)C=P;else if(C=m.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=C.uuid,W=w.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let B=Y[W];B===void 0&&(B=C.clone(),Y[W]=B,w.addEventListener("dispose",M)),C=B}if(C.visible=w.visible,C.wireframe=w.wireframe,b===Ar?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,m.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=m}return C}function _(y,w,m,b,C){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Ar)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,y.matrixWorld);const W=e.update(y),Y=y.material;if(Array.isArray(Y)){const B=W.groups;for(let X=0,G=B.length;X<G;X++){const q=B[X],ee=Y[q.materialIndex];if(ee&&ee.visible){const ne=E(y,ee,b,C);y.onBeforeShadow(i,y,w,m,W,ne,q),i.renderBufferDirect(m,null,W,ne,y,q),y.onAfterShadow(i,y,w,m,W,ne,q)}}}else if(Y.visible){const B=E(y,Y,b,C);y.onBeforeShadow(i,y,w,m,W,B,null),i.renderBufferDirect(m,null,W,B,y,null),y.onAfterShadow(i,y,w,m,W,B,null)}}const D=y.children;for(let W=0,Y=D.length;W<Y;W++)_(D[W],w,m,b,C)}function M(y){y.target.removeEventListener("dispose",M);for(const m in c){const b=c[m],C=y.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function N_(i,e){function t(){let L=!1;const ue=new Rt;let J=null;const _e=new Rt(0,0,0,0);return{setMask:function(xe){J!==xe&&!L&&(i.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){L=xe},setClear:function(xe,re,Pe,pe,Et){Et===!0&&(xe*=pe,re*=pe,Pe*=pe),ue.set(xe,re,Pe,pe),_e.equals(ue)===!1&&(i.clearColor(xe,re,Pe,pe),_e.copy(ue))},reset:function(){L=!1,J=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,J=null,_e=null,xe=null;return{setReversed:function(re){if(ue!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=re;const pe=xe;xe=null,this.setClear(pe)}},getReversed:function(){return ue},setTest:function(re){re?se(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){J!==re&&!L&&(i.depthMask(re),J=re)},setFunc:function(re){if(ue&&(re=Jh[re]),_e!==re){switch(re){case $a:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=re}},setLocked:function(re){L=re},setClear:function(re){xe!==re&&(xe=re,ue&&(re=1-re),i.clearDepth(re))},reset:function(){L=!1,J=null,_e=null,xe=null,ue=!1}}}function r(){let L=!1,ue=null,J=null,_e=null,xe=null,re=null,Pe=null,pe=null,Et=null;return{setTest:function(mt){L||(mt?se(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!L&&(i.stencilMask(mt),ue=mt)},setFunc:function(mt,bt,en){(J!==mt||_e!==bt||xe!==en)&&(i.stencilFunc(mt,bt,en),J=mt,_e=bt,xe=en)},setOp:function(mt,bt,en){(re!==mt||Pe!==bt||pe!==en)&&(i.stencilOp(mt,bt,en),re=mt,Pe=bt,pe=en)},setLocked:function(mt){L=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){L=!1,ue=null,J=null,_e=null,xe=null,re=null,Pe=null,pe=null,Et=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],T=null,g=!1,f=null,A=null,E=null,_=null,M=null,y=null,w=null,m=new at(0,0,0),b=0,C=!1,P=null,D=null,W=null,Y=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),G=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),G=q>=2);let ne=null,ie={};const le=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Le=new Rt().fromArray(le),Ae=new Rt().fromArray(j);function $(L,ue,J,_e){const xe=new Uint8Array(4),re=i.createTexture();i.bindTexture(L,re),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<J;Pe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ue+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return re}const ae={};ae[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(er),yt(!1),At(yl),se(i.CULL_FACE),je($n);function se(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ve(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ie(L,ue){return u[L]!==ue?(i.bindFramebuffer(L,ue),u[L]=ue,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(L,ue){let J=v,_e=!1;if(L){J=p.get(ue),J===void 0&&(J=[],p.set(ue,J));const xe=L.textures;if(J.length!==xe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Pe=xe.length;re<Pe;re++)J[re]=i.COLOR_ATTACHMENT0+re;J.length=xe.length,_e=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,_e=!0);_e&&i.drawBuffers(J)}function rt(L){return T!==L?(i.useProgram(L),T=L,!0):!1}const ke={[gi]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};ke[Sh]=i.MIN,ke[Eh]=i.MAX;const $e={[bh]:i.ZERO,[wh]:i.ONE,[Th]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function je(L,ue,J,_e,xe,re,Pe,pe,Et,mt){if(L===$n){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),L!==vh){if(L!==f||mt!==C){if((A!==gi||M!==gi)&&(i.blendEquation(i.FUNC_ADD),A=gi,M=gi),mt)switch(L){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case El:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}E=null,_=null,y=null,w=null,m.set(0,0,0),b=0,f=L,C=mt}return}xe=xe||ue,re=re||J,Pe=Pe||_e,(ue!==A||xe!==M)&&(i.blendEquationSeparate(ke[ue],ke[xe]),A=ue,M=xe),(J!==E||_e!==_||re!==y||Pe!==w)&&(i.blendFuncSeparate($e[J],$e[_e],$e[re],$e[Pe]),E=J,_=_e,y=re,w=Pe),(pe.equals(m)===!1||Et!==b)&&(i.blendColor(pe.r,pe.g,pe.b,Et),m.copy(pe),b=Et),f=L,C=!1}function Ve(L,ue){L.side===Wn?ve(i.CULL_FACE):se(i.CULL_FACE);let J=L.side===Qt;ue&&(J=!J),yt(J),L.blending===Zi&&L.transparent===!1?je($n):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function At(L){L!==gh?(se(i.CULL_FACE),L!==D&&(L===yl?i.cullFace(i.BACK):L===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),D=L}function et(L){L!==W&&(G&&i.lineWidth(L),W=L)}function lt(L,ue,J){L?(se(i.POLYGON_OFFSET_FILL),(Y!==ue||B!==J)&&(Y=ue,B=J,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,J))):ve(i.POLYGON_OFFSET_FILL)}function ct(L){L?se(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function He(L){L===void 0&&(L=i.TEXTURE0+X-1),ne!==L&&(i.activeTexture(L),ne=L)}function I(L,ue,J){J===void 0&&(ne===null?J=i.TEXTURE0+X-1:J=ne);let _e=ie[J];_e===void 0&&(_e={type:void 0,texture:void 0},ie[J]=_e),(_e.type!==L||_e.texture!==ue)&&(ne!==J&&(i.activeTexture(J),ne=J),i.bindTexture(L,ue||ae[L]),_e.type=L,_e.texture=ue)}function Ct(){const L=ie[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ce(){try{i.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function fe(){try{i.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Z(){try{i.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function me(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Re(L,ue){d[L]!==ue&&(i.pixelStorei(L,ue),d[L]=ue)}function ge(L){Le.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Le.copy(L))}function he(L){Ae.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function Ne(L,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let _e=J.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(ue,L.name),J.set(L,_e))}function Be(L,ue){const _e=c.get(ue).get(L);l.get(ue)!==_e&&(i.uniformBlockBinding(ue,_e,L.__bindingPointIndex),l.set(ue,_e))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ie={},u={},p=new WeakMap,v=[],T=null,g=!1,f=null,A=null,E=null,_=null,M=null,y=null,w=null,m=new at(0,0,0),b=0,C=!1,P=null,D=null,W=null,Y=null,B=null,Le.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:ve,bindFramebuffer:Ie,drawBuffers:be,useProgram:rt,setBlending:je,setMaterial:Ve,setFlipSided:yt,setCullFace:At,setLineWidth:et,setPolygonOffset:lt,setScissorTest:ct,activeTexture:He,bindTexture:I,unbindTexture:Ct,compressedTexImage2D:Oe,compressedTexImage3D:R,texImage2D:Z,texImage3D:te,pixelStorei:Re,getParameter:me,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:fe,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ge,viewport:he,reset:We}}function U_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,x){return v?new OffscreenCanvas(R,x):Us("canvas")}function g(R,x,O){let V=1;const K=Oe(R);if((K.width>O||K.height>O)&&(V=O/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(V*K.width),fe=Math.floor(V*K.height);u===void 0&&(u=T(ce,fe));const Z=x?T(ce,fe):u;return Z.width=ce,Z.height=fe,Z.getContext("2d").drawImage(R,0,0,ce,fe),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+fe+")."),Z}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function A(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,x,O,V,K,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;V&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),O===i.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),O===i.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),O===i.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const te=ce?Is:it.getTransfer(K);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=te===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),O===i.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(R,x){let O;return R?x===null||x===Nn||x===Lr?O=i.DEPTH24_STENCIL8:x===Sn?O=i.DEPTH32F_STENCIL8:x===Dr&&(O=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===Lr?O=i.DEPTH_COMPONENT24:x===Sn?O=i.DEPTH_COMPONENT32F:x===Dr&&(O=i.DEPTH_COMPONENT16),O}function y(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),b(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function m(R){const x=R.target;x.removeEventListener("dispose",m),P(x)}function b(R){const x=n.get(R);if(x.__webglInit===void 0)return;const O=R.source,V=p.get(O);if(V){const K=V[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(V).length===0&&p.delete(O)}n.remove(R)}function C(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const O=R.source,V=p.get(O);delete V[x.__cacheKey],a.memory.textures--}function P(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let K=0;K<x.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[V][K]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=R.textures;for(let V=0,K=O.length;V<K;V++){const ce=n.get(O[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(R)}let D=0;function W(){D=0}function Y(){return D}function B(R){D=R}function X(){const R=D;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function G(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function q(R,x){const O=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const V=R.image;if(V===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,R,x);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function ee(R,x){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ve(O,R,x);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function ne(R,x){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ve(O,R,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function ie(R,x){const O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Ie(O,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const le={[ja]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},j={[zt]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Le={[Vh]:i.NEVER,[qh]:i.ALWAYS,[Hh]:i.LESS,[Yo]:i.LEQUAL,[Wh]:i.EQUAL,[Ko]:i.GEQUAL,[Xh]:i.GREATER,[$h]:i.NOTEQUAL};function Ae(R,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===js||x.magFilter===$r||x.magFilter===xi||x.minFilter===Wt||x.minFilter===js||x.minFilter===$r||x.minFilter===xi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,j[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,j[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==$r&&x.minFilter!==xi||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $(R,x){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const V=x.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const ce=G(x);if(ce!==R.__cacheKey){K[ce]===void 0&&(K[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[ce].usedTimes++;const fe=K[R.__cacheKey];fe!==void 0&&(K[R.__cacheKey].usedTimes--,fe.usedTimes===0&&C(x)),R.__cacheKey=ce,R.__webglTexture=K[ce].texture}return O}function ae(R,x,O){return Math.floor(Math.floor(R/O)/x)}function se(R,x,O,V){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,V,x.data);else{ce.sort((Re,ge)=>Re.start-ge.start);let fe=0;for(let Re=1;Re<ce.length;Re++){const ge=ce[fe],he=ce[Re],Ne=ge.start+ge.count,Be=ae(he.start,x.width,4),We=ae(ge.start,x.width,4);he.start<=Ne+1&&Be===We&&ae(he.start+he.count-1,x.width,4)===Be?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++fe,ce[fe]=he)}ce.length=fe+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ge=ce.length;Re<ge;Re++){const he=ce[Re],Ne=Math.floor(he.start/4),Be=Math.ceil(he.count/4),We=Ne%x.width,L=Math.floor(Ne/x.width),ue=Be,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,We,L,ue,J,O,V,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ve(R,x,O){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);const K=$(R,x),ce=x.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+O);const fe=n.get(ce);if(ce.version!==fe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=it.getPrimaries(it.workingColorSpace),_e=x.colorSpace===ai?null:it.getPrimaries(x.colorSpace),xe=x.colorSpace===ai||J===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=g(x.image,!1,r.maxTextureSize);te=Ct(x,te);const me=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let ge=_(x.internalFormat,me,Re,x.normalized,x.colorSpace,x.isVideoTexture);Ae(V,x);let he;const Ne=x.mipmaps,Be=x.isVideoTexture!==!0,We=fe.__version===void 0||K===!0,L=ce.dataReady,ue=y(x,te);if(x.isDepthTexture)ge=M(x.format===vi,x.type),We&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,me,Re,null));else if(x.isDataTexture)if(Ne.length>0){Be&&We&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Ne[0].width,Ne[0].height);for(let J=0,_e=Ne.length;J<_e;J++)he=Ne[J],Be?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,me,Re,he.data):t.texImage2D(i.TEXTURE_2D,J,ge,he.width,he.height,0,me,Re,he.data);x.generateMipmaps=!1}else Be?(We&&t.texStorage2D(i.TEXTURE_2D,ue,ge,te.width,te.height),L&&se(x,te,me,Re)):t.texImage2D(i.TEXTURE_2D,0,ge,te.width,te.height,0,me,Re,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ge,Ne[0].width,Ne[0].height,te.depth);for(let J=0,_e=Ne.length;J<_e;J++)if(he=Ne[J],x.format!==En)if(me!==null)if(Be){if(L)if(x.layerUpdates.size>0){const xe=oc(he.width,he.height,x.format,x.type);for(const re of x.layerUpdates){const Pe=he.data.subarray(re*xe/he.data.BYTES_PER_ELEMENT,(re+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,re,he.width,he.height,1,me,Pe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,te.depth,me,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ge,he.width,he.height,te.depth,0,he.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,te.depth,me,Re,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ge,he.width,he.height,te.depth,0,me,Re,he.data)}else{Be&&We&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Ne[0].width,Ne[0].height);for(let J=0,_e=Ne.length;J<_e;J++)he=Ne[J],x.format!==En?me!==null?Be?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ge,he.width,he.height,0,he.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,he.width,he.height,me,Re,he.data):t.texImage2D(i.TEXTURE_2D,J,ge,he.width,he.height,0,me,Re,he.data)}else if(x.isDataArrayTexture)if(Be){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ge,te.width,te.height,te.depth),L)if(x.layerUpdates.size>0){const J=oc(te.width,te.height,x.format,x.type);for(const _e of x.layerUpdates){const xe=te.data.subarray(_e*J/te.data.BYTES_PER_ELEMENT,(_e+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,te.width,te.height,1,me,Re,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Re,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,me,Re,te.data);else if(x.isData3DTexture)Be?(We&&t.texStorage3D(i.TEXTURE_3D,ue,ge,te.width,te.height,te.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Re,te.data)):t.texImage3D(i.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,me,Re,te.data);else if(x.isFramebufferTexture){if(We)if(Be)t.texStorage2D(i.TEXTURE_2D,ue,ge,te.width,te.height);else{let J=te.width,_e=te.height;for(let xe=0;xe<ue;xe++)t.texImage2D(i.TEXTURE_2D,xe,ge,J,_e,0,me,Re,null),J>>=1,_e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),te.parentNode!==J){J.appendChild(te),d.add(x),J.onpaint=_e=>{const xe=_e.changedElements;for(const re of d)xe.includes(re.image)&&(re.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const xe=i.RGBA,re=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,re,Pe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Be&&We){const J=Oe(Ne[0]);t.texStorage2D(i.TEXTURE_2D,ue,ge,J.width,J.height)}for(let J=0,_e=Ne.length;J<_e;J++)he=Ne[J],Be?L&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,me,Re,he):t.texImage2D(i.TEXTURE_2D,J,ge,me,Re,he);x.generateMipmaps=!1}else if(Be){if(We){const J=Oe(te);t.texStorage2D(i.TEXTURE_2D,ue,ge,J.width,J.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Re,te)}else t.texImage2D(i.TEXTURE_2D,0,ge,me,Re,te);f(x)&&A(V),fe.__version=ce.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ie(R,x,O){if(x.image.length!==6)return;const V=$(R,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const ce=n.get(K);if(K.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const fe=it.getPrimaries(it.workingColorSpace),Z=x.colorSpace===ai?null:it.getPrimaries(x.colorSpace),te=x.colorSpace===ai||fe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!me&&!Re?ge[re]=g(x.image[re],!0,r.maxCubemapSize):ge[re]=Re?x.image[re].image:x.image[re],ge[re]=Ct(x,ge[re]);const he=ge[0],Ne=s.convert(x.format,x.colorSpace),Be=s.convert(x.type),We=_(x.internalFormat,Ne,Be,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ue=ce.__version===void 0||V===!0,J=K.dataReady;let _e=y(x,he);Ae(i.TEXTURE_CUBE_MAP,x);let xe;if(me){L&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,We,he.width,he.height);for(let re=0;re<6;re++){xe=ge[re].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const pe=xe[Pe];x.format!==En?Ne!==null?L?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,We,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,pe.width,pe.height,Ne,Be,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,We,pe.width,pe.height,0,Ne,Be,pe.data)}}}else{if(xe=x.mipmaps,L&&ue){xe.length>0&&_e++;const re=Oe(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,We,re.width,re.height)}for(let re=0;re<6;re++)if(Re){L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Ne,Be,ge[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,ge[re].width,ge[re].height,0,Ne,Be,ge[re].data);for(let Pe=0;Pe<xe.length;Pe++){const Et=xe[Pe].image[re].image;L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Et.width,Et.height,Ne,Be,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,We,Et.width,Et.height,0,Ne,Be,Et.data)}}else{L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,Be,ge[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ne,Be,ge[re]);for(let Pe=0;Pe<xe.length;Pe++){const pe=xe[Pe];L?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Ne,Be,pe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,We,Ne,Be,pe.image[re])}}}f(x)&&A(i.TEXTURE_CUBE_MAP),ce.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function be(R,x,O,V,K,ce){const fe=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),te=_(O.internalFormat,fe,Z,O.normalized,O.colorSpace),me=n.get(x),Re=n.get(O);if(Re.__renderTarget=x,!me.__hasExternalTextures){const ge=Math.max(1,x.width>>ce),he=Math.max(1,x.height>>ce);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,te,ge,he,x.depth,0,fe,Z,null):t.texImage2D(K,ce,te,ge,he,0,fe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Re.__webglTexture,0,ct(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Re.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const V=x.depthTexture,K=V&&V.isDepthTexture?V.type:null,ce=M(x.stencilBuffer,K),fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),ce,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{const V=x.textures;for(let K=0;K<V.length;K++){const ce=V[K],fe=s.convert(ce.format,ce.colorSpace),Z=s.convert(ce.type),te=_(ce.internalFormat,fe,Z,ce.normalized,ce.colorSpace);He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),te,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(R,x,O){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,x.depthTexture);const me=s.convert(x.depthTexture.format),Re=s.convert(x.depthTexture.type);let ge;x.depthTexture.format===Zn?ge=i.DEPTH_COMPONENT24:x.depthTexture.format===vi&&(ge=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,x.width,x.height,0,me,Re,null)}}else q(x.depthTexture,0);const ce=K.__webglTexture,fe=ct(x),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,te=x.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,ce,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,ce,0);else if(x.depthTexture.format===vi)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,ce,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(R){const x=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=V}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)ke(x.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?ke(x.__webglFramebuffer[0],R,0):ke(x.__webglFramebuffer,R,0)}else if(O){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[V],R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,x,O){const V=n.get(R);x!==void 0&&be(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$e(R)}function Ve(R){const x=R.texture,O=n.get(R),V=n.get(x);R.addEventListener("dispose",m);const K=R.textures,ce=R.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,a.memory.textures++),ce){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let te=0;te<x.mipmaps.length;te++)O.__webglFramebuffer[Z][te]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Z=0,te=K.length;Z<te;Z++){const me=n.get(K[Z]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&He(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const te=K[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const me=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),ge=_(te.internalFormat,me,Re,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),he=ct(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)be(O.__webglFramebuffer[Z][te],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else be(O.__webglFramebuffer[Z],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Z=0,te=K.length;Z<te;Z++){const me=K[Z],Re=n.get(me);let ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Re.__webglTexture),Ae(ge,me),be(O.__webglFramebuffer,R,me,i.COLOR_ATTACHMENT0+Z,ge,0),f(me)&&A(ge)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,V.__webglTexture),Ae(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)be(O.__webglFramebuffer[te],R,x,i.COLOR_ATTACHMENT0,Z,te);else be(O.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,Z,0);f(x)&&A(Z),t.unbindTexture()}R.depthBuffer&&$e(R)}function yt(R){const x=R.textures;for(let O=0,V=x.length;O<V;O++){const K=x[O];if(f(K)){const ce=E(R),fe=n.get(K).__webglTexture;t.bindTexture(ce,fe),A(ce),t.unbindTexture()}}}const At=[],et=[];function lt(R){if(R.samples>0){if(He(R)===!1){const x=R.textures,O=R.width,V=R.height;let K=i.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),Z=x.length>1;if(Z)for(let me=0;me<x.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<x.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Re=n.get(x[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,K,i.NEAREST),l===!0&&(At.length=0,et.length=0,At.push(i.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(At.push(ce),et.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<x.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Re=n.get(x[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(R){return Math.min(r.maxSamples,R.samples)}function He(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ct(R,x){const O=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ls&&O!==ai&&(it.getTransfer(O)===pt?(V!==En||K!==dn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",O)),x}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=je,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function F_(i,e){function t(n,r=ai){let s;const a=it.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===En)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===bs||n===ws||n===Ts||n===As)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ao||n===oo||n===lo||n===co||n===Ps||n===uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===so||n===ao)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lo)return s.COMPRESSED_R11_EAC;if(n===co)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return s.COMPRESSED_RG11_EAC;if(n===uo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===Eo||n===bo||n===wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ho)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===To)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===Ds||n===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends ci{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const T=typeof XRWebGLBinding<"u",g=new G_,f={},A=t.getContextAttributes();let E=null,_=null;const M=[],y=[],w=new Xe;let m=null;const b=new hn;b.viewport=new Rt;const C=new hn;C.viewport=new Rt;const P=[b,C],D=new qd;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=M[$];return ae===void 0&&(ae=new sa,M[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=M[$];return ae===void 0&&(ae=new sa,M[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=M[$];return ae===void 0&&(ae=new sa,M[$]=ae),ae.getHandSpace()};function B($){const ae=y.indexOf($.inputSource);if(ae===-1)return;const se=M[ae];se!==void 0&&(se.update($.inputSource,$.frame,c||a),se.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let $=0;$<M.length;$++){const ae=y[$];ae!==null&&(y[$]=null,M[$].disconnect(ae))}W=null,Y=null,g.reset();for(const $ in f)delete f[$];e.setRenderTarget(E),p=null,u=null,d=null,r=null,_=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&T&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ve=null,Ie=null;A.depth&&(Ie=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=A.stencil?vi:Zn,ve=A.stencil?Lr:Nn);const be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new In(u.textureWidth,u.textureHeight,{format:En,type:dn,depthTexture:new nr(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new In(p.framebufferWidth,p.framebufferHeight,{format:En,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G($){for(let ae=0;ae<$.removed.length;ae++){const se=$.removed[ae],ve=y.indexOf(se);ve>=0&&(y[ve]=null,M[ve].disconnect(se))}for(let ae=0;ae<$.added.length;ae++){const se=$.added[ae];let ve=y.indexOf(se);if(ve===-1){for(let be=0;be<M.length;be++)if(be>=y.length){y.push(se),ve=be;break}else if(y[be]===null){y[be]=se,ve=be;break}if(ve===-1)break}const Ie=M[ve];Ie&&Ie.connect(se)}}const q=new N,ee=new N;function ne($,ae,se){q.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);const ve=q.distanceTo(ee),Ie=ae.projectionMatrix.elements,be=se.projectionMatrix.elements,rt=Ie[14]/(Ie[10]-1),ke=Ie[14]/(Ie[10]+1),$e=(Ie[9]+1)/Ie[5],je=(Ie[9]-1)/Ie[5],Ve=(Ie[8]-1)/Ie[0],yt=(be[8]+1)/be[0],At=rt*Ve,et=rt*yt,lt=ve/(-Ve+yt),ct=lt*-Ve;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const He=rt+lt,I=ke+lt,Ct=At-ct,Oe=et+(ve-ct),R=$e*ke/I*He,x=je*ke/I*He;$.projectionMatrix.makePerspective(Ct,Oe,R,x,He,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ae=$.near,se=$.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(se=g.depthFar)),D.near=C.near=b.near=ae,D.far=C.far=b.far=se,(W!==D.near||Y!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),W=D.near,Y=D.far),D.layers.mask=$.layers.mask|6,b.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;const ve=$.parent,Ie=D.cameras;ie(D,ve);for(let be=0;be<Ie.length;be++)ie(Ie[be],ve);Ie.length===2?ne(D,b,C):D.projectionMatrix.copy(b.projectionMatrix),le($,D,ve)};function le($,ae,se){se===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ir*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function($){return f[$]};let j=null;function Le($,ae){if(h=ae.getViewerPose(c||a),v=ae,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ve=!1;se.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let ke=0;ke<se.length;ke++){const $e=se[ke];let je=null;if(p!==null)je=p.getViewport($e);else{const yt=d.getViewSubImage(u,$e);je=yt.viewport,ke===0&&(e.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(_))}let Ve=P[ke];Ve===void 0&&(Ve=new hn,Ve.layers.enable(ke),Ve.viewport=new Rt,P[ke]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(je.x,je.y,je.width,je.height),ke===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(Ve)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){d=n.getBinding();const ke=d.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,r.renderState)}if(Ie&&Ie.includes("camera-access")&&T){e.state.unbindTexture(),d=n.getBinding();for(let ke=0;ke<se.length;ke++){const $e=se[ke].camera;if($e){let je=f[$e];je||(je=new Cu,f[$e]=je);const Ve=d.getCameraImage($e);je.sourceTexture=Ve}}}}for(let se=0;se<M.length;se++){const ve=y[se],Ie=M[se];ve!==null&&Ie!==void 0&&Ie.update(ve,ae,c||a)}j&&j($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Ae=new Iu;Ae.setAnimationLoop(Le),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}const k_=new _t,zu=new Ke;zu.set(-1,0,0,0,1,0,0,0,1);function V_(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Pu(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,A,E,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),T(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,A,E):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Qt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Qt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const A=e.get(f),E=A.envMap,_=A.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zu),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,A,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*A,g.scale.value=E*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,A){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function T(g,f){const A=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function H_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const y=M.program;n.uniformBlockBinding(_,y)}function c(_,M){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",A));const w=M.program;n.updateUBOMapping(_,w);const m=e.render.frame;s[_.id]!==m&&(u(_),s[_.id]=m)}function h(_){const M=d();_.__bindingPointIndex=M;const y=i.createBuffer(),w=_.__size,m=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=r[_.id],y=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let m=0,b=y.length;m<b;m++){const C=y[m];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)p(C[P],m,P,w);else p(C,m,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,y,w){if(T(_,M,y,w)===!0){const m=_.__offset,b=_.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){const D=b[P],W=f(D);v(D,_.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,_.__data)}}function v(_,M,y){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,y)}function T(_,M,y,w){const m=_.value,b=M+"_"+y;if(w[b]===void 0)return typeof m=="number"||typeof m=="boolean"?w[b]=m:ArrayBuffer.isView(m)?w[b]=m.slice():w[b]=m.clone(),!0;{const C=w[b];if(typeof m=="number"||typeof m=="boolean"){if(C!==m)return w[b]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(C.equals(m)===!1)return C.copy(m),!0}}return!1}function g(_){const M=_.uniforms;let y=0;const w=16;for(let b=0,C=M.length;b<C;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,W=P.length;D<W;D++){const Y=P[D],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,G=B.length;X<G;X++){const q=B[X],ee=f(q),ne=y%w,ie=ne%ee.boundary,le=ne+ie;y+=ie,le!==0&&w-le<ee.storage&&(y+=w-le),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=ee.storage}}}const m=y%w;return m>0&&(y+=w-m),_.__size=y,_.__cache={},this}function f(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",_),M}function A(_){const M=_.target;M.removeEventListener("dispose",A);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function E(){for(const _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:E}}const W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function X_(){return Rn===null&&(Rn=new Au(W_,16,16,Si,Kn),Rn.name="DFG_LUT",Rn.minFilter=Wt,Rn.magFilter=Wt,Rn.wrapS=Xn,Rn.wrapT=Xn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class $_{constructor(e={}){const{canvas:t=Kh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const T=p,g=new Set([qo,$o,Xo]),f=new Set([dn,Nn,Dr,Lr,Vo,Ho]),A=new Uint32Array(4),E=new Int32Array(4),_=new N;let M=null,y=null;const w=[],m=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,D=null,W=null,Y=null,B=null;this._outputColorSpace=an;let X=0,G=0,q=null,ee=-1,ne=null;const ie=new Rt,le=new Rt;let j=null;const Le=new at(0);let Ae=0,$=t.width,ae=t.height,se=1,ve=null,Ie=null;const be=new Rt(0,0,$,ae),rt=new Rt(0,0,$,ae);let ke=!1;const $e=new jo;let je=!1,Ve=!1;const yt=new _t,At=new N,et=new Rt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function He(){return q===null?se:1}let I=n;function Ct(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),I===null){const U="webgl2";if(I=Ct(U,S),I===null)throw Ct(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw st("WebGLRenderer: "+S.message),S}let Oe,R,x,O,V,K,ce,fe,Z,te,me,Re,ge,he,Ne,Be,We,L,ue,J,_e,xe,re;function Pe(){Oe=new Xm(I),Oe.init(),_e=new F_(I,Oe),R=new Om(I,Oe,e,_e),x=new N_(I,Oe),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=I.createFramebuffer(),Y=I.createFramebuffer(),B=I.createFramebuffer(),O=new Ym(I),V=new y_,K=new U_(I,Oe,x,V,R,_e,O),ce=new Wm(C),fe=new Jd(I),xe=new Um(I,fe),Z=new $m(I,fe,O,xe),te=new Zm(I,Z,fe,xe,O),L=new Km(I,R,K),Ne=new Bm(V),me=new v_(C,ce,Oe,R,xe,Ne),Re=new V_(C,V),ge=new S_,he=new R_(Oe),We=new Nm(C,ce,x,te,v,l),Be=new I_(C,te,R),re=new H_(I,O,R,x),ue=new Fm(I,Oe,O),J=new qm(I,Oe,O),O.programs=me.programs,C.capabilities=R,C.extensions=Oe,C.properties=V,C.renderLists=ge,C.shadowMap=Be,C.state=x,C.info=O}Pe(),T!==dn&&(b=new Qm(T,t.width,t.height,o,r,s));const pe=new z_(C,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(S){S!==void 0&&(se=S,this.setSize($,ae,!1))},this.getSize=function(S){return S.set($,ae)},this.setSize=function(S,U,H=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,ae=U,t.width=Math.floor(S*se),t.height=Math.floor(U*se),H===!0&&(t.style.width=S+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set($*se,ae*se).floor()},this.setDrawingBufferSize=function(S,U,H){$=S,ae=U,se=H,t.width=Math.floor(S*H),t.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(T===dn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,U,H,z){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,U,H,z),x.viewport(ie.copy(be).multiplyScalar(se).round())},this.getScissor=function(S){return S.copy(rt)},this.setScissor=function(S,U,H,z){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,U,H,z),x.scissor(le.copy(rt).multiplyScalar(se).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(S){x.setScissorTest(ke=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){Ie=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,H=!0){let z=0;if(S){let k=!1;if(q!==null){const Me=q.texture.format;k=g.has(Me)}if(k){const Me=q.texture.type,we=f.has(Me),ye=We.getClearColor(),De=We.getClearAlpha(),Ue=ye.r,qe=ye.g,Ze=ye.b;we?(A[0]=Ue,A[1]=qe,A[2]=Ze,A[3]=De,I.clearBufferuiv(I.COLOR,0,A)):(E[0]=Ue,E[1]=qe,E[2]=Ze,E[3]=De,I.clearBufferiv(I.COLOR,0,E))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),We.dispose(),ge.dispose(),he.dispose(),V.dispose(),ce.dispose(),te.dispose(),xe.dispose(),re.dispose(),me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",zr),pe.removeEventListener("sessionend",kr),tn.stop()};function Et(S){S.preventDefault(),Pl("WebGLRenderer: Context Lost."),P=!0}function mt(){Pl("WebGLRenderer: Context Restored."),P=!1;const S=O.autoReset,U=Be.enabled,H=Be.autoUpdate,z=Be.needsUpdate,k=Be.type;Pe(),O.autoReset=S,Be.enabled=U,Be.autoUpdate=H,Be.needsUpdate=z,Be.type=k}function bt(S){st("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function en(S){const U=S.target;U.removeEventListener("dispose",en),Br(U)}function Br(S){Gr(S),V.remove(S)}function Gr(S){const U=V.get(S).programs;U!==void 0&&(U.forEach(function(H){me.releaseProgram(H)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,z,k,Me){U===null&&(U=lt);const we=k.isMesh&&k.matrixWorld.determinantAffine()<0,ye=Wr(S,U,H,z,k);x.setMaterial(z,we);let De=H.index,Ue=1;if(z.wireframe===!0){if(De=Z.getWireframeAttribute(H),De===void 0)return;Ue=2}const qe=H.drawRange,Ze=H.attributes.position;let Fe=qe.start*Ue,ut=(qe.start+qe.count)*Ue;Me!==null&&(Fe=Math.max(Fe,Me.start*Ue),ut=Math.min(ut,(Me.start+Me.count)*Ue)),De!==null?(Fe=Math.max(Fe,0),ut=Math.min(ut,De.count)):Ze!=null&&(Fe=Math.max(Fe,0),ut=Math.min(ut,Ze.count));const vt=ut-Fe;if(vt<0||vt===1/0)return;xe.setup(k,z,ye,H,De);let wt,ht=ue;if(De!==null&&(wt=fe.get(De),ht=J,ht.setIndex(wt)),k.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*He()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(k.isLine){let Pt=z.linewidth;Pt===void 0&&(Pt=1),x.setLineWidth(Pt*He()),k.isLineSegments?ht.setMode(I.LINES):k.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else k.isPoints?ht.setMode(I.POINTS):k.isSprite&&ht.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,Te=k._multiDrawCounts,$t=k._multiDrawCount,nt=De?fe.get(De).bytesPerElement:1,qt=V.get(z).currentProgram.getUniforms();for(let ln=0;ln<$t;ln++)qt.setValue(I,"_gl_DrawID",ln),ht.render(Pt[ln]/nt,Te[ln])}else if(k.isInstancedMesh)ht.renderInstances(Fe,vt,k.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Pt);ht.renderInstances(Fe,vt,Te)}else ht.render(Fe,vt)};function wi(S,U,H){S.transparent===!0&&S.side===Wn&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,Ai(S,U,H),S.side=li,S.needsUpdate=!0,Ai(S,U,H),S.side=Wn):Ai(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),y=he.get(H),y.init(U),m.push(y),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),S!==H&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),y.setupLights();const z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Me=k.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const ye=Me[we];wi(ye,H,k),z.add(ye)}else wi(Me,H,k),z.add(Me)}),y=m.pop(),z},this.compileAsync=function(S,U,H=null){const z=this.compile(S,U,H);return new Promise(k=>{function Me(){if(z.forEach(function(we){V.get(we).currentProgram.isReady()&&z.delete(we)}),z.size===0){k(S);return}setTimeout(Me,10)}Oe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let cr=null;function $s(S){cr&&cr(S)}function zr(){tn.stop()}function kr(){tn.start()}const tn=new Iu;tn.setAnimationLoop($s),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(S){cr=S,pe.setAnimationLoop(S),S===null?tn.stop():tn.start()},pe.addEventListener("sessionstart",zr),pe.addEventListener("sessionend",kr),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(S,U);const H=pe.enabled===!0&&pe.isPresenting===!0,z=b!==null&&(q===null||H)&&b.begin(C,q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,q),y=he.get(S,m.length),y.init(U),y.state.textureUnits=K.getTextureUnits(),m.push(y),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(yt,Dn,U.reversedDepth),Ve=this.localClippingEnabled,je=Ne.init(this.clippingPlanes,Ve),M=ge.get(S,w.length),M.init(),w.push(M),pe.enabled===!0&&pe.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&ur(we,U,-1/0,C.sortObjects)}ur(S,U,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(ve,Ie,U.reversedDepth),ct=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ct&&We.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ne.beginShadows();const k=y.state.shadowsArray;if(Be.render(k,S,U),je===!0&&Ne.endShadows(),(z&&b.hasRenderPass())===!1){const we=M.opaque,ye=M.transmissive;if(y.setupLights(),U.isArrayCamera){const De=U.cameras;if(ye.length>0)for(let Ue=0,qe=De.length;Ue<qe;Ue++){const Ze=De[Ue];Vr(we,ye,S,Ze)}ct&&We.render(S);for(let Ue=0,qe=De.length;Ue<qe;Ue++){const Ze=De[Ue];hr(M,S,Ze,Ze.viewport)}}else ye.length>0&&Vr(we,ye,S,U),ct&&We.render(S),hr(M,S,U)}q!==null&&G===0&&(K.updateMultisampleRenderTarget(q),K.updateRenderTargetMipmap(q)),z&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),xe.resetDefaultState(),ee=-1,ne=null,m.pop(),m.length>0?(y=m[m.length-1],K.setTextureUnits(y.state.textureUnits),je===!0&&Ne.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function ur(S,U,H,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$e.intersectsSprite(S)){z&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);const we=te.update(S),ye=S.material;ye.visible&&M.push(S,we,ye,H,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$e.intersectsObject(S))){const we=te.update(S),ye=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),et.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),et.copy(we.boundingSphere.center)),et.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(ye)){const De=we.groups;for(let Ue=0,qe=De.length;Ue<qe;Ue++){const Ze=De[Ue],Fe=ye[Ze.materialIndex];Fe&&Fe.visible&&M.push(S,we,Fe,H,et.z,Ze)}}else ye.visible&&M.push(S,we,ye,H,et.z,null)}}const Me=S.children;for(let we=0,ye=Me.length;we<ye;we++)ur(Me[we],U,H,z)}function hr(S,U,H,z){const{opaque:k,transmissive:Me,transparent:we}=S;y.setupLightsView(H),je===!0&&Ne.setGlobalState(C.clippingPlanes,H),z&&x.viewport(ie.copy(z)),k.length>0&&Ti(k,U,H),Me.length>0&&Ti(Me,U,H),we.length>0&&Ti(we,U,H),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Vr(S,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){const Fe=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:Fe?Kn:dn,minFilter:xi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Me=y.state.transmissionRenderTarget[z.id],we=z.viewport||ie;Me.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),De=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(Le),Ae=C.getClearAlpha(),Ae<1&&C.setClearColor(16777215,.5),C.clear(),ct&&We.render(H);const qe=C.toneMapping;C.toneMapping=Ln;const Ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),je===!0&&Ne.setGlobalState(C.clippingPlanes,z),Ti(S,H,z),K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ut=0,vt=U.length;ut<vt;ut++){const wt=U[ut],{object:ht,geometry:Pt,material:Te,group:$t}=wt;if(Te.side===Wn&&ht.layers.test(z.layers)){const nt=Te.side;Te.side=Qt,Te.needsUpdate=!0,Hr(ht,H,z,Pt,Te,$t),Te.side=nt,Te.needsUpdate=!0,Fe=!0}}Fe===!0&&(K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me))}C.setRenderTarget(ye,De,Ue),C.setClearColor(Le,Ae),Ze!==void 0&&(z.viewport=Ze),C.toneMapping=qe}function Ti(S,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,Me=S.length;k<Me;k++){const we=S[k],{object:ye,geometry:De,group:Ue}=we;let qe=we.material;qe.allowOverride===!0&&z!==null&&(qe=z),ye.layers.test(H.layers)&&Hr(ye,U,H,De,qe,Ue)}}function Hr(S,U,H,z,k,Me){S.onBeforeRender(C,U,H,z,k,Me),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,U,H,z,S,Me),k.transparent===!0&&k.side===Wn&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,C.renderBufferDirect(H,U,z,k,S,Me),k.side=li,k.needsUpdate=!0,C.renderBufferDirect(H,U,z,k,S,Me),k.side=Wn):C.renderBufferDirect(H,U,z,k,S,Me),S.onAfterRender(C,U,H,z,k,Me)}function Ai(S,U,H){U.isScene!==!0&&(U=lt);const z=V.get(S),k=y.state.lights,Me=y.state.shadowsArray,we=k.state.version,ye=me.getParameters(S,k.state,Me,U,H,y.state.lightProbeGridArray),De=me.getProgramCacheKey(ye);let Ue=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=ce.get(S.envMap||z.environment,qe),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",en),Ue=new Map,z.programs=Ue);let Ze=Ue.get(De);if(Ze!==void 0){if(z.currentProgram===Ze&&z.lightsStateVersion===we)return Fn(S,ye),Ze}else ye.uniforms=me.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,H,ye),S.onBeforeCompile(ye,C),Ze=me.acquireProgram(ye,De),Ue.set(De,Ze),z.uniforms=ye.uniforms;const Fe=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Ne.uniform),Fn(S,ye),z.needsLights=hi(S),z.lightsStateVersion=we,z.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=y.state.lightProbeGridArray.length>0,z.currentProgram=Ze,z.uniformsList=null,Ze}function Ri(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Rs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Fn(S,U){const H=V.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function qs(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let H=0,z=S.length;H<z;H++){const k=S[H];if(k.texture!==null&&k.boundingBox.containsPoint(_))return k}return null}function Wr(S,U,H,z,k){U.isScene!==!0&&(U=lt),K.resetTextureUnits();const Me=U.fog,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ye=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:it.workingColorSpace,De=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ue=ce.get(z.envMap||we,De),qe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ze=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,vt=!!H.morphAttributes.color;let wt=Ln;z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(wt=C.toneMapping);const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=ht!==void 0?ht.length:0,Te=V.get(z),$t=y.state.lights;if(je===!0&&(Ve===!0||S!==ne)){const ft=S===ne&&z.id===ee;Ne.setState(z,S,ft)}let nt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==$t.state.version||Te.outputColorSpace!==ye||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==Ue||z.fog===!0&&Te.fog!==Me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ne.numPlanes||Te.numIntersection!==Ne.numIntersection)||Te.vertexAlphas!==qe||Te.vertexTangents!==Ze||Te.morphTargets!==Fe||Te.morphNormals!==ut||Te.morphColors!==vt||Te.toneMapping!==wt||Te.morphTargetsCount!==Pt||!!Te.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Te.__version=z.version);let qt=Te.currentProgram;nt===!0&&(qt=Ai(z,U,k),D&&z.isNodeMaterial&&D.onUpdateProgram(z,qt,Te));let ln=!1,pn=!1,Tn=!1;const dt=qt.getUniforms(),Tt=Te.uniforms;if(x.useProgram(qt.program)&&(ln=!0,pn=!0,Tn=!0),z.id!==ee&&(ee=z.id,pn=!0),Te.needsLights){const ft=qs(y.state.lightProbeGridArray,k);Te.lightProbeGrid!==ft&&(Te.lightProbeGrid=ft,pn=!0)}if(ln||ne!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",S.projectionMatrix),dt.setValue(I,"viewMatrix",S.matrixWorldInverse);const gn=dt.map.cameraPosition;gn!==void 0&&gn.setValue(I,At.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),ne!==S&&(ne=S,pn=!0,Tn=!0)}if(Te.needsLights&&($t.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",$t.state.directionalShadowMap,K),$t.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",$t.state.spotShadowMap,K),$t.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",$t.state.pointShadowMap,K)),k.isSkinnedMesh){dt.setOptional(I,k,"bindMatrix"),dt.setOptional(I,k,"bindMatrixInverse");const ft=k.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),dt.setValue(I,"boneTexture",ft.boneTexture,K))}k.isBatchedMesh&&(dt.setOptional(I,k,"batchingTexture"),dt.setValue(I,"batchingTexture",k._matricesTexture,K),dt.setOptional(I,k,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",k._indirectTexture,K),dt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",k._colorsTexture,K));const mn=H.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&L.update(k,H,qt),(pn||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,dt.setValue(I,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=X_()),pn){if(dt.setValue(I,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&Ys(Tt,Tn),Me&&z.fog===!0&&Re.refreshFogUniforms(Tt,Me),Re.refreshMaterialUniforms(Tt,z,se,ae,y.state.transmissionRenderTarget[S.id]),Te.needsLights&&Te.lightProbeGrid){const ft=Te.lightProbeGrid;Tt.probesSH.value=ft.texture,Tt.probesMin.value.copy(ft.boundingBox.min),Tt.probesMax.value.copy(ft.boundingBox.max),Tt.probesResolution.value.copy(ft.resolution)}Rs.upload(I,Ri(Te),Tt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rs.upload(I,Ri(Te),Tt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(I,"center",k.center),dt.setValue(I,"modelViewMatrix",k.modelViewMatrix),dt.setValue(I,"normalMatrix",k.normalMatrix),dt.setValue(I,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const ft=z.uniformsGroups;for(let gn=0,On=ft.length;gn<On;gn++){const dr=ft[gn];re.update(dr,qt),re.bind(dr,qt)}}return qt}function Ys(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function hi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(S,U,H){const z=V.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=U,V.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const H=V.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){q=S,X=U,G=H;let z=null,k=!1,Me=!1;if(S){const ye=V.get(S);if(ye.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,ye.__webglFramebuffer),ie.copy(S.viewport),le.copy(S.scissor),j=S.scissorTest,x.viewport(ie),x.scissor(le),x.setScissorTest(j),ee=-1;return}else if(ye.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(ye.__hasExternalTextures)K.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(ye.__boundDepthTexture!==qe){if(qe!==null&&V.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ue=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?z=Ue[U][H]:z=Ue[U],k=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?z=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[H]:z=Ue,ie.copy(S.viewport),le.copy(S.scissor),j=S.scissorTest}else ie.copy(be).multiplyScalar(se).floor(),le.copy(rt).multiplyScalar(se).floor(),j=ke;if(H!==0&&(z=W),x.bindFramebuffer(I.FRAMEBUFFER,z)&&x.drawBuffers(S,z),x.viewport(ie),x.scissor(le),x.setScissorTest(j),k){const ye=V.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,H)}else if(Me){const ye=U;for(let De=0;De<S.textures.length;De++){const Ue=V.get(S.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,Ue.__webglTexture,H,ye)}}else if(S!==null&&H!==0){const ye=V.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,H)}ee=-1},this.readRenderTargetPixels=function(S,U,H,z,k,Me,we,ye=0){if(!(S&&S.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){x.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ue=S.textures[ye],qe=Ue.format,Ze=Ue.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!R.textureFormatReadable(qe)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ze)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&H>=0&&H<=S.height-k&&I.readPixels(U,H,z,k,_e.convert(qe),_e.convert(Ze),Me)}finally{const Ue=q!==null?V.get(q).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,z,k,Me,we,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(U>=0&&U<=S.width-z&&H>=0&&H<=S.height-k){x.bindFramebuffer(I.FRAMEBUFFER,De);const Ue=S.textures[ye],qe=Ue.format,Ze=Ue.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!R.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),I.readPixels(U,H,z,k,_e.convert(qe),_e.convert(Ze),0);const ut=q!==null?V.get(q).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,ut);const vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zh(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.deleteBuffer(Fe),I.deleteSync(vt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,H=0){const z=Math.pow(2,-H),k=Math.floor(S.image.width*z),Me=Math.floor(S.image.height*z),we=U!==null?U.x:0,ye=U!==null?U.y:0;K.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,we,ye,k,Me),x.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,z=null,k=0,Me=0){let we,ye,De,Ue,qe,Ze,Fe,ut,vt;const wt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(H!==null)we=H.max.x-H.min.x,ye=H.max.y-H.min.y,De=H.isBox3?H.max.z-H.min.z:1,Ue=H.min.x,qe=H.min.y,Ze=H.isBox3?H.min.z:0;else{const Tt=Math.pow(2,-k);we=Math.floor(wt.width*Tt),ye=Math.floor(wt.height*Tt),S.isDataArrayTexture?De=wt.depth:S.isData3DTexture?De=Math.floor(wt.depth*Tt):De=1,Ue=0,qe=0,Ze=0}z!==null?(Fe=z.x,ut=z.y,vt=z.z):(Fe=0,ut=0,vt=0);const ht=_e.convert(U.format),Pt=_e.convert(U.type);let Te;U.isData3DTexture?(K.setTexture3D(U,0),Te=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),Te=I.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),Te=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=x.getParameter(I.UNPACK_ROW_LENGTH),nt=x.getParameter(I.UNPACK_IMAGE_HEIGHT),qt=x.getParameter(I.UNPACK_SKIP_PIXELS),ln=x.getParameter(I.UNPACK_SKIP_ROWS),pn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),x.pixelStorei(I.UNPACK_SKIP_ROWS,qe),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Tn=S.isDataArrayTexture||S.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Tt=V.get(S),mn=V.get(U),ft=V.get(Tt.__renderTarget),gn=V.get(mn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let On=0;On<De;On++)Tn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(S).__webglTexture,k,Ze+On),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(U).__webglTexture,Me,vt+On)),I.blitFramebuffer(Ue,qe,we,ye,Fe,ut,we,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||V.has(S)){const Tt=V.get(S),mn=V.get(U);x.bindFramebuffer(I.READ_FRAMEBUFFER,Y),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<De;ft++)Tn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,k,Ze+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,k),dt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,Me,vt+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,Me),k!==0?I.blitFramebuffer(Ue,qe,we,ye,Fe,ut,we,ye,I.COLOR_BUFFER_BIT,I.NEAREST):dt?I.copyTexSubImage3D(Te,Me,Fe,ut,vt+ft,Ue,qe,we,ye):I.copyTexSubImage2D(Te,Me,Fe,ut,Ue,qe,we,ye);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Te,Me,Fe,ut,vt,we,ye,De,ht,Pt,wt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,Me,Fe,ut,vt,we,ye,De,ht,wt.data):I.texSubImage3D(Te,Me,Fe,ut,vt,we,ye,De,ht,Pt,wt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,Fe,ut,we,ye,ht,Pt,wt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,Fe,ut,wt.width,wt.height,ht,wt.data):I.texSubImage2D(I.TEXTURE_2D,Me,Fe,ut,we,ye,ht,Pt,wt);x.pixelStorei(I.UNPACK_ROW_LENGTH,$t),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),x.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(I.UNPACK_SKIP_ROWS,ln),x.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),Me===0&&U.generateMipmaps&&I.generateMipmap(Te),x.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){X=0,G=0,q=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Dc={type:"change"},nl={type:"start"},ku={type:"end"},xs=new ks,Lc=new Hn,q_=Math.cos(70*Cn.DEG2RAD),It=new N,Jt=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class Y_ extends Kd{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Jn,this._lastTargetPosition=new N,this._quat=new Jn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new No,this._sphericalDelta=new No,this._scale=1,this._panOffset=new N,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new N,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=K_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=r0.bind(this),this._onMouseWheel=e0.bind(this),this._onKeyDown=t0.bind(this),this._onTouchStart=n0.bind(this),this._onTouchMove=i0.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=s0.bind(this),this._interceptControlUp=a0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),r<-Math.PI?r+=Jt:r>Math.PI&&(r-=Jt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xs.origin.copy(this.object.position),xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xs.direction))<q_?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),xs.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function K_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ku),this.state=gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Q_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=gt.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(nl)}function j_(i){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function e0(i){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(i.preventDefault(),this.dispatchEvent(nl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ku))}function t0(i){this.enabled!==!1&&this._handleKeyDown(i)}function n0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=gt.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=gt.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(nl)}function i0(i){switch(this._trackPointer(i),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=gt.NONE}}function r0(i){this.enabled!==!1&&i.preventDefault()}function s0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vs={exports:{}},Ic;function l0(){if(Ic)return vs.exports;Ic=1;var i=typeof Reflect=="object"?Reflect:null,e=i&&typeof i.apply=="function"?i.apply:function(M,y,w){return Function.prototype.apply.call(M,y,w)},t;i&&typeof i.ownKeys=="function"?t=i.ownKeys:Object.getOwnPropertySymbols?t=function(M){return Object.getOwnPropertyNames(M).concat(Object.getOwnPropertySymbols(M))}:t=function(M){return Object.getOwnPropertyNames(M)};function n(_){console&&console.warn&&console.warn(_)}var r=Number.isNaN||function(M){return M!==M};function s(){s.init.call(this)}vs.exports=s,vs.exports.once=f,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var a=10;function o(_){if(typeof _!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof _)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(_){if(typeof _!="number"||_<0||r(_))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+_+".");a=_}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(M){if(typeof M!="number"||M<0||r(M))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+M+".");return this._maxListeners=M,this};function l(_){return _._maxListeners===void 0?s.defaultMaxListeners:_._maxListeners}s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(M){for(var y=[],w=1;w<arguments.length;w++)y.push(arguments[w]);var m=M==="error",b=this._events;if(b!==void 0)m=m&&b.error===void 0;else if(!m)return!1;if(m){var C;if(y.length>0&&(C=y[0]),C instanceof Error)throw C;var P=new Error("Unhandled error."+(C?" ("+C.message+")":""));throw P.context=C,P}var D=b[M];if(D===void 0)return!1;if(typeof D=="function")e(D,this,y);else for(var W=D.length,Y=v(D,W),w=0;w<W;++w)e(Y[w],this,y);return!0};function c(_,M,y,w){var m,b,C;if(o(y),b=_._events,b===void 0?(b=_._events=Object.create(null),_._eventsCount=0):(b.newListener!==void 0&&(_.emit("newListener",M,y.listener?y.listener:y),b=_._events),C=b[M]),C===void 0)C=b[M]=y,++_._eventsCount;else if(typeof C=="function"?C=b[M]=w?[y,C]:[C,y]:w?C.unshift(y):C.push(y),m=l(_),m>0&&C.length>m&&!C.warned){C.warned=!0;var P=new Error("Possible EventEmitter memory leak detected. "+C.length+" "+String(M)+" listeners added. Use emitter.setMaxListeners() to increase limit");P.name="MaxListenersExceededWarning",P.emitter=_,P.type=M,P.count=C.length,n(P)}return _}s.prototype.addListener=function(M,y){return c(this,M,y,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(M,y){return c(this,M,y,!0)};function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(_,M,y){var w={fired:!1,wrapFn:void 0,target:_,type:M,listener:y},m=h.bind(w);return m.listener=y,w.wrapFn=m,m}s.prototype.once=function(M,y){return o(y),this.on(M,d(this,M,y)),this},s.prototype.prependOnceListener=function(M,y){return o(y),this.prependListener(M,d(this,M,y)),this},s.prototype.removeListener=function(M,y){var w,m,b,C,P;if(o(y),m=this._events,m===void 0)return this;if(w=m[M],w===void 0)return this;if(w===y||w.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete m[M],m.removeListener&&this.emit("removeListener",M,w.listener||y));else if(typeof w!="function"){for(b=-1,C=w.length-1;C>=0;C--)if(w[C]===y||w[C].listener===y){P=w[C].listener,b=C;break}if(b<0)return this;b===0?w.shift():T(w,b),w.length===1&&(m[M]=w[0]),m.removeListener!==void 0&&this.emit("removeListener",M,P||y)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(M){var y,w,m;if(w=this._events,w===void 0)return this;if(w.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):w[M]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete w[M]),this;if(arguments.length===0){var b=Object.keys(w),C;for(m=0;m<b.length;++m)C=b[m],C!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=w[M],typeof y=="function")this.removeListener(M,y);else if(y!==void 0)for(m=y.length-1;m>=0;m--)this.removeListener(M,y[m]);return this};function u(_,M,y){var w=_._events;if(w===void 0)return[];var m=w[M];return m===void 0?[]:typeof m=="function"?y?[m.listener||m]:[m]:y?g(m):v(m,m.length)}s.prototype.listeners=function(M){return u(this,M,!0)},s.prototype.rawListeners=function(M){return u(this,M,!1)},s.listenerCount=function(_,M){return typeof _.listenerCount=="function"?_.listenerCount(M):p.call(_,M)},s.prototype.listenerCount=p;function p(_){var M=this._events;if(M!==void 0){var y=M[_];if(typeof y=="function")return 1;if(y!==void 0)return y.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function v(_,M){for(var y=new Array(M),w=0;w<M;++w)y[w]=_[w];return y}function T(_,M){for(;M+1<_.length;M++)_[M]=_[M+1];_.pop()}function g(_){for(var M=new Array(_.length),y=0;y<M.length;++y)M[y]=_[y].listener||_[y];return M}function f(_,M){return new Promise(function(y,w){function m(C){_.removeListener(M,b),w(C)}function b(){typeof _.removeListener=="function"&&_.removeListener("error",m),y([].slice.call(arguments))}E(_,M,b,{once:!0}),M!=="error"&&A(_,m,{once:!0})})}function A(_,M,y){typeof _.on=="function"&&E(_,"error",M,y)}function E(_,M,y,w){if(typeof _.on=="function")w.once?_.once(M,y):_.on(M,y);else if(typeof _.addEventListener=="function")_.addEventListener(M,function m(b){w.once&&_.removeEventListener(M,m),y(b)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof _)}return vs.exports}var c0=l0();function u0(){const i=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])i[n]=arguments[e][n];return i}let Nt=u0;typeof Object.assign=="function"&&(Nt=Object.assign);function fn(i,e,t,n){const r=i._nodes.get(e);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[t]||r.undirected&&r.undirected[t]:n==="directed"?s=r.out&&r.out[t]:s=r.undirected&&r.undirected[t]),s}function Gt(i){return typeof i=="object"&&i!==null}function Vu(i){let e;for(e in i)return!1;return!0}function un(i,e,t){Object.defineProperty(i,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function yn(i,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(i,e,n)}function Nc(i){return!(!Gt(i)||i.attributes&&!Array.isArray(i.attributes))}function h0(){let i=Math.floor(Math.random()*256)&255;return()=>i++}function Yn(){const i=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=i.length)return{done:!0};e=i[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function ar(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class il extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Ee extends il{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ee.prototype.constructor)}}class de extends il{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,de.prototype.constructor)}}class ze extends il{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ze.prototype.constructor)}}function Hu(i,e){this.key=i,this.attributes=e,this.clear()}Hu.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function Wu(i,e){this.key=i,this.attributes=e,this.clear()}Wu.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function Xu(i,e){this.key=i,this.attributes=e,this.clear()}Xu.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function or(i,e,t,n,r){this.key=e,this.attributes=r,this.undirected=i,this.source=t,this.target=n}or.prototype.attach=function(){let i="out",e="in";this.undirected&&(i=e="undirected");const t=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};or.prototype.attachMulti=function(){let i="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(i=e="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[e][t]=this};or.prototype.detach=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][i]};or.prototype.detachMulti=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][i]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const $u=0,qu=1,d0=2,Yu=3;function Qn(i,e,t,n,r,s,a){let o,l,c,h;if(n=""+n,t===$u){if(o=i._nodes.get(n),!o)throw new de(`Graph.${e}: could not find the "${n}" node in the graph.`);c=r,h=s}else if(t===Yu){if(r=""+r,l=i._edges.get(r),!l)throw new de(`Graph.${e}: could not find the "${r}" edge in the graph.`);const d=l.source.key,u=l.target.key;if(n===d)o=l.target;else if(n===u)o=l.source;else throw new de(`Graph.${e}: the "${n}" node is not attached to the "${r}" edge (${d}, ${u}).`);c=s,h=a}else{if(l=i._edges.get(n),!l)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===qu?o=l.source:o=l.target,c=r,h=s}return[o,c,h]}function f0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);return a.attributes[o]}}function p0(i,e,t){i.prototype[e]=function(n,r){const[s]=Qn(this,e,t,n,r);return s.attributes}}function m0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);return a.attributes.hasOwnProperty(o)}}function g0(i,e,t){i.prototype[e]=function(n,r,s,a){const[o,l,c]=Qn(this,e,t,n,r,s,a);return o.attributes[l]=c,this.emit("nodeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:l}),this}}function _0(i,e,t){i.prototype[e]=function(n,r,s,a){const[o,l,c]=Qn(this,e,t,n,r,s,a);if(typeof c!="function")throw new Ee(`Graph.${e}: updater should be a function.`);const h=o.attributes,d=c(h[l]);return h[l]=d,this.emit("nodeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:l}),this}}function x0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);return delete a.attributes[o],this.emit("nodeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:o}),this}}function v0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);if(!Gt(o))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return a.attributes=o,this.emit("nodeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}function y0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);if(!Gt(o))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return Nt(a.attributes,o),this.emit("nodeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:o}),this}}function M0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=Qn(this,e,t,n,r,s);if(typeof o!="function")throw new Ee(`Graph.${e}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit("nodeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}const S0=[{name:i=>`get${i}Attribute`,attacher:f0},{name:i=>`get${i}Attributes`,attacher:p0},{name:i=>`has${i}Attribute`,attacher:m0},{name:i=>`set${i}Attribute`,attacher:g0},{name:i=>`update${i}Attribute`,attacher:_0},{name:i=>`remove${i}Attribute`,attacher:x0},{name:i=>`replace${i}Attributes`,attacher:v0},{name:i=>`merge${i}Attributes`,attacher:y0},{name:i=>`update${i}Attributes`,attacher:M0}];function E0(i){S0.forEach(function({name:e,attacher:t}){t(i,e("Node"),$u),t(i,e("Source"),qu),t(i,e("Target"),d0),t(i,e("Opposite"),Yu)})}function b0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function w0(i,e,t){i.prototype[e]=function(n){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,a=""+arguments[1];if(r=fn(this,s,a,t),!r)throw new de(`Graph.${e}: could not find an edge for the given path ("${s}" - "${a}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function T0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function A0(i,e,t){i.prototype[e]=function(n,r,s){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,l=""+r;if(r=arguments[2],s=arguments[3],a=fn(this,o,l,t),!a)throw new de(`Graph.${e}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:r}),this}}function R0(i,e,t){i.prototype[e]=function(n,r,s){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,l=""+r;if(r=arguments[2],s=arguments[3],a=fn(this,o,l,t),!a)throw new de(`Graph.${e}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new Ee(`Graph.${e}: updater should be a function.`);return a.attributes[r]=s(a.attributes[r]),this.emit("edgeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:r}),this}}function C0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function P0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!Gt(r))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function D0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!Gt(r))throw new Ee(`Graph.${e}: provided attributes are not a plain object.`);return Nt(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function L0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ze(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ze(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=fn(this,a,o,t),!s)throw new de(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new ze(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new de(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new Ee(`Graph.${e}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const I0=[{name:i=>`get${i}Attribute`,attacher:b0},{name:i=>`get${i}Attributes`,attacher:w0},{name:i=>`has${i}Attribute`,attacher:T0},{name:i=>`set${i}Attribute`,attacher:A0},{name:i=>`update${i}Attribute`,attacher:R0},{name:i=>`remove${i}Attribute`,attacher:C0},{name:i=>`replace${i}Attributes`,attacher:P0},{name:i=>`merge${i}Attributes`,attacher:D0},{name:i=>`update${i}Attributes`,attacher:L0}];function N0(i){I0.forEach(function({name:e,attacher:t}){t(i,e("Edge"),"mixed"),t(i,e("DirectedEdge"),"directed"),t(i,e("UndirectedEdge"),"undirected")})}const U0=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function F0(i,e,t,n){let r=!1;for(const s in e){if(s===n)continue;const a=e[s];if(r=t(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),i&&r)return a.key}}function O0(i,e,t,n){let r,s,a,o=!1;for(const l in e)if(l!==n){r=e[l];do{if(s=r.source,a=r.target,o=t(r.key,r.attributes,s.key,a.key,s.attributes,a.attributes,r.undirected),i&&o)return r.key;r=r.next}while(r!==void 0)}}function Pa(i,e){const t=Object.keys(i),n=t.length;let r,s=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const a=t[s++];if(a===e){r=void 0;continue}r=i[a]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function B0(i,e,t,n){const r=e[t];if(!r)return;const s=r.source,a=r.target;if(n(r.key,r.attributes,s.key,a.key,s.attributes,a.attributes,r.undirected)&&i)return r.key}function G0(i,e,t,n){let r=e[t];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function Da(i,e){let t=i[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const r={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:r}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function z0(i,e){if(i.size===0)return[];if(e==="mixed"||e===i.type)return Array.from(i._edges.keys());const t=e==="undirected"?i.undirectedSize:i.directedSize,n=new Array(t),r=e==="undirected",s=i._edges.values();let a=0,o,l;for(;o=s.next(),o.done!==!0;)l=o.value,l.undirected===r&&(n[a++]=l.key);return n}function Ku(i,e,t,n){if(e.size===0)return;const r=t!=="mixed"&&t!==e.type,s=t==="undirected";let a,o,l=!1;const c=e._edges.values();for(;a=c.next(),a.done!==!0;){if(o=a.value,r&&o.undirected!==s)continue;const{key:h,attributes:d,source:u,target:p}=o;if(l=n(h,d,u.key,p.key,u.attributes,p.attributes,o.undirected),i&&l)return h}}function k0(i,e){if(i.size===0)return ar();const t=e!=="mixed"&&e!==i.type,n=e==="undirected",r=i._edges.values();return{[Symbol.iterator](){return this},next(){let s,a;for(;;){if(s=r.next(),s.done)return s;if(a=s.value,!(t&&a.undirected!==n))break}return{value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected},done:!1}}}}function rl(i,e,t,n,r,s){const a=e?O0:F0;let o;if(t!=="undirected"&&(n!=="out"&&(o=a(i,r.in,s),i&&o)||n!=="in"&&(o=a(i,r.out,s,n?void 0:r.key),i&&o))||t!=="directed"&&(o=a(i,r.undirected,s),i&&o))return o}function V0(i,e,t,n){const r=[];return rl(!1,i,e,t,n,function(s){r.push(s)}),r}function H0(i,e,t){let n=ar();return i!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=Yn(n,Pa(t.in))),e!=="in"&&typeof t.out<"u"&&(n=Yn(n,Pa(t.out,e?void 0:t.key)))),i!=="directed"&&typeof t.undirected<"u"&&(n=Yn(n,Pa(t.undirected))),n}function sl(i,e,t,n,r,s,a){const o=t?G0:B0;let l;if(e!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(l=o(i,r.in,s,a),i&&l)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(l=o(i,r.out,s,a),i&&l))||e!=="directed"&&typeof r.undirected<"u"&&(l=o(i,r.undirected,s,a),i&&l))return l}function W0(i,e,t,n,r){const s=[];return sl(!1,i,e,t,n,r,function(a){s.push(a)}),s}function X0(i,e,t,n){let r=ar();return i!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(r=Yn(r,Da(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(r=Yn(r,Da(t.out,n)))),i!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(r=Yn(r,Da(t.undirected,n))),r}function $0(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return z0(this,n);if(arguments.length===1){s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new de(`Graph.${t}: could not find the "${s}" node in the graph.`);return V0(this.multi,n==="mixed"?this.type:n,r,o)}if(arguments.length===2){s=""+s,a=""+a;const o=this._nodes.get(s);if(!o)throw new de(`Graph.${t}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(a))throw new de(`Graph.${t}:  could not find the "${a}" target node in the graph.`);return W0(n,this.multi,r,o,a)}throw new Ee(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function q0(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,h,d){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return d=c,Ku(!1,this,n,d);if(arguments.length===2){c=""+c,d=h;const u=this._nodes.get(c);if(typeof u>"u")throw new de(`Graph.${s}: could not find the "${c}" node in the graph.`);return rl(!1,this.multi,n==="mixed"?this.type:n,r,u,d)}if(arguments.length===3){c=""+c,h=""+h;const u=this._nodes.get(c);if(!u)throw new de(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(h))throw new de(`Graph.${s}:  could not find the "${h}" target node in the graph.`);return sl(!1,n,this.multi,r,u,h,d)}throw new Ee(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const a="map"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),h=c.pop();let d;if(c.length===0){let u=0;n!=="directed"&&(u+=this.undirectedSize),n!=="undirected"&&(u+=this.directedSize),d=new Array(u);let p=0;c.push((v,T,g,f,A,E,_)=>{d[p++]=h(v,T,g,f,A,E,_)})}else d=[],c.push((u,p,v,T,g,f,A)=>{d.push(h(u,p,v,T,g,f,A))});return this[s].apply(this,c),d};const o="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),h=c.pop(),d=[];return c.push((u,p,v,T,g,f,A)=>{h(u,p,v,T,g,f,A)&&d.push(u)}),this[s].apply(this,c),d};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(){let c=Array.prototype.slice.call(arguments);if(c.length<2||c.length>4)throw new Ee(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${c.length}).`);if(typeof c[c.length-1]=="function"&&typeof c[c.length-2]!="function")throw new Ee(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let h,d;c.length===2?(h=c[0],d=c[1],c=[]):c.length===3?(h=c[1],d=c[2],c=[c[0]]):c.length===4&&(h=c[2],d=c[3],c=[c[0],c[1]]);let u=d;return c.push((p,v,T,g,f,A,E)=>{u=h(u,p,v,T,g,f,A,E)}),this[s].apply(this,c),u}}function Y0(i,e){const{name:t,type:n,direction:r}=e,s="find"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return h=l,Ku(!0,this,n,h);if(arguments.length===2){l=""+l,h=c;const d=this._nodes.get(l);if(typeof d>"u")throw new de(`Graph.${s}: could not find the "${l}" node in the graph.`);return rl(!0,this.multi,n==="mixed"?this.type:n,r,d,h)}if(arguments.length===3){l=""+l,c=""+c;const d=this._nodes.get(l);if(!d)throw new de(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new de(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return sl(!0,n,this.multi,r,d,c,h)}throw new Ee(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const a="some"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,u,p,v,T,g,f)=>c(d,u,p,v,T,g,f)),!!this[s].apply(this,l)};const o="every"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,u,p,v,T,g,f)=>!c(d,u,p,v,T,g,f)),!this[s].apply(this,l)}}function K0(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(a,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return ar();if(!arguments.length)return k0(this,n);if(arguments.length===1){a=""+a;const l=this._nodes.get(a);if(!l)throw new de(`Graph.${s}: could not find the "${a}" node in the graph.`);return H0(n,r,l)}if(arguments.length===2){a=""+a,o=""+o;const l=this._nodes.get(a);if(!l)throw new de(`Graph.${s}:  could not find the "${a}" source node in the graph.`);if(!this._nodes.has(o))throw new de(`Graph.${s}:  could not find the "${o}" target node in the graph.`);return X0(n,r,l,o)}throw new Ee(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Z0(i){U0.forEach(e=>{$0(i,e),q0(i,e),Y0(i,e),K0(i,e)})}const J0=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Xs(){this.A=null,this.B=null}Xs.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};Xs.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function Sr(i,e,t,n,r){for(const s in n){const a=n[s],o=a.source,l=a.target,c=o===t?l:o;if(e&&e.has(c.key))continue;const h=r(c.key,c.attributes);if(i&&h)return c.key}}function al(i,e,t,n,r){if(e!=="mixed"){if(e==="undirected")return Sr(i,null,n,n.undirected,r);if(typeof t=="string")return Sr(i,null,n,n[t],r)}const s=new Xs;let a;if(e!=="undirected"){if(t!=="out"){if(a=Sr(i,null,n,n.in,r),i&&a)return a;s.wrap(n.in)}if(t!=="in"){if(a=Sr(i,s,n,n.out,r),i&&a)return a;s.wrap(n.out)}}if(e!=="directed"&&(a=Sr(i,s,n,n.undirected,r),i&&a))return a}function Q0(i,e,t){if(i!=="mixed"){if(i==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return al(!1,i,e,t,function(r){n.push(r)}),n}function Er(i,e,t){const n=Object.keys(t),r=n.length;let s=0;return{[Symbol.iterator](){return this},next(){let a=null;do{if(s>=r)return i&&i.wrap(t),{done:!0};const o=t[n[s++]],l=o.source,c=o.target;if(a=l===e?c:l,i&&i.has(a.key)){a=null;continue}}while(a===null);return{done:!1,value:{neighbor:a.key,attributes:a.attributes}}}}}function j0(i,e,t){if(i!=="mixed"){if(i==="undirected")return Er(null,t,t.undirected);if(typeof e=="string")return Er(null,t,t[e])}let n=ar();const r=new Xs;return i!=="undirected"&&(e!=="out"&&(n=Yn(n,Er(r,t,t.in))),e!=="in"&&(n=Yn(n,Er(r,t,t.out)))),i!=="directed"&&(n=Yn(n,Er(r,t,t.undirected))),n}function ex(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new de(`Graph.${t}: could not find the "${s}" node in the graph.`);return Q0(n==="mixed"?this.type:n,r,a)}}function tx(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new de(`Graph.${s}: could not find the "${c}" node in the graph.`);al(!1,n==="mixed"?this.type:n,r,d,h)};const a="map"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(c,h){const d=[];return this[s](c,(u,p)=>{d.push(h(u,p))}),d};const o="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(c,h){const d=[];return this[s](c,(u,p)=>{h(u,p)&&d.push(u)}),d};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(c,h,d){if(arguments.length<3)throw new Ee(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u=d;return this[s](c,(p,v)=>{u=h(u,p,v)}),u}}function nx(i,e){const{name:t,type:n,direction:r}=e,s=t[0].toUpperCase()+t.slice(1,-1),a="find"+s;i.prototype[a]=function(c,h){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new de(`Graph.${a}: could not find the "${c}" node in the graph.`);return al(!0,n==="mixed"?this.type:n,r,d,h)};const o="some"+s;i.prototype[o]=function(c,h){return!!this[a](c,h)};const l="every"+s;i.prototype[l]=function(c,h){return!this[a](c,(u,p)=>!h(u,p))}}function ix(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return ar();a=""+a;const o=this._nodes.get(a);if(typeof o>"u")throw new de(`Graph.${s}: could not find the "${a}" node in the graph.`);return j0(n==="mixed"?this.type:n,r,o)}}function rx(i){J0.forEach(e=>{ex(i,e),tx(i,e),nx(i,e),ix(i,e)})}function ys(i,e,t,n,r){const s=n._nodes.values(),a=n.type;let o,l,c,h,d,u;for(;o=s.next(),o.done!==!0;){let p=!1;if(l=o.value,a!=="undirected"){h=l.out;for(c in h){d=h[c];do u=d.target,p=!0,r(l.key,u.key,l.attributes,u.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}if(a!=="directed"){h=l.undirected;for(c in h)if(!(e&&l.key>c)){d=h[c];do u=d.target,u.key!==c&&(u=d.source),p=!0,r(l.key,u.key,l.attributes,u.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}t&&!p&&r(l.key,null,l.attributes,null,null,null,null)}}function sx(i,e){const t={key:i};return Vu(e.attributes)||(t.attributes=Nt({},e.attributes)),t}function ax(i,e,t){const n={key:e,source:t.source.key,target:t.target.key};return Vu(t.attributes)||(n.attributes=Nt({},t.attributes)),i==="mixed"&&t.undirected&&(n.undirected=!0),n}function ox(i){if(!Gt(i))throw new Ee('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new Ee("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!Gt(i.attributes)||i.attributes===null))throw new Ee("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function lx(i){if(!Gt(i))throw new Ee('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new Ee("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new Ee("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!Gt(i.attributes)||i.attributes===null))throw new Ee("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new Ee("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const cx=h0(),ux=new Set(["directed","undirected","mixed"]),Uc=new Set(["domain","_events","_eventsCount","_maxListeners"]),hx=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],dx={allowSelfLoops:!0,multi:!1,type:"mixed"};function fx(i,e,t){if(t&&!Gt(t))throw new Ee(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},i._nodes.has(e))throw new ze(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Fc(i,e,t){const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Zu(i,e,t,n,r,s,a,o){if(!n&&i.type==="undirected")throw new ze(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ze(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(o&&!Gt(o))throw new Ee(`Graph.${e}: invalid attributes. Expecting an object but got "${o}"`);if(s=""+s,a=""+a,o=o||{},!i.allowSelfLoops&&s===a)throw new ze(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=i._nodes.get(s),c=i._nodes.get(a);if(!l)throw new de(`Graph.${e}: source node "${s}" not found.`);if(!c)throw new de(`Graph.${e}: target node "${a}" not found.`);const h={key:null,undirected:n,source:s,target:a,attributes:o};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ze(`Graph.${e}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof l.undirected[a]<"u":typeof l.out[a]<"u"))throw new ze(`Graph.${e}: an edge linking "${s}" to "${a}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const d=new or(n,r,l,c,o);i._edges.set(r,d);const u=s===a;return n?(l.undirectedDegree++,c.undirectedDegree++,u&&(l.undirectedLoops++,i._undirectedSelfLoopCount++)):(l.outDegree++,c.inDegree++,u&&(l.directedLoops++,i._directedSelfLoopCount++)),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,h.key=r,i.emit("edgeAdded",h),r}function px(i,e,t,n,r,s,a,o,l){if(!n&&i.type==="undirected")throw new ze(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new ze(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(o){if(l){if(typeof o!="function")throw new Ee(`Graph.${e}: invalid updater function. Expecting a function but got "${o}"`)}else if(!Gt(o))throw new Ee(`Graph.${e}: invalid attributes. Expecting an object but got "${o}"`)}s=""+s,a=""+a;let c;if(l&&(c=o,o=void 0),!i.allowSelfLoops&&s===a)throw new ze(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let h=i._nodes.get(s),d=i._nodes.get(a),u,p;if(!t&&(u=i._edges.get(r),u)){if((u.source.key!==s||u.target.key!==a)&&(!n||u.source.key!==a||u.target.key!==s))throw new ze(`Graph.${e}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${a}" target vs. ("${u.source.key}", "${u.target.key}").`);p=u}if(!p&&!i.multi&&h&&(p=n?h.undirected[a]:h.out[a]),p){const A=[p.key,!1,!1,!1];if(l?!c:!o)return A;if(l){const E=p.attributes;p.attributes=c(E),i.emit("edgeAttributesUpdated",{type:"replace",key:p.key,attributes:p.attributes})}else Nt(p.attributes,o),i.emit("edgeAttributesUpdated",{type:"merge",key:p.key,attributes:p.attributes,data:o});return A}o=o||{},l&&c&&(o=c(o));const v={key:null,undirected:n,source:s,target:a,attributes:o};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new ze(`Graph.${e}: the "${r}" edge already exists in the graph.`);let T=!1,g=!1;h||(h=Fc(i,s,{}),T=!0,s===a&&(d=h,g=!0)),d||(d=Fc(i,a,{}),g=!0),u=new or(n,r,h,d,o),i._edges.set(r,u);const f=s===a;return n?(h.undirectedDegree++,d.undirectedDegree++,f&&(h.undirectedLoops++,i._undirectedSelfLoopCount++)):(h.outDegree++,d.inDegree++,f&&(h.directedLoops++,i._directedSelfLoopCount++)),i.multi?u.attachMulti():u.attach(),n?i._undirectedSize++:i._directedSize++,v.key=r,i.emit("edgeAdded",v),[r,!0,T,g]}function Xi(i,e){i._edges.delete(e.key);const{source:t,target:n,attributes:r}=e,s=e.undirected,a=t===n;s?(t.undirectedDegree--,n.undirectedDegree--,a&&(t.undirectedLoops--,i._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,a&&(t.directedLoops--,i._directedSelfLoopCount--)),i.multi?e.detachMulti():e.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:e.key,attributes:r,source:t.key,target:n.key,undirected:s})}class xt extends c0.EventEmitter{constructor(e){if(super(),e=Nt({},dx,e),typeof e.multi!="boolean")throw new Ee(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!ux.has(e.type))throw new Ee(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Ee(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?Hu:e.type==="directed"?Wu:Xu;un(this,"NodeDataClass",t);const n="geid_"+cx()+"_";let r=0;const s=()=>{let a;do a=n+r++;while(this._edges.has(a));return a};un(this,"_attributes",{}),un(this,"_nodes",new Map),un(this,"_edges",new Map),un(this,"_directedSize",0),un(this,"_undirectedSize",0),un(this,"_directedSelfLoopCount",0),un(this,"_undirectedSelfLoopCount",0),un(this,"_edgeKeyGenerator",s),un(this,"_options",e),Uc.forEach(a=>un(this,a,this[a])),yn(this,"order",()=>this._nodes.size),yn(this,"size",()=>this._edges.size),yn(this,"directedSize",()=>this._directedSize),yn(this,"undirectedSize",()=>this._undirectedSize),yn(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),yn(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),yn(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),yn(this,"multi",this._options.multi),yn(this,"type",this._options.type),yn(this,"allowSelfLoops",this._options.allowSelfLoops),yn(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Ee(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Ee(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Ee(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ze("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new de(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new de(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ze("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new de(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new de(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new ze("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new de(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new de(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,r+=t.directedLoops),n-r}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,r+=t.directedLoops),n-r}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,r+=t.directedLoops*2),n-r}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new de(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(e===r)return s;if(e===s)return r;throw new de(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${s}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new de(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new de(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return fx(this,e,t).key}mergeNode(e,t){if(t&&!Gt(t))throw new Ee(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(Nt(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Ee(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const s=n.attributes;n.attributes=t(s),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:r}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new de(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in t.out){n=t.out[r];do Xi(this,n),n=n.next;while(n)}for(const r in t.in){n=t.in[r];do Xi(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in t.undirected){n=t.undirected[r];do Xi(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(t=fn(this,n,r,this.type),!t)throw new de(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new de(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return Xi(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ze("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ze("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=fn(this,e,t,"directed");if(!n)throw new de(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Xi(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ze("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ze("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=fn(this,e,t,"undirected");if(!n)throw new de(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Xi(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Ee("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!Gt(e))throw new Ee("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!Gt(e))throw new Ee("Graph.mergeAttributes: provided attributes are not a plain object.");return Nt(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Ee("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Ee("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!Nc(t))throw new Ee("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=e(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Ee("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!Nc(t))throw new Ee("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,a,o;for(;r=n.next(),r.done!==!0;)s=r.value,a=s.source,o=s.target,s.attributes=e(s.key,s.attributes,a.key,o.key,a.attributes,o.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Ee("Graph.forEachAdjacencyEntry: expecting a callback.");ys(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ee("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");ys(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Ee("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");ys(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ee("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");ys(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Ee("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!="function")throw new Ee("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!="function")throw new Ee("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,r;const s=new Array(this.order);let a=0;for(;n=t.next(),n.done!==!0;)r=n.value,s[a++]=e(r.key,r.attributes);return s}someNode(e){if(typeof e!="function")throw new Ee("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Ee("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Ee("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,r;const s=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(e,t){if(typeof e!="function")throw new Ee("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Ee("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const r=this._nodes.values();let s,a;for(;s=r.next(),s.done!==!0;)a=s.value,n=e(n,a.key,a.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,s)=>{e[t++]=sx(s,r)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((r,s)=>{n[t++]=ax(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof xt)return e.forEachNode((l,c)=>{t?this.mergeNode(l,c):this.addNode(l,c)}),e.forEachEdge((l,c,h,d,u,p,v)=>{t?v?this.mergeUndirectedEdgeWithKey(l,h,d,c):this.mergeDirectedEdgeWithKey(l,h,d,c):v?this.addUndirectedEdgeWithKey(l,h,d,c):this.addDirectedEdgeWithKey(l,h,d,c)}),this;if(!Gt(e))throw new Ee("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!Gt(e.attributes))throw new Ee("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,r,s,a,o;if(e.nodes){if(s=e.nodes,!Array.isArray(s))throw new Ee("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],ox(a);const{key:l,attributes:c}=a;t?this.mergeNode(l,c):this.addNode(l,c)}}if(e.edges){let l=!1;if(this.type==="undirected"&&(l=!0),s=e.edges,!Array.isArray(s))throw new Ee("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],lx(o);const{source:c,target:h,attributes:d,undirected:u=l}=o;let p;"key"in o?(p=t?u?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:u?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,p.call(this,o.key,c,h,d)):(p=t?u?this.mergeUndirectedEdge:this.mergeDirectedEdge:u?this.addUndirectedEdge:this.addDirectedEdge,p.call(this,c,h,d))}}return this}nullCopy(e){const t=new xt(Nt({},this._options,e));return t.replaceAttributes(Nt({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,r)=>{const s=Nt({},n.attributes);n=new t.NodeDataClass(r,s),t._nodes.set(r,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ze(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ze("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ze("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,Zu(t,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,Nt({},s.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((s,a)=>{e[a]=s.attributes});const t={},n={};this._edges.forEach((s,a)=>{const o=s.undirected?"--":"->";let l="",c=s.source.key,h=s.target.key,d;s.undirected&&c>h&&(d=c,c=h,h=d);const u=`(${c})${o}(${h})`;a.startsWith("geid_")?this.multi&&(typeof n[u]>"u"?n[u]=0:n[u]++,l+=`${n[u]}. `):l+=`[${a}]: `,l+=u,t[l]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!Uc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,un(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(xt.prototype[Symbol.for("nodejs.util.inspect.custom")]=xt.prototype.inspect);hx.forEach(i=>{["add","merge","update"].forEach(e=>{const t=i.name(e),n=e==="add"?Zu:px;i.generateKey?xt.prototype[t]=function(r,s,a){return n(this,t,!0,(i.type||this.type)==="undirected",null,r,s,a,e==="update")}:xt.prototype[t]=function(r,s,a,o){return n(this,t,!1,(i.type||this.type)==="undirected",r,s,a,o,e==="update")}})});E0(xt);N0(xt);Z0(xt);rx(xt);class Ju extends xt{constructor(e){const t=Nt({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Ee("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Ee('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class ol extends xt{constructor(e){const t=Nt({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Ee("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Ee('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Qu extends xt{constructor(e){const t=Nt({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class ju extends xt{constructor(e){const t=Nt({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Ee('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class eh extends xt{constructor(e){const t=Nt({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ee("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Ee('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function lr(i){i.from=function(e,t){const n=Nt({},e.options,t),r=new i(n);return r.import(e),r}}lr(xt);lr(Ju);lr(ol);lr(Qu);lr(ju);lr(eh);xt.Graph=xt;xt.DirectedGraph=Ju;xt.UndirectedGraph=ol;xt.MultiGraph=Qu;xt.MultiDirectedGraph=ju;xt.MultiUndirectedGraph=eh;xt.InvalidArgumentsGraphError=Ee;xt.NotFoundGraphError=de;xt.UsageGraphError=ze;var La,Oc;function th(){if(Oc)return La;Oc=1;function i(t){return!t||typeof t!="object"||typeof t=="function"||Array.isArray(t)||t instanceof Set||t instanceof Map||t instanceof RegExp||t instanceof Date}function e(t,n){t=t||{};var r={};for(var s in n){var a=t[s],o=n[s];if(!i(o)){r[s]=e(a,o);continue}a===void 0?r[s]=o:r[s]=a}return r}return La=e,La}var Ia,Bc;function nh(){return Bc||(Bc=1,Ia=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),Ia}var Na,Gc;function mx(){if(Gc)return Na;Gc=1;var i=nh();return Na=function(t){if(!i(t))throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");var n=t.type;return n!=="mixed"?n:t.directedSize===0&&t.undirectedSize===0||t.directedSize>0&&t.undirectedSize>0?"mixed":t.directedSize>0?"directed":"undirected"},Na}var Ua,zc;function ih(){if(zc)return Ua;zc=1;function i(e){if(typeof e!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=e}return typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=function(){return this}),i.of=function(){var e=arguments,t=e.length,n=0;return new i(function(){return n>=t?{done:!0}:{done:!1,value:e[n++]}})},i.empty=function(){var e=new i(function(){return{done:!0}});return e},i.fromSequence=function(e){var t=0,n=e.length;return new i(function(){return t>=n?{done:!0}:{done:!1,value:e[t++]}})},i.is=function(e){return e instanceof i?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"},Ua=i,Ua}var Fa={},kc;function ll(){return kc||(kc=1,(function(i){var e=Math.pow(2,8)-1,t=Math.pow(2,16)-1,n=Math.pow(2,32)-1,r=Math.pow(2,7)-1,s=Math.pow(2,15)-1,a=Math.pow(2,31)-1;i.getPointerArray=function(l){var c=l-1;if(c<=e)return Uint8Array;if(c<=t)return Uint16Array;if(c<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},i.getSignedPointerArray=function(l){var c=l-1;return c<=r?Int8Array:c<=s?Int16Array:c<=a?Int32Array:Float64Array},i.getNumberType=function(l){return l===(l|0)?Math.sign(l)===-1?l<=127&&l>=-128?Int8Array:l<=32767&&l>=-32768?Int16Array:Int32Array:l<=255?Uint8Array:l<=65535?Uint16Array:Uint32Array:Float64Array};var o={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};i.getMinimalRepresentation=function(l,c){var h=null,d=0,u,p,v,T,g;for(T=0,g=l.length;T<g;T++)v=c?c(l[T]):l[T],p=i.getNumberType(v),u=o[p.name],u>d&&(d=u,h=p);return h},i.isTypedArray=function(l){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(l)},i.concat=function(){var l=0,c,h,d;for(c=0,d=arguments.length;c<d;c++)l+=arguments[c].length;var u=new arguments[0].constructor(l);for(c=0,h=0;c<d;c++)u.set(arguments[c],h),h+=arguments[c].length;return u},i.indices=function(l){for(var c=i.getPointerArray(l),h=new c(l),d=0;d<l;d++)h[d]=d;return h}})(Fa)),Fa}var Oa,Vc;function gx(){if(Vc)return Oa;Vc=1;var i=ih(),e=ll().getPointerArray;function t(n,r){arguments.length<2&&(r=n,n=Array);var s=e(r);this.size=0,this.length=r,this.dense=new s(r),this.sparse=new s(r),this.vals=new n(r)}return t.prototype.clear=function(){this.size=0},t.prototype.has=function(n){var r=this.sparse[n];return r<this.size&&this.dense[r]===n},t.prototype.get=function(n){var r=this.sparse[n];if(r<this.size&&this.dense[r]===n)return this.vals[r]},t.prototype.set=function(n,r){var s=this.sparse[n];return s<this.size&&this.dense[s]===n?(this.vals[s]=r,this):(this.dense[this.size]=n,this.sparse[n]=this.size,this.vals[this.size]=r,this.size++,this)},t.prototype.delete=function(n){var r=this.sparse[n];return r>=this.size||this.dense[r]!==n?!1:(r=this.dense[this.size-1],this.dense[this.sparse[n]]=r,this.sparse[r]=this.sparse[n],this.size--,!0)},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=0;s<this.size;s++)n.call(r,this.vals[s],this.dense[s])},t.prototype.keys=function(){var n=this.size,r=this.dense,s=0;return new i(function(){if(s<n){var a=r[s];return s++,{value:a}}return{done:!0}})},t.prototype.values=function(){var n=this.size,r=this.vals,s=0;return new i(function(){if(s<n){var a=r[s];return s++,{value:a}}return{done:!0}})},t.prototype.entries=function(){var n=this.size,r=this.dense,s=this.vals,a=0;return new i(function(){if(a<n){var o=[r[a],s[a]];return a++,{value:o}}return{done:!0}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.entries),t.prototype.inspect=function(){for(var n=new Map,r=0;r<this.size;r++)n.set(this.dense[r],this.vals[r]);return Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.length=this.length,this.vals.constructor!==Array&&(n.type=this.vals.constructor.name),n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),Oa=t,Oa}var Ba,Hc;function _x(){if(Hc)return Ba;Hc=1;var i=ih(),e=ll().getPointerArray;function t(n){var r=e(n);this.start=0,this.size=0,this.capacity=n,this.dense=new r(n),this.sparse=new r(n)}return t.prototype.clear=function(){this.start=0,this.size=0},t.prototype.has=function(n){if(this.size===0)return!1;var r=this.sparse[n],s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;return s&&this.dense[r]===n},t.prototype.enqueue=function(n){var r=this.sparse[n];if(this.size!==0){var s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;if(s&&this.dense[r]===n)return this}return r=(this.start+this.size)%this.capacity,this.dense[r]=n,this.sparse[n]=r,this.size++,this},t.prototype.dequeue=function(){if(this.size!==0){var n=this.start;this.size--,this.start++,this.start===this.capacity&&(this.start=0);var r=this.dense[n];return this.sparse[r]=this.capacity,r}},t.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=this.capacity,a=this.size,o=this.start,l=0;l<a;)n.call(r,this.dense[o],l,this),o++,l++,o===s&&(o=0)},t.prototype.values=function(){var n=this.dense,r=this.capacity,s=this.size,a=this.start,o=0;return new i(function(){if(o>=s)return{done:!0};var l=n[a];return a++,o++,a===r&&(a=0),{value:l,done:!1}})},typeof Symbol<"u"&&(t.prototype[Symbol.iterator]=t.prototype.values),t.prototype.inspect=function(){var n=[];return this.forEach(function(r){n.push(r)}),Object.defineProperty(n,"constructor",{value:t,enumerable:!1}),n.capacity=this.capacity,n},typeof Symbol<"u"&&(t.prototype[Symbol.for("nodejs.util.inspect.custom")]=t.prototype.inspect),Ba=t,Ba}var Ga,Wc;function xx(){if(Wc)return Ga;Wc=1;function i(t){return function(n){return typeof n!="number"&&(n=n.length),Math.floor(t()*n)}}var e=i(Math.random);return e.createRandomIndex=i,Ga=e,Ga}var Ms={},br={},Xc;function vx(){if(Xc)return br;Xc=1;function i(n){return typeof n!="number"||isNaN(n)?1:n}function e(n,r){var s={},a=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(a=r);var o=function(c){return a(c[n])},l=function(){return a(void 0)};return typeof n=="string"?(s.fromAttributes=o,s.fromGraph=function(c,h){return o(c.getNodeAttributes(h))},s.fromEntry=function(c,h){return o(h)}):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},s.fromGraph=function(c,h){return a(n(h,c.getNodeAttributes(h)))},s.fromEntry=function(c,h){return a(n(c,h))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l),s}function t(n,r){var s={},a=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(a=r);var o=function(c){return a(c[n])},l=function(){return a(void 0)};return typeof n=="string"?(s.fromAttributes=o,s.fromGraph=function(c,h){return o(c.getEdgeAttributes(h))},s.fromEntry=function(c,h){return o(h)},s.fromPartialEntry=s.fromEntry,s.fromMinimalEntry=s.fromEntry):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},s.fromGraph=function(c,h){var d=c.extremities(h);return a(n(h,c.getEdgeAttributes(h),d[0],d[1],c.getNodeAttributes(d[0]),c.getNodeAttributes(d[1]),c.isUndirected(h)))},s.fromEntry=function(c,h,d,u,p,v,T){return a(n(c,h,d,u,p,v,T))},s.fromPartialEntry=function(c,h,d,u){return a(n(c,h,d,u))},s.fromMinimalEntry=function(c,h){return a(n(c,h))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l,s.fromMinimalEntry=l),s}return br.createNodeValueGetter=e,br.createEdgeValueGetter=t,br.createEdgeWeightGetter=function(n){return t(n,i)},br}var $c;function yx(){if($c)return Ms;$c=1;var i=ll(),e=th(),t=vx().createEdgeWeightGetter,n=Symbol.for("nodejs.util.inspect.custom"),r={getEdgeWeight:"weight",keepDendrogram:!1,resolution:1};function s(o,l){l=e(l,r);var c=l.resolution,h=t(l.getEdgeWeight).fromEntry,d=(o.size-o.selfLoopCount)*2,u=i.getPointerArray(d),p=i.getPointerArray(o.order+1),v=l.getEdgeWeight?Float64Array:i.getPointerArray(o.size*2);this.C=o.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=o,this.nodes=new Array(o.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new v(d),this.loops=new v(o.order),this.starts=new u(o.order+1),this.belongings=new p(o.order),this.dendrogram=[],this.mapping=null,this.counts=new p(o.order),this.unused=new p(o.order),this.totalWeights=new v(o.order);var T={},g,f=0,A=0,E=this;o.forEachNode(function(_){E.nodes[f]=_,T[_]=f,A+=o.undirectedDegreeWithoutSelfLoops(_),E.starts[f]=A,E.belongings[f]=f,E.counts[f]=1,f++}),o.forEachEdge(function(_,M,y,w,m,b,C){if(g=h(_,M,y,w,m,b,C),y=T[y],w=T[w],E.M+=g,y===w)E.totalWeights[y]+=g*2,E.loops[y]=g*2;else{E.totalWeights[y]+=g,E.totalWeights[w]+=g;var P=--E.starts[y],D=--E.starts[w];E.neighborhood[P]=w,E.neighborhood[D]=y,E.weights[P]=g,E.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}s.prototype.isolate=function(o,l){var c=this.belongings[o];if(this.counts[c]===1)return c;var h=this.unused[--this.U],d=this.loops[o];return this.totalWeights[c]-=l+d,this.totalWeights[h]+=l+d,this.belongings[o]=h,this.counts[c]--,this.counts[h]++,h},s.prototype.move=function(o,l,c){var h=this.belongings[o],d=this.loops[o];this.totalWeights[h]-=l+d,this.totalWeights[c]+=l+d,this.belongings[o]=c;var u=this.counts[h]--===1;this.counts[c]++,u&&(this.unused[this.U++]=h)},s.prototype.computeNodeDegree=function(o){var l,c,h,d=0;for(l=this.starts[o],c=this.starts[o+1];l<c;l++)h=this.weights[l],d+=h;return d},s.prototype.expensiveIsolate=function(o){var l=this.computeNodeDegree(o);return this.isolate(o,l)},s.prototype.expensiveMove=function(o,l){var c=this.computeNodeDegree(o);this.move(o,c,l)},s.prototype.zoomOut=function(){var o=new Array(this.C-this.U),l={},c=this.nodes.length,h=0,d=0,u,p,v,T,g,f,A,E,_;for(u=0,v=this.C;u<v;u++)f=this.belongings[u],f in l||(l[f]=h,o[h]={adj:{},totalWeights:this.totalWeights[f],internalWeights:0},h++),this.belongings[u]=l[f];var M,y;if(this.keepDendrogram){for(M=this.dendrogram[this.level],y=new(i.getPointerArray(h))(c),u=0;u<c;u++)y[u]=this.belongings[M[u]];this.dendrogram.push(y)}else for(u=0;u<c;u++)this.mapping[u]=this.belongings[this.mapping[u]];for(u=0,v=this.C;u<v;u++)for(f=this.belongings[u],E=o[f],_=E.adj,E.internalWeights+=this.loops[u],p=this.starts[u],T=this.starts[u+1];p<T;p++){if(g=this.neighborhood[p],A=this.belongings[g],f===A){E.internalWeights+=this.weights[p];continue}A in _||(_[A]=0),_[A]+=this.weights[p]}for(this.C=h,g=0,f=0;f<h;f++){E=o[f],_=E.adj,f=+f,this.totalWeights[f]=E.totalWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(A in _)this.neighborhood[g]=+A,this.weights[g]=_[A],d++,g++}return this.starts[h]=d,this.E=d,this.U=0,this.level++,l},s.prototype.modularity=function(){var o,l,c,h,d,u=0,p=this.M*2,v=new Float64Array(this.C);for(c=0;c<this.C;c++)for(o=this.belongings[c],v[o]+=this.loops[c],h=this.starts[c],d=this.starts[c+1];h<d;h++)l=this.belongings[this.neighborhood[h]],o===l&&(v[o]+=this.weights[h]);for(c=0;c<this.C;c++)u+=v[c]/p-Math.pow(this.totalWeights[c]/p,2)*this.resolution;return u},s.prototype.delta=function(o,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[o],c/d-u*l*this.resolution/(2*d*d)},s.prototype.deltaWithOwnCommunity=function(o,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[o],c/d-(u-l)*l*this.resolution/(2*d*d)},s.prototype.fastDelta=function(o,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[o],c-l*u*this.resolution/(2*d)},s.prototype.fastDeltaWithOwnCommunity=function(o,l,c,h){var d=this.M,u=this.totalWeights[h];return l+=this.loops[o],c-l*(u-l)*this.resolution/(2*d)},s.prototype.bounds=function(o){return[this.starts[o],this.starts[o+1]]},s.prototype.project=function(){var o=this,l={};return o.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(o.neighborhood.slice(o.starts[h],o.starts[h+1])).map(function(d){return o.nodes[d]})}),l},s.prototype.collect=function(o){arguments.length<1&&(o=this.level);var l={},c=this.keepDendrogram?this.dendrogram[o]:this.mapping,h,d;for(h=0,d=c.length;h<d;h++)l[this.nodes[h]]=c[h];return l},s.prototype.assign=function(o,l){arguments.length<2&&(l=this.level);var c=this.keepDendrogram?this.dendrogram[l]:this.mapping,h,d;for(h=0,d=c.length;h<d;h++)this.graph.setNodeAttribute(this.nodes[h],o,c[h])},s.prototype[n]=function(){var o={};Object.defineProperty(o,"constructor",{value:s,enumerable:!1}),o.C=this.C,o.M=this.M,o.E=this.E,o.U=this.U,o.resolution=this.resolution,o.level=this.level,o.nodes=this.nodes,o.starts=this.starts.slice(0,o.C+1);var l=["neighborhood","weights"],c=["counts","loops","belongings","totalWeights"],h=this;return l.forEach(function(d){o[d]=h[d].slice(0,o.E)}),c.forEach(function(d){o[d]=h[d].slice(0,o.C)}),o.unused=this.unused.slice(0,this.U),this.keepDendrogram?o.dendrogram=this.dendrogram:o.mapping=this.mapping,o};function a(o,l){l=e(l,r);var c=l.resolution,h=t(l.getEdgeWeight).fromEntry,d=(o.size-o.selfLoopCount)*2,u=i.getPointerArray(d),p=i.getPointerArray(o.order+1),v=l.getEdgeWeight?Float64Array:i.getPointerArray(o.size*2);this.C=o.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=o,this.nodes=new Array(o.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new v(d),this.loops=new v(o.order),this.starts=new u(o.order+1),this.offsets=new u(o.order),this.belongings=new p(o.order),this.dendrogram=[],this.counts=new p(o.order),this.unused=new p(o.order),this.totalInWeights=new v(o.order),this.totalOutWeights=new v(o.order);var T={},g,f=0,A=0,E=this;o.forEachNode(function(_){E.nodes[f]=_,T[_]=f,A+=o.outDegreeWithoutSelfLoops(_),E.starts[f]=A,A+=o.inDegreeWithoutSelfLoops(_),E.offsets[f]=A,E.belongings[f]=f,E.counts[f]=1,f++}),o.forEachEdge(function(_,M,y,w,m,b,C){if(g=h(_,M,y,w,m,b,C),y=T[y],w=T[w],E.M+=g,y===w)E.loops[y]+=g,E.totalInWeights[y]+=g,E.totalOutWeights[y]+=g;else{E.totalOutWeights[y]+=g,E.totalInWeights[w]+=g;var P=--E.starts[y],D=--E.offsets[w];E.neighborhood[P]=w,E.neighborhood[D]=y,E.weights[P]=g,E.weights[D]=g}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}return a.prototype.bounds=s.prototype.bounds,a.prototype.inBounds=function(o){return[this.offsets[o],this.starts[o+1]]},a.prototype.outBounds=function(o){return[this.starts[o],this.offsets[o]]},a.prototype.project=s.prototype.project,a.prototype.projectIn=function(){var o=this,l={};return o.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(o.neighborhood.slice(o.offsets[h],o.starts[h+1])).map(function(d){return o.nodes[d]})}),l},a.prototype.projectOut=function(){var o=this,l={};return o.nodes.slice(0,this.C).forEach(function(c,h){l[c]=Array.from(o.neighborhood.slice(o.starts[h],o.offsets[h])).map(function(d){return o.nodes[d]})}),l},a.prototype.isolate=function(o,l,c){var h=this.belongings[o];if(this.counts[h]===1)return h;var d=this.unused[--this.U],u=this.loops[o];return this.totalInWeights[h]-=l+u,this.totalInWeights[d]+=l+u,this.totalOutWeights[h]-=c+u,this.totalOutWeights[d]+=c+u,this.belongings[o]=d,this.counts[h]--,this.counts[d]++,d},a.prototype.move=function(o,l,c,h){var d=this.belongings[o],u=this.loops[o];this.totalInWeights[d]-=l+u,this.totalInWeights[h]+=l+u,this.totalOutWeights[d]-=c+u,this.totalOutWeights[h]+=c+u,this.belongings[o]=h;var p=this.counts[d]--===1;this.counts[h]++,p&&(this.unused[this.U++]=d)},a.prototype.computeNodeInDegree=function(o){var l,c,h,d=0;for(l=this.offsets[o],c=this.starts[o+1];l<c;l++)h=this.weights[l],d+=h;return d},a.prototype.computeNodeOutDegree=function(o){var l,c,h,d=0;for(l=this.starts[o],c=this.offsets[o];l<c;l++)h=this.weights[l],d+=h;return d},a.prototype.expensiveMove=function(o,l){var c=this.computeNodeInDegree(o),h=this.computeNodeOutDegree(o);this.move(o,c,h,l)},a.prototype.zoomOut=function(){var o=new Array(this.C-this.U),l={},c=this.nodes.length,h=0,d=0,u,p,v,T,g,f,A,E,_,M,y,w,m;for(u=0,v=this.C;u<v;u++)f=this.belongings[u],f in l||(l[f]=h,o[h]={inAdj:{},outAdj:{},totalInWeights:this.totalInWeights[f],totalOutWeights:this.totalOutWeights[f],internalWeights:0},h++),this.belongings[u]=l[f];var b,C;if(this.keepDendrogram){for(b=this.dendrogram[this.level],C=new(i.getPointerArray(h))(c),u=0;u<c;u++)C[u]=this.belongings[b[u]];this.dendrogram.push(C)}else for(u=0;u<c;u++)this.mapping[u]=this.belongings[this.mapping[u]];for(u=0,v=this.C;u<v;u++)for(f=this.belongings[u],_=this.offsets[u],E=o[f],w=E.inAdj,m=E.outAdj,E.internalWeights+=this.loops[u],p=this.starts[u],T=this.starts[u+1];p<T;p++){if(g=this.neighborhood[p],A=this.belongings[g],M=p<_,y=M?m:w,f===A){M&&(E.internalWeights+=this.weights[p]);continue}A in y||(y[A]=0),y[A]+=this.weights[p]}for(this.C=h,g=0,f=0;f<h;f++){E=o[f],w=E.inAdj,m=E.outAdj,f=+f,this.totalInWeights[f]=E.totalInWeights,this.totalOutWeights[f]=E.totalOutWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=g,this.belongings[f]=f;for(A in m)this.neighborhood[g]=+A,this.weights[g]=m[A],d++,g++;this.offsets[f]=g;for(A in w)this.neighborhood[g]=+A,this.weights[g]=w[A],d++,g++}return this.starts[h]=d,this.E=d,this.U=0,this.level++,l},a.prototype.modularity=function(){var o,l,c,h,d,u=0,p=this.M,v=new Float64Array(this.C);for(c=0;c<this.C;c++)for(o=this.belongings[c],v[o]+=this.loops[c],h=this.starts[c],d=this.offsets[c];h<d;h++)l=this.belongings[this.neighborhood[h]],o===l&&(v[o]+=this.weights[h]);for(c=0;c<this.C;c++)u+=v[c]/p-this.totalInWeights[c]*this.totalOutWeights[c]/Math.pow(p,2)*this.resolution;return u},a.prototype.delta=function(o,l,c,h,d){var u=this.M,p=this.totalInWeights[d],v=this.totalOutWeights[d],T=this.loops[o];return l+=T,c+=T,h/u-(c*p+l*v)*this.resolution/(u*u)},a.prototype.deltaWithOwnCommunity=function(o,l,c,h,d){var u=this.M,p=this.totalInWeights[d],v=this.totalOutWeights[d],T=this.loops[o];return l+=T,c+=T,h/u-(c*(p-l)+l*(v-c))*this.resolution/(u*u)},a.prototype.collect=s.prototype.collect,a.prototype.assign=s.prototype.assign,a.prototype[n]=function(){var o={};Object.defineProperty(o,"constructor",{value:a,enumerable:!1}),o.C=this.C,o.M=this.M,o.E=this.E,o.U=this.U,o.resolution=this.resolution,o.level=this.level,o.nodes=this.nodes,o.starts=this.starts.slice(0,o.C+1);var l=["neighborhood","weights"],c=["counts","offsets","loops","belongings","totalInWeights","totalOutWeights"],h=this;return l.forEach(function(d){o[d]=h[d].slice(0,o.E)}),c.forEach(function(d){o[d]=h[d].slice(0,o.C)}),o.unused=this.unused.slice(0,this.U),this.keepDendrogram?o.dendrogram=this.dendrogram:o.mapping=this.mapping,o},Ms.UndirectedLouvainIndex=s,Ms.DirectedLouvainIndex=a,Ms}var za,qc;function Mx(){if(qc)return za;qc=1;var i=th(),e=nh(),t=mx(),n=gx(),r=_x(),s=xx().createRandomIndex,a=yx(),o=a.UndirectedLouvainIndex,l=a.DirectedLouvainIndex,c={nodeCommunityAttribute:"community",getEdgeWeight:"weight",fastLocalMoves:!0,randomWalk:!0,resolution:1,rng:Math.random};function h(f,A,E){var _=f.get(A);typeof _>"u"&&(_=0),_+=E,f.set(A,_)}var d=1e-10;function u(f,A,E,_,M){return Math.abs(_-M)<d?f===A?!1:E>f:_>M}function p(f,A,E){var _=new o(A,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),M=s(E.rng),y=!0,w=!0,m,b,C=new n(Float64Array,_.C),P,D,W,Y,B,X,G,q,ee,ne,ie,le,j,Le,Ae,$,ae=0,se=0,ve=[],Ie,be;for(E.fastLocalMoves&&(P=new r(_.C));y;){if(ne=_.C,y=!1,w=!0,E.fastLocalMoves){for(be=0,X=E.randomWalk?M(ne):0,G=0;G<ne;G++,X++)q=X%ne,P.enqueue(q);for(;P.size!==0;){for(q=P.dequeue(),se++,ie=0,C.clear(),m=_.belongings[q],D=_.starts[q],W=_.starts[q+1];D<W;D++)ee=_.neighborhood[D],Y=_.weights[D],b=_.belongings[ee],ie+=Y,h(C,b,Y);for(Le=_.fastDeltaWithOwnCommunity(q,ie,C.get(m)||0,m),j=m,B=0;B<C.size;B++)b=C.dense[B],b!==m&&(le=C.vals[B],ae++,$=_.fastDelta(q,ie,le,b),Ae=u(j,m,b,$,Le),Ae&&(Le=$,j=b));if(Le<0){if(j=_.isolate(q,ie),j===m)continue}else{if(j===m)continue;_.move(q,ie,j)}for(y=!0,be++,D=_.starts[q],W=_.starts[q+1];D<W;D++)ee=_.neighborhood[D],b=_.belongings[ee],b!==j&&P.enqueue(ee)}ve.push(be)}else for(Ie=[],ve.push(Ie);w;){for(w=!1,be=0,X=E.randomWalk?M(ne):0,G=0;G<ne;G++,X++){for(q=X%ne,se++,ie=0,C.clear(),m=_.belongings[q],D=_.starts[q],W=_.starts[q+1];D<W;D++)ee=_.neighborhood[D],Y=_.weights[D],b=_.belongings[ee],ie+=Y,h(C,b,Y);for(Le=_.fastDeltaWithOwnCommunity(q,ie,C.get(m)||0,m),j=m,B=0;B<C.size;B++)b=C.dense[B],b!==m&&(le=C.vals[B],ae++,$=_.fastDelta(q,ie,le,b),Ae=u(j,m,b,$,Le),Ae&&(Le=$,j=b));if(Le<0){if(j=_.isolate(q,ie),j===m)continue}else{if(j===m)continue;_.move(q,ie,j)}w=!0,be++}Ie.push(be),y=w||y}y&&_.zoomOut()}var rt={index:_,deltaComputations:ae,nodesVisited:se,moves:ve};return rt}function v(f,A,E){var _=new l(A,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),M=s(E.rng),y=!0,w=!0,m,b,C=new n(Float64Array,_.C),P,D,W,Y,B,X,G,q,ee,ne,ie,le,j,Le,Ae,$,ae,se,ve,Ie=0,be=0,rt=[],ke,$e;for(E.fastLocalMoves&&(P=new r(_.C));y;){if(le=_.C,y=!1,w=!0,E.fastLocalMoves){for($e=0,q=E.randomWalk?M(le):0,ee=0;ee<le;ee++,q++)ne=q%le,P.enqueue(ne);for(;P.size!==0;){for(ne=P.dequeue(),be++,j=0,Le=0,C.clear(),m=_.belongings[ne],D=_.starts[ne],W=_.starts[ne+1],Y=_.offsets[ne];D<W;D++)B=D<Y,ie=_.neighborhood[D],X=_.weights[D],b=_.belongings[ie],B?Le+=X:j+=X,h(C,b,X);for(ae=_.deltaWithOwnCommunity(ne,j,Le,C.get(m)||0,m),$=m,G=0;G<C.size;G++)b=C.dense[G],b!==m&&(Ae=C.vals[G],Ie++,ve=_.delta(ne,j,Le,Ae,b),se=u($,m,b,ve,ae),se&&(ae=ve,$=b));if(ae<0){if($=_.isolate(ne,j,Le),$===m)continue}else{if($===m)continue;_.move(ne,j,Le,$)}for(y=!0,$e++,D=_.starts[ne],W=_.starts[ne+1];D<W;D++)ie=_.neighborhood[D],b=_.belongings[ie],b!==$&&P.enqueue(ie)}rt.push($e)}else for(ke=[],rt.push(ke);w;){for(w=!1,$e=0,q=E.randomWalk?M(le):0,ee=0;ee<le;ee++,q++){for(ne=q%le,be++,j=0,Le=0,C.clear(),m=_.belongings[ne],D=_.starts[ne],W=_.starts[ne+1],Y=_.offsets[ne];D<W;D++)B=D<Y,ie=_.neighborhood[D],X=_.weights[D],b=_.belongings[ie],B?Le+=X:j+=X,h(C,b,X);for(ae=_.deltaWithOwnCommunity(ne,j,Le,C.get(m)||0,m),$=m,G=0;G<C.size;G++)b=C.dense[G],b!==m&&(Ae=C.vals[G],Ie++,ve=_.delta(ne,j,Le,Ae,b),se=u($,m,b,ve,ae),se&&(ae=ve,$=b));if(ae<0){if($=_.isolate(ne,j,Le),$===m)continue}else{if($===m)continue;_.move(ne,j,Le,$)}w=!0,$e++}ke.push($e),y=w||y}y&&_.zoomOut()}var je={index:_,deltaComputations:Ie,nodesVisited:be,moves:rt};return je}function T(f,A,E,_){if(!e(E))throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");var M=t(E);if(M==="mixed")throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");_=i(_,c);var y=0;if(E.size===0){if(f){E.forEachNode(function(D){E.setNodeAttribute(D,_.nodeCommunityAttribute,y++)});return}var w={};return E.forEachNode(function(D){w[D]=y++}),A?{communities:w,count:E.order,deltaComputations:0,dendrogram:null,level:0,modularity:NaN,moves:null,nodesVisited:0,resolution:_.resolution}:w}var m=M==="undirected"?p:v,b=m(A,E,_),C=b.index;if(!A){if(f){C.assign(_.nodeCommunityAttribute);return}return C.collect()}var P={count:C.C,deltaComputations:b.deltaComputations,dendrogram:C.dendrogram,level:C.level,modularity:C.modularity(),moves:b.moves,nodesVisited:b.nodesVisited,resolution:_.resolution};return f?(C.assign(_.nodeCommunityAttribute),P):(P.communities=C.collect(),P)}var g=T.bind(null,!1,!1);return g.assign=T.bind(null,!0,!1),g.detailed=T.bind(null,!1,!0),g.defaults=c,za=g,za}var Sx=Mx();const Ex=o0(Sx),Oo=180,bx=1.12,wx=220,Tx=Object.freeze({question:-360,thought:-120,observation:-120,hypothesis:120,excerpt:180,quote:260,link:320,research_result:380});function Nr(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Ax(i){let e=Nr(i)||1;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}function cl(i){return!!(i&&typeof i.id=="string"&&i.id)}function ul(i,e){return i<e?`${i}:${e}`:`${e}:${i}`}function Cs(i){return 120+Math.sqrt(Math.max(1,i))*42}function Rx(i,e,t){const n=Nr(`${i}:longitude`)/4294967295,r=Nr(`${i}:latitude`)/4294967295,s=360+Math.sqrt(t+1)*180+Math.sqrt(e+1)*54,a=n*Math.PI*2,o=Math.acos(2*r-1);return{x:Math.sin(o)*Math.cos(a)*s,y:Math.cos(o)*s,z:Math.sin(o)*Math.sin(a)*s}}function Cx(i,e){const t=Nr(`${i}:${e}:x`)/4294967295,n=Nr(`${i}:${e}:y`)/4294967295,r=t*Math.PI*2,s=Math.acos(2*n-1);return{x:Math.sin(s)*Math.cos(r),y:Math.cos(s),z:Math.sin(s)*Math.sin(r)}}function Px(i){for(let n=0;n<16;n+=1){let r=!1;for(let s=0;s<i.length;s+=1){const a=i[s];for(let o=s+1;o<i.length;o+=1){const l=i[o];let c=l.x-a.x,h=l.y-a.y,d=l.z-a.z,u=Math.hypot(c,h,d);const p=a.radius+l.radius+Oo;if(u>=p)continue;if(u<.001){const g=Cx(a.id,l.id);c=g.x,h=g.y,d=g.z,u=1}const T=(p-u)/2/u;a.x-=c*T,a.y-=h*T,a.z-=d*T,l.x+=c*T,l.y+=h*T,l.z+=d*T,r=!0}}if(!r)break}const e=i.reduce((n,r)=>({x:n.x+r.x,y:n.y+r.y,z:n.z+r.z}),{x:0,y:0,z:0}),t=Math.max(1,i.length);i.forEach(n=>{n.x-=e.x/t,n.y-=e.y/t,n.z-=e.z/t})}function Dx(i,e){const t=i.map((o,l)=>({id:o.id,radius:o.radius,...Rx(o.id,l,i.length)}));if(t.length<2)return t;const n=new Map(t.map(o=>[o.id,o])),r=e.map(o=>({...o})),s=nu(r).id(o=>o.id).distance(o=>o.source.radius+o.target.radius+Oo*1.7).strength(o=>Math.min(.18,.06+o.weight*.025));return iu(t,3).randomSource(Ax(i.map(({id:o})=>o).join("|"))).force("links",s).force("charge",ru().strength(-1150).distanceMax(5e3)).force("collision",au().radius(o=>o.radius+Oo).strength(1).iterations(2)).force("center",fh(0,0,0).strength(.1)).velocityDecay(.48).stop().tick(wx),Px(t),i.map(({id:o})=>n.get(o))}function Lx(i,e){const t=new ol;i.forEach(r=>t.addNode(r));const n=new Set;return e.forEach(({sourceId:r,targetId:s})=>{if(r===s)return;const a=ul(r,s);n.has(a)||(n.add(a),t.addEdge(r,s,{weight:1}))}),t}function Ix(i,e){const t=e.filter(a=>i.degree(a)===0),n=Ex(i,{randomWalk:!1,resolution:bx}),r=new Map;e.forEach(a=>{if(i.degree(a)===0)return;const o=String(n[a]),l=r.get(o)||[];l.push(a),r.set(o,l)});const s=[...r.values()].map(a=>a.sort()).map(a=>({id:`cluster:${a[0]}`,nodeIds:a}));return t.length&&s.push({id:"cluster:unlinked",nodeIds:t.sort()}),s.sort((a,o)=>a.id.localeCompare(o.id))}function Nx(i,e){const t=new Map;return i.forEach(({sourceId:n,targetId:r})=>{const s=e.get(n)?.id,a=e.get(r)?.id;if(!s||!a||s===a)return;const o=ul(s,a),l=t.get(o);if(l){l.weight+=1;return}t.set(o,{source:s,target:a,weight:1})}),[...t.values()]}function Bo(i,e,t){return t!==Ur.KNOWLEDGE_LAYERS?{...e.anchor}:{x:e.anchor.x,y:e.anchor.y,z:Tx[i.kind]||0}}function Ux(i=[],e=[],t=Ur.CONSTELLATIONS){const n=ji(t),r=new Map(i.filter(cl).map(({id:l,kind:c})=>[l,c||"thought"])),s=[...r.entries()].map(([l,c])=>`${l}:${c}`).sort(),a=new Set(r.keys()),o=e.filter(({sourceId:l,targetId:c})=>typeof l=="string"&&typeof c=="string"&&l!==c&&a.has(l)&&a.has(c)).map(({sourceId:l,targetId:c})=>ul(l,c)).sort();return`${n}|${s.join(",")}|${o.join(",")}`}function Fx(i=[],e=[],t=Ur.CONSTELLATIONS){const n=ji(t),r=i.filter(cl),s=[...new Set(r.map(({id:g})=>g))].sort(),a=new Set(s),o=e.filter(({sourceId:g,targetId:f})=>typeof g=="string"&&typeof f=="string"&&g!==f&&a.has(g)&&a.has(f));if(!s.length)return{clusters:[],clusterByNodeId:new Map,interClusterLinks:[],nodeLayoutById:new Map};const l=Lx(s,o),c=Ix(l,s).map(g=>({...g,radius:Cs(g.nodeIds.length)})),h=new Map;c.forEach(g=>{g.nodeIds.forEach(f=>h.set(f,g))});const d=Nx(o,h),u=Dx(c,d),p=new Map(u.map(g=>[g.id,g]));c.forEach(g=>{g.anchor=p.get(g.id)||{x:0,y:0,z:0}});const v=new Map(r.map(g=>[g.id,g])),T=new Map(s.map(g=>{const f=h.get(g),A=v.get(g);return[g,{clusterId:f.id,clusterAnchor:Bo(A,f,n)}]}));return{clusters:c,clusterByNodeId:h,interClusterLinks:d,nodeLayoutById:T}}function Ox(i,{node:e,anchorNodeId:t,mode:n=Ur.CONSTELLATIONS}={}){const r=i?.clusterByNodeId?.get(t),s=i?.nodeLayoutById?.get(t);if(!r||!s||!cl(e))return null;const a=ji(n);if(r.id==="cluster:unlinked"){const u=r.nodeIds.filter(E=>E!==t),p=[t,e.id].sort(),v={...r,id:`cluster:${p[0]}`,nodeIds:p,radius:Cs(p.length),anchor:{...r.anchor}},T=u.length?{...r,nodeIds:u,radius:Cs(u.length)}:null,g=i.clusters.filter(E=>E.id!==r.id).concat(T?[T,v]:[v]).sort((E,_)=>E.id.localeCompare(_.id)),f=new Map(i.clusterByNodeId);u.forEach(E=>f.set(E,T)),p.forEach(E=>f.set(E,v));const A=new Map(i.nodeLayoutById);return A.set(t,{...s,clusterId:v.id}),A.set(e.id,{clusterId:v.id,clusterAnchor:Bo(e,v,a)}),{...i,clusters:g,clusterByNodeId:f,nodeLayoutById:A}}const o=[...new Set([...r.nodeIds,e.id])].sort(),l={...r,nodeIds:o,radius:Cs(o.length)},c=i.clusters.map(u=>u.id===l.id?l:u),h=new Map(i.clusterByNodeId);o.forEach(u=>h.set(u,l));const d=new Map(i.nodeLayoutById);return d.set(e.id,{clusterId:l.id,clusterAnchor:Bo(e,l,a)}),{...i,clusters:c,clusterByNodeId:h,nodeLayoutById:d}}const Yc=Object.freeze({tight:72,normal:118,loose:190}),Bx=460,ka=Object.freeze({x:72,y:-36,z:48}),Gx=.22,zx=.9;function wr(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function Kc(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function kx(i,e=0){const t=Kc(`${i}:x`)/4294967295,n=Kc(`${i}:y`)/4294967295,r=42+Math.sqrt(e+1)*18,s=t*Math.PI*2,a=Math.acos(2*n-1);return{x:Math.sin(a)*Math.cos(s)*r,y:Math.cos(a)*r,z:Math.sin(a)*Math.sin(s)*r}}function Vx({onTick:i=()=>{},onStable:e=()=>{}}={}){let t=[],n=[],r=null,s=null,a=null;const o=new Set;let l=!1;const c=nu([]).id(y=>y.id).distance(y=>y.internal?Yc[y.spacing]||Yc.normal:Bx).strength(y=>y.internal?.56:.1),h=iu([],3).force("links",c).force("charge",ru().strength(-58).distanceMax(620)).force("collision",au().radius(y=>y.radius+8).strength(.86)).force("cluster-x",hh(y=>y.clusterAnchor.x).strength(.026)).force("cluster-y",dh(y=>y.clusterAnchor.y).strength(.026)).force("cluster-z",mh(y=>y.clusterAnchor.z).strength(.026)).alphaDecay(.035).velocityDecay(.42).on("tick",()=>i(t,n)).on("end",()=>{const y=u();e(t,{transition:y})});function d(){o.forEach(y=>{const w=t.find(m=>m.id===y);!w||w.pinned||(w.fx=null,w.fy=null,w.fz=null,w.vx=0,w.vy=0,w.vz=0)}),o.clear()}function u(){const y=a;return d(),a=null,y}function p(y={},w={}){if(l)return;u();const m=new Map(t.map(j=>[j.id,j])),b=Array.isArray(y.nodes)?y.nodes:[],C=Array.isArray(y.links)?y.links:[],P=new Set(b.map(j=>j.id)),D=ji(y.layoutMode),W=su(w.transition),Y=b.find(j=>j.id===W.nodeId),B=m.get(W.anchorId),X=[...m.keys()].every(j=>P.has(j)),G=C.some(({sourceId:j,targetId:Le})=>j===W.anchorId&&Le===W.nodeId||Le===W.anchorId&&j===W.nodeId);a=W.kind===sn.INSERT_LINKED_NODE&&Y&&B&&!m.has(Y.id)&&b.length===m.size+1&&X&&G?W:{kind:W.kind===sn.REBUILD?sn.REBUILD:sn.RECONCILE};const ee=Ux(b,C,D);if(a.kind===sn.INSERT_LINKED_NODE&&r){const j=Ox(r,{node:Y,anchorNodeId:a.anchorId,mode:D});j?(r=j,s=ee):a={kind:sn.RECONCILE}}(a.kind===sn.REBUILD||ee!==s)&&(r=Fx(b,C,D),s=ee),t=b.map((j,Le)=>{const Ae=m.get(j.id),$=r.nodeLayoutById.get(j.id),ae=wr(j.pinnedPosition)?j.pinnedPosition:null,se=a.kind===sn.INSERT_LINKED_NODE&&j.id===a.nodeId&&B?{x:B.x+ka.x,y:B.y+ka.y,z:B.z+ka.z}:null,ve=a.kind===sn.INSERT_LINKED_NODE&&wr(Ae)?Ae:null,Ie=ae||se||ve||(wr(j)?j:null)||(wr(Ae)?Ae:null)||kx(j.id,Le),be=ae?.pinned===!0;return{...j,clusterId:$?.clusterId||"cluster:unlinked",clusterAnchor:$?.clusterAnchor||{x:0,y:0,z:0},x:Ie.x,y:Ie.y,z:Ie.z,vx:Number.isFinite(Ae?.vx)?Ae.vx:0,vy:Number.isFinite(Ae?.vy)?Ae.vy:0,vz:Number.isFinite(Ae?.vz)?Ae.vz:0,pinned:be,fx:be?Ie.x:null,fy:be?Ie.y:null,fz:be?Ie.z:null}}),a.kind===sn.INSERT_LINKED_NODE&&t.forEach(j=>{j.id===a.nodeId||j.pinned||!m.has(j.id)||(j.fx=j.x,j.fy=j.y,j.fz=j.z,o.add(j.id))});const ne=new Set(t.map(j=>j.id)),ie=new Map(t.map(j=>[j.id,j]));if(n=C.filter(j=>ne.has(j.sourceId)&&ne.has(j.targetId)&&j.sourceId!==j.targetId).map(j=>({...j,internal:ie.get(j.sourceId).clusterId===ie.get(j.targetId).clusterId,source:j.sourceId,target:j.targetId})),h.nodes(t),c.links(n),!t.length){h.stop(),i(t,n);const j=u();e(t,{transition:j});return}const le=a.kind===sn.INSERT_LINKED_NODE?Gx:zx;h.alpha(le).alphaTarget(0).restart()}function v(y){return t.find(w=>w.id===y)||null}function T(y){const w=v(y);return!w||l?null:(w.fx=w.x,w.fy=w.y,w.fz=w.z,h.alphaTarget(.16).restart(),w)}function g(y,w){const m=v(y);return!m||!wr(w)?null:(m.fx=w.x,m.fy=w.y,m.fz=w.z,m.x=w.x,m.y=w.y,m.z=w.z,i(t,n),m)}function f(y,{pinned:w}={}){const m=v(y);return!m||l?null:(m.pinned=w??m.pinned,m.pinned?(m.fx=m.x,m.fy=m.y,m.fz=m.z):(m.fx=null,m.fy=null,m.fz=null),h.alphaTarget(0).alpha(.24).restart(),m)}function A(y,w){const m=v(y);return!m||l?null:(m.pinned=!!w,m.pinned?(m.fx=m.x,m.fy=m.y,m.fz=m.z):(m.fx=null,m.fy=null,m.fz=null),h.alpha(.28).restart(),m)}function E(y=.32){!l&&t.length&&h.alpha(y).restart()}function _(){h.stop(),u()}function M(){l=!0,h.stop(),u(),h.on("tick",null).on("end",null),t=[],n=[]}return{beginDrag:T,dispose:M,dragNode:g,endDrag:f,getLinks:()=>n,getNode:v,getNodes:()=>t,reheat:E,setGraph:p,setPinned:A,stop:_}}const si=Object.freeze({SELECT:0,BACK:1,FOCUS:2,FIT_ALL:3,LEFT_BUMPER:4,RIGHT_BUMPER:5,LEFT_TRIGGER:6,RIGHT_TRIGGER:7}),Hx=.14,Va=.05;function Zc(i){return Number.isFinite(i)?i:0}function Ha(i){return i?Number.isFinite(i.value)?i.value:i.pressed?1:0:0}function Wx(i){const e=Math.abs(i);return e<=Va?0:Math.sign(i)*((e-Va)/(1-Va))}function Jc(i,e,t=Hx){const n=Zc(i),r=Zc(e),s=Math.hypot(n,r);if(s<=t)return{x:0,y:0};const a=Math.min(1,(s-t)/Math.max(1e-4,1-t));return{x:n/s*a,y:r/s*a}}function Xx(i,e=[]){const t=Array.from(i||[]).find(s=>s?.connected&&s.mapping==="standard");if(!t)return null;const n=Array.from(t.buttons||[]).map(s=>!!(s?.pressed||Ha(s)>.5)),r=s=>!!(n[s]&&!e[s]);return{index:t.index,leftStick:Jc(t.axes?.[0],t.axes?.[1]),rightStick:Jc(t.axes?.[2],t.axes?.[3]),roll:Number(n[si.RIGHT_BUMPER])-Number(n[si.LEFT_BUMPER]),thrust:Wx(Ha(t.buttons?.[si.RIGHT_TRIGGER])-Ha(t.buttons?.[si.LEFT_TRIGGER])),selectPressed:r(si.SELECT),backPressed:r(si.BACK),focusPressed:r(si.FOCUS),fitAllPressed:r(si.FIT_ALL),buttons:n}}const rh=60,$x=8e3,qx=8,Yx=5,Kx=280,Zx=.05,Jx=1.15,Qx=90,jx=1600,ev=.05,Qc=1.8,tv=1.6,nv=2200,iv=7361989,rv=2394864,sv=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),jc=Object.freeze({thought:7361989,observation:2389930,excerpt:5860764,question:10512906,hypothesis:8014784,quote:10702700,link:2522486,research_result:3569754}),eu=Object.freeze({thought:"#7055c5",observation:"#2477aa",excerpt:"#596d9c",question:"#a06a0a",hypothesis:"#7a4bc0",quote:"#a34f6c",link:"#267d76",research_result:"#36785a"});function yi(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function Go(i){return Number.isFinite(i)?Math.atan2(Math.sin(i),Math.cos(i)):0}function sh(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function av(i){const e=sh(i);return!yi(e?.position)||!yi(e?.target)?null:{...e,roll:Go(e.roll)}}function tu(i){const e=sh(i);return e?.version!==1||typeof e.positions!="object"?{}:Object.fromEntries(Object.entries(e.positions).filter(([,t])=>yi(t)).slice(0,Tr))}function ov(i){return Array.from({length:rh},()=>{const e=document.createElement("span");return e.className="spatial-label",e.hidden=!0,i.append(e),e})}function Ss(i,e){return typeof i=="object"&&i?i.id:e}function cv({container:i,theme:e="light",storageKey:t,layoutStorageKey:n,layoutMode:r=Ur.CONSTELLATIONS,onThoughtSelect:s=()=>{},onConnectionTargetToggle:a=()=>{},onThoughtActivate:o=()=>{},onThoughtMove:l=()=>{},onDismissRequest:c=()=>{},onError:h=()=>{}}){const d=new Ad,u=new hn(48,1,1,1e4);u.up.set(0,1,0);const p=new $_({alpha:!0,antialias:!0,powerPreference:"high-performance"});p.outputColorSpace=an,p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.domElement.className="spatial-canvas",p.domElement.setAttribute("aria-hidden","true");const v=document.createElement("div");v.className="spatial-label-layer";const T=ov(v),g=document.createElement("span");g.className="spatial-gamepad-reticle",g.setAttribute("aria-hidden","true"),i.prepend(p.domElement,v,g);const f=new Y_(u,p.domElement);f.enableDamping=!0,f.dampingFactor=.075,f.minDistance=90,f.maxDistance=5e3,f.minPolarAngle=Cn.degToRad(10),f.maxPolarAngle=Cn.degToRad(170),f.screenSpacePanning=!0;const A=av(t);A?(u.position.set(A.position.x,A.position.y,A.position.z),f.target.set(A.target.x,A.target.y,A.target.z)):(u.position.set(0,160,720),f.target.set(0,0,0)),f.update();const E=new tl(1,2),_=new Fs({color:16777215}),M=new Kl(E,_,Tr);M.instanceMatrix.setUsage(Al),M.frustumCulled=!1,M.count=0,d.add(M);const y=new Fs({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),w=new Kl(E,y,Tr);w.instanceMatrix.setUsage(Al),w.frustumCulled=!1,w.count=0,d.add(w);const m=new on,b=new Lo({color:e==="dark"?11183293:9277866,transparent:!0,opacity:e==="dark"?.5:.42}),C=new ec(m,b);C.frustumCulled=!1,d.add(C);const P=new on,D=new Lo({color:e==="dark"?10323183:7361989,transparent:!0,opacity:.9}),W=new ec(P,D);W.frustumCulled=!1,d.add(W);const Y=new Yd,B=new Xe,X=new _t,G=new N,q=new N(1,1,1),ee=new Jn,ne=new at,ie=new at(e==="dark"?1512735:14605290),le=new at(16777215),j=new _t,Le=new jo,Ae=new N,$=new Hn,ae=new N,se=new N,ve=new N,Ie=new N,be=new N,rt=new N,ke=new No;let $e=[],je=[],Ve=new Map,yt=[],At=new Map,et=null,lt=null,ct=new Set,He=null,I=!1,Ct=null,Oe=null,R=null,x=null,O=null,V=!1,K=null,ce=[],fe=null,Z=!1,te=0,me=null,Re=A?.roll??0,ge=!1,he=ji(r),Ne=tu(`${n}${he}`),Be=!A,We=!1,L=!0,ue=!0;const J=new Set;function _e({settled:F=!1}={}){const Q=F&&R?R.toPosition:u.position,oe=F&&R?R.toTarget:f.target;return{position:{x:Q.x,y:Q.y,z:Q.z},target:{x:oe.x,y:oe.y,z:oe.z},roll:Re}}function xe(){try{localStorage.setItem(t,JSON.stringify(_e()))}catch{}}function re(F=$e){Ne=Object.fromEntries(F.slice(0,Tr).map(Q=>[Q.id,{x:Math.round(Q.x*100)/100,y:Math.round(Q.y*100)/100,z:Math.round(Q.z*100)/100}]));try{localStorage.setItem(`${n}${he}`,JSON.stringify({version:1,positions:Ne}))}catch{}}function Pe(){ct=new Set,et&&je.forEach(F=>{const Q=Ss(F.source,F.sourceId),oe=Ss(F.target,F.targetId);Q===et&&ct.add(oe),oe===et&&ct.add(Q)})}function pe(){!I||Ct!==null||(Ct=requestAnimationFrame(De))}function Et(F){e=F==="dark"?"dark":"light";const Q=e==="dark";ie.set(Q?1512735:14605290),b.color.set(Q?11183293:9277866),b.opacity=Q?.5:.42,D.color.set(Q?10323183:7361989),b.needsUpdate=!0,D.needsUpdate=!0,L=!0,ue=!0,pe()}function mt(){if(x?.kind!==sn.INSERT_LINKED_NODE)return;const F=Ve.get(x.anchorId);if(!F)return;const Q=new N(F.x,F.y,F.z),oe=Q.clone().sub(x.previousPosition);oe.lengthSq()>1e-6&&(u.position.add(oe),f.target.add(oe)),x.previousPosition.copy(Q)}const bt=Vx({onTick(F,Q){$e=F,je=Q,Ve=new Map($e.map(oe=>[oe.id,oe])),mt(),Pe(),L=!0,ue=!0,pe()},onStable(F,{transition:Q}={}){if(re(F),(Be||We)&&F.length&&(Be=!1,We=!1,Pt()),x){const oe=Q?.nodeId===x.nodeId;x=null,oe&&xe()}pe()}});function en(F,Q){B.set(F,Q),u.updateMatrixWorld(),Y.setFromCamera(B,u)}function Br(F,Q){en(F,Q);const[oe]=Y.intersectObject(w);return oe?.instanceId===void 0?null:yt[oe.instanceId]||null}function Gr(F){const Q=p.domElement.getBoundingClientRect();en((F.clientX-Q.left)/Math.max(1,Q.width)*2-1,-((F.clientY-Q.top)/Math.max(1,Q.height))*2+1)}function wi(F){Gr(F);const[Q]=Y.intersectObject(w);return Q?.instanceId===void 0?null:yt[Q.instanceId]||null}function cr(){L&&($e.forEach(F=>{const Q=At.get(F.id);if(Q===void 0)return;const oe=F.id===et,Ye=F.id===lt,Je=F.id===He?.sourceId,Ce=He?.targetIds.has(F.id)===!0,ot=!!(He&&!Je&&!Ce),Dt=!!(et&&!oe&&!ct.has(F.id)),Mt=ot||!He&&Dt,kt=Je?1.38:Ce?1.23:oe?1.34:Ye?1.17:Mt?.76:1,Bt=Math.max(5,F.radius||7);G.set(F.x,F.y,F.z),q.setScalar(Bt*kt),X.compose(G,ee,q),M.setMatrixAt(Q,X),q.setScalar(Bt*kt+qx),X.compose(G,ee,q),w.setMatrixAt(Q,X),ne.setHex(Je?iv:Ce?rv:jc[F.kind]||jc.thought),Mt?ne.lerp(ie,.68):oe?ne.lerp(le,.2):Ye&&ne.lerp(le,.1),M.setColorAt(Q,ne)}),M.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere(),M.instanceColor&&(M.instanceColor.needsUpdate=!0),L=!1)}function $s(){if(!ue)return;const F=[],Q=[];if(je.slice(0,$x).forEach(oe=>{const Ye=typeof oe.source=="object"?oe.source:Ve.get(oe.sourceId),Je=typeof oe.target=="object"?oe.target:Ve.get(oe.targetId);if(!Ye||!Je)return;const Ce=Ye.id===He?.sourceId,ot=He?.targetIds.has(Je.id)===!0;if(Ce&&!ot)return;(!!(Ce&&ot)||!!(et&&(Ye.id===et||Je.id===et))?Q:F).push(Ye.x,Ye.y,Ye.z,Je.x,Je.y,Je.z)}),He){const oe=Ve.get(He.sourceId),Ye=new Set(je.filter(Je=>Ss(Je.source,Je.sourceId)===He.sourceId).map(Je=>Ss(Je.target,Je.targetId)));oe&&He.targetIds.forEach(Je=>{if(Ye.has(Je))return;const Ce=Ve.get(Je);Ce&&Q.push(oe.x,oe.y,oe.z,Ce.x,Ce.y,Ce.z)})}m.setAttribute("position",new Xt(F,3)),P.setAttribute("position",new Xt(Q,3)),b.opacity=et||He?.1:.42,ue=!1}function zr(){j.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),Le.setFromProjectionMatrix(j);const F=Math.max(1,i.clientWidth),Q=Math.max(1,i.clientHeight),oe=$e.filter(Ce=>(G.set(Ce.x,Ce.y,Ce.z),Le.containsPoint(G))).sort((Ce,ot)=>{const Dt=Bt=>Bt.id===He?.sourceId?0:He?.targetIds.has(Bt.id)?1:Bt.id===et?0:ct.has(Bt.id)?2:Bt.id===lt?3:4,Mt=Dt(Ce)-Dt(ot);if(Mt)return Mt;const kt=(ot.connectionCount||0)-(Ce.connectionCount||0);return kt||u.position.distanceToSquared(Ce)-u.position.distanceToSquared(ot)}).filter(Ce=>He||!et||Ce.id===et||ct.has(Ce.id)||Ce.id===lt).map(Ce=>{Ae.set(Ce.x,Ce.y,Ce.z).project(u);const ot=u.position.distanceTo(Ce),Dt=Cn.clamp(760/Math.max(520,ot),.72,1);return{node:Ce,x:(Ae.x*.5+.5)*F,y:(-Ae.y*.5+.5)*Q,labelScale:Dt}}),Ye=[],Je=[];oe.some(Ce=>{if(Je.length>=rh)return!0;const{node:ot,x:Dt,y:Mt,labelScale:kt}=Ce,Bt=Cn.clamp(ot.text.length*6.4,42,220)*kt,St={left:Dt-Bt/2-7,right:Dt+Bt/2+7,top:Mt-34*kt,bottom:Mt-8*kt},Ci=Ye.some(Xr=>!(St.right<Xr.left||St.left>Xr.right||St.bottom<Xr.top||St.top>Xr.bottom)),oh=ot.id===He?.sourceId||He?.targetIds.has(ot.id)||ot.id===et||ot.id===lt;return(!Ci||oh)&&(Je.push(Ce),Ye.push(St)),!1}),T.forEach((Ce,ot)=>{const Dt=Je[ot];if(!Dt){Ce.hidden=!0;return}const{node:Mt,x:kt,y:Bt,labelScale:St}=Dt;Ce.hidden=!1,Ce.textContent=Mt.text,Ce.dataset.thoughtId=Mt.id,Ce.classList.toggle("is-selected",Mt.id===et),Ce.classList.toggle("is-neighbour",ct.has(Mt.id)),Ce.classList.toggle("is-connection-source",Mt.id===He?.sourceId),Ce.classList.toggle("is-connection-target",He?.targetIds.has(Mt.id)===!0),Ce.style.setProperty("--spatial-kind-color",eu[Mt.kind]||eu.thought),Ce.style.transform=`translate(-50%, calc(-100% - 12px)) translate3d(${kt}px, ${Bt}px, 0) scale(${St})`})}function kr(F){if(!R)return!1;const Q=Math.min(1,(F-R.startedAt)/R.duration),oe=1-(1-Q)**3;return u.position.lerpVectors(R.fromPosition,R.toPosition,oe),f.target.lerpVectors(R.fromTarget,R.toTarget,oe),Q<1?!0:(R=null,f.enabled=I&&!Oe,f.update(),xe(),!1)}function tn({persist:F=!0}={}){const Q=F&&V;J.clear(),O=null,V=!1,Q&&xe()}function ur(){const F=Number(J.has("KeyD")||J.has("ArrowRight"))-Number(J.has("KeyA")||J.has("ArrowLeft")),Q=Number(J.has("KeyW")||J.has("ArrowUp"))-Number(J.has("KeyS")||J.has("ArrowDown"));return{horizontal:F,vertical:Q}}function hr(F,Q,oe,Ye){if(!F&&!Q&&!oe)return!1;u.getWorldDirection(ve).normalize(),Ie.set(1,0,0).applyQuaternion(u.quaternion).normalize(),be.set(0,1,0).applyQuaternion(u.quaternion).normalize(),rt.copy(Ie).multiplyScalar(F).addScaledVector(be,Q).addScaledVector(ve,oe);const Je=rt.length();if(Je<1e-4)return!1;Je>1&&rt.divideScalar(Je);const Ce=Cn.clamp(u.position.distanceTo(f.target)*Jx,Qx,jx);return rt.multiplyScalar(Ce*Ye),u.position.add(rt),f.target.add(rt),!0}function Vr(F){if(!I||Oe||R||!J.size)return O=F,!1;const Q=O??F;O=F;const oe=Math.min(Zx,Math.max(0,(F-Q)/1e3));if(!oe)return!0;const{horizontal:Ye,vertical:Je}=ur(),Ce=hr(Ye,Je,0,oe);return Ce&&(V=!0),Ce}function Ti(F,Q,oe){if(!F&&!Q)return!1;const Ye=u.position.distanceTo(f.target);if(Ye<.001)return!1;const Je=Math.cos(Re),Ce=Math.sin(Re),ot=F*Je+Q*Ce,Dt=Q*Je-F*Ce;return u.getWorldDirection(ve).normalize(),ke.setFromVector3(ve),ke.theta-=ot*Qc*oe,ke.phi+=Dt*Qc*oe,ke.phi=Cn.clamp(ke.phi,f.minPolarAngle,f.maxPolarAngle),ve.setFromSpherical(ke),f.target.copy(u.position).addScaledVector(ve,Ye),!0}function Hr(F,Q){return F?(Re=Go(Re+F*tv*Q),!0):!1}function Ai(){u.lookAt(f.target),u.rotateZ(Re)}function Ri(F){F!==me&&(lt===me&&(lt=null),me=F,F&&(lt=F),L=!0,pe())}function Fn(){i.classList.remove("is-gamepad-active"),te=0,Ri(null)}function qs(F){te=F,i.classList.add("is-gamepad-active")}function Wr(){Ri(Br(0,0))}function Ys(){const F=Br(0,0);return Ri(F),F?He?(F!==He.sourceId&&a(F),!0):Ze(F):!1}function hi({persist:F=!0}={}){K!==null&&cancelAnimationFrame(K),K=null,ce=[],fe=null,F&&Z&&xe(),Z=!1,Fn()}function S(F=[]){try{return Xx(navigator.getGamepads?.()||[],F)}catch{return null}}function U(F){if(K=null,!I||document.hidden)return;const Q=S(ce);if(!Q){hi();return}ce=Q.buttons;const oe=fe??F;fe=F;const Ye=Math.min(ev,Math.max(0,(F-oe)/1e3)),Je=!!(Q.leftStick.x||Q.leftStick.y||Q.rightStick.x||Q.rightStick.y||Q.thrust||Q.roll),Ce=!!(Q.selectPressed||Q.backPressed||Q.focusPressed||Q.fitAllPressed);(Je||Ce)&&qs(F),te&&F-te>nv&&Fn(),Je&&R&&(R=null,f.enabled=I&&!Oe);let Dt=!1;if(!Oe&&!ge&&!J.size&&Ye){const Mt=hr(Q.leftStick.x,-Q.leftStick.y,Q.thrust,Ye),kt=Ti(Q.rightStick.x,Q.rightStick.y,Ye),Bt=Hr(Q.roll,Ye);Dt=Mt||kt||Bt}!Oe&&!ge&&(Q.fitAllPressed&&Pt(),Q.focusPressed&&et&&ht(et),Q.selectPressed&&Ys(),Q.backPressed&&c()),Dt?(Z=!0,Wr(),pe()):Z?(Z=!1,xe()):i.classList.contains("is-gamepad-active")&&Wr(),K=requestAnimationFrame(U)}function H(){if(!I||document.hidden||K!==null||typeof navigator.getGamepads!="function")return;const F=S();F&&(ce=F.buttons,fe=null,K=requestAnimationFrame(U))}function z(F){F.gamepad?.mapping==="standard"&&H()}function k(){hi(),H()}function Me(){Fn(),i.focus({preventScroll:!0})}function we(F){!I||Oe||He||F.target!==i||!sv.has(F.code)||(F.preventDefault(),F.stopPropagation(),Fn(),R&&(R=null,f.enabled=I&&!Oe),J.add(F.code),O=null,pe())}function ye(F){J.delete(F.code)&&!J.size&&V&&(V=!1,xe())}function De(F){if(Ct=null,!I||document.hidden)return;const Q=kr(F),oe=Vr(F),Ye=f.update();Ai(),u.updateMatrixWorld(),cr(),$s(),zr(),p.render(d,u),(Q||oe||Ye)&&pe()}function Ue({nodes:F=[],links:Q=[],layoutMode:oe=he,fitAfterLayout:Ye=!1},{transition:Je=null}={}){const Ce=su(Je),ot=Ce.kind===sn.INSERT_LINKED_NODE?Ve.get(Ce.anchorId):null;x=ot?{...Ce,previousPosition:new N(ot.x,ot.y,ot.z)}:null;const Dt=ji(oe);Dt!==he&&(he=Dt,Ne=tu(`${n}${he}`)),We||=Ye;const Mt=F.slice(0,Tr).map(St=>{const Ci=Ne[St.id];return{...St,...!yi(St.pinnedPosition)&&yi(Ci)?Ci:{},radius:Math.max(5,Number.isFinite(St.radius)?St.radius:7)}}),kt=new Set(Mt.map(St=>St.id)),Bt=Q.filter(St=>kt.has(St.sourceId)&&kt.has(St.targetId));yt=Mt.map(St=>St.id),At=new Map(yt.map((St,Ci)=>[St,Ci])),M.count=Mt.length,w.count=Mt.length,bt.setGraph({nodes:Mt,links:Bt,layoutMode:he},{transition:Ce}),$e=bt.getNodes(),je=bt.getLinks(),Ve=new Map($e.map(St=>[St.id,St])),Ve.has(et)||(et=null),Pe(),L=!0,ue=!0,Be&&$e.length&&Pt(),pe()}function qe(F){et=Ve.has(F)?F:null,Pe(),L=!0,ue=!0,pe()}function Ze(F){return Ve.has(F)?(s(F),!0):!1}function Fe(F){He=F&&typeof F.sourceId=="string"?{sourceId:F.sourceId,targetIds:new Set(F.targetIds||[])}:null,p.domElement.classList.toggle("is-connection-selecting",!!He),L=!0,ue=!0,pe()}function ut(){const F=u.position.clone(),Q=f.target.clone(),oe=f.enableDamping;R=null,x=null,Be=!1,We=!1,tn({persist:!1}),f.enableDamping=!1,f.update(),u.position.copy(F),f.target.copy(Q),f.update(),f.enableDamping=oe}function vt(F,Q,oe=Kx){ut(),R={fromPosition:u.position.clone(),fromTarget:f.target.clone(),toPosition:F.clone(),toTarget:Q.clone(),duration:oe,startedAt:performance.now()},f.enabled=!1,pe()}function wt(F){if(Oe||!yi(F?.position)||!yi(F?.target))return!1;const Q=new N().copy(F.position),oe=new N().copy(F.target);return Q.distanceToSquared(oe)<1e-6?!1:(Re=Go(F.roll),vt(Q,oe),!0)}function ht(F){const Q=Ve.get(F);if(!Q)return!1;ve.copy(u.position).sub(f.target),ve.lengthSq()<.001&&ve.set(0,0,1),ve.normalize();const oe=new N(Q.x,Q.y,Q.z),Ye=Cn.clamp(u.position.distanceTo(f.target),240,520),Je=oe.clone().addScaledVector(ve,Ye);return vt(Je,oe),!0}function Pt(){if(!$e.length)return!1;const F=new ui;$e.forEach(Ce=>{const ot=Math.max(5,Ce.radius||7);F.expandByPoint(new N(Ce.x-ot,Ce.y-ot,Ce.z-ot)),F.expandByPoint(new N(Ce.x+ot,Ce.y+ot,Ce.z+ot))});const Q=F.getBoundingSphere(new bi);ve.copy(u.position).sub(f.target),ve.lengthSq()<.001&&ve.set(0,0,1),ve.normalize();const oe=Cn.degToRad(u.fov*.5),Ye=Cn.clamp(Q.radius/Math.max(.2,Math.sin(oe))*1.18,220,4200),Je=Q.center.clone().addScaledVector(ve,Ye);return vt(Je,Q.center),!0}function Te(){Re=0,vt(new N(0,160,720),new N(0,0,0))}function $t(F){const Q=Ve.get(F);return Q?{x:Q.x,y:Q.y,z:Q.z}:null}function nt(F,Q){const oe=bt.setPinned(F,Q);return oe?(pe(),{x:oe.x,y:oe.y,z:oe.z,pinned:oe.pinned}):null}function qt(){const F=Math.max(1,i.clientWidth),Q=Math.max(1,i.clientHeight);p.setSize(F,Q,!1),u.aspect=F/Q,u.updateProjectionMatrix(),pe()}function ln(){I=!0,f.enabled=!Oe&&!R,qt(),bt.reheat(.22),H()}function pn(){hi(),tn(),I=!1,f.enabled=!1,bt.stop(),Oe=null,p.domElement.classList.remove("is-node-dragging"),Ct!==null&&cancelAnimationFrame(Ct),Ct=null}function Tn(F,{cancelled:Q=!1}={}){if(!Oe||F.pointerId!==Oe.pointerId)return;F.preventDefault(),F.stopImmediatePropagation();const oe=Oe;Oe=null,p.domElement.classList.remove("is-node-dragging"),p.domElement.hasPointerCapture(F.pointerId)&&p.domElement.releasePointerCapture(F.pointerId);let Ye=bt.getNode(oe.thoughtId);oe.started&&(Q&&bt.dragNode(oe.thoughtId,oe.origin),Ye=bt.endDrag(oe.thoughtId,{pinned:Q?oe.wasPinned:void 0})),f.enabled=I&&!R,!Q&&oe.moved&&Ye?.pinned&&l(Ye.id,{x:Ye.x,y:Ye.y,z:Ye.z,pinned:!0}),pe()}function dt(F){if(!I||F.button!==0)return;const Q=wi(F);if(!Q)return;if(He){F.preventDefault(),F.stopImmediatePropagation(),Q!==He.sourceId&&a(Q);return}const oe=bt.getNode(Q);oe&&(F.preventDefault(),F.stopImmediatePropagation(),Ze(Q),f.enabled=!1,p.domElement.setPointerCapture(F.pointerId),p.domElement.classList.add("is-node-dragging"),G.set(oe.x,oe.y,oe.z),u.getWorldDirection(ve).normalize(),$.setFromNormalAndCoplanarPoint(ve,G),Y.ray.intersectPlane($,ae)?se.copy(ae).sub(G):se.set(0,0,0),Oe={pointerId:F.pointerId,thoughtId:Q,startX:F.clientX,startY:F.clientY,moved:!1,started:!1,wasPinned:oe.pinned,origin:{x:oe.x,y:oe.y,z:oe.z}},pe())}function Tt(F){if(Fn(),!Oe){const Ye=I?wi(F):null;Ye!==lt&&(lt=Ye,L=!0,p.domElement.classList.toggle("is-node-hovered",!!lt),pe());return}if(F.pointerId!==Oe.pointerId||(F.preventDefault(),F.stopImmediatePropagation(),Gr(F),!Y.ray.intersectPlane($,ae)))return;const Q=Math.hypot(F.clientX-Oe.startX,F.clientY-Oe.startY);if(!Oe.started&&Q<Yx)return;Oe.started||(bt.beginDrag(Oe.thoughtId),Oe.started=!0);const oe=ae.sub(se);bt.dragNode(Oe.thoughtId,{x:oe.x,y:oe.y,z:oe.z}),Oe.moved=!0}function mn(F){if(He)return;const Q=wi(F);Q&&(F.preventDefault(),F.stopImmediatePropagation(),o(Q))}function ft(){Oe||!lt||(lt=null,L=!0,p.domElement.classList.remove("is-node-hovered"),pe())}function gn(F){Tn(F,{cancelled:!0})}function On(){ge=!0,Fn()}function dr(){ge=!1,xe()}function gl(){tn(),hi()}function _l(){if(document.hidden){tn(),hi();return}H(),pe()}function xl(F){F.preventDefault(),h("3D rendering is unavailable. Reload the page to try again.")}function ah(){pn(),tn({persist:!1}),bt.dispose(),f.removeEventListener("change",pe),f.removeEventListener("start",On),f.removeEventListener("end",dr),f.dispose(),E.dispose(),_.dispose(),y.dispose(),m.dispose(),b.dispose(),P.dispose(),D.dispose(),p.dispose(),p.domElement.removeEventListener("pointerdown",Me,!0),p.domElement.removeEventListener("pointerdown",dt,!0),p.domElement.removeEventListener("pointermove",Tt,!0),p.domElement.removeEventListener("pointerup",Tn,!0),p.domElement.removeEventListener("pointercancel",gn,!0),p.domElement.removeEventListener("pointerleave",ft),p.domElement.removeEventListener("dblclick",mn,!0),p.domElement.removeEventListener("webglcontextlost",xl),document.removeEventListener("visibilitychange",_l),i.removeEventListener("keydown",we),window.removeEventListener("keyup",ye),window.removeEventListener("blur",gl),window.removeEventListener("focus",H),window.removeEventListener("gamepadconnected",z),window.removeEventListener("gamepaddisconnected",k),p.domElement.remove(),v.remove(),g.remove()}return f.addEventListener("change",pe),f.addEventListener("start",On),f.addEventListener("end",dr),p.domElement.addEventListener("pointerdown",Me,!0),p.domElement.addEventListener("pointerdown",dt,!0),p.domElement.addEventListener("pointermove",Tt,!0),p.domElement.addEventListener("pointerup",Tn,!0),p.domElement.addEventListener("pointercancel",gn,!0),p.domElement.addEventListener("pointerleave",ft),p.domElement.addEventListener("dblclick",mn,!0),p.domElement.addEventListener("webglcontextlost",xl),document.addEventListener("visibilitychange",_l),i.addEventListener("keydown",we),window.addEventListener("keyup",ye),window.addEventListener("blur",gl),window.addEventListener("focus",H),window.addEventListener("gamepadconnected",z),window.addEventListener("gamepaddisconnected",k),{activate:ln,deactivate:pn,dispose:ah,fitAll:Pt,focusThought:ht,getCameraState:_e,getThoughtPosition:$t,resetView:Te,restoreCameraState:wt,resize:qt,setGraph:Ue,setConnectionSelection:Fe,setSelectedThought:qe,setTheme:Et,setThoughtPinned:nt}}export{cv as createSpatialView};
