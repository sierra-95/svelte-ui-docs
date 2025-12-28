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

  let expanded = $state(false);
  const PREVIEW_LINES = 5;

  let fullHtml = '';
  let previewHtml = '';


  async function setupHighlighter() {
    _theme = $theme === 'light' ? 'github-light' : 'github-dark';

    const highlighter = await createHighlighter({
      themes: [_theme],
      langs: [lang]
    });

    fullHtml = highlighter.codeToHtml(code, {
      lang,
      theme: _theme
    });

    const previewCode = code
      .split('\n')
      .slice(0, PREVIEW_LINES)
      .join('\n');

    previewHtml = highlighter.codeToHtml(previewCode, {
      lang,
      theme: _theme
    });

    html = expanded ? fullHtml : previewHtml;
  }

  $effect(() => {
    if ($theme) {
      setupHighlighter();
    }
    html = expanded ? fullHtml : previewHtml;
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
    <div class="flex gap-5">  
      <button onclick={() => { expanded = !expanded; }}>
        {expanded ? 'Collapse' : 'Expand Code'}
      </button>
      <button onclick={copyCode}>
        {copied ? 'Copied' : 'Copy'}
      </button>
  </div>
  </div>
  {@html html}
</main>
