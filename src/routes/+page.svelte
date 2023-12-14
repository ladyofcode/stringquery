<script>
	import Song from '../lib/Song.svelte';
	import '../app.css';

	import { browser } from '$app/environment';

	const genres = ["rock", "alternative", "pop", "punk", "soul", "reggae", "electronica", "dance", "metal", "classic rock", "country", "britpop"];

	function saveForm(event) {
		event.preventDefault();

		const data = new FormData(event.target);
		const value = Object.fromEntries(data.entries());

		value.genres = data.getAll("genres");

		console.log({ value });
	}

	if (browser) {
		const form = document.querySelector('form');
		form.addEventListener('submit', saveForm);
	}
</script>

<main>
	<h1>String Query</h1>

	<form action="">
		<div>
			<button>Import</button>
			<button type="submit">Export</button>
		</div>

		<label for="chords">Add chords</label>
		<input type="search" id="chords" name="chords" />
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
</style>
