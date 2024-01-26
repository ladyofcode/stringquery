<script>
	export let filteredChords, filteredGenres;

	import songs from './songs.json';

	import Song from '$lib/Song.svelte';
	import { createSearchStore, searchHandler } from './stores/searchResults';
	import { onDestroy } from 'svelte';

	function checkChords(chords) {
		if (filteredChords.length === 0) {
			return true;
		}
		let chordsArray = chords.split(',');

		return chordsArray.some((item) => filteredChords.includes(item));
	}

	function checkGenres(genres) {
		if (filteredGenres.length === 0) {
			return true;
		}

		let genresArray = genres.split(', ');
		genresArray = genresArray.map((item) => item.toLowerCase());

		return genresArray.some((item) => filteredGenres.includes(item));
	}

	const searchSongs = songs.map((song) => ({
		...song,
		searchTerms: `${song.title} ${song.artist}`
	}));

	const searchStore = createSearchStore(searchSongs);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="glass">
	<form action="">
		<input
			type="search"
			id="song-search"
			name="song-search"
			placeholder="Search songs..."
			bind:value={$searchStore.search}
		/>
	</form>
</div>

<div>
	{#each $searchStore.filtered as { title, artist, chords, genres, id }}
		{#if checkChords(chords)}
			{#if checkGenres(genres)}
				<Song {title} {artist} songId={id} chords={chords} />
			{/if}
		{/if}
	{/each}
</div>

<style>
	form {
		width: 100%;
	}

	input {
		width: 100%;
		padding: 1rem;
		border-radius: 4px;
		border: 0;
	}
</style>
