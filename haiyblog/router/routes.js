import { createRouter, createWebHistory } from "vue-router";

import zhuye from "@/view/zhuye.vue";
import xiaochuan from "@/view/xiaochuan.vue";
import wode from "@/view/wode.vue";
import wenzhang from "@/view/wenzhang.vue";
import liuyan from "@/view/liuyan.vue";
import laisheng from "@/view/laisheng.vue";
import article from "@/view/artdeteil.vue";

import admin from "@/view/admin/admin.vue";
import Artadmin from "@/view/admin/artadmin.vue";
import laishengadmin from "@/view/admin/laishengadmin.vue";
import linkadmin from "@/view/admin/linkadmin.vue";
import liuyanadmin from "@/view/admin/liuyanadmin.vue";
import Adminquanju from "@/view/admin/adminquanju.vue";
const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {
                path:"/",
                name:"zhuye",
                component:zhuye
            },
            {

                path:"/xiaochuan",
                name:"xiaochuan",
                component:xiaochuan
            },
            {
                path:"/wode",
                name:"wode",
                component:wode
            },
            {
                path:"/wenzhang",
                name:"wenzhang",
                component:wenzhang
            },
            {
                path:"/liuyan",
                name:"liuyan",
                component:liuyan
            },
            {
                path:"/laisheng",
                name:"laisheng",
                component:laisheng
            },
            {
                path:"/article/:id",
                name:"article",
                component:article
            },
            {
                path:"/admin",
                name:"admin",
                component:admin,
                redirect:"/admin/adminquanju",
                children:[
                    {
                        path:"zhuyeadmin",
                        name:"artadmin",
                        component:Artadmin
                        
                    },
                    {
                        path:"laishengadmin",
                        name:"laishengadmin",
                        component:laishengadmin
                    },
                    {
                        path:"linkadmin",
                        name:"linkadmin",
                        component:linkadmin
                    },
                    {
                        path:"liuyanadmin",
                        name:"liuyanadmin",
                        component:liuyanadmin
                    },
                    {
                        path:"adminquanju",
                        name:"adminquanju",
                        component:Adminquanju
                    }
                    
                    
                    
                    
                ]
            }
            
        ]
    }
)
export default router;