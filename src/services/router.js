import Game from "../components/game/game";
import Home from "../components/home/home";

export const router = [
    {path:'/', component: <Home/>},
    {path:'/game', component: <Game/>},
]