<template>
    <div id="root">
        <div id="top">
            <h2>竹简✨</h2>
            <span id="untitle">那就许愿我们共同花费的时间，在彼此心里有相等的价格。</span>
        </div>
        <div id="center">
            <liuyanban :list="data"/>
        </div>
        <div id="bottom">写留言面板按钮常驻右下角</div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import liuyanban from '../components/liuyanban.vue'
import axios from 'axios';
const data =ref([]);
async function getliuyan() {
    const liuyan = await axios.get('http://127.0.0.1:2005/liuyan')
    console.log(liuyan.data)
    data.value = liuyan.data
}
getliuyan()
</script>



<style scoped>
#root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    
}

#top {

    display: flex;
    flex-direction: column;
}

#untitle {
    color: #A1A1AA;
}

#center {
    
    padding-top: 20px;
    display: flex;
    flex-flow: row wrap;
    
}

#bottom {
    flex: 1;

}
</style>