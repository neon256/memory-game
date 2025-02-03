import Game from "../components/game/game";
import Home from "../components/home/home";
import Lose from "../components/lose/lose";
import Win from "../components/win/win";

export const router = [
    {path:'/', component: <Home/>},
    {path:'/game', component: <Game/>},
    {path:'/win', component: <Win/>},
    {path:'/lose', component: <Lose/>},
]