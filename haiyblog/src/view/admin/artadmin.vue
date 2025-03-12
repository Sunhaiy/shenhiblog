<template>
  <div id="admin">
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
      <button class="mainbtn"><span class="pi pi-arrow-right fontmain">EDIT</span></button>
    </div>
    <div id="wrtecontiner">
      <div id="console">
        <button></button>
      </div>
      <div id="postdata">

      </div>
    </div>
  </div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';
const nowdata = ref()
const visiable  =ref(true)
async function getartdata() {
  const data = await axios.get('http://127.0.0.1:2005/articles/admin')
  nowdata.value = data.data
  console.log(data.data);

}
getartdata()
function changelayout() {
  visiable.value = !visiable
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
}
#console{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>