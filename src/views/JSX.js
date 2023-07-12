import styled from 'styled-components-vue';
import { gitloginUser, gitJsx,fetchUserHistory } from '@/request/index';
const Wrapper = styled.div`
  background-color: #f5f6fa;
  background: url(static/R.jpg);;
  height: 37%;
`;
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

export default {
  components:{Tab,Tabs},
  render() {
    return (
      <Wrapper>
        <div class=" py-3 px-3 w-screen box-border h-[83vw]" >
          <div class=" flex justify-between">
          <router-link to="HomeView">
            <Icon icon="ic:outline-less-than" color="#fffef4" width="28" />
          </router-link>
          <div>
            <span class=' w-[10vw] h-[4vw] text-[#e5eae8]'>
              照片墙
            </span>
          </div>
          <Icon icon="ant-design:more-outlined" color="#fffef4" width="28" />
          </div>
        </div>
        <div class="bg-[#f5f6fa]  w-screen px-3 relative">
          {/* 个人资料部分 */}
          <div class=" w-[92vw] h-[44vw] bg-[#ffffff] rounded-2xl absolute top-[-21px] left-[20px]">
            <img src={this.img} class="w-[17vw] h-[#17vw] rounded-[50%] mt-[-30px] ml-[144px]"/>
            <span class="flex justify-center text-[#f23262d] text-base">{this.nickname}</span>
            <div class="flex justify-center text-[#f3f3f6]">
              <span class=" text-[#a2a2a2]">{this.follows}关注</span>
              <span class="px-3 text-[#a2a2a2]">{this.followeds}粉丝</span>
              <span class=" text-[#a2a2a2]">Lv.{this.level}</span>
            </div>
            <div class=" flex justify-center text-[#48484a]">
              <div class="border py-1 px-1 border-solid border-[#7c7e85]  rounded-lg">IP:湖北</div>
              <div class=" mx-2 py-1 px-1 flex border border-[#7c7e85] border-solid rounded-lg">
              <Icon icon="mingcute:male-line" color="#51bcde" width="20" />
              <span>00后 双鱼座</span>
              </div>
              <div class=" mr-2 py-1 px-1 border border-[#7c7e85] border-solid rounded-lg">湖北 武汉</div>
              <div class=" py-1 px-1 border border-[#7c7e85] border-solid rounded-lg">
              <router-link to="InforView">
              <Icon icon="ic:sharp-greater-than" width="24" />
              </router-link>
              </div>
            </div>
            <div class="flex mt-2 justify-center text-[#40424f]">
              <div class=" mr-2 py-2 px-2 border border-solid border-[#7c7e85] rounded-xl">
                <span>
                  编辑资料
                </span>
              </div>
              <div class="py-2 px-2 border border-solid border-[#7c7e85] rounded-[50%]" onClick={this.toggleDiv}>
                <Icon icon="ic:sharp-greater-than" width="24" rotate={ this.rl ? 3 : 1} />
              </div>
            </div>
            {this.rl && <div>
              <div class=" h-[33vw] w-[23vw] bg-[#f7f7f7] py-1 px-1 rounded-xl">
                <img src={this.img} class=" w-[9vw] h-[9vw] rounded-[50%] ml-[26px]"/>
                <p class=" flex justify-center text-[#6b717e]">宇航员66</p>
                <p class=" flex justify-center text-[#a2a4ab]">你可能喜欢</p>
                <p class=" w-[14vw] h-[6vw] flex justify-center border border-solid border-[#fa3b31] text-[#fa3b31] mt-[1px] ml-[15px]">关注</p>
              </div>
                
              </div>}
          </div>
      
        </div>
        <div class="text-[#eaeaf2]" style={{ marginTop: !this.rl ? '155px' : '285px' }}>
          <Tabs v-model={this.activeName} background="#f5f6fa">
            <Tab title="主页" name="a">
                <div class=" w-[94vw] h-[50vw] bg-[#ffffff] py-2 px-2 mx-3">
                  <h2 class=" text-lg text-[#383b42]">音乐品味</h2>
                  <div class=" flex justify-around bg-[#ffffff] rounded-xl">
                    <div class=" bg-[#fdf4f5] w-[27vw] h-[33vw] rounded-xl">
                      <p class=" text-[#b3b0b9] text-base">
                        我的喜欢
                      </p>
                      <p class="text-[#383b42]">186首</p>
                      <div class=" flex bg-[#fdf7e9] mt-[49px]">
                        <Icon icon="icon-park-solid:like" color="#b3b0b9" width="16" />
                        <span class=" text-[#b3b0b9] text-sm">喜欢的音乐</span>
                      </div>
                    </div>
                    <div class=" bg-[#fdf7e9] w-[27vw] h-[33vw] rounded-xl">
                      <p class=" text-[#b3b0b9] text-base">
                        累计听歌
                      </p>
                      <p class="text-[#383b42]">
                        {this.listenSongs}
                      </p>
                      <div class=" flex mt-[49px]">
                      <Icon icon="fa6-solid:ranking-star" color="#b3b0b9" width="16" />
                        <span class=" text-[#b3b0b9] text-sm">
                          听歌排行
                        </span>
                      </div>
                    </div>
                    <div class=" bg-[#f2f7fb] w-[27vw] h-[33vw] rounded-xl">
                      <p class=" text-[#b3b0b9] text-base">本周关键字</p>
                      <p class="text-[#383b42]">住在云村</p>
                      <div class=" flex mt-[49px]">
                      <Icon icon="solar:hourglass-bold" color="#b3b0b9" width="16" />
                        <span class=" text-[#b3b0b9] text-sm">
                          黑胶时光机
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" w-[94vw] h-[33vw] bg-[#ffffff] py-2 px-2 mt-[22px] rounded-xl mx-3">
                  <div class=" flex justify-between mb-[1vw]">
                    <div class=" flex">
                      <span class="text-[#2a3440] text-lg mr-1">我的评论</span>
                      <span class='text-[#b3b0b9]'>({this.commentCount})</span>
                    </div>
                    <Icon icon="bi:lock-fill" color="#b3b0b9" width="24" />
                  </div>
                  <div class=" flex justify-between mb-[1vw]">
                    <div class=" flex">
                      <img src={this.img} class=" w-[6vw] h-[6vw] rounded-lg mr-1" />
                      <span class="text-[#b3b0b9] text-xs leading-[22px]">Alan walkeysaa</span>
                    </div>
                    <Icon icon="solar:like-broken" color="#b3b0b9" width="24" />
                  </div>
                  <p class="text-[#2a3440] text-base mb-[1vw]">{this.content}</p>
                  <p class="text-[#b3b0b9]">7月9号</p>
                </div>
                <div class=" w-[94vw] h-[50vw] bg-[#ffffff] py-2 px-2 mt-[22px] rounded-xl mx-3">
                  <div class=" flex justify-content: space-between;">
                    <span class=" text-[#2b313d]">基本信息</span>
                    <span class="text-[#4d4e53]">{this.title}</span>
                  </div>
                  <p class="text-[#949494] mt-2">村龄: 6年 (2017年 04 月注册)</p>
                  <p class="text-[#949494] mt-2">性别:{this.gender == '1' ? '男' : '女'}</p>
                  <p class="text-[#949494] mt-2">年龄: 00后 双鱼座</p>
                  <p class="text-[#949494] mt-2">个人简介: {this.signature}</p>
                  <div class=" border-t border-solid border-[#949494] flex-content flex justify-center">
                    <div class=" flex">
                      <span class="text-[#949494]">查看全部</span>
                      <Icon icon="ic:round-greater-than" color="#949494" width="24" />
                    </div>
                  </div>
                </div>
            </Tab>
            <Tab title="动态" name="b">
            <div class="h-[20vw] flex justify-center">
              <span class=" mt-11 text-[#949494]">暂无相关动态</span>
            </div>
            </Tab>
            <Tab title="博客" name="c">
            <div class="h-[40vw] mt-12">
              <p class=" text-[#323345] flex justify-center">暂无声音</p>
              <p class="text-[#949494] mt-2 flex justify-center">开始录制你的第一条声音吧</p>
              <div class="flex justify-center mt-2">
                <span class="text-[#ffffff] bg-[red] flex justify-center pt-1  rounded-3xl w-[86px] h-[33px]">去录制</span>
              </div>
              </div>
              
            </Tab>
          </Tabs>
        </div>
      </Wrapper>
    );
  },
  data() {
    return {
      rl:true,
      activeName: 'a',
      msg: 'hhh',
      list: '',
      level:'',//等级
      follows:'',//关注
      img:'',//头像
      gender:'',//性别
      followeds:'',//粉丝
      nickname:'',//名字
      listenSongs:'',//你的喜欢
      title:'',//村民证
      gender:'',//性别
      signature:'',//个人简介
      backgroundImageUrl:'',
      commentCount:'',//评论数量
      content:'',//我的评论
      createTime:'',
    };
  },
  async created() {
    const res = await gitloginUser();
    console.log(res)
    // this.list = res.data.account.id;

    const res1 = await gitJsx(res.data.account.id);
    console.log(res1)
    const res2 = await fetchUserHistory(res.data.account.id);
    console.log(res2)
    this.content = res2.data.data.comments[0].content//我的评论
    this.commentCount = res2.data.data.commentCount//评论数量
    this.level = res1.data.level;//等级
    this.follows = res1.data.profile.follows//关注
    this.img = res1.data.profile.avatarUrl//头像
    this.gender = res1.data.profile.gender//性别
    this.followeds = res1.data.profile.followeds//粉丝
    this.nickname = res1.data.profile.nickname//名字
    this.listenSongs = res1.data.listenSongs//你的喜欢
    this.createTime = res1.data.createTime
    this.title = res1.data.profileVillageInfo.title//村民证
    this.gender = res1.data.profile.gender//性别
    this.signature = res1.data.profile.signature//个人简介
    this.backgroundImageUrl = res1.data.profile.backgroundUrl
    // 
  },  
  methods: {
    toggleDiv() {
      this.rl = !this.rl;
    }
  }
};
