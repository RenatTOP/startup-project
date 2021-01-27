<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model.trim="user.email"
            type="email"
            class="form-control"
            name="email"
            required
          />
          <div
            v-if="errors.emailErr"
            class="alert alert-danger"
            role="alert"
          >Email is required!</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model.trim="user.password"
            type="password"
            class="form-control"
            name="password"
            required
          />
          <div
            v-if="errors.passErr"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import AuthService from '@/services/AuthService'

// export default {
//     name: 'Login',
//     data () {
//         return {
//             email : '',
//             password : '',
//             errors: {
//                 userErr: ''
//             }
//         }
//     },
//     methods: {
//         async handleSubmit (e) {
//             e.preventDefault()
//             if (this.password.length > 0) {
//                     await AuthService.login({
//                         email: this.email,
//                         password: this.password
//                     })
//                 .then(response => {
//                     localStorage.setItem('user',JSON.stringify(response.data.user))
//                     localStorage.setItem('jwt',response.data.token)
//                     if (localStorage.getItem('jwt') != null) {
//                         this.$emit('loggedIn')
//                         if(this.$route.params.nextUrl != null) {
//                             this.$router.push(this.$route.params.nextUrl)
//                         } else {
//                             if (response.data.userErr) {
//                                 this.errors.userErr = response.data.userErr
//                             } else {
//                                 this.$router.push('/')
//                             }
//                         }
//                     }
//                 })
//                 .catch(err => {
//                 console.error(err)
//                 })
//             }
//         }
//     },
// }
import User from '@/models/user'

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      message: '',
      errors: {
          passErr: '',
          emailErr: ''
      }
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleLogin() {
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/secure')
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            }
          )
        } else {
            this.errors.emailErr = "Email err"
            this.errors.passErr = "passErr"
        }
    }
  }
}
</script>