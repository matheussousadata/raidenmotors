<div align="center">

```
██████╗  █████╗ ██╗██████╗ ███████╗███╗   ██╗    ███╗   ███╗ ██████╗ ████████╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗██║██╔══██╗██╔════╝████╗  ██║    ████╗ ████║██╔═══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
██████╔╝███████║██║██║  ██║█████╗  ██╔██╗ ██║    ██╔████╔██║██║   ██║   ██║   ██║   ██║██████╔╝███████╗
██╔══██╗██╔══██║██║██║  ██║██╔══╝  ██║╚██╗██║    ██║╚██╔╝██║██║   ██║   ██║   ██║   ██║██╔══██╗╚════██║
██║  ██║██║  ██║██║██████╔╝███████╗██║ ╚████║    ██║ ╚═╝ ██║╚██████╔╝   ██║   ╚██████╔╝██║  ██║███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝    ╚═╝     ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
```

**Website institucional premium para concessionária de veículos de luxo**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-6A0DAD?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## Índice

- [Visão Geral](#visão-geral)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Identidade Visual](#identidade-visual)
- [Arquitetura CSS](#arquitetura-css)
- [Arquitetura JavaScript](#arquitetura-javascript)
- [Seções do Site](#seções-do-site)
- [Formulário de Financiamento](#formulário-de-financiamento)
- [Responsividade](#responsividade)
- [Como Executar](#como-executar)
- [Customização](#customização)
- [Considerações Técnicas](#considerações-técnicas)
- [Licença](#licença)

---

## Visão Geral

**Raiden Motors** é um website institucional de alto padrão desenvolvido para uma concessionária de veículos de luxo. O projeto foi construído integralmente com tecnologias web nativas — HTML5, CSS3 e JavaScript puro — sem dependência de frameworks ou bibliotecas externas, mantendo performance máxima e total controle sobre cada detalhe visual e comportamental.

O design é inspirado nas principais marcas automotivas premium do mundo (Porsche, Lamborghini, BMW M, Mercedes AMG) e traduz seus princípios estéticos — minimalismo sofisticado, paleta escura, tipografia elegante e animações cinematográficas — para o ambiente digital.

Todos os assets de imagem (fotografias de veículos e fundadores) são embutidos diretamente no código como `data URI` em Base64, eliminando requisições externas e garantindo funcionamento offline completo.

---

## Demonstração

Abra o arquivo `index.html` diretamente no navegador. Nenhum servidor local é necessário.

```
raiden-motors/
└── index.html   ← ponto de entrada, abrir no browser
```

---

## Funcionalidades

### Experiência do Usuário

- Cursor personalizado com anel de rastreamento e efeito de escala ao hover
- Loader de entrada com barra de progresso animada
- Scroll reveal progressivo em todos os elementos de conteúdo
- Contadores estatísticos animados com easing cúbico ao entrar na viewport
- Navegação suave entre âncoras com `scroll-behavior: smooth`
- Navbar transparente que transiciona para estado fosco com blur ao rolar a página

### Galeria de Veículos

- Grid responsivo de cards com efeito de varredura de luz (headlight sweep) em hover
- Filtro por categoria (Todos / Esporte / SUV / Sedan) sem recarregamento de página
- Card destacado (featured) com proporção 16:7 para o veículo principal
- Especificações rápidas visíveis ao hover (quilometragem, motor, potência)

### Modal de Visualização

- Painel lateral com ficha técnica completa, equipamentos e informações comerciais
- Navegação entre veículos com teclado (setas esquerda/direita) e botões na tela
- Fechamento por tecla `Escape` ou clique fora do modal
- Botão de contato direto via WhatsApp com mensagem pré-preenchida

### Formulário de Financiamento

- 19 campos organizados em grid de duas colunas
- Máscaras automáticas para CPF, telefone, data e valores monetários
- Validação em tempo real com mensagens de erro inline
- Campo condicional de veículo para troca (exibido apenas quando selecionado "Sim")
- Feedback visual de envio com tela de sucesso
- Identificação do veículo de interesse quando aberto a partir do modal

### Carrossel de Depoimentos

- Transição suave entre slides com `transform: translateX`
- Auto-avanço a cada 5 segundos
- Controles manuais por botões e dots clicáveis
- Dot ativo com largura expandida como indicador visual

### Outros Recursos

- Botão flutuante de WhatsApp com animação de pulso
- Todos os ícones implementados como SVG inline (zero dependência de icon fonts)
- Open Graph configurado para compartilhamento em redes sociais
- Meta description para SEO básico

---

## Estrutura do Projeto

```
raiden-motors/
│
├── index.html              # Markup principal — estrutura e conteúdo
│
├── css/
│   └── style.css           # Estilos globais, componentes e responsividade
│
├── js/
│   └── app.js              # Lógica de interface, dados e interações
│
├── assets/                 # Diretório reservado para assets externos futuros
│
└── README.md               # Documentação do projeto
```

> **Nota sobre imagens:** todas as fotografias de veículos e fundadores estão embutidas no `app.js` e `index.html` como strings Base64. Em uma versão de produção com servidor, recomenda-se mover esses assets para `assets/images/` e referenciá-los por URL convencional.

---

## Identidade Visual

### Paleta de Cores

| Token CSS | Valor | Uso |
|---|---|---|
| `--black` | `#0A0A0A` | Fundo principal |
| `--black-soft` | `#111111` | Fundo de seções alternadas |
| `--black-card` | `#141414` | Fundo de cards |
| `--white` | `#FFFFFF` | Texto primário |
| `--purple` | `#6A0DAD` | Cor de destaque principal |
| `--purple-neon` | `#8A2BE2` | Destaques hover, labels, bordas ativas |
| `--purple-dark` | `#4B0082` | Sombras e gradientes |
| `--purple-glow` | `rgba(106,13,173,0.4)` | Efeitos de brilho (box-shadow) |
| `--gray-mid` | `#BDBDBD` | Texto secundário |
| `--gold` | `#C9A84C` | Estrelas de avaliação |

Todas as cores são definidas como variáveis CSS no `:root`, permitindo customização centralizada.

### Tipografia

| Função | Família | Pesos |
|---|---|---|
| Títulos e display | Playfair Display | 400, 600, 700, 900, 400 Italic |
| Corpo e textos | Inter | 300, 400, 500, 600 |
| Botões e labels UI | Montserrat | 500, 600, 700 |

Fontes carregadas via Google Fonts com `preconnect` para otimização de carregamento.

---

## Arquitetura CSS

O arquivo `css/style.css` está organizado em blocos comentados na seguinte ordem:

```
:root                   → variáveis globais de design tokens
*, body                 → reset e configurações base
CUSTOM CURSOR           → cursor personalizado e anel de rastreamento
SCROLLBAR               → estilização da barra de rolagem
NAVBAR                  → navegação fixa com estado scrolled
HERO                    → seção inicial, animações de entrada, background
SECTION COMMON          → padrões reutilizáveis de seção (label, title, sub)
STATS BAR               → barra de contadores estatísticos
ESTOQUE / GALERIA       → grid de cards de veículos
VEHICLE CARD            → card individual com efeito headlight sweep
FEATURED CARD           → variação de card em destaque (span 2 colunas)
MODAL VEÍCULO           → painel lateral de ficha técnica
DIFERENCIAIS            → grid de cards de diferenciais com borda superior animada
SOBRE                   → layout de duas colunas com visual e texto
FUNDADORES              → grid de equipe com hover em grayscale
DEPOIMENTOS             → carrossel com controles e dots
CONTATO                 → grid de informações e mapa placeholder
FORMULÁRIO MODAL        → overlay de formulário de financiamento
WHATSAPP FLOAT          → botão flutuante com animação de pulso
FOOTER                  → rodapé com grid de 4 colunas
SCROLL REVEAL           → classe utilitária de animação de entrada
RESPONSIVE              → breakpoints 1024px, 768px
LOADING                 → loader de entrada da página
```

### Padrões Notáveis

**Headlight Sweep** — o efeito mais característico do projeto. Aplicado nos cards de veículos via `::after` pseudo-elemento com gradiente inclinado que atravessa o card horizontalmente no hover:

```css
.car-card::after {
    content: '';
    background: linear-gradient(100deg, transparent 20%, rgba(138,43,226,0.18) 50%, transparent 80%);
    transform: skewX(-20deg);
    transition: left 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.car-card:hover::after {
    left: 120%;
    opacity: 1;
}
```

**Scroll Reveal** — implementado via `IntersectionObserver` com suporte a delays escalonados por classe:

```css
.reveal { opacity: 0; transform: translateY(40px); transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
/* .reveal-delay-2, .reveal-delay-3, .reveal-delay-4 */
```

---

## Arquitetura JavaScript

O arquivo `js/app.js` é estruturado em blocos funcionais sequenciais:

### Dados

```js
const cars = [ ... ]        // Array com 6 objetos de veículos
const carImages = [ ... ]   // Array com 6 imagens em Base64 (mesma ordem)
```

Cada objeto `car` contém as propriedades:

| Propriedade | Tipo | Descrição |
|---|---|---|
| `id` | Number | Identificador único |
| `brand` | String | Marca do veículo |
| `model` | String | Modelo |
| `year` | Number | Ano de fabricação |
| `category` | String | `esporte` / `suv` / `sedan` |
| `featured` | Boolean | Se ocupa 2 colunas no grid |
| `price` | String | Valor formatado em BRL |
| `tag` | String | Rótulo do card (ex: Importado, Raridade) |
| `quick` | Object | Dados rápidos: `km`, `motor`, `cv` |
| `specs` | Array | Pares `[chave, valor]` para ficha técnica |
| `equips` | Array | Lista de equipamentos de série |
| `commercial` | Array | Pares `[chave, valor]` para info comercial |

### Funções

| Função | Descrição |
|---|---|
| `renderCars(list)` | Renderiza os cards no grid a partir de um array |
| `filterCars(cat, btn)` | Filtra veículos por categoria e re-renderiza |
| `openCarModal(idx, list)` | Abre o modal para o veículo no índice especificado |
| `closeModal()` | Fecha o modal de visualização |
| `prevCar()` | Navega para o veículo anterior no modal |
| `nextCar()` | Navega para o próximo veículo no modal |
| `populateModal(car, idx)` | Preenche o conteúdo do modal com dados do veículo |
| `openFinancingFromModal()` | Abre o formulário pré-preenchido com o veículo do modal |
| `whatsappCar()` | Abre WhatsApp com mensagem pré-formatada do veículo |
| `openFormModal(carName)` | Abre o modal de formulário, opcionalmente com nome do carro |
| `closeFormModal()` | Fecha o modal de formulário |
| `toggleTradeIn(val)` | Exibe/oculta o campo de valor do veículo para troca |
| `maskCPF(el)` | Aplica máscara `000.000.000-00` ao input |
| `maskDate(el)` | Aplica máscara `DD/MM/AAAA` ao input |
| `maskPhone(el)` | Aplica máscara `(00) 00000-0000` ao input |
| `maskCurrency(el)` | Aplica máscara monetária `R$ 0.000,00` ao input |
| `validateField(el)` | Remove estado de erro ao digitar no campo |
| `submitForm()` | Valida campos obrigatórios e executa envio simulado |
| `buildDots()` | Cria os dots de navegação do carrossel |
| `goToTestimonial(idx)` | Move o carrossel para o slide especificado |
| `changeTestimonial(dir)` | Avança (+1) ou recua (-1) no carrossel |
| `observeReveal()` | Inicializa o IntersectionObserver para scroll reveal |
| `animateCounter(el, target, duration)` | Anima numericamente um contador do zero ao valor alvo |
| `updateModalClosePos()` | Ajusta posição do botão de fechar modal conforme viewport |

### Inicialização

```js
window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1400);
    renderCars(cars);
    buildDots();
    observeReveal();
});
```

---

## Seções do Site

| ID | Seção | Descrição |
|---|---|---|
| `#hero` | Hero | Tela cheia com título, subtítulo e chamadas para ação |
| `#stats` | Estatísticas | Barra com 4 contadores animados |
| `#estoque` | Estoque | Galeria filtrável de 6 veículos |
| `#diferenciais` | Diferenciais | 6 cards com os diferenciais da concessionária |
| `#sobre` | Sobre | História, missão, visão e valores em layout de duas colunas |
| `#fundadores` | Fundadores | Grid de 2 cards com foto e biografia dos fundadores |
| `#depoimentos` | Depoimentos | Carrossel com 3 avaliações de clientes |
| `#contato` | Contato | Informações de contato e placeholder de mapa |

---

## Formulário de Financiamento

O formulário coleta os seguintes dados em 19 campos:

**Identificação**
Nome Completo, CPF, RG, Data de Nascimento

**Contato**
Telefone, WhatsApp, E-mail

**Perfil**
Estado Civil, Profissão, Empresa Atual, Tempo de Empresa

**Financeiro**
Renda Mensal, Outras Fontes de Renda, Valor para Entrada

**Troca**
Possui veículo para troca (toggle), Valor aproximado do veículo atual

**Localização**
Cidade, Estado

**Adicional**
Observações, Aceite de Termos

Campos com validação obrigatória: Nome Completo, CPF, Telefone, E-mail, Renda Mensal e Aceite dos Termos.

---

## Responsividade

O layout adapta-se a três faixas de viewport:

| Breakpoint | Alvo | Principais mudanças |
|---|---|---|
| `> 1024px` | Desktop | Layout completo, 3 colunas no grid de veículos, modal lado a lado |
| `<= 1024px` | Tablet | Grid de veículos em 2 colunas, modal empilhado verticalmente |
| `<= 768px` | Mobile | Grid de veículos em 1 coluna, menu de navegação oculto, formulário em 1 coluna |

O cursor personalizado funciona apenas em dispositivos com mouse (pointer). Em touch devices o comportamento nativo é preservado.

---

## Como Executar

### Opção 1 — Abertura direta

```bash
# Clonar ou extrair o projeto
cd raiden-motors

# Abrir no navegador (macOS)
open index.html

# Abrir no navegador (Linux)
xdg-open index.html

# Abrir no navegador (Windows)
start index.html
```

### Opção 2 — Servidor local (recomendado para desenvolvimento)

```bash
# Com Python 3
cd raiden-motors
python3 -m http.server 8000
# Acessar: http://localhost:8000

# Com Node.js (npx)
npx serve .
# Acessar: http://localhost:3000

# Com VS Code
# Instalar extensão Live Server e clicar em "Go Live"
```

### Requisitos

- Navegador moderno com suporte a ES6+, CSS Custom Properties e IntersectionObserver
- Conexão com a internet apenas para carregamento das fontes via Google Fonts
- Sem dependências de build (Webpack, Vite, etc.) — o projeto roda diretamente

---

## Customização

### Adicionar um novo veículo

Adicione um objeto ao array `cars` em `js/app.js` e a imagem correspondente ao array `carImages` na mesma posição:

```js
// js/app.js

const cars = [
    // ... veículos existentes ...
    {
        id: 7,
        brand: 'Ferrari',
        model: 'SF90 Stradale',
        year: 2024,
        category: 'esporte',
        featured: false,
        price: 'R$ 6.500.000',
        tag: 'Exclusivo',
        quick: { km: '800 km', motor: '4.0 V8 + 3 Elétricos', cv: '1.000 cv' },
        specs: [
            ['Ano', '2024'],
            ['Quilometragem', '800 km'],
            // ...
        ],
        equips: ['Fiorano Package', 'JBL Professional', /* ... */],
        commercial: [['Disponibilidade', 'Sob consulta'], ['Garantia', '24 meses']]
    }
];

const carImages = [
    // ... imagens existentes ...
    "data:image/jpeg;base64,/9j/..." // base64 da imagem do Ferrari
];
```

### Alterar cores do tema

Edite as variáveis no bloco `:root` em `css/style.css`:

```css
:root {
    --purple:      #6A0DAD;  /* cor principal de destaque */
    --purple-neon: #8A2BE2;  /* hover, labels e bordas ativas */
    --purple-dark: #4B0082;  /* gradientes e sombras */
}
```

### Alterar informações de contato

Localize no `index.html` a seção `#contato` e a seção do footer. Os dados de telefone, WhatsApp e endereço também estão no `js/app.js` na função `whatsappCar()`:

```js
function whatsappCar() {
    window.open('https://wa.me/5511999990000?text=...', '_blank');
}
```

### Substituir fotos de fundadores

As imagens estão embutidas como Base64 diretamente nos atributos `src` das tags `<img>` dentro da seção `#fundadores` no `index.html`. Para substituir, gere o Base64 da nova imagem e substitua a string correspondente:

```bash
# Gerar Base64 de uma imagem
base64 -w 0 nova-foto.jpg
```

---

## Considerações Técnicas

**Performance**
As imagens em Base64 aumentam o tamanho dos arquivos HTML e JS, mas eliminam todas as requisições HTTP externas para assets. Em produção com servidor, o ideal é hospedar as imagens separadamente e referenciá-las por URL, reduzindo significativamente o tamanho dos arquivos de código.

**Integração de Backend**
O formulário de financiamento atualmente simula o envio com um timeout. Para integração real, substitua o bloco `setTimeout` em `submitForm()` por uma chamada `fetch` para a API desejada:

```js
async function submitForm() {
    // ... validação existente ...

    const payload = {
        nome: document.getElementById('f_nome').value,
        email: document.getElementById('f_email').value,
        // ... demais campos
    };

    const response = await fetch('https://sua-api.com/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        document.getElementById('formContent').style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
    }
}
```

**SEO e Open Graph**
As meta tags básicas estão configuradas no `<head>` do `index.html`. Para uma presença digital mais robusta, recomenda-se adicionar:
- `og:image` com URL de uma imagem de capa (1200x630px)
- `og:url` com a URL de produção do site
- `twitter:card` para compartilhamento no X/Twitter
- Sitemap XML e arquivo `robots.txt`

**Acessibilidade**
Os botões de fechar modais e de navegação possuem `aria-label`. Para conformidade com WCAG 2.1, recomenda-se adicionar gerenciamento de foco nos modais e suporte completo a navegação por teclado no carrossel.

---

## Licença

```
MIT License

Copyright (c) 2024 Raiden Motors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

**Raiden Motors** — Excelência Sobre Rodas

*Desenvolvido com HTML5, CSS3 e JavaScript puro*

</div>
