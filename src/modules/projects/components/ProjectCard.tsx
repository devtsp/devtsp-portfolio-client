import styles from './ProjectCard.module.css';
import type { Project } from '../constants';

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <article className={styles.container}>
      <span className={styles.number}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h2>{project.title}</h2>
      <div className={styles.links}>
        <a
          className={styles.primary}
          href={project.site}
          target="_blank"
          rel="noreferrer"
        >
          Live site ↗
        </a>
        <a href={project.sourceCode} target="_blank" rel="noreferrer">
          Source code ↗
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
