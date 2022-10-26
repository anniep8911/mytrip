<template>
    <Hdr @ind="indFn" :visitor="visitor" :hello="hello"></Hdr>
    <Modal @msg="msgBB" v-if="visible"></Modal>
    <RouterView :visitor="visitor" :device_type="device_type"></RouterView>
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
      device_type:'pc',
    }
  },
  components: {
    Hdr:Hdr,
    Ftr:Ftr,
    Modal:Modal,
  },
  mounted(){
    this.$nextTick(function(){
      const wd =window.innerWidth;
      if(document.cookie == '' || document.cookie == 'nobody'){
        this.visible= true;
        this.hello = '첫 방문이시네요!'
      }else{
        this.visible=false;
        this.visitor = document.cookie;
        this.hello = '또 만났네요!'
      }

      if(wd>=1025){
        this.device_type = 'pc'
      }else if(wd<=1024 && wd >= 480){
        this.device_type = 'tab'
      }else{
        this.device_type = 'mob'
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
  // reset
  @use './components/reset.css';
  @use './components/mixins.scss' as mix;
  
  // mixins
  @mixin device($dev){
    @if($dev == 'pc'){
      width: 80%;
      max-width: 1080px;
      margin: 0 auto;
    }@else if($dev == 'tab'){
      width: 90%;
      max-width: 700px;
      margin: 0 auto;
    }@else if($dev==mob){
      width: 90%;
      margin: 0 auto;
    }
  }

  @mixin tab{
    @media (min-width:0px) and (max-width:1024px) {
      @content;
    }
  }
  @mixin mob{
    @media (min-width:0px) and (max-width:420px) {
      @content;
    }
  }
  
  //common
  div.cntWrap{
    margin-top: min(3rem, 120px);
    @include tab{
      @include mix.mzn(mob,top,0.5);
    }
    div.content{
      @include device('pc');
      @include tab{
        @include device('tab');
      }
      @include mob{
        @include device('mob');
      }
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
        @include tab{
          h2{
          font-size: max(1.6em, 16px);
        }
        h5{
          font-size: max(1.2em,12px);
        }
        p{
          font-size: max(1.2em,12px);
          line-height: max(2em, 20px);
          margin-top: max(1em, 10px);
        }
        }
      }
      section{
        margin-top: min(1rem, 40px);
        @include tab{
          margin-top: max(0.5rem, 20px);

        }
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
          @include mix.tab{
            @include mix.mzn(mob,top,0.5);
            @include mix.fontz(mob,1.3);
            @include mix.lhz(mob,0.8);
          };
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
  .bnrWrap{
    .banner{
      @include device('pc');
      @include tab{
        @include device('tab');
      }
      @include mob{
        @include device('mob');
      }
    }
  }
</style>
