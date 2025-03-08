<template>
    <div id="root3">
        <div class="userprofile" v-for="item in 6">
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" class="ava">
            <div class="userinfo">
                <span class="names">孫海洋 <span class="usertag">版主</span></span>
                <span class="neirong">跟踪和监视你的投资 -- 所有操作都在跟踪和监视你的投资 -- 所有操作都在跟踪和监视你的投资 -- 所有操作都在跟踪和监视你的投资 --
                    所有操作都在跟踪和监视你的投资 -- 所有操作都在跟踪和监视你的投资 -- 所有操作都在一个位置执行。单击 图标，将股票添加到观察列表，孫海洋是大帅逼<span
                        class="liuyantime">2025/2/18</span><span class="reply">回复</span></span>
                <div class="dianzancontiner">
                    <span class="pi pi-heart heart"></span>
                    <span class="jishu">0</span>
                </div>



            </div>
        </div>
        
        <div id="fenye">
            <button class="fenyebtn" v-for="item in count.pinglunconfig.first">{{ item }}</button>
            <button class="fenyebtn">...</button>
            <button class="fenyebtn" v-for="item in count.pinglunconfig.end">{{ item }}</button>
            
        </div>

    </div>
</template>



<script setup>
import { ref } from 'vue';
defineProps(['fenyedata']);

const count =ref({
    pinglunconfig:{
        first:3,
        end:3
    },
    pinglundata:[]
})

</script>



<style scoped>
#root3 {
    
    min-width: 400px;
    background-color: rgb(33, 33, 33);
    display: flex;
    position: relative;
    padding: 40px;
    flex-direction: column;
}


.userprofile {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    border: 1px solid #4e4d4d;
    padding: 20px;
    border-radius: 9px;
    transition: all 0.5s;
}
.userprofile:hover,.userprofile2:hover{
    border: 1px solid #696868;
    background-color: rgb(46, 46, 46);
}
.userprofile2 {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 80px;
}

.userinfo {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.names {
    color: #5D5E61;
    font-size: 15px;
    font-weight: bold;
}

.neirong {
    margin-top: 10px;
    color: rgb(220, 219, 219);
}

.ava {
    height: 40px;
    width: 40px;
    border-radius: 25px;
}

.reply {
    color: #908F93;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
}

.liuyantime {
    margin-left: 5px;
    color: #5D5E61;
    font-size: 12px;
    font-weight: bold;
}

.usertag {
    background-color: #FF3F33;
    border-radius: 2px;
    padding: 1px 5px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.dianzan {
    color: #FF3F33;
    font-size: 20px;
    font-weight: bold;
    margin-top: 1px;
    align-self: flex-end;
    margin-right: 10px;
    top: 20px;
}

.heart {
    align-self: flex-end;
    margin-right: 10px;
    color: rgb(66, 66, 66);
    transition: color 0.5s;
    padding: 2px;
}

.heart:hover {
    color: #FF3F33;
}
.dianzancontiner{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    color: #5D5E61;
    margin-right: 2px;
}

#fayan {
    width: 600px;
    height: 40px;
    background-color: rgb(46, 46, 46);
    border-radius: 5px;
    position: absolute;
    top: 40px;
    align-self: center;
}
#fenye{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    background-color: rgba(46, 46, 46, 0);
    border-radius: 9px;
    height: 50px;
    align-items: center;
}
.fenyebtn{
   height: 30px;
   width: 30px;
   background-color: #3d3c3c;
   border: 1px solid #525151;
   border-radius: 5px;
   margin: 0 5px;
   color: antiquewhite;
   transition: all 0.5s;
}
.fenyebtn:hover{
    background-color: antiquewhite;
    border: 1px solid #3d3c3c;
    color: #3d3c3c;
}
</style>