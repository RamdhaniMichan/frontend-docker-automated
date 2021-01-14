<template>
    <div class="login">
        <b-card style="max-width: 25rem;">
            <b-form @submit.prevent="handleSubmit" >
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input id="input-1" v-model="formLogin.email" type="email" required placeholder="Enter Email"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="formLogin.password" type="password" required placeholder="Enter Password"></b-form-input>
                </b-form-group>
                <b-button type="submit" block variant="danger">Sign in</b-button>
                <p><router-link to="/register">Register</router-link></p>
            </b-form>
        </b-card>
    </div>
</template>

<script>

export default {
    name: "login",
    data() {
        return {
           formLogin: {
               email: '',
               password: '',
           },
           errors: null
        }
    },
    methods: {
        handleSubmit(){
            this.$store.dispatch('Login', this.formLogin)
            .then(() => {
                this.$router.push('/homes')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
}
</script>

<style>
.login {
    margin: 16rem 35rem;
}

</style>