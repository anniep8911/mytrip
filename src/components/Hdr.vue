<template>
    <div class="hdrWrap">
        <header>
            <h1>tripstore</h1>
            <ul class="nav">
                <li>What we do</li>
                <li>Experience</li>
                <li>Plan</li>
                <li>Editor</li>
                <li>my journey</li>
                <li @click="resetCook">reset</li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    methods:{
        resetCook(){
          document.cookie='nobody';
          window.location.reload();
        }
    }
}
</script>
<style lang="scss">
    div.hdrWrap{
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
</style>