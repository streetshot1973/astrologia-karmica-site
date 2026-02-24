'use client';

import { motion } from 'framer-motion';
import { HeartCrack, Coins, Activity } from 'lucide-react';

const painPoints = [
    {
        title: "Relacionamentos Tóxicos",
        desc: "Atrair sempre o mesmo padrão destrutivo. O abandono, a traição ou o vazio afetivo não são azares, são repetições kármicas não resolvidas.",
        icon: HeartCrack,
        color: "text-red-500",
        shadow: "shadow-[0_0_20px_#ef444433]",
        border: "group-hover:border-red-500/50"
    },
    {
        title: "Estagnação Financeira",
        desc: "Trabalhar até a exaustão e nunca ver o dinheiro sobrar. A crença limitante de escassez ancorada em vidas passadas corta o seu fluxo de prosperidade.",
        icon: Coins,
        color: "text-amber-500",
        shadow: "shadow-[0_0_20px_#f59e0b33]",
        border: "group-hover:border-amber-500/50"
    },
    {
        title: "Bloqueios Vitais",
        desc: "Cansaço extremo sem causa médica, ansiedade inexplicável e falta de propósito. O peso de carregar bagagens espirituais que não são suas.",
        icon: Activity,
        color: "text-purple-500",
        shadow: "shadow-[0_0_20px_#a855f733]",
        border: "group-hover:border-purple-500/50"
    }
];

export default function Diagnosis() {
    return (
        <section className="relative min-h-screen py-24 px-4 overflow-hidden z-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-cinzel text-glow mb-6">Os Pontos de Desequilíbrio</h2>
                    <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Sua dor não é uma coincidência. É um aviso cósmico. Onde sua vida mais dói é exatamente onde seu Karma está exigindo transmutação.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((pain, index) => (
                        <motion.div
                            key={pain.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`glass-panel p-10 rounded-2xl relative group transition-all duration-500 hover:-translate-y-2 cursor-default ${pain.shadow} ${pain.border}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 pb-1 transition-transform duration-500 group-hover:scale-110`}>
                                    <pain.icon className={`w-8 h-8 ${pain.color}`} />
                                </div>

                                <h3 className="text-2xl font-cinzel text-stone-200 mb-4">{pain.title}</h3>
                                <p className="text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors">
                                    {pain.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
