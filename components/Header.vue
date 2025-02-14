<template>
  <header class="isolate z-10 absolute top-0 inset-x-0">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Drop</span>
          <Logo class="h-8 w-auto" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <!--
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover>
          <PopoverButton
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-zinc-100"
          >
            Product
            <ChevronDownIcon
              class="size-5 flex-none text-zinc-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-0 -z-10 bg-zinc-900 pt-14 shadow-lg ring-1 ring-zinc-900/5"
            >
              <div
                class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8"
              >
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="transition group relative rounded-lg p-6 text-sm/6 hover:bg-zinc-800"
                >
                  <div
                    class="transition flex size-11 items-center justify-center rounded-lg bg-zinc-950 group-hover:bg-zinc-900"
                  >
                    <component
                      :is="item.icon"
                      class="transition size-6 text-blue-600 group-hover:text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <a
                    :href="item.href"
                    class="transition mt-6 block font-semibold text-zinc-100"
                  >
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </a>
                  <p class="mt-1 text-zinc-400">{{ item.description }}</p>
                </div>
              </div>
              <div class="bg-zinc-950">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="grid grid-cols-3 divide-x divide-zinc-100/5 border-x border-zinc-100/5"
                  >
                    <a
                      v-for="item in callsToAction"
                      :key="item.name"
                      :href="item.href"
                      class="transition flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-zinc-100 hover:bg-zinc-900"
                    >
                      <component
                        :is="item.icon"
                        class="size-5 flex-none text-zinc-400"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <a href="#" class="text-sm/6 font-semibold text-zinc-100">Features</a>
        <a href="#" class="text-sm/6 font-semibold text-zinc-100"
          >Marketplace</a
        >
        <a href="#" class="text-sm/6 font-semibold text-zinc-100">Company</a>
      </PopoverGroup>
      -->
      <div class="hidden lg:flex" />
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://wiki.droposs.org/guides/quickstart.html" class="text-sm/6 font-semibold text-zinc-100"
          >Quickstart <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <Logo
              class="h-8 w-auto"
              alt="Drop logo"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-zinc-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-zinc-500/10">
            <div class="space-y-2 py-6">
              <!--<Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >
                  Product
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'size-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-zinc-300 hover:bg-zinc-800"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>-->
              <NuxtLink
                href="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >Home</NuxtLink
              >
              <NuxtLink
                href="https://wiki.droposs.org/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >Documentation</NuxtLink
              >
            </div>
            <div class="py-6">
              <a
                href="https://wiki.droposs.org/guides/quickstart.html"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >Get started &rarr;</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

const mobileMenuOpen = ref(false);
</script>
