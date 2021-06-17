<template>
  <div id="app">
    <JDialog title="title" width="20%" top="30px" :visible.sync="visible">
      <template v-slot:title>
        <h1>123</h1>
      </template>
      asdfasdf
      <template v-slot:footer> 123 </template>
    </JDialog>
    <JButton @click="visible = true"> button </JButton>
    <JInput
      placeholder="請輸入"
      type="text"
      name=""
      :disabled="false"
      v-model="username"
      :show-password="true"
      :clearable="false"
    ></JInput>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      username: "ab",
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss">
.JInput {
  width: 180px !important;
}
</style>
