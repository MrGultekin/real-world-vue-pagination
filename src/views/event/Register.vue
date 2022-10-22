<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      this.$router.push({
        //Call to API
        //Set a message to appear on the next page

        //If registered then redirect to event details

        name: 'EventDetails'
        // params: { id: this.event.id } not needed
      })
    }
  }
}
</script>
