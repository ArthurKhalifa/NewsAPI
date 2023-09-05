import React from 'react'
import { Link } from 'react-router-dom';
import { FetchData } from '../Fetch/FetchData';
import style from '../Fetch/FetchData.module.css'

export const Home = () => {
    return (
        <div>
            <FetchData />
        </div>
    )
}
