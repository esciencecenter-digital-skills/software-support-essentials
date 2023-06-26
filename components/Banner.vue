<template>
  <div>
    <div class="flex p-5 items-center bg-white">
      <NuxtLink :to="`/`">
        <img src="~/static/nlesc-logo.svg" alt="Netherlands eScience Center Logo" width="250px">
      </NuxtLink>
    </div>
    <div class="flex p-10 gap-10 bg-blue-50 font-display">
      <h1 class="text-4xl text-eSciencePurple">
        {{ $route.path === '/' ? $config.title : '' }} <!-- only if showing the main page -->
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
