<template>
	<nuxt-link
		class="cars__item"
		:class="{ _loading: isLoading }"
		:to="`/cars/${id}`"
	>
		<img :src="img" class="cars__item-img" />
		<div class="cars__item-info">
			<p class="cars__item-title">
				{{ title }}
			</p>
		</div>
		<div class="cars__item-price">
			<p class="cars__item-fiat">{{ priceFiat }}</p>
			<a-tag v-if="priceCrypto">
				{{ priceCrypto }}
			</a-tag>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

// Types
import type { CarsService } from "@drom/types"

export default Vue.extend({
	name: "cars-item",
	props: {
		data: Object as PropType<CarsService.Car>,
		isLoading: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		id(): number {
			return this.data.id
		},
		title(): string {
			return `${this.data?.brand.name} ${this.data?.model.name}, ${this.data?.year}`
		},
		img(): string {
			return this.data?.img_preview || ""
		},
		priceFiat(): string {
			// Todo: temporary hide
			return `${this.data?.price_rub} ₽`
		},
		priceCrypto(): string {
			return "0 USDT"
			// Todo: temporary hide
			// return this.data.price.usdt ? `${this.data.price.usdt} USDT` : ""
		}
	}
})
</script>
