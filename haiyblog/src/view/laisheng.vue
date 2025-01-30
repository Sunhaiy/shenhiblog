<template>
    <div id="root">
        <div id="top">1</div>
        <div id="center">2</div>
        <div id="bottom">3</div>
    </div>
    </template>
    
    
    
    <script setup>
    
    
    </script>
    
    
    
    <style scoped>
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    #top{
        flex: 1;
    }
    #center{
        flex: 1;
    }
    #bottom{
        flex: 1;
        
    }
    </style>