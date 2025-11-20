import FadeIn from './FadeIn';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <FadeIn>
                <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                                    <Mail size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Let's Work Together</h2>
                            </div>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Have a project in mind? I'm currently available for freelance work and open to discussing new opportunities.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                    <span>Available for new projects</span>
                                </div>
                                <div className="text-2xl font-bold text-white">hello@yassersabek.com</div>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                            />
                            <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neon-cyan transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
