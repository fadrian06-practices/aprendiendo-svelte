<script>
  export let userName = 'unknown';
  export let name;
  export let initialIsFollowing;

  let isFollowing = initialIsFollowing;

  const formattedUserName = userName.startsWith('@')
    ? userName
    : `@${userName}`;

  $: text = isFollowing ? 'Following' : 'Follow';

  $: buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    isFollowing = !isFollowing;
  };
</script>

<article class="tw-followCard">
  <header class="tw-followCard-header">
    <img
      class="tw-followCard-avatar"
      src={`https://unavatar.io/${userName}`}
      alt={`El avatar de ${userName}`}
    />
    <div class="tw-followCard-info">
      <strong>{name}</strong>
      <span class="tw-followCard-username">{formattedUserName}</span>
    </div>
  </header>
  <aside>
    <button on:click={handleClick} class={buttonClassName}>
      <span class="tw-followCard-text">{text}</span>
      <span class="tw-followCard-stopFollow">Unfollow</span>
    </button>
  </aside>
</article>
