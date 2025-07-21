<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 animate-fade-in">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-blue-400 animate-slide-down">Themes</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate-slide-down delay-100">
          Themes is coming soon.
        </p>
        <p class="mt-6 text-lg leading-8 text-zinc-300 animate-fade-in delay-200">
          We're working hard to bring you customizable themes for DesQTA. Stay tuned for updates!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Themes",
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
</style> 