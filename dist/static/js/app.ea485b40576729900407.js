webpackJsonp([1],{"19+J":function(t,e){},"1E/T":function(t,e){},"3qQa":function(t,e){},"4Zqz":function(t,e){},"6Erz":function(t,e){},"8RqP":function(t,e,i){t.exports=i.p+"static/img/4.f2b0383.jpg"},"8vzP":function(t,e){},"93M7":function(t,e){},AMMu:function(t,e){},HVG1:function(t,e,i){t.exports=i.p+"static/img/1.14495cc.jpg"},IwgP:function(t,e){},KcE1:function(t,e){},M2KP:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("Qwtw")},null,null).exports,o=i("BEQ0"),r=i.n(o),l=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("j62E")},null,null).exports,d=i("mtWM"),v=i.n(d);function h(){return v.a.get("/static/mock/city.json")}var m={name:"More",components:{XHeader:u},data:function(){return{recommendList:"",weekendList:""}},mounted:function(){var t=this;h().then(function(e){t.recommendList=e.data.data.recommendList,t.weekendList=e.data.data.weekendList})}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{staticClass:"head-fixed",attrs:{tag:"div",to:{name:"Home"}}},[i("div",{staticClass:"head-fixed-back"},[t._v("〈")]),t._v(" "),i("div",{staticClass:"head-fixed-title"},[t._v("特卖汇")])]),t._v(" "),i("div",{staticClass:"show"},[i("div",[i("div",{staticClass:"shouList"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("router-link",{key:e.id,staticClass:"weekend",attrs:{tag:"li",to:"/weekendList/"+e.id}},[i("img",{staticClass:"weekend-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"weekend-info"},[i("p",{staticClass:"weekend-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"weekend-desc"},[t._v(t._s(e.desc))])])])}))]),t._v(" "),i("div",[i("div",{staticClass:"shouList"},[t._v("热门推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:{name:"Recommend",params:{id:e.id}}}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"item-button"},[t._v("查看详情")])])])}))])])],1)},staticRenderFns:[]};var f=i("VU/8")(m,_,!1,function(t){i("4Zqz")},null,null).exports,p=i("mvHQ"),w=i.n(p),g=i("NjrX"),C=i("0FxO"),x=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(C.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(w()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new g.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){w()(t)!==w()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,s){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":s},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,s){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":s},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var y=i("VU/8")(x,k,!1,function(t){i("p9A2")},null,null).exports,b={components:{More:f,Swiper:y},data:function(){return{demo06_list:[],demo06_index:0}},methods:{demo06_onIndexChange:function(t){this.demo06_index=t}},mounted:function(){var t=this;h().then(function(e){t.demo06_list=e.data.data.list})}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"head"},[i("input",{staticClass:"sou",attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}}),t._v(" "),i("router-link",{attrs:{to:"/search"}},[t._v(t._s(this.$store.state.nowCity)),i("span",[t._v("∨")])])],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"body"},[i("swiper",{attrs:{"show-desc-mask":!1,loop:"",auto:"",list:t.demo06_list,index:t.demo06_index},on:{"on-index-change":t.demo06_onIndexChange}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"discount"},[i("div",{staticClass:"caption"},[i("div",{staticClass:"sale"},[t._v("特卖汇")]),t._v(" "),i("router-link",{staticClass:"more",attrs:{to:"/more"}},[t._v("more>")])],1),t._v(" "),t._m(2)])],1),t._v(" "),i("footer",[i("div",{staticClass:"about"},[i("div",[t._v("下载App")]),t._v(" "),i("div",[t._v("我的订单")]),t._v(" "),i("router-link",{attrs:{to:{name:"User"}}},[t._v("我的")])],1),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"series"},[i("ul",{staticClass:"hotel flex"},[i("li",[t._v("国内游")]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("跟团游")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("民宿")])]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("高标无消费")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("客栈")])])]),t._v(" "),i("ul",{staticClass:"vehicle flex"},[i("li",[t._v("境外游")]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("海岛游")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("北欧")])]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("美国")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("日韩")])])]),t._v(" "),i("ul",{staticClass:"travel flex"},[i("li",[t._v("自由行")]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("门票")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("目的地攻略")])]),t._v(" "),i("li",[i("div",{staticClass:"cell"},[t._v("游轮旅行")]),t._v(" "),i("div",{staticClass:"cell"},[t._v("定制旅行")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"enjoy"},[i("ul",{staticClass:"flex cheap plaything"},[i("li",[t._v("景点·玩乐")]),t._v(" "),i("li",[t._v("周边游")]),t._v(" "),i("li",[t._v("一日游")]),t._v(" "),i("li",[t._v("当地攻略")])]),t._v(" "),i("ul",{staticClass:"flex expensive plaything"},[i("li",[t._v("出境游")]),t._v(" "),i("li",[t._v("自由行")]),t._v(" "),i("li",[t._v("私人定制")]),t._v(" "),i("li",[t._v("更多")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("ul",{staticClass:"example"},[i("li",[i("img",{staticClass:"example-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537946316268&di=967ecb00395ce6682ddb60b2899cba08&imgtype=0&src=http%3A%2F%2Fs3img.city.sina.com.cn%2Ftravel%2Ftrip%2Ftrip_tuijian%2F1396591711.jpg"}})]),t._v(" "),i("li",{staticClass:"example-word"},[t._v("希腊+圣托里尼+意大利+法国+瑞士14日跟团游(4钻)·【25人团 4星+两晚悬崖+庄园 巴黎琉森市区酒店 塞纳河游船晚宴+限量蜜月大礼包 圣岛两日 内陆飞】2人1台WIFI")]),t._v(" "),i("li",{staticClass:"price"},[t._v("￥17899"),i("span",[t._v("起")])])]),t._v(" "),i("div",[i("ul",{staticClass:"slogan"},[i("li",[t._v("千款特价")]),t._v(" "),i("li",[t._v("走过路过不要错过")])]),t._v(" "),i("div",{staticClass:"flex"},[i("ul",{staticClass:"back"},[i("li",{staticClass:"bold"},[i("span",[t._v("境外精选")])]),t._v(" "),i("li",[i("span",[t._v("百元")]),t._v("出境游")])]),t._v(" "),i("ul",{staticClass:"back"},[i("li",{staticClass:"bold"},[i("span",[t._v("周边玩乐")])]),t._v(" "),i("li",[i("span",[t._v("十元")]),t._v("度周末")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"foot"},[e("div",[e("span",[this._v("Qunar 京ICP备05021087")])]),this._v(" "),e("div",[this._v("意见反馈")]),this._v(" "),e("div",[this._v("关于我们")])])}]};var $=i("VU/8")(b,S,!1,function(t){i("1E/T")},null,null).exports,B={components:{XHeader:u}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("x-header",{attrs:{id:"title","left-options":{backText:""}}},[this._v("登录")]),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("div",{staticClass:"head-img"},[s("img",{attrs:{src:i("o73W")}})]),t._v(" "),s("div",{staticClass:"sign username"},[s("input",{attrs:{type:"text",placeholder:"用户名"}})]),t._v(" "),s("div",{staticClass:"sign password"},[s("input",{attrs:{type:"password",placeholder:"密码"}})]),t._v(" "),s("div",{staticClass:"signword"},[t._v("登录")]),t._v(" "),s("div",{staticClass:"register"},[s("div",[t._v("忘记密码？")]),t._v(" "),s("div",[t._v("马上注册")])])])}]};var N=i("VU/8")(B,L,!1,function(t){i("3qQa")},null,null).exports,E=(Object,String,{name:"Letter",props:{cities:{type:Object,default:function(){}},word:{type:String,default:""}}}),T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"letter"},t._l(t.cities,function(e,s){return i("li",{key:s,staticClass:"letters"},[i("a",{attrs:{href:"#"+s}},[t._v(t._s(s))])])}))])},staticRenderFns:[]};var O=i("VU/8")(E,T,!1,function(t){i("UVm/")},null,null).exports,V={components:{Letter:O},data:function(){return{nowCity:"北京",hotCities:"",cities:{},keyword:"",list:[],timer:null}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},1):this.list=[]}},methods:{change:function(t){this.$store.commit("changeNowCity",t),this.$router.push("/")}},mounted:function(){var t=this;h().then(function(e){t.hotCities=e.data.data.hotCities,t.cities=e.data.data.cities})}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{staticClass:"head-fixed",attrs:{tag:"div",to:{name:"Home"}}},[i("div",{staticClass:"head-fixed-back"},[t._v("〈")]),t._v(" "),i("div",{staticClass:"head-fixed-title"},[t._v("城市选择")])]),t._v(" "),i("div",{staticClass:"searchContent"},[i("div",{staticClass:"action"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"o",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],staticClass:"down-list"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-city",on:{click:function(i){t.change(e.name)}}},[t._v("\r\n                    "+t._s(e.name)+"\r\n                ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"none search-city"},[t._v("没有找到匹配数据")])],2)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.keyword,expression:"!keyword"}],staticClass:"allCity"},[i("Letter",{attrs:{cities:t.cities}}),t._v(" "),i("div",{staticClass:"cities"},[i("div",[i("div",{staticClass:"hot"},[t._v("当前城市")]),t._v(" "),i("ul",{staticClass:"list"},[i("li",[t._v(t._s(this.$store.state.nowCity))])])]),t._v(" "),i("div",[i("div",{staticClass:"hot"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.hotCities,function(e){return i("li",{key:e.id,on:{click:function(i){t.change(e.name)}}},[t._v(t._s(e.name))])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,staticClass:"letter-city"},[i("div",{staticClass:"id-href",attrs:{id:s}}),t._v(" "),i("div",{staticClass:"hot"},[t._v(t._s(s))]),t._v(" "),i("ul",t._l(e,function(e){return i("li",{key:e.id,staticClass:"item",on:{click:function(i){t.change(e.name)}}},[t._v(t._s(e.name))])}))])})],2)],1)])],1)},staticRenderFns:[]};var I=i("VU/8")(V,M,!1,function(t){i("93M7")},null,null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("周末去哪儿")])},staticRenderFns:[]},F=i("VU/8")(null,R,!1,null,null,null).exports,U=(Array,{components:{Swiper:y},props:{comList:{type:Array,default:[]}},data:function(){return{index:0}},methods:{comClick:function(){this.$emit("close")}}}),j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"common"},on:{click:t.comClick}},[i("div",[i("swiper",{attrs:{list:t.comList,"show-dots":!1,"show-desc-mask":!1,height:"7rem"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}}),t._v(" "),i("p",{attrs:{id:"index"}},[t._v(t._s(t.index+1)+"/"+t._s(t.comList.length))])],1)])},staticRenderFns:[]};var H=i("VU/8")(U,j,!1,function(t){i("pOdR")},null,null).exports,A={components:{Common:H},data:function(){return{list:{},comList:[]}},methods:{showCom:function(){this.list.showCommon=!0},closeCommon:function(){this.list.showCommon=!1}},created:function(){var t=this;h().then(function(e){var i=e.data.data.recommendList.filter(function(e){return e.id==t.$route.params.id})[0].children.bannerData;t.list=i,t.comList=i.imgList})}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.showCom}},[t.comList.length?i("div",[i("img",{staticClass:"banner-img",attrs:{src:t.comList[0].img,alt:""}})]):t._e(),t._v(" "),t._m(0)]),t._v(" "),i("common",{directives:[{name:"show",rawName:"v-show",value:t.list.showCommon,expression:"list.showCommon"}],attrs:{comList:t.comList},on:{close:t.closeCommon}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[this._v("大连圣亚海洋世界（AAAA景区）")]),this._v(" "),e("div",{staticClass:"banner-num"},[this._v("39")])])}]};var D=i("VU/8")(A,P,!1,function(t){i("lM6o")},null,null).exports,W={data:function(){return{showHead:!0,opacityStyle:{opacity:0}}},methods:{headScroll:function(){var t=document.documentElement.scrollTop;if(t>80){var e=t/180;e=e>1?1:e,this.opacityStyle={opacity:e},this.showHead=!1}else this.showHead=!0}},mounted:function(){window.addEventListener("scroll",this.headScroll)},updated:function(){window.addEventListener("scroll",this.headScroll)}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showHead,expression:"showHead"}],staticClass:"head-back",attrs:{tag:"div",to:{name:"More"}}},[t._v("〈")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showHead,expression:"!showHead"}],staticClass:"head-fixed",style:t.opacityStyle},[i("router-link",{staticClass:"head-fixed-back",attrs:{tag:"div",to:{name:"More"}}},[t._v("〈")]),t._v(" "),i("div",{staticClass:"head-fixed-title"},[t._v("景点详情")])],1)],1)},staticRenderFns:[]};var q=i("VU/8")(W,z,!1,function(t){i("xbCe")},null,null).exports,X={components:{Banner:D,Head:q}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Banner"),t._v(" "),i("Head"),t._v(" "),i("div",{staticClass:"moreContent"},[i("div",{staticClass:"more-nav"},[i("router-link",{attrs:{tag:"div",to:{name:"Money"}}},[t._v("费用信息")]),t._v(" "),i("router-link",{attrs:{tag:"div",to:{name:"Trip"}}},[t._v("行程信息")]),t._v(" "),i("router-link",{attrs:{tag:"div",to:{name:"Special"}}},[t._v("线路特色")]),t._v(" "),i("router-link",{attrs:{tag:"div",to:{name:"Know"}}},[t._v("预定须知")])],1),t._v(" "),i("router-view")],1)],1)},staticRenderFns:[]};var J=i("VU/8")(X,Z,!1,function(t){i("KcE1")},null,null).exports,Q={data:function(){return{moneylist:[]}},created:function(){h().then(function(t){t.data.data.recommendList[0].children.infoData})}},G={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"money-content"},[i("ul",[i("li",{staticClass:"money-item"},[i("div",{staticClass:"money-title"},[t._v("费用包含")]),t._v(" "),i("ul",[i("li",[i("div",[t._v("【交通】")]),t._v(" "),i("ul",[i("li",[t._v("全程空调旅游车（车型大小取决于游客数量，游客座位为正坐）")])])]),t._v(" "),i("li",[i("div",[t._v("【门票】")]),t._v(" "),i("ul",[i("li",[t._v("景点首道门票【古北水镇】")])])]),t._v(" "),i("li",[i("div",[t._v("【儿童标准价】")]),t._v(" "),i("ul",[i("li",[t._v("1.2米以下执行儿童价格。1.2米以上同成人价格。儿童价格只含往返车费。")])])]),t._v(" "),i("li",[i("div",[t._v("【四环接】")])])])])])])}]};var K=i("VU/8")(Q,G,!1,function(t){i("VsR1")},null,null).exports,Y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"trip-content"},[s("div",[t._v("\n        集合时间： \n        "),s("br"),t._v("\n        09:00国贸地铁站F口(中服大厦门口)\n        "),s("br"),t._v("\n        09:30地铁13号线望京西站B口(过街天桥下)， 见“古北水镇直通车”导游旗集合 \n        "),s("br"),t._v("\n        返航时间： \n        "),s("br"),t._v("\n        20：00统一于古北水镇停车场内集合返京。 【回程站点：第一站芍药居地铁站、第二站国贸地铁站】 \n        "),s("br"),t._v("\n        【长城脚下 红叶小镇】\n        "),s("br"),t._v("\n        ⊙多彩知秋，有你不一样的颜色，\n        "),s("br"),t._v("\n        ⊙虽然色彩略显单一不及春季的五彩斑斓，但是瓦墙巷陌红叶绕梁依旧浪漫的无可代替，\n        "),s("br"),t._v("\n        ⊙虽然活动略显陈静，不及夏日的热烈狂欢，但是丰富多彩种类多样依然体验的难以忘怀，留下的是最美好的回忆和久后依然的想念。\n        "),s("br"),t._v("\n        ⊙夜宿长城脚下，枕梦秋色时光，摇橹汤河湖畔，人如画中静好，信手漫步青巷，红叶映，慢生活。\n        "),s("br"),t._v("\n        ⊙景此一处，再见别念，古北归来不看红。\n    ")]),t._v(" "),s("img",{attrs:{src:i("HVG1")}}),t._v(" "),s("img",{attrs:{src:i("bk2T")}})])}]};var tt=i("VU/8")({},Y,!1,function(t){i("19+J")},null,null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"special-content"},[e("div",[e("div",{staticClass:"special-title"},[this._v("景点特色")]),this._v(" "),e("div",[this._v("古北水镇位于北京市密云县古北口镇，背靠中国最美、最险的司马台长城，坐拥鸳鸯湖水库，是京郊罕见的山水城结合的自然古村落。与河北交界，交通便捷，距 首都国际机场和北京市均在1个半小时左右车程，距离密云县和承德市约45分钟车程。整个景区是在原有的三个自然村落基础上整治改建而成，保存有精美的民国 风格的山地四合院建筑43万平方米，总占地面积9平方公里，目前，景区开放有民国街区，老营区，水街风情区，卧龙堡民俗文化区，汤河古寨区，民宿餐饮区 等，是典型的北方旅游度假小镇。有着千年历史的古北水镇，古朴、典雅，鳞次栉比的房屋，青石板的老街，悠长的胡同，无不展现了北方民国 时期的古镇风貌。即使是在这样寒冷的冬季，也依然可以感受到它的美丽。古镇内水网纵横，古老的汤河支流萦绕其间，古建、民宅依水而建，倘若在夏秋季节，坐 一坐乌篷船在绿水波涛之上，聆听船夫讲述着古镇的历史，想想就是那么的惬意。")])]),this._v(" "),e("div",[e("div",[e("img",{attrs:{src:i("aJPW")}}),this._v(" "),e("img",{attrs:{src:i("8RqP")}})])])])}]};var it=i("VU/8")({},et,!1,function(t){i("AMMu")},null,null).exports,st={data:function(){return{knowlist:[]}},created:function(){var t=this;h().then(function(e){var i=e.data.data.recommendList[0].children.infoData.knowData;t.knowlist=i})},computed:{abc:function(){return this.$store.state.a}},methods:{changea:function(t){this.$store.dispatch({type:"changeA",can:t})}}},nt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"know-content"},[i("ul",t._l(t.knowlist,function(e){return i("li",{key:e.id,staticClass:"know-item"},[i("div",{staticClass:"know-title"},[t._v(t._s(e.knowTitle))]),t._v(" "),t._l(e.knoeItem,function(e,s){return i("div",{key:s},[t._v(t._s(e))])})],2)})),t._v(" "),i("div",{on:{click:function(e){t.changea(100)}}},[t._v(t._s(t.abc))]),t._v(" "),i("div",[t._v(t._s(t.$store.getters.getA))])])},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("M2KP")},null,null).exports,ot=i("/ocq");s.a.use(ot.a);var rt=new ot.a({mode:"history",linkActiveClass:"more-nav-active",routes:[{path:"/",name:"Home",component:$},{path:"/more",name:"More",component:f},{path:"/user",name:"User",component:N},{path:"/search",name:"Search",component:I},{path:"/recommendList/:id",name:"Recommend",component:J,redirect:{name:"Money"},children:[{path:"money",name:"Money",component:K},{path:"trip",name:"Trip",component:tt},{path:"special",name:"Special",component:it},{path:"know",name:"Know",component:at}]},{path:"/weekendList/:id",name:"Weekend",component:F}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),lt="希腊";try{localStorage.nowCity&&(lt=localStorage.nowCity)}catch(t){}var ct={a:1,nowCity:lt},ut={changeNowCity:function(t,e){t.nowCity=e;try{localStorage.nowCity=e}catch(t){}},changeA:function(t,e){t.a=e.can}},dt=i("NYxO");s.a.use(dt.a);var vt=new dt.a.Store({state:ct,mutations:ut}),ht=i("Peep"),mt=i("3BeM");s.a.use(ht.a),s.a.use(mt.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:rt,store:vt,components:{App:a},template:"<App/>"})},Qwtw:function(t,e){},"UVm/":function(t,e){},VsR1:function(t,e){},aJPW:function(t,e,i){t.exports=i.p+"static/img/3.de08696.jpg"},bk2T:function(t,e,i){t.exports=i.p+"static/img/2.0c2079d.jpg"},j62E:function(t,e){},lM6o:function(t,e){},mzja:function(t,e,i){"use strict";var s=i("JkZY"),n=(s.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[s.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("6Erz")},null,null).exports,r=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:o},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("IwgP")},null,null);e.a=c.exports},o73W:function(t,e,i){t.exports=i.p+"static/img/2.4bc936e.jpg"},p9A2:function(t,e){},pOdR:function(t,e){},rLAy:function(t,e,i){"use strict";var s=i("xNvf"),n=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("8vzP")},null,null);e.a=o.exports},xbCe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ea485b40576729900407.js.map