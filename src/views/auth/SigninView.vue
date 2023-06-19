<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const router = useRouter()
const errMsg = ref('')
const email = ref('')
const password = ref('')
const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('succesfully sign in')
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      switch (err.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'no account with this email is found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'incorrect password'
          break
        default:
          errMsg.value = 'email or passwor are not correct'
          break
      }
    })
}
const signInWithGoogle = () => {}
</script>
<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <input type="text" placeholder="email" v-model="email" />
          <input type="password" placeholder="password" v-model="password" />
          <p v-if="errMsg">{{ errMsg }}</p>
          <button @click="register">submit</button>
          <button @click="signInWithGoogle">Sign in with google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
