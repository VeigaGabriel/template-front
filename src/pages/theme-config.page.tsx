import ChangeColor from '@/components/ChangeColor/change-color';

export default function ThemeConfigPage() {
  return (
    <section>
      <div>
        <h1>Theme Config</h1>
        <p>Theme Config</p>
        <button>Save Changes</button>

        <ChangeColor />
        {/* <ShowAllColors /> */}
      </div>
    </section>
  );
}
