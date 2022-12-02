<template>
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
    this.load();
  },
  methods: {
    async load() {
      this.loading = true;
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (data.status) {
          this.results = data.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
    handleAddress() {
      this.$router.push("users/");
    },
  },
});
</script>
