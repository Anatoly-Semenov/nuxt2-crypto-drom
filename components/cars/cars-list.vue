<template>
	<div class="cars__list">
		<div class="cars__list-sort">
			<a-select
				:defaultValue="sortList[0].text"
				style="width: 120px"
				@change="setSort"
			>
				<a-select-option v-for="{ id, text } in sortList" :key="id" :value="id">
					{{ text }}
				</a-select-option>
			</a-select>
		</div>
		<div class="cars__list-items">
			<cars-item
				v-for="(car, index) in cars"
				:key="index"
				:data="car"
				:isLoading="isLoading"
			/>
		</div>
		<a-pagination
			class="cars__list-pagination"
			v-model="page"
			:total="50"
			show-less-items
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapActions, mapGetters } from "vuex"

// Components
const carsItem = () =>
	import(/* webpackChunkName: "cars-item" */ "~/components/cars/cars-item.vue")

// Mocks
import { carsList as loadingCars } from "~/static/mocks"

// Types
import type { CarsService } from "@drom/types"

export default Vue.extend({
	name: "cars-list",
	components: {
		carsItem
	},
	data() {
		return {
			isLoading: false as boolean,
			page: 1 as number,
			sortList: [
				{
					id: 1,
					text: "По умолчанию"
				},
				{
					id: 2,
					text: "Сначала дешевые"
				},
				{
					id: 3,
					text: "Сначала дорогие"
				}
			]
		}
	},
	async fetch(): Promise<void> {
		this.isLoading = true
		await this.fetchCars()
		this.isLoading = false
	},
	computed: {
		...mapGetters({
			getCars: "cars/getCars"
		}),
		cars(): CarsService.Car[] {
			return this.isLoading ? loadingCars : this.getCars
		}
	},
	methods: {
		...mapActions({
			fetchCars: "cars/fetchCars"
		}),
		setSort(): void {
			return
		}
	}
})
</script>
