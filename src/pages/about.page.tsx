import { IconCloud } from '@/components/magicui/icon-cloud';
import { FunctionComponent } from '@/types/react.type';
import { cn } from '@/utils/tailwind';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'vite',
  'zod',
  'git',
  'github',
  'gitlab',
  'prettier',
  'eslint',
  'postgresql',
  'docker',
  'tailwindcss',

  // 'nodedotjs',
  // 'express',
  // 'prisma',
  // 'amazonaws',
  // 'firebase',
  // 'testinglibrary',
  // 'jest',
  // 'cypress',
];

const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

export default function AboutPage(): FunctionComponent {
  return (
    <section className="flex flex-col items-center justify-around h-screen">
      <div className={cn(['flex gap-10 justify-center'])}>
        <img
          width={320}
          height={320}
          className={cn(['rounded-full'])}
          src="https://avatars.githubusercontent.com/u/95875013?v=4"
          alt="Foto do desenvolvedor Gabriel Veiga"
        />
        <div className="h-[320px]">
          <IconCloud images={images} />
        </div>
        <img
          width={320}
          height={320}
          className={cn(['rounded-full'])}
          src="https://avatars.githubusercontent.com/u/88905819?v=4"
          alt="Foto do desenvolvedor Nathan Nunes"
        />
      </div>
      <h1 className="text-2xl text-center w-1/2 font-semibold">
        Estamos desenvolvendo, em parceria, um template moderno e flexível pensado para facilitar o
        início de novos projetos. Nosso foco é criar uma base sólida, com boas práticas de código,
        design responsivo e componentes reutilizáveis — ideal para quem quer agilidade sem abrir mão
        da qualidade. A ideia é começar com estrutura, estilo e performance desde o primeiro commit.
      </h1>
    </section>
  );
}
