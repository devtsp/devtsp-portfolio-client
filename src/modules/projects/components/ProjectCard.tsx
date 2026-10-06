import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from './ProjectCard.module.css';
import type { Project } from '../constants';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className={styles.container}>
      <div
        className={styles.image_container}
        onClick={() => window.open(project.site, '_blank')}
      >
        <Fade
          autoplay={true}
          duration={2000}
          arrows={false}
          pauseOnHover={false}
        >
          {project.previews.map((preview, i) => (
            <div className="each-fade" key={i}>
              <div className="image-container">
                <img src={preview} alt={project.title} />
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className={styles.links}>
        <a href={project.sourceCode} target="_blank" rel="noreferrer">
          source code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
