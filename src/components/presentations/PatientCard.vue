<template>
	<div class="patient-card">
		<div
			class="patient-img"
			:style="{
				'background-image': `url(${require(`../../assets/patients/${imgSrc}`)})`,
			}"
		></div>
		<div class="patient-info">
			<span>{{ patientName }}, {{ patientAge }}</span>
			<p>
				{{ patientStory }}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "PatientCard",
	props: {
		patientName: { default: "" },
		patientAge: { default: "" },
		patientStory: { default: "" },
		imgSrc: { default: "" },
	},
};
</script>
<style lang="scss" scoped>
.patient-card {
	background: #fff;
	box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
	border-radius: 40px;
	height: 590px;
	width: 540px;
	margin-top: 10%;
	cursor: pointer;
}
.patient-img {
	pointer-events: none;
	border-radius: 40px 40px 0 0;
	height: 350px;
}
.patient-info {
	margin: 20px 60px;
	& :first-child {
		color: #8e9ad5;
		font-size: 32px;
		line-height: 39px;
		font-weight: 900;
	}
	& :last-child {
		font-size: 20px;
		line-height: 25px;
		color: #424242;
	}
}
</style>
