<script>
  export let userName = 'unknown';
  export let name;
  export let isFollowing;

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
      src="https://unavatar.io/{userName}"
      alt="El avatar de {userName}"
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

<style>
  .tw-followCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 0.8rem;
  }

  .tw-followCard-header {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tw-followCard-info {
    display: flex;
    flex-direction: column;
  }

  .tw-followCard-username {
    opacity: 60%;
  }

  .tw-followCard-avatar {
    width: 48px;
    height: 48px;
    border-radius: 1000px;
  }

  .tw-followCard-button {
    margin-left: 16px;
    border-radius: 1000px;
    padding: 6px 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 300ms opacity;
    border: 1px solid black;
    min-width: 97px;
  }

  .tw-followCard-button:hover {
    opacity: 80%;
  }

  .tw-followCard-button.is-following {
    border: 1px solid #bbb;
    background: transparent;
    color: white;
    transition:
      background 300ms,
      color 300ms,
      border-color 300ms;
  }

  .tw-followCard-button.is-following:hover {
    background: rgba(255, 0, 0, 17.8%);
    color: red;
    border: 1px solid red;
  }

  .tw-followCard-stopFollow {
    display: none;
  }

  .tw-followCard-button.is-following:hover .tw-followCard-text {
    display: none;
  }

  .tw-followCard-button.is-following:hover .tw-followCard-stopFollow {
    display: block;
  }
</style>
