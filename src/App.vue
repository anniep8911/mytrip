<template>
    <Hdr @ind="indFn" :visitor="visitor" :hello="hello"></Hdr>
    <Modal @msg="msgBB" v-if="visible"></Modal>
    <RouterView :visitor="visitor"></RouterView>
    <Ftr></Ftr>
</template>

<script>
import Hdr from './components/Hdr.vue';
import Ftr from './components/Ftr.vue';
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  data(){
    return{
      visitor:'방문자',
      visible:true,
      hello:'',
      ind:0,
      upup:0,
    }
  },
  components: {
    Hdr:Hdr,
    Ftr:Ftr,
    Modal:Modal,
  },
  mounted(){
    this.$nextTick(function(){
      if(document.cookie == '' || document.cookie == 'nobody'){
        this.visible= true;
        this.hello = '첫 방문이시네요!'
      }else{
        this.visible=false;
        this.visitor = document.cookie;
        this.hello = '또 만났네요!'
      }
    })
  },
  methods:{
    msgBB(msg){
      this.visitor = msg;
      this.visible=false;
      if(msg==''){
        alert('이름을 입력해주세요!');
        this.visitor='방문자';
        this.visible=true;
      }
    },
    indFn(ind){
      this.ind = ind;
    },
    updaTT(up){
      this.upup = up;
      console.log(this.upup);
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
  body,h1,h2,h3,h4,h5,h6,ul,li,p,a{margin: 0;padding: 0;}
  a{color:inherit;text-decoration:none}
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
          overflow: hidden;
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
        .texts{
          h3{
            font-size: min(2.8em,28px);
            text-transform: uppercase;
            position: relative;
            line-height: min(2rem,80px);
          }
          h5{
            font-size: min(1.5em,15px);
            font-weight: 400;
          }
          p{
            margin-top: min(2em,20px);
            font-size: min(1.4em,14px);
            line-height: min(2em,20px);
          }
        }
      }
  .btn{
          width: 50%;
          line-height: min(1rem,40px);
          border: 1px solid #033;
          text-transform: uppercase;
          color: #033;
          font-size: min(1.6em, 16px);
          text-align: center;
          border-radius: 20px;
          margin-top: min(1rem,40px);
          position: relative;
          overflow: hidden;
          transition: color 1s;
          font-weight: 700;
          cursor: pointer;
          &::before{
              content: '';
              display: block;
              position: absolute;
              width: 0%;
              height: 50px;
              background: linear-gradient(90deg, #033 0%, transparent 100%);
              transition: width 0.5s;
              z-index: -1;
          }
          &:hover{
              &::before{
                  width: 100%;
              }
              color: #fff;
          }
      }
    }
  }
</style>
