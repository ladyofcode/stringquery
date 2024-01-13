<script>
	export let title, artist;

	import { browser } from '$app/environment';

	import { extract } from '@extractus/oembed-extractor';
	

	
</script>


<div class="glass">
	
	<h3>{title}</h3>
	<p>{artist}</p>


	<div>
		<button>YouTube</button>
		<button>UG Tabs</button>
	</div>
</div>
