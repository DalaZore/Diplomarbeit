(this["webpackJsonperrorkb-frontend"]=this["webpackJsonperrorkb-frontend"]||[]).push([[0],{252:function(e,t,a){},421:function(e,t,a){e.exports=a(612)},426:function(e,t,a){},612:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=(a(426),a(3)),o=a(16),u=(a(252),a(28)),l=a.n(u),d=a(341),f=a(190),p=a(342),b=a(635),m=r.a.createContext(),g=a(647),O=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:250}}}}));function w(){var e=Object(g.a)(["user"]),t=Object(o.a)(e,3),a=(t[0],t[1]),s=(t[2],Object(n.useState)("")),c=Object(o.a)(s,2),i=c[0],u=c[1],f=Object(n.useState)(""),w=Object(o.a)(f,2),j=w[0],h=w[1],E=r.a.useContext(m),v=O();return r.a.createElement("form",{className:v.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"100px"}},r.a.createElement(b.a,{container:!0,spacing:4},r.a.createElement(b.a,{item:!0,xs:5,sm:5}),r.a.createElement(b.a,{item:!0,xs:9,sm:5},r.a.createElement(d.a,{id:"standard-username-input",label:"Username",type:"text",autoComplete:"current-username",value:i,onChange:function(e){u(e.target.value)}})))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(b.a,{container:!0,spacing:4},r.a.createElement(b.a,{item:!0,xs:5,sm:5}),r.a.createElement(b.a,{item:!0,xs:9,sm:5},r.a.createElement(d.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",value:j,onChange:function(e){h(e.target.value)}}),r.a.createElement(b.a,{item:!0,xs:5})))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"10px",paddingLeft:"10px"}},r.a.createElement(b.a,{container:!0,spacing:4},r.a.createElement(b.a,{item:!0,xs:5,sm:5}),r.a.createElement(b.a,{item:!0,xs:8,sm:6},r.a.createElement(p.a,{onClick:function(){var e,t,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return null==j&&h(""),null==i&&u(""),e="http://localhost/errorkb/api/GetUser/?username="+i+"&password="+j,r.next=5,l.a.awrap(fetch(e));case 5:return t=r.sent,console.log(e),r.prev=7,r.next=10,l.a.awrap(t.json());case 10:n=r.sent,200==t.status&&(E.setAuth(!0),a("user",n[0].username),a("rights",n[0].privileges)),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(7),alert("wrong credentials");case 17:return r.prev=17,r.finish(17);case 19:console.log(t);case 20:case"end":return r.stop()}}),null,null,[[7,14,17,19]])},className:v.root,style:{width:"255px"},variant:"outlined",color:"Primary"},"Login"),r.a.createElement(b.a,{item:!0,xs:5})))))}var j=a(18),h=a(19),E=a(206),v=a.n(E),x=a(213),k=a.n(x),y=a(221),P=a.n(y),R=a(214),C=a.n(R),S=a(130),T=a.n(S),D=a(92),U=a.n(D),A=a(133),N=a.n(A),I=a(215),L=a.n(I),B=a(216),F=a.n(B),G=a(218),M=a.n(G),W=a(219),Y=a.n(W),H=a(220),V=a.n(H),J=a(222),z=a.n(J),K=a(217),$=a.n(K),q=a(151),Q=a.n(q),X=a(223),Z=a.n(X),_=(Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:250}}}})),{Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(Z.a,Object.assign({},e,{ref:t}))}))}),ee=a(371);function te(){var e=Object(g.a)(["rights"]),t=Object(o.a)(e,3),a=t[0],s=(t[1],t[2],r.a.useState({columns:[{title:"ID",field:"id",editable:"never"},{title:"Status",field:"status",lookup:{open:"open",closed:"closed"}},{title:"Category",field:"category",lookup:{product:"product",process:"process"}},{title:"Category Description",field:"catdesc"},{title:"Title",field:"title"},{title:"Description",field:"desc"},{title:"Assigned user",field:"user"},{title:"Creation date",field:"date",editable:"never",type:"datetime"},{title:"Solution",field:"solution"}],data:[]})),c=Object(o.a)(s,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){!function(){var e,t,a,n;l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"http://localhost/errorkb/api/GetAllEntries",r.next=3,l.a.awrap(fetch("http://localhost/errorkb/api/GetAllEntries"));case 3:return e=r.sent,r.next=6,l.a.awrap(e.json());case 6:for(t=r.sent,a=function(e){new Promise((function(a){a(),u((function(a){var n=Object(h.a)(a.data);return n.push({id:t[e].id,status:t[e].status,category:t[e].category,catdesc:t[e].catdesc,title:t[e].title,desc:t[e].description.slice(0,50),user:t[e].user,date:t[e].timestamp,solution:t[e].solution}),Object(j.a)({},a,{data:n})}))}))},n=0;n<t.length;n++)a(n);case 9:case"end":return r.stop()}}))}()}),[]),r.a.createElement(v.a,{title:"Entries",columns:i.columns,data:i.data,icons:_,detailPanel:[{tooltip:"Show full description",render:function(e){return r.a.createElement("div",{style:{fontSize:15,display:"block",textAlign:"center"}},"Description: ",e.desc)}}],editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t(),u((function(t){var a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=Object(h.a)(t.data),r.prev=1,"open"!=e.status&&"closed"!=e.status&&(e.status="open"),null==e.solution&&(e.solution=""),"open"==e.status&&""!=e.solution&&(e.solution="",alert("Warning: You can only provide a solution to a closed entry. The solution gets deleted. The entry is added.")),null==e.solution&&(e.solution=""),null==e.timestamp){r.next=9;break}return alert("Timestamp not valid"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 9:if(null!=e.user){r.next=12;break}return alert("Assign this entry to an user!"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 12:if("closed"!=e.status||null!=e.solution){r.next=15;break}return alert("Error: You wanted to close this entry but did not provide any solution"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 15:if(null!=e.title&&null!=e.desc){r.next=18;break}return alert("Please give this entry a title and a description"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 18:if(null==e.id){r.next=21;break}return alert("Error: Invalid ID"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 21:if("product"==e.category||"process"==e.category){r.next=24;break}return alert("Please assign this entry a category"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 24:if(null!=e.catdesc){r.next=27;break}return alert("Please enter a Category Description (e.g. Office 2016)"),r.abrupt("return",Object(j.a)({},t,{data:a}));case 27:return n="http://localhost/errorkb/api/PostNewEntry/?tit="+e.title+"&desc="+e.desc+"&stat="+e.status+"&username="+e.user+"&solution="+e.solution+"&category="+e.category+"&catdesc="+e.catdesc,r.next=30,l.a.awrap(ee("POST",n));case 30:if(200!=r.sent.status){r.next=34;break}return a.push(e),r.abrupt("return",Object(j.a)({},t,{data:a}));case 34:r.next=40;break;case 36:return r.prev=36,r.t0=r.catch(1),alert(r.t0.message),r.abrupt("return",Object(j.a)({},t,{data:a}));case 40:return r.prev=40,window.location.reload(),r.finish(40);case 43:case"end":return r.stop()}}),null,null,[[1,36,40,43]])}))}),600)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){a(),t&&(console.log(t.username),console.log(e),u((function(a){var n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(n=Object(h.a)(a.data),s.prev=1,"open"!=e.status&&"closed"!=e.status&&(e.status="open"),null==e.solution&&(e.solution=""),"open"==e.status&&""!=e.solution&&(e.solution="",alert("Warning: You can only provide a solution to a closed entry. The solution gets deleted. The entry is added.")),null==e.timestamp){s.next=8;break}return alert("Timestamp not valid"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 8:if(null!=e.user){s.next=11;break}return alert("Assign this entry to an user!"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 11:if("closed"!=e.status||null!=e.solution){s.next=14;break}return alert("Error: You wanted to close this entry but did not provide any solution"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 14:if(null!=e.title&&null!=e.desc){s.next=17;break}return alert("Please give this entry a title and a description"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 17:if(e.id==t.id){s.next=20;break}return alert("Error: Invalid ID"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 20:if("product"==e.category||"process"==e.category){s.next=23;break}return alert("Please assign this entry a category"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 23:if(null!=e.catdesc){s.next=26;break}return alert("Please enter a Category Description (e.g. Office 2016)"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 26:return r="http://localhost/errorkb/api/PutNewEntry/?id="+t.id+"&tit="+e.title+"&desc="+e.desc+"&stat="+e.status+"&username="+e.user+"&solution="+e.solution+"&category="+e.category+"&catdesc="+e.catdesc,s.next=29,l.a.awrap(ee("PUT",r));case 29:if(200!=s.sent.status){s.next=33;break}return n[n.indexOf(t)]=e,s.abrupt("return",Object(j.a)({},a,{data:n}));case 33:s.next=39;break;case 35:return s.prev=35,s.t0=s.catch(1),alert(s.t0.message),s.abrupt("return",Object(j.a)({},a,{data:n}));case 39:return s.prev=39,window.location.reload(),s.finish(39);case 42:case"end":return s.stop()}}),null,null,[[1,35,39,42]])})))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t(),u((function(t){var n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(n=Object(h.a)(t.data),r="http://localhost/errorkb/Api/DeleteEntry?id="+e.id,s.prev=2,"admin"!=a.rights){s.next=12;break}return s.next=6,l.a.awrap(ee("DELETE",r));case 6:if(200!=s.sent.status){s.next=10;break}return n.splice(n.indexOf(e),1),s.abrupt("return",Object(j.a)({},t,{data:n}));case 10:s.next=14;break;case 12:return alert("Insufficient permissions"),s.abrupt("return",Object(j.a)({},t,{data:n}));case 14:s.next=20;break;case 16:return s.prev=16,s.t0=s.catch(2),alert(s.t0.message),s.abrupt("return",Object(j.a)({},t,{data:n}));case 20:return s.prev=20,window.location.reload(),s.finish(20);case 23:case"end":return s.stop()}}),null,null,[[2,16,20,23]])}))}),600)}))}}})}var ae=a(280),ne=a(93),re={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(Z.a,Object.assign({},e,{ref:t}))}))};function se(){var e=a(371),t=Object(g.a)(["user"]),s=Object(o.a)(t,3),c=s[0],i=(s[1],s[2],r.a.useState(!1)),u=Object(o.a)(i,2),d=(u[0],u[1],r.a.useState(!1)),f=Object(o.a)(d,2),p=(f[0],f[1]),b=r.a.useState({columns:[{title:"Username",field:"username"},{title:"Password",field:"password"},{title:"Privileges",field:"priv",lookup:{admin:"admin",user:"user"}}],data:[]}),m=Object(o.a)(b,2),O=m[0],w=m[1];return Object(n.useEffect)((function(){!function(){var e,t,a,n;l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"http://localhost/errorkb/api/GetAllUsers",r.next=3,l.a.awrap(fetch("http://localhost/errorkb/api/GetAllUsers"));case 3:return e=r.sent,r.next=6,l.a.awrap(e.json());case 6:for(t=r.sent,a=function(e){new Promise((function(a){a(),w((function(a){var n=Object(h.a)(a.data);return n.push({username:t[e].username,password:"********",priv:t[e].privileges}),Object(j.a)({},a,{data:n})}))}))},n=0;n<t.length;n++)a(n);case 9:case"end":return r.stop()}}))}(),null!=c.user?p(!0):(p(!1),window.location="/"),"admin"==c.rights||(window.location="/")}),[]),r.a.createElement(v.a,{title:"User Management",columns:O.columns,data:O.data,icons:re,editable:{onRowAdd:function(t){return new Promise((function(a){setTimeout((function(){a(),w((function(a){var n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(n=Object(h.a)(a.data),s.prev=1,null!=t.password){s.next=5;break}return alert("Please assign a password"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 5:if(null!=t.username){s.next=8;break}return alert("Please assign a username"),s.abrupt("return",Object(j.a)({},a,{data:n}));case 8:return r="http://localhost/errorkb/api/PostNewUser/?username="+t.username+"&password="+t.password+"&priv="+t.priv,s.next=11,l.a.awrap(e("POST",r));case 11:if(200!=s.sent.statusCode){s.next=15;break}return n.push(t),s.abrupt("return",Object(j.a)({},a,{data:n}));case 15:s.next=21;break;case 17:return s.prev=17,s.t0=s.catch(1),alert(s.t0.message),s.abrupt("return",Object(j.a)({},a,{data:n}));case 21:return s.prev=21,window.location.reload(),s.finish(21);case 24:case"end":return s.stop()}}),null,null,[[1,17,21,24]])}))}),600)}))},onRowUpdate:function(t,a){return new Promise((function(n){setTimeout((function(){n(),a&&(console.log(a.username),console.log(t),w((function(n){var r,s,c;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=Object(h.a)(n.data),i.prev=1,null!=t.password){i.next=5;break}return alert("Please assign a password"),i.abrupt("return",Object(j.a)({},n,{data:r}));case 5:if(null!=t.username){i.next=8;break}return alert("Please assign a username"),i.abrupt("return",Object(j.a)({},n,{data:r}));case 8:if("admin"==t.priv||"user"==t.priv){i.next=11;break}return alert("Please assign valid privileges"),i.abrupt("return",Object(j.a)({},n,{data:r}));case 11:if(t.password!=a.password){i.next=19;break}return s="http://localhost/errorkb/api/PutNewUser/?oldUsername="+a.username+"&newUsername="+t.username+"&newPriv="+t.priv,i.next=15,l.a.awrap(e("PUT",s));case 15:if(200!=i.sent.statusCode){i.next=19;break}return r[r.indexOf(a)]=t,i.abrupt("return",Object(j.a)({},n,{data:r}));case 19:if(t.password==a.password){i.next=27;break}return c="http://localhost/errorkb/api/PutNewUser/?oldUsername="+a.username+"&newUsername="+t.username+"&newPassword="+t.password+"&newPriv="+t.priv,i.next=23,l.a.awrap(e("PUT",c));case 23:if(200!=i.sent.statusCode){i.next=27;break}return r[r.indexOf(a)]=t,i.abrupt("return",Object(j.a)({},n,{data:r}));case 27:i.next=33;break;case 29:return i.prev=29,i.t0=i.catch(1),alert(i.t0.message),i.abrupt("return",Object(j.a)({},n,{data:r}));case 33:return i.prev=33,window.location.reload(),i.finish(33);case 36:case"end":return i.stop()}}),null,null,[[1,29,33,36]])})))}),600)}))},onRowDelete:function(t){return new Promise((function(a){setTimeout((function(){a(),w((function(a){var n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(h.a)(a.data),r="http://localhost/errorkb/Api/DeleteUser?username="+t.username,s.prev=2,s.next=5,l.a.awrap(e("DELETE",r));case 5:if(200!=s.sent.statusCode){s.next=9;break}return n.splice(n.indexOf(t),1),s.abrupt("return",Object(j.a)({},a,{data:n}));case 9:s.next=15;break;case 11:return s.prev=11,s.t0=s.catch(2),alert(s.t0.message),s.abrupt("return",Object(j.a)({},a,{data:n}));case 15:return s.prev=15,window.location.reload(),s.finish(15);case 18:case"end":return s.stop()}}),null,null,[[2,11,15,18]])}))}),600)}))}}})}var ce=a(10),ie=a(2),oe=a(11),ue=a(20),le=a(64),de=a(644),fe=a(643),pe=a(348),be=a(620),me=a(94),ge=a(645),Oe=a(279),we=a(406),je=a.n(we),he=a(622),Ee=a(646),ve=a(365),xe=a(409),ke=a.n(xe),ye=a(408),Pe=a.n(ye),Re=a(407),Ce=a.n(Re),Se=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},a:{textDecoration:"none"},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},search:Object(ce.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(oe.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(oe.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ce.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}}));function Te(){var e=Se(),t=Object(ue.a)(),a=r.a.useState(!1),s=Object(o.a)(a,2),c=s[0],i=s[1],u=Object(g.a)(["user"]),l=Object(o.a)(u,3),d=l[0],f=(l[1],l[2]),p=r.a.useState(!1),b=Object(o.a)(p,2),m=b[0],O=b[1],w=r.a.useState(!1),j=Object(o.a)(w,2),h=j[0],E=j[1];return Object(n.useEffect)((function(){!function(){var e=d.rights;O("admin"==e)}(),function(){var e=d.user;E(null!=e)}()})),r.a.createElement("div",{className:e.root},r.a.createElement(de.a,null),r.a.createElement(fe.a,{position:"fixed",className:Object(ie.a)(e.appBar,Object(ce.a)({},e.appBarShift,c))},r.a.createElement(pe.a,null,h?r.a.createElement(Oe.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(ie.a)(e.menuButton,c&&e.hide)},r.a.createElement(je.a,null)):r.a.createElement("p",null),r.a.createElement(me.a,{variant:"h6",noWrap:!0},"Error-KB"))),r.a.createElement(le.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(Oe.a,{onClick:function(){i(!1)}},"ltr"===t.direction?r.a.createElement(T.a,null):r.a.createElement(U.a,null))),r.a.createElement(ge.a,null),r.a.createElement(he.a,{button:!0,key:"Dashboard",onClick:function(){window.location="/Dashboard/"}},r.a.createElement(Ee.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(ve.a,{primary:"Dashboard"})),r.a.createElement(ge.a,null),m?r.a.createElement(he.a,{button:!0,key:"User management",onClick:function(){window.location="/UserMgmt"}},r.a.createElement(Ee.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(ve.a,{primary:"User management"})):r.a.createElement("div",null),r.a.createElement(be.a,null,r.a.createElement(he.a,{button:!0,key:"Logout",onClick:function(){f("user"),f("rights"),window.location="/"}},r.a.createElement(Ee.a,null,r.a.createElement(ke.a,null)),r.a.createElement(ve.a,{primary:"Logout"})))),r.a.createElement("main",{className:Object(ie.a)(e.content,Object(ce.a)({},e.contentShift,c))},r.a.createElement("div",{className:e.drawerHeader})))}var De=a(410),Ue=a.n(De);var Ae=function(){var e=r.a.useContext(m);return r.a.createElement(ne.d,null,r.a.createElement(Ie,{path:"/",exact:!0,auth:e.auth,component:w}),r.a.createElement(Ne,{path:"/Dashboard",exact:!0,auth:e.auth,component:te}),r.a.createElement(ne.b,{path:"/UserMgmt",auth:e.auth,exact:!0,component:se}))},Ne=function(e){var t=e.auth,a=e.component,n=Object(i.a)(e,["auth","component"]);return r.a.createElement(ne.b,Object.assign({},n,{render:function(){return t?r.a.createElement(a,null):r.a.createElement(ne.a,{to:"/"})}}))},Ie=function(e){var t=e.auth,a=e.component,n=Object(i.a)(e,["auth","component"]);return r.a.createElement(ne.b,Object.assign({},n,{render:function(){return t?r.a.createElement(ne.a,{to:"/Dashboard"}):r.a.createElement(a,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(611);c.a.render(r.a.createElement((function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(g.a)(["user"]),c=Object(o.a)(s,3),i=c[0];return c[1],c[2],r.a.useEffect((function(){i.user&&n(!0)}),[]),r.a.createElement("div",null,r.a.createElement(Ue.a,null,r.a.createElement(Te,null)),r.a.createElement(m.Provider,{value:{auth:a,setAuth:n}},r.a.createElement(ae.a,null,r.a.createElement(Ae,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[421,1,2]]]);
//# sourceMappingURL=main.956462e4.chunk.js.map