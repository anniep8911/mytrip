<template>
    <div class="bnrWrap">
        <div class="bnr">
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
    div.bnrWrap{
        background-image: url('../assets/index_bnr01.jpg');
        margin-top: min(3rem,120px);
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        .bnr{
            padding: min(4rem, 160px) 0;
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            color: #fff;
            text-align: center;
            h2{
                font-size: min(4.8em,48px);
                line-height: min(2rem,80px);
                text-transform: capitalize;
            }
            .btn{
                width: 30%;
                border: 1px solid #fff;
                margin: 0 auto;
                margin-top: min(1rem,40px);
                line-height: min(1rem,40px);
                text-transform: uppercase;
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
        background-color: #033;
        color: #fff;
        footer{
            width: 80%;
            max-width: 1080px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 80px 0;
            div.ftrLeft{
                div.logo{
                    color: transparent;
                    background-image: url('../assets/logo_name.png');
                    width: 180px;
                    height: min(1rem, 40px);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: left;
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