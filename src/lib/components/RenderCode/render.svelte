<script>
  import { createHighlighter } from 'shiki';
  import { tick } from 'svelte';
  import {theme} from '@sierra-95/svelte-ui';
  import './shiki.css';

  const {
    code = '',
    lang = 'javascript',
  } = $props();

  let _theme = '';
  let html = $state('Loading...');
  let copied = $state(false);

  async function setupHighlighter() {
    if ($theme === 'light') {
      _theme = 'github-light';
    } else {
      _theme = 'github-dark';
    }
    const highlighter = await createHighlighter({
      themes: [_theme],
      langs: [lang]
    });

    html = highlighter.codeToHtml(code, {
      lang,
      theme: _theme
    });
  }
  $effect(() => {
    if ($theme) {
      setupHighlighter();
    }
	});

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    await tick();
    setTimeout(() => copied = false, 2000);
  }
</script>
<main>
  <div style="background-color: var(--shiki-bg);" class="w-full flex justify-between items-center p-2 rounded-t-xl">
    <span class="text-[#475569]">{lang}</span>
    <button onclick={copyCode} class="cursor-pointer">
      {copied ? 'Copied' : 'Copy'}
    </button>
  </div>
  {@html html}
</main>
