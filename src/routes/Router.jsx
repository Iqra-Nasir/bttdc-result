import App from "../App";
import AboutUs from "../app/AboutUs";
import Academic from "../app/Academic";
import ApplyForInstitute from "../app/ApplyForInstitute";
import AuthorityAphorism from "../app/AuthorityAphorism";
import BSCCourses from "../app/BSCCourses";
import BranchOffice from "../app/BranchOffice";
import ContactUs from "../app/ContactUs";
import Courses from "../app/Courses";
import DiplomaCourses from "../app/DiplomaCourses";
import EmergencyAnnouncement from "../app/EmergencyAnnouncement";
import Home from "../app/Home";
import News from "../app/News";
import Notice from "../app/Notice";
import Result from "../app/Result";
import ShortCourses from "../app/ShortCourses";
import VDoctorInformation from "../app/VDoctorInformation";
import AdmissionRegistrationForm from "../app/online-admission/AdmissionRegistrationForm";
import AmtRegistration from "../app/online-admission/AmtRegistration";
import MemberRegistration from "../app/online-admission/MemberRegistration";
import OnlineAdmission from "../app/online-admission/OnlineAdmission";
import SingleVDoctor from "../components//VDoctorInformation/SingleVDoctor";
import SingleAuthorityAphorism from "../components/AuthorityAphorism/SingleAuthorityAphorism";
import SingleNewsPage from "../components/News/SingleNewsPage";
import SingleNoticePage from "../components/Notice/SingleNoticePage";
import SingleResult from "../components/Result/SingleResult";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "emergency-announcement",
        element: <EmergencyAnnouncement />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "about-us/authority-aphorism",
        element: <AuthorityAphorism />,
      },
      {
        path: "about-us/authority-aphorism/:id",
        element: <SingleAuthorityAphorism />,
      },
      {
        path: "academic",
        element: <Academic />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/bsc",
        element: <BSCCourses />,
      },
      {
        path: "courses/diploma",
        element: <DiplomaCourses />,
      },
      {
        path: "courses/short",
        element: <ShortCourses />,
      },
      {
        path: "online-admission",
        element: <OnlineAdmission />,
      },
      {
        path: "online-admission/admission-registration",
        element: <AdmissionRegistrationForm />,
      },
      {
        path: "online-admission/amt-registration",
        element: <AmtRegistration />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "result/:id",
        element: <SingleResult />,
      },
      {
        path: "apply-for-institution",
        element: <ApplyForInstitute />,
      },
      {
        path: "v-doctor-information",
        element: <VDoctorInformation />,
      },
      {
        path: "v-doctor-information/registration",
        element: <MemberRegistration />,
      },
      {
        path: "v-doctor-information/:registrationNumber",
        element: <SingleVDoctor />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <SingleNewsPage />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "notice/:id",
        element: <SingleNoticePage />,
      },
      {
        path: "branch-office",
        element: <BranchOffice />,
      },
      // {
      //   path: "authority-aphorism",
      //   element: <AuthorityAphorism />,
      // },
   
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default Router;
