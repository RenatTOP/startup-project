(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4643"],{"3b42":function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n={class:"container"},u={class:"jumbotron"},s=Object(c["f"])(" Profile "),b=Object(c["g"])("strong",null,"Token:",-1),l=Object(c["g"])("strong",null,"Id:",-1),o=Object(c["g"])("strong",null,"Email:",-1),j=Object(c["g"])("strong",null,"Authorities:",-1);function O(e,t,r,O,i,a){return Object(c["p"])(),Object(c["d"])("div",n,[Object(c["g"])("header",u,[Object(c["g"])("h3",null,[Object(c["g"])("strong",null,Object(c["w"])(a.currentUser.username),1),s])]),Object(c["g"])("p",null,[b,Object(c["f"])(" "+Object(c["w"])(a.currentUser.accessToken.substring(0,20))+" ... "+Object(c["w"])(a.currentUser.accessToken.substr(a.currentUser.accessToken.length-20)),1)]),Object(c["g"])("p",null,[l,Object(c["f"])(" "+Object(c["w"])(a.currentUser.id),1)]),Object(c["g"])("p",null,[o,Object(c["f"])(" "+Object(c["w"])(a.currentUser.email),1)]),j,Object(c["g"])("ul",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["t"])(a.currentUser.roles,(function(e,t){return Object(c["p"])(),Object(c["d"])("li",{key:t},Object(c["w"])(e),1)})),128))])])}var i={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/auth/login")}};i.render=O;t["default"]=i}}]);
//# sourceMappingURL=chunk-2d0c4643.ef3edd04.js.map