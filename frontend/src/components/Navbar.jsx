import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/PizzeriaLogo.png";

function Navbar({ count }) {
  return (
    <>
      <nav className="navbar rounded-bottom bg-dark mb-2 sticky-top">
        <div className="first">
          <span>
            <Link
              className="text-decoration-none navbar-brand text-light mx-2 h1 "
              to="/"
            >
              Pizza
            </Link>
            <Link to="/">
              <img src={image} alt="img" width="50px" />
            </Link>
            <Link
              className="text-decoration-none  text-light mx-2 "
              to="/OrderPizza"
            >
              Order Pizza
            </Link>
            <Link
              className="text-decoration-none  text-light  "
              to="/BuildPizza"
            >
              Build ur Pizza
            </Link>
          </span>
        </div>
        <div className="second">
          <span>
            <Link to="/ShopingCart">
              <button className="btn bg-warning rounded mx-2 fw-bold ">
                shopping cart
              </button>
            </Link>
            {count && (
              <span className="badge bg-danger rounded-circle translate-middle ">
                {count}
              </span>
            )}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
