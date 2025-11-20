import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
            <motion.div
                style={{ x, y }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />
            <motion.div
                style={{ x, y }}
                className="absolute top-0 left-0 w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />
        </div>
    );
}
