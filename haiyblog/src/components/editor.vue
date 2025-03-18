<template>
  <div id="editor">
    <Toast />
    <div id="console">
      <div id="left">
        <button class="kongzhi2"><span class="pi pi-images fontmain">返回</span></button>
      </div>
      <div id="center">
        <button class="kongzhi"><span class="pi pi-chart-bar fontmain">H</span></button>
        <button class="kongzhi"><span class="pi pi-box fontmain">P</span></button>
        <button class="kongzhi"><span class="pi pi-images fontmain">I</span></button>
      </div>
      <div id="right">
        <span class="fontmain">标题 :</span>
        <input type="text" class="titlecpost" v-model="newdata.title" v-if="newdata" />
        <span class="fontmain" v-if="visiable">天气 :</span>
        <input type="text" class="titlecpost" v-model="newdata.weacher" v-if="visiable" />
        <button class="kongzhi2"><span class="pi pi-images fontmain ">预览</span></button>
        <button class="kongzhi2" @click="tjiao"><span class="pi pi-images fontmain " >提交</span></button>
      </div>
    </div>
    <textarea id="texteditor" v-model="newdata.content" v-if="newdata"></textarea>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { Toast } from 'primevue';
import { useToast } from 'primevue';
const toast = useToast();
const props = defineProps(['id', 'modulevalue'])
const visiable = ref(false)
const newdata = ref({
  
  title: "",
  content: "",
  weacher: "",
})
function isnew() {
  if (props.id) {
    getdata(props.id, props.modulevalue)
  }
  else {
    if (props.modulevalue == 2) {
      visiable.value = true
    }
    newdata.value.title = ""
    newdata.value.content = ""
  }
}
isnew()
async function getdata(id, modulevalue) {
  if (modulevalue == 2) {
    console.log('来生modelgetvalue');
    visiable.value = true
    const data = await axios.get('http://127.0.0.1:2005/laisheng/admin/' + id)
    newdata.value = data.data[0]
    console.log(newdata.value);
    if (data.data) {
      toast.add({ severity: 'success', summary: '成功', detail: '获取来生成功', life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: '失败', detail: '获取失败', life: 3000 });
    }
  }
  

}

async function tjiao() {
  if (props.id) {
    postdata(props.id, props.modulevalue)
  }
  else {
    postnewdata(props.modulevalue)
  }

}
async function postnewdata(){
  if (props.modulevalue == 2 && newdata.value.content && newdata.value.title && newdata.value.weacher) {
    const message =await axios.post('http://127.0.0.1:2005/laisheng/admin', newdata.value)
    if (message.data.code == 1) {
      toast.add({ severity: 'success', summary: '成功', detail: '提交成功', life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: '失败', detail: '提交失败', life: 3000 });
      
    }
  }
  if (props.modulevalue == 1 && newdata.value.content && newdata.value.title ) {
    const message =await axios.post('http://127.0.0.1:2005/articles/admin', newdata.value)
    
  }
}
async function postdata(id) {
  newdata.value.id = id
  if (props.modulevalue == 2) {
    const data = await axios.post('http://127.0.0.1:2005/laisheng/admin/' + id, newdata.value)
    if (data.data.code == 1) {
      toast.add({ severity: 'success', summary: '成功', detail: '提交成功', life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: '失败', detail: '提交失败', life: 3000 });
    }

  }

}
</script>



<style scoped>
#editor {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#console {
  margin: 20px;
  height: 60px;
  border-radius: 9px;
  margin-right: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#texteditor {
  background-color: #171717;
  height: 100%;
  margin: 30px;
  resize: none;
  border-radius: 9px;
  border: 2px solid #26262b;
}

#texteditor:focus {
  outline: none;
}

.maibtn {
  height: 40px;
  width: 90px;
  background-color: #171717;
  border: 2px solid #26262b;
  border-radius: 9px;
}

#center {
  display: flex;
  gap: 10px;
}

#left {}

#right {
  display: flex;
  gap: 10px;
}

.kongzhi {
  height: 40px;
  width: 50px;
  background-color: #1cdd7300;
  border: 2px solid #1cdd73;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.kongzhi2 {
  height: 40px;
  width: 100px;
  background-color: #1cdd7300;
  border: 2px solid #1cdd73;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.kongzhi:hover {

  background-color: #1cdd73;

}

.kongzhi2:hover {

  background-color: #1cdd73;

}

.kongzhi:active {
  margin-left: 2px;
  margin-top: 2px;
  height: 38px;
  width: 48px;
}

.kongzhi2:active {
  margin-left: 2px;
  margin-top: 2px;
  height: 38px;
  width: 96px;
}

.fontmain {
  font-weight: 600;
  align-self: center;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
}

.titlecpost {
  border: 2px solid #26262b;
  border-radius: 9px;
  transition: all 0.2s;
  font-weight: 600;
}

.titlecpost:focus {
  outline: none;
}

.titlecpost:hover {
  border: 2px solid #1cdd73;
}
</style>