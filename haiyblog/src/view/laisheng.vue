<template>
    <div id="root">
        <div id="left">
            <card/>
        </div>
        <div id="right">
            <head id="rhhea">
                <h1>无题</h1>
            </head>
            <div id="content">
            </div>
        </div>
        
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
        flex-direction: row;
        overflow-y: scroll;
    }
    #left{
        
    }
    #right{
        flex: 1;
       position: sticky;
       top: 0px;
       background-color: #262626;
       border-radius: 20px;
       margin: 0 20px;
       padding: 20px;
       display: flex;
       flex-direction: column;
    }
    #content{
        padding: 20px;
        flex: 1;
    }
    #rhhea{
        display: flex;
        flex-direction: row;
    }
    </style>