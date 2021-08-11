(this["webpackJsonpdembele-test-laforge"]=this["webpackJsonpdembele-test-laforge"]||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=n(34),s=n(9),l=n(120),d=n(108),j=n(107),b=Object(j.a)({link:{fontFamily:"Roboto",fontStyle:"normal",letterSpacing:"0.345em",textAlign:"center",borderRadius:"18px",fontWeight:"bold",color:"#000000",boxShadow:"0px 4px 16px -3px rgba(0, 0, 0, 0.15)","& > *":{width:"100%",borderRadius:"18px"}},pokedex:{textDecoration:"none",maxWidth:211,width:"45%",height:34,lineHeight:"34px"},liked:{textDecoration:"none",maxWidth:171,width:"37%",height:34,lineHeight:"34px"},current:{backgroundColor:"rgba(0, 0, 0, 0.4)"}}),h=n(2);var m=function(){var e=b();return Object(h.jsxs)(l.a,{display:"flex",width:"90vw",maxWidth:460,mx:"auto",mt:9,justifyContent:"space-between",children:[Object(h.jsx)(i.b,{activeClassName:e.current,to:"/pokedex",className:"".concat(e.link," ").concat(e.pokedex),children:Object(h.jsx)(d.a,{variant:"text",className:"".concat(e.title),children:"POKEDEX"})}),Object(h.jsx)(i.b,{activeClassName:e.current,to:"/liked",className:"".concat(e.link," ").concat(e.liked),children:Object(h.jsx)(d.a,{variant:"text",className:"".concat(e.title),children:"LIKED"})})]})},u=n(43),p=n(52),g=n(12),x=n(109),f=Object(j.a)({root:{width:"82vw",maxWidth:674,margin:"53px auto 54px"},form:{width:"100%","& > *":{height:"36px",boxShadow:"0px 4px 16px -3px rgba(0, 0, 0, 0.07)",borderRadius:18,border:"none",padding:"0 0 0 22px",fontSize:12,lineHeight:36,letterSpacing:"0.04em",color:"#C4C4C4"}},searchByName:{width:"82vw",maxWidth:"383px"},searchByNumber:{width:102,margin:"0 18px 0 0"},searchByType:{width:131}}),O=n(5),y=n(122),k=Object(O.a)((function(e){return{input:{borderRadius:18,position:"relative",backgroundColor:e.palette.common.white,border:"1px solid #ced4da",fontSize:12,padding:"7px 12px",boxShadow:"0px 4px 16px -3px rgba(0, 0, 0, 0.07)",transition:e.transitions.create(["border-color","box-shadow"]),letterSpacing:"0.04em",color:"#C4C4C4",fontStyle:"normal",fontWeight:"normal",fontFamily:["Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{boxShadow:"0px 0 0 2px rgb(0 0 0 / 15%)",borderColor:"#000000"}}}}))(y.a);function v(e){var t=e.onFetchBy,n=(Object(a.useRef)(!0),f()),r=Object(a.useState)({findByName:"",findByNumber:"",findByType:""}),o=Object(g.a)(r,2),c=o[0],i=o[1],s=function(e){var n=e.target,a=n.name,r=n.value;i((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},a,r.toUpperCase()))})),t(a,r)};Object(a.useEffect)((function(){return function(){window.removeEventListener("change",(function(){}))}}),[]);var l=c.findByName,d=c.findByNumber,j=c.findByType;return Object(h.jsxs)(x.a,{container:!0,className:n.root,spacing:2,justifyContent:"center",children:[Object(h.jsx)(x.a,{item:!0,children:Object(h.jsx)(k,{name:"findByName",placeholder:"Search...",className:n.searchByName,value:l,onChange:s,autoComplete:"false"})}),Object(h.jsxs)(x.a,{item:!0,children:[Object(h.jsx)(k,{name:"findByNumber",placeholder:"Number",value:d,onChange:s,className:n.searchByNumber,autoComplete:"false"}),Object(h.jsx)(k,{name:"findByType",placeholder:"Type",value:j,onChange:s,className:n.searchByType,autoComplete:"false"})]})]})}v.defaultProps={onFetchBy:null};var w=v,N=n(28),C=n.n(N),S=n(45),B=n(17),F=n(118),E=n(119),L=n(46),T=n.n(L);var I=function(){return{GetAllLiked:function(){return JSON.parse(localStorage.getItem("LikeDB"))},GetLikeById:function(e){return!!localStorage.getItem("LikeDB")&&JSON.parse(localStorage.getItem("LikeDB")).includes(e)},ToggleLike:function(e){if(localStorage.getItem("LikeDB")){var t=JSON.parse(localStorage.getItem("LikeDB"));if(t.includes(e)){var n=t.indexOf(e);return t.splice(n,1),localStorage.setItem("LikeDB",JSON.stringify(Object(B.a)(t)))}return localStorage.setItem("LikeDB",JSON.stringify([].concat(Object(B.a)(t),[e])))}return localStorage.setItem("LikeDB",JSON.stringify([e]))}}};var A=function(e){var t=Object(a.useState)([]),n=Object(g.a)(t,2),r=n[0],o=n[1],c=I().GetAllLiked;return Object(a.useEffect)((function(){var t=new AbortController;return Object(S.a)(C.a.mark((function n(){var a,r,i;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("data/pokemons.json",{signal:t.signal});case 2:return a=n.sent,n.next=5,a.json();case 5:if(r=n.sent,!e){n.next=13;break}return n.next=9,r.filter((function(e){var t=e.id;return c().includes(t)}));case 9:i=n.sent,o(i),n.next=15;break;case 13:return n.next=15,o(r);case 15:case"end":return n.stop()}}),n)})))(),function(){t.abort()}}),[]),[r,r.length]},R=n(123),D=n(110),M=n(111),G=n(89),W=n(112),z=n(113),J=n(114),U=n(121),H=n(115),P=n(116),K=Object(j.a)({root:{display:"flex",width:241,height:115,padding:"26px 37px 25px 27px",margin:"auto",alignItems:"center",position:"relative",borderRadius:18},hideRoot:{display:"none"},image:{height:117,width:126,objectFit:"contain"},CardContent:{marginLeft:32,padding:0},title:{"& > *":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,fontSize:12,letterSpacing:"0.04em"}},pokemonNumber:{color:"#9E9E9E",margin:"0 6.25px 0 0"},pokemonName:{color:"#000000"},type:{"& > *":{overflow:"hidden",width:52,fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,fontSize:8,letterSpacing:"0.04em",color:"white",textAlign:"center",backgroundColor:"red",borderRadius:18,border:"1px"}},pokemonTypeOne:{margin:"6px 0 3px 0"},likeContainer:{position:"absolute",right:"10px",bottom:"10px",border:" 1px solid #E4E4E4",borderRadius:50,padding:0,width:29,height:29,"& > *":{padding:0,width:"100%",height:"100%"},"& .MuiFormControlLabel-root":{margin:0}}});function X(e){var t=e.id,n=e.name,r=e.firstType,o=e.secondType,c=e.image,i=e.isLiked,s=e.canHide,d={normal:"#CACACA",electric:"#FFE175",grass:"#B4FE7B",poison:"#BF8CD1",bug:"#D1E16F",ghost:"#805594",fire:"#FF8A8A",water:"#88D1FB",ground:"#CA9F5E",rock:"#898373",ice:"#C6EAFF",fighting:"#C6EAFF",steel:"#E4E4E4",psychic:"#FFB7FC",flying:"#5F9FFF",dragon:"#C699FF"},j=K(),b=r?d[r.toLowerCase()]:d.normal,m=o?d[o.toLowerCase()]:d.normal,u=Object(a.useState)(i),p=Object(g.a)(u,2),f=p[0],O=p[1],y=Object(a.useState)(s),k=Object(g.a)(y,2),v=k[0],w=k[1],N=I().ToggleLike;return!v&&Object(h.jsx)(x.a,{item:!0,children:Object(h.jsxs)(R.a,{variant:"outlined",className:j.root,children:[Object(h.jsx)(D.a,{className:j.image,image:c,title:"pokemon",component:"img",onError:function(e){e.target.onerror=null,e.target.src="img/assets/404-group.png"}}),Object(h.jsxs)(M.a,{className:j.CardContent,children:[Object(h.jsxs)(l.a,{display:"flex",className:j.title,children:[Object(h.jsx)(G.a,{variant:"body2",className:j.pokemonNumber,children:t}),Object(h.jsx)(G.a,{variant:"body2",className:j.pokemonName,children:n})]}),Object(h.jsxs)(l.a,{className:j.type,children:[Object(h.jsx)(l.a,{style:{backgroundColor:b},className:j.pokemonTypeOne,children:r&&r.toUpperCase()}),Object(h.jsx)(l.a,{className:j.pokemonTypeTwo,style:{backgroundColor:m},children:o&&o.toUpperCase()})]})]}),Object(h.jsx)(W.a,{className:j.likeContainer,children:Object(h.jsx)(z.a,{children:Object(h.jsx)(J.a,{className:j.likeBtn,control:Object(h.jsx)(U.a,{checked:f,onChange:function(e){O(e.target.checked),e.target.baseURI.match("liked")&&w(!0),N(t)},color:"primary",icon:Object(h.jsx)(H.a,{fontSize:"small"}),checkedIcon:Object(h.jsx)(P.a,{fontSize:"small"}),name:"likeBtn".concat(t)})})})})]})})}X.defaultProps={firstType:"",secondType:"",canHide:!1};var Y=X,q=n(117),Q=Object(j.a)({root:{width:307,height:168,position:"relative",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:18,margin:0},skeletonImg:{width:126,height:117},skeletonContent:{width:85,height:47},skeletonTitle:{width:"100%",height:14},skeletonType:{width:52,height:12},skeletonLike:{position:"absolute",right:"10px",bottom:"10px",padding:0,width:29,height:29}});var V=function(){var e=Q();return Object(h.jsxs)(x.a,{item:!0,container:!0,spacing:4,alignItems:"center",className:e.root,children:[Object(h.jsx)(x.a,{item:!0,children:Object(h.jsx)(q.a,{variant:"rect",className:e.skeletonImg})}),Object(h.jsxs)(x.a,{item:!0,container:!0,className:e.skeletonContent,children:[Object(h.jsx)(x.a,{item:!0,xs:12,children:Object(h.jsx)(q.a,{variant:"text",className:e.skeletonTitle})}),Object(h.jsx)(x.a,{item:!0,xs:12,children:Object(h.jsx)(q.a,{variant:"text",className:e.skeletonType})}),Object(h.jsx)(x.a,{item:!0,xs:12,children:Object(h.jsx)(q.a,{variant:"text",className:e.skeletonType})}),Object(h.jsx)(q.a,{variant:"circle",className:e.skeletonLike})]})]})},Z=n(59),$=n.n(Z),_=Object(j.a)({root:{transform:"rotate(180deg)",cursor:"pointer",position:"fixed",zIndex:2,right:10,bottom:10}});var ee=function(e){var t=e.showBellow,n=_(),r=Object(a.useState)(!1),o=Object(g.a)(r,2),c=o[0],i=o[1],s=Object(a.useRef)(!1),l=function(){window.pageYOffset>t&&s.current?i(!0):i(!1)};return Object(a.useEffect)((function(){return s.current=!0,s.current&&window.addEventListener("scroll",l),function(){s.current=!1,window.removeEventListener("scroll",(function(){})),window.removeEventListener("click",(function(){}))}}),[]),c&&Object(h.jsx)($.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:n.root,color:"disabled",fontSize:"large"})},te=Object(j.a)({root:{width:"100vw",maxWidth:1017,margin:"auto"}});var ne=function(){var e=te(),t=Object(F.a)(),n=Object(E.a)(t.breakpoints.down("xs")),r=A(!1),o=Object(g.a)(r,2),c=o[0],i=o[1],s=Object(a.useState)([]),l=Object(g.a)(s,2),d=l[0],j=l[1],b=Object(a.useState)([]),m=Object(g.a)(b,2),u=m[0],p=m[1],f=Object(a.useState)(!0),O=Object(g.a)(f,2),y=O[0],k=O[1],v=n?6:12,N=I().GetLikeById,L=Object(a.useRef)(!0),R=Object(a.useRef)(!1);function D(){var e=0;if(e=d.length+v<c.length?d.length+v:d.length+(c.length-d.length),c&&c.length){var t=c.slice(d.length,e);j((function(e){return e?[].concat(Object(B.a)(e),Object(B.a)(t.map((function(e){var t=e.id,n=e.name,a=e.type,r=e.img;return Object(h.jsx)(Y,{id:t,firstType:a[0]||"",secondType:a[1]||"",name:n,image:r,isLiked:N(t)},t+Math.random())})))):Object(B.a)(t)}))}k(!1)}function M(e,t){k(!0),p([]),Object(S.a)(C.a.mark((function n(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.forEach((function(n){var a=n.id,r=n.name,o=n.type,c=n.img;("name"===e&&r.match(t)||"type"===e&&(o[0].match(t)||o[1]&&o[1].match(t))||"number"===e&&a.match(t))&&p((function(e){return[].concat(Object(B.a)(e),[Object(h.jsx)(Y,{id:a,firstType:o[0]||"",secondType:o[1]||"",name:r,image:c,isLiked:N(a)},a+Math.random())])}))}));case 2:case"end":return n.stop()}}),n)})))(),k(!1)}var G=[Object(h.jsx)(x.a,{container:!0,spacing:4,className:e.root,justifyContent:"center",children:Array.from({length:v},(function(){return Object(h.jsx)(x.a,{item:!0,children:Object(h.jsx)(V,{})},"loading".concat(Math.random()))}))},"rootGrid2")];return Object(a.useEffect)((function(){return console.log("new render !"),L.current&&D(),function(){L.current=!1}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{onFetchBy:function(e,t){R.current=!0,"findByName"===e&&""!==t?M("name",t):"findByNumber"===e?(R.current=!0,M("number",t)):"findByType"===e?(R.current=!0,M("type",t)):(R.current=!1,D())}}),Object(h.jsx)(ee,{showBellow:n?510:350}),R.current?Object(h.jsx)(x.a,{container:!0,spacing:4,className:e.root,justifyContent:"center",children:y?"searching...":u},"rootGrid2"):Object(h.jsx)(T.a,{threshold:800,pageStart:0,hasMore:d.length<i,loadMore:function(){return L.current&&D()},loader:G,children:Object(h.jsx)(x.a,{container:!0,spacing:4,className:e.root,justifyContent:"center",children:y?"searching....":d},"rootGrid2")})]})},ae=Object(j.a)({root:{width:"100vw",maxWidth:1017,margin:"auto"}});var re=function(){var e=ae(),t=Object(F.a)(),n=Object(E.a)(t.breakpoints.down("xs")),r=n?6:12,o=A(!0),c=Object(g.a)(o,1)[0],i=I(),s=i.GetAllLiked,d=i.GetLikeById,j=s(),b=Object(a.useState)([]),m=Object(g.a)(b,2),u=m[0],p=m[1],f=Object(a.useRef)(!0);function O(){var e=0;if(e=u.length+r<c.length?u.length+r:u.length+(c.length-u.length),c&&c.length){var t=c.slice(u.length,e);p((function(e){return e?[].concat(Object(B.a)(e),Object(B.a)(t.map((function(e){var t=e.id,n=e.name,a=e.type,r=e.img;return Object(h.jsx)(Y,{id:t,firstType:a[0]||"",secondType:a[1]||"",name:n,image:r,isLiked:d(t)},t+Math.random())})))):Object(B.a)(t)}))}}var y=[Object(h.jsx)(x.a,{container:!0,spacing:4,className:e.root,justifyContent:"center",children:Array.from({length:j&&j.length<r?j.length:r},(function(){return Object(h.jsx)(x.a,{item:!0,children:Object(h.jsx)(V,{})},"loading".concat(Math.random()))}))},"rootGrid2")];return Object(a.useEffect)((function(){return f.current&&O(),function(){f.current=!1}}),[]),Object(h.jsx)(h.Fragment,{children:j&&j.length?Object(h.jsxs)(T.a,{threshold:800,pageStart:0,hasMore:u&&u.length<j.length,loadMore:function(){n&&O(),f.current&&O()},loader:y,children:[Object(h.jsx)(ee,{shoswBellow:n?510:350}),Object(h.jsx)(x.a,{container:!0,spacing:4,className:e.root,justifyContent:"center",children:u},"rootGrid1")]}):Object(h.jsx)(l.a,{fontSize:n?"2rem":"4rem",textAlign:"center",width:"100vw",height:"100vh",top:"0%",display:"flex",alignItems:"center",justifyContent:"center",children:"It look like you don't like pokemons..."})})};var oe=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/liked",exact:!0,component:re}),Object(h.jsx)(s.b,{path:"/pokedex",exact:!0,children:Object(h.jsx)(ne,{})}),Object(h.jsx)(s.b,{path:"/",children:Object(h.jsx)(s.a,{to:"/pokedex"})})]})]})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(oe,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.3af5a109.chunk.js.map