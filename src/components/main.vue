<template>
    <div class="mnWrap" v-bind:class=titleData.bgi>
        <main>
            <div class="mnLeft">
                <h2>{{titleData.title}}</h2>
                <p v-if="titleData.sbtitle">{{visitor}}님,{{hello}}</p>
            </div>
            <div class="mnRight"></div>
        </main>
    </div>
</template>
<script>
export default {
    props:['visitor','hello','titleData'],
    data(){
        return{
            bg :'bg02',
        }
    },
}
</script>
<style lang="scss" scoped>
    div.mnWrap{
        background-image: url('../assets/main01.jpg');
        opacity: 0;
        transition : all 0.2s;
        @for $i from 1 through 5{
            &.bg0#{$i}{
                background-image: url('../assets/main0#{$i}.jpg');
                opacity: 1;
            }
        }
        background-position: top;
        background-size: cover;
        background-attachment: fixed;
        margin-top: max(-3rem, -120px);
        padding: min(8rem, 320px) 0;
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