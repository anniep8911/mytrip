<template>
    <div class="bnrWrap">
        <div class="banner bnr01">
            <div class="menu" v-for="(txt,i) in trffic">
                <div class="image" :class="'i'+(i+1)"></div>
                <div class="texts">
                    <h3>{{txt}}</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt01">
            <header>
                <h2>traffic</h2>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde sit dolore officiis cumque fugiat assumenda itaque voluptates. Perspiciatis vero itaque dolores iure qui iste impedit? Perferendis voluptatem ut labore.</p>
            </header>
            <section>
                <article v-for="(txt,i) in trffic2">
                    <div class="image" :class="'i'+(i+1)"></div>
                   <div class="texts">
                        <h3>{{txt}}</h3>
                   </div>
                </article>
            </section>
        </div>
    </div>
    <div class="bnrWrap">
        <div class="banner bnr02">
            <div class="image">
                <div class="ovrGrid"></div>
            </div>
            <div class="texts">
                <div class="txtGr">
                    <h2>sights</h2>
                    <h5>local sights name here</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p>
                </div>
                <div class="btn"></div>
            </div>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt02">
            <header>
                <h2>activities</h2>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
            </header>
            <section>
                <article v-for="(txt,i) in activities">
                    <div class="image" :class="'i'+(i+1)"></div>
                    <div class="texts">
                        <h3>{{txt}}</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum, numquam quo, distinctio vero inventore odio cum et molestias laboriosam quasi sequi. Culpa quisquam veniam nesciunt, excepturi accusamus illo aliquam.</p>
                    </div>
                </article>
            </section>
            <div class="btn">view more</div>
        </div>
    </div>
    <div class="cntWrap">
        <div class="content cnt03">
            <header>
                <h2>room select</h2>
                <h5>Lorem ipsum dolor sit amet.</h5>
            </header>
            <section>
                <div class="artLeft">
                    <article>
                        <div class="image i1"></div>
                        <div class="texts">
                            <h3>hotel</h3>
                            <h5>Lorem, ipsum dolor.</h5>
                            <h6>예약현황: 70%</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, neque? Obcaecati blanditiis, sed veniam exercitationem doloribus illum in ea inventore amet vero dicta officia optio harum aliquid labore voluptatem velit.</p>
                        </div>
                    </article>
                </div>
                <div class="artRight">
                    <article v-for="(t,i) in stay">
                        <div class="image" :class="'i'+(i+1)"></div>
                        <div class="texts">
                            <h3>{{t}}</h3>
                            <h5>excepturi accusamus </h5>
                            <h6>예약현황:70%</h6>
                        </div>
                    </article>
                </div>
            </section>
            <div class="btn">view more</div>
        </div>
    </div>
