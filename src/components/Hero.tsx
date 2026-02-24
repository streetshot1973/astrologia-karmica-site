'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const rotateCompass = useTransform(scrollYProgress, [0, 1], [0, 90]);

    const scrollToOracle = () => {
        document.getElementById('oracle')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <motion.div
                    style={{ y: yText, scale }}
                    className="text-center w-full max-w-4xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ rotate: rotateCompass }}
                        className="mb-8 relative"
                    >
                        <div className="w-40 h-40 md:w-56 md:h-56 relative drop-shadow-[0_0_30px_#eab30866]">
                            <Image
                                src="/images/hero.png"
                                alt="Astrologia Kármica"
                                fill
                                className="object-contain animate-[pulse_4s_ease-in-out_infinite]"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold tracking-widest text-glow mb-6"
                    >
                        Você já viveu<br />isso <span className="text-gradient">antes.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-2xl text-stone-400 font-light max-w-2xl mx-auto mb-12"
                    >
                        E vai viver de novo. A não ser que descubra a raiz oculta das suas dores e quebre o ciclo de uma vez por todas.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToOracle}
                        className="relative overflow-hidden group rounded-xl bg-gradient-to-r from-red-900 to-amber-800 border box-border border-yellow-500/50 shadow-[0_0_30px_#b91c1c80]"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        <div className="shine-effect absolute inset-0" />
                        <span className="relative flex items-center justify-center gap-3 px-8 py-4 font-cinzel font-bold text-lg md:text-xl text-yellow-100 tracking-wider">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            Descobrir minha herança Karmica
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 cursor-pointer hover:text-yellow-500 transition-colors"
                onClick={scrollToOracle}
            >
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase">Desça às Sombras</span>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
