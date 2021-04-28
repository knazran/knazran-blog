<template>
  <div class="mt-20">
    <subheader header="Past Projects and Involvement" title="What I have done 🏗️"></subheader>
    <div class="flex flex-wrap items-stretch">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :category="project.category"
        :description="project.description"
        :preview_image="project.preview_image"
        :slug="project.slug"
      ></project-card>
    </div>
    <div class="flex justify-center">
      <button>
        <nuxt-link
          class="text-right text-primary-500 text-lg hover:font-semibold"
          :to="`/project`"
        >👀 See more cool things I did ></nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import Subheader from '~/components/Subheader'

export default {
  components: {
    ProjectCard,
    Subheader,
  },
  computed: {
    projects() {
      const projects = this.$store.getters.getProjects.slice()
      return projects
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