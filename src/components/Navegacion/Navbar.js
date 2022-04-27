import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <img src="../img/logopoke.png" width={70}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  <strong>Pokedex</strong>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src="../img/logopoke.png" width={70}></img>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
