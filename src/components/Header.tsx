import { useState } from 'react';
import { Menu, X, Code2, Terminal, Cpu, Briefcase, ShoppingBag, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Tech Stack', icon: <Terminal size={18} />, href: '#tech' },
        { name: 'Projects', icon: <Code2 size={18} />, href: '#projects' },
        { name: 'Case Studies', icon: <Briefcase size={18} />, href: '#cases' },
        { name: 'Store', icon: <ShoppingBag size={18} />, href: '#store' },
        { name: 'AI Gallery', icon: <Cpu size={18} />, href: '#ai' },
        { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-vibe-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon-cyan/50">
                            <img src="/yasser.jpeg" alt="Yasser Sabek" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-glow">Yasser Sabek</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-2"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header >

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 z-40 bg-vibe-black/95 backdrop-blur-xl pt-20 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-medium text-gray-300 hover:text-neon-cyan flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
                                    >
                                        <span className="text-neon-purple">{item.icon}</span>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
