<template>
  <div>
    <button @click="handleClick">刷新页面</button>
    {{ getCount }}
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('beforeCreated')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    this.data++
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },

  computed: {
    getCount() {
      console.log('%c computed', 'color:#427bd5;')
      return this.count
    },
  },
  watch: {
    count: {
      handler() {
        // 为了区分watch 添加颜色
        console.log('%c watch', 'color:#00d859;')
      },
      immediate: true,
    },
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick() {
      this.$emit('add')
    },
  },
}
</script>

<style></style>