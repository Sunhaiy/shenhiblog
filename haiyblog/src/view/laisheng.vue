<template>
    <div id="root">
        <card/>
    </div>
    </template>
    
    
    
    <script setup>
    import card from '../components/card.vue';
    
    </script>
    
    
    
    <style scoped>
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    
    </style>