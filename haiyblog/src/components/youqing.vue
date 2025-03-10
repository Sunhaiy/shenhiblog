<template >
   
    <a :href="'https://'+item.weburl" v-for="item in props.list" key="{{item.mingcheng}}" target="_blank">
        <div class="root">
        
        <div id="imgcontiner">
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar10.jpg" alt="shenhi" id="imgtouxing">
            
        </div>
        <div id="zhuangtai" ></div>
        <span id="name">{{ item.mingcheng }}</span>
    
    </div>
    </a>
</template>



<script setup>
import {defineProps} from 'vue'
const props = defineProps(['list'])
</script>



<style scoped>
.root {
    height: 80px;
    width: 200px;
    background-color: #171717;
    margin-left: 20px;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid #26262b;
    display: flex;
    justify-content: start;
    align-items: center;
    filter: drop-shadow(0 0 0 #26262b);
    
    transition: border 0.2s ;
}
.root:hover{
    border: 2px solid #46DFD3;
    filter: drop-shadow(0 0 100px #46DFD3);
}
#linkitem{
    margin-left: 20px;
}
#name{
    margin-left: 10px;
    margin-right: 10px;
    font-size: large;
    font-weight: bold;
}
#imgcontiner{
    margin-left:20px ;
    overflow: hidden;
    height: 45px;
    width: 45px;
    border-radius: 9px;
}
#imgtouxing{

    height: 100%;
    width: 100%;
    object-fit: cover;
}
#zhuangtai{
    height: 12px;
    width: 12px;
    position: relative;
    top: -20px;
    left: -7px;
    font-size: 12px;
    background-color: rgba(77, 232, 147);
    border-radius: 10px;
    filter: drop-shadow(0px 0px 6px rgb(140, 232, 181));
    
}
a{
    text-decoration: none;
    color: aliceblue;
}
</style>