<template>
  <div id="root">
    <div id="nav">
      
    </div>
    <div id="body">
      
    </div>
  </div>




</template>
<style>
#root{
  
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
  
}
#body{flex: 1;}
</style>
<script setup>
import { ref } from "vue";

import PanelMenu from 'primevue/panelmenu';


const items = ref([
  {
    label: '主页',
    icon: 'pi pi-home'
  },
  {
    label: '文章',
    icon: 'pi pi-star'
  },
  {
    label: '项目',
    icon: 'pi pi-search',

  },
  {
    label: '我的',
    icon: 'pi pi-envelope'
  }
]);
</script>
