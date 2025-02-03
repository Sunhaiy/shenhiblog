<template>
    <div id="root">
        <div id="top">
            <h2>
                Customers
            </h2>
            <span id="untitle">The analysis list here shows all users</span>
        </div>
        <div id="center">
            
        </div>
        <div id="bottom">15</div>
    </div>
</template>



<script setup>


</script>



<style scoped>
#root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#top {
    display: flex;
    flex-direction: column;
}

#untitle {
    color: #A1A1AA;
}

#center {
    flex: 1;
    padding-top: 20px;
    display: flex;
}

#bottom {
    flex: 1;

}
</style>