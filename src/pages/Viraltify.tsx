import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, BarChart3, Brain, Layout, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MouseSpotlight from '../components/MouseSpotlight';

export default function Viraltify() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-vibe-black selection:bg-neon-cyan/30 selection:text-neon-cyan">
            <MouseSpotlight />
            <Header />

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={20} />
                            Back to Portfolio
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-[1px] w-12 bg-neon-purple" />
                                    <span className="text-neon-purple font-medium tracking-wider text-sm">CASE STUDY</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    Viraltify: <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-pink-500">
                                        Viral Intelligence
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    A fully-implemented viral content intelligence platform that helps creators save 15-20 hours per week by automating trend research and script generation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">React + TypeScript</div>
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">Supabase</div>
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">Tailwind CSS</div>
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">OpenRouter AI</div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-vibe-black aspect-video">
                                    <img
                                        src="/viraltify-cover.png"
                                        alt="Viraltify Platform"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Key Metrics */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-white mb-2">100%</div>
                                <div className="text-gray-400 text-sm">Feature Complete</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-white mb-2">20h</div>
                                <div className="text-gray-400 text-sm">Saved Per Week</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-400 text-sm">Custom Components</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-white mb-2">98</div>
                                <div className="text-gray-400 text-sm">Lighthouse Score</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                            <Zap className="text-neon-purple" />
                            Core Features
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <BarChart3 className="text-blue-400" />,
                                    title: "Discovery Engine",
                                    desc: "Analyze competitor accounts to find viral content patterns with multi-account batch analysis."
                                },
                                {
                                    icon: <Layout className="text-pink-400" />,
                                    title: "Script Builder",
                                    desc: "Visual tldraw canvas for script creation with AI assistance and custom shapes."
                                },
                                {
                                    icon: <Brain className="text-purple-400" />,
                                    title: "AI Integration",
                                    desc: "Intelligent script generation using OpenRouter (GPT-4, Claude) with voice personalization."
                                },
                                {
                                    icon: <Users className="text-green-400" />,
                                    title: "Content Calendar",
                                    desc: "5-stage kanban board for production pipeline management and scheduling."
                                },
                                {
                                    icon: <Shield className="text-yellow-400" />,
                                    title: "Subscription System",
                                    desc: "Complete monetization system with tiered plans, usage tracking, and Stripe integration."
                                },
                                {
                                    icon: <Layout className="text-cyan-400" />,
                                    title: "Onboarding",
                                    desc: "Interactive tutorials and progress tracking to guide new users through the platform."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                    <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-neon-purple">Backend & Database</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>Supabase PostgreSQL with 15+ core tables</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>27 Edge Functions for scraping, AI, and payments</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>Row Level Security (RLS) for data protection</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>Real-time updates via Supabase subscriptions</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-pink-500">Frontend & UX</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>React 18 + TypeScript + Tailwind CSS</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>Framer Motion for smooth 300ms transitions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>tldraw integration for infinite canvas editing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="mt-1 text-green-400 shrink-0" />
                                        <span>Mobile-first responsive design</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">Ready to build something similar?</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            I help businesses build high-performance, scalable web applications with modern tech stacks.
                        </p>
                        <Link to="/" className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors">
                            Contact Me
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
