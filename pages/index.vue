<script setup lang="ts">
	const response = ref();
	onMounted(async () => {
		const res = await useFetch('/api/prices/monthly');
		response.value = res;
	});
</script>

<template>
	<div>
		<pre>{{ response }}</pre>
	</div>
</template>

<style scoped></style>
