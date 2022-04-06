<template>
  <div class="home-container">
    <div class="home-text">name: {{ name }}</div>
    <HelloWorldVue msg="hi" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorldVue from '../../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: { HelloWorldVue },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
