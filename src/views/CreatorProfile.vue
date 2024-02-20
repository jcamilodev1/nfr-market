<script lang="ts" setup>
import { ref } from "vue";
import getFile from "@/utils/getFile";
import InfoProfile from "@/components/InfoProfile.vue";
import Created from "@/components/tabs/CreatedProfile.vue";
import Owned from "@/components/tabs/OwnedProfile.vue";
import Collection from "@/components/tabs/CollectionProfile.vue";

const currentTab = ref(Created);
const activeTab: any = ref("Created");

const tabNames: any = {
  Created: "Created",
  Owned: "Owned",
  Collection: "Collection",
};

const tabs = {
  Created: Created,
  Owned: Owned,
  Collection: Collection,
};

const switchTab = (tabName: string) => {
  activeTab.value = tabName;
  currentTab.value = tabs[tabName];
};
</script>

<template>
  <section class="profile">
    <img :src="getFile('bg-profile.png')" alt="" />
    <InfoProfile />
  </section>
  <section class="tabs">
    <section class="tabs__container">
      <article
        class="tabs__item"
        @click="switchTab('Created')"
        :class="{ active: activeTab === 'Created' }"
      >
        Created
      </article>
      <article
        class="tabs__item"
        @click="switchTab('Owned')"
        :class="{ active: activeTab === 'Owned' }"
      >
        Owned
      </article>
      <article
        class="tabs__item"
        @click="switchTab('Collection')"
        :class="{ active: activeTab === 'Collection' }"
      >
        Collection
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
}
</style>
