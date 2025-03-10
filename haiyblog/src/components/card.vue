<template >
    <div id="card" v-for="i in info" key="{{i.id}}" v-if="info" @click="getid(i.id)">
        <div id="heard">
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png" alt="" id="awatar">

            <span id="name">孫海洋</span>
        </div>
        <hr id="line">
        <div id="inner">
            {{ i.title }}
        </div>
        <span id="time">{{ i.time }}</span>
        <span id="weather">{{i.weacher}}</span>
    </div>
</template>



<script setup>
const props =defineProps(['info','getid']);
console.log();

</script>



<style scoped>
#card{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 10px;
    background-color: #171717;
    border-radius: 20px;
    border: 2px solid #26262b;
    transition: all 0.3s;
    filter: drop-shadow(0 0 0px rgb(0, 0, 0));
}
#card:hover{
    background-color: #2b2b2b;
    border: 2px solid #46DFD3;
    filter: drop-shadow(0 0 100px #46DFD3);
}
#heard{
    display: flex;
    align-items: center;
    padding: 20px;
}
#inner{
    flex: 1;
    padding: 20px;
    font-weight: bold;
    font-size: large;
}
#awatar{
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
}
#name{
    font-weight: bold;
    font-size: 15px;
}
#line{
    width: 100%;
    border: 1px solid #26262b;
}
#time{
    font-weight: bold;
    
    font-size: 15px;
    color: #b3b3b3;
    align-self: flex-end;
    justify-content: end;
    margin-right: 10px;
    
}
#weather{
    font-weight: bold;
    padding-top: 2px;
    padding-bottom:10px ;
    font-size: 15px;
    color: #17ea92;
    align-self: flex-end;
    justify-content: end;
    margin-right: 10px;
}
</style>