<template>
  <v-app>
    <v-toolbar app flat dark>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <v-btn flat large>Logo</v-btn> -->
        <router-link to="/" class="logo">Logo</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Events</v-btn>
        <v-btn flat to="/create_event">Create a event</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.logo {
  text-decoration: none;
  color: #ffffff;
}
.actiVe {
  color: red;
}
</style>

