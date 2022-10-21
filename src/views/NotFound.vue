<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} that you are LOOKING for is not here.</h3>
  <router-link :to="{ name: 'EventList' }">Back to HOME page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>

<style scoped></style>
