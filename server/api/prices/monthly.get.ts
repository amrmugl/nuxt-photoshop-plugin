import { H3Event } from 'h3';
import { notion } from '@/server/db/index';

export default defineEventHandler(async (event: H3Event) => {
	const config = useRuntimeConfig();
	const res = await notion.databases.query({
		database_id: config.notionPriceMonthly,
	});

	const result = res.results[0].properties.price.title[0].plain_text;

	return result;
});
