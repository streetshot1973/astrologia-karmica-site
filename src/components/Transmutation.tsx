'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, BookOpen } from 'lucide-react';

export default function Transmutation() {
    return (
        <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center z-30">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-yellow-600/5 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="max-w-5xl w-full text-center relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-cinzel text-glow mb-8 drop-shadow-2xl">
                    Quebre o Ciclo.<br />
                    <span className="text-gradient">Liberte o Seu Destino.</span>
                </h2>
                <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                    Saber a sua dor é apenas o primeiro passo. A alquimia da sua alma exige ação consciente. Escolha o nível de profundidade que você está disposto a mergulhar hoje.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">

                    {/* Card WhatsApp */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-panel-heavy rounded-3xl p-10 md:p-12 relative overflow-hidden group shadow-[0_0_50px_#10b9811a] border-emerald-900/40 hover:border-emerald-500/50 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-20 h-20 rounded-2xl bg-black border border-emerald-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_#10b98133]">
                                <MessageCircle className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_#34d39980]" />
                            </div>

                            <h3 className="text-3xl font-cinzel text-emerald-100 mb-4 group-hover:text-emerald-300 transition-colors">Mapeamento Kármico Individual</h3>
                            <p className="text-stone-400 mb-10 text-lg leading-relaxed flex-grow">
                                Uma análise particular para identificar os pontos onde o seu fluxo de vida está bloqueado e o caminho astrológico exato para rompê-lo.
                            </p>

                            <a
                                href="https://wa.me/5519991682347?text=Ol%C3%A1%2C%20quase%20um%20novo%20destino!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full overflow-hidden rounded-xl block cursor-pointer group/btn"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-900 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                <div className="shine-effect absolute inset-0" />
                                <span className="relative flex items-center justify-center gap-3 px-6 py-5 font-cinzel font-bold text-xl text-white tracking-wide">
                                    Agendar Sessão
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Card E-book */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-panel-heavy rounded-3xl p-10 md:p-12 relative overflow-hidden group shadow-[0_0_50px_#ef44441a] border-red-900/40 hover:border-red-500/50 transition-colors duration-500"
                    >
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-[60px] group-hover:bg-red-500/20 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-20 h-20 rounded-2xl bg-black border border-red-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_#ef444433]">
                                <BookOpen className="w-10 h-10 text-red-500 drop-shadow-[0_0_10px_#f8717180]" />
                            </div>

                            <h3 className="text-3xl font-cinzel text-red-100 mb-4 group-hover:text-red-300 transition-colors">O E-book: As Origens dos Karmas</h3>
                            <p className="text-stone-400 mb-10 text-lg leading-relaxed flex-grow">
                                O guia definitivo sobre as causas espirituais das suas dificuldades. Um estudo profundo sobre os <span className="text-red-200">360 Graus Sabianos</span> para uma jornada de autolapidação intensa.
                            </p>

                            <a
                                href="#"
                                className="relative w-full overflow-hidden rounded-xl block cursor-pointer group/btn"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-900 opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                <div className="shine-effect absolute inset-0" />
                                <span className="relative flex items-center justify-center gap-3 px-6 py-5 font-cinzel font-bold text-xl text-white tracking-wide">
                                    Desbloquear Acesso
                                </span>
                            </a>
                        </div>
                    </motion.div>

                </div>

                <p className="mt-16 text-stone-500 font-serif italic text-sm md:text-base flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    Garantia de segurança cósmica: O universo nunca dá uma carga maior do que aquela que você pode transmutar.
                </p>

            </motion.div>
        </section>
    );
}
