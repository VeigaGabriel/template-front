import { useThemeStore } from '@/stores/useThemeStore';

export default function Base({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex flex-col w-screen h-screen"
      style={{ backgroundColor: theme.background }}
    >
      {children}
    </div>
  );
}
