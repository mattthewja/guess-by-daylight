import { useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'

import HeaderNav from "../../components/HeaderNav.tsx"

export default function HomePage() {
    const navigate = useNavigate();

    return (<>
        <HeaderNav />
        <h1>This is the homepage!</h1>
    </>)
}