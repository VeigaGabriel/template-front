import { SidebarComponent } from '@/components/Sidebar';
import { useThemeStore } from '@/stores/useThemeStore';
import { Sidebar, SidebarProvider } from '@/ui/sidebar';

export default function Base({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarComponent />
      <div
        className="flex flex-col w-screen h-screen"
        style={{ backgroundColor: theme.background }}
      >
        {children}
      </div>
    </SidebarProvider>
  );
}
