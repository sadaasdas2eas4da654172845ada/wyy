<template>
    <div class=" w-screen h-screen">
        <!-- 声明式导航 -->
        <router-link :to="{path:'/IndexView/'}">
        <Drawer/>
        </router-link>
        <!-- <router-link to="/IndexView">1320</router-link> -->
        <router-view/>
        <!-- <Player class=" absolute bottom-0 w-[100%] z-30"/> -->
    </div>
</template>
<script>
    export default {
        created(){
            // setTimeout(()=>{
            //     // 编程式导航
            //     this.$router.push('/IndexView')
            // },1000)
        }
    }
</script>