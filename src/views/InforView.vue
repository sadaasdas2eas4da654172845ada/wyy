<template>
  <div class="bg-[#e9ecee] h-[194vw]">
    <div class="fixed bg-[#f6f9fb] top-0 h-[10vw] flex py-2 px-2">
      <router-link :to="{path:'/JSX/'}">
        <Icon icon="ic:sharp-less-than" color="#2b2e30" width="28" class="mr-[136px]" />
      </router-link>
      <span class="text-base text-[#303744]">我的资料</span>
    </div>
    <div class=" mt-10 bg-[#f6f9fb]">
      <div class=" h-[14vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">头像</span>
        <div class="flex">
          <img :src="img" alt="" class=" w-[12vw] h-[12vw] rounded-[50%]" />
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">昵称</span>
        <div class="flex">
          <span class=" text-sm text-[#c0c3c5] leading-[34px]">{{ nickname }}</span>
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">性别</span>
        <div class="flex">
          <span class=" text-sm text-[#c0c3c5] leading-[34px]">{{ gender == '1' ? '男' : '女' }}</span>
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[40px] mt-[-4px]">二维码</span>
        <div class="flex">
          <Icon icon="icon-park-outline:two-dimensional-code" color="#c0c3c5" width="24" class=" mt-[4px]" />
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
    </div>
    <div class=" mt-2 bg-[#f6f9fb]">
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">生日</span>
        <div class="flex">
          <span class=" text-sm text-[#c0c3c5] leading-[34px]">2001-03-18</span>
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">地区</span>
        <div class="flex">
          <span class=" text-sm text-[#c0c3c5] leading-[34px]" @click="rl = !rl">湖北武汉</span>
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
          <van-popup v-model="rl" position="bottom" :style="{ height: '50%' }">
            <van-area title="标题" :area-list="areaList" :columns-num="2" />
          </van-popup>
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[40px] mt-[-3px]">大学</span>
        <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">音乐标签</span>
        <div class="flex">
          <span class=" text-sm text-[#c0c3c5] leading-[34px]">选择标签</span>
          <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
        </div>
      </div>
      <div class=" h-[12vw] py-2 px-2 border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[34px]">简历</span>
      </div>
      <div class=" h-[40vw] py-2 px-2 border-b-[1px] border-solid border-[#d6d9db]">
        <p class="text-[#454c57] leading-[34px]">音乐标签</p>
        <div class=" flex justify-end mt-[1px]">
          <span class=" text-sm text-[#c0c3c5] mt-[44px]">296</span>
        </div>
      </div>
    </div>
    <div class=" mt-2 bg-[#f6f9fb]">
        <div class=" h-[14vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[40px] mt-[-3px] text-xl">个人主页隐私设置</span>
        <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
      </div>
      <div class=" h-[14vw] py-2 px-2 flex justify-between border-b-[1px] border-solid border-[#d6d9db]">
        <span class="text-[#454c57] leading-[40px] mt-[-3px]">主页模块顺序设置</span>
        <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
      </div>
      <div class=" h-[12vw] py-2 px-2 flex justify-between">
        <span class="text-[#454c57] leading-[40px] mt-[-3px]">账号与绑定设置</span>
        <Icon icon="ic:outline-greater-than" color="#c0c3c5" width="24" class=" mt-[4px]" />
      </div>
    </div>
  </div>
</template>
<script>
import { gitJsx,gitloginUser } from '@/request/index.js';
import Vue from 'vue';
import { Area,Popup } from 'vant';
import { areaList } from '@vant/area-data';

Vue.use(Area).use(Popup);
export default {
    data(){
        return {
            rl:false,
            areaList:Object.freeze(areaList),
            show: false,
            img:'',//头像
            nickname:'',//名字
            gender:'',//性别
        }
    },
    async created() {
        const res = await gitloginUser();
        const res1 = await gitJsx(res.data.account.id);
        console.log(res1);
        this.img = res1.data.profile.avatarUrl//头像
        this.nickname = res1.data.profile.nickname//名字
        this.gender = res1.data.profile.gender//性别
   },
   methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
