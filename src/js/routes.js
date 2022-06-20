import HomePage from '../pages/home.svelte';
import Player from '../pages/player.svelte';
import SearchPage from '../pages/search.svelte';
import NotFoundPage from '../pages/404.svelte';
import MoviePage from '../pages/movie-page.svelte'
import RequestMovie from '../pages/req-movie.svelte'
import FilterPage from '../pages/filter.svelte'
var routes = [

  {
    path: '/movie/:id',
    component: MoviePage,
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/request/',
    component: RequestMovie,
  },
  {
    path: '/player/:id',
    component: Player,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '/filter/',
    component: FilterPage,
  },

  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function ({ router, to, resolve }) {
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = to.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           component: RequestAndLoad,
  //         },
  //         {
  //           props: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   },
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
