<script>
	import Song from '../lib/Song.svelte';
	import '../app.css';
</script>

<main>
	<h1>String Query</h1>

	<div>
		<button>Import</button>
		<button>Export</button>
	</div>

	<form action="">
		<label for="chords">Add chords</label>
		<input type="search" id="chords" name="chords" />
		<p>Added chords:</p>
		<!--Add pillboxes with a minus sign to show they can be deleted-->

		<fieldset>
			<legend>Genres</legend>
			<div>
				<label for="rock">Rock</label>
				<input type="checkbox" value="rock" id="rock" name="genres" />
			</div>

			<div><label for="">Alternative</label><input type="checkbox" /></div>
			<div><label for="">Pop</label><input type="checkbox" /></div>
			<div><label for="">Punk</label><input type="checkbox" /></div>
			<div><label for="">Soul</label><input type="checkbox" /></div>
			<div><label for="">Reggae</label><input type="checkbox" /></div>
			<div><label for="">Electronica</label><input type="checkbox" /></div>
			<div><label for="">Dance</label><input type="checkbox" /></div>
			<div><label for="">Metal</label><input type="checkbox" /></div>
			<div><label for="">Classic rock</label><input type="checkbox" /></div>
			<div><label for="">Country</label><input type="checkbox" /></div>
			<div><label for="">Britpop</label><input type="checkbox" /></div>
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
