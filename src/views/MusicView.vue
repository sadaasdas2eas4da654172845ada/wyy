<template>
    <div class=" w-screen bg-[#5d4730]">
        <div class=" py-2 px-2 box-border flex justify-between" id="header"
        :class="{ 'sticky': isSticky }"
        :style="{ height: headerHeight + 'px', width: '100%', position: isSticky ? 'fixed' : 'static' }">
            <!-- 头部 -->
            <div class=" flex">
                <Icon icon="ic:sharp-less-than" color="#fffded" width="28" class=" mr-4" />
                <span class=" text-[#fffded] text-base">歌单</span>
            </div>
            <div class=" flex">
                <Icon icon="simple-line-icons:magnifier" color="#fffded" width="28" class=" mr-4" />
                <Icon icon="mingcute:more-2-line" color="#fffded" width="28" />
            </div>
        </div>
        <div class=" my-2 mx-2">
            <div class=" flex">
                <div class=" relative mr-[8px] mb-2">
                    <img :src="res.coverImgUrl" alt="" class=" w-[25vw] h-[25vw] rounded-lg">
                    <span class=" relative right-[-53px] top-[-100px] text-[#d5d6ce]">
                        {{Math.floor(res.playCount/10000)}}万
                    </span>
                </div>
                <div>
                    <div class=" flex mb-[10px]">
                        <span class=" text-sm text-[#fffff4]">
                            {{ res.name }}
                        </span>
                        <span class=" w-[5vw] h-[5vw] bg-[#725f49] rounded-[50%]">
                            <Icon icon="ic:sharp-less-than" color="#b9ad9c" width="20" :rotate="3" />
                        </span>
                    </div>
                    <div class=" flex text-[#f2eae5] text-xs leading-[20px] mb-[15px]">
                        <img :src="res.creator.avatarUrl" alt="" class=" w-[6vw] h-[6vw] rounded-[50%]">
                        <span>{{res.creator.nickname}}</span>
                        <div class=" w-[11vw] h-[5vw] flex bg-[#7a6752] rounded-2xl leading-[19px] text-center">
                            <Icon icon="clarity:add-line" color="#fffdf6" width="28" :rotate="3" class="pl-[4px] pb-[7px]" />
                            <span class=" w-[90px] h-[20px] pr-[5px]">
                                关注
                            </span>
                        </div>
                    </div>
                    <div class=" flex">
                        <div class=" w-[15vw] h-[5vw] flex bg-[#87745a] rounded-lg mr-3" v-for="(item) in list" v-bind:key="item.id">
                            <span class=" text-sm leading-[21px] text-[#c6bcb0] ml-[6px]">{{ item }}</span>
                            <Icon icon="ic:sharp-less-than" color="#fffdf6" width="24" :rotate="2" class="pb-[4px]" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 文章 -->
            <div class=" flex text-[#b4a394]">
                <p class=" overflow-hidden w-[60%] h-[20px]">{{ res.description }}</p>
                <Icon icon="ic:sharp-less-than" width="24" :rotate="2" />
            </div>

            <!-- 分享/评论/收藏 -->
            <div class=" flex justify-between text-[#ffffff] mt-5">
                <div class=" flex w-[29vw] h-[10vw] bg-[#8c7b65] rounded-3xl">
                    <Icon icon="majesticons:share" width="34" class=" ml-6 mt-1" />
                    <span class=" leading-10">{{ res.shareCount / 10000 }}</span>
                </div>
                <div class=" flex w-[29vw] h-[10vw] bg-[#8c7b65] rounded-3xl">
                    <Icon icon="ep:comment" width="34" class=" ml-6 mt-1" />
                    <span class=" leading-10">{{ res.commentCount / 10000 }}</span>
                </div>
                <div class=" flex w-[29vw] h-[10vw] bg-[#ff3b38] rounded-3xl">
                    <Icon icon="fluent:collections-20-filled" width="34" class=" ml-6 mt-1" />
                    <span class=" leading-10">{{ res.shareCount / 10000 }}</span>
                </div>
            </div>
        </div>

        <!-- 歌曲 -->
        <div class=" py-3 px-2 box-border rounded-lg bg-[#7a654d]">
            <div class=" flex justify-between">
                <div class=" flex text-[#f2f0ec]">
                    <Icon @click.native="playAll" icon="carbon:play-filled" color="red" width="28" class=" mr-2" />
                    <span class=" mr-2">播放全部</span>
                    <span>({{ Math.floor(res1.length) }})</span>
                </div>
                <div class=" flex">
                    <Icon icon="bi:download" color="#ece0d1" width="28" class=" mr-2" />
                    <Icon icon="humbleicons:bars" color="#ece0d1" width="28" />
                </div>
            </div>
            <div>
                <div v-for="(item,index) in res1" v-bind:key="item.id" class=" flex justify-between mb-3"> 
                <div class=" flex">
                    <span class=" text-[#a2927c] mr-3 leading-[50px]">{{ index+1 }}</span>
                    <div>
                        <p class="text-[#e7e3d7]">{{ item.name }}</p>
                        <p class="text-[#a2927c]">{{ item.ar[0].name }}</p>
                    </div>
                </div>
                <div class=" flex">
                    <Icon icon="octicon:play-16" color="#a2927c" width="28" class=" mr-2 mt-[13px]" />
                    <Icon icon="mingcute:more-2-fill" color="#a2927c" width="28" class=" mt-[13px]" />
                </div>
            </div>
            </div>
            <Player></Player>
        </div>
    </div>
</template>

<script>
    import { songDetail,songAll } from '@/request/index.js';
    import Player from '@/components/player/Players.vue'
    export default {
        components:{Player},
        data(){
            return {
                res:{},
                list:[],
                res1:{},
                headerHeight: 50, // 设置头部容器的高度
                scrollTop: 0, // 保存滚动位置
                isSticky:false
            }
        },
        created(){
            console.log(this.$route);
            songDetail(this.$route.query.id).then((res)=>{
               console.log(res)
               this.res = res.data.playlist
               this.list = res.data.playlist.tags
            });
            songAll(this.$route.query.id).then((res) => {
                console.log(this.res1);
                this.res1 = res.data.songs;
            });
        },
        mounted() {
                window.addEventListener('scroll', this.handleScroll);
            },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            playAll(){
                window.$player.replacePlaylist(this.res1.map((song)=>song.id),
                '',
                '');
            },
            handleScroll(event) {
            this.scrollTop = window.scrollY;
            // 计算滚动角度，可根据需求调整值
            const scrollAngle = (this.scrollTop / window.innerHeight) * 360;
            
            // 设置阈值，当滚动角度大于等于设定值时，启用吸顶效果
            if (scrollAngle >= 45) {
                this.isSticky = true;
                // 执行吸顶效果相关的操作，例如添加吸顶样式、更新数据等
                // 你可以通过改变数据属性，然后在模板中使用条件渲染来实现吸顶效果
            } else {
                this.isSticky = false;
                // 执行取消吸顶效果相关的操作
                // 例如，将数据属性恢复到默认值，或者将吸顶样式移除等
            }
            }
        }
    }
</script>
<style>
    .sticky {
        position: fixed;
        top: 0;
        left: 0;
        background-color:#5d4730;
        /* 添加其他吸顶样式 */
    }
</style>