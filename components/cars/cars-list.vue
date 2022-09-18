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
			<cars-item v-for="(car, index) in cars" :key="index" :data="car" />
		</div>
		<a-pagination
			class="cars__list-pagination"
			v-model="page"
			total="50"
			show-less-items
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Components
const carsItem = () =>
	import(/* webpackChunkName: "cars-item" */ "~/components/cars/cars-item.vue")

export default Vue.extend({
	name: "cars-list",
	components: {
		carsItem
	},
	data() {
		return {
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
			],
			cars: [
				{
					id: 1,
					brand: "BMW",
					model: "5-Series",
					year: 2019,
					hp: 190,
					price: {
						rub: 3450000,
						eth: 1,
						btc: 1,
						usdt: 60000
					},
					color: "gray",
					region: {
						id: 1,
						name: "Москва"
					},
					created_at: "18.08.2022",
					edited_at: "18.08.2022",
					img_preview:
						"https://s.auto.drom.ru/photo/P9f23IBeNf6zBcbv0pTdh2sApB3ei-Ja0Dj6yUeDbALrZ6SUOY1uRoBAS-JvdGmegtTvNnOTHbOQgaBDSS5CxOnJkyQ.jpg"
				},
				{
					id: 2,
					brand: "BMW",
					model: "3-Series",
					year: 2019,
					hp: 190,
					price: {
						rub: 3450000,
						eth: 1,
						btc: 1,
						usdt: 60000
					},
					color: "gray",
					region: {
						id: 1,
						name: "Москва"
					},
					created_at: "18.08.2022",
					edited_at: "18.08.2022",
					img_preview:
						"https://s.auto.drom.ru/photo/P9f23IBeNf6zBcbv0pTdh2sApB3ei-Ja0Dj6yUeDbALrZ6SUOY1uRoBAS-JvdGmegtTvNnOTHbOQgaBDSS5CxOnJkyQ.jpg"
				}
			]
		}
	},
	methods: {
		setSort(): void {
			return
		}
	}
})
</script>
