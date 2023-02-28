import { Link, Outlet } from 'react-router-dom';
import style from './style/nav.css';

const Nav = () => (
  <div>
    <nav className={style.nav}>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Quote">Quote</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Nav;
