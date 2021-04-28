<template>
  <div class="mt-20">
    <subheader header="Blog Posts" title="Observations, retrospectives, and musings ✍️"></subheader>
    <div class="flex flex-col items-center w-full" v-if="blogPosts.length">
      <blog-card v-for="(blogPost, index) in blogPosts" :key="index" :blogPost="blogPost"></blog-card>
    </div>
    <div v-else class="my-8">
      <h4 class="text-primary-900 text-xl text-center">Blog Posts coming soon!</h4>
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