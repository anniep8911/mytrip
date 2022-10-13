<template>
    <Hdr></Hdr>
    <Main v-bind:title="title" :hello="hello"></Main>
    <Modal @msg="msgBB" v-if="visible"></Modal>
    <Content01 v-bind:title="title"></Content01>
    <Ftr></Ftr>
</template>

<script>
import Hdr from './components/Hdr.vue';
import Ftr from './components/Ftr.vue';
import Modal from './components/Modal.vue';
import Main from './components/main.vue';
import Content01 from './components/cnt01.vue';
export default {
  name: 'App',
  data(){
    return{
      title:'방문자',
      visible:true,
      hello:'',
    }
  },
  components: {
    Hdr:Hdr,
    Ftr:Ftr,
    Modal:Modal,
    Main:Main,
    Content01:Content01,
  },
  mounted(){
    this.$nextTick(function(){
      if(document.cookie == '' || document.cookie == 'nobody'){
        this.visible= true;
        this.hello = '첫 방문이시네요!'
      }else{
        this.visible=false;
        this.title = document.cookie;
        this.hello = '또 만났네요!'
      }
    })
  },
  methods:{
    msgBB(msg){
      this.title = msg;
      this.visible=false;
      this.cook = msg;
      if(msg==''){
        alert('이름을 입력해주세요!');
        this.title='방문자';
        this.visible=true;
      }
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
  body,h1,h2,h3,h4,h5,h6,ul,li,p{margin: 0;padding: 0;}
  html{font-size: 3.7vw; font-family: 'Noto Sans KR'; font-weight: 300; overflow-x: hidden;}
  body{position: relative; font-size:0.95vw;}
  ul{list-style: none;}
  //공통영역
  div.cntWrap{
    margin-top: min(3rem, 120px);
    div.content{
      width: 80%;
      max-width: 1080px;
      margin: 0 auto;
      header{
        h2{
          font-size: min(3.6em, 36px);
          text-transform: capitalize;
        }
        h5{
          font-size: min(1.6em,16px);
        }
        p{
          font-size: min(1.8em,18px);
          line-height: min(2em, 20px);
          margin-top: min(2em, 20px);
        }
      }
      section{
        margin-top: min(1rem, 40px);
        .image{
          background-repeat: no-repeat;
          background-position:center;
          background-size: cover;
          color: transparent;
        }
      }
    }
  }
</style>
