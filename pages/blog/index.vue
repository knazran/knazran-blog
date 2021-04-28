<template>
  <div class="mt-20">
    <subheader header="Blog Posts" title="Observations, retrospectives, and musings ✍️"></subheader>
    <div class="flex flex-col items-center w-full">
      <blog-card v-for="(blogPost, index) in blogPosts" :key="index" :blogPost="blogPost"></blog-card>
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
      return this.$store.state.blogPosts
    },
  },
}
</script>