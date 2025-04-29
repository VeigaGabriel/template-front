import { ShowAllColors } from '@/components';
import ThemeConfigPage from '@/pages/theme-config';
// import { useThemeStore } from '@/stores/useThemeStore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/themeConfig')({
  component: ThemeConfig,
});

function ThemeConfig() {
  return (
    <div
      className="flex flex-col items-center w-screen h-screen"
      // style={{ backgroundColor: theme.background }}
    >
      {/* <ShowAllColors /> */}
      <ThemeConfigPage />
    </div>
  );
}
