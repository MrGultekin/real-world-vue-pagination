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
      //Call to API
      //Set a message to appear on the next page
      this['GStore'].flashMessage =
        'You have registered for ' + this.event.title

      setTimeout(() => {
        this['GStore'].flashMessage = ''
      }, 3000)
      //Why I cannot reach it like this.event

      //If registered then redirect to event details
      this.$router.push({
        name: 'EventDetails'
        // params: { id: this.event.id } not needed
      })
    }
  }
}
</script>
