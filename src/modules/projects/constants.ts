export type Project = {
  title: string;
  sourceCode: string;
  site: string;
  previews: string[];
};

const projects: Project[] = [
  {
    title: 'pokedex',
    sourceCode: 'https://github.com/devtsp/pokedex-client',
    site: 'https://pokedex-client-psi.vercel.app/',
    previews: ['/img/project%20previews/pokedex/1.jpg'],
  },
  {
    title: 'logic game',
    sourceCode: 'https://github.com/devtsp/memotest-client',
    site: 'https://memotest-client.vercel.app/',
    previews: [
      '/img/project%20previews/memotest/1.jpg',
      '/img/project%20previews/memotest/2.jpg',
      '/img/project%20previews/memotest/3.jpg',
    ],
  },
];

export default projects;
