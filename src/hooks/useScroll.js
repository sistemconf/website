import { useEffect, useState } from "react"

export default function useScroll() {
    const [scrollAmount, setScrollAmount] = useState(0);
    
    useEffect(() => {
        const onScroll = (e) => {
            setScrollAmount(window.pageYOffset);
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollAmount])
    
    return (
        scrollAmount
    )
}