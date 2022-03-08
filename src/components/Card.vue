<template>
  <div class="card" style="width: 18rem">
    <img :src="product.imageUrl" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.description }}
      </p>
      <router-link class="btn btn-primary" :to="`/product/${product.id}`">
        查看商品
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>
