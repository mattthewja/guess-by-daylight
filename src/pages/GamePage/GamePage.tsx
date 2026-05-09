import { useState, useEffect } from 'react'

import HeaderNav from "../../components/HeaderNav.tsx"
import GameBoard from "./components/GameBoard.tsx"

import { killer_paths } from '../../assets/killers/killers.ts';
import { survivor_paths } from '../../assets/survivors/survivors.ts';

import './GamePage.css'

export default function GamePage() {
    const killers : string[] = killer_paths;
    const survivors : string[] = survivor_paths; 

    const [currentPortraits, setCurrentPortraits] = useState<string[]>([]);
    const [playerPortrait, setPlayerPortrait] = useState<string>("");

    function randomisePlayerPortrait() {
        const index : number = Math.floor(Math.random() * currentPortraits.length);
        setPlayerPortrait(currentPortraits[index]); 
    }

    function setToKillers() {
        setCurrentPortraits(killers);
    }

    function setToSurvivors() {
        setCurrentPortraits(survivors);
    }

    function setToBoth() {
        const allPortraits : string[] = killers.concat(survivors);
        setCurrentPortraits(allPortraits);
    }

    useEffect(() => {
        setToKillers();
        randomisePlayerPortrait();
    }, [])

    return (<div className="game-page-wrapper">
        <HeaderNav />
        <h1>This is the game page!</h1>
        <main className="game-main">
            <section className="game-player-wrapper">
                <h2>You are...</h2>
                {playerPortrait && (<img src={playerPortrait} />)}
                <button onClick={() => {randomisePlayerPortrait()}}>Random</button>
            </section>

            <section className="">
                <GameBoard portraits={currentPortraits} />
            </section>
        </main>
    </div>)
}