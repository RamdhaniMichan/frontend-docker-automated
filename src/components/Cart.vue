<template>
  <div>
    <b-row>
      <b-col cols="12">
        <div class="add-to-cart" v-for="(item, index) in cart" :key="item.id">
          <div class="cart-txt">{{ item.product.name }}</div>
          <div class="cart-price">{{ item.product.price }}</div>
          <div class="btn-group">
            <div class="quantity">
              <button
                class="btn-cart"
                type="button"
                name="button"
                @click="addChart(item.product)"
              >
                +
              </button>
              <input type="text" name="name" :value="item.qty" />
              <button
                class="btn-cart"
                type="button"
                name="button"
                @click="delChart(index)"
              >
                -
              </button>
            </div>
          </div>
          <div>
            <img class="cart-img" :src="item.product.image" alt="" srcset="" />
          </div>
        </div>
        <div class="cart-bottom">
          <strong
            ><p class="txt-1">
              Total : Rp . {{ total }}<span class="txt-2"></span></p
          ></strong>
          <b-button variant="primary" v-b-modal="'checkout'" block
            >Checkout</b-button
          >
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
  data() {
    return {
      jumlah: 1,
      // allCart: this.cart
    };
  },
  methods: {
    addChart(prod) {
      let indexItem;
      let isExist = this.cart.filter((item, index) => {
        if (item.product.id === prod.id) {
          console.log(index);
          indexItem = index;
          return true;
        } else {
          return false;
        }
      });

      if (isExist.length) {
        this.cart[indexItem].qty++;
      } else {
        this.cart.push({ product: prod, qty: 1 });
      }
    },
    delChart(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
    cancel() {
      this.cart = [];
      this.total = 0;
      this.qty = 0;
    },
  },
};
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
  margin: 4.5rem 30rem;
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
  color: #43484d;
  font-weight: 300;
}

.btn-cart {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.cart-bottom {
  position: absolute;
  width: 33rem;
  margin: 17rem 1rem;
}

.txt-1 {
  font-size: auto;
  font-weight: bold;
  margin: -1rem 0 0 24rem;
}
</style>
