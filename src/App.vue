<template>
  <div id="app">
    <div v-if="!error">
      <div v-for="user in users" :key="user.id">
        <h2>{{ user.name }} - {{ user.id }}</h2>
        <span v-for="todo in user.todos" :key="todo.id">
          {{ todo.userId }}
        </span>
      </div>
    </div>
    <div v-else>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      users: "users",
      error: "error",
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers",
    }),
  },
  created() {
    this.getUsers();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
