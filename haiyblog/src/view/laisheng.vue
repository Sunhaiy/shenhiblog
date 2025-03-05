<template>
    <div id="root" >
        <div id="left">
            <card :info="diardata"/>
        </div>
        <div id="right">
            <div id="rhhea">
                <h1 id="titlenow">无题</h1>
                <span id="weathernow">晴天🥰</span>

            </div>
            <hr>
            <div id="content">
               {{ diardata }}
            </div>
        </div>

    </div>
</template>



<script setup>
import axios from 'axios';
import card from '../components/card.vue';
import { ref } from 'vue';
const diardata =ref();
async function getdiary() {
    const diar = await axios.get('http://127.0.0.1:2005/laisheng')
    console.log(diar.data)
    diardata.value = diar.data
}
getdiary()
</script>



<style scoped>
#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
}

#left {}

#right {
    flex: 1;
    position: sticky;
    top: 0px;
    background-color: #262626;
    border-radius: 20px;
    margin: 0 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#content {
    font-weight: bold;
    padding: 20px;
    flex: 1;
}

#rhhea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

hr {
    width: 100%;
    border: 1px solid #524f4f;
}

#weathernow {
    font-weight: bold;
    align-self: center;
    background: linear-gradient(to right, #03eaa5, #06ca54);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

#titlenow {
    background: linear-gradient(to right, #ababab, #efefe8);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
}
</style>