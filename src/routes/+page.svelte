<script>
	import {
		dndzone,
		overrideItemIdKeyNameBeforeInitialisingDndZones,
		setDebugMode
	} from 'svelte-dnd-action';
	import Svelecte from 'svelecte';
	import Papa from 'papaparse';

	import '../app.css';

	import { browser } from '$app/environment';
	import Song from '$lib/Song.svelte';
	import options from '$lib/chords.js';

	overrideItemIdKeyNameBeforeInitialisingDndZones('value');
	setDebugMode(true);

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
		value.chords = data.getAll('chords');
		value.genres = data.getAll('genres');

		let csvRows = [];
		const headers = Object.keys(value);
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

	function loadForm() {
		let fileInput = document.getElementById('importFile');
		fileInput.click();

		Papa.parse(fileInput.files[0], {
			complete: function (result) {
				console.log(result.data);
			}
		});

		// check that the headers are correct; if, not, reject the file
		// output a message that says the file is incorrect and cannot be loaded
	}
</script>

<main>
	<h1>String Query</h1>

	<form action="">
		<div>
			<button id="importButton" on:click={loadForm}>Import</button>
			<input type="file" id="importFile" accept=".csv" />
			<button id="exportButton" type="submit" on:click={saveForm}>Export</button>
		</div>

		<label for="chords">Add chords</label>
		<Svelecte
			name="chords"
			{options}
			multiple
			{dndzone}
			valueAsObject
			placeholder="Add chords..."
		/>
		<fieldset>
			<legend>Genres</legend>

			{#each genres as genre}
				<div>
					<label for={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</label>
					<input type="checkbox" id={genre} name="genres" value={genre} />
				</div>
			{/each}
		</fieldset>
	</form>

	<form action="">
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

	#importFile {
		display: none;
	}
</style>
