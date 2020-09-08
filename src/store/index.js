import Vue from "vue";
import Vuex from "vuex";
import { patients } from "../utils/constants";
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		patients: patients,
		patientsLeft: patients.length,
		pillsCounter: {
			sadPill: 0,
			happyPill: 0,
			loyalPill: 0,
		},
	},
	mutations: {
		giveDrug(state, payload) {
			state.pillsCounter[payload]++;
			state.patientsLeft--;
		},
		discardData(state) {
			state.patientsLeft = state.patients.length;
			Object.entries(state.pillsCounter).map(([key]) => {
				state.pillsCounter[key] = 0;
			});
		},
	},
	actions: {
		GIVE_DRUG(context, payload) {
			context.commit("giveDrug", payload);
		},
		DISCARD_DATA(context) {
			context.commit("discardData");
		},
	},
	getters: {
		patients: (state) => {
			return state.patients;
		},
		patientsCount: (state) => {
			return state.patients.length;
		},
		patientsLeft: (state) => {
			return state.patientsLeft;
		},
		sadPillsCount: (state) => {
			return state.pillsCounter.sadPill;
		},
		happyPillsCount: (state) => {
			return state.pillsCounter.happyPill;
		},
		loyalPillsCount: (state) => {
			return state.pillsCounter.loyalPill;
		},
	},
});
