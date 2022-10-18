<template lang="">
    <div class="cntWrap">
        <div class="content cnt01">
            <header>
                <h2>여행자들의 이야기</h2>
                <p>{{hangle}}</p>
            </header>
            <section>
                <article v-for="(tt,ind) in title">
                    <div class="imgGr">
                        <div class="image" v-bind:class="'i'+ind">타이틀이미지</div>
                        <div class="image" v-bind:class="'i'+ind+'-1'">서브이미지</div>
                    </div>
                    <div class="texts">
                        <h3>{{tt.loc}}</h3>
                        <p>{{tt.exp}}</p>
                        <p>{{tt.hash}}</p>
                    </div>
                </article>
            </section>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt02">
            <header>
                <h2>여행지 랜덤추천</h2>
                <p>로고에 마우스를 올려보세요!</p>
            </header>
            <section>
                <div class="artGr">
                    <article v-for="(t,i) in tiCnt02">
                        <div class="image" :class="'i'+cnt[i]"></div>
                        <div class="texts">
                            <h3>{{tiCnt02[i][cnt[i]]}}</h3>
                            <p>{{hangle}}</p>
                        </div>
                    </article>
                </div>
            </section>
            <div class="btnLogo" @mouseenter="fn" @mouseleave="fn2" >로고</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:[
                {loc:'마드리드 왕궁', exp:'동쪽에 있어 오리엔테 궁전(Palacio de Oriente)이라고 불린다. 에스파냐 왕의 공식 거처이자 에스파냐 왕실의 상징인 곳으로, 9세기에 이슬람교도가 당시 에스파냐의 수도였던 톨레도로부터 마드리드를 방어하기 위한 목적으로 성채를 세운 자리에 있다. 그리스도교가 마드리드를 탈환한 후 이슬람교도의 성채를 왕궁으로 사용하였지만 1734년 크리스마스 이브에 화재로 소실되었다.',hash:'#오리엔테궁전 #에스파냐 #마드리드'},
                {loc:'레티로공원',exp:'둘레가 4km에 달하는 광대한 공원. 마드리드에서 가장 규모가 클 뿐만 아니라 역사적, 예술적으로도 중요한 가치를 지닌 곳이다. 원래는 스페인 최대의 번영기를 이끈 펠리페 2세가 자신의 두 번째 부인이었던 영국의 튜더 메리 여왕을 위해 지은 부엔 레티로 별궁의 정원이었다.',hash:'#펠레페2세 #레티로별궁 #레티로정원'},
                {loc:'아크로티리 유적지',exp:'약 20헥타르의 넓이에 달하는, 키클라데스 제도의 테라 섬(산토리니라는 이름으로도 알려져 있다)에 있는 아크로티리는 인상적인 모습으로 건설되었던 청동기 시대의 중요한 도시의 유적이다. 사람이 살기 시작한 것은 후기 신석기 시대부터였으나, 이곳이 대도시로 발전해 나간 것은 기원전 2천 년부터였다. 이 유적은 아마 화산 폭발로 인해 극적으로 파괴되었다는 사실 때문에 가장 잘 알려져 있을 텐데, 이 섬의 모양에서도 화산 폭발의 결과가 보인다.',hash:'#테라섬 #산토리니 #화산폭발섬'},
                {loc:'카마리해변',exp:'카마리 해변은 산토리니 섬에서 가장 인기가 높은 해변이다. 고대 티라산을 끼고 있으며 검은 모래가 특징인 이곳은 분위기가 아늑하고 해수욕하기에 좋아 페리사 해변에 비해 사람들이 더 많이 몰려든다. 주변에는 전통식, 수블라키 등을 즐길 수 있는 레스토랑, 타베르나 등이 매우 많아 관광객들이 선호한다.', hash:'#산토리니섬 #타베르나 #페리탑승'}, 
                {loc:'겨울의 한라산',exp:'제주도는 제3기 말∼제4기 초 우리나라의 지각의 역사에서 비교적 최근에 형성된 화산섬으로 수차례의 화산활동에 의해 용암이 분출되며 형성되었다. 한라산은 제주도의 대부분을 차지하고 있으며 제주도 전체가 거대한 한라산의 연속체로 보이기도 한다. 전체적으로 경사가 완만한 순상화산의 형태를 띠고 있으나 정상부에는 경사가 급한 종상화산이 위치하는 이중화산의 형태가 나타난다. 대부분 현무암으로 이루어져 있으며, 제주도 중앙에서 산줄기가 동서로 뻗어 있다. 남쪽은 경사가 심한 반면 북쪽은 완만하고 동서방향으로는 비교적 지대가 높고 평탄하다. 정상에는 둘레 약 3㎞, 지름 500m',hash:'#어승목 코스 #영실코스 #성판악코스'}, 
                {loc:'애월읍 핫플',exp:'북쪽 저지대에는 넓은 평지가 펼쳐져 있으며, 동귀리(東貴里)·귀일리(貴日里)·구엄리(舊嚴里) 등의 해안 저지대에는 논도 발달하였다. 주요농산물로는 쌀·보리를 비롯하여 고구마·콩·유채·채소 등을 생산하고 있으며, 감귤재배가 활발하다. 넓은 산간지역을 이용한 축산업도 활발하여 시온목장 등 기업목장이 이루어지고 소·돼지·말 등을 사육한다. 애월항은 제주항의 보조항구로서의 구실을 맡고 있으며, 제주시와 동일생활권을 이루고 있다. 교통은 제주시의 시내버스가 운행되고 있어 편리하다.' ,hash:'#쌀보리카페 #감귤체험 #뚜벅이여행'}
            ],
            tiCnt02:[['튀르키에','산토리나','맨체스터','프라하','할슈타트','도쿄','서울','에카데펙데코렐','부다페스트','빈'],['과달라하라','산티아고','후아레스','에카데펙데코렐','티후아나','치와와','칸쿤','밴쿠버','에드먼턴','오타와'],['리우데자네이루','마나우스','벨루오리존치','브라질리아','사우바도르','산토스','상파울루','쿠리치바','포르투알레그리','쿠바']],
            hangle:'불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.',
            cnt:[0,1,2],
            state:0,
        }
    },
    methods:{
        fn(){
            this.state = setInterval(()=>{ 
                for(var i=0; i<3;i++){
                    this.cnt[i]= parseInt(Math.random()*10);
                }
            },100)

        },
        fn2(){
           clearInterval(this.state);   
        },
    }
}
</script>
<style lang="scss" scoped>
    .cntWrap{
        .content{
            &.cnt01{
                header{
                    text-align: center;
                    p{
                        height: min(1rem, 40px);
                        font-size: min(1.3em, 13px);
                        width: 50%;
                        margin-left:auto;
                        margin-right:auto;
                    }
                }
                section{
                    article{
                        .image:first-child{
                            @for $i from 0 through 5{
                                &.i#{$i}{
                                    background-image: url('../assets/sub03_cnt01_i#{$i+1}.jpg');
                                }
                            }
                        }
                        .texts{
                            width: 35%;
                        }
                        &:nth-child(1),&:nth-child(5){
                            direction: rtl;
                        }
                        &:nth-child(odd){
                            margin-top: min(2rem,80px);
                            position: relative;
                            .imgGr{
                                width: max(calc((100vw - 1080px) + 100%),calc((100vw - 80vw) + 100%));
                                direction: ltr;
                            }
                            .image:first-of-type{
                                width: 90%;
                                height: min(18rem, 720px);
                            }
                            .image:last-of-type{
                                display: none;
                            }
                            .texts{
                                position: absolute;
                                height: min(8rem,320px);
                                margin: auto;
                                top: 0;bottom: 0;right: 0;
                                background-color: #fff;
                                box-shadow: 2px 2px 4px #333;
                                padding: 20px;
                                direction: ltr;
                                p{
                                    height: min(3rem, 120px);
                                    overflow: hidden;
                                    line-height: min(2em,20px);
                                    font-size: min(1.4em, 14px);
                                }
                            }
                        }
                        &:nth-child(3){
                            .imgGr{
                                direction: rtl;
                            }
                            .texts{
                                left: 0;
                                right: auto;
                            }
                        }

                        &:nth-child(even){
                            margin-top: min(0.5rem,20px);
                            display: flex;
                          .imgGr{
                            display: flex;
                            justify-content: space-between;
                            width: 65%;
                            .image{
                                width: calc(50% - 5px);
                                height: min(8rem, 320px);
                                &:last-child{
                                    &.i1-1{
                                        background-image: url('../assets/sub03_cnt01_i1-1.jpg');
                                    }
                                    &.i3-1{
                                        background-image: url('../assets/sub03_cnt01_i2-1.jpg');
                                    }
                                    &.i5-1{
                                        background-image: url('../assets/sub03_cnt01_i3-1.jpg');
                                    }
                                }
                            }
                          }
                          .texts{
                            width: 35%;
                            padding: 20px;
                            p{
                                height: min(2rem, 80px);
                                overflow: hidden;
                            }
                          }
                        }
                    }
                }
            }
            &.cnt02{
                position: relative;
                section{
                    width: 100%;
                    .artGr{
                        width: max(calc((100vw - 1080px) / 2 + 100%),10vw + 100%);
                        background-color: #333;
                        display: flex;
                        margin-left: 10%;
                        article{
                            width: calc(100% / 4);
                            max-width: 430px;
                            position: relative;
                          
                            .image{
                                height: min(14rem,560px);
                                @for $i from 0 through 9{
                                    &.i#{$i}{
                                        background-image: url('../assets/sub03_cnt02_i#{$i+1}.jpg');
                                    }
                                }
                            }
                            .texts{
                                position: absolute;
                                bottom: 0;
                                color: #fff;
                                padding: min(1rem, 40px);
                                p{
                                    height: min(4rem,160px);
                                    overflow: hidden;
                                }
                                
                            }
                        }
                    }
                }
                .btnLogo{
                    background-image: url('../assets/logo_bk.png');
                    width: 60px;
                    height: 60px;
                    background-repeat: no-repeat;
                    background-position: left top;
                    color: transparent;
                    position: absolute;
                    margin: auto;
                    top: 0;left: 0;bottom: 0;
                    cursor: pointer;
                    transition: transform 0.5s;
                    &:hover{
                        animation: tn 0.5s linear infinite;
                    }
                    @keyframes tn {
                        0%{
                            transform: rotate(0deg);
                        }100%{
                            transform: rotate(360deg);
                        }
                    }
                }
            }
        }
    }
</style>