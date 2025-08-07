<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 animate-fade-in">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-blue-400 animate-slide-down">Feature Comparison</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate-slide-down delay-100">
          DesQTA vs Web Version
        </p>
        <p class="mt-6 text-lg leading-8 text-zinc-300 animate-fade-in delay-200">
          See how DesQTA stacks up against the web version of SEQTA Learn.
        </p>
      </div>
      <div class="mt-16 overflow-x-auto">
        <table class="w-full text-left rounded-2xl bg-white/5 shadow-xl">
          <thead>
            <tr>
              <th class="px-6 py-4 text-lg font-semibold text-white">Feature</th>
              <th class="px-6 py-4 text-lg font-semibold text-blue-400 text-center">DesQTA</th>
              <th class="px-6 py-4 text-lg font-semibold text-zinc-300 text-center">Web Version</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10 rounded-2xl">
            <!-- Organise so features both softwares have come first -->
            <!-- <Checkmark /> for yes, <Crossmark /> for no. -->
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Better than default SEQTA</td> <!-- Feature -->
              <td class="px-6 py-5 text-center align-middle"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center align-middle"><Checkmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Local Application</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Works offline</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Local Notifications</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Semimark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Enhanched Styling editor</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Modern, responsive interface</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Optimized performance</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Full system integration</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
            <tr>
              <td class="px-6 py-5 text-base text-zinc-300">Browser-dependent performance</td> <!-- Feature -->
              <td class="px-6 py-5 text-center"><Crossmark /></td> <!-- Does DesQTA have it? -->
              <td class="px-6 py-5 text-center"><Checkmark /></td> <!-- Does BetterSeqta+ have it? -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-auto mt-32 max-w-2xl text-center animate-fade-in delay-400">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-slide-down">Ready to try DesQTA?</h2>
        <p class="mt-6 text-lg leading-8 text-zinc-300 animate-fade-in delay-100">
          Download DesQTA today and see the difference for yourself.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 animate-fade-in delay-200">
          <NuxtLink
            href="/download"
            class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
          >
            Download Now
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple checkmark and crossmark SVG components
const Checkmark = defineComponent({
  name: 'Checkmark',
  template: `
    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <path d="M0 26.016v-20Q0 3.52 1.76 1.76T6.016 0h20q2.464 0 4.224 1.76T32 6.016v20q0 2.496-1.76 4.224T26.016 32h-20Q3.52 32 1.76 30.24T0 26.016m4 0q0 .832.576 1.408t1.44.576h20q.8 0 1.408-.576T28 26.016v-20q0-.832-.576-1.408T26.016 4h-20q-.832 0-1.44.608T4 6.016zM7.584 16q0-.832.608-1.408t1.408-.576 1.408.576l2.848 2.816 7.072-7.04q.576-.608 1.408-.608t1.408.608.608 1.408-.608 1.408l-8.48 8.48q-.576.608-1.408.608t-1.408-.608l-4.256-4.256q-.608-.576-.608-1.408"/>
    </svg>
  `
})

const Crossmark = defineComponent({
  name: 'Crossmark',
  template: `
    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"></path>
    </svg>
  `
})

const Semimark = defineComponent({
  name: 'Semimark',
  template: `
    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <path d="M 0 26.016 L 0 16.016 L 0 6.016 C 0 5.184 0.147 4.413 0.44 3.704 C 0.734 2.995 1.174 2.346 1.76 1.76 C 2.347 1.173 2.995 0.733 3.704 0.44 C 4.413 0.147 5.184 0 6.016 0 L 16.016 0 L 26.016 0 C 26.838 0 27.6 0.147 28.304 0.44 C 29.008 0.734 29.654 1.173 30.24 1.76 C 30.827 2.346 31.266 2.994 31.56 3.704 C 31.853 4.413 32 5.184 32 6.016 L 32 16.016 L 32 26.016 C 32 26.848 31.853 27.616 31.56 28.32 C 31.267 29.024 30.827 29.664 30.24 30.24 C 29.653 30.816 29.008 31.251 28.304 31.544 C 27.6 31.838 26.838 31.989 26.016 32 L 16.016 32 L 6.016 32 C 5.184 32 4.413 31.853 3.704 31.56 C 2.995 31.266 2.346 30.826 1.76 30.24 C 1.173 29.653 0.733 29.008 0.44 28.304 C 0.147 27.6 0 26.837 0 26.016 Z M 16.016 4 L 16.016 28 L 26.016 28 C 26.283 28 26.533 27.952 26.768 27.856 C 27.003 27.76 27.222 27.616 27.424 27.424 C 27.626 27.232 27.776 27.019 27.872 26.784 C 27.968 26.549 28.01 26.293 28 26.016 L 28 16.016 L 28 6.016 C 28 5.738 27.952 5.482 27.856 5.248 C 27.76 5.013 27.616 4.8 27.424 4.608 C 27.232 4.416 27.019 4.269 26.784 4.168 C 26.55 4.067 26.294 4.011 26.016 4 L 16.016 4 Z"/>
    </svg>
  `
})

useHead({
  title: "Comparison",
});
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-24px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
}
.animate-slide-down {
  animation: slide-down 0.8s cubic-bezier(0.4,0,0.2,1) both;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
</style>
