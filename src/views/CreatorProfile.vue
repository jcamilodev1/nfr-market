<script lang="ts" setup>
import getFile from "@/utils/getFile";
import InfoProfile from "@/components/InfoProfile.vue";
import { ref } from "vue";
import CreatedProfile from "@/components/tabs/CreatedProfile.vue";
import OwnedProfile from "@/components/tabs/OwnedProfile.vue";
import CollectionProfile from "@/components/tabs/CollectionProfile.vue";

const currentTab = ref(null);
const activeTab = ref(null);

const tabNames = {
  tab1: "tab1",
  tab2: "tab2",
  tab3: "tab3",
};

const tabs = ref({
  [tabNames.tab1]: CreatedProfile,
  [tabNames.tab2]: OwnedProfile,
  [tabNames.tab3]: CollectionProfile,
});

const handleTab = (tabName: any) => {
  activeTab.value = tabName;
  currentTab.value = tabs.value[tabName];
};
</script>

<template>
  <section class="profile">
    <img :src="getFile('bg-profile.png')" alt="" />
    <InfoProfile />
  </section>
  <section class="">
    <section class="tabs">
      <article
        class="tabs__item"
        @click="handleTab(tabNames.tab1)"
        :class="{ active: activeTab === tabNames.tab1 }"
      >
        Tab 1
      </article>
      <article
        class="tabs__item"
        @click="handleTab(tabNames.tab2)"
        :class="{ active: activeTab === tabNames.tab2 }"
      >
        Tab 2
      </article>
      <article
        class="tabs__item"
        @click="handleTab(tabNames.tab3)"
        :class="{ active: activeTab === tabNames.tab3 }"
      >
        Tab 3
      </article>
    </section>
    <Component :is="currentTab" />
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
  justify-content: center;
  display: flex;
  &__item {
    padding: 8px;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid var(--tertiary-color);
      color: #fff;
    }
    &.active {
      border-bottom: 1px solid var(--tertiary-color);
      color: #fff;
    }
  }
}
</style>
