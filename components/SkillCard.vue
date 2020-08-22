<template>
  <div class="w-full md:w-1/2 p-4 font-karla">
    <div class="border rounded-md py-6 px-8 flex flex-col justify-start space-y-6 h-full bg-white">
      <div>
        <img class="h-10 w-10 inline" :src="require(`@/assets/img/${icon}`)" />
        <h3 class="pl-2 inline text-xl text-primary-900 font-bold">{{title}}</h3>
      </div>
      <div class="text-md text-primary-500 leading-tight">
        <p class="inline font-bold">{{hook}}</p>
        <p class="inline">{{description}}</p>
      </div>
      <div v-if="tools" class="flex flex-wrap space-x-6 justify-center">
        <IconifyIcon
          class="text-primary-500 mt-4"
          height="2em"
          v-for="(tool, index) in tools"
          :key="index"
          :icon="tool"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
export default {
  components: {
    IconifyIcon
  },
  props: {
    title: String,
    icon: String,
    hook: String,
    description: String,
    tools: Array
  }
}
</script>