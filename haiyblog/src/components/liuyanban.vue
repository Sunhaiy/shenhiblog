<template>
    <div id="root" v-for="item in list" key="{{item.id}}">
        <div id="user">
            
            <img src="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" alt="" id="tupian">
            
            <div id="name_email">
                
                <span id="name">{{item.mingzi}}</span>
                <span class="hui" id="mail">{{ item.email }}</span>
                <div id="zhuangtai"></div>
            </div>
        </div>
        <div id="follo">
            <span id="zishu">{{item.liuyan.length}}<span class="hui"> 字符</span></span>
            <span id="signtime">{{item.timer}}<span class="hui"> 日期</span></span>
        </div>
        <div id="inner" class="hui">{{ item.liuyan }}</div>
        <div id="bottom">※海洋</div>
    </div>

</template>



<script setup>
const props =defineProps(['list'])
</script>



<style scoped>
#root {
    display: flex;
    flex-direction: column;
    border: 1px solid #3f3f46;
    border-radius: 10px;
    padding: 20px;
    background-color: #131313;
    
    height: auto;
    width: 400px;
    margin: 5px;
    filter: drop-shadow(0px 0px 6px #070707);
    transition: filter 0.5s;
    
}
#root:hover{
    filter: drop-shadow(0px 0px 100px #e6d2d2);
    
}
#user{
    width: 200px;
    display: flex;
    
    
}
.hui{
    color: #a1a1aa;
}
#tupian {
    height: 42px;
    width: 42px;
    border-radius: 6px;
}
#zhuangtai{
    height: 10px;
    width: 10px;
    border-radius:15px ;
    background-color: #e55f5f;
    position: relative;
    top: -44px;
    left: -17px;
    filter: drop-shadow(0px 0px 6px #e55f5f);
}
#name_email{
    margin-left: 10px;

}
#inner {
    text-indent: 2em;
    margin-bottom: 10px;
    flex: 1;
}
#follo{
    margin-top: 10px;
    font-size: smaller;
    margin-bottom: 10px;
}
#signtime{
    margin-left: 20px;
}
#mail{
    font-size: 13px;
}
#bottom{
    align-self: flex-end;
    justify-self: end;
}
</style>