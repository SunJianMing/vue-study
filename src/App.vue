<template>
  <div id="app">
    <MForm :mode="mode" :rules="rules" ref="loginForm">
      <MFormItem label="用户名" prop="username">
        <MInput v-model="mode.username"></MInput>
      </MFormItem>
      <MFormItem label="密码" prop="password">
        <MInput type="password" v-model="mode.password"></MInput>
      </MFormItem>
      <MFormItem>
        <button @click="onLogin">登陆</button>
      </MFormItem>
    </MForm>
  </div>
</template>
<script>
import MForm from "./components/form/MForm";
import MFormItem from "./components/form/MFormItem";
import MInput from "./components/form/MInput.vue";
export default {
  components: {
    MForm,
    MFormItem,
    MInput
  },
  data() {
    return {
      mode: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          console.log("succwss");
        } else {
          this.$Notice({ title: "标题", message: "failer" }).show();
        }
      });
    }
  }
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
