<template>
<div id="root2">
    <div id="title">技术栈HI</div>
    <div id="jishuazncontiner">
        <img src="../assets/logo.svg" alt="vue" id="jishuzhan">
        <img src="../assets/electron.svg" alt="electron" id="jishuzhan">
        <img src="../assets/js.svg" alt="js" id="jishuzhan">
        <img src="../assets/ts.svg" alt="ts" id="jishuzhan">
        <img src="../assets/css.svg" alt="vcss" id="jishuzhan">
        <img src="../assets/h5.svg" alt="h5" id="jishuzhan">
        <img src="../assets/nignx.svg" alt="nignx" id="jishuzhan">
        <img src="../assets/npm.svg" alt="npm" id="jishuzhan">
        <img src="../assets/vite.svg" alt="vite" id="jishuzhan">
        <img src="../assets/git.svg" alt="git" id="jishuzhan">
        <img src="../assets/github.svg" alt="github" id="jishuzhan">
        <img src="../assets/sql.svg" alt="sql" id="jishuzhan">
    </div>
    

</div>
</template>

<script setup>

</script>

<style scoped>
#root2{
    width: 300px;
    height: 260px;
    border-radius: 9px;
    border: 2px solid #ececec;
    background: linear-gradient(to top right, rgb(255, 103, 1),rgba(3, 255, 205, 0.8), rgb(255, 0, 238));
    background-size: 400%;
    animation: shenhi 5s infinite;
    filter: drop-shadow(0px 0px 10px rgba(238, 224, 224, 0.5));
    transition: filter 0.5s;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    min-width: 300px;
}
#root2:hover{
    filter: drop-shadow(0px 0px 30px rgba(240, 238, 238, 0.5));
}
@keyframes shenhi{
    0%{
        background-position: 0% 0%;
    }

    50%{
        background-position: 100% 100%;
    }
    100%{
        background-position: 0% 0%;
    }
}

#jishuzhan{
    height: 35px;
    width: 35px;
    object-fit: cover;
    margin: 5px;
    
}
#title{
    font-size: 60px;
    font-weight: bold;
    flex: 1;
    margin-left: 5px;
    overflow: hidden;
}
#jishuazncontiner{
    display: flex;
    flex: 1;
    flex-flow: wrap;
    
}
</style>
