import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../css_modules/email.module.css";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="row align-items-center">
            <div className="btn btn-danger col-2 offset-2">
                <p onClick={() => {navigate('/contact')}} className="m-0">Send me an <span className={`${style.email} text-uppercase`}>email</span></p>
            </div>
        </footer>
    )
}

export default Footer