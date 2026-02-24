'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Lock, ArrowDown } from 'lucide-react';
import { getPlutoReading } from '../services/plutoService';

// Custom Hook for Typewriter Effect
function useTypewriter(text: string, speed: number = 30) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!text) {
            setDisplayedText('');
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        let i = 0;

        const timer = setInterval(() => {
            i++;
            if (i <= text.length) {
                setDisplayedText(text.substring(0, i));
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return { displayedText, isTyping };
}

import Image from 'next/image';

const lockedPlanets = [
    { name: "O Sol Kármico", desc: "A missão de liderança que sua alma falhou em assumir.", image: "/images/planet_sun_1771894211710.png" },
    { name: "A Lua Ancestral", desc: "Feridas maternas e padrões de dependência emocional.", image: "/images/planet_moon_1771894226905.png" },
    { name: "O Ascendente das Sombras", desc: "A máscara que você usa para esconder sua verdadeira dor.", image: "/images/planet_ascendant_1771894243534.png" },
    { name: "A Lilith Primordial", desc: "Seu poder de sedução oculto e desejos reprimidos.", image: "/images/planet_lilith_1771894267039.png" },
    { name: "O Saturno Implacável", desc: "O cobrador do Karma. A maior dívida desta encarnação.", image: "/images/planet_saturn_1771894286513.png" },
    { name: "O Júpiter Arrogante", desc: "Onde você abusou da sabedoria e do poder no passado.", image: "/images/planet_jupiter_1771894326254.png" },
    { name: "A Vênus Ferida", desc: "O padrão destrutivo que você atrai no amor.", image: "/images/planet_venus_1771894357651.png" },
    { name: "O Marte Violento", desc: "A fúria adormecida e o instinto bélico reprimido.", image: "/images/planet_mars_1771894342203.png" },
    { name: "O Mercúrio Ilusório", desc: "Como sua própria mente sabota sua prosperidade.", image: "/images/planet_mercury_1771894380060.png" },
    { name: "O Urano Rebelde", desc: "A ruptura radical necessária para sua libertação.", image: "/images/planet_uranus_1771894398277.png" },
    { name: "O Netuno Nebuloso", desc: "Ilusões, vícios e fugas espirituais kármicas.", image: "/images/planet_neptune_1771894414507.png" }
];

export default function AstralMapGenerator() {
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');

    const [reading, setReading] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [loadingMessage, setLoadingMessage] = useState('Alinhando efemérides...');
    const [error, setError] = useState<string | null>(null);

    const { displayedText, isTyping } = useTypewriter(reading || '', 20);
    const flashRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const birthYear = parseInt(year, 10);

        if (!name || !day || !month || !year || !time || !city) {
            setError("Por favor, preencha todos os campos para um cálculo preciso.");
            setStatus('error');
            return;
        }

        if (isNaN(birthYear) || year.length !== 4) {
            setError("Ano inválido. Digite 4 dígitos.");
            setStatus('error');
            return;
        }

        setStatus('loading');
        setError(null);
        setReading(null);

        // Simulate complex calculation steps
        const messages = [
            "Buscando coordenadas de nascimento...",
            "Calculando posições planetárias em " + year + "...",
            "Consultando registros Akáshicos...",
            "Isolando a Ferida de Plutão..."
        ];

        for (let i = 0; i < messages.length; i++) {
            setLoadingMessage(messages[i]);
            await new Promise(r => setTimeout(r, 1000));
        }

        try {
            const result = await getPlutoReading(birthYear);

            // Flash Epiphany Effect
            if (flashRef.current) {
                flashRef.current.style.opacity = '1';
                setTimeout(() => {
                    if (flashRef.current) flashRef.current.style.opacity = '0';
                }, 800);
            }

            setStatus('success');
            setReading(result);

            // Scroll to the result slightly after it appears
            setTimeout(() => {
                gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1000);

        } catch (err) {
            setStatus('error');
            setError("Os laços kármicos estão nebulosos. Tente novamente.");
        }
    };

    return (
        <section id="oracle" className="min-h-screen relative py-20 px-4 z-20 flex flex-col items-center">
            {/* Flash Overlay */}
            <div
                ref={flashRef}
                className="fixed inset-0 bg-yellow-200/50 mix-blend-screen pointer-events-none z-50 opacity-0 transition-opacity duration-1000 ease-out"
            />

            <div className="max-w-6xl w-full mx-auto relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="glass-panel-heavy rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-cinzel text-glow mb-4">O Mapa Kármico Astrológico</h2>
                        <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                            Insira seus dados de nascimento com exatidão. O sistema calculará a posição dos astros no exato momento em que sua alma encarnou.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10">
                        {/* Name */}
                        <div className="md:col-span-3">
                            <input type="text" placeholder="Seu Nome Completo" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors" />
                        </div>

                        {/* Day, Month, Year */}
                        <input type="number" placeholder="Dia (DD)" value={day} onChange={(e) => setDay(e.target.value)} className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-center text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors" />
                        <input type="number" placeholder="Mês (MM)" value={month} onChange={(e) => setMonth(e.target.value)} className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-center text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors" />
                        <input type="number" placeholder="Ano (AAAA)" value={year} onChange={(e) => setYear(e.target.value)} className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-center text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors" />

                        {/* Time and City */}
                        <div className="md:col-span-1 relative">
                            <input
                                type={time ? "time" : "text"}
                                placeholder="Hora (Ex: 14:30)"
                                value={time}
                                onFocus={(e) => e.target.type = 'time'}
                                onBlur={(e) => { if (!time) e.target.type = 'text' }}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-center text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input type="text" placeholder="Cidade de Nascimento (Ex: São Paulo, SP)" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-black/80 border border-yellow-500/30 rounded-xl px-6 py-4 text-xl text-yellow-100 placeholder-stone-600 focus:outline-none focus:border-yellow-500/60 shadow-inner transition-colors" />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-3 flex justify-center mt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'loading'}
                                className="relative w-full md:w-2/3 overflow-hidden rounded-xl group disabled:opacity-50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="shine-effect absolute inset-0"></div>
                                <span className="relative block h-full flex items-center justify-center px-8 py-5 font-cinzel font-bold text-2xl text-black tracking-wider shadow-lg">
                                    {status === 'loading' ? 'Alinhando Astros...' : 'Gerar Mapa Kármico'}
                                </span>
                            </motion.button>
                        </div>
                    </form>

                    {/* Loading State */}
                    <AnimatePresence mode="wait">
                        {status === 'loading' && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-12 flex flex-col items-center gap-6"
                            >
                                <div className="relative w-24 h-24">
                                    <div className="absolute inset-0 border-4 border-dashed border-yellow-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-2 border-4 border-yellow-400/50 rounded-full border-t-transparent animate-[spin_2s_ease-in-out_infinite]"></div>
                                    <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-yellow-400 animate-pulse" />
                                </div>
                                <p className="font-cinzel text-glow text-xl h-8">{loadingMessage}</p>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 text-center text-red-500 font-inter bg-red-950/30 py-3 rounded-lg border border-red-900/50"
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Results Section (Only visible on success) */}
                <AnimatePresence>
                    {status === 'success' && reading && (
                        <motion.div
                            ref={gridRef}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full flex flex-col gap-12"
                        >
                            {/* The Free Appetizer: Pluto */}
                            <div className="glass-panel rounded-3xl p-8 md:p-12 relative border-yellow-500/30 shadow-[0_0_40px_#eab3081a]">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black border border-yellow-500/50 px-6 py-2 rounded-full shadow-[0_0_15px_#eab30833]">
                                    <span className="font-cinzel text-yellow-400 text-sm tracking-widest uppercase">Revelação Gratuita</span>
                                </div>

                                <h3 className="text-3xl font-cinzel text-center text-yellow-100 mb-8 mt-4">A Ferida de Plutão</h3>

                                <div className="relative border-l-2 border-yellow-500/50 pl-6 md:pl-10 py-4 max-w-3xl mx-auto">
                                    <Sparkles className="absolute -left-3 -top-3 w-6 h-6 text-yellow-400" />
                                    <p className="font-serif text-xl md:text-2xl leading-relaxed text-yellow-50/90 whitespace-pre-wrap">
                                        {displayedText}
                                        {isTyping && <span className="inline-block w-2 h-6 bg-yellow-400 ml-1 animate-pulse" />}
                                    </p>
                                </div>

                                {!isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex justify-center mt-12"
                                    >
                                        <div className="flex flex-col items-center text-stone-500 animate-bounce">
                                            <span className="text-sm font-inter mb-2 uppercase tracking-wide">Desvende o Restante</span>
                                            <ArrowDown className="w-6 h-6" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* The Locked Grid */}
                            {!isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="relative"
                                >
                                    <div className="text-center mb-10">
                                        <h3 className="text-3xl md:text-4xl font-cinzel text-stone-300">Os Padrões Adormecidos</h3>
                                        <p className="text-stone-500 mt-2">Existem partes da sua jornada que ainda aguardam para serem integradas.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

                                        {/* Overlay to enforce the paywall visually */}
                                        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/80 to-black flex items-end justify-center pb-20 pointer-events-none">
                                            {/* We will leave this empty as the CTAs will be below, but this serves as a fade out */}
                                        </div>

                                        {lockedPlanets.map((planet, index) => (
                                            <div key={index} className="glass-panel border-stone-800 p-6 flex items-start gap-4 relative overflow-hidden group min-h-[140px]">
                                                {/* Background Image */}
                                                <div className="absolute inset-0 z-0 opacity-80 overflow-hidden mix-blend-lighten">
                                                    <Image
                                                        src={planet.image}
                                                        alt={planet.name}
                                                        fill
                                                        className="object-cover scale-125 group-hover:scale-110 transition-transform duration-1000"
                                                    />
                                                </div>

                                                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10"></div>

                                                <div className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center relative z-20 shrink-0 shadow-xl">
                                                    <Lock className="w-5 h-5 text-stone-500" />
                                                </div>
                                                <div className="relative z-0 blur-sm flex-1 opacity-50 select-none">
                                                    <h4 className="font-cinzel text-lg text-stone-300 mb-1">{planet.name}</h4>
                                                    <p className="font-inter text-sm text-stone-500 line-clamp-2">{planet.desc}</p>

                                                    <div className="mt-4 space-y-2">
                                                        <div className="h-2 bg-stone-800 rounded w-full"></div>
                                                        <div className="h-2 bg-stone-800 rounded w-4/5"></div>
                                                        <div className="h-2 bg-stone-800 rounded w-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Paywall CTAs */}
                                    <div className="relative z-30 flex flex-col items-center mt-[-100px] pb-20 px-4">
                                        <div className="glass-panel-heavy p-8 border-yellow-500/50 rounded-2xl max-w-2xl w-full text-center shadow-[0_0_50px_#eab3081a]">
                                            <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                            <h3 className="text-2xl md:text-3xl font-cinzel text-glow mb-4">Acesso Restrito</h3>
                                            <p className="text-stone-300 mb-8 font-inter">
                                                A interpretação de Plutão é apenas o começo. O seu <strong>Mapa Kármico Completo</strong> revela os 12 pontos essenciais da sua jornada, detalhando como cada sombra afeta seus relacionamentos e finanças hoje.
                                            </p>

                                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <a
                                                    href="https://wa.me/5519991682347?text=Ol%C3%A1%2C%20quase%20um%20novo%20destino!"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-yellow-600 to-amber-500 text-black font-bold px-8 py-3 rounded-xl font-inter shadow-[0_0_20px_#eab3084d] hover:scale-105 transition-transform"
                                                >
                                                    Agende sua consulta completa
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
