import { useState } from 'react'

import HeaderNav from "../../components/HeaderNav.tsx"

export default function GamePage() {


    return (<div className="game-page-wrapper">
        <HeaderNav />
        <h1>This is the game page!</h1>
        <main className="game-main">
            <section className="game-player-wrapper">
                <h2>You are...</h2>
            </section>

            <section className="">
                <h2>This is the game board</h2>
            </section>
        </main>
    </div>)
}