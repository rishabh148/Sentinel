import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto border-t border-white/10 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-zinc-500 text-sm">

                {/* Tech Stack */}
                <p className="flex items-center gap-1">
                    Built with
                    <span className="text-indigo-400 mx-1">React 19</span>
                    <span className="text-zinc-600">+</span>
                    <span className="text-emerald-400 mx-1">Node.js</span>
                    <span className="text-zinc-600">+</span>
                    <span className="text-cyan-400 mx-1">PostgreSQL</span>
                </p>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/rishabh148"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center gap-2"
                    >
                        <Github size={16} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rishabh-tripathi-b96000264/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                        <Linkedin size={16} /> LinkedIn
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-zinc-600">
                    © {new Date().getFullYear()} Sentinel. Built by{' '}
                    <span className="text-zinc-400">Rishabh Tripathi</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
