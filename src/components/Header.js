import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <Link className="navbar-brand" to="/">
          LA TIENDA 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offices">
                Sucursales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new_office">
                Nueva Sucursal
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
