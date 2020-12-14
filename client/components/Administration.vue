<template>
    <div>
      <h1>Administration</h1>
      <div v-if="connected">
        Page d'Administration
      </div>
      <div v-else>
        Veuillez vous connecter pour accéder à la page d'administration.
      </div>
    </div>
</template>
<script>
module.exports = {
  props: {
    connected: { type: Boolean }
  },
  async mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
