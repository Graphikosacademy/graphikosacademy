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
import Navbar from "@/components/navbar/navbar";

const Home = () => {
  const [isclicked, setisclicked] = useState(false);
  const [contactform, setcontactform] = useState({
    name: "",
    email: "",
    mobilenumber: "",
  });
  const [isloading, setisloading] = useState(false);

  const onsubmit = async (e) => {
    e.preventDefault();
    setisloading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        emailfrom: contactform.email,
        name: contactform.name,
        mobilenumber: contactform.mobilenumber,
      }),
    });

    if (response.status === 200) {
      setTimeout(() => {
        setisloading(false);
        setisclicked(false);
        // toast.success("Message sent successfully");
        contactform.email = "";
        contactform.name = "";
        contactform.mobilenumber = "";
      }, 1000);
    } else if (response.status === 500) {
      // toast.error("Something Went Wrong! Try Again!");
      setisloading(false);
    }
  };

  return (
    <>
      {isclicked && (
        <div className="register-container">
          <div className="register-form">
            <h1>Sign In / Register</h1>
            <form onSubmit={onsubmit}>
              <label htmlFor="Name"> Your Name</label>
              <input
                required
                value={contactform.name}
                inputMode="text"
                Id="Name"
                onChange={(e) =>
                  setcontactform({ ...contactform, name: e.target.value })
                }
              />
              <label htmlFor="Mobilenumber">Your Phone Number</label>
              <input
                required
                value={contactform.mobilenumber}
                inputMode="numeric"
                Id="Mobilenumber"
                onChange={(e) =>
                  setcontactform({
                    ...contactform,
                    mobilenumber: e.target.value,
                  })
                }
              />
              <label htmlFor="Email">Your Email</label>
              <input
                required
                value={contactform.email}
                inputMode="email"
                Id="Email"
                onChange={(e) =>
                  setcontactform({ ...contactform, email: e.target.value })
                }
              />
              <button type="submit">{isloading === true ? <span class="loader"></span> : "Submit"}</button>
              <button id="cancel-button" onClick={() => setisclicked(false)}>
                X
              </button>
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
      <Navbar/>
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
