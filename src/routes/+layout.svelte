<script>
  // Import Tailwind global CSS
  import "../app.css";

  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <style>
    /* Immediate fallback styles so the page reflects changes while Tailwind rebuilds */
    body { background-color: #fef08a; }
    a { color: #dc2626; }
  </style>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
