<template>
    <div id="root">
        <div id="top">
            <SelectButton v-model="value" :options="options" optionLabel="name" id="selectbtn" />
            <div id="topright">
                <IconField id="search">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="value12" placeholder="Search" />
                </IconField>
                
            </div>

        </div>
        <div id="center">
            <articles/>
        </div>
        <div id="bottom">
            <SelectButton v-model="valuebootom" :options="optionbootom" optionLabel="name" id="selectbtn" />
            <div id="normalcontiner">
                <articlesnormal :list="data2"/>
                
            </div>
           
        </div>
    </div>
</template>



<script setup>

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import SelectButton from 'primevue/selectbutton';
import articles from '@/components/articles.vue';
import articlesnormal from '@/components/articlesnormal.vue';

import { ref } from 'vue';
import axios from 'axios';
const value = ref({ name: 'Option 1', value: 1 },);
const valuebootom = ref({ name: '前端✨', value: 1 });
const options = ref([
    { name: '精选✨', value: 1 },
    { name: '科普🐳', value: 2 },
    { name: '技术😎', value: 3 },
    { name: '知识🧐', value: 4 },
    
]);
const optionbootom = ref([
    { name: '封装✨', value: 1 },
    { name: '测试😎', value: 2 },
    { name: '版图😶‍🌫️', value: 3 },
    { name: '嵌入式🚔', value: 4 },
    { name: '网络Iternet', value: 5 }
]);
const data2 = ref([]);
async function getartciles(){
    const art = await axios.get('http://127.0.0.1:2005/articles')
    console.log(art.data)
    data2.value = art.data
}
getartciles()
</script>



<style scoped>
#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-right: 20px;
}

#top {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}

#topright {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

#search{
    margin-right: 20px;
}


#title {
    align-self: flex-start;
}

#selectbtn {
    flex: 2;
}

#center {
    
    display: flex;
    
    
    
}

#artcontiner {

    
    display: flex;
    flex-direction: row;
    overflow: hidden;
    
    align-items: center;
    justify-self: center;
    Flex-flow: row wrap;
}

#bottom {
    flex: 1;


}

#normalcontiner {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;

}

</style>