import { H3Event } from 'h3';
import { notion } from '@/server/db/index';

export default defineEventHandler(async (event: H3Event) => {
	const config = useRuntimeConfig();
	const res = await notion.databases.query({
		database_id: config.notionEmailMonthly,
	});

	const emailsList = res.results.map(obj => {
		return obj.properties.email.email;
	});

	return emailsList;
});
