<template>
  <div class="flex flex-col w-screen h-screen bg-blue-50 gap-2">
    <Banner />

    <!-- Other media types on chapterlevel -->
    <div class="flex flex-col h-full w-full">
      <!-- Chapter tabs -->
      <div class="flex flex-auto no-wrap text-left bg-gentleBlue gap-2 pl-2">
        <div v-for="(headline, idx) of headlines" :key="idx">
          <div role="button" class="flex-grow rounded p-4" @click="toggleChapter(idx)">
            <h2 class="text-lg font-display text-eSciencePurple hover:underline">
              {{ headline }}
            </h2>
          </div>
        </div>
      </div>

      <div v-for="(chapter, idx) in chapters" v-show="idx===currentChapter" :key="idx" class="flex flex-auto justify-end overflow-auto p-6 bg-gentleBlue font-body h-full w-full">

        <!-- Chapter media panel -->
        <!-- Presentation (revealjs) on story level -->
        <div v-if="chapter.props.presentation" class="flex-auto w-full overflow-auto">
          <div :id="'deck' + idx" class="reveal">
            <div class="slides">
              <section :data-markdown="getContent(chapter.props.presentation)" data-separator="^\r?\n---\r?\n$" data-separator-notes="^Note:" />
            </div>
            <!-- TODO: show notes below the slide and style them as body text-->
          </div>
        </div>

        <!-- Image options -->
        <div v-else-if="chapter.props.image" class="flex-auto h-full w-2/3 bg-white rounded">
          <img v-if="!chapter.props.image.endsWith('html')" :src="getContent(chapter.props.image)" alt="story image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto" @click="openBigImage">
          <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
          <div v-show="showBigImage" v-if="!chapter.props.image.endsWith('html')" class="fixed inset-0 flex bg-gray-900 bg-opacity-80" @click="closeBigImage">
            <div class="fixed bg-white shadow-2xl inset-5 z-40 flex justify-center" @click="closeBigImage">
              <img :src="getContent(chapter.props.image)" alt="story image" class="w-auto h-full object-contain">
            </div>
          </div>
        </div>

        <!-- Video from youtube -->
        <div v-else-if="chapter.props.video" class="flex-auto h-full w-2/3 bg-white rounded">
          <iframe class="object-contain w-full h-full max-w-full max-h-full mx-auto" :src="'https://www.youtube.com/embed/' + chapter.props.video" title="YouTube video player" frameborder="0" />
        </div>

        <!-- Website  -->
        <div v-else-if="chapter.props.website" class="flex-auto h-full w-2/3 bg-white rounded">
          <iframe class="object-contain w-full h-full max-w-full max-h-full mx-auto" :src="chapter.props.website" title="Website" frameborder="0" />
        </div>

        <!-- Only text  -->
        <div v-else-if="chapter.props.widemd" class="flex flex-initial w-full bg-white rounded ">
          <div class="container mx-auto w-2/3">
            <nuxt-content :document="chapter" class="prose mb-6 max-w-none" />
          </div>
        </div>

        <!-- All other (illegal) entries, except widemd. That option should remove the div. -->
        <div v-else-if="!chapter.props.widemd" class="flex-auto h-full w-full bg-white rounded">
          <p>
            No chapter type found for this chapter. Does the chapter tag for this story have a chapter type key? e.g. :::Chapter{headline="Name of my chapter" image="chapimg.png"}<br>
            The following chapter types are available: [image, video, website, widemd]
          </p>
        </div>

            <!-- Chapter text (markdown) panel -->
        <div v-if="!chapter.props.presentation && !chapter.props.widemd" class="flex-initial p-4 w-1/3 bg-white rounded overflow-auto">
            <nuxt-content :document="chapter" class="prose mb-6" />
        </div>

      </div>
    </div>
  </div>
</template>

<script type="module" src="../layouts/story.js"></script>
