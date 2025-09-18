<script>
	let commands = [
		`git init
git add .
git commit -m "Initial commit"`,

		`git checkout -b new-feature
git push -u origin new-feature`,

		`git status
git log --oneline`
	];

	let copied = Array(commands.length).fill(false);

	async function copy(text, index) {
		try {
			await navigator.clipboard.writeText(text);
			copied[index] = true;
			setTimeout(() => copied[index] = false, 1500);
		} catch (err) {
			console.error(err);
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

	{#each commands as cmd, i}
	<section class="mt-6">
		<div class="flex items-start justify-between bg-white rounded shadow">
			<pre class="p-3 m-0 overflow-x-auto flex-1">
<code>{cmd}</code>
			</pre>
			<button 
				class="btn btn-primary m-3 shrink-0" 
				on:click={() => copy(cmd, i)}
				aria-live="polite"
			>
				{#if copied[i]}
					Copied!
				{:else}
					Copy
				{/if}
			</button>
		</div>
	</section>
{/each}

</main>
