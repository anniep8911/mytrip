import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import router from './router'

/* add icons to the library */
library.add(faTwitter, faUserSecret, )



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
