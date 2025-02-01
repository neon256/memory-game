import React from 'react'
import style from './home.module.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <section className={style.container}>
            <div>
                <h1 className={style.title}>Memory Game</h1>
                <h3 className={style.subtitle}>Игра на память</h3>
                <button className={style.button} onClick={()=>{navigate('/game')}}>Играть</button>
            </div>
            <div className={style.test}>
                <div className={style.test2}>
                    <div class={`${style.back} ${style.side}`}>M</div>
                    <div class={`${style.front} ${style.side}`}>🙈</div>
                </div>
            </div>
        </section>
    )
}

export default Home