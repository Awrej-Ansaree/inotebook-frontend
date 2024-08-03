import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function Navbar() {
  const { showLogout, setShowLogout } = useContext(noteContext);
  const inotebookUser = localStorage.getItem("inotebookUser");
  useEffect(() => {
    if (inotebookUser) {
      setShowLogout(true);
    }
  }, [showLogout]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          iNotebook
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {!showLogout && (
            <div className="d-flex">
              <Link className="btn btn-primary me-3" to="/login" role="button">
                Login
              </Link>
              <Link
                className="btn btn-outline-primary"
                to="/signup"
                role="button"
              >
                Sign Up
              </Link>
            </div>
          )}
          {showLogout && (
            <div className="d-flex">
              <Link
                className="btn btn-primary me-3"
                to="/login"
                role="button"
                onClick={() => {
                  setShowLogout(false);
                  localStorage.removeItem("inotebookUser");
                }}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
