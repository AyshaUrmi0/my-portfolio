import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/Aboutme";
import Education from "../components/Education";
import Experience from "../components/Experience";


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
              <Education />
              <Experience/>      
            </div>
          ),
        },
      ],
    },
  ]);
  
