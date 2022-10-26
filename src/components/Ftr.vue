<template>
    <div class="bnrWrap">
        <div class="banner bnr">
            <h2>our tripstore</h2>
            <div class="btn">contact</div>
        </div>
    </div>
    <div class="ftrWrap">
        <footer>
            <div class="ftrLeft">
                <div class="logo">tripStore</div>
                <h4>Tripstroe Company. All rights reserved.</h4>
            </div>
            <div class="ftrRgiht">
                <ul class="nav">
                    <li>Company</li>
                    <li>Careeres</li>
                    <li>Press</li>
                    <li>Foundation</li>
                    <li>Private</li>
                </ul>
                <ul class="nav">
                    <li>Get in Touch</li>
                    <li>010-888-9999</li>
                    <li>pjatopazz@gmail.com</li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
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
    div.bnrWrap{
        background-image: url('../assets/index_bnr01.jpg');
        margin-top: min(3rem,120px);
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        @include tab{
            margin-top: min(2rem,80px);
        }
        .bnr{
            padding: min(4rem, 160px) 0;
            color: #fff;
            text-align: center;
            @include tab{
                padding: max(0.5rem, 20px) 0;
            }
            h2{
                font-size: min(4.8em,48px);
                line-height: min(2rem,80px);
                text-transform: capitalize;
                @include tab{
                    font-size: max(1.5em,15px);
                }
            }
            .btn{
                width: 30%;
                border: 1px solid #fff;
                margin: 0 auto;
                margin-top: min(1rem,40px);
                line-height: min(1rem,40px);
                text-transform: uppercase;
                @include tab{
                    margin-top: min(0.5rem,20px);
                }
                cursor: pointer;
                position: relative;
                &::before{
                    content: '';
                    display: block;
                    width: 0%;
                    background:linear-gradient(90deg, #fff 0% , transparent 100%);
                    height:  min(1rem,40px);
                    position: absolute;
                    top: 0;left: 0;
                    transition: width 0.5s;
                }
                &:hover{
                    &::before{
                        width: 100%;
                    }
                    font-weight: 700;
                    color: #fff;
                }
            }
        }
    }
    div.ftrWrap{
        background-color: #003333;
        color: #fff;
        @include tab{
            height: 60px;
            overflow: hidden;
        }
        footer{
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 80px 0;
            @include tab{
                padding: 0;
                display: block;
            }
            div.ftrLeft{
                div.logo{
                    color: transparent;
                    background-image: url('../assets/logo_name.png');
                    width: 180px;
                    height: min(1rem, 40px);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: left;
                    @include tab{
                        margin: 0 auto;
                        height: 30px;
                        width: 100px;
                        margin-top: 10px;
                    }
                }
                h4{
                   margin-top: min(4.5rem, 180px);
                   font-size: min(1.2em, 12px);
                }
            }
            div.ftrRgiht{
                display: flex;
                width: 35%;
                justify-content: space-between;
                ul{
                    li{
                        font-size: min(1.8em, 18px);
                        line-height: min(1rem, 40px);
                    }
                    li:nth-child(1){
                        font-size: min(2.4em, 24px);
                        line-height: min(2rem, 80px);

                    }
                }
            }
            
        }
    }
</style>