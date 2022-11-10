<template>
	<a-icon :type="type" :theme="theme" :style="{ color: color }" />
</template>

<script lang="ts">
import Vue from "vue"

// Use ui-component
import { Icon } from "ant-design-vue"
Vue.use(Icon)

export default Vue.extend({
	name: "ui-icon",
	props: {
		type: String,
		color: {
			type: String,
			default: "#FFFFFF"
		},
		theme: {
			type: String,
			default: "outlined"
		}
	}
})
</script>
