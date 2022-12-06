import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/soshinoir.png',
      name: 'Miguel Matias',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Olá! Acabei de subir mais um projeto no meu portfólio. Aplicação Ignite Timer uma aplicação com timer com titulo que pode ser iniciado, interrompido e registrado.',
      },
      {
        type: 'paragraph',
        content: '#Vite #ReactJS #TypeScript #StyledComponents',
      },
      {
        type: 'link',
        content: (
          <a
            href='https://github.com/SoshiNoir/Fundamentos-do-React-02'
            target='_blank'
          >
            Confira aqui: Ignite Timer
          </a>
        ),
      },
    ],
    publishedAt: new Date('2022-11-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/soshinoir.png',
      name: 'Miguel Matias',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Olá! Acabei de subir mais um projeto no meu portfólio. Aplicação To do TT uma aplicação de controle de tarefas no estilo to-do list',
      },
      {
        type: 'paragraph',
        content:
          '#Vite #ReactJS #TypeScript #StyledComponents #Estados, #Imutabilidade do estado, #ListasEChaves, #Propriedades #Componentização',
      },
      {
        type: 'link',
        content: (
          <a href='https://github.com/SoshiNoir/to-do-TT' target='_blank'>
            Confira aqui: To do TT
          </a>
        ),
      },
    ],
    publishedAt: new Date('2022-11-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/soshinoir.png',
      name: 'Miguel Matias',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Olá! Acabei de subir mais um projeto no meu portfólio. Aplicação Coffee Delivery uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades: listagem de produtos, adicionar uma quantidade específica de itens no carrinho, aumentar ou remover a quantidade de itens no carrinho, formulário de endereço, exibir total de itens no carrinho do Header e exibir o valor total da soma de itens no carrinho multiplicados pelo valor ',
      },
      {
        type: 'paragraph',
        content:
          '#Vite #ReactJS #TypeScript #StyledComponents #Estados, #ContextAPI, #LocalStorage, #ImutabilidadeDoEstado, #ListasEChaves, #Propriedades, #- Componentização',
      },
      {
        type: 'link',
        content: (
          <a
            href='https://github.com/SoshiNoir/Coffee-Delivery'
            target='_blank'
          >
            Confira aqui: Coffee Delivery
          </a>
        ),
      },
    ],
    publishedAt: new Date('2022-11-03 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
