<template>
    <div id="admin">
        <div id="edit">
          <button class="mainbtn"><span class="pi pi-plus fontmain">写作</span></button>
        </div>
        <div id="bodyfy">

        </div>
    </div>
   </template>
   
   
   
   <script setup>
   
   
   </script>
   
   
   
   <style scoped>
   #admin{
     padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        border-radius: 9px;
        border:2px solid #26262b;
        margin-top: 20px;
        margin-right: 20px;
   }
   #edit{
     height: 60px;
     background-color: #171717;
     border-radius: 9px;
     border: 2px solid #26262b;
     display: flex;
     justify-content: space-between;
     padding: 8px;
   }
   .mainbtn{
     width: 90px;
     height: 36px;
     background-color: #171717;
     border: 2px solid #b31cdd;
     border-radius: 9px;
     transition: all 0.5s;
     cursor: pointer;
   }
   .fontmain{
     font-weight: 600;
   }
  .mainbtn:hover{
     
     border: 2px solid #c214f3;
     filter: drop-shadow(0 0 100px #c802ff);
     
  }
@keyframes lengcai {
     0%{
         background-color: #b31cdd;
     }
     100%{
         background-color: #171717;
     }
     
}
.mainbtn:active{
     width: 95px;
     height: 35px;
     border: 2px solid #c214f3;
     animation: lengcai 1s linear;
   }
   </style>