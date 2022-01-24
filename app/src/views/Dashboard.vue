<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dashboard",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getAuthSignIn(username, password) {
      const path = "https://movieapi.rezayogaswara.com/auth/signin";
      axios({
        method: "get",
        url: path,
        auth: {
          username: username,
          password: password,
        },
      })
        .then((response) => {
          console.log("Authenticated");
          console.log(response.data);
          this.msg = response.data;
          /*this.$store.dispatch('signin', response.data)*/
        })
        .catch((error) => {
          console.log("Error on Authentication");
          this.error = error;
          console.log(error);
        });
    },
    getUsers() {
      const path = "https://movieapi.rezayogaswara.com/user";
      axios
        .get(path)
        .then((response) => {
          console.log(response.data);
          this.msg = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    //this.getUsers();
    this.getAuthSignIn('reza', 'reza');
  },
};
</script>
