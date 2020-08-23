<template>
  <div class="w-full md:w-1/3 p-4 font-karla">
    <div class="border rounded-md py-4 px-6 flex flex-col justify-start space-y-4 h-full bg-white">
      <div>
        <p class="text-sm text-primary-700 font-bold leading-tight">{{category}}</p>
        <h4 class="text-xl text-primary-900 font-semibold">{{title}}</h4>
      </div>
      <div class="text-sm text-primary-500 leading-tight">
        <p class="inline">{{description}}</p>
      </div>
      <div>
        <img class="w-full rounded-lg" :src="`${preview_image}`" />
      </div>
      <nuxt-link class="text-right text-primary-700" :to="`project/${slug}`">See More ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    category: String,
    description: String,
    preview_image: String,
    slug: String
  }
}
</script>