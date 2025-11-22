import StickyLayout from './StickyLayout';
import FadeIn from './FadeIn';
import { ShoppingBag, Star, MessageCircle } from 'lucide-react';

export default function Store() {
    const products = [
        {
            title: "BWcommerce Website",
            price: "$499",
            description: "Fully functional e-commerce platform. Minimalist, high-performance, and conversion-optimized.",
            rating: 5.0,
            image: "/store/bw-commerce.png",
            isImage: true,
            cta: "Launch Your Store"
        },
        {
            title: "High-Converting Landing Page",
            price: "$200",
            description: "One-page site designed to capture leads and drive sales. Perfect for campaigns.",
            rating: 4.9,
            image: "/store/landing-page.png",
            isImage: true,
            cta: "Boost Your Sales"
        },
        {
            title: "Portfolio Website",
            price: "$350",
            description: "Showcase your work with style. Custom animations, dark mode, and mobile-responsive.",
            rating: 5.0,
            image: "/store/portfolio.png",
            isImage: true,
            cta: "Elevate Your Brand"
        },
        {
            title: "7 AI Ads Package",
            price: "$300",
            description: "Complete ad creation: Scripting, AI generation, and editing for 7 high-impact video ads.",
            rating: 4.8,
            image: "/store/ai-ads.png",
            isImage: true,
            cta: "Scale With AI"
        }
    ];

    const handlePurchase = (productTitle: string) => {
        const message = encodeURIComponent(`I'm interested in the ${productTitle}`);
        window.open(`https://wa.me/60145222848?text=${message}`, '_blank');
    };

    return (
        <StickyLayout
            id="store"
            title="Digital Store"
            subtitle="Premium services and assets to elevate your digital presence."
        >
            <div className="grid md:grid-cols-2 gap-6">
                {products.map((product, idx) => (
                    <FadeIn key={product.title} delay={idx * 0.1}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-neon-cyan/50 transition-colors flex flex-col h-full">
                            <div className={`h-48 ${!product.isImage ? product.image : ''} relative overflow-hidden`}>
                                {product.isImage && (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                {!product.isImage && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ShoppingBag className="text-white/20 group-hover:text-neon-cyan transition-colors transform group-hover:scale-110 duration-300" size={48} />
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                                        <Star size={12} fill="currentColor" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg leading-tight">{product.title}</h3>
                                    <span className="font-mono text-neon-green font-bold">{product.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{product.description}</p>
                                <button
                                    onClick={() => handlePurchase(product.title)}
                                    className="w-full py-3 bg-white/10 hover:bg-neon-cyan hover:text-black rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-white/20"
                                >
                                    {product.cta} <MessageCircle size={16} />
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </StickyLayout>
    );
}
