<!--
<template>
  <div>
    <h3>Sign Up</h3>
    <p v-if="msg_inserted">{{ msg_inserted }}</p>

    <form v-if="user" v-on:submit.prevent="addUser">
      <div class="input-group">
        <input
          type="text"
          ref="username"
          v-model="user.username"
          placeholder="Username"
        />
        <div class="error" v-if="error.username">
          <small>{{ error.username }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="user.password" placeholder="Password" />
        <div class="error" v-if="error.password">
          <small>{{ error.password }}</small>
        </div>
      </div>

      <div class="input-group">
        <input type="text" v-model="user.fullname" placeholder="Fullname" />
        <div class="error" v-if="error.fullname">
          <small>{{ error.fullname }}</small>
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  </div>
</template>
-->
<template>
  <div class="hero min-h-screen bg-base-200">
    <div
      class="flex-col bg-base-100 rounded-box shadow-2xl justify-center hero-content sm:m-10 lg:flex-row lg:ml-40 lg:mr-40"
    >
      <div class="text-center lg:text-left lg:p-28">
        <h1 class="mb-5 text-5xl font-bold">Sign Up</h1>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          odit neque odio architecto praesentium repellendus delectus veniam
          provident adipisci beatae officia ut temporibus, corporis, corrupti
          rerum eum expedita totam tempora.
        </p>
      </div>

      <form
        v-if="user"
        @submit.prevent="addUser"
        class="card flex-shrink-0 w-full max-w-sm"
      >
        <div class="card-body">
          <div class="grid place-content-center">
            <img src="../assets/images/logo_compact.png" class="mask w-48" />
          </div>
          <br />

          <div class="alert alert-success" v-if="msg_inserted">
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
                ></path>
              </svg>&nbsp;
              <label>{{ msg_inserted }}</label>
            </div>
          </div>

          <div class="alert alert-error" v-if="error.signup">
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
              <label>{{ error.signup }}</label>
            </div>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              v-model="user.username"
              ref="username"
              v-bind:class="{ 'input-error': error.username }"
              class="input input-bordered"
            />
            <div class="alert alert-error" v-if="error.username">
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
                <label>{{ error.username }}</label>
              </div>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="user.password"
              v-bind:class="{ 'input-error': error.password }"
              class="input input-bordered"
            />
            <div class="alert alert-error" v-if="error.password">
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
                <label>{{ error.password }}</label>
              </div>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              v-model="user.fullname"
              v-bind:class="{ 'input-error': error.fullname }"
              class="input input-bordered"
            />
            <div class="alert alert-error" v-if="error.fullname">
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
                <label>{{ error.fullname }}</label>
              </div>
            </div>
          </div>
          <div class="form-control mt-6">
            <div class="flex flex-row w-full">
              <div class="grid flex-grow card place-items-center">
                <button type="submit" class="btn btn-block">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  &nbsp;Post
                </button>
              </div>
            </div>
          </div>
          <div class="form-control mt-6">
            <div class="flex flex-row w-full">
              <div class="grid flex-grow card place-items-center">
                <router-link :to="{ name: 'signin' }" class="btn btn-ghost btn-block"
                  >Sign In</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg_inserted: "",
      user: {
        username: "",
        password: "",
        fullname: "",
      },
      error: {
        signup: "",
        username: "",
        password: "",
        fullname: "",
      },
    };
  },
  methods: {
    signIn() {
      this.$router.replace({
        name: "signin",
      });
    },

    capitalizeFLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    },

    async addUser() {
      this.error.username = "";
      this.error.password = "";
      this.error.fullname = "";
      this.error.signup = "";

      if (this.user.username === "") {
        this.error.username = "Username is required!";
      }

      if (this.user.password === "") {
        this.error.password = "Password is required!";
      }

      if (this.user.fullname === "") {
        this.error.fullname = "Full Name is required!";
      }

      if (this.user.username && this.user.password && this.user.fullname) {
        const movie = {
          username: this.user.username,
          password: this.user.password,
          fullname: this.user.fullname,
        };

        await axios
          .post("auth/signup", movie)
          .then((response) => {
            //this.movie = null;
            this.$refs.username.focus();
            this.msg_inserted = response.data.message.concat(
              " " + this.capitalizeFLetter(this.user.fullname)
            );
            this.user.username = "";
            this.user.password = "";
            this.user.fullname = "";
          })
          .catch((error) => {
            //console.log("Error on Authentication");
            this.error = error;
            //console.log(error);
            this.error.signup = "Username ("
              .concat(this.user.username)
              .concat(") ")
              .concat(" already taken!");
          });
      }
    },
  },
};
</script>
