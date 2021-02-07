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
          <!-- Seleciona o tipo de busca o usuário deseja ter -->
          <select>
            <option value="0">Título</option>
            <option value="1">Gênero</option>
            <option value="2">Autor</option>
            <option value="3">Data</option>
          </select>
          <input type="text" placeholder="Pesquise por um livro" />

          <!-- Botão para confirmar a busca -->
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
        </div>
        <div class="container-view-books">
          <BookTemplate @send-data="viewBookDetail = $event" :bookStructure="bookData" />
        </div>
      </section>

      <!-- Mostra detalhes do elemento -->
      <div class="container-book-detail">
        <h2><strong>Título:</strong> {{ viewBookDetail.title }}</h2>

        <p><strong>Gênero:</strong> {{ viewBookDetail.genre }} &ensp; <strong>Autor:</strong> {{ viewBookDetail.author }}</p>
        <p><strong>Lançado em:</strong> {{ viewBookDetail.launch }}</p>

        <!-- Tabela para mostrar exemplares, alugados e disponiveis -->
        <table>
          <thead>
            <td><th>Exemplares</th></td>
            <td><th>Alugados</th></td>
            <td><th>Disponíveis</th></td>
          </thead>
          <tr>
            <td>{{ viewBookDetail.numberOfBooks }}</td>
            <td>{{ viewBookDetail.retendBooks }}</td>
            <td>{{ calculatesAvailableBook }}</td>
          </tr>
        </table>

        <!-- Aqui será mostrado as tags que foram postas sobre o elemento. -->
        <p><strong>Observações:</strong></p>
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
        id: 3942838746,
        title: "Uma aventura foda",
        author: "Matheus lindo",
        genre: "Ação",
        launch: '20/09/2020',
        numberOfBooks: 5,
        retendBooks: 3,
        tags: [
          {
            tagName: 'Livro véio',
            color: '#4287f5'
          },
          {
            tagName: 'Em algum lugar muito secreto tem ouro.',
            color: '#fad419'
          }
        ]
      },
      {
        id: 6888654,
        title: "Nova vida",
        author: "Vivi grilo",
        genre: "Mistério",
        launch: '19/03/1999',
        numberOfBooks: 10,
        retendBooks: 5,
        tags: []
      },
    ],
    viewBookDetail: [],
  }),
  methods: {},
  computed: {
    calculatesAvailableBook: function() {
      if(this.viewBookDetail.numberOfBooks && this.viewBookDetail.retendBooks) {
        return this.viewBookDetail.numberOfBooks - this.viewBookDetail.retendBooks
      }
    }
  }
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
  background-color: rgb(250, 250, 250);
  border-radius: 5px 5px;

  width: 100%;
  height: 35em;

  overflow-y: scroll;
}

.container-view .container-search-book {
  margin: 1em;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.container-view .container-search-book button {
  border-radius: 3px 3px;
  border: none;
  background-color: rgb(26, 167, 26);

  padding: 0.5em;
  margin-left: 0.5em;

  color: white;
}

.container-view .container-search-book button:hover {
  background-color: rgb(24, 155, 24);
}

.container-view .container-search-book input, .container-view .container-search-book select{
  padding: 0.5em;
  border-radius: 2px 2px;
  border: gray 1.3px solid;

  margin: 0;
}

.container-view .container-search-book select {
  border-radius: 10px 0px 0px 10px;
  padding: 0.4em;
  background-color: rgb(238, 238, 238);
}
/* / */

/* Estilo da visualização dos livros */
.container-base .container-view-and-detail .container-book-detail {
  background-color: rgb(240, 240, 240);
  border-radius: 5px 5px;

  width: 35%;
  height: 30em;

  padding: 0.5em 1em;
}

.container-base .container-view-and-detail .container-book-detail table {
  border: 1.5px solid rgb(19, 19, 19);
  background-color: rgb(230, 230, 230);

}

.container-base .container-view-and-detail .container-book-detail table thead {
  background-color: rgb(202, 202, 202);

}

.container-base .container-view-and-detail .container-book-detail table tr td {
  text-align: center;
}
/* / */
</style>
