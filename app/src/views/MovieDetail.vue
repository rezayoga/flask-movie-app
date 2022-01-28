<template>
  <!--
  <div>
    <h3>Detail Movie {{ movie.title }}!</h3>
    <p v-if="msg_updated">{{ msg_updated }}</p>
    <router-link :to="{ name: 'dashboard' }">Back</router-link>

    <form v-if="movie" v-on:submit.prevent="updateMovie">
      <div class="input-group">
        <input
          type="text"
          v-model="movie.title"
          ref="title"
          placeholder="Title"
        />
        <div class="error" v-if="error.title">
          <small>{{ error.title }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="movie.genre" placeholder="Genre" />
        <div class="error" v-if="error.genre">
          <small>{{ error.genre }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="movie.directors" placeholder="directors" />
        <div class="error" v-if="error.directors">
          <small>{{ error.directors }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="movie.actors" placeholder="Actors" />
        <div class="error" v-if="error.actors">
          <small>{{ error.actors }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="movie.year" placeholder="Year" />
        <div class="error" v-if="error.year">
          <small>{{ error.year }}</small>
        </div>
      </div>

      <div class="input-group">
        <input
          type="hidden"
          v-model="movie.billboard"
          placeholder="Billboard"
        />
        <div class="error" v-if="error.billboard">
          <small>{{ error.billboard }}</small>
        </div>
      </div>

      <div v-if="movie.billboard">
        <div>
          <img :src="billboard_url(movie.billboard)" width="100" />
        </div>
      </div>

      <div class="input-group">
        <input
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg"
          ref="file_input"
          @change="onFileSelected($event)"
        />
        <div>
          <img :src="preview_img" v-if="preview_img" width="300" />
        </div>
      </div>

      <button type="submit">Update</button>
    </form>
  </div>
  -->

  <div
    class="card card-bordered bg-transparent ml-5 mb-5 mr-5 shadow-2xl rounded-t-none"
  >
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6 bg-transparent">
        <div class="md:col-span-1 m-5">
          <div class="sm:px-2">
            <h3 class="text-lg font-medium text-gray-900">Edit Movie</h3>
            <p class="mt-1 text-sm text-gray-600">
              This movie information will not be displayed publicly, you can
              upload and edit your favorite movies.
            </p>
          </div>
          <br />
          <div class="sm:px-2">
            <div class="alert alert-success" v-if="msg_updated">
              <div class="flex-1">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path></svg
                >&nbsp;
                <label>{{ msg_updated }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2 bg-transparent">
          <form v-if="movie" v-on:submit.prevent="updateMovie">
            <div class="sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="form-control">
                      <label class="block w-full label">
                        <span class="label-text">Title</span>
                      </label>
                      <input
                        type="text"
                        v-model="movie.title"
                        ref="title"
                        placeholder="Title"
                        class="input input-bordered block w-full rounded-md"
                      />
                      <div class="alert alert-error" v-if="error.title">
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
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                          </svg>
                          <label>{{ error.title }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="form-control">
                      <label class="block w-full label">
                        <span class="label-text">Genre</span>
                      </label>
                      <input
                        type="text"
                        v-model="movie.genre"
                        placeholder="Genre"
                        class="input input-bordered block w-full rounded-md"
                      />
                      <p class="mt-2 text-sm text-gray-500">
                        Category of movie.
                      </p>
                      <div class="alert alert-error" v-if="error.genre">
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
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                          </svg>
                          <label>{{ error.genre }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="form-control">
                      <label class="block w-full label">
                        <span class="label-text">Directors</span>
                      </label>
                      <input
                        type="text"
                        v-model="movie.directors"
                        placeholder="Directors"
                        class="input input-bordered block w-full rounded-md"
                      />
                      <div class="alert alert-error" v-if="error.directors">
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
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                          </svg>
                          <label>{{ error.directors }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="form-control">
                      <label class="block w-full label">
                        <span class="label-text">Actors</span>
                      </label>
                      <input
                        type="text"
                        v-model="movie.actors"
                        placeholder="Actors"
                        class="input input-bordered block w-full rounded-md"
                      />
                      <div class="alert alert-error" v-if="error.actors">
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
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                          </svg>
                          <label>{{ error.actors }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="form-control">
                      <label class="block w-full label">
                        <span class="label-text">Year</span>
                      </label>
                      <!--
                      <input
                        type="text"
                        v-model="movie.year"
                        placeholder="Year"
                        class="input input-bordered w-1/4 rounded-md"
                      />
                      -->
                      <select
                        v-model="movie.year"
                        class="select select-bordered max-w-xs w-1/4 rounded-md"
                      >
                        <option disabled="disabled" selected="selected">
                          Select year of production
                        </option>
                        <option v-for="option in options" :key="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                      <div class="alert alert-error" v-if="error.year">
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
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                          </svg>
                          <label>{{ error.year }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                    >
                      <svg
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Change
                    </button>
                  </div>
                </div>
-->
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Billboard / Movie Cover
                  </label>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  >
                    <div class="space-y-1 text-center">
                      <div>
                        <input
                          type="hidden"
                          v-model="movie.billboard"
                          placeholder="Billboard"
                        />
                        <img
                          v-if="!preview_img"
                          class="mx-auto"
                          :src="billboard_url(movie.billboard)"
                          width="300"
                        />
                        <img
                          class="mx-auto"
                          :src="preview_img"
                          v-if="preview_img"
                          width="300"
                        />
                      </div>
                      <br />
                      <svg
                        v-if="!preview_img && !movie.billboard"
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="True"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file"
                          class="relative p-2 cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a billboard image</span>
                          <input
                            id="file"
                            name="file"
                            accept=".png, .jpg, .jpeg"
                            type="file"
                            @change="onFileSelected($event)"
                            class="sr-only"
                          />
                        </label>
                        <!-- <p class="pl-1">or drag and drop</p> -->
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPEG, JPG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  class="btn btn-block"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    ></path>
                  </svg>
                  &nbsp;Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      preview_img: null,
      billboard: null,
      msg_updated: "",
      id: this.$route.params.id,

      options: [],
      movie: {
        id: "",
        genre: "",
        title: "",
        directors: "",
        actors: "",
        year: "",
        billboard: "",
      },
      error: {
        genre: "",
        title: "",
        directors: "",
        actors: "",
        year: "",
        billboard: "",
      },
    };
  },
  methods: {
    setupYears() {
      var arr = [];
      for (var i = 1950; i <= 2022; i++) {
        arr.unshift({
          text: i,
          value: i,
        });
      }
      return arr;
    },

    billboard_url: function (billboard) {
      return axios.defaults.baseURL + "/static/uploads/" + billboard;
    },

    onFileSelected(event) {
      this.billboard = event.target.files[0];
      this.preview_img = URL.createObjectURL(this.billboard);
    },

    async getMovie(id) {
      await axios.get("movie/".concat(id)).then((response) => {
        this.movie = response.data;
      });
    },

    async updateMovie() {
      this.error.title = "";
      this.error.genre = "";
      this.error.directors = "";
      this.error.actors = "";
      this.error.year = "";
      //this.error.billboard = "";

      if (this.movie.title === "") {
        this.error.title = "Title is required!";
      }

      if (this.movie.genre === "") {
        this.error.genre = "Genre is required!";
      }

      if (this.movie.directors === "") {
        this.error.directors = "Directors is required!";
      }

      if (this.movie.actors === "") {
        this.error.actors = "Actors is required!";
      }

      if (this.movie.year === "") {
        this.error.year = "Year is required!";
      }

      /*
      if (this.movie.billboard === "") {
        this.error.billboard = "Billboard is required!";
      }
      */

      if (
        this.movie.title &&
        this.movie.genre &&
        this.movie.directors &&
        this.movie.actors &&
        this.movie.year
        // && this.movie.billboard
      ) {
        let fd = new FormData();
        fd.append("title", this.movie.title);
        fd.append("genre", this.movie.genre);
        fd.append("directors", this.movie.directors);
        fd.append("actors", this.movie.actors);
        fd.append("year", this.movie.year);
        fd.append("billboard_old", this.movie.billboard);
        if (this.billboard !== null)
          fd.append("billboard", this.billboard, this.billboard.name);

        await axios.put("movie/".concat(this.id), fd).then((response) => {
          this.$refs.title.focus();
          this.msg_updated = response.data.message;
        });

        /*
        const movie = {
          title: this.movie.title,
          genre: this.movie.genre,
          directors: this.movie.directors,
          actors: this.movie.actors,
          year: this.movie.year.substring(0, 4),
          billboard: this.movie.billboard,
        };
        
        this.movie = movie

        await axios
          .put("movie/".concat(this.id), movie)
          .then((response) => {
            this.$refs.title.focus();
            this.msg_updated = response.data.message;
          });
        */
      }
    },
  },

  created() {
    this.getMovie(this.id);
    this.options = this.setupYears();
  },
};
</script>
