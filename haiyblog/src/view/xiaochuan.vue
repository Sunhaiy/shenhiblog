<template>
    <Toast />
    <div id="root">
        
        <div id="top">
            <h2>
                Website🥰
            </h2>
            <span id="untitle">这里记录了学习过程中可能会很有帮助的网站~~</span>
        </div>
        <div id="center">


            <Youqing :list="list"/>
        </div>

        <div id="bottom" >
            <span  id="uniner"><span id="toubu">#</span><span id="intronduce">门庭若市</span></span>
            <span  class="linkinronduce">🐳提交网站必须长期运营</span>
            <span  class="linkinronduce">🐳好的网站值得被看到！</span>
            <span  class="linkinronduce">🐳笔者每天都会来看博客，三天内看到会处理</span>
            <span  class="linkinronduce">🐳本站也会不定期减产网站时效性</span>
            <span  id="uniner"><span id="toubu">#</span><span id="intronduce">奔走相告</span></span>
            <span  class="linkinronduce">✨这些网站大部分为国外网站</span>
            <span  class="linkinronduce">✨进入可能需要开启加速器</span>
            <span  class="linkinronduce">✨如果你也想要分享站点</span>
            <span  class="linkinronduce">✨可以点击右下角申请收录</span>




            <button @click="visible = true" id="tijiao">申请收录 ✨</button>
            
            <Dialog v-model:visible="visible" modal header="收录申请" :style="{ width: '25rem' }">
                <div id="dialog">
                    
                    <div class="form">
                        <label >名称：</label>
                        <InputText id="username" v-model="formdata.name" placeholder="如:“雨落青丝”" />
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
                        <Button type="button" label="发送申请" @click="postdata()" id="formbtn"></Button>
                    </div>
                </div>

            </Dialog>
            <div id="pinglun">
                <pinglun/>
            </div>
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
import { Toast } from 'primevue';
import { useToast } from "primevue/usetoast";
import pinglun from '../components/pinglun.vue'
const toast = useToast();
const visible = ref(false);
const isvisi = ref(false)
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
    console.log(formdata.value);
    if (!formdata.value.name || !formdata.value.link || !formdata.value.icon || !formdata.value.intronduce) {
        toast.add({ severity: 'error', summary: '提交失败', detail: '海洋提醒你：填写完整信息!🐳', life: 5000 });
        visible.value = true
        return
    }
    axios.post('http://127.0.0.1:2005/xiaochuan/postlink',formdata.value)
    toast.add({ severity: 'success', summary: '提交成功', detail: '海洋已经收到你的申请啦！🥰', life: 5000 });
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
    font-weight: 600;
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
    font-weight: 600;
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
    width: 100px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #26262b;
    border: 2px solid #171717;
    font-weight: 600;
    font-size: large;
    border-radius: 9px;
    transition: all 0.5s;
    cursor: pointer;
}
#tijiao:hover{
    background-color: #171717;
    color: #7fffd4;
    border: 2px solid #7fffd4;
    filter: drop-shadow(0 0 100px #7fffd4);
}
#pinglun{
    max-width: 1000px;
    min-width: 600px;
    align-self: center;
    margin-top: 60px;
    border-radius: 9px;
}
</style>