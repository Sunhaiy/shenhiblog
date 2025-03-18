<template>
  <div id="admin">
    <Toast />
    <div id="edit" v-show="visiable">
      <span class="pi pi-book fontmain flow">标题</span>
      <span class="pi pi-user fontmain flow">作者</span>
      <span class="pi pi-calendar-clock fontmain flow">时间</span>
      <button class="mainbtn2" @click="changelayout"><span class="pi pi-plus fontmain ">写作</span></button>
    </div>
    <div id="bodyfy" v-for="item in nowdata" key="{{item.id}}" v-show="visiable">
      <span class="fontmain  pi pi-sparkles flow2">{{ item.title }}</span>
      <span class="fontmain flow2">{{ item.author }}</span>
      <span class="fontmain flow2">{{ item.created_at }}</span>
      <button class="mainbtn" @click="intoeditor(item.id)"><span class="pi pi-arrow-right fontmain">EDIT</span></button>
    </div>
    <div id="wrtecontiner" v-show="!visiable">
      <div id="console">
        
        <div id="left">
          <button class="kongzhi2" @click="changelayout"><span class="pi pi-images fontmain">返回</span></button>
        </div>
        <div id="center">
          <button class="kongzhi"><span class="pi pi-chart-bar fontmain">H</span></button>
        <button class="kongzhi"><span class="pi pi-box fontmain">P</span></button>
        <button class="kongzhi"><span class="pi pi-images fontmain">I</span></button>
        </div>
        <div id="right">
          <span class="fontmain">标题 :</span>
          <input type="text" v-model="editdata[0].title" id="titlecpost" v-if="editdata"/>
          <button class="kongzhi2"><span class="pi pi-images fontmain ">预览</span></button>
          <button class="kongzhi2" @click="postchangedata(editdata)"><span class="pi pi-images fontmain ">提交</span></button>
          
        </div>
        
      </div>
      
      <div id="postdata" v-if="editdata">
        <textarea name="" id="inputinner" v-model="editdata[0].content"></textarea>
      </div>
    </div>
  </div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { Toast } from 'primevue';
import { useToast } from 'primevue';
const toast = useToast();
const nowdata = ref()
const visiable  =ref(true)
const editdata = ref()

 
async function getartdata() {
  const data = await axios.get('http://127.0.0.1:2005/articles/admin')
  nowdata.value = data.data
  console.log(data.data);

}
getartdata()
function changelayout() {
  visiable.value = !visiable.value
  console.log('change');
  
}
async function intoeditor(id) {
  visiable.value = !visiable
  const getdata = await axios.get('http://127.0.0.1:2005/articles/'+id)
  console.log(getdata.data);
  
  editdata.value = getdata.data
}
async function postchangedata() {
  if (editdata.value) {
    const postdata ={title:editdata.value[0].title,content:editdata.value[0].content,id:editdata.value[0].id}
    console.log(editdata.value[0].title);
    console.log(editdata.value[0].content);
    const wanchengmessage =await axios.post('http://127.0.0.1:2005/articles/change',postdata)
    console.log(wanchengmessage.data);
    if (wanchengmessage.data.code ==1) {
      toast.add({ severity: 'success', summary: '提交成功', detail: '修改成功，快去前台看看效果！', life: 5000 });
      visiable.value = !visiable.value
    }else{
      toast.add({ severity: 'error', summary: '提交失败', detail: '请检查网络连接或者联系管理员！', life: 5000 });
    }
  }
  
  
}


  

</script>



<style scoped>
#admin {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  border-radius: 9px;
  border: 2px solid #26262b;
  margin-top: 20px;
  margin-right: 20px;
}

#edit {
  height: 60px;
  background-color: #171717;
  border-radius: 9px;
  border: 2px solid #26262b;
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.mainbtn {
  width: 90px;
  height: 36px;
  background-color: #171717;
  border: 2px solid #b31cdd;
  border-radius: 9px;
  transition: all 0.5s;
  cursor: pointer;
}
.mainbtn2 {
  width: 90px;
  height: 36px;
  background-color: #171717;
  border: 2px solid #1cdd73;
  border-radius: 9px;
  transition: all 0.5s;
  cursor: pointer;
}

.fontmain {
  font-weight: 600;
  align-self: center;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
}

.mainbtn:hover {

  border: 2px solid #c214f3;
  filter: drop-shadow(0 0 100px #c802ff);

}
.mainbtn2:hover {

  border: 2px solid #1cdd73;
  filter: drop-shadow(0 0 100px #1cdd73);

}

@keyframes lengcai {
  0% {
    background-color: #b31cdd;
  }

  100% {
    background-color: #171717;
  }

}
@keyframes lengcai2 {
  0% {
    background-color: #1cdd73;
  }

  100% {
    background-color: #171717;
  }

}

.mainbtn:active {
  width: 95px;
  height: 35px;
  border: 2px solid #c214f3;
  animation: lengcai 1s linear;
}
.mainbtn2:active {
  width: 95px;
  height: 35px;
  border: 2px solid #1cdd73;
  animation: lengcai2 1s linear;
}

#bodyfy {
  height: 60px;
  width: 100%;
  border-radius: 9px;
  border: 2px solid #26262b;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
}

.flow {
  font-weight: 900;
  background-image: -webkit-linear-gradient(right, rgb(255, 11, 11), #ffffff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
.flow2{
  
  background-image: -webkit-linear-gradient(right, rgb(11, 255, 251), #dededd);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
#wrtecontiner{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
#console{
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
.kongzhi{
  height: 40px;
  width: 50px;
  background-color: #1cdd7300;
  border: 2px solid #1cdd73;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}
.kongzhi2{
  height: 40px;
  width: 100px;
  background-color: #1cdd7300;
  border: 2px solid #1cdd73;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}
.kongzhi:hover{
  
  background-color: #1cdd73;
  
}
.kongzhi2:hover{
  
  background-color: #1cdd73;
  
}
.kongzhi:active{
  margin-left: 2px;
  margin-top: 2px;
  height: 38px;
  width: 48px;
}
.kongzhi2:active{
  margin-left: 2px;
  margin-top: 2px;
  height: 38px;
  width: 96px;
}
#postdata{
  flex: 1;
}
#inputinner{
  height: 100%;
  width: 100%;
  margin-top: 10px;
  background-color: #101012;
  border-radius: 9px;
  border: 2px solid #26262b;
  transition: all 0.2s;
  resize: none;
  font-size: 20px;
  font-weight: 600;
}
#inputinner:hover{
  border: 2px solid #171717;
}
#inputinner:focus{
  outline: none;
}
#center{
  display: flex;
  gap: 10px;
}
#left{
  
}
#right{
  display: flex;
  gap: 10px;
}
#titlecpost{
  border: 2px solid #26262b;
  border-radius: 9px;
  transition: all 0.2s;
  font-weight: 600;
}
#titlecpost:focus{
  outline: none;
}
#titlecpost:hover{
  border: 2px solid #1cdd73;
}
</style>