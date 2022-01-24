<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movie",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getUsers() {
      const path = "https://movieapi.rezayogaswara.com/auth/signin";
      axios({
            method: 'get',
            url: path,
            auth: {
              username: 'reza',
              password: 'reza'
            }
        })
        .then((res) => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>
