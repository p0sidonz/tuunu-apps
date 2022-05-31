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

    // Router component will receive f7router prop with current Router instance
    let f7router;

    onMount(() => {
        f7ready((f7) => {
            console.log(f7.views.main.router.url);
            f7router = f7.views.main.router;
        });
    });

    let selected = "home";
    let selectedMedia = "home";
</script>

<Page>
    <Navbar title="Menu" />
    <List menuList>
        <ListItem
            link
            title="Home"
            subtitle="Home subtitle"
            selected={selectedMedia === "home"}
            onClick={() => ((selectedMedia = "home"), f7router.navigate("/"))}
        >
        </ListItem>
        <ListItem
            link
            title="Filters"
            subtitle="Filters subtitle"
            selected={selectedMedia === "catalog"}
            onClick={() => (
                (selectedMedia = "catalog"), f7router.navigate("/catalog/")
            )}
        />
    </List>
</Page>
