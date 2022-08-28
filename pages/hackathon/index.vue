<template>
  <div class="mt-20">
    <subheader header="Hackathons and Side Projects" title="Hacking my way from zero-to-one over and over again"></subheader>
    <div class="my-8 flex flex-wrap items-stretch">
      <project-card
        v-for="hackathon in hackathons"
        :key="hackathon.title"
        :title="hackathon.title"
        :category="hackathon.category"
        :description="hackathon.description"
        :preview_image="hackathon.preview_image"
        :slug="hackathon.slug"
      ></project-card>
      <!-- <skill-card
        v-for="skill in skillCardData"
        :key="skill.key"
        :icon="skill.icon"
        :title="skill.title"
        :hook="skill.hook"
        :tools="skill.tools"
        :description="skill.description"
      ></skill-card>-->
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import Subheader from '~/components/Subheader'

export default {
  components: {
    ProjectCard,
    Subheader
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
    },
  },
}
</script>