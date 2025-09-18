<script>
	import { onMount } from 'svelte';

	let valueToCopy = `git init
git add .
git commit -m "Initial commit"`;

	let copied = false;

	async function copy() {
		try {
			await navigator.clipboard.writeText(valueToCopy);
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch (e) {
			// Fallback for insecure contexts
			const ta = document.createElement('textarea');
			ta.value = valueToCopy;
			document.body.appendChild(ta);
			ta.select();
			try { 
				document.execCommand('copy'); 
				copied = true; 
			} catch (err) { 
				console.error(err); 
			}
			document.body.removeChild(ta);
			setTimeout(() => (copied = false), 1500);
		}
	}
</script>

<main class="bg-yellow-200 min-h-screen p-6">
	<h1>Welcome to Calvin's very boring website</h1>
	<p>
		Visit 
		<a href="https://svelte.dev/docs/kit" class="text-red-600 link">
			svelte.dev/docs/kit
		</a> 
		to read the documentation
	</p>

	<section class="mt-6">
		<label class="block mb-2">Commands to copy</label>
		
		<!-- Display nicely formatted commands -->
		<pre class="bg-white p-3 rounded shadow overflow-x-auto">
			<code>{valueToCopy}</code>
		</pre>

		<!-- Copy button -->
		<button 
			class="btn btn-primary mt-2" 
			on:click={copy} 
			aria-live="polite"
		>
			{#if copied}
				Copied!
			{:else}
				Copy
			{/if}
		</button>
	</section>
</main>
