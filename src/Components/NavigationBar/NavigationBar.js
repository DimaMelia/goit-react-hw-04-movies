import { NavLink, Route } from "react-router-dom";
import s from './NavBar.module.css';

function NavigationBar() {
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink} >Movies</NavLink>
    </nav>
  );
}

export default NavigationBar;
