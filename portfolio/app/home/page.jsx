"use client"
import { useTypewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from "next/image";
import hero from "@/public/images/hero-img.png";
import { IoIosContact } from "react-icons/io";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Home = ({main}) => {

  const [typeEffect] = useTypewriter({
    words: ["Full stack developer", "Problem Solver!!", "Continuous Learner...", "Mern developer!!", "Team Player!!", "Coder..."],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 500
  });

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600
    });
  }, []);




  return (
    <div id="home">
      <div className="home-child1" data-aos="zoom-in">
        <div className="txt1">Hello, My name is</div>
        <div className="txt2">Amarjit!</div>
        <div className="txt3">I'm a <span className="typing">
          {typeEffect}
        </span></div>
        <div className="txt4">
          <Link href="#contact">
          <span className={`icon1 ${main?"dark":""}`}><IoIosContact /></span>
          </Link>
          <Link href="https://github.com/Amarjit-Gupta" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
            <RxGithubLogo className={`icon2 ${main?"dark":""}`} />
          </Link>
          <Link href="https://www.linkedin.com/in/amarjit-gupta-03a633357/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
            <BsLinkedin className={`icon3 ${main?"dark":""}`} />
          </Link>
        </div>
      </div>
      <div className="home-child2" data-aos="zoom-in">
        <Image src={hero} alt="Web developer portfolio hero image" priority placeholder="blur" width={450} height={450} />
      </div>
    </div>
  );
};
export default Home;