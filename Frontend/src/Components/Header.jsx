import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <header>
      <nav className="navbar">
        <Link
          onClick={() => setActive("home")}
          className={`nav-link ${active == "home" && "active"}`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          onClick={() => setActive("electronics")}
          className={`nav-link ${active == "electronics" && "active"}`}
          to={"/items/electronics"}
        >
          Electronics
        </Link>
        <Link
          onClick={() => setActive("furniture")}
          className={`nav-link ${active == "furniture" && "active"}`}
          to={"/items/furniture"}
        >
          Furniture
        </Link>
        <Link
          onClick={() => setActive("clothing")}
          className={`nav-link ${active == "clothing" && "active"}`}
          to={"/items/clothing"}
        >
          Clothing
        </Link>
        <Link
          onClick={() => setActive("books")}
          className={`nav-link ${active == "books" && "active"}`}
          to={"/items/books"}
        >
          Books
        </Link>
        <Link
          onClick={() => setActive("expensive")}
          className={`nav-link ${active == "expensive" && "active"}`}
          to={"/items/expensive"}
        >
          Expensive
        </Link>
      </nav>
    </header>
  );
};

export default Header;
