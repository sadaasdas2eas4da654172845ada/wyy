<template>
    <div class=" w-screen text-[black]">
        <div class=" flex justify-around my-2 mx-2">
            <Icon icon="fluent-mdl2:up" width="28" :rotate="3" class=" mr-1" />
            <div class=" relative mr-1 w-[74vw] h-[8vw] bg-slate-300 rounded-2xl text-center">
                <input class=" my-1 mx-1 bg-slate-300" type="text" placeholder="只因你太美">
                <Icon icon="grommet-icons:form-search" width="24" class=" absolute left-2 top-1" />
            </div>
            <span class=" text-lg leading-8">搜索</span>
        </div>
        <div class=" my-2 mx-2 flex justify-around">
            <div class=" flex w-[22%] border-r-2 border-solid">
                <Icon icon="mdi:housing-estate" color="red" width="24" class=" fr-1" />
                <a href="#" class=" text-base">歌手</a>
            </div>
            <div class=" flex w-[22%] border-r-2 border-solid">
                <Icon icon="fe:music" color="red" width="24" class=" fr-1"  />
                <a href="#" class=" text-base">曲风</a>
            </div>
            <div class=" flex w-[22%] border-r-2 border-solid">
                <Icon icon="mingcute:tree-4-fill" color="red" width="24" class=" fr-1"  />
                <a href="#" class=" text-base">专区</a>
            </div>
            <div class=" flex w-[22%]">
                <Icon icon="bi:phone" color="red" width="24" class=" fr-1"  />
                <a href="#" class=" text-base">识曲</a>
            </div>
        </div>
        <div class=" my-2 mx-2 flex justify-between">
            <span class=" text-base">搜索记录</span>
            <Icon icon="fluent:delete-28-regular" width="24" />
        </div>
        <div class=" py-8 my-2 mx-2 flex justify-between">
            <span class=" text-base">猜你喜欢</span>
            <Icon icon="mdi-light:refresh" width="24" :rotate="1" />
        </div>
        <div class=" my-2 mx-2 overflow-auto">
            <div class=" w-[150%] flex">
                <div class=" w-[45%] bg-slate-200 rounded-xl">
                    <div class=" flex my-3 ml-3">
                        <span class=" mr-2 text-lg">热搜榜</span>
                        <div class=" flex bg-slate-400 rounded-lg w-[60px]">
                            <Icon icon="mdi:play" width="24" class=" mt-1" />
                            <span class=" text-sm leading-8">播放</span>
                        </div>
                    </div>
                    <ul>
                        <li class=" list-none" v-for="(item,index) in list" v-bind:key="item.id">
                            <span class="" :class="index < 3 ? ' font-bold text-[red]' : red">{{index + 1}}</span>
                            <span class="">{{item.searchWord}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchMineView } from '@/request/index.js';
    export default {
        data() {
            return{
                list:[],
            }
        },
        async created() {
            const res = await fetchMineView().catch((err) => {console.log(err)});
            this.list = res.data.data;
        },
    }
</script>