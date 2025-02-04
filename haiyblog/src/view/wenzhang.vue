<template>
    <div id="root">
        <div id="top">
            <SelectButton v-model="value" :options="options" optionLabel="name" id="selectbtn" />
            <div id="topright">
                <IconField id="search">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="value12" placeholder="Search" />
                </IconField>
                <Button icon="pi pi-envelope" iconPos="top" id="btnright" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                    id="touxiang" />
            </div>

        </div>
        <div id="center">
            <span id="title">Keep watching</span>
            <div id="artcontiner">
                <articles/>
            </div>
        </div>
        <div id="bottom">
            <SelectButton v-model="valuebootom" :options="optionbootom" optionLabel="name" id="selectbtn" />
        </div>
    </div>
</template>



<script setup>

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import SelectButton from 'primevue/selectbutton';
import articles from '@/components/articles.vue';
import { ref } from 'vue';

const value = ref({ name: 'Option 1', value: 1 },);
const valuebootom = ref({ name: '前端✨', value: 1 });
const options = ref([
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 4', value: 3 },
    { name: 'Option 5', value: 4 },
    { name: 'Option 6', value: 5 }
]);
const optionbootom = ref([
    { name: '前端✨', value: 1 },
    { name: '后端', value: 2 },
    { name: 'nodejs', value: 3 },
    { name: 'Option 5', value: 4 },
    { name: 'Option 6', value: 5 }
]);

</script>



<style scoped>
#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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

#search,
#btnright {
    margin-right: 10px;
}
#title{
    align-self: flex-start;
}
#selectbtn {
    flex: 2;
}

#center {
    flex: 1;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
}
#artcontiner{
    
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 1350px;
    align-items: center;
    justify-self: center;
    Flex-flow:row wrap;
}

#bottom {
    flex: 1;

}
</style>