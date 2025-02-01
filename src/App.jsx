import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { useEffect, useMemo, useState } from 'react';

///,'😁','😆','😱','🙈','😺','🥺','🤓','😴'
function App() {
  const arr = ['😅','😍','😵','🥴','😌', '🤥', '😷','😀','😄']
  const [activeCard, setActiveCard] = useState([]);
  const [winCard, setWinCard] = useState([]);
  const [res, setRes] = useState([]);
  const [loseCard, setLoseCard] = useState([]);
  useEffect(()=>{
    console.log(activeCard)
    if(activeCard.length === 4){
      if(activeCard[0] === activeCard[2]){
        setWinCard(activeCard)
        setActiveCard([])
        
      } else {
        setLoseCard([activeCard[1], activeCard[3]])
        setActiveCard([])
      }
    }
    
    
  }, [activeCard])
  useEffect(()=>{
    const shufledArray = [...arr.sort(() => Math.random() - 0.5), ...arr.sort(() => Math.random() - 0.5)];
    const shufledCards = shufledArray.sort(()=> Math.random() - 0.5)
    setRes(shufledCards.filter((e)=>{
      return e;
    }))
  }, [])
  
 
  return (
    <div className="App">
      {/* <form className='form__container'>
        <label className='form__title'>Ширина</label>
        <input className='form__input' type="number" name="" id="" />
        <label className='form__title'>Высота</label>
        <input className='form__input' type="number" name="" id="" />
        <button className='form__button'>Старт</button>
      </form> */}
      <div className='card__container'>
      {res.map((item, index)=>{
        return <Card setActiveCard={setActiveCard} activeCard={activeCard} winCard={winCard} loseCard={loseCard} index={index}>{item}</Card>
      })}
      </div>
      
    </div>
  );
}

export default App;
