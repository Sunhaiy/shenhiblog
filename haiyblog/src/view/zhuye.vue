<template>
<div id="root">
    <div id="top"></div>
    <div id="center"></div>
    <div id="bottom"></div>
</div>
</template>



<script setup>


</script>



<style scoped>
#root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
#top{
    flex: 1;
}
#center{
    flex: 1;
}
#bottom{
    flex: 1;
    
}
</style>