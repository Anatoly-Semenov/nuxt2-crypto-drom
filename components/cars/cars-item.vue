<template>
	<nuxt-link :to="`/cars/${id}`" class="cars__item">
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
interface Car {
	id: number
	brand: string
	model: string
	year: number
	hp: number
	price: {
		rub: number
		eth: number
		btc: number
		usdt: number
	}
	color: string
	region: {
		id: number
		name: string
	}
	created_at: string
	edited_at: string
	img_preview: string
}

export default Vue.extend({
	name: "cars-item",
	props: {
		data: Object as PropType<Car>
	},
	computed: {
		id(): number {
			return this.data.id
		},
		title(): string {
			return `${this.data?.brand} ${this.data?.model}, ${this.data?.year}`
		},
		img(): string {
			return this.data?.img_preview || ""
		},
		priceFiat(): string {
			return `${this.data.price.rub} ₽`
		},
		priceCrypto(): string {
			return this.data.price.usdt ? `${this.data.price.usdt} USDT` : ""
		}
	}
})
</script>
