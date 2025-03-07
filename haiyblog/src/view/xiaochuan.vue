<template>
    <div id="root">
        <div id="top">
            <h2>
                小船🥰
            </h2>
            <span id="untitle">从你的全世界路过~~</span>
        </div>
        <div id="center">


            <Youqing :list="list"/>
        </div>

        <div id="bottom">
            <span id="uniner"><span id="toubu">#</span><span id="intronduce">门庭若市</span></span>
            <span class="linkinronduce">🐳贵站必须长期运营满两个月</span>
            <span class="linkinronduce">🐳贵站必须添加本站友链再发起申请</span>
            <span class="linkinronduce">🐳笔者每天都会来看博客，三天内看到会处理</span>
            <span class="linkinronduce">🐳本站自动检测友链</span>
            <span id="uniner"><span id="toubu">#</span><span id="intronduce">奔走相告</span></span>
            <span class="linkinronduce">✨博客名称:深海</span>
            <span class="linkinronduce">✨博客链接:haiy.fun</span>
            <span class="linkinronduce">✨博客图标:https://shenhi.jpg</span>
            <span class="linkinronduce">✨博客简介:带着一项热情横冲直撞</span>





            <Button label="入幕之宾 ✨" @click="visible = true" id="tijiao"/>
            <Dialog v-model:visible="visible" modal header="友链申请" :style="{ width: '25rem' }">
                <div id="dialog">
                    
                    <div class="form">
                        <label >名称：</label>
                        <InputText id="username" v-model="formdata.name" placeholder="如:“雨落青丝”" severity="error"/>
                    </div>
                    <div class="form">
                        <label >链接：</label>
                        <InputText  placeholder="如:“baidu.com”" v-model="formdata.link"/>
                    </div>
                    <div class="form">
                        <label >图标：</label>
                        <InputText  placeholder="如:“https://xxx.jpg”" v-model="formdata.icon"/>
                    </div>
                    <div class="form">
                        <label >简介：</label>
                        <InputText  placeholder="如:“一个生活小站”" v-model="formdata.intronduce"/>
                    </div>
                    <div >
                        <Button type="button" label="取消" severity="secondary" @click="visible = false"></Button>
                        <Button type="button" label="发送申请" @click="postdata" id="formbtn"></Button>
                    </div>
                </div>

            </Dialog>
        </div>
    </div>
</template>



<script setup>
import Youqing from '../components/youqing.vue'
import { ref } from 'vue'
import Button from 'primevue/button';
import axios from 'axios';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

const visible = ref(false);
const value = ref(null);
const list = ref([])
const formdata =ref({
    name:'',
    link:'',
    icon:'',
    intronduce:''
})
async function getxiaochuan() {
    console.log('发送请求')
    const x =await axios.get('http://127.0.0.1:2005/xiaochuan')
    console.log(x.data)
    list.value = x.data
}
getxiaochuan()
function postdata() {
    visible.value = false

}
</script>



<style scoped>
#root {
    width: 100%;
    height: 100%;
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

    display: flex;
    flex-direction: column;

}

#ceshi {
    height: 200px;
    width: 200px;
    background-color: azure;
}

#linkmaner {
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 1000px;
    background-color: #A1A1AA;
}

#dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#toubu {
    font-size: 30px;
    color: aquamarine;
}

#intronduce {
    font-size: 20px;
}

#uniner {
    margin-top: 20px;
}
.form{
    margin: 10px;
    
}
#formbtn{
    margin-top: 20px;
    margin-left: 20px;
}
.linkinronduce{
    margin: 10px;
    font-size: 25px;
}
#tijiao{
    margin: auto;
    margin-top: 40px;
    width: 400px;
}
</style>