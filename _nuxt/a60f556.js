(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{286:function(t,e,r){t.exports=r.p+"img/eucp_logo.abb841e.png"},288:function(t,e,r){"use strict";r.r(e);var n={props:["target"]},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"rounded bg-gray-200 prose",attrs:{role:"button",href:t.target,target:"_blank"}},[e("svg",{staticClass:"h-7 border-4 border-gray-200 bg-gray-200 rounded",attrs:{viewBox:"0 0 126 16"}},[e("path",{attrs:{fill:"#000000",d:"M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"}}),t._v(" "),e("text",{attrs:{x:"22",y:"14"}},[t._v("edit on GitHub")])])])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);r(204);var n=r(11),o=(r(48),r(40),r(39),r(15),r(83),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r(n.story).fetch();case 3:return o=e.sent,c=o.body.children.filter((function(t){return"chapter"===t.tag})).map((function(t){return{body:{children:t.children},props:t.props}})),l=c.map((function(t){return t.props.headline})),e.abrupt("return",{params:n,story:o,headlines:l,chapters:c});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{error:!1,currentChapter:0,showBigImage:!1}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.closeBigImage()}))},methods:{getContent:function(path){return"stories/_".concat(this.params.story,"/").concat(path)},toggleChapter:function(i){this.currentChapter=i},gitHubURL:function(){return"https://github.com/eucp-project/storyboards/blob/main/static/stories/".concat(this.story.slug,".md")},openBigImage:function(){this.showBigImage=!0},closeBigImage:function(){this.showBigImage=!1}}}),c=r(47),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col w-screen h-screen bg-gray-200 gap-2"},[e("div",{staticClass:"flex gap-10 m-2 items-center"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{attrs:{src:r(286),alt:"EUCP Logo"}})]),t._v(" "),e("h1",{staticClass:"text-2xl"},[t._v("\n      Storyboard: "+t._s(t.story.title)+"\n    ")])],1),t._v(" "),e("div",{staticClass:"flex no-wrap text-left gap-2"},t._l(t.headlines,(function(r,n){return e("div",{key:n},[e("div",{staticClass:"flex-grow bg-white rounded p-3 prose",attrs:{role:"button"},on:{click:function(e){return t.toggleChapter(n)}}},[t._v("\n        "+t._s(r)+"\n      ")])])})),0),t._v(" "),t._l(t.chapters,(function(r,n){return e("div",{directives:[{name:"show",rawName:"v-show",value:n===t.currentChapter,expression:"idx===currentChapter"}],key:n,staticClass:"flex flex-row-reverse justify-end gap-2 overflow-auto h-full"},[e("div",{staticClass:"p-4 w-1/3 bg-white rounded overflow-auto"},[e("nuxt-content",{staticClass:"prose mb-6",attrs:{document:r}}),t._v(" "),e("EditOnGitHub",{attrs:{target:t.gitHubURL()}}),t._v(" "),t._m(0,!0)],1),t._v(" "),e("div",{staticClass:"w-2/3 bg-white rounded"},[r.props.image.endsWith("html")?e("iframe",{staticClass:"w-full h-full",attrs:{src:t.getContent(r.props.image),frameborder:"0"}}):e("img",{staticClass:"object-contain w-auto h-full max-w-full max-h-full mx-auto",attrs:{src:t.getContent(r.props.image),alt:"story image"},on:{click:t.openBigImage}}),t._v(" "),r.props.image.endsWith("html")?t._e():e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBigImage,expression:"showBigImage"}],staticClass:"fixed inset-0 flex bg-gray-900 bg-opacity-80",on:{click:t.closeBigImage}},[e("div",{staticClass:"fixed bg-white shadow-2xl inset-5 z-40 flex justify-center",on:{click:t.closeBigImage}},[e("img",{staticClass:"w-auto h-full object-contain",attrs:{src:t.getContent(r.props.image),alt:"story image"}})])])])])}))],2)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"prose italic"},[t._v("\n        For more information on editing stories, see "),e("a",{attrs:{href:"https://blog.esciencecenter.nl/storyboards-for-science-communication-85e399e5c1b5",target:"_blank"}},[t._v("this blog post")]),t._v(".\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{EditOnGitHub:r(288).default})}}]);