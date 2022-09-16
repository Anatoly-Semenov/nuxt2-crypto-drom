import Vue from "vue"

// Types
import type { Plugin } from "@nuxt/types"
import type { Notification } from "ant-design-vue/types/notification"
import type { Message } from "ant-design-vue/types/message"

import {
	Tooltip,
	Table,
	Popover,
	Menu,
	Modal,
	Result,
	Tabs,
	notification,
	message
} from "ant-design-vue"
import { ModalConfirm, ModalOptions } from "ant-design-vue/types/modal"

Vue.prototype.$notification = notification
Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm

Vue.use(Tooltip)
Vue.use(Table)
Vue.use(Popover)
Vue.use(Menu)
Vue.use(Result)
Vue.use(Tabs)

const messagePlugin: Plugin = (_, inject) => {
	inject("notification", notification)
	inject("message", message)
	inject("confirm", Modal.confirm)
}

declare module "vue/types/vue" {
	// this.$copy inside Vue components
	interface Vue {
		$notification: Notification
		$message: Message
		$confirm: (modalOptions: ModalOptions) => ModalConfirm
	}
}

declare module "@nuxt/types" {
	// nuxtContext.app.$copy inside asyncData, fetch, plugins, middleware, nuxtServerInit
	interface NuxtAppOptions {
		$notification: Notification
		$message: Message
		$confirm: (modalOptions: ModalOptions) => ModalConfirm
	}
	// nuxtContext.$copy
	interface Context {
		$notification: Notification
		$message: Message
		$confirm: (modalOptions: ModalOptions) => ModalConfirm
	}
}

declare module "vuex/types/index" {
	// this.$copy inside Vuex stores
	interface Store<S> {
		$notification: Notification
		$message: Message
		$confirm: (modalOptions: ModalOptions) => ModalConfirm
	}
}

export default messagePlugin
