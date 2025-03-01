<template>
    <div id="root">
        <div id="top">
            <button id="tui" >
               离开
            </button>
        </div>
        <div id="center">
            <Artdeteilclass :artid="id"/>
        </div>
        <div id="bottom">12</div>
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
}

#center{
    flex: 3;
    display: flex;
    padding-right: 40px;
}
#bottom{
    flex: 1;
   
}
</style>