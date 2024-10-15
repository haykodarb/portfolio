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
		<div id="profile">
			<img src="./avatar.jpg" id="profile-avatar" alt="Hayk's face" />
			<div id="profile-name">
				<h1 class="title">Hayk Darbinyan</h1>
				<h3 class="subtitle">Embedded Engineer from Argentina</h3>
				<div style="display: flex; flex-direction: row; align-items: end;">
					<h3 class="subtitle">Contact:&nbsp;</h3>
					<a href="mailto: work@hayk.ar" class="subtitle link"> work@hayk.ar </a>
				</div>
			</div>
		</div>
		<div class="category-container">
			<h1 class="category-title">About</h1>
			<p>
				Embedded software engineer with over 4 years of experience developing solutions in realtime
				systems. Seeking to leverage experience in firmware programming, hardware integration and
				app development to advance projects, build prototypes and launch products.
			</p>
		</div>
		<div class="category-container">
			<h1 class="category-title">Skills</h1>
			<ul>
				<li>
					Profficient in
					<span class="highlighted">C, C++, Dart and Javascript.</span>
				</li>
				<li>
					Knowledgeable about
					<span class="highlighted">Real Time Operating Systems</span>, have used ChibiOS and
					FreeRTOS extensively.
				</li>
				<li>
					Ample work with <span class="highlighted">STM32 microcontrollers</span>, including
					configuring from scratch, interfacing with clocks, hardware timers, interrupts,
					SPI/I2C/USB/CAN and more.
				</li>
				<li>
					Experience in building <span class="highlighted">IoT devices</span> using WiFi and Bluetooth.
				</li>
				<li>
					Mobile, desktop and web app development with <span class="highlighted"
						>Flutter, Qt and various Javascript frameworks.</span
					>
				</li>
				<li>Database management using <span class="highlighted">PostgreSQL/MySQL</span>.</li>
				<li>
					<span class="highlighted">Linux</span> for use in both desktops and servers.
				</li>
				<li><span class="highlighted">Schematic and PCB</span> design and review.</li>
				<li>Fluent in <span class="highlighted">English, Spanish</span> and Armenian.</li>
				<li>
					Worked developing tools and products for diverse industries such as space, chemistry,
					health, agriculture and transport.
				</li>
			</ul>
		</div>

		<div class="category-container">
			<h1 class="category-title">Experience</h1>

			<ul>
				<div>
					<li class="list-title">
						<a target="”_blank”" href="https://aratom.com/" class="subtitle link">Aratom</a>
						<p class="list-title date">2020 - ongoing</p>
					</li>
					<ul>
						<li>Firmware and hardware development in space related project.</li>
						<li>Management of bussiness related servers.</li>
						<li>General IT responsibilities.</li>
						<li>
							Firmware and hardware development in electronic seeder project (joint project with
							Emtech).
						</li>
						<li>Firmware, hardware and mobile app development for truck weight-scale project.</li>
					</ul>
				</div>
				<div style="margin-top: 1em;">
					<li class="list-title">
						<a target="”_blank”" href="https://www.emtechsa.com/" class="subtitle link">Emtech</a>
						<p class="list-title date">2020 - 2023</p>
					</li>
					<ul>
						<li>Mobile app development for bluetooth capable health devices.</li>
						<li>Mobile app development in feed-lot project.</li>
						<li>Embedded Linux app development for chemical engineering company.</li>
					</ul>
				</div>
			</ul>
		</div>
		<div class="category-container">
			<h1 class="category-title">Personal Projects</h1>
			<ul>
				<li style="list-style-type: none; padding: 0; margin: 0;">
					<a target="”_blank”" href="https://communal.ar" class="subtitle link">Communal</a>
					<p style="margin: 0; padding: 0;">Semi-decentralized physical book sharing platform.</p>
				</li>
				<li style="list-style-type: none; padding: 0; margin: 0; margin-top: 1em;">
					<a target="”_blank”" href="https://kassen.hayk.ar" class="subtitle link">Kassen</a>
					<p style="margin: 0; padding: 0;">Greenhouse temperature monitoring station.</p>
				</li>
				<li style="list-style-type: none; padding: 0; margin: 0; margin-top: 1em;">
					<a href="/arev" class="subtitle link">Arev</a>
					<p style="margin: 0; padding: 0;">
						Solar waterheater temperature monitor and controller.
					</p>
				</li>
			</ul>
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

	li {
		margin-bottom: 0.5vh;
		margin-top: 0.5vh;
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
		max-width: 700px;
		display: flex;
		flex-direction: column;
		padding-top: 5vh;
		padding-bottom: 5vh;
	}

	#profile {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-bottom: 2.5vh;
		gap: 1.5em;
	}

	#profile-avatar {
		height: 7.5em;
		width: 7.5em;
		border-radius: 50%;
	}

	#profile-name {
		display: flex;
		flex-direction: column;
		justify-content: start;
		gap: 1vh;
	}

	.category-title {
		font-size: 1.25em;
		font-weight: 700;
		margin: 0;
		margin-bottom: 0.75vw;
	}

	.list-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 1em;
		margin: 0;
		font-weight: 600;
	}

	.list-title.date {
		font-weight: 500;
		font-style: italic;
	}

	.title {
		font-size: 2em;
		font-weight: 800;
		line-height: 1;
		margin: 0;
		margin-bottom: 0.25em;
	}

	.subtitle {
		color: var(--text-color-variant);
		font-weight: 500;
		font-size: 1em;
		margin: 0;
	}

	.subtitle.link {
		font-weight: 700;
		color: var(--primary);
		text-decoration: none;
	}

	.subtitle.link:hover {
		background-color: var(--primary);
		color: var(--on-primary);
	}

	.category-container {
		margin-top: 2.5vh;
	}

	.highlighted {
		font-weight: 600;
		color: #8839ef;
	}
</style>
