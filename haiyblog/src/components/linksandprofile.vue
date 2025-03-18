<template>
    <div id="root5">
        <div id="left">
            <span id="leftfont">Hello👋，想聊点什么 这里有无穷的知识~</span>
            

            <div id="gundong">
                <span class="ch1">SUN</span>
                <span class="ch2">HAI</span>
                <span class="ch1">YANG</span>
                <span class="ch2">YANG</span>

            </div>
        </div>
        <div id="right">
            <span class="pi pi-map-marker fontorg flow">博客名称</span>
            <span class="pi pi-twitter fontorg flow">带着一箱热情横冲直撞~~~</span>
            <span class="pi pi-phone fontorg flow">123456789</span>
            <span class="pi pi-inbox fontorg flow">expample@OUTLOOK.COM</span>
            <span class="pi pi-map-marker fontorg flow">现居于XX市XX区</span>
            <hr>
            <span class="pi pi-link fontorg spe">LINKs</span>
            <div id="linkcontiner">
                <button class="mainbtn"><span class="pi pi-github linkfont">GIT</span></button>
                <button class="mainbtn"><span class="pi pi-facebook linkfont">Facebook</span></button>
                <button class="mainbtn"><span class="pi pi-twitch linkfont">Twitch</span></button>
                <button class="mainbtn"><span class="pi pi-comment linkfont">Wechat~</span></button>
                <button class="mainbtn"><span class="pi pi-crown linkfont"> QQ</span></button>
                <button class="mainbtn"><span class="pi pi-youtube linkfont">Youtobe</span></button>

            </div>
        </div>
    </div>
</template>



<script setup>
import liuyanban from './liuyanban.vue';



</script>



<style scoped>
#root5 {
    height: 400px;
    width: 980px;
    background-color: #171717;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    overflow: hidden;

    margin-right: 40px;
    filter: drop-shadow(0 0 10px #000000);
    transition: filter 0.5s;
    border: 2px solid #26262b;
    transition: all 0.5s;
}

#root5:hover {
    filter: drop-shadow(0 0 20px #000000);
    border: 2px solid #46DFD3;
}

#gundong {
    display: flex;
    height: 80px;
    width: 500px;
    background-color: #0bffda;
    position: fixed;
    background-clip: border-box;
    align-items: center;
    transform: rotate(90deg);
    align-self: center;

    filter: drop-shadow(0 0 100px #0fbfd3);
    border: 3px solid #ffa10b;
    transition: border 0.5s;
}

#gundong:hover {
    border: 2px dashed #b6ff0b;
}

.ch1 {
    color: #ffffff00;
    font-size: 80px;
    font-weight: bolder;
    -webkit-text-stroke: 2px #fefefe;
    animation: ch1 5s linear infinite;

}

.ch2 {
    color: #000000;
    font-size: 80px;
    font-weight: bolder;
    animation: ch2 5s linear infinite;

}

#left {
    
    width: 400px;
    display: flex;

}

#right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #0bffda;
}

@keyframes ch1 {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-120%);
    }
}

@keyframes ch2 {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-110%);
    }
}

.tongji {
    color: #ffffff;
    font-size: 20px;
    font-weight: bolder;
}

#lineleft {
    height: 400px;
    width: 400px;
    background-color: #171717;

}

.fontorg {
    color: #000000;
    font-weight: 600;
    font-size: 25px;
    margin: 5px;
}

hr {
    border: 2px solid #f7f7f7;
    margin-top: 10px;
    margin-bottom: 10px;
}

.spe {
    align-self: flex-end;
}

#linkcontiner {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
}

.flow {
    color: #fefefe;
    text-shadow: 2px 0 #000,
        -2px 0 #000,
        0 2px #000,
        0 -2px #000,
        2px 2px #000,
        -2px -2px #000,
        2px -2px #000,
        -2px 2px #000;

}

.mainbtn {
    width: 150px;
    height: 40px;
    background-color: #f7f7f7;
    border: 2px solid #26262b;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    cursor: pointer;
}

.mainbtn:hover {
    border: 2px solid #46DFD3;
    background-color: #f0cd59;
    color: #f7f7f7;
}

.linkfont {
    font-size: 14px;
    font-weight: 600;
    color: #171717;
}
#leftfont{
    color: #fefefe;
    font-size: 30px;
    font-weight: 600;
    margin-top: 100px;
    width: 170px;
    margin-left: 20px;
}
</style>