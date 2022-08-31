<template>
  <div>
    <Home :count="count" @add="handleClick" />
  </div>
</template>

<script>
import Home from './pages/home/home.vue'
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
      this.count += 1
    },
  },
}
</script>

<style></style>
