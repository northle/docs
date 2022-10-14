<script lang="ts" setup>
  import DefaultTheme from 'vitepress/theme';

  const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-top>
      <aside class="banner">
        <p>Northle is currently in Alpha stage</p>
      </aside>
    </template>
  </Layout>
</template>

<style>
  :root {
    --vp-banner-height: 28px;
  }

  .Layout {
    padding-top: 28px;
  }

  .VPNav {
    top: 28px !important;
  }

  .banner {
    height: 28px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #3b82f6, #0ea5e9);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-weight: 500;
    font-size: 14px;
    z-index: 100;
  }
</style>
