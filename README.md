# Trokei

Protótipo de brechó online feito com HTML, CSS e JavaScript puro.

A proposta do Trokei é apresentar uma vitrine simples para moda sustentável: produtos em destaque, chamada para compra e venda de peças, menu responsivo e uma experiência básica de carrinho no navegador.

## O que funciona

- Página inicial com hero, navegação e produtos em destaque.
- Contador de itens no carrinho.
- Botão de compra com aviso visual por alerta.
- Menu mobile.
- Animação de entrada dos cards de produto com `IntersectionObserver`.
- Página de cadastro com validação no frontend.

## Stack

- HTML
- CSS
- JavaScript

## Estrutura

```txt
.
├── index.html       # vitrine principal
├── cadastro.html    # formulário de cadastro
├── style.css        # layout e responsividade
└── script.js        # menu, carrinho e validacoes
```

## Como rodar

Abra o arquivo `index.html` no navegador.

Não existe etapa de build, servidor ou instalação de dependencias.

## Observações

O carrinho e o cadastro são simulados no frontend. O projeto ainda não possui backend, banco de dados, login real ou checkout. Serve como base visual e interativa para evoluir para uma loja completa.
