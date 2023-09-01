import React, { useEffect, useState } from 'react';
import axios from 'axios';

import style from '../Fetch/FetchData.module.css'

//IMG
import newsImg from '../img/news1.svg'

export const FetchData = ({ cat }) => {
    const [data, setData] = useState([]);
    const [cache, setCache] = useState({}); // Estado para armazenar o cache

    // Função para buscar dados da API ou retornar do cache
    const fetchData = async (category) => {
        try {
            if (cache[category]) {
                // Se os dados já estiverem em cache, use-os
                setData(cache[category]);
            } else {
                const response = await axios.get(
                    category
                        ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c7fe3b47f8f3420ca00ced96dc974a06`
                        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=c7fe3b47f8f3420ca00ced96dc974a06`
                );
                setData(response.data.articles);

                // Atualiza o cache com os novos dados
                setCache((prevCache) => ({
                    ...prevCache,
                    [category]: response.data.articles,
                }));
            }
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }

    useEffect(() => {
        fetchData(cat);
    }, [cat]);

    useEffect(() => {
        // Define um atraso de 1 segundo (1000 milissegundos) entre as solicitações
        const delay = 1000; // 1 segundo
        const timer = setTimeout(() => {
            fetchData(cat);
        }, delay);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [cat]);

    const renderCards = () => {
        return data.map((item, index) => {
            if (!item.urlToImage) {
                return null; // Ignore cards without image
            }

            return (
                <div className={style.card} key={index}>
                    <img src={item.urlToImage} className={style.img} />
                    <div className={style.right}>
                        <p className={style.author}>{item.author}</p>
                        <h5 className={style.title}>{item.title}</h5>
                        <p className={style.desc}>{item.description}</p>
                        <div className={style.btn_div}>
                            <a href={item.url} target='blank_'><button className={style.btn}>Ver mais</button></a>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={style.container}>
            <h1 className={style.cat}>{cat}</h1>
            <div className={style.return}>
                {data.length > 0 ? (
                    renderCards()
                ) : (
                    <p className={style.loading}>Loading...</p>
                )}
            </div>
        </div>
    );
}
