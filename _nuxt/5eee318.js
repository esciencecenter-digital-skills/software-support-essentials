(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,o,t){"use strict";o.a={id:"decorations",init:function(e){!function(e){var o=e.getRevealElement(),t=document.createElement("div");t.setAttribute("id","decorations"),t.innerHTML='\n  <div id="overlay"></div>\n  <div id="blue-pane"></div>\n  <div id="purple-half-circle-top"></div>\n  <div id="purple-half-circle-bottom"></div>\n  <div id="yellow-strip"></div>\n  <div id="yellow-half-strip"></div>\n  <div id="touch-pane"><h3>Let\'s stay<br>in touch</h3></div>\n  <div id="empowering"><h3>“Empowering researchers across all disciplines through innovative research software”</h3></div>\n  <div id="logo-color"><img src="./files/logo-fc.svg"></div>\n  <div id="logo-part-white"><img src="./files/logo-fc-part-white.svg"></div>\n  <div id="logo-white"><img src="./files/logo-fc-white.svg"></div>\n  <div id="yellow-flag"><img class="left-e" src="./files/e-logo.svg"></img></div>\n  <div id="purple-half-circle-logo"><img class="logo" src="./files/logo-fc-part-white.svg"></img></div>\n  <div id="blue-strip"><div id="footer"></div></div>\n  <img id="right-e" src="./files/letter-e.svg"></img>\n  <img id="left-e" src="./files/e-logo.svg"></img>\n  <div id="purple-blob">\n    <div class="blob1"></div>\n    <div class="blob2"></div>\n    <div class="box"></div>\n  </div>\n  <div id="globe"><img src="./files/globe.png"></img></div>\n  <div id="mail"><img src="./files/mail.png"></img></div>\n  <div id="phone"><img src="./files/phone.png"></img></div>\n  ',o.prepend(t)}(e)}}},214:function(e,o,t){"use strict";var r=t(9),l=(t(43),t(35),t(34),t(14),t(27),t(71),t(223),t(224),t(196)),n=t(197),c=t(198),d=t.n(c),v=t(199),h=t.n(v),f=t(200),w=t(112);o.a={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function o(){var t,r,l,n,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.$content,r=e.params,o.next=3,t(r.story).fetch();case 3:return l=o.sent,n=l.body.children.filter((function(e){return"chapter"===e.tag})).map((function(e){return{body:{children:e.children},props:e.props}})),c=n.map((function(e){return e.props.headline})),o.abrupt("return",{params:r,story:l,headlines:c,chapters:n});case 7:case"end":return o.stop()}}),o)})))()},data:function(){return{error:!1,currentChapter:0,showBigImage:!1}},mounted:function(){var e=this;this.chapters.forEach((function(e,o){e.props.presentation&&new l.a(document.querySelector("#deck"+o),{controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[n.a,h.a,d.a,w.a,f.a]}).initialize()})),document.addEventListener("keydown",(function(o){"Escape"===o.key&&e.closeBigImage()}))},methods:{getContent:function(path){return"stories/_".concat(this.params.story,"/").concat(path)},toggleChapter:function(i){this.currentChapter=i},openBigImage:function(){this.showBigImage=!0},closeBigImage:function(){this.showBigImage=!1}}}},217:function(e,o,t){"use strict";var r=t(50),component=Object(r.a)({},(function(){return(0,this._self._c)("Nuxt",{staticClass:"p-0"})}),[],!1,null,null,null);o.a=component.exports},224:function(e,o,t){var content=t(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(56).default)("618a20cc",content,!0,{sourceMap:!1})},225:function(e,o,t){t(226),e.exports=t(227)},266:function(e,o,t){"use strict";t.r(o);t(23),t(46);o.default=function(e){var path=e.route.hash.replace("#!","");path.length&&e.redirect(path)}},294:function(e,o,t){var r=t(55)((function(i){return i[1]}));r.push([e.i,":root{--r-background-color:#fff;--r-main-font:Assistant,Helvetica,sans-serif;--r-main-font-size:28px;--r-main-color:#000;--r-block-margin:20px;--r-heading-margin:0 0 20px 0;--r-heading-font:Nunito,Helvetica,sans-serif;--r-heading-color:#000;--r-heading-line-height:1.2;--r-heading-letter-spacing:normal;--r-heading-text-transform:none;--r-heading-text-shadow:none;--r-heading-font-weight:bold;--r-heading1-text-shadow:none;--r-heading1-size:3em;--r-heading2-size:2.5em;--r-heading3-size:2em;--r-heading4-size:1.5em;--r-code-font:monospace;--r-link-color:#ffb213;--r-link-color-dark:#c68500;--r-link-color-hover:#ffcb60;--r-selection-background-color:#ffdc93;--r-selection-color:#fff}.reveal-viewport{background:#fff;background-color:#fff;background-color:var(--r-background-color)}.reveal{color:#000;color:var(--r-main-color);font-family:Assistant,Helvetica,sans-serif;font-family:var(--r-main-font);font-size:28px;font-size:var(--r-main-font-size);font-weight:400}.reveal ::-moz-selection{background:#ffdc93;background:var(--r-selection-background-color);color:#fff;color:var(--r-selection-color);text-shadow:none}.reveal ::selection{background:#ffdc93;background:var(--r-selection-background-color);color:#fff;color:var(--r-selection-color);text-shadow:none}.reveal ::-moz-selection{background:#ffdc93;background:var(--r-selection-background-color);color:#fff;color:var(--r-selection-color);text-shadow:none}.reveal .slides section,.reveal .slides section>section{font-weight:inherit;line-height:1.3}.reveal h1,.reveal h2,.reveal h3,.reveal h4,.reveal h5,.reveal h6{word-wrap:break-word;color:#000;color:var(--r-heading-color);font-family:Nunito,Helvetica,sans-serif;font-family:var(--r-heading-font);font-weight:700;font-weight:var(--r-heading-font-weight);letter-spacing:normal;letter-spacing:var(--r-heading-letter-spacing);line-height:1.2;line-height:var(--r-heading-line-height);margin:0 0 20px;margin:var(--r-heading-margin);text-shadow:none;text-shadow:var(--r-heading-text-shadow);text-transform:none;text-transform:var(--r-heading-text-transform)}.reveal h1{font-size:3em;font-size:var(--r-heading1-size)}.reveal h2{font-size:2.5em;font-size:var(--r-heading2-size)}.reveal h3{font-size:2em;font-size:var(--r-heading3-size)}.reveal h4{font-size:1.5em;font-size:var(--r-heading4-size)}.reveal h1{text-shadow:none;text-shadow:var(--r-heading1-text-shadow)}.reveal p{line-height:1.3;margin:20px 0;margin:var(--r-block-margin) 0}.reveal h1:last-child,.reveal h2:last-child,.reveal h3:last-child,.reveal h4:last-child,.reveal h5:last-child,.reveal h6:last-child{margin-bottom:0}.reveal iframe,.reveal img,.reveal video{max-height:95%;max-width:95%}.reveal b,.reveal strong{font-weight:700}.reveal em{font-style:italic}.reveal dl,.reveal ol,.reveal ul{display:inline-block;margin:0 0 0 1em;text-align:left}.reveal ol{list-style-type:decimal}.reveal ul{list-style-type:disc}.reveal ul ul{list-style-type:square}.reveal ul ul ul{list-style-type:circle}.reveal ol ol,.reveal ol ul,.reveal ul ol,.reveal ul ul{display:block;margin-left:40px}.reveal dt{font-weight:700}.reveal dd{margin-left:40px}.reveal blockquote{background:hsla(0,0%,100%,.05);box-shadow:0 0 2px rgba(0,0,0,.2);display:block;font-style:italic;margin:20px auto;margin:var(--r-block-margin) auto;padding:5px;position:relative;width:70%}.reveal blockquote p:first-child,.reveal blockquote p:last-child{display:inline-block}.reveal q{font-style:italic}.reveal pre{word-wrap:break-word;box-shadow:0 5px 15px rgba(0,0,0,.15);display:block;font-size:.55em;line-height:1.2em;margin:20px auto;margin:var(--r-block-margin) auto;position:relative;text-align:left;width:90%}.reveal code,.reveal pre{font-family:monospace;font-family:var(--r-code-font)}.reveal code{-moz-tab-size:2;-o-tab-size:2;tab-size:2;text-transform:none}.reveal pre code{word-wrap:normal;display:block;max-height:400px;overflow:auto;padding:5px}.reveal .code-wrapper{white-space:normal}.reveal .code-wrapper code{white-space:pre}.reveal table{border-collapse:collapse;border-spacing:0;margin:auto}.reveal table th{font-weight:700}.reveal table td,.reveal table th{border-bottom:1px solid;padding:.2em .5em;text-align:left}.reveal table td[align=center],.reveal table th[align=center]{text-align:center}.reveal table td[align=right],.reveal table th[align=right]{text-align:right}.reveal table tbody tr:last-child td,.reveal table tbody tr:last-child th{border-bottom:none}.reveal sup{font-size:smaller;vertical-align:super}.reveal sub{font-size:smaller;vertical-align:sub}.reveal small{display:inline-block;font-size:.6em;line-height:1.2em}.reveal small,.reveal small *{vertical-align:top}.reveal img{margin:20px 0;margin:var(--r-block-margin) 0}.reveal a{color:#ffb213;color:var(--r-link-color);-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease}.reveal a:hover{border:none;color:#ffcb60;color:var(--r-link-color-hover);text-shadow:none}.reveal .roll span:after{background:#c68500;background:var(--r-link-color-dark);color:#fff}.reveal .r-frame{border:4px solid #000;border:4px solid var(--r-main-color);box-shadow:0 0 10px rgba(0,0,0,.15)}.reveal a .r-frame{transition:all .15s linear}.reveal a:hover .r-frame{border-color:#ffb213;border-color:var(--r-link-color);box-shadow:0 0 20px rgba(0,0,0,.55)}.reveal .controls,.reveal .progress{color:#ffb213;color:var(--r-link-color)}.reveal .progress{background:rgba(0,0,0,.2)}@media print{.backgrounds{background-color:#fff;background-color:var(--r-background-color)}}#overlay{bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s;z-index:1}#overlay .opacity-10{opacity:.1}#overlay .opacity-20{opacity:.2}#overlay .opacity-30{opacity:.3}#overlay .opacity-40{opacity:.4}#overlay .opacity-50{opacity:.5}#overlay .opacity-60{opacity:.6}#overlay .opacity-70{opacity:.7}#overlay .opacity-80{opacity:.8}#overlay .opacity-90{opacity:.9}#overlay .opacity-100{opacity:1}#logo-color,#logo-part-white,#logo-white{left:-50%;opacity:0;position:absolute;top:1.5%;transition:opacity 1s,left 1s;z-index:2}#logo-color img,#logo-part-white img,#logo-white img{width:70%}#right-e{opacity:0;top:-100%;transition:opacity 1s}#left-e,#right-e{position:absolute;width:6%;z-index:3}#left-e{left:-100%;transition:left 1s,bottom 1s}#blue-pane{background-color:#009ddd;z-index:1}#blue-pane,#touch-pane{bottom:0;opacity:0;position:absolute;top:0;transition:opacity 1s}#touch-pane{align-items:center;background-color:#fff;display:flex;justify-content:center;left:0;right:66.6%;z-index:2}#touch-pane h3{color:#000;text-align:left}#empowering{align-items:center;bottom:0;display:flex;justify-content:center;left:6%;opacity:0;position:absolute;right:52%;top:0;transition:opacity 1s;z-index:2}#empowering h3{color:#fff;font-size:100%;text-align:left}#yellow-strip{border-radius:10vw 10vw 0 0;height:85%;left:-28%;transition:left 1s;width:18%}#yellow-half-strip,#yellow-strip{background-color:#ffb213;bottom:0;position:absolute;z-index:2}#yellow-half-strip{height:25%;left:-100%;opacity:0;transition:opacity 1s;width:17%}#yellow-flag{background-color:#ffb213;border-radius:0 7vh 7vh 0;bottom:5%;height:12%;left:-20%;margin:0;padding:1% 0 0;position:absolute;transition:left 1s,bottom 1s;width:10%;z-index:1}#yellow-flag img{height:90%;margin:0;padding:0;position:relative}#purple-half-circle-bottom{background-color:#380339;border-radius:20vw 20vw 0 0;bottom:0;height:15%;left:-50%;opacity:0;position:absolute;transition:opacity 1s;width:15%;z-index:2}#purple-half-circle-top{border-radius:0 0 20vw 20vw;opacity:1;top:-50%;transition:top 1s;width:30%}#purple-half-circle-logo,#purple-half-circle-top{background-color:#380339;height:30%;left:0;position:absolute;z-index:2}#purple-half-circle-logo{border-radius:28vw 28vw 0 0;bottom:0;opacity:0;transition:opacity 1s;width:36%}#purple-half-circle-logo img{bottom:-34%;left:22%;position:relative;width:55%}#purple-blob{display:flex;position:absolute;right:0;top:-100vh;transition:top 1s;z-index:2}#purple-blob div{background-color:#380339}#purple-blob .blob1{border-radius:0 0 10vw 10vw;height:25vh;width:10vw}#purple-blob .blob2{border-radius:0 0 10vw 10vw;height:50vh;width:10vw}#purple-blob .box{background:linear-gradient(45deg,transparent 10vw,#380339 0) 0 100%;background-image:radial-gradient(circle at 0 100%,rgba(204,0,0,0) 5vw,#380339 15px);height:calc(25vh + 5vw);position:absolute;right:10vw;top:0;width:5vw}#globe,#mail,#phone{left:-20%;position:absolute;top:-20%;transition:left 1s;width:2.2%;z-index:3}.reveal-viewport.title #purple-half-circle-logo{opacity:1}.reveal-viewport.title #purple-blob{top:0}.reveal-viewport.title #right-e{opacity:1;right:0;top:10%}.reveal-viewport.title #yellow-strip{left:0}.reveal-viewport.title #overlay{background-color:#009ddd;opacity:.8}.reveal-viewport.title #left-e{bottom:30%;left:0}.reveal-viewport.title h1,.reveal-viewport.title h2{color:#fff;margin:6% 6% 6% 15%}.reveal-viewport.standard #logo-color{left:3%;opacity:1}.reveal-viewport.standard #yellow-flag{left:0}.reveal-viewport.standard h1,.reveal-viewport.standard h2,.reveal-viewport.standard h3,.reveal-viewport.standard p,.reveal-viewport.standard ul{padding-left:10%;text-align:left}.reveal-viewport.about #logo-part-white{left:3%;opacity:1}.reveal-viewport.about #blue-pane{left:0;opacity:1;right:50%}.reveal-viewport.about #purple-half-circle-top{top:0}.reveal-viewport.about #purple-half-circle-bottom{bottom:0;left:18%;opacity:1}.reveal-viewport.about #yellow-half-strip{border-radius:20vw 0 0 0;left:33%;opacity:1}.reveal-viewport.about #empowering{opacity:1}.reveal-viewport.about h1,.reveal-viewport.about h2,.reveal-viewport.about p,.reveal-viewport.about ul{padding-left:55%;text-align:left}.reveal-viewport.keepintouch #logo-color{left:3%;opacity:1}.reveal-viewport.keepintouch #overlay{background-color:#009ddd;opacity:.8}.reveal-viewport.keepintouch #touch-pane{opacity:1}.reveal-viewport.keepintouch #purple-blob{top:0}.reveal-viewport.keepintouch #right-e{opacity:1;right:0;top:67%}.reveal-viewport.keepintouch #yellow-half-strip{border-radius:0 20vw 0 0;left:33%;opacity:1}.reveal-viewport.keepintouch #purple-half-circle-bottom{bottom:0;left:50%;opacity:1}.reveal-viewport.keepintouch #globe{left:46%;top:38.6%}.reveal-viewport.keepintouch #mail{left:46%;top:46.6%}.reveal-viewport.keepintouch #phone{left:46%;top:53.5%}.reveal-viewport.keepintouch h1,.reveal-viewport.keepintouch h2,.reveal-viewport.keepintouch p,.reveal-viewport.keepintouch ul{padding-left:50%;text-align:left}.reveal-viewport section.has-dark-background h1,.reveal-viewport section.has-dark-background h2,.reveal-viewport section.has-dark-background h3,.reveal-viewport.keepintouch a,.reveal-viewport.keepintouch p{color:#fff}.reveal-viewport .slides{z-index:10}",""]),r.locals={},e.exports=r}},[[225,7,1,8]]]);