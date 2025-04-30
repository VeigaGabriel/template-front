import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { AboutRoute } from './about.route';
import { HomeRoute } from './home.route';
import { ThemeConfigRoute } from './theme-config.route';

const routeTree = rootRoute.addChildren([AboutRoute, HomeRoute, ThemeConfigRoute]);

const router = createRouter({
  routeTree,
  // defaultNotFoundComponent: NotFound,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };
