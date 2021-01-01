<template>
    <div class="login">
        <b-card style="max-width: 25rem;">
            <b-form @submit.prevent="handleSubmit" >
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input id="input-1" v-model="email" type="text" required placeholder="Enter name"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Password:" label-for="input-1">
                    <b-form-input id="input-1" v-model="password" type="password" required placeholder="Enter name"></b-form-input>
                </b-form-group>
                <b-button type="submit" block variant="danger">Sign in</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit(){
            const response = await axios.post("http://localhost:8081/auth", {
                email : this.email,
                password : this.password
            });

            localStorage.setItem('token', response.data.result[0].token)
            this.$router.push("/")
            
        }
    }
}
</script>

<style>
.login {
    margin: 16rem 35rem;
}

</style>