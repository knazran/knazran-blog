<template>
  <div class="py-12 lg:py-24">
    <hero></hero>
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

export default {
  components: {
    Logo,
    BlogCard,
    Hero,
    Contact
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
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

<style>
</style>
