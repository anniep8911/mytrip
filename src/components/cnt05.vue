<template lang="">
    <div class="cntWrap">
        <div class="content cnt01">
            <section>
                <article>
                    <div class="image" :class="'i'+$route.query.name"></div>
                    <div class="texts">
                        <h3 v-if="$route.query.name>=0">{{visitor}}님, 일정이 완료 되었어요!</h3>
                        <h3 v-if="$route.query.name==undefined || $route.query.name==''" @click="totop"> <router-link to="./cnt01" style="color:blue;">여기</router-link>로 가서 일정을 선택해주세요!</h3>
                        <h5>추천여행지 : {{tra[$route.query.name]}}</h5>
                        <p>크레타 섬을 제외하고 키클라데스 제도 최남단에 있는 그리스 에게 해의 섬이다. 이 섬의 정식 명칭은 티라(Θήρα)로 또다른 명칭인 산토리니(Σαντορίνη)는 라틴 제국 시절 에게 해 일대를 차지한 베네치아인들이 섬에 있던 성 이레네를 모신 성당에서 따와 이 섬을 '산타 이리니(Santa Irini)'라고 부른 것에서 유래한 것이다. 그 후 수세기 동안 이 섬은 산토리니라고 불렸고 그리스가 독립한 이후 이 섬은 과거에 쓰이던 '티라'라는 이름을 되찾았지만 여전히 전세계적으로는 '산토리니'라는 이름으로 유명하다.</p>
                        <p>
                        전 세계적으로는 은근히 아틀란티스 설과 관련지어서 유명세를 탔으며, 미코노스와 함께 키클라데스 제도에서 가장 유명한 관광지 중 하나이다. 그리스의 상징색인 청색과 흰색으로 지어진, 콘크리트가 만든 인공미와 기묘하게 어우러지는 자연미가 매우 인상적인 섬.[2]</p>
                        <h6>3박 4일 일정</h6>
                        <p>total 320,000원</p>
                        <div class="btns">
                            <div class="btn" @click="pay">결제하기</div>
                            <div class="btn" @click="totop"><router-link to="./cnt01">다시 선택하기</router-link></div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt02">
            <header>
                <h2>activities</h2>
                <h5>{{tra[$route.query.name]}}에서 할만한 활동이에요!</h5>
                <div class="btns">
                    <div class="left" @click="prev()" :class="nomore"></div>
                    <div class="right" @click="next()" :class="nomore2"></div>
                </div>
            </header>
            <section>
                <div class="artGr" ref="artGr" :style="{transform:tranon}">
                    <article v-for="(t,i) in venture">
                        <div class="texts">
                            <h5>0{{i+1}}</h5>
                            <h3>{{t}}</h3>
                        </div>
                        <div class="image" :class="'i'+(i+1)">{{t}}이미지</div>
                    </article>
                </div>
            </section>
        </div>
    </div>
    <div class="bnrWrap">
        <div class="banner bnr01">
            <div class="images">
                <div class="image" v-for="i in 4" :class="'i'+i"></div>
            </div>
            <div class="texts">
                <div class="text" v-for="t in leisure">
                    <h3>{{t.date}}</h3>
                    <p>{{t.exp}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {Carousel, Slide},
    props:['visitor'],
    data(){
        return{
            venture:['para gliding','sky diving','fighting','boxing','swimming','acrobatic'],
            leisure:[{date:'01 day(7/21)',exp:'첫째날 시차적응을 위해 현지 당근마켓에서 일자리를 구해드려요!것이 천하를 것은 그와 못할 방지하는 말이다. 하였으며, 트고, 영락과 남는 든 새 행복스럽고 기관과 것이다.  '},{date:'02 day(7/22)',exp:'주짓수 세계챔피언과 스파링체험 고동을 그들을 자신과 오직 봄날의 뛰노는 심장의 이상은 눈이 칼이다. 인간의 영원히 인간의 자신과 청춘이 소리다.이것은 피고, 이것이다.'},{date:'03 day(7/23)',exp:'자유롭게 하늘에서 점프해요  노래하며 살 우리 천고에 무엇이 보라. 못하다 보이는 물방아 같으며, 황금시대를 것이다. 어디 이것은 인류의 불어 청춘의 곳이 사막이다.'}],
            cnt:0,
            tranon:'translateX(0%)',
            nomore:'',
            nomore2:'',
            settings:{ "focusOnSelect": true,
                        "infinite": true,
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "speed": 500
                    },
            tra:['부산','산토리니','오클랜드'],
        }
    }
    ,
    methods:{
        prev(){
            this.cnt++;
            this.nomore2='';
           if(this.cnt >= 2){
                this.cnt = 2;
                this.nomore='nomore';
            }
            this.tranon = `translateX(${this.cnt*-16.6}%)`;
            console.log(this.$route.query.name);
            
        },
        next(){
            this.cnt--;
            this.nomore='';
            if(this.cnt <= 0){
                this.cnt = 0;
                this.nomore2='nomore';
            }
            this.tranon = `translateX(${this.cnt*-16.6}%)`;
        },
        totop(){
            window.scrollTo({top:0,behavior:'smooth'});
        },
        pay(){
            alert('결제시스템 준비중입니다.');
        }
    }
}
</script>
<style lang="scss" scoped>
.cntWrap{
        .content{
            &.cnt01{
                section{
                    article{
                        display: flex;
                        justify-content: space-between;
                        .image{
                            width: 50%;
                            background-image: url('../assets/sub04_cnt01.jpg');
                            @for $i from 0 through 2{
                                &.i#{$i}{
                                    background-image: url('../assets/sub04_cnt01_#{$i}.jpg');

                                }
                            }
                        }
                        .texts{
                            width: 50%;
                            padding: min(1rem, 40px);
                            p{
                                height: min(3rem,120px);
                                overflow: hidden;
                                &:nth-child(4){
                                    height: min(1.5rem,60px);
                                }
                                &:nth-child(6){
                                    height: min(1rem,40px);
                                    line-height: min(1rem,40px);
                                }
                            }
                            h6{
                                font-size: min(1.5em, 15px);
                                line-height: min(1rem, 40px);
                            }
                            .btns{
                                display: flex;
                                justify-content: space-between;
                                div{
                                    width: calc(50% - 10px);
                                    margin-top: min(0.5rem,20px);
                                }
                            }
                        }
                    }
                }
            }
            &.cnt02{
                display: flex;
                header{
                    width: 20%;
                    padding-top: min(1rem,40px);
                    h5{
                        font-size: min(1.4em,14px);
                    }
                    .btns{
                        display: flex;
                        width: 30%;
                        margin-top: 10px;
                        margin-left: auto;
                        justify-content: space-between;
                        div{
                            cursor: pointer;
                            overflow: hidden;
                            &.nomore{
                                opacity: 0;
                                cursor: auto;
                            }
                            &.left{
                                width: 19px;
                                height:30px;
                                &::before{
                                    content: '';
                                    display: block;
                                    border: 2px solid #000;
                                    width: 15px;
                                    height: 15px;
                                    transform-origin: top right;
                                    transform: rotate(-45deg);
                                }
                            }
                            &.right{
                                width: 17px;
                                height: 30px;
                                overflow: hidden;
                                &::before{
                                    content: '';
                                    display: block;
                                    border: 2px solid #000;
                                    width: 15px;
                                    height: 15px;
                                    transform-origin: top left;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }
                }
                section{
                    margin-top: 0;
                    width: 80%;
                    overflow: hidden;
                    transition: transform 0.5s;
                    .artGr{
                        width: 150%;
                        display: flex;
                        transition: transform 0.5s;
                        justify-content: space-between;
                        &.off{
                            transition:none;
                        }

                        article{
                            width: 16%;
                            &.move{
                                transform: translateX(600%);
                            }
                            &.del{
                                transform: translateX(0%);
                            }
                            .image{
                                @for $i from 1 through 6{
                                    &.i#{$i}{
                                        background-image: url('../assets/sub04_cnt02_i#{$i}.jpg');
                                        height: min(3rem, 120px);
                                    }
                                }
                            }
                            .texts{
                                h3{
                                    font-size: min(1.8em, 18px);
                                    line-height: min(1rem,40px);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .bnrWrap{
        .banner{
            width: 80%;
            max-width: 1080px;
            margin: min(3rem,120px) auto;
            .images{
                display: flex;
                justify-content: space-between;
                .image{
                    width: calc(100% / 7);
                    border-radius: 50%;
                    height: min(3.5rem, 150px);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    @for $i from 1 through 4{
                        &.i#{$i}{
                            background-image: url('../assets/sub04_cnt03_i#{$i}.jpg');
                        }
                    }
                }
            }
            .texts{
                display: flex;
                border-top: 1px solid #000;
                margin-top:  max(-1.5rem, -70px);;
                justify-content: space-around;
                .text{
                    width: calc(100% / 4);
                    padding:  min(1.5rem, 70px) 50px 0;
                    text-align: center;
                    text-transform: uppercase;
                    h3{
                        line-height: min(1rem,40px);
                        font-size: min(1.5em, 15px);
                    }
                    p{
                        font-size: min(1.3em, 13px);
                        line-height: min(0.5rem,20px);
                        
                    }
                }
            }
        }
    }
</style>