import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    const [imgSrc, setImgSrc] = useState('/hero-profile.png');
    const [retryCount, setRetryCount] = useState(0);
    const [hasError, setHasError] = useState(false);

    const fallbacks = ['/yasser.jpg', '/yasser.JPG', '/profile.jpg'];

    const handleImageError = () => {
        if (retryCount < fallbacks.length) {
            setImgSrc(fallbacks[retryCount]);
            setRetryCount(prev => prev + 1);
        } else {
            setHasError(true);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <FadeIn delay={0.1}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-neon-cyan" />
                            <span className="text-neon-cyan font-medium tracking-wider text-sm">Hello I'm Yasser Sabek</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            I Build Websites That{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan">
                                Feel Alive
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                            48-hour delivery. Vibe-first design. Built for businesses that refuse to be boring.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                            <a
                                href="https://wa.me/60145222848"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors text-white inline-flex items-center"
                            >
                                Get Free Demo
                            </a>
                        </div>

                        <div className="flex items-center gap-6 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Mail size={24} /></a>
                        </div>
                    </FadeIn>
                </div>

                {/* Image / Visual */}
                <div className="order-1 lg:order-2 flex justify-center relative">
                    <FadeIn delay={0.3} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] aspect-square">
                        {/* Spinning Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-white/20"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-white/10"
                        />

                        {/* Image Container */}
                        <div className="absolute inset-8 rounded-full overflow-hidden bg-vibe-black border-2 border-white/10 group">
                            {!hasError ? (
                                <>
                                    <img
                                        src={imgSrc}
                                        alt="Yasser Sabek"
                                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        onError={handleImageError}
                                    />
                                    {/* Scanning Beam */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 right-0 h-1 bg-neon-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                    />
                                </>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 text-gray-500">
                                    <span className="text-4xl font-bold text-white/20">YS</span>
                                    <span className="text-xs mt-2 font-mono">IMG_ERR</span>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
