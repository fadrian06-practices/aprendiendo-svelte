<script>
  import TwitterFollowCard from './components/TwitterFollowCard';

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true,
    },
    {
      userName: 'fadrian06',
      name: 'Franyer Sánchez',
      isFollowing: false,
    },
  ];
</script>

<section class="app">
  {#each users as { userName, name, isFollowing }}
    <TwitterFollowCard {userName} {name} {isFollowing} />
  {/each}
</section>

<style>
  :global(body) {
    margin: 0;
    background: #222;
    font-family: system-ui;
    display: grid;
    place-content: center;
    min-height: 100vh;
  }

  .app {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
