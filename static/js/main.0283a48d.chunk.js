(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(30),l=n.n(c),o=n(31),u=n(32),i=n(35),s=n(33),d=n(36),m=(n(42),n(34)),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement(m.Table,{variant:"stripes",cells:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Greeting"),r.a.createElement("th",null,"Audience"))),r.a.createElement("tbody",null,this.state.notices.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.content))})))}}]),t}(a.Component);l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.0283a48d.chunk.js.map