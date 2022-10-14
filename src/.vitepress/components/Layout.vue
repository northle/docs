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
  .Layout {
    padding-top: 32px;
  }

  .VPLocalNav {
    top: 32px !important;
  }

  .VPContent {
    padding-top: 82px !important;
  }

  .VPSidebar {
    top: 32px !important;
  }

  .VPNavScreen {
    top: 32px !important;
  }

  .banner {
    height: 32px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #4c8ffa, #14a9ee);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    z-index: 100;
  }

  @media (min-width: 768px) {
    .VPNav {
      top: 32px !important;
    }

    .aside-container {
      top: 42px !important;
    }

    .aside-content .spacer {
      display: none !important;
    }
  }
</style>
