import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>T h i s i s m y b l o g</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/testing">Testing Stuff</Link>
      </div>
    </nav>
  );
};

export default Navbar;
