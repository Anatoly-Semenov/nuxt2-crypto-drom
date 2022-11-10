<template>
	<div class="layout__header">
		<div class="layout__container">
			<div class="layout__header-main">
				<nuxt-link class="layout__header-logo" to="/">
					<logo-svg />
				</nuxt-link>
				<div class="layout__header-menu">
					<nuxt-link
						class="layout__header-link"
						v-for="({ text, link }, index) in menu"
						:key="index + link"
						:to="link"
					>
						{{ text }}
					</nuxt-link>
				</div>
			</div>
			<div class="layout__header-auth">
				<cars-create />
				<!--			Todo		-->
				<ui-button>Регистрация</ui-button>
				<ui-button>Войти</ui-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Svg
import logoSvg from "~/assets/img/logo.svg"

// Components
import carsCreate from "~/components/cars/cars-create.vue"

export default Vue.extend({
	name: "layout-header",
	components: {
		logoSvg,
		carsCreate
	},
	data() {
		return {
			menu: [
				{
					text: "Автомобили",
					link: "/"
				},
				{
					text: "Статьи",
					link: "/"
				}
			]
		}
	}
})
</script>
