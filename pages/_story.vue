<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 gap-2">
    <!-- Header -->
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="~/static/nlesc_logo.png" alt="Netherlands eScience Center Logo">
      </NuxtLink>
      <h1 class="text-2xl">
        {{ story.category }}: {{ story.title }}
      </h1>
    </div>

    <!-- Other media types on chapterlevel -->
    <div class="h-5/6">
      <!-- Chapter tabs -->
      <div class="flex no-wrap text-left gap-2 mb-2">
        <div v-for="(headline, idx) of headlines" :key="idx">
          <div role="button" class="flex-grow bg-white rounded p-3 prose" @click="toggleChapter(idx)">
            {{ headline }}
          </div>
        </div>
      </div>

      <!-- Chapter text (markdown) panel -->
      <div v-for="(chapter, idx) in chapters" v-show="idx===currentChapter" :key="idx" class="flex flex-row-reverse justify-end gap-2 overflow-auto h-5/6">
        <div v-if="!chapter.props.presentation">
          <div v-if="chapter.props.widemd" class="p-4 w-full bg-white rounded overflow-auto ">
            <div class="content-center" style="width:60%; margin:auto">
              <nuxt-content :document="chapter" class="prose mb-6 max-w-none" />
            </div>
          </div>
          <div v-else class="p-4 w-1/3 bg-white rounded overflow-auto">
            <nuxt-content :document="chapter" class="prose mb-6" />
          </div>
        </div>

        <!-- Chapter media panel -->
        <!-- Presentation (revealjs) on story level -->
        <div v-if="chapter.props.presentation" class="p-4 w-2/3 bg-white rounded overflow-auto">
          <div :id="'deck' + idx" class="reveal">
            <div class="slides">
              <section :data-markdown="getContent(chapter.props.presentation)" data-separator="^\n\n\n" data-separator-vertical="^\n\n" data-separator-notes="^Note:" />
            </div>
          </div>
        </div>

        <!-- Image options -->
        <div v-else-if="chapter.props.image" class="w-2/3 bg-white rounded">
          <img v-if="!chapter.props.image.endsWith('html')" :src="getContent(chapter.props.image)" alt="story image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto" @click="openBigImage">
          <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
          <div v-show="showBigImage" v-if="!chapter.props.image.endsWith('html')" class="fixed inset-0 flex bg-gray-900 bg-opacity-80" @click="closeBigImage">
            <div class="fixed bg-white shadow-2xl inset-5 z-40 flex justify-center" @click="closeBigImage">
              <img :src="getContent(chapter.props.image)" alt="story image" class="w-auto h-full object-contain">
            </div>
          </div>
        </div>
        <!-- Video from youtube -->
        <div v-else-if="chapter.props.video" class="w-2/3 bg-white h-full rounded flex-grow">
          <iframe class="object-contain w-full h-full max-w-full max-h-full mx-auto" :src="'https://www.youtube.com/embed/' + chapter.props.video" title="YouTube video player" frameborder="0" />
        </div>
        <!-- Website  -->
        <div v-else-if="chapter.props.website" class="w-2/3 bg-white rounded">
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

<script type="module" src="../middleware/story.js"></script>
