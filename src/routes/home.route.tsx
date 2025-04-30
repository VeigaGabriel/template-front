import Base from '@/layouts/base.layout';
import Home from '@/pages/home.page';
import { FunctionComponent } from '@/types/react.type';
import { ROUTES } from '@/utils/constants';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const HomeRoute = createRoute({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: ROUTES.HOME,
  component: (): FunctionComponent => <Home />,
});
