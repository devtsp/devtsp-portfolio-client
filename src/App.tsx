import styles from './App.module.css';
import Contact from './modules/contact/Contact';
import Projects from './modules/projects/Projects';
import Stack from './modules/stack/Stack';

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.body}>
        <Contact />
        <Stack />
        <Projects />
      </main>
    </div>
  );
}

export default App;
