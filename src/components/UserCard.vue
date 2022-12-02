<template>
  <RouterLink :to="sort">Sort</RouterLink>
  <RouterView />
  <div class="w-1/2 flex justify-center my-8 mx-auto py-4">
    <ul>
      <li v-for="(res, index) in results" :key="index">
        <div class="flex gap-4 py-3">
          <div>{{ res.name }}</div>
          <div>{{ res.username }}</div>
          <div>{{ res.email }}</div>
          <div>
            <router-link :to="'/users/' + res.id">address...</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import type MyData from "./type";

export default defineComponent({
  name: "UserCard",
  data() {
    return {
      results: [] as MyData[],
      loading: false,
    };
  },
  created() {
    this.load(this.$route);
  },
  methods: {
    async load(route: RouteLocationNormalizedLoaded) {
      this.loading = true;
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (data.status) {
          if (route.query.sort === "ASC") {
            data.data.sort((a: MyData, b: MyData) => {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            });
          }
          this.results = data.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    sort() {
      return { name: "users", query: { sort: "ASC" } };
    },
  },
  watch: {
    $route(newRoute) {
      this.load(newRoute);
    },
  },
});
</script>
