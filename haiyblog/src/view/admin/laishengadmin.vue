<template>
     <div id="admin">
          <div id="laishengcardfy">
               <div id="laishengcard" v-for="item in laishengget" key="item.id">
                    <div class="head">
                         <span class="pi pi-bolt mainfont">-{{ item.time }}</span>
                    </div>
                    <hr>
                    <div class="bodyfy mainfont">
                         <span>{{ item.title }}</span>
                    </div>
                    <div id="consolebtncontiner">
                         <button class="consolebtn"><span class="pi pi-arrow-right mainfont3">EDIT</span></button>
                         <button class="consolebtn2"><span class="pi pi-trash mainfont2">DELETE</span></button>
                    </div>
               </div>
          </div>

     </div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';

const laishengget = ref();
async function getlaisheng() {
     const data = await axios.get('http://127.0.0.1:2005/laisheng/admin')
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
     height: 150px;
     border-radius: 9px;
     border: 2px solid #26262b;
     background-color: #171717;
     display: flex;
     flex-direction: column;
     transition: all 0.2s;
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

#laishengcardfy {
     display: flex;
     flex-flow: row wrap;
}

#consolebtncontiner {
     display: flex;
     flex-direction: row;
     justify-content: space-around;
}

.consolebtn {
     height: 40px;
     width: 100px;
     background-color: #171717;
     border: 2px solid #b31cdd;
     border-radius: 9px;
     transition: all 0.2s;
     cursor: pointer;
     margin: 10px;
}
.consolebtn2{
     height: 40px;
     width: 100px;
     background-color: #171717;
     border: 2px solid #e4286a;
     border-radius: 9px;
     transition: all 0.2s;
     cursor: pointer;
     margin: 10px;
}
.consolebtn:hover {
     border: 2px solid #debc10;
     background-color: #debc10;
     filter: drop-shadow(0 0 100px #debc10);
}
.consolebtn2:hover {
     border: 2px solid #debc10;
     background-color: #e4286a;
     filter: drop-shadow(0 0 100px #e4286a);
}
.consolebtn:active,.consolebtn2:active {
     transform: scale(0.9);
}
.mainfont2{
     font-weight: 600;
     background-image: -webkit-linear-gradient(right, rgb(234, 101, 101), #eeebe8);
     background-clip: text;
     -webkit-text-fill-color: transparent;
}
.mainfont3{
     font-weight: 600;
     
}
</style>