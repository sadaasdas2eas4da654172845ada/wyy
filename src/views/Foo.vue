<template>
  <div>
    <h1 @click="increase">Foo view{{ count }}</h1>
    <button @click="fn">toggle dialog</button>
    <!-- <Dialog title="警告" message="我是提示内容！" /> -->
  </div>
</template>
<script>
import Dialog from '@/components/Dialog';
import store from '@/store';
import { getUserAccount, getUserDetail } from '@/request';
// console.log(store);
export default {
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    // increase() {
    //   store.mutations.increase();
    // },
    increase: store.mutations.increase,
    fn() {
      Dialog({ title: '警告', message: '我是提示内容！' })
        .then(function () {
          console.log('点击了确定');
        })
        .catch(function () {
          console.log('点击了取消');
        });
    },
  },
  async created(){
    const res = await getUserAccount();
    console.log(res);
    const detail = await getUserDetail(res.data.profile.userId);
    console.log(detail)
  }
  // created() {
  //   Dialog({ title: '警告', message: '我是提示内容！' });
  // },
};
</script>