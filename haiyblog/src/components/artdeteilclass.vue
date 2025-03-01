<template>
    <div id="root2" v-if="wenzhang">
        <div id="top">
            <h1 id="titleart" >{{wenzhang.title}}</h1>
            <span id="timer" >P{{ wenzhang.created_at }}</span>

        </div>
        <div id="center2" v-html="wenzhang.content">
            
        </div>
        <div id="bottom">
            <Pinglun/>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import Pinglun from './pinglun.vue';
import axios from 'axios';
const wenzhang =ref();


const props = defineProps({
    artid: {
        type: Number,
        
    },
});
console.log(props.artid);
async function getcontent() {
    
   const data = await axios.get(`http://127.0.0.1:2005/articles/${props.artid}`)
   console.log(data.data);
   wenzhang.value =data.data[0]
   console.log(wenzhang.value);
}
getcontent()
</script>



<style scoped>
#root2 {
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-width: 600px;
    border-radius: 20px;
    
}

#top {
    border-radius: 20px 20px 0px 0px;
    height: 200px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    padding: 40px;
}

#titleart {
    color: rgb(35, 35, 35);

    font-weight: bold;
}

#timer {
    color: rgb(35, 35, 35);
    font-size: 20px;
    font-weight: bold;
}

#center2 {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: rgb(42, 41, 41);
    color: antiquewhite;
}
</style>