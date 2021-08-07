<template>
  <div id="app">
    <AuthLayout/>
  </div>
</template>

<script>
  import AuthLayout from '@/components/index'

  export default {
    name: 'App',

    components: {
      AuthLayout
    },
  }
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  font-size: 16px;
  color: #121212;
}
</style>
