import React, { useEffect } from 'react'
import '../App.css';
import { preLoaderAnim } from '../Animation';

export const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Desenvolvido</span>
                <span>por</span>
                <span className='blue'>Arthur S.</span>
            </div>
        </div>
    )
}
