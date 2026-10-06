import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';

import Navbar from './shared/Navbar';
import Contact from './modules/contact/Contact';
import Projects from './modules/projects/Projects';
import Stack from './modules/stack/Stack';
import TransitionGroup from './shared/TransitionGroup';

function App() {
  return (
    <div className={styles.container}>
      <Router>
        {/* <Navbar></Navbar> */}
        <main className={styles.body}>
          {/* <TransitionGroup>
            <Route path="/" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route
              path="*"
              element={
                <h1 style={{ textAlign: 'center', margin: '4rem' }}>404</h1>
              }
            />
          </TransitionGroup> */}
          <Contact />
          <Stack />
          <Projects />
        </main>
      </Router>
    </div>
  );
}

export default App;
