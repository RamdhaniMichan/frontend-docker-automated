<template>
    <div id="app">
        <b-container>
            <div class="header">
                <div class="header-text">
                    <p>Add Items</p>
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
                <table class="table">
                <b-button variant="success"><router-link to="/form">Add</router-link></b-button>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Opsi</th>
                    </tr>
                    <tr v-for="datas in items" :key="datas.id">
                        <td>{{datas.name}}</td>
                        <td>{{datas.description}}</td>
                        <td>{{datas.price}}</td>
                        <td>{{datas.image}}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: {id : datas.id}}"><b-button variant="primary" size="sm">Update</b-button></router-link> |
                            <b-button variant="danger" size="sm" @click="deleteProd(datas.id)">Delete</b-button>
                        </td>
                    </tr>
                </table>
            
            </div>
        </b-container>
    </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

export default {
    name: "add",
    data() {
        return {
            items: []
        }
    },
    methods: {
        deleteProd(id) {
            axios({
                method: "delete",
                url: `http://localhost:8081/product/${id}`,
                headers: {
                    "Content-type" : "application/json"
                }
            })
            .then(res => {this.items.splice(this.items.indexOf(id), 1), console.log(res)})
        }
    },
    mounted() {
        axios
            .get(process.env.VUE_APP_URL + "product")
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
    height: 800px;
    left: 109px;
    top: 100px;
    background: rgba(190, 195, 202, 0.3);
}

.table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin: 3rem 4rem;
  width: 90%;
  font-size: 0px;
  font-size: 15px;
}

.table td, .table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table tr:hover {background-color: #ddd;}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
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