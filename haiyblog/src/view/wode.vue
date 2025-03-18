<template>
    <div id="root">
        <div id="logincontiner">
            <span id="cen" class="pi pi-home">来生After_life</span>
            <input type="text" id="admin" placeholder="账户" v-model="user.admin"/>
            <input type="password" id="password" placeholder="密码" v-model="user.password"/>
            <button id="login" @click="login"><span class="pi pi-angle-double-up loginfont" >登录</span></button>
        </div>
        <Toast />
    </div>
</template>



<script setup>
import { ref } from 'vue';

import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
const router = useRouter(); 
const toast = useToast();

const user =ref({
    admin:'',
    password:''
})
const login = () => {
    if (user.value.admin && user.value.password) {
        
        toast.add({ severity: 'success', summary: '成功', detail: '登陆成功', life: 5000 });
        router.replace({name:'admin'})
        
    }else{
        toast.add({ severity: 'warn', summary: '警告', detail: '账号或密码不能为空！', life: 3000 });
    }
}
function inner() {
    
}
inner()
</script>



<style scoped>
#root {

    width: 100%;
    height: 100%;
    display: flex;

    overflow: hidden;
    align-items: center;
    justify-content: center;
}

#cen {


    justify-self: center;
    align-self: center;
    font-weight: 600;
    font-size: larger;
    margin-bottom: 20px;
    background: linear-gradient(to right, #1b85e9, #ffff00);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 100px #0fb5fc);
}

#admin,
#password {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    border: 2px solid #26262b;
    padding: 10px;
    font-size: 20px;
    transition: all 0.5s;
}

#admin:focus,
#password:focus {
    outline: none;
}

#admin::placeholder,
#password::placeholder {
    font-size: 20px;
    font-weight: 600;
}

#admin:hover,
#password:hover {
    border: 2px solid #46DFD3;
}

#login {
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid #26262b;
    background-color: #171717;
    font-weight: 600;
    align-self: center;
    transition: all 0.2s;
    cursor: pointer;
}

#login:hover {
    border: 2px solid #46DFD3;
    background-color: #46DFD3;
}

#login:active {
    transform: scale(0.9);
}

#logincontiner {
    align-self: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    margin-bottom: 100px;
}

.loginfont {
    font-size: 20px;
    font-weight: 600;
}
</style>