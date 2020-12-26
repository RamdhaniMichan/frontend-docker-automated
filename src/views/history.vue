<template>
    <div id="app">
        <b-container>
            <div class="header">
                <div class="header-text">
                    <p>Food Items</p>
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
                    <b-col>
                        <div class="card-1"></div>
                    </b-col>
                    <b-col>
                        <div class="card-2"></div>
                    </b-col>
                    <b-col>
                        <div class="card-3"></div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="graph"></div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="box"></div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>

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
    width: 1352px;
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
    margin: 2.5em 0em 0em 39em;
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
    width: 1251px;
    height: 1000px;
    left: 109px;
    top: 100px;
    background-color: #E5E5E5;
}

.card-1 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 85px;
    top: 45px;

    background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
}

.card-2 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 60px;
    top: 45px;

    background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
    border-radius: 10px;
}

.card-3 {
    position: absolute;
    width: 300px;
    height: 165px;
    left: 38px;
    top: 45px;

    background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
    border-radius: 10px;
}

.graph {
    position: absolute;
    width: 1106px;
    height: 250px;
    left: 85px;
    top: 257px;

    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.box {
    position: absolute;
    width: 1103px;
    height: 209px;
    left: 86px;
    top: 560px;

    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.form {
    width: 853px;
    height: auto;
    background-color:#ffffff;
    margin: 20px 185px;
    padding: 30px 80px;
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