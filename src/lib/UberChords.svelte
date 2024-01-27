<script>
	import { onMount, onDestroy } from 'svelte';

	export let chords;

	$: currentChords = chords;

	// let container;

	// onMount(() => {
	// 	container = document.querySelector('iframe');
	// 	container.style.display = 'block';
	// });

	// onDestroy(() => {
	// 	container.style.display = 'none';
	// });
</script>

<svelte:head>
	<script>
		!(function (e, r, d) {
			var t,
				c = e.getElementsByTagName(r)[0];
			e.getElementById(d) ||
				((t = e.createElement(r)),
				(t.id = d),
				(t.src = '//static.uberchord.com/uberchord-embed-sdk.js'),
				c.parentNode.insertBefore(t, c));
		})(document, 'script', 'uberchord-jssdk');
	</script>
</svelte:head>

{#key currentChords}
    <iframe class="uberchord-chords" src="https://api.uberchord.com/v1/embed/chords?names={currentChords}#noicon" title="chords" frameborder="0"></iframe>
{/key}

<style>
	.uberchord-chords {
        width: 100%;
        max-width: 90%;
		padding-top: 1.2rem;
		padding-left: 1.2rem;
		height: 100%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: start;
		margin-bottom: 1.6em;
		border-radius: 0.4rem;
	}
</style>
