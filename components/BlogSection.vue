<template>
  <div class="mt-20">
    <subheader
      header="Latest Blog Posts"
      title="Observations, retrospectives, and musings ✍️"
      align="left"
    ></subheader>
    <blog-card v-for="(blogPost, index) in blogPosts" :key="index" :blogPost="blogPost"></blog-card>
    <div class="flex justify-center md:justify-start">
      <button>
        <nuxt-link
          class="text-right text-primary-500 text-lg hover:font-semibold"
          :to="`/blog`"
        >📖 Read More ></nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/BlogCard'
import Subheader from '~/components/Subheader'

export default {
  components: {
    BlogCard,
    Subheader,
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