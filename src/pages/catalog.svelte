<script>
  // Router component will receive f7router prop with current Router instance
  export let f7router;
  // Router component will receive f7route prop with current route data
  export let f7route;

  let filters = ["action", "horror", "thriller", "comedy"];
  let selected = ["action"];

  function selectFilter(value) {
    if (selected.includes(value)) {
      selected = selected.filter((v) => v !== value);
    } else {
      selected = [...selected, value];
    }
  }
  import {
    Page,
    Chip,
    Block,
    BlockTitle,
    Link,
    CardContent,
    Card,
    Panel,
    View,
    Navbar,
    NavLeft,
    NavTitle,
  } from "framework7-svelte";

  import SideMenu from "../components/sideMenu.svelte";
</script>

<Panel left cover dark>
  <View>
    <SideMenu />
  </View>
</Panel>

<Page>
  <Navbar sliding={true}>
    <NavLeft>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="left"
      />
    </NavLeft>
    <NavTitle sliding>Filters</NavTitle>
  </Navbar>

  <BlockTitle>Select your filters from the below:</BlockTitle>
  <Block strong>
    {#each filters as filter (filter)}
      <Chip
        onClick={(e) => selectFilter(filter)}
        text={filter}
        color={selected.includes(filter) ? "blue" : "green"}
      />
    {/each}
  </Block>
  <Link onClick={() => f7router.navigate("/movie/1")}>
    <Card style="height: 180px; width: 100px; margin-right">
      <CardContent padding={false}>
        <div
          class="bg-color-red"
          style=" background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg); no-repeat center top; background-size: 100px 180px; height: 160px;"
        />
        <div class="head-font">MOVIE TITLE THEasdsadsadasd UN FOF</div>
      </CardContent>
    </Card>
  </Link>
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
