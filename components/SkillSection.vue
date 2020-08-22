<template>
  <div class="mt-20 relative">
    <subheader header="Skills and Expertise" title="What I am good at 💪🏽"></subheader>
    <div class="my-8 flex flex-wrap items-stretch">
      <skill-card
        v-for="skill in skillCardData"
        :key="skill.key"
        :icon="skill.icon"
        :title="skill.title"
        :hook="skill.hook"
        :tools="skill.tools"
        :description="skill.description"
      ></skill-card>
    </div>
    <!-- <img style="z-index:-1" class="absolute right-0 top-0" src="~/assets/img/Ellipse 2.png" /> -->
  </div>
</template>

<script>
import Subheader from '~/components/Subheader.vue'
import SkillCard from '~/components/SkillCard.vue'
// Icons
import pythonIcon from '@iconify/icons-simple-icons/python'
import pandasIcon from '@iconify/icons-simple-icons/pandas'
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql'
import metabaseIcon from '@iconify/icons-logos/metabase'
import reactIcon from '@iconify/icons-simple-icons/react'
import vueDotJs from '@iconify/icons-simple-icons/vue-dot-js'
import tailwindcssIcon from '@iconify/icons-simple-icons/tailwindcss'
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby'
import djangoIcon from '@iconify/icons-simple-icons/django'
import herokuIcon from '@iconify/icons-simple-icons/heroku'
import mixpanelIcon from '@iconify/icons-logos/mixpanel'
import googleAnalytics from '@iconify/icons-logos/google-analytics'

export default {
  components: {
    Subheader,
    SkillCard
  },
  data() {
    return {
      skillCardData: [
        {
          key: 'data',
          icon: 'Skill Icon - Data.png',
          title: 'End-to-end data project',
          hook: 'Utilize data for impact.',
          description:
            'From identifying the problem scope, sourcing and extracting data, analysis, dashboarding, and model deployment, I am able to conduct a data project from start to finish',
          tools: [pythonIcon, pandasIcon, postgresqlIcon, metabaseIcon]
        },
        {
          key: 'web',
          icon: 'Skill Icon - web.png',
          title: 'Web Development',
          hook: 'Build great web experiences.',
          description:
            'By using modern web toolkit, I build websites and apps which brings delight whether it is a static landing page or an analytical web application.',
          tools: [
            reactIcon,
            vueDotJs,
            tailwindcssIcon,
            gatsbyIcon,
            djangoIcon,
            herokuIcon
          ]
        },
        {
          key: 'product',
          icon: 'Skill Icon - product.png',
          title: 'Product Development',
          hook: 'Build the right product for the problem.',
          description:
            'Through conducting user interviews, identifying success metrics, planning development, and tracking product analytics.',
          tools: [googleAnalytics, mixpanelIcon]
        },
        {
          key: 'teach',
          icon: 'Skill Icon - teach.png',
          title: 'Teaching & Knowledge Sharing',
          hook: '“Jangan kedekut ilmu”.',
          description:
            'I deliver talks in meetups and conferences to share what I know and lessons learnt from my journey and mistakes.',
          tools: null
        }
      ]
    }
  }
}
</script>