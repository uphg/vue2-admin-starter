<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <HelloWorldVue msg="hi" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorldVue from '../../components/HelloWorld.vue'

export default {
  name: 'Dashboard',
  components: { HelloWorldVue },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
