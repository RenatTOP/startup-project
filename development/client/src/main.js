import { createApp } from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import { i18n } from '@/plugins/i18n'
import axios from 'axios'


let localLang = localStorage.getItem('lang')
let lang

if (Boolean(localLang) == true) {
    lang = localLang
} else if (Boolean(localLang) == false &&  (navigator.language == 'uk-UA' || 'ru-UA') ||
                                    (navigator.language == 'ru-RU' || 'uk')) {
    localStorage.setItem('lang', 'ru-RU')
    lang = 'ru-RU'
} else if (Boolean(localLang) == false && !((navigator.language == 'uk-UA' || 'ru-UA') ||
                                            (navigator.language == 'ru-RU' || 'uk'))) {
    localStorage.setItem('lang', 'en-US')
    lang = 'en-US'
}

axios.defaults.headers['Accept-Language'] = lang
document.documentElement.lang = lang

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app')
