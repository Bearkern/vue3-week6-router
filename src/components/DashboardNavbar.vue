<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin/products"
        >後台管理</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">回前台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              產品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/order">
              訂單管理
            </router-link>
          </li>
        </ul>
        <button class="btn btn-primary" @click="logout">登出</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$http
        .post(`${process.env.VUE_APP_API}/logout`)
        .then((res) => {
          alert(res.data.message);
          this.$router.push('/');
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
};
</script>
