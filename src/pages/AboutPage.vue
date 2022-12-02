<template>
  <div class="bg-blue-200 w-1/2 justify-center flex m-auto">
    my name is {{ name }} {{ family }}
  </div>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
  data() {
    return {
      name: this.$route.query.name,
      family: this.$route.query.family,
    };
  },
};
</script>
