export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    &copy; {new Date().getFullYear()} Sabek Media LLC 30 N Gould St Ste R, Sheridan, WY 82801 . All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
