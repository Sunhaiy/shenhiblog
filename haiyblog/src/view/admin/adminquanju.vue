<template>
    <div id="admin">
        <div id="datacontiner" >
            <div class="cardinadmin">
                <span class="pi pi-pencil font"> 文章</span>
                <span class="flow">{{basicdata[0].count}}</span>
                <span class="font">ITEM IN WENZHANG</span>
            </div>
            <div class="cardinadmin">
                <span class="pi pi-comment font"> 留言</span>
                <span class="flow">{{basicdata[1].count}}</span>
                <span class="font">ITEM IN LYAN</span>
            </div>
            <div class="cardinadmin">
                <span class="pi pi pi-pen-to-square font"> 来生</span>
                <span class="flow">{{basicdata[2].count}}</span>
                <span class="font">ITEM IN LAISHENGHI</span>
            </div>
        </div>
    </div>
    <div id="profilconfig">
        <div id="leftcard">
            <span class="font">全局配置</span>
            <hr>
            <span class="configfont">站点名称:</span>
            <div class="configfont2">笔者‘s blog ！</div>
            <span class="configfont">描述:</span>
            <span class="configfont2">This is my new blog</span>
            <hr>
            <button class="change"><span class="pi pi-lock changspn">Edit</span></button>
        </div>
        <div id="rightcatd">
            <img src="@/assets/1742186245750.jpg" alt="" id="adminimg">
            <div class="configfont2">笔者</div>
            <span class="configfont">与生俱来的力量</span>
            <hr>
            <div id="linkcontiner">
                <button class="change" v-for="item in 12"><span class="pi pi-lock changspn">Edit</span></button>
                
            </div>
        </div>
    </div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';

const basicdata =ref([])
async function getadmindata() {
    const getdata = await axios.get('http://127.0.0.1:2005/zhuye/admin')
    basicdata.value = getdata.data
    console.log(getdata.data);
    
}
getadmindata()
</script>



<style scoped>
#admin {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#datacontiner {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
}

.cardinadmin {
    width: 400px;
    height: 200px;
    background-color: #171717;
    margin: 10px;
    border: 2px solid #26262b;
    border-radius: 9px;
    transition: all 0.5s;
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    align-items: start;
    justify-content: center;
    font-size: 60px;
    overflow: hidden;
}

.cardinadmin:hover {
    background-color: #1d1d1d;
}

#profilconfig {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    background-color: #171717;
    border: 2px solid #26262b;
    border-radius: 9px;
    justify-content: space-between;
    padding: 40px;
}

#leftcard {
    padding: 20px;
    display: flex;
    background-color: aquamarine;
    width: 700px;
    height: 450px;
    justify-self: start;
    border-radius: 9px;
    border: 2px solid #26262b;
    flex-direction: column;
    background-color: #171717;
}

#rightcatd {
    padding: 20px;
    width: 550px;
    background-color: antiquewhite;
    display: flex;
    border-radius: 9px;
    border: 2px solid #26262b;
    background-color: #171717;
    flex-direction: column;
}

.font {
    font-size: 20px;
    font-weight: 600;
    background: linear-gradient(to right, #dbdbc8, #a09e9e);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;

}

.flow {
    font-size: 40px;
    color: aquamarine;
    text-shadow: aquamarine 1px 0 100px;
}

hr {
    border: 1px solid aquamarine;
    width: 100%;
}

.configfont {
    margin-top: 10px;
    font-size: 20px;
    background: linear-gradient(to right, #dbdbc8, #d8d5d5);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.configfont2{
    margin-top: 10px;
    font-size: 30px;
    color: aquamarine;
    text-shadow: aquamarine 1px 0 100px;
}
.change{
    margin-top: 20px;
    width: 100px;
    height: 40px;
    background-color: #171717;
    border: 2px solid #26262b;
    border-radius: 9px;
    align-self: flex-end;
    transition: all 0.2s;
    cursor: pointer;
    margin: 10px;
}
.change:hover{
    border: 2px solid #debc10;
    filter: drop-shadow(0 0 100px #debc10);
}
.change:active{
    width: 90px;
    height: 30px;
}
.changspn{
    font-weight: 600;
}
#adminimg{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 2px solid #26262b;
    transition: all 0.2s;
}
#adminimg:hover{
    border: 2px solid #debc10;
    filter: drop-shadow(0 0 100px #debc10);
}
#linkcontiner{
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
</style>