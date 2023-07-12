<template>
    <div>
        <Button>aaaa</Button>
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show" position="top" :style="{ height: '30%' }" />
    </div>
   
</template>
<script>
import { Button,Popup,Area } from 'vant';
import Vant from 'vant';
    export default {
        components:{Button,Popup,Area},
        data(){
            return {
                show: false,
            }
        },
        methods: {
    showPopup() {
      this.show = true;
    },
  },
    }
</script>