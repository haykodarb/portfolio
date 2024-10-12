<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</head>

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
				<li>Profficient in C, C++, Dart and Javascript.</li>
				<li>Knowledgeable about RTOS, have used ChibiOS and FreeRTOS extensively.</li>
				<li>
					Ample work with STM32 microcontrollers, including configuring from scratch, interfacing
					with clocks, hardware timers, interrupts, SPI/I2C/USB/CAN and more.
				</li>
				<li>Experience in building IoT devices using ESP32 microcontrollers.</li>
				<li>
					Mobile, desktop and web app development with Flutter, Qt and various Javascript
					frameworks.
				</li>
				<li>Backend development and PostgreSQL/MySQL database management.</li>
				<li>
					Competent with Linux, built several servers with it and have been using it as my main
					operating systems for 5 years now. Currently running Ubuntu for my personal server and
					NixOS for my desktop machine.
				</li>
				margin-bottom: 5px;
				<li>
					Worked developing tools and products for diverse industries such as space, chemistry,
					health, agriculture and transport.
				</li>
				<li>Fluent in Spanish, English and Armenian.</li>
			</ul>
		</div>

		<div class="category-container">
			<h1 class="category-title">Experience</h1>

			<ul>
				<div>
					<li class="list-title">
						<a target=”_blank” href="https://aratom.com/" class="subtitle link">Aratom (full time)</a>
						<p class="list-title date">2023 - ongoing</p>
					</li>
					<ul>
						<li>Firmware and hardware development in space related project.</li>
						<li>Management of bussiness related servers.</li>
						<li>General IT responsibilities.</li>
					</ul>
				</div>
				<div style="margin-top: 1em;">
					<li class="list-title">
						<a target=”_blank” href="https://www.emtechsa.com/" class="subtitle link">Emtech (part time)</a>
						<p class="list-title date">2020 - 2023</p>
					</li>
					<ul>
						<li>Mobile app development for bluetooth capable health devices.</li>
						<li>Mobile app development in feed-lot project.</li>
						<li>Embedded Linux app development for chemical engineering company.</li>
					</ul>
				</div>
				<div style="margin-top: 1em;">
					<li class="list-title">
						<a target=”_blank” href="https://aratom.com/" class="subtitle link">Aratom (part time)</a>
						<p class="list-title date">2020 - 2023</p>
					</li>
					<ul>
						<li>
							Firmware and hardware development in electronic seeder project. (joint project with
							Emtech)
						</li>
						<li>Firmware, hardware and mobile app development for truck weight-scale project.</li>
					</ul>
				</div>
			</ul>
		</div>
		<div class="category-container">
			<h1 class="category-title">Personal Projects</h1>
			<ul>
				<li style="list-style-type: none; padding: 0; margin: 0;">
					<a target=”_blank” href="https://communal.ar" class="subtitle link">Communal</a>
					<p style="margin: 0; padding: 0;">Semi-decentralized physical book sharing app.</p>
				</li>
				<li style="list-style-type: none; padding: 0; margin: 0; margin-top: 1em;">
					<a target=”_blank” href="https://kassen.hayk.ar" class="subtitle link">Kassen</a>
					<p style="margin: 0; padding: 0;">Greenhouse temperature monitoring station.</p>
				</li>
				<li style="list-style-type: none; padding: 0; margin: 0; margin-top: 1em;">
					<a target=”_blank” href="/arev" class="subtitle link">Arev</a>
					<p style="margin: 0; padding: 0;">Waterheater temperature controller.</p>
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
		font-weight: 600;
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
</style>
