<template>
  <div class="w-full md:w-1/3 py-4 pr-4 font-karla">
    <nuxt-link :to="`project/${slug}`">
      <div
        class="border shadow-md hover:shadow-2xl rounded-md py-4 px-6 flex flex-col justify-start space-y-4 h-full bg-white"
      >
        <div>
          <p class="text-sm text-primary-700 font-bold leading-tight">{{category}}</p>
          <h4 class="text-xl text-primary-900 font-semibold">{{title}}</h4>
        </div>
        <div class="text-sm text-primary-500 leading-tight">
          <p class="inline">{{description}}</p>
        </div>
        <div>
          <img class="w-full rounded-lg max-h-80 object-scale-down" :src="`${preview_image}`" />
        </div>

        <!-- <nuxt-link class="text-right text-primary-700" :to="`project/${slug}`">See More ></nuxt-link> -->
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    category: String,
    description: String,
    preview_image: String,
    slug: String,
  },
}
</script>