<template>
  <div class="about">
    <h1>This is an fapp about page</h1>
    <div @click="goRqr">
      点击我跳到同是微应用的rqr应用的home页面
    </div>
    <hr />
    <input v-model="username" type="text" placeholder="姓名" />
    <input v-model="password" type="password" placeholder="密码" />
    <input type="button" value="提交" @click="submit" />
    <hr />
    <!-- 主应用共享的公共前端自定义组件 -->
    <Alers>
      主应用共享的公共前端自定义组件 Alers
    </Alers>
  </div>
</template>
<script>
import actions from '@/utils/actions.js';
export default {
  mounted() {
    debugger;
  },
  data() {
    return {
      username: '',
      password: '',
      editor: 'dasd',
    };
  },
  methods: {
    goRqr() {
      this.$router.push('/frqr/home');
    },
    async submit() {
      // 子改父
      await this.$store.dispatch('userStore/login', {
        username: this.username,
        password: this.password,
      });
      // this.$router.push('/microFrqr/about');
      actions.onGlobalStateChange((state) => {
        debugger;
      }, true);
    },
  },
};
</script>
