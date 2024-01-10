<script>
    import Papa from 'papaparse';

    import Song from '$lib/Song.svelte';

    // Papa.parse(event.target.files[0], {
	// 		quoteChar: "'",
	// 		complete: function (result) {
	// 			data = result.data;

	// 			if (data[0][0] === 'chords, genres') {
	// 				document.getElementById('warning').style.display = 'none';
	// 				parseData(data);
	// 			} else {
	// 				document.getElementById('warning').style.display = 'block';
	// 			}
	// 		}
	// 	});
</script>

<form action="">
    <input type="search" id="song-search" name="song-search" />
</form>

<Song />