"use client";
import "./page.css";
import Aboutus from "@/components/aboutus/aboutus";
import CourseDetails from "@/components/coursedetails/coursedetails";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Launchpad from "@/components/launchpad/launchpad";
// import ApplicationProcess from "@/components/applicationprocess/applicationprocess";
// import QuestionandAnswer from "@/components/qna/qna";
import Sessions from "@/components/sessions/session";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { AiFillDashboard } from "react-icons/ai";

const Home = () => {
  const [isclicked, setisclicked] = useState(false);


  return (
    <>
      {isclicked && (
        <div className="register-container">
          <div className="register-form">
            <h1>Sign In / Register</h1>
            <form>
              <label htmlFor="Name"> Your Name</label>
              <input Id="Name" />
              <label htmlFor="Name">Your Phone Number</label>
              <input Id="Name" />
              <label htmlFor="Name">Your Email</label>
              <input Id="Name" />
              <button>Submit</button>
              <button id="cancel-button" onClick={() => setisclicked(false)}>X</button>
            </form>
          </div>
        </div>
      )}
      <div className="register_pop ">
        <div className="register_pop-button">
          <Image
            src={logo}
            alt="logo"
            onClick={() => setisclicked((prev) => !prev)}
          />
        </div>
      </div>
      <Header setisclicked={setisclicked} />
      <Aboutus />
      <Launchpad />
      <CourseDetails />
      <Sessions />
      <Footer />
    </>
  );
};

export default Home;
