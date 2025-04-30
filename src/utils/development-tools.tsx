import React from 'react';

export const ReactHookFormDevelopmentTools = import.meta.env.PROD
  ? (): null => null
  : React.lazy(() =>
      import('@hookform/devtools').then((result) => ({
        default: result.DevTool,
      })),
    );

export const TanStackRouterDevelopmentTools = import.meta.env.PROD
  ? (): null => null
  : React.lazy(() =>
      import('@tanstack/router-devtools').then((response) => ({
        default: response.TanStackRouterDevtools,
      })),
    );

export const TanStackTableDevelopmentTools = import.meta.env.PROD
  ? (): null => null
  : React.lazy(() =>
      import('@tanstack/react-table-devtools').then((result) => ({
        // eslint-disable next-line @typescript-eslint/no-unsafe-member-access, no-unsafe-assignment
        default: result.ReactTableDevtools,
      })),
    );
