import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astrologia Kármica | Desvende Seu Destino",
  description: "Descubra qual ferida kármica geracional aprisiona a sua alma nesta vida e inicie sua jornada de transmutação e cura profunda.",
  keywords: ["Astrologia Kármica", "Karma", "Mapa Astral", "Mapa Kármico", "Transmutação", "Sombra Junguiana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="antialiased min-h-screen selection:bg-yellow-500/30 selection:text-yellow-200">
        <div className="fixed inset-0 pointer-events-none aurora-bg opacity-30 mix-blend-screen z-0"></div>
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{ backgroundImage: "url('/images/capa_parallax.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}
        ></div>
        <div className="fixed inset-0 pointer-events-none animate-stardust opacity-50 mix-blend-overlay z-0"></div>
        {children}
      </body>
    </html>
  );
}
