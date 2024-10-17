<template>
    <div class="location-list">
        <VLocationListItem v-for="location in locations" :key="location.place_id" :location="location" />
    </div>
</template>

<script setup lang="ts">
import { NominatimLocation } from '../types/nominatim';
import VLocationListItem from './VLocationListItem.vue';

type Props = {
    locations: NominatimLocation[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.location-list {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
