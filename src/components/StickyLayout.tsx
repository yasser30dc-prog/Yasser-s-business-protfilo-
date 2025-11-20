import type { ReactNode } from 'react';
import FadeIn from './FadeIn';

interface StickyLayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    id?: string;
}

export default function StickyLayout({ title, subtitle, children, id }: StickyLayoutProps) {
    return (
        <section id={id} className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-24">
                {/* Left Column: Context / Headers */}
                <div className="lg:sticky lg:top-32 lg:h-fit">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{title}</h2>
                        {subtitle && (
                            <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                                {subtitle}
                            </p>
                        )}
                        <div className="hidden lg:block mt-12 w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full" />
                    </FadeIn>
                </div>

                {/* Right Column: Scrollable Content */}
                <div className="space-y-12">
                    {children}
                </div>
            </div>
        </section>
    );
}
