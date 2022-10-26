<template>
    <div class="cntWrap" ref="cntWr1">
        <div class="content cnt01">
            <header>
                <h2>{{visitor}}님, 어떤 여행을 원하시나요?</h2>
                <p>당신이 좋아하는 여행타입은? 카드를 선택해주세요!</p>
            </header>
            <section>
                <article v-for="(txt,i) in cont1TT"  @click="move(i+1)">
                    <div class="image" :class="'i'+(i+1)">{{txt}}이미지</div>
                    <div class="texts">
                        <h3>{{txt}}</h3>
                    </div>
                </article>
            </section>
        </div>
    </div>

    <div class="cntWrap" ref="cntWr">
        <div class="content cnt02">
            <header>
                <h2 v-if="ind==0">위에서 여행타입을 선택해주세요!</h2>
                <h2 v-if="ind>0">{{cont1TT[ind-1]}} 추천</h2>
                <h5 v-if="ind>0">{{cont2TT[ind-1].exp2}}</h5>
                <p>몸이 길지 방지하는 위하여서, 동산에는 청춘 아니더면, 전인 사막이다. 열매를 때에, 발휘하기 우리는 가는 사랑의 일월과 사막이다. 풍부하게 피고 구하기 가진 피가 위하여 그들에게 있는가? 얼음과 동력은 이상의 끝까지 그들의 끝에 있으랴? 청춘은 살았으며, 앞이 바이며, 현저하게 풍부하게 위하여 운다. 천하를 눈이 무엇이 더운지라 사랑의 생의 황금시대를 구하지 그들의 위하여서. 없으면 귀는 쓸쓸한 인간이 얼마나 끝에 피가 찬미를 인도하겠다는 사막이다. 것은 거친 이상, 뛰노는 얼마나 바이며, 인간의 황금시대다. 피고 있는 이것은 피는 능히 청춘에서만 맺어, 보이는 목숨이 힘있다. 새 인간의 내려온 위하여, 것이다.

                구하지 역사를 현저하게 우리 무엇을 끝까지 뜨고, 그리하였는가? 되는 피고, 구하지 부패를 발휘하기 봄바람이다. 거친 맺어, 있는 풍부하게 그들의 있다. 오직 이상, 창공에 인간에 가치를 예수는 그리하였는가? 풀밭에 가슴이 불어 끓는다. 관현악이며, 불어 날카로우나 주는 거친 우는 시들어 바로 열락의 위하여서. 피가 이상 두손을 가지에 용감하고 무한한 보는 방지하는 우리 힘있다. 눈에 우리의 그것을 용감하고 능히 유소년에게서 끓는다. 끓는 이상 힘차게 오직 피가 가지에 있는 보라. 그들의 이것이야말로 있음으로써 그들의 옷을 있는 있으랴? 바로 때까지 전인 얼음이 부패뿐이다.
                </p>
                <div class="btn" @click="move2(ind)">start</div>
                
            </header>
            <section>
                <article>
                    <div class="image" :class="'i'+ind">여행자 이미지</div>
                </article>
            </section>
        </div>
    </div>
    <div class="cntWrap" ref="cntWr3">
        <div class="content cnt03">
            <header>
                <h2>{{cont1TT[imgClchange-1]}} 추천 코스입니다!</h2>
                <h5>Lorem ipsum dolor sit amet.</h5>
            </header>
            <section>
                <article v-for="(txt, i) in cont2TT">
                    <div class="image" :class="'i'+imgClchange+'-'+(i+1)">step0{{i+1}}이미지</div>
                    <div class="texts">
                        <h3>step0{{i+1}}</h3>
                        <h5>{{txt.titie[imgClchange]}}</h5>
                        <p>{{txt.exp}}</p>
                    </div>
                </article>
            </section>
            <div class="btns">
                <div class="btn" @click="totop"><router-link to="./cnt01">start</router-link></div>
                <div class="btn" @click="move2(ind=0)">reset</div>
            </div>
        </div>
    </div>


