"use client"
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";

const Header = ({ handleMain, main }) => {

    const [menu, setMenu] = useState(false);

    const handleHide = () => {
        setMenu(false);
    }

    return (
        <div className={`header ${main ? "dark" : ""}`}>
            <p className={`myname ${main ? "sp" : ""}`}>&lt;Amarjit/&gt;</p>
            <div  className={`toggle-btn ${main ? "t-btn" : ""}`} onClick={() => setMenu(!menu)}>{menu ? <RxCross1 className="toogle-btn1" /> : <RxHamburgerMenu className="toogle-btn1" />}</div>
            <div className="toogle1" onClick={handleMain}>{main ? <MdOutlineLightMode className={`tg ${main ? "sp" : ""}`} /> : <CiDark className={`tg ${main ? "sp" : ""}`} />}</div>
            <ul className={`un ${menu ? "x1" : ""} ${main ? "dark" : ""}`}>
                <li><Link href="#home" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Home</span></Link></li>
                <li><Link href="#about" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>About</span></Link></li>
                <li><Link href="#skills" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Skills</span></Link></li>
                <li><Link href="#project" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Project</span></Link></li>
                <li><Link href="#contact" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Contact</span></Link></li>
            </ul>
        </div>
    );
};
export default Header;