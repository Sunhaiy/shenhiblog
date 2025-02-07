<template>
    <div id="root">
        <div id="top">
            <h2>Cards</h2>
            <span id="untitle">You can make cards using Aura like below 👇</span>
        </div>
        <div id="center">
            <liuyanban />
        </div>
        <div id="bottom">6</div>
    </div>
</template>



<script setup>
import liuyanban from '../components/liuyanban.vue'

</script>



<style scoped>
#root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

#top {

    display: flex;
    flex-direction: column;
}

#untitle {
    color: #A1A1AA;
}

#center {
    
    padding-top: 20px;
    display: flex;
    flex-flow: row wrap;
    
}

#bottom {
    flex: 1;

}
</style>