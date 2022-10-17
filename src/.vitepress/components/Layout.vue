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

    <template #home-features-before>
      <div class="intro">
        <div class="container vp-doc">
          <div class="language-shell">
            <pre><code><span class="line">$ npm create chat-app</span></code></pre>
          </div>
        </div>
      </div>
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

  .intro {
    padding: 0 24px;
    margin-bottom: 30px;
  }

  .intro .container {
    max-width: 1152px;
    margin: 0 auto;
  }

  .intro .language-shell {
    width: 228px;
  }

  @media (min-width: 960px) {
    .intro {
      padding: 0 64px;
    }
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

  @media (min-width: 640px) {
    .intro {
      padding: 0 48px;
    }
  }
</style>
