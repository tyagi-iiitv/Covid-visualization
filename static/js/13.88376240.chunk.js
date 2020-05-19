(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{172:function(e,t,n){"use strict";var a=n(49),r=n(52),i=n(51),l=n(54),c=n.n(l),o=n(0),s=n.n(o),u=n(56),d=n(65);var f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}},null)};function p(e){return!e||"#"===e.trim()}var h=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleKeyDown=a.handleKeyDown.bind(Object(d.a)(Object(d.a)(a))),a}Object(i.a)(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this.props,n=t.disabled,a=t.href,r=t.onClick;(n||p(a))&&e.preventDefault(),n?e.stopPropagation():r&&r(e)},n.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},n.render=function(){var e=this.props,t=e.as,n=e.disabled,i=e.onKeyDown,l=e.innerRef,c=Object(r.a)(e,["as","disabled","onKeyDown","innerRef"]);return p(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),n&&(c.tabIndex=-1,c["aria-disabled"]=!0),l&&(c.ref=l),s.a.createElement(t,Object(a.a)({},c,{onClick:this.handleClick,onKeyDown:f(this.handleKeyDown,i)}))},t}(s.a.Component);h.defaultProps={as:"a"};var b=h,m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.variant,i=e.size,l=e.active,o=e.className,u=e.block,d=e.type,f=e.as,p=e.innerRef,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as","innerRef"]),m=c()(o,t,l&&"active",t+"-"+n,u&&t+"-block",i&&t+"-"+i);if(h.href)return s.a.createElement(b,Object(a.a)({},h,{as:f,innerRef:p,className:c()(m,h.disabled&&"disabled")}));var v=f||"button";return p&&(h.ref=p),s.a.createElement(v,Object(a.a)({},h,{type:d,className:m}))},t}(s.a.Component);m.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};t.a=Object(u.a)(m,{prefix:"btn",forwardRefAs:"innerRef"})},257:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(7),i=n(8),l=n(10),c=n(9),o=n(11),s=n(0),u=n.n(s),d=n(247),f=n(248),p=n(267),h=n(172),b=n(60),m=n(21),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.scatterPlot()}},{key:"scatterPlot",value:function(){var e=10,t=30,n=60,r=800-n-30,i=800-e-t,l=b.v(".my_dataviz").append("svg").attr("width","100%").attr("height",i+e+t).append("g").attr("transform","translate("+n+","+e+")");b.c("".concat(window.appURL,"/scatterplot-tnse.csv")).then(function(e){console.log(e);var t=b.p().domain([-70,70]).range([0,r]);l.append("g").attr("transform","translate(0,"+i+")").call(b.a(t));var n=b.p().domain([-70,70]).range([i,0]);l.append("g").call(b.b(n));var c=b.q().domain(Object(a.a)(Array(15).keys())).range(["#E63946","#F1FAEE","#A8DADC","#457B9D","#1D3557","#d95af2","#FCB0B3","#7EB2DD","#445E93","#5B2333","#EF8E29","#C9DB4B","#8EC56C","#000000","#433E3E"]);l.append("g").selectAll("dot").data(e).enter().append("circle").attr("cx",function(e){return t(e.Axis1)}).attr("cy",function(e){return n(e.Axis2)}).attr("r",2).style("fill",function(e){return c(parseInt(e.Kernel))});var o=l.selectAll(".legend").data(c.domain()).enter().append("g").attr("class","legend").attr("transform",function(e,t){return"translate(0,"+20*t+")"});o.append("rect").attr("width",10).attr("height",10).style("fill",function(e){return c(e)}).attr("transform",function(e,t){return"translate("+(r-10)+",4)"}),o.append("text").attr("x",r-24).attr("y",9).attr("dy",".35em").style("text-anchor","end").text(function(e){return e}),l.select(".legend").append("text").text("K-clusters").style("text-anchor","end").attr("transform","translate(710,0)")})}},{key:"render",value:function(){return u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement("div",{className:"graph-body"}),u.a.createElement(f.a,{md:12,xl:12},u.a.createElement(p.a,null,u.a.createElement(p.a.Body,null,u.a.createElement("h6",{className:"mb-4"},"Litrature Clustering"),u.a.createElement("a",{href:"".concat(window.appURL,"/literature-cluster.html"),target:"_blank",rel:"noopener noreferrer"},u.a.createElement(h.a,{variant:"primary"},"How did we get the data for the scatterplot?")," "),u.a.createElement("div",{className:"my_dataviz"}))))))}}]),t}(u.a.Component);t.default=v},65:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})}}]);
//# sourceMappingURL=13.88376240.chunk.js.map