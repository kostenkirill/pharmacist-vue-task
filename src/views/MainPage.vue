<template>
	<div class="main-page">
		<side-bar @startOver="startOver"></side-bar>
		<div class="action-container">
			<div class="container">
				<div class="cards-container">
					<div class="fixed fixed--center" style="z-index: 3;">
						<Vue2InteractDraggable
							v-if="isVisible"
							:interact-out-of-sight-x-coordinate="500"
							:interact-max-rotation="15"
							:interact-x-threshold="200"
							:interact-y-threshold="200"
							:interact-block-drag-down="true"
							:interact-event-bus-events="interactEventBusEvents"
							@draggedLeft="() => giveDrug('sadPill')"
							@draggedUp="() => giveDrug('happyPill')"
							@draggedRight="() => giveDrug('loyalPill')"
						>
							<patient-card
								v-if="current"
								:patientName="current.name"
								:patientAge="current.age"
								:patientStory="current.story"
								:imgSrc="current.imgSrc"
							></patient-card>
						</Vue2InteractDraggable>
					</div>
					<div v-if="next" class="fixed fixed--center" style="z-index: 2;">
						<div class="flex flex--center" style="height: 100%;">
							<patient-card
								:patientName="next.name"
								:patientAge="next.age"
								:patientStory="next.story"
								:imgSrc="next.imgSrc"
							></patient-card>
						</div>
					</div>
				</div>
				<div class="pills_buttons">
					<button class="btn btn-purple" @click="() => dragCard('LEFT')">
						Препарат 1
					</button>
					<button class="btn btn-blue" @click="() => dragCard('UP')">
						Препарат 2
					</button>
					<button class="btn btn-yellow" @click="() => dragCard('RIGHT')">
						Препарат 3
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
import SideBar from "../components/containers/SideBar";
import PatientCard from "../components/presentations/PatientCard";

export default {
	name: "MainPage",
	components: {
		SideBar,
		PatientCard,
		Vue2InteractDraggable,
	},
	data() {
		return {
			cards: this.$store.getters.patients,
			isVisible: true,
			index: 0,
			interactEventBusEvents: {
				draggedLeft: "INTERACT_DRAGGED_LEFT",
				draggedRight: "INTERACT_DRAGGED_RIGHT",
				draggedUp: "INTERACT_DRAGGED_UP",
			},
		};
	},
	computed: {
		current() {
			return this.cards[this.index];
		},
		next() {
			return this.cards[this.index + 1];
		},
	},
	methods: {
		checkIfDone() {
			const patientsLeft = this.$store.getters.patientsLeft;
			if (patientsLeft === 0) {
				setTimeout(() => {
					this.$router.push("/final");
				}, 500);
			}
		},
		startOver() {
			this.index = 0;
			this.isVisible = true;
		},
		dragCard(direction) {
			InteractEventBus.$emit(`INTERACT_DRAGGED_${direction}`);
		},
		giveDrug(pill) {
			this.$store.dispatch("GIVE_DRUG", pill);
			setTimeout(() => (this.isVisible = false), 200);
			setTimeout(() => {
				this.index++;
				this.isVisible = true;
			}, 300);
			this.checkIfDone();
		},
	},
};
</script>

<style lang="scss" scoped>
.main-page {
	display: flex;
	flex-direction: row;
}
.action-container {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.container {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;

	@media screen and (max-width: 1024px) {
		width: 760px;
	}
}
.cards-container {
	display: flex;
	justify-content: center;
}

.fixed {
	position: absolute;
}
.card {
	width: 300px;
	height: 400px;
	color: white;
}

.pills_buttons {
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin-bottom: 64px;

	@media screen and (max-width: 1024px) {
		margin-bottom: 10px;
	}
}
.btn {
	border-radius: 100px;
	color: #fff;
	width: 280px;
	height: 90px;
	margin-left: 40px;
	font-size: 28px;
	line-height: 34px;
	align-items: center;
	text-align: center;
	outline: none;
	border: none;
	cursor: pointer;

	&-purple {
		background: linear-gradient(266.19deg, #8049c7 0%, #ca57fd 100%);
	}
	&-blue {
		background: linear-gradient(266.19deg, #169ae4 0%, #0cc4fa 100%);
	}
	&-yellow {
		background: linear-gradient(
			90deg,
			#ffd748 0.02%,
			rgba(195, 199, 11, 0.96) 99.97%,
			#cac6ab 99.98%,
			#d3e9e1 99.99%
		);
	}
}
</style>
