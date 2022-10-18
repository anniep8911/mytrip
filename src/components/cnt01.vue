<template>
    <div class="cntWrap">
        <div class="content cnt01">
            <header>
                <h2>{{visitor}}님, 어떤 여행을 원하시나요?</h2>
                <p>당신이 좋아하는 여행타입은? 카드에 커서를 올려보세요!</p>
            </header>
            <section>
                <article v-for="(txt,i) in cont1TT">
                    <div class="image" :class="'i'+(i+1)">{{txt}}이미지</div>
                    <div class="texts">
                        <h3>{{txt}}</h3>
                    </div>
                </article>
            </section>
        </div>
    </div>

    <div class="cntWrap">
        <div class="content cnt02">
            <header>
                <h2>welcome to our world!</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem obcaecati amet beatae tempora eligendi!</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veniam dolorum. Dolor voluptatum quisquam quasi facere sequi sapiente error totam molestias cupiditate! Modi veniam beatae voluptatibus, quidem sequi dolorem vitae!</p>
                <div class="btn">start</div>
            </header>
            <section>
                <article>
                    <div class="image">여행자 이미지</div>
                </article>
            </section>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt03">
            <header>
                <h2>tripstore process</h2>
                <h5>Lorem ipsum dolor sit amet.</h5>
            </header>
            <section>
                <article v-for="(txt, i) in cont2TT">
                    <div class="image" :class="'i'+(i+1)">step0{{i+1}}이미지</div>
                    <div class="texts">
                        <h3>step0{{i+1}}</h3>
                        <h5>{{txt.titie}}</h5>
                        <p>{{txt.exp}}</p>
                    </div>
                </article>
            </section>
            <div class="btn">start</div>
        </div>
    </div>


</template>
<script>
export default {
    props:['visitor'],
    data(){
        return{
            cont1TT:['활동적인 액티비티','데일리 여행','패키지 여행'],
            cont2TT:[
                {titie: '여행의 시작부터 끝까지', exp:'교통, 숙박, 코스, 원하는 여행의 종류까지 트립스토어에서 처음부터 끝까지 함께 계획해주는 나만의 맞춤형 플랜!'},
                {titie: '막막한 경비까지 한번에', exp:'여행지의 부담스러운 입장료? 음식? 숙소와 렌트카? 걱정마세요. 트립스토어에서 연계된 할인 시스템을 이용할 수 있어요!'},
                {titie: '계획이 필요 없는 여행', exp:'추천 해주는 여행 코스를 이용해보세요. 우리가 다 계획해줄게요. 하지만 내가 찾던 바로 그 여행일거예요.'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.cntWrap{
    .content.cnt01{
        section{
            display: flex;
            justify-content: space-between;
            article{
                width: calc(100% / 3 - 20px);
                height: min(8rem, 320px);
                perspective: 1000px;
                &:hover{
                    .image{
                        transform: rotateY(-180deg);
                    }
                    .texts{
                        transform: rotateY(0deg);
                    }
                }
                .image{
                    backface-visibility: hidden;
                    transition: transform 1s;
                    @for $i from 1 through 3{
                        &.i#{$i}{
                            background-image: url('../assets/index_cnt01_i#{$i}.jpg');
                            height: min(8rem, 320px);
                        }
                    }
                }
                .texts{
                    background-color: #1d2548;
                    color: #fff;
                    font-size: min(2.5em,25px);
                    line-height: min(1rem,40px);
                    margin-top:  max(-8rem, -320px);
                    transform: rotateY(-180deg);
                    padding: min(3rem, 120px) 0;
                    backface-visibility: hidden;
                    transition: transform 1s;
                    text-align: center;
                }
            }
        }
    }
    .content.cnt02{
        header{
            width: 50%;
            padding: min(3.4rem, 136px) 0;
            h5{
                line-height: min(2rem,20px);
                height: min(1rem, 40px);
                overflow: hidden;
                margin-top: min(2em, 20px);
            }
            p{
                font-size: min(1.4em,14px);
                line-height: min(2rem,20px);
                height: min(5rem, 200px);
                overflow: hidden;
            }
        }
        section{
            margin-top: max(-16rem, -680px);
            z-index: -2;
            position: relative;
            article{
                width: 100%;
                .image{
                    width: max(calc((100vw - 1080px) / 2 + 100%),calc((100vw - 80vw) / 2 + 100%));
                    background-image: url('../assets/index_cnt02_image.jpg');
                    height: min(16rem, 680px);
                }
            }
        }
    }

    .content.cnt03{
        section{
            display: flex;
            justify-content: space-between;
            article{
                width: calc(100% / 3 - 20px);
                .image{
                    height: min(9rem,360px);
                    @for $i from 1 through 3{
                        &.i#{$i}{
                            background-image: url('../assets/index_cnt03_i#{$i}.jpg');
                        }
                    }
                }
                .texts{
                    h3{
                        &::before{
                            content: '●';
                            display: block;
                            font-size: 12px;
                            position: absolute;
                            top: max(-0.5rem,-20px);left: 0;

                        }
                    }
                }
            }
        }
        .btn{
            width: 20%;
            margin-left: auto;
        }
    }
}
</style>