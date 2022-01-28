<template>
  <div class="hero min-h-screen bg-base-200">
    <div
      class="flex-col bg-base-100 rounded-box shadow-2xl justify-center hero-content sm:m-10 lg:flex-row lg:ml-40 lg:mr-40"
    >
      <div class="text-center lg:text-left lg:p-28">
        <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          odit neque odio architecto praesentium repellendus delectus veniam
          provident adipisci beatae officia ut temporibus, corporis, corrupti
          rerum eum expedita totam tempora.
        </p>
      </div>

      <form @submit.prevent="submit" class="card flex-shrink-0 w-full max-w-sm">
        <div class="card-body">
          <div class="grid place-content-center">
            <img src="../assets/images/logo_compact.png" class="mask w-48" />
          </div>
          <br />
          <div class="alert alert-error" v-if="error.signin">
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
              <label>{{ error.signin }}</label>
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
              v-model="form.username"
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
              v-model="form.password"
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  &nbsp;Sign In
                </button>
              </div>
              &nbsp;
              <div class="grid flex-grow card place-items-center">
                <button class="btn btn-block"
                  @click.prevent="signUp"
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                  </svg>
                  &nbsp;Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "signin",
  components: {},

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      error: {
        signin: "",
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    signUp() {
      this.$router.replace({
        name: "signup",
      });
    },

    submit() {
      this.error.username = "";
      this.error.password = "";
      this.error.signin = "";

      if (this.form.username === "") {
        this.error.username = "Username is required!";
      }

      if (this.form.password === "") {
        this.error.password = "Password is required!";
      }

      if (this.form.username && this.form.password) {
        this.signIn(this.form)
          .then(() => {
            /*
            this.$router.replace({
              name: "dashboard",
            });
            */
            if (this.authenticated) {
              this.$router.replace({
                name: "dashboard",
              });
            } else {
              this.error.signin = "Username or password is incorrect!";
            }
          })
          .catch(() => {
            console.error("Please complete the form!");
          });
      }
    },
  },
};
</script>
