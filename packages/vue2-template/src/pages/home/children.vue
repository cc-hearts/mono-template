<template>
  <div>
    {{ detail.names }}

    <div>
      <button @click="handleClick">click change key</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: {
        names: 1,
        b: 12,
      },
    }
  },

  mounted() {
    const name = 'names'
    this.$watch(`detail.${name}`, (val) => {
      console.log(val)
    })
  },
  methods: {
    handleClick() {
      this.detail = {
        ...this.detail,
      }
      this.detail.names += 1
    },
  },
}
</script>
