var ut=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||ut("Cannot "+r);var s=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),f=(e,t,r)=>t.has(e)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c=(e,t,r,i)=>(G(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),l=(e,t,r)=>(G(e,t,"access private method"),r);import{l as St,p as lt,q as O,s as J,t as q,v as Ot,w as X,x as dt,z as Et,A as xt,B as wt,C as ft,o as Rt,r as w,u as It}from"./index-CJkeBIRH.js";import{x as Qt,w as pt}from"./api-C97lCNQU.js";var v,a,N,m,T,P,I,S,V,_,L,F,U,Q,B,n,z,Y,Z,tt,et,st,rt,it,yt,vt,Tt=(vt=class extends St{constructor(t,r){super();f(this,n);f(this,v);f(this,a);f(this,N);f(this,m);f(this,T);f(this,P);f(this,I);f(this,S);f(this,V);f(this,_);f(this,L);f(this,F);f(this,U);f(this,Q);f(this,B,new Set);this.options=r,c(this,v,t),c(this,S,null),c(this,I,lt()),this.options.experimental_prefetchInRender||s(this,I).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),bt(s(this,a),this.options)?l(this,n,z).call(this):this.updateResult(),l(this,n,et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,n,st).call(this),l(this,n,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,r){const i=this.options,d=s(this,a);if(this.options=s(this,v).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof O(this.options.enabled,s(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,n,it).call(this),s(this,a).setOptions(this.options),i._defaulted&&!J(this.options,i)&&s(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const u=this.hasListeners();u&&gt(s(this,a),d,this.options,i)&&l(this,n,z).call(this),this.updateResult(r),u&&(s(this,a)!==d||O(this.options.enabled,s(this,a))!==O(i.enabled,s(this,a))||q(this.options.staleTime,s(this,a))!==q(i.staleTime,s(this,a)))&&l(this,n,Y).call(this);const h=l(this,n,Z).call(this);u&&(s(this,a)!==d||O(this.options.enabled,s(this,a))!==O(i.enabled,s(this,a))||h!==s(this,Q))&&l(this,n,tt).call(this,h)}getOptimisticResult(t){const r=s(this,v).getQueryCache().build(s(this,v),t),i=this.createResult(r,t);return Ut(this,i)&&(c(this,m,i),c(this,P,this.options),c(this,T,s(this,a).state)),i}getCurrentResult(){return s(this,m)}trackResult(t,r){const i={};return Object.keys(t).forEach(d=>{Object.defineProperty(i,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),r==null||r(d),t[d])})}),i}trackProp(t){s(this,B).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const r=s(this,v).defaultQueryOptions(t),i=s(this,v).getQueryCache().build(s(this,v),r);return i.fetch().then(()=>this.createResult(i,r))}fetch(t){return l(this,n,z).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,m)))}createResult(t,r){var ct;const i=s(this,a),d=this.options,u=s(this,m),h=s(this,T),E=s(this,P),y=t!==i?t.state:s(this,N),{state:x}=t;let o={...x},j=!1,b;if(r._optimisticResults){const g=this.hasListeners(),D=!g&&bt(t,r),M=g&&gt(t,i,r,d);(D||M)&&(o={...o,...wt(x.data,t.options)}),r._optimisticResults==="isRestoring"&&(o.fetchStatus="idle")}let{error:k,errorUpdatedAt:A,status:R}=o;if(r.select&&o.data!==void 0)if(u&&o.data===(h==null?void 0:h.data)&&r.select===s(this,V))b=s(this,_);else try{c(this,V,r.select),b=r.select(o.data),b=ft(u==null?void 0:u.data,b,r),c(this,_,b),c(this,S,null)}catch(g){c(this,S,g)}else b=o.data;if(r.placeholderData!==void 0&&b===void 0&&R==="pending"){let g;if(u!=null&&u.isPlaceholderData&&r.placeholderData===(E==null?void 0:E.placeholderData))g=u.data;else if(g=typeof r.placeholderData=="function"?r.placeholderData((ct=s(this,L))==null?void 0:ct.state.data,s(this,L)):r.placeholderData,r.select&&g!==void 0)try{g=r.select(g),c(this,S,null)}catch(D){c(this,S,D)}g!==void 0&&(R="success",b=ft(u==null?void 0:u.data,g,r),j=!0)}s(this,S)&&(k=s(this,S),b=s(this,_),A=Date.now(),R="error");const H=o.fetchStatus==="fetching",K=R==="pending",$=R==="error",ht=K&&H,ot=b!==void 0,C={status:R,fetchStatus:o.fetchStatus,isPending:K,isSuccess:R==="success",isError:$,isInitialLoading:ht,isLoading:ht,data:b,dataUpdatedAt:o.dataUpdatedAt,error:k,errorUpdatedAt:A,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>y.dataUpdateCount||o.errorUpdateCount>y.errorUpdateCount,isFetching:H,isRefetching:H&&!K,isLoadingError:$&&!ot,isPaused:o.fetchStatus==="paused",isPlaceholderData:j,isRefetchError:$&&ot,isStale:nt(t,r),refetch:this.refetch,promise:s(this,I)};if(this.options.experimental_prefetchInRender){const g=W=>{C.status==="error"?W.reject(C.error):C.data!==void 0&&W.resolve(C.data)},D=()=>{const W=c(this,I,C.promise=lt());g(W)},M=s(this,I);switch(M.status){case"pending":t.queryHash===i.queryHash&&g(M);break;case"fulfilled":(C.status==="error"||C.data!==M.value)&&D();break;case"rejected":(C.status!=="error"||C.error!==M.reason)&&D();break}}return C}updateResult(t){const r=s(this,m),i=this.createResult(s(this,a),this.options);if(c(this,T,s(this,a).state),c(this,P,this.options),s(this,T).data!==void 0&&c(this,L,s(this,a)),J(i,r))return;c(this,m,i);const d={},u=()=>{if(!r)return!0;const{notifyOnChangeProps:h}=this.options,E=typeof h=="function"?h():h;if(E==="all"||!E&&!s(this,B).size)return!0;const p=new Set(E??s(this,B));return this.options.throwOnError&&p.add("error"),Object.keys(s(this,m)).some(y=>{const x=y;return s(this,m)[x]!==r[x]&&p.has(x)})};(t==null?void 0:t.listeners)!==!1&&u()&&(d.listeners=!0),l(this,n,yt).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,n,et).call(this)}},v=new WeakMap,a=new WeakMap,N=new WeakMap,m=new WeakMap,T=new WeakMap,P=new WeakMap,I=new WeakMap,S=new WeakMap,V=new WeakMap,_=new WeakMap,L=new WeakMap,F=new WeakMap,U=new WeakMap,Q=new WeakMap,B=new WeakMap,n=new WeakSet,z=function(t){l(this,n,it).call(this);let r=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Ot)),r},Y=function(){l(this,n,st).call(this);const t=q(this.options.staleTime,s(this,a));if(X||s(this,m).isStale||!dt(t))return;const i=Et(s(this,m).dataUpdatedAt,t)+1;c(this,F,setTimeout(()=>{s(this,m).isStale||this.updateResult()},i))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},tt=function(t){l(this,n,rt).call(this),c(this,Q,t),!(X||O(this.options.enabled,s(this,a))===!1||!dt(s(this,Q))||s(this,Q)===0)&&c(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||xt.isFocused())&&l(this,n,z).call(this)},s(this,Q)))},et=function(){l(this,n,Y).call(this),l(this,n,tt).call(this,l(this,n,Z).call(this))},st=function(){s(this,F)&&(clearTimeout(s(this,F)),c(this,F,void 0))},rt=function(){s(this,U)&&(clearInterval(s(this,U)),c(this,U,void 0))},it=function(){const t=s(this,v).getQueryCache().build(s(this,v),this.options);if(t===s(this,a))return;const r=s(this,a);c(this,a,t),c(this,N,t.state),this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))},yt=function(t){Rt.batch(()=>{t.listeners&&this.listeners.forEach(r=>{r(s(this,m))}),s(this,v).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},vt);function Ft(e,t){return O(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bt(e,t){return Ft(e,t)||e.state.data!==void 0&&at(e,t,t.refetchOnMount)}function at(e,t,r){if(O(t.enabled,e)!==!1){const i=typeof r=="function"?r(e):r;return i==="always"||i!==!1&&nt(e,t)}return!1}function gt(e,t,r,i){return(e!==t||O(i.enabled,e)===!1)&&(!r.suspense||e.state.status!=="error")&&nt(e,r)}function nt(e,t){return O(t.enabled,e)!==!1&&e.isStaleByTime(q(t.staleTime,e))}function Ut(e,t){return!J(e.getCurrentResult(),t)}var Ct=w.createContext(!1),Dt=()=>w.useContext(Ct);Ct.Provider;function Mt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Pt=w.createContext(Mt()),_t=()=>w.useContext(Pt),Lt=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Bt=e=>{w.useEffect(()=>{e.clearReset()},[e])},jt=({result:e,errorResetBoundary:t,throwOnError:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&Qt(r,[e.error,i]),kt=e=>{const t=e.staleTime;e.suspense&&(e.staleTime=typeof t=="function"?(...r)=>Math.max(t(...r),1e3):Math.max(t??1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},At=(e,t)=>e.isLoading&&e.isFetching&&!t,Ht=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,mt=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function zt(e,t,r){var o,j,b,k,A;const i=It(),d=Dt(),u=_t(),h=i.defaultQueryOptions(e);(j=(o=i.getDefaultOptions().queries)==null?void 0:o._experimental_beforeQuery)==null||j.call(o,h),h._optimisticResults=d?"isRestoring":"optimistic",kt(h),Lt(h,u),Bt(u);const E=!i.getQueryCache().get(h.queryHash),[p]=w.useState(()=>new t(i,h)),y=p.getOptimisticResult(h),x=!d&&e.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(R=>{const H=x?p.subscribe(Rt.batchCalls(R)):pt;return p.updateResult(),H},[p,x]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),w.useEffect(()=>{p.setOptions(h,{listeners:!1})},[h,p]),Ht(h,y))throw mt(h,p,u);if(jt({result:y,errorResetBoundary:u,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw y.error;if((k=(b=i.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||k.call(b,h,y),h.experimental_prefetchInRender&&!X&&At(y,d)){const R=E?mt(h,p,u):(A=i.getQueryCache().get(h.queryHash))==null?void 0:A.promise;R==null||R.catch(pt).finally(()=>{p.updateResult()})}return h.notifyOnChangeProps?y:p.trackResult(y)}function Kt(e,t){return zt(e,Tt)}export{Kt as u};
