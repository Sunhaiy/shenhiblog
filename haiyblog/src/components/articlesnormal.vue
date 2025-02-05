<template>
    <div id="root" v-for="item in 10">
        
        <a href="#">
            <div id="top">
            <img id="img" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="laisheng" ></img>
        </div>
        <div id="bottom">
            <span id="fenlei">技术</span>
            <span id="title">如何才能做一个自己的博客</span>
            <span id="time">2025年2月4日</span>
        </div>
        </a>
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
    border: 2px solid #18181B;
    transition: border 0.5s;
}
#root:hover{
    border: 2px solid #46dfd3;
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
    margin-left: 10px;
    flex: 1;
    
}
#fenlei{
    color: #a63cfd;
    font-size: 12px;
    font-weight: 500;
    
    margin-top: 10px;
}
 #title{
    color: #fff;
    transition: color 0.3s;
 }
 #title:hover{
    color: #46dfd3;
 }
 #time{
    color: #5c5b5b;
    font-size: 12px;
    font-weight: 500;
    margin-top: 30px;
    
 }
 a{
    text-decoration: none;
   
}

</style>