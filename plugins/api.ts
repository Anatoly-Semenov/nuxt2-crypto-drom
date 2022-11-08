import { CarsService } from "@drom/requests"

// types
import type { Plugin } from "@nuxt/types"
import type { NuxtCookies } from "cookie-universal-nuxt"

declare module "vue/types/vue" {
	interface Vue {
		$carsApi: CarsService
	}
}

declare module "@nuxt/types" {
	interface NuxtAppOptions {
		$carsApi: CarsService
		$cookies: NuxtCookies
	}

	interface Context {
		$carsApi: CarsService
	}
}

declare module "vuex/types/index" {
	interface Store<S> {
		$carsApi: CarsService
	}
}

const apiPlugin: Plugin = (ctx, inject) => {
	const carsService = new CarsService(ctx)

	inject("carsApi", carsService)
}

export default apiPlugin
