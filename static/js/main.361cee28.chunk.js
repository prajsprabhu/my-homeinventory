(this["webpackJsonpmy-homeinventory"]=this["webpackJsonpmy-homeinventory"]||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),s=a(45),o=a(51),l=a(61),j=a(4),d=a(199),b=a(10),h=a(215),p=a(225),x=a(210),u=a(211),O=a(212),m=a(54),g=a(220),f=a(200),v=a(219),w=a(206),y=a(72),k=a.n(y),C=a(100),I=a.n(C),S=a(99),N=a.n(S),B=a(2);function M(e){return Object(B.jsx)(m.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var R=a(201),L=a(205),D=a(204),P=a(202),F=a(203),T=a(224),z=a(90),E=a.n(z);function W(e,t,a,n,r,i,c){return{id:e,inventorydate:t,name:a,quantity:n,units:r,storename:i,status:c}}W(0,"16 Mar, 2021","Rice","1","5 lb","Costco","opened"),W(1,"16 Mar, 2021","Cornflakes","2","23 oz","Target","opened"),W(2,"16 Mar, 2021","Lentils","1","2 lb","Suvidha","not yet"),W(3,"16 Mar, 2021","Bread","1","20 oz","Target","opened"),W(4,"15 Mar, 2021","Milk","3","3.78 L","Aldi","not yet");function A(e){e.preventDefault()}var q=Object(d.a)((function(e){return{seeMore:{"&:hover":{background:"transparent",marginTop:e.spacing(3)}},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}}}));function V(e){var t=q();return Object(B.jsx)(T.a,Object(l.a)({className:t.root,disableRipple:!0,color:"default",checkedIcon:Object(B.jsx)("span",{className:Object(j.a)(t.icon,t.checkedIcon)}),icon:Object(B.jsx)("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))}function G(){var e=q(),t=Object(n.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){E.a.get("http://localhost:9010/inventory").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))})),Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsx)(M,{children:"Recent Items"}),Object(B.jsx)(M,{children:"Recent Items"}),Object(B.jsxs)(R.a,{size:"small",children:[Object(B.jsx)(P.a,{children:Object(B.jsxs)(F.a,{children:[Object(B.jsx)(D.a,{children:"Inventory Date"}),Object(B.jsx)(D.a,{children:"Name"}),Object(B.jsx)(D.a,{children:"Quantity"}),Object(B.jsx)(D.a,{children:"Units"}),Object(B.jsx)(D.a,{children:"Store name"}),Object(B.jsx)(D.a,{align:"right",children:"Opened"})]})}),Object(B.jsxs)(L.a,{children:[console.log("itemms table"),i.map((function(e){return Object(B.jsxs)(F.a,{children:[Object(B.jsx)(D.a,{children:e.dateAdded}),Object(B.jsx)(D.a,{children:e.name}),Object(B.jsx)(D.a,{children:e.quantity}),Object(B.jsx)(D.a,{children:e.units}),Object(B.jsx)(D.a,{children:e.storeName}),Object(B.jsxs)(D.a,{align:"right",children:[Object(B.jsx)("div",{children:Object(B.jsx)(V,{})}),e.opened]})]},e.inventoryId)}))]})]}),Object(B.jsx)("div",{className:e.seeMore,children:Object(B.jsx)(w.a,{color:"primary",href:"#",onClick:A,children:"See more items"})}),Object(B.jsx)(m.a,{component:"p",variant:"h6",children:"Bread"}),Object(B.jsx)(m.a,{color:"textSecondary",className:e.seeMore,children:"on 15 March, 2019"}),Object(B.jsx)("div",{children:Object(B.jsx)(w.a,{color:"primary",href:"#",onClick:A,children:"View items"})})]})}var H=a(35),U=a(12),Y=a(151),J=a(207),Q=a(208),X=a(209),$=a(91),K=a.n($),Z=a(67),_=a.n(Z),ee=a(92),te=a.n(ee),ae=a(93),ne=a.n(ae),re=a(94),ie=a.n(re),ce=a(95),se=a.n(ce),oe=Object(B.jsxs)("div",{children:[Object(B.jsxs)(Y.a,{component:H.b,to:"/",children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(K.a,{})}),Object(B.jsx)(Q.a,{primary:"Dashboard"})]}),Object(B.jsxs)(Y.a,{component:H.b,to:"/additem",children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(te.a,{})}),Object(B.jsx)(Q.a,{primary:"Add Item"})]}),Object(B.jsxs)(Y.a,{component:H.b,to:"/useitem",children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(ne.a,{})}),Object(B.jsx)(Q.a,{primary:"Use Item"})]}),Object(B.jsxs)(Y.a,{component:H.b,to:"/deleteitem",children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(ie.a,{})}),Object(B.jsx)(Q.a,{primary:"Delete Item"})]}),Object(B.jsxs)(Y.a,{component:H.b,to:"/alerts",children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(se.a,{})}),Object(B.jsx)(Q.a,{primary:"Alerts"})]})]}),le=Object(B.jsxs)("div",{children:[Object(B.jsx)(X.a,{inset:!0,children:"Saved reports"}),Object(B.jsxs)(Y.a,{button:!0,children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(_.a,{})}),Object(B.jsx)(Q.a,{primary:"Current month"})]}),Object(B.jsxs)(Y.a,{button:!0,children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(_.a,{})}),Object(B.jsx)(Q.a,{primary:"Last quarter"})]}),Object(B.jsxs)(Y.a,{button:!0,children:[Object(B.jsx)(J.a,{children:Object(B.jsx)(_.a,{})}),Object(B.jsx)(Q.a,{primary:"Year-end sale"})]})]}),je=a(152),de=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(12),width:e.spacing(250),height:e.spacing(50)}}}}));function be(){var e=de();return Object(B.jsx)("div",{className:e.root,children:Object(B.jsx)(je.a,{})})}var he=a(96),pe=a.n(he),xe=a(213),ue=a(101),Oe=Object(d.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function me(){var e=Oe(),t=r.a.useState(!0),a=Object(s.a)(t,2),n=(a[0],a[1],r.a.useState(null)),i=Object(s.a)(n,2),c=i[0],o=i[1],l=Boolean(c),j=function(){o(null)};return Object(B.jsx)("div",{className:e.root,children:Object(B.jsx)(x.a,{position:"static",children:Object(B.jsx)(u.a,{children:Object(B.jsxs)("div",{children:[Object(B.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(B.jsx)(pe.a,{})}),Object(B.jsxs)(ue.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:j,children:[Object(B.jsx)(xe.a,{onClick:j,children:"Profile"}),Object(B.jsx)(xe.a,{onClick:j,children:"My account"})]})]})})})})}var ge=a(222),fe=Object(d.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function ve(){var e=fe();return Object(B.jsx)("form",{className:e.container,noValidate:!0,children:Object(B.jsx)(ge.a,{id:"date",label:"Item Date",type:"date",defaultValue:"2021-05-24",className:e.textField,InputLabelProps:{shrink:!0}})})}var we=a(227),ye=a(217),ke=a(216),Ce=a(218),Ie=a(221),Se=a(97),Ne=a.n(Se),Be=a(214),Me=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Re(){var e=Me();return Object(B.jsxs)(Be.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(h.a,{}),Object(B.jsxs)("div",{className:e.paper,children:[Object(B.jsx)(we.a,{className:e.avatar,children:Object(B.jsx)(Ne.a,{})}),Object(B.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(B.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(B.jsx)(ge.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(B.jsx)(ge.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(B.jsx)(ke.a,{control:Object(B.jsx)(T.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(B.jsx)(ye.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(B.jsxs)(Ce.a,{container:!0,children:[Object(B.jsx)(Ce.a,{item:!0,xs:!0,children:Object(B.jsx)(w.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(B.jsx)(Ce.a,{item:!0,children:Object(B.jsx)(w.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(B.jsx)(Ie.a,{mt:8})]})}var Le=a(98),De=a.n(Le),Pe=a(226);function Fe(){return Object(B.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(w.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Te=Object(d.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(o.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ze(){var e=Te(),t=r.a.useState(!0),a=Object(s.a)(t,2),n=a[0],i=a[1];Object(j.a)(e.paper,e.fixedHeight);return Object(B.jsx)("div",{className:e.root,children:Object(B.jsx)(H.a,{children:Object(B.jsxs)(H.a,{children:[Object(B.jsx)(h.a,{}),Object(B.jsx)(x.a,{position:"absolute",className:Object(j.a)(e.appBar,n&&e.appBarShift),children:Object(B.jsxs)(u.a,{className:e.toolbar,children:[Object(B.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(j.a)(e.menuButton,n&&e.menuButtonHidden),children:Object(B.jsx)(k.a,{})}),Object(B.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"}),Object(B.jsxs)("div",{className:e.search,children:[Object(B.jsx)("div",{className:e.searchIcon,children:Object(B.jsx)(De.a,{})}),Object(B.jsx)(Pe.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(B.jsx)(f.a,{color:"inherit",children:Object(B.jsx)(v.a,{badgeContent:4,color:"secondary",children:Object(B.jsx)(N.a,{})})})]})}),Object(B.jsxs)(p.a,{variant:"permanent",classes:{paper:Object(j.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(B.jsx)("div",{className:e.toolbarIcon,children:Object(B.jsx)(f.a,{onClick:function(){i(!1)},children:Object(B.jsx)(I.a,{})})}),Object(B.jsx)(g.a,{}),Object(B.jsx)(O.a,{children:oe}),Object(B.jsx)(g.a,{}),Object(B.jsx)(O.a,{children:le})]}),Object(B.jsxs)("main",{className:e.content,children:[Object(B.jsx)("div",{className:e.appBarSpacer}),Object(B.jsxs)(U.c,{children:[Object(B.jsx)(U.a,{exact:!0,path:"/",children:Object(B.jsx)(G,{})}),Object(B.jsx)(U.a,{path:"/additem",children:Object(B.jsx)(be,{})}),Object(B.jsx)(U.a,{path:"/deleteitem",children:Object(B.jsx)(ve,{})}),Object(B.jsx)(U.a,{path:"/useitem",children:Object(B.jsx)(me,{})}),Object(B.jsx)(U.a,{path:"/alerts",children:Object(B.jsx)(Re,{})})]}),Object(B.jsx)(Fe,{})]})]})})})}var Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,230)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(ze,{})}),document.getElementById("root")),Ee()}},[[148,1,2]]]);
//# sourceMappingURL=main.361cee28.chunk.js.map