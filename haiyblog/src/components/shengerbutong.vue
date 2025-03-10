<template>
    <div id="root3">
        <span id="textcontiner1">我心如<span id="huo">火</span></span>
    </div>

</template>



<script setup>


</script>



<style scoped>
#root3 {
    min-width: 760px;
    width: 1050px;
    padding: 10px;

    display: flex;
    overflow: hidden;
    height: 260px;
    align-items: center;
    justify-content: center;
}

#textcontiner1 {
    font-size: 220px;
    font-weight: bold;
}

#huo {
    background-image: -webkit-linear-gradient(right,  #e7be92, rgb(220, 232, 161));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>