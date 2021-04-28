<template>
  <div class="flex flex-col justify-center font-raleway" :class="alignment">
    <p class="text-subheader-400 text-md font-semibold">{{header}}</p>
    <h4 class="text-primary-900 text-xl font-semibold">{{title}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    title: String,
    align: {
      type: String,
      default: 'center',
    },
  },
  computed: {
    alignment: function () {
      if (this.align === 'center') {
        return 'text-center'
      }
      if (this.align === 'left') {
        return 'text-left'
      }
    },
  },
}
</script>