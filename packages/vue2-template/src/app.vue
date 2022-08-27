<template>
  <div>
    {{ count }}
    <button @click="handleClick">click add</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
}
</script>

<style></style>
