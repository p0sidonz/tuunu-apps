<script>
  import {
    theme,
    Page,
    Navbar,
    NavRight,
    NavLeft,
    Link,
    Subnavbar,
    Searchbar,
    Block,
    List,
    ListItem,
    Row,
    Col,
    Card,
    CardContent,
    f7,
  } from "framework7-svelte";
  import axios from "axios";
  import { onMount } from "svelte";

  // // Router component will receive f7router prop with current Router instance
  export let f7router;
  // Router component will receive f7route prop with current route data
  export let f7route;

  let movies = [];

  const search = async (q) => {
    const res = await axios.get("http://localhost:8000/movies/movies/", {
      params: { limit: 30, search: q.target.value },
    });
    movies = res.data.results;
    console.log(movies);
  };
</script>

<Page>
  <Navbar>
    <NavLeft>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </NavLeft>

    <NavRight>
      <Link
        searchbarEnable=".searchbar-demo"
        iconIos="f7:search"
        iconAurora="f7:search"
        iconMd="material:search"
      />
    </NavRight>
    <Searchbar
      onChange={search}
      class="searchbar-demo searchbar data-f7-slot='fixed'"
      expandable
      searchContainer=".search-list"
      searchIn=".item-title"
    />
  </Navbar>
  <div>
    <Row noGap>
      {#if movies.length}
        {#each movies as movie}
          <Col
            resizableAbsolute={true}
            width="33"
            xsmall="33"
            small="33"
            medium="20"
            large="20"
            xlarge="20"
          >
            <Link onClick={() => f7router.navigate(`/movie/${movie.pk}`)}>
              <Card style="height: 180px; width: 100px; margin-right">
                <CardContent padding={false}>
                  <div
                    class="bg-color-red"
                    style="background-image: url('https://image.tmdb.org/t/p/w200{movie.poster_path}'); no-repeat center top; background-size: 100%; 180%; height: 180px;"
                  />
                  {#if movie.release_date}
                    <div class="top-right-image">
                      {new Date(movie.release_date).getFullYear()}
                    </div>
                  {/if}

                  {#if !movie.poster_path}
                    <div class="no-title">No Poster :(</div>
                  {/if}

                  <div class="movie-title">{movie.title}</div>
                </CardContent>
              </Card>
            </Link>
          </Col>
        {/each}
      {:else}
        <Block>Search for any movie title.</Block>
      {/if}
    </Row>
  </div>
</Page>

<style>
  .movie-title {
    background-color: #000000a9;
    width: 100%;
    position: absolute;
    color: rgb(255, 255, 255);
    position: absolute;
    bottom: 0%;
    font-size: 10px;
  }

  .top-right-image {
    background-color: #000000a9;
    border-radius: 0 0 0 5px;
    font-style: oblique;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 0px;
    padding: 0.2rem;
    right: 0px;
    font-size: 10px;
  }

  .no-title {
    border-radius: 0 0 0 5px;
    font-style: oblique;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
