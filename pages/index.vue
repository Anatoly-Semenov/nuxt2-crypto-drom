<template>
	<div class="cars">
		<cars-filter />
		<cars-list />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Components
import carsFilter from "~/components/cars/cars-filter.vue"
import carsList from "~/components/cars/cars-list.vue"

export default Vue.extend({
	name: "index-page",
	layout: "index",
	components: {
		carsFilter,
		carsList,
	}
})
</script>
