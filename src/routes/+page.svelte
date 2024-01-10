<script>
	import {
		dndzone,
		overrideItemIdKeyNameBeforeInitialisingDndZones,
		setDebugMode
	} from 'svelte-dnd-action';
	import Svelecte from 'svelecte';
	import Papa from 'papaparse';

	import '../app.css';

	import SearchResults from '$lib/SearchResults.svelte';
	import options from '$lib/chords.js';

	overrideItemIdKeyNameBeforeInitialisingDndZones('value');
	// setDebugMode(true);

	let value;
	let chordSelection = [null];

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

	let genreSelection = [];

	function saveForm(event) {
		event.preventDefault();

		let length =
			chordSelection.length > genreSelection.length ? chordSelection.length : genreSelection.length;

		const data = [];

		// Add headers manually
		data.push(['chords, genres']);

		let row = [];
		for (let i = 0; i < length; i++) {
			row = ['', ''];
			row[0] = chordSelection[i] !== undefined ? JSON.stringify(chordSelection[i]) : '';
			row[1] = genreSelection[i] !== undefined ? genreSelection[i] : '';
			data.push(row);
		}

		const csv = Papa.unparse(data, {
			columns: ['chords, genres'],
			quoteChar: "'"
		});

		const blob = new Blob([csv], { type: 'text/csv' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.setAttribute('href', url);
		a.setAttribute('download', 'stringQuerySettings.csv');
		a.click();
	}

	function loadForm(event) {
		// let fileInput = document.getElementById('importFile');
		// fileInput.click();

		let data;

		Papa.parse(event.target.files[0], {
			quoteChar: "'",
			complete: function (result) {
				data = result.data;

				if (data[0][0] === 'chords, genres') {
					document.getElementById('warning').style.display = 'none';
					parseData(data);
				} else {
					document.getElementById('warning').style.display = 'block';
				}
			}
		});
	}

	function parseData(data) {
		chordSelection = [];
		value = [];
		genreSelection = [];
		data.shift();

		data.forEach((item) => {
			if (item[0] !== '') {
				value.push(JSON.parse(item[0]));
				genreSelection.push(JSON.parse(item[0]));
			}

			if (item[1] !== '') {
				genreSelection.push(item[1]);
			}
		});
	}
</script>

<main>
	<h1>String Query</h1>

	<form action="">
		<div>
			<button id="importButton" on:click={loadForm}>Import</button>
			<input type="file" id="importFile" on:change={loadForm} accept=".csv" />
			<p id="warning">File cannot be loaded. Please choose another.</p>
			<button id="exportButton" type="submit" on:click={saveForm}>Export</button>
		</div>

		<label for="chords">Add chords</label>

		<Svelecte
			{options}
			name="chords"
			bind:value
			valueAsObject
			bind:readSelection={chordSelection}
			multiple
			{dndzone}
			placeholder="Add chords..."
		/>

		<fieldset>
			<legend>Genres</legend>

			{#each genres as genre}
				<div>
					<label for={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</label>
					<input
						type="checkbox"
						bind:group={genreSelection}
						id={genre}
						name="genres"
						value={genre}
					/>
				</div>
			{/each}
		</fieldset>
	</form>

	{#key chordSelection}
		<SearchResults filteredChords={chordSelection} />
	{/key}
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

	#warning {
		display: none;
	}

	/* #importFile {
		display: none;
	} */
</style>
