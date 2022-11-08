<template>
	<div class="layout">
		<layout-header />
		<div class="layout__content">
			<div class="layout__container">
				<Nuxt />
			</div>
		</div>
		<div class="layout__footer">
			<img src="~/assets/img/temp/footer.png" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Components
import layoutHeader from "~/components/layout/layout-header.vue"

export default Vue.extend({
	name: "layout-index",
	components: {
		layoutHeader
	}
})
</script>
