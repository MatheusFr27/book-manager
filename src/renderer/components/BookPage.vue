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
        <div v-show="viewBookDetail != 0">
        <h2><strong>Título:</strong> {{ viewBookDetail.title }}</h2>

        <p class="no-point" v-show="viewBookDetail.genre || viewBookDetail.author"><strong>Gênero:</strong> {{ viewBookDetail.genre }} &ensp; <strong>Autor:</strong> {{ viewBookDetail.author }}</p>
        <p class="no-point" v-show="viewBookDetail.launch"><strong>Lançado em:</strong> {{ viewBookDetail.launch }}</p>

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
        <p v-show="viewBookDetail.observation" class="observation"><strong>Observações:</strong> {{ viewBookDetail.observation }}</p>

        
        <p v-show="viewBookDetail.tags"><strong>Tags:</strong></p>
        <div class="container-tags">
          <div class="tag" v-for="(tag, i) in viewBookDetail.tags" :key="i" :style="{ backgroundColor: tag.color }">
            <p>{{ tag.tagName }}</p>
          </div>
        </div>
        
        </div>

        <h3 v-show="viewBookDetail === 0">Nenhum livro foi selecionado ainda.</h3>
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
            tagName: 'Um livro inventado por um louco.',
            color: '#fad419'
          },
          {
            tagName: 'Um livro inventado por um louco.',
            color: '#fad419'
          },
          {
            tagName: 'Um livro inventado por um louco.',
            color: '#fad419'
          }
        ],
        observation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa, illo voluptas rerum nesciunt vitae voluptatumesse. Perferendis itaque ex voluptate debitis. Consequuntur, alias placeat quaerat quam magnam tenetur iste. Perferendis exercitationem, tenetur labore eius reiciendis assumenda aperiam aliquid id soluta commodi. Eligendi sint sapiente saepe officia ipsam id aliquam? Nam odit quod praesentium iste ipsa animi exercitationem inventore. Veritatis quis distinctio illum doloremqu exercitationem aliquid, ipsa maiores totam sit soluta quam at iusto maxime mollitia nobis eius laudantium repellat quia, impedit a? Non exercitationem esse voluptatem eum, blanditiis voluptatum dolor beatae ex amet soluta consequatur dignissimos. Sint.",
      },
      {
        id: 6888654,
        title: "Nova vida",
        author: "Vivi grilo",
        genre: "Mistério",
        launch: '19/03/1999',
        numberOfBooks: 10,
        retendBooks: 5,
        tags: [
          {
            tagName: 'Chega semana que vem.',
            color: '#a83832',
          },
          {
            tagName: 'Capa Azul',
            color: '#328ba8',
          },
          {
            tagName: 'É pequeno.',
            color: '#6d32a8'
          }
        ],
        observation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa.'
      },
      {
        id: 984320,
        title: "Uma noite sombria na casa de Jhone Mense",
        author: "Vivi grilo",
        genre: "Mistério",
        launch: '13/04/2020',
        numberOfBooks: 1,
        retendBooks: 0,
        tags: [
          {
            tagName: 'Quem lê fica louco!',
            color: '#a81313',
          }
        ],
        observation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa.'
      },
      {
        id: 10097622,
        title: "As duas faces da lua",
        author: "Thiane",
        genre: "Sobrenatural",
        launch: '23/05/2012',
        numberOfBooks: 7,
        retendBooks: 4,
        tags: [
          {
            tagName: 'Quem lê fica louco!',
            color: '#a81313',
          }
        ],
        observation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa.'
      },
      {
        id: 45997743,
        title: "As minguas",
        author: "Pingo Pinguço",
        genre: "Drama",
        launch: '19/09/1890',
        numberOfBooks: 50,
        retendBooks: 12,
        tags: [],
        observation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos speriores sit culpa.'
      },
    ],
    viewBookDetail: 0,
  }),
  methods: {},
  computed: {
    calculatesAvailableBook: function() {
      if(this.viewBookDetail.numberOfBooks && this.viewBookDetail.retendBooks) {
        return this.viewBookDetail.numberOfBooks - this.viewBookDetail.retendBooks
      }
    },
  }
};
</script>

<style scoped>
.container-base {
  display: grid;
  grid-template-rows: 10% 20% 70%;
  grid-auto-columns: 60% 40%;

  height: 100%;
  width: 100%;

  box-sizing: content-box;
}

header {
  grid-row: 1/2;
  grid-column: 1/3;
}

h1 {
  grid-row: 2/3;
  grid-column: 1/3;

  color: rgb(68, 68, 68);
  font-size: 23pt;
  font-weight: 700;
  margin-top: 2em;
  text-align: center;
}

/* Estilo do container central onde divide a mostragem de livro dos detalhes de cada livro selecionado */
.container-view {
  grid-row: 3/4;
  grid-column: 1/2;
  
  margin: 0.5em;
}

.container-book-detail{
  grid-row: 3/4;
  grid-column: 2/3;

  margin: 0.5em;
  margin-bottom: 4em;
}
/* / */

.container-view .container-view-books {
  background-color: rgb(250, 250, 250);
  border-radius: 5px 5px;

  width: 100%;
  height: 38.5em;

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
.container-book-detail {
  background-color: rgb(240, 240, 240);
  border-radius: 5px 5px;

  height: 39em;

  margin-top: 3em;
  padding: 0.5em 1em;

  overflow-y: auto;
}

.container-book-detail table {
  border: 1.5px solid rgb(19, 19, 19);
  background-color: rgb(230, 230, 230);

}

.container-book-detail table thead {
  background-color: rgb(202, 202, 202);

}

.container-book-detail table tr td {
  text-align: center;
}

.container-book-detail .observation {
  text-align: justify;
  font-size: 12pt;
}

.container-book-detail .container-tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 1;

  overflow-y: auto;
}

.container-book-detail .container-tags .tag {
  padding: 0.5em;
  margin: 0.3em;
  border-radius: 10px 10px;
}

.container-book-detail .container-tags .tag p {
  padding: 0;
  margin: 0;
}
/* / */
</style>
