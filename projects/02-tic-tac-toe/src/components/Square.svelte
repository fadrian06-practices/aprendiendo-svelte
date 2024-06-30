<script>
  export let updateBoard = () => {};
  export let index = undefined;
  export let isSelected = false;

  $: className = `square ${isSelected && 'is-selected'}`;
  const handleClick = () => updateBoard(index);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleClick} class={className}>
  <slot />
</div>
