<template>
    <div class="root" v-for="item in 3">
        <a href="#">
            <div id="imgcontiner">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" id="artimge"/>
        </div>
        <div id="bottom">
            <span id="title">LaiSheng来生</span>
            <span id="time">2025-2-3</span>
            <div id="fenleicontiner">
                <Chip label="Apple" icon="pi pi-apple" />
                <Chip label="Google" icon="pi pi-google" />
                <Chip label="Microsoft" icon="pi pi-microsoft" removable />
                
            </div>
            <div id="btncontiner">
                <Chip label="Sun_Haiy"
                    image="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" />
                <div><Button icon="pi pi-heart" aria-label="Filter" severity="contrast" label="16" />
                    <Button label="出神入化" id="mainbtn"/>
                </div>

            </div>
        </div>
        </a>

    </div>



</template>



<script setup>
import { Button } from 'primevue';
import Chip from 'primevue/chip';
</script>



<style scoped>
.root {
    display: flex;
    height: 400px;
    width: 400px;
    background-color: #18181B;
    border-radius: 10px;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #1e1e1e;
    transition: border 0.2s ;
}
.root:hover{
    border: 2px solid #60e296;
}
#btncontiner {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

#bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-self: center;

    padding: 15px;
}

#time {
    color: #A1A1AA;
    font-size: small;
}

#imgcontiner {
    width: 360px;
    height: 200px;
    overflow: hidden;
}

#title {
    font-size: 20px;
    font-weight: 400;
    overflow: hidden;
    transition: color 0.2s ;
}
#title:hover{
    color: #23dfbf;
}

#fenleicontiner {
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    
}
#mainbtn{
    margin-left: 10px;
}
#artimge{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
}
a{
    text-decoration: none;
    color: aliceblue;
}
</style>