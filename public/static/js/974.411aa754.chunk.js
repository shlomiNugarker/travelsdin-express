"use strict";(self.webpackChunksocial_network_app=self.webpackChunksocial_network_app||[]).push([[974],{8460:function(e,n,s){s.d(n,{E:function(){return d}});var r=s(1502),i=s(9434),t=s(2791),a=s(9722),l=s(8931),o=s(262),c=s(1363),u=s(184),d=function(){var e=(0,i.I0)(),n=(0,l.UO)(),s=(0,i.v9)((function(e){return e.postModule})).posts,d=(0,i.v9)((function(e){return e.postModule})).pageNumber,f=(0,i.v9)((function(e){return e.postModule})).isPostsLoading,p=(0,i.v9)((function(e){return e.postModule})).postsLength,m=function(){var r={pageNumber:d};n.userId&&(r.userId=n.userId),(p||s)&&p!==(null===s||void 0===s?void 0:s.length)&&(e((0,o.v)(r)),e((0,o.dH)()),e((0,o.bs)()))},h=function(){(null===s||void 0===s?void 0:s.length)>=p||window.scrollY+window.innerHeight+.9>=document.documentElement.scrollHeight&&m()};return(0,t.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[p]),s?(0,u.jsxs)("section",{className:"posts-list",children:[s.map((function(e){return(0,u.jsx)(r.G,{post:e},e._id)})),(0,u.jsxs)("div",{onClick:m,className:"load-more",children:[!f&&(null===s||void 0===s?void 0:s.length)<p&&(0,u.jsx)("p",{className:"load-btn",children:(0,u.jsx)("span",{children:(0,u.jsx)(c.G,{icon:"fa-solid fa-caret-down"})})}),f&&(null===s||void 0===s?void 0:s.length)<p&&(0,u.jsx)("span",{className:"gif-container",children:(0,u.jsx)("img",{className:"loading-gif",src:a,alt:""})}),(null===s||void 0===s?void 0:s.length)===p&&(0,u.jsx)("p",{children:"This is the end.."})]})]}):(0,u.jsx)("div",{className:"posts-list",children:(0,u.jsx)("span",{className:"gif-container",children:(0,u.jsx)("img",{className:"loading-gif",src:a,alt:""})})})}},4974:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var r=s(1413),i=s(4165),t=s(5861),a=s(9439),l=s(8931),o=s(2791),c=s(9434),u=s(1363),d=s(8874),f=s(8460),p=s(9334),m=s(9722),h=s(4942),v=s(4029),x=s(1672),g=s(184);function j(e){var n=e.toggleShowEditModal,s=e.user,l=(0,c.I0)(),d=(0,o.useState)({age:s.age,bg:s.bg,email:s.email,fullname:s.fullname,imgUrl:s.imgUrl,phone:s.phone,profession:s.profession,birthDate:s.birthDate}),f=(0,a.Z)(d,2),p=f[0],m=f[1],j=p.age,N=(p.bg,p.email),b=p.fullname,w=p.imgUrl,Z=p.phone,y=p.profession;p.birthDate;(0,o.useEffect)((function(){}),[]);var k=function(e){var n=e.target,i=n.name,t="number"===n.type?+n.value||"":n.value;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,h.Z)({_id:s._id},i,t))}))},I=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.T)(n);case 2:s=e.sent,m((function(e){return(0,r.Z)((0,r.Z)({},e),{},{imgUrl:s.url})}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)("section",{className:"edit-modal",children:[(0,g.jsx)("div",{className:"bg",onClick:n}),(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"title",children:[(0,g.jsx)("p",{children:"Edit profile"}),(0,g.jsx)("span",{onClick:n,children:(0,g.jsx)(u.G,{icon:"fa-solid fa-x"})})]}),(0,g.jsx)("div",{className:"form-container",children:(0,g.jsxs)("form",{className:"form",action:"",children:[(0,g.jsxs)("label",{htmlFor:"imgUrl",className:"add-file",children:[(0,g.jsxs)("div",{className:"add-btn",children:[(0,g.jsx)("p",{children:"Add image profile"}),(0,g.jsx)(u.G,{className:"upload-logo",icon:"fa-solid fa-cloud-arrow-up"})]}),(0,g.jsx)("input",{onChange:I,id:"imgUrl",type:"file",name:"imgUrl",hidden:!0}),(0,g.jsx)("img",{className:"img-to-upload",src:w,alt:""})]}),(0,g.jsxs)("label",{htmlFor:"first-name",className:"first-name",children:[(0,g.jsxs)("p",{children:["Fullname ",(0,g.jsx)("span",{children:"*"})]}),(0,g.jsx)("input",{name:"fullname",onChange:k,id:"fullname",type:"text",value:b||""})]}),(0,g.jsxs)("label",{htmlFor:"email",className:"email",children:[(0,g.jsx)("p",{children:"Email"}),(0,g.jsx)("input",{name:"email",onChange:k,id:"email",type:"email",value:N||""})]}),(0,g.jsxs)("label",{htmlFor:"profession",className:"profession",children:[(0,g.jsx)("p",{children:"Profession"}),(0,g.jsx)("input",{name:"profession",onChange:k,id:"profession",type:"text",value:y||""})]}),(0,g.jsxs)("label",{htmlFor:"age",className:"age",children:[(0,g.jsx)("p",{children:"Age"}),(0,g.jsx)("input",{name:"age",onChange:k,id:"age",type:"number",value:j||""})]}),(0,g.jsxs)("label",{htmlFor:"phone",className:"phone",children:[(0,g.jsx)("p",{children:"Phone"}),(0,g.jsx)("input",{name:"phone",onChange:k,id:"phone",type:"text",value:Z||""})]})]})}),(0,g.jsx)("div",{className:"btn-save-container",children:(0,g.jsx)("button",{onClick:function(){l((0,v.Nq)((0,r.Z)((0,r.Z)({},s),p))).then((function(e){e&&n()}))},children:"Save"})})]})]})}var N=s(262);var b=function(){var e=(0,l.UO)(),n=(0,l.k6)(),s=(0,c.I0)(),h=(0,o.useState)(null),x=(0,a.Z)(h,2),b=x[0],w=x[1],Z=(0,o.useState)(!1),y=(0,a.Z)(Z,2),k=y[0],I=y[1],C=(0,o.useState)(!1),S=(0,a.Z)(C,2),E=S[0],_=S[1],U=(0,o.useState)(null),O=(0,a.Z)(U,2),M=O[0],F=O[1],J=(0,c.v9)((function(e){return e.postModule})).posts,L=(0,c.v9)((function(e){return e.userModule})).loggedInUser;(0,o.useEffect)((function(){!function(){var e,n=null===L||void 0===L||null===(e=L.connections)||void 0===e?void 0:e.some((function(e){return(null===e||void 0===e?void 0:e.userId)===(null===b||void 0===b?void 0:b._id)}));F(n)}()}),[b]);var q=function(){var n=(0,t.Z)((0,i.Z)().mark((function n(){var s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.W.getById(e.userId);case 2:s=n.sent,w((function(){return s}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=function(){I((function(e){return!e}))},G=function(){_((function(e){return!e}))},P=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(){var n,t,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:!0===M?(n=JSON.parse(JSON.stringify(b)),(t=JSON.parse(JSON.stringify(L))).connections=t.connections.filter((function(e){return e.userId!==n._id})),n.connections=n.connections.filter((function(e){return e.userId!==t._id})),s((0,v.Nq)(t)),s((0,v.Nq)(n)),w((function(e){return(0,r.Z)((0,r.Z)({},e),n)}))):!1===M&&(a=JSON.parse(JSON.stringify(b)),l=JSON.parse(JSON.stringify(L)),a.connections.unshift({userId:l._id,fullname:l.fullname}),l.connections.push({userId:a._id,fullname:a.fullname}),s((0,v.Nq)(l)),s((0,v.Nq)(a)),w(a));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,o.useEffect)((function(){var n={userId:e.userId};return s((0,N.rd)("profile")),s((0,N.L6)(n)),q(),s((0,N.Nz)(n)),s((0,N.Cd)()),function(){s((0,N.L6)(null))}}),[e.userId,L]),!b)return(0,g.jsx)("section",{className:"feed-load",children:(0,g.jsx)("span",{className:"gif-container",children:(0,g.jsx)("img",{className:"loading-gif",src:m,alt:""})})});var T=(null===L||void 0===L?void 0:L._id)===(null===b||void 0===b?void 0:b._id);return(0,g.jsxs)("section",{className:"profile-page",children:[(0,g.jsxs)("div",{className:"left",children:[(0,g.jsxs)("div",{className:"user-profile",children:[(0,g.jsx)("div",{className:"bg",style:{backgroundImage:"url(".concat(b.bg,")")},children:(0,g.jsx)("div",{className:"img-container",onClick:function(){D()},children:(0,g.jsx)("img",{src:b.imgUrl,alt:"",className:"img"})})}),(0,g.jsx)("div",{className:"user-details",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"name",children:(0,g.jsx)("h1",{children:b.fullname})}),(0,g.jsx)("div",{className:"profession",children:(0,g.jsx)("p",{children:b.profession})}),(0,g.jsx)("div",{className:"profession",children:(0,g.jsx)("p",{children:b.email})}),(0,g.jsxs)("div",{className:"btns-container",children:[T&&(0,g.jsx)("button",{className:"add-details",onClick:G,children:"Edit profile"}),!T&&(0,g.jsxs)("button",{className:"connect",onClick:P,children:[(0,g.jsx)(u.G,{icon:"fa-solid fa-user-plus"}),(0,g.jsx)("p",{children:M?"Disconnect":"Connect"})]}),(0,g.jsx)("button",{className:"message",onClick:function(){n.push("/main/message/".concat(null===b||void 0===b?void 0:b._id))},children:"Message"})]})]})})]}),(0,g.jsx)("div",{className:"user-posts",children:(null===J||void 0===J?void 0:J.length)&&(0,g.jsx)(f.E,{posts:J})||(0,g.jsx)("div",{children:(0,g.jsxs)("p",{children:[b.fullname," has not published any posts yet."]})})})]}),(0,g.jsxs)("div",{className:"right",children:[(0,g.jsx)("div",{className:"top-div"}),(0,g.jsx)("div",{className:"bottom-div"})]}),k&&(0,g.jsx)(p.O,{toggleShowImg:D,imgUrl:b.imgUrl,title:"Profile photo"}),E&&(0,g.jsx)(j,{toggleShowEditModal:G,user:b})]})}},1672:function(e,n,s){s.d(n,{T:function(){return l},u:function(){return o}});var r=s(4165),i=s(5861),t=s(1732),a=function(e){return new Promise((function(n,s){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return n(r.result)},r.onerror=function(e){return s(e)}}))},l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var s,i,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=n.target.files[0],e.next=4,a(s);case 4:return i=e.sent,e.next=7,t.R.post("cloudinary/upload",{file:i,resourceType:"image"});case 7:return l=e.sent,e.abrupt("return",l);case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error uploading image:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var s,i,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=n.target.files[0],e.next=4,a(s);case 4:return i=e.sent,e.next=7,t.R.post("cloudinary/upload",{file:i,resourceType:"video"});case 7:return l=e.sent,e.abrupt("return",l);case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error uploading video:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=974.411aa754.chunk.js.map