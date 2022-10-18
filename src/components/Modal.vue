<template lang="html">
    <div class="lightBoxWrap">
        <div class="lightBox">
            <h2>당신의 이름을 입력해주세요!</h2>
            <input type="text" placeholder="이름을 입력하세요!" v-model="msg" @keypress.enter="upname" autofocus="autofocus">
            <div class="btn" @click="upname">제출하기</div>
        </div>
    </div>
</template>
<script>
export default {
    emits:['msg'],
    data(){
        return{
            msg : '',
        }
    },
    methods:{
        upname(){
            this.$emit('msg',this.msg);
            document.cookie = `${this.msg}; path=/; expires = Tue, 19 Jan 2099 03:14:07 GMT`;
        }
    },
}
</script>
<style lang="scss">
    div.lightBoxWrap{
        position: fixed;
        top: 0;
        left:0;
        width:100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
        div.lightBox{
            width: 50%;
            max-width: 500px;
            height: min(5rem, 200px);
            background-color: #fff;
            position: absolute;
            margin: auto;
            top: 0;left: 0;right: 0;bottom: 0;
            padding: min(2rem, 80px) 0;
            text-align: center;
            input{
                line-height: min(1rem, 40px);
                margin-top: min(0.5rem, 20px);
                text-align: center;
            }
            div.btn{
                width: 50%;
                height: min(1rem, 40px);
                background-color: #ccc;
                text-align: center;
                line-height: min(1rem, 40px);
                font-size: min(1.4em, 14px);
                border-radius: 20px;
                margin: 0 auto;
                margin-top: min(0.5rem, 20px);
                cursor: pointer;
            }
            h2{
                font-size: min(2.4em, 24px);
            }
        }
    }
</style>