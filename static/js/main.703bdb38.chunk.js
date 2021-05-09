(this["webpackJsonpgithub-battle"]=this["webpackJsonpgithub-battle"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(11),c=n.n(s),l=(n(17),n(18),n(4)),i=n(10),o=n(5),u=n(6),b=n(2),h=n(8),j=n(7),d=n(12),m="?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_ID");function O(e,t){return"Not Found"===e?"".concat(t," doesn't exist"):e}function f(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(m,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(O(t.message,e));return t}))}function x(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function g(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(m)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(O(e.message,t));return e}))),f(e)]).then((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return{profile:n,score:x(n.followers,a)}}));var t}var p=n(3),v=n(0);function y(e){var t=e.selected,n=e.onUpdateLanguage;return Object(v.jsx)("ul",{className:"flex-center",children:["All","JavaScript","Ruby","Java","CSS","Python"].map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)("button",{className:"btn-clear nav-link",style:e===t?{color:"rgb(187, 46, 31)"}:null,onClick:function(){return n(e)},children:e})},e)}))})}function N(e){var t=e.repos;return Object(v.jsxs)("ul",{className:"grid space-around",children:[t.map((function(e,t){e.name;var n=e.owner,a=e.html_url,r=e.stargazers_count,s=e.forks,c=e.open_issues,l=n.login,i=n.avatar_url;return Object(v.jsxs)("li",{className:"repo bg-light",children:[Object(v.jsxs)("h4",{className:"header-lg center-text",children:["#",t+1]}),Object(v.jsx)("img",{className:"avatar",src:i,alt:"Avatar for ".concat(l)}),Object(v.jsx)("h2",{className:"center-text",children:Object(v.jsx)("a",{className:"link",href:a,children:l})}),Object(v.jsxs)("ul",{className:"card-list",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)(p.g,{color:"rgb(255, 191, 116)",size:22}),Object(v.jsx)("a",{href:"https://github.com/".concat(l),children:l})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)(p.d,{color:"rgb(255, 215, 0)",size:22}),r.toLocaleString()," stars"]}),Object(v.jsxs)("li",{children:[Object(v.jsx)(p.a,{color:"rgb(219, 195, 245)",size:22}),s.toLocaleString()," forks"]}),Object(v.jsxs)("li",{children:[Object(v.jsx)(p.b,{color:"rgb(241, 138, 147)",size:22}),c.toLocaleString()," open issues"]})]})]},a)})),Object(v.jsx)("pre",{children:JSON.stringify(t,null,2)})]})}r.a.Component;var S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={winner:null,loser:null,error:null,loading:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=this.props,a=n.playerOne,r=n.playerTwo;(e=[a,r],Promise.all([g(e[0]),g(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))).then((function(e){t.setState({winner:e[0],loser:e[1],error:null,loading:!1})})).catch((function(e){var n=e.message;t.setState({error:n,loading:!1})}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:["Results",Object(v.jsx)("pre",{children:JSON.stringify(this.state,null,2)})]})}}]),n}(r.a.Component);function w(){return Object(v.jsxs)("div",{className:"instructions-container",children:[Object(v.jsx)("h1",{className:"center-text header-lg",children:"Instructions"}),Object(v.jsxs)("ol",{className:"container-sm grid center-text battle-instructions",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{className:"header-sm",children:"Enter two Github users"}),Object(v.jsx)(p.h,{className:"bg-light",color:"rgb(255, 191, 116",size:140})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{className:"header-sm",children:"Battle"}),Object(v.jsx)(p.c,{className:"bg-light",color:"#727272",size:140})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{className:"header-sm",children:"See the winners"}),Object(v.jsx)(p.f,{className:"bg-light",color:"rgb(255, 215, 0",size:140})]})]})]})}var k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.username)}},{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return Object(v.jsxs)("form",{className:"column player",onSubmit:this.handleSubmit,children:[Object(v.jsx)("label",{htmlFor:"username",className:"player-label",children:this.props.label}),Object(v.jsxs)("div",{className:"row player-inputs",children:[Object(v.jsx)("input",{type:"text",id:"username",className:"input-light",placeholder:"github username",autoComplete:"off",value:this.state.username,onChange:this.handleChange}),Object(v.jsx)("button",{className:"btn dark-btn",type:"submit",disabled:!this.state.username,children:"Submit"})]})]})}}]),n}(r.a.Component);function C(e){var t=e.username,n=e.onReset,a=e.label;return Object(v.jsxs)("div",{className:"column player",children:[Object(v.jsx)("h3",{className:"player-label",children:a}),Object(v.jsxs)("div",{className:"row bg-light",children:[Object(v.jsxs)("div",{className:"player-info",children:[Object(v.jsx)("img",{className:"avatar-small",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),Object(v.jsx)("a",{href:"https://github.com/".concat(t),className:"link",children:t})]}),Object(v.jsx)("button",{className:"btn-clear flex-center",onClick:n,children:Object(v.jsx)(p.e,{color:"rgb(197, 57, 42)",size:26})})]})]})}var R=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={playerOne:null,playerTwo:null,battle:!1},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleReset=a.handleReset.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleSubmit",value:function(e,t){this.setState(Object(l.a)({},e,t))}},{key:"handleReset",value:function(e){this.setState(Object(l.a)({},e,null))}},{key:"render",value:function(){var e=this,t=this.state,n=t.playerOne,a=t.playerTwo;return!0===t.battle?Object(v.jsx)(S,{playerOne:n,playerTwo:a}):Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(w,{}),Object(v.jsxs)("div",{className:"players-container",children:[Object(v.jsx)("h1",{className:"center-text header-lg",children:"Players"}),Object(v.jsxs)("div",{className:"row space-around",children:[null===n?Object(v.jsx)(k,{label:"Player One",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):Object(v.jsx)(C,{username:n,label:"Player One",onReset:function(){return e.handleReset("playerOne")}}),null===a?Object(v.jsx)(k,{label:"Player Two",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):Object(v.jsx)(C,{username:a,label:"Player Two",onReset:function(){return e.handleReset("playerTwo")}})]}),n&&a&&Object(v.jsx)("button",{className:"btn dark-btn btn-space",onClick:function(){return e.setState({battle:!0})},children:"Battle"})]})]})}}]),n}(r.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(R,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.703bdb38.chunk.js.map