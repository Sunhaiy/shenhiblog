<template>
     <div id="admin">
          <editor modulevalue="1" :id="null"/>
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
}
</style>