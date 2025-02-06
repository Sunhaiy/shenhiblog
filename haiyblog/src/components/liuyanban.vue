<template>
    <div id="root">
        <div id="user">
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" alt="" id="tupian">
            <div id="zhuangtai"></div>
            <div>
                <span id="name">孫海洋</span>
                <span class="hui">s744129991@gmail.com</span>
            </div>
        </div>
        <div id="follo">
            <span id="zishu">1320<span class="hui"> char</span></span>
            <span id="signtime">10<span class="hui"> min</span></span>
        </div>
        <div id="inner" class="hui">这里是内容，留言板内容就是这样。天天开心！dsahjasdhjkasjhksadjhkadssad</div>
        <div id="bottom">各类btn</div>
    </div>

</template>



<script setup>

</script>



<style scoped>
#root {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 400px;
    width: 200px;
}
#user{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hui{
    color: #5c5b5b;
}
#tupian {
    height: 42px;
    width: 42px;
    border-radius: 9px;
}
#zhuangtai{
    height: 12px;
    width: 12px;
    
    background-color: #ccc;
}
</style>