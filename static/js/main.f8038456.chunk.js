(this["webpackJsonpreact-course-setup"]=this["webpackJsonpreact-course-setup"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),o=n(3),a=n.n(o),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(s.jsxs)("h2",{children:[" ",e.monster.name]}),Object(s.jsx)("p",{children:e.monster.email})]})}),j=function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(c)}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Monsters Rolodex"}),Object(s.jsx)(m,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(s.jsx)(j,{monsters:r})]})}}]),n}(r.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.f8038456.chunk.js.map