(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{109:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){r=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},263:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(109),c=a(7),o=a(8),i=a(10),l=a(9),s=a(22),u=a(11),d=a(0),m=a.n(d),h=a(247),p=a(248),v=a(267),f=a(60),C=(a(71),a(92)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={active:[],confirmed:[],deaths:[],recovered:[]},a.fetchCSVs=a.fetchCSVs.bind(Object(s.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchCSVs()}},{key:"fetchCSVs",value:function(){var e=this,t=[f.c("".concat(window.appURL,"/pi-countries-active-cases-sorted.csv")),f.c("".concat(window.appURL,"/pi-countries-confirmed-cases-sorted.csv")),f.c("".concat(window.appURL,"/pi-countries-deaths-cases-sorted.csv")),f.c("".concat(window.appURL,"/pi-countries-recovered-cases-sorted.csv"))];Promise.all(t).then(function(t){var a=Object(r.a)(t,4),c=a[0],o=a[1],i=a[2],l=a[3];e.setState({active:[["Country","Active Cases"]].concat(Object(n.a)(c.map(function(e){return[e.country,+e.Active]}))),confirmed:[["Country","Confirmed Cases"]].concat(Object(n.a)(o.map(function(e){return[e.country,+e.Confirmed]}))),deaths:[["Country","Deaths"]].concat(Object(n.a)(i.map(function(e){return[e.country,+e.Deaths]}))),recovered:[["Country","Recovered Cases"]].concat(Object(n.a)(l.map(function(e){return[e.country,+e.Recovered]})))})})}},{key:"render",value:function(){var e=this.state,t=e.active,a=e.confirmed,n=e.deaths,r=e.recovered;return m.a.createElement(h.a,null,m.a.createElement(p.a,{md:6,xl:6},m.a.createElement(v.a,null,m.a.createElement(v.a.Body,null,m.a.createElement("h6",{className:"mb-4"},"Total Active Cases"),m.a.createElement(C.a,{width:"100%",height:"300px",chartType:"PieChart",loader:m.a.createElement("div",null,"Loading Chart"),data:t,options:{title:"Total Active Cases"}})))),m.a.createElement(p.a,{md:6,xl:6},m.a.createElement(v.a,null,m.a.createElement(v.a.Body,null,m.a.createElement("h6",{className:"mb-4"},"Total Confirmed Cases"),m.a.createElement(C.a,{width:"100%",height:"300px",chartType:"PieChart",loader:m.a.createElement("div",null,"Loading Chart"),data:a,options:{title:"Total Confirmed Cases"}})))),m.a.createElement(p.a,{md:6,xl:6},m.a.createElement(v.a,null,m.a.createElement(v.a.Body,null,m.a.createElement("h6",{className:"mb-4"},"Total Recovered Cases"),m.a.createElement(C.a,{width:"100%",height:"300px",chartType:"PieChart",loader:m.a.createElement("div",null,"Loading Chart"),data:r,options:{title:"Total Recovered Cases"}})))),m.a.createElement(p.a,{md:6,xl:6},m.a.createElement(v.a,null,m.a.createElement(v.a.Body,null,m.a.createElement("h6",{className:"mb-4"},"Total Deaths"),m.a.createElement(C.a,{width:"100%",height:"300px",chartType:"PieChart",loader:m.a.createElement("div",null,"Loading Chart"),data:n,options:{title:"Total Deaths"}})))))}}]),t}(m.a.Component);t.default=y}}]);
//# sourceMappingURL=15.7bb69d77.chunk.js.map