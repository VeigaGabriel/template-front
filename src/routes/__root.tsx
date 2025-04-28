import { Base, Header } from '@/components'
import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
     <Base>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
     </Base>
  ),
})
