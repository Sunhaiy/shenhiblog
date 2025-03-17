<template>
    <div class="root1">
        <div id="leftcard">
            <div id="info">
                <span id="title">射频电路等设计原理 ！</span>
                <span id="author">by <span>Haiy</span></span>
                <span id="fenlei" >精选✨</span>
                <span id="tagcontiner" >#threejs #blender #after #after#after#after#after#after#after#after</span>
                <button id="jinru">进去看看</button>
            <div id="bottominfo">
                <span id="yuedu">👁阅读1000</span>
                <span id="time">发布于：2021-10-10</span>
            </div>
            </div>
            <div id="imgcontiner">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="" id="img"></img>
            </div>
        </div>
        <div class="rightcard">
            <div id="imgnor">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="" id="imgnor">
            </div>
            <div id="bottom">
                <span id="heading">集成电路制造工艺</span>
                <span id="introduce">深入探讨集成电路制造的各个环节，以及先进节点工艺的挑战与发展趋势。</span>
                <button id="jinrubtn2">春和景明</button>
            </div>
        </div>

    </div>



</template>



<script setup>

</script>



<style scoped>
.root1 {
    cursor: pointer;
    min-width: 1300px;
    height: 300px;

    margin: 10px;
    display: flex;
    flex-direction: row;

}

#leftcard {
    width: 900px;
    height: 300px;
    background-color: #171717;
    transition: all 0.3s;
    border-radius: 20px;
    border: 2px solid #26262b;
    padding: 30px;
    display: flex;
}


.rightcard {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    background-color: #171717;
    flex: 1;
    border-radius: 20px;
    margin: 0 20px;
    border: 2px solid #26262b;
    transition: all 0.3s;
    padding: 20px;
}

#leftcard:hover,
.rightcard:hover {

    border: 2px solid #46dfd3;

}
#leftcard:active,
.rightcard:active {
    transform: scale(0.9);
    

}
#info {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    width: 460px;
}

#title {
    color: #fff;
    font-size: 30px;
    
    
    background-image: -webkit-linear-gradient(right, #46dfd3, #03e4fd, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 50px #ffffff);


}

#title:hover {
    color: #46dfd3;
}

#imgcontiner {
    flex: 1;
    height: 236px;
    width: 236px;
    background-color: #03e4fd;
    align-self: center;
    justify-self: center;
    border-radius: 9px;
    overflow: hidden;
    border: 2px solid #5e5e71;
    filter: grayscale(50%);
    transition: all 0.5s;
    
}
#imgcontiner:hover {
    filter: grayscale(0%);
    
}
#img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
#like{
    font-weight: 600;
    background-color: #171717;
    color: #46dfd3;
    border: 2px solid #46dfd3;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
}
#tag{
    color: #d0df46;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
}
#yuedu{
    
    color: #5c5b5b;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
}
#bottominfo{
    width: 100%;
    flex: 1;
    display: flex;
    align-items: end;
    justify-content: space-between;
    
}
#time{
    color: #5c5b5b;
    font-size: 12px;
    font-weight: 600;
    margin-right: 40px;
}
#tagcontiner{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    color: #484851;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
}
#fenlei{
    color: #a63cfd;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
    border: 2px solid #a63cfd;
    padding: 2px;
    width: 50px;
    border-radius: 5px;
}
#jinru{
    background-color: #46dfd3;
    color: #171717;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid #46dfd3;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
    height: 50px;
    margin-top: 20px;
    width: 390px;
    transition: all 0.3s;
}
#jinru:hover{
    background-color: #03e4fd;
    color: #171717;
    border: 2px solid #03e4fd;
}
#jinru:active{
    transform: scale(0.9);
}
#imgnor{
    height: 150px;
    width: 100%;
    background-color: #03e4fd;
    border-radius:9px;
    border: 1px solid #5e5e71;
}
#bottom{
    display: flex;
    flex: 1;
    flex-direction: column;
    
    overflow: hidden;
    text-overflow: ellipsis;
}
#introduce{
    font-size: small;
    font-weight: 600;
    color: #5c5b5b;
    height: 40px;
    
}
#heading{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    
}
#jinrubtn2{
    
    height: 30px;
    width: 100px;
    background-color: #46dfd3;
    color: #171717;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid #46dfd3;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
}
#jinrubtn2:hover{
    background-color: #03e4fd;
    color: #171717;
    border: 2px solid #03e4fd;
}
#jinrubtn2:active{
    transform: scale(0.9);
}
</style>