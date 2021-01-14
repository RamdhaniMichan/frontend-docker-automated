<template>
    <div id="app">
        <b-container>
            <div class="header">
                 <div class="header-icon" id="header-icon">
                    <img src="../assets/images/menu.png" alt="menu">
                </div>
                <div class="header-text">
                    <p>Food Items</p>
                </div>
                <div class="header-search-icon">
                    <img src="../assets/images/magnifying-glass.png" alt="search" @click="hello=!hello">
                </div>
            </div>
        </b-container>
        <b-container>
            <div class="left-bar" id="left-bar">
                <ul>
                    <li><router-link to="/homes"><img class="icon" src="../assets/images/fork.png" alt=""></router-link></li>
                    <li><router-link to="/history"><img class="icon" src="../assets/images/clipboard.png" alt=""></router-link></li>
                    <li v-if="role === 'admin'"><router-link to="/add"><img class="icon" src="../assets/images/add.png" alt=""></router-link></li>
                    <li><font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon" @click="signOut" /></li>
                </ul>
            </div>
        </b-container>
        <b-container>
            <div class="content">
                
                <div class="box" v-show="hello">
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col>
                                <input type="range" min="0" max="100000" v-model="max" />
                                <p>{{max}}</p>
                            </b-col>
                            <b-col><input type="text" placeholder="cariii" v-model="cari"></b-col>
                        </b-row>
                    </b-container>
                    
                </div>
                <b-row>
                    <div class="" v-for="datas in filter" :key="datas.id">
                        <div class="sort" v-if="max >= Number(datas.price) ">
                        <b-col cols="12" class="mt-3" style="padding-left: 5.5rem; padding-right: 0;">
                                    <b-card-text>
                                        <list
                                           :name = "datas.name"
                                           :description = "datas.description"
                                           :price = "datas.price"
                                           :image = "datas.image" 
                                           :prod = "datas"
                                           @addData ="addChart"
                                        />
                                    </b-card-text>
                        </b-col>
                        </div>                  
                    </div>
                </b-row>
            </div>
        </b-container>
        <b-container>
            <div class="cart">
                <div class="cart-text">
                    <p>Cart <span class="badge badge-pill badge-info">{{qty}}</span></p>
                </div>
            </div>

            <div class="cart-content">

                 <div class="cart-content-icon" v-if="cart <= 0">
                   <img src="../assets/images/food-and-restaurant.png" alt="">
                   <div class="cart-content-text">
                       <p>You cart is empty</p>
                   </div>
                   <div class="cart-content-text-sub">
                       <p>Please add some item from the menu</p>
                   </div>
               </div>


                <div class="loop" v-else>
                    <b-row>
                        <b-col cols="12">
                                <cart :cart="allChart" :total="calculate" :qty="qty"/>
                        </b-col>
                    </b-row>
                   
                </div>
            </div>
            <div>
                <b-modal id="checkout" size="sm" title="Checkout">
                    <div v-for="data of cart" :key="data.id">
                        <b-row>
                            <b-col>
                                <p>{{data.product.name}}</p>
                            </b-col>
                            <b-col>
                                <p class="modal-text2">Rp. {{data.product.price}}</p>
                            </b-col>
                        </b-row>
                    </div>
                
                    <div>
                        <p class="modal-text3">Total : {{calculate}}</p>
                    </div>
                    <div>
                        <p>Cashier : {{checkout.chasier}}</p>
                    </div>
                    <b-button block variant="success" @click="addCheckout()">Print</b-button>
                </b-modal>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"
import cart from "@/components/Cart.vue"
import list from "@/components/List.vue"
import {mapGetters} from "vuex"


