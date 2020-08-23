<template>
  <transition name="block" enter-active-class="animate__animated animate__bounce">
    <div class="my-16">
      <div class="md:flex font-karla">
        <div class="w-full md:w-3/5 flex flex-col space-y-4 pr-6 lg:pr-12">
          <p class="text-lg text-primary-500 leading-snug font-semibold">About Me</p>
          <h1
            class="text-4xl tracking-wide leading-none font-bold text-primary-700"
          >I'm Nazran, a Kuala Lumpur-based software / data engineer</h1>
          <p
            class="text-xl text-primary-500 leading-snug"
          >I build stuff and participate in hackathons for fun and to learn new things. Love sharing what have I learned on various platforms.</p>
          <p
            class="text-xl text-primary-500"
          >Dreams of one day building my own startup as a technical founder.</p>
        </div>
        <div class="w-full mt-8 md:mt-0 px-4 md:w-2/5">
          <img class="rounded-lg" src="~/assets/img/portrait_2.JPG" />
        </div>
      </div>
      <div class="font-karla py-8">
        <h1
          class="text-center md:text-left text-2xl leading-none font-bold text-primary-700"
        >Nazran in Action</h1>
        <div class="w-full flex flex-wrap">
          <div v-for="action in action_shots" :key="action" class="w-full md:w-1/2 p-4">
            <img
              class="object-cover rounded-lg"
              style="max-height:500px"
              :src="require(`@/assets/img/${action}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      action_shots: [
        'talk.JPG',
        'hackathon1.JPG',
        'hackathon2.jpg',
        'talk2.JPG'
      ]
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Khairul Nazran (Knazran) personal site and blog'
        }
      ]
    }
  }
}
</script>