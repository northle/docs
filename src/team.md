---
layout: home
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme';

  const members = [
    {
      avatar: 'https://www.github.com/dominiq007.png',
      name: 'Dominik Rajkowski',
      title: 'Creator and developer',
      links: [
        {
          icon: 'github',
          link: 'https://github.com/dominiq007',
        },
        {
          icon: 'instagram',
          link: 'https://www.instagram.com/dominiq_rajkowski',
        },
      ],
    },
  ];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Developer Team
    </template>
    <template #lead>
      Northle is currently developed by one person.
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers :members="members" />
</VPTeamPage>
