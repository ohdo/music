<template>
  <Checkbox v-model="checked"/>
</template>

<script>
import { Checkbox } from 'vant';
export default {
  components: {
    Checkbox
  },
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang="less">
</style>