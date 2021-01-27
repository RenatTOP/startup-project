<template lang="">
    <div>
        <select v-model="lang" @change="handleChange($event)">
            <option value="en-US">English</option>
            <option value="ru-RU">Russian</option>
            <!-- <option disabled selected>{{ lang }}</option> -->
        </select>
    </div>
</template>
<script>
export default {
    name: 'LanguageSwitcher',
    data() {
        return {
            lang: localStorage.getItem('lang')
    }
    },
    methods: {
        handleChange(event) {
            localStorage.setItem('lang', event.target.value)
            window.location.reload()
        }
    }
}
</script>
<style lang="">
    
</style>