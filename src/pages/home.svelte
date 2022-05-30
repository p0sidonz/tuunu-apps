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

    // Router component will receive f7router prop with current Router instance
    export let f7router;
  // Router component will receive f7route prop with current route data
  export let f7route;


</script>

<Page name="home">
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
      <Link searchbarEnable=".searchbar-demo" iconIos="f7:search" iconAurora="f7:search" iconMd="material:search"></Link>
    </NavRight>
    <Searchbar
      class="searchbar-demo"
      expandable
      searchContainer=".search-list"
      searchIn=".item-title"
    />

    <List class="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
  </Navbar>

  <BlockTitle>Trending movies</BlockTitle>
  <Swiper navigation speed={500} slidesPerView={3} spaceBetween={20}>
    <SwiperSlide>
      <img
        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
        alt=""
        height="180px"
        width="100px"
        srcset=""
      /></SwiperSlide
    >
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>
    <SwiperSlide><img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
      alt=""
      height="180px"
      width="100px"
      srcset=""
    /></SwiperSlide>

  </Swiper>

  <Block />

  <BlockTitle>Lastest  movies</BlockTitle>
  <div>
    <Row noGap>
      <Col
        resizableAbsolute={true}
        width="33"
        xsmall="33"
        small="33"
        medium="20"
        large="20"
        xlarge="20"
      >
      <Link onClick={() => f7router.navigate('/movie/1')}>
        <Card style="height: 180px; width: 100px; margin-right">
          <CardContent padding={false}>
            <div
              class="bg-color-red"
              style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
            >
            </div>
            <div class="head-font">MOVIE TITLE THEasdsadsadasd UN FOF</div>

          </CardContent>
        </Card>
        </Link>
        </Col
      >

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
</style>
