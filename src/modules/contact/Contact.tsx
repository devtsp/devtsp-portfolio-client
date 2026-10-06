import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img src="/img/me.png" alt="tomas paez" />
        <div>
          <h1>
            <span>Tomas Paez</span>
            Software Engineer
          </h1>
          <p>
            Contact me at&nbsp;
            <a href="mailto:paeztms@gmail.com" target="_blank" rel="noreferrer">
              paeztms@gmail.com
            </a>
            <br />
            Checkout my{' '}
            <a
              href="https://github.com/devtsp"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>{' '}
            (hobby projects)
          </p>
        </div>
      </header>
    </section>
  );
};

export default Contact;
