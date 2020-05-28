<template>
  <v-container>
    <v-form
      style="height:30%; width:30%;position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    >
      <v-text-field v-model="loginInfo.email" label="Email" />
      <v-text-field v-model="loginInfo.password" label="Password" />

      <v-btn @click="ToDashboard()">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {},
    ToDashboard() {
      this.$router.push("Dashboard");
    },
  },
};
</script>
