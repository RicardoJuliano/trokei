# Trokei

Prototipo de brecho online feito com HTML, CSS e JavaScript puro.

A proposta do Trokei e apresentar uma vitrine simples para moda sustentavel: produtos em destaque, chamada para compra e venda de pecas, menu responsivo e uma experiencia basica de carrinho no navegador.

## O que funciona

- Pagina inicial com hero, navegacao e produtos em destaque.
- Contador de itens no carrinho.
- Botao de compra com feedback visual via alerta.
- Menu mobile.
- Animacao de entrada dos cards de produto com `IntersectionObserver`.
- Pagina de cadastro com validacao no frontend.

## Stack

- HTML
- CSS
- JavaScript

## Estrutura

```txt
.
├── index.html       # vitrine principal
├── cadastro.html    # formulario de cadastro
├── style.css        # layout e responsividade
└── script.js        # menu, carrinho e validacoes
```

## Rodando

Abra o arquivo `index.html` no navegador.

Nao existe etapa de build, servidor ou instalacao de dependencias.

## Observacoes

O carrinho e o cadastro sao simulados no frontend. O projeto ainda nao possui backend, banco de dados, login real ou checkout. Ele funciona bem como base visual e interativa para evoluir para uma loja completa.
