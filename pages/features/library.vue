<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-base/7 font-semibold text-blue-400">Admin UI</h2>
        <p
          class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl"
        >
          Powerful metadata tools.
        </p>
        <p class="mt-6 text-lg/8 text-gray-300">
          Drop includes versatile tools to customise and edit the metadata
          attached to your library. Add or remove any images, update the name or
          icon, or edit the description.
        </p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <NuxtImg
          src="/images/ss/admin-metadata.png"
          alt="App screenshot"
          class="rounded-xl shadow-2xl ring-1 ring-white/10"
          quality="80"
          format="webp"
          preload
        />
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="relative pl-9"
        >
          <dt class="inline font-semibold text-white">
            <component
              :is="feature.icon"
              class="absolute left-1 top-1 size-5 text-blue-500"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          {{ " " }}
          <dd class="inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
import {
  DocumentDuplicateIcon,
  PencilIcon,
  ServerStackIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Multiple sources.",
    description:
      "Drop lets you configure more than one source to pull metadata from. Then, choose between them when importing your game.",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Markdown descriptions.",
    description:
      "Descriptions are parsed as markdown, so you can use all the formatting you like. Freely edit the description, and enjoy as it auto-saves.",
    icon: PencilIcon,
  },
  {
    name: "Image library.",
    description:
      "Upload and store all the images required for your game. Freely replace images without losing the originals, and customise the cover and banner of your store page.",
    icon: ServerStackIcon,
  },
];

useHead({
  title: "Library",
});
</script>
