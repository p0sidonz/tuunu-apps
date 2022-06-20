<script>
    let contacts;
    async function getContact() {
        let permission = await Contacts.getPermissions();
        if (permission.granted) {
            await Contacts.getContacts().then((result) => {
                contacts = result.contacts;
            });
        }
    }
    import {
        Page,
        Navbar,
        Block,
        BlockTitle,
        Button,
        List,
        ListItem,
        ListInput,
    } from "framework7-svelte";
    import { Contacts } from "@capacitor-community/contacts";
s


</script>

<Page>
    <Navbar title="Movie Request" backLink="Back" />

    <List noHairlinesMd>
        <ListInput
            required
            validate
            label="Movie Name"
            floatingLabel
            type="text"
            placeholder="Tunnu"
            clearButton
        >
        </ListInput>
    </List>
    <List>
        <ListItem title="Movie Language" smartSelect>
            <select name="English" value="english">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="hindi">Other</option>
            </select>
        </ListItem>
    </List>

    <Block strong>
        <Button fill preloader>Submit</Button>
    </Block>

    <!-- <Block strong>
        <p>Testing permissions</p>
        <Button on:click={getContact}>Load getContacts</Button>

        {#if contacts}
            <List>
                {#each contacts as contact}
                    <ListItem title={contact.displayName} />
                {/each}
            </List>
        {/if}
    </Block> -->
</Page>
