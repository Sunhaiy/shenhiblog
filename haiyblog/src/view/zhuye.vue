<template>
    <div id="root">
        <div id="top">
            <div id="topleft">
                <span id="title">404 not Found</span>
                <h2 id="untitle">早上好，孫海洋👋</h2>
            </div>
            <div id="topright">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search" />
                </IconField>
                <Button icon="pi pi-envelope" iconPos="top" id="btnright" />
            </div>
        </div>
        <div id="center">
            <div id="centerintr">
                <shenhi/>
                <shengerbutong/>
            </div>
            <div class="conteinertextbottom">
                <span class="bottombigtext"><span class="huo">生而不同</span></span>
                <span class="bottombigtext">非同凡响</span>
                <span class="bottombigtext">我有<span class="huo">病</span></span>
                <span class="bottombigtext">治好了也流口水</span>
                <span class="bottombigtext"><span class="huo">数据库</span>密码放github</span>
                <span class="bottombigtext">回忆是两万公里的<span class="huo">海</span></span>
                <span class="bottombigtext"><span class="huo">自命不凡</span></span>
                <span class="bottombigtext">转人工</span>
                <span class="bottombigtext">下划线</span>
                <span class="bottombigtext"><span class="huo">踏雪寻梅</span></span>
                <span class="bottombigtext">配音是wo自己唱的</span>
                
               <span></span>

            </div>
            <div class="conteinertextbottom">
                <span class="bottombigtext">想开一手公司试试</span>
                <span class="bottombigtext"><span class="huo2">生活</span>把我基倒躺着<span class="huo2">确实比站着舒服</span></span>
                <span class="bottombigtext">让软件再次伟大</span>
                <span class="bottombigtext"><span class="huo2">驯服blender</span></span>
                <span class="bottombigtext">好景难遇</span>
                <span class="bottombigtext"> <span class="huo2">忧郁</span></span>
                <span class="bottombigtext">比较是偷走幸福的小偷</span>
                <span class="bottombigtext"><span class="huo2">CYBERPUNK2077好玩</span></span>
                <span class="huo2"></span>
                
               <span></span>

            </div>
            <div id="botomcontinercenten">
                <Linksandprofile/>
                <eazyartcles/>
                
            </div>
            
            
                
            
            
        </div>
        <div id="bottom"></div>
    </div>
</template>



<script setup>
import eazyartcles from '../components/eazyartcles.vue'
import shengerbutong from '../components/shengerbutong.vue'
import Linksandprofile from '../components/linksandprofile.vue'
import shenhi from '../components/shenhi.vue'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
</script>



<style scoped>
#root {
    
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    min-width: 600px;
    
}

#top {
    flex: 1;
    display: flex;
    
}

#center {
    
    flex: 5;
    display: flex;
    flex-direction: column;
}

#bottom {
    flex: 1;

}

#topleft {
    flex: 1;
    display: flex;
    flex-direction: column;
}

#topright {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;
}

#title {
    font-size: larger;
    color: #3f3f46;
}

#btnright {
    margin-left: 10px;
    margin-right: 10px;
}
#centerintr{
    display: flex;
    flex-direction: row;
}
.conteinertextbottom{
    margin-top: 4px;
    height: 30px;
    overflow: hidden;
}
.bottombigtext{
    
    font-size: 20px;
    margin-left: 10px;
    font-weight: bold;
}
.huo{
    color: rgb(4, 205, 255);
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 1px;
}
.huo2{
    color: rgb(27, 247, 218);
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 1px;
}
#botomcontinercenten{
    display: flex;
}
</style>