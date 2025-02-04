import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/items/electronics"}>
          Electronics
        </Link>
        <Link className="nav-link" to={"/items/furniture"}>
          Furniture
        </Link>
        <Link className="nav-link" to={"/items/clothing"}>
          Clothing
        </Link>
        <Link className="nav-link" to={"/items/books"}>
          Books
        </Link>
        <Link className="nav-link" to={"/items/expensive"}>
          Expensive
        </Link>
      </nav>
    </header>
  );
};

export default Header;
