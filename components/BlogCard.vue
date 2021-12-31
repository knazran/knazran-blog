<template>
  <div
    class="w-full max-w-4xl px-6 py-4 bg-white rounded-lg shadow-md my-4 border border-indigo-100 hover:border-indigo-300"
    @click="goToBlogPost"
  >
    <div class="flex justify-between items-center">
      <span class="font-light text-gray-600">{{formattedPublishedDate}}</span>
      <a class="px-4 py-1 bg-primary-700 text-gray-100 font-bold rounded text-sm">{{blogPost.tag}}</a>
    </div>
    <div class="mt-2">
      <nuxt-link
        class="text-xl text-gray-700 font-bold hover:underline"
        :to="`/blog`"
      >{{blogPost.title}}</nuxt-link>
      <p class="mt-2 text-gray-600 text-md">{{blogPost.description}}</p>
    </div>
    <!-- <div class="flex justify-between items-center mt-4">
      <a href="#" class="text-blue-500 hover:underline">Read more</a>
      <div>
        <a href="#" class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
            alt="avatar"
            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
          <h1 class="text-gray-700 font-bold hover:underline">Alex John</h1>
        </a>
      </div>
    </div>-->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    blogPost: Object,
  },
  methods: {
    goToBlogPost() {
      this.$router.push({
        path: `/blog/${this.blogPost.slug}`,
      })
    },
  },
  computed: {
    formattedPublishedDate() {
      return moment(this.blogPost.date).format('D MMM YYYY')
    },
  },
}
</script>