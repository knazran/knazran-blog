<template>
  <div class="font-karla container mx-auto px-4 lg:max-w-5xl py-8 md:py-12">
    <header-nav />
    <nuxt />
    <div class="text-center text-sm text-gray-500">
      Built with 💖 by
      <a
        class="text-blue-500 hover:text-blue-800"
        href="https://github.com/knazran"
      >knazran</a>
    </div>
    <div style="z-index:-1" class="absolute right-0 top-0 w-2/3 md:w-1/3">
      <img class="object-fill w-full" src="~/assets/img/Ellipse 1.png" />
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
</style>
