import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';
import type { FunctionComponent } from './types/react.type';
import { TanStackRouterDevelopmentTools } from './utils/development-tools';
import { queryClient } from './utils/query-client';

const App = (): FunctionComponent => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.VITE_ENABLE_DEV_TOOLS === 'true' && (
        <>
          <TanStackRouterDevelopmentTools
            router={router}
            initialIsOpen={false}
            position="bottom-right"
          />
          <ReactQueryDevtools
            initialIsOpen={false}
            position="bottom"
            buttonPosition="bottom-left"
          />
        </>
      )}
    </QueryClientProvider>
  );
};

export default App;
