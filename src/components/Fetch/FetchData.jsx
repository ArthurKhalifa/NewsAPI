import React, { useEffect, useState } from 'react';
import axios from 'axios';

import style from '../Fetch/FetchData.module.css'

import API_KEY from '../Keys';


//IMG
import gif from '../img/gif.gif'
import gif3 from '../img/gif3.gif'

export const FetchData = ({ cat }, props) => {
    const [data, setData] = useState([]);
    const [cache, setCache] = useState({}); // Estado para armazenar o cache

    // Função para buscar dados da API ou retornar do cache
    const fetchData = async (category) => {

        axios.get('https://newsapi.org/v2/endpoint', {
            headers: {
                'Accept': 'application/json',
                'Accept-Language': 'en',
                'User-Agent': 'Your App Name',
            },
            http2: true, // Use HTTP/2
        })
            .then((response) => {
                renderCards()
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados:', error);
            });



        try {
            if (cache[category]) {
                // Se os dados já estiverem em cache, use-os
                setData(cache[category]);
            } else {
                const response = await axios.get(

                    category
                        ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
                        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
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
        const first10Items = data.slice(0, 3);

        return first10Items.map((item, index) => {
            if (!item.urlToImage) {
                return null; // Ignore cards without image
            }

            return (
                <div className={style.full}>
                    <div className={`${style.card} ${style.carouselOff}`} key={index}>
                        <img src={item.urlToImage} className={style.img} />
                        <div className={style.right}>
                            <p className={style.author}>{item.author}</p>
                            <a href={item.url} target='blank_'>  <h5 className={style.title}>{item.title}</h5></a>

                            {/* <p className={style.desc}>{item.description}</p> */}
                            {/* <div className={style.btn_div}>
                                <a href={item.url} target='blank_'><button className={style.btn}>Ver mais</button></a>
                            </div> */}
                        </div>
                    </div>
                    {/* =============== */}
                    <div className={style.carouselOn}>
                        <a href={item.url} target='blank_'><div className={style.card} key={index}>
                            <a href={item.url} target='blank_'>
                                <img src={item.urlToImage} className={style.img} />
                            </a>
                            <h5 className={style.title}>{item.title}</h5>
                        </div></a>

                    </div>
                    {/* =============== */}
                    <div className={style.off}>
                        <div className={style.card2} key={index}>
                            <div className={style.right2}>
                                <p className={style.author2}>{item.author}</p>
                                <a href={item.url} target='blank_'><h6 className={style.title2}>{item.title}</h6></a>
                            </div>
                            <a href={item.url} target='blank_'><img src={item.urlToImage} className={style.img2} /></a>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderCards2 = () => {
        const first10Items = data.slice(3, 10);

        return first10Items.map((item, index) => {
            if (!item.urlToImage) {
                return null; // Ignore cards without image
            }

            return (
                <div className={style.card2} key={index}>
                    <div className={style.right2}>
                        <p className={style.author2}>{item.author}</p>
                        <a href={item.url} target='blank_'>  <h6 className={style.title2}>{item.title}</h6></a>

                    </div>
                    <a href={item.url} target='blank_'> <img src={item.urlToImage} className={style.img2} /></a>

                </div>
            );
        });
    };

    return (
        <div className={style.container}>
            <h1 className={style.cat}>{cat}</h1>
            <div className={style.return}>
                <div className={style.returnL}>
                    {data.length > 0 ? (
                        renderCards()
                    ) : (
                        <p className={style.loading}>Loading...</p>
                    )}
                    <img src={gif} className={`${style.newsImg2} ${style.newsImgx}`} />
                </div>
                <div className={style.returnR}>
                    <img src={gif3} className={style.newsImg2} />
                    <h1 className={style.more}>More</h1>
                    {data.length > 0 ? (
                        renderCards2()
                    ) : (
                        <p className={style.loading}>Loading...</p>
                    )}
                </div>
            </div>


        </div>
    );
}
