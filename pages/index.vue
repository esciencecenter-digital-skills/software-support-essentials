<template>
  <div class="flex flex-col w-screen bg-gentleBlue h-screen overflow-auto">
    <Banner />
    <input v-model="query" type="search" class="w-2/3 mt-4 mr-4 p-2 self-end" placeholder="search">
    <div class="flex flex-col pt-4 pb-6 pl-6">
      <!-- categories -->
      <div v-for="category in categories" :key="category" class="flex flex-wrap gap-4 mb-8">
        <h2 class="prose-2xl font-display font-bold text-eSciencePurple w-full pl-2">
          {{ category }}
        </h2>
        <!-- stories -->
        <StoryCard
          v-for="story in stories
            .filter(story => (story.category === category && story.visibility === 'visible'))
            .sort((a, b) => a.id - b.id)"
          :key="story.id"
          :title="story.title"
          :author="story.author"
          :thumbnail="`stories/_${story.slug}/${story.thumbnail}`"
          :url="story.slug"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import '../layouts/style.scss'

export default {
  async asyncData (context) {
    const stories = await context.$content()
      .only(['id', 'slug', 'title', 'author', 'thumbnail', 'category', 'visibility'])
      .fetch()
      .catch(e => console.log(e))

    const categories = stories
      .filter(story => story.visibility === 'visible')
      .map(story => story.category)
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort((a, b) => {
        return context.$config.categoryOrder.indexOf(a) - context.$config.categoryOrder.indexOf(b)
      })

    return { stories, categories }
  },
  data () {
    return {
      query: ''
    }
  },
  watch: {
    async query (query) {
      this.stories = await this.$content()
        .only(['id', 'slug', 'title', 'author', 'thumbnail', 'category'])
        .search(query)
        .fetch()
        .catch(e => console.log(e))
    }
  }
}
</script>
