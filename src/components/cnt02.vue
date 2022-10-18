<template>
    <div class="bnrWrap">
        <div class="banner bnr01">
            <form action="">
                <div class="dates">
                    <h3>여행일정을 선택해주세요</h3>
                    <input type="date" value="2022-10-19" min="2022-10-01" max="2023-12-31" name="startDate">
                    <input type="date" value="2022-10-19" min="2022-10-01" max="2023-12-31" name="endDate">
                </div>
                <div class="sel">
                    <h3>가고싶은 나라를 선택해주세요</h3>
                    <select v-model="selected">
                        <option v-for="(i,idx) in national" :value=idx>{{i}}</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
    <div class="cntWrap" ref="cntWr">
        <div class="content cnt01">
            <header>
                <h2>{{visitor}}님을 위한 추천여행!</h2>
                <p>불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.</p>
                <p>품었기 장식하는 가는 그러므로 황금시대다. 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. 피어나기 부패를 많이 이것을 것이다. 것은 새가 노년에게서 이것이다. 것은 인류의 황금시대를 풀이 수 하여도 길을 이것이야말로 것이다. 능히 없으면 갑 것이다.보라, 하여도 대중을 구할 하는 그러므로 이것이다. 속에 풀이 속잎나고, 위하여, 있는 이것이다. 귀는 가치를 봄바람을 되려니와, 이상은 그들은 구하기 우리는 청춘 아니다. 옷을 인생에 꾸며 풀이 있는가?</p>
                <div class="btns">
                    <div class="btn"><router-link :to="{path:'./cnt04',query:{name:selected}}">view more</router-link></div>
                    <div class="btn" @click="totop">go back</div>
                </div>
            </header>
            <section>
                <article>
                    <div class="image" :class="'add'+selected"></div>
                </article>
            </section>
        </div>
    </div>

    <div class="cntWrap">
        <div class="content cnt02">
            <header>
                <h2>이런 코스는 어떠세요?</h2>
                <p>불어 얼마나 무엇이 내는 우리 어디 품었기 이상의 이 쓸쓸하랴? 황금시대의 용기가 관현악이며, 얼음이 끓는 것이다. 사람은 불어 수 설레는 눈이 가치를 것이다. 광야에서 없는 갑 것이다. 만물은 바이며, 청춘을 꽃이 얼음과 싸인 공자는 뿐이다. 무엇을 원질이 보이는 그러므로 인생을 두기 끓는 없는 아니다. 우리의 보배를 가슴에 황금시대다. 없으면, 풀이 오아이스도 가는 것은 없는 부패를 끓는 노래하며 것이다. 우리는 지혜는 새 대한 많이 교향악이다.
                </p>
            </header>
            <section>
                <div class="image"></div>
            </section>
        </div>
    </div>

    <div class="cntWrap">
        <div class="content cnt03">
            <header>
                <h2>당신을 위한 일정</h2>
                <h5> 새가 굳세게 목숨을 불러 보내는 같은 얼마나 용기가 사막이다. </h5>
            </header>
            <section>
                <article v-for="(tt,ind) in dateTr">
                    <div class="image" v-bind:class="'i'+(ind+1)"></div>
                    <div class="texts">
                        <h3>{{tt}}</h3>
                        <ul>
                            <li>역사를 싹이 광야에서 위하여</li>
                            <li>청춘을 가진 커다란 그것을 것이다.</li>
                            <li>는 이것이다. 귀는 가치를 봄바람을</li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    props:['visitor'],
    data(){
        return{
            dateTr : ['1day course','2day course','3day course'],
            checkAge :0,
            selected:'',
            national:['아시아','유럽','오세아니아'],
        }
    },
    methods:{
        totop(){
            window.scrollTo({top:0,behavior:'smooth'});
        },
    },
    watch:{
        selected(){
            window.scrollTo({top:this.$refs.cntWr.offsetTop,behavior:'smooth'});
          
        }
    },  
}
</script>
<style lang="scss" scoped>

.bnr01{
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.5);
    padding: min(1rem, 40px) 0;
    margin-top: max(-6rem,-240px);
    h3{
        color: #fff;
        font-size: min(1.8em, 18px);
        line-height: min(1rem,40px);
    }
    form{
        display: flex;
        .dates{
            width: 50%;
            margin-left: 15%;
            input{
                width: 40%; 
                line-height: min(1rem,40px);
                text-align: center;
                font-size: min(1.5em,15px);
            }
        }
        .sel{
            width: 50%;
            select{
                line-height: min(1rem,40px);
                height: min(1.1rem,44px);
                width: 50%;
                font-size: min(2em,20px);
                option{
                    height: min(1rem,40px);
                    line-height: min(1rem,40px);
                    font-size: min(2em,20px);;

                }
            }
        }
    }

}
    .cntWrap{
        .content{
            &.cnt01{
                display: flex;
                header{
                    width: 40%;
                    padding: min(1.5rem, 60px) 20px;
                    padding-right: calc(100% / 12 * 0.5);
                    p{
                        height: min(3rem,120px);
                        font-size: min(1.5em, 15px);
                    }
                    .btns{
                        display: flex;
                        div:last-of-type{
                            margin-left: 20px;
                        }
                    }
                }
                section{
                    width: 50%;
                    margin-top: 0;
                    .image{
                        background-position: top;
                        height: min(15rem,640px);
                        background-image: url('../assets/sub01_cnt01.jpg');
                        transition: background-image 0.5s;
                        @for $i from 0 through 2{
                            &.add#{$i}{
                                background-image: url('../assets/sub01_cnt01_#{$i}.jpg');

                            }
                        }
                    }
                }
            }
            &.cnt02{
                header{
                    text-align: center;
                    p{
                        height: min(1rem,40px);
                        width: calc(100% / 12 * 8);
                        margin: 0 auto;
                        margin-top: min(0.5rem,20px);
                    }
                }
                section{
                    .image{
                        background-image: url('../assets/sub01_cnt02.jpg');
                        height: min(15rem,600px);
                        background-size: contain;
                    }
                }
            }
            &.cnt03{
                section{
                    display: flex;
                    justify-content: space-between;
                    article{
                        width: calc(100% / 3 - 20px);
                        position: relative;
                        .image{
                            height: min(12rem,600px);
                            @for $i from 1 through 3{
                                &.i#{$i}{
                                    background-image: url('../assets/sub01_cnt03_i#{$i}.jpg');
                                }
                            }
                        }
                        .texts{
                            background-color: rgba(0,0,0,0.7);
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            color: #fff;
                            padding: 10%;
                            li{
                                font-size: min(1.5em, 15px);
                                line-height: min(3em, 30px);
                                list-style: inside;
                            }
                        }
                    }
                }
            }
        }
    }
</style>