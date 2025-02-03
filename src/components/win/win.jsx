import React from 'react'
import style from './win.module.css'
import { useNavigate } from 'react-router-dom'

const Win = () => {
    const navigate = useNavigate()
  return (
    <div className={style.container}>
        {/* <svg>
            <path stroke="green" stroke-width="3" fill="none"  d='M 0,120 C 120,60 140,55 145,19'/>
        </svg> */}
        <h1 className={style.title}>Победа!!!</h1>
        <div className={style.conviti}>
        <svg width='145px' height='145px'>
            <path stroke="red" stroke-width="10" fill="none"  d='M 0,120 C10,120 20,110 20,122 C20,122 35,120 40,120'/>
        </svg>
        </div>
        <div className={style.conviti2}>
        <svg width='145px' height='145px'>
            <path stroke="blue" stroke-width="10" fill="none"  d='M 0,120 C10,120 20,110 20,122 C20,122 35,120 40,120'/>
        </svg>
        </div>
        <div className={style.conviti3}>
        <svg width='145px' height='145px'>
            <path stroke="green" stroke-width="10" fill="none"  d='M 0,120 C10,120 20,110 20,122 C20,122 35,120 40,120'/>
        </svg>
        </div>
        <div className={style.triangle}></div>
        <div className={style.circle}></div>
        <div className={style.circle2}></div>
        <div className={style.button__container}>
            <button className={style.button} onClick={()=>{navigate('/game')}}>Играть</button>
            <button className={style.button} onClick={()=>{navigate('/')}}>Главная</button>
        </div>
    </div>
  )
}

export default Win