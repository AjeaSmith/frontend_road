<template>
  <v-app>
    <v-container>
      <v-layout class="layout" row wrap>
        <v-flex class="grow-flex mr-3">im the right side</v-flex>
        <v-flex class="shrink-flex">im the left side</v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["title", "location", "creator", "desc", 'date'],
  name: "singleEvent"
};
</script>

<style>
.layout {
  text-align: center;
}
.grow-flex {
  background: red;
  flex-grow: 2;
}
.shrink-flex {
  background: blue;
}
</style>
