<template >
    <div id="card" v-for="i in info" key="{{i.id}}" v-if="info" @click="tiaozhuan(i.id)">
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
const props =defineProps(['info'])
console.log();
function tiaozhuan(id){
    console.log(id)
    
}
</script>



<style scoped>
#card{
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 10px;
    background-color: #262626;
    border-radius: 20px;
    border: 1px solid #4e4d4d;
    transition: all 0.3s;
}
#card:hover{
    background-color: #2b2b2b;
    border: 1px solid #696868;
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
    border: 1px solid #4e4d4d;
    
    
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