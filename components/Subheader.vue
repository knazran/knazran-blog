<template>
  <div class="text-center flex flex-col justify-center font-raleway">
    <p class="text-subheader-400 text-lg font-semibold">{{header}}</p>
    <h4 class="text-primary-900 text-2xl font-semibold">{{title}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    title: String
  }
}
</script>