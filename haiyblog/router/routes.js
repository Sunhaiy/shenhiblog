import { createRouter, createWebHistory } from "vue-router";

import zhuye from "@/view/zhuye.vue";
import xiaochuan from "@/view/xiaochuan.vue";
import wode from "@/view/wode.vue";
import wenzhang from "@/view/wenzhang.vue";
import liuyan from "@/view/liuyan.vue";
import laisheng from "@/view/laisheng.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {
                path:"/",
                component:zhuye
            },
            {
                path:"/xiaochuan",
                component:xiaochuan
            },
            {
                path:"/wode",
                component:wode
            },
            {
                path:"/wenzhang",
                component:wenzhang
            },
            {
                path:"/liuyan",
                component:liuyan
            },
            {
                path:"/laisheng",
                component:laisheng
            }
            
        ]
    }
)
export default router;