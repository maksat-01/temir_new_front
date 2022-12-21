import React, {useEffect} from 'react';
import logo from "../../../assets/img/logo.svg"
import {gsap} from "gsap"
import { NavLink} from 'react-router-dom';
const percent = '60%';
const AdminToWelcome = () => {
    useEffect(() => {
        gsap.to('.admin--general__title', {y: `${percent}`, opacity: 1, duration: 3, scrub: 5});
        gsap.to('.admin--general__title--h1 h1' , {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 4,
        })
        }, [])


    return (
        <div id="admin">
            <div className="admin--general">
                <div className="admin--general__title">
                    <div className="admin--general__title--img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="admin--general__title--h1">
                        <h1 >User Name, welcome to <br/>your personal account!</h1>
                    </div>
                    <NavLink to={'./profile'}>
                        <div className="admin--general__title--btn">
                            <button>Continue</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminToWelcome;