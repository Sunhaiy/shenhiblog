<template>
    <div id="root">
        <div id="top">
            <button id="tui" @click="$router.go(-1)">
               <span class="pi pi-angle-left fontmain"></span>
            </button>
        </div>
        <div id="center">
            <Artdeteilclass :artid="id"/>
        </div>
        <div id="bottom">
            <div id="rightliebiao">
                <span>文章目录</span>
                <a href="">域名解析</a>
                <a href="">域名解析</a>
                <a href="">域名解析</a>
                <a href="">域名解析</a>
            </div>
        </div>
    </div>
</template>



<script setup>
import Artdeteilclass from '@/components/artdeteilclass.vue';

import { useRoute } from 'vue-router';
const route =useRoute();
const {id} = route.params;


</script>



<style scoped>
#root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    
    
}
#top{
    flex: 1;
    display: flex;
    flex-direction: column;
   
}
#tui{
    cursor: pointer;
    position: sticky;
    top: 20px;
    margin-top: 60px;
    border: 0px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    align-self: center;
    background-color: #171717;
    overflow: hidden;
    color: #2A2929;
    font-weight: bolder;
    transition: all 0.5s;
    border: 2px solid #26262b;
}
#tui:hover{
    background-color: #44e3d5;
    filter: drop-shadow(0 0 100px #44e3d5);
}
#tui:active{
    background-color: #44e3d5;
    filter: drop-shadow(0 0 100px #44e3d5);
    transform: scale(0.9);
}
#center{
    flex: 3;
    display: flex;
    padding-right: 40px;
}
#bottom{
    flex: 1;
    display: flex;
    flex-direction: column;
    
}
#rightliebiao{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    border-radius: 20px;
    margin-right: 20px;
    position: sticky;
    top: 20px;
    color: #2A2929;
    font-weight: bolder;
    transition: all 0.5s;
}
#rightliebiao:hover{
    background-color: #2A2929;
    color: antiquewhite;
}
a{
    text-decoration: none;
    outline: none;
    color: inherit;
}
.fontmain{
    color: aliceblue;
    font-weight: 600;
}
</style>