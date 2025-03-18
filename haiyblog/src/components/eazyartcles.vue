<template>
    <a href="">
        <div id="root4">

            <img src="../assets/1742186245750.jpg" alt="shenhi" id="userart">
            <span id="fenlei">WEB DESIGN</span>
            <span id="title">Author position </span>
            <div id="btn2"></div>
            
        </div>
    </a>
</template>



<script setup>


</script>



<style scoped>
#root4 {
    height: 400px;
    width: 300px;
    background-color: #171717;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
    filter: drop-shadow(0 0 10px #000000);
    transition: all 0.5s;
    border: 2px solid #f3f0e7;
    
}
#root4:hover {
    filter: drop-shadow(0 0 100px #f5f3ed);
    
}
#userart {
    border-radius: 20px;
    height: 250px;
    object-fit: cover;
}

#fenlei {
    margin-top: 20px;
    color: #5E6161;
    font-size: 20px;
}

#title {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
}
a{
    text-decoration: none;
}
#btn2{
    height: 20px;
    width: 20px;
    margin-left: 240px;
    border-radius: 10px;
    border: 5px solid #fff;
    filter: drop-shadow(0 0 10px #5E6161);
    transition: filter 0.5s,height 0.5s,width 0.5s,border-radius 0.5s;
}
#btn2:hover{
    height: 25px;
    width: 25px;
    border-radius: 15px;
    filter: drop-shadow(0 0 40px #fff);
}
</style>