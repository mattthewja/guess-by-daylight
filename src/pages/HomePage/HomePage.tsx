import { useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'

import HeaderNav from "../../components/HeaderNav.tsx"

export default function HomePage() {
    const navigate = useNavigate();

    return (<>
        <HeaderNav />
        <h1>Guess By Daylight</h1>
    </>)
}