import ProjectCard from './components/ProjectCard';

import styles from './Projects.module.css';

import projects from './constants';

const Projects = () => {
  return (
    <section className={styles.container}>
      Some dumb project I did many years ago (pre AI era)
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <ProjectCard project={project}></ProjectCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
