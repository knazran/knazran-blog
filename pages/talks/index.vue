<template>
  <div class="mt-20">
    <subheader header="Talks and Speaking Engagement" title="Sharing what I've learned to others in public"></subheader>
    <div class="my-8 flex flex-wrap items-stretch">
      <talk-card v-for="talk in talks" :key="talk.title" :title="talk.title" :category="talk.category"
        :description="talk.description" :preview_image="talk.preview_image" :slug="talk.slug"></talk-card>
      <!-- <skill-card
        v-for="skill in skillCardData"
        :key="skill.key"
        :icon="skill.icon"
        :title="skill.title"
        :hook="skill.hook"
        :tools="skill.tools"
        :description="skill.description"
      ></skill-card>-->
    </div>
  </div>
</template>

<script>
import TalkCard from '~/components/TalkCard'
import Subheader from '~/components/Subheader'

export default {
  components: {
    TalkCard,
    Subheader
  },
  computed: {
    talks() {
      const talks = this.$store.getters.getTalks.slice()
      return talks
        .sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date)
        })
    },
  },
}
</script>