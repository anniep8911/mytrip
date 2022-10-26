<template>
    <div class="hdrWrap">
        <header :class="hdrCla">
            <h1 @click="findIndex(0)"><router-link to="./">tripstore</router-link></h1>
            <ul class="nav">
                <!-- <li class="ham" @click="addClass" :class="ncl"></li> -->
                <li v-for="(tt,i) in liTitle" @click="findIndex(i+1)"><router-link :to="{path:'./cnt0'+(i+1)}" >{{tt}}</router-link></li>
                <li @click="resetCook"><router-link to="./">reset</router-link></li>
            </ul>
        </header>
    </div>
    <div class="mnWrap" :class="'i'+ind">
        <main>
            <div class="mnLeft">
                <h2>{{datas[ind].title}}</h2>
                <p v-if="now">{{visitor}}님,{{hello}}</p>
                <p v-if="!now">{{visitor}}님,{{msg}}</p>
            </div>
        </main>
    </div>
</template>
<script>
import titleData from '../assets/maindata';
export default {
    props:['visitor','hello'],
    data(){
        return{
            liTitle: ['experience', 'plan', 'editor','my journey'],
            ind:0,
            datas:titleData,
            msg:'',
            now:true,
            ncl:'',
            hdrCla:'',
        }
    },
    methods:{
        resetCook(){
            document.cookie='nobody; path=/; expires = Tue, 19 Jan 2011 03:14:07 GMT';
            window.location.reload();

        },
        findIndex(ind){
            this.ind = ind;
            this.now = false;
            switch (this.ind){
                case 0 : this.msg ="????"; this.now=true;
                break;
                case 1 : this.msg ="일정을 선택해주세요!";
                break;
                case 2 : this.msg ="세부 일정을 볼까요?";
                break;
                case 3 : this.msg ="에디터의 추천 여행지입니다.";
                break;
                case 4 : this.msg ="일정이 완료되었어요!";
                break;
                default : this.msg="기다려주세요!";
            }
        },
        addClass(){
            if(this.ncl==''){
                this.ncl='close';
            }else{
                this.ncl='';
            }

        }
    }
}
</script>
<style lang="scss">
@use './mixins.scss' as mix;

   div.hdrWrap{
        background-color: rgba(0,0,0,0.7);
        header{
            @include mix.grid(pc);
            display: flex;
            justify-content: space-between;
            @include mix.pdn(pc,top,0.5);
            @include mix.pdn(pc,bottom,0.5);
        }
        h1{
            color:transparent;
            @include mix.imgNw(center,contain);
            background-image: url('../assets/logo_name.png');
            width: mix.$wdPc*2;
            cursor: pointer;
            position: relative;
            @include mix.heights(pc,1);
            a{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;left: 0;
            }
        }
        
        ul.nav{
            display: flex;
            color: #fff;
            text-transform: capitalize;
            font-weight: 700;
            @include mix.fontz(pc,1.8);
          
            li{
                cursor: pointer;
                margin-left: 20px;
                @include mix.lhz(pc,1);   
                &:nth-last:hover::before{
                   content: '방문기록을 삭제하시려면 클릭하세요!';
                   display: block;
                   position: absolute;
                   top: 10px;
                   font-size: 11px;
                   background-color: #fff;
                   color: #000;
                   line-height: 15px;
                }
            }
        }
    }
    div.mnWrap{
        background-image: url('../assets/main01.jpg');
        @include mix.imgNw(top,cover);
        background-attachment: fixed;
        @include mix.mzn(pc,top,-3);
        @include mix.pdn(pc,top,8);
        @include mix.pdn(pc,bottom,8);
        @include mix.bgi('../assets/main0',1,4);
        transition: background-image 0.5s;

        main{
            @include mix.grid(pc);
            @include mix.tab{
                @include mix.grid(mob);
            };
            color: #fff;
            display: flex;
            justify-content: space-between;

            .mnLeft{
                width: calc(mix.$wdPc * 10);
                @include mix.tab{
                    width: 100%;                
                };
                h2{
                    @include mix.fontz(pc,7.2);
                    @include mix.lhz(pc,2);
                    text-transform: uppercase;
                    @include mix.tab{
                        @include mix.fontz(mob,2.5);
                        @include mix.lhz(mob,1); 
                    };
                }
                p{  
                    @include mix.fontz(pc,2);
                    @include mix.lhz(pc,1);
                    @include mix.mzn(pc,top,0.5);
                    @include mix.tab{
                        @include mix.fontz(mob,1.5);
                        @include mix.lhz(mob,0.5);
                        @include mix.mzn(mob,top,0.5);
                    };
                }
            }
        }
    }
    @include mix.tab{
        /*여기안에 태블릿 반응형 내용입력*/
        div.hdrWrap{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            header{
                @include mix.grid('mob');
                h1{
                    @include mix.heights(mob,1);
                    width:mix.$wdMob;
                }
                .nav{
                    li{
                        @include mix.lhz(mob,1);
                        @include mix.fontz(mob,1.2);
                    }
                }
            }
        }
        div.mnWrap{
            @include mix.pdn(mob,bottom,2);
        }
    };
    @include mix.mob{
        div.hdrWrap{
            header{
                @include mix.heights(mob,1);
                overflow: hidden;
                &.on{
                    @include mix.heights(mob,5);
                }
                h1{
                    @include mix.heights(mob,1);
                    width:mix.$wdMob;
                }
                .nav{
                    display: block;
                    li{
                        @include mix.lhz(mob,1);
                    }
                }
            }
        }
        div.mnWrap{
            @include mix.pdn(mob,top,2.5);
            @include mix.pdn(mob,bottom,1);
            @include mix.imgNw(bottom,cover);
            main{
                .mnLeft {
                    width: 100%;
                    h2{
                        @include mix.fontz(mob,1.8);
                    }
                }
            }
        }
    };
</style>