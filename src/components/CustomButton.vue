<template>
  <button :class="varia" @click="home">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "active", "value"],
  computed: {
    varia() {
      switch (this.value) {
        case "home":
          return "bg-white px-8 py-2 rounded-md text-black";

        default:
          return "bg-purple-700 px-4 py-1 rounded-md text-white";
      }
    },
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
});
</script>
