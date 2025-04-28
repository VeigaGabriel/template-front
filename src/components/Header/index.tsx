import { useThemeStore } from '@/stores/useThemeStore';
import { Separator } from '@/ui/separator'
import { cn } from '@/utils/tailwind';
import {  Link  } from '@tanstack/react-router'
import { link } from 'fs';

export default function Header() {
  const { theme } = useThemeStore();
  console.log(theme.chart1);

  const routesList = [{
    link: '/',
    name: 'Home',
  }, {
    link: '/about',
    name: 'About',
  }, {
    link: '/themeConfig',
    name: 'Theme Config',
  }]

  return (
    <>
      <div 
      className={cn(['flex', 'h-18', 'items-center', 'gap-2'])} 
      style={{ backgroundColor: theme.popover }}
      >
        {
          routesList.map(({link, name}) => (
            <>
            <Link
              key={link} 
              to={link} 
              style={{ color: theme.popoverForeground }}
              >
              {name}
            </Link>
            <Separator orientation="vertical" />
              </>
          ))
        }
      </div>
    <Separator  />
  </>
  )
}
