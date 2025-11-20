import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';

export default function AIGallery() {
    // Placeholder images using gradients for now
    const images = [
        "bg-gradient-to-br from-purple-500 to-indigo-900",
        "bg-gradient-to-tr from-cyan-500 to-blue-900",
        "bg-gradient-to-bl from-pink-500 to-rose-900",
        "bg-gradient-to-tl from-emerald-500 to-teal-900",
        "bg-gradient-to-r from-amber-500 to-orange-900",
        "bg-gradient-to-b from-gray-200 to-gray-800",
    ];

    return (
        <StickyLayout
            id="ai"
            title="AI Gallery"
            subtitle="Exploring the boundaries of generative art and design."
        >
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
                {images.map((bg, idx) => (
                    <FadeIn key={idx} delay={idx * 0.05}>
                        <div className={`rounded-xl overflow-hidden break-inside-avoid ${idx % 2 === 0 ? 'h-64' : 'h-96'} ${bg} relative group`}>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-mono text-sm">GEN_ART_{idx + 1}</span>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
