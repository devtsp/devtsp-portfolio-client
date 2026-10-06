import ProjectCard from './components/ProjectCard';

import styles from './Projects.module.css';

import projects from './constants';

const Projects = () => {
  return (
    <section className={styles.container}>
      <p>
        Some silly projects I did many years ago (I did them manually with effort and love, pre-AI era <span role="img" aria-label="smiling face with tear">
        🥲
      </span>)
      </p>
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
