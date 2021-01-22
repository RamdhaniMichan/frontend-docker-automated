<template>
    <div class="container">
        <div class="items" v-for="items in datas" :key="items.id">
            <div class="pic">
                <img :src="items.image" :alt="items.name" />
            </div>
            <div class="desc">
                <h2 class="name">{{ items.name }}</h2>
                <p class="detail">{{ items.description }}</p>
                <h3 class="price">{{ items.price }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
const data = [
    {
        id: "532",
        name: "Slicker Jacket",
        description:
            "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
        price: "125",
        image_title: "slicker-jacket_lynda_29941",
        image: "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg",
    },
    {
        id: "530",
        name: "Bamboo Thermal Ski Coat",
        description:
            "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
        price: "99",
        image_title: "ski-coat_lynda_29940",
        image: "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg",
    },
    {
        id: "516",
        name: "Unisex Thermal Vest",
        description:
            "Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
        price: "95",
        image_title: "unisex-thermal-vest_lynda_29944",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg",
    },
    {
        id: "514",
        name: "Grunge Skater Jeans",
        description:
            "Our boy-cut jeans are for men and women who appreciate that skate park fashions aren't just for skaters. Made from the softest and most flexible organic cotton denim.",
        price: "68",
        image_title: "unisex-grunge-jeans_lynda_29937",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-grunge-jeans_LYNDA_29937.jpg",
    },
    {
        id: "520",
        name: "V-Neck Sweater",
        description:
            "This medium-weight sweater, made from organic knitted cotton and bamboo, is the perfect solution to a chilly night at the campground or a misty walk on the beach.",
        price: "65",
        image_title: "v-neck-sweater-for-men_lynda_29947",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/v-neck-sweater-for-men_LYNDA_29947.jpg",
    },
    {
        id: "518",
        name: "V-Neck Pullover",
        description:
            "This organic hemp jersey pullover is perfect in a pinch. Wear for casual days at the office, a game of hoops after work, or running your weekend errands.",
        price: "65",
        image_title: "v-neck-long-sleeved-pullover_lynda_29946",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/v-neck-long-sleeved-pullover_LYNDA_29946.jpg",
    },
]
export default {
    name: "sample1",
    data() {
        return {
            datas: data,
        }
    },
}
</script>

<style scoped>
img {
    max-width: 100%;
}
.pic {
    width: 400px;
}
.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}
.detail {
    line-height: 20px;
    font-size: 14pt;
    margin-bottom: 20px;
}
.name {
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
}
.price {
    text-align: right;
    margin-right: 20px;
    color: rgb(124, 123, 123);
}
.desc {
    width: 40%;
}
.items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>