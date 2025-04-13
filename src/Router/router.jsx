import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience"
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactInfo from "../components/ContactInfo";
import ProjectDetails from "../components/ProjectDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <div >
              <HeroSection /> 
              <AboutMe /> 
              <Projects/>
              <Skills/> 
              <Education />
              <Experience/> 
              <ContactInfo/>
                 
            </div>
          ),
        },

        {
          path: "/projects/:id", 
          element: <ProjectDetails />,
        },
      ],
    },
  ]);
  
