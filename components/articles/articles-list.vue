<template>
	<div class="articles__list">
		<a-card
			v-for="({ title, description, img }, index) in articles"
			:key="index"
			hoverable
			style="width: 240px"
		>
			<img slot="cover" alt="example" :src="img" />
			<a-card-meta :title="title">
				<template slot="description">{{ description }}</template>
			</a-card-meta>
		</a-card>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	name: "articles-list.vue",
	data() {
		return {
			articles: [
				{
					title: "Chery",
					description:
						"GENE — футуристичный кроссовер, который проливает свет на будущее стиля Chery",
					img: "https://s.auto.drom.ru/i24273/pubs/4/89019/gen473_3856832.jpg"
				},
				{
					title: "Honda",
					description: "Бюджетный кроссовер Honda провалился на краш-тестах",
					img: "https://s.auto.drom.ru/i24273/pubs/4/89017/gen380_3856754.jpg"
				},
				{
					title: "Знаки",
					description:
						"В России модернизируют ГОСТ по применению дорожных знаков и разметки",
					img: "https://s.auto.drom.ru/i24273/pubs/4/89016/gen380_3856741.jpg"
				}
			]
		}
	}
})
</script>
