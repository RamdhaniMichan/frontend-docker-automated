<template>
    <div>
        <b-row>
            <b-col cols="12">
                     <div class="add-to-cart" v-for="(item) in cart" :key="item.id">
                        <div class="cart-txt">{{item.product.name}}</div>
                        <div class="cart-price">{{item.product.price}}</div>
                        <div class="btn-group">
                            <div class="quantity">
                                <button class="btn-cart"  type="button" name="button">
                                    +
                                </button>
                                <input type="text" name="name" :value="qty">
                                <button class="btn-cart"  type="button" name="button">
                                    -
                                </button>
                            </div>
                        </div>
                        <div><img class="cart-img" :src="item.product.image" alt="" srcset=""></div>
                    </div>
                     <div class="cart-bottom">
                        <strong><p class="txt-1">Total : Rp . {{total}}<span class="txt-2"></span></p></strong>
                        <b-button variant="primary" v-b-modal="'checkout'" block>Checkout</b-button>
                        <b-button @click="cancel" variant="danger" block>Cancel</b-button>
                    </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    name: "cart",
    props: ["cart", "total", "qty"],
    data(){
        return {
            jumlah : 1,
            // allCart: this.cart
        }
    },
        methods: {
            cancel() {
                this.cart = []
                this.total = 0
                this.qty = ''
            },   
        },
    }
</script>

<style scoped>
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
    margin: 4.5rem 24rem;
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
    position: absolute;
    width: 27rem;
    margin: 17rem 1rem;
}

.txt-1 {
    font-size: auto;
    font-weight: bold;
}
</style>