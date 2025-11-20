import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

export default function CaseStudy() {
    return (
        <StickyLayout
            id="cases"
            title="Case Studies"
            subtitle="Deep dives into complex problems and elegant solutions."
        >
            <FadeIn>
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-neon-purple/20 to-blue-900/20 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white/10">FINTECH</span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs font-bold tracking-wider">CASE STUDY 01</span>
                            <span className="text-gray-500 text-sm">2024</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4">Revolutionizing DeFi Analytics</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            How we built a real-time analytics engine capable of processing 50k+ transactions per second
                            while maintaining a smooth 60fps UI on low-end devices.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50ms</div>
                                <div className="text-sm text-gray-500">Latency</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                                <div className="text-sm text-gray-500">Daily Users</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-neon-purple hover:text-white transition-colors font-medium">
                            Read Full Story <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </FadeIn>
        </StickyLayout>
    );
}
