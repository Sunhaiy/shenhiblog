<template>
    <div id="root">
        <div id="left">
            <card :info="diardata" :getid="getid" />
        </div>
        <div id="right">
            <div id="rhhea">
                <h1 id="titlenow">{{currenttitle}}</h1>
                <span id="weathernow">{{currentweather}}</span>

            </div>
            <hr>
            
            <div id="content" v-html="currentcontent" >
                
            </div>
            
        </div>

    </div>
</template>



<script setup>
import axios from 'axios';
import card from '../components/card.vue';
import { ref } from 'vue';
const diardata = ref();

const currentweather = ref();
const currenttitle = ref();
const currentcontent = ref();
async function getdiary() {
    const diar = await axios.get('http://127.0.0.1:2005/laisheng')
    console.log(diar.data)
    diardata.value = diar.data
    currentweather.value = diardata.value[0].weacher;
    currenttitle.value = diardata.value[0].title;
    currentcontent.value = diardata.value[0].content;
}
getdiary()

function getid(id) {
    console.log(id);
    const nowdata =diardata.value.find(item => item.id === id)
    console.log(nowdata);
    currentweather.value = nowdata.weacher;
    currenttitle.value = nowdata.title;
    currentcontent.value = nowdata.content;
    
}
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
    background-color: #171717;
    border-radius: 20px;
    margin: 0 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #26262b;
    transition: all 0.5s ease-in-out;
}
#right:hover{
    border: 2px solid #c0dd19;
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