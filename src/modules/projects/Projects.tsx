import ProjectCard from './components/ProjectCard';
import styles from './Projects.module.css';
import projects from './constants';

const Projects = () => {
  return (
    <section className={styles.container}>
      <p>
        Silly projects I did many, many years ago{' '}
        <span role="img" aria-label="smiling face with tear">
          🥲
        </span>
        ... <br />
        (with effort, love and dedication, pre-AI era)
      </p>
      <ul>
        {projects.map((project, i) => (
          <li key={project.title}>
            <ProjectCard project={project} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
