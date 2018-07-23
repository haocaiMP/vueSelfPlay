<template>
  <div>
    <div class="num" ref="num"></div>
    <button @click="add">+</button>
    <button @click="ff">-</button>
  </div>
</template>
<script>
import store from '../store'

export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    add: function() {
      var self = this;
      // console.log(self.$refs.num)
      setTimeout(function() {
        self.$store.commit('increment');
        self.$refs.num.innerHTML = self.$store.state.count;
      }, 100)

    },
    ff() {
      this.$store.commit('jian');
      setTimeout(() => {
        if (store.state.count <= -1) {
          this.$toast('不能再减啦！');
          store.state.count = 0
        } else {
          this.$refs.num.innerHTML = store.state.count;
        }
      }, 100)


    }
  }
}

</script>
<style scoped lang="">


</style>
