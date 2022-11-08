<template>
	<a-modal
		class="ui-modal"
		:class="{
			'_transparent-content': transparentContent,
			'_max-height': maxHeight,
			_fullscreen: isFullScreen,
			_disableFooter: disableFooter
		}"
		v-model="model"
		:width="width"
		:centered="centered"
		@ok="$emit('ok')"
		@cancel="$emit('cancel')"
		:okText="okText"
		:cancelText="cancelText"
		:okButtonProps="{ props: { disabled: okDisabled } }"
		:cancelButtonProps="{ props: { disabled: cancelDisabled } }"
		:okType="okType"
		:footer="disableFooter ? null : undefined"
		:closable="closable"
		:bodyStyle="bodyStyle"
		:dialogStyle="dialogStyle"
		:confirmLoading="confirmLoading"
		:destroyOnClose="destroyOnClose"
		dialogClass="dialog"
		wrapClassName="dialog"
	>
		<template slot="closeIcon" v-if="closable">
			<div class="ui-modal__icons" v-if="!disableHeader">
				<button v-if="!isFullScreenOnly" @click="toggleFullscreen">
					<ui-icon
						:type="isFullScreen ? 'fullscreen-exit' : 'fullscreen'"
						:color="colorCloseIcon"
					/>
				</button>
				<ui-icon type="close" :color="colorCloseIcon" />
			</div>
		</template>
		<template slot="title" v-if="!disableHeader">
			{{ title }}
			<slot name="head" />
		</template>
		<slot />
		<template slot="footer" v-if="!disableFooter">
			<slot name="footer"></slot>
		</template>
	</a-modal>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"

// Use Ant-component
import { Modal } from "ant-design-vue"
Vue.use(Modal)

// Types
import { UiButton } from "~/types"

export default Vue.extend({
	name: "ui-modal",
	props: {
		title: String as PropOptions<string>,
		value: Boolean as PropOptions<boolean>,
		okText: String as PropOptions<string>,
		cancelText: String as PropOptions<string>,
		okDisabled: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		cancelDisabled: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		okType: String as PropOptions<UiButton.Type>,
		width: Number as PropOptions<number>,
		centered: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		disableFooter: {
			type: Boolean,
			default: true
		} as PropOptions<boolean>,
		confirmLoading: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		disableHeader: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		closable: {
			type: Boolean,
			default: true
		} as PropOptions<boolean>,
		bodyStyle: {
			type: Object
		} as PropOptions<object>,
		dialogStyle: {
			type: Object
		} as PropOptions<object>,
		transparentContent: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		colorCloseIcon: {
			type: String,
			default: ""
		} as PropOptions<string>,
		maxHeight: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		isFullScreenOnly: {
			type: Boolean,
			default: false
		} as PropOptions<boolean>,
		destroyOnClose: Boolean as PropOptions<boolean>
	},
	data() {
		return {
			isFullScreen: false as boolean
		}
	},
	created() {
		if (this.isFullScreenOnly) {
			this.isFullScreen = true
		}
	},
	watch: {
		isFullScreenOnly(newValue) {
			if (newValue) {
				this.isFullScreen = true
			}
		}
	},
	computed: {
		model: {
			get(): boolean {
				return this.value
			},
			set(val: boolean): void {
				if (Object.keys(this.$listeners).length === 2) {
					this.$emit("cancel", val)
				} else {
					this.$emit("ok", val)
				}
			}
		}
	},
	methods: {
		toggleFullscreen() {
			this.$stopEvents()
			this.isFullScreen = !this.isFullScreen
		}
	}
})
</script>
