import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/Aboutme";
import Education from "../components/Education";
import Experience from "../components/Experience"
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactInfo from "../components/ContactInfo";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <div className="">
              <HeroSection /> 
              <AboutMe /> 
              <Skills/> 
              <Education />
              <Experience/> 
              <Projects/>
              <ContactInfo/>
                 
            </div>
          ),
        },
      ],
    },
  ]);
  
