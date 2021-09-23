(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{118:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var i,a,r,o=n(0),c=n.n(o),s=n(53),l=n.n(s),d=(n(118),n(22)),m=n(7),h=n(14),j=n(3),u=h.a.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2em;\n  h3 {\n    font-size: 18px;\n    margin-bottom: 0.5em;\n    font-weight: 600;\n  }\n  span {\n    font-size: 15px;\n  }\n  > img {\n    width: 200px;\n  }\n"]))),p=function(e){var t=e.title,n=e.school,i=e.institute,a=e.startingYear,r=e.endingYear;return Object(j.jsxs)(u,{children:[Object(j.jsx)("img",{src:"../assets/logos/".concat(n.toLowerCase(),".webp"),alt:i.toLowerCase(),style:{margin:8}}),Object(j.jsx)("h3",{children:t}),Object(j.jsxs)("span",{children:[a," - ",r]})]})},g=n(93),b=n(16),O=n(6);!function(e){e.DESERT="desert",e.AURORA="aurora",e.ABSTRACT="abstract"}(r||(r={}));var x,f,w,y,v,k,E,S,U,C,I=(a={},Object(O.a)(a,r.DESERT,{color:"orange",main:g.theme.colors.orange[600],darker:g.theme.colors.orange[800]}),Object(O.a)(a,r.AURORA,{color:"purple",main:g.theme.colors.purple[600],darker:g.theme.colors.purple[800]}),Object(O.a)(a,r.ABSTRACT,{color:"purple",main:g.theme.colors.purple[600],darker:g.theme.colors.purple[800]}),a),A={theme:r.ABSTRACT},R=b.a.div(x||(x=Object(m.a)(["\n  color: ",";\n  font-size: 25px;\n  text-align: center;\n  font-weight: 500;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n"])),I[A.theme].main),T=b.a.div(f||(f=Object(m.a)(["\n  color: ",";\n  font-size: 20px;\n  text-align: center;\n  font-weight: 500;\n  margin-top: 8px;\n  margin-bottom: 8px;\n"])),I[A.theme].main),B=b.a.div(w||(w=Object(m.a)(["\n  width: 100vw;\n  padding: 3em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: ",";\n"])),(function(e){return e.backgroundUrl?"url('".concat(e.backgroundUrl,"')"):g.theme.colors.white})),W=b.a.div(y||(y=Object(m.a)(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  opacity: ",";\n"])),g.theme.colors.white,(function(e){return e.fadeAmount?1-e.fadeAmount/100:.5})),z=b.a.div(v||(v=Object(m.a)(["\n  position: relative;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),L=b.a.p(k||(k=Object(m.a)(["\n  color: ",";\n  text-align: center;\n  padding-top: ",";\n  padding-bottom: ",";\n"])),I[A.theme].darker,(function(e){return"".concat(e.paddingTop||1,"em")}),(function(e){return"".concat(e.paddingBottom||1,"em")})),Y=h.a.div(E||(E=Object(m.a)(["\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),N=function(e){var t=e.data,n=e.title,i=e.index;return Object(j.jsx)(B,{id:"module-".concat(i),children:Object(j.jsxs)(Y,{children:[Object(j.jsx)(R,{children:n}),Object(j.jsx)(L,{paddingTop:"0",children:t.about}),Object(j.jsx)(T,{children:t.education.title}),t.education.data.map((function(e){return Object(j.jsx)(p,{title:e.title,school:e.school,institute:e.institute,startingYear:e.startingYear,endingYear:e.endingYear})}))]})})},M=function(e){e.data;var t=e.title,n=e.index;return Object(j.jsxs)(B,{backgroundUrl:"./assets/themes/".concat(A.theme,"/2.jpg"),id:"module-".concat(n),children:[Object(j.jsx)(W,{fadeAmount:40}),Object(j.jsxs)(z,{children:[Object(j.jsx)(R,{children:t}),Object(j.jsx)("h1",{children:"Coming Soon"})]})]})},_=n(4),P=n(102),K=n(141),D=n(138),G=n(144),F=h.a.div(S||(S=Object(m.a)(["\n  margin: 0 2em;\n  position: relative;\n  > img {\n    width: 100px;\n    opacity: 0.8;\n    transition: 0.18s all;\n    filter: grayscale(90%);\n    &:hover {\n      opacity: 1;\n      filter: grayscale(0%);\n    }\n  }\n"]))),J=h.a.div(U||(U=Object(m.a)(["\n  position: absolute;\n  top: 0.25em;\n  left: 0.25em;\n  z-index: 100;\n"])));!function(e){e.COMPONENT_FRAMRWORKS_LIBRARIES="Component frameworks / libraries",e.TESTING_FRAMEWORKS="Testing frameworks",e.BACKEND="Backend",e.DATABASES="Databases",e.UI_STYLING="UI and Styling",e.UI_FRAMEWORKS="UI frameworks",e.LANGUAGES_SUPERSETS="Languages / Supersets"}(C||(C={}));var H,X,Q,q,V=function(e){var t=e.logo,n=e.name,i=e.isCurrentlyUsing,a=void 0!==i&&i;return Object(j.jsxs)(F,{children:[a&&Object(j.jsx)(J,{children:Object(j.jsx)(D.a,{variant:"solid",colorScheme:"red",children:"Using"})}),Object(j.jsx)(G.a,{gutter:16,hasArrow:!0,label:n,bg:I[A.theme].darker,placement:"top",children:Object(j.jsx)("img",{src:"./assets/usages/".concat(t,".webp"),alt:n})})]})},Z=n(98),$=n.n(Z),ee=h.a.div(H||(H=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 1.5em;\n  > span {\n    margin: 0 0.5em;\n  }\n"]))),te=function(e){var t=e.group,n=e.title;return Object(j.jsxs)("div",{children:[Object(j.jsx)(T,{children:n}),Object(j.jsx)(ee,{children:t.map((function(e,t){return Object(j.jsxs)("span",{children:[e.name," ",e.isCurrentlyUsing&&Object(j.jsx)(D.a,{variant:"solid",colorScheme:"red",children:"Using"})]})}))})]})},ne=h.a.div(X||(X=Object(m.a)(["\n  margin: 3em 0 0 0;\n  width: 1000px;\n"]))),ie=h.a.div(Q||(Q=Object(m.a)(["\n  margin-top: 2em;\n  width: 100%;\n"])));!function(e){e.LIST="list",e.MARQUEE="marquee",e.BOTH="both"}(q||(q={}));var ae,re,oe,ce,se,le,de,me,he,je,ue,pe,ge=function(e){var t=e.data,n=e.title,i=e.index,a=Object(o.useState)(!1),r=Object(_.a)(a,2),c=r[0],s=r[1];return Object(j.jsxs)(B,{id:"module-".concat(i),children:[Object(j.jsx)(R,{children:n}),Object(j.jsx)(P.a,{colorScheme:I[A.theme].color,variant:"outline",onClick:function(){return s(!c)},children:c?"Hide list":"Show List"}),Object(j.jsxs)(ne,{children:[Object(j.jsx)($.a,{speed:50,play:!1,pauseOnHover:!1,children:t.map((function(e,t){return Object(j.jsx)(V,{logo:e.logo,name:e.name,isCurrentlyUsing:e.isCurrentlyUsing},t)}))}),Object(j.jsx)(K.a,{in:c,animateOpacity:!0,children:Object(j.jsx)(ie,{children:Object.keys(C).map((function(e,n){var i=t.filter((function(t){return t.type===C[e]}));return i.length>0&&Object(j.jsx)(te,{title:C[e],group:i},n)}))})})]})]})},be=h.a.div(ae||(ae=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  > img {\n    width: 200px;\n  }\n"]))),Oe=h.a.div(re||(re=Object(m.a)(["\n  height: 100px;\n  width: 1px;\n  background-color: ",";\n  margin-top: 1em;\n"])),I[A.theme].main),xe=h.a.span(oe||(oe=Object(m.a)(["\n  font-weight: 500;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n"]))),fe=h.a.div(ce||(ce=Object(m.a)(["\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n"]))),we=function(e){var t=e.company,n=e.title,i=e.startingYear,a=e.endingYear,r=e.showWorkplaceName,o=void 0!==r&&r,c=e.showWorkplaceImage,s=void 0!==c&&c,l=e.isLast,d=void 0!==l&&l;return Object(j.jsxs)(be,{children:[s&&Object(j.jsx)("img",{src:"../assets/logos/".concat(t.toLowerCase(),".webp"),alt:t.toLowerCase(),style:{margin:8}}),o&&t,Object(j.jsx)(xe,{children:n}),Object(j.jsxs)(fe,{children:[i," - ",null!==a&&void 0!==a?a:"Present"]}),!d&&Object(j.jsx)(Oe,{})]})},ye=function(e){var t=e.data,n=e.title,i=e.index;return Object(j.jsxs)(B,{backgroundUrl:"./assets/themes/".concat(A.theme,"/1.jpg"),id:"module-".concat(i),children:[Object(j.jsx)(W,{fadeAmount:40}),Object(j.jsxs)(z,{children:[Object(j.jsx)(R,{children:n}),t.map((function(e,n){return Object(j.jsx)(we,Object(d.a)(Object(d.a)({},e),{},{isLast:n===t.length-1}),n)}))]})]})},ve=n(145),ke=n(143),Ee=n(99),Se=function(){return Object(j.jsx)(Ee.a,{viewBox:"0 0 24 24",css:{width:32,height:32},children:Object(j.jsx)("path",{fill:"white",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},Ue=function(){return Object(j.jsx)(Ee.a,{viewBox:"0 0 24 24",css:{width:32,height:32},children:Object(j.jsx)("path",{fill:"white",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},Ce=function(){return Object(j.jsx)(Ee.a,{viewBox:"0 0 24 24",css:{width:32,height:32},children:Object(j.jsx)("path",{fill:"white",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})},Ie=n(147),Ae=n(142),Re=n(149),Te=n(28),Be=h.a.div(se||(se=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  padding-right: 2em;\n"]))),We=function(e){var t=e.modules,n=Object(o.useState)(!1),i=Object(_.a)(n,2),a=i[0],r=i[1];return Object(j.jsxs)(Be,{children:[Object(j.jsx)(Ae.a,{"aria-label":"Search database",icon:Object(j.jsx)(Ie.a,{}),onClick:function(){return r(!0)},display:{md:"none"}}),a&&Object(j.jsxs)(Re.a,{placement:"left",isOpen:a,onClose:function(){return r(!1)},motionPreset:"scale",children:[Object(j.jsx)(Te.e,{}),Object(j.jsxs)(Re.b,{children:[Object(j.jsx)(Te.d,{borderBottomWidth:"1px",children:"Nir Tzezana"}),Object(j.jsx)(Te.b,{children:t.map((function(e,t){return Object(j.jsx)(P.a,{as:"a",href:"#module-".concat(t),onClick:function(){return r(!1)},colorScheme:I[A.theme].color,variant:"ghost",css:{display:"flex",width:"100%"},my:4,children:e.title})}))})]})]})]})},ze=b.a.div(le||(le=Object(m.a)(["\n  width: 100vw;\n  min-height: 50vh;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  background: url(",");\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-position: 0%;\n"])),"./assets/themes/".concat(A.theme,"/bg.jpg")),Le=b.a.h1(de||(de=Object(m.a)(["\n  color: ",";\n  font-size: 50px;\n  font-weight: 400;\n"])),g.theme.colors.white),Ye=b.a.h2(me||(me=Object(m.a)(["\n  color: ",";\n  font-size: 25px;\n  font-weight: 200;\n"])),g.theme.colors.white),Ne=b.a.img(he||(he=Object(m.a)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n"]))),Me=b.a.div(je||(je=Object(m.a)(["\n  display: flex;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  > * {\n    margin: 0 1em;\n  }\n"]))),_e=function(e){var t=e.data,n=t.name,i=t.title,a=t.showProfilePic,r=t.cvLink,o=t.linkedIn,c=t.twitter,s=t.github,l=e.modules;return Object(j.jsxs)(ze,{children:[Object(j.jsx)(We,{modules:l}),a&&Object(j.jsx)(Ne,{src:"./assets/profile.jpg"}),Object(j.jsx)(Le,{children:n}),Object(j.jsx)(Ye,{children:i}),r&&Object(j.jsx)(P.a,{colorScheme:"gray",style:{color:"white"},_hover:{color:I[A.theme].darker},_pressed:{color:I[A.theme].darker},onClick:function(){return window.open(r)},mt:"4",variant:"outline",size:"md",children:"My Resume"}),(s||o||c)&&Object(j.jsxs)(Me,{children:[s&&Object(j.jsx)(ke.a,{href:s,isExternal:!0,children:Object(j.jsx)(Se,{})}),o&&Object(j.jsx)(ke.a,{href:o,isExternal:!0,children:Object(j.jsx)(Ue,{})}),c&&Object(j.jsx)(ke.a,{href:c,isExternal:!0,children:Object(j.jsx)(Ce,{})})]})]})},Pe=n(72),Ke=b.a.div(ue||(ue=Object(m.a)(["\n  width: 100vw;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));!function(e){e.ABOUT="about",e.WORK_EXPERIENCE="workExperience",e.WHAT_I_KNOW="whatIKnow",e.VOLUNTEERING="volunteering",e.PROJECTS="projects"}(pe||(pe={}));var De=function(){return Object(j.jsx)(ve.a,{children:Object(j.jsxs)(Ke,{children:[Object(j.jsx)(_e,{data:Pe.header,modules:Pe.modules}),Pe.modules.map((function(e,t){switch(e.type){case pe.ABOUT:return Object(o.createElement)(N,Object(d.a)(Object(d.a)({},e),{},{index:t,key:t}));case pe.WORK_EXPERIENCE:return Object(o.createElement)(ye,Object(d.a)(Object(d.a)({},e),{},{index:t,key:t}));case pe.WHAT_I_KNOW:return Object(o.createElement)(ge,Object(d.a)(Object(d.a)({},e),{},{index:t,key:t}));case pe.PROJECTS:return Object(o.createElement)(M,Object(d.a)(Object(d.a)({},e),{},{index:t,key:t}));default:return Object(j.jsx)(j.Fragment,{})}}))]})})};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(De,{})}),document.getElementById("root"))},72:function(e){e.exports=JSON.parse('{"header":{"name":"Wesley Bench","title":"Front End Engineer & UI/UX Designer","showProfilePic":false,"cvLink":"http://www.google.com","linkedIn":"https://www.linkedin.com/in/wesley-bench/","twitter":"https://twitter.com/wesleybenchier","github":"https://github.com/wes1991"},"modules":[{"type":"about","data":{"about":"I care about delivering an aesthetically pleasing and functionally optimal user experience. I try to achieve that by working hand-in-hand with designers, marketing, developers, and with the clients directly when possible. Surprisingly, a lot of the time what I find is the most lacking is simply good communication between two parties. Because of this, I\'ve often taken a role of the diplomat, or the in-between communicator that tries to make sense of the situation and come up with a compromise that makes both parties happy. As I go through my career more and more, one sentiment seems to hold true no matter where I go; Communicating is hard. Also, I can center a div.","education":{"title":"Education","data":[{"title":"Associates of Arts","school":"OTC","institute":"Ozark Technical Community College","startingYear":"2010","endingYear":"2012"},{"title":"BS Computer Science","school":"MSU","institute":"Missouri State University","startingYear":"2012","endingYear":"2015"}]}},"title":"About Me"},{"type":"workExperience","data":[{"company":"DSI","title":"Software Developer I","startingYear":2015,"endingYear":2018,"showWorkplaceName":false,"showWorkplaceImage":true},{"company":"DRG","title":"Front End Engineer & UI/UX Designer","startingYear":2018,"endingYear":2021,"showWorkplaceName":false,"showWorkplaceImage":true},{"company":"Clarivate","title":"UI/UX/Frontend Engineer","startingYear":2021,"endingYear":null,"showWorkplaceName":false,"showWorkplaceImage":true}],"title":"My Work Experience"},{"type":"whatIKnow","data":[{"logo":"angular","name":"Angular","type":"Component frameworks / libraries","isCurrentlyUsing":false},{"logo":"react","name":"React","type":"Component frameworks / libraries","isCurrentlyUsing":false},{"logo":"nodejs","name":"nodejs","type":"Backend","isCurrentlyUsing":false},{"logo":"graphQL","name":"Graph QL","type":"Backend","isCurrentlyUsing":false},{"logo":"js","name":"JavaScript","type":"Languages / Supersets","isCurrentlyUsing":false},{"logo":"typescript","name":"TypeScript","type":"Languages / Supersets","isCurrentlyUsing":false},{"logo":"angular-material","name":"Angular Material","type":"UI frameworks","isCurrentlyUsing":false},{"logo":"ag_grid","name":"AG Grid","type":"UI frameworks","isCurrentlyUsing":false},{"logo":"mui","name":"Material UI","type":"UI frameworks","isCurrentlyUsing":false}],"display":"both","title":"What I Know (and use)"},{"type":"projects","data":[{}],"title":"My Projects"}]}')}},[[126,1,2]]]);
//# sourceMappingURL=main.1c8e859f.chunk.js.map