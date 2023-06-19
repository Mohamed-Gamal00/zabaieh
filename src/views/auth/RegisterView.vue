<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const router = useRouter()
const email = ref('')
const password = ref('')
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('succesfully register')
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      alert(err.message)
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
          <button @click="register">submit</button>
          <button @click="signInWithGoogle">Sign in with google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
