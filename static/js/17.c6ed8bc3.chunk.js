(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{262:function(e,t,a){"use strict";a.r(t);var c=a(16),n=a(7),s=a(8),o=a(10),r=a(9),l=a(22),i=a(11),h=a(0),d=a.n(h),m=a(247),u=a(248),p=a(267),f=a(60),C=a(71),v=a.n(C),E=a(93),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={data:[],cases:[],topConfimedCases:[],topActiveCases:[],topRecoveredCases:[],topDeathCases:[]},a.fetchCSV=a.fetchCSV.bind(Object(l.a)(a)),a.fetchCases=a.fetchCases.bind(Object(l.a)(a)),a.fetchTopConfimedCases=a.fetchTopConfimedCases.bind(Object(l.a)(a)),a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchCSV(),this.fetchCases(),this.fetchTopConfimedCases()}},{key:"fetchTopConfimedCases",value:function(){var e=this;f.c("".concat(window.appURL,"/countries-confirmed-cases-sorted.csv")).then(function(t){var a=[];t.forEach(function(e){a.push([e.country,+e.Confirmed,"color: #e5e4e2"])}),t=t.sort(function(e,t){return e.Active-t.Active});var n=[];t.forEach(function(e){n.push([e.country,+e.Active,"color: #f3de8a"])}),t=t.sort(function(e,t){return e.Recovered-t.Recovered});var s=[];t.forEach(function(e){s.push([e.country,+e.Recovered,"color: #eb9486"])}),t=t.sort(function(e,t){return e.Deaths-t.Deaths});var o=[];t.forEach(function(e){o.push([e.country,+e.Deaths,"color: gray"])}),e.setState({topConfimedCases:[["Country","total cases",{role:"style"}]].concat(Object(c.a)(a.reverse().slice(0,10))),topActiveCases:[["Country","total active",{role:"style"}]].concat(Object(c.a)(n.reverse().slice(0,10))),topRecoveredCases:[["Country","total recovered",{role:"style"}]].concat(Object(c.a)(s.reverse().slice(0,10))),topDeathCases:[["Country","total deaths",{role:"style"}]].concat(Object(c.a)(o.reverse().slice(0,10)))})})}},{key:"fetchCases",value:function(){var e=this;f.c("".concat(window.appURL,"/total-cases-per-day.csv")).then(function(t){var a=[["date","total cases"]];t.forEach(function(e){a.push([v()(e.date,"MMM D, YYYY").toDate(),+e.cases])}),e.setState({cases:a})})}},{key:"fetchCSV",value:function(){var e=this;f.c("".concat(window.appURL,"/total-deaths-per-day.csv")).then(function(t){var a=[["date","total deaths"]];t.forEach(function(e){a.push([v()(e.date,"MMM D, YYYY").toDate(),+e.deaths])}),e.setState({data:a})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.cases,c=e.topConfimedCases,n=e.topActiveCases,s=e.topRecoveredCases,o=e.topDeathCases,r={legend:{position:"none"},hAxis:{format:"d MMM yy"}},l={chartArea:{width:"100%"},legend:{position:"none"},hAxis:{title:"total cases",minValue:0},isStacked:!0,vAxis:{title:"Country"},bars:"horizontal"};return d.a.createElement(m.a,null,d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Distribution of the number of ",d.a.createElement("strong",null,"deaths")),d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:t,options:r})))),d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Distribution of the number of ",d.a.createElement("strong",null,"cases")),d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:a,options:r})))),d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Top 10 Countries (Confirmed Cases)"),d.a.createElement("span",{className:"confirmed-charts"},d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:c,options:l}))))),d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Top 10 Countries (Active Cases)"),d.a.createElement("span",{className:"active-charts"},d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:n,options:l}))))),d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Top 10 Countries (Recovered Cases)"),d.a.createElement("span",{className:"recovered-charts"},d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:s,options:l}))))),d.a.createElement(u.a,{md:6,xl:6},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Top 10 Countries (Total Deaths)"),d.a.createElement("span",{className:"death-charts"},d.a.createElement(E.a,{chartType:"Bar",width:"100%",height:"400px",data:o,options:l}))))))}}]),t}(d.a.Component);t.default=y}}]);
//# sourceMappingURL=17.c6ed8bc3.chunk.js.map