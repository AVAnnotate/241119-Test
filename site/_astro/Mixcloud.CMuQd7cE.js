import{r as p,R as l}from"./index.DddtCxX5.js";import{g as u,k as h,q as d,c,b as m}from"./Player.CRIIEif8.js";import"./jsx-runtime.CIMolHGP.js";import"./index.DpKhS-qi.js";/* empty css                       */import"./index.BscAQ9ch.js";import"./index.Py3gQaBW.js";import"./store.aycOQVLs.js";import"./index.bM7OrN6I.js";import"./player.CKjfIk3N.js";import"./play-fill.B_vi0l2m.js";var y=Object.defineProperty,f=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,r=(s,t,e)=>(f(s,typeof t!="symbol"?t+"":t,e),e);const g="https://widget.mixcloud.com/media/js/widgetApi.js",P="Mixcloud";class a extends p.Component{constructor(){super(...arguments),r(this,"callPlayer",c),r(this,"duration",null),r(this,"currentTime",null),r(this,"secondsLoaded",null),r(this,"mute",()=>{}),r(this,"unmute",()=>{}),r(this,"ref",t=>{this.iframe=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(t){u(g,P).then(e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((o,i)=>{this.currentTime=o,this.duration=i}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(t,e=!0){this.callPlayer("seek",t),e||this.pause()}setVolume(t){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:t,config:e}=this.props,o=t.match(h)[1],i={width:"100%",height:"100%"},n=d({...e.options,feed:`/${o}/`});return l.createElement("iframe",{key:o,ref:this.ref,style:i,src:`https://www.mixcloud.com/widget/iframe/?${n}`,frameBorder:"0",allow:"autoplay"})}}r(a,"displayName","Mixcloud");r(a,"canPlay",m.mixcloud);r(a,"loopOnEnded",!0);export{a as default};
