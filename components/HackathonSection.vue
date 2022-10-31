<template>
  <div class="mt-20">
    <subheader header="Hackathons and Side Projects" title="Hacking my way from zero-to-one over and over again">
    </subheader>
    <div class="flex flex-wrap items-stretch">
      <hackathon-card v-for="hackathon in hackathons" :key="hackathon.title" :title="hackathon.title"
        :category="hackathon.category" :description="hackathon.description" :preview_image="hackathon.preview_image"
        :slug="hackathon.slug"></hackathon-card>
    </div>
    <div class="flex justify-center">
      <button>
        <nuxt-link class="text-right text-primary-500 text-lg hover:font-semibold" :to="`/hackathon`">👀 See more hacks
          ></nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import HackathonCard from '~/components/HackathonCard'
import Subheader from '~/components/Subheader'

export default {
  components: {
    HackathonCard,
    Subheader,
  },
  computed: {
    hackathons() {
      const hackathons = this.$store.getters.getHackathons.slice()
      return hackathons
        .sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date)
        })
        .slice(0, 3)
    },
  },
}
</script>