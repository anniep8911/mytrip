(function(){"use strict";var t={3949:function(t,i,e){var n=e(9242),l=e(3396);function a(t,i,e,n,a,s){const o=(0,l.up)("Hdr"),r=(0,l.up)("Modal"),c=(0,l.up)("RouterView"),u=(0,l.up)("Ftr");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(o,{onInd:s.indFn,visitor:a.visitor,hello:a.hello},null,8,["onInd","visitor","hello"]),a.visible?((0,l.wg)(),(0,l.j4)(r,{key:0,onMsg:s.msgBB},null,8,["onMsg"])):(0,l.kq)("",!0),(0,l.Wm)(c,{visitor:a.visitor},null,8,["visitor"]),(0,l.Wm)(u)],64)}var s=e(7139);const o={class:"hdrWrap"},r={class:"nav"},c=["onClick"],u={class:"mnLeft"},d={key:0},v={key:1},m=(0,l._)("div",{class:"mnRight"},null,-1);function p(t,i,e,n,a,p){const _=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[(0,l._)("header",null,[(0,l._)("h1",{onClick:i[0]||(i[0]=t=>p.findIndex(0))},[(0,l.Wm)(_,{to:"./"},{default:(0,l.w5)((()=>[(0,l.Uk)("tripstore")])),_:1})]),(0,l._)("ul",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.liTitle,((t,i)=>((0,l.wg)(),(0,l.iD)("li",{onClick:t=>p.findIndex(i+1)},[(0,l.Wm)(_,{to:{path:"./cnt0"+(i+1)}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(t),1)])),_:2},1032,["to"])],8,c)))),256)),(0,l._)("li",{onClick:i[1]||(i[1]=(...t)=>p.resetCook&&p.resetCook(...t))},[(0,l.Wm)(_,{to:"./"},{default:(0,l.w5)((()=>[(0,l.Uk)("reset")])),_:1})])])])]),(0,l._)("div",{class:(0,s.C_)(["mnWrap","i"+a.ind])},[(0,l._)("main",null,[(0,l._)("div",u,[(0,l._)("h2",null,(0,s.zw)(a.datas[a.ind].title),1),a.now?((0,l.wg)(),(0,l.iD)("p",d,(0,s.zw)(e.visitor)+"님,"+(0,s.zw)(e.hello),1)):(0,l.kq)("",!0),a.now?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",v,(0,s.zw)(e.visitor)+"님,"+(0,s.zw)(a.msg),1))]),m])],2)],64)}var _=[{title:"Tripstore Your Journey",sbtitle:"",bgi:"bg01"},{title:"Let me know your schedule",sbtitle:"당신의 일정을 설정해주세요!",bgi:"bg02"},{title:"Are you ready for the trip?",sbtitle:"세부 일정을 계획해볼까요?",bgi:"bg03"},{title:"editor's pick",sbtitle:"에디터와 다른 여행자들의 리뷰를 만나보세요!",bgi:"bg04"},{title:"Have A Nice Trip!",sbtitle:"Have A Nice Trip!",bgi:"bg05"}],h={props:["visitor","hello"],data(){return{liTitle:["experience","plan","editor","my journey"],ind:0,datas:_,msg:"",now:!0}},methods:{resetCook(){document.cookie="nobody; path=/; expires = Tue, 19 Jan 2011 03:14:07 GMT",window.location.reload()},findIndex(t){switch(this.ind=t,this.now=!1,this.ind){case 0:this.msg="????",this.now=!0;break;case 1:this.msg="일정을 선택해주세요!";break;case 2:this.msg="세부 일정을 볼까요?";break;case 3:this.msg="에디터의 추천 여행지입니다.";break;case 4:this.msg="일정이 완료되었어요!";break;default:this.msg="기다려주세요!"}}}},g=e(89);const f=(0,g.Z)(h,[["render",p]]);var w=f;const b=(0,l.uE)('<div class="bnrWrap" data-v-19f1948d><div class="bnr" data-v-19f1948d><h2 data-v-19f1948d>our tripstore</h2><div class="btn" data-v-19f1948d>contact</div></div></div><div class="ftrWrap" data-v-19f1948d><footer data-v-19f1948d><div class="ftrLeft" data-v-19f1948d><div class="logo" data-v-19f1948d>tripStore</div><h4 data-v-19f1948d>Tripstroe Company. All rights reserved.</h4></div><div class="ftrRgiht" data-v-19f1948d><ul class="nav" data-v-19f1948d><li data-v-19f1948d>Company</li><li data-v-19f1948d>Careeres</li><li data-v-19f1948d>Press</li><li data-v-19f1948d>Foundation</li><li data-v-19f1948d>Private</li></ul><ul class="nav" data-v-19f1948d><li data-v-19f1948d>Get in Touch</li><li data-v-19f1948d>010-888-9999</li><li data-v-19f1948d>pjatopazz@gmail.com</li></ul></div></footer></div>',2);function k(t,i,e,n,l,a){return b}var x={};const q=(0,g.Z)(x,[["render",k],["__scopeId","data-v-19f1948d"]]);var y=q;const D={class:"lightBoxWrap"},C={class:"lightBox"},z=(0,l._)("h2",null,"당신의 이름을 입력해주세요!",-1);function W(t,i,e,a,s,o){return(0,l.wg)(),(0,l.iD)("div",D,[(0,l._)("div",C,[z,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"이름을 입력하세요!","onUpdate:modelValue":i[0]||(i[0]=t=>s.msg=t),onKeypress:i[1]||(i[1]=(0,n.D2)(((...t)=>o.upname&&o.upname(...t)),["enter"])),autofocus:"autofocus"},null,544),[[n.nr,s.msg]]),(0,l._)("div",{class:"btn",onClick:i[2]||(i[2]=(...t)=>o.upname&&o.upname(...t))},"제출하기")])])}var T={emits:["msg"],data(){return{msg:""}},methods:{upname(){this.$emit("msg",this.msg),document.cookie=`${this.msg}; path=/; expires = Tue, 19 Jan 2099 03:14:07 GMT`}}};const H=(0,g.Z)(T,[["render",W]]);var Y=H,L={name:"App",data(){return{visitor:"방문자",visible:!0,hello:"",ind:0,upup:0}},components:{Hdr:w,Ftr:y,Modal:Y},mounted(){this.$nextTick((function(){""==document.cookie||"nobody"==document.cookie?(this.visible=!0,this.hello="첫 방문이시네요!"):(this.visible=!1,this.visitor=document.cookie,this.hello="또 만났네요!")}))},methods:{msgBB(t){this.visitor=t,this.visible=!1,""==t&&(alert("이름을 입력해주세요!"),this.visitor="방문자",this.visible=!0)},indFn(t){this.ind=t},updaTT(t){this.upup=t,console.log(this.upup)}}};const I=(0,g.Z)(L,[["render",a]]);var K=I,O=e(3494),M=e(7749),U=e(8539),$=e(4551),j=e(2483);const G=t=>((0,l.dD)("data-v-d2398c10"),t=t(),(0,l.Cn)(),t),P={class:"cntWrap"},Z={class:"content cnt01"},B=G((()=>(0,l._)("p",null,"당신이 좋아하는 여행타입은? 카드에 커서를 올려보세요!",-1))),S={class:"texts"},A=G((()=>(0,l._)("div",{class:"cntWrap"},[(0,l._)("div",{class:"content cnt02"},[(0,l._)("header",null,[(0,l._)("h2",null,"welcome to our world!"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem obcaecati amet beatae tempora eligendi!"),(0,l._)("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!"),(0,l._)("div",{class:"btn"},"start")]),(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:"image"},"여행자 이미지")])])])],-1))),F={class:"cntWrap"},E={class:"content cnt03"},R=G((()=>(0,l._)("header",null,[(0,l._)("h2",null,"tripstore process"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet.")],-1))),J={class:"texts"},N=G((()=>(0,l._)("div",{class:"btn"},"start",-1)));function V(t,i,e,n,a,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",P,[(0,l._)("div",Z,[(0,l._)("header",null,[(0,l._)("h2",null,(0,s.zw)(e.visitor)+"님, 어떤 여행을 원하시나요?",1),B]),(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cont1TT,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},(0,s.zw)(t)+"이미지",3),(0,l._)("div",S,[(0,l._)("h3",null,(0,s.zw)(t),1)])])))),256))])])]),A,(0,l._)("div",F,[(0,l._)("div",E,[R,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cont2TT,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},"step0"+(0,s.zw)(i+1)+"이미지",3),(0,l._)("div",J,[(0,l._)("h3",null,"step0"+(0,s.zw)(i+1),1),(0,l._)("h5",null,(0,s.zw)(t.titie),1),(0,l._)("p",null,(0,s.zw)(t.exp),1)])])))),256))]),N])])],64)}var X={props:["visitor"],data(){return{cont1TT:["활동적인 액티비티","데일리 여행","패키지 여행"],cont2TT:[{titie:"여행의 시작부터 끝까지",exp:"교통, 숙박, 코스, 원하는 여행의 종류까지 트립스토어에서 처음부터 끝까지 함께 계획해주는 나만의 맞춤형 플랜!"},{titie:"막막한 경비까지 한번에",exp:"여행지의 부담스러운 입장료? 음식? 숙소와 렌트카? 걱정마세요. 트립스토어에서 연계된 할인 시스템을 이용할 수 있어요!"},{titie:"계획이 필요 없는 여행",exp:"추천 해주는 여행 코스를 이용해보세요. 우리가 다 계획해줄게요. 하지만 내가 찾던 바로 그 여행일거예요."}]}}};const Q=(0,g.Z)(X,[["render",V],["__scopeId","data-v-d2398c10"]]);var tt=Q;const it=t=>((0,l.dD)("data-v-5a4d4a98"),t=t(),(0,l.Cn)(),t),et={class:"bnrWrap"},nt={class:"banner bnr01"},lt={action:""},at=it((()=>(0,l._)("div",{class:"dates"},[(0,l._)("h3",null,"여행일정을 선택해주세요"),(0,l._)("input",{type:"date",value:"2022-10-19",min:"2022-10-01",max:"2023-12-31",name:"startDate"}),(0,l._)("input",{type:"date",value:"2022-10-19",min:"2022-10-01",max:"2023-12-31",name:"endDate"})],-1))),st={class:"sel"},ot=it((()=>(0,l._)("h3",null,"가고싶은 나라를 선택해주세요",-1))),rt=["value"],ct={class:"cntWrap",ref:"cntWr"},ut={class:"content cnt01"},dt=it((()=>(0,l._)("p",null,"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.",-1))),vt=it((()=>(0,l._)("p",null,"품었기 장식하는 가는 그러므로 황금시대다. 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. 피어나기 부패를 많이 이것을 것이다. 것은 새가 노년에게서 이것이다. 것은 인류의 황금시대를 풀이 수 하여도 길을 이것이야말로 것이다. 능히 없으면 갑 것이다.보라, 하여도 대중을 구할 하는 그러므로 이것이다. 속에 풀이 속잎나고, 위하여, 있는 이것이다. 귀는 가치를 봄바람을 되려니와, 이상은 그들은 구하기 우리는 청춘 아니다. 옷을 인생에 꾸며 풀이 있는가?",-1))),mt={class:"btns"},pt={class:"btn"},_t=it((()=>(0,l._)("div",{class:"cntWrap"},[(0,l._)("div",{class:"content cnt02"},[(0,l._)("header",null,[(0,l._)("h2",null,"이런 코스는 어떠세요?"),(0,l._)("p",null,"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다. ")]),(0,l._)("section",null,[(0,l._)("div",{class:"image"})])])],-1))),ht={class:"cntWrap"},gt={class:"content cnt03"},ft=it((()=>(0,l._)("header",null,[(0,l._)("h2",null,"당신을 위한 일정"),(0,l._)("h5",null," 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. ")],-1))),wt={class:"texts"},bt=it((()=>(0,l._)("ul",null,[(0,l._)("li",null,"역사를 싹이 광야에서 위하여"),(0,l._)("li",null,"청춘을 가진 커다란 그것을 것이다."),(0,l._)("li",null,"는 이것이다. 귀는 가치를 봄바람을")],-1)));function kt(t,i,e,a,o,r){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",et,[(0,l._)("div",nt,[(0,l._)("form",lt,[at,(0,l._)("div",st,[ot,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":i[0]||(i[0]=t=>o.selected=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.national,((t,i)=>((0,l.wg)(),(0,l.iD)("option",{value:i},(0,s.zw)(t),9,rt)))),256))],512),[[n.bM,o.selected]])])])])]),(0,l._)("div",ct,[(0,l._)("div",ut,[(0,l._)("header",null,[(0,l._)("h2",null,(0,s.zw)(e.visitor)+"님을 위한 추천여행!",1),dt,vt,(0,l._)("div",mt,[(0,l._)("div",pt,[(0,l.Wm)(c,{to:{path:"./cnt04",query:{name:o.selected}}},{default:(0,l.w5)((()=>[(0,l.Uk)("view more")])),_:1},8,["to"])]),(0,l._)("div",{class:"btn",onClick:i[1]||(i[1]=(...t)=>r.totop&&r.totop(...t))},"go back")])]),(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","add"+o.selected])},null,2)])])])],512),_t,(0,l._)("div",ht,[(0,l._)("div",gt,[ft,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.dateTr,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},null,2),(0,l._)("div",wt,[(0,l._)("h3",null,(0,s.zw)(t),1),bt])])))),256))])])])],64)}var xt={props:["visitor"],data(){return{dateTr:["1day course","2day course","3day course"],checkAge:0,selected:"",national:["아시아","유럽","오세아니아"]}},methods:{totop(){window.scrollTo({top:0,behavior:"smooth"})}},watch:{selected(){window.scrollTo({top:this.$refs.cntWr.offsetTop,behavior:"smooth"})}}};const qt=(0,g.Z)(xt,[["render",kt],["__scopeId","data-v-5a4d4a98"]]);var yt=qt;const Dt=t=>((0,l.dD)("data-v-8b8534ac"),t=t(),(0,l.Cn)(),t),Ct={class:"bnrWrap"},zt={class:"banner bnr01"},Wt={class:"menu"},Tt={class:"texts"},Ht={class:"cntWrap"},Yt={class:"content cnt01"},Lt=Dt((()=>(0,l._)("header",null,[(0,l._)("h2",null,"traffic"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet."),(0,l._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde sit dolore officiis cumque fugiat assumenda itaque voluptates. Perspiciatis vero itaque dolores iure qui iste impedit? Perferendis voluptatem ut labore.")],-1))),It={class:"texts"},Kt=(0,l.uE)('<div class="bnrWrap" data-v-8b8534ac><div class="banner bnr02" data-v-8b8534ac><div class="image" data-v-8b8534ac><div class="ovrGrid" data-v-8b8534ac></div></div><div class="texts" data-v-8b8534ac><div class="txtGr" data-v-8b8534ac><h2 data-v-8b8534ac>sights</h2><h5 data-v-8b8534ac>local sights name here</h5><p data-v-8b8534ac>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p></div><div class="btn" data-v-8b8534ac></div></div></div></div>',1),Ot={class:"cntWrap"},Mt={class:"content cnt02"},Ut=Dt((()=>(0,l._)("header",null,[(0,l._)("h2",null,"activities"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet consectetur.")],-1))),$t={class:"texts"},jt=Dt((()=>(0,l._)("h5",null,"Lorem ipsum dolor sit amet consectetur.",-1))),Gt=Dt((()=>(0,l._)("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.",-1))),Pt=Dt((()=>(0,l._)("div",{class:"btn"},"view more",-1))),Zt={class:"cntWrap"},Bt={class:"content cnt03"},St=Dt((()=>(0,l._)("header",null,[(0,l._)("h2",null,"room select"),(0,l._)("h5",null,"Lorem ipsum dolor sit amet.")],-1))),At=Dt((()=>(0,l._)("div",{class:"artLeft"},[(0,l._)("article",null,[(0,l._)("div",{class:"image i1"}),(0,l._)("div",{class:"texts"},[(0,l._)("h3",null,"hotel"),(0,l._)("h5",null,"Lorem, ipsum dolor."),(0,l._)("h6",null,"예약현황: 70%"),(0,l._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, neque? Obcaecati blanditiis, sed veniam exercitationem doloribus illum in ea inventore amet vero dicta officia optio harum aliquid labore voluptatem velit.")])])],-1))),Ft={class:"artRight"},Et={class:"texts"},Rt=Dt((()=>(0,l._)("h5",null,"excepturi accusamus ",-1))),Jt=Dt((()=>(0,l._)("h6",null,"예약현황:70%",-1))),Nt=Dt((()=>(0,l._)("div",{class:"btn"},"view more",-1)));function Vt(t,i,e,n,a,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",Ct,[(0,l._)("div",zt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.trffic,((t,i)=>((0,l.wg)(),(0,l.iD)("div",Wt,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},null,2),(0,l._)("div",Tt,[(0,l._)("h3",null,(0,s.zw)(t),1)])])))),256))])]),(0,l._)("div",Ht,[(0,l._)("div",Yt,[Lt,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.trffic2,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},null,2),(0,l._)("div",It,[(0,l._)("h3",null,(0,s.zw)(t),1)])])))),256))])])]),Kt,(0,l._)("div",Ot,[(0,l._)("div",Mt,[Ut,(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.activities,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},null,2),(0,l._)("div",$t,[(0,l._)("h3",null,(0,s.zw)(t),1),jt,Gt])])))),256))]),Pt])]),(0,l._)("div",Zt,[(0,l._)("div",Bt,[St,(0,l._)("section",null,[At,(0,l._)("div",Ft,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.stay,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},null,2),(0,l._)("div",Et,[(0,l._)("h3",null,(0,s.zw)(t),1),Rt,Jt])])))),256))])]),Nt])])],64)}var Xt={props:["visitor"],data(){return{trffic:["traffic","rooms","sights","activities"],trffic2:["uber","rental cars","kakao taxi"],activities:["water leisure","para gliding","hiking"],stay:["glamping","guest house","rental room","hostel"]}}};const Qt=(0,g.Z)(Xt,[["render",Vt],["__scopeId","data-v-8b8534ac"]]);var ti=Qt;const ii=t=>((0,l.dD)("data-v-12e3d464"),t=t(),(0,l.Cn)(),t),ei={class:"cntWrap"},ni={class:"content cnt01"},li=ii((()=>(0,l._)("h2",null,"여행자들의 이야기",-1))),ai={class:"imgGr"},si={class:"texts"},oi={class:"cntWrap"},ri={class:"content cnt02"},ci=ii((()=>(0,l._)("header",null,[(0,l._)("h2",null,"여행지 랜덤추천"),(0,l._)("p",null,"로고에 마우스를 올려보세요!")],-1))),ui={class:"artGr"},di={class:"texts"};function vi(t,i,e,n,a,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ei,[(0,l._)("div",ni,[(0,l._)("header",null,[li,(0,l._)("p",null,(0,s.zw)(a.hangle),1)]),(0,l._)("section",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.title,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",ai,[(0,l._)("div",{class:(0,s.C_)(["image","i"+i])},"타이틀이미지",2),(0,l._)("div",{class:(0,s.C_)(["image","i"+i+"-1"])},"서브이미지",2)]),(0,l._)("div",si,[(0,l._)("h3",null,(0,s.zw)(t.loc),1),(0,l._)("p",null,(0,s.zw)(t.exp),1),(0,l._)("p",null,(0,s.zw)(t.hash),1)])])))),256))])])]),(0,l._)("div",oi,[(0,l._)("div",ri,[ci,(0,l._)("section",null,[(0,l._)("div",ui,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.tiCnt02,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+a.cnt[i]])},null,2),(0,l._)("div",di,[(0,l._)("h3",null,(0,s.zw)(a.tiCnt02[i][a.cnt[i]]),1),(0,l._)("p",null,(0,s.zw)(a.hangle),1)])])))),256))])]),(0,l._)("div",{class:"btnLogo",onMouseenter:i[0]||(i[0]=(...t)=>o.fn&&o.fn(...t)),onMouseleave:i[1]||(i[1]=(...t)=>o.fn2&&o.fn2(...t))},"로고",32)])])],64)}var mi={data(){return{title:[{loc:"마드리드 왕궁",exp:"동쪽에 있어 오리엔테 궁전(Palacio de Oriente)이라고 불린다. 에스파냐 왕의 공식 거처이자 에스파냐 왕실의 상징인 곳으로, 9세기에 이슬람교도가 당시 에스파냐의 수도였던 톨레도로부터 마드리드를 방어하기 위한 목적으로 성채를 세운 자리에 있다. 그리스도교가 마드리드를 탈환한 후 이슬람교도의 성채를 왕궁으로 사용하였지만 1734년 크리스마스 이브에 화재로 소실되었다.",hash:"#오리엔테궁전 #에스파냐 #마드리드"},{loc:"레티로공원",exp:"둘레가 4km에 달하는 광대한 공원. 마드리드에서 가장 규모가 클 뿐만 아니라 역사적, 예술적으로도 중요한 가치를 지닌 곳이다. 원래는 스페인 최대의 번영기를 이끈 펠리페 2세가 자신의 두 번째 부인이었던 영국의 튜더 메리 여왕을 위해 지은 부엔 레티로 별궁의 정원이었다.",hash:"#펠레페2세 #레티로별궁 #레티로정원"},{loc:"아크로티리 유적지",exp:"약 20헥타르의 넓이에 달하는, 키클라데스 제도의 테라 섬(산토리니라는 이름으로도 알려져 있다)에 있는 아크로티리는 인상적인 모습으로 건설되었던 청동기 시대의 중요한 도시의 유적이다. 사람이 살기 시작한 것은 후기 신석기 시대부터였으나, 이곳이 대도시로 발전해 나간 것은 기원전 2천 년부터였다. 이 유적은 아마 화산 폭발로 인해 극적으로 파괴되었다는 사실 때문에 가장 잘 알려져 있을 텐데, 이 섬의 모양에서도 화산 폭발의 결과가 보인다.",hash:"#테라섬 #산토리니 #화산폭발섬"},{loc:"카마리해변",exp:"카마리 해변은 산토리니 섬에서 가장 인기가 높은 해변이다. 고대 티라산을 끼고 있으며 검은 모래가 특징인 이곳은 분위기가 아늑하고 해수욕하기에 좋아 페리사 해변에 비해 사람들이 더 많이 몰려든다. 주변에는 전통식, 수블라키 등을 즐길 수 있는 레스토랑, 타베르나 등이 매우 많아 관광객들이 선호한다.",hash:"#산토리니섬 #타베르나 #페리탑승"},{loc:"겨울의 한라산",exp:"제주도는 제3기 말∼제4기 초 우리나라의 지각의 역사에서 비교적 최근에 형성된 화산섬으로 수차례의 화산활동에 의해 용암이 분출되며 형성되었다. 한라산은 제주도의 대부분을 차지하고 있으며 제주도 전체가 거대한 한라산의 연속체로 보이기도 한다. 전체적으로 경사가 완만한 순상화산의 형태를 띠고 있으나 정상부에는 경사가 급한 종상화산이 위치하는 이중화산의 형태가 나타난다. 대부분 현무암으로 이루어져 있으며, 제주도 중앙에서 산줄기가 동서로 뻗어 있다. 남쪽은 경사가 심한 반면 북쪽은 완만하고 동서방향으로는 비교적 지대가 높고 평탄하다. 정상에는 둘레 약 3㎞, 지름 500m",hash:"#어승목 코스 #영실코스 #성판악코스"},{loc:"애월읍 핫플",exp:"북쪽 저지대에는 넓은 평지가 펼쳐져 있으며, 동귀리(東貴里)·귀일리(貴日里)·구엄리(舊嚴里) 등의 해안 저지대에는 논도 발달하였다. 주요농산물로는 쌀·보리를 비롯하여 고구마·콩·유채·채소 등을 생산하고 있으며, 감귤재배가 활발하다. 넓은 산간지역을 이용한 축산업도 활발하여 시온목장 등 기업목장이 이루어지고 소·돼지·말 등을 사육한다. 애월항은 제주항의 보조항구로서의 구실을 맡고 있으며, 제주시와 동일생활권을 이루고 있다. 교통은 제주시의 시내버스가 운행되고 있어 편리하다.",hash:"#쌀보리카페 #감귤체험 #뚜벅이여행"}],tiCnt02:[["튀르키에","산토리나","맨체스터","프라하","할슈타트","도쿄","서울","에카데펙데코렐","부다페스트","빈"],["과달라하라","산티아고","후아레스","에카데펙데코렐","티후아나","치와와","칸쿤","밴쿠버","에드먼턴","오타와"],["리우데자네이루","마나우스","벨루오리존치","브라질리아","사우바도르","산토스","상파울루","쿠리치바","포르투알레그리","쿠바"]],hangle:"불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.",cnt:[0,1,2],state:0}},methods:{fn(){this.state=setInterval((()=>{for(var t=0;t<3;t++)this.cnt[t]=parseInt(10*Math.random())}),100)},fn2(){clearInterval(this.state)}}};const pi=(0,g.Z)(mi,[["render",vi],["__scopeId","data-v-12e3d464"]]);var _i=pi;const hi=t=>((0,l.dD)("data-v-35c4d35e"),t=t(),(0,l.Cn)(),t),gi={class:"cntWrap"},fi={class:"content cnt01"},wi={class:"texts"},bi={key:0},ki=hi((()=>(0,l._)("p",null,"크레타 섬을 제외하고 키클라데스 제도 최남단에 있는 그리스 에게 해의 섬이다. 이 섬의 정식 명칭은 티라(Θήρα)로 또다른 명칭인 산토리니(Σαντορίνη)는 라틴 제국 시절 에게 해 일대를 차지한 베네치아인들이 섬에 있던 성 이레네를 모신 성당에서 따와 이 섬을 '산타 이리니(Santa Irini)'라고 부른 것에서 유래한 것이다. 그 후 수세기 동안 이 섬은 산토리니라고 불렸고 그리스가 독립한 이후 이 섬은 과거에 쓰이던 '티라'라는 이름을 되찾았지만 여전히 전세계적으로는 '산토리니'라는 이름으로 유명하다.",-1))),xi=hi((()=>(0,l._)("p",null," 전 세계적으로는 은근히 아틀란티스 설과 관련지어서 유명세를 탔으며, 미코노스와 함께 키클라데스 제도에서 가장 유명한 관광지 중 하나이다. 그리스의 상징색인 청색과 흰색으로 지어진, 콘크리트가 만든 인공미와 기묘하게 어우러지는 자연미가 매우 인상적인 섬.[2]",-1))),qi=hi((()=>(0,l._)("h6",null,"3박 4일 일정",-1))),yi=hi((()=>(0,l._)("p",null,"total 320,000원",-1))),Di={class:"btns"},Ci=hi((()=>(0,l._)("div",{class:"btn"},"결제하기",-1))),zi={class:"btn"},Wi={class:"cntWrap"},Ti={class:"content cnt02"},Hi=hi((()=>(0,l._)("h2",null,"activities",-1))),Yi={class:"btns"},Li={class:"texts"},Ii={class:"bnrWrap"},Ki={class:"banner bnr01"},Oi={class:"images"},Mi={class:"texts"},Ui={class:"text"};function $i(t,i,e,n,a,o){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",gi,[(0,l._)("div",fi,[(0,l._)("section",null,[(0,l._)("article",null,[(0,l._)("div",{class:(0,s.C_)(["image","i"+t.$route.query.name])},null,2),(0,l._)("div",wi,[t.$route.query.name>0?((0,l.wg)(),(0,l.iD)("h3",bi,(0,s.zw)(e.visitor)+"님, 일정이 완료 되었어요!",1)):(0,l.kq)("",!0),void 0==t.$route.query.name||""==t.$route.query.name?((0,l.wg)(),(0,l.iD)("h3",{key:1,onClick:i[0]||(i[0]=(...t)=>o.totop&&o.totop(...t))},[(0,l.Wm)(r,{to:"./cnt01",style:{color:"blue"}},{default:(0,l.w5)((()=>[(0,l.Uk)("여기")])),_:1}),(0,l.Uk)("로 가서 일정을 선택해주세요!")])):(0,l.kq)("",!0),(0,l._)("h5",null,"추천여행지 : "+(0,s.zw)(a.tra[t.$route.query.name]),1),ki,xi,qi,yi,(0,l._)("div",Di,[Ci,(0,l._)("div",zi,[(0,l.Wm)(r,{to:"./cnt01"},{default:(0,l.w5)((()=>[(0,l.Uk)("다시 선택하기")])),_:1})])])])])])])]),(0,l._)("div",Wi,[(0,l._)("div",Ti,[(0,l._)("header",null,[Hi,(0,l._)("h5",null,(0,s.zw)(a.tra[t.$route.query.name])+"에서 할만한 활동이에요!",1),(0,l._)("div",Yi,[(0,l._)("div",{class:(0,s.C_)(["left",a.nomore]),onClick:i[1]||(i[1]=t=>o.prev())},null,2),(0,l._)("div",{class:(0,s.C_)(["right",a.nomore2]),onClick:i[2]||(i[2]=t=>o.next())},null,2)])]),(0,l._)("section",null,[(0,l._)("div",{class:"artGr",ref:"artGr",style:(0,s.j5)({transform:a.tranon})},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.venture,((t,i)=>((0,l.wg)(),(0,l.iD)("article",null,[(0,l._)("div",Li,[(0,l._)("h5",null,"0"+(0,s.zw)(i+1),1),(0,l._)("h3",null,(0,s.zw)(t),1)]),(0,l._)("div",{class:(0,s.C_)(["image","i"+(i+1)])},(0,s.zw)(t)+"이미지",3)])))),256))],4)])])]),(0,l._)("div",Ii,[(0,l._)("div",Ki,[(0,l._)("div",Oi,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(4,(t=>(0,l._)("div",{class:(0,s.C_)(["image","i"+t])},null,2))),64))]),(0,l._)("div",Mi,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.leisure,(t=>((0,l.wg)(),(0,l.iD)("div",Ui,[(0,l._)("h3",null,(0,s.zw)(t.date),1),(0,l._)("p",null,(0,s.zw)(t.exp),1)])))),256))])])])],64)}var ji=e(3412),Gi={components:{Carousel:ji.Carousel,Slide:ji.Slide},props:["visitor"],data(){return{venture:["para gliding","sky diving","fighting","boxing","swimming","acrobatic"],leisure:[{date:"01 day(7/21)",exp:"첫째날 시차적응을 위해 현지 당근마켓에서 일자리를 구해드려요!것이 천하를 것은 그와 못할 방지하는 말이다. 하였으며, 트고, 영락과 남는 든 새 행복스럽고 기관과 것이다.  "},{date:"02 day(7/22)",exp:"주짓수 세계챔피언과 스파링체험 고동을 그들을 자신과 오직 봄날의 뛰노는 심장의 이상은 눈이 칼이다. 인간의 영원히 인간의 자신과 청춘이 소리다.이것은 피고, 이것이다."},{date:"03 day(7/23)",exp:"자유롭게 하늘에서 점프해요  노래하며 살 우리 천고에 무엇이 보라. 못하다 보이는 물방아 같으며, 황금시대를 것이다. 어디 이것은 인류의 불어 청춘의 곳이 사막이다."}],cnt:0,tranon:"translateX(0%)",nomore:"",nomore2:"",settings:{focusOnSelect:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,speed:500},tra:["부산","산토리니","오클랜드"]}},methods:{prev(){this.cnt++,this.nomore2="",this.cnt>=2&&(this.cnt=2,this.nomore="nomore"),this.tranon=`translateX(${-16.6*this.cnt}%)`,console.log(this.$route.query.name)},next(){this.cnt--,this.nomore="",this.cnt<=0&&(this.cnt=0,this.nomore2="nomore"),this.tranon=`translateX(${-16.6*this.cnt}%)`},totop(){window.scrollTo({top:0,behavior:"smooth"})}}};const Pi=(0,g.Z)(Gi,[["render",$i],["__scopeId","data-v-35c4d35e"]]);var Zi=Pi;const Bi=[{path:"/newtrip",component:tt,name:"main"},{path:"/newtrip/cnt01",component:yt,name:"content01"},{path:"/newtrip/cnt02",component:ti,name:"content02"},{path:"/newtrip/cnt03",component:_i,name:"content03"},{path:"/newtrip/cnt04",component:Zi,name:"content04",props:!0}],Si=(0,j.p7)({history:(0,j.PO)(),routes:Bi});var Ai=Si;O.vI.add($.mdU,U.BC0),(0,n.ri)(K).use(Ai).component("font-awesome-icon",M.GN).mount("#app")}},i={};function e(n){var l=i[n];if(void 0!==l)return l.exports;var a=i[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(i,n,l,a){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],l=t[u][1],a=t[u][2];for(var o=!0,r=0;r<n.length;r++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[r])}))?n.splice(r--,1):(o=!1,a<s&&(s=a));if(o){t.splice(u--,1);var c=l();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,l,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var l,a,s=n[0],o=n[1],r=n[2],c=0;if(s.some((function(i){return 0!==t[i]}))){for(l in o)e.o(o,l)&&(e.m[l]=o[l]);if(r)var u=r(e)}for(i&&i(n);c<s.length;c++)a=s[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},n=self["webpackChunkmytrip"]=self["webpackChunkmytrip"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(3949)}));n=e.O(n)})();
//# sourceMappingURL=app.f2157a32.js.map