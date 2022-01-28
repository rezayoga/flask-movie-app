<template>
  <div>
    <h1 class="text-6xl" v-if="user">
      {{ user.username }}<br />{{ user.fullname }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {},
};
</script>
