<template>
  <NuxtLink :to="url">
    <!-- relative parent needed for absolute positioning of svg badges-->
    <div class="relative">
      <!-- Chapter image and description -->
            <div class="w-2/3 bg-white rounded">
                <img v-if="!chapter.props.image.endsWith('html')" :src="getContent(chapter.props.image)" alt="story image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto" @click="openBigImage">
                    <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
                <div v-show="showBigImage" v-if="!chapter.props.image.endsWith('html')" class="fixed inset-0 flex bg-gray-900 bg-opacity-80" @click="closeBigImage">
                    <div class="fixed bg-white shadow-2xl inset-5 z-40 flex justify-center" @click="closeBigImage">
                    <img :src="getContent(chapter.props.image)" alt="story image" class="w-auto h-full object-contain">
                    </div>
                </div>
            </div>
        </div>
  </NuxtLink>
</template>

<script>

export default {
  props: []
}
</script>
