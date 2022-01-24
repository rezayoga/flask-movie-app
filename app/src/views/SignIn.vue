<template>
  <form @submit.prevent="submit">
    <div>
      <label for="username"></label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="form.username"
      />
      <div class="error" v-if="error.username">
        <small>{{ error.username }}</small>
      </div>
    </div>
    <div>
      <label for="password"></label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="form.password"
      />
      <div class="error" v-if="error.password">
        <small>{{ error.password }}</small>
      </div>
    </div>
    <div>
      <button type="submit">Sign in</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

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
        username: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      this.error.username = "";
      this.error.password = "";

      if (this.form.username === "") {
        this.error.username = "Username is required!";
      }

      if (this.form.password === "") {
        this.error.password = "Password is required!";
      }

      if (this.form.username && this.form.password) {
        this.signIn(this.form)
          .then(() => {
            this.$router.replace({
              name: "dashboard",
            });
          })
          .catch(() => {
            console.error("Please complete the form!");
          });
      }
    },
  },
};
</script>
