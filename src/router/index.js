import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home.vue"
import History from "../views/history.vue"
import AddData from "../views/addData.vue"
import Login from "../views/login.vue"
import Register from "../components/Register.vue"
import store from "../store"

const isAuth = (to, from, next) => {
    if (store.getters["getIsAuth"]) {
      next()
    } else {
      next('/')
    }
  }

  const isOut = (to, from, next) => {
    if (store.getters["getOut"]) {
      next('/')
    } else {
      next()
    }
  }

Vue.use(VueRouter)

    const routes = [
        {
            path : "/homes",
            name : "home",
            component : Home
        },
        {
            path : "/history",
            name : "history",
            component : History,
            beforeEnter: isAuth,
            afterEnter: isOut
        },
        {
            path : "/add",
            name : "add",
            component : AddData
        },
        {
            path : "/",
            name : "login",
            component : Login
        },
        {
            path : "/register",
            name : "register",
            component : Register
        },
    ]

    const router = new VueRouter({
        routes
    })

export default router