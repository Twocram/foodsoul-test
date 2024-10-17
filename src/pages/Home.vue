<template>
  <div class="home-container">
    <div class="home-wrapper">
      <VInput
        v-model="queryValue"
        type="text"
        placeholder="Input your city"
        name="location-input"
      />
      <VLocationList :locations="locationStore.locationList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import VInput from '../components/VInput.vue';
import VLocationList from '../components/VLocationList.vue';
import { getLocations } from '../services/locationService';
import { useLocationStore } from '../store/location';
import { debounce } from '../utils/debounce';

const locationStore = useLocationStore();

const queryValue = ref<string>('');

async function fetchLocations() {
  const { data, error } = await getLocations(queryValue.value);

  if (error) {
    console.log('Error while fetching locations: ', error);
    return;
  }

  locationStore.setLocationList(data);
}

const debouncedFetchLocations = debounce(fetchLocations, 300);

watch(queryValue, () => {
  debouncedFetchLocations();
});
</script>

<style scoped lang="scss">
.home {
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-wrapper {
    max-width: 324px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
