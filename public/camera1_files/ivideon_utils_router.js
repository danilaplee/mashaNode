(function(i,k,a){"use strict";var d=k.$,h=k.require({prefix:""},"history"),e=k.require({prefix:""},"Abyssa"),c=k.require({prefix:""},"signals"),g=h.pushState,m=h.replaceState,l=b,j=l.prototype,f="ivideon.utils.Router";
k.provide(f,l);k.provide(f+".State",e.State);k.provide(f+".Transition",e.Transition);k.provide(f+".Async",e.Async);function b(n){if(!h.redirect){throw new k.utils.DependencyError(f+" history.redirect")
}var o=this;o._options=k.optMerge(l.defaults,n);o._isInitialized=false;o._fullPages=[];o._initiallyTrackedPathQuery=o.normalizePathQuery(i.location.pathname+i.location.search);if(k.app.getConfig("app.historyApiEnabled")===false){o.disableHistoryApi()
}o._router=e.Router();o._previousRouteInfo=a;o._currentRouteInfo=a;o._pendingRouteInfo=a;o._throttleTimer=null;if(i._DEBUG){e.Router.enableLogs()}e.Router.setAsyncErrorHandler(function(p){if(p){k.reportError(p,{func:f+" handleAsyncError"})
}});o.events={initialized:o._router.initialized,started:o._router.transition.started,routed:o._router.transition.completed,failed:o._router.transition.failed,toJSON:function(){return a}};o.events.initialized.add(o._onInitialized,o);
o.events.started.add(o._onStarted,o);o.events.routed.add(o._onRouted,o);o.events.failed.add(o._onFailed,o);o.add("notFound",(k.require("ivideon.utils.Router.State"))(k.app.getConfig("app.rootUrl")+"/404",{enterPrereqs:function(p){if(o._isInitialized&&p.pathQuery){o.goFullPage(p.pathQuery)
}}}))}l.defaults={};j.normalizePathQuery=e.normalizePathQuery;j.getPathQuery=e.getPathQuery;j.interceptAnchorClicks=function(n){if(!n){throw new k.utils.ArgumentError(f+'#interceptAnchorClicks: Argument "container" is required.')
}return e.interceptAnchorClicks(this._router,n)};j.disableHistoryApi=function(){h.pushState=h.replaceState=k.noop};j.enableHistoryApi=function(){if(k.app.getConfig("app.historyApiEnabled")!==false){h.pushState=g;
h.replaceState=m}};j.isInitialized=function(){return this._isInitialized};j.getPreviousRouteInfo=function(){return this._previousRouteInfo};j.getCurrentRouteInfo=function(){return this._currentRouteInfo
};j.getPendingRouteInfo=function(){return this._pendingRouteInfo};j.add=function(o,n){return this._router.addState(o,n)};j.addFullPage=function(n){this._fullPages.push.apply(this._fullPages,n)};j.start=function(){this._router.init()
};j.createUrl=function(n,o){return this._router.link(n,o||{})};j.go=function(o,q,n){var r=this;if(!r._isInitialized){throw new k.utils.StateError(f+"#go: Not initialized.")}n=n||{};function p(){if(k.app.getConfig("app.historyApiEnabled")){if(n.replace){h.pushState=m
}else{h.pushState=g}}r._router.state(o,q)}i.clearTimeout(r._throttleTimer);if(typeof n.delay==="number"&&n.delay>=0){r._throttleTimer=i.setTimeout(p,n.delay)}else{p()}};j.goBack=function(){var n=this;if(!n._isInitialized){throw new k.utils.StateError(f+"#goBack: Not initialized.")
}i.clearTimeout(n._throttleTimer);h.back()};j.goCancel=function(){var n=this;i.clearTimeout(n._throttleTimer)};j.goFullPage=function(o,q){var r=this,p=(!o||o.indexOf("/")>-1||o.indexOf("?")>-1),n=(p?o||"":r.createUrl(o,q));
k.console.warn(f+" full-page "+n);i.clearTimeout(r._throttleTimer);k.app.end();h.pushState=k.noop;i.location.href=n};j._isFullPage=function(p,o,q,n){return(p&&p.fullName!==o.fullName&&this._fullPages.indexOf(p.fullName)>-1&&this._fullPages.indexOf(o.fullName)>-1)
};j._onInitialized=function(n,o){k.console.log(f+" initialized "+n,n,o);this._isInitialized=true};j._onStarted=function(p,o,q,n){var r=this;i.clearTimeout(r._throttleTimer);r._previousRouteInfo=r._currentRouteInfo;
r._pendingRouteInfo={route:o.fullName,params:n};k.console.log(f+" started "+p+" -> "+o,p,o,q,n);k.app.events.fire("navigating");if(r._isFullPage(p,o)){r.goFullPage(o.fullName,n)}};j._onRouted=function(q,o,r,n){var s=this;
s._currentRouteInfo={route:o.fullName,params:n};s._pendingRouteInfo=a;if(k.app.getConfig("app.historyApiEnabled")){h.pushState=g}k.console.log(f+" routed "+q+" -> "+o,q,o,r,n);k.app.events.fire("navigated");
if(i.ga){var p=s.getPathQuery();if(p!==s._initiallyTrackedPathQuery){i.ga("set","page",p);i.ga("send","pageview")}s._initiallyTrackedPathQuery=null}};j._onFailed=function(q,p,r,o,n){var s=this;s._pendingRouteInfo=a;
if(k.app.getConfig("app.historyApiEnabled")){h.pushState=g}k.console.error(f+" failed "+q+" -> "+p,q,p,r,o,n);k.reportError(n)}}(this,this._ivideon));