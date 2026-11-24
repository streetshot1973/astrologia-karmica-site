import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const CHECKOUT = 'https://pay.hotmart.com/P108642080J?sck=pagina_livro';
const PRECO = '47';

export const metadata: Metadata = {
  title: 'As Origens dos Karmas — o livro dos 360 graus | Astrologia Kármica',
  description:
    'Livro digital (PDF, 381 páginas) com a leitura kármica de cada um dos 360 graus do zodíaco: a imagem simbólica, o padrão que a alma traz, como ele aparece hoje e o caminho de cura.',
  openGraph: {
    title: 'As Origens dos Karmas — o livro dos 360 graus',
    description: 'A leitura kármica de cada grau do zodíaco, um grau por página. PDF, 381 páginas.',
    images: ['/images/livro/mockup_3d.webp'],
    locale: 'pt_BR',
    type: 'website',
  },
};

function BotaoComprar({ texto = 'Quero o livro' }: { texto?: string }) {
  return (
    <a
      href={CHECKOUT}
      className="relative inline-flex overflow-hidden group rounded-xl bg-gradient-to-r from-red-900 to-amber-800 border border-yellow-500/50 shadow-[0_0_30px_#b91c1c80] hover:scale-[1.03] active:scale-[0.98] transition-transform"
    >
      <span className="shine-effect absolute inset-0" />
      <span className="relative px-8 py-4 font-serif font-bold text-lg md:text-xl text-yellow-100 tracking-wider">
        {texto} — R$ {PRECO}
      </span>
    </a>
  );
}

function Ornamento() {
  return (
    <div className="flex items-center justify-center gap-3 opacity-50 my-2" aria-hidden>
      <span className="w-1.5 h-1.5 rotate-45 bg-yellow-600" />
      <span className="w-2 h-2 rotate-45 bg-yellow-600" />
      <span className="w-1.5 h-1.5 rotate-45 bg-yellow-600" />
    </div>
  );
}

function Titulo({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-4xl font-bold tracking-wider text-center text-glow mb-8">
      {children}
    </h2>
  );
}

const estrutura = [
  ['A imagem', 'Cada grau abre com uma cena simbólica da tradição dos graus do zodíaco.'],
  ['O padrão que a alma traz', 'O traço de caráter do grau e a leitura kármica: onde essa força se desviou.'],
  ['Como isso pode aparecer hoje', 'Comportamentos concretos, em linguagem do dia a dia, pra você se reconhecer (ou não).'],
  ['O caminho de cura', 'Para onde direcionar essa energia, sem fórmula mágica.'],
  ['Para refletir', 'Uma pergunta direta pra levar com você.'],
];

const faq = [
  [
    'Preciso entender de astrologia?',
    'Não. Você só precisa saber em que grau estão os planetas do seu mapa natal (Sol, Lua, Ascendente e os demais). Qualquer site gratuito de mapa astral mostra isso, e o livro explica no início como usar essa informação.',
  ],
  [
    'Como recebo o livro?',
    'É um PDF. Assim que o pagamento é aprovado, a Hotmart envia o acesso para o seu e-mail. Lê no celular, no tablet ou no computador.',
  ],
  [
    'Quais as formas de pagamento?',
    'As que aparecem no checkout da Hotmart: Pix, cartão de crédito e boleto. O pagamento é processado pela Hotmart, uma das maiores plataformas de produtos digitais do Brasil.',
  ],
  [
    'E se eu não gostar?',
    'Você tem 7 dias de garantia. Pede o reembolso pela própria Hotmart, sem precisar explicar o motivo.',
  ],
  [
    'O livro substitui terapia ou acompanhamento profissional?',
    'Não. É um livro de autoconhecimento e reflexão. Se você está passando por sofrimento intenso, procure um profissional de saúde mental.',
  ],
];

