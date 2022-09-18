<template>
	<div class="cars__articles">
		<h2 class="cars__articles-title">Articles</h2>
		<articles-list />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

// Components
import articlesList from "~/components/articles/articles-list.vue"

export default Vue.extend({
	name: "cars-articles.vue",
	components: { articlesList },
	data() {
		return {}
	}
})
</script>
