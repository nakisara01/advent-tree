import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <span>
        <NavLink to="/">Home</NavLink>
      </span>
      <span>
        <NavLink to="/mypage">MyPage</NavLink>
      </span>
    </nav>
  );
};

export default NavBar;
