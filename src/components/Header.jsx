import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCrown,
  faAnglesUp,
  faUsers,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const username = "asdasdsd";
  const isAdmin = true;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-3 bg-black text-white">
      <div className="relative">
        <h1 className="text-xl font-bold">Lab #1</h1>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="focus:outline-none">
          {username}
          {isAdmin && <FontAwesomeIcon icon={faCrown} className="ml-2" />}
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faTableList} className="mr-2" />
              Dashboard
            </Link>

            {isAdmin && (
              <Link
                to="/admin-requests"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Admin Requests
              </Link>
            )}

            {/* TODO: later */}
            {!isAdmin && (
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faAnglesUp} className="mr-2" />
                Request Admin Role
              </Link>
            )}

            <Link
              to="/logout"
              className="flex items-center px-4 py-2 rounded-md hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
