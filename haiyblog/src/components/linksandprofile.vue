<template>
<div id="root5">
    <div id="left">
        
        
        <div id="gundong">
            <span class="ch1">SUN</span>
            <span class="ch2">HAI</span>
            <span class="ch1">YANG</span>
            <span class="ch2">YANG</span>
            
        </div>
    </div>
    <div id="right">
        
        
    </div>
</div>
</template>



<script setup>
import liuyanban from './liuyanban.vue';



</script>



<style scoped>
#root5 {
    height: 400px;
    width: 980px;
    background-color: #171717;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    overflow: hidden;
    
    margin-right: 40px;
    filter: drop-shadow(0 0 10px #000000);
    transition: filter 0.5s;
    border: 2px solid #26262b;
    transition: all 0.5s;
}
#root5:hover {
    filter: drop-shadow(0 0 20px #000000);
    border: 2px solid #46DFD3;
}
#gundong{
    display: flex;
    height: 80px;
    width: 500px;
    background-color: #0bffda;
    position: fixed;
    background-clip: border-box;
    align-items: center;
    transform: rotate(90deg);
    align-self: center;
    
    filter: drop-shadow(0 0 100px #0fbfd3);
    border: 3px solid #ffa10b;
    transition: border 0.5s;
}
#gundong:hover{
    border: 2px dashed #b6ff0b;
}
.ch1{
    color: #ffffff00;
    font-size: 80px;
    font-weight: bolder;
    -webkit-text-stroke: 2px #fefefe;
    animation: ch1 5s linear infinite;
    
}

.ch2{
    color: #000000;
    font-size: 80px;
    font-weight: bolder;
    animation: ch2 5s linear infinite;
    
}
#left{
    width: 400px;
    display: flex;
    
}
#right{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #0bffda;
}

@keyframes ch1 {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-120%);
    }
}
@keyframes ch2 {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-110%);
    }
}
.tongji{
    color: #ffffff;
    font-size: 20px;
    font-weight: bolder;
}
#lineleft{
    height: 400px;
    width: 400px;
    background-color: #171717;

}
</style>