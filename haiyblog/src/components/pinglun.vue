<template>
    <div id="root3" v-if="comdata">
        <div id="inputcontiner">
            <InputGroup id="leftinput">
                <InputGroupAddon>
                    <i class="pi pi-user"></i>
                </InputGroupAddon>
                <InputText v-model="pinglun.name" placeholder="昵称" />
            </InputGroup>
            <InputGroup id="rightinput">
                <InputGroupAddon>
                    <i class="pi pi-comment"></i>
                </InputGroupAddon>
                <InputText v-model="pinglun.content" placeholder="Message" />
            </InputGroup>
            <Button icon="pi pi-pencil" severity="success" label="发送" @click="postMessage()"/>
            <Toast />
        </div>
        <div class="userprofile"  v-for="item in comdata" key="{{item.id}}" @click="getid(item.id)">
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" class="ava">
            <div class="userinfo">
                <span class="names">{{item.username}} <span class="usertag">版主</span></span>
                <span class="neirong">{{item.contents}}<span class="liuyantime">{{item.creteat}}</span><span class="reply">回复</span></span>
                



            </div>
        </div>

        <div id="fenye">
            

        </div>

    </div>
</template>



<script setup>
import { ref } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import { Toast } from 'primevue';
import { useToast } from "primevue/usetoast";
import axios from 'axios';
const toast = useToast();
const props = defineProps(['fenyedata','artid']);
const pinglun = ref({
    name:'',
    content:'',
    artid:props.artid
});



const comdata = ref()
function postMessage() {
    if (!pinglun.value.name || !pinglun.value.content) {
        toast.add({ severity: 'error', summary: '错误', detail: '请填写完整', life: 5000 });
        return
    }
    
    axios.post('http://localhost:2005/pinglun', pinglun.value);
    toast.add({ severity: 'success', summary: '提交成功', detail: '笔者已经收到你的留言啦！🥰', life: 5000 });
    console.log(pinglun.value);
    
}
function getid(id) {
    console.log(id);
}
async function getcomment() {
    const comment = await axios.get(`http://localhost:2005/pinglun/${props.artid}`)

    comdata.value = comment.data;
    
}
getcomment();
</script>



<style scoped>
#root3 {

    min-width: 400px;
    background-color: rgb(33, 33, 33);
    display: flex;
    position: relative;
    padding: 40px;
    flex-direction: column;
}


.userprofile {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    border: 1px solid #4e4d4d;
    padding: 20px;
    border-radius: 9px;
    transition: all 0.5s;
}

.userprofile:hover,
.userprofile2:hover {
    border: 1px solid #696868;
    background-color: rgb(46, 46, 46);
}

.userprofile2 {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 80px;
}

.userinfo {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.names {
    color: #5D5E61;
    font-size: 15px;
    font-weight: bold;
}

.neirong {
    margin-top: 10px;
    color: rgb(220, 219, 219);
}

.ava {
    height: 40px;
    width: 40px;
    border-radius: 25px;
}

.reply {
    color: #908F93;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
}

.liuyantime {
    margin-left: 5px;
    color: #5D5E61;
    font-size: 12px;
    font-weight: bold;
}

.usertag {
    display: none;
    background-color: #FF3F33;
    border-radius: 2px;
    padding: 1px 5px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}



.heart {
    align-self: flex-end;
    margin-right: 10px;
    color: rgb(66, 66, 66);
    transition: color 0.5s;
    padding: 2px;
}

.heart:hover {
    color: #FF3F33;
}



#fayan {
    width: 600px;
    height: 40px;
    background-color: rgb(46, 46, 46);
    border-radius: 5px;
    position: absolute;
    top: 40px;
    align-self: center;
}

#fenye {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    background-color: rgba(46, 46, 46, 0);
    border-radius: 9px;
    height: 50px;
    align-items: center;
}



#inputcontiner {
    display: flex;
    padding: 10px;
    background-color: rgb(53, 52, 52);
    border-radius: 9px;
    flex-direction: column;

}
#leftinput{
   width: 200px;
}
#rightinput{
    margin-bottom: 10px;
    height: 200px;
}
</style>