export default function LivroPage() {
  return (
    <main className="relative z-10 flex flex-col items-center">
      {/* Topo */}
      <nav className="w-full max-w-6xl px-4 py-6 flex justify-between items-center">
        <Link href="/" className="font-serif tracking-[0.25em] text-sm text-stone-400 hover:text-yellow-400 uppercase">
          Astrologia Kármica
        </Link>
        <a href={CHECKOUT} className="font-serif text-sm tracking-wider text-yellow-400 hover:text-yellow-200">
          Comprar →
        </a>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-6xl px-4 pt-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative mx-auto w-full max-w-[220px] sm:max-w-sm md:max-w-md">
          <div className="absolute inset-0 bg-yellow-600/10 rounded-full blur-[100px]" aria-hidden />
          <Image
            src="/images/livro/mockup_3d.webp"
            alt="Capa do livro As Origens dos Karmas, de Tiago Valente"
            width={717}
            height={1100}
            priority
            className="relative drop-shadow-[0_20px_40px_#000000aa]"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-yellow-500/80 mb-4">
            Astrologia kármica dos 360 graus
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wider text-glow mb-6 leading-tight">
            As Origens <br />
            dos <span className="text-gradient">Karmas</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light mb-4">
            Cada planeta do seu mapa cai num grau do zodíaco. Cada grau tem uma imagem, um padrão e uma lição.
          </p>
          <p className="text-base md:text-lg text-stone-400 font-light mb-8">
            Este livro traz a leitura kármica dos <strong className="text-stone-200">360 graus</strong>, um por
            página, pra você encontrar os seus e entender o que eles dizem sobre os padrões que se repetem na sua vida.
          </p>
          <BotaoComprar />
          <p className="text-sm text-stone-500 mt-4">PDF · 381 páginas · 7 dias de garantia</p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="w-full max-w-4xl px-4 py-16">
        <Titulo>Como o livro funciona</Titulo>
        <div className="glass-panel rounded-2xl p-6 md:p-10">
          <ol className="space-y-6 text-stone-300">
            <li>
              <span className="font-serif text-yellow-400 mr-2">I.</span>
              Abra o seu mapa natal e anote o signo e o grau de cada planeta. Exemplo: Sol a 1° de Leão.
            </li>
            <li>
              <span className="font-serif text-yellow-400 mr-2">II.</span>
              Vá até o grau no livro. O PDF tem marcadores por signo e por grau, que aparecem na barra lateral do leitor.
            </li>
            <li>
              <span className="font-serif text-yellow-400 mr-2">III.</span>
              Leia a página. Todos os graus seguem a mesma estrutura:
            </li>
          </ol>
          <dl className="mt-6 grid sm:grid-cols-2 gap-4">
            {estrutura.map(([t, d]) => (
              <div key={t} className="border border-yellow-600/20 rounded-xl p-4 bg-black/30">
                <dt className="font-serif text-yellow-400 tracking-wider text-sm uppercase mb-1">✦ {t}</dt>
                <dd className="text-stone-400 text-sm">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Amostra */}
      <section className="w-full max-w-5xl px-4 py-16">
        <Titulo>Veja uma página de verdade</Titulo>
        <p className="text-center text-stone-400 max-w-2xl mx-auto mb-10">
          Esta é a página do 1° grau de Leão, exatamente como está no livro. As outras 359 seguem o mesmo padrão.
        </p>
        <div className="mx-auto max-w-xl rounded-lg overflow-hidden shadow-[0_0_60px_#eab30822] border border-yellow-700/30">
          <Image
            src="/images/livro/pagina_leao_1.webp"
            alt="Página do livro: Leão, 1° grau — O Leão diante do Sol Nascente"
            width={875}
            height={1240}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Para quem é */}
      <section className="w-full max-w-5xl px-4 py-16">
        <Titulo>Para quem é este livro</Titulo>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-yellow-400 tracking-wider mb-4">É para você se…</h3>
            <ul className="space-y-3 text-stone-300 text-sm md:text-base">
              <li>✦ sente que certos padrões se repetem na sua vida e quer outro ângulo para olhar para eles;</li>
              <li>✦ já conhece o básico do seu mapa e quer ir além do signo solar;</li>
              <li>✦ estuda astrologia e quer um livro de consulta grau a grau;</li>
              <li>✦ gosta de leitura simbólica e reflexão, não de previsão.</li>
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-stone-400 tracking-wider mb-4">Não é para você se…</h3>
            <ul className="space-y-3 text-stone-400 text-sm md:text-base">
              <li>— procura previsão de futuro ou datas;</li>
              <li>— quer uma interpretação completa do mapa, com aspectos e casas (o livro trabalha grau a grau);</li>
              <li>— espera um ritual ou uma solução pronta para os seus problemas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="w-full max-w-4xl px-4 py-16">
        <Titulo>O que você recebe</Titulo>
        <div className="glass-panel-heavy rounded-2xl p-6 md:p-10 text-center">
          <ul className="space-y-3 text-stone-300 mb-8">
            <li>✦ Livro digital em PDF, 381 páginas</li>
            <li>✦ A leitura dos 360 graus do zodíaco, um grau por página</li>
            <li>✦ Marcadores no PDF para ir direto a cada signo e grau</li>
            <li>✦ Introdução e guia &ldquo;Como ler este livro&rdquo;</li>
            <li>✦ Leitura no celular, tablet ou computador</li>
          </ul>
          <Ornamento />
          <p className="font-serif text-5xl text-gradient font-bold my-6">R$ {PRECO}</p>
          <BotaoComprar texto="Comprar agora" />
          <p className="text-sm text-stone-500 mt-4">Pagamento seguro pela Hotmart · Pix, cartão ou boleto</p>
        </div>
      </section>

      {/* Garantia */}
      <section className="w-full max-w-3xl px-4 py-12 text-center">
        <div className="inline-flex flex-col items-center glass-panel rounded-2xl px-8 py-8">
          <span className="font-serif text-4xl text-yellow-400 mb-2">7 dias</span>
          <p className="text-stone-300 max-w-md">
            Leu e não era o que esperava? Peça o reembolso em até 7 dias pela própria Hotmart. Sem perguntas.
          </p>
        </div>
      </section>

      {/* Fontes */}
      <section className="w-full max-w-3xl px-4 py-12 text-center">
        <h3 className="font-serif text-yellow-400 tracking-wider mb-3">De onde vem este conteúdo</h3>
        <p className="text-stone-400 text-sm md:text-base">
          As imagens simbólicas partem da tradição clássica dos graus do zodíaco, registrada em{' '}
          <em>La Volasfera</em> (publicada em inglês por Sepharial em 1898, hoje em domínio público). A leitura
          kármica de cada grau é de <strong className="text-stone-200">Tiago Valente</strong>.
        </p>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl px-4 py-16">
        <Titulo>Perguntas frequentes</Titulo>
        <div className="space-y-3">
          {faq.map(([p, r]) => (
            <details key={p} className="glass-panel rounded-xl p-5 group">
              <summary className="cursor-pointer font-serif text-stone-200 tracking-wide list-none flex justify-between gap-4">
                {p}
                <span className="text-yellow-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-stone-400 mt-3 text-sm md:text-base">{r}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="w-full max-w-3xl px-4 py-20 text-center">
        <Ornamento />
        <p className="font-serif text-2xl md:text-3xl text-stone-200 tracking-wide my-6">
          Você continuaria repetindo o mesmo padrão se soubesse de onde ele vem?
        </p>
        <BotaoComprar />
      </section>

      <footer className="w-full border-t border-purple-900/30 py-10 mt-10 bg-black/50 backdrop-blur-md">
        <p className="text-xs text-stone-500 tracking-[0.2em] text-center uppercase">
          &copy; {new Date().getFullYear()} Astrologia Kármica · Tiago Valente
        </p>
      </footer>
    </main>
  );
}
