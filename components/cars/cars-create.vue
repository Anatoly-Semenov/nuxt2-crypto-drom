<template>
	<div class="cars__create" :class="{ _loading: isLoading }">
		<ui-button @click="isModal = true">Create car</ui-button>
		<ui-modal
			title="Create car ad"
			:value="isModal"
			destroyOnClose
			centered
			@cancel="isModal = false"
		>
			<img class="cars__create-img" :src="data.img_preview" alt="Car image" />
			<div class="cars__create-row">
				<a-input v-model="data.img_preview" placeholder="Image" />
			</div>
			<div class="cars__create-row" v-if="brands && models">
				<a-select
					:defaultValue="defaultValue('brands')"
					style="width: 120px"
					@change="setData('brand_id', $event)"
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
					@change="setData('model_id', $event)"
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
			<div class="cars__create-row" v-if="colors">
				<a-select
					:defaultValue="defaultValue('colors')"
					style="width: 120px"
					@change="setData('color_id', $event)"
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
			<div class="cars__create-row">
				<a-input placeholder="Year" type="number" v-model="data.year" />
				<a-input placeholder="Hp" type="number" v-model="data.hp" />
				<a-input placeholder="Price ₽" type="number" v-model="data.price_rub" />
			</div>
			<div class="cars__create-row">
				<ui-button
					@click="createCar"
					:loading="isLoading"
					:disabled="isDisabledButton"
				>
					Create
				</ui-button>
			</div>
		</ui-modal>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapActions, mapGetters } from "vuex"

// Types
import type { CarsService } from "@drom/types"
type Data = CarsService.CarCreate & {
	year: any
	hp: any
	price_rub: any
}

export default Vue.extend({
	name: "cars-create",
	data() {
		return {
			isModal: false as boolean,
			isLoading: false as boolean,
			isLoadingModels: false as boolean,
			data: {
				img_preview:
					"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3272&q=80",
				brand_id: 1,
				model_id: 1,
				color_id: 1,
				year: null,
				hp: null,
				price_rub: null
			} as Data
		}
	},
	computed: {
		...mapGetters({
			brands: "cars/getBrands",
			models: "cars/getModels",
			colors: "cars/getColors"
		}),
		isDisabledButton(): boolean {
			return !(this.data.year && this.data.hp && this.data.price_rub)
		}
	},
	methods: {
		...mapActions({
			createCarAction: "cars/createCar",
			fetchModels: "cars/fetchModels"
		}),
		setData(name: keyof CarsService.CarCreate, value: any): void {
			if (name === "brand_id") {
				this.isLoadingModels = true

				this.fetchModels(value)

				this.isLoadingModels = false
			}

			// @ts-ignore
			this.data[name] = value
		},
		defaultValue(name: "brands" | "models" | "colors"): string {
			return this?.[name]?.[0]?.name || ""
		},
		resetData(): void {
			this.data.year = this.data.hp = this.data.price_rub = null
		},
		async createCar(): Promise<void> {
			this.isLoading = true

			try {
				await this.createCarAction(this.data)

				this.$message.success("Your car is created")

				this.isModal = false

				this.resetData()
			} catch (error: any) {
				this.$message.error("Failed to create car")
			}

			this.isLoading = false
		}
	}
})
</script>
