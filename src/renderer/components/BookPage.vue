<!-- O que fazer nesta página?

- Quando clicado em um livro na parte visualizadora de livros, atráves de Emmit deve ser mostrado detalhes do livro; Ou pode ser resolvido com uma solução melhor;
- Estilizar página;
- Configurar método de busca: Por título, autor, ano ou gênero;

- Caso não exista livros no BD deve exibir uma mensagem falando que não existe livro registrado e assim oferecer um botão ao usuário para a página de registro de livro;
- Caso o livro que o usuário procura não seja existente, então exibir uma mensagem falando que o livro não existe;

 -->

<template>
  <section class="container-base">
    <Header />

    <h1>Visualizar livros</h1>

    <div class="container-view-and-detail">
      <section class="container-view">
        <div class="container-search-book">
          <button>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 13.1 13.1"
              xml:space="preserve"
              height="1em"
            >
              <path
                style="fill: rgb(250, 250, 250)"
                d="M9.4,8.3H8.8L8.6,8c0.7-0.9,1.2-2,1.2-3.2C9.8,2.2,7.6,0,4.9,0S0,2.2,0,4.9s2.2,4.9,4.9,4.9c1.2,0,2.3-0.4,3.2-1.2l0.2,0.2
	v0.6l3.8,3.7l1.1-1.1L9.4,8.3z M4.9,8.3C3,8.3,1.5,6.7,1.5,4.9S3,1.5,4.9,1.5S8.3,3,8.3,4.9S6.7,8.3,4.9,8.3z"
              />
            </svg>
            Buscar
          </button>
          <input type="text" placeholder="Pesquise por um livro" />
        </div>
        <div class="container-view-books">
          <BookTemplate :bookStructure="bookData" />
        </div>
      </section>

      <div class="container-book-detail">
        <h2>Uma Aventura</h2>

        <p>Maranhes horror</p>
      </div>
    </div>
  </section>
</template>

<script>
import BookTemplate from "./ComponentsFolder/BookTemplate";
import Header from "./ComponentsFolder/Header";

export default {
  name: "BookPage",
  components: {
    BookTemplate,
    Header,
  },
  data: () => ({
    bookData: [
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Um sofrencia ",
        author: "Pingo pinguço",
        genre: "Drama",
      },
      {
        title: "Um sofrencia ",
        author: "Pingo pinguço",
        genre: "Drama",
      },
      {
        title: "Um sofrencia ",
        author: "Pingo pinguço",
        genre: "Drama",
      },
      {
        title: "Um sofrencia ",
        author: "Pingo pinguço",
        genre: "Drama",
      },
      {
        title: "Um sofrencia ",
        author: "Pingo pinguço",
        genre: "Drama",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
      {
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
      },
    ],
  }),
};
</script>

<style scoped>
.container-base,
.container-base .container-view-and-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: rgb(68, 68, 68);
  font-size: 23pt;
  font-weight: 700;
  margin-top: 2em;
  text-align: center;
}

/* Estilo do container central onde divide a mostragem de livro dos detalhes de cada livro selecionado */
.container-base .container-view-and-detail {
  width: 100%;

  margin-bottom: 3em;

  flex-direction: row;
  justify-content: space-around;
}
/* / */

/* Estilo da parte de mostragem de livros */
.container-view-and-detail .container-view {
  width: 60%;
}

.container-base .container-view-and-detail .container-view-books {
  border: black 2px solid;
  border-radius: 5px 5px;

  width: 100%;
  height: 35em;

  overflow-y: scroll;
}

.container-view .container-search-book {
  margin-bottom: 1em;
}

.container-view .container-search-book button {
  border-radius: 3px 3px;
  border: none;
  background-color: rgb(26, 167, 26);

  padding: 0.5em;

  color: white;
}

.container-view .container-search-book button:hover {
  background-color: rgb(24, 155, 24);
}

.container-view .container-search-book input {
  padding: 0.5em;
  border-radius: 2px 2px;
  border: gray 1.3px solid;
}
/* / */

/* Estilo da visualização dos livros */
.container-base .container-view-and-detail .container-book-detail {
  background-color: rgb(228, 228, 228);
  border-radius: 5px 5px;

  width: 35%;
  height: 30em;
}
/* / */
</style>
