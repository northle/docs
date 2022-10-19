<script lang="ts" setup>
  import DefaultTheme from 'vitepress/theme';

  const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
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

  @media (min-width: 640px) {
    .intro {
      padding: 0 48px;
    }
  }
</style>
