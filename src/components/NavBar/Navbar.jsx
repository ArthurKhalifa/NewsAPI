import React from 'react'
import style from '../NavBar/NavBar.module.css'

import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    }

    return (
        <div className={style.all}>
            <div className={style.header}>
                <Link to="/"><h1 className={style.novidades}>N<span className={style.black}>EW</span>S</h1></Link>
                <div className={active ? `${style.icon2} ${style.iconActive}` : `${style.icon2}`} onClick={ToggleMode}>
                    <div className={`${style.hamburguer} ${style.hamburguerIcon}`}></div>
                </div>
                <div className={style.links}>
                    <ul className={active ? `${style.links2}` : `${style.linksClosed}`}>
                        <li>
                            <Link to="/" className={style.href}>General</Link>
                        </li>
                        <li>
                            <Link to="/business" className={style.href}>Business</Link>
                        </li>
                        <li>
                            <Link to="/entertainment" className={style.href}>Entertainment</Link>
                        </li>
                        <li>
                            <Link to="/health" className={style.href}>Health</Link>
                        </li>
                        <li>
                            <Link to="/science" className={style.href}>Science</Link>
                        </li>
                        <li>
                            <Link to="/sports" className={style.href}>Sports</Link>
                        </li>
                        <li>
                            <Link to="/technology" className={style.href}>Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar