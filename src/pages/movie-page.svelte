<script>
    import { Page,  Card, Navbar,CardHeader, CardContent, CardFooter, Link, List, ListItem } from 'framework7-svelte';
    export let f7router;
    export let f7route;
    const movieId = f7route.params.id;

  </script>
<Page>
  <Navbar title="Movie" />

<Card card-opened>
    <CardContent padding={false}>
      <div class="bg-color-yellow" style="height: 300px">
        <CardHeader textColor="black" class="display-block">
          Movie Name {movieId}
          <br/>
          <small style="opacity: 0.7">A little bit of comment</small>
        </CardHeader>
        <Link onClick={() => f7router.back()} cardClose color="black" class="card-opened-fade-in" style="position: absolute; right: 15px; top: 15px" iconF7="xmark_circle_fill" />
      </div>
      <div class="card-content-padding">
        <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).</p>
        <p>The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your imagination or offer ways of any solutions somehow. Framework7 gives you freedom!</p>
        <p>Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to bring the best experience and simplicity.</p>
        <p>Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova or Capacitor) or web app that looks like and feels as great native iOS or Android (Material) apps.</p>
      </div>
    </CardContent>
  </Card>
</Page>