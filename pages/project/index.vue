<template>
  <div class="mt-20">
    <subheader header="Past Projects and Involvement" title="What have I done 🏗️"></subheader>
    <div class="my-8 flex flex-wrap items-stretch">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :category="project.category"
        :description="project.description"
        :preview_image="project.preview_image"
        :slug="project.slug"
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
    projects() {
      const projects = this.$store.getters.getProjects.slice()
      return projects.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    }
  }
}
</script>