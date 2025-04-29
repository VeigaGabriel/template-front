import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/ui/sidebar';

export function SidebarComponent() {
  return (
    <Sidebar side="left">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
