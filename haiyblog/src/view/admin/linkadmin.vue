<template>
     <div id="admin">
          <div id="info">
               <span class="pi pi-user fontmain">昵称</span>
               <span class="pi pi-pen-to-square fontmain">内容</span>
               <span class="pi pi-at fontmain">邮箱</span>
               <span class="pi pi-bolt fontmain">审核</span>
               
               <div class="btncon"><input type="text" id="search" placeholder="搜索" /></div>
               

          </div>
          <div id="usercontiner">
               <span class="pi pi-hashtag fontmain2">李白</span>
               <span class="fontmain2">内容内容内容内容内容内容内容</span>
               <span class="fontmain2">s744129991@outlook.com</span>
               <div class="btncon"><button class="mainbtn"><span class="pi pi-check fontmain2">状态</span></button></div>
               <div class="btncon"><button class="mainbtn"><span class="pi pi-slack fontmain2">编辑</span></button></div>
          </div>
          
               
     </div>
</template>



<script setup>
import Editor from '@/components/editor.vue';

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
     padding: 20px;
}

#info {
     display: flex;

     height: 60px;
     background-color: #171717;
     border: 2px solid #26262b;
     border-radius: 9px;
     align-items: center;
     justify-content: space-between;
     padding: 10px;

}

.fontmain {
     font-weight: 600;
     font-size: 18px;
     font-weight: 600;
     background-image: -webkit-linear-gradient(right, rgb(236, 195, 195), #ffffff);
     background-clip: text;
     -webkit-text-fill-color: transparent;
     flex: 1;
}

.fontmain2 {
     font-weight: 600;
     font-size: 15px;
     font-weight: 600;
     background-image: -webkit-linear-gradient(right, rgb(60, 187, 222), #ffffff);
     background-clip: text;
     -webkit-text-fill-color: transparent;
     
     flex: 1;
     width: 50px;
}

#search {
     height: 35px;
     width: 200px;
     border-radius: 9px;
     border: 2px solid #6e466e;
     padding: 5px;
     background-color: #171717;
     color: white;
     transition: all 0.5s;

}

#search:focus {
     outline: none;
}

#search::placeholder {
     font-weight: 600;
}

#search:hover {
     border: 2px solid #cd1bff;
}

#usercontiner {
     display: flex;
     height: 60px;
     background-color: #171717;
     border: 2px solid #26262b;
     border-radius: 9px;
     align-items: center;
     justify-content: space-between;
     padding: 10px;
     margin-top: 10px;
}

.mainbtn {
     width: 100px;
     height: 35px;
     border: 2px solid #26262b;
     border-radius: 9px;
     background-color: #171717;
     transition: all 0.2s;
     cursor: pointer;
}
.mainbtn:hover {
     border: 2px solid #3f1cdd;
     background-color: #3f1cdd;
     
     filter: drop-shadow(0 0 100px #461cdd);
}
.mainbtn:active{
     transform: scale(0.9);
}
.btncon{
     flex: 1;
     display: flex;
     
}
</style>