import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">All Users</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};
