<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> <el-input v-model="content" /></p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    return {
      content: ref('')
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
