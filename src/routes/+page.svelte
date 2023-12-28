<script>
	import Song from '../lib/Song.svelte';
	import '../app.css';

	import { browser } from '$app/environment';

	const chords = [
		'G',
		'Am',
		'C',
		'A',
		'D',
		'E',
		'Bm',
		'Em',
		'G',
		'F',
		'B',
		'F#',
		'F#m',
		'Bm7',
		'D6',
		'Dm',
		'A#',
		'Gm',
		'BG',
		'Bb',
		'D#m',
		'Cm',
		'D#',
		'Eb',
		'Dm7',
		'FAm',
		'Cadd9',
		'Csus2',
		'Em7',
		'Amaj7',
		'B7',
		'G#',
		'E7',
		'Dsus4',
		'D7',
		'G7',
		'A7',
		'D#7',
		'Am7',
		'C#',
		'B5',
		'C7',
		'C#m',
		'Asus4',
		'Esus',
		'D9',
		'Fm',
		'Gsus',
		'F7',
		'F6',
		'D5',
		'G6',
		'Dsus2'
	];

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

	// Chord search
	const chordFocus = () => {
		const chordList = document.getElementById('chordList');
		chordList.style.display = 'block';
	};

	const chordBlur = () => {
		const chordList = document.getElementById('chordList');
		chordList.style.display = 'none';
	};

	if (browser) {
		// const chordList = document.getElementById('chordList');
		// chordList.style.display = "none";
		// const importButton = document.querySelector('#importButton');
		// importButton.addEventListener('click', saveForm);
		const exportButton = document.querySelector('#exportButton');
		exportButton.addEventListener('click', saveForm);

		document.getElementById('chordSearch').addEventListener('input', function (event) {
			const searchTerm = event.target.value.toLowerCase();
			const chordList = document.querySelectorAll('#chordList li');

			chordList.forEach(function (item) {
				const text = item.textContent.toLowerCase();

				if (text.includes(searchTerm)) {
					item.style.display = 'list-item';
				} else {
					item.style.display = 'none';
				}
			});
		});
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
		<input
			on:focus={chordFocus}
			on:blur={chordBlur}
			type="search"
			id="chordSearch"
			name="chordSearch"
			placeholder="Search chords..."
		/>
		<ul id="chordList">
			{#each chords as chord}
				<li>{chord}</li>
			{/each}
		</ul>
		<p>Added chords:</p>
		<!--Add pillboxes with a minus sign to show they can be deleted-->

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

	#chordList {
		display: none;
	}
</style>
