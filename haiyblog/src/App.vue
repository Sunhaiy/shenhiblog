<template>
  <div id="root">
    <div id="nav">
      <div class="navlogo">
        <img src="./assets/logo.svg" id="imglogo">
      </div>
      <div id="navbtn">
        <Button label="主页" icon="pi pi-home" class="menubtn" @click="tp('zhuye')"/>
        <Button label="文章" icon="pi pi-user-edit" class="menubtn" @click="tp('wenzhang')"/>
        <Button label="留言" icon="pi pi-at" class="menubtn" @click="tp('liuyan')"/>
        <Button label="来生" icon="pi pi-palette" class="menubtn" @click="tp('laisheng')"/>
        <Button label="小船" icon="pi pi-link" class="menubtn" @click="tp('xiaochuan')"/>
        <Button label="我的" icon="pi pi-user" class="menubtn" @click="tp('wode')"/>

      </div>
      <div class="navinfor">
        <Button icon="pi pi-cog" severity="secondary" rounded aria-label="Bookmark" />
        <div>--------------------</div>
        <Button label="我的头像" icon="pi pi-user" class="menubtn" />
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
  background-color: #09090B;
}

#nav {
  margin: 40px;
  border-radius: 19px;
  background-color: #18181B;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.menubtn {
  margin: 20px;
}

#navbtn {
  width: 100%;
  display: flex;
  flex-direction: column;
  
}

.navlogo {
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;
}

.navinfor {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#body {
  flex: 1;
  
}
#imglogo{
  width: 50px;
  height: 50px;
}
</style>


<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import { RouterView } from "vue-router";
import { useRouter } from 'vue-router'
const router = useRouter();
const tp=(position)=>{
  router.push({name:position})
}

</script>
