
import '../../App.css';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import Card from '../card/card';

///,
function Game() {
  const [arr, setArr] = useState(['😅', '😍', '😵', '🥴', '😌', '🤥', '😷', '😀', '😄', '😁'])
  const [value, setValue] = useState(0)
  const [activeCard, setActiveCard] = useState([]);
  const [winCard, setWinCard] = useState([]);
  const [res, setRes] = useState([]);
  const [loseCard, setLoseCard] = useState([]);
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(Date.now())
  function startGame(e) {
    e.preventDefault()
    if (start === true) {
      return alert('Игра началась')
    }
    if (value > 10 || value <= 0) {
      return alert('Количество должно быть от 1 до 10')
    }
    let newArr = arr
    let spliceArr =  newArr.splice(0, value)
    let shufledArray = [...spliceArr.sort(() => Math.random() - 0.5), ...spliceArr.sort(() => Math.random() - 0.5)];
    let shufledCards = shufledArray.sort(() => Math.random() - 0.5)
    setRes(shufledCards.filter((e) => {
      return e;
    }))
    setDate(Date.now())
    setStart(true)
  }

  useEffect(() => {
    console.log(activeCard)
    if (activeCard.length === 4) {
      if (activeCard[0] === activeCard[2]) {
        setWinCard(activeCard)
        setActiveCard([])
        setCount(count + 1);
      } else {
        setLoseCard([activeCard[1], activeCard[3]])
        setActiveCard([])
      }
    }
  }, [activeCard])
  useEffect(() => {
    if (count === 0) {
      return
    }
    if (count == value) {
      setStart(false)
      setLoseCard([])
      alert('Победа!!!')
      return setCount(0)
    }
  }, [count])

  function ready({ hours, minutes, seconds, completed }) {
    if (completed) {
      setStart(false)
      setLoseCard([])
      setWinCard([])
      return alert('Проигрышь(((')
    } else {
      // Render a countdown
      return <span className='timer'>{hours}:{minutes}:{seconds}</span>;
    }
  }
  return (
    <div className="App">
      <form className='form__container' onSubmit={startGame}>
        <label className='form__title'>Количество пар смайликов</label>
        <input className='form__input' type="number" name="" id="" placeholder={value} onChange={(e) => setValue(e.target.value)} />
        <button className='form__button'>Старт</button>
      </form>
      
      {start &&
        <>
          <Countdown date={date + 63000} renderer={ready}></Countdown>
          <div className='card__container'>
            {res.map((item, index) => {
              return <Card setActiveCard={setActiveCard} activeCard={activeCard} winCard={winCard} loseCard={loseCard} index={index}>{item}</Card>
            })}
          </div>
        </>
      }


    </div>
  );
}

export default Game;