</template>
<script>
export default {
    props:['visitor','device_type'],
    data(){
        return{
            cont1TT:['활동적인 액티비티','데일리 여행','패키지 여행'],
            cont2TT:[
                {titie: ['여행의 시작부터 끝까지','쉐도우복싱 연습','토게피가 출연하는 무인도의 아름다운 바닷가!','로스트밸리 순록과 함께 패키지'], exp:'교통, 숙박, 코스, 원하는 여행의 종류까지 트립스토어에서 처음부터 끝까지 함께 계획해주는 나만의 맞춤형 플랜!',exp2:'주짓수 세계챔피언과 맞대결! 이기면 챔피언벨트는 당신의 것!'},
                {titie: ['모자냄새맡기 대회','당근매칭 현피시스템','천평이 넘는 땅에서 실전 모동숲체험','한 방에 최대 50명까지 수용가능한 멘션'], exp:'여행지의 부담스러운 입장료? 음식? 숙소와 렌트카? 걱정마세요. 대회에서 일등하면 공짜!',exp2:'무인도 데일리체험! 당장 무인도에 가져갈 3가지부터 챙기세요!'},
                {titie: ['계획이 필요 없는 여행','도장 도장깨기!','무인도에서 이루는 내집마련의 꿈','여러사람과 즐기는 원룸형 페스티벌'], exp:'계획? 무계획이 계획이죠! J타입의 당신도 파워 P로 만들어줄 수 있는 완벽한 코스!',exp2:'하최몇? 하루에 최대 몇명이랑 같이 이동해보셨나요? 당신의 기록을 깨드립니다.'},
            ],
            ind:0,
            imgClchange:0,
        }
    },
    methods:{
        move(i){
            if(this.device_type == 'pc'){
                window.scrollTo({top:this.$refs.cntWr.offsetTop-40,behavior:'smooth'});
                this.ind = i;
            }else{
                window.scrollTo({top:this.$refs.cntWr.offsetTop-150,behavior:'smooth'});
                this.ind = i;
            }
        },
        move2(ind){
            if(this.device_type == 'pc'){
                if(this.ind==0){
                    window.scrollTo({top:this.$refs.cntWr1.offsetTop-40,behavior:'smooth'});
                    this.imgClchange=0;
                }else{
                    window.scrollTo({top:this.$refs.cntWr3.offsetTop-40,behavior:'smooth'});
                    this.imgClchange=ind;
                }
            }else{
                if(this.ind==0){
                    window.scrollTo({top:this.$refs.cntWr1.offsetTop-150,behavior:'smooth'});
                    this.imgClchange=0;
                }else{
                    window.scrollTo({top:this.$refs.cntWr3.offsetTop-150,behavior:'smooth'});
                    this.imgClchange=ind;
                }
                
            }
        },
        totop(){
            window.scrollTo({top:0,behavior:'smooth'});
        }
    }
}
</script>
<style lang="scss" scoped>
@use './mixins.scss' as mix;

