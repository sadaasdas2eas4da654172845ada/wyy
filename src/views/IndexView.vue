<template>
    <div class="w-screen overflow-hidden">
    <icon icon="mingcute:aerial-lift-fill" color="#607" width="30" class="text-center w-[400px]" :horizontalFlip="true" />
    <!-- <icon icon="ic:baseline-alarm-add" font-size="50px"/> -->
    <ul class="overflow-hidden w-[400px] h-[16px]">
      <li v-for="item in menu" v-bind:key="item.id" class="text-xs float-left mx-4 cursor-pointer" v-bind:class="{active : item.name === activeMenuItem}"
          v-on:click="toggleMenu(item.name)">
          {{item.name}}
      </li>
  </ul>
  <ul class="flex flex-wrap">
      <li v-for="item in playlists" v-bind:key="item.id" class=" w-1/4 ml-4 mb-3">
          <div class=" w-full h-30 rounded overflow-hidden">
              <img :src="item.coverImgUrl" alt="" class="w-full h-full">
          </div>
          <p class="text-xs">{{item.name}}</p>
      </li>
  </ul>
    </div>
</template>
<script>
import {fetchPlaylistHot,fetchPlaylists} from "@/request/index.js"
    export default {
        data() {
		return {
      menu:[],
      activeMenuItem:'华语',
      playlists: []
		}
	},
	methods: {
		toggleMenu(name) {
			this.activeMenuItem = name
		},
	},
    async created() {
		const res = await fetchPlaylistHot().catch( (err) => console.log(err) );
		this.menu = res.data.tags
	},
    watch:{
        // 指定数据变化的回调函数
         activeMenuItem:{
            async handler(newCat){
               const res = await fetchPlaylists(newCat);
               this.playlists = res.data.playlists;
                // fetchPlaylists(newCat).then((res)=>{
                //     this.playlists = res.data.playlists;
                // });
            },
            // 指向配置 立即执行
            immediate:true, 
         }
    }
    }
</script>
<style>
    .active{
    color: red;
}
</style>