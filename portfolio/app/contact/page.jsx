"use client"
import { IoMdContact } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import contact from "@/public/images/contact.png";
import { RiLoader2Line } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";

const Contact = ({ main }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [numIcon, setNumIcon] = useState(false);
    const [emailIcon, setEmailIcon] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError(true);
            toast.warn("Please fill all fields...");
            return;
        }

        setLoading(true);

        try {
            const result = await fetch("/api", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await result.json();

            if (data?.success) {
                toast.success(data.message || "Message sent successfully...");
                setName("");
                setEmail("");
                setMessage("");
                setError(false);
            } else {
                toast.error(data.message || "Failed to send message...");
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed, try again...");
        } finally {
            setLoading(false);
        }
    };

    const handleNumber = async () => {
        try {
            await navigator.clipboard.writeText("9696587251");
            setNumIcon(true);
            toast.success("Contact number copied...");

            setTimeout(() => {
                setNumIcon(false);
            }, 3000);
        } catch (err) {
            toast.error("Failed to copy number");
            console.error(err);
        }
    };


    const handleEmail = async () => {
        try {
            await navigator.clipboard.writeText("guptaamarjit777@gmail.com");
            setEmailIcon(true);
            toast.success("Email Id copied...");

            setTimeout(() => {
                setEmailIcon(false);
            }, 3000);
        } catch (err) {
            toast.error("Failed to copy email");
            console.error(err);
        }
    };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600
        });
    }, []);

    return (
        <div id="contact">
            <ToastContainer />
            <p className="contact-text"><span>Contact Me</span></p>
            <div className="contact1">
                <div className="contact-item" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                        <div className="form-data">
                            <div className="f1">
                                <label>Name:</label><br />
                                <input className="form-data1" type="text" name="" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                                {error && !name ? <span className="error-field">This field is required.</span> : null}
                            </div>
                            <div className="f1">
                                <label>Email Id:</label><br />
                                <input className="form-data2" type="email" name="" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {error && !email ? <span className="error-field">This field is required.</span> : null}
                            </div>
                            <div className="f1">
                                <label>Message:</label><br />
                                <textarea className="form-data3" name="" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                {error && !message ? <span className="error-field">This field is required.</span> : null}
                            </div>
                            <div className="sub-btn">
                                <button type="submit" className="submit-btn" disabled={loading}>
                                    {loading ?
                                        <span className="send-form">Sending... <RiLoader2Line className="loading-icon" /></span>
                                        : "Send Message"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-item" data-aos="fade-up">
                    <Image src={contact} alt="contact information" placeholder="blur" />
                    <div className="contactitem">
                        <div className="contactitem1">
                            <div className="c1"><IoMdContact /></div>
                            <div className="c1"><FaWhatsappSquare /></div>
                            <div className="c1">9696587251</div>
                            <button className={`c1 ${main ? "dark" : ""}`} onClick={handleNumber} disabled={numIcon}>
                                {numIcon ? <FiCheck className="copy" /> : <MdOutlineContentCopy className="copy" />}
                            </button>
                        </div>
                        <div className="contactitem1">
                            <div className="c1"><MdOutlineMailOutline /></div>
                            <div className="c1">guptaamarjit777@gmail.com</div>
                            <button className={`c1 ${main ? "dark" : ""}`} onClick={handleEmail} disabled={emailIcon}>
                                {emailIcon ? <FiCheck className="copy" /> : <MdOutlineContentCopy className="copy" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;