export default {
    name: "home",
    components : {
        cart,
        list,
    },
    data() {
        return {
            items: [],
            cart: [],
            max: 100000,
            cari: '',
            hello: false,
            role: localStorage.getItem('role'),
            checkout: {
                chasier: 'michan',
                amount: 0,
                orders: ''
            },
        }
    },
    methods: {
        addChart(prod) {
           let indexItem 
           let isExist = this.cart.filter((item, index) => {
                if (item.product.id === prod.id) {
                    console.log(index)
                    indexItem = index
                    return true
                } else {
                    return false
                }
           })

            if(isExist.length) {
                this.cart[indexItem].qty++
            } else {
                this.cart.push({product: prod, qty: 1})
            }
        },
        addCheckout() {
            this.checkout.amount = this.calculate
            let arrayValue = []
            this.cart.forEach((value) => {
                arrayValue.push(value.product.name)
            });
            this.checkout.orders = arrayValue.join(", ").toString("")
            axios({
                method: "POST",
                url: process.env.VUE_APP_URL + "history",
                headers: {
                    'authtoken': this.getToken,
                },
                data: this.checkout,
            })
            .then((res) => {
                    console.log(res)
                    alert("Data Success Checkout")
                })
            .catch((err) => {console.log(err)})
        },
        signOut(){
                this.$store.dispatch('logout')
                this.$router.push('/')
        }
    },
    computed: {
        allChart(){
            return this.cart
        },
        calculate(){
            let harga = 0
            for(const key in this.cart) {
                harga = harga + this.cart[key].product.price * this.cart[key].qty
            }
            return harga
        },
        qty(){
            let qty = 0
            for(const key in this.cart) {
                qty = qty + this.cart[key].qty
            }
            return qty
        },
        filter(){
            return this.items.filter((values) => {
                return values.name.toLowerCase().includes(this.cari)
            })
        },
        ...mapGetters(['getToken'])
        
    },
    mounted() {
     axios
            .get(process.env.VUE_APP_URL + "product", {
                headers: {
                    'authtoken': this.getToken
                }
            })
            .then((response) => {
                 if(response.data.description === 'Unauthorized') {
                     console.log(response.data.result)
                    alert("Login First")
                    this.$router.push("/")
                } else {
                    this.items = response.data.result 
                }
            })

            .catch(err => {this.items = err})

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.box {
    background-color: white;
    position: relative;
    width: 40em;
    height: 4em;
    margin: 11px 155px;
}

.header {
    position: fixed;
    width: 1054px;
    height: 100px;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(90, 50, 50, 0.25);
    z-index: 10;

}

.header-icon {
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 31.31px;
    top: 34px;
}

.header-text {
    margin: 2.5em 0em 0em 30em;
}

.header-text p {
    font-size: larger;
    font-weight: bold;
}

.header-search-icon {
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 981.14px;
    top: 35px;
}

.head-search {
    margin: -3rem 41rem;
}

.left-bar {
    position: fixed;
    width: 109px;
    height: 800px;
    left: 0px;
    top: 106px;
    background: #FFFFFF;
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

.content {
    position: absolute;
    width: 943px;
    height: auto;
    left: 109px;
    top: 100px;
    background: rgba(190, 195, 202, 0.3);
}

.menu {
    width: 250px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 3em;
}

.cart {
    position: fixed;
    width: 536px;
    height: 96px;
    left: 999px;
    top: 0px;

    background: #FFFFFF;
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
}

.cart-text {
    margin: 2em 0em 0em 13.5em;
    font-size: larger;
    font-weight: bold;

}

.cart-content {
    position: fixed;
    width: 536px;
    height: 800px;
    left: 1052px;
    top: 100px;

    background: #FFFFFF;
    border: 1px solid #CECECE;
}

.cart-content-icon {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 135px;
    top: 100px;
}

.cart-content-text {
    position: absolute;
    width: 371px;
    height: 60px;
    left: -30px;
    top: 165px;

    font-size: 30px;
    line-height: 39px;

    color: #000000;
}

.cart-content-text-sub {
    position: absolute;
    width: 371px;
    height: 60px;
    left: -52px;
    top: 195px;

    font-size: 16px;
    line-height: 39px;
    color: #CECECE;
}

.add-to-cart {
    display: flex;
    flex-direction: column;
    margin: 15px 0px 25px 15px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.cart-img {
    width: 100px;
    height: 100px;
}

.cart-txt {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    margin: auto 8rem;
}

.cart-price {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    margin: 4.5rem 30rem;
}

.btn-group {
    position: absolute;
    margin: 4rem 8rem;
}

.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
 
.btn-cart {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.cart-bottom {
    position: absolute;
    width: 27rem;
    margin: 17rem 1rem;
}

.txt-1 {
    font-size: auto;
    font-weight: bold;
}

.txt-2 {
    margin: auto 24rem;
}

.modal-text2 {
   padding-left: 2rem;
}

.modal-text3 {
   padding-left: 10rem;
}
</style>