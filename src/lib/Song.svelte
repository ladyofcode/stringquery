<script>
	export let title, artist, songId, chords;

	import { Spotify } from 'sveltekit-embed';

	let youtubeLink = `https://www.youtube.com/results?search_query=${title.split(' ').join('+')}+${artist.split(' ').join('+')}+guitar+tutorial`;

	console.log(youtubeLink);

	let tabsLink = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${title.split(' ').join('%20')}%20${artist.split(' ').join('%20')}`;

	console.log(tabsLink);

</script>

<svelte:head>
	<script>(function(d, s, id) {
		var js, ucjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//static.uberchord.com/uberchord-embed-sdk.js";
		ucjs.parentNode.insertBefore(js, ucjs);
		}(document, 'script', 'uberchord-jssdk'));</script>
</svelte:head>

<div class="glass">

	<div class="top-row">
		<div>
			<h3>{title}</h3>
			<p>by {artist}</p>
		</div>
		<div class="buttons">
			<a href={youtubeLink}>
				<button> <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 200 200" xml:space="preserve">
					<g transform="scale(.75)">
						<path fill="transparent" d="M0 0h400v400H0z"/>
						<path fill="#ebebdf" d="M199.91667116 105.6302382s-84.29180001.00007866-105.44791902 5.49739608c-11.32771618 3.16506938-20.655211 12.49266687-23.82031238 23.98698305-5.49727075 21.15613367-5.49739608 64.9687477-5.49739608 64.9687477s.00012533 43.97893404 5.49739608 64.80208104c3.16510139 11.49416018 12.3260082 20.65517366 23.82031238 23.82032038 21.32270701 5.6638401 105.44791902 5.66405342 105.44791902 5.66405342s84.45890802-.00006666 105.61458836-5.49738675c11.49438685-3.16508005 20.655107-12.15954686 23.65364037-23.82032038 5.66390676-20.98976034 5.66406676-64.80208104 5.66406676-64.80208104s.16645334-43.9792807-5.66406676-65.13541437c-2.99853338-11.49431618-12.15925352-20.65511233-23.65364037-23.65364971-21.15568034-5.83046276-105.61458836-5.83072943-105.61458836-5.83072943zm-26.8203071 53.97395285 70.13281446 40.47917398-70.13281445 40.31250732v-80.7916813z"/>
					</g>
					<script xmlns=""/></svg>Tutorials</button>
			</a>
			<a href={tabsLink}>
			<button> <svg width="40" height="100"  viewBox="-20 -30 280 280" fill="#ebebdf" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path d="m192.19 94.85c0.265 2.84 0.19 6.97 0.19 9.875 0.125 52.51-42.85 95.16-95.975 95.275-53.12 0.115-96.29-42.35-96.405-94.85a94.47 94.47 0 0 1 28.535-67.775l-9.735-9.225v-28.15l25.73 24.79a97.31 97.31 0 0 1 103.95 0.395l26.51-25.185v28.155l-10.615 9.745a94.5 94.5 0 0 1 23.58 38.37h-21.53c-15.915-38.21-60.155-56.42-98.815-40.695-38.665 15.74-57.095 59.46-41.17 97.675 15.915 38.2 60.16 56.42 98.82 40.68 24.575-10 42.045-32 46.02-57.98h-63.26l-20.075-21.1z" stroke-width="5"/>
				<script xmlns=""/></svg>Tabs</button>
			</a>
			</div>

	</div>

	<h4>Chords</h4>

	<!-- <div data-width="400" data-height="100" data-no-icon="1" class="uberchord-chords" data-search-by="names" data-search-query={chords}></div> -->

	<!-- <Spotify spotifyLink={`track/${songId}`} /> -->

</div>

<style>
	.top-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.2rem;
	}

	.top-row h3 {
		font-size: 1.6rem;
		margin-top: 0;
		margin-bottom: 0.8rem;
	}
	
	h3, h4, p {
		color: #ffffff;
	}

	.uberchord-chords {
		padding-top: 1.2rem;
		padding-left: 1.2rem;
		height: 100%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: start;
		margin-bottom: 1.6em;
		border-radius: 0.4rem;
	}

	svg {
		height: 28px;
		width: fit-content;
		margin-right: 0.4rem;
	}

	button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 108px;
		border-radius: 0.24rem;
		border: 0;
	}

	button:hover {
		cursor: pointer; 
	}

	button:first-of-type {
		color: #ebebdf;
		background-color: transparent;
		margin-bottom: 0.24rem;
	}

	button:last-of-type {
		color: #ebebdf;
		background-color: transparent;
	}
</style>
