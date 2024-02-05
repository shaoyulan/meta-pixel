
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/today.vue';
import FormPage from '../pages/category.vue';
import Setting from '../pages/setting.vue';


import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    async: function ({ router, to, resolve }) {

      const params = new URLSearchParams(location.search)
      const component = params.has('privacy') ? Privacy : HomePage

      resolve(
        {
          component: component,
        },
        {
          props: {
            singlePageMode: true,
          }
        }
      );
    }
  },
  {
    path: '/today/',
    component: AboutPage,
  },
  {
    path: '/category/',
    component: FormPage,
  },
  {
    path: '/setting/',
    component: Setting,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
