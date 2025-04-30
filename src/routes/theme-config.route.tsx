import Base from '@/layouts/base.layout';
import ThemeConfigPage from '@/pages/theme-config.page';
import { FunctionComponent } from '@/types/react.type';
import { ROUTES } from '@/utils/constants';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const ThemeConfigRoute = createRoute({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: ROUTES.THEME_CONFIG,
  component: (): FunctionComponent => (
    <Base>
      <ThemeConfigPage />
    </Base>
  ),
});
