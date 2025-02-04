<template>
    <div id="root" v-for="item in 10">
        <div id="top">
            <img id="img" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="laisheng" ></img>
        </div>
        <div id="bottom">
            <span id="fenlei">技术</span>
            <span id="title">测试一下标题123</span>
            <span id="time">2025年2月4日</span>
        </div>
    </div>
</template>



<script setup>


</script>



<style scoped>
#root {
    width: 250px;
    height: 250px;
    background-color: #18181B;
    border-radius: 9px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
#top{
    overflow: hidden;
    width: 100%;
    height: 130px;

}
#img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
#bottom{
    display: flex;
    flex-direction: column;
}
</style>