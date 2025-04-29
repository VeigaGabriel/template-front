import { useThemeStore } from '@/stores/useThemeStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Separator } from '@/ui/separator';
import { SidebarTrigger } from '@/ui/sidebar';
import { cn } from '@/utils/tailwind';
import { Link } from '@tanstack/react-router';
import { link } from 'fs';

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
        className={cn(['flex', 'h-18', 'items-center', 'justify-end', 'gap-2', 'p-4'])}
        style={{ backgroundColor: theme.card }}
      >
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {routesList.map(({ link, name }, index) => (
          <div
            className="flex flex-row h-full items-center gap-2"
            key={link}
          >
            {index === 0 && (
              <Separator
                className="my-4"
                orientation="vertical"
                style={{ backgroundColor: theme.primary }}
              />
            )}
            <Link
              className="font-bold text-md"
              to={link}
              style={{ color: theme.primary }}
            >
              {name}
            </Link>
            <Separator
              className="my-4"
              orientation="vertical"
              style={{ backgroundColor: theme.primary }}
            />
          </div>
        ))}
        <SidebarTrigger />
      </div>
      <Separator style={{ backgroundColor: theme.primary }} />
    </>
  );
}
