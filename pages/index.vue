<template>
	<div class="cars">
		<cars-create v-if="!isLoading" />
		<cars-filter />
		<cars-list />
		<cars-articles />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapActions, mapGetters } from "vuex"

// Components
import carsCreate from "~/components/cars/cars-create.vue"
import carsFilter from "~/components/cars/cars-filter.vue"
import carsList from "~/components/cars/cars-list.vue"
import carsArticles from "~/components/cars/cars-articles.vue"

export default Vue.extend({
	name: "index-page",
	layout: "index",
	components: {
		carsCreate,
		carsFilter,
		carsList,
		carsArticles
	},
	data() {
		return {
			isLoading: true as boolean
		}
	},
	async created() {
		this.isLoading = true

		await Promise.all([this.fetchBrands(), this.fetchColors()])

		await this.fetchModels(this.firstBrandId)

		this.isLoading = false
	},
	computed: {
		...mapGetters({
			getBrands: "cars/getBrands"
		}),
		firstBrandId(): number {
			return this.getBrands[0].id || 0
		}
	},
	methods: {
		...mapActions({
			fetchBrands: "cars/fetchBrands",
			fetchModels: "cars/fetchModels",
			fetchColors: "cars/fetchColors"
		})
	}
})
</script>
