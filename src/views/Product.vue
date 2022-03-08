<template>
  <h1>單一產品</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img class="img-thumbnail img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-md-6">
        <h3>
          <span class="badge bg-success">{{ product.category }}</span>
          {{ product.title }}
        </h3>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5" v-if="product.price === product.origin_price">
          {{ product.price }} 元
        </div>
        <div v-else>
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h5">現在只要 {{ product.price }} 元</div>
        </div>
        <div>
          <div class="input-group">
            <input
              type="number"
              class="form-control"
              min="1"
              v-model.number="qty"
            />
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter';

export default {
  data() {
    return {
      product: [],
      carts: [],
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show();
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`,
        )
        .then((res) => {
          this.product = res.data.product;
          loader.hide();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: this.qty,
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data },
        )
        .then((res) => {
          alert(res.data.message);
          emitter.emit('get-cart');
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
