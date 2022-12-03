import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">MyPage</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
