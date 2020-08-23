<template>
  <transition name="block" enter-active-class="animate__animated animate__bounce">
    <div class="md:flex font-karla">
      <div class="w-full md:w-3/5 flex flex-col space-y-4 pr-6 lg:pr-12">
        <h1
          class="text-6xl md:text-6xl tracking-wide leading-none font-bold text-primary-700"
        >Hi, I'm Nazran</h1>
        <p class="text-xl text-primary-500 leading-snug">
          I build data products and web apps to solve
          problems that matter. A serial hackathoner with over 20 participations in the past 4 years.
        </p>
        <p class="text-xl text-primary-500">Currently based in Kuala Lumpur 🇲🇾</p>
      </div>
      <div class="w-full mt-8 md:mt-0 px-4 md:w-2/5">
        <img class="rounded-lg" src="~/assets/img/portrait.jpg" />
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