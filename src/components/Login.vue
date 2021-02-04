<template>
  <div class="style-login">
    <div class="login">
      <b-card style="max-width: 25rem;">
        <b-form @submit.prevent="handleSubmit">
          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              required
              placeholder="Enter Email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="password"
              type="password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" block variant="danger">Sign in</b-button>
          <p><router-link to="/register">Register</router-link></p>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("http://localhost:8081/auth", {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem("token", response.data.result[0].token);
      this.$router.push("/home");
    },
  },
  mounted() {
    if (localStorage.email && localStorage.password) {
      this.email = localStorage.email;
      this.password = localStorage.password;
    }

    setTimeout(() => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }, 5000);
  },
  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    },
    password(newPassword) {
      localStorage.password = newPassword;
    },
  },
};
</script>

<style>
.login {
  margin: 16rem 35rem;
  width: 0;
  height: 0;
}
</style>
