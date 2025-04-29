import { ShowAllColors } from '@/components';
import { CircularBarsSpinnerLoader } from '@/cuicui/common-ui/loaders/spinner-loader/circular-bars-spinner-loader';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/ui/button';

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div
      className=" h-screen"
      style={{ color: theme.primary }}
    >
      <h1>Custom Template</h1>

      <CircularBarsSpinnerLoader />
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      <div className="absolute bottom-0 right-0 flex justify-end transform scale-80 origin-bottom-right">
        <ShowAllColors />
      </div>
    </div>
  );
}
