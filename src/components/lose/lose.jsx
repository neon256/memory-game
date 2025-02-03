import React from 'react'
import style from './lose.module.css'
import { useNavigate } from 'react-router-dom'
const Lose = () => {
    const navigate = useNavigate()
  return (
    <div className={style.container}>
        <h1 className={style.title}>{`Проигрышь(((`}</h1>
        <svg width='140' height='140' className={style.smile}>
            <circle r="65" cx="70" cy="70" fill="gold" stroke="orange" stroke-width="5"/>
            <circle r='10' cx='50' cy='50' fill='black' stroke='gray' strokeWidth='2'/>
            <circle r='10' cx='90' cy='50' fill='black' stroke='gray' strokeWidth='2'/>
            <circle r='4' cx='88' cy='53' fill='white'/>
            <circle r='4' cx='52' cy='53' fill='white'/>
            <circle r='2' cx='93' cy='48' fill='white'/>
            <circle r='2' cx='47' cy='48' fill='white'/>
            <path stroke='black' strokeWidth='2' fill='none' d='M50,110 C60,100 70,80 90,110'/>
        </svg>
        <svg width='30' height='30' className={style.point}>
            <path stroke='darkblue' fill='blue' strokeWidth='2' d='M15,0 L20,15 C20,20 15,30 10,15 z'/>
        </svg>
        <div className={style.button__container}>
            <button className={style.button} onClick={()=>{navigate('/game')}}>Играть</button>
            <button className={style.button} onClick={()=>{navigate('/')}}>Главная</button>
        </div>
    </div>
  )
}

export default Lose