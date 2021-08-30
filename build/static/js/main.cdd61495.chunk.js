(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{101:function(e,t,a){e.exports={container:"Charts_container__2JnAG"}},108:function(e,t,a){},24:function(e,t,a){e.exports={container:"Cards_container__MvGCi",card:"Cards_card__1ydRO",infected:"Cards_infected__NZ9uE",recovered:"Cards_recovered__21knk",deaths:"Cards_deaths___3mUR"}},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),o=a.n(c),s=(a(108),a(12)),i=a.n(s),u=a(18),d=a(4),l=a(3),j=a(7),f=a(6),p=a(260),h=a(265),b=a(261),v=a(262),x=a(45),m=a.n(x),O=a(23),g=a(264),y=a(263),C=a(46),_=a.n(C),w=" https://covid19.mathdro.id/api",k=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w,t&&(a="".concat(w,"/countries/").concat(t)),e.prev=2,e.next=5,_.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(w,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(w,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=a(96),I=a.n(N),M=a(2),B=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(O.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(M.jsx)(g.a,{className:I.a.formControl,children:Object(M.jsxs)(y.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:["s",Object(M.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(M.jsx)("option",{value:e,children:e},t)}))]})})},V=a(47),E=a.n(V),F=a(24),R=a.n(F),U=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(M.jsx)("div",{className:R.a.container,children:Object(M.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(M.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:E()(R.a.card,R.a.infected),children:Object(M.jsxs)(b.a,{children:[Object(M.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected "}),Object(M.jsx)(v.a,{varaint:"h2",children:Object(M.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(M.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(M.jsx)(v.a,{varaint:"body2",children:"Number of ative cases of COVID-19 "})]})}),Object(M.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:E()(R.a.card,R.a.recovered),children:Object(M.jsxs)(b.a,{children:[Object(M.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered "}),Object(M.jsx)(v.a,{varaint:"h2",children:Object(M.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(M.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(M.jsx)(v.a,{varaint:"body2",children:"Number of recoveries from COVID-19 "})]})}),Object(M.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:E()(R.a.card,R.a.deaths),children:Object(M.jsxs)(b.a,{children:[Object(M.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths "}),Object(M.jsx)(v.a,{varaint:"h2",children:Object(M.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(M.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(M.jsx)(v.a,{varaint:"body2",children:"Number of deaths caused by COVID-19 "})]})})]})}):"loading.."},A=a(64),G=a(101),J=a.n(G),P=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,o=e.country,s=Object(n.useState)({}),d=Object(O.a)(s,2),l=d[0],j=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(l),e()}),[]);var f=a?Object(M.jsx)(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null,p=l.length?Object(M.jsx)(A.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255 , 0 , 0 , 0.5",fill:!0}]}}):null;return Object(M.jsx)("div",{className:J.a.container,children:o?f:p})},L=a(63),T=a.n(L),z=a.p+"static/media/image.9e5d4fc7.png",Z=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)("div",{className:T.a.container,children:[Object(M.jsx)("img",{className:T.a.image,src:z,alt:"COVID-19"}),Object(M.jsx)(U,{data:t}),Object(M.jsx)(B,{handleCountryChange:this.handleCountryChange}),Object(M.jsx)(P,{data:t,country:a})]})})}}]),a}(n.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,266)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(Z,{})}),document.getElementById("root")),q()},63:function(e,t,a){e.exports={container:"Indd_container__7p9-z",image:"Indd_image__23wMj"}},96:function(e,t,a){e.exports={formControl:"Countrypicker_formControl__2hMvM"}}},[[241,1,2]]]);
//# sourceMappingURL=main.cdd61495.chunk.js.map