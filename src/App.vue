<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <PhotoView :index='0'/> -->
    <!-- <Pop :value="true" /> -->
    <!-- <PullUp /> -->
    <!-- <Rate /> -->
    <stateTest />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PhotoView from './components/PhotoView.vue'
// import Pop from './components/Pop.vue'
// import PullUp from './components/PullUp.vue'
import Rate from './components/Rate.vue'
import stateTest from './components/stateTest.vue'
export default {
  name: 'App',
  components: {
      // HelloWorld,
      // PhotoView,
      // Pop,
      // PullUp,
      // Rate,
      stateTest 
  },
  methods: {
      // aa() {
      //     // console.log('aa')

      //     Bus.$emit('input', 'flex')
      // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
