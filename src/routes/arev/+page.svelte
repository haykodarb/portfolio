<script>
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/400-italic.css';
	import '@fontsource/poppins/500-italic.css';
	import '@fontsource/poppins/600-italic.css';
	import '@fontsource/poppins/700-italic.css';
	import '@fontsource/poppins/800-italic.css';
</script>

<div id="page">
	<div id="body">
		<h1 style="color: var(--primary);">Arev</h1>
		<p>
			The project consists of a custom built solar water heater controller built around an ESP8266
			microcontroller.
			<br />
			<br />
			The device is controlled via an Android app that I built using Flutter. On startup, it connects
			to the WiFi network and opens up a local webserver that is discoverable over mDNS, the user then
			uses the app to connect to said webserver and either read the current temperatures values, obtain
			previous temperature and power consumption logs or modify the setpoints which the controller uses
			to turn the electric resistance on or off.
		</p>

		<div id="image-row">
			<img src="./termotanque1.jpg" alt="app view showing available devices" height="600px" />
			<img src="./termotanque2.jpg" alt="app view showing current temperature and resistance status" height="600px" />
			<img src="./termotanque3.jpg" alt="app view showing logs of temperature and consumption" height="600px" />
		</div>
	</div>
</div>

<style>
	:root {
		--text-color: #4c4f69;
		--text-color-variant: #6c6f85;
		--primary: #dd7878;
		--on-primary: #eff1f5;
	}

	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		font-family: 'Poppins';
		padding: 0;
		margin: 0;
		color: var(--text-color);
		width: 100%;
	}

	#body {
		width: 90vw;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		padding-top: 5vh;
		padding-bottom: 20vh;
	}

	#image-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 20px;
	}
</style>
