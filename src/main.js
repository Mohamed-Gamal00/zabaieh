// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
// import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSnip from 'vue-snip'
library.add(fas, far, fab)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfIPkz3Qfr9JAZlVIO31CabZiGFMlLX0",
  authDomain: "zabaieh-7932f.firebaseapp.com",
  projectId: "zabaieh-7932f",
  storageBucket: "zabaieh-7932f.appspot.com",
  messagingSenderId: "199155596868",
  appId: "1:199155596868:web:57d4b5a5fcab93985b4611"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const app = createApp(App)
app.use(createPinia())
app.use(VueSweetalert2)
app.use(VueSnip)
app.use(router)
app.component('FontAwesome', FontAwesomeIcon)
app.mount('#app')
