<template lang="pug">
div
    form(
        @submit.prevent="handleSubmit"
    )
        h1
            | Activate account
        label
            | Token
        input(
            required
            v-model.trim="token"
            placeholder="Token"
        )
        button(
            type="submit"
        )
        td(
            v-if="errors.userErr"
        ) 
            | {{ errors.userErr }}

</template>


<script>
export default {
}
</script>


<style lang="sass">
    
</style>