<template>
  <v-container>
    <v-text-field label="Solo" placeholder="Search event..." solo v-model="search"></v-text-field>
    <v-layout row wrap>
      <v-flex
        xs12
        sm12
        md6
        lg4
        class="flex-item"
        v-for="(event, index) in filterEvents"
        :key="index"
      >
        <v-card class="card mb-2 mr-2" flat>
          <v-card-title primary-title>
            <div>
              <p class="card-info headline title">{{event.title}}</p>
              <p class="card-info grey--text subtitle mb-2">Creator - {{event.creator}}</p>
              <p class="card-info grey--text">{{event.location}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              flat
              :to="{name: 'singleEvent', params: {id: index, title: event.title, location: event.location, creator: event.creator, desc: event.desc, date: event.date}}"
            >View More</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="event.show = !event.show" flat>
              <v-icon>{{event.show ? 'keyboard_arrow_down': 'keyboard_arrow_up'}}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="event.show">{{event.date}} - {{event.desc}}</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Coding Cafe",
          location: "345 E Shelly st",
          creator: "John Doe",
          desc: "Coding while have some good coffee.",
          date: "2-19-2019",
          show: false
        },
        {
          id: 2,
          title: "Javascript Basics",
          location: "224 E Ave st",
          creator: "Jane Bell",
          desc: "Want to learn javascript? this is a good place to start.",
          date: "3-08-2019",
          show: false
        },
        {
          id: 3,
          title: "Learn Vuejs with me!",
          location: "555 Elm st",
          creator: "Jim Carrey",
          desc: "Dive deeper into frontend development by learning vuejs",
          date: "3-22-2019",
          show: false
        },
        {
          id: 4,
          title: "Code with Nodejs",
          location: "125 Crystal Lake Shore st",
          creator: "Mary Jane",
          desc:
            "Become a backend developer with ease by learning nodejs, already know javascript? great nodejs will be a breeze",
          date: "4-04-2019",
          show: false
        }
      ],
      search: ""
    };
  },
  computed: {
    filterEvents() {
      // filter through events and return the title of the event that we searched for.
      return this.events.filter(event => {
        return event.title.toLowerCase().includes(this.search);
      });
    }
  }
};
</script>

<style scoped>
.card {
}
.title {
  margin-bottom: 5px;
}
.card-info {
  text-align: left;
}
</style>
