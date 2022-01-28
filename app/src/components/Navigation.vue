<!--
<template>
  <ul>
    <template v-if="authenticated">
      <li>Welcome {{ user.fullname }} ({{ user.username }})</li>
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="signOut">Sign out</a>
      </li>
    </template>
  </ul>
</template>
-->

<template>
  <div
    v-if="authenticated"
    class="navbar ml-5 mt-5 mr-5 shadow-2xl bg-neutral text-neutral-content rounded-t-lg"
  >
    <div class="flex-1 px-2 mx-2">
      <router-link
        :to="{ name: 'dashboard' }"
        class="btn btn-ghost btn-sm rounded-btn"
      >
        Movie App
      </router-link>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <router-link
          :to="{ name: 'movie-add' }"
          class="btn btn-ghost btn-sm rounded-btn"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          &nbsp;Add Movie
        </router-link>

        <router-link
          :to="{ name: 'dashboard' }"
          class="btn btn-ghost btn-sm rounded-btn"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          &nbsp; signed in as: {{ user.username }}
        </router-link>
        
        <a class="btn btn-ghost btn-sm rounded-btn" @click.prevent="signOut">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          &nbsp;Sign Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home",
        });
      });
    },
  },
};
</script>
