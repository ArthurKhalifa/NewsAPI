import React from 'react'
import style from '../Footer/Footer.module.css'

// IMG
import a from '../img/letter-a.png'
import lin from '../img/linkedin.png'
import git from '../img/github.png'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <h6>Criado por <span className={style.name}>Arthur Santos</span></h6>
            <div className={style.icons}>
                <a href="https://www.linkedin.com/in/arthursantos00/" target='blank_'><img src={lin} className={style.icon} /></a>
                <a href="https://github.com/ArthurKhalifa" target='blank_'><img src={git} className={style.icon} /></a>
                <a href="https://arthurkhalifa.github.io/Portfolio/" target='blank_'><img src={a} className={style.icon} /></a>
            </div>

        </div>
    )
}
