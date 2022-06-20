<script>
  import {
    Page,
    Card,
    Navbar,
    CardHeader,
    Button,
    CardContent,
    Link,
    Preloader,
    CardFooter,
    Block,
    BlockTitle,
    f7,
    Chip,
    Icon,
  } from "framework7-svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let f7router;
  export let f7route;
  // const movieId = f7route.params.id;
  let movie = [];
  let genere = [];
  let isLoading = true;

  onMount(async () => {
    console.log(f7route.params.id)
    f7.preloader.show();
    const res = await axios.get(
      "http://localhost:8000/movies/movies/" + f7route.params.id
    );
    isLoading = false;
    f7.preloader.hide();
    movie = res.data;
    genere = res.data.genres;
    console.log(genere);
  });
</script>

<Page>
  <Navbar title={movie.title} />
  <Card card-opened>
    <CardContent padding={false}>
      <div
        class="bg-color-yellow"
        style="background-image: url('https://image.tmdb.org/t/p/w500{movie.poster_path}'); no-repeat center top; background-size: 100%; 100%; height: 300px;"
      >
        <Link
          onClick={() => f7router.back()}
          cardClose
          color="black"
          class="card-opened-fade-in"
          style="position: absolute; right: 15px; top: 15px"
          iconF7="xmark_circle_fill"
        />
      </div>

      {#if genere.length}
        <BlockTitle class="text-align-center">
          {#each genere as gen (gen)}
            <Chip outline text={gen.name} color="blue" />
          {/each}
        </BlockTitle>
      {/if}

      <BlockTitle class="text-align-center">
        Release Date: {movie.release_date}
      </BlockTitle>

      {#if movie.overview}
        <div class="card-content-padding">
          <Block strong><p>{movie.overview}</p></Block>
        </div>
      {/if}
    </CardContent>
    <i class="icon demo-list-icon" />
    <CardFooter>
      <Link onClick={() => f7router.navigate(`/player/${movie.pk}`)}>
        <Button iconF7="videocam" iconSize="18" small fill>Watch</Button>
      </Link>
      <Button iconF7="download_circle" iconSize="18" small fill
        >Download
      </Button>
    </CardFooter>
  </Card>
</Page>
