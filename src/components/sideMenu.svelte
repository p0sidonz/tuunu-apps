<script>
    import {
        Page,
        Navbar,
        List,
        ListItem,
        Icon,
        f7ready,
    } from "framework7-svelte";
    import { onMount } from "svelte";
    import { Share } from "@capacitor/share";
    // Router component will receive f7router prop with current Router instance
    let f7router;

    onMount(() => {
        f7ready((f7) => {
            console.log(f7.views.main.router.url);
            f7router = f7.views.main.router;
        });
    });

    let selected = "";
    let selectedMedia = "";
</script>

<Page>
    <Navbar title="Menu" />
    <List menuList>
        <ListItem
            link
            title="Home"
            selected={selectedMedia === "home"}
            onClick={() => ((selectedMedia = "home"), f7router.navigate("/"))}
        >
            <span slot="media">
                <Icon
                    md="material:home"
                    aurora="f7:house_fill"
                    ios="f7:house_fill"
                />
            </span>
        </ListItem>
        <ListItem
            link
            title="Filters"
            selected={selectedMedia === "catalog"}
            onClick={() => (
                (selectedMedia = "catalog"), f7router.navigate("/filter/")
            )}
        >
            <span slot="media">
                <Icon
                    md="material:filter_list"
                    aurora="f7:filter_list"
                    ios="f7:filter_list"
                />
            </span>
        </ListItem>

        <ListItem
            link
            title="Share"
            onClick={async () => {
                await Share.share({
                    title: "Watch Free Movies",
                    text: "Really awesome movie app for Free, Watch all the latest movies!",
                    url: "http://xyz.com/",
                    dialogTitle: "Share with buddies",
                });
            }}
        >
            <span slot="media">
                <Icon md="material:share" aurora="f7:share" ios="f7:share" />
            </span>
        </ListItem>

        <ListItem
            link
            title="Request"
            selected={selectedMedia === "request"}
            onClick={() => (
                (selectedMedia = "request"), f7router.navigate("/request/")
            )}
        >
        </ListItem>
    </List>
</Page>
