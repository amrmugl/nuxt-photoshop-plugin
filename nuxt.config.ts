// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		notionSecret: process.env.NOTION_SECRET,
		notionPriceMonthly: process.env.NOTION_PRICE_MONTHLY,
		notionPriceYearly: process.env.NOTION_PRICE_YEARLY,
		notionEmailMonthly: process.env.NOTION_EMAIL_MONTHLY,
		notionEmailYearly: process.env.NOTION_EMAIL_YEARLY,
	},
});
