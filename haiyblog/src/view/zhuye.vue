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
            <div id="lunbo">
                
                
            </div>
            <div id="jishuzhan"></div>
            <div id="wenzhang"></div>
        </div>
        <div id="bottom"></div>
    </div>
</template>



<script setup>


import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
</script>



<style scoped>
#root {
    margin-right: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    
}

#lunbo {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #72646B;
    border-radius: 10px;
}

#jishuzhan {
    flex:1;
}

#wenzhang {
    flex: 2;
}
#wenzhang,#jishuzhan{
    border:1px solid #72646B;
    border-radius: 10px;
    margin-top: 20px;
}
</style>