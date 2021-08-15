(this["webpackJsonpreact-school"]=this["webpackJsonpreact-school"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c,r=n(0),i=n.n(r),a=n(8),s=n.n(a),o=(n(64),n(65),n(12)),l=n(13),j=n(4);var p,b=function(){return Object(j.jsx)(h,{children:Object(j.jsx)("p",{children:"Copyright Sebastian"})})},h=l.a.div(c||(c=Object(o.a)(["\n  display: flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid black;\n"])));var x,u,d=function(){return Object(j.jsxs)(O,{children:[Object(j.jsx)("img",{src:"/images/PinClipart.com_movie-projector-clip-art_2122993.png",alt:""}),Object(j.jsx)("h1",{children:"Movie API"})]})},O=l.a.div(p||(p=Object(o.a)(['\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid black;\n\n  h1 {\n    font-family: "Lobster Two", cursive;\n    font-size: 50px;\n  }\n\n  img {\n    width: 50px;\n    margin-right: 10px;\n  }\n']))),v=n(42),f=n.n(v),g=n(50),m=n(30),y=n(111),w=n(109),S=n(110);var T,k,C=function(e){var t=e.setSearchValue,n=e.searchValue,c=e.movieType,r=e.setMovieType;return Object(j.jsx)(A,{children:Object(j.jsxs)(M,{children:[Object(j.jsx)(y.a,{variant:"outlined",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Type to search..."}),Object(j.jsxs)(w.a,{variant:"outlined",onChange:function(e){return r(e.target.value)},value:c,children:[Object(j.jsx)(S.a,{value:"All",children:"All"}),Object(j.jsx)(S.a,{value:"movie",children:"Movie"}),Object(j.jsx)(S.a,{value:"series",children:"Series"}),Object(j.jsx)(S.a,{value:"episode",children:"Episode"})]})]})})},A=l.a.div(x||(x=Object(o.a)(["\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),M=l.a.div(u||(u=Object(o.a)([""])));var P,E=function(e){var t=e.title,n=e.poster,c=e.year,r=e.type,i=e.imdb;return Object(j.jsx)(F,{children:Object(j.jsxs)(I,{children:[Object(j.jsx)("a",{href:"https://www.imdb.com/title/".concat(i),target:"_blank",children:Object(j.jsx)("img",{src:n,alt:t})}),Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:r})]})})},F=l.a.div(T||(T=Object(o.a)([""]))),I=l.a.div(k||(k=Object(o.a)(["\n  border-radius: 10px;\n  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  cursor: pointer;\n  margin: 40px 10px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    max-height: 400px;\n    max-width: 400px;\n    object-fit: fill;\n  }\n\n  &:hover {\n    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n\n  h4,\n  h3,\n  p {\n    text-align: center;\n    padding: 3px;\n  }\n"])));var V=function(e){var t=e.movies,n=e.error;return Object(j.jsxs)(L,{children:[n?Object(j.jsx)("h3",{children:n}):"",t&&t.map((function(e,t){return Object(j.jsx)(E,{title:e.Title,poster:e.Poster,year:e.Year,type:e.Type,imdb:e.imdbID},t)}))]})},L=l.a.div(P||(P=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"])));var _=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("batman"),a=Object(m.a)(i,2),s=a[0],o=a[1],l=Object(r.useState)("All"),p=Object(m.a)(l,2),b=p[0],h=p[1],x=Object(r.useState)(""),u=Object(m.a)(x,2),d=u[0],O=u[1],v=function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="All"===b?"http://www.omdbapi.com/?s=".concat(t,"&apikey=8434f39a"):"http://www.omdbapi.com/?s=".concat(t,"&type=").concat(b,"&apikey=8434f39a"),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){c(e.Search),O(e.Error)})).catch((function(e){console.log("Opps, something went wrong!",e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){v(s)}),[s,b]),Object(j.jsxs)("div",{children:[Object(j.jsx)(C,{setSearchValue:o,searchValue:s,setMovieType:h,movieType:b}),Object(j.jsx)(V,{movies:n,error:d})]})};var z=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)(_,{}),Object(j.jsx)(b,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),B()}},[[73,1,2]]]);
//# sourceMappingURL=main.1a2f6a86.chunk.js.map