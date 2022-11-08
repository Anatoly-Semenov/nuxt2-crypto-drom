<template>
	<div class="cars">
		<cars-filter />
		<cars-list />
		<cars-articles />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Components
import carsFilter from "~/components/cars/cars-filter.vue"
import carsList from "~/components/cars/cars-list.vue"
import carsArticles from "~/components/cars/cars-articles.vue"

export default Vue.extend({
	name: "index-page",
	layout: "index",
	components: {
		carsFilter,
		carsList,
		carsArticles
	}
})
</script>
