<template>
  <div class="w-1/2 mx-auto my-4 flex flex-col gap-4">
    <div>id:{{ response.id }}</div>
    <div>name:{{ response.name }}</div>
    <div>city:{{ response.address.city }}</div>
    <div>zipcode:{{ response.address.zipcode }}</div>
    <RouterLink :to="nextLink(response.id)">go to next user</RouterLink>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import type MyData from "../components/type";
export default {
  name: "AddressPage",
  data() {
    return {
      response: {
        id: 0,
        name: "",
        address: {
          city: "",
          zipcode: "",
        },
      } as MyData,
    };
  },
  async created() {
    this.loadById(this.$route);
  },
  methods: {
    async load() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (data.status) {
          return data.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
    nextLink(id: number) {
      return { name: "userById", params: { id: id + 1 } };
    },
    async loadById(route: RouteLocationNormalizedLoaded) {
      const data = await this.load();
      const index = data.find(
        (args: MyData) => args.id.toString() === route.params.id
      );
      this.response = index;
    },
  },
  watch: {
    $route(n) {
      this.loadById(n);
    },
  },
};
</script>
