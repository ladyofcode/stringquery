<script>
	import { dndzone, overrideItemIdKeyNameBeforeInitialisingDndZones, setDebugMode} from 'svelte-dnd-action';
	import Svelecte from 'svelecte';

	import '../app.css';

	import { browser } from '$app/environment';
	import Song from '$lib/Song.svelte';
	import options from '$lib/chords.js';

	overrideItemIdKeyNameBeforeInitialisingDndZones('value');
	setDebugMode(true);

	let value = [options[3], options[7]];
	
	const genres = [
		'rock',
		'alternative',
		'pop',
		'punk',
		'soul',
		'reggae',
		'electronica',
		'dance',
		'metal',
		'classic rock',
		'country',
		'britpop'
	];

	function saveForm(event) {
		event.preventDefault();

		const data = new FormData(document.querySelector('form'));
		const value = Object.fromEntries(data.entries());
		value.genres = data.getAll('genres');

		let csvRows = [];
		const headers = Object.keys(data);
		console.log('form: ', { headers });
		csvRows.push(headers.join(','));
		csvRows.push(Object.values(value).join(','));
		csvRows.join('\n');

		const blob = new Blob([csvRows], { type: 'text/csv' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.setAttribute('href', url);
		a.setAttribute('download', 'stringQuerySettings.csv');
		a.click();
	}

	if (browser) {
		// Use papaparse for the file
		// const importButton = document.querySelector('#importButton');
		// importButton.addEventListener('click', saveForm);
		const exportButton = document.querySelector('#exportButton');
		exportButton.addEventListener('click', saveForm);
	}
</script>

<main>
	<h1>String Query</h1>

	<form action="">
		<div>
			<button id="importButton">Import</button>
			<button id="exportButton" type="submit">Export</button>
		</div>

		<label for="chords">Add chords</label>
		<Svelecte {options} bind:value={value} multiple {dndzone} valueAsObject placeholder="Add chords..." />
		<fieldset>
			<legend>Genres</legend>

			{#each genres as genre}
				<div>
					<label for={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</label>
					<input type="checkbox" id={genre} name="genres" value={genre} />
				</div>
			{/each}
		</fieldset>

		<input type="search" id="song-search" name="song-search" />
	</form>

	<Song />
</main>

<style>
	main {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
		font-size: 4rem;
	}
</style>
