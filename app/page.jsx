"use client";
import "./page.css";
import Aboutus from "@/components/aboutus/aboutus";
import ApplicationProcess from "@/components/applicationprocess/applicationprocess";
import CourseDetails from "@/components/coursedetails/coursedetails";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Launchpad from "@/components/launchpad/launchpad";
import QuestionandAnswer from "@/components/qna/qna";
import Sessions from "@/components/sessions/session";
// import { useEffect, useState } from "react";

const Home = () => {
  // const [isloading, setisloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisloading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      <Header />
      <Aboutus />
      <Launchpad />
      <CourseDetails />
      <Sessions />
      <Footer/>
      {/* <ApplicationProcess />
      <QuestionandAnswer /> */}
    </>
  );
};

export default Home;
