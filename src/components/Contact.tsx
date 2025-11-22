import { useState } from 'react';
import FadeIn from './FadeIn';
import { Mail, Send, Check } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };
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

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors w-full"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors w-full"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={4}
                                required
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neon-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : status === 'success' ? (
                                    <>Message Sent! We'll be in touch soon. 🚀</>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
