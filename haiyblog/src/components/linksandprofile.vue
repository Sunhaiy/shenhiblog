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
    <div id="right"></div>
</div>
</template>



<script setup>


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
    border: 1px ;
    margin-right: 40px;
    filter: drop-shadow(0 0 10px #000000);
    transition: filter 0.5s;
}
#root5:hover {
    filter: drop-shadow(0 0 20px #000000);
}
#gundong{
    display: flex;
    height: 80px;
    width: 500px;
    background-color: #0bffda;
    overflow: hidden;
    background-clip: border-box;
    align-items: center;
    transform: rotate(90deg);
    align-self: center;
    position: relative;
    left: 58px;
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

</style>