<template>
	<div class="cars__filter">
		<div class="cars__filter-row" v-if="brands && models">
			<a-select
				:defaultValue="defaultValue('brands')"
				style="width: 120px"
				@change="setFilters('brand_id', $event)"
			>
				<a-select-option
					v-for="brand in brands"
					:key="brand.id"
					:value="brand.id"
				>
					{{ brand.name }}
				</a-select-option>
			</a-select>
			<a-select
				:defaultValue="defaultValue('models')"
				style="width: 120px"
				@change="setFilters('model_id', $event)"
				:disabled="isLoadingModels"
				:key="defaultValue('models')"
			>
				<a-select-option
					v-for="model in models"
					:key="model.id"
					:value="model.id"
				>
					{{ model.name }}
				</a-select-option>
			</a-select>
		</div>
		<div class="cars__filter-row" v-if="colors">
			<a-select
				:defaultValue="defaultValue('colors')"
				style="width: 120px"
				@change="setFilters('color_id', $event)"
			>
				<a-select-option
					v-for="color in colors"
					:key="color.id"
					:value="color.id"
				>
					{{ color.name }}
				</a-select-option>
			</a-select>
		</div>
		<div class="cars__filter-row">
			<a-input placeholder="Year" type="number" v-model="filters.year" />
			<a-input placeholder="Hp" type="number" v-model="filters.hp" />
			<a-input
				placeholder="Price ₽"
				type="number"
				v-model="filters.price_rub"
			/>
		</div>
		<div class="cars__filter-action">
			<ui-button @click="setFiltersData" :loading="isLoading">
				Показать
			</ui-button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapActions, mapGetters } from "vuex"

// Types
import type { CarsService } from "@drom/types"

export default Vue.extend({
	name: "cars-filter",
	data() {
		return {
			isLoading: false as boolean,
			isLoadingModels: true as boolean,
			filters: {
				brand_id: null,
				model_id: null,
				color_id: null,
				year: null,
				hp: null,
				price_rub: null
			}
		}
	},
	computed: {
		...mapGetters({
			brands: "cars/getBrands",
			models: "cars/getModels",
			colors: "cars/getColors"
		})
	},
	methods: {
		...mapActions({
			createCarAction: "cars/createCar",
			fetchModels: "cars/fetchModels"
		}),
		defaultValue(name: "brands" | "models" | "colors"): string {
			return this?.[name]?.[0]?.name || ""
		},
		async setFilters(
			name: keyof CarsService.CarCreate,
			value: any
		): Promise<void> {
			if (name === "brand_id") {
				this.isLoadingModels = true

				await this.fetchModels(value)

				this.isLoadingModels = false
			}

			// @ts-ignore
			this.filters[name] = value
		},
		async setFiltersData(): Promise<void> {
			this.isLoading = true

			await window.setTimeout(() => {
				this.isLoading = false
			}, 1000)
		}
	}
})
</script>
