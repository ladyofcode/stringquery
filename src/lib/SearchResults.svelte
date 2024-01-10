<script>
	export let filteredChords;
	
	import songs from './songs.json';

	import Song from '$lib/Song.svelte';

	const chordList = filteredChords.map((chord) => chord.value);
	
	console.log("chords ", chordList)
	
</script>

<form action="">
	<input type="search" id="song-search" name="song-search" />
</form>

{#each songs as {name, chords}}
	<Song title={name} artist={chords}/>
{/each}
