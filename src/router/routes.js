import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';
import MineView from '@/views/MineView.vue';
import MusicView from '@/views/MusicView.vue';
export default [
    {
        path:'/',
        redirect:'/Login'
    },
    {
        path:'/IndexView/:id',
        component:IndexView
    },
    {
        path:'/HomeView',
        component:HomeView
    },
    {
        path:'/MineView',
        component:MineView
    },
    {
        path:'/MusicView/',
        component:MusicView
    },
    // {
    //     path:'/MusicView',
    //     // 懒加载
    //     component:()=> import('@/views/MusicView.vue')
    // },
    {
        path:'/Foo',
        // 懒加载
        component:()=> import('@/views/Foo.vue')
    },
    {
        path:'/InforView',
        // 懒加载
        component:()=> import('@/views/InforView.vue')
    },
    {
        path:'/Login',
        // 懒加载
        component:()=> import('@/views/Login.vue')
    },
    {
        path:'/Rest',
        component : () => import(/*webpackChunkName:'rest'*/"@/views/Rest.vue")
    },
    {
        path:'/JSX',
        component : () => import(/*webpackChunkName:'jsx'*/"@/views/JSX")
    },
    {
        path:'/Feat',
        component : () => import("@/views/Feat.vue")
    }
]