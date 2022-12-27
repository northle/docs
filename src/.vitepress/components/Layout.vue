<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-features-before>
      <div class="intro">
        <div class="container">
          <h2>Focused on developer <span class="text-brand">experience</span></h2>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.intro {
  margin-bottom: 30px;
  padding: 0 24px;
}

.container {
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 20px;
  max-width: 1152px;
}

h2 {
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.2;
}

.text-brand {
  color: var(--vp-c-brand);
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
