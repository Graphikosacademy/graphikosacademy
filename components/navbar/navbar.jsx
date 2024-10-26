"use client"

import "./navbar.css";
import applogo from "../../assets/images/applogo.png";
import contactlines from "../../assets/images/contactline.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [istoggle, setistoggle] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_small_screen">
        <div className="navbar_small_screen_logo">
          <Image src={applogo} alt="app-logo" />
        </div>
        {istoggle === false ? (
          <AiOutlineMenu size={30} onClick={() => setistoggle(true)} />
        ) : (
          <MdCancel size={30} onClick={() => setistoggle(false)} />
        )}
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          About
        </a>
        <div className="app_logo">
          <Image src={applogo} alt="app-logo" />
        </div>
        <a href="#" className="navbar-link">
          Courses
        </a>
        <div className="contact_background">
          <Image src={contactlines} alt="contactlines" />
          <a href="#" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
      {istoggle && (
        <div className="navbar-links_mobile-container">
          <div className="navbar-links-mobile">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Courses</a>
            <a href="/">Contact</a>
            <button>
              <a href="register">Register Now! </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
