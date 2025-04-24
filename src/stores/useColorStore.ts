import { create } from 'zustand'

type State = {
  color: string;
  setColor: (newColor: string) => void;
}

export const useColorStore = create<State>((set) => ({
  color: "",
  setColor: (newColor: string) => set({ color: newColor }),
}))
