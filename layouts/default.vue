<template>
  <div class="relative min-h-screen w-full flex flex-col">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />

    <!-- shadows -->
    <div class="fixed w-screen h-screen -z-10">
      <div
        class="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl top-[10rem]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-[15rem]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-100 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="absolute left-[10%] inset-x-0 transform-gpu overflow-hidden blur-3xl top-[50vh]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-blue-600 to-blue-100 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const siteDesc = "A powerful desktop application for SEQTA Learn";

useSeoMeta({
  description: siteDesc,
  ogDescription: siteDesc,
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/desqta-website/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/desqta-website/fav@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--primary-color: #3b82f6;
	--background: #121212;
	--surface: #18191c;
	--surface-alt: #232428;
	--text: #f3f4f6;
	--text-muted: #a1a1aa;
}

body {
	@apply antialiased;
	background: var(--surface);
	color: var(--text);
}

/* Custom Scrollbar Styles */
::-webkit-scrollbar {
	width: 10px;
	height: 8px;
	background: var(--surface-alt);
	border-radius: 8px;
}
::-webkit-scrollbar-thumb {
	background: var(--primary-color);
	border-radius: 8px;
	border: 2px solid var(--surface-alt);
}
::-webkit-scrollbar-thumb:hover {
	background: #2563eb;
}
::-webkit-scrollbar-corner {
	background: var(--surface-alt);
}

/* Firefox */
* {
	scrollbar-width: thin;
	scrollbar-color: var(--primary-color) var(--surface-alt);
} icon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/desqta-website/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/desqta-website/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/desqta-website/site.webmanifest",
    },
  ],
});
defineOgImageComponent("DesQTAOG", {
  title: "DesQTA",
  // logo: "/favicon.png",
});
</script>
