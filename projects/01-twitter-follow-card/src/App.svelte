<script>
  import './App.css';
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
    <TwitterFollowCard {userName} {name} initialIsFollowing={isFollowing} />
  {/each}
</section>
