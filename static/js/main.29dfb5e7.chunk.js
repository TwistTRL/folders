(this["webpackJsonpreact-folders"]=this["webpackJsonpreact-folders"]||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),o=a(6),c=a(8),i=a(0),h=a.n(i),s=a(10),u=a.n(s),d=(a(17),a(3)),m=(a(20),a(21),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.folders,a=e.className,n=e.width,r=e.height,l=e.folderContentWidth,o=e.folderContentHeight,c=t.length,i=(n+10*(c-1))/c,s={tabs:{backgroundColor:"rgba(0,0,0,0)"},tab:function(e,t){return{backgroundColor:e.backgroundColor,color:"white",width:i,zIndex:10-c-t-1}},tabPanel:function(e){return{backgroundColor:e.backgroundColor,height:r,overflow:"xray-folder"===a?"auto":"hidden"}}};return h.a.createElement("div",{className:"wrap",style:{maxWidth:l,height:r,direction:"rtl"}},h.a.createElement("div",{className:"folder-content-container",style:{maxWidth:l||n,height:o||r,float:"right"}},1===c?h.a.createElement("div",{className:a,style:s.tabPanel(t[0])},t[0].component):h.a.createElement(d.d,{className:a,style:s.tabs},h.a.createElement(d.b,null,t.map((function(e,t){return h.a.createElement(d.a,{key:e.name,style:s.tab(e,t),className:"side-tab tab1"}," ",e.name)}))),t.map((function(e){return h.a.createElement(d.c,{key:e.name,style:s.tabPanel(e)},e.component)})))))}}]),t}(i.PureComponent)),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e&&e.preventDefault();var t=a.width.value,n=a.height.value;a.setState({width:Number(t),height:Number(n)})},a.state={width:300,height:400},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[{name:"COAG",backgroundColor:"#fff5e8",component:h.a.createElement("div",{className:"haha",style:{width:300}},h.a.createElement("div",{className:"fluids-table-label-container"},h.a.createElement("h3",null,h.a.createElement("span",{className:"c-circle"},"C"),h.a.createElement("span",{className:"coag-label"},"Coagulation")))),panelLabel:"Nutrition"}];return h.a.createElement(h.a.Fragment,null,h.a.createElement("form",{onSubmit:this.handleSubmit},h.a.createElement("input",{placeholder:"width",type:"text",ref:function(t){e.width=t}}),h.a.createElement("input",{placeholder:"height",type:"text",ref:function(t){e.height=t}}),h.a.createElement("button",null,"Submit!")),h.a.createElement(m,{width:this.state.width,height:this.state.height,folderContentWidth:1200,folderContentHeight:this.state.height,className:"fluids-folder",folders:t}))}}]),t}(i.Component);u.a.render(h.a.createElement(b,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.29dfb5e7.chunk.js.map