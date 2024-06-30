<script>
  import { onDestroy } from 'svelte';

  let enabled = false;
  let position = { x: 0, y: 0 };

  const handleMove = ({ clientX, clientY }) => {
    position = { x: clientX, y: clientY };
  };

  $: document.body.classList.toggle('no-cursor', enabled);

  $: if (enabled) {
    window.addEventListener('pointermove', handleMove);
  }

  onDestroy(() => {
    document.body.classList.remove('no-cursor');
    window.removeEventListener('pointermove', handleMove);
  });
</script>

<div
  style:transform="translate({position.x}px, {position.y}px)"
  style:display={enabled ? 'initial' : 'none'}
></div>
<button on:click={() => (enabled = !enabled)}>
  {enabled ? 'Desactivar' : 'Activar'} seguir puntero
</button>

<style>
  div {
    position: fixed;
    background-color: rgba(0, 0, 0, 50%);
    border: 3px solid white;
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none;
    left: -20px;
    top: -20px;
    width: 40px;
    height: 40px;
  }
</style>
