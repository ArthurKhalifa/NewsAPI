import React from 'react'
import style from '../ReadMe/ReadMe.module.css'

import sorry from '../img/sorry.png'
import sad from '../img/sad.png'
import play from '../img/play.png'

export const ReadMe = () => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <h1>Sinto muito</h1>
                <h6>Essa API não funciona quando é compartilhada, sendo assim, aqui está um link de um breve vídeo no linkedin mostrando mais detalhes do projeto. Obrigado pela compreenção. </h6>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7104877393093259264/" target='blank_'><img src={play} className={style.play} /></a>
                <img src={sorry} className={style.sorry} />
                <img src={sad} className={style.sad} />
            </div>
            <img src={sorry} className={style.sorry2} />
        </div>
    )
}
