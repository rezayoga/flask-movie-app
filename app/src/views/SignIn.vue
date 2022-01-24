<template>
  <form @submit.prevent="submit">
    {{ form }}
    <div>
      <label for="username"></label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="form.username"
      />
    </div>
    <div>
      <label for="password"></label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="form.password"
      />
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
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "dashboard",
          });
        })
        .catch(() => {
          console.error("Fill the login form!")
        });
    },
  },
};
</script>
