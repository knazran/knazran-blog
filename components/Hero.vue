<template>
  <transition name="block" enter-active-class="animate__animated animate__bounce">
    <div class="md:flex font-karla items-center">
      <div class="flex justify-center md:block mt-0 md:mt-0 mb-4 md:mb-0 px-4">
        <img class="rounded-full w-48 md:w-64 h-48 md:h-64" src="~/assets/img/portrait.jpg" />
      </div>
      <div class="flex flex-col space-y-4 pl-6 lg:pl-12 w-full md:w-3/5">
        <h1
          class="text-3xl md:text-4xl tracking-wide leading-none font-bold text-primary-700"
        >Hi, I'm Nazran</h1>
        <p class="text-xl text-primary-500 leading-snug">
          I build data products and web apps to solve
          problems that matter. Currently a Software Engineer in FinTech. A serial hackathoner with over 20 participations in the past 4 years.
        </p>
        <p class="text-xl text-primary-500">Currently based in Kuala Lumpur 🇲🇾</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style>
.block-enter {
  opacity: 0;
}
.block-enter-active {
  transition: opacity 2s;
}
.block-leave-active {
  transition: opacity 2s;
  opacity: 0;
}
</style>