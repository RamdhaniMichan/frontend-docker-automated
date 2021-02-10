<template>
  <div class="style-login">
    <div class="login">
      <h1 style="margin: auto 3rem;padding: 1rem;">LOGIN</h1>
      <b-card>
        <b-form @submit.prevent="handleSubmit">
          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="formLogin.email"
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
              v-model="formLogin.password"
              type="password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" block variant="danger">Sign in</b-button>
          <p class="float-right">
            <router-link to="/register">Register</router-link>
          </p>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
      errors: null,
    };
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch("Login", this.formLogin)
        .then(() => {
          this.$router.push("/homes");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.style-login {
  background-image: url("../assets/images/shop.jpg");
  width: 100%;
  height: 765px;
  background-size: cover;
  background-repeat: repeat;
}

.login {
  position: relative;
  margin: 0rem 35rem;
  width: 25rem;
}

@media screen and (max-width: 1000px) {
  .login {
    position: relative;
    margin: 0rem 25rem;
    width: 15rem;
  }
}
</style>
