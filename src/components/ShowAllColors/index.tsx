import { useThemeStore } from '@/stores/useThemeStore';

export default function ShowAllColors() {
  const { theme } = useThemeStore();
  const themeKeys = Object.keys(theme) as Array<keyof typeof theme>;

  return (
    <section
      className="flex flex-wrap justify-center gap-8 w-screen md:w-5/6 lg:w-3/4 xl:w-1/2 rounded-4xl"
      style={{ backgroundColor: theme.card }}
    >
      {themeKeys.map((key) => (
        <div
          key={key}
          className="h-20 w-20 flex flex-col items-center"
        >
          <small style={{ color: theme.foreground }}>{key}</small>
          {/* <h3 className='text-white'>{theme[key]}</h3> */}
          <div
            style={{ backgroundColor: theme[key as keyof typeof theme] }}
            className="w-20 h-20 border-white border-2 rounded-md"
          />
        </div>
      ))}
    </section>
  );
}
