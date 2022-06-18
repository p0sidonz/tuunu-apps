<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    Block,
    BlockTitle,
    Row,
    Col,
    Button,
    CardContent,
    Card,
    SwiperSlide,
    Swiper,
    NavRight,
    Searchbar,
    ListItem,
    List,
    Icon,
  } from "framework7-svelte";

  import axios from "axios";
  import { onMount } from "svelte";

  let movies = [
    // {
    //   name: "Titanic",
    //   photo:
    //     "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    // },
    // {
    //   name: "Titanic",
    //   photo:
    //     "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    // },
    // {
    //   name: "Titanic",
    //   photo:
    //     "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    // },
    // {
    //   name: "Titanic",
    //   photo:
    //     "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    // },
  ];

  onMount(async () => {
    const res = await axios.get("http://127.0.0.1:8000/movies/movies/");
    movies = res.data.results;
    next = res.data.next;
    console.log(res);
  });

  // // Router component will receive f7router prop with current Router instance
  export let f7router;
  // Router component will receive f7route prop with current route data
  export let f7route;

  let allowInfinite = true;
  let showPreloader = true;
  let next;

  async function loadMore() {
    if (!allowInfinite) return;
    allowInfinite = false;

    if (!next) {
      allowInfinite = false;
      return;
    }
    const res = await axios.get(next);
    movies = [...movies, ...res.data.results];
    next = res.data.next;

    allowInfinite = true;
  }
</script>

<Page
  name="home"
  infinite
  infiniteDistance={50}
  infinitePreloader={showPreloader}
  onInfinite={loadMore}
>
  <!-- Top Navbar -->
  <Navbar sliding={true}>
    <NavLeft>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </NavLeft>
    <NavTitle sliding>Watchmovies</NavTitle>

    <NavRight>
      <Link
        onClick={() => f7router.navigate("/settings/")}
        searchbarEnable=".searchbar-demo"
        iconIos="f7:search"
        iconAurora="f7:search"
        iconMd="material:search"
      />
    </NavRight>
  </Navbar>

  <!-- <BlockTitle>Trending movies</BlockTitle> -->
  <!-- <Swiper navigation speed={500} slidesPerView={3} spaceBetween={20}>
    <SwiperSlide>
      <img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide
      ><img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide
      ><img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide
      ><img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide
      ><img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide
      ><img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
  </Swiper> -->

  <Block />

  <BlockTitle>Lastest movies</BlockTitle>
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
            <Link onClick={() => f7router.navigate(`movie/${movie.pk}`)}>
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
        <p>Something is strange...</p>
      {/if}
    </Row>
  </div>
  <!-- 
  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About" />
    <ListItem link="/form/" title="Form" />
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen"
          >Login Screen</Button
        >
      </Col>
    </Row>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
    </Row>
  </Block>

  <List>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List> -->
</Page>

<style>
  .head-font {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    height: 20px;
    width: 100px;
    padding-top: 4px;
    font-size: xx-small;
    color: rgb(255, 255, 255);
    text-shadow: #000000;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

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
