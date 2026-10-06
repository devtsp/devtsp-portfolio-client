import styles from './Stack.module.css';

import stack from './constants';

const Stack = () => {
  return (
    <section className={styles.container}>
      <div className={styles.separator}></div>
      <div className={styles.figuresContainer}>
        {stack.map(({ name, icon }) => (
          <div className={styles.figure} key={name}>
            <abbr title={name}>
              <img src={`/img/stack%20icons/${icon}`} alt={name} />
            </abbr>
            {name}
          </div>
        ))}
      </div>
      <div className={styles.separator}></div>
    </section>
  );
};

export default Stack;
