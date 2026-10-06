export type Project = {
  title: string;
  sourceCode: string;
  site: string;
};

const projects: Project[] = [
  {
    title: 'pokedex',
    sourceCode: 'https://github.com/devtsp/pokedex-client',
    site: 'https://pokedex-client-psi.vercel.app/',
  },
  {
    title: 'memotest',
    sourceCode: 'https://github.com/devtsp/memotest-client',
    site: 'https://memotest-client.vercel.app/',
  },
  {
    title: 'monochrome detection',
    sourceCode: 'https://github.com/devtsp/monochrome-detection',
    site: 'https://monochrome-detection.vercel.app/',
  },
];

export default projects;
