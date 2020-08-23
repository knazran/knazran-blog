<template>
  <article class="my-16">
    <div id="header" class="flex flex-wrap">
      <div class="w-full md:w-1/2 leading-tight">
        <p class="text-2xl text-primary-700 font-bold leading-tight">{{project.category}}</p>
        <h4 class="text-5xl text-primary-900 font-semibold">{{project.title}}</h4>
        <p class="text-lg text-primary-500 leading-tight mt-4">{{project.description}}</p>
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <img class="w-full rounded-lg object-fit" :src="`${project.preview_image}`" />
      </div>
    </div>

    <div class="markdown py-4" v-html="$md.render(project.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { project: payload }
    else
      return {
        project: await require(`~/assets/content/projects/${params.project}.json`)
      }
  }
}
</script>

<style lang="postcss">
/* Additional vertical padding used by kbd tag. */
.py-05 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.markdown {
  @apply text-gray-900 leading-normal break-words;
}

.markdown > * + * {
  @apply mt-0 mb-4;
}

.markdown li + li {
  @apply mt-1;
}

.markdown li > p + p {
  @apply mt-6;
}

.markdown strong {
  @apply font-semibold;
}

.markdown a {
  @apply text-blue-600 font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown h1 {
  @apply leading-tight text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.markdown blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
}

.markdown code {
  @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-05;
}

.markdown pre {
  @apply bg-gray-100 rounded p-4;
}

.markdown pre code {
  @apply block bg-transparent p-0 overflow-visible rounded-none;
}

.markdown ul {
  @apply text-base pl-8 list-disc;
}

.markdown ol {
  @apply text-base pl-8 list-decimal;
}

.markdown kbd {
  @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
}

.markdown table {
  @apply text-base border-gray-600;
}

.markdown th {
  @apply border py-1 px-3;
}

.markdown td {
  @apply border py-1 px-3;
}

/* Override pygments style background color. */
.markdown .highlight pre {
  @apply bg-gray-100 !important;
}
</style>