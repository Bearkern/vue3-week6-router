<template>
  <h1>產品列表</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-4 g-3">
      <div class="col g-3" v-for="product in products" :key="product.id">
        <Card :product="product"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show();
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`,
        )
        .then((res) => {
          this.products = res.data.products;
          loader.hide();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
