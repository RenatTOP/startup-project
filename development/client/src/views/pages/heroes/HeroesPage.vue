<template lang="">
    <div>
        <h1>{{ lang }}</h1>
    </div>
</template>
<script>
import HeroesService from '@/services/heroes.service'

export default {
    name: 'HeroesPage',
    data() {
        return {
        lang: ''
        }
    },
    mounted() {
    HeroesService.getHeroes().then(
      response => {
        this.lang = response.data
      },
      error => {
        this.lang =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
      }
    )
  }
    
}
</script>
<style lang="">
    
</style>