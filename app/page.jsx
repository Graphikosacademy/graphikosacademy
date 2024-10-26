import "./page.css"
import Aboutus from "@/components/aboutus/aboutus";
import ApplicationProcess from "@/components/applicationprocess/applicationprocess";
import CourseDetails from "@/components/coursedetails/coursedetails";
import Header from "@/components/header/header";
import Launchpad from "@/components/launchpad/launchpad";
import QuestionandAnswer from "@/components/qna/qna";
import Sessions from "@/components/sessions/session";


export default function Home() {
  return (
    <>
    <Header/>
    <Aboutus/>
    <Launchpad/>
    <CourseDetails/>
    <Sessions/>
    <ApplicationProcess/>
    <QuestionandAnswer/>
    </>
  );
}
