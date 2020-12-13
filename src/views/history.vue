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
                <b-row>
                    <b-col cols=3>history</b-col>
                </b-row>
            </div>
        </b-container>
        <b-container>
            <div class="cart">
                <div class="cart-text">
                    <p>Cart <span class="badge badge-pill badge-info">0</span></p>
                </div>
            </div>

            <div class="cart-content">
               <div class="cart-content-icon">
                   <img src="../assets/images/food-and-restaurant.png" alt="">
                   <div class="cart-content-text">
                       <p>You cart is empty</p>
                   </div>
                   <div class="cart-content-text-sub">
                       <p>Please add some item from the menu</p>
                   </div>
               </div>
            </div>
        </b-container>
        <Home/>
    </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: "history",
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
    height: 800px;
    left: 109px;
    top: 100px;
    background: rgba(190, 195, 202, 0.3);
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
</style>