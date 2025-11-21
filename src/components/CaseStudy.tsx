import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
    {
        id: '01',
        year: '2025',
        title: 'Viraltify: AI Viral Content Intelligence',
        description: 'A production-ready SaaS platform that automates trend research and script generation, saving creators 20+ hours per week. Built with React, Supabase, and OpenRouter AI.',
        metrics: [
            { value: '20h+', label: 'Saved / Week' },
            { value: '100%', label: 'Feature Complete' }
        ],
        image: '/viraltify-cover.png',
        link: '/viraltify',
        isExternal: false,
        tag: 'SAAS PRODUCT'
    },
    {
        id: '02',
        year: '2024',
        title: 'AI Marketing Machine',
        description: 'Malaysia\'s premier 2-day AI marketing workshop. A comprehensive system teaching AI copywriting, design, and video creation to SMEs and marketers.',
        metrics: [
            { value: 'RM4.5k', label: 'Toolkit Value' },
            { value: '2 Days', label: 'Intensive Workshop' }
        ],
        image: '/ai-marketing-cover.png',
        link: 'https://aimarketingmachine.online/',
        isExternal: true,
        tag: 'EDUCATION'
    }
];

export default function CaseStudy() {
    return (
        <StickyLayout
            id="cases"
            title="Case Studies"
            subtitle="Deep dives into complex problems and elegant solutions."
        >
            <div className="space-y-12">
                {caseStudies.map((study, index) => (
                    <FadeIn key={study.id} delay={index * 0.1}>
                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
                            <div className="h-64 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-pink-500/20 z-10" />
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <span className="text-6xl font-bold text-white/20 tracking-widest uppercase">{study.tag}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-bold tracking-wider">CASE STUDY {study.id}</span>
                                    <span className="text-gray-500 text-sm">{study.year}</span>
                                </div>

                                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {study.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-sm text-gray-500">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {study.isExternal ? (
                                    <a
                                        href={study.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-neon-purple hover:text-white transition-colors font-medium"
                                    >
                                        View Project <ExternalLink size={18} />
                                    </a>
                                ) : (
                                    <Link
                                        to={study.link}
                                        className="inline-flex items-center gap-2 text-neon-purple hover:text-white transition-colors font-medium"
                                    >
                                        Read Full Story <ArrowRight size={18} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
