<template>
  <div class="wrapper">
    <Swiper :autoPlay='false' :showIndicator='true' interval='5000' duration='500' ref="swiper">
      <Slide @click="clickMe" v-for="(item,index) in slidesReal" :key="index" :style="{backgroundImage:'url('+item.bg+')'}">
        {{item.text}}
      </Slide>
    </Swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    Slide
  } from 'vue-swiper-component';
  export default {
    components: {
      Swiper,
      Slide
    },
    props: {},
    data() {
      return {
        slidesReal: [{
            text: 1,
            bg: '//img.alicdn.com/tfs/TB1jRoAXzihSKJjy0FeXXbJtpXa-400-300.png'
          },
          {
            text: 2,
            bg: '//img.alicdn.com/tfs/TB1jRoAXzihSKJjy0FeXXbJtpXa-400-300.png'
          },
          {
            text: 3,
            bg: '//img.alicdn.com/tfs/TB1jRoAXzihSKJjy0FeXXbJtpXa-400-300.png'
          }
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {
      indicatorClick() {
        var self = this;
           
        // this.$nextTick(() => {
        //   alert('渲染完成')
        //   var nodeList = document.querySelectorAll('.wh_indicator_item');
        //   var arrNodes = Array.from(nodeList);
        //   console.log(nodeList);
        //   console.log(arrNodes);
        //   document.querySelector('.wh_indicator').addEventListener('click', function (e) {
        //     console.log(e.target)
        //     console.log(arrNodes.indexOf(e.target))
        //   }, false)
        // })
        setTimeout(() => {
          var nodeList = document.querySelectorAll('.wh_indicator_item');
          var arrNodes = Array.from(nodeList);
          console.log(arrNodes);
          document.querySelector('.wh_indicator').addEventListener('click', function (e) {
            console.log(arrNodes.indexOf(e.target))
            var index = arrNodes.indexOf(e.target);
            self.$refs.swiper.slideTo(index);
          }, false)
        }, 100)
        // var nodeList = document.getElementsByClassName('wh_indicator_item');
        // var nodeList = document.querySelector('.wh_indicator').childNodes;
        // var arrNodes = [].slice.call(nodeList);
        //  var arrNodes = Array.from(nodeList);
      },
      clickMe() {

      }
    },
    created() {},
    mounted() {
      this.$nextTick(() => {
         this.indicatorClick();
      })
    }
  }

</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    .wh_slide {
      height: 200px;
      line-height: 200px;
      background-size: 100% 100%;
    }
  }

</style>
