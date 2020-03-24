<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from "@/mixins/emitter";
export default {
  inheritAttrs: false,
  componentName: "MInput",
  inject: ["form"],
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.dispatch("MFormItem", "m.formitem.validate");
    }
  }
};
</script>

<style scoped></style>
