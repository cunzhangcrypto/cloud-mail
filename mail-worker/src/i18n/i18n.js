import i18next from 'i18next';
import zh from './zh.js'
import en from './en.js'
import zhHK from './zh-HK.js'
import app from '../hono/hono';

app.use('*', async (c, next) => {
	const acceptLang = c.req.header('accept-language') || ''
	// Prefer exact zh-HK / zh-TW, then zh, then en
	let lang = 'zh'
	if (acceptLang.includes('zh-HK') || acceptLang.includes('zh-hk')) {
		lang = 'zh-HK'
	} else if (acceptLang.includes('zh-TW') || acceptLang.includes('zh-tw')) {
		lang = 'zh-HK' // use HK variant for TW as fallback
	} else {
		const primary = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase()
		if (primary === 'en') lang = 'en'
		else if (primary === 'zh') lang = 'zh'
	}
	i18next.changeLanguage(lang)
	return await next()
})

const resources = {
	en: {
		translation: en
	},
	zh: {
		translation: zh,
	},
	'zh-HK': {
		translation: zhHK,
	},
};

i18next.init({
	fallbackLng: 'zh',
	resources,
});

export const t = (key, values) => i18next.t(key, values)

export default i18next;
