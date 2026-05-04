import { useNavigate } from 'react-router'
import { motion } from 'motion/react'

import './HeaderNav.css'

export default function HeaderNav() {
    const navigate = useNavigate()

    function navToHome() { navigate("/") }
    function navToGame() { navigate("/game") }
    function navToGuide() { navigate("/guide") }

    return (<>
        <header className="header-nav">
            <p>Guess By Daylight</p>
            <nav className="header-nav-bar">
                <motion.button className="nav-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                onClick={() => navToHome()}>
                    Home
                </motion.button>
                
                <motion.button className="nav-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                onClick={() => navToGame()}>
                    Board
                </motion.button>

                <motion.button className="nav-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                onClick={() => navToGuide()}>
                    How to Play
                </motion.button>
            </nav>
        </header>
    
    </>)
}