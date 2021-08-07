<template>
  <div class="auth-layout">
    <header class="auth-layout__header">
      <button
        @click="connect"
        class="auth-layout__connect-btn"
      >
        Connect to a wallet
      </button>
    </header>
    <main class="auth-layout__main">
      <span class="auth-layout__text">Connected wallet:</span>
      <span class="auth-layout__account">{{ accounts }}</span>
    </main>
  </div>
</template>

<script>
import auth from '@/services/auth'
import contract from '@/services/contract';

export default {
  name: 'AuthLayout',

  data() {
    return {
      accounts: 'Not connected yet',
    }
  },

  async created() {
    await contract.testPingMethod()
  },

  methods: {
    async connect() {
      await auth.getAccounts()
      this.accounts = this.$store.getters['auth/account'][0]
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-layout {
    display: flex;
  flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 1366px;
    width: 100%;

  &__header {
    display: flex;
    width: 100%;
  }

  &__connect-btn{
    margin-left: auto;
    padding: 15px;
    border: 1px solid black;
    border-radius: 6px;
    background: transparent;
    font-size: 20px;
    font-weight: 500;
  }

  &__text {
    font-weight: 500;
    font-size: 20px;
  }

  &__account {
    padding: 15px;
    background-color: rgb(25, 27, 31);
    border: 1px solid rgb(33, 36, 41);
    font-weight: 500;
    border-radius: 8px;
    margin-top: 15px;
    color: #fff;
    width: fit-content;
  }
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
}
</style>
