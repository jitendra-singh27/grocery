// Import CSS for styling the header component
import "./Header.css"
import React, { useState } from 'react'; 
import Signup from './Signup'; // Import the Signup compo
// Import logo image from assets
import Logo from "../assets/images/freshcart-logo.svg"

// Header component definition
const Header = () => {
    const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

    // Function to open the modal
    const openModal = () => setShowModal(true);
  
    // Function to close the modal
    const closeModal = () => setShowModal(false);
  

  return (
    <>
      {/* Main header container */}
      <header>
        {/* Border at the bottom of the header */}
        <div className="border-bottom">
          
          {/* First section with a promotional banner */}
          <div className="bg-light py-1">
            <div className="container">
              <div className="row">
                {/* Left side text with a promotional message */}
                <div className="text-center text-md-start col-md-6 col-12">
                  <span>Super Value Deals - Save more with coupons</span>
                </div>
                
                {/* Language selector dropdown on the right for desktop view */}
                <div className="text-end d-none d-md-block col">
                  <div className="selectBox dropdown">
                    <span className="dropdown-toggle selectValue text-reset cursor-pointer">
                      <img src="/images/icons/english.svg" alt="" className="me-2" />
                      English {/* Display selected language */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main header section with logo, search form, and location button */}
          <div className="py-5">
            <div className="container">
              <div className="w-100 align-items-center gx-lg-2 gx-0 row">
                
                {/* Left side: logo for large screens and mobile view */}
                <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
                  {/* Desktop logo */}
                  <a className="d-none d-lg-block navbar-brand" href="/">
                    <img src={Logo} alt="Fresh Cart" />
                  </a>
                  {/* Mobile logo */}
                  <div className="d-flex justify-content-between w-100 d-lg-none">
                    <a className="navbar-brand" href="/">
                      <img src={Logo} alt="Fresh Cart" />
                    </a>
                  </div>
                </div>

                {/* Search bar section for large screens */}
                <div className="d-none d-lg-block col-xxl-5 col-lg-5">
                  <form>
                    <div className="input-group">
                      {/* Search input field */}
                      <input
                        placeholder="Search for products"
                        className="rounded form-control"
                        type="search"
                      />
                      <span className="input-group-append">
                        {/* Search button with a magnifying glass icon */}
                        <button
                          type="button"
                          className="border border-start-0 ms-n10 rounded-0 rounded-end btn btn-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {/* Search icon */}
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>

                {/* Location button with a cart icon */}
                <div className="d-none d-lg-block col-xxl-3 col-md-2">
                  <button
                    type="button"
                    className="text-muted btn btn-outline-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2"
                    >
                      {/* Location icon */}
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Location
                  </button>
                </div>

                {/* User account, cart, and other action buttons on the right */}
                <div className="text-end col-xxl-2 col-lg-2 col-md-6 col-7">
                  <div className="list-inline">
                     {/* User profile icon with modal trigger */}
                     <div
                      role="button"
                      className="text-muted me-5 list-inline-item"
                      onClick={openModal} // Trigger modal when clicked
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Cart icon */}
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      {/* Cart badge */}
                      <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        4
                      </span>
                    </div>

                    {/* User profile icon */}
                    <div
                      role="button"
                      className="text-muted me-5 list-inline-item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* User profile icon */}
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>

                    {/* Wishlist icon with a badge */}
                    <div
                      role="button"
                      className="me-5 me-lg-0 text-muted position-relative list-inline-item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Wishlist icon */}
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      {/* Wishlist badge */}
                      <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        5
                      </span>
                    </div>

                    {/* Navbar toggle button for small screens */}
                    <div role="button" className="d-inline-block d-lg-none list-inline-item">
                      <button
                        type="button"
                        aria-label="Toggle navigation"
                        className="navbar-toggler collapsed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-text-indent-left text-primary"
                        >
                          {/* Hamburger icon */}
                          <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar with dropdowns and links */}
          <nav className="py-0 pb-lg-4 navbar-default navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div id="navbar-default" className="offcanvas-lg offcanvas-start">
                <div className="pb-1 offcanvas-header">
                  {/* Mobile logo in offcanvas menu */}
                  <a href="/">
                    <img src="/images/logo/freshcart-logo.svg" alt="Fresh Cart" />
                  </a>
                  {/* Close button for the offcanvas menu */}
                  <button type="button" className="btn btn-close"></button>
                </div>
                <div className="offcanvas-body">
                  {/* Mobile search form */}
                  <div className="d-block d-lg-none mb-4">
                    <form>
                      <div className="input-group">
                        <input
                          placeholder="Search for products"
                          className="rounded form-control"
                          type="search"
                        />
                        <span className="input-group-append">
                          <button
                            type="button"
                            className="border border-start-0 ms-n10 rounded-0 rounded-end btn btn-white"
                          >
                            {/* Mobile search button */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>

                  {/* Mobile department selection */}
                  <div className="d-block d-lg-none mb-4">
                    <a
                      role="button"
                      tabIndex="0"
                      href=""
                      className="w-100 d-flex justify-content-center align-items-center btn btn-primary"
                    >
                      {/* Icon for department selection */}
                      <span className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </span>
                      All Departments
                    </a>
                    {/* Collapsible department menu */}
                    <div id="collapseExample" className="mt-2 collapse">
                      <div className="card">
                        <div className="card-body">
                          <ul className="mb-0 list-unstyled">
                            {/* List of departments */}
                            <li className="dropdown-item">Dairy, Bread &amp; Eggs</li>
                            <li className="dropdown-item">Snacks &amp; Munchies</li>
                            <li className="dropdown-item">Fruits &amp; Vegetables</li>
                            <li className="dropdown-item">Cold Drinks &amp; Juices</li>
                            <li className="dropdown-item">Breakfast &amp; Instant Food</li>
                            <li className="dropdown-item">Bakery &amp; Biscuits</li>
                            <li className="dropdown-item">Chicken, Meat &amp; Fish</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

               {/* Desktop version of department selection */}

   <div className="me-3 d-none d-lg-block dropdown">
      <button
        type="button"
        id="dropdownMenuButton1"
        className="px-6 btn "
        style={{ backgroundColor: "#0AAD0A", color: "#fff" }} // Green background and white text
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* Icon for departments */}
        <i className="fa-light fa-grid-2"></i> {/* Updated icon here */}
        All Departments
      </button>
      <div
        data-bs-popper="static"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {/* Dropdown menu items */}
        <a href="#" className="dropdown-item" role="button">
          Dairy, Bread &amp; Eggs
        </a>
        <a href="#" className="dropdown-item" role="button">
          Snacks &amp; Munchies
        </a>
        <a href="#" className="dropdown-item" role="button">
          Fruits &amp; Vegetables
        </a>
        <a href="#" className="dropdown-item" role="button">
          Cold Drinks &amp; Juices
        </a>
        <a href="#" className="dropdown-item" role="button">
          Breakfast &amp; Instant Food
        </a>
        <a href="#" className="dropdown-item" role="button">
          Bakery &amp; Biscuits
        </a>
        <a href="#" className="dropdown-item" role="button">
          Chicken, Meat &amp; Fish
        </a>
      </div>
    </div>


                  {/* Other navigation links */}
                  <div>
                    <div className="align-items-center undefined navbar-nav">
                      {/* Home link */}
                      <div className="w-100 w-lg-auto nav-item dropdown">
                        <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
                          Home
                        </a>
                      </div>
                      {/* Shop link */}
                      <div className="w-100 w-lg-auto nav-item dropdown">
                        <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
                          Shop
                        </a>
                      </div>
                      {/* Stores link */}
                      <div className="w-100 w-lg-auto nav-item dropdown">
                        <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
                          Stores
                        </a>
                      </div>
                      {/* Mega menu link */}
                      <div className="w-100 w-lg-auto dropdown-fullwidth nav-item dropdown">
                        <a
                          aria-expanded="false"
                          role="button"
                          className="dropdown-toggle nav-link"
                          href="#"
                        >
                          Mega menu
                        </a>
                      </div>
                      {/* Pages link */}
                      <div className="w-100 w-lg-auto nav-item dropdown">
                        <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
                          Pages
                        </a>
                      </div>
                      {/* Account link */}
                      <div className="w-100 w-lg-auto nav-item dropdown">
                        <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
                          Account
                        </a>
                      </div>
                      {/* Dashboard link */}
                      <div className="w-100 w-lg-auto nav-item">
                        <a className="nav-link" href="/dashboard">
                          Dashboard
                        </a>
                      </div>
                      {/* Documentation link */}
                      <div className="w-100 w-lg-auto dropdown-flyout dropdown">
                        <a
                          href="#"
                          id="navbarDropdownDocs"
                          role="button"
                          className="nav-link"
                          tabIndex="0"
                        >
                          Docs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
