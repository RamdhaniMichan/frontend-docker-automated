<template>
  <div>
    <b-container>
      <div class="left-bar" id="left-bar">
        <ul>
          <li>
            <router-link to="/homes"
              ><img class="icon" src="../assets/images/fork.png" alt=""
            /></router-link>
          </li>
          <li>
            <router-link to="/history"
              ><img class="icon" src="../assets/images/clipboard.png" alt=""
            /></router-link>
          </li>
          <li v-if="role === 'admin'">
            <router-link to="/add"
              ><img class="icon" src="../assets/images/add.png" alt=""
            /></router-link>
          </li>
          <li>
            <font-awesome-icon
              :icon="['fas', 'sign-out-alt']"
              class="icon"
              @click="signOut"
            />
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.left-bar {
  position: fixed;
  width: 109px;
  height: 800px;
  left: 0px;
  top: 106px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

li {
  list-style: none;
}

.icon {
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 35px;
  margin: 45px -5px 45px;
}
</style>
