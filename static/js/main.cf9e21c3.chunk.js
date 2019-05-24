(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={title:"Hello I'm Arvan!",subtitle:"Web Designer",links:{behance:"https://www.behance.net/arvanartc32d",instagram:"https://www.instagram.com/arvan.art/"},sections:[{title:"ABOUT",items:[{type:"p",content:"The web design process starts with a visual concept, which you could sketch by hand or with software like Photoshop. Then, you use HTML and CSS to build the website. HTML handles the basic structure and 'bones' of your page, while CSS handles the style and appearance. Recently I've started learning React.js"}]},{title:"SKILLS",items:[{type:"card",content:{image:"images/design.jpg",title:"web design"}},{type:"card",content:{image:"images/react.jpg",title:"react"}},{type:"card",content:{image:"images/html.jpg",title:"Html"}},{type:"card",content:{image:"images/css.jpg",title:"css"}}]}],icons:{down:"images/down.png"}}},25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},31:function(e,t,a){},39:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),s=a.n(o),i=(a(30),a(3)),r=a(4),l=a(6),m=a(5),u=a(9),d=a(7),h=a(1),f=(a(31),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullpage ".concat(this.props.className||""),style:{background:this.props.background}},e)}}]),t}(n.Component)),b=function(e){return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:"0",left:"0",bottom:"70px"}},c.a.createElement("div",{style:{maxWidth:"30px"}},c.a.createElement("img",{src:e.icon,style:{maxWidth:"30px"}})))},p=a(24),g=(a(39),a(2)),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={color:"#fff"},e.changeColor=e.changeColor.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"changeColor",value:function(){this.setState({color:"#fff"===this.state.color?"yellow":"#fff"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"section"},c.a.createElement(g.Element,{name:"title",className:"element"}),c.a.createElement(f,{className:"first",background:this.props.background},c.a.createElement("h1",{className:"title",style:{color:this.state.color},onMouseOver:this.changeColor,onMouseLeave:this.changeColor},h.title),c.a.createElement("h2",null,h.subtitle),c.a.createElement("div",null,Object.keys(h.links).map(function(e){return c.a.createElement(p.SocialIcon,{url:h.links[e]})}))),c.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(b,{icon:h.icons.down})),c.a.createElement(g.Element,{name:"about",className:"element"}))}}]),t}(n.Component),k=(a(47),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section"},c.a.createElement(f,{className:"second",background:this.props.background},c.a.createElement("h3",null,h.sections[0].title),c.a.createElement("div",{className:"paragraphs"},h.sections[0].items.map(function(e){return c.a.createElement("p",null,e.content)}))),c.a.createElement(g.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(b,{icon:h.icons.down})),c.a.createElement(g.Element,{name:"skills",className:"element"}," "))}}]),t}(n.Component)),E=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:e.content.image})),c.a.createElement("div",{className:"skill-title-wrapper"},c.a.createElement("h4",null,e.content.title)))}}]),t}(n.Component)),y=function(e){return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:"0",left:"0",bottom:"70px"}},c.a.createElement("div",{style:{maxWidth:"30px"}},c.a.createElement("img",{src:e.icon,style:{maxWidth:"30px",transform:"rotate(180deg)"}})))},j=(a(49),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section"},c.a.createElement(f,{className:"third",background:this.props.background},c.a.createElement("h3",null,h.sections[1].title),c.a.createElement("div",{className:"card-wrapper"},h.sections[1].items.map(function(e){return c.a.createElement(E,{skill:e})}))),c.a.createElement(g.Link,{activeClass:"active",to:"title",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(y,{icon:h.icons.down})))}}]),t}(n.Component)),w=(a(50),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={background_01:"#00a0af",background_02:"#3fb9c4",background_03:"#a5dfe4"},a.changeColor=a.changeColor.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"changeColor",value:function(){this.setState({background_01:"#00a0af"===this.state.background_01?"#ff7800":"#00a0af",background_02:"#3fb9c4"===this.state.background_02?"#ff9a40":"#3fb9c4",background_03:"#a5dfe4"===this.state.background_03?"#ffb573":"#a5dfe4"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"setting"},c.a.createElement("div",{onClick:this.changeColor},"Theme Color")),c.a.createElement("div",{className:"nav"},c.a.createElement(g.Link,{activeClass:"active",to:"title",spy:!0,smooth:!0,offset:50,duration:500,delay:100},"Title"),c.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,delay:100},"About"),c.a.createElement(g.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:50,duration:500,delay:100},"Skills"))),c.a.createElement(v,{color:this.state.color,background:this.state.background_01}),c.a.createElement(k,{color:this.state.color,background:this.state.background_02}),c.a.createElement(j,{color:this.state.color,background:this.state.background_03}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.cf9e21c3.chunk.js.map