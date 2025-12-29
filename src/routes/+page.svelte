<script lang="ts">
  import {RenderCode} from '$lib'; 
</script>

<main class="space-y-4">
  <title>Getting Started</title>
  <h3>
    <strong>@sierra-95/svelte-scaffold</strong> is a component library built for the Svelte ecosystem.  
    It offers expressive, accessible, and flexible components to accelerate your Svelte projects.
  </h3>
  <h3>
    To get started, install the package via npm:
  </h3>
  <RenderCode
    lang="bash"
    code={`
    npm i @sierra-95/svelte-scaffold    
  `}/>

  <h3>Add this in your <strong>app.html</strong></h3>
  <RenderCode
      lang="html"
      code={`
      <\script
        src="https://kit.fontawesome.com/b63be7ac2d.js"
        crossorigin="anonymous"
      ></script>
  `}/>
  <h3>Add this in your <strong>app.css</strong></h3>
  <RenderCode
      lang="css"
      code={`
      @import '@sierra-95/svelte-scaffold/global.css';
  `}/>
  <h3>And thats it!</h3>
  <h2>Usage Example</h2>
  <h3>After installation, import any component you want to use. For example, to add a button:</h3>
  <RenderCode
    lang="svelte"
    code={`
    <\script>
      import { Button } from '@sierra-95/svelte-scaffold';
    <\/script>

    <Button onclick={() => alert('Button clicked!')}>
      Click Me
    </Button>
  `}/>
</main>

