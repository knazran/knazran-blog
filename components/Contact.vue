<template>
  <div
    class="w-full lg:mx-auto bg-primary-300 rounded-md flex flex-col py-8 items-center space-y-6 font-raleway"
  >
    <div class="text-center">
      <p class="text-subheader-400 text-lg font-semibold">Want to know more?</p>
      <h4 class="text-primary-900 text-2xl font-semibold">Let's Connect</h4>
    </div>
    <div class="text-center">
      <p class="text-primary-700 text-lg font-semibold">Reach me at</p>
      <h4 class="text-primary-700 text-xl font-semibold">khairulnazran94@gmail.com</h4>
    </div>
    <div class="text-center">
      <p class="text-primary-700 text-lg font-semibold mb-4">or connect with me through:</p>
      <div id="nav" class="flex justify-center space-x-6 text-sm">
        <a class="text-gray-700 hover:text-black" href="https://www.linkedin.com/in/knazran/">
          <IconifyIcon :icon="icons.linkedin" height="40" />
        </a>
        <a class="text-gray-700 hover:text-black" href="https://github.com/knazran">
          <IconifyIcon :icon="icons.github" height="40" />
        </a>
        <a class="text-gray-700 hover:text-black" href="https://twitter.com/khairulnazran">
          <IconifyIcon :icon="icons.twitter" height="40" />
        </a>
      </div>
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