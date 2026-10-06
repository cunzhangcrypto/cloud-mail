import { createI18n } from 'vue-i18n';
import en from './en.js'
import zh from './zh.js'
import zhHK from './zh-HK.js'
const i18n = createI18n({
    legacy: false,
    messages: {
        zh,
        'zh-HK': zhHK,
        en
    },
});

export default i18n;