</template>
<script>
export default {
    props:['visitor'],
    data(){
        return{
            trffic:['traffic','rooms','sights','activities'],
            trffic2:['uber','rental cars','kakao taxi'],
            activities:['water leisure','para gliding','hiking'],
            stay:['glamping','guest house', 'rental room', 'hostel']
        }
    }
}
</script>
<style lang="scss" scoped>
    .bnrWrap{
        .banner{
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            &.bnr01{
                display: flex;
                margin-top: max(-5rem, -200px);
                .menu{
                    width: calc(100% / 4);
                    position: relative;
                    height: min(12rem,480px);
                    overflow: hidden;
                    outline: 1px solid #fff;
                    cursor: pointer;
                    &:hover{
                        .image{
                            filter: blur(5px);
                            scale: 1.2;
                        }
                        .texts{
                            top: 0;
                        }
                    }
                    .image{
                        height: min(12rem,480px);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: left;
                        filter: blur(0px);
                        transition: all 0.5s;
                        @for $i from 1 through 4{
                            &.i#{$i}{
                                background-image: url('../assets/sub02_cnt01_i#{$i}.jpg');
                            }
                        }
                    }
                    .texts{
                        position: absolute;
                        margin: auto;
                        top: 600px;left: 0;right: 0;bottom: 0;
                        font-size: min(2.8em, 28px);
                        text-transform: capitalize;
                        color: #fff;
                        line-height: min(1rem, 40px);
                        height: min(1rem, 40px);
                        text-align: center;
                        transition: top 0.5s;
                    }
                }
            }
            &.bnr02{
                margin-top: min(3rem, 120px);
                position: relative;
                .image{
                    direction: rtl;
                    .ovrGrid{
                        height: min(17.5rem, 700px);
                        width: max(calc((100vw - 1080px) / 2 + 100%),calc((100vw - 80vw) / 2 + 100%));
                        background-image: url('../assets/sub02_bnr01.jpg');
                        background-position: top;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
                .texts{
                    color: #fff;
                    position: absolute;
                    margin: auto;
                    top: 0;bottom: 0;
                    height: min(6rem,240px);
                    text-shadow: 1px 1px 2px #000;
                    h2{
                        font-size: min(4.5em, 45px);
                        line-height: min(8em, 80px);
                        height: min(8em, 80px);
                        text-transform: capitalize;
                        font-weight: 700;
                    }
                    h5{
                        font-size: min(1.5em, 15px);
                        line-height: min(1rem,40px);
                        height: min(1rem,40px);
                        font-weight: 700;
                    }
                    p{
                        font-size: min(1.5em, 15px);
                        line-height: min(2em,20px);
                        height: min(3rem, 120px);
                        width: 50%;
                        overflow: hidden;
                    }
                }
            }
        }
    }
    .cntWrap{
        .content{
            &.cnt01{
                display: flex;
                direction: rtl;
                header{
                    width: 20%;
                    padding-left: 20px;
                    padding-top: min(1.5rem, 60px);
                    h5{
                        height: min(1rem, 40px);
                        overflow: hidden;
                        line-height: min(1rem, 40px);
                    }
                    p{
                        font-size: min(1.4rem, 14px);
                    }
                }
                section{
                    margin-top: 0;
                    width: 80%;
                    display: flex;
                    direction: ltr;
                    article{
                        width: calc(100% / 3 );
                        position: relative;
                        .image{
                            height: min(10rem,400px);
                            @for $i from 1 through 3{
                                &.i#{$i}{
                                    background-image: url('../assets/sub02_cnt02_i#{$i}.jpg');
                                }
                            }
                        }
                        .texts{
                            position: absolute;
                            top: 0;left: 0;
                            background-color: #000;
                            color: #fff;
                            transform-origin: top left;
                            transform: rotate(90deg);
                            margin-left: min(1.25rem, 50px);
                            h3{
                                font-size: min(1.8em, 18px);
                                line-height: min(1rem, 40px);
                                padding: 5px;
                            }
                        }
                    }
                }
            }
            &.cnt02{
                section{
                    display: flex;
                    justify-content: space-between;
                    article{
                        width: calc(100% / 3 - 20px);
                        &:hover{
                            .texts{
                                margin-top: max(-7rem, -280px);
                                background-color: rgba(3, 3, 3, 0.2);
                                color: #fff;
                            }
                        }
                        .image{
                            height: min(7rem, 280px);
                            @for $i from 1 through 3{
                                &.i#{$i}{
                                    background-image: url('../assets/sub02_cnt03_i#{$i}.jpg');
                                }
                            }
                        }
                        .texts{
                            background-color: rgba(98, 170, 164, 0.72);
                            padding: min(1rem,40px) 10px;
                            transition: all 0.5s;
                            h3{
                                text-transform: capitalize;
                            }
                            h5{
                                font-size: min(1.3em,13px);
                            }
                            p{
                                height: min(4rem,80px);
                                overflow: hidden;
                            }
                        }
                    }
                }
                .btn{
                    width: 25%;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            &.cnt03{
                section{
                    display: flex;
                    justify-content: space-between;
                    .artLeft{
                        width: calc(50% - 20px);
                        article{
                            position: relative;
                            .image{
                                height: min(15rem,600px);
                                background-image: url('../assets/sub02_cnt04_i1.jpg');
                            }
                            .texts{
                                height: min(6rem,240px);
                                background-color: rgba(255,255,255,0.8);
                                width: 70%;
                                position: absolute;
                                bottom: 0;left: 0;
                                padding: 0px 10px;
                                h6{
                                    line-height: min(1rem, 40px);
                                }
                                p{
                                    margin-top: 0;
                                    height: min(2rem, 80px);
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                    .artRight{
                        width: calc(50% - 20px);
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        row-gap: min(1rem, 40px);
                        article{
                            width: calc(50% - 20px);
                            .image{
                                height: min(4rem,160px);
                                @for $i from 1 through 4{
                                    &.i#{$i}{
                                        background-image: url('../assets/sub02_cnt04_i#{$i+1}.jpg');
                                    }
                                }
                            }
                            .texts{
                                padding: 10px;
                                h3{
                                    line-height: min(1rem,40px);
                                    font-size: min(2.5em, 25px);
                                }
                                h5{
                                    line-height: min(3em,30px);
                                    font-size: min(1.5em, 15px);
                                    
                                }
                                h6{
                                    line-height: min(0.5rem,20px);
                                    font-size: min(1.2em, 12px);
                                }
                            }
                        }
                    }
                }
                .btn{
                    width: 25%;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }
</style>