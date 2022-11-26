<script lang="ts" setup>
  import DefaultTheme from 'vitepress/theme';

  const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-features-before>
      <div class="intro">
        <div class="container">
          <h2>
            Focused on <span class="text-gradient">developer experience</span>
          </h2>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
  .intro {
    padding: 0 24px;
    margin-bottom: 30px;
  }

  .container {
    max-width: 1152px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .text-gradient {
    background: linear-gradient(90deg, #12a7ec 0%, #2e8af3 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (min-width: 960px) {
    .intro {
      padding: 0 64px;
    }

    h2 {
      line-height: 1.4;
    }
  }

  @media (min-width: 640px) {
    .intro {
      padding: 0 48px;
    }
  }
</style>
