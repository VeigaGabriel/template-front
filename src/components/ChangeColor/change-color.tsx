import { useThemeStore } from '@/stores/useThemeStore';
import { ArcColorPicker } from '@/ui/arc-color-picker';
import { Button } from '@/ui/button';
import { darkTheme } from '@/utils/defaultThemes';
import { useState } from 'react';

const COLOR_KEYS = Object.keys(darkTheme);

export default function ChangeColor() {
  const [selectedColor, setSelectedColor] = useState('hsla(0, 100%, 50%, 1)');
  const [grainIntensity, setGrainIntensity] = useState(0);

  const { theme, setTheme } = useThemeStore();
  const [selectedThemeKey, setSelectedThemeKey] = useState<string>('');

  const handleThemeChange = () => {
    setSelectedThemeKey(selectedThemeKey);
    setSelectedColor(selectedColor);
    const newTheme = { ...theme, [selectedThemeKey]: selectedColor };
    setTheme(newTheme);
  };

  return (
    <div>
      <ArcColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        grainIntensity={grainIntensity}
        setGrainIntensity={setGrainIntensity}
      />
      <Button
        style={{ backgroundColor: selectedColor }}
        onClick={handleThemeChange}
      >
        APLICAR
      </Button>
      <h1 className="text-color-white">{`CHAVE SELECIONADA: ${selectedThemeKey}`}</h1>
      <div
        style={{ backgroundColor: theme.card }}
        className="flex flex-wrap flex-col gap-2 h-63 w-110 p-5 rounded-3xl"
      >
        {COLOR_KEYS.map((key) => (
          <Button
            key={key}
            className="w-32"
            style={{
              backgroundColor: darkTheme[key as keyof typeof darkTheme],
              borderColor: 'red',
              color: '',
              borderWidth: selectedThemeKey === key ? 2 : 0,
            }}
            onClick={() => setSelectedThemeKey(key as string)}
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
}
