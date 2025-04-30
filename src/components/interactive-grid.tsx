import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern';
import { cn } from '@/utils/tailwind';

export function InteractiveGrid() {
  return (
    <div className="z-1 top-0 absolute h-screen w-screen overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          'mask-t-from-80% mask-t-to-100%',
          'mask-b-from-20% mask-b-to-100%',
          'mask-l-from-90% mask-l-to-100%',
          'mask-r-from-20% mask-r-to-70%',
        )}
        squaresClassName="stroke-gray-400/30"
        width={40}
        height={40}
        squares={[50, 34]}
      />
    </div>
  );
}
