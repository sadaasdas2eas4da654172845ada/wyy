<template>
  <div :class="{ dark: switchCheckStatus }">
    <div class=" w-screen overflow-hidden " :class="`${switchCheckStatus ? 'bg-gray-700' : ' bg-[#f7f8fc]'}`">
      <div class="h-6 flex justify-around">
        <span @click="rl = !rl">
          <icon icon="codicon:three-bars" width="20" class="mt-1" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"/>
        </span>
        <!-- 左弹窗开始 -->
        <van-popup v-model="rl" position="left" :style="{ height: '100%', width: '80%' }">
          <div class="w-screen bg-slate-200">
            <div class="w-[80%] py-3 px-3 box-border" :class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-slate-200'}`">
              <div class="flex justify-between mb-3">
                <p class="flex" :class="`${switchCheckStatus ? 'text-[#fdfdfd]' : 'text-[#222222]'}`">
                  <img
                    class="w-[25px] rounded-[50%]"
                    :src="name.avatarUrl"
                    alt=""
                  />
                  <span class="text-xs leading-6">{{ name.nickname }}</span>
                  <Icon icon="ic:baseline-greater-than" width="24" />
                </p>
                <Icon
                  icon="teenyicons:scan-solid" width="24" :class="`${switchCheckStatus ? 'text-[#fdfdfd]' : 'text-[#222222]'}`"/>
              </div>
              <div class="mb-5">
                <div
                  class="text-xs bg-gradient-to-r from-[#2a2727] to-slate-600 rounded-2xl"
                >
                  <p class="flex justify-between py-3 px-2 box-border">
                    <span class="text-slate-200 text-sm">开通黑胶VIP</span>
                    <span
                      class="w-[55px] h-[20px] text-[#a18e8a] leading-4 border-2 rounded-lg border-solid border-[#a18e8a]"
                      >会员中心</span
                    >
                  </p>
                  <p
                    class="flex py-3 box-border mb-2 border-b-[1px] border-solid border-[#363636]"
                  >
                    <span class="leading-5 text-[#73696a]"
                      >立享超21项专属特权</span
                    >
                    <Icon
                      icon="ic:baseline-greater-than"
                      width="24"
                      class="text-[#73696a]"
                    />
                  </p>
                  <p class="flex justify-between px-2">
                    <span class="text-[#73696a] leading-8"
                      >专享优惠!黑胶VIP仅￥0.1/天!</span
                    >
                    <span
                      class="w-[30px] h-[30px] text-center bg-[#da4900] text-[#ffecec]"
                      >受邀专享</span
                    >
                  </p>
                </div>
              </div>
              <div class="py-3 px-3 box-border  rounded-xl" :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`">
                <div class="flex justify-between border-b-[1px] border-solid border-[#363636]">
                  <div class="flex" :class="`${switchCheckStatus ? 'text-[#fdfdfd]' : 'text-[#222222]'}`">
                    <span class="mr-3">
                      <Icon icon="tabler:message" width="24" color="" />
                    </span>
                    <span class="">消息中心</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div
                  class="flex justify-between border-b-[1px] border-solid border-[#363636]"
                >
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[#fdfdfd]' : 'text-[#222222]'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="mdi:love-seat-outline" width="24" color="" />
                    </span>
                    <span class="">云贝中心</span>
                  </div>
                  <div>
                    <span class="flex justify-between">
                      <span class="mr-3 text-[#959595] text-xs leading-6"
                        >签到</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[#fdfdfd]' : 'text-[#222222]'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="icon-park-outline:lamp" width="24" color="" />
                    </span>
                    <span class="">创作者中心</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="my-6 px-3  rounded-xl"
                :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
              >
                <div class="mb-4 border-b-[1px] border-solid border-[#363636]">
                  <span class="text-[#a3a3a3]">音乐服务</span>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="formkit:pinterest" width="24" />
                    </span>
                    <span>趣测</span>
                  </div>
                  <div class="flex">
                    <span class="mr-3 text-[#a3a3a3] text-xs leading-6">
                      点击查看今日运势
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:holiday-village-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>云村月示</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="lucide:pocket-knife" width="24" />
                    </span>
                    <span>多多西西口袋</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="map:shopping-mall" width="24" />
                    </span>
                    <span>商城</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="iconoir:time-zone" width="24" />
                    </span>
                    <span>Beat专区</span>
                  </div>
                  <div>
                    <span class="flex justify-between">
                      <span class="mr-3 text-[#959595] text-xs leading-5"
                        >顶尖制作邀你创作</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="solar:dumbbell-small-line-duotone"
                        width="24"
                      />
                    </span>
                    <span>口袋彩铃</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="fluent-mdl2:game" width="24" />
                    </span>
                    <span>游戏专区</span>
                  </div>
                  <div class="flex">
                    <span class="mr-2 text-[#959595] text-xs leading-6">
                      音乐浇灌治愈花园
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="my-6 px-3 rounded-xl"
                :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
              >
                <div class="mb-4 border-b-[1px] border-solid border-[#363636]" :class="`${switchCheckStatus ? 'bg-[#202020]' : 'bg-[#ffffff]'}`">
                  <span class="text-[#a3a3a3]">其他</span>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ic:baseline-phonelink-setup" width="24" />
                    </span>
                    <span>设置</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="gg:dark-mode" width="24" />
                    </span>
                    <span>深色模式</span>
                  </div>
                  <div>
                    <drawer :value.sync="switchCheckStatus"></drawer>
                    <!-- <Drawer :value.sync="switchCheckStatus" /> -->
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="quill:off" width="24" />
                    </span>
                    <span>定时关闭</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                        width="24"
                      />
                    </span>
                    <span>个性装扮</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="charm:music" width="24" />
                    </span>
                    <span>边听边存</span>
                  </div>
                  <div>
                    <span class="flex">
                      <span class="mr-3 text-[#959595] text-xs leading-5"
                        >未开启</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:book-online-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>在线听歌免流量</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="ic:twotone-switch-access-shortcut-add"
                        width="24"
                      />
                    </span>
                    <span>添加Siri捷径</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="arcticons:callsblacklist" width="24" />
                    </span>
                    <span>音乐黑名单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:book-online-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>青少年模式</span>
                  </div>
                  <div class="flex">
                    <span class="mr-3 text-[#959595] text-xs leading-5">
                      未开启
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="clarity:alarm-clock-line" width="24" />
                    </span>
                    <span>音乐闹钟</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="my-6 px-3 rounded-xl"
                :class="`${switchCheckStatus ? 'bg-[#202020]' : 'bg-[#ffffff]'}`"
              >
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ri:customer-service-2-fill" width="24" />
                    </span>
                    <span>我的客服</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="icon-park-twotone:transaction-order"
                        width="24"
                      />
                    </span>
                    <span>我的订单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ri:coupon-4-line" width="24" />
                    </span>
                    <span>优惠卷</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="carbon:music" width="24" />
                    </span>
                    <span>分享网易云音乐</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:inventory-rounded"
                        width="24"
                      />
                    </span>
                    <span>个人信息收集与使用清单</span>
                  </div>
                  <div>
                    <span class="">
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="fluent:book-information-24-regular"
                        width="24"
                      />
                    </span>
                    <span>个人信息第三方共享清单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ic:outline-privacy-tip" width="24" />
                    </span>
                    <span>个人信息与隐私保护</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="mdi:about-circle-outline" width="24" />
                    </span>
                    <span>关于</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <p
                class="h-[50px] my-6 px-3  text-[red] rounded-lg text-center leading-[54px]"
                :class="`${switchCheckStatus ? 'bg-[#202020]' : 'bg-[#ffffff]'}`"
              >
                退出登录
              </p>
            </div>
          </div>
        </van-popup>
        <!-- 左弹窗结束 -->

        <!-- 下弹出框开始 -->
        <van-popup
          v-model="show"
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '30%' }"
        >
          <div
            class="h-[100%]"
            :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
          >
            <p class="py-6 box-border border-b-2 text-xs text-pink-500">张碧晨 为你推荐</p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="ei:like" width="36" class="mr-1" />
              </span>
              <span class="leading-8">优先推荐</span>
            </p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="iconoir:user-love" width="28" class="mr-2" />
              </span>
              <span class="leading-8">减少推荐</span>
            </p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="clarity:refresh-line" width="24" class="mr-3"  />
              </span>
              <span>刷新</span>
            </p>
          </div>
        </van-popup>
        <!-- 下弹出框结束 -->
        <router-link :to="{path:'/MineView'}">
          <input
          type="text"
          :placeholder="fetchSearch.showKeyword"
          class="bg-gradient-to- w-80 rounded-xl h-6 text-xs"
          :style="`background-image: linear-gradient(to right, ${switchCheckStatus ? '#261e43' : '#dddbfb'}, ${switchCheckStatus ? '#37203c' : 'pink'})`"
        />
        </router-link>
        <icon
          icon="mdi:microphone"
          width="20"
          class="mt-1" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
        />
      </div>
      <!-- banner -->
      <div class=" my-3 mx-3">
        <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in menu" v-bind:key="item.id">
            <img :src="item.pic" alt="" class=" rounded-xl" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      </div>
      <!-- 选项卡 -->
      <div class=" my-3 mx-3">
        <div class="swiper-container6">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="ph:calendar-fill" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">每日推荐</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="material-symbols:radio-sharp" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">私人漫游</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="ic:sharp-lyrics" color="red" width="28" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">歌单</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="icon-park-solid:ranking-list" color="red" width="28" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">排行榜</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="ic:sharp-book" color="red" width="28" :rotate="2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">有声书</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="material-symbols:album" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">数字专辑</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="dashicons:album" color="red" width="28" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">直播</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="entypo:music" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">关注新歌</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="material-symbols:flowsheet-rounded" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">一歌一遇</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="ri:auction-fill" color="red" width="28" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">收藏家</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <span>
                  <Icon icon="mingcute:game-1-fill" color="red" width="28" class=" ml-2" />
                </span>
                <span class=" text-xs" :class="`${switchCheckStatus ? 'text-[#c1bec7]' : 'text-gray-900'}`">游戏专区</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 推荐歌单 -->
      <div class="flex justify-between my-2 mx-2" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <h2>推荐歌单</h2>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>
      <!-- 推荐歌单下的siwper -->
      <div class=" my-2 mx-2 ">
        <div class="swiper-container1" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
            <div class="swiper-wrapper">
                <div
                class="swiper-slide mr-5 overflow-hidden"
                style="border-radius: 10px; height: 128px"
              >
                <transition name="abc">
                  <div v-if="visible" class="absolute top-0 left-0">
                    <img
                      alt=""
                      src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg"
                      style="border-radius: 10px"
                    />
                    <p
                      class="absolute"
                      style="top: 10px; right: 10px;"
                    >
                      <Icon icon="ion:infinite" width="20" />
                    </p>
                  </div>
                </transition>
                <transition name="abc">
                  <div v-if="!visible" class="absolute top-0 left-0">
                    <img
                      alt=""
                      src="http://p2.music.126.net/pCk-zKisrYzpXpUcrK5G5w==/3399689964828104.jpg"
                      style="border-radius: 10px"
                    />
                    <p
                      class="absolute"
                      style="top: 10px; right: 10px;"
                    >
                      <Icon icon="ion:infinite" width="20" />
                    </p>
                  </div>
                </transition>
                <!-- <p class="h-[48px] text-xs overflow-hidden">
                      评论数最多的动漫音乐TOP100（长期更新）
                    </p> -->
                    <p class="h-[48px] text-xs mt-[1px] overflow-hidden fixed top-[126px]">{{ texts[currentIndex] }}</p>
              </div>
                <div class="swiper-slide mr-6" style="border-radius: 10px; height: 200px" v-for="item in lists2" v-bind:key="item.id">
                  <!-- <router-link :to="{path:'/MusicView'}">
                    <img :src="item.uiElement.image.imageUrl" alt="" style="border-radius: 12px" @click="songDtail(item.resources[0].resourceId)" />
                  </router-link> -->
                  <img :src="item.uiElement.image.imageUrl" alt="" style="border-radius: 12px" @click="songDtail(item.resources[0].resourceId)" />
                  <p class="text-xs">{{ item.uiElement.mainTitle.title }}</p>
                </div>
            </div>
        </div>
      </div>

      <!-- 新闻导播 -->
      <div class="flex justify-between my-2 mx-2" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="flex">
          <h2>新闻导播</h2>
          <Icon icon="ic:baseline-greater-than" width="24" />
        </div>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>
      <!-- 新闻导播下的swper -->
        <div class=" my-2 mx-2 rounded-lg" :class="`${switchCheckStatus ? 'bg-[#282830]' : ' bg-[#ffffff]'}`">
        <div class="swiper-container2 py-2 px-2" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in lists2"
              v-bind:key="item.id"
            >
              <div class="flex justify-around mb-8 h-[70px]">
                <div>
                  <p class=" mb-3">
                    <span class="text-[#a6a6a8] text-xs">云村音乐</span> <span class="text-[#a6a6a8] text-xs">{{ time }}</span>
                    <span class="bg-[#f2e0dc] text-[#ea5767]">热门时报</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                  style="border-radius: 12px"
                />
              </div>
              <div class="flex justify-around mb-8 h-[70px]">
                <div class=" mb-3">
                  <p>
                    <span class="text-[#a6a6a8] text-xs">乐队</span><span class="text-[#a6a6a8] text-xs">{{ time }}</span>
                    <span class="bg-[#f2e0dc] text-[#ea5767]">花儿红乐队</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                />
              </div>
              <div class="flex justify-around h-[70px]">
                <div class=" mb-3">
                  <p>
                    <span class="text-[#a6a6a8] text-xs">彩虹</span> <span class="text-[#a6a6a8] text-xs">{{ time }}</span>
                    <span class="bg-[#f2e0dc] text-[#ea5767]">热门歌曲</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜 -->
      <div class="flex justify-between my-2 mx-2" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="flex">
          <h2>排行榜</h2>
          <Icon icon="ic:baseline-greater-than" width="24" />
        </div>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>
      <!-- 排行榜下的swiper -->
      <div class=" my-2 mx-2">
        <div :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="swiper-container3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class=" my-2 mx-2 py-2 px-2 rounded-lg" :class="`${switchCheckStatus ? 'bg-[#282830]' : ' bg-[#ffffff]'}`">
                <div class=" flex justify-between">
                 <div class=" flex">
                  <span>MV榜</span>
                  <Icon icon="ic:baseline-greater-than" width="24" />
                 </div>
                  <span class=" text-[#afafaf] text-xs">云村用户都在看</span>
                </div>
                <div class="">
                  <div class=" flex mb-2">
                    <img class=" mr-2 w-[60px] h-[50px] rounded-lg" src="https://img2.baidu.com/it/u=3853345508,384760633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1200" alt="">
                    <span class=" mr-2 text-[#c6993e] leading-[3rem]">1</span>
                    <span class=" mr-28 leading-[3rem]">眉南一双思梦眼</span>
                    <span class="text-[red] leading-[3rem]">热门</span>
                  </div>
                  <div class=" flex mb-2">
                    <img class=" mr-2 w-[60px] h-[50px] rounded-lg" src="https://img2.baidu.com/it/u=3853345508,384760633&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1200" alt="">
                    <span class=" mr-2 text-[#8588a7] leading-[3rem]">2</span>
                    <span class=" mr-20 leading-[3rem]">互动电影正式上线了</span>
                    <span class="text-[red] leading-[3rem]">热门</span>
                  </div>
                  <div class=" flex">
                    <img class=" mr-2 w-[60px] h-[50px] rounded-lg" src="https://img2.baidu.com/it/u=2048195462,703560066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333" alt="">
                    <span class=" mr-2 text-[#ba795d] leading-[3rem]">3</span>
                    <span class=" mr-24 leading-[3rem]">糟糕，没有酷起来</span>
                    <span class="text-[red] leading-[3rem]">热门</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="flex justify-between my-2 mx-2" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <h2>热门话题</h2>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>

      <div class=" my-2 mx-2">
        <div class="swiper-container4" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
          <div class="swiper-wrapper">
            <div class="swiper-slide flex box-border border-solid rounded-md bg-[#a99980]" style="border-radius: 12px">
              <div class=" my-3 mx-3">
                <p class="text-xs flex">
                  <Icon icon="solar:emoji-funny-circle-bold-duotone" width="24" />
                  <span class=" leading-[25px]">寻找云村最会拍照的人!</span>
                </p>
                <span class="text-pink-200 text-xs">30万热度</span>
                <p class="text-sm">
                 武汉禁言大使:爱情有整治这首歌给人很大鼓励
                </p>
              </div>
              <img
                src="https://seopic.699pic.com/photo/50051/5435.jpg_wh1200.jpg"
                alt=""
                class="w-[80px] h-[60px] mt-[40px]"
                style="border-radius: 12px"
              />
            </div>
            <div
              class="swiper-slide flex box-border border-solid rounded-md bg-[#abab8f]"
            >
              <div class=" my-3 mx-3">
                <p class="text-xs flex">
                  <Icon icon="solar:emoji-funny-circle-bold-duotone" width="24" />
                  <span class=" leading-[25px]">
                    最令你感动的那首情歌
                  </span>
                </p>
                <span class="text-pink-200 text-xs">300万热度</span>
                <p class="text-sm">
                  Saint_Denis:进入飒飒大爱心大大撒大大大...
                </p>
              </div>
              <img
                src="https://img2.baidu.com/it/u=1969968235,4288354655&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
                alt=""
                class="w-[80px] h-[60px] mt-[40px]"
                style="border-radius: 12px"
              />
            </div>
            <div class="swiper-slide flex box-border border-solid rounded-md bg-[#9593a8]">
              <div class=" my-3 mx-3">
                <p class="text-xs flex">
                  <Icon icon="solar:emoji-funny-circle-bold-duotone" width="24" />
                  <span class=" leading-[25px]">
                    年少有为开奥迪
                  </span>
                 
                </p>
                <span class="text-pink-200 text-xs">469万热度</span>
                <p class="text-sm">
                  谢晓偶是西湖冲个凉手:人生不相见,动如参与商你喜欢阿斯顿
                </p>
              </div>
              <img
                src="https://img0.baidu.com/it/u=741268616,1401664941&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500"
                alt=""
                class="w-[80px] h-[60px] mt-[40px]"
                
                style="border-radius: 12px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchSearchDefault, fetchSear,gitloginList,gitloginUser } from '@/request/index.js';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import BScroll from '@better-scroll/core';
import Players from '@/components/player/Players.vue'

import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  components: {
    drawer: () => import('../components/Drawer/Drawer.vue')
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    new BScroll(this.$refs / wrapper);
  },
  data() {
    return {
      texts: [
      '那些好听的日漫主题曲',
      '评论数最多的动漫音乐',
        // 添加更多文本
      ],
      currentIndex: 0, // 当前显示的文字索引
      name:[],//登陆后名字和头像
      id:[],
      list4:[],
      visible: true,
      ert: null,
      fetchSearch: {},
      switchCheckStatus: false,
      show: false,
      rl: false,
      time: [],
      num: 12,
      menu: [], //图片上一级
      //   activeMenuItem:'',
      menu1: {},
      menu2:[],
      menu3: [],
      lists: [
        {
          id: 1,
          name: '每日推荐',
        },
        {
          id: 2,
          name: '私人漫游',
        },
        {
          id: 3,
          name: '歌单',
        },
        {
          id: 4,
          name: '排行榜',
        },
        {
          id: 5,
          name: '有声书',
        },
        {
          id: 6,
          name: '数字专辑',
        },
        {
          id: 7,
          name: '直播',
        },
        {
          id: 8,
          name: '关注新歌',
        },
        {
          id: 9,
          name: '一歌一遇',
        },
        {
          id: 10,
          name: '收藏家',
        },
        {
          id: 11,
          name: '游戏专区',
        },
      ],
      lists2: [],
    };
  },
  async created() {
    const res3 = await gitloginUser();
    console.log(res3)
    const res2 = await gitloginList();
    this.name = res2.data.data.profile

    const res1 = await fetchSearchDefault();
    this.fetchSearch = res1.data.data;
    const res = await fetchSear().catch((err) => {
      console.log(err);
    });
    this.menu = res.data.data.blocks[0].extInfo.banners;
    this.lists2 = res.data.data.blocks[2].creatives;
    this.menu2 =res.data.data.blocks[2].creatives[5].resources[0].resourceExtInfo.artists;
    this.list4 = res.data.data.blocks[3].creatives[2].resources
  },
  mounted() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    this.time = `${currentMonth}/${currentDay}`;
    setInterval(() => {
      this.visible = !this.visible;
    }, 6000);
    setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
  }, 6000);
  },
  methods: {
    toggle() {
      this.$emit('update:value', !this.value);
    },
    getswiper() {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        touchMoveStopPropagation: false,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      });
      new Swiper(`.swiper-container1`, {
        slidesPerView: 3,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper(`.swiper-container2`, {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper(`.swiper-container3`, {
        spaceBetween: 30,
        touchMoveStopPropagation: false,
      });
      new Swiper(`.swiper-container4`, {
        freeMode: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper(`.swiper-container6`, {
        slidesPerView: 5,
        freeMode: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
    songDtail(id){
      this.$router.push({path:'/MusicView',query:{id}});
      // this.$router.push({ path: '/song', query: { id: this.personalized[index].id } });
    },
    // songAll(id){
    //   this.$router.push({path:'/MusicView',query:{id}});
    //   // this.$router.push({ path: '/song', query: { id: this.personalized[index].id } });
    // }
  },
  updated() {
    this.$nextTick(() => {
      this.getswiper();
    });
  },
};
</script>
<style>
.active {
  color: red;
}

.abc-enter {
  transform: translateY(100%) scale(0.7);
}

.abc-enter-active {
  transition: all ease-in-out 1s;
}

.abc-enter-to {
  transform: translateY(0) scale(1);
}

.abc-leave {
  transform: translateY(0) scale(1);
}

.abc-leave-active {
  transition: all ease-in-out 1s;
}

.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}
</style>
