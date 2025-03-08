<template>
    <div id="root">
        <div id="top">
            <h2>竹简✨</h2>
            <span id="untitle">那就许愿我们共同花费的时间，在彼此心里有相等的价格。</span>
        </div>
        <div id="center">
            <liuyanban :list="data" />
        </div>
        <div id="bottom"></div>
        <Button icon="pi pi-pencil" rounded variant="outlined" aria-label="Filter" id="changzhu" label="写留言"
            @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="竹简" :style="{ width: '25rem' }">
            <div id="dialog">
                <InputGroup class="inputgap">
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText v-model="formdataliuyan.name" placeholder="网名🥰" />
                </InputGroup>
                <InputGroup class="inputgap">
                    <InputGroupAddon>
                        <i class="pi pi-at"></i>
                    </InputGroupAddon>
                    <InputText v-model="formdataliuyan.email" placeholder="邮箱✨" />
                </InputGroup>
                <InputGroup class="inputgap">
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText v-model="formdataliuyan.img" placeholder="保留上传图片接口" />
                </InputGroup>
                <InputGroup class="inputgap">
                    <InputGroupAddon>
                        <i class="pi pi-pen-to-square"></i>
                    </InputGroupAddon>
                    <InputText v-model="formdataliuyan.content" placeholder="留言内容" />
                </InputGroup>
                <div id="btncontiner">
                    <Button type="button" label="取消" severity="secondary" @click="visible = false"></Button>
                    <Button type="button" label="发送" @click="postdataliuyan()"></Button>
                </div>

            </div>
        </Dialog>
        <Toast />
    </div>
</template>



<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import liuyanban from '../components/liuyanban.vue'
import axios from 'axios';
import Dialog from 'primevue/dialog';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { Toast } from 'primevue';
import { useToast } from "primevue/usetoast";
const toast = useToast();
const data = ref([]);
const visible = ref(false);

const formdataliuyan =ref({
    name:'',
    email:'',
    img:'',
    content:'',
})
async function getliuyan() {
    const liuyan = await axios.get('http://127.0.0.1:2005/liuyan')
    console.log(liuyan.data)
    data.value = liuyan.data
}
getliuyan()

function postdataliuyan() {
    
    console.log(formdataliuyan.value);
    if (!formdataliuyan.value.name || !formdataliuyan.value.email || !formdataliuyan.value.img || !formdataliuyan.value.content) {
        toast.add({ severity: 'error', summary: '错误', detail: '请填写完整', life: 5000});
        return
    }else{
        axios.post()
        toast.add({ severity: 'success', summary: '提交成功', detail: '海洋已收到留言！',life: 5000});
        visible.value = false
    }
    
}
</script>



<style scoped>
#root {
    position: relative;
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

#changzhu {
    height: 50px;
    border-radius: 5px;
    border: 0px;
    position: fixed;
    right: 60px;
    bottom: 80px;
    font-weight: bold;
}

#dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
#btncontiner{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    justify-content: space-around;
}
.inputgap{
    margin-top: 20px;
}
</style>