<template>
    <div>
        <span>123</span>
    </div>
</template>
<script>
import Player from './player.js';
export default {
  data() {
    return {
      player: new Player(),

    };
  },
  created() {
    console.log(this.player);
    window.$player = this.player;
  },
};

{/* <span class="口text-[#3E485E]">{{ player._currentTrack.name } MDN Reference<span class="text-[#7B8591]">{f player._currentTrack.name }}</s强an> */}

</script>
