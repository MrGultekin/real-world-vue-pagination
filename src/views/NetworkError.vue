<template>
  <div class="networkError">
    <h1>Uh-NO!</h1>
    <h3>
      it looks like you are having NETWORK issues, please be calm
      <a href="#" @click="$router.go(-1)">Click Here!</a> to try AGAIN.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NetworkError'
}
</script>

<style scoped></style>
