<template>
  <DashboardNavbar></DashboardNavbar>
  <router-view v-if="loginStatus"></router-view>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue';

export default {
  data() {
    return {
      loginStatus: false,
    };
  },
  methods: {
    checkLogin() {
      const loader = this.$loading.show();
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;

        this.$http
          .post(`${process.env.VUE_APP_API}/api/user/check`)
          .then((res) => {
            this.loginStatus = res.data.success;
            loader.hide();
          })
          .catch((err) => {
            alert(err.response.data.message);
            loader.hide();
            this.$router.push('/login');
          });
      } else {
        alert('請先登入。');
        this.$router.push('/login');
      }
    },
  },
  components: {
    DashboardNavbar,
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
