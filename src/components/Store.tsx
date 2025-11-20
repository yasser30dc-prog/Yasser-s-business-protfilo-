import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { ShoppingBag, Star } from 'lucide-react';

export default function Store() {
    const products = [
        {
            title: "Vibe Coding Theme",
            price: "$49",
            rating: 5.0,
            image: "bg-gradient-to-br from-gray-800 to-black"
        },
        {
            title: "React Performance Kit",
            price: "$99",
            rating: 4.9,
            image: "bg-gradient-to-br from-neon-cyan/20 to-black"
        }
    ];

    return (
        <StickyLayout
            id="store"
            title="Digital Store"
            subtitle="Premium assets and templates for developers who care about details."
        >
            <div className="grid md:grid-cols-2 gap-6">
                {products.map((product, idx) => (
                    <FadeIn key={product.title} delay={idx * 0.1}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-neon-cyan/50 transition-colors">
                            <div className={`h-48 ${product.image} flex items-center justify-center`}>
                                <ShoppingBag className="text-white/20 group-hover:text-neon-cyan transition-colors transform group-hover:scale-110 duration-300" size={48} />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{product.title}</h3>
                                    <span className="font-mono text-neon-green">{product.price}</span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    <Star size={14} fill="currentColor" />
                                    <span>{product.rating}</span>
                                </div>
                                <button className="w-full mt-6 py-3 bg-white/10 hover:bg-neon-cyan hover:text-black rounded-lg font-medium transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
