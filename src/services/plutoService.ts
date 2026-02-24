export const getPlutoReading = async (birthYear: number): Promise<string> => {
    // Simulate a slight delay to keep the "oracle consulting" feel from the original UI
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (birthYear < 1913) {
        return "As energias desta época antecedem o foco da nossa análise kármica atual. Sua jornada carrega mistérios de eras passadas.";
    } else if (birthYear >= 1913 && birthYear <= 1938) {
        return "Plutão em Câncer (1913-1938)\n\nA Ferida: Traumas profundos ligados à desestruturação familiar, sensação de abandono ou não pertencimento.\nA Sombra: Dependência emocional extrema ou frieza como mecanismo de defesa.\nA Cura: Construir um lar seguro dentro de si mesmo, não dependendo de estruturas externas para nutrir sua alma.";
    } else if (birthYear >= 1939 && birthYear <= 1957) {
        return "Plutão em Leão (1939-1957)\n\nA Ferida: A necessidade desesperada de aprovação e o medo aterrorizante da invisibilidade ou de não ser 'especial'.\nA Sombra: O narcisismo ferido, o autoritarismo e a vaidade cobrindo um complexo de inferioridade.\nA Cura: Descobrir o autêntico poder pessoal que brilha sem precisar apagar a luz dos outros. A verdadeira realeza da alma.";
    } else if (birthYear >= 1958 && birthYear <= 1971) {
        return "Plutão em Virgem (1958-1971)\n\nA Ferida: A crítica severa, a obsessão pela perfeição inalcançável e um complexo de servidão que esgota a vida.\nA Sombra: O controle obsessivo sobre detalhes, a hipocondria emocional e a incapacidade de relaxar.\nA Cura: Transformar a compulsão por perfeição em verdadeira utilidade. O serviço eficiente guiado pela compaixão e não pela culpa.";
    } else if (birthYear >= 1972 && birthYear <= 1983) {
        return "Plutão em Libra (1972-1983)\n\nA Ferida: Padrões kármicos tóxicos em relacionamentos, a perda da própria identidade em favor da paz a qualquer custo.\nA Sombra: A manipulação nas parcerias, codependência, e o medo absoluto de enfrentar o conflito e a solidão.\nA Cura: Encontrar o equilíbrio cortante e verdadeiro entre o 'Eu' e o 'Outro', destruindo falsas harmonias.";
    } else if (birthYear >= 1984 && birthYear <= 1995) {
        return "Plutão em Escorpião (1984-1995)\n\nA Ferida: Herança de traumas ocultos, medos irracionais de traição e uma intensidade emocional destrutiva.\nA Sombra: A manipulação de poder, a obsessão por controle através do oculto e a dificuldade de confiar e perdoar.\nA Cura: A alquimia final da dor. Usar a capacidade de ver no escuro para curar feridas profundas, transmutando o veneno em remédio.";
    } else if (birthYear >= 1996 && birthYear <= 2008) {
        return "Plutão em Sagitário (1996-2008)\n\nA Ferida: O fanatismo, a sensação de estar preso em dogmas alheios e a angústia diante da falta de sentido existencial.\nA Sombra: A arrogância intelectual, a dificuldade em aceitar diferentes verdades e o escapismo através de excessos.\nA Cura: A busca por um significado filosófico ou espiritual próprio, que expanda a consciência sem precisar de velhos deuses.";
    } else if (birthYear >= 2009 && birthYear <= 2024) {
        return "Plutão em Capricórnio (2009-2024)\n\nA Ferida: O peso esmagador das responsabilidades, o medo do fracasso material e estruturas que não sustentam a alma.\nA Sombra: A ambição implacável, a frieza institucional e o abuso de poder para manter o controle absoluto.\nA Cura: Demolir castelos construídos sobre areia. Construir bases reais de autoridade e integridade no mundo material.";
    } else {
        return "Sua geração inaugura a era de Plutão em Aquário, os construtores psíquicos de um novo tecido coletivo. O karma a ser transmutado será das noções antiquadas de inovação.";
    }
};
