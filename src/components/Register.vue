<template>
  <div class="style-login">
    <div class="login">
      <h1 style="margin: auto 6rem;padding: 1rem;">REGISTER</h1>
      <b-card style="max-width: 25rem;">
        <b-form @submit.prevent="handleSubmit">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
          >
            <b-form-input
              type="text"
              required
              placeholder="Enter Name"
            ></b-form-input>
          </b-form-group>
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
          <b-button type="submit" block variant="danger">Register</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      role: "user",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
        role: this.role,
      };

      axios
        .post(process.env.VUE_APP_URL + "users", data)
        .then((res) => {
          console.log(res);
          alert("Register Success");
        })
        .catch((err) => {
          console.log(err);
          alert("Regiter Failure");
        });

      this.$router.push("/");
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  box-sizing: border-box;
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
</style>
