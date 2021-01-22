<template>
    <b-row>
        <b-card :img-src="image" :alt="name" style="max-width: 15rem;" class="mb-2">
            <div class="">
                <b-card-text>
                    <h4 class="name">{{ name }}</h4>
                    <p class="detail">{{ description }}</p>
                    <p class="price">Rp.<strong>{{ price }}</strong></p>
                </b-card-text>
            </div>

            <b-button variant="primary" @click="addItems(prod)">Add</b-button>
        </b-card>
    </b-row>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            cart: [],
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        prod: {
            type: Object,
            required: true,
        }
    },
    methods: {
        addItems(prod){
            this.$emit("addData", prod)
        }
    }
}
</script>

<style>

</style>