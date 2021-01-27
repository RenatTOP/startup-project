import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import ru from '@/lang/ru.json'


export const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: { en: en,
                ru: ru}
})
