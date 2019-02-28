import Vue from "vue";
import Router from "vue-router";
import Events from "./components/Events.vue";
import singleEvent from "./components/SingleEvent.vue";
import createEvent from "./components/CreateEvent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "events",
      component: Events
    },
    {
      path: '/event/:id',
      name: 'singleEvent',
      component: singleEvent,
      props: true
    },
    { path: '/create_event', name: 'create', component: createEvent }

  ]
});
