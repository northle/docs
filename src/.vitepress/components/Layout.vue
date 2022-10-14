<script lang="ts" setup>
  import DefaultTheme from 'vitepress/theme';
  import { ref } from 'vue';

  const { Layout } = DefaultTheme;

  const showBanner = ref(true);
</script>

<template>
  <Layout>
    <template #layout-top>
      <aside class="banner" v-if="showBanner">
        <p>Northle is currently in the alpha stage.</p>
      </aside>
    </template>
  </Layout>
</template>

<style>
  :root {
    --vp-banner-height: 24px;
  }

  .Layout {
    padding-top: 24px;
  }

  .VPNav {
    top: 24px !important;
  }

  .banner {
    height: 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #4c8ffa, #14a9ee);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-weight: 500;
    font-size: 14px;
    z-index: 100;
  }
</style>
