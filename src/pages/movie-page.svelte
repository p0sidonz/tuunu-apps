<script>
  import {
    Page,
    Card,
    Navbar,
    CardHeader,
    CardContent,
    CardFooter,
    Link,
    List,
    ListItem,
  } from "framework7-svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  export let f7router;
  export let f7route;
  const movieId = f7route.params.id;
  let movie = [];

  onMount(async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/movies/movies/" + f7route.params.id
    );
    movie = res.data;
    console.log(res);
  });
</script>

<Page>
  <Navbar title="Movie" />

  <Card card-opened>
    <CardContent padding={false}>
      <div
        class="bg-color-yellow"
        style="background-image: url('https://image.tmdb.org/t/p/w500{movie.poster_path}'); no-repeat center top; background-size: 100%; 100%; height: 300px;"
      >
        <CardHeader textColor="black" class="display-block">
          {movie.title}
          <br />
          <small style="opacity: 0.7">A little bit of comment</small>
        </CardHeader>
        <Link
          onClick={() => f7router.back()}
          cardClose
          color="black"
          class="card-opened-fade-in"
          style="position: absolute; right: 15px; top: 15px"
          iconF7="xmark_circle_fill"
        />
      </div>

      <div class="card-content-padding">
        <p>{movie.overview}</p>
      </div>
    </CardContent>
  </Card>
</Page>
