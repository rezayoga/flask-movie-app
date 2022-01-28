<!--
<template>
  <div>
    <h3>Movies ({{ movies.length }})</h3>
    <p v-if="msg_deleted">{{ msg_deleted }}</p>
    <template v-if="moviesPaginated.length >= 1">
      <table>
        <thead>
          <td>ID</td>
          <td>title</td>
          <td>genre</td>
          <td>directors</td>
          <td>actors</td>
          <td>year</td>
          <td>billboard</td>
          <td>created_at</td>
          <td>Actions</td>
        </thead>
        <tbody>
          <tr v-for="movie in moviesPaginated" :key="movie.id">
            <td>{{ movie.id }}</td>
            <td>{{ movie.title }}</td>
            <td>{{ movie.genre }}</td>
            <td>{{ movie.directors }}</td>
            <td>{{ movie.actors }}</td>
            <td>{{ movie.year }}</td>
            <td>
              <img :src="billboard_url(movie.billboard)" width="100" />
            </td>
            <td>{{ movie.created_at }}</td>
            <td>
              <router-link
                :to="{ name: 'movie-detail', params: { id: movie.id } }"
                >Edit</router-link
              >
              |
              <a href="#" @click.prevent="deleteMovie(movie.id)">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-if="Math.ceil(movies.length / movie_per_page) > 1">
      <paginate
        :page-count="Math.ceil(movies.length / movie_per_page)"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </paginate>
    </template>
    <template v-if="no_data">
      <p>No Data!</p>
    </template>
    <p><router-link :to="{ name: 'movie-add' }">Add Movie</router-link></p>
  </div>
</template>
-->
<template>
  <div>
    <template v-if="moviesPaginated.length >= 1">
      <div class="ml-5 mb-5 mr-5 shadow-2xl rounded-b-lg">
        <table class="table w-full table-zebra">
          <thead>
            <tr>
              <th class="text-center text-base">ID</th>
              <th class="text-center text-base">Title</th>
              <th class="text-center text-base">Genre</th>
              <th class="text-center text-base">Directors</th>
              <th class="text-center text-base">Actors</th>
              <th class="text-center text-base">Year</th>
              <th class="text-center text-base">Billboard</th>
              <th class="text-center text-base">Created At</th>
              <th class="text-center text-base w-48">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in moviesPaginated" :key="movie.id" class="hover">
              <td>{{ movie.id }}</td>
              <td>{{ movie.title }}</td>
              <td>{{ movie.genre }}</td>
              <td>{{ movie.directors }}</td>
              <td>{{ movie.actors }}</td>
              <td>{{ movie.year }}</td>
              <td>
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      :src="billboard_url(movie.billboard)"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{{ movie.created_at }}</td>
              <td>
                <div class="btn-group">
                  <button
                    @click.prevent="goToMovieDetail(movie.id)"
                    class="btn btn-accent"
                  >
                    Edit
                  </button>
                  <button @click.prevent="deleteMovie(movie.id)" class="btn">
                    Delete
                  </button>
                </div>
                <!--
                <router-link
                  class="btn btn-ghost btn-xs"
                  :to="{ name: 'movie-detail', params: { id: movie.id } }"
                  >Edit</router-link
                >
                |
                <a
                  class="btn btn-ghost btn-xs"
                  href="#"
                  @click.prevent="deleteMovie(movie.id)"
                  >Delete</a
                >
                -->
              </td>
            </tr>
          </tbody>
          <tfoot v-if="Math.ceil(movies.length / movie_per_page) > 1">
            <tr>
              <th colspan="9">
                <paginate
                  class="float-right shadow-2xl mr-3"
                  :page-count="Math.ceil(movies.length / movie_per_page)"
                  :page-range="3"
                  :click-handler="clickCallback"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'btn-group'"
                  :page-class="'btn'"
                  :active-class="'btn-accent'"
                  :disabled-class="'btn btn-disabled'"
                  :prev-class="'btn'"
                  :next-class="'btn'"
                >
                </paginate>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </template>

    <template v-if="no_data">
      <div class="ml-5 mb-5 mr-5 shadow-2xl rounded-b-lg p-5">
        <div class="alert alert-info">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 mx-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <label>You don't have a movie, please add movie!</label>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "dashboard",
  data() {
    return {
      movie_per_page: 5,
      current_page: 1,
      no_data: "",
      movies: [],
      moviesPaginated: [],
      msg_deleted: "",
    };
  },
  methods: {
    goToMovieDetail(id) {
      this.$router.replace({
        name: "movie-detail",
        params: { id: id },
      });
    },

    async getMovies() {
      await axios.get("movie").then((response) => {
        this.movies = response.data.movies;
      });
    },

    async getMoviesPaginated(current_page, movie_per_page) {
      await axios
        .get("movie/".concat(current_page).concat("/").concat(movie_per_page))
        .then((response) => {
          this.moviesPaginated = response.data.movies;
        });
    },

    async deleteMovie(id) {
      await axios
        .delete("movie/".concat(id))
        .then((response) => {
          //this.$router.go();
          this.msg_deleted = response.data.message;
          this.current_page = 1;
          this.getMovies();
          this.getMoviesPaginated(this.current_page, this.movie_per_page).then(
            () => {
              if (this.moviesPaginated.length === 0) {
                this.no_data = "No data!";
              }
            }
          );
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },

    clickCallback: function (pageNum) {
      //console log pageNum
      //console.log(pageNum)

      this.getMoviesPaginated(pageNum, this.movie_per_page).then(() => {
        this.current_page = pageNum;
        if (this.moviesPaginated.length === 0) {
          this.no_data = "No data!";
        }
      });
    },

    billboard_url: function (billboard) {
      return axios.defaults.baseURL + "/static/uploads/" + billboard;
    },
  },
  created() {
    this.getMovies();
    this.getMoviesPaginated(this.current_page, this.movie_per_page).then(() => {
      if (this.moviesPaginated.length === 0) {
        this.no_data = "No data!";
      }
    });
  },
};
</script>
