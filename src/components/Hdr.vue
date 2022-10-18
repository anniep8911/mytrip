<template>
    <div class="hdrWrap">
        <header>
            <h1 @click="findIndex(0)"><router-link to="./">tripstore</router-link></h1>
            <ul class="nav">
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
            <div class="mnRight"></div>
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
        }
    }
}
</script>
<style lang="scss">
    div.hdrWrap{
        background-color: rgba(0,0,0,0.5);
        header{
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
        }
        h1{
            color:transparent;
            background-image: url('../assets/logo_name.png');
            background-repeat: no-repeat;
            background-position: left;
            background-size: contain;
            width: 20%;
            height: min(1rem, 40px);
            cursor: pointer;
            position: relative;
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
            font-size: min(1.8em, 18px);
            li{
                cursor: pointer;
                margin-left: 20px;
                line-height: min(1rem, 40px);
               
                &:last-child:hover::before{
                   content: '방문기록을 삭제하시려면 클릭하세요!';
                   display: block;
                   position: absolute;
                   top: 10px;
                   font-size: 12px;
                   background-color: #fff;
                   color: #000;
                   line-height: 20px;
                }
            }
        }
    }
    div.mnWrap{
        background-image: url('../assets/main01.jpg');
        background-position: top;
        background-size: cover;
        background-attachment: fixed;
        margin-top: max(-3rem, -120px);
        padding: min(8rem, 320px) 0;
        transition: background-image 0.5s;
        @for $i from 1 through 4{
            &.i#{$i}{
                background-image: url('../assets/main0#{$i+1}.jpg');
            }
        }
        main{
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            color: #fff;
            display: flex;
            justify-content: space-between;
            .mnLeft{
                width: 90%;
                h2{
                    font-size: min(7.2em, 72px);
                    line-height: min(2rem, 80px);
                    width: 80%;
                    text-transform: uppercase;
                }
                p{
                    width: 80%;
                    font-size: min(2em, 20px);
                    line-height: min(1rem, 40px);
                    margin-top: min(0.5rem, 20px);
                }
            }
            .mnright{
                width: 10%;
            }
        }
    }
</style>