<template>
  <div class="my-8 md:my-16 flex justify-center">
    <article class="w-full md:w-4/5 p-4 bg-white rounded-lg shadow-md">
      <div id="header" class="flex flex-wrap w-full mb-8">
        <div class="w-full leading-tight">
          <p class="text-lg text-primary-700 font-bold leading-tight">{{blogPost.tag}}</p>
          <h4 class="text-3xl text-primary-900 font-semibold">{{blogPost.title}}</h4>
          <p class="text-lg text-primary-500 leading-tight mt-4">{{blogPost.description}}</p>
        </div>
      </div>

      <div class="markdown py-4 w-full" v-html="$md.render(blogPost.body)" />
    </article>
  </div>

  <!-- <article>
    <h1>{{blogPost.title}}</h1>
    <div class="markdown" v-html="$md.render(blogPost.body)" />
  </article>-->
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      }
  },
}
</script>

<style lang="postcss">
/* Additional vertical padding used by kbd tag. */
.py-5 {
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
  @apply mt-4;
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
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
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
  @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-5;
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
  @apply text-xs inline-block rounded border px-1 py-5 align-middle font-normal font-mono shadow;
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