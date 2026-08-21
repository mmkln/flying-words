const Ui={ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xc=0,So=1,qc=2,Xr=1,Yc=2,nr=3,Qn=0,Wt=1,In=2,Un=0,Fi=1,Eo=2,yo=3,bo=4,Zc=5,si=100,Kc=101,$c=102,Jc=103,Qc=104,jc=200,eh=201,th=202,nh=203,Js=204,Qs=205,ih=206,rh=207,sh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,js=0,ea=1,ta=2,zi=3,na=4,ia=5,ra=6,sa=7,$l=0,fh=1,dh=2,En=0,Jl=1,Ql=2,jl=3,ec=4,tc=5,nc=6,ic=7,rc=300,ci=301,Gi=302,_s=303,gs=304,hs=306,aa=1e3,Nn=1001,oa=1002,Dt=1003,ph=1004,gr=1005,Ft=1006,xs=1007,oi=1008,an=1009,sc=1010,ac=1011,cr=1012,Wa=1013,bn=1014,fn=1015,Bn=1016,Xa=1017,qa=1018,hr=1020,oc=35902,lc=35899,cc=1021,hc=1022,dn=1023,zn=1026,li=1027,Ya=1028,Za=1029,hi=1030,Ka=1031,$a=1033,qr=33776,Yr=33777,Zr=33778,Kr=33779,la=35840,ca=35841,ha=35842,ua=35843,fa=36196,da=37492,pa=37496,ma=37488,_a=37489,Qr=37490,ga=37491,xa=37808,va=37809,Ma=37810,Sa=37811,Ea=37812,ya=37813,ba=37814,Ta=37815,Aa=37816,wa=37817,Ra=37818,Ca=37819,Pa=37820,Da=37821,La=36492,Ia=36494,Na=36495,Ua=36283,Fa=36284,jr=36285,Oa=36286,mh=3200,To=0,_h=1,$n="",Jt="srgb",es="srgb-linear",ts="linear",rt="srgb",gi=7680,Ao=519,gh=512,xh=513,vh=514,Ja=515,Mh=516,Sh=517,Qa=518,Eh=519,wo=35044,Ro=35048,Co="300 es",Sn=2e3,ns=2001;function yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bh(){const n=is("canvas");return n.style.display="block",n}const Po={};function Do(...n){const e="THREE."+n.shift();console.log(e,...n)}function uc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=uc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=uc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oi(...n){const e=n.join(" ");e in Po||(Po[e]=!0,Ne(...n))}function Th(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ah={[js]:ea,[ta]:ra,[na]:sa,[zi]:ia,[ea]:js,[ra]:ta,[sa]:na,[ia]:zi};class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const or=Math.PI/180,ur=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function ja(n,e){return(n%e+e)%e}function wh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rh(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function Ch(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function Ph(n,e=1){return e-Math.abs(ja(n,e*2)-e)}function Dh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ih(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nh(n,e){return n+Math.random()*(e-n)}function Uh(n){return n*(.5-Math.random())}function Fh(n){n!==void 0&&(Lo=n);let e=Lo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Oh(n){return n*or}function Bh(n){return n*ur}function zh(n){return(n&n-1)===0&&n!==0}function Gh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hh(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),f=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*f,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*f,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*f,o*c);break;case"XZX":n.set(o*f,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*f,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*f,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ii={DEG2RAD:or,RAD2DEG:ur,generateUUID:Wi,clamp:Ye,euclideanModulo:ja,mapLinear:wh,inverseLerp:Rh,lerp:lr,damp:Ch,pingpong:Ph,smoothstep:Dh,smootherstep:Lh,randInt:Ih,randFloat:Nh,randFloatSpread:Uh,seededRandom:Fh,degToRad:Oh,radToDeg:Bh,isPowerOfTwo:zh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Hh,normalize:Bt,denormalize:Li},fo=class fo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fo.prototype.isVector2=!0;let Fe=fo;class Gn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[a+0],m=s[a+1],_=s[a+2],E=s[a+3];if(d!==E||l!==u||c!==m||f!==_){let p=l*u+c*m+f*_+d*E;p<0&&(u=-u,m=-m,_=-_,E=-E,p=-p);let h=1-o;if(p<.9995){const M=Math.acos(p),T=Math.sin(M);h=Math.sin(h*M)/T,o=Math.sin(o*M)/T,l=l*h+u*o,c=c*h+m*o,f=f*h+_*o,d=d*h+E*o}else{l=l*h+u*o,c=c*h+m*o,f=f*h+_*o,d=d*h+E*o;const M=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=M,c*=M,f*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+f*d+l*m-c*u,e[t+1]=l*_+f*u+c*d-o*m,e[t+2]=c*_+f*m+o*u-l*d,e[t+3]=f*_-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*d+c*m*_,this._y=c*m*d-u*f*_,this._z=c*f*_+u*m*d,this._w=c*f*d-u*m*_;break;case"YXZ":this._x=u*f*d+c*m*_,this._y=c*m*d-u*f*_,this._z=c*f*_-u*m*d,this._w=c*f*d+u*m*_;break;case"ZXY":this._x=u*f*d-c*m*_,this._y=c*m*d+u*f*_,this._z=c*f*_+u*m*d,this._w=c*f*d-u*m*_;break;case"ZYX":this._x=u*f*d-c*m*_,this._y=c*m*d+u*f*_,this._z=c*f*_-u*m*d,this._w=c*f*d+u*m*_;break;case"YZX":this._x=u*f*d+c*m*_,this._y=c*m*d+u*f*_,this._z=c*f*_-u*m*d,this._w=c*f*d-u*m*_;break;case"XZY":this._x=u*f*d-c*m*_,this._y=c*m*d-u*f*_,this._z=c*f*_+u*m*d,this._w=c*f*d+u*m*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],u=i+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const po=class po{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vs.copy(this).projectOnVector(e),this.sub(vs)}reflect(e){return this.sub(vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};po.prototype.isVector3=!0;let N=po;const vs=new N,Io=new Gn,mo=class mo{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],m=i[5],_=i[8],E=r[0],p=r[3],h=r[6],M=r[1],T=r[4],v=r[7],b=r[2],y=r[5],R=r[8];return s[0]=a*E+o*M+l*b,s[3]=a*p+o*T+l*y,s[6]=a*h+o*v+l*R,s[1]=c*E+f*M+d*b,s[4]=c*p+f*T+d*y,s[7]=c*h+f*v+d*R,s[2]=u*E+m*M+_*b,s[5]=u*p+m*T+_*y,s[8]=u*h+m*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,u=o*l-f*s,m=c*s-a*l,_=t*d+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=d*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=u*E,e[4]=(f*t-r*l)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(i*l-c*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ms.makeScale(e,t)),this}rotate(e){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ms.makeRotation(-e)),this}translate(e,t){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mo.prototype.isMatrix3=!0;let He=mo;const Ms=new He,No=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kh(){const n={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[es]:{primaries:e,whitePoint:i,transfer:ts,toXYZ:No,fromXYZ:Uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:No,fromXYZ:Uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const Ze=kh();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xi;class Wh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xi===void 0&&(xi=is("canvas")),xi.width=e.width,xi.height=e.height;const r=xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xh=0;class eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ss(r[a].image)):s.push(Ss(r[a]))}else s=Ss(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ss(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let qh=0;const Es=new N;class Vt extends jn{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Nn,r=Nn,s=Ft,a=oi,o=dn,l=an,c=Vt.DEFAULT_ANISOTROPY,f=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Wi(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Es).x}get height(){return this.source.getSize(Es).y}get depth(){return this.source.getSize(Es).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=rc;Vt.DEFAULT_ANISOTROPY=1;const _o=class _o{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],m=l[5],_=l[9],E=l[2],p=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-E)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+E)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(m+1)/2,b=(h+1)/2,y=(f+u)/4,R=(d+E)/4,x=(_+p)/4;return T>v&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=y/i,s=R/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=y/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=x/s),this.set(i,r,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-E)*(d-E)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-E)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_o.prototype.isVector4=!0;let St=_o;class Yh extends jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Vt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fc extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cs=class cs{constructor(e,t,i,r,s,a,o,l,c,f,d,u,m,_,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,d,u,m,_,E,p)}set(e,t,i,r,s,a,o,l,c,f,d,u,m,_,E,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=m,h[7]=_,h[11]=E,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*d,_=o*f,E=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=u-E*c,t[9]=-o*l,t[2]=E-u*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,m=l*d,_=c*f,E=c*d;t[0]=u+E*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=m*o-_,t[6]=E+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,m=l*d,_=c*f,E=c*d;t[0]=u-E*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*f,t[9]=E-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,m=a*d,_=o*f,E=o*d;t[0]=l*f,t[4]=_*c-m,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,_=o*l,E=o*c;t[0]=l*f,t[4]=E-u*d,t[8]=_*d+m,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*d+_,t[10]=u-E*d}else if(e.order==="XZY"){const u=a*l,m=a*c,_=o*l,E=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=u*d+E,t[5]=a*f,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*f,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,$h)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wn.crossVectors(i,Kt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wn.crossVectors(i,Kt)),Wn.normalize(),xr.crossVectors(Kt,Wn),r[0]=Wn.x,r[4]=xr.x,r[8]=Kt.x,r[1]=Wn.y,r[5]=xr.y,r[9]=Kt.y,r[2]=Wn.z,r[6]=xr.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],m=i[13],_=i[2],E=i[6],p=i[10],h=i[14],M=i[3],T=i[7],v=i[11],b=i[15],y=r[0],R=r[4],x=r[8],A=r[12],P=r[1],C=r[5],D=r[9],X=r[13],Z=r[2],O=r[6],q=r[10],H=r[14],J=r[3],j=r[7],se=r[11],ne=r[15];return s[0]=a*y+o*P+l*Z+c*J,s[4]=a*R+o*C+l*O+c*j,s[8]=a*x+o*D+l*q+c*se,s[12]=a*A+o*X+l*H+c*ne,s[1]=f*y+d*P+u*Z+m*J,s[5]=f*R+d*C+u*O+m*j,s[9]=f*x+d*D+u*q+m*se,s[13]=f*A+d*X+u*H+m*ne,s[2]=_*y+E*P+p*Z+h*J,s[6]=_*R+E*C+p*O+h*j,s[10]=_*x+E*D+p*q+h*se,s[14]=_*A+E*X+p*H+h*ne,s[3]=M*y+T*P+v*Z+b*J,s[7]=M*R+T*C+v*O+b*j,s[11]=M*x+T*D+v*q+b*se,s[15]=M*A+T*X+v*H+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],m=e[14],_=e[3],E=e[7],p=e[11],h=e[15],M=l*m-c*u,T=o*m-c*d,v=o*u-l*d,b=a*m-c*f,y=a*u-l*f,R=a*d-o*f;return t*(E*M-p*T+h*v)-i*(_*M-p*b+h*y)+r*(_*T-E*b+h*R)-s*(_*v-E*y+p*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],m=e[11],_=e[12],E=e[13],p=e[14],h=e[15],M=t*o-i*a,T=t*l-r*a,v=t*c-s*a,b=i*l-r*o,y=i*c-s*o,R=r*c-s*l,x=f*E-d*_,A=f*p-u*_,P=f*h-m*_,C=d*p-u*E,D=d*h-m*E,X=u*h-m*p,Z=M*X-T*D+v*C+b*P-y*A+R*x;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Z;return e[0]=(o*X-l*D+c*C)*O,e[1]=(r*D-i*X-s*C)*O,e[2]=(E*R-p*y+h*b)*O,e[3]=(u*y-d*R-m*b)*O,e[4]=(l*P-a*X-c*A)*O,e[5]=(t*X-r*P+s*A)*O,e[6]=(p*v-_*R-h*T)*O,e[7]=(f*R-u*v+m*T)*O,e[8]=(a*D-o*P+c*x)*O,e[9]=(i*P-t*D-s*x)*O,e[10]=(_*y-E*v+h*M)*O,e[11]=(d*v-f*y-m*M)*O,e[12]=(o*A-a*C-l*x)*O,e[13]=(t*C-i*A+r*x)*O,e[14]=(E*T-_*b-p*M)*O,e[15]=(f*b-d*T+u*M)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,u=s*c,m=s*f,_=s*d,E=a*f,p=a*d,h=o*d,M=l*c,T=l*f,v=l*d,b=i.x,y=i.y,R=i.z;return r[0]=(1-(E+h))*b,r[1]=(m+v)*b,r[2]=(_-T)*b,r[3]=0,r[4]=(m-v)*y,r[5]=(1-(u+h))*y,r[6]=(p+M)*y,r[7]=0,r[8]=(_+T)*R,r[9]=(p-M)*R,r[10]=(1-(u+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=vi.set(r[0],r[1],r[2]).length();const o=vi.set(r[4],r[5],r[6]).length(),l=vi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,f=1/o,d=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=f,ln.elements[5]*=f,ln.elements[6]*=f,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Sn,l=!1){const c=this.elements,f=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let _,E;if(l)_=s/(a-s),E=a*s/(a-s);else if(o===Sn)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===ns)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Sn,l=!1){const c=this.elements,f=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,E;if(l)_=1/(a-s),E=a/(a-s);else if(o===Sn)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===ns)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};cs.prototype.isMatrix4=!0;let ut=cs;const vi=new N,ln=new ut,Kh=new N(0,0,0),$h=new N(1,1,1),Wn=new N,xr=new N,Kt=new N,Fo=new ut,Oo=new Gn;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class to{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jh=0;const Bo=new N,Mi=new Gn,wn=new ut,vr=new N,qi=new N,Qh=new N,jh=new Gn,zo=new N(1,0,0),Go=new N(0,1,0),Vo=new N(0,0,1),Ho={type:"added"},eu={type:"removed"},Si={type:"childadded",child:null},ys={type:"childremoved",child:null};class Xt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new N,t=new ui,i=new Gn,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new He}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return Bo.copy(e).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(qi,vr,this.up):wn.lookAt(vr,qi,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(wn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),Si.child=e,this.dispatchEvent(Si),Si.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new N(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),h=this._getHandJoint(c,E);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=ja(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ts(a,s,e+1/3),this.g=Ts(a,s,e),this.b=Ts(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=dc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.workingToColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Jt){Ze.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Sr);const i=lr(Xn.h,Sr.h,t),r=lr(Xn.s,Sr.s,t),s=lr(Xn.l,Sr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Je;Je.NAMES=dc;class nu extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new N,Rn=new N,As=new N,Cn=new N,Ei=new N,yi=new N,ko=new N,ws=new N,Rs=new N,Cs=new N,Ps=new St,Ds=new St,Ls=new St;class un{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),Rn.subVectors(i,t),As.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(As),c=Rn.dot(Rn),f=Rn.dot(As),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ps.setScalar(0),Ds.setScalar(0),Ls.setScalar(0),Ps.fromBufferAttribute(e,t),Ds.fromBufferAttribute(e,i),Ls.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ps,s.x),a.addScaledVector(Ds,s.y),a.addScaledVector(Ls,s.z),a}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),Rn.subVectors(e,t),cn.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ei.subVectors(r,i),yi.subVectors(s,i),ws.subVectors(e,i);const l=Ei.dot(ws),c=yi.dot(ws);if(l<=0&&c<=0)return t.copy(i);Rs.subVectors(e,r);const f=Ei.dot(Rs),d=yi.dot(Rs);if(f>=0&&d<=f)return t.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Ei,a);Cs.subVectors(e,s);const m=Ei.dot(Cs),_=yi.dot(Cs);if(_>=0&&m<=_)return t.copy(s);const E=m*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(yi,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return ko.subVectors(s,r),o=(d-f)/(d-f+(m-_)),t.copy(r).addScaledVector(ko,o);const h=1/(p+E+u);return a=E*h,o=u*h,t.copy(i).addScaledVector(Ei,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),yr.subVectors(this.max,Yi),bi.subVectors(e.a,Yi),Ti.subVectors(e.b,Yi),Ai.subVectors(e.c,Yi),qn.subVectors(Ti,bi),Yn.subVectors(Ai,Ti),ti.subVectors(bi,Ai);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ti.z,ti.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ti.z,0,-ti.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ti.y,ti.x,0];return!Is(t,bi,Ti,Ai,yr)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,bi,Ti,Ai,yr))?!1:(br.crossVectors(qn,Yn),t=[br.x,br.y,br.z],Is(t,bi,Ti,Ai,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,Er=new ei,bi=new N,Ti=new N,Ai=new N,qn=new N,Yn=new N,ti=new N,Yi=new N,yr=new N,br=new N,ni=new N;function Is(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ni.fromArray(n,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),f=i.dot(ni);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const bt=new N,Tr=new Fe;let iu=0;class pn extends jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class pc extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mc extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ru=new ei,Zi=new N,Ns=new N;class di{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ru.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Ns)),this.expandByPoint(Zi.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let su=0;const nn=new ut,Us=new Xt,wi=new N,$t=new ei,Ki=new ei,Pt=new N;class Qt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Us.lookAt(e),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors($t.min,Ki.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,Ki.max),$t.expandByPoint(Pt)):($t.expandByPoint(Ki.min),$t.expandByPoint(Ki.max))}$t.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Pt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Pt.add(wi)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new N,l[x]=new N;const c=new N,f=new N,d=new N,u=new Fe,m=new Fe,_=new Fe,E=new N,p=new N;function h(x,A,P){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),u.fromBufferAttribute(s,x),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,P),f.sub(c),d.sub(c),m.sub(u),_.sub(u);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(C),o[x].add(E),o[A].add(E),o[P].add(E),l[x].add(p),l[A].add(p),l[P].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,A=M.length;x<A;++x){const P=M[x],C=P.start,D=P.count;for(let X=C,Z=C+D;X<Z;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const T=new N,v=new N,b=new N,y=new N;function R(x){b.fromBufferAttribute(r,x),y.copy(b);const A=o[x];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),v.crossVectors(y,A);const C=v.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,A=M.length;x<A;++x){const P=M[x],C=P.start,D=P.count;for(let X=C,Z=C+D;X<Z;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,f=new N,d=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),E=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f);let m=0,_=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*f;for(let h=0;h<f;h++)u[_++]=c[m++]}return new pn(u,f,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const u=c[f],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,m=d.length;u<m;u++)f.push(d[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let au=0;class pr extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Fi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Js,this.blendDst=Qs,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Js&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new N,Fs=new N,Ar=new N,Zn=new N,Os=new N,wr=new N,Bs=new N;class us{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fs.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=Zn.dot(this.direction),l=-Zn.dot(Ar),c=Zn.lengthSq(),f=Math.abs(1-a*a);let d,u,m,_;if(f>0)if(d=a*l-o,u=a*o-l,_=s*f,d>=0)if(u>=-_)if(u<=_){const E=1/f;d*=E,u*=E,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fs).addScaledVector(Ar,u),m}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){Os.subVectors(t,e),wr.subVectors(i,e),Bs.crossVectors(Os,wr);let a=this.direction.dot(Bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(Zn,wr));if(l<0)return null;const c=o*this.direction.dot(Os.cross(Zn));if(c<0||l+c>a)return null;const f=-o*Zn.dot(Bs);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wo=new ut,ii=new us,Rr=new di,Xo=new N,Cr=new N,Pr=new N,Dr=new N,zs=new N,Lr=new N,qo=new N,Ir=new N;class mn extends Xt{constructor(e=new Qt,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(zs.fromBufferAttribute(d,e),a?Lr.addScaledVector(zs,f):Lr.addScaledVector(zs.sub(t),f))}t.add(Lr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Rr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Rr,Xo)===null||ii.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Wo),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){const p=u[_],h=a[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,b=T;v<b;v+=3){const y=o.getX(v),R=o.getX(v+1),x=o.getX(v+2);r=Nr(this,h,e,i,c,f,d,y,R,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=_,h=E;p<h;p+=3){const M=o.getX(p),T=o.getX(p+1),v=o.getX(p+2);r=Nr(this,a,e,i,c,f,d,M,T,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){const p=u[_],h=a[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,b=T;v<b;v+=3){const y=v,R=v+1,x=v+2;r=Nr(this,h,e,i,c,f,d,y,R,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=_,h=E;p<h;p+=3){const M=p,T=p+1,v=p+2;r=Nr(this,a,e,i,c,f,d,M,T,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ou(n,e,t,i,r,s,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qn,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:n}}function Nr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Cr),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Dr);const f=ou(n,e,t,i,Cr,Pr,Dr,qo);if(f){const d=new N;un.getBarycoord(qo,Cr,Pr,Dr,d),r&&(f.uv=un.getInterpolatedAttribute(r,o,l,c,d,new Fe)),s&&(f.uv1=un.getInterpolatedAttribute(s,o,l,c,d,new Fe)),a&&(f.normal=un.getInterpolatedAttribute(a,o,l,c,d,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};un.getNormal(Cr,Pr,Dr,u.normal),f.face=u,f.barycoord=d}return f}class _c extends Vt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Dt,f=Dt,d,u){super(null,a,o,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ri=new ut,Zo=new ut,Ur=[],Ko=new ei,lu=new ut,$i=new mn,Ji=new di;class $o extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ri),Ko.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Ko)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ri),Ji.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(i),e.ray.intersectsSphere(Ji)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ri),Zo.multiplyMatrices(i,Ri),$i.matrixWorld=Zo,$i.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=s,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(r*this.count),r,this.count,Ya,fn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gs=new N,cu=new N,hu=new He;class Ln{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gs.subVectors(i,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Gs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hu.getNormalMatrix(e),r=this.coplanarPoint(Gs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new di,uu=new Fe(.5,.5),Fr=new N;class no{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,s=new Ln,a=new Ln){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],m=s[7],_=s[8],E=s[9],p=s[10],h=s[11],M=s[12],T=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-a,m-f,h-_,b-M).normalize(),r[1].setComponents(c+a,m+f,h+_,b+M).normalize(),r[2].setComponents(c+o,m+d,h+E,b+T).normalize(),r[3].setComponents(c-o,m-d,h-E,b-T).normalize(),i)r[4].setComponents(l,u,p,v).normalize(),r[5].setComponents(c-l,m-u,h-p,b-v).normalize();else if(r[4].setComponents(c-l,m-u,h-p,b-v).normalize(),t===Sn)r[5].setComponents(c+l,m+u,h+p,b+v).normalize();else if(t===ns)r[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=uu.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fr.x=r.normal.x>0?e.max.x:e.min.x,Fr.y=r.normal.y>0?e.max.y:e.min.y,Fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ba extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ss=new N,as=new N,Jo=new ut,Qi=new us,Or=new di,Vs=new N,Qo=new N;class fu extends Xt{constructor(e=new Qt,t=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ss.fromBufferAttribute(t,r-1),as.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ss.distanceTo(as);e.setAttribute("lineDistance",new Ot(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Or.radius+=s,e.ray.intersectsSphere(Or)===!1)return;Jo.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Jo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let E=m,p=_-1;E<p;E+=c){const h=f.getX(E),M=f.getX(E+1),T=Br(this,e,Qi,l,h,M,E);T&&t.push(T)}if(this.isLineLoop){const E=f.getX(_-1),p=f.getX(m),h=Br(this,e,Qi,l,E,p,_-1);h&&t.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let E=m,p=_-1;E<p;E+=c){const h=Br(this,e,Qi,l,E,E+1,E);h&&t.push(h)}if(this.isLineLoop){const E=Br(this,e,Qi,l,_-1,m,_-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Br(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ss.fromBufferAttribute(o,r),as.fromBufferAttribute(o,s),t.distanceSqToSegment(ss,as,Vs,Qo)>i)return;Vs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vs);if(!(c<e.near||c>e.far))return{distance:c,point:Qo.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const jo=new N,el=new N;class tl extends fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)jo.fromBufferAttribute(t,r),el.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jo.distanceTo(el);e.setAttribute("lineDistance",new Ot(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends Vt{constructor(e=[],t=ci,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vi extends Vt{constructor(e,t,i=bn,r,s,a,o=Dt,l=Dt,c,f=zn,d=1){if(f!==zn&&f!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class du extends Vi{constructor(e,t=bn,i=ci,r,s,a=Dt,o=Dt,l,c=zn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xc extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mr extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let u=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function _(E,p,h,M,T,v,b,y,R,x,A){const P=v/R,C=b/x,D=v/2,X=b/2,Z=y/2,O=R+1,q=x+1;let H=0,J=0;const j=new N;for(let se=0;se<q;se++){const ne=se*C-X;for(let fe=0;fe<O;fe++){const Ge=fe*P-D;j[E]=Ge*M,j[p]=ne*T,j[h]=Z,c.push(j.x,j.y,j.z),j[E]=0,j[p]=0,j[h]=y>0?1:-1,f.push(j.x,j.y,j.z),d.push(fe/R),d.push(1-se/x),H+=1}}for(let se=0;se<x;se++)for(let ne=0;ne<R;ne++){const fe=u+ne+O*se,Ge=u+ne+O*(se+1),Ve=u+(ne+1)+O*(se+1),De=u+(ne+1)+O*se;l.push(fe,Ge,De),l.push(Ge,Ve,De),J+=6}o.addGroup(m,J,A),m+=J,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class io extends Qt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new N,v=new N,b=new N;for(let y=0;y<t.length;y+=3)m(t[y+0],T),m(t[y+1],v),m(t[y+2],b),l(T,v,b,M)}function l(M,T,v,b){const y=b+1,R=[];for(let x=0;x<=y;x++){R[x]=[];const A=M.clone().lerp(v,x/y),P=T.clone().lerp(v,x/y),C=y-x;for(let D=0;D<=C;D++)D===0&&x===y?R[x][D]=A:R[x][D]=A.clone().lerp(P,D/C)}for(let x=0;x<y;x++)for(let A=0;A<2*(y-x)-1;A++){const P=Math.floor(A/2);A%2===0?(u(R[x][P+1]),u(R[x+1][P]),u(R[x][P])):(u(R[x][P+1]),u(R[x+1][P+1]),u(R[x+1][P]))}}function c(M){const T=new N;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(M),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function f(){const M=new N;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];const v=p(M)/2/Math.PI+.5,b=h(M)/Math.PI+.5;a.push(v,1-b)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],v=a[M+2],b=a[M+4],y=Math.max(T,v,b),R=Math.min(T,v,b);y>.9&&R<.1&&(T<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,T){const v=M*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function _(){const M=new N,T=new N,v=new N,b=new N,y=new Fe,R=new Fe,x=new Fe;for(let A=0,P=0;A<s.length;A+=9,P+=6){M.set(s[A+0],s[A+1],s[A+2]),T.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),y.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(M).add(T).add(v).divideScalar(3);const C=p(b);E(y,P+0,M,C),E(R,P+2,T,C),E(x,P+4,v,C)}}function E(M,T,v,b){b<0&&M.x===1&&(a[T]=M.x-1),v.x===0&&v.z===0&&(a[T]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.vertices,e.indices,e.radius,e.detail)}}class ro extends io{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class fs extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,u=t/l,m=[],_=[],E=[],p=[];for(let h=0;h<f;h++){const M=h*u-a;for(let T=0;T<c;T++){const v=T*d-s;_.push(v,-M,0),E.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const T=M+c*h,v=M+c*(h+1),b=M+1+c*(h+1),y=M+1+c*h;m.push(T,v,y),m.push(v,b,y)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(E,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(nl(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(nl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}function nl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const mu={clone:Hi,merge:zt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xu extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vu extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mu extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zr=new N,Gr=new Gn,xn=new N;class Mc extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zr,Gr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Gr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zr,Gr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Gr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new N,il=new Fe,rl=new Fe;class rn extends Mc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sc extends Mc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=-90,Pi=1;class Su extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new rn(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const a=new rn(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const l=new rn(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Eu extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sl=new ut;class yu{constructor(e,t,i=0,r=1/0){this.ray=new us(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sl),this}intersectObject(e,t=!0,i=[]){return za(e,this,i,t),i.sort(al),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)za(e[r],this,i,t);return i.sort(al),i}}function al(n,e){return n.distance-e.distance}function za(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)za(s[a],e,t,!0)}}class ol{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const go=class go{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};go.prototype.isMatrix2=!0;let ll=go;class bu extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function cl(n,e,t,i){const r=Tu(i);switch(t){case cc:return n*e;case Ya:return n*e/r.components*r.byteLength;case Za:return n*e/r.components*r.byteLength;case hi:return n*e*2/r.components*r.byteLength;case Ka:return n*e*2/r.components*r.byteLength;case hc:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case $a:return n*e*4/r.components*r.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ca:case ua:return Math.max(n,16)*Math.max(e,8)/4;case la:case ha:return Math.max(n,8)*Math.max(e,8)/2;case fa:case da:case ma:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:case Qr:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case La:case Ia:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ua:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jr:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tu(n){switch(n){case an:case sc:return{byteLength:1,components:1};case cr:case ac:case Bn:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case bn:case Wa:case fn:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Ec(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Au(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const f=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,f);else{d.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<d.length;m++){const _=d[u],E=d[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,d[u]=E)}d.length=u+1;for(let m=0,_=d.length;m<_;m++){const E=d[m];n.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Af=`uniform sampler2D dfgLUT;
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
}`,wf=`
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
}`,Fd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,kd=`uniform vec3 diffuse;
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define LAMBERT
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Kd=`#define NORMAL
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
}`,$d=`#define PHONG
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
}`,Jd=`#define PHONG
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
}`,Qd=`#define STANDARD
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
}`,jd=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,tp=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,sp=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,op=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:wu,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Du,alphatest_pars_fragment:Lu,aomap_fragment:Iu,aomap_pars_fragment:Nu,batching_pars_vertex:Uu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:Gu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Zu,color_vertex:Ku,common:$u,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:ju,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:rf,colorspace_pars_fragment:sf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:ff,fog_fragment:df,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:_f,lights_lambert_fragment:gf,lights_lambert_pars_fragment:xf,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Ef,lights_phong_fragment:yf,lights_phong_pars_fragment:bf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:wf,lights_fragment_maps:Rf,lights_fragment_end:Cf,lightprobes_pars_fragment:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Nf,map_fragment:Uf,map_pars_fragment:Ff,map_particle_fragment:Of,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Vf,morphcolor_vertex:Hf,morphnormal_vertex:kf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Zf,normal_pars_vertex:Kf,normal_vertex:$f,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:ed,iridescence_pars_fragment:td,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:rd,project_vertex:sd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:dd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:_d,skinnormal_vertex:gd,specularmap_fragment:xd,specularmap_pars_fragment:vd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:Ed,transmission_pars_fragment:yd,uv_pars_fragment:bd,uv_pars_vertex:Td,uv_vertex:Ad,worldpos_vertex:wd,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Dd,cube_vert:Ld,cube_frag:Id,depth_vert:Nd,depth_frag:Ud,distance_vert:Fd,distance_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:Gd,linedashed_frag:Vd,meshbasic_vert:Hd,meshbasic_frag:kd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:qd,meshmatcap_frag:Yd,meshnormal_vert:Zd,meshnormal_frag:Kd,meshphong_vert:$d,meshphong_frag:Jd,meshphysical_vert:Qd,meshphysical_frag:jd,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:rp,shadow_frag:sp,sprite_vert:ap,sprite_frag:op},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:zt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:zt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:zt([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:zt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:zt([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:zt([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:zt([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:zt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Mn.physical={uniforms:zt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Vr={r:0,b:0,g:0},lp=new ut,yc=new He;yc.set(-1,0,0,0,1,0,0,0,1);function cp(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,f=null,d=0,u=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const v=M.backgroundBlurriness>0;T=e.get(T,v)}return T}function _(M){let T=!1;const v=m(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,T){const v=m(T);v&&(v.isCubeTexture||v.mapping===hs)?(c===void 0&&(c=new mn(new mr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Hi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yc),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,(f!==v||d!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mn(new fs(2,2),new Tn({name:"BackgroundMaterial",uniforms:Hi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(Vr,vc(n)),t.buffers.color.setClear(Vr.r,Vr.g,Vr.b,T,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:E,dispose:h}}function hp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(C,D,X,Z,O){let q=!1;const H=d(C,Z,X,D);s!==H&&(s=H,c(s.object)),q=m(C,Z,X,O),q&&_(C,Z,X,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(C,D,X,Z),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function f(C){return n.deleteVertexArray(C)}function d(C,D,X,Z){const O=Z.wireframe===!0;let q=i[D.id];q===void 0&&(q={},i[D.id]=q);const H=C.isInstancedMesh===!0?C.id:0;let J=q[H];J===void 0&&(J={},q[H]=J);let j=J[X.id];j===void 0&&(j={},J[X.id]=j);let se=j[O];return se===void 0&&(se=u(l()),j[O]=se),se}function u(C){const D=[],X=[],Z=[];for(let O=0;O<t;O++)D[O]=0,X[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:Z,object:C,attributes:{},index:null}}function m(C,D,X,Z){const O=s.attributes,q=D.attributes;let H=0;const J=X.getAttributes();for(const j in J)if(J[j].location>=0){const ne=O[j];let fe=q[j];if(fe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),ne===void 0||ne.attribute!==fe||fe&&ne.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==Z}function _(C,D,X,Z){const O={},q=D.attributes;let H=0;const J=X.getAttributes();for(const j in J)if(J[j].location>=0){let ne=q[j];ne===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor));const fe={};fe.attribute=ne,ne&&ne.data&&(fe.data=ne.data),O[j]=fe,H++}s.attributes=O,s.attributesNum=H,s.index=Z}function E(){const C=s.newAttributes;for(let D=0,X=C.length;D<X;D++)C[D]=0}function p(C){h(C,0)}function h(C,D){const X=s.newAttributes,Z=s.enabledAttributes,O=s.attributeDivisors;X[C]=1,Z[C]===0&&(n.enableVertexAttribArray(C),Z[C]=1),O[C]!==D&&(n.vertexAttribDivisor(C,D),O[C]=D)}function M(){const C=s.newAttributes,D=s.enabledAttributes;for(let X=0,Z=D.length;X<Z;X++)D[X]!==C[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function T(C,D,X,Z,O,q,H){H===!0?n.vertexAttribIPointer(C,D,X,O,q):n.vertexAttribPointer(C,D,X,Z,O,q)}function v(C,D,X,Z){E();const O=Z.attributes,q=X.getAttributes(),H=D.defaultAttributeValues;for(const J in q){const j=q[J];if(j.location>=0){let se=O[J];if(se===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){const ne=se.normalized,fe=se.itemSize,Ge=e.get(se);if(Ge===void 0)continue;const Ve=Ge.buffer,De=Ge.type,K=Ge.bytesPerElement,ie=De===n.INT||De===n.UNSIGNED_INT||se.gpuType===Wa;if(se.isInterleavedBufferAttribute){const te=se.data,Ue=te.stride,Ee=se.offset;if(te.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)h(j.location+Te,te.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Te=0;Te<j.locationSize;Te++)p(j.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Te=0;Te<j.locationSize;Te++)T(j.location+Te,fe/j.locationSize,De,ne,Ue*K,(Ee+fe/j.locationSize*Te)*K,ie)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<j.locationSize;te++)h(j.location+te,se.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<j.locationSize;te++)p(j.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let te=0;te<j.locationSize;te++)T(j.location+te,fe/j.locationSize,De,ne,fe*K,fe/j.locationSize*te*K,ie)}}else if(H!==void 0){const ne=H[J];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(j.location,ne);break;case 3:n.vertexAttrib3fv(j.location,ne);break;case 4:n.vertexAttrib4fv(j.location,ne);break;default:n.vertexAttrib1fv(j.location,ne)}}}}M()}function b(){A();for(const C in i){const D=i[C];for(const X in D){const Z=D[X];for(const O in Z){const q=Z[O];for(const H in q)f(q[H].object),delete q[H];delete Z[O]}}delete i[C]}}function y(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const X in D){const Z=D[X];for(const O in Z){const q=Z[O];for(const H in q)f(q[H].object),delete q[H];delete Z[O]}}delete i[C.id]}function R(C){for(const D in i){const X=i[D];for(const Z in X){const O=X[Z];if(O[C.id]===void 0)continue;const q=O[C.id];for(const H in q)f(q[H].object),delete q[H];delete O[C.id]}}}function x(C){for(const D in i){const X=i[D],Z=C.isInstancedMesh===!0?C.id:0,O=X[Z];if(O!==void 0){for(const q in O){const H=O[q];for(const J in H)f(H[J].object),delete H[J];delete O[q]}delete X[Z],Object.keys(X).length===0&&delete i[D]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:p,disableUnusedAttributes:M}}function up(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==dn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==an&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!x)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Ne("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:b,samples:y}}function dp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ln,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||r;return r=u,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,m){const _=d.clippingPlanes,E=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const M=s?0:i,T=M*4;let v=h.clippingState||null;l.value=v,v=f(_,u,T,m);for(let b=0;b!==T;++b)v[b]=t[b];h.clippingState=v,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,m,_){const E=d!==null?d.length:0;let p=null;if(E!==0){if(p=l.value,_!==!0||p===null){const h=m+E*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,v=m;T!==E;++T,v+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const Jn=4,hl=[.125,.215,.35,.446,.526,.582],ai=20,pp=256,ji=new Sc,ul=new Je;let Hs=null,ks=0,Ws=0,Xs=!1;const mp=new N;class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=mp}=s;Hs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,ks,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Bn,format:dn,colorSpace:es,depthBuffer:!1},r=dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_p(s)),this._blurMaterial=xp(s,e,t),this._ggxMaterial=gp(s,e,t)}return r}_compileMaterial(e){const t=new mn(new Qt,e);this._renderer.compile(t,ji)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(ul),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new mr,new rs({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let h=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,h=!0):(p.color.copy(ul),h=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[T],s.y,s.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[T]));const b=this._cubeSize;Di(r,v*b,T>2?b:0,b,b),d.setRenderTarget(r),h&&d.render(E,l),d.render(e,l)}d.toneMapping=m,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ci||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Di(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ji)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,m=d*u,{_lodMax:_}=this,E=this._sizeLods[i],p=3*E*(i>_-Jn?i-_+Jn:0),h=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Di(s,p,h,3*E,2*E),r.setRenderTarget(s),r.render(o,ji),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Di(e,p,h,3*E,2*E),r.setRenderTarget(e),r.render(o,ji)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),E=s/_,p=isFinite(s)?1+Math.floor(f*E):ai;p>ai&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const h=[];let M=0;for(let R=0;R<ai;++R){const x=R/E,A=Math.exp(-x*x/2);h.push(A),R===0?M+=A:R<p&&(M+=2*A)}for(let R=0;R<h.length;R++)h[R]=h[R]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-i;const v=this._sizeLods[r],b=3*v*(r>T-Jn?r-T+Jn:0),y=4*(this._cubeSize-v);Di(t,b,y,3*v,2*v),l.setRenderTarget(t),l.render(d,ji)}}function _p(n){const e=[],t=[],i=[];let r=n;const s=n-Jn+1+hl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Jn?l=hl[a-n+Jn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,E=3,p=2,h=1,M=new Float32Array(E*_*m),T=new Float32Array(p*_*m),v=new Float32Array(h*_*m);for(let y=0;y<m;y++){const R=y%3*2/3-1,x=y>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(A,E*_*y),T.set(u,p*_*y);const P=[y,y,y,y,y,y];v.set(P,h*_*y)}const b=new Qt;b.setAttribute("position",new pn(M,E)),b.setAttribute("uv",new pn(T,p)),b.setAttribute("faceIndex",new pn(v,h)),i.push(new mn(b,null)),r>Jn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dl(n,e,t){const i=new yn(n,e,t);return i.texture.mapping=hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Di(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gp(n,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ds(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xp(n,e,t){const i=new Float32Array(ai),r=new N(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ds(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function pl(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ds(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ml(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ds(){return`

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
	`}class bc extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mr(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Un});s.uniforms.tEquirect.value=t;const a=new mn(r,s),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=Ft),new Su(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function vp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===_s||m===gs)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new bc(_.height);return E.fromEquirectangularTexture(n,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===_s||m===gs,E=m===ci||m===Gi;if(_||E){let p=t.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new fl(n)),p=_?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return _&&M&&M.height>0||E&&M&&l(M)?(i===null&&(i=new fl(n)),p=_?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function o(u,m){return m===_s?u.mapping=ci:m===gs&&(u.mapping=Gi),u}function l(u){let m=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Mp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Oi("WebGLRenderer: "+i+" extension not supported."),r}}}function Sp(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(d){const u=[],m=d.index,_=d.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const M=m.array;E=m.version;for(let T=0,v=M.length;T<v;T+=3){const b=M[T+0],y=M[T+1],R=M[T+2];u.push(b,y,y,R,R,b)}}else{const M=_.array;E=_.version;for(let T=0,v=M.length/3-1;T<v;T+=3){const b=T+0,y=T+1,R=T+2;u.push(b,y,y,R,R,b)}}const p=new(_.count>=65535?mc:pc)(u,1);p.version=E;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function f(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function Ep(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,s,d*a,m),t.update(u,i,m))}function f(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,m);let E=0;for(let p=0;p<m;p++)E+=u[p];t.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function yp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bp(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),E===!0&&(T=3);let v=o.attributes.position.count*T,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const y=new Float32Array(v*b*4*d),R=new fc(y,v,b,d);R.type=fn,R.needsUpdate=!0;const x=T*4;for(let P=0;P<d;P++){const C=p[P],D=h[P],X=M[P],Z=v*b*4*P;for(let O=0;O<C.count;O++){const q=O*x;m===!0&&(r.fromBufferAttribute(C,O),y[Z+q+0]=r.x,y[Z+q+1]=r.y,y[Z+q+2]=r.z,y[Z+q+3]=0),_===!0&&(r.fromBufferAttribute(D,O),y[Z+q+4]=r.x,y[Z+q+5]=r.y,y[Z+q+6]=r.z,y[Z+q+7]=0),E===!0&&(r.fromBufferAttribute(X,O),y[Z+q+8]=r.x,y[Z+q+9]=r.y,y[Z+q+10]=r.z,y[Z+q+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new Fe(v,b)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Tp(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Ap={[Jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function wp(n,e,t,i,r,s){const a=new yn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Vi(e,t):void 0}),o=new yn(e,t,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt;l.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const c=new xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new mn(l,c),d=new Sc(-1,1,1,-1,0,1);let u=null,m=null,_=!1,E,p=null,h=[],M=!1;this.setSize=function(T,v){a.setSize(T,v),o.setSize(T,v);for(let b=0;b<h.length;b++){const y=h[b];y.setSize&&y.setSize(T,v)}},this.setEffects=function(T){h=T,M=h.length>0&&h[0].isRenderPass===!0;const v=a.width,b=a.height;for(let y=0;y<h.length;y++){const R=h[y];R.setSize&&R.setSize(v,b)}},this.begin=function(T,v){if(_||T.toneMapping===En&&h.length===0)return!1;if(p=v,v!==null){const b=v.width,y=v.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return M===!1&&T.setRenderTarget(a),E=T.toneMapping,T.toneMapping=En,!0},this.hasRenderPass=function(){return M},this.end=function(T,v){T.toneMapping=E,_=!0;let b=a,y=o;for(let R=0;R<h.length;R++){const x=h[R];if(x.enabled!==!1&&(x.render(T,y,b,v),x.needsSwap!==!1)){const A=b;b=y,y=A}}if(u!==T.outputColorSpace||m!==T.toneMapping){u=T.outputColorSpace,m=T.toneMapping,c.defines={},Ze.getTransfer(u)===rt&&(c.defines.SRGB_TRANSFER="");const R=Ap[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(p),T.render(f,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Tc=new Vt,Ga=new Vi(1,1),Ac=new fc,wc=new Zh,Rc=new gc,_l=[],gl=[],xl=new Float32Array(16),vl=new Float32Array(9),Ml=new Float32Array(4);function Xi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_l[r];if(s===void 0&&(s=new Float32Array(r),_l[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ps(n,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Lp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Ml.set(i),n.uniformMatrix2fv(this.addr,!1,Ml),Ct(t,i)}}function Ip(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;vl.set(i),n.uniformMatrix3fv(this.addr,!1,vl),Ct(t,i)}}function Np(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;xl.set(i),n.uniformMatrix4fv(this.addr,!1,xl),Ct(t,i)}}function Up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function kp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ga.compareFunction=t.isReversedDepthBuffer()?Qa:Ja,s=Ga):s=Tc,t.setTexture2D(e||s,r)}function Wp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wc,r)}function Xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rc,r)}function qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ac,r)}function Yp(n){switch(n){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Dp;case 35674:return Lp;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Up;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Gp;case 36295:return Vp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function Zp(n,e){n.uniform1fv(this.addr,e)}function Kp(n,e){const t=Xi(e,this.size,2);n.uniform2fv(this.addr,t)}function $p(n,e){const t=Xi(e,this.size,3);n.uniform3fv(this.addr,t)}function Jp(n,e){const t=Xi(e,this.size,4);n.uniform4fv(this.addr,t)}function Qp(n,e){const t=Xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jp(n,e){const t=Xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function em(n,e){const t=Xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tm(n,e){n.uniform1iv(this.addr,e)}function nm(n,e){n.uniform2iv(this.addr,e)}function im(n,e){n.uniform3iv(this.addr,e)}function rm(n,e){n.uniform4iv(this.addr,e)}function sm(n,e){n.uniform1uiv(this.addr,e)}function am(n,e){n.uniform2uiv(this.addr,e)}function om(n,e){n.uniform3uiv(this.addr,e)}function lm(n,e){n.uniform4uiv(this.addr,e)}function cm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ga:a=Tc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function hm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wc,s[a])}function um(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rc,s[a])}function fm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ac,s[a])}function dm(n){switch(n){case 5126:return Zp;case 35664:return Kp;case 35665:return $p;case 35666:return Jp;case 35674:return Qp;case 35675:return jp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return fm}}class pm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}}class mm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Sl(n,e){n.seq.push(e),n.map[e.id]=e}function gm(n,e,t){const i=n.name,r=i.length;for(qs.lastIndex=0;;){const s=qs.exec(i),a=qs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sl(t,c===void 0?new pm(o,n,e):new mm(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new _m(o),Sl(t,d)),t=d}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gm(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function El(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xm=37297;let vm=0;function Mm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const yl=new He;function Sm(n){Ze._getMatrix(yl,Ze.workingColorSpace,n);const e=`mat3( ${yl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ts:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Mm(n.getShaderSource(e),o)}else return s}function Em(n,e){const t=Sm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ym={[Jl]:"Linear",[Ql]:"Reinhard",[jl]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[tc]:"Custom"};function bm(n,e){const t=ym[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new N;function Tm(){Ze.getLuminanceCoefficients(Hr);const n=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function wm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ir(n){return n!==""}function Tl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(Cm,Dm)}const Pm=new Map;function Dm(n,e){let t=Xe[e];if(t===void 0){const i=Pm.get(e);if(i!==void 0)t=Xe[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Va(t)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(Lm,Im)}function Im(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Nm={[Xr]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Um(n){return Nm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fm={[ci]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function Om(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Fm[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bm={[Gi]:"ENVMAP_MODE_REFRACTION"};function zm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Bm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gm={[$l]:"ENVMAP_BLENDING_MULTIPLY",[fh]:"ENVMAP_BLENDING_MIX",[dh]:"ENVMAP_BLENDING_ADD"};function Vm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gm[n.combine]||"ENVMAP_BLENDING_NONE"}function Hm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function km(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Um(t),c=Om(t),f=zm(t),d=Vm(t),u=Hm(t),m=Am(t),_=wm(s),E=r.createProgram();let p,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),h.length>0&&(h+=`
`)):(p=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),h=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Xe.tonemapping_pars_fragment:"",t.toneMapping!==En?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Va(a),a=Tl(a,t),a=Al(a,t),o=Va(o),o=Tl(o,t),o=Al(o,t),a=wl(a),o=wl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=M+p+a,v=M+h+o,b=El(r,r.VERTEX_SHADER,T),y=El(r,r.FRAGMENT_SHADER,v);r.attachShader(E,b),r.attachShader(E,y),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(C){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(b)||"",Z=r.getShaderInfoLog(y)||"",O=D.trim(),q=X.trim(),H=Z.trim();let J=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,b,y);else{const se=bl(r,b,"vertex"),ne=bl(r,y,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+se+`
`+ne)}else O!==""?Ne("WebGLProgram: Program Info Log:",O):(q===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:q,prefix:p},fragmentShader:{log:H,prefix:h}})}r.deleteShader(b),r.deleteShader(y),x=new $r(r,E),A=Rm(r,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,xm)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vm++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=y,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qm(e),t.set(e,i)),i}}class qm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function Ym(n){return n===hi||n===Qr||n===jr}function Zm(n,e,t,i,r,s){const a=new to,o=new Xm,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,P,C,D,X){const Z=C.fog,O=D.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||q,H),j=J&&J.mapping===hs?J.image.height:null,se=m[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=ne!==void 0?ne.length:0;let Ge=0;O.morphAttributes.position!==void 0&&(Ge=1),O.morphAttributes.normal!==void 0&&(Ge=2),O.morphAttributes.color!==void 0&&(Ge=3);let Ve,De,K,ie;if(se){const Se=Mn[se];Ve=Se.vertexShader,De=Se.fragmentShader}else{Ve=x.vertexShader,De=x.fragmentShader;const Se=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,Se,mt),K=Se.id,ie=mt.id}const te=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,tt=!!x.map,Oe=!!x.matcap,Ke=!!J,Ie=!!x.aoMap,Be=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,st=!!x.displacementMap,dt=!!x.emissiveMap,pt=!!x.metalnessMap,xt=!!x.roughnessMap,I=x.anisotropy>0,nt=x.clearcoat>0,ke=x.dispersion>0,w=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,G=I&&!!x.anisotropyMap,k=nt&&!!x.clearcoatMap,re=nt&&!!x.clearcoatNormalMap,le=nt&&!!x.clearcoatRoughnessMap,W=w&&!!x.iridescenceMap,$=w&&!!x.iridescenceThicknessMap,oe=g&&!!x.sheenColorMap,we=g&&!!x.sheenRoughnessMap,he=!!x.specularMap,ue=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Le=F&&!!x.transmissionMap,ze=F&&!!x.thicknessMap,L=!!x.gradientMap,ae=!!x.alphaMap,Y=x.alphaTest>0,ce=!!x.alphaHash,de=!!x.extensions;let Q=En;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Q=n.toneMapping);const ye={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:De,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:tt,matcap:Oe,envMap:Ke,envMapMode:Ke&&J.mapping,envMapCubeUVHeight:j,aoMap:Ie,lightMap:Be,bumpMap:_t,normalMap:gt,displacementMap:st,emissiveMap:dt,normalMapObjectSpace:gt&&x.normalMapType===_h,normalMapTangentSpace:gt&&x.normalMapType===To,packedNormalMap:gt&&x.normalMapType===To&&Ym(x.normalMap.format),metalnessMap:pt,roughnessMap:xt,anisotropy:I,anisotropyMap:G,clearcoat:nt,clearcoatMap:k,clearcoatNormalMap:re,clearcoatRoughnessMap:le,dispersion:ke,iridescence:w,iridescenceMap:W,iridescenceThicknessMap:$,sheen:g,sheenColorMap:oe,sheenRoughnessMap:we,specularMap:he,specularColorMap:ue,specularIntensityMap:Ce,transmission:F,transmissionMap:Le,thicknessMap:ze,gradientMap:L,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Y,alphaHash:ce,combine:x.combine,mapUv:tt&&_(x.map.channel),aoMapUv:Ie&&_(x.aoMap.channel),lightMapUv:Be&&_(x.lightMap.channel),bumpMapUv:_t&&_(x.bumpMap.channel),normalMapUv:gt&&_(x.normalMap.channel),displacementMapUv:st&&_(x.displacementMap.channel),emissiveMapUv:dt&&_(x.emissiveMap.channel),metalnessMapUv:pt&&_(x.metalnessMap.channel),roughnessMapUv:xt&&_(x.roughnessMap.channel),anisotropyMapUv:G&&_(x.anisotropyMap.channel),clearcoatMapUv:k&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(x.sheenRoughnessMap.channel),specularMapUv:he&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:Ce&&_(x.specularIntensityMap.channel),transmissionMapUv:Le&&_(x.transmissionMap.channel),thicknessMapUv:ze&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||I),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(tt||ae),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(A,x),M(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const A=m[x.type];let P;if(A){const C=Mn[A];P=mu.clone(C.uniforms)}else P=x.uniforms;return P}function v(x,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new km(n,A,x,r),c.push(P),f.set(A,P)),P}function b(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:T,acquireProgram:v,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:R}}function Km(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,E,p,h){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:h},n[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=E,M.renderOrder=u.renderOrder,M.z=p,M.group=h),e++,M}function l(u,m,_,E,p,h){const M=o(u,m,_,E,p,h);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):t.push(M)}function c(u,m,_,E,p,h){const M=o(u,m,_,E,p,h);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,m,_){t.length>1&&t.sort(u||$m),i.length>1&&i.sort(m||Cl),r.length>1&&r.sort(m||Cl),_&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let u=e,m=n.length;u<m;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function Jm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pl,n.set(i,[a])):r>=s.length?(a=new Pl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Je};break;case"SpotLight":t={position:new N,direction:new N,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function jm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let e_=0;function t_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function n_(n){const e=new Qm,t=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ut,a=new ut;function o(c){let f=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,E=0,p=0,h=0,M=0,T=0,v=0,b=0,y=0,R=0;c.sort(t_);for(let A=0,P=c.length;A<P;A++){const C=c[A],D=C.color,X=C.intensity,Z=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===hi?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=D.r*X,d+=D.g*X,u+=D.b*X;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],X);R++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=q,m++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(D).multiplyScalar(X),q.distance=Z,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[E]=q;const H=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,H.updateMatrices(C),C.castShadow&&y++),i.spotLightMatrix[E]=H.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=O,v++}E++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(D).multiplyScalar(X),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=q,p++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const H=C.shadow,J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=C.shadow.matrix,T++}i.point[_]=q,_++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(X),q.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==p||x.hemiLength!==h||x.numDirectionalShadows!==M||x.numPointShadows!==T||x.numSpotShadows!==v||x.numSpotMaps!==b||x.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=v+b-y,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,x.directionalLength=m,x.pointLength=_,x.spotLength=E,x.rectAreaLength=p,x.hemiLength=h,x.numDirectionalShadows=M,x.numPointShadows=T,x.numSpotShadows=v,x.numSpotMaps=b,x.numLightProbes=R,i.version=e_++)}function l(c,f){let d=0,u=0,m=0,_=0,E=0;const p=f.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const T=c[h];if(T.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(T.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){const v=i.hemi[E];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(p),E++}}}return{setup:o,setupView:l,state:i}}function Dl(n){const e=new n_(n),t=[],i=[],r=[];function s(u){d.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function i_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dl(n),e.set(r,[o])):s>=a.length?(o=new Dl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`,a_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],o_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ll=new ut,er=new N,Ys=new N;function l_(n,e,t){let i=new no;const r=new Fe,s=new Fe,a=new St,o=new vu,l=new Mu,c={},f=t.maxTextureSize,d={[Qn]:Wt,[Wt]:Qn,[In]:In},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:r_,fragmentShader:s_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mn(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let h=this.type;this.render=function(y,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Yc&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xr);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Un),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=h!==this.type;X&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(O=>O.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,O=y.length;Z<O;Z++){const q=y[Z],H=q.shadow;if(H===void 0){Ne("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();r.multiply(J),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/J.x),r.x=s.x*J.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/J.y),r.y=s.y*J.y,H.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===nr){if(q.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new yn(r.x,r.y,{format:hi,type:Bn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Vi(r.x,r.y,fn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}else q.isPointLight?(H.map=new bc(r.x),H.map.depthTexture=new du(r.x,bn)):(H.map=new yn(r.x,r.y),H.map.depthTexture=new Vi(r.x,r.y,bn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=zn,this.type===Xr?(H.map.depthTexture.compareFunction=j?Qa:Ja,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt);H.camera.updateProjectionMatrix()}const se=H.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<se;ne++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(H.map),n.clear());const fe=H.getViewport(ne);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),D.viewport(a)}if(q.isPointLight){const fe=H.camera,Ge=H.matrix,Ve=q.distance||fe.far;Ve!==fe.far&&(fe.far=Ve,fe.updateProjectionMatrix()),er.setFromMatrixPosition(q.matrixWorld),fe.position.copy(er),Ys.copy(fe.position),Ys.add(a_[ne]),fe.up.copy(o_[ne]),fe.lookAt(Ys),fe.updateMatrixWorld(),Ge.makeTranslation(-er.x,-er.y,-er.z),Ll.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ll,fe.coordinateSystem,fe.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),v(R,x,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===nr&&M(H,x),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(A,P,C)};function M(y,R){const x=e.update(E);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yn(r.x,r.y,{format:hi,type:Bn})),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,E,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,x,m,E,null)}function T(y,R,x,A){let P=null;const C=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)P=C;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=P.uuid,X=R.uuid;let Z=c[D];Z===void 0&&(Z={},c[D]=Z);let O=Z[X];O===void 0&&(O=P.clone(),Z[X]=O,R.addEventListener("dispose",b)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,A===nr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=n.properties.get(P);D.light=x}return P}function v(y,R,x,A,P){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===nr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const X=e.update(y),Z=y.material;if(Array.isArray(Z)){const O=X.groups;for(let q=0,H=O.length;q<H;q++){const J=O[q],j=Z[J.materialIndex];if(j&&j.visible){const se=T(y,j,A,P);y.onBeforeShadow(n,y,R,x,X,se,J),n.renderBufferDirect(x,null,X,se,y,J),y.onAfterShadow(n,y,R,x,X,se,J)}}}else if(Z.visible){const O=T(y,Z,A,P);y.onBeforeShadow(n,y,R,x,X,O,null),n.renderBufferDirect(x,null,X,O,y,null),y.onAfterShadow(n,y,R,x,X,O,null)}}const D=y.children;for(let X=0,Z=D.length;X<Z;X++)v(D[X],R,x,A,P)}function b(y){y.target.removeEventListener("dispose",b);for(const x in c){const A=c[x],P=y.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function c_(n,e){function t(){let L=!1;const ae=new St;let Y=null;const ce=new St(0,0,0,0);return{setMask:function(de){Y!==de&&!L&&(n.colorMask(de,de,de,de),Y=de)},setLocked:function(de){L=de},setClear:function(de,Q,ye,Se,mt){mt===!0&&(de*=Se,Q*=Se,ye*=Se),ae.set(de,Q,ye,Se),ce.equals(ae)===!1&&(n.clearColor(de,Q,ye,Se),ce.copy(ae))},reset:function(){L=!1,Y=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,Y=null,ce=null,de=null;return{setReversed:function(Q){if(ae!==Q){const ye=e.get("EXT_clip_control");Q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;const Se=de;de=null,this.setClear(Se)}},getReversed:function(){return ae},setTest:function(Q){Q?te(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Q){Y!==Q&&!L&&(n.depthMask(Q),Y=Q)},setFunc:function(Q){if(ae&&(Q=Ah[Q]),ce!==Q){switch(Q){case js:n.depthFunc(n.NEVER);break;case ea:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case zi:n.depthFunc(n.LEQUAL);break;case na:n.depthFunc(n.EQUAL);break;case ia:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Q}},setLocked:function(Q){L=Q},setClear:function(Q){de!==Q&&(de=Q,ae&&(Q=1-Q),n.clearDepth(Q))},reset:function(){L=!1,Y=null,ce=null,de=null,ae=!1}}}function r(){let L=!1,ae=null,Y=null,ce=null,de=null,Q=null,ye=null,Se=null,mt=null;return{setTest:function(it){L||(it?te(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(it){ae!==it&&!L&&(n.stencilMask(it),ae=it)},setFunc:function(it,jt,ee){(Y!==it||ce!==jt||de!==ee)&&(n.stencilFunc(it,jt,ee),Y=it,ce=jt,de=ee)},setOp:function(it,jt,ee){(Q!==it||ye!==jt||Se!==ee)&&(n.stencilOp(it,jt,ee),Q=it,ye=jt,Se=ee)},setLocked:function(it){L=it},setClear:function(it){mt!==it&&(n.clearStencil(it),mt=it)},reset:function(){L=!1,ae=null,Y=null,ce=null,de=null,Q=null,ye=null,Se=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},m=new WeakMap,_=[],E=null,p=!1,h=null,M=null,T=null,v=null,b=null,y=null,R=null,x=new Je(0,0,0),A=0,P=!1,C=null,D=null,X=null,Z=null,O=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=J>=2);let se=null,ne={};const fe=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ve=new St().fromArray(fe),De=new St().fromArray(Ge);function K(L,ae,Y,ce){const de=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<Y;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ae+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Q}const ie={};ie[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(zi),_t(!1),gt(So),te(n.CULL_FACE),Ie(Un);function te(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Ue(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Ee(L,ae){return u[L]!==ae?(n.bindFramebuffer(L,ae),u[L]=ae,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Te(L,ae){let Y=_,ce=!1;if(L){Y=m.get(ae),Y===void 0&&(Y=[],m.set(ae,Y));const de=L.textures;if(Y.length!==de.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,ye=de.length;Q<ye;Q++)Y[Q]=n.COLOR_ATTACHMENT0+Q;Y.length=de.length,ce=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ce=!0);ce&&n.drawBuffers(Y)}function tt(L){return E!==L?(n.useProgram(L),E=L,!0):!1}const Oe={[si]:n.FUNC_ADD,[Kc]:n.FUNC_SUBTRACT,[$c]:n.FUNC_REVERSE_SUBTRACT};Oe[Jc]=n.MIN,Oe[Qc]=n.MAX;const Ke={[jc]:n.ZERO,[eh]:n.ONE,[th]:n.SRC_COLOR,[Js]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[Qs]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[rh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[ch]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(L,ae,Y,ce,de,Q,ye,Se,mt,it){if(L===Un){p===!0&&(Ue(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),L!==Zc){if(L!==h||it!==P){if((M!==si||b!==si)&&(n.blendEquation(n.FUNC_ADD),M=si,b=si),it)switch(L){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eo:n.blendFunc(n.ONE,n.ONE);break;case yo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yo:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}T=null,v=null,y=null,R=null,x.set(0,0,0),A=0,h=L,P=it}return}de=de||ae,Q=Q||Y,ye=ye||ce,(ae!==M||de!==b)&&(n.blendEquationSeparate(Oe[ae],Oe[de]),M=ae,b=de),(Y!==T||ce!==v||Q!==y||ye!==R)&&(n.blendFuncSeparate(Ke[Y],Ke[ce],Ke[Q],Ke[ye]),T=Y,v=ce,y=Q,R=ye),(Se.equals(x)===!1||mt!==A)&&(n.blendColor(Se.r,Se.g,Se.b,mt),x.copy(Se),A=mt),h=L,P=!1}function Be(L,ae){L.side===In?Ue(n.CULL_FACE):te(n.CULL_FACE);let Y=L.side===Wt;ae&&(Y=!Y),_t(Y),L.blending===Fi&&L.transparent===!1?Ie(Un):Ie(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(L){C!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),C=L)}function gt(L){L!==Xc?(te(n.CULL_FACE),L!==D&&(L===So?n.cullFace(n.BACK):L===qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),D=L}function st(L){L!==X&&(H&&n.lineWidth(L),X=L)}function dt(L,ae,Y){L?(te(n.POLYGON_OFFSET_FILL),(Z!==ae||O!==Y)&&(Z=ae,O=Y,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,Y))):Ue(n.POLYGON_OFFSET_FILL)}function pt(L){L?te(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function xt(L){L===void 0&&(L=n.TEXTURE0+q-1),se!==L&&(n.activeTexture(L),se=L)}function I(L,ae,Y){Y===void 0&&(se===null?Y=n.TEXTURE0+q-1:Y=se);let ce=ne[Y];ce===void 0&&(ce={type:void 0,texture:void 0},ne[Y]=ce),(ce.type!==L||ce.texture!==ae)&&(se!==Y&&(n.activeTexture(Y),se=Y),n.bindTexture(L,ae||ie[L]),ce.type=L,ce.texture=ae)}function nt(){const L=ne[se];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ke(){try{n.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function g(){try{n.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function k(){try{n.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function le(){try{n.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function W(){try{n.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function $(){try{n.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function oe(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function we(L,ae){d[L]!==ae&&(n.pixelStorei(L,ae),d[L]=ae)}function he(L){Ve.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ve.copy(L))}function ue(L){De.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),De.copy(L))}function Ce(L,ae){let Y=c.get(ae);Y===void 0&&(Y=new WeakMap,c.set(ae,Y));let ce=Y.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(ae,L.name),Y.set(L,ce))}function Le(L,ae){const ce=c.get(ae).get(L);l.get(ae)!==ce&&(n.uniformBlockBinding(ae,ce,L.__bindingPointIndex),l.set(ae,ce))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},se=null,ne={},u={},m=new WeakMap,_=[],E=null,p=!1,h=null,M=null,T=null,v=null,b=null,y=null,R=null,x=new Je(0,0,0),A=0,P=!1,C=null,D=null,X=null,Z=null,O=null,Ve.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ue,bindFramebuffer:Ee,drawBuffers:Te,useProgram:tt,setBlending:Ie,setMaterial:Be,setFlipSided:_t,setCullFace:gt,setLineWidth:st,setPolygonOffset:dt,setScissorTest:pt,activeTexture:xt,bindTexture:I,unbindTexture:nt,compressedTexImage2D:ke,compressedTexImage3D:w,texImage2D:W,texImage3D:$,pixelStorei:we,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:re,texStorage3D:le,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:k,scissor:he,viewport:ue,reset:ze}}function h_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,f=new WeakMap,d=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,g){return _?new OffscreenCanvas(w,g):is("canvas")}function p(w,g,F){let G=1;const k=ke(w);if((k.width>F||k.height>F)&&(G=F/Math.max(k.width,k.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(G*k.width),le=Math.floor(G*k.height);u===void 0&&(u=E(re,le));const W=g?E(re,le):u;return W.width=re,W.height=le,W.getContext("2d").drawImage(w,0,0,re,le),Ne("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+re+"x"+le+")."),W}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),w;return w}function h(w){return w.generateMipmaps}function M(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,g,F,G,k,re=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=g;if(g===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8),F===n.UNSIGNED_SHORT&&le&&(W=le.R16_EXT),F===n.SHORT&&le&&(W=le.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),g===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8),F===n.UNSIGNED_SHORT&&le&&(W=le.RG16_EXT),F===n.SHORT&&le&&(W=le.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&le&&(W=le.RGB16_EXT),F===n.SHORT&&le&&(W=le.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),g===n.RGBA){const $=re?ts:Ze.getTransfer(k);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=$===rt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&le&&(W=le.RGBA16_EXT),F===n.SHORT&&le&&(W=le.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(w,g){let F;return w?g===null||g===bn||g===hr?F=n.DEPTH24_STENCIL8:g===fn?F=n.DEPTH32F_STENCIL8:g===cr&&(F=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bn||g===hr?F=n.DEPTH_COMPONENT24:g===fn?F=n.DEPTH_COMPONENT32F:g===cr&&(F=n.DEPTH_COMPONENT16),F}function y(w,g){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dt&&w.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),A(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&d.delete(g)}function x(w){const g=w.target;g.removeEventListener("dispose",x),C(g)}function A(w){const g=i.get(w);if(g.__webglInit===void 0)return;const F=w.source,G=m.get(F);if(G){const k=G[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&P(w),Object.keys(G).length===0&&m.delete(F)}i.remove(w)}function P(w){const g=i.get(w);n.deleteTexture(g.__webglTexture);const F=w.source,G=m.get(F);delete G[g.__cacheKey],a.memory.textures--}function C(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let k=0;k<g.__webglFramebuffer[G].length;k++)n.deleteFramebuffer(g.__webglFramebuffer[G][k]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=w.textures;for(let G=0,k=F.length;G<k;G++){const re=i.get(F[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(w)}let D=0;function X(){D=0}function Z(){return D}function O(w){D=w}function q(){const w=D;return w>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function H(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function J(w,g){const F=i.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const G=w.image;if(G===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function j(w,g){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ue(F,w,g);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function se(w,g){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ue(F,w,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function ne(w,g){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ee(F,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const fe={[aa]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},Ge={[Dt]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[gr]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[xs]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},Ve={[gh]:n.NEVER,[Eh]:n.ALWAYS,[xh]:n.LESS,[Ja]:n.LEQUAL,[vh]:n.EQUAL,[Qa]:n.GEQUAL,[Mh]:n.GREATER,[Sh]:n.NOTEQUAL};function De(w,g){if(g.type===fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===xs||g.magFilter===gr||g.magFilter===oi||g.minFilter===Ft||g.minFilter===xs||g.minFilter===gr||g.minFilter===oi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,fe[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ge[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ge[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==gr&&g.minFilter!==oi||g.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const G=g.source;let k=m.get(G);k===void 0&&(k={},m.set(G,k));const re=H(g);if(re!==w.__cacheKey){k[re]===void 0&&(k[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),k[re].usedTimes++;const le=k[w.__cacheKey];le!==void 0&&(k[w.__cacheKey].usedTimes--,le.usedTimes===0&&P(g)),w.__cacheKey=re,w.__webglTexture=k[re].texture}return F}function ie(w,g,F){return Math.floor(Math.floor(w/F)/g)}function te(w,g,F,G){const re=w.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{re.sort((we,he)=>we.start-he.start);let le=0;for(let we=1;we<re.length;we++){const he=re[le],ue=re[we],Ce=he.start+he.count,Le=ie(ue.start,g.width,4),ze=ie(he.start,g.width,4);ue.start<=Ce+1&&Le===ze&&ie(ue.start+ue.count-1,g.width,4)===Le?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,re[le]=ue)}re.length=le+1;const W=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let we=0,he=re.length;we<he;we++){const ue=re[we],Ce=Math.floor(ue.start/4),Le=Math.ceil(ue.count/4),ze=Ce%g.width,L=Math.floor(Ce/g.width),ae=Le,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,ae,Y,F,G,g.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,W),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function Ue(w,g,F){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const k=K(w,g),re=g.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);const le=i.get(re);if(re.version!==le.__version||k===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Y=Ze.getPrimaries(Ze.workingColorSpace),ce=g.colorSpace===$n?null:Ze.getPrimaries(g.colorSpace),de=g.colorSpace===$n||Y===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let $=p(g.image,!1,r.maxTextureSize);$=nt(g,$);const oe=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let he=v(g.internalFormat,oe,we,g.normalized,g.colorSpace,g.isVideoTexture);De(G,g);let ue;const Ce=g.mipmaps,Le=g.isVideoTexture!==!0,ze=le.__version===void 0||k===!0,L=re.dataReady,ae=y(g,$);if(g.isDepthTexture)he=b(g.format===li,g.type),ze&&(Le?t.texStorage2D(n.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,oe,we,null));else if(g.isDataTexture)if(Ce.length>0){Le&&ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,Ce[0].width,Ce[0].height);for(let Y=0,ce=Ce.length;Y<ce;Y++)ue=Ce[Y],Le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ue.width,ue.height,oe,we,ue.data):t.texImage2D(n.TEXTURE_2D,Y,he,ue.width,ue.height,0,oe,we,ue.data);g.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,$.width,$.height),L&&te(g,$,oe,we)):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,oe,we,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,he,Ce[0].width,Ce[0].height,$.depth);for(let Y=0,ce=Ce.length;Y<ce;Y++)if(ue=Ce[Y],g.format!==dn)if(oe!==null)if(Le){if(L)if(g.layerUpdates.size>0){const de=cl(ue.width,ue.height,g.format,g.type);for(const Q of g.layerUpdates){const ye=ue.data.subarray(Q*de/ue.data.BYTES_PER_ELEMENT,(Q+1)*de/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Q,ue.width,ue.height,1,oe,ye)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ue.width,ue.height,$.depth,oe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,he,ue.width,ue.height,$.depth,0,ue.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ue.width,ue.height,$.depth,oe,we,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,he,ue.width,ue.height,$.depth,0,oe,we,ue.data)}else{Le&&ze&&t.texStorage2D(n.TEXTURE_2D,ae,he,Ce[0].width,Ce[0].height);for(let Y=0,ce=Ce.length;Y<ce;Y++)ue=Ce[Y],g.format!==dn?oe!==null?Le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,he,ue.width,ue.height,0,ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ue.width,ue.height,oe,we,ue.data):t.texImage2D(n.TEXTURE_2D,Y,he,ue.width,ue.height,0,oe,we,ue.data)}else if(g.isDataArrayTexture)if(Le){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,he,$.width,$.height,$.depth),L)if(g.layerUpdates.size>0){const Y=cl($.width,$.height,g.format,g.type);for(const ce of g.layerUpdates){const de=$.data.subarray(ce*Y/$.data.BYTES_PER_ELEMENT,(ce+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,$.width,$.height,1,oe,we,de)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,we,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,oe,we,$.data);else if(g.isData3DTexture)Le?(ze&&t.texStorage3D(n.TEXTURE_3D,ae,he,$.width,$.height,$.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,we,$.data)):t.texImage3D(n.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,oe,we,$.data);else if(g.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(n.TEXTURE_2D,ae,he,$.width,$.height);else{let Y=$.width,ce=$.height;for(let de=0;de<ae;de++)t.texImage2D(n.TEXTURE_2D,de,he,Y,ce,0,oe,we,null),Y>>=1,ce>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),$.parentNode!==Y){Y.appendChild($),d.add(g),Y.onpaint=ce=>{const de=ce.changedElements;for(const Q of d)de.includes(Q.image)&&(Q.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{const de=n.RGBA,Q=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,de,Q,ye,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&ze){const Y=ke(Ce[0]);t.texStorage2D(n.TEXTURE_2D,ae,he,Y.width,Y.height)}for(let Y=0,ce=Ce.length;Y<ce;Y++)ue=Ce[Y],Le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,oe,we,ue):t.texImage2D(n.TEXTURE_2D,Y,he,oe,we,ue);g.generateMipmaps=!1}else if(Le){if(ze){const Y=ke($);t.texStorage2D(n.TEXTURE_2D,ae,he,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,we,$)}else t.texImage2D(n.TEXTURE_2D,0,he,oe,we,$);h(g)&&M(G),le.__version=re.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ee(w,g,F){if(g.image.length!==6)return;const G=K(w,g),k=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const re=i.get(k);if(k.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+F);const le=Ze.getPrimaries(Ze.workingColorSpace),W=g.colorSpace===$n?null:Ze.getPrimaries(g.colorSpace),$=g.colorSpace===$n||le===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!oe&&!we?he[Q]=p(g.image[Q],!0,r.maxCubemapSize):he[Q]=we?g.image[Q].image:g.image[Q],he[Q]=nt(g,he[Q]);const ue=he[0],Ce=s.convert(g.format,g.colorSpace),Le=s.convert(g.type),ze=v(g.internalFormat,Ce,Le,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,ae=re.__version===void 0||G===!0,Y=k.dataReady;let ce=y(g,ue);De(n.TEXTURE_CUBE_MAP,g);let de;if(oe){L&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ze,ue.width,ue.height);for(let Q=0;Q<6;Q++){de=he[Q].mipmaps;for(let ye=0;ye<de.length;ye++){const Se=de[ye];g.format!==dn?Ce!==null?L?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ze,Se.width,Se.height,0,Se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Se.width,Se.height,Ce,Le,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ze,Se.width,Se.height,0,Ce,Le,Se.data)}}}else{if(de=g.mipmaps,L&&ae){de.length>0&&ce++;const Q=ke(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(we){L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Ce,Le,he[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,he[Q].width,he[Q].height,0,Ce,Le,he[Q].data);for(let ye=0;ye<de.length;ye++){const mt=de[ye].image[Q].image;L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,mt.width,mt.height,Ce,Le,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ze,mt.width,mt.height,0,Ce,Le,mt.data)}}else{L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,Le,he[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Ce,Le,he[Q]);for(let ye=0;ye<de.length;ye++){const Se=de[ye];L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Ce,Le,Se.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ze,Ce,Le,Se.image[Q])}}}h(g)&&M(n.TEXTURE_CUBE_MAP),re.__version=k.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Te(w,g,F,G,k,re){const le=s.convert(F.format,F.colorSpace),W=s.convert(F.type),$=v(F.internalFormat,le,W,F.normalized,F.colorSpace),oe=i.get(g),we=i.get(F);if(we.__renderTarget=g,!oe.__hasExternalTextures){const he=Math.max(1,g.width>>re),ue=Math.max(1,g.height>>re);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,re,$,he,ue,g.depth,0,le,W,null):t.texImage2D(k,re,$,he,ue,0,le,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,k,we.__webglTexture,0,pt(g)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,k,we.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(w,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){const G=g.depthTexture,k=G&&G.isDepthTexture?G.type:null,re=b(g.stencilBuffer,k),le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(g),re,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,w)}else{const G=g.textures;for(let k=0;k<G.length;k++){const re=G[k],le=s.convert(re.format,re.colorSpace),W=s.convert(re.type),$=v(re.internalFormat,le,W,re.normalized,re.colorSpace);xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(g),$,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(g),$,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,$,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(w,g,F){const G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=i.get(g.depthTexture);if(k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(k.__webglInit===void 0&&(k.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),k.__webglTexture===void 0){k.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),De(n.TEXTURE_CUBE_MAP,g.depthTexture);const oe=s.convert(g.depthTexture.format),we=s.convert(g.depthTexture.type);let he;g.depthTexture.format===zn?he=n.DEPTH_COMPONENT24:g.depthTexture.format===li&&(he=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,g.width,g.height,0,oe,we,null)}}else J(g.depthTexture,0);const re=k.__webglTexture,le=pt(g),W=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,$=g.depthTexture.format===li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===zn)xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,W,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,$,W,re,0);else if(g.depthTexture.format===li)xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,W,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,$,W,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(w){const g=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const k=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",k)};G.addEventListener("dispose",k),g.__depthDisposeCallback=k}g.__boundDepthTexture=G}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Oe(g.__webglFramebuffer[G],w,G);else{const G=w.texture.mipmaps;G&&G.length>0?Oe(g.__webglFramebuffer[0],w,0):Oe(g.__webglFramebuffer,w,0)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),tt(g.__webglDepthbuffer[G],w,!1);else{const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,re)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),tt(g.__webglDepthbuffer,w,!1);else{const k=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(w,g,F){const G=i.get(w);g!==void 0&&Te(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ke(w)}function Be(w){const g=w.texture,F=i.get(w),G=i.get(g);w.addEventListener("dispose",x);const k=w.textures,re=w.isWebGLCubeRenderTarget===!0,le=k.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[W]=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[W][$]=n.createFramebuffer()}else F.__webglFramebuffer[W]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)F.__webglFramebuffer[W]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(le)for(let W=0,$=k.length;W<$;W++){const oe=i.get(k[W]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&xt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<k.length;W++){const $=k[W];F.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[W]);const oe=s.convert($.format,$.colorSpace),we=s.convert($.type),he=v($.internalFormat,oe,we,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),ue=pt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,F.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),De(n.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Te(F.__webglFramebuffer[W][$],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else Te(F.__webglFramebuffer[W],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);h(g)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let W=0,$=k.length;W<$;W++){const oe=k[W],we=i.get(oe);let he=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),De(he,oe),Te(F.__webglFramebuffer,w,oe,n.COLOR_ATTACHMENT0+W,he,0),h(oe)&&M(he)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(W=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,G.__webglTexture),De(W,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Te(F.__webglFramebuffer[$],w,g,n.COLOR_ATTACHMENT0,W,$);else Te(F.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,W,0);h(g)&&M(W),t.unbindTexture()}w.depthBuffer&&Ke(w)}function _t(w){const g=w.textures;for(let F=0,G=g.length;F<G;F++){const k=g[F];if(h(k)){const re=T(w),le=i.get(k).__webglTexture;t.bindTexture(re,le),M(re),t.unbindTexture()}}}const gt=[],st=[];function dt(w){if(w.samples>0){if(xt(w)===!1){const g=w.textures,F=w.width,G=w.height;let k=n.COLOR_BUFFER_BIT;const re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(w),W=g.length>1;if(W)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const $=w.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const we=i.get(g[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,k,n.NEAREST),l===!0&&(gt.length=0,st.length=0,gt.push(n.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(gt.push(re),st.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,st)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const we=i.get(g[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function pt(w){return Math.min(r.maxSamples,w.samples)}function xt(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(w){const g=a.render.frame;f.get(w)!==g&&(f.set(w,g),w.update())}function nt(w,g){const F=w.colorSpace,G=w.format,k=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==es&&F!==$n&&(Ze.getTransfer(F)===rt?(G!==dn||k!==an)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),g}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=se,this.setTextureCube=ne,this.rebindTextures=Ie,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function u_(n,e){function t(i,r=$n){let s;const a=Ze.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===Xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sc)return n.BYTE;if(i===ac)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Wa)return n.INT;if(i===bn)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===cc)return n.ALPHA;if(i===hc)return n.RGB;if(i===dn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===li)return n.DEPTH_STENCIL;if(i===Ya)return n.RED;if(i===Za)return n.RED_INTEGER;if(i===hi)return n.RG;if(i===Ka)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===Zr||i===Kr)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ha||i===ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===la)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===da||i===pa||i===ma||i===_a||i===Qr||i===ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fa||i===da)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ma)return s.COMPRESSED_R11_EAC;if(i===_a)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return s.COMPRESSED_RG11_EAC;if(i===ga)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xa||i===va||i===Ma||i===Sa||i===Ea||i===ya||i===ba||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ya)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ca)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===Ia||i===Na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===La)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ua||i===Fa||i===jr||i===Oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`;class p_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Tn({vertexShader:f_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m_ extends jn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",p=new p_,h={},M=t.getContextAttributes();let T=null,v=null;const b=[],y=[],R=new Fe;let x=null;const A=new rn;A.viewport=new St;const P=new rn;P.viewport=new St;const C=[A,P],D=new Eu;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new bs,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new bs,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new bs,b[K]=ie),ie.getHandSpace()};function O(K){const ie=y.indexOf(K.inputSource);if(ie===-1)return;const te=b[ie];te!==void 0&&(te.update(K.inputSource,K.frame,c||a),te.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let K=0;K<b.length;K++){const ie=y[K];ie!==null&&(y[K]=null,b[K].disconnect(ie))}X=null,Z=null,p.reset();for(const K in h)delete h[K];e.setRenderTarget(T),m=null,u=null,d=null,r=null,v=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ue=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?li:zn,Ue=M.stencil?hr:bn);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Te),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new yn(u.textureWidth,u.textureHeight,{format:dn,type:an,depthTexture:new Vi(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new yn(m.framebufferWidth,m.framebufferHeight,{format:dn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(K){for(let ie=0;ie<K.removed.length;ie++){const te=K.removed[ie],Ue=y.indexOf(te);Ue>=0&&(y[Ue]=null,b[Ue].disconnect(te))}for(let ie=0;ie<K.added.length;ie++){const te=K.added[ie];let Ue=y.indexOf(te);if(Ue===-1){for(let Te=0;Te<b.length;Te++)if(Te>=y.length){y.push(te),Ue=Te;break}else if(y[Te]===null){y[Te]=te,Ue=Te;break}if(Ue===-1)break}const Ee=b[Ue];Ee&&Ee.connect(te)}}const J=new N,j=new N;function se(K,ie,te){J.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);const Ue=J.distanceTo(j),Ee=ie.projectionMatrix.elements,Te=te.projectionMatrix.elements,tt=Ee[14]/(Ee[10]-1),Oe=Ee[14]/(Ee[10]+1),Ke=(Ee[9]+1)/Ee[5],Ie=(Ee[9]-1)/Ee[5],Be=(Ee[8]-1)/Ee[0],_t=(Te[8]+1)/Te[0],gt=tt*Be,st=tt*_t,dt=Ue/(-Be+_t),pt=dt*-Be;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const xt=tt+dt,I=Oe+dt,nt=gt-pt,ke=st+(Ue-pt),w=Ke*Oe/I*xt,g=Ie*Oe/I*xt;K.projectionMatrix.makePerspective(nt,ke,w,g,xt,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,te=K.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(te=p.depthFar)),D.near=P.near=A.near=ie,D.far=P.far=A.far=te,(X!==D.near||Z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,Z=D.far),D.layers.mask=K.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ue=K.parent,Ee=D.cameras;ne(D,Ue);for(let Te=0;Te<Ee.length;Te++)ne(Ee[Te],Ue);Ee.length===2?se(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),fe(K,D,Ue)};function fe(K,ie,te){te===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ur*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return h[K]};let Ge=null;function Ve(K,ie){if(f=ie.getViewerPose(c||a),_=ie,f!==null){const te=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ue=!1;te.length!==D.cameras.length&&(D.cameras.length=0,Ue=!0);for(let Oe=0;Oe<te.length;Oe++){const Ke=te[Oe];let Ie=null;if(m!==null)Ie=m.getViewport(Ke);else{const _t=d.getViewSubImage(u,Ke);Ie=_t.viewport,Oe===0&&(e.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(v))}let Be=C[Oe];Be===void 0&&(Be=new rn,Be.layers.enable(Oe),Be.viewport=new St,C[Oe]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Oe===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ue===!0&&D.cameras.push(Be)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const Oe=d.getDepthInformation(te[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,r.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let Oe=0;Oe<te.length;Oe++){const Ke=te[Oe].camera;if(Ke){let Ie=h[Ke];Ie||(Ie=new xc,h[Ke]=Ie);const Be=d.getCameraImage(Ke);Ie.sourceTexture=Be}}}}for(let te=0;te<b.length;te++){const Ue=y[te],Ee=b[te];Ue!==null&&Ee!==void 0&&Ee.update(Ue,ie,c||a)}Ge&&Ge(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const De=new Ec;De.setAnimationLoop(Ve),this.setAnimationLoop=function(K){Ge=K},this.dispose=function(){}}}const __=new ut,Cc=new He;Cc.set(-1,0,0,0,1,0,0,0,1);function g_(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,vc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,M,T,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(p,h):h.isMeshLambertMaterial?(s(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),f(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),E(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,M,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Wt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Wt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const M=e.get(h),T=M.envMap,v=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cc),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,M,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*M,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function f(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,M){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Wt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function E(p,h){const M=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const y=b.program;i.uniformBlockBinding(v,y)}function c(v,b){let y=r[v.id];y===void 0&&(p(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(v,R);const x=e.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function f(v){const b=d();v.__bindingPointIndex=b;const y=n.createBuffer(),R=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=r[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,A=y.length;x<A;x++){const P=y[x];if(Array.isArray(P))for(let C=0,D=P.length;C<D;C++)m(P[C],x,C,R);else m(P,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,b,y,R){if(E(v,b,y,R)===!0){const x=v.__offset,A=v.value;if(Array.isArray(A)){let P=0;for(let C=0;C<A.length;C++){const D=A[C],X=h(D);_(D,v.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function _(v,b,y){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,y)}function E(v,b,y,R){const x=v.value,A=b+"_"+y;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:ArrayBuffer.isView(x)?R[A]=x.slice():R[A]=x.clone(),!0;{const P=R[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(v){const b=v.uniforms;let y=0;const R=16;for(let A=0,P=b.length;A<P;A++){const C=Array.isArray(b[A])?b[A]:[b[A]];for(let D=0,X=C.length;D<X;D++){const Z=C[D],O=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,H=O.length;q<H;q++){const J=O[q],j=h(J),se=y%R,ne=se%j.boundary,fe=se+ne;y+=ne,fe!==0&&R-fe<j.storage&&(y+=R-fe),Z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=j.storage}}}const x=y%R;return x>0&&(y+=R-x),v.__size=y,v.__cache={},this}function h(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){const b=v.target;b.removeEventListener("dispose",M);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function T(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}const v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function M_(){return vn===null&&(vn=new _c(v_,16,16,hi,Bn),vn.name="DFG_LUT",vn.minFilter=Ft,vn.magFilter=Ft,vn.wrapS=Nn,vn.wrapT=Nn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class S_{constructor(e={}){const{canvas:t=bh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=an}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=m,p=new Set([$a,Ka,Za]),h=new Set([an,bn,cr,hr,Xa,qa]),M=new Uint32Array(4),T=new Int32Array(4),v=new N;let b=null,y=null;const R=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,D=null,X=null,Z=null,O=null;this._outputColorSpace=Jt;let q=0,H=0,J=null,j=-1,se=null;const ne=new St,fe=new St;let Ge=null;const Ve=new Je(0);let De=0,K=t.width,ie=t.height,te=1,Ue=null,Ee=null;const Te=new St(0,0,K,ie),tt=new St(0,0,K,ie);let Oe=!1;const Ke=new no;let Ie=!1,Be=!1;const _t=new ut,gt=new N,st=new St,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function xt(){return J===null?te:1}let I=i;function nt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",jt,!1),I===null){const U="webgl2";if(I=nt(U,S),I===null)throw nt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw $e("WebGLRenderer: "+S.message),S}let ke,w,g,F,G,k,re,le,W,$,oe,we,he,ue,Ce,Le,ze,L,ae,Y,ce,de,Q;function ye(){ke=new Mp(I),ke.init(),ce=new u_(I,ke),w=new fp(I,ke,e,ce),g=new c_(I,ke),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),X=I.createFramebuffer(),Z=I.createFramebuffer(),O=I.createFramebuffer(),F=new yp(I),G=new Km,k=new h_(I,ke,g,G,w,ce,F),re=new vp(P),le=new Au(I),de=new hp(I,le),W=new Sp(I,le,F,de),$=new Tp(I,W,le,de,F),L=new bp(I,w,k),Ce=new dp(G),oe=new Zm(P,re,ke,w,de,Ce),we=new g_(P,G),he=new Jm,ue=new i_(ke),ze=new cp(P,re,g,$,_,l),Le=new l_(P,$,w),Q=new x_(I,F,w,g),ae=new up(I,ke,F),Y=new Ep(I,ke,F),F.programs=oe.programs,P.capabilities=w,P.extensions=ke,P.properties=G,P.renderLists=he,P.shadowMap=Le,P.state=g,P.info=F}ye(),E!==an&&(A=new wp(E,t.width,t.height,o,r,s));const Se=new m_(P,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(K,ie,!1))},this.getSize=function(S){return S.set(K,ie)},this.setSize=function(S,U,V=!0){if(Se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,ie=U,t.width=Math.floor(S*te),t.height=Math.floor(U*te),V===!0&&(t.style.width=S+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(K*te,ie*te).floor()},this.setDrawingBufferSize=function(S,U,V){K=S,ie=U,te=V,t.width=Math.floor(S*V),t.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(E===an){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,U,V,B){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,U,V,B),g.viewport(ne.copy(Te).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,U,V,B){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,U,V,B),g.scissor(fe.copy(tt).multiplyScalar(te).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(S){g.setScissorTest(Oe=S)},this.setOpaqueSort=function(S){Ue=S},this.setTransparentSort=function(S){Ee=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,V=!0){let B=0;if(S){let z=!1;if(J!==null){const _e=J.texture.format;z=p.has(_e)}if(z){const _e=J.texture.type,ve=h.has(_e),me=ze.getClearColor(),Ae=ze.getClearAlpha(),Re=me.r,We=me.g,qe=me.b;ve?(M[0]=Re,M[1]=We,M[2]=qe,M[3]=Ae,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=Re,T[1]=We,T[2]=qe,T[3]=Ae,I.clearBufferiv(I.COLOR,0,T))}else B|=I.COLOR_BUFFER_BIT}U&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",jt,!1),ze.dispose(),he.dispose(),ue.dispose(),G.dispose(),re.dispose(),$.dispose(),de.dispose(),Q.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",et),Se.removeEventListener("sessionend",Yt),Tt.stop()};function mt(S){S.preventDefault(),Do("WebGLRenderer: Context Lost."),C=!0}function it(){Do("WebGLRenderer: Context Restored."),C=!1;const S=F.autoReset,U=Le.enabled,V=Le.autoUpdate,B=Le.needsUpdate,z=Le.type;ye(),F.autoReset=S,Le.enabled=U,Le.autoUpdate=V,Le.needsUpdate=B,Le.type=z}function jt(S){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){const U=S.target;U.removeEventListener("dispose",ee),ge(U)}function ge(S){Me(S),G.remove(S)}function Me(S){const U=G.get(S).programs;U!==void 0&&(U.forEach(function(V){oe.releaseProgram(V)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,B,z,_e){U===null&&(U=dt);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=Hc(S,U,V,B,z);g.setMaterial(B,ve);let Ae=V.index,Re=1;if(B.wireframe===!0){if(Ae=W.getWireframeAttribute(V),Ae===void 0)return;Re=2}const We=V.drawRange,qe=V.attributes.position;let Pe=We.start*Re,at=(We.start+We.count)*Re;_e!==null&&(Pe=Math.max(Pe,_e.start*Re),at=Math.min(at,(_e.start+_e.count)*Re)),Ae!==null?(Pe=Math.max(Pe,0),at=Math.min(at,Ae.count)):qe!=null&&(Pe=Math.max(Pe,0),at=Math.min(at,qe.count));const Et=at-Pe;if(Et<0||Et===1/0)return;de.setup(z,B,me,V,Ae);let Mt,lt=ae;if(Ae!==null&&(Mt=le.get(Ae),lt=Y,lt.setIndex(Mt)),z.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*xt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(z.isLine){let It=B.linewidth;It===void 0&&(It=1),g.setLineWidth(It*xt()),z.isLineSegments?lt.setMode(I.LINES):z.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else z.isPoints?lt.setMode(I.POINTS):z.isSprite&&lt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const It=z._multiDrawStarts,xe=z._multiDrawCounts,Zt=z._multiDrawCount,Qe=Ae?le.get(Ae).bytesPerElement:1,tn=G.get(B).currentProgram.getUniforms();for(let gn=0;gn<Zt;gn++)tn.setValue(I,"_gl_DrawID",gn),lt.render(It[gn]/Qe,xe[gn])}else if(z.isInstancedMesh)lt.renderInstances(Pe,Et,z.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,It);lt.renderInstances(Pe,Et,xe)}else lt.render(Pe,Et)};function je(S,U,V){S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,An(S,U,V),S.side=Qn,S.needsUpdate=!0,An(S,U,V),S.side=In):An(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),y=ue.get(V),y.init(U),x.push(y),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),y.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _e=z.material;if(_e)if(Array.isArray(_e))for(let ve=0;ve<_e.length;ve++){const me=_e[ve];je(me,V,z),B.add(me)}else je(_e,V,z),B.add(_e)}),y=x.pop(),B},this.compileAsync=function(S,U,V=null){const B=this.compile(S,U,V);return new Promise(z=>{function _e(){if(B.forEach(function(ve){G.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){z(S);return}setTimeout(_e,10)}ke.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let vt=null;function be(S){vt&&vt(S)}function et(){Tt.stop()}function Yt(){Tt.start()}const Tt=new Ec;Tt.setAnimationLoop(be),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){vt=S,Se.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},Se.addEventListener("sessionstart",et),Se.addEventListener("sessionend",Yt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(S,U);const V=Se.enabled===!0&&Se.isPresenting===!0,B=A!==null&&(J===null||V)&&A.begin(P,J);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(U),U=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,J),y=ue.get(S,x.length),y.init(U),y.state.textureUnits=k.getTextureUnits(),x.push(y),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ke.setFromProjectionMatrix(_t,Sn,U.reversedDepth),Be=this.localClippingEnabled,Ie=Ce.init(this.clippingPlanes,Be),b=he.get(S,R.length),b.init(),R.push(b),Se.enabled===!0&&Se.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&en(ve,U,-1/0,P.sortObjects)}en(S,U,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Ue,Ee,U.reversedDepth),pt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,pt&&ze.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&Ce.beginShadows();const z=y.state.shadowsArray;if(Le.render(z,S,U),Ie===!0&&Ce.endShadows(),(B&&A.hasRenderPass())===!1){const ve=b.opaque,me=b.transmissive;if(y.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(me.length>0)for(let Re=0,We=Ae.length;Re<We;Re++){const qe=Ae[Re];_n(ve,me,S,qe)}pt&&ze.render(S);for(let Re=0,We=Ae.length;Re<We;Re++){const qe=Ae[Re];on(b,S,qe,qe.viewport)}}else me.length>0&&_n(ve,me,S,U),pt&&ze.render(S),on(b,S,U)}J!==null&&H===0&&(k.updateMultisampleRenderTarget(J),k.updateRenderTargetMipmap(J)),B&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),de.resetDefaultState(),j=-1,se=null,x.pop(),x.length>0?(y=x[x.length-1],k.setTextureUnits(y.state.textureUnits),Ie===!0&&Ce.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,D!==null&&D.renderEnd()};function en(S,U,V,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ke.intersectsSprite(S)){B&&st.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const ve=$.update(S),me=S.material;me.visible&&b.push(S,ve,me,V,st.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ke.intersectsObject(S))){const ve=$.update(S),me=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),st.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),st.copy(ve.boundingSphere.center)),st.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(me)){const Ae=ve.groups;for(let Re=0,We=Ae.length;Re<We;Re++){const qe=Ae[Re],Pe=me[qe.materialIndex];Pe&&Pe.visible&&b.push(S,ve,Pe,V,st.z,qe)}}else me.visible&&b.push(S,ve,me,V,st.z,null)}}const _e=S.children;for(let ve=0,me=_e.length;ve<me;ve++)en(_e[ve],U,V,B)}function on(S,U,V,B){const{opaque:z,transmissive:_e,transparent:ve}=S;y.setupLightsView(V),Ie===!0&&Ce.setGlobalState(P.clippingPlanes,V),B&&g.viewport(ne.copy(B)),z.length>0&&pi(z,U,V),_e.length>0&&pi(_e,U,V),ve.length>0&&pi(ve,U,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function _n(S,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Pe=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new yn(1,1,{generateMipmaps:!0,type:Pe?Bn:an,minFilter:oi,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const _e=y.state.transmissionRenderTarget[B.id],ve=B.viewport||ne;_e.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(Ve),De=P.getClearAlpha(),De<1&&P.setClearColor(16777215,.5),P.clear(),pt&&ze.render(V);const We=P.toneMapping;P.toneMapping=En;const qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),Ie===!0&&Ce.setGlobalState(P.clippingPlanes,B),pi(S,V,B),k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let at=0,Et=U.length;at<Et;at++){const Mt=U[at],{object:lt,geometry:It,material:xe,group:Zt}=Mt;if(xe.side===In&&lt.layers.test(B.layers)){const Qe=xe.side;xe.side=Wt,xe.needsUpdate=!0,_r(lt,V,B,It,xe,Zt),xe.side=Qe,xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e))}P.setRenderTarget(me,Ae,Re),P.setClearColor(Ve,De),qe!==void 0&&(B.viewport=qe),P.toneMapping=We}function pi(S,U,V){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_e=S.length;z<_e;z++){const ve=S[z],{object:me,geometry:Ae,group:Re}=ve;let We=ve.material;We.allowOverride===!0&&B!==null&&(We=B),me.layers.test(V.layers)&&_r(me,U,V,Ae,We,Re)}}function _r(S,U,V,B,z,_e){S.onBeforeRender(P,U,V,B,z,_e),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,U,V,B,S,_e),z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,P.renderBufferDirect(V,U,B,z,S,_e),z.side=Qn,z.needsUpdate=!0,P.renderBufferDirect(V,U,B,z,S,_e),z.side=In):P.renderBufferDirect(V,U,B,z,S,_e),S.onAfterRender(P,U,V,B,z,_e)}function An(S,U,V){U.isScene!==!0&&(U=dt);const B=G.get(S),z=y.state.lights,_e=y.state.shadowsArray,ve=z.state.version,me=oe.getParameters(S,z.state,_e,U,V,y.state.lightProbeGridArray),Ae=oe.getProgramCacheKey(me);let Re=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const We=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=re.get(S.envMap||B.environment,We),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",ee),Re=new Map,B.programs=Re);let qe=Re.get(Ae);if(qe!==void 0){if(B.currentProgram===qe&&B.lightsStateVersion===ve)return vo(S,me),qe}else me.uniforms=oe.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,V,me),S.onBeforeCompile(me,P),qe=oe.acquireProgram(me,Ae),Re.set(Ae,qe),B.uniforms=me.uniforms;const Pe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Ce.uniform),vo(S,me),B.needsLights=Wc(S),B.lightsStateVersion=ve,B.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=y.state.lightProbeGridArray.length>0,B.currentProgram=qe,B.uniformsList=null,qe}function xo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function vo(S,U){const V=G.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Vc(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let V=0,B=S.length;V<B;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Hc(S,U,V,B,z){U.isScene!==!0&&(U=dt),k.resetTextureUnits();const _e=U.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,me=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ze.workingColorSpace,Ae=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=re.get(B.envMap||ve,Ae),We=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,Et=!!V.morphAttributes.color;let Mt=En;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=lt!==void 0?lt.length:0,xe=G.get(B),Zt=y.state.lights;if(Ie===!0&&(Be===!0||S!==se)){const ft=S===se&&B.id===j;Ce.setState(B,S,ft)}let Qe=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Zt.state.version||xe.outputColorSpace!==me||z.isBatchedMesh&&xe.batching===!1||!z.isBatchedMesh&&xe.batching===!0||z.isBatchedMesh&&xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&xe.instancing===!1||!z.isInstancedMesh&&xe.instancing===!0||z.isSkinnedMesh&&xe.skinning===!1||!z.isSkinnedMesh&&xe.skinning===!0||z.isInstancedMesh&&xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xe.instancingMorph===!1&&z.morphTexture!==null||xe.envMap!==Re||B.fog===!0&&xe.fog!==_e||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==We||xe.vertexTangents!==qe||xe.morphTargets!==Pe||xe.morphNormals!==at||xe.morphColors!==Et||xe.toneMapping!==Mt||xe.morphTargetsCount!==It||!!xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,xe.__version=B.version);let tn=xe.currentProgram;Qe===!0&&(tn=An(B,U,z),D&&B.isNodeMaterial&&D.onUpdateProgram(B,tn,xe));let gn=!1,Vn=!1,mi=!1;const ct=tn.getUniforms(),yt=xe.uniforms;if(g.useProgram(tn.program)&&(gn=!0,Vn=!0,mi=!0),B.id!==j&&(j=B.id,Vn=!0),xe.needsLights){const ft=Vc(y.state.lightProbeGridArray,z);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,Vn=!0)}if(gn||se!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",S.projectionMatrix),ct.setValue(I,"viewMatrix",S.matrixWorldInverse);const kn=ct.map.cameraPosition;kn!==void 0&&kn.setValue(I,gt.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),se!==S&&(se=S,Vn=!0,mi=!0)}if(xe.needsLights&&(Zt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Zt.state.directionalShadowMap,k),Zt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Zt.state.spotShadowMap,k),Zt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Zt.state.pointShadowMap,k)),z.isSkinnedMesh){ct.setOptional(I,z,"bindMatrix"),ct.setOptional(I,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(I,"boneTexture",ft.boneTexture,k))}z.isBatchedMesh&&(ct.setOptional(I,z,"batchingTexture"),ct.setValue(I,"batchingTexture",z._matricesTexture,k),ct.setOptional(I,z,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",z._indirectTexture,k),ct.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",z._colorsTexture,k));const Hn=V.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&L.update(z,V,tn),(Vn||xe.receiveShadow!==z.receiveShadow)&&(xe.receiveShadow=z.receiveShadow,ct.setValue(I,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=M_()),Vn){if(ct.setValue(I,"toneMappingExposure",P.toneMappingExposure),xe.needsLights&&kc(yt,mi),_e&&B.fog===!0&&we.refreshFogUniforms(yt,_e),we.refreshMaterialUniforms(yt,B,te,ie,y.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;yt.probesSH.value=ft.texture,yt.probesMin.value.copy(ft.boundingBox.min),yt.probesMax.value.copy(ft.boundingBox.max),yt.probesResolution.value.copy(ft.resolution)}$r.upload(I,xo(xe),yt,k)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($r.upload(I,xo(xe),yt,k),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(I,"center",z.center),ct.setValue(I,"modelViewMatrix",z.modelViewMatrix),ct.setValue(I,"normalMatrix",z.normalMatrix),ct.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let kn=0,_i=ft.length;kn<_i;kn++){const Mo=ft[kn];Q.update(Mo,tn),Q.bind(Mo,tn)}}return tn}function kc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Wc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(S,U,V){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=U,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const V=G.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){J=S,q=U,H=V;let B=null,z=!1,_e=!1;if(S){const me=G.get(S);if(me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(S.viewport),fe.copy(S.scissor),Ge=S.scissorTest,g.viewport(ne),g.scissor(fe),g.setScissorTest(Ge),j=-1;return}else if(me.__webglFramebuffer===void 0)k.setupRenderTarget(S);else if(me.__hasExternalTextures)k.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const We=S.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&G.has(We)&&(S.width!==We.image.width||S.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);const Re=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?B=Re[U][V]:B=Re[U],z=!0):S.samples>0&&k.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[V]:B=Re,ne.copy(S.viewport),fe.copy(S.scissor),Ge=S.scissorTest}else ne.copy(Te).multiplyScalar(te).floor(),fe.copy(tt).multiplyScalar(te).floor(),Ge=Oe;if(V!==0&&(B=X),g.bindFramebuffer(I.FRAMEBUFFER,B)&&g.drawBuffers(S,B),g.viewport(ne),g.scissor(fe),g.setScissorTest(Ge),z){const me=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,V)}else if(_e){const me=U;for(let Ae=0;Ae<S.textures.length;Ae++){const Re=G.get(S.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,V,me)}}else if(S!==null&&V!==0){const me=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,V)}j=-1},this.readRenderTargetPixels=function(S,U,V,B,z,_e,ve,me=0){if(!(S&&S.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){g.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Re=S.textures[me],We=Re.format,qe=Re.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!w.textureFormatReadable(We)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(qe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&V>=0&&V<=S.height-z&&I.readPixels(U,V,B,z,ce.convert(We),ce.convert(qe),_e)}finally{const Re=J!==null?G.get(J).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,B,z,_e,ve,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae)if(U>=0&&U<=S.width-B&&V>=0&&V<=S.height-z){g.bindFramebuffer(I.FRAMEBUFFER,Ae);const Re=S.textures[me],We=Re.format,qe=Re.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!w.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(U,V,B,z,ce.convert(We),ce.convert(qe),0);const at=J!==null?G.get(J).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,at);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Th(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Pe),I.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,V=0){const B=Math.pow(2,-V),z=Math.floor(S.image.width*B),_e=Math.floor(S.image.height*B),ve=U!==null?U.x:0,me=U!==null?U.y:0;k.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ve,me,z,_e),g.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,B=null,z=0,_e=0){let ve,me,Ae,Re,We,qe,Pe,at,Et;const Mt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(V!==null)ve=V.max.x-V.min.x,me=V.max.y-V.min.y,Ae=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,We=V.min.y,qe=V.isBox3?V.min.z:0;else{const yt=Math.pow(2,-z);ve=Math.floor(Mt.width*yt),me=Math.floor(Mt.height*yt),S.isDataArrayTexture?Ae=Mt.depth:S.isData3DTexture?Ae=Math.floor(Mt.depth*yt):Ae=1,Re=0,We=0,qe=0}B!==null?(Pe=B.x,at=B.y,Et=B.z):(Pe=0,at=0,Et=0);const lt=ce.convert(U.format),It=ce.convert(U.type);let xe;U.isData3DTexture?(k.setTexture3D(U,0),xe=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(k.setTexture2DArray(U,0),xe=I.TEXTURE_2D_ARRAY):(k.setTexture2D(U,0),xe=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=g.getParameter(I.UNPACK_ROW_LENGTH),Qe=g.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=g.getParameter(I.UNPACK_SKIP_PIXELS),gn=g.getParameter(I.UNPACK_SKIP_ROWS),Vn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(I.UNPACK_SKIP_ROWS,We),g.pixelStorei(I.UNPACK_SKIP_IMAGES,qe);const mi=S.isDataArrayTexture||S.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const yt=G.get(S),Hn=G.get(U),ft=G.get(yt.__renderTarget),kn=G.get(Hn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let _i=0;_i<Ae;_i++)mi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,qe+_i),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(U).__webglTexture,_e,Et+_i)),I.blitFramebuffer(Re,We,ve,me,Pe,at,ve,me,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){const yt=G.get(S),Hn=G.get(U);g.bindFramebuffer(I.READ_FRAMEBUFFER,Z),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let ft=0;ft<Ae;ft++)mi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,z,qe+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,z),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Hn.__webglTexture,_e,Et+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Hn.__webglTexture,_e),z!==0?I.blitFramebuffer(Re,We,ve,me,Pe,at,ve,me,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(xe,_e,Pe,at,Et+ft,Re,We,ve,me):I.copyTexSubImage2D(xe,_e,Pe,at,Re,We,ve,me);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(xe,_e,Pe,at,Et,ve,me,Ae,lt,It,Mt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,_e,Pe,at,Et,ve,me,Ae,lt,Mt.data):I.texSubImage3D(xe,_e,Pe,at,Et,ve,me,Ae,lt,It,Mt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Pe,at,ve,me,lt,It,Mt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Pe,at,Mt.width,Mt.height,lt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Pe,at,ve,me,lt,It,Mt);g.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),g.pixelStorei(I.UNPACK_SKIP_ROWS,gn),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Vn),_e===0&&U.generateMipmaps&&I.generateMipmap(xe),g.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&k.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?k.setTextureCube(S,0):S.isData3DTexture?k.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?k.setTexture2DArray(S,0):k.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){q=0,H=0,J=null,g.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Il={type:"change"},so={type:"start"},Pc={type:"end"},kr=new us,Nl=new Ln,E_=Math.cos(70*Ii.DEG2RAD),At=new N,kt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zs=1e-6;class y_ extends bu{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Gn,this._lastTargetPosition=new N,this._quat=new Gn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ol,this._sphericalDelta=new ol,this._scale=1,this._panOffset=new N,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new N,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=b_.bind(this),this._onPointerUp=A_.bind(this),this._onContextMenu=I_.bind(this),this._onMouseWheel=C_.bind(this),this._onKeyDown=P_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=L_.bind(this),this._onMouseDown=w_.bind(this),this._onMouseMove=R_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=U_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Il),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=At.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<E_?this.object.lookAt(this.target):(Nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(Nl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zs||this._lastTargetPosition.distanceToSquared(this.target)>Zs?(this.dispatchEvent(Il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;At.copy(r).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function b_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pc),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function w_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case Ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case Ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(so)}function R_(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function C_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(so),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pc))}function P_(n){this.enabled!==!1&&this._handleKeyDown(n)}function D_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(so)}function L_(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function I_(n){this.enabled!==!1&&n.preventDefault()}function N_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F_(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function s(){var a,o=i.length,l,c=0,f=0,d=0;for(a=0;a<o;++a)l=i[a],c+=l.x||0,f+=l.y||0,d+=l.z||0;for(c=(c/o-n)*r,f=(f/o-e)*r,d=(d/o-t)*r,a=0;a<o;++a)l=i[a],c&&(l.x-=c),f&&(l.y-=f),d&&(l.z-=d)}return s.initialize=function(a){i=a},s.x=function(a){return arguments.length?(n=+a,s):n},s.y=function(a){return arguments.length?(e=+a,s):e},s.z=function(a){return arguments.length?(t=+a,s):t},s.strength=function(a){return arguments.length?(r=+a,s):r},s}function O_(n){const e=+this._x.call(null,n);return Dc(this.cover(e),e,n)}function Dc(n,e,t){if(isNaN(e))return n;var i,r=n._root,s={data:t},a=n._x0,o=n._x1,l,c,f,d,u;if(!r)return n._root=s,n;for(;r.length;)if((f=e>=(l=(a+o)/2))?a=l:o=l,i=r,!(r=r[d=+f]))return i[d]=s,n;if(c=+n._x.call(null,r.data),e===c)return s.next=r,i?i[d]=s:n._root=s,n;do i=i?i[d]=new Array(2):n._root=new Array(2),(f=e>=(l=(a+o)/2))?a=l:o=l;while((d=+f)==(u=+(c>=l)));return i[u]=r,i[d]=s,n}function B_(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let s=0,a;s<e;++s)isNaN(a=+this._x.call(null,n[s]))||(t[s]=a,a<i&&(i=a),a>r&&(r=a));if(i>r)return this;this.cover(i).cover(r);for(let s=0;s<e;++s)Dc(this,t[s],n[s]);return this}function z_(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,s,a;e>n||n>=t;)switch(a=+(n<e),s=new Array(2),s[a]=r,r=s,i*=2,a){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function G_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function V_(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function On(n,e,t){this.node=n,this.x0=e,this.x1=t}function H_(n,e){var t,i=this._x0,r,s,a=this._x1,o=[],l=this._root,c,f;for(l&&o.push(new On(l,i,a)),e==null?e=1/0:(i=n-e,a=n+e);c=o.pop();)if(!(!(l=c.node)||(r=c.x0)>a||(s=c.x1)<i))if(l.length){var d=(r+s)/2;o.push(new On(l[1],d,s),new On(l[0],r,d)),(f=+(n>=d))&&(c=o[o.length-1],o[o.length-1]=o[o.length-1-f],o[o.length-1-f]=c)}else{var u=Math.abs(n-+this._x.call(null,l.data));u<e&&(e=u,i=n-u,a=n+u,t=l.data)}return t}function k_(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,s,a=this._x0,o=this._x1,l,c,f,d,u;if(!t)return this;if(t.length)for(;;){if((f=l>=(c=(a+o)/2))?a=c:o=c,e=t,!(t=t[d=+f]))return this;if(!t.length)break;e[d+1&1]&&(i=e,u=d)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[d]=s:delete e[d],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[u]=t:this._root=t),this):(this._root=s,this)}function W_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function X_(){return this._root}function q_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Y_(n){var e=[],t,i=this._root,r,s,a;for(i&&e.push(new On(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,s=t.x0,a=t.x1)&&i.length){var o=(s+a)/2;(r=i[1])&&e.push(new On(r,o,a)),(r=i[0])&&e.push(new On(r,s,o))}return this}function Z_(n){var e=[],t=[],i;for(this._root&&e.push(new On(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.x1,l=(a+o)/2;(s=r[0])&&e.push(new On(s,a,l)),(s=r[1])&&e.push(new On(s,l,o))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function K_(n){return n[0]}function $_(n){return arguments.length?(this._x=n,this):this._x}function ao(n,e){var t=new oo(e??K_,NaN,NaN);return n==null?t:t.addAll(n)}function oo(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Ul(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var qt=ao.prototype=oo.prototype;qt.copy=function(){var n=new oo(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Ul(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Ul(i));return n};qt.add=O_;qt.addAll=B_;qt.cover=z_;qt.data=G_;qt.extent=V_;qt.find=H_;qt.remove=k_;qt.removeAll=W_;qt.root=X_;qt.size=q_;qt.visit=Y_;qt.visitAfter=Z_;qt.x=$_;function J_(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Lc(this.cover(e,t),e,t,n)}function Lc(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,a={data:i},o=n._x0,l=n._y0,c=n._x1,f=n._y1,d,u,m,_,E,p,h,M;if(!s)return n._root=a,n;for(;s.length;)if((E=e>=(d=(o+c)/2))?o=d:c=d,(p=t>=(u=(l+f)/2))?l=u:f=u,r=s,!(s=s[h=p<<1|E]))return r[h]=a,n;if(m=+n._x.call(null,s.data),_=+n._y.call(null,s.data),e===m&&t===_)return a.next=s,r?r[h]=a:n._root=a,n;do r=r?r[h]=new Array(4):n._root=new Array(4),(E=e>=(d=(o+c)/2))?o=d:c=d,(p=t>=(u=(l+f)/2))?l=u:f=u;while((h=p<<1|E)===(M=(_>=u)<<1|m>=d));return r[M]=s,r[h]=a,n}function Q_(n){var e,t,i=n.length,r,s,a=new Array(i),o=new Array(i),l=1/0,c=1/0,f=-1/0,d=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(a[t]=r,o[t]=s,r<l&&(l=r),r>f&&(f=r),s<c&&(c=s),s>d&&(d=s));if(l>f||c>d)return this;for(this.cover(l,c).cover(f,d),t=0;t<i;++t)Lc(this,a[t],o[t],n[t]);return this}function j_(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var a=r-t||1,o=this._root,l,c;t>n||n>=r||i>e||e>=s;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=o,o=l,a*=2,c){case 0:r=t+a,s=i+a;break;case 1:t=r-a,s=i+a;break;case 2:r=t+a,i=s-a;break;case 3:t=r-a,i=s-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function eg(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function tg(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Gt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function ng(n,e,t){var i,r=this._x0,s=this._y0,a,o,l,c,f=this._x1,d=this._y1,u=[],m=this._root,_,E;for(m&&u.push(new Gt(m,r,s,f,d)),t==null?t=1/0:(r=n-t,s=e-t,f=n+t,d=e+t,t*=t);_=u.pop();)if(!(!(m=_.node)||(a=_.x0)>f||(o=_.y0)>d||(l=_.x1)<r||(c=_.y1)<s))if(m.length){var p=(a+l)/2,h=(o+c)/2;u.push(new Gt(m[3],p,h,l,c),new Gt(m[2],a,h,p,c),new Gt(m[1],p,o,l,h),new Gt(m[0],a,o,p,h)),(E=(e>=h)<<1|n>=p)&&(_=u[u.length-1],u[u.length-1]=u[u.length-1-E],u[u.length-1-E]=_)}else{var M=n-+this._x.call(null,m.data),T=e-+this._y.call(null,m.data),v=M*M+T*T;if(v<t){var b=Math.sqrt(t=v);r=n-b,s=e-b,f=n+b,d=e+b,i=m.data}}return i}function ig(n){if(isNaN(f=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,a=this._x0,o=this._y0,l=this._x1,c=this._y1,f,d,u,m,_,E,p,h;if(!t)return this;if(t.length)for(;;){if((_=f>=(u=(a+l)/2))?a=u:l=u,(E=d>=(m=(o+c)/2))?o=m:c=m,e=t,!(t=t[p=E<<1|_]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,h=p)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[p]=s:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=s,this)}function rg(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function sg(){return this._root}function ag(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function og(n){var e=[],t,i=this._root,r,s,a,o,l;for(i&&e.push(new Gt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,a=t.y0,o=t.x1,l=t.y1)&&i.length){var c=(s+o)/2,f=(a+l)/2;(r=i[3])&&e.push(new Gt(r,c,f,o,l)),(r=i[2])&&e.push(new Gt(r,s,f,c,l)),(r=i[1])&&e.push(new Gt(r,c,a,o,f)),(r=i[0])&&e.push(new Gt(r,s,a,c,f))}return this}function lg(n){var e=[],t=[],i;for(this._root&&e.push(new Gt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.y0,l=i.x1,c=i.y1,f=(a+l)/2,d=(o+c)/2;(s=r[0])&&e.push(new Gt(s,a,o,f,d)),(s=r[1])&&e.push(new Gt(s,f,o,l,d)),(s=r[2])&&e.push(new Gt(s,a,d,f,c)),(s=r[3])&&e.push(new Gt(s,f,d,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function cg(n){return n[0]}function hg(n){return arguments.length?(this._x=n,this):this._x}function ug(n){return n[1]}function fg(n){return arguments.length?(this._y=n,this):this._y}function lo(n,e,t){var i=new co(e??cg,t??ug,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function co(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Fl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ht=lo.prototype=co.prototype;Ht.copy=function(){var n=new co(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Fl(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Fl(i));return n};Ht.add=J_;Ht.addAll=Q_;Ht.cover=j_;Ht.data=eg;Ht.extent=tg;Ht.find=ng;Ht.remove=ig;Ht.removeAll=rg;Ht.root=sg;Ht.size=ag;Ht.visit=og;Ht.visitAfter=lg;Ht.x=hg;Ht.y=fg;function dg(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Ic(this.cover(e,t,i),e,t,i,n)}function Ic(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var s,a=n._root,o={data:r},l=n._x0,c=n._y0,f=n._z0,d=n._x1,u=n._y1,m=n._z1,_,E,p,h,M,T,v,b,y,R,x;if(!a)return n._root=o,n;for(;a.length;)if((v=e>=(_=(l+d)/2))?l=_:d=_,(b=t>=(E=(c+u)/2))?c=E:u=E,(y=i>=(p=(f+m)/2))?f=p:m=p,s=a,!(a=a[R=y<<2|b<<1|v]))return s[R]=o,n;if(h=+n._x.call(null,a.data),M=+n._y.call(null,a.data),T=+n._z.call(null,a.data),e===h&&t===M&&i===T)return o.next=a,s?s[R]=o:n._root=o,n;do s=s?s[R]=new Array(8):n._root=new Array(8),(v=e>=(_=(l+d)/2))?l=_:d=_,(b=t>=(E=(c+u)/2))?c=E:u=E,(y=i>=(p=(f+m)/2))?f=p:m=p;while((R=y<<2|b<<1|v)===(x=(T>=p)<<2|(M>=E)<<1|h>=_));return s[x]=a,s[R]=o,n}function pg(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let s=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,f=-1/0;for(let d=0,u,m,_,E;d<e;++d)isNaN(m=+this._x.call(null,u=n[d]))||isNaN(_=+this._y.call(null,u))||isNaN(E=+this._z.call(null,u))||(t[d]=m,i[d]=_,r[d]=E,m<s&&(s=m),m>l&&(l=m),_<a&&(a=_),_>c&&(c=_),E<o&&(o=E),E>f&&(f=E));if(s>l||a>c||o>f)return this;this.cover(s,a,o).cover(l,c,f);for(let d=0;d<e;++d)Ic(this,t[d],i[d],r[d],n[d]);return this}function mg(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,s=this._z0,a=this._x1,o=this._y1,l=this._z1;if(isNaN(i))a=(i=Math.floor(n))+1,o=(r=Math.floor(e))+1,l=(s=Math.floor(t))+1;else{for(var c=a-i||1,f=this._root,d,u;i>n||n>=a||r>e||e>=o||s>t||t>=l;)switch(u=(t<s)<<2|(e<r)<<1|n<i,d=new Array(8),d[u]=f,f=d,c*=2,u){case 0:a=i+c,o=r+c,l=s+c;break;case 1:i=a-c,o=r+c,l=s+c;break;case 2:a=i+c,r=o-c,l=s+c;break;case 3:i=a-c,r=o-c,l=s+c;break;case 4:a=i+c,o=r+c,s=l-c;break;case 5:i=a-c,o=r+c,s=l-c;break;case 6:a=i+c,r=o-c,s=l-c;break;case 7:i=a-c,r=o-c,s=l-c;break}this._root&&this._root.length&&(this._root=f)}return this._x0=i,this._y0=r,this._z0=s,this._x1=a,this._y1=o,this._z1=l,this}function _g(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function gg(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ht(n,e,t,i,r,s,a){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=s,this.z1=a}function xg(n,e,t,i){var r,s=this._x0,a=this._y0,o=this._z0,l,c,f,d,u,m,_=this._x1,E=this._y1,p=this._z1,h=[],M=this._root,T,v;for(M&&h.push(new ht(M,s,a,o,_,E,p)),i==null?i=1/0:(s=n-i,a=e-i,o=t-i,_=n+i,E=e+i,p=t+i,i*=i);T=h.pop();)if(!(!(M=T.node)||(l=T.x0)>_||(c=T.y0)>E||(f=T.z0)>p||(d=T.x1)<s||(u=T.y1)<a||(m=T.z1)<o))if(M.length){var b=(l+d)/2,y=(c+u)/2,R=(f+m)/2;h.push(new ht(M[7],b,y,R,d,u,m),new ht(M[6],l,y,R,b,u,m),new ht(M[5],b,c,R,d,y,m),new ht(M[4],l,c,R,b,y,m),new ht(M[3],b,y,f,d,u,R),new ht(M[2],l,y,f,b,u,R),new ht(M[1],b,c,f,d,y,R),new ht(M[0],l,c,f,b,y,R)),(v=(t>=R)<<2|(e>=y)<<1|n>=b)&&(T=h[h.length-1],h[h.length-1]=h[h.length-1-v],h[h.length-1-v]=T)}else{var x=n-+this._x.call(null,M.data),A=e-+this._y.call(null,M.data),P=t-+this._z.call(null,M.data),C=x*x+A*A+P*P;if(C<i){var D=Math.sqrt(i=C);s=n-D,a=e-D,o=t-D,_=n+D,E=e+D,p=t+D,r=M.data}}return r}const vg=(n,e,t,i,r,s)=>Math.sqrt((n-i)**2+(e-r)**2+(t-s)**2);function Mg(n,e,t,i){const r=[],s=n-i,a=e-i,o=t-i,l=n+i,c=e+i,f=t+i;return this.visit((d,u,m,_,E,p,h)=>{if(!d.length)do{const M=d.data;vg(n,e,t,this._x(M),this._y(M),this._z(M))<=i&&r.push(M)}while(d=d.next);return u>l||m>c||_>f||E<s||p<a||h<o}),r}function Sg(n){if(isNaN(u=+this._x.call(null,n))||isNaN(m=+this._y.call(null,n))||isNaN(_=+this._z.call(null,n)))return this;var e,t=this._root,i,r,s,a=this._x0,o=this._y0,l=this._z0,c=this._x1,f=this._y1,d=this._z1,u,m,_,E,p,h,M,T,v,b,y;if(!t)return this;if(t.length)for(;;){if((M=u>=(E=(a+c)/2))?a=E:c=E,(T=m>=(p=(o+f)/2))?o=p:f=p,(v=_>=(h=(l+d)/2))?l=h:d=h,e=t,!(t=t[b=v<<2|T<<1|M]))return this;if(!t.length)break;(e[b+1&7]||e[b+2&7]||e[b+3&7]||e[b+4&7]||e[b+5&7]||e[b+6&7]||e[b+7&7])&&(i=e,y=b)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[b]=s:delete e[b],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[y]=t:this._root=t),this):(this._root=s,this)}function Eg(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function yg(){return this._root}function bg(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Tg(n){var e=[],t,i=this._root,r,s,a,o,l,c,f;for(i&&e.push(new ht(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,s=t.x0,a=t.y0,o=t.z0,l=t.x1,c=t.y1,f=t.z1)&&i.length){var d=(s+l)/2,u=(a+c)/2,m=(o+f)/2;(r=i[7])&&e.push(new ht(r,d,u,m,l,c,f)),(r=i[6])&&e.push(new ht(r,s,u,m,d,c,f)),(r=i[5])&&e.push(new ht(r,d,a,m,l,u,f)),(r=i[4])&&e.push(new ht(r,s,a,m,d,u,f)),(r=i[3])&&e.push(new ht(r,d,u,o,l,c,m)),(r=i[2])&&e.push(new ht(r,s,u,o,d,c,m)),(r=i[1])&&e.push(new ht(r,d,a,o,l,u,m)),(r=i[0])&&e.push(new ht(r,s,a,o,d,u,m))}return this}function Ag(n){var e=[],t=[],i;for(this._root&&e.push(new ht(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.y0,l=i.z0,c=i.x1,f=i.y1,d=i.z1,u=(a+c)/2,m=(o+f)/2,_=(l+d)/2;(s=r[0])&&e.push(new ht(s,a,o,l,u,m,_)),(s=r[1])&&e.push(new ht(s,u,o,l,c,m,_)),(s=r[2])&&e.push(new ht(s,a,m,l,u,f,_)),(s=r[3])&&e.push(new ht(s,u,m,l,c,f,_)),(s=r[4])&&e.push(new ht(s,a,o,_,u,m,d)),(s=r[5])&&e.push(new ht(s,u,o,_,c,m,d)),(s=r[6])&&e.push(new ht(s,a,m,_,u,f,d)),(s=r[7])&&e.push(new ht(s,u,m,_,c,f,d))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function wg(n){return n[0]}function Rg(n){return arguments.length?(this._x=n,this):this._x}function Cg(n){return n[1]}function Pg(n){return arguments.length?(this._y=n,this):this._y}function Dg(n){return n[2]}function Lg(n){return arguments.length?(this._z=n,this):this._z}function ho(n,e,t,i){var r=new uo(e??wg,t??Cg,i??Dg,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function uo(n,e,t,i,r,s,a,o,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=s,this._x1=a,this._y1=o,this._z1=l,this._root=void 0}function Ol(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Lt=ho.prototype=uo.prototype;Lt.copy=function(){var n=new uo(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Ol(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=Ol(i));return n};Lt.add=dg;Lt.addAll=pg;Lt.cover=mg;Lt.data=_g;Lt.extent=gg;Lt.find=xg;Lt.findAllWithinRadius=Mg;Lt.remove=Sg;Lt.removeAll=Eg;Lt.root=yg;Lt.size=bg;Lt.visit=Tg;Lt.visitAfter=Ag;Lt.x=Rg;Lt.y=Pg;Lt.z=Lg;function wt(n){return function(){return n}}function sn(n){return(n()-.5)*1e-6}function Ks(n){return n.x+n.vx}function Bl(n){return n.y+n.vy}function Ig(n){return n.z+n.vz}function Ng(n){var e,t,i,r,s=1,a=1;typeof n!="function"&&(n=wt(n==null?1:+n));function o(){for(var f,d=e.length,u,m,_,E,p,h,M,T=0;T<a;++T)for(u=(t===1?ao(e,Ks):t===2?lo(e,Ks,Bl):t===3?ho(e,Ks,Bl,Ig):null).visitAfter(l),f=0;f<d;++f)m=e[f],h=i[m.index],M=h*h,_=m.x+m.vx,t>1&&(E=m.y+m.vy),t>2&&(p=m.z+m.vz),u.visit(v);function v(b,y,R,x,A,P,C){var D=[y,R,x,A,P,C],X=D[0],Z=D[1],O=D[2],q=D[t],H=D[t+1],J=D[t+2],j=b.data,se=b.r,ne=h+se;if(j){if(j.index>m.index){var fe=_-j.x-j.vx,Ge=t>1?E-j.y-j.vy:0,Ve=t>2?p-j.z-j.vz:0,De=fe*fe+Ge*Ge+Ve*Ve;De<ne*ne&&(fe===0&&(fe=sn(r),De+=fe*fe),t>1&&Ge===0&&(Ge=sn(r),De+=Ge*Ge),t>2&&Ve===0&&(Ve=sn(r),De+=Ve*Ve),De=(ne-(De=Math.sqrt(De)))/De*s,m.vx+=(fe*=De)*(ne=(se*=se)/(M+se)),t>1&&(m.vy+=(Ge*=De)*ne),t>2&&(m.vz+=(Ve*=De)*ne),j.vx-=fe*(ne=1-ne),t>1&&(j.vy-=Ge*ne),t>2&&(j.vz-=Ve*ne))}return}return X>_+ne||q<_-ne||t>1&&(Z>E+ne||H<E-ne)||t>2&&(O>p+ne||J<p-ne)}}function l(f){if(f.data)return f.r=i[f.data.index];for(var d=f.r=0;d<Math.pow(2,t);++d)f[d]&&f[d].r>f.r&&(f.r=f[d].r)}function c(){if(e){var f,d=e.length,u;for(i=new Array(d),f=0;f<d;++f)u=e[f],i[u.index]=+n(u,f,e)}}return o.initialize=function(f,...d){e=f,r=d.find(u=>typeof u=="function")||Math.random,t=d.find(u=>[1,2,3].includes(u))||2,c()},o.iterations=function(f){return arguments.length?(a=+f,o):a},o.strength=function(f){return arguments.length?(s=+f,o):s},o.radius=function(f){return arguments.length?(n=typeof f=="function"?f:wt(+f),c(),o):n},o}function Ug(n){return n.index}function zl(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Fg(n){var e=Ug,t=u,i,r=wt(30),s,a,o,l,c,f,d=1;n==null&&(n=[]);function u(h){return 1/Math.min(l[h.source.index],l[h.target.index])}function m(h){for(var M=0,T=n.length;M<d;++M)for(var v=0,b,y,R,x=0,A=0,P=0,C,D;v<T;++v)b=n[v],y=b.source,R=b.target,x=R.x+R.vx-y.x-y.vx||sn(f),o>1&&(A=R.y+R.vy-y.y-y.vy||sn(f)),o>2&&(P=R.z+R.vz-y.z-y.vz||sn(f)),C=Math.sqrt(x*x+A*A+P*P),C=(C-s[v])/C*h*i[v],x*=C,A*=C,P*=C,R.vx-=x*(D=c[v]),o>1&&(R.vy-=A*D),o>2&&(R.vz-=P*D),y.vx+=x*(D=1-D),o>1&&(y.vy+=A*D),o>2&&(y.vz+=P*D)}function _(){if(a){var h,M=a.length,T=n.length,v=new Map(a.map((y,R)=>[e(y,R,a),y])),b;for(h=0,l=new Array(M);h<T;++h)b=n[h],b.index=h,typeof b.source!="object"&&(b.source=zl(v,b.source)),typeof b.target!="object"&&(b.target=zl(v,b.target)),l[b.source.index]=(l[b.source.index]||0)+1,l[b.target.index]=(l[b.target.index]||0)+1;for(h=0,c=new Array(T);h<T;++h)b=n[h],c[h]=l[b.source.index]/(l[b.source.index]+l[b.target.index]);i=new Array(T),E(),s=new Array(T),p()}}function E(){if(a)for(var h=0,M=n.length;h<M;++h)i[h]=+t(n[h],h,n)}function p(){if(a)for(var h=0,M=n.length;h<M;++h)s[h]=+r(n[h],h,n)}return m.initialize=function(h,...M){a=h,f=M.find(T=>typeof T=="function")||Math.random,o=M.find(T=>[1,2,3].includes(T))||2,_()},m.links=function(h){return arguments.length?(n=h,_(),m):n},m.id=function(h){return arguments.length?(e=h,m):e},m.iterations=function(h){return arguments.length?(d=+h,m):d},m.strength=function(h){return arguments.length?(t=typeof h=="function"?h:wt(+h),E(),m):t},m.distance=function(h){return arguments.length?(r=typeof h=="function"?h:wt(+h),p(),m):r},m}var Og={value:()=>{}};function Nc(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Jr(t)}function Jr(n){this._=n}function Bg(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Jr.prototype=Nc.prototype={constructor:Jr,on:function(n,e){var t=this._,i=Bg(n+"",t),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=zg(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(n=i[s]).type)t[r]=Gl(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Gl(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Jr(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function zg(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Gl(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=Og,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var ki=0,rr=0,tr=0,Uc=1e3,os,sr,ls=0,fi=0,ms=0,fr=typeof performance=="object"&&performance.now?performance:Date,Fc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Oc(){return fi||(Fc(Gg),fi=fr.now()+ms)}function Gg(){fi=0}function Ha(){this._call=this._time=this._next=null}Ha.prototype=Bc.prototype={constructor:Ha,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Oc():+t)+(e==null?0:+e),!this._next&&sr!==this&&(sr?sr._next=this:os=this,sr=this),this._call=n,this._time=t,ka()},stop:function(){this._call&&(this._call=null,this._time=1/0,ka())}};function Bc(n,e,t){var i=new Ha;return i.restart(n,e,t),i}function Vg(){Oc(),++ki;for(var n=os,e;n;)(e=fi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--ki}function Vl(){fi=(ls=fr.now())+ms,ki=rr=0;try{Vg()}finally{ki=0,kg(),fi=0}}function Hg(){var n=fr.now(),e=n-ls;e>Uc&&(ms-=e,ls=n)}function kg(){for(var n,e=os,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:os=t);sr=n,ka(i)}function ka(n){if(!ki){rr&&(rr=clearTimeout(rr));var e=n-fi;e>24?(n<1/0&&(rr=setTimeout(Vl,n-fr.now()-ms)),tr&&(tr=clearInterval(tr))):(tr||(ls=fr.now(),tr=setInterval(Hg,Uc)),ki=1,Fc(Vl))}}const Wg=1664525,Xg=1013904223,Hl=4294967296;function qg(){let n=1;return()=>(n=(Wg*n+Xg)%Hl)/Hl}var kl=3;function $s(n){return n.x}function Wl(n){return n.y}function Yg(n){return n.z}var Zg=10,Kg=Math.PI*(3-Math.sqrt(5)),$g=Math.PI*20/(9+Math.sqrt(221));function Jg(n,e){e=e||2;var t=Math.min(kl,Math.max(1,Math.round(e))),i,r=1,s=.001,a=1-Math.pow(s,1/300),o=0,l=.6,c=new Map,f=Bc(m),d=Nc("tick","end"),u=qg();n==null&&(n=[]);function m(){_(),d.call("tick",i),r<s&&(f.stop(),d.call("end",i))}function _(h){var M,T=n.length,v;h===void 0&&(h=1);for(var b=0;b<h;++b)for(r+=(o-r)*a,c.forEach(function(y){y(r)}),M=0;M<T;++M)v=n[M],v.fx==null?v.x+=v.vx*=l:(v.x=v.fx,v.vx=0),t>1&&(v.fy==null?v.y+=v.vy*=l:(v.y=v.fy,v.vy=0)),t>2&&(v.fz==null?v.z+=v.vz*=l:(v.z=v.fz,v.vz=0));return i}function E(){for(var h=0,M=n.length,T;h<M;++h){if(T=n[h],T.index=h,T.fx!=null&&(T.x=T.fx),T.fy!=null&&(T.y=T.fy),T.fz!=null&&(T.z=T.fz),isNaN(T.x)||t>1&&isNaN(T.y)||t>2&&isNaN(T.z)){var v=Zg*(t>2?Math.cbrt(.5+h):t>1?Math.sqrt(.5+h):h),b=h*Kg,y=h*$g;t===1?T.x=v:t===2?(T.x=v*Math.cos(b),T.y=v*Math.sin(b)):(T.x=v*Math.sin(b)*Math.cos(y),T.y=v*Math.cos(b),T.z=v*Math.sin(b)*Math.sin(y))}(isNaN(T.vx)||t>1&&isNaN(T.vy)||t>2&&isNaN(T.vz))&&(T.vx=0,t>1&&(T.vy=0),t>2&&(T.vz=0))}}function p(h){return h.initialize&&h.initialize(n,u,t),h}return E(),i={tick:_,restart:function(){return f.restart(m),i},stop:function(){return f.stop(),i},numDimensions:function(h){return arguments.length?(t=Math.min(kl,Math.max(1,Math.round(h))),c.forEach(p),i):t},nodes:function(h){return arguments.length?(n=h,E(),c.forEach(p),i):n},alpha:function(h){return arguments.length?(r=+h,i):r},alphaMin:function(h){return arguments.length?(s=+h,i):s},alphaDecay:function(h){return arguments.length?(a=+h,i):+a},alphaTarget:function(h){return arguments.length?(o=+h,i):o},velocityDecay:function(h){return arguments.length?(l=1-h,i):1-l},randomSource:function(h){return arguments.length?(u=h,c.forEach(p),i):u},force:function(h,M){return arguments.length>1?(M==null?c.delete(h):c.set(h,p(M)),i):c.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),M=h.shift()||0,T=(t>1?h.shift():null)||0,v=(t>2?h.shift():null)||0,b=h.shift()||1/0,y=0,R=n.length,x,A,P,C,D,X;for(b*=b,y=0;y<R;++y)D=n[y],x=M-D.x,A=T-(D.y||0),P=v-(D.z||0),C=x*x+A*A+P*P,C<b&&(X=D,b=C);return X},on:function(h,M){return arguments.length>1?(d.on(h,M),i):d.on(h)}}}function Qg(){var n,e,t,i,r,s=wt(-30),a,o=1,l=1/0,c=.81;function f(_){var E,p=n.length,h=(e===1?ao(n,$s):e===2?lo(n,$s,Wl):e===3?ho(n,$s,Wl,Yg):null).visitAfter(u);for(r=_,E=0;E<p;++E)t=n[E],h.visit(m)}function d(){if(n){var _,E=n.length,p;for(a=new Array(E),_=0;_<E;++_)p=n[_],a[p.index]=+s(p,_,n)}}function u(_){var E=0,p,h,M=0,T,v,b,y,R=_.length;if(R){for(T=v=b=y=0;y<R;++y)(p=_[y])&&(h=Math.abs(p.value))&&(E+=p.value,M+=h,T+=h*(p.x||0),v+=h*(p.y||0),b+=h*(p.z||0));E*=Math.sqrt(4/R),_.x=T/M,e>1&&(_.y=v/M),e>2&&(_.z=b/M)}else{p=_,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do E+=a[p.data.index];while(p=p.next)}_.value=E}function m(_,E,p,h,M){if(!_.value)return!0;var T=[p,h,M][e-1],v=_.x-t.x,b=e>1?_.y-t.y:0,y=e>2?_.z-t.z:0,R=T-E,x=v*v+b*b+y*y;if(R*R/c<x)return x<l&&(v===0&&(v=sn(i),x+=v*v),e>1&&b===0&&(b=sn(i),x+=b*b),e>2&&y===0&&(y=sn(i),x+=y*y),x<o&&(x=Math.sqrt(o*x)),t.vx+=v*_.value*r/x,e>1&&(t.vy+=b*_.value*r/x),e>2&&(t.vz+=y*_.value*r/x)),!0;if(_.length||x>=l)return;(_.data!==t||_.next)&&(v===0&&(v=sn(i),x+=v*v),e>1&&b===0&&(b=sn(i),x+=b*b),e>2&&y===0&&(y=sn(i),x+=y*y),x<o&&(x=Math.sqrt(o*x)));do _.data!==t&&(R=a[_.data.index]*r/x,t.vx+=v*R,e>1&&(t.vy+=b*R),e>2&&(t.vz+=y*R));while(_=_.next)}return f.initialize=function(_,...E){n=_,i=E.find(p=>typeof p=="function")||Math.random,e=E.find(p=>[1,2,3].includes(p))||2,d()},f.strength=function(_){return arguments.length?(s=typeof _=="function"?_:wt(+_),d(),f):s},f.distanceMin=function(_){return arguments.length?(o=_*_,f):Math.sqrt(o)},f.distanceMax=function(_){return arguments.length?(l=_*_,f):Math.sqrt(l)},f.theta=function(_){return arguments.length?(c=_*_,f):Math.sqrt(c)},f}function jg(n){var e=wt(.1),t,i,r;typeof n!="function"&&(n=wt(n==null?0:+n));function s(o){for(var l=0,c=t.length,f;l<c;++l)f=t[l],f.vx+=(r[l]-f.x)*i[l]*o}function a(){if(t){var o,l=t.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:wt(+o),a(),s):e},s.x=function(o){return arguments.length?(n=typeof o=="function"?o:wt(+o),a(),s):n},s}function e0(n){var e=wt(.1),t,i,r;typeof n!="function"&&(n=wt(n==null?0:+n));function s(o){for(var l=0,c=t.length,f;l<c;++l)f=t[l],f.vy+=(r[l]-f.y)*i[l]*o}function a(){if(t){var o,l=t.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:wt(+o),a(),s):e},s.y=function(o){return arguments.length?(n=typeof o=="function"?o:wt(+o),a(),s):n},s}function t0(n){var e=wt(.1),t,i,r;typeof n!="function"&&(n=wt(n==null?0:+n));function s(o){for(var l=0,c=t.length,f;l<c;++l)f=t[l],f.vz+=(r[l]-f.z)*i[l]*o}function a(){if(t){var o,l=t.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:wt(+o),a(),s):e},s.z=function(o){return arguments.length?(n=typeof o=="function"?o:wt(+o),a(),s):n},s}const Xl=Object.freeze({tight:72,normal:118,loose:190});function Wr(n){return!!(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z))}function ql(n){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function n0(n,e=0){const t=ql(`${n}:x`)/4294967295,i=ql(`${n}:y`)/4294967295,r=42+Math.sqrt(e+1)*18,s=t*Math.PI*2,a=Math.acos(2*i-1);return{x:Math.sin(a)*Math.cos(s)*r,y:Math.cos(a)*r,z:Math.sin(a)*Math.sin(s)*r}}function i0({onTick:n=()=>{},onStable:e=()=>{}}={}){let t=[],i=[],r=!1;const s=Fg([]).id(p=>p.id).distance(p=>Xl[p.spacing]||Xl.normal).strength(.56),a=Jg([],3).force("links",s).force("charge",Qg().strength(-58).distanceMax(620)).force("collision",Ng().radius(p=>p.radius+8).strength(.86)).force("center",F_(0,0,0).strength(.12)).force("x",jg(0).strength(.018)).force("y",e0(0).strength(.018)).force("z",t0(0).strength(.018)).alphaDecay(.035).velocityDecay(.42).on("tick",()=>n(t,i)).on("end",()=>e(t));function o(p={}){if(r)return;const h=new Map(t.map(v=>[v.id,v]));t=(Array.isArray(p.nodes)?p.nodes:[]).map((v,b)=>{const y=h.get(v.id),R=Wr(v.pinnedPosition)?v.pinnedPosition:null,x=R||(Wr(v)?v:null)||(Wr(y)?y:null)||n0(v.id,b),A=R?.pinned===!0;return{...v,x:x.x,y:x.y,z:x.z,vx:Number.isFinite(y?.vx)?y.vx:0,vy:Number.isFinite(y?.vy)?y.vy:0,vz:Number.isFinite(y?.vz)?y.vz:0,pinned:A,fx:A?x.x:null,fy:A?x.y:null,fz:A?x.z:null}});const T=new Set(t.map(v=>v.id));if(i=(Array.isArray(p.links)?p.links:[]).filter(v=>T.has(v.sourceId)&&T.has(v.targetId)&&v.sourceId!==v.targetId).map(v=>({...v,source:v.sourceId,target:v.targetId})),a.nodes(t),s.links(i),!t.length){a.stop(),n(t,i),e(t);return}a.alpha(.9).alphaTarget(0).restart()}function l(p){return t.find(h=>h.id===p)||null}function c(p){const h=l(p);return!h||r?null:(h.fx=h.x,h.fy=h.y,h.fz=h.z,a.alphaTarget(.16).restart(),h)}function f(p,h){const M=l(p);return!M||!Wr(h)?null:(M.fx=h.x,M.fy=h.y,M.fz=h.z,M.x=h.x,M.y=h.y,M.z=h.z,n(t,i),M)}function d(p,{pinned:h}={}){const M=l(p);return!M||r?null:(M.pinned=h??M.pinned,M.pinned?(M.fx=M.x,M.fy=M.y,M.fz=M.z):(M.fx=null,M.fy=null,M.fz=null),a.alphaTarget(0).alpha(.24).restart(),M)}function u(p,h){const M=l(p);return!M||r?null:(M.pinned=!!h,M.pinned?(M.fx=M.x,M.fy=M.y,M.fz=M.z):(M.fx=null,M.fy=null,M.fz=null),a.alpha(.28).restart(),M)}function m(p=.32){!r&&t.length&&a.alpha(p).restart()}function _(){a.stop()}function E(){r=!0,a.stop(),a.on("tick",null).on("end",null),t=[],i=[]}return{beginDrag:c,dispose:E,dragNode:f,endDrag:d,getLinks:()=>i,getNode:l,getNodes:()=>t,reheat:m,setGraph:o,setPinned:u,stop:_}}const ar=1e3,zc=60,r0=8e3,s0=8,a0=5,o0=280,Yl=Object.freeze({thought:7361989,observation:2389930,excerpt:5860764,question:10512906,hypothesis:8014784,quote:10702700,link:2522486,research_result:3569754}),Zl=Object.freeze({thought:"#7055c5",observation:"#2477aa",excerpt:"#596d9c",question:"#a06a0a",hypothesis:"#7a4bc0",quote:"#a34f6c",link:"#267d76",research_result:"#36785a"});function dr(n){return!!(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z))}function Gc(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function l0(n){const e=Gc(n);return!dr(e?.position)||!dr(e?.target)?null:e}function c0(n){const e=Gc(n);return e?.version!==1||typeof e.positions!="object"?{}:Object.fromEntries(Object.entries(e.positions).filter(([,t])=>dr(t)).slice(0,ar))}function h0(n){return Array.from({length:zc},()=>{const e=document.createElement("span");return e.className="spatial-label",e.hidden=!0,n.append(e),e})}function Kl(n,e){return typeof n=="object"&&n?n.id:e}function u0({container:n,storageKey:e,layoutStorageKey:t,onThoughtSelect:i=()=>{},onThoughtActivate:r=()=>{},onThoughtMove:s=()=>{},onError:a=()=>{}}){const o=new nu,l=new rn(48,1,1,1e4),c=new S_({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.outputColorSpace=Jt,c.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),c.domElement.className="spatial-canvas",c.domElement.setAttribute("aria-hidden","true");const f=document.createElement("div");f.className="spatial-label-layer";const d=h0(f);n.prepend(c.domElement,f);const u=new y_(l,c.domElement);u.enableDamping=!0,u.dampingFactor=.075,u.minDistance=90,u.maxDistance=5e3,u.screenSpacePanning=!0;const m=l0(e);m?(l.position.set(m.position.x,m.position.y,m.position.z),u.target.set(m.target.x,m.target.y,m.target.z)):(l.position.set(0,160,720),u.target.set(0,0,0)),u.update();const _=new ro(1,2),E=new rs({color:16777215}),p=new $o(_,E,ar);p.instanceMatrix.setUsage(Ro),p.frustumCulled=!1,p.count=0,o.add(p);const h=new rs({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),M=new $o(_,h,ar);M.instanceMatrix.setUsage(Ro),M.frustumCulled=!1,M.count=0,o.add(M);const T=new Qt,v=new Ba({color:9277866,transparent:!0,opacity:.42}),b=new tl(T,v);b.frustumCulled=!1,o.add(b);const y=new Qt,R=new Ba({color:7361989,transparent:!0,opacity:.9}),x=new tl(y,R);x.frustumCulled=!1,o.add(x);const A=new yu,P=new Fe,C=new ut,D=new N,X=new N(1,1,1),Z=new Gn,O=new Je,q=new Je(14605290),H=new Je(16777215),J=new ut,j=new no,se=new N,ne=new Ln,fe=new N,Ge=new N,Ve=new N;let De=[],K=[],ie=new Map,te=[],Ue=new Map,Ee=null,Te=null,tt=new Set,Oe=!1,Ke=null,Ie=null,Be=null,_t=c0(t),gt=!m,st=!0,dt=!0;function pt(){try{localStorage.setItem(e,JSON.stringify({position:{x:l.position.x,y:l.position.y,z:l.position.z},target:{x:u.target.x,y:u.target.y,z:u.target.z}}))}catch{}}function xt(ee=De){_t=Object.fromEntries(ee.slice(0,ar).map(ge=>[ge.id,{x:Math.round(ge.x*100)/100,y:Math.round(ge.y*100)/100,z:Math.round(ge.z*100)/100}]));try{localStorage.setItem(t,JSON.stringify({version:1,positions:_t}))}catch{}}function I(){tt=new Set,Ee&&K.forEach(ee=>{const ge=Kl(ee.source,ee.sourceId),Me=Kl(ee.target,ee.targetId);ge===Ee&&tt.add(Me),Me===Ee&&tt.add(ge)})}function nt(){!Oe||Ke!==null||(Ke=requestAnimationFrame(le))}const ke=i0({onTick(ee,ge){De=ee,K=ge,ie=new Map(De.map(Me=>[Me.id,Me])),I(),st=!0,dt=!0,nt()},onStable(ee){xt(ee),gt&&ee.length&&(gt=!1,he()),nt()}});function w(ee){const ge=c.domElement.getBoundingClientRect();P.x=(ee.clientX-ge.left)/Math.max(1,ge.width)*2-1,P.y=-((ee.clientY-ge.top)/Math.max(1,ge.height))*2+1,l.updateMatrixWorld(),A.setFromCamera(P,l)}function g(ee){w(ee);const[ge]=A.intersectObject(M);return ge?.instanceId===void 0?null:te[ge.instanceId]||null}function F(){st&&(De.forEach(ee=>{const ge=Ue.get(ee.id);if(ge===void 0)return;const Me=ee.id===Ee,je=ee.id===Te,vt=!!(Ee&&!Me&&!tt.has(ee.id)),be=Me?1.34:je?1.17:vt?.76:1,et=Math.max(5,ee.radius||7);D.set(ee.x,ee.y,ee.z),X.setScalar(et*be),C.compose(D,Z,X),p.setMatrixAt(ge,C),X.setScalar(et*be+s0),C.compose(D,Z,X),M.setMatrixAt(ge,C),O.setHex(Yl[ee.kind]||Yl.thought),vt?O.lerp(q,.68):Me?O.lerp(H,.2):je&&O.lerp(H,.1),p.setColorAt(ge,O)}),p.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),p.instanceColor&&(p.instanceColor.needsUpdate=!0),st=!1)}function G(){if(!dt)return;const ee=[],ge=[];K.slice(0,r0).forEach(Me=>{const je=typeof Me.source=="object"?Me.source:ie.get(Me.sourceId),vt=typeof Me.target=="object"?Me.target:ie.get(Me.targetId);if(!je||!vt)return;(!!(Ee&&(je.id===Ee||vt.id===Ee))?ge:ee).push(je.x,je.y,je.z,vt.x,vt.y,vt.z)}),T.setAttribute("position",new Ot(ee,3)),y.setAttribute("position",new Ot(ge,3)),v.opacity=Ee?.1:.42,dt=!1}function k(){J.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),j.setFromProjectionMatrix(J);const ee=Math.max(1,n.clientWidth),ge=Math.max(1,n.clientHeight),Me=De.filter(be=>(D.set(be.x,be.y,be.z),j.containsPoint(D))).sort((be,et)=>{const Yt=on=>on.id===Ee?0:tt.has(on.id)?1:on.id===Te?2:3,Tt=Yt(be)-Yt(et);if(Tt)return Tt;const en=(et.connectionCount||0)-(be.connectionCount||0);return en||l.position.distanceToSquared(be)-l.position.distanceToSquared(et)}).filter(be=>!Ee||be.id===Ee||tt.has(be.id)||be.id===Te).map(be=>{se.set(be.x,be.y,be.z).project(l);const et=l.position.distanceTo(be),Yt=Ii.clamp(760/Math.max(520,et),.72,1);return{node:be,x:(se.x*.5+.5)*ee,y:(-se.y*.5+.5)*ge,labelScale:Yt}}),je=[],vt=[];Me.some(be=>{if(vt.length>=zc)return!0;const{node:et,x:Yt,y:Tt,labelScale:en}=be,on=Ii.clamp(et.text.length*6.4,42,220)*en,_n={left:Yt-on/2-7,right:Yt+on/2+7,top:Tt-34*en,bottom:Tt-8*en},pi=je.some(An=>!(_n.right<An.left||_n.left>An.right||_n.bottom<An.top||_n.top>An.bottom)),_r=et.id===Ee||et.id===Te;return(!pi||_r)&&(vt.push(be),je.push(_n)),!1}),d.forEach((be,et)=>{const Yt=vt[et];if(!Yt){be.hidden=!0;return}const{node:Tt,x:en,y:on,labelScale:_n}=Yt;be.hidden=!1,be.textContent=Tt.text,be.dataset.thoughtId=Tt.id,be.classList.toggle("is-selected",Tt.id===Ee),be.classList.toggle("is-neighbour",tt.has(Tt.id)),be.style.setProperty("--spatial-kind-color",Zl[Tt.kind]||Zl.thought),be.style.transform=`translate(-50%, calc(-100% - 12px)) translate3d(${en}px, ${on}px, 0) scale(${_n})`})}function re(ee){if(!Be)return!1;const ge=Math.min(1,(ee-Be.startedAt)/Be.duration),Me=1-(1-ge)**3;return l.position.lerpVectors(Be.fromPosition,Be.toPosition,Me),u.target.lerpVectors(Be.fromTarget,Be.toTarget,Me),ge<1?!0:(Be=null,u.enabled=Oe&&!Ie,u.update(),pt(),!1)}function le(ee){if(Ke=null,!Oe||document.hidden)return;const ge=re(ee),Me=u.update();l.updateMatrixWorld(),F(),G(),k(),c.render(o,l),(ge||Me)&&nt()}function W({nodes:ee=[],links:ge=[]}){const Me=ee.slice(0,ar).map(be=>{const et=_t[be.id];return{...be,...!dr(be.pinnedPosition)&&dr(et)?et:{},radius:Math.max(5,Number.isFinite(be.radius)?be.radius:7)}}),je=new Set(Me.map(be=>be.id)),vt=ge.filter(be=>je.has(be.sourceId)&&je.has(be.targetId));te=Me.map(be=>be.id),Ue=new Map(te.map((be,et)=>[be,et])),p.count=Me.length,M.count=Me.length,ke.setGraph({nodes:Me,links:vt}),De=ke.getNodes(),K=ke.getLinks(),ie=new Map(De.map(be=>[be.id,be])),ie.has(Ee)||(Ee=null),I(),st=!0,dt=!0,gt&&De.length&&he(),nt()}function $(ee){Ee=ie.has(ee)?ee:null,I(),st=!0,dt=!0,nt()}function oe(ee,ge,Me=o0){Be={fromPosition:l.position.clone(),fromTarget:u.target.clone(),toPosition:ee.clone(),toTarget:ge.clone(),duration:Me,startedAt:performance.now()},u.enabled=!1,nt()}function we(ee){const ge=ie.get(ee);if(!ge)return!1;Ee=ee,I(),st=!0,dt=!0,i(ee),Ve.copy(l.position).sub(u.target),Ve.lengthSq()<.001&&Ve.set(0,0,1),Ve.normalize();const Me=new N(ge.x,ge.y,ge.z),je=Ii.clamp(l.position.distanceTo(u.target),240,520),vt=Me.clone().addScaledVector(Ve,je);return oe(vt,Me),!0}function he(){if(!De.length)return!1;const ee=new ei;De.forEach(be=>{const et=Math.max(5,be.radius||7);ee.expandByPoint(new N(be.x-et,be.y-et,be.z-et)),ee.expandByPoint(new N(be.x+et,be.y+et,be.z+et))});const ge=ee.getBoundingSphere(new di);Ve.copy(l.position).sub(u.target),Ve.lengthSq()<.001&&Ve.set(0,0,1),Ve.normalize();const Me=Ii.degToRad(l.fov*.5),je=Ii.clamp(ge.radius/Math.max(.2,Math.sin(Me))*1.18,220,4200),vt=ge.center.clone().addScaledVector(Ve,je);return oe(vt,ge.center),!0}function ue(){oe(new N(0,160,720),new N(0,0,0))}function Ce(ee){const ge=ie.get(ee);return ge?{x:ge.x,y:ge.y,z:ge.z}:null}function Le(ee,ge){const Me=ke.setPinned(ee,ge);return Me?(nt(),{x:Me.x,y:Me.y,z:Me.z,pinned:Me.pinned}):null}function ze(){const ee=Math.max(1,n.clientWidth),ge=Math.max(1,n.clientHeight);c.setSize(ee,ge,!1),l.aspect=ee/ge,l.updateProjectionMatrix(),nt()}function L(){Oe=!0,u.enabled=!Ie&&!Be,ze(),ke.reheat(.22)}function ae(){Oe=!1,u.enabled=!1,ke.stop(),Ie=null,c.domElement.classList.remove("is-node-dragging"),Ke!==null&&cancelAnimationFrame(Ke),Ke=null}function Y(ee,{cancelled:ge=!1}={}){if(!Ie||ee.pointerId!==Ie.pointerId)return;ee.preventDefault(),ee.stopImmediatePropagation();const Me=Ie;Ie=null,c.domElement.classList.remove("is-node-dragging"),c.domElement.hasPointerCapture(ee.pointerId)&&c.domElement.releasePointerCapture(ee.pointerId);let je=ke.getNode(Me.thoughtId);Me.started&&(ge&&ke.dragNode(Me.thoughtId,Me.origin),je=ke.endDrag(Me.thoughtId,{pinned:ge?Me.wasPinned:void 0})),u.enabled=Oe&&!Be,!ge&&Me.moved&&je?.pinned&&s(je.id,{x:je.x,y:je.y,z:je.z,pinned:!0}),nt()}function ce(ee){if(!Oe||ee.button!==0)return;const ge=g(ee);if(!ge)return;const Me=ke.getNode(ge);Me&&(ee.preventDefault(),ee.stopImmediatePropagation(),Ee=ge,I(),st=!0,dt=!0,i(ge),u.enabled=!1,c.domElement.setPointerCapture(ee.pointerId),c.domElement.classList.add("is-node-dragging"),D.set(Me.x,Me.y,Me.z),l.getWorldDirection(Ve).normalize(),ne.setFromNormalAndCoplanarPoint(Ve,D),A.ray.intersectPlane(ne,fe)?Ge.copy(fe).sub(D):Ge.set(0,0,0),Ie={pointerId:ee.pointerId,thoughtId:ge,startX:ee.clientX,startY:ee.clientY,moved:!1,started:!1,wasPinned:Me.pinned,origin:{x:Me.x,y:Me.y,z:Me.z}},nt())}function de(ee){if(!Ie){const je=Oe?g(ee):null;je!==Te&&(Te=je,st=!0,c.domElement.classList.toggle("is-node-hovered",!!Te),nt());return}if(ee.pointerId!==Ie.pointerId||(ee.preventDefault(),ee.stopImmediatePropagation(),w(ee),!A.ray.intersectPlane(ne,fe)))return;const ge=Math.hypot(ee.clientX-Ie.startX,ee.clientY-Ie.startY);if(!Ie.started&&ge<a0)return;Ie.started||(ke.beginDrag(Ie.thoughtId),Ie.started=!0);const Me=fe.sub(Ge);ke.dragNode(Ie.thoughtId,{x:Me.x,y:Me.y,z:Me.z}),Ie.moved=!0}function Q(ee){const ge=g(ee);ge&&(ee.preventDefault(),ee.stopImmediatePropagation(),r(ge))}function ye(){Ie||!Te||(Te=null,st=!0,c.domElement.classList.remove("is-node-hovered"),nt())}function Se(ee){Y(ee,{cancelled:!0})}function mt(){document.hidden||nt()}function it(ee){ee.preventDefault(),a("3D rendering is unavailable. Reload the page to try again.")}function jt(){ae(),ke.dispose(),u.dispose(),_.dispose(),E.dispose(),h.dispose(),T.dispose(),v.dispose(),y.dispose(),R.dispose(),c.dispose(),c.domElement.removeEventListener("pointerdown",ce,!0),c.domElement.removeEventListener("pointermove",de,!0),c.domElement.removeEventListener("pointerup",Y,!0),c.domElement.removeEventListener("pointercancel",Se,!0),c.domElement.removeEventListener("pointerleave",ye),c.domElement.removeEventListener("dblclick",Q,!0),c.domElement.removeEventListener("webglcontextlost",it),document.removeEventListener("visibilitychange",mt),c.domElement.remove(),f.remove()}return u.addEventListener("change",nt),u.addEventListener("end",pt),c.domElement.addEventListener("pointerdown",ce,!0),c.domElement.addEventListener("pointermove",de,!0),c.domElement.addEventListener("pointerup",Y,!0),c.domElement.addEventListener("pointercancel",Se,!0),c.domElement.addEventListener("pointerleave",ye),c.domElement.addEventListener("dblclick",Q,!0),c.domElement.addEventListener("webglcontextlost",it),document.addEventListener("visibilitychange",mt),{activate:L,deactivate:ae,dispose:jt,fitAll:he,focusThought:we,getThoughtPosition:Ce,resetView:ue,resize:ze,setGraph:W,setSelectedThought:$,setThoughtPinned:Le}}export{u0 as createSpatialView};
