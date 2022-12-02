<template>
  <div class="bg-blue-600 text-white text-center p-8">
    <h1 class="text-3xl py-8">List Of Users</h1>
    <CustomButton title="Go to Home" value="home" />
  </div>
  <div class="flex justify-center p-8 bg-slate-100 gap-8 m-auto">
    <RouterLink
      :to="usersLink"
      class="bg-violet-700 px-8 py-2 text-white rounded-md"
    >
      Users
    </RouterLink>
    <RouterLink
      to="/about?name=meysam&family=saberi"
      class="bg-violet-700 px-8 py-2 text-white rounded-md"
    >
      About
    </RouterLink>
  </div>
  <RouterView />
  <RouterView name="footer" />
</template>

<script lang="ts">
import CustomButton from "./components/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  computed: {
    usersLink() {
      return { name: "users" };
    },
  },
};
</script>

<style>
a.active {
  @apply bg-green-500;
}
</style>
