<template>
    <div id="root">
        <div id="top">10</div>
        <div id="center">
            <Artdeteilclass/>
        </div>
        <div id="bottom">12</div>
    </div>
</template>



<script setup>
import Artdeteilclass from '@/components/artdeteilclass.vue';



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