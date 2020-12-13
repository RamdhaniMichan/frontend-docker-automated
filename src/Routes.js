import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/home.vue"
import History from "./views/history.vue"
import AddData from "./views/addData.vue"
import Form from "./views/form.vue"

Vue.use(VueRouter)


const Router = new VueRouter ({
    routes : [
        {
            path : "/",
            name : "home",
            component : Home
        },
        {
            path : "/history",
            name : "history",
            component : History
        },
        {
            path : "/add",
            name : "add",
            component : AddData
        },
        {
            path : "/form",
            name : "addData",
            component : Form
        },
        {
            path : "/edit/:id",
            name : "edit",
            component : Form
        },
    ]
})

export default Router