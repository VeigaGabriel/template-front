import { ShowAllColors } from '@/components';
import { useThemeStore } from '@/stores/useThemeStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/themeConfig')({
  component: ThemeConfig,
});

function ThemeConfig() {
  const { theme } = useThemeStore();

  return (
    // <div className='flex flex-col items-center w-screen h-screen' style={{ backgroundColor: theme.background }}>
    <ShowAllColors />
    // </div>
  );
}
