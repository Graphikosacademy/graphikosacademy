"use client"

import "./navbar.css";
import applogo from "../../assets/images/applogo.png";
import contactlines from "../../assets/images/contactline.png";
import arrow from "../../assets/images/arrownavbar.png";
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
        <a href="/#Aboutus" className="navbar-link">
          About
        </a>
        <div className="app_logo">
          <Image src={applogo} alt="app-logo" />
        </div>
        <a href="/#course" className="navbar-link">
          Courses
        </a>
        <div className="contact_background">
          <Image src={contactlines} alt="contactlines" />
          <a href="#" className="navbar-link">
            Contact
          </a>
          <Image id="arrow-navbar" src={arrow} />
        </div>
      </div>
      {istoggle && (
        <div className="navbar-links_mobile-container">
          <div className="navbar-links-mobile">
            <a href="/">Home</a>
            <a href="/#Aboutus">About</a>
            <a href="/#course">Courses</a>
            <a href="/">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
