"use client"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({main}) => {

    const [btn,setBtn] = useState(false);

    const handleScroll = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>150){
               setBtn(true);
            }
            else{
               setBtn(false);
            }
       })
    },[]);

    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 600
        });
      },[]);

    return(
        <div id="footer">
            <p className="footer-txt1">Designed and build by Amarjit</p>
            <p className="footer-txt2">© {new Date().getFullYear()} All rights reserved.</p>
            {btn?<div className={`scroll-btn ${main?"scroll-btn1":""}`} onClick={handleScroll} data-aos="zoom-in"><FaArrowUp /></div>:""}
        </div>
    );
};
export default Footer;