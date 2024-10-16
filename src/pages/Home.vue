<template>
    <div class="home-container">
      <div class="home-wrapper">
        <VInput  v-model="queryValue" type="text" placeholder="Input your city" name="location-input" />
      </div>
    </div>
</template>

<script setup lang="ts">
import VInput from "../components/VInput.vue";
import {ref, watchEffect} from "vue";
import type { NominatimLocation } from "../types/nominatim";
import {getLocation} from "../services/locationService";

const queryValue = ref<string>("");

const locations = ref<NominatimLocation[]>([])

async function locationHandler() {
  const { data, error } = await getLocation(queryValue.value)

  if (error) {
    console.log('Error while fetching locations: ', error)
    return;
  }

  if (data.length > 0) {
    locations.value = data;
  }
}

watchEffect(() => {
  locationHandler()
})
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
