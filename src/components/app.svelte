<script>
  import { onMount } from "svelte";
  import { getDevice } from "framework7/lite-bundle";
  import SideMenu from "./sideMenu.svelte";
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Page,
    Navbar,
    Block,
  } from "framework7-svelte";

  import capacitorApp from "../js/capacitor-app";
  import routes from "../js/routes";
  import store from "../js/store";

  let selected = "home";
  let selectedMedia = "home";

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: "Tunnu", // App name
    theme: "auto", // Automatic theme detection

    id: "io.framework7.myapp", // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  onMount(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  });
</script>

<App {...f7params} autoDarkMode>
  <!-- Left panel with cover effect-->
  <Panel left cover dark>
    <View>
      <SideMenu />
    </View>
  </Panel>

  <!-- Right panel with reveal effect-->
  <Panel left reveal dark>
    <View>
      <Page>
        <Navbar title="Right Panel" />
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <!-- Views/Tabs container -->
  <Views tabs>
    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />
  </Views>
</App>
