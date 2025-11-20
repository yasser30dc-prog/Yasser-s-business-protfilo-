import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { Layout, Server, Cpu, Globe } from 'lucide-react';

export default function TechStack() {
    const categories = [
        {
            title: "Frontend Core",
            icon: <Layout className="text-neon-cyan" />,
            skills: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js 14"]
        },
        {
            title: "Backend & Infra",
            icon: <Server className="text-neon-purple" />,
            skills: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS Lambda"]
        },
        {
            title: "AI & Data",
            icon: <Cpu className="text-neon-green" />,
            skills: ["Python", "TensorFlow", "OpenAI API", "LangChain", "Pinecone"]
        },
        {
            title: "Tools & Architecture",
            icon: <Globe className="text-white" />,
            skills: ["Git", "CI/CD", "Microservices", "GraphQL", "System Design"]
        }
    ];

    return (
        <StickyLayout
            id="tech"
            title="Tech Stack"
            subtitle="My arsenal of tools for building high-performance digital experiences."
        >
            <div className="grid md:grid-cols-2 gap-6">
                {categories.map((category, idx) => (
                    <FadeIn key={category.title} delay={idx * 0.1}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-black/30 border border-white/5 rounded-full text-sm text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
