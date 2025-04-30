import Base from '@/layouts/base.layout';
import About from '@/pages/about.page';
import { FunctionComponent } from '@/types/react.type';
import { ROUTES } from '@/utils/constants';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const AboutRoute = createRoute({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: ROUTES.ABOUT,
  component: (): FunctionComponent => (
    <Base>
      <About />
    </Base>
  ),
});
