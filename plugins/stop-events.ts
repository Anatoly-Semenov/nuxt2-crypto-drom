import { Plugin } from "@nuxt/types"

declare module "vue/types/vue" {
	// this.$stopEvents inside Vue components
	interface Vue {
		$stopEvents(): void
	}
}

declare module "@nuxt/types" {
	// nuxtContext.app.$stopEvents inside asyncData, fetch, plugins, middleware, nuxtServerInit
	interface NuxtAppOptions {
		$stopEvents(): void
	}
	// nuxtContext.$stopEvents
	interface Context {
		$stopEvents(): void
	}
}

declare module "vuex/types/index" {
	// this.$stopEvents inside Vuex stores
	interface Store<S> {
		$stopEvents(): void
	}
}

const stopEventsPlugin: Plugin = (context, inject) => {
	const stopEvents = () => {
		const event: Event = window.event!
		event.cancelBubble = true
		if (event.stopPropagation) event.stopPropagation()
	}
	inject("stopEvents", stopEvents)
}

export default stopEventsPlugin
