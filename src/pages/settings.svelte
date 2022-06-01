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
    List,
    ListItem,
  } from "framework7-svelte";
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
      class="searchbar-demo searchbar data-f7-slot='fixed'"
      expandable
      searchContainer=".search-list"
      searchIn=".item-title"
    />
  </Navbar>
  <List class="searchbar-not-found">
    <ListItem title="Nothing found" />
  </List>
  <List class="search-list searchbar-found">
    <ListItem title="Audi" />
  </List>
</Page>
