# Amor de Quatro Patas — V3.4.4

Principais mudanças:
- visitante não vê mensagens técnicas de conexão nem rodapé interno;
- relatórios disponíveis apenas para Editor/Admin;
- Relatório Simples: foto pequena + dados públicos;
- Relatório Detalhado: ficha completa;
- filtros de relatório por espécie, sexo, situação, internação e intervalo de Data da saída;
- relatórios abrem em formato A4 e usam a caixa de impressão do navegador para salvar como PDF ou imprimir.

Exemplo para contar adoções em um período: Situação = Adotado + Data da saída (de/até). O total aparece no cabeçalho do relatório.


V3.4.1: oculta mensagens técnicas no modo visitante e adiciona botão destacado Relatórios / PDF na área interna.


## V3.4.2
- Área visitante não exibe contagem total de animais nem resumo estatístico/listagem.
- Resumos quantitativos ficam restritos à área interna.


## V3.4.4
Atualiza o service worker para um cache novo e usa estratégia network-first para navegação/HTML, reduzindo o risco de a PWA instalada continuar exibindo uma versão antiga do app.
