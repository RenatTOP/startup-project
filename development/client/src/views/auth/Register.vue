<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              name="username"
            />
            <div
              v-if="submitted"
              class="alert-danger"
            ></div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              name="email"
            />
            <div
              v-if="submitted"
              class="alert-danger"
            ></div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              name="password"
            />
            <div
              v-if="submitted"
              class="alert-danger"
            ></div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
// import AuthService from '@/services/AuthService'
// export default {
//     name: 'Register',
//     data () {
//         return {
//             firstname: '',
//             lastname: '',
//             surname: '',
//             email: '',
//             phone: '',
//             password: '',
//             passwordConfirm: '',
//             errors: {
//                 userErr: '',
//                 servErr: ''
//             }
//         }
//     },
//     methods: {
//         async handleSubmit (e) {
//             e.preventDefault()
//             if (this.password === this.passwordConfirm && this.password.length > 0) {
//                 await AuthService.register({
//                     firstname: this.firstname,
//                     lastname: this.lastname,
//                     surname: this.surname,
//                     email: this.email,
//                     phone: this.phone,
//                     password: this.password,
//                     passwordConfirm: this.passwordConfirm
//                 })
//                 .then(response => {
//                     localStorage.setItem('user', JSON.stringify(response.data.user))
//                     localStorage.setItem('jwt', response.data.token)
//                     if (localStorage.getItem('jwt') != null) {
//                         this.$emit('loggedIn')
//                         if(this.$route.params.nextUrl != null) {
//                             this.$router.push(this.$route.params.nextUrl)
//                         } else {
//                             if (response.data.userErr) {
//                                 this.errors.userErr = response.data.userErr
//                             } else if (response.data.servErr) {
//                                 this.errors.servErr = response.data.servErr
//                             } else {
//                                 this.$router.push('/')
//                             }
//                         }
//                     }
//                 })
//                 .catch(err => {
//                     console.error(err)
//                 })
//             } else {
//                 this.password = ''
//                 this.passwordConfirm = ''
//                 return this.errors.userErr = 'Passwords do not match'
//             }
//         }
    // goBack () {
    //   this.$router.push({ name: 'Posts' })
    // }
//     }
// }
import User from '@/models/user'

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/secure')
    }
  },
  methods: {
    handleRegister() {
      this.message = ''
      this.submitted = true
        if (this.user.username && this.user.email && this.user.password) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message
              this.successful = true
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
              this.successful = false
            }
          )
        }

    }
  }
}
</script>
