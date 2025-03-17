<template>
  <div id="root">
    <div id="nav">
      <div id="navlogo">
        <img src="./assets/logo.svg" id="imglogo">
        <span id="blgname">孫海洋Design</span>
      </div>
      <div id="navbtn">

        <button id="newmenubtn" v-for="item in menuconfig" @click="tp(item.position)">
          <span id="fontmain" :class="item.icon">{{ item.label }}</span>
        </button>
        <hr>
      </div>

      <div id="navinfor">
        <span class="pi pi-building-columns" id="fontbottom">公安备案号:预留位置</span>
        <span class="pi pi-building-columns" id="fontbottom">2025/1/19</span>
        <span class="pi pi-home " id="fontbottom">互联网icp备案号:</span>
        <span class="pi pi-home " id="fontbottom">2025/3/16</span>
      </div>
    </div>
    <div id="body">
      <router-view />
    </div>
  </div>




</template>
<style>
#root {

  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #161616;


}

#nav {
  margin: 40px;
  border-radius: 19px;
  background-color: #171717;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #26262b;
}



#navbtn {

  min-width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}





#body {
  flex: 1;
  display: flex;
  padding: 40px 10px;
}

#navlogo {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

#imglogo {
  width: 50px;
  height: 50px;
}

#newmenubtn {
  width: 150px;
  align-self: center;
  height: 40px;
  border-radius: 9px;
  border: 2px solid #26262b;
  background-color: #171717;
  transition: all 0.2s;
  font-weight: 600;
  cursor: pointer;
}

#newmenubtn:hover {

  filter: drop-shadow(0 0 100px #25b9c4);
  background-color: #44e3d5;
}

#newmenubtn:active {
  background-color: #ffffff;
  border: 2px solid #ffffff;
  color: #44e3d5;
}

#fontmain {
  font-weight: 600;

}

hr {
  width: 100%;
  border: 1px solid #26262b;
}

#navinfor {
  display: flex;
flex-direction: column;
gap: 10px;
}

#blgname {
  font-weight: 600;
  color: #fefefe;
  background-image: -webkit-linear-gradient(right,  #ecce0d, rgb(0, 255, 251));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 200px #25b9c4;
}
#fontbottom{
  font-weight: 600;
  font-size: 12px;
}
</style>


<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import { RouterView } from "vue-router";
import { useRouter } from 'vue-router'
const router = useRouter();
const tp = (position) => {
  router.push({ name: position })
}
const menuconfig = ref([
  { label: '主页', icon: 'pi pi-home', position: 'zhuye' },
  { label: '文章', icon: 'pi pi-user-edit', position: 'wenzhang' },
  { label: '留言', icon: 'pi pi-at', position: 'liuyan' },
  { label: '历程', icon: 'pi pi-palette', position: 'laisheng' },
  { label: '网站', icon: 'pi pi-link', position: 'xiaochuan' },
  { label: '我的', icon: 'pi pi-user', position: 'wode' },

])

</script>
