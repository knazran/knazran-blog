<template>
  <div class="py-8 lg:py-12">
    <hero></hero>
    <skill-section></skill-section>
    <project-section></project-section>
    <hackathon-section></hackathon-section>
    <talks-section></talks-section>
    <blog-section></blog-section>
    <div class="mt-20">
      <contact></contact>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BlogCard from '~/components/BlogCard.vue'
import Hero from '~/components/Hero.vue'
import Contact from '~/components/Contact.vue'
import SkillSection from '~/components/SkillSection.vue'
import ProjectSection from '~/components/ProjectSection.vue'
import HackathonSection from '~/components/HackathonSection.vue'
import TalksSection from '~/components/TalksSection.vue'
import BlogSection from '~/components/BlogSection.vue'
import Subheader from '~/components/Subheader'

export default {
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  components: {
    Logo,
    BlogCard,
    Hero,
    Contact,
    SkillSection,
    ProjectSection,
    BlogSection,
    HackathonSection,
    TalksSection,
    Subheader,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Khairul Nazran (Knazran) personal site and blog',
        },
        {
          name: 'og:image',
          content: 'https://www.mugshotbot.com/m?url=https://www.knazran.dev',
        },
      ],
    }
  },
  computed: {
    blogPosts() {
      const blogPost = this.$store.getters.getBlogposts.slice()
      return blogPost.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    },
  },
}
</script>

<styles>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</styles>
