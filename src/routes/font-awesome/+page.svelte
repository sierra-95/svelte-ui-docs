<script lang="ts">
  import {RenderCode} from '$lib'; 
</script>

<main class="space-y-4">
  <title>Icons</title>
  <h1>Font Awesome Icons</h1>
  <h3><code>@sierra-95/svelte-scaffold</code> uses Font Awesome for icons.</h3>
  <h2>Getting Started</h2>
  <h3>Create an account
    <a href="https://fontawesome.com/" class="note" target="_blank">here</a>
    and follow <a href="https://docs.fontawesome.com/" class="note" target="_blank">these instructions</a>
    to make your own kit and get kit embed code.
  </h3>
  <h3>Add this in your <strong>app.html</strong></h3>
  <RenderCode
      lang="html"
      code={`
      <\script
        src="https://kit.fontawesome.com/YOUR_KIT_CODE.js"
        crossorigin="anonymous"
      ></script>
  `}/>
</main>

