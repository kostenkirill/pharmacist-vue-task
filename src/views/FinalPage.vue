<template>
	<section>
		<button class="btn-home" @click="goHome">
			<svg
				width="36"
				height="32"
				viewBox="0 0 36 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z"
					fill="white"
				/>
			</svg>
		</button>
		<div class="final-results">
			<div class="final-results_stats">
				<div>
					<span>{{ getPercentage(sadPillsCount, patientsCount) }}%</span>
					<p class="pill_name">Препарат 1</p>
				</div>
				<div>
					<span>{{ getPercentage(happyPillsCount, patientsCount) }}%</span>
					<p class="pill_name">Препарат 2</p>
				</div>
				<div>
					<span>{{ getPercentage(loyalPillsCount, patientsCount) }}%</span>
					<p class="pill_name">Препарат 3</p>
				</div>
			</div>
			<div class="final-info">
				<span>Ваш результат:</span>
				<span>«Что я здесь делаю?»</span>
				<span>
					Это тестовое задание, так что не будем углубляться в глубины проблем
					фармацевтов.
				</span>
			</div>
			<button class="btn-restart" @click="goHome">Попробовать еще</button>
		</div>
		<div class="round-img"></div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "FinalPage",
	computed: {
		...mapGetters([
			"patientsCount",
			"sadPillsCount",
			"happyPillsCount",
			"loyalPillsCount",
		]),
	},
	methods: {
		goHome() {
			this.$router.push("/");
			this.$store.dispatch("DISCARD_DATA");
		},
		getPercentage(pillsNumber, pillsTotal) {
			return (pillsNumber * 100) / pillsTotal;
		},
	},
};
</script>

<style scoped lang="scss">
section {
	display: flex;
	justify-content: space-between;

	& .btn-home {
		position: absolute;
		width: 70px;
		height: 70px;
		left: 50px;
		top: 70px;
		border-radius: 50%;
		outline: none;
		border: none;
		cursor: pointer;
		background: linear-gradient(
			63.53deg,
			rgb(45, 133, 80) 16.62%,
			rgb(94, 110, 194) 83.38%
		);
	}
}
.final-results {
	margin: 260px 60px 40px 0;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 38px;
	line-height: 59px;
	color: #424242;
	padding-left: 130px;
	&_stats {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		border-bottom: 2px solid #d9d9d9;
		padding-bottom: 50px;
	}
}
.pill_name {
	font-size: 16px;
	line-height: 20px;
	font-weight: 900;
}
.round-img {
	background: linear-gradient(
			63.53deg,
			rgba(45, 133, 80, 0.25) 16.62%,
			rgba(94, 110, 194, 0.25) 83.38%
		),
		url("../assets/final_img.jpg") center;
	box-shadow: 0px 0px 160px #c4c4c4;
	position: fixed;
	left: 62vw;
	right: -10.42%;
	top: -9.77%;
	bottom: 29.69%;
	height: 820px;
	width: 820px;
	margin-left: 60px;
	border-radius: 50%;
}
.final-info {
	color: #8e9ad5;
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	& :first-child {
		font-size: 32px;
		line-height: 35px;
		letter-spacing: 0.02em;
	}
	& :nth-child(2) {
		line-height: 35px;
		font-weight: 900;
	}
	& :last-child {
		padding-top: 20px;
		font-size: 24px;
		line-height: 29px;
		color: #424242;
	}
}
.btn-restart {
	position: absolute;
	left: 9.03%;
	right: 72.22%;
	top: 85.94%;
	bottom: 8.2%;
	background: linear-gradient(90deg, #d9d9d9 0%, #a1a1a1 100%);
	border-radius: 100px;
	font-size: 24px;
	line-height: 29px;
	font-weight: 900;
	min-width: 260px;
	min-height: 60px;
	color: #ffffff;
	border: none;
	outline: none;
	padding: 0 25px;
	cursor: pointer;
}
</style>
