<template>
	<div class="sideBar">
		<div class="sideBar_buttons">
			<div @click="goHome"></div>
			<div @click="restart"></div>
		</div>
		<div class="sideBar_drugs">
			<p>Параметри:</p>
			<div class="sideBar_drugs-counter">
				<div class="sad-counter">
					<span>{{ sadPillsCount }}</span>
				</div>
				<div class="happy-counter">
					<span>{{ happyPillsCount }}</span>
				</div>
				<div class="loyal-counter">
					<span>{{ loyalPillsCount }}</span>
				</div>
			</div>
		</div>
		<div class="sideBar_patient-counter">
			Осталось в очереди:
			<span>
				<strong>{{ patientsLeft }}</strong
				>/{{ patientsCount }}
			</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "SideBar",
	computed: {
		...mapGetters([
			"patientsCount",
			"patientsLeft",
			"sadPillsCount",
			"happyPillsCount",
			"loyalPillsCount",
		]),
	},
	methods: {
		goHome() {
			this.$router.push("/");
		},
		restart() {
			this.$emit("startOver");
			this.$store.dispatch("DISCARD_DATA");
		},
	},
};
</script>
<style lang="scss" scoped>
.sideBar {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 30%;
	max-width: 470px;
	height: 100vh;
	background: linear-gradient(
		63.53deg,
		rgba(45, 133, 80, 0.7) 16.62%,
		rgba(94, 110, 194, 0.7) 83.38%
	);
}

.sideBar_buttons {
	padding: 70px 40px;
	display: flex;
	& * {
		border-radius: 50px;
		cursor: pointer;
		width: 70px;
		height: 70px;
	}
	& :first-child {
		background: url("../../assets/home.svg") no-repeat center, #fff;
	}
	& :last-child {
		background: url("../../assets/retry.svg") no-repeat center, #fff;
		margin-left: 38px;
	}
}

.sideBar_drugs {
	padding-left: 20px;
	& p {
		color: #fff;
		font-size: 36px;
		line-height: 44px;
		margin-bottom: 30px;
		font-weight: 900;
	}
	&-counter {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		& * {
			border-radius: 100px;
			width: 190px;
			height: 80px;
			margin: 0 20px 37px 0;
			display: flex;
			justify-content: flex-end;
			padding-top: 6px;

			font-size: 48px;
			font-weight: 900;
			line-height: 59px;
			color: #424242;
		}

		& .sad-counter {
			background: url("../../assets/sad_icon.svg") no-repeat left, #fff;
			background-position: 10px;
		}
		& .happy-counter {
			background: url("../../assets/Happy_icon.svg") no-repeat left, #fff;
			background-position: 10px;
		}
		& .loyal-counter {
			background: url("../../assets/heart_icon.svg") no-repeat left, #fff;
			background-position: 10px;
		}
	}
}

.sideBar_patient-counter {
	background: rgba(255, 255, 255, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 134px;
	font-size: 36px;
	line-height: 44px;
	align-items: center;
	text-align: center;
	letter-spacing: 0.02em;
	color: #ffffff;

	& span {
		font-weight: 900;
	}
}
</style>
