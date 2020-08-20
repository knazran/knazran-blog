<template>
  <div class="lg:flex border cursor-pointer my-8" @click="goToBlogPost">
    <div class="w-full lg:w-1/2">
      <img src="https://picsum.photos/400/300" />
    </div>
    <div class="w-full lg:w-1/2 px-4 py-8 flex flex-col justify-between">
      <div class="flex mb-4">
        <img src="https://i.pravatar.cc/50" class="rounded-full w-10 h-10 mr-2" />
        <div class="flex flex-col">
          <p class="text-gray-900 text-xs">Ng Sher Lynn</p>
          <p class="text-gray-500 text-xs">{{formattedPublishedDate}}</p>
        </div>
      </div>
      <div>
        <h2 class="font-semibold text-2xl mb-2 hover:text-yellow-800">{{blogPost.title}}</h2>
        <p class="font-light text-gray-700 text-lg mb-2">{{blogPost.description}}</p>
      </div>
      <hr />
      <div class="flex justify-between text-xs text-gray-700">
        <div class="flex space-x-8">
          <p>1000 views</p>
          <p class="text-blue-400">Write comment</p>
        </div>

        <p>65 likes</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    blogPost: Object
  },
  methods: {
    goToBlogPost() {
      this.$router.push({
        path: `blog/${this.blogPost.slug}`
      })
    }
  },
  computed: {
    formattedPublishedDate() {
      return moment(this.blogPost.date).format('D MMM YYYY')
    }
  }
}
</script>