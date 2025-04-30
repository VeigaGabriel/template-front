import { ThemeColorsType } from '@/types/theme.type';
import { darkTheme } from '@/utils/defaultThemes';
import { create } from 'zustand';

type State = {
  theme: ThemeColorsType;
  setTheme: (newColor: ThemeColorsType) => void;
  resetTheme: () => void;
};

export const useThemeStore = create<State>((set) => ({
  theme: { ...darkTheme },
  setTheme: (newTheme: ThemeColorsType) => set({ theme: newTheme }),
  resetTheme: () => set({ theme: darkTheme }),
}));
