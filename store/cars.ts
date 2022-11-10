// Types
import type { MutationTree, ActionTree, GetterTree } from "vuex"
import type { CarsService } from "@drom/types"

export const state = () => ({
	list: null as null | CarsService.Car[],
	detail: null as null | CarsService.Car,
	brands: null as null | CarsService.Brand[],
	models: [] as CarsService.Model[],
	colors: null as null | CarsService.Color[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
	setCarsList(state, payload): void {
		state.list = payload
	},
	setCarDetail(state, payload): void {
		state.detail = payload
	},
	deleteCar(state, payload): void {
		const index = state.list!.findIndex(({ id }) => id === payload.id)

		state.list!.splice(index, 1)
	},
	createCar(state, payload): void {
		if (Array.isArray(state.list)) {
			state.list.push(payload)
		} else {
			state.list = [payload]
		}
	},
	updateCar(state, payload): void {
		if (Array.isArray(state.list)) {
			state.list.push(payload)
		} else {
			state.list = [payload]
		}
	},
	setBrands(state, payload): void {
		state.brands = payload
	},
	setModels(state, payload): void {
		state.models = payload
	},
	setColors(state, payload): void {
		state.colors = payload
	}
}

export const actions: ActionTree<RootState, RootState> = {
	async fetchCars({ commit }): Promise<void> {
		await this.$carsApi
			.getCars()
			.then((data) => {
				commit("setCarsList", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async fetchCarDetail({ commit }, id: string): Promise<void> {
		await this.$carsApi
			.getCarDetail(id)
			.then((data) => {
				commit("setCarDetail", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async deleteCar({ commit }, id: string): Promise<void> {
		await this.$carsApi
			.deleteCar(id)
			.then((data) => {
				commit("deleteCar", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async updateCar(
		{ commit },
		{
			id,
			car
		}: {
			id: string
			car: CarsService.CarCreate
		}
	): Promise<void> {
		await this.$carsApi
			.updateCar(id, car)
			.then((data) => {
				commit("updateCar", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async createCar({ commit }, car: CarsService.CarCreate): Promise<void> {
		await this.$carsApi
			.createCar(car)
			.then((data) => {
				commit("createCar", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async fetchBrands({ commit }): Promise<void> {
		await this.$carsApi
			.getBrandsList()
			.then((data) => {
				commit("setBrands", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async fetchModels({ commit }, brandId: number | string): Promise<void> {
		await this.$carsApi
			.getModelsList(brandId)
			.then((data) => {
				commit("setModels", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	},
	async fetchColors({ commit }): Promise<void> {
		await this.$carsApi
			.getColorsList()
			.then((data) => {
				commit("setColors", data)
			})
			.catch((error: any) => {
				console.error(error)
			})
	}
}

export const getters: GetterTree<RootState, RootState> = {
	getCars: (state) => state.list,
	getCar: (state) => state.detail,
	getBrands: (state) => state.brands,
	getModels: (state) => state.models,
	getColors: (state) => state.colors
}
