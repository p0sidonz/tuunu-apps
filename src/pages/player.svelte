<script>
  import { Page, Navbar, Block, BlockTitle, f7 } from "framework7-svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let movie = [];
  export let f7router;
  export let f7route;

  onMount(async () => {
    f7.preloader.show();
    const res = await axios.get(
      "http://localhost:8000/movies/movies/" + f7route.params.id
    );
    f7.preloader.hide();
    movie = res.data;
  });
</script>

<Page>
  <Navbar title={movie.title} backLink="Back" />
  {#if !movie.length}
    <Block strong>
      <iframe
        title="Watch movie"
        src="https://streamtape.com/e/{movie.linkid}/"
        width="300"
        height="200"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        scrolling="no "
        frameborder="0"
      />
    </Block>
  {:else}
    <p>Please restart the app.</p>
  {/if}
</Page>
