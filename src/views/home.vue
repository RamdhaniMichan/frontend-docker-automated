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
                    <img src="../assets/images/magnifying-glass.png" alt="search">
                </div>
            </div>
        </b-container>
        <b-container>
            <div class="left-bar" id="left-bar">
                <ul>
                    <li><router-link to="/"><img class="icon" src="../assets/images/fork.png" alt=""></router-link></li>
                    <li><router-link to="/history"><img class="icon" src="../assets/images/clipboard.png" alt=""></router-link></li>
                    <li><router-link to="/add"><img class="icon" src="../assets/images/add.png" alt=""></router-link></li>
                </ul>
            </div>
        </b-container>
        <b-container>
            <div class="content">
                
                <div class="b">
                    <input type="range" min="0" max="100000" v-model="max" />
                    <p>{{max}}</p>
                </div>
                <b-row>
                    <div class="" v-for="datas in items" :key="datas.id">
                        <div class="sort" v-if="max >= Number(datas.price) ">
                        <b-col cols="12" class="mt-5" style="padding-left: 3rem; padding-right: 0;">
                            <b-card :img-src="datas.image" :alt="datas.name" style = "max-width: 15rem;" class = "mb-2" >
                                <div class="">
                                    <b-card-text>
                                        <h4 class="name">{{ datas.name }}</h4>
                                        <p class="detail">{{ datas.description }}</p>
                                        <p class="price">Rp.<strong>{{ datas.price }}</strong></p>
                                    </b-card-text>
                                </div>

                                <b-button variant="primary" @click="addChart(datas)">Add</b-button>
                            </b-card>
                        </b-col>
                        </div>                  
                    </div>
                </b-row>
            </div>
        </b-container>
        <b-container>
            <div class="cart">
                <div class="cart-text">
                    <p>Cart <span class="badge badge-pill badge-info">{{cart.length}}</span></p>
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
                            <div class="add-to-cart" v-for="datas in cart" :key="datas.id">
                            <div class="cart-txt">{{datas.name}}</div>
                            <div class="cart-price">{{datas.price}}</div>
                            <div class="btn-group">
                                <div class="quantity">
                                    <button class="btn-cart" type="button" name="button">
                                        +
                                    </button>
                                    <input type="text" name="name" value="0">
                                    <button class="btn-cart" type="button" name="button">
                                        -
                                    </button>
                                </div>
                            </div>
                            <div><img class="cart-img" :src="datas.image" alt="" srcset=""></div>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="cart-bottom">
                        <strong><p class="txt-1">Total : Rp . {{calculate}}</p></strong>
                        <b-button>Checkout</b-button>
                        <b-button>Cancel</b-button>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"


export default {
    name: "home",
    data() {
        return {
            items: [],
            cart: [],
            max: 100000
        }
    },
    methods: {
        getImage(pic) {
            let images = require.context('../assets/images', false, /\.png$/)
            return images('./' + pic )
        },
        addChart(data){
            this.cart.push(data)
        }
    },
    computed: {
        calculate(){
            let harga = 0
            for(const datas of this.cart) {
                harga = Number(datas.price) + harga
            }
            return harga
        }
    },
    mounted() {
        axios
            .get('http://localhost:8081/product')
            .then(response => 
                {
                   this.items = response.data.result
                }
            )
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

.header {
    position: fixed;
    width: 1003px;
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
    margin: 2.5em 0em 0em 28em;
}

.header-text p {
    font-size: larger;
    font-weight: bold;
}

.header-search-icon {
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 916.14px;
    top: 34px;
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
    width: 893px;
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
    width: 491px;
    height: 96px;
    left: 999px;
    top: 0px;

    background: #FFFFFF;
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
}

.cart-text {
    margin: 2em 0em 0em 7.5em;
    font-size: larger;
    font-weight: bold;

}

.cart-content {
    position: fixed;
    width: 490px;
    height: 800px;
    left: 1002px;
    top: 100px;

    background: #FFFFFF;
    border: 1px solid #CECECE;
}

.cart-content-icon {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 75px;
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
    margin: auto 7rem;
}

.cart-price {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    margin: 4.5rem 17rem;
}

.btn-group {
    position: absolute;
    margin: 4rem 7rem;
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
    position: fixed;
}

.txt-1 {
    position: fixed;
    font-size: auto;
    font-weight: bold;
    margin: 18rem 1rem;
}
</style>