(this["webpackJsonpreakt-kabzda-1"]=this["webpackJsonpreakt-kabzda-1"]||[]).push([[0],{107:function(e,t,n){"use strict";t.a=n.p+"static/media/1.a2446033.png"},160:function(e,t,n){"use strict";var r,s=n(81),a=n(9),i=n(0),c=n.n(i),o=n(226),u=n(228),l=n.n(u),d=n(321),j=n(660),b=n(659),p=n(240),h=(n(46),n(1)),f={labelCol:{span:8},wrapperCol:{span:16}},O=(j.a.TextArea,r=100,Object(d.a)({form:"addPost"})((function(e){return Object(h.jsxs)(b.a,Object(a.a)(Object(a.a)({},f),{},{name:"nest-messages",onFinish:e.onSubmit,children:[Object(h.jsx)(b.a.Item,{name:"post",size:"large",rules:[{required:!0,message:"Please input text!"}],children:Object(h.jsx)(j.a.TextArea,{})}),Object(h.jsx)(b.a.Item,{wrapperCol:Object(a.a)(Object(a.a)({},f.wrapperCol),{},{offset:6,span:100}),children:Object(h.jsx)(p.a,{type:"primary",htmlType:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}))}))),g=c.a.memo((function(e){console.log("RENDER");var t=Object(s.a)(e.profilePage.posts).reverse().map((function(t,n){return Object(h.jsx)("div",{children:Object(h.jsx)(o.a,{message:t.text,like:t.likesCount,dispatch:e.dispatch,profile:e.profile,deletePost:e.deletePost})},n)}));if(!e.profile)return null;return Object(h.jsxs)("div",{className:l.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(O,{onSubmit:function(t){var n=t.post;e.addPost(n),t.post=null}}),Object(h.jsx)("div",{className:l.a.posts,children:t})]})}));t.a=g},179:function(e,t,n){e.exports={item:"Post_item__34CtI",likeButton:"Post_likeButton__1bKPA"}},181:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Y6SC",pageNumber:"Paginator_pageNumber__3I_-0",selectedPage:"Paginator_selectedPage__1mcjz"}},226:function(e,t,n){"use strict";var r=n(71),s=n(0),a=n(179),i=n.n(a),c=n(240),o=n(107),u=n(1);t.a=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],l=n[1];return e.profile?Object(u.jsxs)("div",{className:i.a.item,children:[Object(u.jsx)("img",{src:e.profile.photos.small||o.a,className:i.a.userPhoto}),e.message,Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["like ",e.like]})}),!1===a?Object(u.jsx)("div",{className:i.a.likeButton,children:Object(u.jsx)("button",{onClick:function(){return l(!0)},children:"Like"})}):Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return l(!1)},children:"like"})}),Object(u.jsx)("div",{children:Object(u.jsx)(c.a,{onClick:e.deletePost,children:" X "})})]}):null}},228:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3qOiP",posts:"MyPosts_posts__3jw52"}},231:function(e,t,n){e.exports={formControl:"FormControls_formControl__3KPux",error:"FormControls_error__3XyOV",formSummaryError:"FormControls_formSummaryError__2IYHe"}},234:function(e,t,n){e.exports={item:"Dialog_item__3wh_T",active:"Dialog_active__3f9bS"}},238:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__ZoUvG",followButton:"Users_followButton__2SF8S"}},239:function(e,t,n){e.exports={header:"Header_header__1w-tp",loginBlock:"Header_loginBlock__3_SKb"}},322:function(e,t,n){"use strict";var r=n(0),s=n.n(r),a=n(160),i=(n(503),n(97)),c=n.n(i),o=n(92),u=n(107),l=n(71),d=n(1),j=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(e.status),c=Object(l.a)(i,2),o=c[0],u=c[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(d.jsxs)("div",{children:[!s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Status:   "}),Object(d.jsx)("span",{onDoubleClick:function(){e.isOwner&&a(!0)},children:e.status||"------"})]}),s&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},b=n(240),p=n(660),h=n(664),f=n(9),O=n(182),g=n(231),m=n.n(g),x=n(320),v=function(e){e.input;var t=e.meta,n=(e.child,Object(O.a)(e,["input","meta","child"])),r=t.error&&t.touched;return Object(d.jsxs)("div",{className:m.a.formControl+" "+(r?m.a.error:" "),children:[Object(d.jsx)("div",{children:n.children}),Object(d.jsx)("div",{children:r&&Object(d.jsx)("span",{children:t.error})})]})},_=function(e){var t=e.input,n=(e.meta,e.child,Object(O.a)(e,["input","meta","child"]));return Object(d.jsx)(v,Object(f.a)(Object(f.a)({},e),{},{children:Object(d.jsx)("textarea",Object(f.a)(Object(f.a)({},t),n))}))},P=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(d.jsxs)("div",{children:[Object(d.jsx)(x.a,Object(f.a)({placeholder:e,name:t,validate:n,component:r},s))," ",a]})},C=n(321),y=Object(C.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.savePhoto,r=e.profile;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:c.a.photoUpload,children:Object(d.jsx)(p.a,{icon:Object(d.jsx)(h.a,{}),type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}})}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){},children:"Save"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name:"})," ",P("Full name","fullName",[],"input")]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",P("","lookingForAJob",[],"input",{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",P("","lookingForAJobDescription",[],_)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",P("","aboutMe",[],_)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(r.contacts).map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("b",{children:[e,":"]})," ",P(e,"contacts."+e,[],"input")]})}))]})]})]})})),w=function(e){return Object(d.jsxs)("div",{className:c.a.discriptionBlock,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name:"})," ",e.profile.fullName]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"looking For A Job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills:"})," ",e.profile.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(t){return Object(d.jsx)(k,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},k=function(e){var t=e.contactTitle,n=e.contactValue;return Object(d.jsxs)("div",{className:c.a.contacts,children:[Object(d.jsxs)("b",{children:[t,":"]})," ",n]})},S=function(e){if(!e.profile)return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{})});return Object(d.jsxs)("div",{children:[e.isOwner&&Object(d.jsx)("div",{className:c.a.editProfile,children:Object(d.jsxs)(b.a,{onClick:e.editMode?e.deactivateProfileEditMode:e.activateProfileEditMode,children:[" ",e.editMode?"Cancel":"Edit"]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.profile.photos.large||u.a,className:c.a.largeUserPhoto}),Object(d.jsx)(j,{id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),e.isOwner&&e.editMode?Object(d.jsx)(y,{initialValues:e.profile,profile:e.profile,savePhoto:e.savePhoto,onSubmit:function(t){e.saveProfile(t)}}):Object(d.jsx)(w,{profile:e.profile})]})]})},N=(n(226),n(37)),E=n(38),U=n(40),I=n(39),T=n(46),M=n(25),A=n(21),D=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(a.a,{profilePage:this.props.profilePage,profile:this.props.profile,deletePost:this.props.deletePost,addPost:this.props.addPostActionCreator})})}}]),n}(s.a.Component),F=Object(A.d)(Object(M.b)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile}}),{addPostActionCreator:T.b}))(D);t.a=function(e){return Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)(S,{profile:e.profile,id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,activateProfileEditMode:e.activateProfileEditMode,deactivateProfileEditMode:e.deactivateProfileEditMode,editMode:e.editMode,saveProfile:e.saveProfile}),Object(d.jsx)(F,{})]})}},381:function(e,t,n){},382:function(e,t,n){},42:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(326),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5b9674bd-9414-44f4-ad29-6c2f2b550f29"}}),a={getUsers:function(e,t){return s.get("users?page=".concat(e," &count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return s.delete("follow/".concat(e))},follow:function(e){return s.post("follow/".concat(e))}},i={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return s.put("profile",e)}},c={login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return s.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return s.delete("auth/login")}},o={getCaptchaUrl:function(){return s.get("/security/get-captcha-url")}},u=function(){return s.get("auth/me")}},46:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"j",(function(){return f})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return _}));var r=n(81),s=n(9),a=n(42),i="ADD-POST",c="SET_USER_PROFILE",o="SET_USER_STATUS",u="STATUS_UPDATE",l="SAVE_PHOTO_SUCCESS",d="ACTIVATE_EDIT_MODE",j="DEACTIVATE_EDIT_MODE",b={posts:[{id:1,text:"Hello world",likesCount:12},{id:2,text:"This is my first post",likesCount:10}],profile:null,status:"",profileEditMode:!1},p=function(e){return function(t){a.c.getProfile(e).then((function(e){t(_(e.data))}))}},h=function(e){return function(t){a.c.getStatus(e).then((function(e){t(P(e.data))}))}},f=function(e){return function(t){a.c.updateStatus(e).then((function(n){0===n.data.resultCode&&t(P(e))}))}},O=function(e){return function(t){a.c.savePhoto(e).then((function(e){0===e.data.resultCode&&t(C(e.data.data.photos))}))}},g=function(e){return function(t,n){t(w());var r=n().authReducer.id;a.c.saveProfile(e).then((function(e){0===e.data.resultCode&&a.c.getProfile(r).then((function(e){t(_(e.data))}))}))}},m=function(){return function(e){e(y())}},x=function(){return function(e){e(w())}},v=function(e){return{type:i,newText:e}},_=function(e){return{type:c,profile:e}},P=function(e){return{type:o,status:e}},C=function(e){return{type:l,photos:e}},y=function(){return{type:d}},w=function(){return{type:j}};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[{id:6,text:t.newText,likesCount:0}])});case c:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case o:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case u:return Object(s.a)(Object(s.a)({},e),{},{statusInProgress:t.isUpdate});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case d:return Object(s.a)(Object(s.a)({},e),{},{profileEditMode:!0});case j:return Object(s.a)(Object(s.a)({},e),{},{profileEditMode:!1});default:return e}}},48:function(e,t,n){e.exports={nav:"Navbar_nav__2j9JE",item:"Navbar_item__2X3hg",active:"Navbar_active__2mwFh",navbar:"Navbar_navbar__19zL9"}},503:function(e,t,n){},505:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},655:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(44),i=n.n(a),c=(n(381),n(37)),o=n(38),u=n(40),l=n(39),d=(n(382),n(9)),j=n(322),b=n(25),p=n(46),h=n(30),f=n(1),O=function(e){return{isAuth:e.authReducer.isAuth}},g=function(e){var t=function(t){Object(u.a)(r,t);var n=Object(l.a)(r);function r(){return Object(c.a)(this,r),n.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(d.a)({},this.props)):Object(f.jsx)(h.a,{to:"/login"})}}]),r}(s.a.Component);return Object(b.b)(O)(t)},m=n(21),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileTh(e),this.props.getUserStatusTh(e),console.log(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!=e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(j.a,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,id:this.props.id,status:this.props.status,updateStatus:this.props.updateStatusTh,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,activateProfileEditMode:this.props.activateProfileEditMode,deactivateProfileEditMode:this.props.deactivateProfileEditMode,editMode:this.props.editMode,saveProfile:this.props.saveProfile,deletePost:this.props.deletePost}))})}}]),n}(s.a.Component),v=Object(m.d)(Object(b.b)((function(e){return{profile:e.profilePage.profile,id:e.authReducer.id,status:e.profilePage.status,editMode:e.profilePage.profileEditMode}}),{setUserProfile:p.i,getProfileTh:p.e,getUserStatusTh:p.f,updateStatusTh:p.j,savePhoto:p.g,activateProfileEditMode:p.a,deactivateProfileEditMode:p.c,saveProfile:p.h}),g,h.g)(x),_=(n(505),n(28)),P=(n(506),function(e){return Object(f.jsx)("div",{children:"Music"})}),C=(n(507),function(e){return Object(f.jsx)("div",{children:"Settings"})}),y=n(81),w="SEND-MESSAGE",k={dialogs:[{id:1,name:"Ruslan"},{id:2,name:"Ihor"},{id:3,name:"Diana"}],messages:[],messageText:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{messageText:"",messages:[].concat(Object(y.a)(e.messages),[{id:1,message:t.messageText}])});default:return e}},N=n(71),E=n(85),U=n.n(E),I=n(234),T=n.n(I),M=function(e){var t="/dialogs/"+e.id;return Object(f.jsx)("div",{className:T.a.item,children:Object(f.jsxs)(_.b,{to:t,activeClassName:T.a.active,children:[" ",e.name]})})},A=n(98),D=n.n(A),F=n(6),R=n.n(F),B=function(e){return Object(f.jsx)("div",{className:R()(D.a.messageContainer,D.a.justifyEnd),children:Object(f.jsx)("div",{className:R()(D.a.messageBox,D.a.backgroundBlue),children:Object(f.jsx)("p",{className:R()(D.a.messageText,D.a.colorWhite),children:e.messages})})})},L=n(319),z=function(e){var t=Object(r.useState)(""),n=Object(N.a)(t,2),s=n[0],a=n[1],i=e.messagesPage.messages.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(B,{messages:e.message})},t)}));e.messagesPage.dialogs.map((function(e){return Object(f.jsx)(M,{name:e.name,activeClassName:U.a.active,id:e.id})}));return Object(f.jsx)("div",{className:U.a.outerContainer,children:Object(f.jsxs)("div",{className:U.a.container,children:[Object(f.jsx)(L.a,{className:U.a.messages,children:i}),Object(f.jsxs)("form",{className:U.a.form,children:[Object(f.jsx)("input",{className:U.a.input,placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 . . .",value:s,type:"text",onKeyPress:function(t){return"Enter"===t.key&&s?function(t){return e.sendMessage(s)&&a("")}:null},onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("button",{className:U.a.sendButton,onClick:s?function(t){return e.sendMessage(s)&&a("")}:null,children:"Send"})]})]})})},G=(n(160),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(z,{messagesPage:this.props.messagesPage,sendMessage:this.props.sendMessageActionCreator})})}}]),n}(s.a.Component)),H=Object(m.d)(Object(b.b)((function(e){return{messagesPage:e.messagesPage}}),{sendMessageActionCreator:function(e){return{type:w,messageText:e}}}))(G),V=n(48),J=n.n(V),W=function(e){return Object(f.jsx)("div",{className:J.a.navbar,children:Object(f.jsxs)("nav",{className:J.a.nav,children:[Object(f.jsx)("div",{className:J.a.item,children:Object(f.jsx)(_.b,{to:"/news",activeClassName:J.a.active,children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(f.jsx)("div",{className:J.a.item,children:Object(f.jsx)(_.b,{to:"/music",activeClassName:J.a.active,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(f.jsx)("div",{className:J.a.item,children:Object(f.jsx)(_.b,{to:"/settings",activeClassName:J.a.active,children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})})},K=(Object(b.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(W),n(93)),q=n(42),X="FOLLOW",Y="UNFOLLOW",Z="SET_USERS",Q="SET_CURRENT_PAGE",$="SET_USERS_TOTAL_COUNT",ee="TOGGLE_IS_FETCHING",te="TOGGLE_IS_FOLLOWING_IN_PROGRESS",ne={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},re=function(e){return{type:X,userID:e}},se=function(e){return{type:Y,userID:e}},ae=function(e){return{type:Q,currentPage:e}},ie=function(e){return{type:ee,isFetching:e}},ce=function(e,t){return{type:te,isFollowing:e,userId:t}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case Y:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case Z:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case Q:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case $:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.count});case ee:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case te:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ue=n(238),le=n.n(ue),de=n(107),je=n(181),be=n.n(je),pe=n(240),he=function(e){for(var t=e.totalItemsCount,n=e.portionSize,s=e.currentPage,a=e.onPageChange,i=Math.ceil(t/n),c=[],o=1;o<=i;o++)c.push(o);var u=Math.ceil(i/n),l=Object(r.useState)(1),d=Object(N.a)(l,2),j=d[0],b=d[1],p=(j-1)*n+1,h=j*n;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:be.a.paginator,children:[j>1&&Object(f.jsx)(pe.a,{onClick:function(){b(1)},children:"First"}),j>1&&Object(f.jsx)(pe.a,{onClick:function(){b(j-1)},children:"Previous"}),c.filter((function(e){return e>=p&&e<=h})).map((function(e){return Object(f.jsx)(pe.a,{className:R()(Object(K.a)({},be.a.selectedPage,s===e),be.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),u>j&&Object(f.jsx)(pe.a,{onClick:function(){b(j+1)},children:"Next"}),u>j&&Object(f.jsx)(pe.a,{onClick:function(){b(u)},children:"Last"})]})})},fe=(n(225),function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(he,{totalItemsCount:e.totalUsersCount,onPageChange:e.onPageChange,currentPage:e.currentPage,portionSize:e.pageSize})}),e.users.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(_.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:de.a,className:le.a.userPhoto})})}),Object(f.jsx)("div",{className:le.a.followButton,children:t.followed?Object(f.jsx)(pe.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(f.jsx)(pe.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(f.jsx)("span",{children:Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]})})]},t.id)}))]})}),Oe=n(92),ge=n(347),me=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e})),xe=function(e){return e.usersPage.pageSize},ve=function(e){return e.usersPage.totalUsersCount},_e=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.isFetching},Ce=function(e){return e.usersPage.followingInProgress},ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChange=function(t){e.props.getUsersTh(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTh(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e;return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(Oe.a,{}):null,Object(f.jsx)(fe,(e={totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress},Object(K.a)(e,"unfollow",this.props.unfollowTh),Object(K.a)(e,"follow",this.props.followTh),e))]})}}]),n}(s.a.Component),we=Object(m.d)(g,Object(b.b)((function(e){return{users:me(e),pageSize:xe(e),totalUsersCount:ve(e),currentPage:_e(e),isFetching:Pe(e),followingInProgress:Ce(e)}}),{follow:re,unfollow:se,setCurrentPage:ae,getUsersTh:function(e,t){return function(n){n(ie(!0)),n(ae(e)),q.e.getUsers(e,t).then((function(e){var t,r;n(ie(!1)),n((t=e.items,{type:Z,users:t})),n((r=e.totalCount,{type:$,count:r}))}))}},unfollowTh:function(e){return function(t){t(ce(!0,e)),q.e.unfollow(e).then((function(n){0==n.data.resultCode&&t(se(e)),t(ce(!1,e))}))}},followTh:function(e){return function(t){t(ce(!0,e)),q.e.follow(e).then((function(n){0==n.data.resultCode&&t(re(e)),t(ce(!1,e))}))}}}))(ye),ke=n(239),Se=n.n(ke),Ne=n(663),Ee=function(e){return Object(f.jsxs)("header",{className:Se.a.header,children:[Object(f.jsx)("img",{src:"https://logoza.ru/img/rock.png"}),Object(f.jsx)("div",{className:Se.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[" ",e.login," - ",Object(f.jsx)(Ne.a,{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(_.b,{to:"/login",children:"Login"})})]})},Ue=n(75),Ie=n.n(Ue),Te=n(133),Me=n(90),Ae="SET_USER_DATA",De="SET_AUTH_PROFILE",Fe="GET_CAPTCHA_URL",Re={id:null,login:null,email:null,isAuth:!1,isFetching:!1,authUserProfile:null,captchaUrl:null},Be=function(e,t,n,r){return{type:Ae,payload:{id:e,login:t,email:n,isAuth:r}}},Le=function(e){return{type:Ae,payload:{captchaUrl:e}}},ze=function(){return function(){var e=Object(Te.a)(Ie.a.mark((function e(t){var n,r,s,a,i;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,i=r.email,t(Be(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ge=function(){return function(){var e=Object(Te.a)(Ie.a.mark((function e(t){var n,r;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(Le(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},He=function(){return function(){var e=Object(Te.a)(Ie.a.mark((function e(t){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.b.logout();case 2:0===e.sent.data.resultCode&&t(Be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),t.payload.isAuth);case De:return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:t.authProfile});case Fe:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{captchaUrl:t.payload.captchaUrl});default:return e}},Je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(Ee,Object(d.a)({},this.props))}}]),n}(s.a.Component),We=(Object(b.b)((function(e){return{login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{logout:He})(Je),n(659)),Ke=n(660),qe=n(662),Xe=function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)(We.a,{name:"basic",labelCol:{span:3},wrapperCol:{span:10},initialValues:{remember:!0},onFinish:e.onSubmit,children:[Object(f.jsx)(We.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(f.jsx)(Ke.a,{})}),Object(f.jsx)(We.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(f.jsx)(Ke.a.Password,{})}),Object(f.jsx)(We.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(f.jsx)(qe.a,{children:"Remember me"})}),e.captchaUrl&&Object(f.jsx)(We.a.Item,{wrapperCol:{offset:8,span:16},children:Object(f.jsx)("img",{src:e.captchaUrl})}),e.captchaUrl&&Object(f.jsx)(We.a.Item,{label:"captcha",name:"captcha",rules:[{required:!0,message:"Please input Captcha!"}],children:Object(f.jsx)(Ke.a,{})}),Object(f.jsx)(We.a.Item,{wrapperCol:{offset:8,span:16},children:Object(f.jsx)(pe.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})},Ye=function(e){return e.isAuth?Object(f.jsx)(h.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(Xe,{onSubmit:function(t){e.login(t.username,t.password,t.remember,t.captcha)},captchaUrl:e.captchaUrl})]})},Ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(Ye,{login:this.props.login,isAuth:this.props.isAuth,captchaUrl:this.props.captchaUrl})})}}]),n}(s.a.Component),Qe=Object(m.d)(Object(b.b)((function(e){return{isAuth:e.authReducer.isAuth,captchaUrl:e.authReducer.captchaUrl}}),{login:function(e,t,n,r){return function(){var s=Object(Te.a)(Ie.a.mark((function s(a){var i,c;return Ie.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,q.b.login(e,t,n,r);case 2:0===(i=s.sent).data.resultCode?a(ze()):10===i.data.resultCode?a(Ge()):(c=i.data.messages.length>0?i.data.messages[0]:"Some error",a(Object(Me.a)("login",{_error:c})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}}))(Ze),$e="INITIALIZED_SUCCESS",et={initialized:!1},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},nt=n(658),rt=n(661),st=n(665),at=n(666),it=n(667),ct=n(668),ot=n(669);var ut,lt=(ut=s.a.lazy((function(){return n.e(3).then(n.bind(null,671))})),function(e){return Object(f.jsx)(s.a.Suspense,{fallback:Object(f.jsx)("div",{children:"loading ..."}),children:Object(f.jsx)(ut,Object(d.a)({},e))})}),dt=nt.a.Header,jt=nt.a.Sider,bt=nt.a.Content,pt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={collapsed:!1,size:"large"},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.catchAllUnhandledError=function(){alert("Some Error")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError),console.log(this.props.userID)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){var e=this;this.state.size;return this.props.initialized?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(nt.a,{children:[Object(f.jsxs)(jt,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(rt.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(f.jsx)(rt.a.Item,{icon:Object(f.jsx)(st.a,{}),children:Object(f.jsx)(_.b,{to:"/profile",activeClassName:J.a.active,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})},"1"),Object(f.jsx)(rt.a.Item,{icon:Object(f.jsx)(at.a,{}),children:Object(f.jsx)(_.b,{to:"/dialogs",activeClassName:J.a.active,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})},"2"),Object(f.jsx)(rt.a.Item,{icon:Object(f.jsx)(at.a,{}),children:Object(f.jsx)(_.b,{to:"/chat",activeClassName:J.a.active,children:"\u0427\u0430\u0442"})},"3"),Object(f.jsx)(rt.a.Item,{icon:Object(f.jsx)(it.a,{}),children:Object(f.jsx)(_.b,{to:"/users",activeClassName:J.a.active,children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})},"4")]})]}),Object(f.jsxs)(nt.a,{className:"site-layout",children:[Object(f.jsxs)(dt,{className:"site-layout-background",style:{padding:0},children:[Object(f.jsxs)("div",{className:"auth-block",children:[" ",this.props.isAuth?Object(f.jsxs)("div",{children:[" ",this.props.login," - ",Object(f.jsx)(pe.a,{onClick:this.props.logout,children:"Logout"})]}):Object(f.jsx)(_.b,{to:"/login",children:"Login"})]}),s.a.createElement(this.state.collapsed?ct.a:ot.a,{className:"trigger",onClick:this.toggle})]}),Object(f.jsx)(bt,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(f.jsxs)(h.d,{children:[Object(f.jsx)(h.b,{path:"/",exact:!0,children:Object(f.jsx)(h.a,{to:"/profile"})}),Object(f.jsx)(h.b,{path:"/dialogs",render:function(){return Object(f.jsx)(H,{})}}),Object(f.jsx)(h.b,{path:"/profile/:userID?",render:function(){return Object(f.jsx)(v,{})}}),Object(f.jsx)(h.b,{path:"/chat",render:function(){return Object(f.jsx)(lt,{userID:e.props.authUserProfile})}}),Object(f.jsx)(h.b,{path:"/music",render:function(){return Object(f.jsx)(P,{})}}),Object(f.jsx)(h.b,{path:"/settings",render:function(){return Object(f.jsx)(C,{})}}),Object(f.jsx)(h.b,{path:"/users",render:function(){return Object(f.jsx)(we,{})}}),Object(f.jsx)(h.b,{path:"/login",render:function(){return Object(f.jsx)(Qe,{})}}),Object(f.jsx)(h.b,{path:"*",render:function(){return Object(f.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]})}):Object(f.jsx)(Oe.a,{})}}]),n}(s.a.Component),ht=Object(m.d)(h.g,Object(b.b)((function(e){return{initialized:e.app.initialized,login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile,userID:e.authReducer.id}}),{initializeApp:function(){return function(e){e(ze()).then((function(){e({type:$e})}))}},logout:He}))(pt),ft={friendName:[{friendsName:"Diana"},{friendsName:"Ihor"},{friendsName:"Ruslan"}]},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;return e},gt=n(348),mt=n(323),xt=Object(m.c)({profilePage:p.d,messagesPage:S,sidebar:Ot,usersPage:oe,authReducer:Ve,app:tt,form:mt.a}),vt=Object(m.e)(xt,Object(m.a)(gt.a));window.store=vt;var _t=vt,Pt=n(321);Object(Pt.a)(i.a.render(Object(f.jsx)(_.a,{children:Object(f.jsx)(b.a,{store:_t,children:Object(f.jsx)(ht,{})})}),document.getElementById("root")))},85:function(e,t,n){e.exports={outerContainer:"Dialogs_outerContainer__3s9Bk",container:"Dialogs_container__jKVI5",messages:"Dialogs_messages__xtf3_",form:"Dialogs_form__2JgH1",input:"Dialogs_input__10fj7",sendButton:"Dialogs_sendButton__1Bfy2"}},92:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Curve-Loading.5e01ee79.gif",s=n(1);t.a=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r})})}},97:function(e,t,n){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__3VPu2",largeUserPhoto:"ProfileInfo_largeUserPhoto__3hR3Q",photoUpload:"ProfileInfo_photoUpload__3rOaZ",editProfile:"ProfileInfo_editProfile__qVWnK",contacts:"ProfileInfo_contacts__1CAwM"}},98:function(e,t,n){e.exports={messageBox:"Message_messageBox__2RFqK",messageText:"Message_messageText__2fRt6",messageContainer:"Message_messageContainer__1GmYm",sentText:"Message_sentText__1lFLx","pl-10":"Message_pl-10__WhiVf","pr-10":"Message_pr-10__23ZrO",justifyStart:"Message_justifyStart__14XDF",justifyEnd:"Message_justifyEnd__iLpBD",colorWhite:"Message_colorWhite__19DyY",colorDark:"Message_colorDark__3RxcQ",backgroundBlue:"Message_backgroundBlue__2X_f3",backgroundLight:"Message_backgroundLight__16ur6",avatar:"Message_avatar__27HrW"}}},[[655,1,2]]]);
//# sourceMappingURL=main.3313b131.chunk.js.map