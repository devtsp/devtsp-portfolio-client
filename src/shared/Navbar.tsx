import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const activeStyle = {
  textShadow: '0 0 5px -1px black',
  color: 'YellowGreen',
};

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="stack"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          STACK
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
