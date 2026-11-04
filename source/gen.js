/* GeoCARphy daily trip maker. Everything comes from the date, so it runs forever on its own. */
function seedOf(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(n){return function(){n=n+0x6D2B79F5|0;var t=Math.imul(n^n>>>15,1|n);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
var ADJ=null,CN=null;
function netInit(){if(ADJ)return;ADJ={};CN=Object.keys(CITY);CN.forEach(function(c){ADJ[c]=[]});RD.forEach(function(r,i){ADJ[r[0]].push({to:r[1],mi:r[5],i:i,rev:false});ADJ[r[1]].push({to:r[0],mi:r[5],i:i,rev:true})})}
function dist(s){var d={},q=[s],done={};CN.forEach(function(c){d[c]=1e9});d[s]=0;while(q.length){var b=0;q.forEach(function(c,i){if(d[c]<d[q[b]])b=i});var u=q.splice(b,1)[0];if(done[u])continue;done[u]=1;ADJ[u].forEach(function(e){if(d[u]+e.mi<d[e.to]){d[e.to]=d[u]+e.mi;q.push(e.to)}})}return d}
var DC={};function DD(s){return DC[s]||(DC[s]=dist(s))}
/* Monday short to Sunday long: [fewest miles, most miles] */
var PLAN={1:[420,700],2:[560,860],3:[720,1050],4:[880,1250],5:[1050,1500],6:[1300,1850],0:[1800,2800]},WEEK={1:'cash',2:'miles',3:'time',4:'cash',5:'time',6:'miles'};
function dayOf(ds){var a=ds.split('-');return new Date(+a[0],a[1]-1,+a[2],12)}
function dayStr(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function modeOf(ds){var d=dayOf(ds),w=d.getDay();if(w)return WEEK[w];var n=Math.floor(d.getTime()/6048e5);return ['cash','miles','time'][n%3]}
/* the road map for one trip: only roads that head toward the finish */
function shape(a,b,R){var S=DD(a),E=DD(b),best=S[b],lim=best*1.3+50,out={};Object.keys(S).forEach(function(c){if(S[c]+E[c]>lim)return;ADJ[c].forEach(function(e){if(E[e.to]<E[c]&&S[c]+e.mi+E[e.to]<=lim)(out[c]=out[c]||[]).push(e)})});
 var keep={};keep[b]=1;var ord=Object.keys(out).sort(function(p,q){return E[p]-E[q]});ord.forEach(function(c){out[c]=out[c].filter(function(e){return keep[e.to]});if(!out[c].length)delete out[c];else keep[c]=1});
 Object.keys(out).forEach(function(c){var l=out[c].map(function(e){return [e,E[e.to]+e.mi+R()*30]}).sort(function(p,q){return p[1]-q[1]}).slice(0,3).map(function(p){return p[0]});out[c]=l});
 var seen={},st=[a];seen[a]=1;while(st.length){var c=st.pop();(out[c]||[]).forEach(function(e){if(!seen[e.to]){seen[e.to]=1;st.push(e.to)}})}Object.keys(out).forEach(function(c){if(!seen[c])delete out[c]});
 return out}
function pathsOK(a,b,out){var dec=0,n=0,memo={};Object.keys(out).forEach(function(c){if(out[c].length>1)dec++});function cnt(c){if(c===b)return 1;if(memo[c]!=null)return memo[c];var s=0;(out[c]||[]).forEach(function(e){s+=cnt(e.to)});return memo[c]=s}n=cnt(a);return dec>=2&&n>=3&&(out[a]||[]).length>=2}
function pick(ds,skip){var w=dayOf(ds).getDay(),P=PLAN[w],R=rng(seedOf('trip'+ds)),tries=0,a,b;while(tries++<4000){a=CN[Math.floor(R()*CN.length)];b=CN[Math.floor(R()*CN.length)];if(a===b)continue;if(skip&&(skip[a]||skip[b]))continue;var m=DD(a)[b];if(m<P[0]||m>P[1])continue;var o=shape(a,b,rng(seedOf(a+b)));if(pathsOK(a,b,o))return [a,b]}return null}
var PK={};function rawPick(ds){return PK[ds]||(PK[ds]=pick(ds,null))}
function pair(ds){var d=dayOf(ds),skip={};for(var i=1;i<=9;i++){var p=rawPick(dayStr(new Date(d.getTime()-i*864e5)));if(p){skip[p[0]]=1;skip[p[1]]=1}}return pick(ds,skip)||rawPick(ds)}
function evOf(look,ds,R){var m=+ds.slice(5,7),cold=m>=11||m<=3;return {city:'jam',farm:'jam',hills:cold?'snow':'fog',lake:cold?'snow':'wind',plains:cold&&R()<.5?'snow':'wind',coast:'fog',palm:'storm',desert:'wind'}[look]||'jam'}
function genTrip(ds,fix){netInit();var p=fix?[fix.a,fix.b]:pair(ds),a=p[0],b=p[1],R=rng(seedOf('road'+ds)),o=shape(a,b,rng(seedOf(a+b))),roads={},rp={},ct={},mode=fix?fix.mode:modeOf(ds);ct[b]=CITY[b].slice(0,2);
 Object.keys(o).forEach(function(c){ct[c]=CITY[c].slice(0,2);roads[c]=o[c].map(function(e){var r=RD[e.i],key=c+'>'+e.to,pts=PT(e.i);if(e.rev)pts=pts.slice().reverse();rp[key]=pts;ct[e.to]=CITY[e.to].slice(0,2);var cross=(r[7]||[]).map(function(q){return [q[0],q[1]]});if(e.rev){var st=r[8];cross=[];var rv=(r[7]||[]).slice().reverse();rv.forEach(function(q,i){cross.push([+(1-q[0]).toFixed(2),i+1<rv.length?rv[i+1][1]:st])})}var k='free',v=0,u=R();if(r[4]){k='toll';v=r[4]===2?1:Math.max(1,Math.min(4,Math.round(e.mi/70)))}else if(u<.3){k='risk';v=[.35+R()*.25,6,evOf(r[3],ds,R)]}else if(u<.55){k='gas';v=8}return {f:c,to:e.to,r:r[2],mi:e.mi,k:k,v:v,b:r[3],cross:cross}})});
 var v=Object.keys(ct).map(function(c){return ct[c]}),xs=v.map(function(q){return q[0]}),ys=v.map(function(q){return q[1]}),asp=214/345,x1=Math.min.apply(0,xs)-46,x2=Math.max.apply(0,xs)+46,y1=Math.min.apply(0,ys)-46,y2=Math.max.apply(0,ys)+46,w=Math.max(x2-x1,(y2-y1)/asp),h=w*asp;
 return {ds:ds,mode:mode,name:a+' to '+b,start:a,end:b,roads:roads,CT:ct,RP:rp,HOME:[(x1+x2)/2-w/2,(y1+y2)/2-h/2,w,h]}}
/* cheapest way through, for the budget and the "best route" line */
function bestRoute(T,cost){var E={},N={};function g(c){if(c===T.end)return 0;if(E[c]!=null)return E[c];var b=1e9;(T.roads[c]||[]).forEach(function(r){var t=cost(r)+g(r.to);if(t<b){b=t;N[c]=r.to}});return E[c]=b}var total=g(T.start),path=[T.start],c=T.start;while(c!==T.end){c=N[c];path.push(c)}return {cost:total,path:path}}
