<template>
    <div class="home-container">
      <div class="home-wrapper">
        <VInput  v-model="queryValue" type="text" placeholder="Input your city" name="location-input" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import VInput from "../components/VInput.vue";
import { getLocation } from "../services/locationService";
import { useLocationStore } from "../store/location";

const locationStore = useLocationStore();

const queryValue = ref<string>("");

async function locationHandler() {
  const { data, error } = await getLocation(queryValue.value)

  if (error) {
    console.log('Error while fetching locations: ', error)
    return;
  }

  locationStore.setLocationList(data)
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
