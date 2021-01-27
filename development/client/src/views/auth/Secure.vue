<template>
    <div>
        <h1>This page is protected by auth</h1>
        <p>{{ user }}</p>
    </div>
</template>

<script>
// import AuthService from '@/services/AuthService'
// export default {
//   name: 'Secure',
//   data () {
//     return {
//       user: ''
//     }
//   },
//   methods: {
//     async getUser () {
//       const response = await AuthService.secure()
//       this.user = response.data.user
//     }
//   },
//   mounted () {
//     this.getUser()
//   }
// }
</script>
