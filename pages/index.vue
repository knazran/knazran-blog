<template>
  <div class="py-12 lg:py-24">
    <hero></hero>
    <skill-section></skill-section>
    <project-section></project-section>
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

export default {
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  components: {
    Logo,
    BlogCard,
    Hero,
    Contact,
    SkillSection,
    ProjectSection
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Khairul Nazran (Knazran) personal site and blog'
        }
      ]
    }
  },
  computed: {
    blogPosts() {
      const blogPost = this.$store.getters.getBlogposts.slice()
      return blogPost.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    }
  }
}
</script>

<styles>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</styles>
