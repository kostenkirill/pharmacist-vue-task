<template>
	<div>
		<div class="start-page">
			<div class="welcome-message">
				<span>Добро пожаловать в игру</span>
				<span
					>Помоги <br />
					ФАРМАЦЕВТУ</span
				>
				<button @click="startGame">Начать</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "StartPage",
	methods: {
		startGame() {
			this.$router.push("/main");
		},
	},
};
</script>

<style scoped lang="scss">
.start-page {
	height: 100vh;
	background: linear-gradient(
			63.53deg,
			rgba(45, 133, 80, 0.32) 16.62%,
			rgba(94, 110, 194, 0.32) 83.38%
		),
		url("../assets/cover-img.jpg") round;
	border: 1px solid #000000;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.welcome-message {
	position: absolute;
	width: 860px;
	height: 860px;
	left: 110px;
	top: -30px;
	background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
	border-radius: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #ffffff;

	& :first-child {
		font-size: 35px;
		line-height: 41px;
		letter-spacing: 0.02em;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	& :nth-child(2) {
		font-family: "Avenir Next Cyr Medium";
		overflow-wrap: anywhere;
		font-size: 60px;
		line-height: 66px;
		display: flex;
		align-items: center;
		letter-spacing: 0.02em;
		margin-top: 30px;
	}
}

button {
	background: #ffffff;
	border-radius: 100px;
	border: none;
	outline: none;
	margin-top: 120px;
	padding: 30px 120px;
	cursor: pointer;

	font-family: "Avenir Next Cyr Medium";
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 44px;

	color: #8e9ad5;
	&:hover {
		background: darken($color: #fff, $amount: 4);
	}
}
</style>
