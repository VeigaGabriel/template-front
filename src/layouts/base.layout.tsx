import Header from '@/components/header';
import { useThemeStore } from '@/stores/useThemeStore';

export default function Base({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex flex-col w-full h-full"
      style={{ backgroundColor: theme.background }}
    >
      <Header />
      {children}
    </div>
  );
}
