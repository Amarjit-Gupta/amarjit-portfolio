"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { skills } from '../data/skills-data';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600
    });
  }, []);

  return (
    <div id="skills">
      <p className="skills-text"><span>Skills</span></p>
      <div className="skills1">
        {skills?.map((v,i)=>{
          return(
            <div className="skill-item" data-aos="fade-up" key={v.id}><Image src={v.src} alt={v.alt} width={137} height={136}  placeholder="blur"/><p className="skill-txt">{v.txt}</p></div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;