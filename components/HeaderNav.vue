<template>
  <div>
    <div class="mx-auto w-4/5 lg:w-2/5 border-black border-4 px-4 py-2 mb-4">
      <h1 class="text-center text-3xl tracking-widest font-bold">Full-time Foodie</h1>
    </div>
    <div id="nav" class="flex justify-center lg:justify-start space-x-6 text-sm">
      <nuxt-link class="text-gray-700 hover:text-black" :to="`/`">HOME</nuxt-link>
      <a class="text-gray-700 hover:text-black">BLOG</a>
      <nuxt-link class="text-gray-700 hover:text-black" :to="`/about`">ABOUT</nuxt-link>
    </div>
    <div id="nav-hero" class="my-4">
      <img src="https://picsum.photos/1080/400" />
    </div>
  </div>
</template>