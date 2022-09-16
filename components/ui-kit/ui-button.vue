<template>
	<a-button
		:class="getSelector"
		:type="type"
		@click="$emit('click')"
		:disabled="disabled"
		:loading="loading"
	>
		<slot name="left-icon" />
		<slot />
		<slot name="right-icon" />
	</a-button>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"

// Use Ant-design component
import { Button } from "ant-design-vue"
Vue.use(Button)

// Types
import { UiButton } from "@/types"

export default Vue.extend({
	name: "ui-button",
	props: {
		size: {
			type: String,
			default: "default"
		} as PropOptions<UiButton.Size>,
		type: {
			type: String,
			default: "primary"
		} as PropOptions<UiButton.Type>,
		disabled: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		loading: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>
	},
	computed: {
		getSelector(): string {
			let selector: string = "ui-button"

			const addProp = (prop: string): void => {
				if (prop) {
					selector += ` _${prop}`
				}
			}

			addProp(this.size)

			return selector
		}
	}
})
</script>
