import React, { useEffect, useState } from 'react'
import style from './card.module.css'
const Card = ({children, setActiveCard, activeCard, winCard, loseCard, index}) => {
    const [active, setActive] = useState(false)
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [click, setClick] = useState(true)

    function activate(e){
        setActive(!active)
        setActiveCard([...activeCard, children, index])
    }
    function closeCard(){
        return
    }
    const timer = () => {
        const timerId = setTimeout(() => {
            if(index === loseCard[0] || index === loseCard[1]){
                setLose(false);
                setActive(false);
            }
          }, 900)
        return timerId
    }
    
    useEffect(()=>{
        if(children === winCard[0] || children === winCard[1]){
            return setWin(true)
        }
    }, [winCard])
    useEffect(()=>{
        if(index === loseCard[0] || index === loseCard[1]){
            setLose(true)
            setClick(true)
        }
        timer()
    }, [loseCard])
    useEffect(()=>{
        if(activeCard[1] === index || activeCard[3] === index){
            setClick(false)
        }
    }, [activeCard])
  return (
    <div className={`${active ? `${style.active} ${style.card} `: style.card} ${win ? style.win : ''} ${lose ? style.lose : ''}`} onClick={win || !click ? closeCard : activate} id='test'>{children}</div>
  )
}

export default Card