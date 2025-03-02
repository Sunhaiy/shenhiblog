<template>
    <div id="root">
        <div id="top">
            <button id="tui" @click="$router.go(-1)">
               离开
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
    position: sticky;
    top: 20px;
    margin-top: 60px;
    border: 0px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    align-self: center;
    background-color: antiquewhite;
    overflow: hidden;
    color: #2A2929;
    font-weight: bolder;
    transition: all 0.5s;
}
#tui:hover{
    background-color: #2A2929;
    color: antiquewhite;
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
</style>