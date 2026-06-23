"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsGithub } from "react-icons/bs";
import { PiArrowSquareOutBold } from "react-icons/pi";
import Image from "next/image";
import { projects } from '../data/project-data';


const Project = ({ main }) => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600
        });
    }, []);

    return (
        <div id="project">
            <p className="project-text"><span>My Projects</span></p>
            <div className="project1">
                {projects?.map((v, i) => {
                    return (
                        <div className="project-item" data-aos="fade-up" key={v.id}>
                            <Image src={v.src} alt={v.alt} placeholder="blur" width={269} height={182} />
                            <p className="project-paragraph">{v.txt}</p>
                            <div className="link-btn">
                                <div className="link-btn1"><a href={v.github} target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                                <div className="link-btn1"><a href={v.link} target="_blank"><PiArrowSquareOutBold className={`${main ? "link-btn2" : ""}`} /></a></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Project;