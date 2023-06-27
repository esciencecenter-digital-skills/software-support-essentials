<template>
  <div class="flex flex-col w-screen h-screen bg-blue-50">
    <Banner />
    <div class="flex flex-col w-5/6 h-5/6 bg-blue-50 p-10">
      <!-- Chapter tabs -->
      <div class="flex no-wrap text-left font-display gap-2 mb-2">
        <div v-for="(headline, idx) of headlines" :key="idx">
          <div role="button" class="flex-grow bg-white rounded p-3 font-display" @click="toggleChapter(idx)">
            <h2 class="text-2xl text-eSciencePurple">
              {{ headline }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Chapter text (markdown) panel -->
      <div v-for="(chapter, idx) in chapters" v-show="idx===currentChapter" :key="idx" class="flex flex-row-reverse justify-end gap-2 overflow-auto h-full font-body">
        <div v-if="!chapter.props.presentation">
          <div v-if="chapter.props.widemd" class="p-4 w-full h-full">
            <nuxt-content :document="chapter" class="prose mb-6" />
          </div>
          <div v-else class="p-4 w-full h-full overflow-auto">
            <nuxt-content :document="chapter" class="prose mb-6" />
          </div>
        </div>

        <!-- Chapter media panel -->
        <!-- Presentation (revealjs) on story level -->
        <div v-if="chapter.props.presentation" class="w-2/3" style="min-width: 100%; min-height: 80%;">
          <div :id="'deck' + idx" class="reveal">
            <div class="slides">
              <section :data-markdown="getContent(chapter.props.presentation)" data-separator="^\n\n\n" data-separator-vertical="^\n\n" data-separator-notes="^Note:" />
            </div>
            <!-- TODO: show notes below the slide and style them as body text-->
          </div>
        </div>

        <!-- Image options -->
        <div v-else-if="chapter.props.image" class="w-2/3">
          <img v-if="!chapter.props.image.endsWith('html')" :src="getContent(chapter.props.image)" alt="story image" class="object-contain w-auto max-w-full mx-auto" @click="openBigImage">
          <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
          <div v-show="showBigImage" v-if="!chapter.props.image.endsWith('html')" class="fixed inset-0 flex bg-gray-900 bg-opacity-80" @click="closeBigImage">
            <div class="fixed bg-white shadow-2xl inset-5 z-40 flex justify-center" @click="closeBigImage">
              <img :src="getContent(chapter.props.image)" alt="story image" class="w-auto h-full object-contain">
            </div>
          </div>
        </div>
        <!-- Video from youtube -->
        <div v-else-if="chapter.props.video" class="w-2/3">
          <iframe class="object-contain w-full h-full max-w-full max-h-full mx-auto" :src="'https://www.youtube.com/embed/' + chapter.props.video" title="YouTube video player" frameborder="0" />
        </div>
        <!-- Website  -->
        <div v-else-if="chapter.props.website" class="w-2/3">
          <iframe class="object-contain w-full h-full max-w-full max-h-full mx-auto" :src="chapter.props.website" title="Website" frameborder="0" />
        </div>
        <!-- All other (illegal) entries, except widemd. That option should remove the div. -->
        <div v-else-if="!chapter.props.widemd">
          <p>
            No chapter type found for this chapter. Does the chapter tag for this story have a chapter type key? e.g. :::Chapter{headline="Name of my chapter" image="chapimg.png"}<br>
            The following chapter types are available: [image, video, website, widemd]
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'
import RevealMath from 'reveal.js/plugin/math/math.js'

export default {
  async asyncData ({ $content, params }) {
    const story = await $content(params.story).fetch()
    const chapters = story.body.children
      .filter(child => child.tag === 'chapter')
      .map((child) => {
        return { body: { children: child.children }, props: child.props }
      })
    const headlines = chapters.map(chapter => chapter.props.headline)
    return { params, story, headlines, chapters }
  },
  data () {
    return {
      error: false,
      currentChapter: 0,
      showBigImage: false
    }
  },
  mounted () {
    this.chapters.forEach((chapter, idx) => {
      if (chapter.props.presentation) {
        const deck = new Reveal(
          document.querySelector('#deck' + idx),
          {
            hash: true,
            embedded: true,
            showNotes: true,
            plugins: [RevealMarkdown, RevealMath, RevealNotes]
          })
        deck.initialize()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeBigImage()
      }
    })
  },
  methods: {
    getContent (path) {
      return `stories/_${this.params.story}/${path}`
    },
    toggleChapter (i) {
      this.currentChapter = i
    },
    openBigImage () {
      this.showBigImage = true
    },
    closeBigImage () {
      this.showBigImage = false
    }
  }
}

</script>

<style>
@import url('node_modules/reveal.js/dist/reveal.css');
@import url('node_modules/reveal.js/dist/theme/black.css');
</style>
