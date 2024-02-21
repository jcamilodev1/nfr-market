<script lang="ts" setup>
import { ref } from "vue";
import InfoProfile from "@/components/InfoProfile.vue";
import Created from "@/components/tabs/CreatedProfile.vue";
import Owned from "@/components/tabs/OwnedProfile.vue";
import Collection from "@/components/tabs/CollectionProfile.vue";

const currentTab = ref(Created);
const activeTab: any = ref("Created");

const tabs = {
  Created,
  Owned,
  Collection,
};

const switchTab = (tabName: string) => {
  activeTab.value = tabName;
  currentTab.value = tabs[tabName];
};
</script>

<template>
  <section class="profile">
    <img src="@/assets/images/bg-profile.png" alt="" />
    <InfoProfile />
  </section>
  <section class="tabs container">
    <section class="tabs__container">
      <article
        v-for="(tab, tabName) in tabs"
        :key="tabName"
        class="tabs__item"
        @click="switchTab(tabName)"
        :class="{ active: activeTab === tabName }"
      >
        <p class="tabs__title">
          {{ tabName }}<span class="e-badge e-badge-primary">New</span>
        </p>
      </article>
    </section>
    <Component :is="currentTab"></Component>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__container {
    display: flex;
    justify-content: space-around;
  }
  &__item {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    &:hover {
      border-bottom: 1px solid var(--tertiary-color);
      color: var(--tertiary-color);
      cursor: pointer;
    }
    &.active {
      border-bottom: 1px solid var(--tertiary-color);
      color: var(--tertiary-color);
    }
  }
  &__title {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
    color: var(--tertiary-color);
  }
}
</style>