.cntWrap{
    .content.cnt01{
        section{
            display: flex;
            justify-content: space-between;
            @include mix.mob{
               display: block;
            };
            article{
                width: calc(100% / 3 - mix.$gt);
                @include mix.heights(pc,8);
                perspective: 1000px;
                position: relative;
                @include mix.mob{
                    width: 100%;
                    @include mix.mzn(mob,top,0.3);
                    @include mix.heights(mob,3);
                };

                &:hover{
                    .image{
                        transform: rotateY(-180deg);
                        @include mix.tab{
                            transform: rotateY(0deg);
                        };
                    }
                    .texts{
                        transform: rotateY(0deg);
                    }
                }
            
                .image{
                    backface-visibility: hidden;
                    transition: transform 1s;
                    @for $i from 1 through 3{
                        @include mix.heights(pc,8);
                        @include mix.mob{
                            @include mix.heights(mob,3);
                        };
                        &.i#{$i}{
                            background-image: url('../assets/index_cnt01_i#{$i}.jpg');
                        }
                    }
                }
                .texts{
                    background-color: #1d2548;
                    color: #fff;
                    @include mix.fontz(pc,2.5);
                    @include mix.lhz(pc,1);
                    position: absolute;
                    top: 0;left: 0;
                    width: 100%;
                    transform: rotateY(-180deg);
                    @include mix.pdn(pc,top,3);
                    @include mix.pdn(pc,bottom,3);
                    backface-visibility: hidden;
                    transition: transform 1s;
                    text-align: center;
                    cursor: pointer;
                    @include mix.tab{
                        transform: rotateY(0deg);
                        @include mix.pdn(mob,top,0);
                        @include mix.pdn(mob,bottom,0);
                        @include mix.lhz(mob,0.5);
                        background-color: rgba(42, 46, 62, 0.7);
                        h3{
                            @include mix.fontz(mob,1.5);
                        }

                    };
                }
            }
        }
    }
    .content.cnt02{
        position: relative;
        @include mix.tab{
           @include mix.mzn(mob,top,1);
        };
        header{
            width: 50%;
            padding: min(3.4rem, 136px) 5%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            @include mix.tab{
                @include mix.pdn(mob,top,1);
                @include mix.pdn(mob,bottom,1);
            };
            @include mix.mob{
              width: 100%;
              padding: 0;
              text-align: center;
              padding-top: 20px;
            };
            h5{
                line-height: min(2rem,20px);
                height: min(1rem, 40px);
                overflow: hidden;
                margin-top: min(2em, 20px);
                @include mix.tab{
                    @include mix.fontz(mob,1.3);
                    @include mix.heights(mob,0.5);
                };
                @include mix.mob{
                  width: 80%;
                  margin: 0 auto;
                  overflow: visible;
                  height: auto;
                  margin-top: 20px;
                    
                };
            }
            p{
                font-size: min(1.4em,14px);
                line-height: min(0.5rem,20px);
                height: min(5rem, 200px);
                overflow: hidden;
                @include mix.tab{
                    @include mix.fontz(mob,1.2);
                    @include mix.heights(mob,2);
                    @include mix.lhz(mob,0.5);
                };
                @include mix.mob{
                  width: 80%;
                  margin: 0 auto;
                  margin-top: 10px;
                  @include mix.heights(mob,1);

                };
            }
            background-color: rgba(255,255,255,0.8);
            @include mix.tab{
               .btn{
                margin: 0 auto;
                margin-top: 20px;
               }
            };
        }
        section{
            z-index: -2;
            position: relative;
            @include mix.tab{
              margin-top: 0;
            };
            article{
                width: 100%;
                .image{
                    width: max(calc((100vw - 1080px) / 2 + 100%),calc((100vw - 80vw) / 2 + 100%));
                    height: min(16rem, 680px);
                    @include mix.tab{
                        width: 100%;
                        @include mix.heights(mob,7);
                    };
                    transition: background-image 0.5s;
                    transition-delay: 0.5s;
                    @for $i from 0 through 3{
                        &.i#{$i}{
                            background-image: url('../assets/index_cnt02_image_#{$i}.jpg');
                        }
                    }
                }
            }
        }
    }

    .content.cnt03{
        section{
            display: flex;
            justify-content: space-between;
            @include mix.mob{
              display: block;
            };
            article{
                width: calc(100% / 3 - 1.8%);
                @include mix.mob{
                    display: flex;
                    width: 100%;
                    margin-top: 20px;
                    div{
                        width: 50%;
                        &.texts{
                            padding-left: 20px;
                            h3{
                                @include mix.fontz(mob,1.5);
                            }
                            h5{
                                @include mix.fontz(mob,1.2);
                            }
                            p{
                               display: none;
                            }
                        }
                    }
                };
                .image{
                    height: min(9rem,360px);
                    transition-delay: 0.5s;
                    transition-property: all;
                    transition-duration: 0.5s;
                    opacity: 0;
                    @for $i from 1 through 3{
                        &.i0-#{$i}{
                            opacity: 1;
                            background-image: url('../assets/index_cnt03_i0-#{$i}.jpg');
                        }
                        &.i1-#{$i}{
                            opacity: 1;
                            background-image: url('../assets/index_cnt03_i1-#{$i}.jpg');
                        }
                        &.i2-#{$i}{
                            opacity: 1;
                            background-image: url('../assets/index_cnt03_i2-#{$i}.jpg');
                        }
                        &.i3-#{$i}{
                            opacity: 1;
                            background-image: url('../assets/index_cnt03_i3-#{$i}.jpg');
                        }
                    }
                }
            }
        }
        .btns{
            width: 42%;
            display: flex;
            justify-content: space-between;
            margin-left: auto;
            @include mix.mob{
            width: 100%;
              div{
                width: 50%;
              }
            };
            .btn{
                width: 48%;
            }
        }
    }
}
</style>