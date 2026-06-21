"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header/page"));
const Home = dynamic(() => import("./home/page"));
const About = dynamic(() => import("./about/page"));
const Skills = dynamic(() => import("./skills/page"));
const Project = dynamic(() => import("./project/page"));
const Contact = dynamic(() => import("./contact/page"));
const Footer = dynamic(() => import("./footer/page"));

const App = () => {
  const [loader, setLoader] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const rawData = localStorage.getItem("u7gED7zbH9N$2WFcebGA");
    if (rawData) {
      setMain(JSON.parse(rawData));
    }
  }, []);

  const handleMain = () => {
    setMain(!main);
  };

  useEffect(() => {
    localStorage.setItem(
      "u7gED7zbH9N$2WFcebGA",
      JSON.stringify(main)
    );
  }, [main]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={main ? "dark" : "p1"}>
      {loader && (
        <div className="loader">
          <img src="/images/loader.gif" alt="Loading..." />
        </div>
      )}

      <Header handleMain={handleMain} main={main} />
      <Home main={main} />
      <About />
      <Skills />
      <Project main={main} />
      <Contact main={main} />
      <Footer main={main} />
    </div>
  );
};

export default App;