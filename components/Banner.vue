<template>
  <div>
    <div class="flex p-5 bg-eScienceWhite items-center">
      <NuxtLink :to="`/`">
        <img src="~/static/nlesc-logo.svg" alt="Netherlands eScience Center Logo" width="250px">
      </NuxtLink>
    </div>
    <div v-if="$route.path === '/'" class="flex p-10 gap-10 bg-gentleBlue font-display font-bold">
      <h1 class="text-4xl text-eSciencePurple">
        {{ $config.title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
