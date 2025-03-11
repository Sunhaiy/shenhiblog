<template>
 <div id="admin">
    <div id="admin-menu">
        
        <button id="menuclk" v-for="item in itemmenu" @click="luyou(item.name)"><span :class="item.icon"></span>{{item.label}}</button>
    </div>
    <router-view></router-view>
    
 </div>
</template>



<script setup>

import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
const itemmenu  =ref( [
    {name:'admin',label:'Home',icon:'pi pi-home'},
    {name:'artadmin',label:'文章',icon:'pi pi-pencil'},
    {name:'laishengadmin',label:'来生',icon:'pi pi-pen-to-square'},
    {name:'liuyanadmin',label:'留言',icon:'pi pi-comment'},
    {name:'linkadmin',label:'友链',icon:'pi pi-user'},
])
function luyou(name) {
    router.push({name: name})
    
}

</script>



<style scoped>
#admin{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}
#admin-menu{
    height: 50px;
    background-color: #171717;
    border: 2px solid #26262b;
    border-radius: 9px;
    transition: all 0.5s;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    padding: 10px 50px;
}
#admin-menu:hover{
    
}
#menuclk{
    font-weight: 600;
    width: 70px;
    height: 30px;
    border: 2px solid #dfcb46;
    background-color: #171717;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 40px;
    overflow: hidden;
}
#menuclk:hover{
    
    border: 2px solid #46dfd0;
}

</style>