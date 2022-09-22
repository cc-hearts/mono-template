<template>
  <div>
    <!-- <Home :count="count" @add="handleClick" /> -->
    <button @click="handleClick">123</button>
  </div>
</template>

<script>
import Home from './pages/home/home.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  components: {
    Home,
  },
  methods: {
    handleClick() {
      const a = mapState(['name'])
      // 里面的方法会调用this 因此需要绑定vue实例
      console.log(a.name.call(this))
      this.count += 1
    },
  },
}
</script>

<style></style>
