<template>
<div id="root3">
    <div class="userprofile">
        <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" class="ava">
        <div class="userinfo">
            <span class="names">孫海洋 <span class="usertag">版主</span></span>
            <span class="neirong">跟踪和监视你的投资 -- 所有操作都在一个位置执行。单击  图标，将股票添加到观察列表，孫海洋是大帅逼<span class="liuyantime">2025/2/18</span><span class="reply">回复</span></span>
            <span class="dianzan">❤</span>
        </div>
    </div>
    
    <div id="fayan">

    </div>
    
</div>
</template>



<script setup>


</script>



<style scoped>
#root3{
    min-width: 600px;
    background-color: rgb(33, 33, 33);
    display: flex;
    
    padding: 40px;
    flex-direction: column;
}
.userprofile{
    display: flex;
    flex-direction: row;
}
.userinfo{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.names{
    color: #5D5E61;
    font-size: 15px;
    font-weight: bold;
}
.neirong{
    color: white;
}
.ava{
    height: 40px;
    width: 40px;
    border-radius: 25px;
}
.reply{
    color: #908F93;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
}
.liuyantime{
    margin-left: 5px;
    color: #5D5E61;
    font-size: 12px;
    font-weight: bold;
}
.usertag{
    background-color: #FF3F33;
    border-radius: 2px;
    padding: 1px 5px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}
.dianzan{
    color: #FF3F33;
    font-size: 20px;
    font-weight: bold;
    margin-top: 2px;
    align-self: flex-end;
    margin-right: 10px;
}
#fayan{
    height: 40px;
    background-color: rgb(46, 46, 46);
    border-radius: 5px;
    
}
</style>