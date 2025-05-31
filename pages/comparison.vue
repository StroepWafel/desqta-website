<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base/7 font-semibold text-blue-400">Comparison</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          DesQTA vs SEQTA Learn Web
      </p>
        <p class="mt-6 text-lg leading-8 text-zinc-400">
          See how DesQTA enhances your SEQTA Learn experience with powerful desktop features
        </p>
      </div>

      <div class="mt-16 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-white/5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-zinc-800">
                <thead class="bg-zinc-900">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Feature</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">SEQTA Learn Web</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">DesQTA</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-zinc-800 bg-zinc-900/50">
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Interface</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Web-based interface with browser limitations</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Native desktop application with enhanced UI/UX</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Performance</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Dependent on browser and internet connection</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Optimized performance with offline capabilities</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Dashboard</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Standard web dashboard</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Enhanced dashboard with subject colors and better organization</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Assessments</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Basic list view</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Kanban board view with status tracking and subject columns</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Timetable</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Standard timetable view</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Enhanced timetable with subject colors and better visualization</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Navigation</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Browser-based navigation</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Quick access sidebar with modern UI</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Integration</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Limited to web browser</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Deep system integration with desktop features</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">Updates</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Automatic through browser</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-400">Automatic updates with version control</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold tracking-tight text-white">Ready to enhance your SEQTA experience?</h3>
        <div class="mt-8 flex justify-center gap-x-6">
          <NuxtLink
            href="/download"
            class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Download DesQTA
          </NuxtLink>
          <NuxtLink
            href="/"
            class="text-sm font-semibold leading-6 text-white"
            >
            Learn more <span aria-hidden="true">→</span>
          </NuxtLink>
              </div>
                </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Comparison - DesQTA',
  description: 'Compare DesQTA with standard SEQTA Learn web interface'
})
</script>
