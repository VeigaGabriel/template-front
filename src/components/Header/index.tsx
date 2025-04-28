import { useThemeStore } from '@/stores/useThemeStore';
import { Separator } from '@/ui/separator';
import { cn } from '@/utils/tailwind';
import { Link } from '@tanstack/react-router';

export default function Header() {
  const { theme } = useThemeStore();

  const routesList = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/about',
      name: 'About',
    },
    {
      link: '/themeConfig',
      name: 'Theme Config',
    },
  ];

  return (
    <>
      <div
        className={cn(['flex', 'h-18', 'items-center', 'gap-2'])}
        style={{ backgroundColor: theme.card }}
      >
        {routesList.map(({ link, name }) => (
          <div
            className="flex flex-row h-full items-center gap-2"
            key={link}
          >
            <Link
              to={link}
              style={{ color: theme.primary }}
            >
              {name}
            </Link>
            <Separator
              orientation="vertical"
              style={{ backgroundColor: theme.primary }}
            />
          </div>
        ))}
      </div>
      <Separator style={{ backgroundColor: theme.primary }} />
    </>
  );
}
