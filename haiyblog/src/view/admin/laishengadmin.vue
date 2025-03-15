<template>
     <div id="admin">
          <div id="laishengcardfy">
               <div id="laishengcard" v-for="item in laishengget" key="item.id">
               <div class="head">
                    <span class="pi pi-bolt mainfont">-{{item.time}}</span>
               </div>
               <hr>
               <div class="bodyfy mainfont">
                    <span>{{item.title}}</span>
               </div>
          </div>
          </div>
          
     </div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';

const laishengget = ref();
async function getlaisheng(){
     const data =await axios.get('http://127.0.0.1:2005/laisheng/admin')
     laishengget.value = data.data
     console.log(data.data);
     
}
getlaisheng()
</script>



<style scoped>
#admin {
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

#laishengcard {
     margin: 20px;
     width: 300px;
     height: 100px;
     border-radius: 9px;
     border: 2px solid #26262b;
     background-color: #171717;
     display: flex;
     flex-direction: column;
     transition: all 0.2s;
}
#laishengcard:hover{
     border: 2px solid #1cdd73;
     filter: drop-shadow(0 0 100px #25b9c4);
}
.head {
     width: 100%;
     height: 40px;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
}

.bodyfy {
     padding: 8px;
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: center;
}

hr {
     width: 100%;
     border: 1px solid #26262b;
}

.mainfont {
     font-weight: 600;
     background-image: -webkit-linear-gradient(right, rgb(138, 220, 229), #eeebe8);
     background-clip: text;
     -webkit-text-fill-color: transparent;
}
#laishengcardfy{
     display: flex;
     flex-flow: row wrap;
}
</style>