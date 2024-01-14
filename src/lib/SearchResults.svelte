<script>
	export let filteredChords;

	import songs from './songs.json';

	import Song from '$lib/Song/Song.svelte';

	console.log("search results filteredchords: ", filteredChords);

	// const chordList = filteredChords.map((chord) => chord.value);

</script>

<div class="glass">
	<form action="">
		<input type="search" id="song-search" name="song-search" placeholder="Search songs..." />
	</form>
</div>

<div>
	{#each songs as { title, artist, chords }}
		<Song {title} {artist} songId="5ofoB8PFmocBXFBEWVb6Vz" chords="F,Bb,F_maj7" />
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
