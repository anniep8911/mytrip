<template>
    <div class="mnWrap">
        <main>
            <div class="mnLeft">
                <h2>Trip store <br> your journey</h2>
                <p>{{title}}님, {{hello}} 당신 여정의 시작과 끝까지,<br> 단 하나로 끝내는 트립스토어 입니다!</p>
            </div>
            <div class="mnRight"></div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
        
        }
    },
    props:['title','hello'],
}
</script>
<style lang="scss">
    div.mnWrap{
        background-image: url('../assets/main.jpg');
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