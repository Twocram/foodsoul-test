<template>
  <div class="location-list">
    <div class="location-list__title">
      Locations: {{ !locations.length ? 'No locations' : '' }}
    </div>
    <template v-if="locations.length > 0">
      <VLocationListItem
        v-for="location in locations"
        :key="location.place_id"
        :location="location"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { NominatimLocation } from '../../types/nominatim';
import VLocationListItem from '../VLocationListItem/VLocationListItem.vue';

type Props = {
  locations: NominatimLocation[];
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.location-list {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
