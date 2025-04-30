import { InteractiveGrid } from '@/components/interactive-grid';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';
import { cn } from '@/utils/tailwind';
import { Link } from '@tanstack/react-router';

const ROUTES_LIST = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/about',
    name: 'About',
  },
  {
    link: '/theme-config',
    name: 'Theme Config',
  },
];

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex wrap justify-between"
      style={{ color: theme.primary }}
    >
      <InteractiveGrid />

      <TypingAnimation className={cn('mt-[10%] ml-[5%] w-200', 'text-9xl text-gray-300/80')}>
        Welcome to my template!
      </TypingAnimation>

      <div className="z-10 flex flex-col justify-end items-end gap-10 bg-blue-600/0 h-screen pb-[1%] pr-[1%]">
        {ROUTES_LIST.map(({ link, name }, index) => (
          <>
            {index > 0 && <Separator />}

            <Button
              className={cn(['text-right', 'w-2xs h-13'])}
              variant={'link'} //  || link
              key={link}
            >
              <Link
                className="font-bold text-3xl text-end w-full"
                to={link}
                style={{ color: theme.primary }}
              >
                {name}
              </Link>
            </Button>
          </>
        ))}
      </div>
    </div>
  );
}
