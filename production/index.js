(()=>{"use strict";var e={922:(e,r,o)=>{o(334).config(),o(622);var n=o(552),s=o(500),t=o(722),i=o(734),a=(s({apiKey:process.env.MG_API_KEY,domain:process.env.MG_DOMAIN}),i.user),u=i.role;r.register=function(e,r){var o=e.body,s=o.username,t=o.password,i=o.email;new a({username:s,password:n.hashSync(t,10),email:i}).save((function(e,o){e?r.status(500).send({servErr:e}):u.findOne({name:"user"},(function(e,n){e?r.status(500).send({servErr:e}):(o.roles=[n._id],o.save((function(e){e?r.status(500).send({servErr:e}):r.send({userDone:"User was registered successfully!"})})))}))}))},r.login=function(e,r){var o=e.body,s=o.email,i=o.password;a.findOne({email:s}).populate("roles","-__v").exec((function(e,o){if(e)r.status(500).send({servErr:e});else{if(!o)return r.status(404).send({userErr:"User Not found."});if(!n.compareSync(i,o.password))return r.status(401).send({accessToken:null,userErr:"Invalid Password!"});for(var s=t.sign({id:o.id},process.env.JWT_SECRET,{expiresIn:86400}),a=[],u=0;u<o.roles.length;u++)a.push("ROLE_"+o.roles[u].name.toUpperCase());r.status(200).send({id:o._id,username:o.username,email:o.email,roles:a,accessToken:s})}}))}},491:(e,r)=>{r.allAccess=function(e,r){r.status(200).send("Public Content.")},r.userBoard=function(e,r){r.status(200).send("User Content.")},r.adminBoard=function(e,r){r.status(200).send("Admin Content.")},r.moderatorBoard=function(e,r){r.status(200).send("Moderator Content.")}},579:(e,r,o)=>{o(334).config(),o(622);var n=o(479),s=o(150),t=o(127)(),i=o(734),a=o(619),u=o(473),c=o(977).AuthHeader;t.use(n()),t.use(c),t.use((function(e,r,o){r.header("Access-Control-Allow-Origin","*"),r.header("Access-Control-Allow-Methods","*"),r.header("Access-Control-Allow-Headers","*"),o()})),t.use(s("combined")),t.use(u.json()),t.use(u.urlencoded({extended:!1})),o(614)(t),o(924)(t);var d=i.role,l=i.heroType;i.mongoose.connect(process.env.DBURL,{useUnifiedTopology:!0,useNewUrlParser:!0}).then((function(){console.log("Successfully connect to MongoDB."),d.estimatedDocumentCount((function(e,r){e||0!==r||(new d({name:"user"}).save((function(e){e&&console.log("error",e),console.log("added 'user' to roles collection")})),new d({name:"moderator"}).save((function(e){e&&console.log("error",e),console.log("added 'moderator' to roles collection")})),new d({name:"admin"}).save((function(e){e&&console.log("error",e),console.log("added 'admin' to roles collection")})))})),l.estimatedDocumentCount((function(e,r){e||0!==r||(new l({"name.en":"Tank","name.ru":"Танк"}).save((function(e){e&&console.log("error",e),console.log("added 'Tank' to roles collection")})),new l({"name.en":"Bruiser","name.ru":"Рубака"}).save((function(e){e&&console.log("error",e),console.log("added 'Bruiser' to roles collection")})),new l({"name.en":"Melee assassin","name.ru":"Убийца ближнего боя"}).save((function(e){e&&console.log("error",e),console.log("added 'Melee assassin' to roles collection")})),new l({"name.en":"Ranged assassin","name.ru":"Убийца дальнего боя"}).save((function(e){e&&console.log("error",e),console.log("added 'Ranged assassin' to roles collection")})),new l({"name.en":"Healer","name.ru":"Лекарь"}).save((function(e){e&&console.log("error",e),console.log("added 'Healer' to roles collection")})),new l({"name.en":"Support","name.ru":"Поддержка"}).save((function(e){e&&console.log("error",e),console.log("added 'Support' to roles collection")})))}))})).catch((function(e){console.error("Connection error",e),process.exit()})),a.connect(process.env.DBURL,{useUnifiedTopology:!0,useNewUrlParser:!0}),a.connection.once("open",(function(){console.log("Mongoose - successful connection ..."),t.listen(process.env.PORT||process.env.PORT,(function(){return console.log("Server start on port ".concat(process.env.PORT," ..."))}))})).on("error",(function(e){return console.warn(e)}))},977:(e,r)=>{r.AuthHeader=function(e,r,o){r.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept"),o()}},678:(e,r,o)=>{var n=o(722),s=o(734),t=s.user,i=s.role;o(334).config(),r.verifyToken=function(e,r,o){var s=e.headers["x-access-token"];if(!s)return r.status(403).send({userErr:"No token provided!"});n.verify(s,process.env.JWT_SECRET,(function(n,s){if(n)return r.status(401).send({userErr:"Unauthorized!"});e.userId=s.id,o()}))},r.isAdmin=function(e,r,o){t.findById(e.userId).exec((function(e,n){e?r.status(500).send({servErr:e}):i.find({_id:{$in:n.roles}},(function(e,n){if(e)r.status(500).send({servErr:e});else{for(var s=0;s<n.length;s++)if("admin"===n[s].name)return void o();r.status(403).send({userErr:"Require Admin Role!"})}}))}))},r.isModerator=function(e,r,o){t.findById(e.userId).exec((function(e,n){e?r.status(500).send({message:e}):i.find({_id:{$in:n.roles}},(function(e,n){if(e)r.status(500).send({servErr:e});else{for(var s=0;s<n.length;s++)if("moderator"===n[s].name)return void o();r.status(403).send({userErr:"Require Moderator Role!"})}}))}))}},508:(e,r,o)=>{var n=o(734),s=n.ROLES,t=n.user;r.checkDuplicateEmailOrUsername=function(e,r,o){var n=e.body,s=n.email,i=n.username;t.findOne({email:s}).exec((function(e,n){e?r.status(500).send({servErr:e}):n?r.status(400).send({userErr:"Failed! Email is already in use!"}):t.findOne({username:i}).exec((function(e,n){e?r.status(500).send({servErr:e}):n?r.status(400).send({userErr:"Failed! Username is already in use!"}):o()}))}))},r.checkRolesExisted=function(e,r,o){if(e.body.roles)for(var n=0;n<e.body.roles.length;n++)if(!s.includes(e.body.roles[n]))return void r.status(400).send({userErr:"Failed! Role ".concat(e.body.roles[n]," does not exist!")});o()}},298:(e,r,o)=>{var n=o(619),s=o(468),t=new(0,n.Schema)({title:{type:String,trim:!0,required:!0,i18n:!0},title_min:{type:String,trim:!0,required:!0,i18n:!0},description:{type:String,trim:!0,required:!0,i18n:!0},points:{type:Object,trim:!0,required:!0},ability1:{type:String,trim:!0,required:!0,i18n:!0},ab_desc1:{type:String,trim:!0,required:!0,i18n:!0},ability2:{type:String,trim:!0,required:!0,i18n:!0},ab_desc2:{type:String,trim:!0,required:!0,i18n:!0},ability3:{type:String,trim:!0,required:!0,i18n:!0},ab_desc3:{type:String,trim:!0,required:!0,i18n:!0},heroic1:{type:String,trim:!0,required:!0,i18n:!0},heroic_desc1:{type:String,trim:!0,required:!0,i18n:!0},heroic2:{type:String,trim:!0,required:!0,i18n:!0},heroic_desc2:{type:String,trim:!0,required:!0,i18n:!0},ab_trait:{type:String,trim:!0,required:!0,i18n:!0},trait_desc:{type:String,trim:!0,required:!0,i18n:!0},hero_type:[{type:n.Schema.Types.ObjectId,ref:"heroType"}],favoriteHeroes:[{type:n.Schema.Types.ObjectId,ref:"hero"}]});t.plugin(s,{locales:["en","ru"]});var i=n.model("heroes",t);e.exports=i},406:(e,r,o)=>{var n=o(619),s=o(468),t=new(0,n.Schema)({name:{type:String,trim:!0,required:!0,i18n:!0}});t.plugin(s,{locales:["en","ru"]});var i=n.model("heroType",t);e.exports=i},734:(e,r,o)=>{var n=o(619);n.Promise=global.Promise;var s={};s.mongoose=n,s.user=o(400),s.role=o(331),s.hero=o(298),s.heroType=o(406),s.ROLES=["user","admin","moderator"],e.exports=s},331:(e,r,o)=>{var n=o(619),s=new(0,n.Schema)({name:String}),t=n.model("role",s);e.exports=t},400:(e,r,o)=>{var n=o(619),s=new(0,n.Schema)({username:{type:String,trim:!0,required:!0},password:{type:String,trim:!0,required:!0},email:{type:String,trim:!0,required:!0,unique:!0,lowercase:!0},roles:[{type:n.Schema.Types.ObjectId,ref:"role"}],favoriteHeroes:[{type:n.Schema.Types.ObjectId,ref:"heroes"}]}),t=n.model("users",s);e.exports=t},614:(e,r,o)=>{var n=o(508),s=n.checkDuplicateEmailOrUsername,t=n.checkRolesExisted,i=o(922),a=i.register,u=i.login;e.exports=function(e){e.post("/api/auth/signup",[s,t],a),e.post("/api/auth/signin",u)}},924:(e,r,o)=>{var n=o(678),s=n.verifyToken,t=n.isModerator,i=n.isAdmin,a=o(491),u=a.allAccess,c=a.userBoard,d=a.moderatorBoard,l=a.adminBoard;e.exports=function(e){e.get("/api/test/all",u),e.get("/api/test/user",s,c),e.get("/api/test/mod",s,t,d),e.get("/api/test/admin",s,i,l)}},949:e=>{e.exports=require("@babel/polyfill")},552:e=>{e.exports=require("bcrypt")},473:e=>{e.exports=require("body-parser")},479:e=>{e.exports=require("cors")},334:e=>{e.exports=require("dotenv")},127:e=>{e.exports=require("express")},722:e=>{e.exports=require("jsonwebtoken")},500:e=>{e.exports=require("mailgun-js")},619:e=>{e.exports=require("mongoose")},468:e=>{e.exports=require("mongoose-i18n-localize")},150:e=>{e.exports=require("morgan")},622:e=>{e.exports=require("path")}},r={};function o(n){if(r[n])return r[n].exports;var s=r[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o(949),o(579)})();