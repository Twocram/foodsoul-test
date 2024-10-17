<template>
  <div class="location-list-item">
    <div class="location-list-item__id">
      <span>ID:</span> {{ location.place_id }}
    </div>
    <div class="location-list-item__type">
      <span>Type:</span> {{ location.type }}
    </div>
    <div class="location-list-item__name">
      <span>Name:</span> {{ location.display_name }}
    </div>
    <div class="location-list-item__lat">
      <span>Lat: </span> {{ location.lat }}
    </div>
    <div class="location-list-item__lon">
      <span>Lon: </span>{{ location.lon }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NominatimLocation } from '../../types/nominatim';

type Props = {
  location: NominatimLocation;
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.location-list-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  & > div {
    text-align: left;

    & > span {
      font-weight: 500;
      margin-right: 5px;
    }
  }
}
</style>
