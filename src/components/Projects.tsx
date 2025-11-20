import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Neon Commerce",
            description: "A high-performance headless e-commerce platform built with Next.js and Shopify.",
            tags: ["Next.js", "Shopify", "Tailwind", "Redis"],
            link: "#",
            github: "#",
            color: "from-neon-cyan to-blue-600"
        },
        {
            title: "AI Dashboard",
            description: "Real-time analytics dashboard powered by machine learning models.",
            tags: ["React", "Python", "D3.js", "FastAPI"],
            link: "#",
            github: "#",
            color: "from-neon-purple to-pink-600"
        },
        {
            title: "Crypto Portfolio",
            description: "DeFi asset tracker with real-time price updates and portfolio analysis.",
            tags: ["Web3", "Ethers.js", "React", "Supabase"],
            link: "#",
            github: "#",
            color: "from-neon-green to-emerald-600"
        }
    ];

    return (
        <StickyLayout
            id="projects"
            title="Selected Work"
            subtitle="A collection of projects that push the boundaries of web performance and interaction."
        >
            <div className="space-y-8">
                {projects.map((project, idx) => (
                    <FadeIn key={project.title} delay={idx * 0.1}>
                        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-neon-cyan/80 bg-neon-cyan/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
