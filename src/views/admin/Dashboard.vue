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
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        const loader = this.$loading.show();
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
