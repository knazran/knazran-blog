<template>
  <div class="flex justify-between">
    <div>
      <h2 class="font-raleway tracking-wide font-black text-xl">KN</h2>
    </div>
    <div id="nav" class="flex justify-center lg:justify-start space-x-6 text-md font-semibold">
      <nuxt-link class="text-primary-700 hover:text-primary-900" :to="`/`">About</nuxt-link>
      <nuxt-link class="text-primary-700 hover:text-primary-900" :to="`/`">Projects</nuxt-link>
      <nuxt-link class="text-primary-700 hover:text-primary-900" :to="`/about`">Blog</nuxt-link>
    </div>
    <div id="nav" class="flex justify-center lg:justify-start space-x-6 text-sm">
      <a class="text-gray-700 hover:text-black" href="https://www.linkedin.com/in/knazran/">
        <IconifyIcon :icon="icons.linkedin" height="24" />
      </a>
      <a class="text-gray-700 hover:text-black" href="https://github.com/knazran">
        <IconifyIcon :icon="icons.github" height="24" />
      </a>
      <a class="text-gray-700 hover:text-black" href="https://twitter.com/khairulnazran">
        <IconifyIcon :icon="icons.twitter" height="24" />
      </a>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled'
import githubFilled from '@iconify/icons-ant-design/github-filled'
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined'

export default {
  components: {
    IconifyIcon
  },
  data() {
    return {
      icons: {
        linkedin: linkedinFilled,
        github: githubFilled,
        twitter: twitterOutlined
      }
    }
  }
}
</script>